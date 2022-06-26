const defaults = { imageLoadedClass: "js-lazy-image--handled", imageSelector: ".js-lazy-image", rootMargin: "750px 0px", threshold: 0.01 };
let config, images, imageCount, observer;
function fetchImage(r) {
    return new Promise((e, t) => {
        const a = new Image();
        (a.src = r), (a.onload = e), (a.onerror = t);
    });
}
function preloadImage(e) {
    var t = e.dataset.src;
    if (t)
        return fetchImage(t).then(() => {
            applyImage(e, t);
        });
}
function loadImagesImmediately(t) {
    for (let e = 0; e < t.length; e++) preloadImage(t[e]);
}
function disconnect() {
    observer && observer.disconnect();
}
function onIntersection(t) {
    if (0 !== imageCount)
        for (let e = 0; e < t.length; e++) {
            var a = t[e];
            0 < a.intersectionRatio && (imageCount--, observer.unobserve(a.target), preloadImage(a.target));
        }
    else disconnect();
}
function applyImage(e, t) {
    e.classList.add(config.imageLoadedClass), (e.src = t);
}
let LazyLoad = {
    init: (e) => {
        if (((config = { ...defaults, ...e }), (images = document.querySelectorAll(config.imageSelector)), (imageCount = images.length), "IntersectionObserver" in window)) {
            observer = new IntersectionObserver(onIntersection, config);
            for (let t = 0; t < images.length; t++) {
                let e = images[t];
                e.classList.contains(config.imageLoadedClass) || observer.observe(e);
            }
        } else loadImagesImmediately(images);
    },
};
function isEmail(e) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e);
}
function isName(e) {
    return /^[a-zA-Z\s]+$/.test(e);
}
function isNumber(e) {
    return /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/.test(e);
}
function isNumberValidate(e) {
    e = (e = e || window.event).which || e.keyCode;
    return !(31 < e && (e < 48 || 57 < e || 107 < e || 219 < e || 221 < e) && 40 != e && 32 != e && 41 != e && (e < 43 || 46 < e));
}
function isAlfa(e) {
    e = (e = e || window.event).which || e.keyCode;
    return !(32 < e && (e < 65 || 90 < e) && (e < 97 || 122 < e));
}
(text_truncate = function (e, t, a) {
    return null == t && (t = 100), null == a && (a = "..."), e.length > t ? e.substring(0, t - a.length) + a : e;
}),
    $(document).ready(function () {
        $("form#ContactForm").on("submit", function (e) {
            e.preventDefault();
            var i = !0,
                o = !1,
                s = $(this);
            $(".form-group").removeClass("error-message"),
                s.find("span.contact-success-text").hide(),
                s.find("span.contact-error-text").hide(),
                s.find("#token-captcha").remove(),
                grecaptcha.ready(function () {
                    s.find("input").each(function () {
                        "" == $(this).val() && "phnumber_contact" != $(this).attr("id") && "organization" != $(this).attr("id") && "technology" != $(this).attr("id") && "document" != $(this).attr("id") && (i = !1);
                    }),
                        s.find("textarea").each(function () {
                            "" == $(this).val() && (i = !1);
                        });
                    var e = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    "" == s.find("input#mail").val() || e.test(s.find("input#mail").val()) || (i = !1);
                    var t = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                    "" == s.find('input[name="Phone-Number"]').val() || t.test($('input[name="Phone-Number"]').val()) || (i = !1);
                    var a = document.getElementById("document");
                    if (a) {
                        for (var r = 0, n = 0; n < a.files.length; n++) (imageSize = a.files[n].size / 1024 / 1024), (r += imageSize);
                        10 < r.toFixed(2) && (i = !1);
                        for (n = 0; n < a.files.length; n++) {
                            items = a.files[n];
                            "" != items.type
                                ? -1 ==
                                      $.inArray(items.type, [
                                          "application/msword",
                                          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                          "application/vnd.ms-powerpoint",
                                          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                          "application/vnd.ms-excel",
                                          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                          "application/zip",
                                          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                          "application/x-zip-compressed",
                                          "application/pdf",
                                          "text/plain",
                                      ]) && (o = !(i = !1))
                                : ((typeoffile = items.name.split(".").pop().toLowerCase()), -1 == $.inArray(typeoffile, ["docx", "doc", "ppt", "pptx", "xls", "xlsx"]) && (o = !(i = !1)));
                        }
                    }
                    if (0 == i)
                        return (
                            s.find("span.ajax-loader").removeClass("active"),
                            "" == s.find("input#mail").val() || e.test(s.find("input#mail").val())
                                ? $("input#mail").parents(".form-group").find(".cfValidationMessage").html("Please enter your Email Address")
                                : ((i = !1),
                                  $("input#mail").parents(".form-group").addClass("error-message"),
                                  $("input#mail").parents(".form-group").find(".cfValidationMessage").html("Please enter valid Email Address").addClass("error-text")),
                            "" == s.find('input[name="Phone-Number"]').val() ||
                                t.test($('input[name="Phone-Number"]').val()) ||
                                ((i = !1),
                                $('input[name="Phone-Number"]').parents(".form-group").addClass("error-message"),
                                $('input[name="Phone-Number"]').parents(".form-group").find(".cfValidationMessage").html("Please enter valid Phone Number").addClass("error-text")),
                            a &&
                                10 < r.toFixed(2) &&
                                ((i = !1),
                                $('input[id="document"]').parents(".form-group").addClass("error-message"),
                                $('input[id="document"]').parents(".form-group").find(".cfValidationMessage").removeClass("error-text"),
                                $('input[id="document"]').parents(".form-group").find(".cfValidationMessage.documentUploadError").html("Maximum file upload size is 10MB").addClass("error-text")),
                            a &&
                                o &&
                                ((i = !1),
                                $('input[id="document"]').parents(".form-group").addClass("error-message"),
                                $('input[id="document"]').parents(".form-group").find(".cfValidationMessage").removeClass("error-text"),
                                $('input[id="document"]')
                                    .parents(".form-group")
                                    .find(".cfValidationMessage.typeInvalidError")
                                    .html("Please upload valid file format from doc, docx, ppt, pptx, xls, xlsx, pdf, zip or txt")
                                    .addClass("error-text")),
                            s.find("input").each(function () {
                                "" == $(this).val() &&
                                    "phnumber_contact" != $(this).attr("id") &&
                                    "organization" != $(this).attr("id") &&
                                    "technology" != $(this).attr("id") &&
                                    "document" != $(this).attr("id") &&
                                    ((i = !1), $(this).parents(".form-group").addClass("error-message"), $(this).parents(".form-group").find(".cfValidationMessage").addClass("error-text"));
                            }),
                            s.find("textarea").each(function () {
                                "" == $(this).val() && ((i = !1), $(this).parents(".form-group").addClass("error-message"), $(this).parents(".form-group").find(".cfValidationMessage").addClass("error-text"));
                            }),
                            !1
                        );
                    grecaptcha.execute("6LdYKK4ZAAAAAJ7TVbzC3hj8sMgWqHxWphHB-2kV", { action: "contact" }).then(function (e) {
                        s.find("span.ajax-loader").addClass("active"), $("#ContactForm").prepend('<input type="hidden" name="token" id="token-captcha" value="' + e + '">');
                        var t = new FormData(document.getElementById("ContactForm")),
                            e = $("#ContactForm").attr("action");
                        $.ajax({
                            type: "POST",
                            data: t,
                            dataType: "json",
                            contentType: !1,
                            cache: !1,
                            processData: !1,
                            url: e,
                            success: function (e) {
                                1 == e.success
                                    ? (s.find("span.contact-success-text").show(),
                                      s.trigger("reset"),
                                      $(".form-group").removeClass("error-message"),
                                      $("#document").val(""),
                                      $(".file-msg").html("No file chosen"),
                                      $("#cn_dropdown_footer").val(null).trigger("change"))
                                    : s.find("span.contact-error-text").show(),
                                    s.find("span.ajax-loader").removeClass("active");
                            },
                        });
                    });
                });
        });
        var t = [
            "+91 960 142 1472",
            "+1 210 767 3194",
            "+44 (0)207 947 4950",
            "+61 2 9844 5446",
            "+61 3 9581 2659",
            "+1 647 978 7562",
            "+1 (765) 409-9497",
            "+1 765 409 9497",
            "career@tatvasoft.com",
            "info@tatvasoft.com",
            "info@tatvasoft.co.uk",
            "info@tatvasoft.com.au",
            "legal@tatvasoft.com",
        ];
        $("body").hasClass("tatva-landing-pages") ||
            ($("body > *").bind("cut copy paste", function (e) {
                1 == $(".contact-us-wrapper").length && "main-site-wrapper" === e.currentTarget.className
                    ? -1 !== jQuery.inArray(e.target.textContent, t) || "content-wrapper" === e.target.parentElement.className || "address" == e.target.localName || e.preventDefault()
                    : "add-box-inner" !== e.target.parentElement.className && "address" !== e.target.parentElement.localName && -1 === jQuery.inArray(e.target.textContent, t) && e.preventDefault();
            }),
        
            $(document).keydown(function (e) {
                var t = String.fromCharCode(e.keyCode).toLowerCase();
                return 123 != e.keyCode && (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) && (!e.ctrlKey || "u" != t) && void 0;
            })),
            $("form#CareerContactForm").on("submit", function (e) {
                e.preventDefault();
                var t = !0,
                    a = !1,
                    r = $(this);
                $(".form-group").removeClass("error-message"),
                    r.find("span.contact-success-text").hide(),
                    r.find("span.error-text").hide(),
                    r.find("input").each(function () {
                        "" == $(this).val() && "mo_number" != $(this).attr("id") && "ph_number" != $(this).attr("id") && "document-career" != $(this).attr("id") && "" == $(this).val() && (t = !1);
                    }),
                    r.find("select").each(function () {
                        "" == $(this).val() && (t = !1);
                    });
                var n = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                "" == r.find("input#email").val() || n.test(r.find("input#email").val()) || (t = !1);
                e = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                "" == r.find("input#mo_number").val() || e.test($("input#mo_number").val()) || (t = !1);
                e = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                "" == r.find("input#ph_number").val() || e.test($("input#ph_number").val()) || (t = !1),
                    "" != r.find("input#mo_number").val() &&
                        e.test($("input#mo_number").val()) &&
                        "" != r.find("input#ph_number").val() &&
                        e.test($("input#ph_number").val()) &&
                        r.find("input#mo_number").val() === r.find("input#ph_number").val() &&
                        ((t = !1),
                        $("input#ph_number").parents(".form-group").addClass("error-message"),
                        $("input#ph_number").parents(".form-group").find(".cfValidationMessage").html("Please enter different Phone number").addClass("error-text"));
                var i = document.getElementById("document-career");
                if (i) {
                    for (var o = 0, s = 0; s < i.files.length; s++) (imageSize = i.files[s].size / 1024 / 1024), (o += imageSize);
                    10 < o.toFixed(2) && (t = !1);
                    for (s = 0; s < i.files.length; s++) {
                        items = i.files[s];
                        "" != items.type
                            ? -1 ==
                                  $.inArray(items.type, [
                                      "application/msword",
                                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                      "application/vnd.ms-powerpoint",
                                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                      "application/vnd.ms-excel",
                                      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                      "application/zip",
                                      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                      "application/x-zip-compressed",
                                      "application/pdf",
                                      "text/plain",
                                  ]) && (a = !(t = !1))
                            : ((typeoffile = items.name.split(".").pop().toLowerCase()), -1 == $.inArray(typeoffile, ["docx", "doc", "ppt", "pptx", "xls", "xlsx"]) && (a = !(t = !1)));
                    }
                }
                0 == t
                    ? (r.find("span.ajax-loader").removeClass("active"),
                      "" == r.find("input#email").val() || n.test(r.find("input#email").val())
                          ? $("input#mail").parents(".form-group").find(".cfValidationMessage").html("Please enter your Email Address")
                          : ((t = !1), $("input#email").parents(".form-group").addClass("error-message"), $("input#email").parents(".form-group").find(".cfValidationMessage").html("Please enter valid Email Address").addClass("error-text")),
                      "" == r.find("input#ph_number").val() ||
                          e.test($("input#ph_number").val()) ||
                          ((t = !1),
                          $("input#ph_number").parents(".form-group").addClass("error-message"),
                          $("input#ph_number").parents(".form-group").find(".cfValidationMessage").html("Please enter valid Phone Number").addClass("error-text")),
                      "" == r.find("input#mo_number").val() ||
                          e.test($("input#mo_number").val()) ||
                          ((t = !1),
                          $("input#mo_number").parents(".form-group").addClass("error-message"),
                          $("input#mo_number").parents(".form-group").find(".cfValidationMessage").html("Please enter valid Mobile Number").addClass("error-text")),
                      i &&
                          10 < o.toFixed(2) &&
                          ((t = !1),
                          $('input[id="document-career"]').parents(".form-group").addClass("error-message"),
                          $('input[id="document-career"]').parents(".form-group").find(".cfValidationMessage").removeClass("error-text"),
                          $('input[id="document-career"]').parents(".form-group").find(".cfValidationMessage.documentUploadError").html("Maximum file upload size is 10MB").addClass("error-text")),
                      i &&
                          a &&
                          ((t = !1),
                          $('input[id="document-career"]').parents(".form-group").addClass("error-message"),
                          $('input[id="document-career"]').parents(".form-group").find(".cfValidationMessage").removeClass("error-text"),
                          $('input[id="document-career"]')
                              .parents(".form-group")
                              .find(".cfValidationMessage.typeInvalidError")
                              .html("Please upload valid file format from doc, docx, ppt, pptx, xls, xlsx, pdf, zip or txt")
                              .addClass("error-text")),
                      r.find("input").each(function () {
                          "" == $(this).val() &&
                              "mo_number" != $(this).attr("id") &&
                              "ph_number" != $(this).attr("id") &&
                              "document-career" != $(this).attr("id") &&
                              ((t = !1), $(this).parents(".form-group").addClass("error-message"), $(this).parents(".form-group").find(".cfValidationMessage").addClass("error-text"));
                      }),
                      r.find("select").each(function () {
                          "" == $(this).val() && ((t = !1), $(this).parents(".form-group").addClass("error-message"), $(this).parents(".form-group").find(".cfValidationMessage").addClass("error-text"));
                      }))
                    : (r.find("span.ajax-loader").addClass("active"),
                      (n = new FormData(document.getElementById("CareerContactForm"))),
                      (e = $("#CareerContactForm").attr("action")),
                      $.ajax({
                          type: "POST",
                          data: n,
                          dataType: "json",
                          contentType: !1,
                          cache: !1,
                          processData: !1,
                          url: e,
                          success: function (e) {
                              1 == e.success
                                  ? (r.find("span.contact-success-text").show(), r.trigger("reset"), $(".form-group").removeClass("error-message"), $("#document-career").val(""), $(".file-msg").html("No file chosen"))
                                  : r.find("span.contact-error-text").show(),
                                  r.find("span.ajax-loader").removeClass("active");
                          },
                      }));
            });
    }),
    $(document).on("click", "#apply-now", function (e) {
        e.preventDefault();
        e = $(this).siblings("input:hidden").val();
        $("#job-title").val(e);
    });
