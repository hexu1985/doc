
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"495",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C=document.body.className.indexOf(\"signed-in\")\u0026\u0026-1==document.body.className.indexOf(\"admin-user\")})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ",["escape",["macro",1],8,16],".parentElement.querySelector(\"h3\").innerText}catch(a){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.href.replace(\/[\\?\u0026]i=......\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){localStorage.setItem(a,JSON.stringify(b))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,f,c,d){\"string\"===typeof a\u0026\u0026(a=[a]);c||(c=1E4);d||(d=100);c=Math.round(c\/d);var g=0,h=a.length,b,e,k=window.setInterval(function(){for(b=0;b\u003Ch\u0026\u0026!(e=0===a[b].indexOf(\"\/\/\")?document.evaluate(a[b],document,null,XPathResult.ANY_TYPE,null).iterateNext():document.querySelector(a[b]));b++);if(e||g++\u003Ec)window.clearInterval(k),e\u0026\u0026f()},d)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c,e){var a=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")};window.analytics\u0026\u0026\"string\"===typeof d\u0026\u0026-1\u003C[\"Success\",\"Viewed\"].indexOf(d)\u0026\u0026\"string\"===typeof b\u0026\u0026\"string\"===typeof c\u0026\u0026(\"object\"===typeof e?window.analytics.trackLink(e,\"Experiment \"+d,{experiment_id:a(b),experiment_name:b,variation_id:a(c),variation_name:a(c)}):window.analytics.track(\"Experiment \"+d,{experiment_id:a(b),\nexperiment_name:b,variation_id:a(c),variation_name:a(c)}))}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_anonymous_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){try{var e=function(a){return a.toString().toLowerCase().replace(\/\\s+\/g,\"-\").replace(\/[^\\w\\-]+\/g,\"\").replace(\/\\-\\-+\/g,\"-\").replace(\/^-+\/,\"\").replace(\/-+$\/,\"\")},l=function(a){return\"function\"===typeof a?a():\"all\"===a?!0:\"non-customers\"===a?null===window.analytics.user().id():\"customers\"===a?null!==window.analytics.user().id():!1},g=function(a){var d=0;if(0==a.length)return d;for(b=0;b\u003Ca.length;b++)c=a.charCodeAt(b),d=(d\u003C\u003C5)-d+c,d\u0026=d;return Math.abs(d)},m=function(a,d){return parseInt(a.substr(d%\n(a.length-1),2),16)\/255},h=function(){if(l(a.audience)||f){var b=m(a.anonymousid,a.seed);if(b\u003C=a.pct||f)variant=f||a.variants[Math.floor(b\/a.pct*a.variants.length)],variant.func(),window.analytics.track(\"Experiment Viewed\",{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name)}),window.setTimeout(function(){var d=document.querySelectorAll('*[data-js\\x3d\"gtm_ab_success\"]'),b;for(b=0;b\u003Cd.length;b++)window.analytics.trackLink(d[b],\"Experiment Success\",\n{experiment_id:e(a.name),experiment_name:a.name,variation_id:e(variant.name),variation_name:e(variant.name),success_details:d[b].getAttribute(\"href\")||\"\"})},100)}};\"audience\"in a||(a.audience=\"all\");\"pct\"in a||(a.pct=1);if(\"string\"===typeof a.name\u0026\u0026\"variants\"in a\u0026\u0026a.variants instanceof Array){var f=null;if(0\u003C=window.location.search.indexOf(\"gtm_abtest_force\"))for(var b=0;b\u003Ca.variants.length;b++)\"Test\"===a.variants[b].name\u0026\u0026(f=a.variants[b]);if(!document.querySelector('*[data-gtm_ab\\x3d\"'+e(a.name)+\n'\"]'))if(\"seed\"in a||(a.seed=g(a.name)),(g=",["escape",["macro",7],8,16],")\u0026\u0026\"all\"===a.audience)a.anonymousid=g.replace(\/%22\/g,\"\").replace(\/-\/g,\"\"),h();else var n=0,p=window.setInterval(function(){if(window.analytics||40\u003Cn++)window.clearInterval(p),window.analytics\u0026\u0026window.analytics.ready(function(){a.anonymousid=window.analytics.user().anonymousId().replace(\/-\/g,\"\");h()})},50)}}catch(k){console.log(\"runtest err\",k.message)}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return(a=localStorage.getItem(a))\u0026\u0026JSON.parse(a)}})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],";return a=null==a||\"\"==a?\"undefined\":100\u003Ca.length?a.substring(0,100).toLowerCase()+\"...\":a.toLowerCase()})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"recentlySignedUp"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"staging",
      "vtp_name":"marketoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionType"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"production",
      "vtp_name":"conversionEnvironment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"userDropletCount"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__r"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2,
      "vtp_defaultValue":"false",
      "vtp_name":"userOrOrgHasCreatedDroplets"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"window.google_tag_manager.dataLayer.gtmLoad"
    },{
      "function":"__j",
      "vtp_name":"window.ub.page.variantId"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",30],
      "vtp_defaultValue":"_",
      "vtp_map":["list",["map","key","survey","value","Thanks for filling out our survey! We genuinely appreciate customer feedback."],["map","key","swag","value","Use promo code DOswag10 on Billing page for $10 credit. Valid for new users only."]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"signed_in"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"ajs_user_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"refcode"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"last_logged_in_at"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"optimizelySegments"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_gtmab_ft"
    },{
      "function":"__j",
      "vtp_name":"window.navigator.userAgent"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"pcode",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pcode"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.droplet_count"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audience"
    },{
      "function":"__j",
      "vtp_name":"window.currentUser.onboarding_step"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"model.user.email"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_eventCategory":"Signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"Registration",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Conversion",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",17],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":8
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",77,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":16
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"1010666955",
      "vtp_conversionLabel":"m4TPCP2NtQIQy5v24QM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":18
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",75,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":24
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PageView\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":44
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",74,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":45
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=cpljCNe412UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":78
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=RNOTEOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":82
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",76,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":83
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",73,0]],
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqsf\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":84
    },{
      "function":"__img",
      "teardown_tags":["list",["tag",78,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":88
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/googleads.g.doubleclick.net\/pagead\/viewthroughconversion\/1010666955\/?guid=ON\u0026amp;script=0\u0026amp;data.userengaged=true",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":89
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Product",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Create",
      "vtp_eventLabel":"Droplet",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":116
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["macro",3]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":125
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=AddPaymentInfo\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":135
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=CompleteRegistration\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":136
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=EUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":137
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=PUOC\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":138
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.facebook.com\/tr?id=1428881624071898\u0026ev=Purchase\u0026noscript=1",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":141
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/www.googleadservices.com\/pagead\/conversion\/1010666955\/?label=i4IrCJHK53UQy5v24QM\u0026amp;guid=ON\u0026amp;script=0",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":142
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":146
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":152
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/bat.bing.com\/action\/0?ti=5871022\u0026Ver=2\u0026evt=custom\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":153
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":155
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=88957\u0026conversionId=241522\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":156
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=Generic",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"1",
      "vtp_orderId":["macro",15],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"PiHFCPrC130QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":167
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","location","value",["template",["macro",21],"\u0026var=",["macro",28]]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_trackingId":"UA-26573244-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":171
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/alb.reddit.com\/snoo.gif?q=CAAHAAABAAoACQAAABHN6HlAAA==\u0026s=L9dW-RSPEAGmB8zBoGqMLMP4XUtZODdwovDmPJhIuLs=",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":172
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdos",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":173
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"blogdou",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":174
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochpu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]],["map","key","u2","value",["macro",21]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digochps",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":176
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotrys",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalStandard":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":177
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"digotryu",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":178
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoaps",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":180
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u1","value",["macro",29]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"digocean",
      "vtp_useImageTag":true,
      "vtp_activityTag":"trydoapc",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"8354950",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",22],
      "vtp_url":["macro",20],
      "vtp_useImageTagIsTrue":true,
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":181
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"GaeYCJzr8H4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":182
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":183
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/dc.ads.linkedin.com\/collect\/?pid=293738\u0026conversionId=333506\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":184
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"836091520",
      "vtp_conversionLabel":"A0tMCLK24n4QgP3WjgM",
      "vtp_url":["macro",20],
      "vtp_enableProductReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":187
    },{
      "function":"__asp",
      "once_per_event":true,
      "vtp_pixelId":"4IDGVTPEAFC4TM2QKYNQ53",
      "vtp_customerId":"S4BPDI4QWNB57PEKEZSLIP",
      "vtp_conversionValueCurrency":"USD",
      "tag_id":194
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":195
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"\/\/d.adroll.com\/ipixel\/S4BPDI4QWNB57PEKEZSLIP\/4IDGVTPEAFC4TM2QKYNQ53?name=be9695fc",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":197
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/b38c184aa72c43ef8fb074e64602b64e\/pixel?tag=ViewContent",
      "tag_id":201
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":207
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/sp.analytics.yahoo.com\/spp.pl?a=10000\u0026.yp=10066170\u0026ec=Conversion",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":208
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/dc.ads.linkedin.com\/collect\/?pid=532748\u0026conversionId=682001\u0026fmt=gif",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",22],
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":218
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":227
    },{
      "function":"__cl",
      "tag_id":228
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"300000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"758737_224",
      "tag_id":229
    },{
      "function":"__cl",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E",["escape",["macro",7],8,16],"\u0026\u002665\u003EparseInt(",["escape",["macro",7],8,16],".substr(4,2),16)\u0026\u0026(window._fs_debug=!1,window._fs_host=\"www.fullstory.com\",window._fs_org=\"1XYq\",window._fs_namespace=\"FS\",function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,\nh),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=function(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})}(window,document,window._fs_namespace,\"script\",\"user\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar $alertElement=document.querySelector(\"p[data-home-announcement-message]\"),$alertContent=\"",["escape",["macro",31],7],"\";$alertElement\u0026\u002620\u003C$alertContent.length\u0026\u0026($alertElement.innerHTML=$alertContent);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._fs_debug=!1;window._fs_host=\"www.fullstory.com\";window._fs_org=\"1XYq\";window._fs_namespace=\"FS\";\n(function(e,f,k,l,g,d,c,h){k in e\u0026\u0026e.console\u0026\u0026e.console.log?e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):(c=e[k]=function(a,b){c.q?c.q.push([a,b]):c._api(a,b)},c.q=[],d=f.createElement(l),d.async=1,d.src=\"https:\/\/\"+_fs_host+\"\/s\/fs.js\",h=f.getElementsByTagName(l)[0],h.parentNode.insertBefore(d,h),c.identify=function(a,b){c(g,{uid:a});b\u0026\u0026c(g,b)},c.setUserVars=function(a){c(g,a)},c.identifyAccount=function(a,b){d=\"account\";b=b||{};b.acctId=a;c(d,b)},c.clearUserCookie=\nfunction(a,b){for(a=f.domain;;){f.cookie=\"fs_uid\\x3d;domain\\x3d\"+a+\";path\\x3d\/;expires\\x3d\"+new Date(0);b=a.indexOf(\".\");if(0\u003Eb)break;a=a.slice(b+1)}})})(window,document,window._fs_namespace,\"script\",\"user\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":113
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(0\u003C=document.cookie.indexOf(\"signed_in\\x3dtrue\")||0\u003C=document.cookie.indexOf(\"last_logged_in_at\\x3d\")){var links=document.querySelectorAll('a[href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?onboarding_origin\\x3dspaces\"]'),linkslen=links.length,i;for(i=0;i\u003Clinkslen;i++)links[i].setAttribute(\"href\",\"https:\/\/cloud.digitalocean.com\/spaces\")};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(-1\u003Cwindow.location.search.indexOf(\"show_features\")){var f=document.querySelector('*[data-ab-test\\x3d\"featuresSection\"]');f\u0026\u0026(f.style.display=\"block\")}}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":148
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=AW-836091520\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",\"AW-836091520\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar wait_count=0,jQWait=window.setInterval(function(){window.jQuery\u0026\u0026function(){window.clearInterval(window.jQWait);var g=window.BelowTutorialPanel=function(b){$.extend(this,{activeTest:\"default\",panelBodyTarget:\"div.tutorial-ctas\",panelContentTarget:\"div.cta-description\",tagSelector:'a.tag:contains(\"$TAG\")',experimentName:\"Below Question Panel\",scrollCheckInterval:1E3},b||{},{event_fired:!1});this.initialize()};$.extend(g.prototype,{initialize:function(){this.userTraits={};this.analyticsActive()\u0026\u0026\n(this.userTraits=window.analytics.user().traits());this.audience=this.getAudience(Object.keys(this.panelData),this.parseCookies(document.cookie),this.userTraits);this.panel=this.getPanel(this.panelData[this.audience]);this.panelContent=this.panel.content[Math.floor(Math.random()*this.panel.content.length)];$(\"Footer\").css({\"margin-top\":0,\"border-top\":\"#444\",\"box-shadow\":\"0 0 20px rgba(0,0,0,0.1)\"}).before('\\x3cdiv class\\x3d\"tutorial-single\"\\x3e\\x3cdiv class\\x3d\"tutorial-footer\"\\x3e\\x3cdiv class\\x3d\"tutorial-ctas\"\\x3e \\x3cdiv class\\x3d\"section-content\"\\x3e\\x3cdiv class\\x3d\"cta-description\"\\x3e\\x3ch2\\x3e\\x3c\/h2\\x3e\\x3cp\\x3e\\x3c\/p\\x3e\\x3ca class\\x3d\"cloud-tutorial-cta\"\\x3e\\x3c\/a\\x3e\\x3c\/div\\x3e \\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e');\nthis.$panelBody=$(\".tutorial-ctas\");this.$panelBody.attr(\"style\",this.panel.style).css({\"border-bottom\":\"none\"}).find(\"h2\").html(this.panelContent.title||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\"}).end().find(\"p\").html(this.panelContent.desc||\"\").css({color:this.panel.darkBG?\"#FFF\":\"inherit\",padding:\"15px 0\",\"line-height\":\"1.3em\"}).end().find(\".cloud-tutorial-cta\").text(this.panelContent.cta||\"\").attr(\"style\",this.panel.darkBG?\"background:#FFF;color:#0069FF;\":\"\").attr(\"href\",this.panelContent.url+\n(0\u003Cthis.panelContent.url.indexOf(\"?\")?\"\\x26\":\"?\")+\"utm_source\\x3dcomm_exp\\x26utm_medium\\x3dbtq_\"+this.audience+\"_\"+this.panel.name);this.initTracking(this.$panelBody.offset().top,this.$panelBody.height(),this.audience+\" \\x3e \"+this.panel.name+\" \\x3e \"+this.panelContent.cta||\"\",this.$panelBody.find(\"a\"))},getPanel:function(b){var c=b.length,a,d,e=[],f=[];for(a=0;a\u003Cc;a++){if(\"tags\"in b[a])for(d=0;d\u003Cb[a].tags.length;d++)if(0\u003C$(this.tagSelector.replace(\"$TAG\",b[a].tags[d])).length)return b[a];\"priority\"in\nb[a]?0\u003Cb[a].priority\u0026\u0026(e.push({panel:a,priority:b[a].priority}),f.push(b[a])):f.push(b[a])}if(0\u003Ce.length)for(a=0;a\u003Ce.length;a++)if(Math.random()\u003Ce[a].priority)return b[e[a].panel];return f[Math.floor(Math.random()*f.length)]},getAudience:function(b,c,a){return-1\u003Cb.indexOf(\"customers\")\u0026\u0026(\"signed_in\"in c||\"ajs_user_id\"in c\u0026\u002610\u003Cc.ajs_user_id.length)?\"customers\":-1\u003Cb.indexOf(\"refcode\")\u0026\u0026\"refcode\"in c?\"refcode\":-1\u003Cb.indexOf(\"buildmode\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===\na.recent[3].length\u0026\u00268\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"buildmode\":-1\u003Cb.indexOf(\"regulars\")\u0026\u0026\"recent\"in a\u0026\u0026a.recent instanceof Array\u0026\u00264===a.recent.length\u0026\u00262===a.recent[3].length\u0026\u002630\u003EMath.round(+new Date\/864E5)-a.recent[3][1]?\"regulars\":\"everyone_else\"},analyticsActive:function(){return\"object\"===typeof window.analytics},parseCookies:function(b){b=b.split(\";\");var c={},a;for(a=0;a\u003Cb.length;a++){var d=b[a].split(\"\\x3d\");c[d[0].trim()]=d[1].trim()}return c},convertToId:function(b){return\"string\"===\ntypeof b?b.replace(\/\\W+\/g,\"_\").toLowerCase():\"\"},initTracking:function(b,c,a,d){if(this.analyticsActive()){var e,f=window.setInterval(function(){e=$(window).scrollTop();e+$(window).height()\u003Eb-c\u0026\u0026(window.clearInterval(f),analytics.track(\"Experiment Viewed\",{experimentId:this.convertToId(this.experimentName),experimentName:this.experimentName,variationId:this.convertToId(a),variationName:a}))}.bind(this),1E3);analytics.trackLink(d,\"Experiment Success\",{experimentId:this.convertToId(this.experimentName),\nexperimentName:this.experimentName,variationId:this.convertToId(a),variationName:a})}}});new g({panelData:{refcode:[{name:\"referrals\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/referrals.png); background-color:#1b78f8; background-position:bottom center;\",darkBG:!0,content:[{title:\"Your free credit awaits!\",desc:\"Sign up to redeem your credit, and start deploying your sites and apps within minutes.\",cta:\"Use Your Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"},\n{title:\"Free credit active.\",desc:\"You came to digitalocean.com via someone\\x26apos;s referral link in the past month,\\x3cbr\\x3e making you eligible for $10 credit when you sign up for an account.\",cta:\"Redeem Credit\",url:\"https:\/\/cloud.digitalocean.com\/registrations\/new\"}]}],customers:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",\ndesc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",cta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",tags:[\"Docker\"],priority:.01,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,\ncontent:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",cta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",tags:[\"Jenkins\"],priority:.01,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",cta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",tags:[\"WordPress\"],priority:.01,style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",cta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",\ndarkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",\ndesc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eDigitalOcean Kubernetes is now available. Spin up a cluster today.\\x3c\/span\\x3e\",\ncta:\"Get Started\",url:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}],buildmode:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",desc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",\ncta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",priority:.01,tags:[\"Docker\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",priority:.01,tags:[\"Jenkins\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",priority:.01,tags:[\"WordPress\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",\nurl:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},\n{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eWe just made it easier for you to deploy faster.\\x3c\/span\\x3e\",cta:\"Try Free\",\nurl:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}],regulars:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",desc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",\ncta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",priority:.01,tags:[\"Docker\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",priority:.01,tags:[\"Jenkins\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",priority:.01,tags:[\"WordPress\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",\nurl:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},\n{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eWe just made it easier for you to deploy faster.\\x3c\/span\\x3e\",cta:\"Try Free\",\nurl:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}],everyone_else:[{name:\"marketplace\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",priority:.75,darkBG:!0,content:[{title:\"Introducing: DigitalOcean Marketplace\",desc:\"38 Pre-Built Open-Source Applications ready to deploy on DigitalOcean Droplets in less than 60 Seconds. Including LAMP, Docker, GitLab, Jenkins, Plesk, cPanel, WordPress, and many more.\",\ncta:\"View Applications\",url:\"https:\/\/marketplace.digitalocean.com\/category\/all\"}]},{name:\"marketplace_docker\",priority:.01,tags:[\"Docker\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Docker One-Click Application\",desc:\"Start running your Docker containers faster with less upfront configuration. The Docker One-Click on DigitalOcean comes with Docker CE and Docker Compose pre-installed.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/docker\"}]},{name:\"marketplace_jenkins\",priority:.01,tags:[\"Jenkins\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Jenkins One-Click Application\",desc:\"Start building Jenkins automation pipelines faster. The CloudBees Jenkins One-Click automates the initial setup of Jenkins, Apache, and a recommended catalog of tested plugins.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/cloudbees-jenkins-distribution\"}]},{name:\"marketplace_wordpress\",priority:.01,tags:[\"WordPress\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/marketplace.jpg); background-color:#0e46f9; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"DigitalOcean WordPress One-Click App\",desc:\"Start building your WordPress site faster with a DigitalOcean WordPress One-Click that automates the initial setup of the application, firewalls and database.\",\ncta:\"Read More\",url:\"https:\/\/marketplace.digitalocean.com\/apps\/wordpress\"}]},{name:\"managed_databases_psql\",tags:[\"PostgreSQL\"],style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",\nurl:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},{name:\"managed_databases_general\",style:\"background-image:url(https:\/\/assets.digitalocean.com\/labs\/btp\/managed-db.jpg); background-color:#071a90; background-position:bottom center; padding-top:-10px;\",darkBG:!0,content:[{title:\"Introducing: Managed Databases for PostgreSQL\",desc:\"Run your Postgres database on DigitalOcean with worry-free maintenance, high availability, free backups and more.\",cta:\"Start Now\",url:\"https:\/\/www.digitalocean.com\/products\/managed-databases\/\"}]},\n{name:\"kubernetes_hard\",style:\"background-position:bottom center; background-repeat-x:repeat; background-image: url('https:\/\/assets.digitalocean.com\/labs\/btp\/kubernetesbg.png?2'), linear-gradient(to bottom, #1e5ff4 1%,#2b3ade 100%);\",darkBG:!0,content:[{title:\"\",desc:\"\\x3cimg src\\x3d'https:\/\/assets.digitalocean.com\/labs\/btp\/k8shard.png?1' style\\x3d'max-height:80px;max-width:90%;'\\x3e\\x3cbr\\x3e\\x3cspan style\\x3d'font-size:20px;'\\x3eWe just made it easier for you to deploy faster.\\x3c\/span\\x3e\",cta:\"Try Free\",\nurl:\"https:\/\/www.digitalocean.com\/products\/kubernetes\/\"}]}]}})}();10\u003Cwait_count++\u0026\u0026window.clearInterval(window.jQWait)},100);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":189
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sub=document.querySelector(\".subscribe\");0\u003Cwindow.location.search.indexOf(\"\\x26subscribe\")\u0026\u0026null!==sub.offsetParent\u0026\u0026sub.click();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{window.analytics\u0026\u0026analytics.ready(function(){var c=document.querySelectorAll(\".bui-Button\"),e=c.length,a,d={};for(a=0;a\u003Ce;a++){var b=c[a].value||c[a].innerText;b in d?d[b]++:d[b]=1;analytics.trackLink(c[a],\"Web Interaction\",{action:\"click\",category:\"button\",name:b+(1\u003Cd[b]?\" - \"+d[b]:\"\")})}})}catch(c){};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cstyle\u003E\n  ._gtm_announce-wrap {\n    background: none;\n    width: 100%;\n    z-index: 9;\n    position:relative;\n  }\n  ._gtm_announce-wrap a {\n    display:block;\n    position:relative;\n    top: -90px;\n    margin-bottom: -76px;\n    width:100%;\n    max-width:1168px;\n    background-color: #00b47b;\n    border: 1px solid #009969;\n    border-radius: 5px;\n    box-shadow:0 2px 4px rgba(0,0,0,0.06);\n    padding: 8px 16px;\n    color:#fff;\n    text-align:center;\n  }\n  ._gtm_announce-wrap a strong {\n    color:#fff;\n  }\n  .Home-hero .www-Container ._gtm_announce-wrap a {\n    top: 8px;\n    margin-bottom: -44px; \n  }\n  .GraphicalHero .www-Container ._gtm_announce-wrap a {\n    top: -112px;\n  }\n  @media (max-width: 768px) {\n    .GraphicalHero .www-Container ._gtm_announce-wrap a {\n      top: 0px;\n      margin-bottom:20px;\n    }\n  }\n\u003C\/style\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(-1\u003C[\"\",\"products\",\"pricing\",\"customers\"].indexOf(window.location.pathname.split(\"\/\")[1])){var main=document.querySelector(\".BackgroundImageHero .www-Container\")||document.querySelector(\".Home-hero .www-Container\")||document.querySelector(\".GraphicalHero .www-Container\")||document.querySelector(\".UnifiedNav-transparentHeaderPush\"),announce=document.createElement(\"div\"),text=0\u003Cwindow.location.search.indexOf(\"Referral_Invite\")?\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e You have a $50, 30-day credit from a friend. \\x3cstrong \\x3eComplete registration to get started.\\x3c\/strong\\x3e\":\n\"\\ud83d\\udcb5 \\x3cstrong\\x3e Free credit active:\\x3c\/strong\\x3e Get started on DigitalOcean with a $50, 30-day credit for new users.\";announce.classList.add(\"_gtm_announce-wrap\");announce.innerHTML='\\x3ca href\\x3d\"https:\/\/cloud.digitalocean.com\/registrations\/new?utm_source\\x3dinternal\\x26utm_campaign\\x3dwwwalertbanner\"\\x3e'+text+\"\\x3c\/a\\x3e\";main.insertBefore(announce,main.firstChild);window.analytics\u0026\u0026window.analytics.track(\"Experiment Viewed\",{experimentName:\"Referral Alert\"})};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":210
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"cookieconsent_statuschange\",function(){window.dataLayer.push({event:\"cc_dismiss\"})});function getCookie(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2==a.length)return a.pop().split(\";\").shift()}getCookie(\"cookieconsent_status\")\u0026\u0026window.dataLayer.push({event:\"cc_dismiss\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":219
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){},100);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":221
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector('li[role\\x3d\"banner\"]').innerHTML='\\x3ca href\\x3d\"https:\/\/blog.digitalocean.com\/doks-in-ga\/\" data-pill\\x3d\"new\" title\\x3d\"DigitalOcean Kubernetes is now Generally Available.\" target\\x3d\"_blank\" rel\\x3d\"noopener\"\\x3eDigitalOcean Kubernetes is now Generally Available. Learn more \\u276f \\x3c\/a\\x3e';\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__img",
      "once_per_load":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/t.co\/i\/adsct?p_id=Twitter\u0026p_user_id=0\u0026txn_id=nuqsf\u0026events=%5B%5B%22pageview%22%2Cnull%5D%5D\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":123
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs3\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":119
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":121
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuyk8\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":122
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqs0\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":118
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/t.co\/i\/adsct?txn_id=nuqqc\u0026p_id=Twitter\u0026tw_sale_amount=0\u0026tw_order_quantity=0",
      "tag_id":120
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":".digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"cloud.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"pay-pal-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"credit-card-conversion"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"activated"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/cloud."
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"cc_dismiss"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"Button Button--green Button--large Button--fullWidth"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"false"
    },{
      "function":"_gt",
      "arg0":["macro",18],
      "arg1":"50"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/console"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"ember_pageview"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"Create a Space"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/community"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"try.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"confirmed"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"confirmed_state_pageview"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/products\/"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"www.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=rtg"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=paid_social"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium=display"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorial"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"blog.digitalocean.com"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"medium="
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"rtg"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"kubernetes"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"containers"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"docker"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"K8S"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tutorials\/"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"\/welcome"
    },{
      "function":"_cn",
      "arg0":["macro",12],
      "arg1":"marketplace.digitalocean.com"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"_"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"null"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/products\/object-storage\/"
    },{
      "function":"_sw",
      "arg0":["macro",26],
      "arg1":"\/lp\/hosting"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/questions\/"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"\/community\/questions\/new"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community\/tags"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",26],
      "arg1":"community"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"?refcode="
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"undefined"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/cloud.digitalocean.com\/droplets\/new"
    },{
      "function":"_sw",
      "arg0":["macro",21],
      "arg1":"https:\/\/www.digitalocean.com\/community"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,3,5],["unless",4],["add",1]],
    [["if",6],["add",2,3,4,16,24,26,27,28,30,38,41,46,49,50]],
    [["if",7],["add",2,3,4,16,24,26,27,28,30,38,41,46,49,50]],
    [["if",0,1,8,9],["add",4,24,26,27,28,30,38,41,46,49,50]],
    [["if",11],["unless",10],["add",5,6,23,25,40,44,47,48,65]],
    [["if",5,12,13,14],["add",7,8,14,17]],
    [["if",1,5,15],["unless",4],["add",9,10]],
    [["if",1,5,16],["unless",4,17],["add",11,19]],
    [["if",1,5,18],["unless",4,17],["add",12,13,18]],
    [["if",19,20],["add",15,71]],
    [["if",5,13,14,21],["add",20,21]],
    [["if",1,22],["unless",23],["add",22,68]],
    [["if",11],["add",22]],
    [["if",1,2],["add",29],["block",0]],
    [["if",11,24],["add",31,32]],
    [["if",11,22,25],["add",33,34,42]],
    [["if",11,26],["add",35,36]],
    [["if",1,5,8,27],["add",37]],
    [["if",28],["add",37]],
    [["if",11,29,30],["add",39]],
    [["if",31,32,33],["add",43]],
    [["if",32,33,34],["add",43]],
    [["if",33,35,36],["add",43]],
    [["if",1,37,38,39],["add",43]],
    [["if",1,30],["unless",40,41,42,43],["add",43]],
    [["if",44,45],["add",45,52,53,55]],
    [["if",1,5,46],["add",51]],
    [["if",14],["add",54]],
    [["if",33],["add",56,58,59]],
    [["if",33,36],["add",57]],
    [["if",1,5],["unless",4],["add",60]],
    [["if",11,47],["add",60]],
    [["if",22,25,45],["unless",48],["add",61]],
    [["if",1,51,52],["add",62]],
    [["if",45,53],["add",63]],
    [["if",33,54],["add",64]],
    [["if",1,55],["unless",56],["add",66]],
    [["if",1,57],["add",67]],
    [["if",22,45],["unless",58,59],["add",69]],
    [["if",22,45,60],["unless",59],["add",69]],
    [["if",1],["unless",10],["add",70]],
    [["if",1,63],["add",71]],
    [["if",1,64],["add",72]],
    [["if",1,22,49],["block",61]],
    [["if",0,1],["unless",50],["block",61]],
    [["if",0,45],["unless",50,61],["block",69]],
    [["if",0,45],["unless",62],["block",69]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},qa=function(a,b){for(var c=new pa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},pa=function(){this.prefix="gtm.";this.values={}};pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};pa.prototype.get=function(a){return this.values[this.prefix+a]};pa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var Ia={},Ka=function(a,b){Ia[a]=Ia[a]||[];Ia[a][b]=!0},La=function(a){for(var b=[],c=Ia[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var f=window,u=document,Ma=navigator,Na=u.currentScript&&u.currentScript.src,Oa=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Pa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Qa=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Pa(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Ra=function(){if(Na){var a=Na.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Sa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Pa(c,b);void 0!==a&&(c.src=a);return c},Ta=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ua=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Va=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Xa=function(a){var b=
u.getElementById(a);if(b&&Wa(b,"id")!=a){Ka("TAGGING",1);for(var c=1;c<document.all[a].length;c++)if(Wa(document.all[a][c],"id")==a)return document.all[a][c]}return b},Wa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Za=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},$a=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;
for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},ab=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var bb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},hb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.zb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),zb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var rb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,sb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return sb.test(document.location.hostname)||"/"===b&&rb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return Bb[a]};tb[7]=function(a){return String(a).replace(Ab,Cb)};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Cb)+"'"}};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.sc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.lf(d,k))}catch(v){b.Md&&b.Md(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.ob);d.push(p)}return Wb&&m?Wb.qf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Rf(a))return Wb.$f(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={yd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Wc:a("convert_case_to"),Xc:a("convert_false_to"),Yc:a("convert_null_to"),Zc:a("convert_true_to"),$c:a("convert_undefined_to"),qa:a("function"),Ce:a("instance_name"),De:a("live_only"),Ee:a("malware_disabled"),Fe:a("metadata"),Eg:a("original_vendor_template_id"),Ge:a("once_per_event"),od:a("once_per_load"),pd:a("setup_tags"),qd:a("tag_id"),rd:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var yc={},zc=null,Ac=Math.random();yc.m="GTM-KHWBBT";yc.sb="5m0";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.m+"&cv=495",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Ra(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Tf()||0>=Wc--?(Ka("GTM",1),Uc[Rc]=!0):(Vc.ig(),Ta(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=La("GTM"),c=La("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.sb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Tf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},ig:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=String(b[dc.qa]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Tc=Tc?Tc+"."+e:"&tr="+e;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new pa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new pa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&Ka("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&Ka("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&Ka("GTM",3);
d?Ka("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&Ka("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){Ka("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=qa(e,l||[]);r&&Ka("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(w=qa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={lf:function(a,b){b[dc.Wc]&&"string"===typeof a&&(a=1==b[dc.Wc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.Yc)&&null===a&&(a=b[dc.Yc]);b.hasOwnProperty(dc.$c)&&void 0===a&&(a=b[dc.$c]);b.hasOwnProperty(dc.Zc)&&!0===a&&(a=b[dc.Zc]);b.hasOwnProperty(dc.Xc)&&!1===a&&(a=b[dc.Xc]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)z(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;!e&&d(yc.m)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return z(function(){var c=!1;!c&&b(yc.m)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Ue:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Ka("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){};function ie(a,b){a.containerId=yc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.pd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{J:g,O:1===k.yd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.Ee])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.qd]),v[dc.Fe]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var A=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){A(C)}}}
var g=Sb[a],h=b.J,k=b.O,l=b.terminate;if(c.sc(g))return null;var m=$b(g[dc.rd],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{J:h,O:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.yd?l:p}if(g[dc.od]||g[dc.Ge]){var t=g[dc.od]?Tb:c.sg,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.J;k=w.O}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{J:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ra[d]){var e=Sb[d];var g=b.add();try{var h=ke(d,{J:g,O:g,terminate:g},a,d);h?c.push({$d:d,b:bc(e),yf:h}):(qe(d,a),g())}catch(l){g()}}b.Ue();c.sort(re);for(var k=0;k<c.length;k++)c[k].yf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.$d,k=b.$d;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.sc(Sb[d])?"3":"4",g=$b(Sb[d][dc.pd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.rd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event");td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,sc:Ad(c),Ra:[],sg:[],Md:function(p){Ka("GTM",6);je(p)}};h.Ra=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ra.length;m++)if(h.Ra[m]){var n=Sb[m];if(n&&!l[n[dc.qa]])return!0}return!1};var G={Pb:"event_callback",Rb:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,Ae=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},Ce=function(a){for(var b={},c=0;c<a.length;++c){var d=Ae(a[c]);d&&(b[d.id]=d)}Be(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Be(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var De=null,Ee={},Fe={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Pb]&&(c.eventCallback=b[G.Pb]),b[G.Rb]&&(c.eventTimeout=b[G.Rb]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Ue=function(a){if(Te(a))return a;this.xg=a};Ue.prototype.Ef=function(){return this.xg};var Te=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};Ue.prototype.getUntrustedUpdateValue=Ue.prototype.Ef;var Ve=!1,We=[];function Xe(){if(!Ve){Ve=!0;for(var a=0;a<We.length;a++)z(We[a])}}var Ye=function(a){Ve?z(a):We.push(a)};var Ze=[],$e=!1,af=function(a){return f["dataLayer"].push(a)},bf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},df=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});if(!Dc){Dc=a["gtm.start"];}var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=
cf(a);Fc=null;return e};function cf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.m,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var ef=function(){for(var a=!1;!$e&&0<Ze.length;){$e=!0;delete hd.eventModel;kd();var b=Ze.shift();if(null!=b){var c=Te(b);if(c){var d=b;b=Te(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){$e=!1;continue}}a=df(b)||a}}finally{c&&kd(!0)}}$e=!1}
return!a},ff=function(){var a=ef();try{var b=yc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},gf=function(){var a=Oa("dataLayer",[]),b=Oa("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ye(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ue(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Ze.push.apply(Ze,d);if(300<this.length)for(Ka("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ef()&&h};Ze.push.apply(Ze,a.slice(0));z(ff)};var jf=function(a){return hf?u.querySelectorAll(a):null},kf=function(a,b){if(!hf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},lf=!1;if(u.querySelectorAll)try{var mf=u.querySelectorAll(":root");mf&&1==mf.length&&mf[0]==u.documentElement&&(lf=!0)}catch(a){}var hf=lf;var nf;var Jf={};Jf.ob=new String("undefined");
var Kf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Jf.ob?b:a[d]);return c.join("")}};Kf.prototype.toString=function(){return this.resolve("undefined")};Kf.prototype.valueOf=Kf.prototype.toString;Jf.He=Kf;Jf.ac={};Jf.qf=function(a){return new Kf(a)};var Lf={};Jf.jg=function(a,b){var c=Jc();Lf[c]=[a,b];return c};Jf.wd=function(a){var b=a?0:1;return function(c){var d=Lf[c];if(d&&"function"===typeof d[b])d[b]();Lf[c]=void 0}};Jf.Rf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Jf.$f=function(a){if(a===Jf.ob)return a;var b=Jc();Jf.ac[b]=a;return'google_tag_manager["'+yc.m+'"].macro('+b+")"};Jf.Uf=function(a,b,c){a instanceof Jf.He&&(a=a.resolve(Jf.jg(b,c)),b=fa);return{oc:a,J:b}};var Mf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Wa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},Nf=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
Of=function(a,b,c){Nf(a)[b]=c},Pf=function(a,b,c,d){var e=Nf(a),g=xa(e,b,d);e[b]=c(g)},Qf=function(a,b,c){var d=Nf(a);return xa(d,b,c)};var Rf=function(){for(var a=Ma.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Uf=function(a,b,c,d){var e=Sf(b);return lb(a,e,Tf(c),d)},Sf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Tf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Vf(a,b){var c=""+Sf(a),d=Tf(b);1<d&&(c+="-"+d);return c};var Wf=["1"],Xf={},ag=function(a,b,c,d){var e=Yf(a);Xf[e]||Zf(e,b,c)||($f(e,Rf(),b,c,d),Zf(e,b,c))};function $f(a,b,c,d,e){var g;g=["1",Vf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function Zf(a,b,c){var d=Uf(a,b,c,Wf);d&&(Xf[a]=d);return d}function Yf(a){return(a||"_gcl")+"_au"};var bg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Oc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Oc]||(g[a[h].Oc]=[]),g[a[h].Oc].push({timestamp:k[1],Bf:k[2]}))}return g};function cg(){for(var a=dg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function eg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var dg,fg,gg=function(a){dg=dg||eg();fg=fg||cg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(dg[l],dg[m],dg[n],dg[p])}return b.join("")},hg=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=fg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}dg=dg||eg();fg=fg||
cg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var ig;function jg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ng=function(){var a=kg,b=lg,c=mg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ua(u,"mousedown",d);Ua(u,"keyup",d);Ua(u,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},mg=function(){var a=Oa("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var og=/(.*?)\*(.*?)\*(.*)/,pg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,qg=/^(?:www\.|m\.|amp\.)+/,rg=/([^?#]+)(\?[^#]*)?(#.*)?/,sg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ug=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(gg(String(d))))}var e=b.join("*");return["1",tg(e),e].join("*")},tg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ig)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}ig=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^ig[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},wg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=vg(d)||{};var e=gb(b,"fragment").match(sg);a.fragment=vg(e&&e[3]||
"")||{}}},vg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=og.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===tg(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=hg(t[q+1]);return p}}}}catch(r){}};
function xg(a,b,c){function d(m){var n=m,p=sg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=rg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function yg(a,b,c){for(var d={},e={},g=mg().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&jg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=ug(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=xg(l,a.action);bb.test(w)&&(a.action=w)}}}else zg(l,a,!1)}if(!c&&Aa(e)){var v=ug(e);zg(v,a,!0)}}function zg(a,b,c){if(b.href){var d=xg(a,b.href,void 0===c?!1:c);bb.test(d)&&(b.href=d)}}
var kg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||yg(e,e.hostname,!1)}}catch(h){}},lg=function(a){try{if(a.action){var b=gb(hb(a.action),"host");yg(a,b,!0)}}catch(c){}},Ag=function(a,b,c,d){ng();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};mg().decorators.push(e)},Bg=function(){var a=u.location.hostname,b=pg.exec(u.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(qg,"")===e.replace(qg,"")},Cg=function(a,b){return!1===a?!1:a||b||Bg()};var Dg={};var Eg=/^\w+$/,Fg=/^[\w-]+$/,Gg=/^~?[\w-]+$/,Hg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Ig(a){return a&&"string"==typeof a&&a.match(Eg)?a:"_gcl"}var Kg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Jg(b,c,d)};
function Jg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Fg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Dg.gtm_3pds?0:Dg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Lg(a,b,c){function d(p,t){var q=Mg(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Ig(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Nd?7776E3:b.Nd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.dh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Mg=function(a,b){var c=Hg[a];if(void 0!==c)return b+c},Ng=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Og(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Pg=function(a,b,c,d,e){if(ka(b)){var g=Ig(e);Ag(function(){for(var h={},k=0;k<a.length;++k){var l=Mg(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Qg=function(a){return a.filter(function(b){return Gg.test(b)})},Rg=function(a){for(var b=["aw","dc"],c=Ig(a&&a.prefix),d={},e=0;e<b.length;e++)Hg[b[e]]&&(d[b[e]]=Hg[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Ng(l),n={};n[g]=[Og(l)];Lg(n,a,m)}})};var Sg=/^\d+\.fls\.doubleclick\.net$/;function Tg(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Sg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ug(a,b){if("aw"==a||"dc"==a){var c=Tg("gcl"+a);if(c)return c.split(".")}var d=Ig(b);if("_gcl"==d){var e;e=Kg()[a]||[];if(0<e.length)return e}var g=Mg(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Og(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Qg(k)}else h=k}else h=k}else h=[];return h}
var Vg=function(){var a=Tg("gac");if(a)return decodeURIComponent(a);var b=bg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Bf);g=Qg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Wg=function(a,b,c,d,e){ag(b,c,d,e);var g=Xf[Yf(b)],h=Kg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ma.sendBeacon&&Ma.sendBeacon(t)||Ta(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Yf(b),r=Xf[q];r&&$f(q,r,c,d,e)}};var Xg;if(3===yc.sb.length)Xg="g";else{var Yg="G";Xg=Yg}
var Zg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Xg},$g=function(a){var b=yc.m.split("-"),c=b[0].toUpperCase(),d=Zg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===yc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+yc.sb+
e};
var ah=function(a){return!(void 0===a||null===a||0===(a+"").length)},bh=function(a,b){var c;if(2===b.M)return a("ord",na(1E11,1E13)),!0;if(3===b.M)return a("ord","1"),a("num",na(1E11,1E13)),!0;if(4===b.M)return ah(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.M)c="1";else if(6===b.M)c=b.Ic;else return!1;ah(c)&&a("qty",c);ah(b.vb)&&a("cost",b.vb);ah(b.transactionId)&&a("ord",b.transactionId);return!0},ch=encodeURIComponent,dh=function(a,b){function c(n,p,t){g.hasOwnProperty(n)||(p+="",e+=";"+n+"="+
(t?p:ch(p)))}var d=a.kc,e=a.protocol;e+=a.Fb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+ch(d)+(";type="+ch(a.nc))+(";cat="+ch(a.Ma));var g=a.sf||{};ra(g,function(n,p){e+=";"+ch(n)+"="+ch(p+"")});if(bh(c,a)){ah(a.Kb)&&c("u",a.Kb);ah(a.Jb)&&c("tran",a.Jb);c("gtm",$g());!1===a.Qe&&c("npa","1");if(a.ic){var h=Ug("dc",a.va);h&&h.length&&c("gcldc",h.join("."));var k=Ug("aw",a.va);k&&k.length&&c("gclaw",k.join("."));var l=Vg();l&&c("gac",l);ag(a.va,void 0,a.nf,a.pf);
var m=Xf[Yf(a.va)];m&&c("auiddc",m)}ah(a.Ec)&&c("prd",a.Ec,!0);ra(a.Rc,function(n,p){c(n,p)});e+=b||"";ah(a.Db)&&c("~oref",a.Db);a.Fb?Sa(e+"?",a.J):Ta(e+"?",a.J,a.O)}else z(a.O)};var gh=!!f.MutationObserver,hh=void 0,ih=function(a){if(!hh){var b=function(){var c=u.body;if(c)if(gh)(new MutationObserver(function(){for(var e=0;e<hh.length;e++)z(hh[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ua(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<hh.length;e++)z(hh[e])}))})}};hh=[];u.body?b():z(b)}hh.push(a)};var Ah=f.clearTimeout,Bh=f.setTimeout,H=function(a,b,c){if(Oe()){b&&z(b)}else return Qa(a,b,c)},Ch=function(){return new Date},Dh=function(){return f.location.href},Eh=function(a){return gb(hb(a),"fragment")},Fh=function(a){return fb(hb(a))},Gh=null;
var Hh=function(a,b){return ld(a,b||2)},Ih=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return af(a)},Jh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Kh=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Lh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Nd:d},g=Kg();Lg(g,e);Rg(e)},Mh=function(a,b,c,d,e){var g=wg(),h=mg();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Ig(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Hg[p]){var t=Mg(p,m),q=k[t];if(q){var r=Math.min(Ng(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Ng(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var A={prefix:b,path:c,domain:d};Lg(Jg(k.gclid,k.gclsrc),A);},Nh=function(a,b,c,d,e){Pg(a,b,c,d,e);},
Oh=function(a,b){if(Oe()){b&&z(b)}else Sa(a,b)},Ph=function(a){return!!Qf(a,"init",!1)},Qh=function(a){Of(a,"init",!0)},Rh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))};

var Th=Jf.Uf;
var Uh=new pa,Vh=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},Wh=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Wh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Uh.get(q);r||(r=new RegExp(c,t),Uh.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Vh(b,c)}return!1};var Yh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Zh={},$h=encodeURI,M=encodeURIComponent,ai=Ta;var bi=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var ci=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Zh.Sf=function(){var a=!1;return a};var di=function(){var a=!1;return a};var Ni=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Oi=function(){this.c=1;this.e=[];this.p=null};function Pi(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Oi}var Qi=function(a,b){Pi(a).p=b},Ri=function(a){var b=Pi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var Ti=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var hj=window,ij=document,jj=function(a){var b=hj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===hj["ga-disable-"+a])return!0;try{var c=hj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",ij.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ij.getElementById("__gaOptOutExtension")?!0:!1};var qj=function(a,b,c){pj(a);var d=Math.floor(wa()/1E3);Pi(a).e.push(new Ni(b,d,c,void 0));Ri(a)},rj=function(a,b,c){pj(a);var d=Math.floor(wa()/1E3);Pi(a).e.push(new Ni(b,d,c,!0))},pj=function(a){if(1===Pi(a).c){Pi(a).c=2;var b=encodeURIComponent(a);Qa(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},tj=function(a,b){},sj=function(a,b){};var Y={a:{}};

Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;dh(b,c)}(function(b){Y.__flc=b;Y.__flc.g="flc";Y.__flc.h=!0;Y.__flc.b=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=ci(b.vtp_customVariable||[],"key","value")||{},e={Ma:b.vtp_activityTag,ic:c,va:b.vtp_conversionCookiePrefix||void 0,vb:void 0,M:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,kc:b.vtp_advertiserId,nc:b.vtp_groupTag,O:b.vtp_gtmOnFailure,J:b.vtp_gtmOnSuccess,Db:b.vtp_useImageTag?
void 0:b.vtp_url,protocol:"",Ic:void 0,Fb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,Jb:b.vtp_transactionVariable,transactionId:void 0,Kb:b.vtp_userVariable,Rc:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){H("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,K("google_attr").build([ci(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Mf(c,"gtm.click");Ih(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Ph("cl")){var c=K("document");Ua(c,"click",a,!0);Qh("cl")}z(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Kh(a.vtp_name,Hh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.g="r";Y.__r.h=!0;Y.__r.b=0})(function(a){return na(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Hh("gtm.url",1))||Dh();var d=b[a("vtp_component")];if(!d||"URL"==d)return Fh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Hh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.tl=["google"],function(){function a(b){return function(){if(b.zc&&b.Bc>=b.zc)b.qc&&K("self").clearInterval(b.qc);else{b.Bc++;var c=Ch().getTime();Ih({event:b.R,"gtm.timerId":b.qc,"gtm.timerEventNumber":b.Bc,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.zc,"gtm.timerStartTime":b.Zd,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Zd,"gtm.triggers":b.vg})}}}(function(b){Y.__tl=b;Y.__tl.g="tl";Y.__tl.h=!0;Y.__tl.b=0})(function(b){z(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={R:b.vtp_eventName,
Bc:0,interval:Number(b.vtp_interval),zc:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),vg:String(b.vtp_uniqueTriggerId||"0"),Zd:Ch().getTime()};c.qc=K("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.a.asp=["nonGoogleScripts"],function(){(function(a){Y.__asp=a;Y.__asp.g="asp";Y.__asp.h=!0;Y.__asp.b=0})(function(a){f.adroll_adv_id=a.vtp_customerId;f.adroll_pix_id=a.vtp_pixelId;void 0!==a.vtp_conversionValueInDollars&&(f.adroll_conversion_value=a.vtp_conversionValueInDollars,f.adroll_currency=a.vtp_conversionValueCurrency||"USD");if(a.vtp_customData){var b=ci(a.vtp_customData,"key","value");f.adroll_custom_data=b}a.vtp_segmentName&&(f.adroll_segments=a.vtp_segmentName);a.vtp_visitorEmail&&(f.adroll_email=
a.vtp_visitorEmail);f.__adroll_loaded=!0;var c=D("https://s","http://a",".adroll.com/j/roundtrip.js");H(c,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(ci(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(ci(m.vtp_contentGroup,"index","group"),g);Ha(ci(m.vtp_dimension,"index","dimension"),h);Ha(ci(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(ci(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(ci(c.vtp_contentGroup,
"index","group"),g);Ha(ci(c.vtp_dimension,"index","dimension"),h);Ha(ci(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(T){var L=[].slice.call(arguments,0);L[0]=t+L[0];p.apply(window,L)},y=function(T,L){return void 0===L?L:T(L)},x=function(T,L){if(L)for(var Z in L)L.hasOwnProperty(Z)&&v("set",T+Z,L[Z])},A=function(){},
B=function(T,L,Z){var oa=0;if(T)for(var Ba in T)if(T.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(T[Ba]):T[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);L[Ba]=Ja;oa++}return oa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",$g(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(T,L){void 0!==
c[L]&&v("set",T,c[L])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var T=e&&e.hitCallback;ha(T)&&T();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),A());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var R="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:R})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");}if(!a){var U=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(U="internal/"+U);a=!0;var da=D("https:","http:",
"//www.google-analytics.com/"+U,e&&e.forceSSL);H(da,function(){var T=Xd();T&&T.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();





Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Bg())&&
Mh(a,h,k,l));Lh(e,c,d);Wg(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Nh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
Y.a.aev=["google"],function(){function a(l,m){var n=!1,p;n||(p=Hh("gtm."+m,1));return p}function b(l,m,n){var p=a(l,k[m]);return void 0!==p?p:n}function c(l,m){if(!l)return!1;var n=d(Dh());ka(m)||(m=String(m||"").replace(/\s+/g,"").split(","));for(var p=[n],t=0;t<m.length;t++)if(m[t]instanceof RegExp){if(m[t].test(l))return!1}else{var q=m[t];if(0!=q.length){if(0<=
d(l).indexOf(q))return!1;p.push(d(q))}}return!bi(l,p)}function d(l){e.test(l)||(l="http://"+l);return gb(hb(l),"HOST",!0)}var e=/^https?:\/\//i,g={},h=[],k={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(l){Y.__aev=l;Y.__aev.g=
"aev";Y.__aev.h=!0;Y.__aev.b=0})(function(l){var m=l.vtp_gtmEventId,n=l.vtp_defaultValue,p=l.vtp_varType;switch(p){case "TAG_NAME":var t=a(m,"element");return t&&t.tagName||n;case "TEXT":var q;if(ia(g[m]))q=g[m];else{var r=a(m,"element");if(r&&(q=Za(r),g[m]=q,h.push(m),25<h.length)){var w=h.shift();delete g[w]}}return q||n;case "URL":var v;a:{var y=String(a(m,"elementUrl")||n||""),x=hb(y),A=String(l.vtp_component||"URL");switch(A){case "URL":v=y;break a;case "IS_OUTBOUND":v=c(y,l.vtp_affiliatedDomains);
break a;default:v=gb(x,A,l.vtp_stripWww,l.vtp_defaultPages,l.vtp_queryKey)}}return v;case "ATTRIBUTE":var B;if(void 0===l.vtp_attribute)B=b(m,p,n);else{var C=l.vtp_attribute,E=a(m,"element");B=E&&Wa(E,C)||n||""}return B;default:return b(m,p,n)}})}();

Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=K("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Sd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:$g()},m=function(t){return function(q,r,w){var v="DATA_LAYER"==t?Hh(w):k[r];v&&(l[q]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(t){return{value:t.price,quantity:t.quantity,item_id:t.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var p=!0;p&&b.push(l);a||(a=!0,H("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Y.__awct=h;Y.__awct.g="awct";Y.__awct.h=!0;Y.__awct.b=0}();

Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=ci(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.b=0})(function(a){z(a.vtp_gtmOnFailure)})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Pa(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Th(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,$a(h),k,e)()}else Bh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();


Y.a.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.g="img";Y.__img.h=!0;Y.__img.b=0})(function(a){var b=$a('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}ai(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();

var uj={};uj.macro=function(a){if(Jf.ac.hasOwnProperty(a))return Jf.ac[a]},uj.onHtmlSuccess=Jf.wd(!0),uj.onHtmlFailure=Jf.wd(!1);uj.dataLayer=md;uj.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};uj.Ze=function(){zc[yc.m]=uj;za(Ic,Y.a);Wb=Wb||Jf;Xb=Bd};
uj.Nf=function(){Dg.gtm_3pds=!0;zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.m]){var a=zc.zones;a&&a.unregisterChild(yc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=Wh;uj.Ze();gf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ua(u,"DOMContentLoaded",Hd);Ua(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ua(f,"load",Hd)}Ve=!1;"complete"===u.readyState?Xe():
Ua(f,"load",Xe);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,uj.Nf)();

})()
