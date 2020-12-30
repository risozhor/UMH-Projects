Share = {
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]='     + encodeURIComponent(ptitle);
        url += '&p[summary]='   + encodeURIComponent(text);
        url += '&p[url]='       + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function(purl, ptitle) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(ptitle);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    google: function(purl) {
        url  = 'https://plus.google.com/share?';
        url += 'url='          + encodeURIComponent(purl);
        Share.popup(url)
    },
    popup: function(url) {
        window.open(url, 'sharer', 'toolbar=0,status=0,width=600,height=600');
    }
};
(function(window, $) {
    var getOrApply = function(value, context) {
        if($.isFunction(value)) {
            return value.apply(context, $.makeArray(arguments).slice(2));
        }
        return value;
    };
    var IMG_SRC_REGEX = /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i;
    var URL_PARAMS_REGEX = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g;
    var MEASURES = {
        "G": 1000000000,
        "M": 1000000,
        "K": 1000
    };
    var shares = {
        facebook: {
            label: "Like",
            logo: "fa fa-facebook",
            shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
            countUrl: "https://graph.facebook.com/?id={url}",
            getCount: function(data) {
                return data.share && data.share.share_count || 0;
            }
        },
        twitter: {
            label: "Tweet",
            logo: "fa fa-twitter",
            shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
            countUrl: ""
        },
        googleplus: {
            label: "+1",
            logo: "fa fa-google",
            shareUrl: "https://plus.google.com/share?url={url}",
            countUrl: ""
        },
        vkontakte: {
            label: "Like",
            logo: "fa fa-vk",
            shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
            countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
            getCount: function(data) {
                return parseInt(data.slice(15, -2).split(', ')[1]);
            }
        }
    };
    function Socials(share) {
        this.share = null;
        if(shares[share]){
            this.share = shares[share];
        }
    }
    Socials.prototype = {
        renderShareCount: function(idElem) {
            if (!this.share) {
                return;
            }
            var $count = $("#" + idElem);
            var url_share = $count.attr('data-href');
            this._loadCount(this.share, url_share).done($.proxy(function(count) {
                if(count) {
                    $count.text(count);
                }
            }, this));
        },
        _loadCount: function(share, url_share) {
            if (!this.share) {return;}
            var deferred = $.Deferred();
            var countUrl = this._getCountUrl(this.share, url_share);
            if(!countUrl) {
                return deferred.resolve(0).promise();
            }
            var handleSuccess = $.proxy(function(response) {
                deferred.resolve(this._getCountValue(response, share));
            }, this);
            $.getJSON(countUrl).done(handleSuccess)
                .fail(function() {
                    $.get(countUrl).done(handleSuccess)
                        .fail(function() {deferred.resolve(0);});
                });
            return deferred.promise();
        },
        _getCountUrl: function(share, url_share) {
            var countUrl = getOrApply(share.countUrl, share);
            return this._formatShareUrl(countUrl, share, url_share);
        },
        _getCountValue: function(response, share) {
            var count = ($.isFunction(share.getCount) ? share.getCount(response) : response) || 0;
            return (typeof count === "string") ? count : this._formatNumber(count);
        },
        _formatNumber: function(number) {
            $.each(MEASURES, function(letter, value) {
                if(number >= value) {
                    number = parseFloat((number / value).toFixed(2)) + letter;
                    return false;
                }
            });
            return number;
        },
        _formatShareUrl: function(url, share, url_share) {
            return url.replace(URL_PARAMS_REGEX, function(match, key, field) {
                return url_share ? (key || "") + window.encodeURIComponent(url_share) : "";
            });
        }
    };
    window.jsSocials = {Socials: Socials};
}(window, jQuery));
var Social = new window.jsSocials.Socials('facebook');
Social.renderShareCount('count_share_facebook');
$(window).on('load', function () {
    if ($('#count_share_facebook').text().length < 1){
        $('#count_share_facebook.like-counter').remove();
    }
});