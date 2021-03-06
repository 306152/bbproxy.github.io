$(document).ready(function() {
    $(".whois-show").click(function() {
        var link = $(this);
        var host = link.data("host");
        var additional_req = '';
        if (host) {
            additional_req = '?host=' + host;
        }
        $('#whoishide_popup .popup').css('top', $(document).scrollTop() + 120);
        show_whois('#whois-container', '#whois-response', link.data("url") + additional_req);
    });
    var bugform = $("#bugform_popup");
    $("#bugform_show").click(function(event) {
        bugform.find(".skip").hide();
        bugform.find(".popup").css('top', $(document).scrollTop() + 350);
        bugform.find(".new").show();
    });
    bugform.find("form").submit(function(event) {
        bugform.find(".sending").show();
        bugform.find(".new").hide();
        var email = bugform.find("input[name=email]").val();
        var msg = bugform.find("form textarea").val();
        $.post(encodeURI(bugform.find("form").attr('action')), {
            email: email,
            msg: msg,
            url: window.location.href
        }).always(function(response) {
            if (response === "ok") {
                bugform.find("form textarea").val('');
                bugform.find(".complete").show();
            } else {
                bugform.find(".error").show();
                bugform.find(".new").show();
            }
            bugform.find(".sending").hide();
        });
        event.preventDefault();
    });
});
(function($) {
    $.fn.reveal = function() {
        var args = Array.prototype.slice.call(arguments);
        return this.each(function() {
            var img = $(this)
              , src = img.data("src");
            src && img.attr("src", src).load(function() {
                img[args[0] || "show"].apply(img, args.splice(1));
            });
        });
    }
}(jQuery));
$(document).ready(function() {
    if ($('.popup').size()) {
        $('a[rel^="popup"]').click(function(e) {
            var _popup = $('#' + $(this).attr('rel').replace(/\[|\]|^popup/g, ""));
            _popup.fadeIn(250);
            var _color = $(this).parents('li').css('background-color');
            _top = _popup.children('.popup').height() / 2;
            if (_popup.attr('id') != 'hide_control_popup') {
                _popup.children('.popup').css({
                    'margin-top': -_top
                });
            }
            e.stopPropagation();
            e.preventDefault();
        });
        $('.popup-holder .bg, .popup-holder .popup .btn-close, .popup .btn-apply').click(function(e) {
            $(this).closest('.popup-holder').fadeOut(250);
            e.preventDefault();
        });
    }
    ;
});
function _vpn_tabs() {}
$(function init() {
    $('dl.myip-list dd').each(function(i) {
        var _pH = $(this).prev().height();
        $(this).css('min-height', _pH);
    });
    try {
        $('#country-more').hide();
    } catch (e) {}
    ;$('body').popup().popup({
        "opener": ".btn-download-mac",
        "popup_holder": "#mac"
    });
    (function gallery() {
        $('.foregn-gallery').galleryScroll();
        $('.block-gallery').galleryScroll({
            btPrev: 'a.prev',
            btNext: 'a.next',
            step: 1
        });
        $('.flag-gallery').galleryScroll({
            holderList: '.galley-holder',
            btPrev: 'a.prev',
            btNext: 'a.next',
            step: 1
        });
    })();
    (function tab() {
        $('.myip-tabset').tabset({
            "style": {
                "forActive": {
                    "position": "static",
                    "left": 0
                },
                "forInActive": {
                    "position": "absolute",
                    "left": '-9999px'
                }
            }
        });
        $('.promo-tabset2').tabset({
            "tab": ".tab",
            "tab_control": ".tab-control",
            "tab_control_parent": ">div",
            "tab_control_item": ">li",
            "a_class": "active",
            "t_a_class": "active",
            "style": {
                "forActive": {
                    "position": "static",
                    "left": 0
                },
                "forInActive": {
                    "position": "absolute",
                    "left": '-9999px'
                }
            }
        });
        $('.promo-tabset').tabset({
            "tab": ".tab",
            "tab_control": ".tab-control",
            "tab_control_parent": ">.tab-control-holder",
            "tab_control_item": ">li",
            "a_class": "active",
            "t_a_class": "active",
            "style": {
                "forActive": {
                    "position": "static",
                    "left": 0
                },
                "forInActive": {
                    "position": "absolute",
                    "left": '-9999px'
                }
            }
        });
    })();
    $('.btn-tunes').click(function() {
        var _this = $(this).not('.tunes-block');
        if (!_this.hasClass('active')) {
            _this.addClass('active');
            $('.tunes-block').show();
        } else {
            _this.removeClass('active');
            $('.tunes-block').hide();
        }
    })
    $('.expand-block .heading').not('.expand-block.non-ex .heading').not('.expand-bloack .heading .btn-interactive').click(function() {
        var _this = $(this);
        if (_this.parent().hasClass('closed')) {
            _this.parent().find('.item').slideDown(500, function() {
                _this.parent().removeClass('closed')
            });
        } else {
            _this.parent().find('.item').slideUp(500, function() {
                _this.parent().addClass('closed')
            });
        }
    })
    $('.proxy-form .toggle input').on('change.customForms', function() {
        if (!$(this).is(':checked')) {
            $(this).closest('.proxy-form').addClass('on');
        } else {
            $(this).closest('.proxy-form').removeClass('on');
        }
    })
});
$.fn.popup = function(o) {
    var o = $.extend({
        "opener": ".btn-download-win",
        "popup_holder": "#win",
        "popup": ".popup",
        "close_btn": ".close",
        "close": function() {},
        "beforeOpen": function() {}
    }, o);
    return this.each(function() {
        var container = $(this)
          , opener = $(o.opener, container)
          , popup_holder = $(o.popup_holder, container)
          , popup = $(o.popup, popup_holder)
          , close = $(o.close_btn, popup)
          , bg = $('.bg', popup_holder);
        popup.css('margin', 0);
        opener.click(function(e) {
            o.beforeOpen.apply(this, [popup_holder]);
            popup_holder.fadeIn(400);
            alignPopup();
            bgResize();
            e.preventDefault();
        });
        function alignPopup() {
            if ((($(window).height() / 2) - (popup.outerHeight() / 2)) + $(window).scrollTop() < 0) {
                popup.css({
                    'top': 0,
                    'left': (($(window).width() - popup.outerWidth()) / 2) + $(window).scrollLeft()
                });
                return false;
            }
            popup.css({
                'top': (($(window).height() - popup.outerHeight()) / 2) + $(window).scrollTop(),
                'left': (($(window).width() - popup.outerWidth()) / 2) + $(window).scrollLeft()
            });
        }
        function bgResize() {
            var _w = $(window).width()
              , _h = $(document).height();
            bg.css({
                "height": _h,
                "width": _w + $(window).scrollLeft()
            });
        }
        $(window).resize(function() {
            if (popup_holder.is(":visible")) {
                bgResize();
                alignPopup();
            }
        });
        if (popup_holder.is(":visible")) {
            bgResize();
            alignPopup();
        }
        close.add(bg).click(function(e) {
            var closeEl = this;
            popup_holder.fadeOut(400, function() {
                o.close.apply(closeEl, [popup_holder]);
            });
            e.preventDefault();
        });
        $('body').keydown(function(e) {
            if (e.keyCode == '27') {
                popup_holder.fadeOut(400);
            }
        })
    });
}
$.fn.tabset = function(o) {
    var o = $.extend({
        "tab": ">.tab",
        "tab_control": ">ul",
        "tab_control_parent": ">div",
        "tab_control_item": ">li",
        "a_class": "active",
        "t_a_class": "active",
        "style": {
            "forActive": {
                "display": "block"
            },
            "forInActive": {
                "display": "none"
            }
        }
    }, o);
    return this.each(function() {
        var tabset = $(this)
          , tab = $(o.tab, tabset)
          , ctrl_pnt = $(o.tab_control_parent, tabset)
          , ctrl = $(o.tab_control, tabset).size() ? $(o.tab_control, tabset) : $(o.tab_control, ctrl_pnt)
          , ctrl_item = $(o.tab_control_item, ctrl)
          , a_class = {
            "name": o.a_class,
            "selector": "." + o.a_class
        }
          , t_a_class = {
            "name": o.t_a_class,
            "selector": "." + o.t_a_class
        }
          , style = o.style;
        ctrl_item.click(function(e) {
            var index = $(this).index()
              , curTab = tab.filter(t_a_class.selector).size() ? tab.filter(t_a_class.selector) : tab.filter(':visible')
              , nextTab = tab.eq(index);
            $(this).parent().find(o.tab_control_item + a_class.selector).removeClass(a_class.name);
            $(this).addClass(a_class.name);
            if (style) {
                curTab.css(style.forInActive).removeClass(t_a_class.name);
                nextTab.css(style.forActive).addClass(t_a_class.name);
            } else {
                curTab.removeClass(t_a_class.name);
                nextTab.addClass(t_a_class.name);
            }
            e.preventDefault();
        });
    });
}
jQuery.fn.galleryScroll = function(_options) {
    var _options = jQuery.extend({
        btPrev: 'a.btn-prev',
        btNext: 'a.btn-next',
        holderList: '.gallery-holder',
        scrollElParent: 'ul',
        scrollEl: 'li',
        slideNum: '.switcher',
        duration: 1000,
        step: false,
        circleSlide: true,
        disableClass: 'disable',
        funcOnclick: null ,
        autoSlide: false,
        innerMargin: 0,
        stepWidth: 900
    }, _options);
    return this.each(function() {
        var _this = jQuery(this);
        var _holderBlock = jQuery(_options.holderList, _this);
        var _gWidth = _holderBlock.width();
        var _animatedBlock = jQuery(_options.scrollElParent, _holderBlock);
        var _liWidth = jQuery(_options.scrollEl, _animatedBlock).outerWidth(true);
        var _liSum = jQuery(_options.scrollEl, _animatedBlock).length * _liWidth;
        _liSum -= parseInt(jQuery(_options.scrollEl, _animatedBlock).css('margin-right'));
        var _margin = -_options.innerMargin;
        var f = 0;
        var _step = 0;
        var _autoSlide = _options.autoSlide;
        var _timerSlide = null ;
        if (!_options.step)
            _step = _gWidth;
        else
            _step = _options.step * _liWidth;
        if (_options.stepWidth)
            _step = _options.stepWidth;
        if (!_options.circleSlide) {
            if (_options.innerMargin == _margin)
                jQuery(_options.btPrev, _this).addClass('prev-' + _options.disableClass);
        }
        if (_options.slideNum && !_options.step) {
            var _lastSection = 0;
            var _sectionWidth = 0;
            while (_sectionWidth < _liSum) {
                _sectionWidth = _sectionWidth + _gWidth;
                if (_sectionWidth > _liSum) {
                    _lastSection = _sectionWidth - _liSum;
                }
            }
        }
        if (_autoSlide) {
            _timerSlide = setTimeout(function() {
                autoSlide(_autoSlide);
            }, _autoSlide);
            _animatedBlock.hover(function() {
                clearTimeout(_timerSlide);
            }, function() {
                _timerSlide = setTimeout(function() {
                    autoSlide(_autoSlide)
                }, _autoSlide);
            });
        }
        jQuery(_options.btNext, _this).unbind('click');
        jQuery(_options.btPrev, _this).unbind('click');
        jQuery(_options.btNext, _this).bind('click', function(e) {
            jQuery(_options.btPrev, _this).removeClass('prev-' + _options.disableClass);
            if (!_options.circleSlide) {
                if (_margin + _step > _liSum - _gWidth - _options.innerMargin) {
                    if (_margin != _liSum - _gWidth - _options.innerMargin) {
                        _margin = _liSum - _gWidth + _options.innerMargin;
                        jQuery(_options.btNext, _this).addClass('next-' + _options.disableClass);
                        _f2 = 0;
                    }
                } else {
                    _margin = _margin + _step;
                    if (_margin == _liSum - _gWidth - _options.innerMargin) {
                        jQuery(_options.btNext, _this).addClass('next-' + _options.disableClass);
                        _f2 = 0;
                    }
                }
            } else {
                if (_margin + _step > _liSum - _gWidth + _options.innerMargin) {
                    if (_margin != _liSum - _gWidth + _options.innerMargin) {
                        _margin = _liSum - _gWidth + _options.innerMargin;
                    } else {
                        _f2 = 1;
                        _margin = -_options.innerMargin;
                    }
                } else {
                    _margin = _margin + _step;
                    _f2 = 0;
                }
            }
            _animatedBlock.animate({
                marginLeft: -_margin + "px"
            }, {
                queue: false,
                duration: _options.duration
            });
            if (_timerSlide) {
                clearTimeout(_timerSlide);
                _timerSlide = setTimeout(function() {
                    autoSlide(_options.autoSlide)
                }, _options.autoSlide);
            }
            if (_options.slideNum && !_options.step)
                jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
            if (jQuery.isFunction(_options.funcOnclick)) {
                _options.funcOnclick.apply(_this);
            }
            e.preventDefault();
        });
        var _f2 = 1;
        jQuery(_options.btPrev, _this).bind('click', function(e) {
            jQuery(_options.btNext, _this).removeClass('next-' + _options.disableClass);
            if (_margin - _step >= -_step - _options.innerMargin && _margin - _step <= -_options.innerMargin) {
                if (_f2 != 1) {
                    _margin = -_options.innerMargin;
                    _f2 = 1;
                } else {
                    if (_options.circleSlide) {
                        _margin = _liSum - _gWidth + _options.innerMargin;
                        f = 1;
                        _f2 = 0;
                    } else {
                        _margin = -_options.innerMargin
                    }
                }
            } else if (_margin - _step < -_step + _options.innerMargin) {
                _margin = _margin - _step;
                f = 0;
            } else {
                _margin = _margin - _step;
                f = 0;
            }
            ;if (!_options.circleSlide && _margin == _options.innerMargin) {
                jQuery(this).addClass('prev-' + _options.disableClass);
                _f2 = 0;
            }
            if (!_options.circleSlide && _margin == -_options.innerMargin)
                jQuery(this).addClass('prev-' + _options.disableClass);
            _animatedBlock.animate({
                marginLeft: -_margin + "px"
            }, {
                queue: false,
                duration: _options.duration
            });
            if (_options.slideNum && !_options.step)
                jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
            if (_timerSlide) {
                clearTimeout(_timerSlide);
                _timerSlide = setTimeout(function() {
                    autoSlide(_options.autoSlide)
                }, _options.autoSlide);
            }
            if (jQuery.isFunction(_options.funcOnclick)) {
                _options.funcOnclick.apply(_this);
            }
            e.preventDefault();
        });
        if (_liSum <= _gWidth) {
            jQuery(_options.btPrev, _this).addClass('prev-' + _options.disableClass).unbind('click');
            jQuery(_options.btNext, _this).addClass('next-' + _options.disableClass).unbind('click');
        }
        function autoSlide(autoSlideDuration) {
            jQuery(_options.btNext, _this).trigger('click');
        }
        ;jQuery.fn.galleryScroll.numListCreate = function(_elNumList, _liSumWidth, _width, _section) {
            var _numListElC = '';
            var _num = 1;
            var _difference = _liSumWidth + _section;
            while (_difference > 0) {
                _numListElC += '<li><a href="">' + _num + '</a></li>';
                _num++;
                _difference = _difference - _width;
            }
            jQuery(_elNumList).html('<ul class="control">' + _numListElC + '</ul>');
        }
        ;
        jQuery.fn.galleryScroll.numListActive = function(_marginEl, _slideNum, _width, _section) {
            if (_slideNum) {
                jQuery('a', _slideNum).removeClass('active');
                var _activeRange = _width - _section - 1;
                var _n = 0;
                if (_marginEl != 0) {
                    while (_marginEl > _activeRange) {
                        _activeRange = (_n * _width) - _section - 1 + _options.innerMargin;
                        _n++;
                    }
                }
                var _a = (_activeRange + _section + 1 + _options.innerMargin) / _width - 1;
                jQuery('a', _slideNum).eq(_a).addClass('active');
            }
        }
        ;
        if (_options.slideNum && !_options.step) {
            jQuery.fn.galleryScroll.numListCreate(jQuery(_options.slideNum, _this), _liSum, _gWidth, _lastSection);
            jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
            numClick();
        }
        ;function numClick() {
            jQuery(_options.slideNum, _this).find('a').click(function(e) {
                jQuery(_options.btPrev, _this).removeClass('prev-' + _options.disableClass);
                jQuery(_options.btNext, _this).removeClass('next-' + _options.disableClass);
                var _indexNum = jQuery(_options.slideNum, _this).find('a').index(jQuery(this));
                _margin = (_step * _indexNum) - _options.innerMargin;
                f = 0;
                _f2 = 0;
                if (_indexNum == 0)
                    _f2 = 1;
                if (_margin + _step > _liSum) {
                    _margin = _margin - (_margin - _liSum) - _step + _options.innerMargin;
                    if (!_options.circleSlide)
                        jQuery(_options.btNext, _this).addClass('next-' + _options.disableClass);
                }
                _animatedBlock.animate({
                    marginLeft: -_margin + "px"
                }, {
                    queue: false,
                    duration: _options.duration
                });
                if (!_options.circleSlide && _margin == 0)
                    jQuery(_options.btPrev, _this).addClass('prev-' + _options.disableClass);
                jQuery.fn.galleryScroll.numListActive(_margin, jQuery(_options.slideNum, _this), _gWidth, _lastSection);
                if (_timerSlide) {
                    clearTimeout(_timerSlide);
                    _timerSlide = setTimeout(function() {
                        autoSlide(_options.autoSlide)
                    }, _options.autoSlide);
                }
                e.preventDefault();
            });
        }
        ;jQuery(window).resize(function() {
            _gWidth = _holderBlock.width();
            _liWidth = jQuery(_options.scrollEl, _animatedBlock).outerWidth(true);
            _liSum = jQuery(_options.scrollEl, _animatedBlock).length * _liWidth;
            if (!_options.step)
                _step = _gWidth;
            else
                _step = _options.step * _liWidth;
            if (_options.slideNum && !_options.step) {
                var _lastSection = 0;
                var _sectionWidth = 0;
                while (_sectionWidth < _liSum) {
                    _sectionWidth = _sectionWidth + _gWidth;
                    if (_sectionWidth > _liSum) {
                        _lastSection = _sectionWidth - _liSum;
                    }
                }
                ;
            }
            ;
        });
    });
}
$(function() {
    initSlideShow();
});
function initSlideShow() {
    $('div.tab-gallery.main').fadeGallery({
        slideElements: '.gallery-holder li',
        pauseOnHover: true,
        autoRotation: true,
        switchTime: 4000,
        duration: 650,
        pagerLinks: '.switsher li',
        event: 'click'
    });
    $('.sponsors-gallery').makeGallery();
}
jQuery.fn.makeGallery = function(o) {
    o = $.extend({
        interval: 1800,
        speed: 800,
        gallery_frame: '.gallery-frame',
        gallery_holder: 'ul',
        gallery_item: 'li'
    }, o || {});
    return this.each(function() {
        var _phase = true;
        var main_holder = $(this);
        var _gal_item = o.gallery_item;
        var btn_prev = $('.prev', main_holder);
        var btn_next = $('.next', main_holder);
        var _holder = $(o.gallery_holder, main_holder);
        var _speed = o.seepd;
        btn_prev.click(function() {
            if (_phase) {
                _phase = false;
                oneStepMinus();
            }
            return false;
        });
        btn_next.click(function() {
            if (_phase) {
                _phase = false;
                oneStepPlus();
            }
            return false;
        });
        function oneStepPlus() {
            var step = (_holder.find(_gal_item + ':first').outerWidth());
            _holder.animate({
                marginLeft: step * (-1) + 'px'
            }, _speed, function() {
                $(this).append($(this).find(_gal_item + ':first'));
                $(this).css('margin-left', '0');
                _phase = true;
            });
        }
        ;function oneStepMinus() {
            var step = (_holder.find(_gal_item + ':last').outerWidth());
            _holder.css('margin-left', -step).prepend(_holder.find(_gal_item + ':last'));
            _holder.animate({
                marginLeft: 0
            }, _speed, function() {
                $(this).css('margin-left', '0');
                _phase = true;
            });
        }
        ;
    });
}
;
jQuery.fn.fadeGallery = function(_options) {
    var _options = jQuery.extend({
        slideElements: 'div.slideset > div',
        pagerLinks: '.control-panel li',
        btnNext: 'a.next',
        btnPrev: 'a.prev',
        btnPlayPause: 'a.play-pause',
        pausedClass: 'paused',
        playClass: 'playing',
        activeClass: 'active',
        pauseOnHover: true,
        autoRotation: false,
        autoHeight: false,
        switchTime: 3000,
        duration: 650,
        event: 'click'
    }, _options);
    return this.each(function() {
        var _this = jQuery(this);
        var _slides = jQuery(_options.slideElements, _this);
        var _pagerLinks = jQuery(_options.pagerLinks, _this);
        var _btnPrev = jQuery(_options.btnPrev, _this);
        var _btnNext = jQuery(_options.btnNext, _this);
        var _btnPlayPause = jQuery(_options.btnPlayPause, _this);
        var _pauseOnHover = _options.pauseOnHover;
        var _autoRotation = _options.autoRotation;
        var _activeClass = _options.activeClass;
        var _pausedClass = _options.pausedClass;
        var _playClass = _options.playClass;
        var _autoHeight = _options.autoHeight;
        var _duration = _options.duration;
        var _switchTime = _options.switchTime;
        var _controlEvent = _options.event;
        var _hover = false;
        var _prevIndex = 0;
        var _currentIndex = 0;
        var _slideCount = _slides.length;
        var _timer;
        if (!_slideCount)
            return;
        _slides.hide().eq(_currentIndex).show();
        if (_autoRotation)
            _this.removeClass(_pausedClass).addClass(_playClass);
        else
            _this.removeClass(_playClass).addClass(_pausedClass);
        if (_btnPrev.length) {
            _btnPrev.bind(_controlEvent, function() {
                prevSlide();
                return false;
            });
        }
        if (_btnNext.length) {
            _btnNext.bind(_controlEvent, function() {
                nextSlide();
                return false;
            });
        }
        if (_pagerLinks.length) {
            _pagerLinks.each(function(_ind) {
                jQuery(this).bind(_controlEvent, function() {
                    if (_currentIndex != _ind) {
                        _prevIndex = _currentIndex;
                        _currentIndex = _ind;
                        switchSlide();
                    }
                    return false;
                });
            });
        }
        if (_btnPlayPause.length) {
            _btnPlayPause.bind(_controlEvent, function() {
                if (_this.hasClass(_pausedClass)) {
                    _this.removeClass(_pausedClass).addClass(_playClass);
                    _autoRotation = true;
                    autoSlide();
                } else {
                    if (_timer)
                        clearRequestTimeout(_timer);
                    _this.removeClass(_playClass).addClass(_pausedClass);
                }
                return false;
            });
        }
        function prevSlide() {
            _prevIndex = _currentIndex;
            if (_currentIndex > 0)
                _currentIndex--;
            else
                _currentIndex = _slideCount - 1;
            switchSlide();
        }
        function nextSlide() {
            _prevIndex = _currentIndex;
            if (_currentIndex < _slideCount - 1)
                _currentIndex++;
            else
                _currentIndex = 0;
            switchSlide();
        }
        function refreshStatus() {
            if (_pagerLinks.length)
                _pagerLinks.removeClass(_activeClass).eq(_currentIndex).addClass(_activeClass);
            _slides.eq(_prevIndex).removeClass(_activeClass);
            _slides.eq(_currentIndex).addClass(_activeClass);
        }
        function switchSlide() {
            _slides.stop(true, true);
            _slides.eq(_prevIndex).fadeOut(_duration);
            _slides.eq(_currentIndex).fadeIn(_duration);
            refreshStatus();
            autoSlide();
        }
        function autoSlide() {
            if (!_autoRotation || _hover)
                return;
            if (_timer)
                clearRequestTimeout(_timer);
            _timer = requestTimeout(nextSlide, _switchTime + _duration);
        }
        if (_pauseOnHover) {
            _this.hover(function() {
                _hover = true;
                if (_timer)
                    clearRequestTimeout(_timer);
            }, function() {
                _hover = false;
                autoSlide();
            });
        }
        refreshStatus();
        autoSlide();
    });
}
window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
        window.setTimeout(callback, 1000 / 60);
    }
    ;
})();
window.requestTimeout = function(fn, delay) {
    if (!window.requestAnimationFrame && !window.webkitRequestAnimationFrame && !window.mozRequestAnimationFrame && !window.oRequestAnimationFrame && !window.msRequestAnimationFrame)
        return window.setTimeout(fn, delay);
    var start = new Date().getTime()
      , handle = new Object();
    function loop() {
        var current = new Date().getTime()
          , delta = current - start;
        delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
    }
    ;handle.value = requestAnimFrame(loop);
    return handle;
}
;
window.clearRequestTimeout = function(handle) {
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) : window.msCancelRequestAnimationFrame ? msCancelRequestAnimationFrame(handle.value) : clearTimeout(handle);
}
;
$(document).ready(function() {
    if (window.location.hash == '#extended') {
        $('#tab-ext').click();
    }
});
