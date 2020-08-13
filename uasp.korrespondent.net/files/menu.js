jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,
            {
                def: 'easeOutQuad',
                swing: function (x, t, b, c, d) {
                    //alert(jQuery.easing.default);
                    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
                },
                easeInExpo: function (x, t, b, c, d) {
                    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                },
                easeOutExpo: function (x, t, b, c, d) {
                    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                }
            });

            korr.modules.menu = (function () {
                var self = {};

                self.option = {
                    tabsActivname: '',
                    isEndAnimation: true
                };

                self.methods = {
                    hideDiv: function () {

                        if (!self.option.isEndAnimation)
                            return;

                        $('.menu-search').removeClass('menu-link__active');
                        $('.menu-profile').removeClass('menu-link__active');
                        $('.menu-section .nav__link').removeClass('menu-link__active');
                        $('.nav__link_active_popup').removeClass('nav__link_active_popup');

                        if (self.option.tabsActivname != '')
                            self.methods.animationUp(self.option.tabsActivname);
                        self.option.tabsActivname = '';
                    },

                    activeTabs: function (event, obj) {
                        event = event || window.event;
                        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);

                        if (!self.option.isEndAnimation)
                            return false;


                        if (obj.showId == self.option.tabsActivname) {
                            self.methods.hideDiv();
                            return false;
                        }

                        self.methods.hideDiv();

                        var height = 69;
                        if (obj.showId == 'sitemap')
                            height = 35;

                        $('#' + obj.showId).css("top", $('.' + obj.clickId).offset().top + (($(window).width() > 480) ? height : 46) + "px");

                        $('.nav__link_active').addClass('nav__link_active_popup');

                        if (obj.showId != 'sitemap') {
                            $('.' + obj.clickId).addClass('menu-link__active');
                        } else {
                            $('.' + obj.clickId + ' .nav__link').addClass('menu-link__active');
                        }

                        self.option.tabsActivname = obj.showId;
                        self.methods.animateDown(obj.showId);
                        return true;
                    },

                    animateDown: function (id) {
                        if (self.option.isEndAnimation) {
                            self.option.isEndAnimation = false;
                            $('#' + id).slideDown(300, 'easeInExpo', self.methods.endAnimation);
                        } else
                            setTimeout(self.methods.animateDown, 100, id);
                    },

                    animationUp: function (id) {
                        if (self.option.isEndAnimation) {
                            self.option.isEndAnimation = false;
                            $('#' + id).slideUp(300, 'easeInExpo', self.methods.endAnimation, id);

                        } else
                            setTimeout(self.methods.animationUp, 100);
                    },

                    endAnimation: function () {
                        self.option.isEndAnimation = true;
                    },

                    init: function (obj) {
                        $('#' + obj.showId).click(function (event) {
                            event = event || window.event;
                            event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                        });

                        if (obj.hndler !== undefined)
                            $('.' + obj.clickId).on('click', obj.hndler);
                    },

                    hendlerSearch: function (event) {
                        self.methods.activeTabs(event, self.search);
                        $('#searchInput').focus();
                    },

                    hendlerallSection: function (event) {
                        self.methods.activeTabs(event, self.allSection);
                    },

                    hendlerallHide: function (event) {
                        self.methods.hideDiv();
                        event = event || window.event;
                        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
                        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);
                    }

                };

                self.auth = {
                    showId: 'auth',
                    clickId: 'menu-profile'
                };

                self.user = {
                    showId: 'user',
                    clickId: 'menu-profile'
                };

                self.search = {
                    showId: 'search',
                    clickId: 'menu-search',
                    hndler: self.methods.hendlerSearch
                };

                self.allSection = {
                    showId: 'sitemap',
                    clickId: 'menu-section',
                    hndler: self.methods.hendlerallSection
                };

                return {
                    init: function () {
                        $('html').click(function () {
                            self.methods.hideDiv();
                        });

                        self.methods.init(self.user);
                        self.methods.init(self.auth);
                        self.methods.init(self.search);
                        self.methods.init(self.allSection);

                        $('.popup_close').on('click', self.methods.hendlerallHide);
                    },

                    hide: function (event) {
                        self.methods.hendlerallHide(event);
                    },

                    authShow: function (event) {
                        if (self.methods.activeTabs(event, self.auth))
                            korr.modules.login.authorizationShow(event);
                    },

                    userShow: function (event) {
                        if (korr.modules.profile.sowUser(event))
                            self.methods.activeTabs(event, self.user);
                    },

                    searchShow: function (event) {
                        self.methods.activeTabs(event, self.search);
                    },

                    allSectionShow: function (event) {
                        self.methods.activeTabs(event, self.allSection);
                    }
                };
            })();


$(function () { korr.modules.menu.init(); });

korr.modules.search = (function () {
    var self = {};
    self.options = {
        searchLink: '&stx={search}&roi={rubric}&st={infotype}',
        searchParam: '{search}',
        rubricParam: '{rubric}',
        infoTypeParam: '{infotype}'
    };

    return {
        init: function () {
            $('#search').keydown(function (event) {
                event = event || window.event;
                if (event.which == 13) {
                    event.preventDefault();
                    $('.button_search').trigger('click');
                }
            });
        },
        search: function (event) {
            event = event || window.event;
            event.preventDefault ? event.preventDefault() : (event.returnValue = false);
            var val = $('#searchInput').val();
            if (val.length > 0)
                window.location = Domain.SearchUrl + self.options.searchLink.
                                                                    replace(self.options.searchParam, encodeURIComponent(val))
                                                                    .replace(self.options.rubricParam, Domain.RubricId)
                                                                    .replace(self.options.infoTypeParam, Domain.InfoTypeId);
        }
    };
})();


$(function () { korr.modules.search.init(); });