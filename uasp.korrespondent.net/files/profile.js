korr.modules.profile = (function () {
    var self = {};

    self.options = {
        loginUrl: '/aut/user.hnd',
        logoutUrl: '/aut/logout.hnd',
        avtorizationUrl: '/js/login.js?v=2',
        adminPanelUrl: '/aut/admin.hnd',
        errorUrl: '/er.hnd',
        resursUrlru: '/js/lang/profile_ru.js',
        resursUrlua: '/js/lang/profile_ua.js',
        templateUrl: '/js/tpl/user.mini.js',
        resursIsLoad: false,
        dataUser: '',
        errorList: new Array(),
        messages: ['Ошибка',
                   'Авторизация временно недоступна.'
        ]
    };
    
    self.methods = {
        errorNotify: function (message, jqxhr, textStatus, errorThrown, isShowError) {
            // jqxhr -  объект который делал запрос
            // textStatus - может быть  null, timeout, error, notmodified, parsererror
            // errorThrown - необязательный объект «исключения»

            if (jqxhr != null)
                message += "jqxhr: " + JSON.stringify(jqxhr) + " textStatus: " + textStatus;

            if (errorThrown !== undefined && errorThrown != null )
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
        
        loadTemplate: function() {
            $.when($.jsonp({ url: Domain.Auth + ((Domain.Langid == 1) ? self.options.resursUrlua : self.options.resursUrlru), timeout: 90000, cache: true }),
                   $.jsonp({ url: Domain.Auth + self.options.templateUrl, timeout: 90000, cache: true }))
            .done(function (res, tmpl) {
                self.options.resursIsLoad = true;

                self.options.messages = res[0].messages;

                $.template("user", tmpl[0].data);

                var obj = res[0].user;
                obj.user = self.options.dataUser;
                obj.pageId = Domain.PageId;
                $.tmpl("user", obj).appendTo('#user');
            })
            .fail(function (jqxhr, textStatus, error) {
                self.methods.errorNotify("File profile.js korr.modules.profile.self.methods.loadTemplate -> ", jqxhr, textStatus, error, false);
            });
        },

        login: function () {
           $.jsonp({
                url: Domain.Auth + self.options.loginUrl,
                data: {},
                timeout: 90000, // 90 сек по умолчанию 10 сек
                success: function(data) {
                    if (data != 0) {
                        self.options.dataUser = data;
                        var content = '<a id="user_div" class="menu-user__button" onclick="korr.modules.menu.userShow(event);" href="javascript:void(0)"><b>' + data.UserName + '</b><img width="30" height="30" src="' + data.AvatarUrl + '"><span></span></a>';
                        $('.menu-profile').html(content);

                        self.methods.loadTemplate();
                        if (data.IsAdmin) {
                            self.methods.loadAdminPanel();
                        }
                    } else {
                        var e = document.createElement("script");
                        e.src = Domain.Auth + self.options.avtorizationUrl;
                        e.type = "text/javascript";
                        document.getElementsByTagName("head")[0].appendChild(e);
                    }

                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File login.js korr.modules.login.self.methods.login -> ", jqxhr, textStatus, error, false);
                }
            });
        },

        loadAdminPanel: function () {
            $.jsonp({
                url: Domain.Auth + self.options.adminPanelUrl,
                data: { "pageId": Domain.PageId, "infoLangId": Domain.InfoLangId, "typeId": Domain.InfoTypeId, "rubricId": Domain.RubricId, "themeId": Domain.ThemeId },
                callbackParameter: 'callback',
                success: function (data) {
                    if (data != 0) {
                        $('#adm').html(data.value.replace(/'/g, '"'));
                    }
                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File profile.js korr.modules.profile.self.methods.loadAdminPanel -> ", jqxhr, textStatus, error);
                }
            });
        },

        logout: function () {
            $.jsonp({
                url: Domain.Auth + self.options.logoutUrl,
                timeout: 90000, // 90 сек по умолчанию 10 сек
                data: {},
                callbackParameter: 'callback',
                success: function (data) {
                    location.reload();
                },
                error: function (jqxhr, textStatus, error) {
                    self.methods.errorNotify("File profile.js korr.modules.profile.self.methods.logout -> ", jqxhr, textStatus, error, true);
                }
            });
        }

    };
    return {
        init: function () {
            self.methods.login();
        },

        logout: function () {
            self.methods.logout();
        },

        sowUser: function () {
            if (!self.options.resursIsLoad) {
                self.methods.errorNotify("File profile.js korr.modules.profile.sowUser -> ", null, null, null, true);
                return false;
            }
            return true;
        }
    };
})();
    
$(function () { korr.modules.profile.init(); });