var nameOffset,
    verOffset,
    ix,
    nVer = navigator.appVersion,
    nAgt = navigator.userAgent,
    browserName = navigator.appName,
    fullVersion = "" + parseFloat(navigator.appVersion),
    majorVersion = parseInt(navigator.appVersion, 10);
-1 != (verOffset = nAgt.indexOf("Opera"))
    ? ((browserName = "Opera"), (fullVersion = nAgt.substring(verOffset + 6)), -1 != (verOffset = nAgt.indexOf("Version")) && (fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("MSIE"))
    ? ((browserName = "Microsoft Internet Explorer"), (fullVersion = nAgt.substring(verOffset + 5)))
    : -1 != (verOffset = nAgt.indexOf("Chrome"))
    ? ((browserName = "Chrome"), (fullVersion = nAgt.substring(verOffset + 7)))
    : -1 != (verOffset = nAgt.indexOf("Safari"))
    ? ((browserName = "Safari"), (fullVersion = nAgt.substring(verOffset + 7)), -1 != (verOffset = nAgt.indexOf("Version")) && (fullVersion = nAgt.substring(verOffset + 8)))
    : -1 != (verOffset = nAgt.indexOf("Firefox"))
    ? ((browserName = "Firefox"), (fullVersion = nAgt.substring(verOffset + 8)))
    : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) &&
      ((browserName = nAgt.substring(nameOffset, verOffset)), (fullVersion = nAgt.substring(verOffset + 1)), browserName.toLowerCase() == browserName.toUpperCase() && (browserName = navigator.appName));
