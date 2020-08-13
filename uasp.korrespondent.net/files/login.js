korr.modules.login = (function () {
    var self = {};

    self.options = {
        prefixId: '',
        isClose: '',
        referrer: null,
        loginUrl: '/aut/user.hnd',
        errorUrl: '/er.hnd',
        resursIsLoad: false,
        resursUrlru: '/js/lang/login_ru.js',
        resursUrlua: '/js/lang/login_ua.js',
        freeEmailUrl: '/aut/validate/email.hnd',
        captchaUrl: '/captcha.data.hnd',
        errorList: new Array(),
        errorLoadResurs: false,
        messages: ['Ошибка',
                   'Авторизация временно недоступна. '
        ],
        validMessage: [],
        IsLoadVk: false
    };

    self.captcha = {
        host: '',
        name: '',
        id: '',
        t: '',
        tickets: ''
    };

    self.google = {
        handlerUrl: "/aut/g/login.hnd"
    };

    self.twitter = {
        handlerUrl: "/aut/twitter.hnd"
    };

    self.methods = {
        init: function () {
        },

        loadResurs: function () {
            $.jsonp({
                url: Domain.Auth + ((Domain.Langid == 1) ? self.options.resursUrlua : self.options.resursUrlru),
                data: {},
                cache: true,
                timeout: 90000, // 90 сек по умолчанию 10 сек
                success: function (data) {
                    self.options.validMessage = data.validMessage;
                    self.authorization.datalanguage = data.authorization;
                    self.register.datalanguage = data.register;
                    self.register2.datalanguage = data.registerOk;
                    self.recovery.datalanguage = data.recovery1;
                    self.recovery2.datalanguage = data.recovery2;
                    self.options.messages = data.messages;
                    self.options.resursIsLoad = true;

                    if (self.options.isClose != '') {
                        self.authorization.datalanguage.IsNew = 1;
                        self.register.datalanguage.IsNew = 1;
                        self.register2.datalanguage.IsNew = 1;
                        self.recovery.datalanguage.IsNew = 1;
                        self.recovery2.datalanguage.IsNew = 1;
                    }

                },
                error: function (jqxhr, textStatus, error) {
                    self.options.errorLoadResurs = true;
                    self.methods.errorNotify("File login.js korr.modules.login.self.methods.loadResurs -> ", jqxhr, textStatus, error);
                }
            });
        },

        loadCapcha: function () {
            $.jsonp({
                url: self.options.captchaUrl,
                timeout: 90000, // 90 сек по умолчанию 10 сек
                data: { "id": self.captcha.id, "t": self.captcha.t },
                callbackParameter: 'callback',
                success: function (data) {
                    self.captcha.host = data.host;
                    self.captcha.name = data.name;
                    self.captcha.id = data.id;
                    self.captcha.t = data.t;
                    self.captcha.tickets = data.ti;

                    $('.popup__item-symbols img').replaceWith('<img width="191" height="60" src="' + self.captcha.host + self.captcha.name + '?id=' + self.captcha.id + '&t=' + self.captcha.t + '&ti=' + self.captcha.tickets + '" />');

                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File login.js korr.modules.login.self.methods.loadCapcha -> ", jqxhr, textStatus, error);
                }
            });
        },

        loadTemplate: function (obj) {
            $.jsonp({
                url: Domain.Auth + obj.templateUrl,
                data: {},
                cache: true,
                timeout: 90000, // 90 сек по умолчанию 10 сек
                success: function (data) {
                    $.template(obj.templateName, data.data);
                    obj.templateIsLoad = true;
                    self.methods.showTemplate(obj);
                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File login.js korr.modules.login.self.methods.loadTemplate -> ", jqxhr, textStatus, error, true);
                }
            });
        },

        showTemplate: function (obj) {
            $('#auth').html("");
            if (self.options.resursIsLoad)
                $.tmpl(obj.templateName, obj.datalanguage).appendTo('#auth');
            else {
                if (self.options.errorLoadResurs)
                    self.methods.errorNotify("File login.js korr.modules.login.showTemplate -> " + obj.templateName, null, null, null, true);
                else
                    setTimeout(self.methods.showTemplate(obj), 3000);
            }

        },

        show: function (obj) {
            if (obj.templateIsLoad) {
                self.methods.showTemplate(obj);
                //$('#' + obj.masId[0]).focus();
            } else {
                self.methods.loadTemplate(obj);
            }
        },

        errorNotify: function (message, jqxhr, textStatus, errorThrown, isShowError) {
            // jqxhr -  объект который делал запрос
            // textStatus - может быть  null, timeout, error, notmodified, parsererror
            // errorThrown - необязательный объект «исключения»
            if (jqxhr != null)
                message += "jqxhr: " + JSON.stringify(jqxhr) + " textStatus: " + textStatus;

            if (errorThrown !== undefined && errorThrown != null)
                message += " errorThrown: " + JSON.stringify(errorThrown);

            if (isShowError == true) {
                var oldError = '';

                // заберем все предыдущии ошибки которые непоказывали
                for (; self.options.errorList.length > 0; ) {
                    oldError += self.options.errorList.pop();
                }

                $.jsonp({
                    url: Domain.Auth + self.options.errorUrl,
                    data: { "txt": oldError + " \n" + message }
                });

                UserNotification(self.options.messages[0], self.options.messages[1]);

            } else {
                self.options.errorList.push(message + " \n");
            }
        },

        IsValid: function (obj) {
            for (var i = 0; i < obj.masId.length; i++) {
                for (var j = 0; j < obj.masValid[obj.masId[i]].length; j++) {
                    if (!obj.masValid[obj.masId[i]][j](self.options.prefixId + obj.masId[i]))
                        return false;
                }
            }
            return true;
        },

        IsEmptyValue: function (id) {
            var $obj = $('#' + id);
            $obj.removeClass("popup__input_error");
            $obj.parent().find('.popup__text_error').remove();

            var value = $obj.val();
            if ($.trim(value).length < 1) {
                $obj.addClass("popup__input_error");
                $obj.after('<div class="popup__text_error">' + self.options.validMessage[0] + '</div>');
                return false;
            }
            return true;
        },

        IsValidEmail: function (id) {
            var $obj = $('#' + id);
            $obj.removeClass("popup__input_error");
            $obj.parent().find('.popup__text_error').remove();

            var value = $obj.val();
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(value)) {
                $obj.addClass("popup__input_error");
                $obj.after('<div class="popup__text_error">' + self.options.validMessage[1] + '</div>');
                return false;
            }
            return true;
        },

        IsFreeEmail: function (id) {
            var $obj = $('#' + id);
            $obj.removeClass("popup__input_error");
            $obj.parent().find('.popup__text_error').remove();

            var value = $obj.val();
            $.jsonp({
                url: Domain.Auth + self.options.freeEmailUrl,
                data: { "email": value },
                callbackParameter: 'callback',
                success: function (data) {
                    if (data == 0) {
                        $obj.addClass("popup__input_error");
                        $obj.after('<div class="popup__text_error">' + self.options.validMessage[2] + '</div>');
                        $('.popup__submit').attr("disabled", true);
                        self.register.isFreeEmail = false;
                    }
                    if (self.register.isSubscribe)
                        $('.popup__submit').removeAttr("disabled");
                    self.register.isFreeEmail = true;
                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File login.js korr.modules.login.self.methods.IsFreeEmail -> ", jqxhr, textStatus, error, true);
                }
            });
            return true;
        },

        IsLengthValue: function (id, length) {
            var $obj = $('#' + id);
            $obj.removeClass("popup__input_error");
            $obj.parent().find('.popup__text_error').remove();

            var value = $obj.val();
            if ($.trim(value).length < length) {
                $obj.addClass("popup__input_error");
                $obj.after('<div class="popup__text_error">' + self.options.validMessage[3] + '</div>');
                return false;
            }
            return true;
        },

        IsRepetitionPasw: function (id) {
            var $obj = $('#' + id);
            $obj.removeClass("popup__input_error");
            $obj.parent().find('.popup__text_error').remove();

            var id1 = id.substring(0, id.length - 1) + '1'; // id элементов которые сравниваем должны отличатся последним символом
            var value1 = $('#' + id1).val();
            var value2 = $obj.val();
            if (value1 != value2) {
                $obj.addClass("popup__input_error");
                $obj.after('<div class="popup__text_error">' + self.options.validMessage[4] + '</div>');
                return false;
            }
            return true;
        },

        login: function () {
            var content = '<a class="menu-profile__button" onclick="korr.modules.menu.authShow(event);" href="javascript:void(0)"><b>Авторизация</b><span></span></a>';
            $('.menu-profile').html(content);
        },

        nextFocus: function (step, event, obj) {
            event = event || window.event;

            if (event.keyCode == 13) {
                $('#' + self.options.prefixId + obj.masId[step]).focus();
            }
        },

        validate: function (obj, id) {
            for (var i = 0; i < obj.masValid[id].length; i++) {
                if (!obj.masValid[id][i](self.options.prefixId + id, obj.masValidLeng[id]))
                    return false;
            }
            return true;
        }

    };

    self.register = {
        templateUrl: '/js/tpl/register.mini.js',
        hendlerUrl: '/aut/create/user.hnd',
        datalanguage: '',
        templateName: 'register',
        templateIsLoad: false,
        isSubscribe: false,
        isContract: false,
        isFreeEmail: false,
        masId: ['email', 'lastName', 'firstName', 'pasw1', 'pasw2'],
        masValid: {
            "email": [self.methods.IsEmptyValue, self.methods.IsValidEmail, self.methods.IsFreeEmail],
            "pasw1": [self.methods.IsEmptyValue, self.methods.IsLengthValue],
            "pasw2": [self.methods.IsEmptyValue, self.methods.IsLengthValue, self.methods.IsRepetitionPasw],
            "lastName": [self.methods.IsEmptyValue],
            "firstName": [self.methods.IsEmptyValue]
        },
        masValidLeng: {
            "pasw1": 5,
            "pasw2": 5
        }
    };

    self.register2 = {
        templateUrl: '/js/tpl/recovery2.mini.js',
        datalanguage: '',
        templateName: 'register2',
        templateIsLoad: false
    };

    self.recovery = {
        templateUrl: '/js/tpl/recovery1.mini.js',
        hendlerUrl: '/aut/recovery/step1.hnd',
        datalanguage: '',
        templateName: 'recovery',
        templateIsLoad: false,
        masId: ['email'],
        masValid: {
            "email": [self.methods.IsEmptyValue, self.methods.IsValidEmail]
        }
    };

    self.recovery2 = {
        templateUrl: '/js/tpl/recovery2.mini.js',
        datalanguage: '',
        templateName: 'recovery2',
        templateIsLoad: false
    };

    self.authorization = {
        templateUrl: '/js/tpl/authorization.mini.js?v=2',
        hendlerUrl: '/aut/login.hnd',
        datalanguage: '',
        templateName: 'authorization',
        templateIsLoad: false,
        isRemember: false,
        masId: ['email', 'password', 'autorizsubmit'],
        masValid: {
            "email": [self.methods.IsEmptyValue, self.methods.IsValidEmail],
            "password": [self.methods.IsEmptyValue, self.methods.IsLengthValue],
            "autorizsubmit": []
        },
        masValidLeng: {
            "password": 5
        }
    };

    return {
        init: function () {
            self.methods.loadResurs();
            if (self.options.isClose == '')
                self.methods.login();
        },

        authorizationShow: function (event) {
            if (event != undefined) {
                event = event || window.event;
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            }
            $('#auth').css("height", "auto");

            self.methods.show(self.authorization);

        },

        registerShow: function (event) {
            if (event != undefined) {
                event = event || window.event;
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            }
            self.methods.show(self.register);
            self.methods.loadCapcha();
        },

        recovery1Show: function (event) {
            if (event != undefined) {
                event = event || window.event;
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
            }
            self.methods.show(self.recovery);
        },

        register: function () {
            if (self.register.isContract && self.methods.IsValid(self.register) && self.register.isFreeEmail) {

                $.jsonp({
                    url: Domain.Auth + self.register.hendlerUrl,
                    data: {
                        "email": $('#' + self.options.prefixId + 'email').val(),
                        "password": $('#' + self.options.prefixId + 'pasw1').val(),
                        "password2": $('#' + self.options.prefixId + 'pasw2').val(),
                        "firstName": $('#' + self.options.prefixId + 'firstName').val(),
                        "lastName": $('#' + self.options.prefixId + 'lastName').val(),
                        "issubscribe": self.register.isSubscribe,
                        "langid": Domain.Langid,
                        "recaptcha": grecaptcha.getResponse()
                /*"captchaId": self.captcha.id,
                "captcha": $('#' + self.options.prefixId + 'captcha').val()*/
            },
                    timeout: 90000, // 90 сек по умолчанию 10 сек
                    callbackParameter: 'callback',
                    success: function (data) {
                        if (data == 1) {
                            self.methods.show(self.register2);
                        }
                        /*if (data == 2) {
                            $('#captcha').addClass("popup__input_error");
                            $('#captcha').after('<div class="popup__text_error">' + self.options.validMessage[8] + '</div>');
                            self.methods.loadCapcha();
                        }*/
                        if (data == 4) {
                            $('#lastName').addClass("popup__input_error");
                            $('#lastName').after('<div class="popup__text_error">' + self.options.validMessage[9] + '</div>');
                        }
                        if (data == 3) {
                            $('#firstName').addClass("popup__input_error");
                            $('#firstName').after('<div class="popup__text_error">' + self.options.validMessage[9] + '</div>');
                        }
                        if (data == 0)
                            self.methods.errorNotify();
                    },
                    error: function (jqxhr, textStatus, error) {
                        self.methods.errorNotify("File login.js korr.modules.login.register -> ", jqxhr, textStatus, error, true);
                    }
                });
            }
        },

        registerNext: function (step, event) {
            self.methods.nextFocus(step, event, self.register);
        },

        registerValidate: function (id) {
            return self.methods.validate(self.register, id);
        },

        registerCapcha: function () {
            //self.methods.loadCapcha();
        },

        registerCheckDistribution: function () {
            self.register.isSubscribe = $('#' + self.options.prefixId + 'c1').prop("checked");
        },

        registerCheckContract: function () {
            self.register.isContract = $('#' + self.options.prefixId + 'c3').prop("checked");

            if (self.register.isContract)
                $('.popup__submit').removeAttr("disabled");
            else
                $('.popup__submit').attr("disabled", true);
        },

        registerClickCaptchaUpdate: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            self.methods.loadCapcha();
        },

        recovery: function () {
            if (self.methods.IsValid(self.recovery)) {
                $('.popup__submit').attr("disabled", true);
                $('#email').removeClass("popup__input_error");
                $('#email').parent().find('.popup__text_error').remove();
                $.jsonp({
                    url: Domain.Auth + self.recovery.hendlerUrl,
                    data: { "email": $('#email').val(), "langid": Domain.Langid },
                    timeout: 90000, // 90 сек по умолчанию 10 сек
                    callbackParameter: 'callback',
                    success: function (data) {
                        if (data == 1) {
                            self.methods.show(self.recovery2);
                        } else {
                            $('#email').addClass("popup__input_error");
                            $('#email').after('<div class="popup__text_error">' + self.options.validMessage[5] + '</div>');
                            $('.popup__submit').removeAttr("disabled");
                        }
                    },
                    error: function (jqxhr, textStatus, error) {
                        self.methods.errorNotify("File login.js korr.modules.login.recovery -> ", jqxhr, textStatus, error, true);
                    }
                });
            }
        },

        recoveryValidate: function (id) {
            return self.methods.validate(self.recovery, id);
        },

        authorization: function () {
            if (self.methods.IsValid(self.authorization)) {
                var $email = $('#' + self.options.prefixId + self.authorization.masId[0]);
                var $passw = $('#' + self.options.prefixId + self.authorization.masId[1]);
                $('.popup__submit').attr("disabled", true);
                $email.removeClass("popup__input_error");
                $email.parent().find('.popup__text_error').remove();
                $.jsonp({
                    url: Domain.Auth + self.authorization.hendlerUrl,
                    timeout: 90000, // 90 сек по умолчанию 10 сек
                    data: { "login": $email.val(), "password": $passw.val(), "isremember": $('#' + self.options.prefixId + 'c1').prop("checked"), "langid": Domain.Langid },
                    callbackParameter: 'callback',
                    success: function (data) {

                        if (data == 1) {
                            if (self.options.referrer != null)
                                document.location.href = self.options.referrer;
                            else
                                location.reload();
                        } else {
                            $('.popup__submit').removeAttr("disabled");
                            $email.addClass("popup__input_error");
                        }

                        if (data == 0) {
                            $email.after('<div class="popup__text_error">' + self.options.validMessage[6] + '</div>');
                        }

                        if (data == 2) {
                            $email.after('<div class="popup__text_error">' + self.options.validMessage[7] + '</div>');
                        }
                    },
                    error: function (jqxhr, textStatus, error) {
                        self.methods.errorNotify("File login.js korr.modules.login.authorization -> ", jqxhr, textStatus, error, true);
                    }
                });
            }
        },

        authorizationNext: function (step, event) {
            self.methods.nextFocus(step, event, self.authorization);
        },

        authorizationValidate: function (id) {
            return self.methods.validate(self.authorization, id);
        },

        changeprefix: function (prefixId, isClose, referrer) {
            self.options.prefixId = prefixId;
            self.options.isClose = isClose;
            if (referrer !== '')
                self.options.referrer = referrer;
        },

        authorizationFB: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            window.open('https://www.facebook.com/dialog/oauth?scope=email,publish_stream,user_birthday&client_id=' + Domain.FBid + '&redirect_uri=' + (Domain.Auth.indexOf("http:") > -1 ? '' : 'http:') + Domain.Auth + '/aut/fb/login.hnd&response_type=code&state=' + btoa(location.href), "FBWnd", "width=1011,height=672,resizable=yes,scrollbars=yes");
        },

        isLoadVKAuth: function () {
            if (typeof VK != 'undefined' && self.options.IsLoadVk) {
                self.options.IsLoadVk = false;
                VK.init({ apiId: Domain.VKAppId });
                // вызываем авторизацию
                korr.modules.login.authorizationVK();
            } else {
                setTimeout(function () { korr.modules.login.isLoadVKAuth(); }, 300);
            }
        },

        loadVKAuth: function () {
            if (!self.options.IsLoadVk) {
                self.options.IsLoadVk = true;
                var e = document.createElement("script");
                e.src = '//vk.com/js/api/openapi.js?115';
                e.type = "text/javascript";
                document.getElementsByTagName("head")[0].appendChild(e);
                // ждем загрузки
                korr.modules.login.isLoadVKAuth();
            }
        },

        authorizationVK: function (event) {
            if (typeof event != 'undefined') {
                event = event || window.event;
                event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            }

            if (typeof VK == 'undefined') {
                korr.modules.login.loadVKAuth();
            } else {
                VK.Auth.login(function (response) {
                    if (response.session) {
                        VK.Api.call('getProfiles', { uids: response.session.mid, fields: "uid, first_name, last_name, photo_rec, photo_big, nickname, bdate" }, function (r) {
                            if (r.response && r.response.length > 0) {
                                var dt = new Date();
                                $.jsonp({
                                    url: Domain.Auth + '/aut/vk/login.hnd',
                                    data: {
                                        'id': r.response[0].uid,
                                        'name': encodeURIComponent(r.response[0].first_name + ' ' + r.response[0].last_name),
                                        'photo': r.response[0].photo_rec,
                                        'photobig': r.response[0].photo_big,
                                        'bdate': r.response[0].bdate,
                                        'nick': r.response[0].nickname,
                                        'r': ($("#login-popup :checkbox:checked").length > 0 ? '1' : '0'),
                                        'd': dt.getTime()
                                    },
                                    success: function (data) {
                                        location.reload(true);
                                    },
                                    error: function (jqxhr, textStatus, error) {
                                        self.methods.errorNotify("File login.js korr.modules.login.authorizationVK -> ", jqxhr, textStatus, error, true);
                                    }
                                });

                            }
                        });
                    }
                });

            }
        },

        authorizationTW: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            window.open(Domain.Auth + self.twitter.handlerUrl + '?href=' + location.href, "TwWnd", "width=563,height=570, resizable=yes,scrollbars=yes");
        },

        authorizationG: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);

            window.open('https://accounts.google.com/o/oauth2/auth?scope=email%20profile&state=' + btoa(location.href) + '&client_id=' + Domain.GClientId + '&redirect_uri=' + (Domain.Auth.indexOf("http:") > -1 ? '' : 'http:') + Domain.Auth + self.google.handlerUrl + '&response_type=code&approval_prompt=force', "Auth", 'width=800, height=600');
            return false;
        }
    };
})();

korr.modules.login.init();