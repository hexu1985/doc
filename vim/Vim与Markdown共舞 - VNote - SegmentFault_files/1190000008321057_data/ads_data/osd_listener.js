(function(){var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={ya:!0},ea={};try{ea.__proto__=da;ca=ea.ya;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}for(var fa=ba,ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ia=function(){ia=function(){};l.Symbol||(l.Symbol=ka)},ka=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}(),ma=function(){ia();var a=l.Symbol.iterator;a||(a=l.Symbol.iterator=l.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});ma=function(){}},la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},na=function(a){ma();a={next:a};a[l.Symbol.iterator]=function(){return this};return a},oa=function(a){ma();var b=a[Symbol.iterator];return b?b.call(a):la(a)},n=function(a){if(!(a instanceof Array)){a=oa(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},q=l,pa=["Math","trunc"],qa=0;qa<pa.length-1;qa++){var ra=pa[qa];ra in q||(q[ra]={});q=q[ra]}var sa=pa[pa.length-1],ta=q[sa],ua=ta?ta:function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b};ua!=ta&&null!=ua&&ha(q,sa,{configurable:!0,writable:!0,value:ua});var r=this,u=function(a){return"string"==typeof a},va=function(){},wa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},xa=function(a,b,c){return a.call.apply(a.bind,arguments)},ya=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},za=function(a,b,c){za=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?xa:ya;return za.apply(null,arguments)},Aa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},v=Date.now||function(){return+new Date},w=function(a,b){a=a.split(".");var c=r;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var Ba=function(a,b,c,d,f){if(f)c=a+("&"+b+"="+c);else{var e="&"+b+"=",g=a.indexOf(e);0>g?c=a+e+c:(g+=e.length,e=a.indexOf("&",g),c=0<=e?a.substring(0,g)+c+a.substring(e):a.substring(0,g)+c)}return 2E3<c.length?void 0!==d?Ba(a,b,d,void 0,f):a:c};var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Da=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)},x=function(a,b){a=String(a);var c=a.indexOf(".");-1==c&&(c=a.length);Da("0",Math.max(0,b-c))},Fa=function(a,b){var c=0;a=Ca(String(a)).split(".");b=Ca(String(b)).split(".");for(var d=Math.max(a.length,b.length),f=0;0==c&&f<d;f++){var e=a[f]||"",g=b[f]||"";do{e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==e[0].length&&0==g[0].length)break;c=Ea(0==e[1].length?0:parseInt(e[1],10),0==g[1].length?0:parseInt(g[1],10))||Ea(0==e[2].length,0==g[2].length)||Ea(e[2],g[2]);e=e[3];g=g[3]}while(0==c)}return c},Ea=function(a,b){return a<b?-1:a>b?1:0};var Ga=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=u(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},Ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=[],e=0,g=u(a)?a.split(""):a,m=0;m<d;m++)if(m in g){var k=g[m];b.call(c,k,m,a)&&(f[e++]=k)}return f},Ja=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=Array(d),e=u(a)?a.split(""):a,g=0;g<d;g++)g in e&&(f[g]=b.call(c,e[g],g,a));return f},Ka=Array.prototype.reduce?function(a,b,c,d){d&&(b=za(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var f=c;Ha(a,function(c,g){f=b.call(d,f,c,g,a)});return f},La=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=u(a)?a.split(""):a,e=0;e<d;e++)if(e in f&&b.call(c,f[e],e,a))return!0;return!1},Na=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var y;a:{var Oa=r.navigator;if(Oa){var Pa=Oa.userAgent;if(Pa){y=Pa;break a}}y=""}var z=function(a){return-1!=y.indexOf(a)},Qa=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Ra=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Sa=function(a,b){return null!==a&&b in a};var Ta=function(){return z("Trident")||z("MSIE")},Ua=function(){return(z("Chrome")||z("CriOS"))&&!z("Edge")},Wa=function(){function a(a){a:{var b=d;for(var f=a.length,m=u(a)?a.split(""):a,k=0;k<f;k++)if(k in m&&b.call(void 0,m[k],k,a)){b=k;break a}b=-1}return c[0>b?null:u(a)?a.charAt(b):a[b]]||""}var b=y;if(Ta())return Va(b);b=Qa(b);var c={};Ha(b,function(a){c[a[0]]=a[1]});var d=Aa(Sa,c);return z("Opera")?a(["Version","Opera"]):z("Edge")?a(["Edge"]):Ua()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""},Va=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var A=function(){return z("iPhone")&&!z("iPod")&&!z("iPad")};var Xa=function(a){Xa[" "](a);return a};Xa[" "]=va;var Za=function(a,b){var c=Ya;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var $a=z("Opera"),B=Ta(),ab=z("Edge"),bb=z("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),cb=-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"),db=z("Macintosh"),eb=z("Windows"),fb=z("Android"),gb=A(),hb=z("iPad"),ib=z("iPod"),jb=function(){var a=r.document;return a?a.documentMode:void 0},kb;a:{var lb="",mb=function(){var a=y;if(bb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ab)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(cb)return/WebKit\/(\S+)/.exec(a);if($a)return/(?:Version)[ \/]?(\S+)/.exec(a)}();mb&&(lb=mb?mb[1]:"");if(B){var nb=jb();if(null!=nb&&nb>parseFloat(lb)){kb=String(nb);break a}}kb=lb}var ob=kb,Ya={},pb=function(a){Za(a,function(){return 0<=Fa(ob,a)})},qb;var rb=r.document;qb=rb&&B?jb()||("CSS1Compat"==rb.compatMode?parseInt(ob,10):5):void 0;var sb;if(!(sb=!bb&&!B)){var tb;if(tb=B)tb=9<=Number(qb);sb=tb}sb||bb&&pb("1.9.1");B&&pb("9");var ub=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Xa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},vb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},xb=function(){var a=wb;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};var C=document,D=window;var yb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var zb={xa:"ud=1",wa:"ts=0",Xa:"sc=1",Ya:"efp=1",Va:"dcl=1",Wa:"mlc=1",Ta:"rafv=1",Sa:"rafx=1",va:"opp=1",Za:"mcvt=1",Ua:"lom=1",Ra:"adf=1",Qa:"xswf=1"};var E=function(){this.ja={};this.K=!0};E.prototype.disable=function(){this.K=!1};E.prototype.enable=function(){this.K=!0};E.prototype.isEnabled=function(){return this.K};E.prototype.reset=function(){this.ja={};this.K=!0};var Ab=yb(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});r.addEventListener("test",null,b)}catch(c){}return a});function Bb(a){return a?a.passive&&Ab()?a:a.capture||!1:a}var Cb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,Bb(d)):a.attachEvent&&a.attachEvent("on"+b,c)};var F=!1,Db=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(F=!0,a.description)){Db(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){F=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],F=!(!a||!a.enabledPlugin))){Db(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");F=!0;Db(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");F=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),F=!0,Db(b.GetVariable("$version"))}catch(c){}})();(function(){if(eb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(y))?a[1]:"0"}return db?(a=/10[_.][0-9_.]+/,(a=a.exec(y))?a[0].replace(/_/g,"."):"10"):fb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(y))?a[1]:""):gb||hb||ib?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(y))?a[1].replace(/_/g,"."):""):""})();var Eb=z("Firefox"),Fb=A()||z("iPod"),Gb=z("iPad"),Hb=z("Android")&&!(Ua()||z("Firefox")||z("Opera")||z("Silk")),Ib=Ua(),Jb=z("Safari")&&!(Ua()||z("Coast")||z("Opera")||z("Edge")||z("Silk")||z("Android"))&&!(A()||z("iPad")||z("iPod"));var G=function(a){return(a=a.exec(y))?a[1]:""};(function(){if(Eb)return G(/Firefox\/([0-9.]+)/);if(B||ab||$a)return ob;if(Ib)return A()||z("iPad")||z("iPod")?G(/CriOS\/([0-9.]+)/):G(/Chrome\/([0-9.]+)/);if(Jb&&!(A()||z("iPad")||z("iPod")))return G(/Version\/([0-9.]+)/);if(Fb||Gb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(y);if(a)return a[1]+"."+a[2]}else if(Hb)return(a=G(/Android\s+([0-9.]+)/))?a:G(/Version\/([0-9.]+)/);return""})();var Kb=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");c&&(d.referrerPolicy="no-referrer");d.src=b;a.google_image_requests.push(d)},Mb=function(a){if(Lb())Kb(r.window,a,!0);else{var b=r.document;if(b.body){var c=b.getElementById("goog-srcless-iframe");c||(c=b.createElement("iframe"),c.style.display="none",c.id="goog-srcless-iframe",b.body.appendChild(c));b=c}else b=null;b&&b.contentWindow&&Kb(b.contentWindow,a,!1)}},Lb=yb(function(){return"referrerPolicy"in r.document.createElement("img")});var Nb=!!window.google_async_iframe_id,H=Nb&&window.parent||window,Ob=function(){if(Nb&&!ub(H)){var a="."+C.domain;try{for(;2<a.split(".").length&&!ub(H);)C.domain=a=a.substr(a.indexOf(".")+1),H=window.parent}catch(b){}ub(H)||(H=window)}return H};var I=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var Pb=function(a,b,c){if("array"==wa(b))for(var d=0;d<b.length;d++)Pb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))},Qb=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Pb(a[b],a[b+1],c);return c.join("&")},Rb=function(a,b){var c=2==arguments.length?Qb(arguments[1],0):Qb(arguments,1);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var f=a.indexOf("?");if(0>f||f>d){f=d;var e=""}else e=a.substring(f+1,d);d=[a.substr(0,f),e,a.substr(d)];f=d[1];d[1]=c?f?f+"&"+c:c:f;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c};var Sb=function(a,b){this.ra=a;this.sa=b},Tb=function(a,b){this.url=a;this.ka=!!b;this.depth=null};var Ub=function(a,b,c,d,f){this.ma=c||4E3;this.G=a||"&";this.za=b||",$";this.P=void 0!==d?d:"trn";this.Pa=f||null;this.ea=!1;this.v={};this.Ka=0;this.l=[]},Vb=function(a,b){var c={};c[a]=b;return[c]},Xb=function(a,b,c,d,f){var e=[];vb(a,function(a,m){(a=Wb(a,b,c,d,f))&&e.push(m+"="+a)});return e.join(b)},Wb=function(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var e=[],g=0;g<a.length;g++)e.push(Wb(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Xb(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))},J=function(a,b,c,d){a.l.push(b);a.v[b]=Vb(c,d)},Zb=function(a,b,c,d){b=b+"//"+c+d;var f=Yb(a)-d.length-0;if(0>f)return"";a.l.sort(function(a,b){return a-b});d=null;c="";for(var e=0;e<a.l.length;e++)for(var g=a.l[e],m=a.v[g],k=0;k<m.length;k++){if(!f){d=null==d?g:d;break}var p=Xb(m[k],a.G,a.za);if(p){p=c+p;if(f>=p.length){f-=p.length;b+=p;c=a.G;break}else a.ea&&(c=f,p[c-1]==a.G&&--c,b+=p.substr(0,c),c=a.G,f=0);d=null==d?g:d}}e="";a.P&&null!=d&&(e=c+a.P+"="+(a.Pa||d));return b+e+""},Yb=function(a){if(!a.P)return a.ma;var b=1,c;for(c in a.v)b=c.length>b?c.length:b;return a.ma-a.P.length-b-a.G.length-1};var $b=function(a,b,c,d,f){if((d?a.Oa:Math.random())<(f||a.Da))try{if(c instanceof Ub)var e=c;else e=new Ub,vb(c,function(a,b){var c=e,d=c.Ka++;a=Vb(b,a);c.l.push(d);c.v[d]=a});var g=Zb(e,a.Ma,a.Ea,a.La+b+"&");g&&Kb(r,g,!1)}catch(m){}};var ac=null;var bc=function(){var a=r.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):v()},cc=function(){var a=r.performance;return a&&a.now?a.now():null};var dc=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};var L=function(a,b){this.C=[];this.F=b||r;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.C=b.google_js_reporting_queue,c=b.google_measure_js_timing);if(null===ac){ac="";try{var d=r.top.location.hash;if(d){var f=d.match(/\bdeid=([\d,]+)/);ac=f?f[1]:""}}catch(e){}}b=ac;b=b.indexOf&&0<=b.indexOf("1337");this.i=(this.i=null!=c?c:Math.random()<a)||b;a=this.F.performance;this.O=!!(a&&a.mark&&a.clearMarks&&b)};L.prototype.disable=function(){this.C!=this.F.google_js_reporting_queue&&(this.C.length=0,this.O&&Ha(this.C,this.ga,this));this.i=!1};L.prototype.ga=function(a){if(a&&this.O){var b=this.F.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};L.prototype.start=function(a,b){if(!this.i)return null;var c=cc()||bc();a=new dc(a,b,c);this.O&&this.F.performance.mark("goog_"+a.uniqueId+"_start");return a};L.prototype.end=function(a){if(this.i&&"number"==typeof a.value){var b=cc()||bc();a.duration=b-a.value;this.O&&this.F.performance.mark("goog_"+a.uniqueId+"_end");this.i&&this.C.push(a)}};var ec=function(a,b,c,d){this.na=a;this.Ga=b;this.$=c;this.ca=null;this.Fa=this.U;this.u=void 0===d?null:d;this.ua=!1},gc=function(a,b,c){try{if(a.u&&a.u.i){var d=a.u.start(b.toString(),3);var f=c();a.u.end(d)}else f=c()}catch(g){c=a.$;try{a.u&&d&&a.u.ga(d);var e=fc(g);c=a.Fa.call(a,b,e,void 0,void 0)}catch(m){a.U(217,m)}if(!c)throw g;}return f},ic=function(a,b){var c=hc;return function(d){for(var f=[],e=0;e<arguments.length;++e)f[e-0]=arguments[e];return gc(c,a,function(){return b.apply(void 0,f)})}};ec.prototype.U=function(a,b,c,d,f){f=f||this.Ga;try{var e=new Ub;e.ea=!0;J(e,1,"context",a);b.error&&b.meta&&b.id||(b=fc(b));b.msg&&J(e,2,"msg",b.msg.substring(0,512));b.file&&J(e,3,"file",b.file);0<b.line&&J(e,4,"line",b.line);var g=b.meta||{};if(this.ca)try{this.ca(g)}catch(ja){}if(d)try{d(g)}catch(ja){}b=[g];e.l.push(5);e.v[5]=b;g=r;b=[];var m=null;do{d=g;if(ub(d)){var k=d.location.href;m=d.document&&d.document.referrer||null}else k=m,m=null;b.push(new Tb(k||""));try{g=d.parent}catch(ja){g=null}}while(g&&d!=g);k=0;for(var p=b.length-1;k<=p;++k)b[k].depth=p-k;d=r;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(k=1;k<b.length;++k){var h=b[k];h.url||(h.url=d.location.ancestorOrigins[k-1]||"",h.ka=!0)}var t=new Tb(r.location.href,!1),Ma=b.length-1;for(p=Ma;0<=p;--p){var K=b[p];if(K.url&&!K.ka){t=K;break}}K=null;var Fc=b.length&&b[Ma].url;0!=t.depth&&Fc&&(K=b[Ma]);var R=new Sb(t,K);R.sa&&J(e,6,"top",R.sa.url||"");J(e,7,"url",R.ra.url||"");$b(this.na,f,e,this.ua,c)}catch(ja){try{$b(this.na,f,{context:"ecmserr",rctx:a,msg:jc(ja),url:R.ra.url},this.ua,c)}catch(Tc){}}return this.$};var fc=function(a){return new kc(jc(a),a.fileName,a.lineNumber)},jc=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b},kc=function(a,b,c){I.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})},M=kc;M.prototype=aa(I.prototype);M.prototype.constructor=M;if(fa)fa(M,I);else for(var N in I)if("prototype"!=N)if(Object.defineProperties){var lc=Object.getOwnPropertyDescriptor(I,N);lc&&Object.defineProperty(M,N,lc)}else M[N]=I[N];M.bb=I.prototype;var hc,O=Ob(),mc=new L(1,O);hc=new ec(new function(){var a=void 0===a?D:a;this.Ma="http:"===a.location.protocol?"http:":"https:";this.Ea="pagead2.googlesyndication.com";this.La="/pagead/gen_204?id=";this.Da=.01;this.Oa=Math.random()},"jserror",!0,mc);"complete"==O.document.readyState?O.google_measure_js_timing||mc.disable():mc.i&&Cb(O,"load",function(){O.google_measure_js_timing||mc.disable()});var P=function(a,b){return ic(a,b)};if(C&&C.URL){var wb=C.URL,nc=!(wb&&0<xb().length);hc.$=nc}var Q=function(a,b,c,d){Cb(a,b,ic(d,c),{capture:!1})},oc=function(a){var b=["IMG","FRAME","IFRAME"];return La(b,function(b){return a.nodeName==String(b)})?[a]:Ka(b,function(b,d){return b.concat(Na((a||document).getElementsByTagName(String(d))))},[])},pc=function(a,b){if(a){var c=0,d=null;a=oc(a);for(var f=0;f<a.length;f++){var e=!1;d=a[f];switch(d.nodeName){case "IMG":if(d.complete||d.naturalWidth)e=!0;break;case "FRAME":case "IFRAME":"complete"==d.readyState&&(e=!0)}e||(c++,Q(d,"load",function(){c--;c||b(null)},116))}a=d=null;c||b(null)}},qc=function(a,b){var c=0,d=function(){a();c++;10>c&&D.setTimeout(ic(b,d),100)};d()};var rc=function(a,b){this.g=a||0;this.f=b||""},sc=function(a){return!!a.g||!!a.f},S=function(a,b){a.g&&(b[4]=a.g);a.f&&(b[12]=a.f)};rc.prototype.match=function(a){return sc(this)&&sc(a)?this.f||a.f?this.f==a.f:this.g||a.g?this.g==a.g:!1:!1};rc.prototype.toString=function(){var a=""+this.g;this.f&&(a+="-"+this.f);return a};var tc=function(a){var b=[];a.g&&b.push("adk="+a.g);a.f&&b.push("exk="+a.f);return b},uc=function(a){var b=[];Ra(a,function(a,d){d=encodeURIComponent(d);u(a)&&(a=encodeURIComponent(a));b.push(d+"="+a)});b.push("24="+v());return b.join("\n")},T=0,vc=0,wc=function(a){var b=0,c=D;try{if(c&&c.Goog_AdSense_getAdAdapterInstance)return c}catch(d){}for(;c&&5>b;){try{if(c.google_osd_static_frame)return c}catch(d){}try{if(c.aswift_0&&(!a||c.aswift_0.google_osd_static_frame))return c.aswift_0}catch(d){}b++;c=c!=c.parent?c.parent:null}return null},xc=function(a,b,c,d,f,e,g,m){g=g||va;if(10<vc)D.clearInterval(T),g();else if(++vc,D.postMessage&&sc(b)){if(g=wc(!0)){var k={};S(b,k);k[0]="goog_request_monitoring";k[6]=a;c&&(k[27]=c);k[16]=!!d;f&&f.length&&(k[17]=f.join(","));e&&(k[19]=e);m&&(k[28]=m);try{var p=uc(k);g.postMessage(p,"*")}catch(h){}}}else D.clearInterval(T),g()};var U=new Date(0);x(U.getUTCFullYear(),4);x(U.getUTCMonth()+1,2);x(U.getUTCDate(),2);x(U.getUTCHours(),2);x(U.getUTCMinutes(),2);var yc=function(a){var b=Ob()||D;a=a.toString();Kb(b,a,!1)};var zc=function(){this.b=null;this.M=this.da=this.B=0},Ac=function(a){return Ia(a,function(a){return 15<a.clientHeight&&15<a.clientWidth})},Bc=function(a){if(!a.length)return null;var b=Ac(a);return 0<b.length?b[0]:a[0]},Dc=function(a){var b=null,c=(D.document||document).getElementsByTagName("SCRIPT");0<c.length&&(c=c[c.length-1])&&c.parentElement&&(b=c.parentElement);b||(b=D.document.body);c=new zc;if(b){a=String(a);var d=b||document;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else{var f,e;d=document;d=b||d;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else if(d.getElementsByClassName){var g=d.getElementsByClassName("GoogleActiveViewClass");d=g}else{g=d.getElementsByTagName("*");var m={};for(f=e=0;d=g[f];f++){var k=d.className,p;if(p="function"==typeof k.split)p=0<=Ga(k.split(/\s+/),"GoogleActiveViewClass");p&&(m[e++]=d)}m.length=e;d=m}}d=Na(d);f=Cc("googleAvAdk");e=[];m=[];g=oa(d);for(k=g.next();!k.done;k=g.next())k=k.value,k.hasAttribute(f)?k.getAttribute(f)==a&&e.push(k):m.push(k);c.B=d.length;c.da=e.length;c.M=e.length+m.length;c.b=Bc(e);c.b||(c.b=Bc(m));!c.b&&b.children&&(a=Ac(Na(b.children)),c.B=b.children.length,c.M=a.length,1==c.B?c.b=b.children[0]:1==c.M?c.b=a[0]:1<c.B&&(c.b=b))}return c},Cc=function(a){return"data-"+String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};var Ec=function(){var a=/[&\?#]exk=([^& ]+)/.exec(D.location.href);return a&&2==a.length?a[1]:null};var V=function(){this.s=0;this.w="";this.A=[];this.H=this.h=this.j=!1;this.oa=!0;this.la=this.aa=!1;this.Ha=new E;this.L=this.ba=this.X=!1;this.qa=this.pa=0;this.ia=[];this.a=null;this.T="";this.R=[];this.fa=null;this.V=[];this.J=!1;this.I=this.N="";this.Na=v();this.D=null;this.ha=!1;this.ta=this.c=this.m=0;this.W="";this.Z=!1},W=function(a){return(a=a.D)?a.b:null},X=function(a){return W(a)?(a=W(a))?a.hasAttribute(Cc("googleAvDm"))?1:2:0:0};V.prototype.Ja=function(a){var b=/^(http[s]?:)?\/\//.test(a)?a:Gc(a);if(this.L&&0<=Ga(this.A,b))return!0;(a=!a)||(a=!(null!==D&&D!=D.top));if(a||this.J||this.ba&&!this.X)return!1;this.L=!0;this.X&&(a=Hc(this,b,this.T,!0),a=Rb(a,"tsvp",v()-this.qa),yc(a));this.A.push(b);this.pa=v();return!0};V.prototype.Y=function(a,b,c){this.j&&(this.oa||3!=(void 0===c?3:c)||this.la)&&Y(this,b,!0);if(this.H||this.h&&this.aa)Y(this,b),this.h=this.H=!1};var Ic=function(a){return(a=a.fa)?2!=a():!0},Y=function(a,b,c){b=void 0===b?a.T:b;c=void 0===c?!1:c;if(b&&!a.J&&(2==a.c||c)&&Ic(a)){for(var d=0;d<a.A.length;++d){var f=Hc(a,a.A[d],b,c);yc(f)}a.ba=!0;c?a.j=!1:a.J=!0}},Gc=function(a,b){var c=[];a&&c.push("avi="+a);b&&c.push("cid="+b);return c.length?"//pagead2.googlesyndication.com/activeview?"+c.join("&"):"//pagead2.googlesyndication.com/activeview"},Hc=function(a,b,c,d){d=(void 0===d?0:d)?"osdim":a.H?"osd2":"osdtos";b=[b,-1<b.indexOf("?")?"&id=":"?id=",d];"osd2"==d&&a.h&&a.aa&&b.push("&tsf=1");b.push("&ti=1");b.push("&",c);b.push("&uc="+a.ta);W(a)?b.push("&tgt="+(W(a)?a.D.b.tagName:"")):b.push("&tgt=nf");b.push("&cl="+(a.ha?1:0));a.L&&(b.push("&lop=1"),b.push("&tslp="+(v()-a.pa)));if(c=a.D)b.push("&cec="+c.B),b.push("&clc="+c.M),b.push("&cac="+c.da),c.b?b.push("&cd="+c.b.clientWidth+"x"+c.b.clientHeight):b.push("&cd=nf");c=b.join("");for(b=0;b<a.R.length;b++){d="";try{d=a.R[b]()}catch(e){}var f="max_length";2<=d.length&&(3==d.length&&(f=d[2]),c=Ba(c,encodeURIComponent(d[0]),encodeURIComponent(d[1]),f))}2E3<c.length&&(c=c.substring(0,2E3));return c},Z=function(a,b){if(a.N){try{Mb(Ba(a.N,"vi",b))}catch(c){}0<=Ga(Jc,b)&&(a.N="")}};V.prototype.Aa=function(a){this.R.push(a)};V.prototype.Ca=function(a){this.V.push(a)};V.prototype.Ba=function(a){this.fa=a};var Kc=function(a,b){if(a.a&&sc(a.a)){var c=document.domain;a.m=1;T=D.setInterval(ic(197,Aa(xc,a.c,a.a,c,a.h,a.ia,a.W,void 0,void 0===b?!1:b)),500)}},Lc=function(a,b){var c=uc(a);try{qc(function(){var a=wc(!1),b=!a;!a&&D&&(a=D.parent);if(a&&a.postMessage)try{a.postMessage(c,"*"),b&&D.postMessage(c,"*")}catch(e){}},b)}catch(d){}},Mc=function(a,b){switch(b){case 1:a[26]=!0;break;case 2:a[26]=!1}},Nc=function(a,b){if(0!=b){var c={};a.a&&S(a.a,c);c[0]="goog_av_measurement_hold_update";Mc(c,b);Lc(c,282)}},Pc=function(a){1==X(a)&&Oc(a);var b={};a.a&&S(a.a,b);b[0]="goog_dom_content_loaded";a=X(a);Mc(b,a);Lc(b,114)},Oc=function(a){var b=W(a);if(r.MutationObserver&&b){var c={attributes:!0};c.attributeFilter=[Cc("googleAvDm")];(new r.MutationObserver(P(283,function(){Nc(a,X(a))}))).observe(b,c)}else b&&b.addEventListener?b.addEventListener("DOMAttrModified",P(283,function(){Nc(a,X(a))})):hc.U(286,Error(),void 0,void 0)},Qc=function(a,b){if(u(b)){var c=a.Ha;b=b.split("&");for(var d=b.length-1;0<=d;d--){var f=b[d].split("="),e=f[1];(f=c.ja[f[0]])&&f.ab(parseInt(e,10))&&f.$a()&&b.splice(d,1)}c=b.join("&").split("&");for(b=c.length-1;0<=b;b--)d=c[b],e=zb,d==e.xa?(a.oa=!1,c.splice(b,1)):d==e.wa?(a.h=!1,c.splice(b,1)):d==e.va&&(a.Z=!0,c.splice(b,1));a.W=c.join("&")}},Rc=function(a,b){W(a)||(a.D=Dc(b),W(a)&&pc(a.D.b,function(){var b={};a.a&&S(a.a,b);b[0]="goog_creative_loaded";var d=X(a);Mc(b,d);Lc(b,115);a.ha=!0}))};V.prototype.Ia=function(a,b,c,d,f,e,g,m,k,p){var h=this;this.s=a;this.N=b;this.I=d;this.j=e;g&&Qc(this,g);this.h=e;this.ia.push(947190542);this.a=new rc(f,Ec());Q(D,"load",function(){Z(h,"-1")},117);Q(D,"message",function(a){if(a&&a.data&&u(a.data)){var b=a.data;if(u(b)){var c={};b=b.split("\n");for(var d=0;d<b.length;d++){var e=b[d].indexOf("=");if(!(0>=e)){var f=Number(b[d].substr(0,e));e=b[d].substr(e+1);switch(f){case 5:case 8:case 11:case 15:case 16:case 18:case 26:e="true"==e;break;case 4:case 7:case 6:case 20:case 21:case 22:case 23:case 24:case 25:e=Number(e);break;case 3:case 19:if("function"==wa(decodeURIComponent))try{e=decodeURIComponent(e)}catch(Sc){throw Error("Error: URI malformed: "+e);}break;case 17:e=Ja(decodeURIComponent(e).split(","),Number)}c[f]=e}}c=c[0]?c:null}else c=null;if(c&&(b=new rc(c[4],c[12]),h.a&&h.a.match(b))){for(b=0;b<h.V.length;b++)h.V[b](c);c&&(b=100*c[25],"number"==typeof b&&!isNaN(b)&&(window.document["4CGeArbVQ"]=b|0));void 0!=c[18]&&(h.la=c[18]);h.Z&&void 0!=c[7]&&0<c[7]&&(b="//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt="+c[7],h.w&&(b+="&avi="+h.w),yc(b),h.Z=!1);b=c[0];if("goog_acknowledge_monitoring"==b)D.clearInterval(T),h.m=2;else if("goog_get_mode"==b){h.m=1;d={};h.a&&S(h.a,d);d[0]="goog_provide_mode";d[6]=h.c;d[19]=h.W;d[16]=h.h;try{var g=uc(d);a.source.postMessage(g,a.origin)}catch(Sc){}D.clearInterval(T);h.m=2}else"goog_update_data"==b?c&&(h.T=c[3],++h.ta):"goog_image_request"==b&&(h.Y(0,c[3]),c[5]||c[11]||Z(h,"0"));if("goog_update_data"==b||"goog_image_request"==b)(1==h.c||2==h.c||h.j)&&c[5]&&(a=1==c[15]&&"goog_update_data"==b,h.aa=!0,Z(h,"1"),h.I&&Ic(h)&&(Mb(h.I),h.I=""),h.j&&!a&&(Y(h,void 0,!0),h.X=!0,h.qa=v()),h.j||1!=h.c||(h.J=!0)),(1==h.c||2==h.c||h.j)&&c[11]&&(h.h=!1,Z(h,"3"),h.j&&Y(h,void 0,!0))}}},118);this.w=c||"";this.A=[p||Gc(c,k)];Q(D,"unload",function(){h.Y();Z(h,"0");if(2>h.m&&!h.h){var a=void 0===a?D:a;if(2==h.c){var b="hs="+h.m,c=[];h.w&&c.push("avi="+h.w);c.push("id=osd2");c.push("ovr_value="+h.s);h.L&&c.push("lop=1");h.a&&(c=c.concat(tc(h.a)));c.push("tt="+(v()-h.Na));c.push(b);a.document&&a.document.referrer&&c.push("ref="+encodeURIComponent(a.document.referrer));try{yc("//pagead2.googlesyndication.com/pagead/gen_204?"+c.join("&"))}catch(R){}}}},119);var t=D.document;0==({visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[t.webkitVisibilityState||t.mozVisibilityState||t.visibilityState||""]||0)?(Y(this,"r=pv",!0),Kc(this,!0)):(!t.readyState||"complete"!=t.readyState&&"loaded"!=t.readyState?!Ta()||0<=Fa(Wa(),11)?Q(t,"DOMContentLoaded",function(){Pc(h)},121):Q(t,"readystatechange",function(){"complete"!=t.readyState&&"loaded"!=t.readyState||Pc(h)},120):Pc(this),-1==this.s?this.c=e?3:1:-2==this.s?this.c=3:0<this.s&&(this.c=2,this.H=!0),this.h&&!this.H&&-1==this.s&&(this.c=2),Kc(this),qc(function(a){Rc(h,a)},122))};V.S=void 0;V.o=function(){return V.S?V.S:V.S=new V};var Jc=["1","0","3"];w("osdlfm",P(123,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ia.apply(d,[].concat(n(b)))}));w("osdlac",P(124,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Aa.apply(d,[].concat(n(b)))}));w("osdlamrc",P(125,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ca.apply(d,[].concat(n(b)))}));w("osdsir",P(126,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Y.apply(d,[].concat(n(b)))}));w("osdacrc",P(127,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ba.apply(d,[].concat(n(b)))}));w("osdpcls",P(128,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ja.apply(d,[].concat(n(b)))}));}).call(this);