var OSName = "UnknownOS";
function isIE() {
    return (ua = navigator.userAgent), -1 < ua.indexOf("MSIE ") || -1 < ua.indexOf("Trident/");
}
-1 != navigator.appVersion.indexOf("Win") && (OSName = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") && (OSName = "MacOS"),
    -1 != navigator.appVersion.indexOf("X11") && (OSName = "UNIX"),
    -1 != navigator.appVersion.indexOf("Linux") && (OSName = "Linux"),
    $("body,html").addClass(browserName.toLowerCase()).addClass(OSName.toLowerCase()),
    navigator.userAgent.match(/iP(hone|od|ad)/i) && $("body,html").addClass("browser-ios");
var BrowserDetect = {
    init: function () {
        (this.browser = this.searchString(this.dataBrowser) || "Other"), (this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown");
    },
    searchString: function (e) {
        for (var t = 0; t < e.length; t++) {
            var a = e[t].string;
            if (((this.versionSearchString = e[t].subString), -1 !== a.indexOf(e[t].subString))) return e[t].identity;
        }
    },
    searchVersion: function (e) {
        var t = e.indexOf(this.versionSearchString);
        if (-1 !== t) {
            var a = e.indexOf("rv:");
            return "Trident" === this.versionSearchString && -1 !== a ? parseFloat(e.substring(a + 3)) : parseFloat(e.substring(t + this.versionSearchString.length + 1));
        }
    },
    dataBrowser: [
        { string: navigator.userAgent, subString: "Edge", identity: "MS Edge" },
        { string: navigator.userAgent, subString: "MSIE", identity: "Explorer" },
        { string: navigator.userAgent, subString: "Trident", identity: "Explorer" },
        { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
        { string: navigator.userAgent, subString: "Opera", identity: "Opera" },
        { string: navigator.userAgent, subString: "OPR", identity: "Opera" },
        { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
        { string: navigator.userAgent, subString: "Safari", identity: "Safari" },
    ],
};
BrowserDetect.init();
var bv = BrowserDetect.browser;
"Chrome" == bv ? $("html").addClass("chrome") : "MS Edge" == bv ? $("html").addClass("edge") : "Explorer" == bv ? $("html").addClass("ie") : "Firefox" == bv && $("html").addClass("Firefox");
var header_height = jQuery(".site-header").innerHeight();
function max_equal_height() {
    jQuery.fn.extend({
        max_equal_height: function () {
            var e = 0;
            jQuery(this).each(function () {
                jQuery(this).height() > e && (e = jQuery(this).height());
            }),
                jQuery(this).height(e);
        },
    }),
        jQuery(".project-information-list>li").max_equal_height();
}
function scrollspy_block() {
    jQuery(".scroll-to-block>a")
        .unbind("click")
        .click(function () {
            var e = jQuery(this).parents(".scroll-to-block").attr("data-id");
            (e = 0 == jQuery(window).scrollTop() ? jQuery("#" + e).offset().top - 68 : jQuery("#" + e).offset().top - jQuery("header").innerHeight()), jQuery("html,body").animate({ scrollTop: e }, 1e3, function () {});
        });
}
function scrollspy() {
    var a = jQuery(window).scrollTop();
    jQuery(".scrollspy-block").each(function () {
        var e = jQuery(this),
            t = e.attr("id");
        (offset = e.offset().top - jQuery("header").innerHeight() - 1),
            (height = e.height()),
            a >= offset &&
                a < offset + height &&
                jQuery(".tatva-service-landing .navigation-wrapper .menu-navigation>li").each(function () {
                    var e = jQuery(this);
                    e.attr("data-id") === t && (jQuery(".tatva-service-landing .navigation-wrapper .menu-navigation>li").removeClass("landing-active-page"), e.addClass("landing-active-page"));
                });
    });
}
function equalHeight() {
    jQuery.fn.extend({
        equalHeight: function () {
            var t = 0,
                a = ("equalHeight" + Math.random()).replace(".", "");
            jQuery(this)
                .each(function () {
                    var e = jQuery(this).offset().top;
                    t < e && (jQuery("." + a).removeClass(a), (t = e)), jQuery(this).addClass(a), jQuery(this).height("auto");
                    e = Math.max.apply(
                        null,
                        jQuery("." + a)
                            .map(function () {
                                return jQuery(this).outerHeight();
                            })
                            .get()
                    );
                    jQuery("." + a).height(e);
                })
                .removeClass(a);
        },
    }),
        jQuery(".tatvasoft-project-information ul li").equalHeight(),
        jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content .tatva-hiring-col-wrapper .tatva-hiring-col .tatva-inner-col .tatva-inner-content").equalHeight(),
        jQuery(".tatva-inner-page .tatva-tools-technology-section .tatva-tools-technology-grid .tatva-tools-technology-item .tatva-tools-technology-item-inner .tatva-tools-technology-content").equalHeight(),
        jQuery(".about-value-section.why-react-native .value-listing li h3").equalHeight(),
        jQuery(".tatva-career-page .recruitment-process-section .recruitment-process-wrapper  h3").equalHeight(),
        jQuery(".footer-middle-part .footer-col-layout-wrapper .footer-col-layout .right-col .right-inner .add-box address").equalHeight(),
        jQuery(".footer-middle-part .footer-col-layout-wrapper .footer-col-layout .right-col .right-inner .add-box .country-name").equalHeight(),
        jQuery(".testing-and-qa-service-wrapper .tatva-service-section .work-grid-wrapper .work-grid .work-item-wrapper").equalHeight(),
        jQuery(".testing-and-qa-service-wrapper .tatva-service-section .work-grid-wrapper .work-grid .work-item .work-item-inner h3").equalHeight(),
        jQuery(".industry-inner-expertise-section.expertise-boxes-wrapper .industry-expertise-wrapper .expertise-bottom-block .expertise-bottom-block-inner .expertise-details-block h3").equalHeight(),
        jQuery(".retail-software-solutions-wrapper .analytical-section .analytical-block-wrapper .analytical-block-inner .analytical-block h3").equalHeight(),
        jQuery(".retail-software-solutions-wrapper .ecommerce-web-app-section h3").equalHeight(),
        jQuery(".tatva-landing-pages .white-box .tatvasoft-landing-case-study-block .case-study-slider-wrapper .content-wrapper").equalHeight(),
        setTimeout(function () {
            jQuery(".outsourcing-inner-page .process-wrapper .process-outer .process-inner .heading-part").equalHeight(),
                jQuery(".tatva-home-testimonial .tatva-home-testimonial-block .tatva-testimonial-inner .blockquote").equalHeight(),
                jQuery(".healthcare-software-solutions-wrapper .title-block-wrapper .title-block-inner .title-block h3").equalHeight(),
                jQuery(".education-software-solutions-wrapper .industry-inner-expertise-section .industry-expertise-wrapper .expertise-bottom-block .expertise-detail-wrapper h3").equalHeight(),
                jQuery(".industry-inner-expertise-section .industry-expertise-wrapper .expertise-bottom-block .expertise-detail-wrapper").equalHeight(),
                jQuery(".industry-inner-expertise-section .industry-expertise-wrapper .expertise-bottom-block h4").equalHeight(),
                jQuery(".sitemap-pagelink-section .sitemap-pagelink-wrapper h3").equalHeight(),
                jQuery(".tatva-service-section .work-grid-wrapper .work-grid .work-item-wrapper").equalHeight(),
                jQuery(".tatva-service-section .work-grid-wrapper .work-grid .work-item .work-item-inner h3").equalHeight(),
                jQuery(".tatva-job-section .job-grid-wrapper .job-grid .job-grid-inner").equalHeight();
        }, 800),
        setTimeout(function () {
            jQuery(".tatva-why-section .container .why-tatva-wrapper .why-tatva-block .why-tatva-inner .content-wrapper h3").equalHeight(),
                jQuery(".tatva-why-section .container .why-tatva-wrapper .why-tatva-block .why-tatva-inner .content-wrapper").equalHeight(),
                jQuery(".global-office-section .office-wrapper .office-block .office-inner .content-wrapper").equalHeight(),
                jQuery(".about-value-section .value-listing li p").equalHeight(),
                jQuery(".industry-inner-expertise-section .industry-expertise-wrapper .expertise-bottom-block .expertise-detail-wrapper").equalHeight(),
                jQuery(".analytical-section .analytical-block-wrapper .analytical-block-inner .analytical-block .analytical-detail-wrapper").equalHeight(),
                jQuery(".tatva-service-section .work-grid-wrapper .work-grid .work-item .work-item-inner h3").equalHeight(),
                jQuery(".innovation-grid-wrapper .innovation-grid .innovation-inner-wrapper .innovation-item-inner p").equalHeight(),
                jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content .tatva-hiring-col-wrapper .tatva-hiring-col .tatva-inner-col .tatva-inner-content").equalHeight(),
                jQuery(".tatvasoft-team-section .our-team-wrapper .our-team-outer .our-team-inner p").equalHeight();
        }, 500);
}
function init_class(e, t, a) {
    jQuery(".industries-listing.slick-slider").length &&
        ((t = t - 1),
        1 <= e && e != t && a.addClass("init-slide"),
        "true" !=
        jQuery(a)
            .find(".slick-slide[data-slick-index='" + t + "']")
            .attr("aria-hidden")
            ? (a.addClass("init-slide-last"), a.removeClass("init-slide"))
            : a.removeClass("init-slide-last"));
}
var why_tatvasoft_flag = !($.fn.isInViewport = function () {
    var e = $(this).offset().top,
        t = e + $(this).outerHeight(),
        a = $(window).scrollTop(),
        r = a + $(window).height();
    return a < t && e < r;
});
function why_tatvasoft_slider() {
    jQuery(".tatva-why-section .container .why-tatva-wrapper").length &&
        (jQuery(window).innerWidth() <= 991
            ? why_tatvasoft_flag ||
              (jQuery(".tatva-why-section .container .why-tatva-wrapper .why-tatva-block .why-tatva-inner .logo-wrapper img.js-lazy-image").each(function (e) {
                  jQuery(this).attr("src", jQuery(this).attr("data-src")), jQuery(this).removeAttr("data-src"), jQuery(this).removeClass("js-lazy-image");
              }),
              jQuery(".tatva-why-section .container .why-tatva-wrapper").slick({
                  arrows: !1,
                  infinite: !1,
                  slidesToShow: 2.5,
                  slidesToScroll: 1,
                  touchThreshold: 10,
                  dots: !0,
                  responsive: [
                      { breakpoint: 999999, settings: "unslick" },
                      { breakpoint: 992, settings: { slidesToShow: 2.5 } },
                      { breakpoint: 768, settings: { slidesToShow: 1.5 } },
                      { breakpoint: 480, settings: { slidesToShow: 1.1 } },
                  ],
              }),
              setTimeout(function (e) {
                  jQuery(".tatva-why-section .container .why-tatva-wrapper .why-tatva-block .why-tatva-inner .content-wrapper").equalHeight();
              }, 500),
              (why_tatvasoft_flag = !0))
            : (why_tatvasoft_flag = !1));
}
var flag,
    innovation_slider_flag = !1;
function innovation_slider() {
    jQuery(".innovation-grid-wrapper .innovation-grid").length &&
        ($(window).width() <= 991
            ? innovation_slider_flag ||
              (jQuery(".tatva-innovation .innovation-grid-wrapper .innovation-grid .innovation-item .innovation-item-inner .innovation-image img.js-lazy-image").each(function (e) {
                  jQuery(this).attr("src", jQuery(this).attr("data-src")), jQuery(this).removeAttr("data-src"), jQuery(this).removeClass("js-lazy-image");
              }),
              jQuery(".innovation-grid-wrapper .innovation-grid").slick({
                  arrows: !1,
                  infinite: !1,
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  touchThreshold: 10,
                  dots: !0,
                  responsive: [
                      { breakpoint: 999999, settings: "unslick" },
                      { breakpoint: 992, settings: { slidesToShow: 1.5 } },
                      { breakpoint: 480, settings: { slidesToShow: 1.1 } },
                  ],
              }),
              (innovation_slider_flag = !0))
            : (innovation_slider_flag = !1));
}
function hiringmodel_accordian() {
    jQuery(window).width() <= 991
        ? (jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content").first().addClass("active"),
          jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content").first().find(".tatva-tab-body-wrapper").slideDown(),
          jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content h3")
              .unbind("click")
              .click(function () {
                  jQuery(this).parent().hasClass("active")
                      ? (jQuery(this).parent().removeClass("active"), jQuery(this).parent().children(".tatva-tab-body-wrapper").slideUp("slow"))
                      : (jQuery(this).parent().addClass("active"),
                        jQuery(this).parent().children(".tatva-tab-body-wrapper").stop(!0, !0).slideDown("slow"),
                        jQuery(this).parent().siblings(".tatva-tab-content").find(".tatva-tab-body-wrapper").slideUp("slow"),
                        jQuery(this).parent().siblings(".tatva-tab-content").removeClass("active"));
              }))
        : (jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content .tatva-tab-body-wrapper").removeAttr("style"),
          jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content").removeClass("active"));
}
function sticky_header() {
    header_height / 2 < jQuery(window).scrollTop() ? jQuery("body").addClass("sticky-header") : jQuery("body").removeClass("sticky-header");
}
function checkDevice() {
    992 <= jQuery(window).innerWidth() ? jQuery("body").removeClass("mobile").addClass("desktop") : jQuery("body").removeClass("desktop").addClass("mobile");
}
function toggleNavbarMethod() {
    992 <= jQuery(window).innerWidth()
        ? flag &&
          (jQuery("html").hasClass("no-touch") &&
              (jQuery(".menu-navigation>li.has-megamenu>a>.sub-menu-arrow,.menu-navigation>li.has-megamenu.technologies-mega-menu .sub-menu-wrapper .sub-menu .sub-menu-title>.sub-menu-arrow").remove(),
              jQuery(".menu-navigation>li.has-megamenu>a,.menu-navigation>li.has-megamenu.technologies-mega-menu .sub-menu-wrapper .sub-menu .sub-menu-title").removeClass("sub-menu-open"),
              jQuery(".menu-navigation>li.has-megamenu .sub-menu-wrapper,.menu-navigation>li.has-megamenu.technologies-mega-menu .sub-menu-wrapper .sub-menu .sub-menu-inner").removeAttr("style"),
              jQuery("body").removeClass("open-menu"),
              jQuery(".main-nav .nav-icon-mobo").removeClass("open-menu-bar"),
              jQuery("li.has-megamenu").removeClass("active-mobile-menu"),
              jQuery(".menu-navigation>li.has-megamenu").on("mouseenter", function () {
                  jQuery(".menu-navigation>li.has-megamenu").removeClass("active"), jQuery(this).addClass("active"), jQuery("body").addClass("active-nav");
              }),
              jQuery(".menu-navigation>li.has-megamenu").on("mouseleave", function () {
                  jQuery(".menu-navigation>li.has-megamenu").removeClass("active"), jQuery("body").removeClass("active-nav");
              })),
          jQuery("html").hasClass("touch") &&
              (jQuery(".menu-navigation>li.has-megamenu>a>.sub-menu-arrow").remove(),
              jQuery(".menu-navigation>li.has-megamenu>a").removeClass("sub-menu-open"),
              jQuery(".menu-navigation>li.has-megamenu .sub-menu-wrapper").removeAttr("style"),
              jQuery("body").removeClass("open-menu"),
              jQuery(".main-nav .nav-icon-mobo").removeClass("open-menu-bar"),
              jQuery("li.has-megamenu").removeClass("active-mobile-menu"),
              jQuery(".menu-navigation li").unbind("mouseenter mouseleave"),
              jQuery(".menu-navigation>li.has-megamenu").unbind("click"),
              jQuery(".menu-navigation li.has-megamenu>a").on("click", function (e) {
                  jQuery(this).parent(".menu-navigation>li").hasClass("active") ||
                      (e.preventDefault(), jQuery(".menu-navigation>li.has-megamenu").removeClass("active"), jQuery(this).parent(".menu-navigation>li").addClass("active"), jQuery("body").addClass("active-nav"));
              }),
              jQuery(document).click(function (e) {
                  e.stopPropagation(),
                      0 === jQuery(e.target).closest("li.has-megamenu .sub-menu>li>a").length &&
                          0 === jQuery(e.target).closest(".site-header .header-wrapper .navigation-wrapper .main-nav .navigation-inner .menu-navigation>li>a").length &&
                          (jQuery(".menu-navigation>li.has-megamenu").removeClass("active"), jQuery("body").removeClass("active-nav"));
              })),
          (flag = !1))
        : flag ||
          (jQuery(".menu-navigation>li.has-megamenu").removeClass("active"),
          jQuery(".menu-navigation>li.has-megamenu").unbind("mouseenter mouseleave"),
          jQuery(".menu-navigation>li.has-megamenu>a,.menu-navigation>li.has-megamenu.technologies-mega-menu .sub-menu-wrapper .sub-menu .sub-menu-title").append('<span class="sub-menu-arrow"></span>'),
          jQuery(".menu-navigation>li.has-megamenu:first-child").find(".sub-menu-wrapper").slideDown(),
          jQuery(".menu-navigation>li.has-megamenu:first-child>a").addClass("sub-menu-open"),
          jQuery(".menu-navigation>li.has-megamenu>a")
              .unbind("click")
              .on("click", function (e) {
                  "javascript:void(0);" == jQuery(this).attr("href") &&
                      (jQuery(this).siblings(".sub-menu-wrapper").is(":visible")
                          ? (jQuery(this).siblings(".sub-menu-wrapper").slideUp(), jQuery(this).removeClass("sub-menu-open"))
                          : (jQuery(this).parents(".has-megamenu").siblings(".has-megamenu").find(".sub-menu-wrapper").slideUp(),
                            jQuery(this).parents(".has-megamenu").siblings(".has-megamenu").find("a").removeClass("sub-menu-open"),
                            jQuery(this).siblings(".sub-menu-wrapper").stop(!0, !0).slideDown(),
                            jQuery(this).addClass("sub-menu-open")));
              }),
          jQuery(".menu-navigation>li.has-megamenu>a .sub-menu-arrow,.menu-navigation>li.has-megamenu.technologies-mega-menu .sub-menu-wrapper .sub-menu .sub-menu-title")
              .unbind("click")
              .on("click", function (e) {
                  e.stopPropagation(),
                      e.preventDefault(),
                      jQuery(this).parent("a").siblings(".sub-menu-wrapper").is(":visible") || jQuery(this).siblings(".sub-menu-inner").is(":visible")
                          ? (jQuery(this).siblings(".sub-menu-inner").slideUp(),
                            jQuery(this).removeClass("sub-menu-open"),
                            jQuery(this).parent("a").siblings(".sub-menu-wrapper").slideUp(),
                            jQuery(this).parent("a").removeClass("sub-menu-open"))
                          : (jQuery(this).addClass("sub-menu-open"),
                            jQuery(this).siblings(".sub-menu-inner").slideDown(),
                            jQuery(this).parent("li").siblings("li").find(".sub-menu-title").removeClass("sub-menu-open"),
                            jQuery(this).parent("li").siblings("li").find(".sub-menu-inner").slideUp(),
                            jQuery(this).parents(".has-megamenu").siblings(".has-megamenu").find(".sub-menu-wrapper").slideUp(),
                            jQuery(this).parents(".has-megamenu").siblings(".has-megamenu").find("a").removeClass("sub-menu-open"),
                            jQuery(this).parent("a").siblings(".sub-menu-wrapper").stop(!0, !0).slideDown(),
                            jQuery(this).parent("a").addClass("sub-menu-open"));
              }),
          (flag = !0));
}
function footer_accordian() {
    jQuery(window).width() <= 767
        ? jQuery(".footer-middle-part .footer-col-layout-wrapper .footer-col-layout .inner-col:not(.first-col) .down-arrow")
              .unbind("click")
              .click(function () {
                  jQuery(this).parent().hasClass("active")
                      ? (jQuery(this).parent().removeClass("active"), jQuery(this).parent().children(".footer-listing").slideUp("slow"))
                      : (jQuery(this).parent().addClass("active"),
                        jQuery(this).parent().children(".footer-listing").stop(!0, !0).slideDown("slow"),
                        jQuery(this).parent().siblings(".inner-col").find(".footer-listing").slideUp("slow"),
                        jQuery(this).parent().siblings(".inner-col").removeClass("active"));
              })
        : (jQuery(".footer-middle-part .footer-col-layout-wrapper .footer-col-layout .inner-col .footer-listing").removeAttr("style"),
          jQuery(".footer-middle-part .footer-col-layout-wrapper .footer-col-layout .inner-col").removeClass("active"));
}
function general_faq() {
    jQuery(".tatva-faq-section .faq-listing .faq-inner .faq-title")
        .unbind("click")
        .on("click", function () {
            jQuery(this).parent(".faq-inner").hasClass("active")
                ? (jQuery(this).parent(".faq-inner").removeClass("active"), jQuery(this).parent(".faq-inner").children(".faq-detail").slideUp(400))
                : (jQuery(".tatva-faq-section .faq-listing .faq-inner").removeClass("active"),
                  jQuery(this).parent(".faq-inner").addClass("active"),
                  jQuery(".faq-detail").slideUp(400),
                  jQuery(this).parent(".faq-inner").children(".faq-detail").stop(!0, !0).slideDown(400));
        });
}
function slide_effect() {
    var e = jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper ul.tatva-tabs li.current").outerWidth();
    jQuery(".bottom-border").css({ width: e }),
        jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper ul.tatva-tabs li").click(function (e) {
            e.preventDefault();
            jQuery(this).attr("data-tab");
            var t = jQuery(this).prevAll("li"),
                a = 0,
                e = jQuery(this).closest("li").outerWidth();
            jQuery(t).each(function () {
                a += jQuery(this).outerWidth();
            }),
                jQuery(".bottom-border").css({ width: e, left: a });
        });
}
function fullwidthBorder() {
    var e, t;
    $(".grey-border-bottom").length &&
        ((e = $(".outsourcing-content-wrapper li").offset().left), (t = $(window).width() - (e + $(".outsourcing-content-wrapper li").width())), $(".grey-border-bottom").css("left", -e), $(".grey-border-bottom").css("right", -t));
}
var filter_flag = !(text_truncate = function (e, t, a) {
    return null == t && (t = 100), null == a && (a = "..."), e.length > t ? e.substring(0, t - a.length) + a : e;
});
function filter_content_append() {
    jQuery(window).width() <= 767
        ? (filter_flag ||
              (jQuery(".tabing-content-wrapper #by-technologies>ul").appendTo(jQuery(".tabing-wrapper .by-technologies")),
              jQuery(".tabing-content-wrapper #by-industries>ul").appendTo(jQuery(".tabing-wrapper .by-industries")),
              jQuery(".contact-banner-wrapper .left-col").appendTo(jQuery(".mobile-contact-us-section .container")),
              (filter_flag = !0)),
          jQuery(".filter-portfolio-wrapper span")
              .unbind("click")
              .click(function (e) {
                  jQuery("body").addClass("mobile-filter");
              }),
          jQuery(document).on("click", ".close-arrow", function (e) {
              jQuery("body").removeClass("mobile-filter");
          }))
        : (filter_flag &&
              (jQuery(".tabing-wrapper .by-technologies>ul").appendTo(".tabing-content-wrapper #by-technologies"),
              jQuery(".tabing-wrapper .by-industries>ul").appendTo(".tabing-content-wrapper #by-industries"),
              jQuery(".mobile-contact-us-section .container .left-col").prependTo(jQuery(".contact-banner-wrapper")),
              (filter_flag = !1)),
          jQuery(".tabing-wrapper .nav-tab-list li").click(function (e) {
              jQuery(".tabing-wrapper .nav-tab-list li").removeClass("active"), jQuery(this).addClass("active");
              var t = jQuery(this).attr("data-id");
              jQuery(".tabing-content-wrapper .tabing-content").removeClass("active"), jQuery("#" + t).addClass("active");
          }));
}
function sticky_casestudy() {
    var e, t, a, r, n;
    jQuery(".case-studies-landing-page").length &&
        jQuery(window).width() <= 767 &&
        ((r = 0),
        (e = jQuery(".filter-portfolio-wrapper").offset().top),
        (t = jQuery(window).scrollTop()),
        (n = 0),
        (a = jQuery(".case-study-grid-section .filter-portfolio-wrapper .filter-portfolio-inner-wrapper").innerHeight()),
        (n = t + (r = jQuery(".site-header").innerHeight())),
        jQuery(".case-study-grid-wrapper").length &&
            (jQuery(".case-study-grid-wrapper").innerHeight() + jQuery(".tatvasoft-inner-page-banner").innerHeight() + a - r < n
                ? jQuery(".case-study-grid-section .filter-portfolio-wrapper .filter-portfolio-inner-wrapper").fadeOut("fast")
                : jQuery(".case-study-grid-section .filter-portfolio-wrapper .filter-portfolio-inner-wrapper").fadeIn("fast")),
        e < n
            ? (jQuery(".case-study-grid-section .filter-portfolio-wrapper").css("height", a),
              jQuery(".case-study-grid-section .filter-portfolio-wrapper .filter-portfolio-inner-wrapper").addClass("sticky-casestudy"),
              jQuery(".case-study-grid-section .filter-portfolio-wrapper .filter-portfolio-inner-wrapper").css("top", r))
            : (jQuery(".case-study-grid-section .filter-portfolio-wrapper .filter-portfolio-inner-wrapper").removeClass("sticky-casestudy"),
              jQuery(".case-study-grid-section .filter-portfolio-wrapper .filter-portfolio-inner-wrapper").css("top", ""),
              jQuery(".case-study-grid-section .filter-portfolio-wrapper").css("height", "")));
}
function contect_block() {
    991 < jQuery(window).innerWidth() && jQuery("html,body").animate({ scrollTop: 0 }, 1e3);
}
function isNumberValidate(e) {
    e = (e = e || window.event).which || e.keyCode;
    return !(31 < e && (e < 48 || 57 < e || 107 < e || 219 < e || 221 < e) && 40 != e && 32 != e && 41 != e && (e < 43 || 46 < e));
}
function isAlfa(e) {
    e = (e = e || window.event).which || e.keyCode;
    return !(32 < e && (e < 65 || 90 < e) && (e < 97 || 122 < e));
}
function setCookie() {
    var e = jQuery(".single-portfolio").data("page");
    null != e &&
        ((e = { pagename: e }),
        $.ajax({
            type: "POST",
            url: "https://www.tatvasoft.com/ajax-file.php",
            dataType: "json",
            cache: !1,
            data: e,
            success: function (e) {
                1 == e.success && (jQuery(".single-portfolio").html(""), jQuery(".single-portfolio").html(e.message));
            },
        }));
}
jQuery(document).ready(function () {
    $(".by-industries").on("click", function (e) {
        e.stopPropagation(), $.cookie("filter-cookie", "industry", { path: "/" });
    }),
        $(".by-technologies").on("click", function (e) {
            e.stopPropagation(), $.cookie("filter-cookie", null, { path: "/" });
        }),
        $(".by-technologies").hasClass("active") && $.cookie("filter-cookie", null, { path: "/" }),
        $(".by-industries").hasClass("active") && $.cookie("filter-cookie", "industry", { path: "/" }),
        jQuery(".single-portfolio").length && setCookie(),
        scrollspy_block(),
        $(document).on("click", ".load-more-btn.load-portfolio", function () {
            $(".portfolio-loader").addClass("active"), $(".load-more-btn").removeClass("hide-item");
            var e = $(".hide-page").val(),
                t = 15 * (parseInt(e) + 1);
            for (i = 1; i <= t; i++) $(".item-" + i).removeClass("hide-item");
            0 == $(".item-" + t).length && $(".load-more-btn").addClass("hide-item"), $(".hide-page").val(parseInt(e) + 1), $(".portfolio-loader").removeClass("active");
        }),
        setTimeout(function () {
            jQuery(".technology-stack-grid").length && jQuery(".technology-stack-grid").masonry({ itemSelector: ".grid-item" });
        }, 1500),
        fullwidthBorder(),
        jQuery(".scroll-to-content").length &&
            jQuery(".outsourcing-inner-page .scroll-to-content").on("click", function (e) {
                e.preventDefault(), (_this = jQuery(this));
                (e = _this.attr("href").split("#")[1]), (e = jQuery("#" + e).offset().top - 83);
                jQuery("body,html").animate({ scrollTop: e }, 1e3);
            }),
        jQuery(".tatva-case-study-detail-inner-wrapper .case-study-sidebar .case-study-sidebar-item h3").click(function () {
            jQuery(this).parents(".case-study-sidebar-item").toggleClass("dropdown"), jQuery(this).closest(".case-study-sidebar-item").find("ul").stop(!0, !0).slideToggle();
        }),
        filter_content_append(),
        sticky_casestudy(),
        jQuery(".tatva-home-technology .tatva-home-technology-inner .tatva-technology-btn .btn").on("mouseenter", function () {
            768 <= jQuery(window).innerWidth() && jQuery(this).parents(".tatva-home-technology-inner").siblings(".tatva-home-technology-inner-bg").addClass("scaled-bg");
        }),
        jQuery(".tatva-home-technology .tatva-home-technology-inner .tatva-technology-btn .btn").on("mouseleave", function () {
            768 <= jQuery(window).innerWidth() && jQuery(this).parents(".tatva-home-technology-inner").siblings(".tatva-home-technology-inner-bg").removeClass("scaled-bg");
        }),
        jQuery(".tatva-hiring-tab-wrapper ul.tatva-tabs li").click(function () {
            var e = jQuery(this).attr("data-tab");
            jQuery(".tatva-hiring-tab-wrapper ul.tatva-tabs li").removeClass("current"),
                jQuery(".tatva-tab-content").removeClass("current"),
                jQuery(this).addClass("current"),
                jQuery("#" + e).addClass("current"),
                jQuery(".tatva-hiring-models-section .tatva-hiring-tab-wrapper .tatva-tab-content .tatva-hiring-col-wrapper .tatva-hiring-col .tatva-inner-col .tatva-inner-content").equalHeight();
        }),
        jQuery(".tatvasoft-development-case-study .inner-case-study-detail .inner-case-study-detail-block-wrapper").length &&
            jQuery(".tatvasoft-development-case-study .inner-case-study-detail .inner-case-study-detail-block-wrapper").slick({
                dots: !0,
                arrows: !0,
                slidesToScroll: 1,
                autoplay: !1,
                infinite: !1,
                pauseOnHover: !1,
                pauseOnFocus: !1,
                responsive: [{ breakpoint: 992, settings: { adaptiveHeight: !0 } }],
            }),
        jQuery(".case-study-related-post .case-study-grid-wrapper").length &&
            jQuery(".case-study-related-post .case-study-grid-wrapper").slick({ dots: !1, arrows: !0, slidesToScroll: 1, autoplay: !1, infinite: !1, pauseOnHover: !1, pauseOnFocus: !1 }),
        jQuery(".call-now-link").click(function (e) {
            contect_block();
        }),
        jQuery(".call-now-link").click(function (e) {
            e.preventDefault(), jQuery("body").toggleClass("call-now-open");
        }),
        jQuery(".call-now-close").click(function (e) {
            e.preventDefault(), jQuery("body").removeClass("call-now-open");
        }),
        jQuery(".escribe-wrapper .portfolio-image-wrapper .portfolio-mobile-image").length &&
            jQuery(".escribe-wrapper .portfolio-image-wrapper .portfolio-mobile-image").slick({ dots: !0, arrows: !1, slidesToScroll: 1, autoplay: !0, infinite: !0, pauseOnHover: !1, pauseOnFocus: !1, autoplaySpeed: 2e3 }),
        jQuery('a.contact-form-btn[href = "#"],a.other-service-grid-link[href = "#"]').click(function (e) {
            e.preventDefault();
        }),
        jQuery(".cookie-bar").css("opacity", "1");
    var e = new Date(),
        t = e.getTime() + 2592e6;
    e.setTime(t),
        document.cookie.indexOf("ModalShown=true") < 0
            ? jQuery("#cookie-button").click(function () {
                  document.cookie = "ModalShown=true; expires=" + e.toGMTString() + ";path=/";
              })
            : jQuery(".cookie-bar").remove(),
        $(".cookie-bar .cookie-bar-inner #cookie-button").click(function () {
            var e = jQuery(this);
            jQuery(this).closest(".cookie-bar").slideUp();
            jQuery("header").innerHeight();
            setTimeout(function () {
                e.closest(".cookie-bar").remove();
            }, 300);
        }),
        jQuery(".custome-dropdown").length &&
            jQuery(".custome-dropdown").each(function () {
                var e = jQuery(this),
                    t = e.attr("data-placeholder");
                e.select2({ dropdownParent: e.closest("div"), placeholder: t });
            }),
        jQuery(document).on("focus", ".select2-selection.select2-selection--single", function (e) {
            jQuery(this).closest(".select2-container").siblings("select:enabled").select2("open");
        }),
        jQuery("select.select2").on("select2:closing", function (e) {
            jQuery(e.target)
                .data("select2")
                .$selection.one("focus focusin", function (e) {
                    e.stopPropagation();
                });
        });
    jQuery(".site-header").innerHeight();
    checkDevice(),
        $("body").hasClass("desktop") && (flag = !0),
        $("body").hasClass("mobile") && (flag = !1),
        toggleNavbarMethod(),
        sticky_header(),
        hiringmodel_accordian(),
        setTimeout(function () {
            slide_effect(), why_tatvasoft_slider();
        }, 350),
        equalHeight(),
        max_equal_height(),
        footer_accordian(),
        general_faq(),
        innovation_slider(),
        jQuery(".nav-icon-mobo").click(function () {
            jQuery("body").toggleClass("open-menu"), jQuery(this).toggleClass("open-menu-bar"), jQuery("li.has-megamenu").removeClass("active-mobile-menu");
        }),
        $(".your-document").on("change", function () {
            var e,
                t = $(this)[0].files.length,
                a = $(this).siblings(".file-msg");
            1 === t ? ((e = $(this).val().split("\\").pop()), (e = text_truncate(e, 40)), a.text(e)) : a.text(t + " files selected");
        }),
        (WebFontConfig = { google: { families: ["Open+Sans:300,400,600,700&display=swap"] } }),
        (function () {
            var e = document.createElement("script");
            (e.src = "https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"), (e.type = "text/javascript"), (e.async = "true");
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        })(),
        setTimeout(function (e) {
            equalHeight();
        }, 500),
        (jQuery("html").hasClass("no-webp") || jQuery("body").hasClass("safari")) &&
            jQuery(".webp-images").each(function () {
                var e = jQuery(this).attr("data-webp"),
                    t = jQuery(this).attr("srcset");
                jQuery(this).hasClass("img-webp") ? (void 0 !== t && !1 !== t ? jQuery(this).attr("srcset", e) : jQuery(this).attr("src", e)) : jQuery(this).css("background-image", "url(" + e + ")");
            }),
        $(window).on("orientationchange", function () {
            jQuery(".site-header").innerHeight();
            innovation_slider(),
                general_faq(),
                setTimeout(function () {
                    equalHeight(), why_tatvasoft_slider();
                }, 300);
        }),
        $(".landing-software-expert-wrapper form").on("submit", function (e) {
            e.preventDefault();
            var t = !0,
                a = $(this);
            a.find(".form-group").removeClass("enabled-error"),
                a.find(".form-error-text-wrapper span.success-text").removeClass("active"),
                a.find(".form-error-text-wrapper span.error-text").removeClass("active"),
                a.find("input").each(function () {
                    "" == $(this).val() && "ld_banner_phone" != $(this).attr("id") && (t = !1);
                }),
                a.find("textarea").each(function () {
                    "" == $(this).val() && (t = !1);
                });
            var r = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
            "" == a.find("input#ld_banner_email").val() || r.test(a.find("input#ld_banner_email").val()) || (t = !1);
            e = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
            if (("" == a.find('input[name="ld_banner_phone"]').val() || e.test($('input[name="ld_banner_phone"]').val()) || (t = !1), 0 == t))
                return (
                    a.find(".submit-btn-wrapper").removeClass("active"),
                    "" == a.find("input#ld_banner_email").val() || r.test(a.find("input#ld_banner_email").val())
                        ? $("input#mail").parents(".form-group").find(".error-text").html("Please enter your Email")
                        : ((t = !1), $("input#ld_banner_email").parents(".form-group").addClass("enabled-error"), $("input#ld_banner_email").parents(".form-group").find(".error-text").html("Please enter valid Email")),
                    "" == a.find('input[name="ld_banner_phone"]').val() ||
                        e.test($('input[name="ld_banner_phone"]').val()) ||
                        ((t = !1), $("input#ld_banner_phone").parents(".form-group").addClass("enabled-error"), $("input#ld_banner_phone").parents(".form-group").find(".error-text").html("Please enter valid Phone")),
                    a.find("input").each(function () {
                        "" == $(this).val() && "ld_banner_phone" != $(this).attr("id") && ((t = !1), $(this).parents(".form-group").addClass("enabled-error"));
                    }),
                    a.find("textarea").each(function () {
                        "" == $(this).val() && ((t = !1), $(this).parents(".form-group").addClass("enabled-error"));
                    }),
                    !1
                );
            a.find(".submit-btn-wrapper").addClass("active");
            (r = a.serialize()), (e = a.attr("action"));
            $.ajax({
                type: "POST",
                data: r,
                dataType: "json",
                url: e,
                success: function (e) {
                    1 == e.success ? (a.trigger("reset"), $(".form-group").removeClass("enabled-error"), (window.location.href = e.redirect)) : a.find(".form-error-text-wrapper span.error-text").addClass("active"),
                        a.find(".submit-btn-wrapper").removeClass("active");
                },
            });
        }),
        /Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || LazyLoad.init(),
        (/Edge\/\d./i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent)) &&
            jQuery(".js-lazy-image").each(function () {
                jQuery(this).attr("src", jQuery(this).attr("data-src")), jQuery(this).removeAttr("data-src"), jQuery(this).removeClass("js-lazy-image");
            }),
        jQuery(".modal-btn").click(function (e) {
            e.preventDefault(), jQuery("body").addClass("modal-open");
            (e = jQuery(this).attr("data-link")), (e = jQuery("[data-target='" + e + "']"));
            e.fadeIn(300), e.addClass("visible");
        }),
        jQuery(".modal-backdrop,.modal-close").click(function () {
            jQuery(this)
                .closest(".custom-modal")
                .removeClass("visible")
                .fadeOut(300, function () {
                    jQuery("body").removeClass("modal-open");
                });
        });
}),
    jQuery(window).on("load", function () {
        jQuery(".load-more-wrapper .border-btn").length && jQuery(".load-more-wrapper .border-btn").addClass("view-btn"),
            slide_effect(),
            fullwidthBorder(),
            sticky_header(),
            setTimeout(function () {
                jQuery(".technology-stack-grid").length && jQuery(".technology-stack-grid").masonry({ itemSelector: ".grid-item" });
            }, 1e3);
    }),
    jQuery(window).resize(function () {
        scrollspy_block(),
            setTimeout(function () {
                why_tatvasoft_slider();
            }, 300),
            sticky_casestudy(),
            footer_accordian(),
            filter_content_append(),
            fullwidthBorder(),
            setTimeout(function () {
                header_height = jQuery(".site-header").innerHeight();
            }, 100),
            checkDevice(),
            toggleNavbarMethod(),
            general_faq(),
            hiringmodel_accordian(),
            max_equal_height(),
            setTimeout(function () {
                slide_effect();
            }, 700),
            setTimeout(function () {
                equalHeight();
            }, 900),
            sticky_header(),
            innovation_slider();
    }),
    jQuery(window).on("scroll", function () {
        scrollspy(), sticky_casestudy(), sticky_header(), jQuery(".technology-stack-grid").length && jQuery(".technology-stack-grid").isInViewport && jQuery(".technology-stack-grid").masonry({ itemSelector: ".grid-item" });
    });
