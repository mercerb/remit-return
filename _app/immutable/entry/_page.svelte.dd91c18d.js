import{S as lt,i as ct,s as mt,k as G,J as q,a as I,l as L,m as T,K as U,h as x,c as j,p as d,b as z,H as p,g as O,w as te,d as F,f as ee,L as Ft,e as Rt,M as ne,N as ce,r as X,u as K,v as Ue,q as me,O as ue,n as $,D as fe,P as ft,Q as Ze,E as he,F as de,G as _e,o as $e,R as tn,x as it,T as Gt,z as dt,A as _t,B as gt,U as Lt,C as yt,V as en}from"../chunks/index.5906a75e.js";function Dt(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function nn(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Be(t){let e,n,o;t.length!==2?(e=Dt,n=(a,l)=>Dt(t(a),l),o=(a,l)=>t(a)-l):(e=t===Dt||t===nn?t:on,n=t,o=t);function r(a,l,c=0,h=a.length){if(c<h){if(e(l,l)!==0)return h;do{const m=c+h>>>1;n(a[m],l)<0?c=m+1:h=m}while(c<h)}return c}function s(a,l,c=0,h=a.length){if(c<h){if(e(l,l)!==0)return h;do{const m=c+h>>>1;n(a[m],l)<=0?c=m+1:h=m}while(c<h)}return c}function i(a,l,c=0,h=a.length){const m=r(a,l,c,h-1);return m>c&&o(a[m-1],l)>-o(a[m],l)?m-1:m}return{left:r,center:i,right:s}}function on(){return 0}function rn(t){return t===null?NaN:+t}const sn=Be(Dt),an=sn.right;Be(rn).center;const ln=an,cn=Math.sqrt(50),mn=Math.sqrt(10),un=Math.sqrt(2);function At(t,e,n){const o=(e-t)/Math.max(0,n),r=Math.floor(Math.log10(o)),s=o/Math.pow(10,r),i=s>=cn?10:s>=mn?5:s>=un?2:1;let a,l,c;return r<0?(c=Math.pow(10,-r)/i,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*i,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?At(t,e,n*2):[a,l,c]}function fn(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const o=e<t,[r,s,i]=o?At(e,t,n):At(t,e,n);if(!(s>=r))return[];const a=s-r+1,l=new Array(a);if(o)if(i<0)for(let c=0;c<a;++c)l[c]=(s-c)/-i;else for(let c=0;c<a;++c)l[c]=(s-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(r+c)/-i;else for(let c=0;c<a;++c)l[c]=(r+c)*i;return l}function Yt(t,e,n){return e=+e,t=+t,n=+n,At(t,e,n)[2]}function hn(t,e,n){e=+e,t=+t,n=+n;const o=e<t,r=o?Yt(e,t,n):Yt(t,e,n);return(o?-1:1)*(r<0?1/-r:r)}function oe(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function We(t,e){var n=Object.create(t.prototype);for(var o in e)n[o]=e[o];return n}function Et(){}var St=.7,Pt=1/St,bt="\\s*([+-]?\\d+)\\s*",Nt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",et="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dn=/^#([0-9a-f]{3,8})$/,_n=new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`),gn=new RegExp(`^rgb\\(${et},${et},${et}\\)$`),yn=new RegExp(`^rgba\\(${bt},${bt},${bt},${Nt}\\)$`),pn=new RegExp(`^rgba\\(${et},${et},${et},${Nt}\\)$`),xn=new RegExp(`^hsl\\(${Nt},${et},${et}\\)$`),bn=new RegExp(`^hsla\\(${Nt},${et},${et},${Nt}\\)$`),ge={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};oe(Et,Mt,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ye,formatHex:ye,formatHex8:kn,formatHsl:vn,formatRgb:pe,toString:pe});function ye(){return this.rgb().formatHex()}function kn(){return this.rgb().formatHex8()}function vn(){return Fe(this).formatHsl()}function pe(){return this.rgb().formatRgb()}function Mt(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=dn.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?xe(e):n===3?new Y(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Ct(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Ct(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=_n.exec(t))?new Y(e[1],e[2],e[3],1):(e=gn.exec(t))?new Y(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=yn.exec(t))?Ct(e[1],e[2],e[3],e[4]):(e=pn.exec(t))?Ct(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=xn.exec(t))?ve(e[1],e[2]/100,e[3]/100,1):(e=bn.exec(t))?ve(e[1],e[2]/100,e[3]/100,e[4]):ge.hasOwnProperty(t)?xe(ge[t]):t==="transparent"?new Y(NaN,NaN,NaN,0):null}function xe(t){return new Y(t>>16&255,t>>8&255,t&255,1)}function Ct(t,e,n,o){return o<=0&&(t=e=n=NaN),new Y(t,e,n,o)}function wn(t){return t instanceof Et||(t=Mt(t)),t?(t=t.rgb(),new Y(t.r,t.g,t.b,t.opacity)):new Y}function Xt(t,e,n,o){return arguments.length===1?wn(t):new Y(t,e,n,o??1)}function Y(t,e,n,o){this.r=+t,this.g=+e,this.b=+n,this.opacity=+o}oe(Y,Xt,We(Et,{brighter(t){return t=t==null?Pt:Math.pow(Pt,t),new Y(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?St:Math.pow(St,t),new Y(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Y(at(this.r),at(this.g),at(this.b),It(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:be,formatHex:be,formatHex8:Tn,formatRgb:ke,toString:ke}));function be(){return`#${st(this.r)}${st(this.g)}${st(this.b)}`}function Tn(){return`#${st(this.r)}${st(this.g)}${st(this.b)}${st((isNaN(this.opacity)?1:this.opacity)*255)}`}function ke(){const t=It(this.opacity);return`${t===1?"rgb(":"rgba("}${at(this.r)}, ${at(this.g)}, ${at(this.b)}${t===1?")":`, ${t})`}`}function It(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function at(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function st(t){return t=at(t),(t<16?"0":"")+t.toString(16)}function ve(t,e,n,o){return o<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Z(t,e,n,o)}function Fe(t){if(t instanceof Z)return new Z(t.h,t.s,t.l,t.opacity);if(t instanceof Et||(t=Mt(t)),!t)return new Z;if(t instanceof Z)return t;t=t.rgb();var e=t.r/255,n=t.g/255,o=t.b/255,r=Math.min(e,n,o),s=Math.max(e,n,o),i=NaN,a=s-r,l=(s+r)/2;return a?(e===s?i=(n-o)/a+(n<o)*6:n===s?i=(o-e)/a+2:i=(e-n)/a+4,a/=l<.5?s+r:2-s-r,i*=60):a=l>0&&l<1?0:i,new Z(i,a,l,t.opacity)}function Sn(t,e,n,o){return arguments.length===1?Fe(t):new Z(t,e,n,o??1)}function Z(t,e,n,o){this.h=+t,this.s=+e,this.l=+n,this.opacity=+o}oe(Z,Sn,We(Et,{brighter(t){return t=t==null?Pt:Math.pow(Pt,t),new Z(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?St:Math.pow(St,t),new Z(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,o=n+(n<.5?n:1-n)*e,r=2*n-o;return new Y(Bt(t>=240?t-240:t+120,r,o),Bt(t,r,o),Bt(t<120?t+240:t-120,r,o),this.opacity)},clamp(){return new Z(we(this.h),Vt(this.s),Vt(this.l),It(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=It(this.opacity);return`${t===1?"hsl(":"hsla("}${we(this.h)}, ${Vt(this.s)*100}%, ${Vt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function we(t){return t=(t||0)%360,t<0?t+360:t}function Vt(t){return Math.max(0,Math.min(1,t||0))}function Bt(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const re=t=>()=>t;function Nn(t,e){return function(n){return t+n*e}}function Mn(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(o){return Math.pow(t+o*e,n)}}function En(t){return(t=+t)==1?Ye:function(e,n){return n-e?Mn(e,n,t):re(isNaN(e)?n:e)}}function Ye(t,e){var n=e-t;return n?Nn(t,n):re(isNaN(t)?e:t)}const Te=function t(e){var n=En(e);function o(r,s){var i=n((r=Xt(r)).r,(s=Xt(s)).r),a=n(r.g,s.g),l=n(r.b,s.b),c=Ye(r.opacity,s.opacity);return function(h){return r.r=i(h),r.g=a(h),r.b=l(h),r.opacity=c(h),r+""}}return o.gamma=t,o}(1);function Gn(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,o=e.slice(),r;return function(s){for(r=0;r<n;++r)o[r]=t[r]*(1-s)+e[r]*s;return o}}function Ln(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Cn(t,e){var n=e?e.length:0,o=t?Math.min(n,t.length):0,r=new Array(o),s=new Array(n),i;for(i=0;i<o;++i)r[i]=ie(t[i],e[i]);for(;i<n;++i)s[i]=e[i];return function(a){for(i=0;i<o;++i)s[i]=r[i](a);return s}}function Vn(t,e){var n=new Date;return t=+t,e=+e,function(o){return n.setTime(t*(1-o)+e*o),n}}function jt(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function Hn(t,e){var n={},o={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=ie(t[r],e[r]):o[r]=e[r];return function(s){for(r in n)o[r]=n[r](s);return o}}var Kt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Wt=new RegExp(Kt.source,"g");function Dn(t){return function(){return t}}function Rn(t){return function(e){return t(e)+""}}function An(t,e){var n=Kt.lastIndex=Wt.lastIndex=0,o,r,s,i=-1,a=[],l=[];for(t=t+"",e=e+"";(o=Kt.exec(t))&&(r=Wt.exec(e));)(s=r.index)>n&&(s=e.slice(n,s),a[i]?a[i]+=s:a[++i]=s),(o=o[0])===(r=r[0])?a[i]?a[i]+=r:a[++i]=r:(a[++i]=null,l.push({i,x:jt(o,r)})),n=Wt.lastIndex;return n<e.length&&(s=e.slice(n),a[i]?a[i]+=s:a[++i]=s),a.length<2?l[0]?Rn(l[0].x):Dn(e):(e=l.length,function(c){for(var h=0,m;h<e;++h)a[(m=l[h]).i]=m.x(c);return a.join("")})}function ie(t,e){var n=typeof e,o;return e==null||n==="boolean"?re(e):(n==="number"?jt:n==="string"?(o=Mt(e))?(e=o,Te):An:e instanceof Mt?Te:e instanceof Date?Vn:Ln(e)?Gn:Array.isArray(e)?Cn:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Hn:jt)(t,e)}function Pn(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function In(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ot(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,o=t.slice(0,n);return[o.length>1?o[0]+o.slice(2):o,+t.slice(n+1)]}function kt(t){return t=Ot(Math.abs(t)),t?t[1]:NaN}function jn(t,e){return function(n,o){for(var r=n.length,s=[],i=0,a=t[0],l=0;r>0&&a>0&&(l+a+1>o&&(a=Math.max(1,o-l)),s.push(n.substring(r-=a,r+a)),!((l+=a+1)>o));)a=t[i=(i+1)%t.length];return s.reverse().join(e)}}function On(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var zn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function zt(t){if(!(e=zn.exec(t)))throw new Error("invalid format: "+t);var e;return new se({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}zt.prototype=se.prototype;function se(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}se.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function qn(t){t:for(var e=t.length,n=1,o=-1,r;n<e;++n)switch(t[n]){case".":o=r=n;break;case"0":o===0&&(o=n),r=n;break;default:if(!+t[n])break t;o>0&&(o=0);break}return o>0?t.slice(0,o)+t.slice(r+1):t}var Xe;function Un(t,e){var n=Ot(t,e);if(!n)return t+"";var o=n[0],r=n[1],s=r-(Xe=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,i=o.length;return s===i?o:s>i?o+new Array(s-i+1).join("0"):s>0?o.slice(0,s)+"."+o.slice(s):"0."+new Array(1-s).join("0")+Ot(t,Math.max(0,e+s-1))[0]}function Se(t,e){var n=Ot(t,e);if(!n)return t+"";var o=n[0],r=n[1];return r<0?"0."+new Array(-r).join("0")+o:o.length>r+1?o.slice(0,r+1)+"."+o.slice(r+1):o+new Array(r-o.length+2).join("0")}const Ne={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:In,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Se(t*100,e),r:Se,s:Un,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Me(t){return t}var Ee=Array.prototype.map,Ge=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Bn(t){var e=t.grouping===void 0||t.thousands===void 0?Me:jn(Ee.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",o=t.currency===void 0?"":t.currency[1]+"",r=t.decimal===void 0?".":t.decimal+"",s=t.numerals===void 0?Me:On(Ee.call(t.numerals,String)),i=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(m){m=zt(m);var f=m.fill,_=m.align,u=m.sign,v=m.symbol,S=m.zero,k=m.width,b=m.comma,g=m.precision,M=m.trim,y=m.type;y==="n"?(b=!0,y="g"):Ne[y]||(g===void 0&&(g=12),M=!0,y="g"),(S||f==="0"&&_==="=")&&(S=!0,f="0",_="=");var C=v==="$"?n:v==="#"&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",E=v==="$"?o:/[%p]/.test(y)?i:"",V=Ne[y],H=/[defgprs%]/.test(y);g=g===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g));function D(w){var P=C,A=E,B,nt,J;if(y==="c")A=V(w)+A,w="";else{w=+w;var Q=w<0||1/w<0;if(w=isNaN(w)?l:V(Math.abs(w),g),M&&(w=qn(w)),Q&&+w==0&&u!=="+"&&(Q=!1),P=(Q?u==="("?u:a:u==="-"||u==="("?"":u)+P,A=(y==="s"?Ge[8+Xe/3]:"")+A+(Q&&u==="("?")":""),H){for(B=-1,nt=w.length;++B<nt;)if(J=w.charCodeAt(B),48>J||J>57){A=(J===46?r+w.slice(B+1):w.slice(B))+A,w=w.slice(0,B);break}}}b&&!S&&(w=e(w,1/0));var N=P.length+w.length+A.length,R=N<k?new Array(k-N+1).join(f):"";switch(b&&S&&(w=e(R+w,R.length?k-A.length:1/0),R=""),_){case"<":w=P+w+A+R;break;case"=":w=P+R+w+A;break;case"^":w=R.slice(0,N=R.length>>1)+P+w+A+R.slice(N);break;default:w=R+P+w+A;break}return s(w)}return D.toString=function(){return m+""},D}function h(m,f){var _=c((m=zt(m),m.type="f",m)),u=Math.max(-8,Math.min(8,Math.floor(kt(f)/3)))*3,v=Math.pow(10,-u),S=Ge[8+u/3];return function(k){return _(v*k)+S}}return{format:c,formatPrefix:h}}var Ht,Ke,Je;Wn({thousands:",",grouping:[3],currency:["$",""]});function Wn(t){return Ht=Bn(t),Ke=Ht.format,Je=Ht.formatPrefix,Ht}function Fn(t){return Math.max(0,-kt(Math.abs(t)))}function Yn(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(kt(e)/3)))*3-kt(Math.abs(t)))}function Xn(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,kt(e)-kt(t))+1}function Kn(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function Jn(t){return function(){return t}}function Qn(t){return+t}var Le=[0,1];function pt(t){return t}function Jt(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:Jn(isNaN(e)?NaN:.5)}function Zn(t,e){var n;return t>e&&(n=t,t=e,e=n),function(o){return Math.max(t,Math.min(e,o))}}function $n(t,e,n){var o=t[0],r=t[1],s=e[0],i=e[1];return r<o?(o=Jt(r,o),s=n(i,s)):(o=Jt(o,r),s=n(s,i)),function(a){return s(o(a))}}function to(t,e,n){var o=Math.min(t.length,e.length)-1,r=new Array(o),s=new Array(o),i=-1;for(t[o]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++i<o;)r[i]=Jt(t[i],t[i+1]),s[i]=n(e[i],e[i+1]);return function(a){var l=ln(t,a,1,o)-1;return s[l](r[l](a))}}function eo(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function no(){var t=Le,e=Le,n=ie,o,r,s,i=pt,a,l,c;function h(){var f=Math.min(t.length,e.length);return i!==pt&&(i=Zn(t[0],t[f-1])),a=f>2?to:$n,l=c=null,m}function m(f){return f==null||isNaN(f=+f)?s:(l||(l=a(t.map(o),e,n)))(o(i(f)))}return m.invert=function(f){return i(r((c||(c=a(e,t.map(o),jt)))(f)))},m.domain=function(f){return arguments.length?(t=Array.from(f,Qn),h()):t.slice()},m.range=function(f){return arguments.length?(e=Array.from(f),h()):e.slice()},m.rangeRound=function(f){return e=Array.from(f),n=Pn,h()},m.clamp=function(f){return arguments.length?(i=f?!0:pt,h()):i!==pt},m.interpolate=function(f){return arguments.length?(n=f,h()):n},m.unknown=function(f){return arguments.length?(s=f,m):s},function(f,_){return o=f,r=_,h()}}function oo(){return no()(pt,pt)}function ro(t,e,n,o){var r=hn(t,e,n),s;switch(o=zt(o??",f"),o.type){case"s":{var i=Math.max(Math.abs(t),Math.abs(e));return o.precision==null&&!isNaN(s=Yn(r,i))&&(o.precision=s),Je(o,i)}case"":case"e":case"g":case"p":case"r":{o.precision==null&&!isNaN(s=Xn(r,Math.max(Math.abs(t),Math.abs(e))))&&(o.precision=s-(o.type==="e"));break}case"f":case"%":{o.precision==null&&!isNaN(s=Fn(r))&&(o.precision=s-(o.type==="%")*2);break}}return Ke(o)}function io(t){var e=t.domain;return t.ticks=function(n){var o=e();return fn(o[0],o[o.length-1],n??10)},t.tickFormat=function(n,o){var r=e();return ro(r[0],r[r.length-1],n??10,o)},t.nice=function(n){n==null&&(n=10);var o=e(),r=0,s=o.length-1,i=o[r],a=o[s],l,c,h=10;for(a<i&&(c=i,i=a,a=c,c=r,r=s,s=c);h-- >0;){if(c=Yt(i,a,n),c===l)return o[r]=i,o[s]=a,e(o);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function Qt(){var t=oo();return t.copy=function(){return eo(t,Qt())},Kn.apply(t,arguments),io(t)}function xt(t,e,n){this.k=t,this.x=e,this.y=n}xt.prototype={constructor:xt,scale:function(t){return t===1?this:new xt(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new xt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new xt(1,0,0);xt.prototype;function Zt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Ce(t,{delay:e=0,speed:n,duration:o,easing:r=Zt}={}){let s=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(s+=parseInt(i.strokeWidth)),o===void 0?n===void 0?o=800:o=s/n:typeof o=="function"&&(o=o(s)),{delay:e,duration:o,easing:r,css:(a,l)=>`
			stroke-dasharray: ${s};
			stroke-dashoffset: ${l*s};
		`}}const Tt=[{migrant_rsp_id:4645,values:[{month:0,mig_cost_left:303,remit:168,home_country:"GT",money_us:529},{month:1,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:2,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:3,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:4,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:5,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:6,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:7,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:8,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:9,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:10,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:11,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:12,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:13,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:14,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:15,mig_cost_left:0,remit:168,home_country:"GT",money_us:832}]},{migrant_rsp_id:1358,values:[{month:0,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:1,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:2,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:3,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:4,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:5,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:6,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:7,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:8,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:9,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:10,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:11,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:12,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:13,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:14,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:15,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0}]},{migrant_rsp_id:1743,values:[{month:0,mig_cost_left:11e3,remit:17,home_country:"HND",money_us:0},{month:1,mig_cost_left:10017,remit:17,home_country:"HND",money_us:0},{month:2,mig_cost_left:9034,remit:17,home_country:"HND",money_us:0},{month:3,mig_cost_left:8051,remit:17,home_country:"HND",money_us:0},{month:4,mig_cost_left:7068,remit:17,home_country:"HND",money_us:0},{month:5,mig_cost_left:6085,remit:17,home_country:"HND",money_us:0},{month:6,mig_cost_left:5102,remit:17,home_country:"HND",money_us:0},{month:7,mig_cost_left:4119,remit:17,home_country:"HND",money_us:0},{month:8,mig_cost_left:3136,remit:17,home_country:"HND",money_us:0},{month:9,mig_cost_left:2153,remit:17,home_country:"HND",money_us:0},{month:10,mig_cost_left:1170,remit:17,home_country:"HND",money_us:0},{month:11,mig_cost_left:187,remit:17,home_country:"HND",money_us:796},{month:12,mig_cost_left:0,remit:17,home_country:"HND",money_us:983},{month:13,mig_cost_left:0,remit:17,home_country:"HND",money_us:983},{month:14,mig_cost_left:0,remit:17,home_country:"HND",money_us:983},{month:15,mig_cost_left:0,remit:17,home_country:"HND",money_us:983}]},{migrant_rsp_id:2399,values:[{month:0,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:1,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:2,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:3,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:4,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:5,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:6,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:7,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:8,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:9,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:10,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:11,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:12,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:13,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:14,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:15,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0}]},{migrant_rsp_id:853,values:[{month:0,mig_cost_left:421,remit:25,home_country:"GT",money_us:554},{month:1,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:2,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:3,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:4,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:5,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:6,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:7,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:8,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:9,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:10,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:11,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:12,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:13,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:14,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:15,mig_cost_left:0,remit:25,home_country:"GT",money_us:975}]},{migrant_rsp_id:1575,values:[{month:0,mig_cost_left:842,remit:25,home_country:"GT",money_us:133},{month:1,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:2,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:3,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:4,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:5,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:6,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:7,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:8,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:9,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:10,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:11,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:12,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:13,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:14,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:15,mig_cost_left:0,remit:25,home_country:"GT",money_us:975}]},{migrant_rsp_id:3921,values:[{month:0,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:1,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:2,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:3,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:4,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:5,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:6,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:7,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:8,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:9,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:10,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:11,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:12,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:13,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:14,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:15,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0}]},{migrant_rsp_id:810,values:[{month:0,mig_cost_left:1516,remit:200,home_country:"GT",money_us:0},{month:1,mig_cost_left:716,remit:200,home_country:"GT",money_us:84},{month:2,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:3,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:4,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:5,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:6,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:7,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:8,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:9,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:10,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:11,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:12,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:13,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:14,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:15,mig_cost_left:0,remit:200,home_country:"GT",money_us:800}]},{migrant_rsp_id:1620,values:[{month:0,mig_cost_left:1348,remit:200,home_country:"GT",money_us:0},{month:1,mig_cost_left:548,remit:200,home_country:"GT",money_us:252},{month:2,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:3,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:4,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:5,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:6,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:7,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:8,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:9,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:10,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:11,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:12,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:13,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:14,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:15,mig_cost_left:0,remit:200,home_country:"GT",money_us:800}]},{migrant_rsp_id:1083,values:[{month:0,mig_cost_left:7e3,remit:200,home_country:"SLV",money_us:0},{month:1,mig_cost_left:6200,remit:200,home_country:"SLV",money_us:0},{month:2,mig_cost_left:5400,remit:200,home_country:"SLV",money_us:0},{month:3,mig_cost_left:4600,remit:200,home_country:"SLV",money_us:0},{month:4,mig_cost_left:3800,remit:200,home_country:"SLV",money_us:0},{month:5,mig_cost_left:3e3,remit:200,home_country:"SLV",money_us:0},{month:6,mig_cost_left:2200,remit:200,home_country:"SLV",money_us:0},{month:7,mig_cost_left:1400,remit:200,home_country:"SLV",money_us:0},{month:8,mig_cost_left:600,remit:200,home_country:"SLV",money_us:200},{month:9,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:10,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:11,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:12,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:13,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:14,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:15,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800}]}];function Ve(t,e,n){const o=t.slice();return o[22]=e[n],o}function He(t,e,n){const o=t.slice();return o[25]=e[n],o}function De(t,e,n){const o=t.slice();return o[28]=e[n],o[30]=n,o}function Re(t){let e,n,o=t[0]>1&&Ae(t);return{c(){o&&o.c(),e=Rt()},l(r){o&&o.l(r),e=Rt()},m(r,s){o&&o.m(r,s),z(r,e,s),n=!0},p(r,s){r[0]>1?o?(o.p(r,s),s&1&&O(o,1)):(o=Ae(r),o.c(),O(o,1),o.m(e.parentNode,e)):o&&(te(),F(o,1,1,()=>{o=null}),ee())},i(r){n||(O(o),n=!0)},o(r){F(o),n=!1},d(r){o&&o.d(r),r&&x(e)}}}function Ae(t){let e,n,o=Tt,r=[];for(let i=0;i<o.length;i+=1)r[i]=Pe(De(t,o,i));const s=i=>F(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=Rt()},l(i){for(let a=0;a<r.length;a+=1)r[a].l(i);e=Rt()},m(i,a){for(let l=0;l<r.length;l+=1)r[l].m(i,a);z(i,e,a),n=!0},p(i,a){if(a&768){o=Tt;let l;for(l=0;l<o.length;l+=1){const c=De(i,o,l);r[l]?(r[l].p(c,a),O(r[l],1)):(r[l]=Pe(c),r[l].c(),O(r[l],1),r[l].m(e.parentNode,e))}for(te(),l=o.length;l<r.length;l+=1)s(l);ee()}},i(i){if(!n){for(let a=0;a<o.length;a+=1)O(r[a]);n=!0}},o(i){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)F(r[a]);n=!1},d(i){Ft(r,i),i&&x(e)}}}function Pe(t){let e,n,o;return{c(){e=q("polyline"),this.h()},l(r){e=U(r,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0}),T(e).forEach(x),this.h()},h(){d(e,"points",t[9](t[28].values)),d(e,"fill","none"),d(e,"stroke",t[8](t[28])),d(e,"stroke-width","3")},m(r,s){z(r,e,s),o=!0},p(r,s){t=r},i(r){o||(ne(()=>{n||(n=ce(e,Ce,{duration:5e3,easing:Zt},!0)),n.run(1)}),o=!0)},o(r){n||(n=ce(e,Ce,{duration:5e3,easing:Zt},!1)),n.run(0),o=!1},d(r){r&&x(e),r&&n&&n.end()}}}function Ie(t){let e,n,o,r=t[25]+"",s,i;return{c(){e=q("g"),n=q("line"),o=q("text"),s=X(r),this.h()},l(a){e=U(a,"g",{class:!0,opacity:!0,transform:!0});var l=T(e);n=U(l,"line",{stroke:!0,y2:!0}),T(n).forEach(x),o=U(l,"text",{dy:!0,fill:!0,y:!0,x:!0,"text-anchor":!0});var c=T(o);s=K(c,r),c.forEach(x),l.forEach(x),this.h()},h(){d(n,"stroke","black"),d(n,"y2","6"),d(o,"dy","0.71em"),d(o,"fill","black"),d(o,"y","10"),d(o,"x","-5"),d(o,"text-anchor","middle"),d(e,"class","tick"),d(e,"opacity","1"),d(e,"transform",i="translate("+t[5](t[25])+",0)")},m(a,l){z(a,e,l),p(e,n),p(e,o),p(o,s)},p(a,l){l&4&&r!==(r=a[25]+"")&&Ue(s,r),l&36&&i!==(i="translate("+a[5](a[25])+",0)")&&d(e,"transform",i)},d(a){a&&x(e)}}}function je(t){let e,n,o,r="$"+t[22],s,i;return{c(){e=q("g"),n=q("line"),o=q("text"),s=X(r),this.h()},l(a){e=U(a,"g",{class:!0,opacity:!0,transform:!0});var l=T(e);n=U(l,"line",{stroke:!0,x2:!0}),T(n).forEach(x),o=U(l,"text",{dy:!0,fill:!0,x:!0,"text-anchor":!0});var c=T(o);s=K(c,r),c.forEach(x),l.forEach(x),this.h()},h(){d(n,"stroke","black"),d(n,"x2","-5"),d(o,"dy","0.32em"),d(o,"fill","black"),d(o,"x","-"+10),d(o,"text-anchor","end"),d(e,"class","tick"),d(e,"opacity","1"),d(e,"transform",i="translate(0,"+t[4](t[22])+")")},m(a,l){z(a,e,l),p(e,n),p(e,o),p(o,s)},p(a,l){l&8&&r!==(r="$"+a[22])&&Ue(s,r),l&24&&i!==(i="translate(0,"+a[4](a[22])+")")&&d(e,"transform",i)},d(a){a&&x(e)}}}function so(t){let e,n,o,r,s,i,a,l,c,h,m,f,_,u=t[0]>0&&Re(t),v=t[2],S=[];for(let g=0;g<v.length;g+=1)S[g]=Ie(He(t,v,g));let k=t[3],b=[];for(let g=0;g<k.length;g+=1)b[g]=je(Ve(t,k,g));return{c(){e=G("div"),n=q("svg"),o=q("g"),r=q("line"),i=q("line"),l=q("g"),u&&u.c(),c=q("g");for(let g=0;g<S.length;g+=1)S[g].c();h=q("g");for(let g=0;g<b.length;g+=1)b[g].c();m=I(),f=G("div"),this.h()},l(g){e=L(g,"DIV",{class:!0});var M=T(e);n=U(M,"svg",{width:!0,height:!0,id:!0});var y=T(n);o=U(y,"g",{});var C=T(o);r=U(C,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0}),T(r).forEach(x),i=U(C,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0,text:!0}),T(i).forEach(x),C.forEach(x),l=U(y,"g",{});var E=T(l);u&&u.l(E),E.forEach(x),c=U(y,"g",{transform:!0});var V=T(c);for(let D=0;D<S.length;D+=1)S[D].l(V);V.forEach(x),h=U(y,"g",{transform:!0});var H=T(h);for(let D=0;D<b.length;D+=1)b[D].l(H);H.forEach(x),y.forEach(x),M.forEach(x),m=j(g),f=L(g,"DIV",{id:!0}),T(f).forEach(x),this.h()},h(){d(r,"x1",t[6].left),d(r,"x2",$t-t[6].right),d(r,"y1",ht-t[6].bottom),d(r,"y2",ht-t[6].bottom),d(r,"stroke",s=t[1].blue),d(r,"stroke-width","2"),d(r,"class","axis"),d(i,"x1",t[6].left),d(i,"x2",t[6].left),d(i,"y1",t[6].top),d(i,"y2",ht-t[6].bottom),d(i,"stroke",a=t[1].blue),d(i,"stroke-width","2"),d(i,"class","axis"),d(i,"text","Cost of Migration (USD)"),d(c,"transform","translate(0, "+(ht-t[6].bottom)+")"),d(h,"transform","translate("+t[6].left+", 0)"),d(n,"width",$t),d(n,"height",ht),d(n,"id",t[7]),d(e,"class","LineChart2 svelte-14o9rub"),d(f,"id","chart")},m(g,M){z(g,e,M),p(e,n),p(n,o),p(o,r),p(o,i),p(n,l),u&&u.m(l,null),p(n,c);for(let y=0;y<S.length;y+=1)S[y].m(c,null);p(n,h);for(let y=0;y<b.length;y+=1)b[y].m(h,null);z(g,m,M),z(g,f,M),_=!0},p(g,[M]){if((!_||M&2&&s!==(s=g[1].blue))&&d(r,"stroke",s),(!_||M&2&&a!==(a=g[1].blue))&&d(i,"stroke",a),g[0]>0?u?(u.p(g,M),M&1&&O(u,1)):(u=Re(g),u.c(),O(u,1),u.m(l,null)):u&&(te(),F(u,1,1,()=>{u=null}),ee()),M&36){v=g[2];let y;for(y=0;y<v.length;y+=1){const C=He(g,v,y);S[y]?S[y].p(C,M):(S[y]=Ie(C),S[y].c(),S[y].m(c,null))}for(;y<S.length;y+=1)S[y].d(1);S.length=v.length}if(M&24){k=g[3];let y;for(y=0;y<k.length;y+=1){const C=Ve(g,k,y);b[y]?b[y].p(C,M):(b[y]=je(C),b[y].c(),b[y].m(h,null))}for(;y<b.length;y+=1)b[y].d(1);b.length=k.length}},i(g){_||(O(u),_=!0)},o(g){F(u),_=!1},d(g){g&&x(e),u&&u.d(),Ft(S,g),Ft(b,g),g&&x(m),g&&x(f)}}}let $t=600,ht=400,Oe=10;function ao(t,e,n){let o,r,{index:s,width:i,height:a,projection:l,themeColors:c}=e;const h={top:50,left:50,right:50,bottom:50},m=Tt.flatMap(E=>E.values.map(V=>V.month)),f=[...new Set(m)],_=Math.min(...f),u=Math.max(...f),v=Tt.flatMap(E=>E.values.map(V=>V.mig_cost_left)),S=Math.min(...v),k=Math.max(...v);let b=[],g=[];const M="svg-container-"+Math.random()*1e6;function y(E){return E.values.every(V=>V.remit==0)&&E.values.every(V=>V.money_us==0)?c.orange:c.blue}function C(E){return E.map(function(V){return o(V.month)+","+r(V.mig_cost_left)}).join(" ")}return t.$$set=E=>{"index"in E&&n(0,s=E.index),"width"in E&&n(10,i=E.width),"height"in E&&n(11,a=E.height),"projection"in E&&n(12,l=E.projection),"themeColors"in E&&n(1,c=E.themeColors)},t.$$.update=()=>{if(t.$$.dirty&12&&(n(2,b=[]),n(3,g=[]),Tt.length>1)){let E=[Math.round(_),Math.round(u+1)],V=Math.floor((E[1]-E[0])/Oe);for(let w=E[0];w<E[1];w=w+Math.max(1,V))b.push(w);let H=[Math.round(S),Math.round(k+1)],D=Math.floor((H[1]-H[0])/Oe);for(let w=H[0];w<H[1];w=w+Math.max(1,D))g.push(w)}},n(5,o=Qt().domain([_,u]).range([h.left,$t-h.right])),n(4,r=Qt().domain([S,k]).range([ht-h.bottom,h.top])),[s,c,b,g,r,o,h,M,y,C,i,a,l]}class lo extends lt{constructor(e){super(),ct(this,e,ao,so,mt,{index:0,width:10,height:11,projection:12,themeColors:1})}}function co(t){let e,n,o,r,s,i,a,l,c,h,m,f,_,u,v,S,k,b,g,M,y,C,E,V,H,D,w,P,A;return{c(){e=G("main"),n=G("html"),o=G("head"),r=G("meta"),s=I(),i=G("style"),a=X(`.node rect {
                    cursor: move;
                    fill-opacity: 0.9;
                    shape-rendering: crispEdges;
                }
                .node text {
                    pointer-events: none;
                    text-shadow: 0 1px 0 #fff;
                }
                .link {
                    fill: none;
                    stroke: burlywood;
                    stroke-opacity: 0.2;
                }
                .link:hover {
                    fill: red;
                    stroke: red;
                    stroke-opacity: 1000;
                }
                svg {
                    /* position: absolute; */
                    text-anchor: middle;
                }
                canvas {
                    position: absolute;
                }`),l=I(),c=G("body"),h=G("div"),m=G("p"),f=X("Original Occupation"),_=I(),u=G("p"),v=X("US Occupation"),S=I(),k=G("p"),b=G("canvas"),g=I(),M=q("svg"),y=I(),C=G("script"),V=I(),H=G("script"),w=I(),P=G("script"),A=X(`var margin = { top: 10, right: 10, bottom: 10, left: 10 },
                        width = 600 - margin.left - margin.right,
                        height = 500 - margin.top - margin.bottom;
                    var formatNumber = d3.format(",.0f"),
                        format = function (d) {
                            return formatNumber(d);
                        },
                        color = d3.scale.category20();
                    var svg = d3
                        .select("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr(
                            "transform",
                            "translate(" + margin.left + "," + margin.top + ")"
                        );
                    var sankey = d3
                        .sankey()
                        .nodeWidth(15)
                        .nodePadding(10)
                        .size([width, height]);
                    var path = sankey.link();
                    var freqCounter = 1;
                    d3.json(
                        "https://raw.githubusercontent.com/mercerb/remit-return/sankey/remitreturn/src/data/sankey.json",
                        function (energy) {
                            sankey
                                .nodes(energy.nodes)
                                .links(energy.links)
                                .layout(32);
                            var link = svg
                                .append("g")
                                .selectAll(".link")
                                .data(energy.links)
                                .attr("fill", "yellow")
                                .enter()
                                .append("path")
                                .attr("class", "link")
                                .attr("opacity", 0.1)
                                .attr("d", path)

                                .style("stroke-width", function (d) {
                                    return Math.max(1, d.dy);
                                })
                                .sort(function (a, b) {
                                    return b.dy - a.dy;
                                });

                            link.append("title").text(function (d) {
                                return (
                                    d.source.name +
                                    " → " +
                                    d.target.name +
                                    "\\n" +
                                    format(d.value)
                                );
                            });
                            var node = svg
                                .append("g")
                                .selectAll(".node")
                                .data(energy.nodes)
                                .enter()
                                .append("g")
                                .attr("class", "node")
                                .attr("transform", function (d) {
                                    return "translate(" + d.x + "," + d.y + ")";
                                })
                                .call(
                                    d3.behavior
                                        .drag()
                                        .origin(function (d) {
                                            return d;
                                        })
                                        .on("dragstart", function () {
                                            this.parentNode.appendChild(this);
                                        })
                                        .on("drag", dragmove)
                                );
                            node.append("rect")
                                .attr("height", function (d) {
                                    return d.dy;
                                })
                                .attr("width", sankey.nodeWidth())
                                .style("fill", function (d) {
                                    return (d.color = color(
                                        d.name.replace(/ .*/, "")
                                    ));
                                })
                                .style("stroke", "none")
                                .append("title")
                                .text(function (d) {
                                    return d.name + "\\n" + format(d.value);
                                });
                            node.on("mouseover", function (d) {
                                link.transition()
                                    .duration(300)
                                    .style("stroke-opacity", function (l) {
                                        return l.source === d || l.target === d
                                            ? 1
                                            : 0.2;
                                    });
                            }).on("mouseleave", function (d) {
                                link.transition()
                                    .duration(300)
                                    .style("stroke-opacity", 0.2);
                            });
                            node.append("text")
                                .attr("x", -6)
                                .attr("y", function (d) {
                                    return d.dy / 2;
                                })
                                .attr("dy", ".35em")
                                .attr("text-anchor", "end")
                                .attr("transform", null)
                                .text(function (d) {
                                    return d.name;
                                })
                                .filter(function (d) {
                                    return d.x < width / 2;
                                })
                                .attr("x", 6 + sankey.nodeWidth())
                                .attr("text-anchor", "start");
                            function dragmove(d) {
                                d3.select(this).attr(
                                    "transform",
                                    "translate(" +
                                        d.x +
                                        "," +
                                        (d.y = Math.max(
                                            0,
                                            Math.min(height - d.dy, d3.event.y)
                                        )) +
                                        ")"
                                );
                                sankey.relayout();
                                link.attr("d", path);
                            }

                            var linkExtent = d3.extent(
                                energy.links,
                                function (d) {
                                    return d.value;
                                }
                            );
                            var frequencyScale = d3.scale
                                .linear()
                                .domain(linkExtent)
                                .range([0.05, 1]);
                            var particleSize = d3.scale
                                .linear()
                                .domain(linkExtent)
                                .range([1, 5]);
                            energy.links.forEach(function (link) {
                                link.freq = frequencyScale(link.value);
                                link.particleSize = 1;
                                link.color = d3.scale
                                    .linear()
                                    .domain([0, 1])
                                    .range([
                                        link.source.color,
                                        link.target.color,
                                    ]);
                                link.particleColor = d3.scale
                                    .linear()
                                    .domain([0, 1])
                                    .range([
                                        link.source.color,
                                        link.target.color,
                                    ]);
                            });
                            var t = d3.timer(tick, 50);
                            var particles = [];
                            function tick(elapsed, time) {
                                particles = particles.filter(function (d) {
                                    return d.current < d.path.getTotalLength();
                                });
                                d3.selectAll("path.link").each(function (d) {
                                    for (var x = 0; x < 2; x++) {
                                        var offset =
                                            (Math.random() - 0.5) * (d.dy - 4);
                                        if (Math.random() < d.freq) {
                                            var length = this.getTotalLength();
                                            particles.push({
                                                link: d,
                                                time: elapsed,
                                                offset: offset,
                                                path: this,
                                                length: length,
                                                animateTime: length,
                                                speed: 0.5 + Math.random(),
                                            });
                                        }
                                    }
                                });
                                particleEdgeCanvasPath(elapsed);
                            }
                            function particleEdgeCanvasPath(elapsed) {
                                var context = d3
                                    .select("canvas")
                                    .node()
                                    .getContext("2d");
                                context.clearRect(0, 0, 1000, 1000);
                                context.fillStyle = "gray";
                                context.lineWidth = "1px";
                                for (var x in particles) {
                                    var currentTime =
                                        elapsed - particles[x].time;
                                    particles[x].current =
                                        currentTime * 0.15 * particles[x].speed;
                                    var currentPos = particles[
                                        x
                                    ].path.getPointAtLength(
                                        particles[x].current
                                    );
                                    context.beginPath();
                                    context.fillStyle =
                                        particles[x].link.particleColor(0);
                                    context.arc(
                                        currentPos.x,
                                        currentPos.y + particles[x].offset,
                                        particles[x].link.particleSize,
                                        0,
                                        2 * Math.PI
                                    );
                                    context.fill();
                                }
                            }
                        }
                    );
                    function highlight_node_links(node, i) {
                        var remainingNodes = [],
                            nextNodes = [];
                        var stroke_opacity = 0;
                        if (d3.select(this).attr("data-clicked") == "1") {
                            d3.select(this).attr("data-clicked", "0");
                            stroke_opacity = 0.2;
                        } else {
                            d3.select(this).attr("data-clicked", "1");
                            stroke_opacity = 0.5;
                        }
                        var traverse = [
                            {
                                linkType: "sourceLinks",
                                nodeType: "target",
                            },
                            {
                                linkType: "targetLinks",
                                nodeType: "source",
                            },
                        ];
                        traverse.forEach(function (step) {
                            node[step.linkType].forEach(function (link) {
                                remainingNodes.push(link[step.nodeType]);
                                highlight_link(link.id, stroke_opacity);
                            });
                            while (remainingNodes.length) {
                                nextNodes = [];
                                remainingNodes.forEach(function (node) {
                                    node[step.linkType].forEach(function (
                                        link
                                    ) {
                                        nextNodes.push(link[step.nodeType]);
                                        highlight_link(link.id, stroke_opacity);
                                    });
                                });
                                remainingNodes = nextNodes;
                            }
                        });
                    }
                    function highlight_link(id, opacity) {
                        d3.select("#link-" + id).style(
                            "stroke-opacity",
                            opacity
                        );
                    }`),this.h()},l(B){e=L(B,"MAIN",{});var nt=T(e);n=L(nt,"HTML",{lang:!0});var J=T(n);o=L(J,"HEAD",{});var Q=T(o);r=L(Q,"META",{charset:!0}),s=j(Q),i=L(Q,"STYLE",{});var N=T(i);a=K(N,`.node rect {
                    cursor: move;
                    fill-opacity: 0.9;
                    shape-rendering: crispEdges;
                }
                .node text {
                    pointer-events: none;
                    text-shadow: 0 1px 0 #fff;
                }
                .link {
                    fill: none;
                    stroke: burlywood;
                    stroke-opacity: 0.2;
                }
                .link:hover {
                    fill: red;
                    stroke: red;
                    stroke-opacity: 1000;
                }
                svg {
                    /* position: absolute; */
                    text-anchor: middle;
                }
                canvas {
                    position: absolute;
                }`),N.forEach(x),Q.forEach(x),l=j(J),c=L(J,"BODY",{});var R=T(c);h=L(R,"DIV",{class:!0});var ot=T(h);m=L(ot,"P",{style:!0});var ut=T(m);f=K(ut,"Original Occupation"),ut.forEach(x),_=j(ot),u=L(ot,"P",{style:!0});var vt=T(u);v=K(vt,"US Occupation"),vt.forEach(x),ot.forEach(x),S=j(R),k=L(R,"P",{id:!0});var W=T(k);b=L(W,"CANVAS",{width:!0,height:!0}),T(b).forEach(x),g=j(W),M=U(W,"svg",{width:!0,height:!0}),T(M).forEach(x),y=j(W),C=L(W,"SCRIPT",{src:!0,charset:!0,type:!0});var rt=T(C);rt.forEach(x),V=j(W),H=L(W,"SCRIPT",{src:!0});var Ut=T(H);Ut.forEach(x),w=j(W),P=L(W,"SCRIPT",{type:!0});var wt=T(P);A=K(wt,`var margin = { top: 10, right: 10, bottom: 10, left: 10 },
                        width = 600 - margin.left - margin.right,
                        height = 500 - margin.top - margin.bottom;
                    var formatNumber = d3.format(",.0f"),
                        format = function (d) {
                            return formatNumber(d);
                        },
                        color = d3.scale.category20();
                    var svg = d3
                        .select("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr(
                            "transform",
                            "translate(" + margin.left + "," + margin.top + ")"
                        );
                    var sankey = d3
                        .sankey()
                        .nodeWidth(15)
                        .nodePadding(10)
                        .size([width, height]);
                    var path = sankey.link();
                    var freqCounter = 1;
                    d3.json(
                        "https://raw.githubusercontent.com/mercerb/remit-return/sankey/remitreturn/src/data/sankey.json",
                        function (energy) {
                            sankey
                                .nodes(energy.nodes)
                                .links(energy.links)
                                .layout(32);
                            var link = svg
                                .append("g")
                                .selectAll(".link")
                                .data(energy.links)
                                .attr("fill", "yellow")
                                .enter()
                                .append("path")
                                .attr("class", "link")
                                .attr("opacity", 0.1)
                                .attr("d", path)

                                .style("stroke-width", function (d) {
                                    return Math.max(1, d.dy);
                                })
                                .sort(function (a, b) {
                                    return b.dy - a.dy;
                                });

                            link.append("title").text(function (d) {
                                return (
                                    d.source.name +
                                    " → " +
                                    d.target.name +
                                    "\\n" +
                                    format(d.value)
                                );
                            });
                            var node = svg
                                .append("g")
                                .selectAll(".node")
                                .data(energy.nodes)
                                .enter()
                                .append("g")
                                .attr("class", "node")
                                .attr("transform", function (d) {
                                    return "translate(" + d.x + "," + d.y + ")";
                                })
                                .call(
                                    d3.behavior
                                        .drag()
                                        .origin(function (d) {
                                            return d;
                                        })
                                        .on("dragstart", function () {
                                            this.parentNode.appendChild(this);
                                        })
                                        .on("drag", dragmove)
                                );
                            node.append("rect")
                                .attr("height", function (d) {
                                    return d.dy;
                                })
                                .attr("width", sankey.nodeWidth())
                                .style("fill", function (d) {
                                    return (d.color = color(
                                        d.name.replace(/ .*/, "")
                                    ));
                                })
                                .style("stroke", "none")
                                .append("title")
                                .text(function (d) {
                                    return d.name + "\\n" + format(d.value);
                                });
                            node.on("mouseover", function (d) {
                                link.transition()
                                    .duration(300)
                                    .style("stroke-opacity", function (l) {
                                        return l.source === d || l.target === d
                                            ? 1
                                            : 0.2;
                                    });
                            }).on("mouseleave", function (d) {
                                link.transition()
                                    .duration(300)
                                    .style("stroke-opacity", 0.2);
                            });
                            node.append("text")
                                .attr("x", -6)
                                .attr("y", function (d) {
                                    return d.dy / 2;
                                })
                                .attr("dy", ".35em")
                                .attr("text-anchor", "end")
                                .attr("transform", null)
                                .text(function (d) {
                                    return d.name;
                                })
                                .filter(function (d) {
                                    return d.x < width / 2;
                                })
                                .attr("x", 6 + sankey.nodeWidth())
                                .attr("text-anchor", "start");
                            function dragmove(d) {
                                d3.select(this).attr(
                                    "transform",
                                    "translate(" +
                                        d.x +
                                        "," +
                                        (d.y = Math.max(
                                            0,
                                            Math.min(height - d.dy, d3.event.y)
                                        )) +
                                        ")"
                                );
                                sankey.relayout();
                                link.attr("d", path);
                            }

                            var linkExtent = d3.extent(
                                energy.links,
                                function (d) {
                                    return d.value;
                                }
                            );
                            var frequencyScale = d3.scale
                                .linear()
                                .domain(linkExtent)
                                .range([0.05, 1]);
                            var particleSize = d3.scale
                                .linear()
                                .domain(linkExtent)
                                .range([1, 5]);
                            energy.links.forEach(function (link) {
                                link.freq = frequencyScale(link.value);
                                link.particleSize = 1;
                                link.color = d3.scale
                                    .linear()
                                    .domain([0, 1])
                                    .range([
                                        link.source.color,
                                        link.target.color,
                                    ]);
                                link.particleColor = d3.scale
                                    .linear()
                                    .domain([0, 1])
                                    .range([
                                        link.source.color,
                                        link.target.color,
                                    ]);
                            });
                            var t = d3.timer(tick, 50);
                            var particles = [];
                            function tick(elapsed, time) {
                                particles = particles.filter(function (d) {
                                    return d.current < d.path.getTotalLength();
                                });
                                d3.selectAll("path.link").each(function (d) {
                                    for (var x = 0; x < 2; x++) {
                                        var offset =
                                            (Math.random() - 0.5) * (d.dy - 4);
                                        if (Math.random() < d.freq) {
                                            var length = this.getTotalLength();
                                            particles.push({
                                                link: d,
                                                time: elapsed,
                                                offset: offset,
                                                path: this,
                                                length: length,
                                                animateTime: length,
                                                speed: 0.5 + Math.random(),
                                            });
                                        }
                                    }
                                });
                                particleEdgeCanvasPath(elapsed);
                            }
                            function particleEdgeCanvasPath(elapsed) {
                                var context = d3
                                    .select("canvas")
                                    .node()
                                    .getContext("2d");
                                context.clearRect(0, 0, 1000, 1000);
                                context.fillStyle = "gray";
                                context.lineWidth = "1px";
                                for (var x in particles) {
                                    var currentTime =
                                        elapsed - particles[x].time;
                                    particles[x].current =
                                        currentTime * 0.15 * particles[x].speed;
                                    var currentPos = particles[
                                        x
                                    ].path.getPointAtLength(
                                        particles[x].current
                                    );
                                    context.beginPath();
                                    context.fillStyle =
                                        particles[x].link.particleColor(0);
                                    context.arc(
                                        currentPos.x,
                                        currentPos.y + particles[x].offset,
                                        particles[x].link.particleSize,
                                        0,
                                        2 * Math.PI
                                    );
                                    context.fill();
                                }
                            }
                        }
                    );
                    function highlight_node_links(node, i) {
                        var remainingNodes = [],
                            nextNodes = [];
                        var stroke_opacity = 0;
                        if (d3.select(this).attr("data-clicked") == "1") {
                            d3.select(this).attr("data-clicked", "0");
                            stroke_opacity = 0.2;
                        } else {
                            d3.select(this).attr("data-clicked", "1");
                            stroke_opacity = 0.5;
                        }
                        var traverse = [
                            {
                                linkType: "sourceLinks",
                                nodeType: "target",
                            },
                            {
                                linkType: "targetLinks",
                                nodeType: "source",
                            },
                        ];
                        traverse.forEach(function (step) {
                            node[step.linkType].forEach(function (link) {
                                remainingNodes.push(link[step.nodeType]);
                                highlight_link(link.id, stroke_opacity);
                            });
                            while (remainingNodes.length) {
                                nextNodes = [];
                                remainingNodes.forEach(function (node) {
                                    node[step.linkType].forEach(function (
                                        link
                                    ) {
                                        nextNodes.push(link[step.nodeType]);
                                        highlight_link(link.id, stroke_opacity);
                                    });
                                });
                                remainingNodes = nextNodes;
                            }
                        });
                    }
                    function highlight_link(id, opacity) {
                        d3.select("#link-" + id).style(
                            "stroke-opacity",
                            opacity
                        );
                    }`),wt.forEach(x),W.forEach(x),R.forEach(x),J.forEach(x),nt.forEach(x),this.h()},h(){d(r,"charset","utf-8"),me(m,"float","left"),me(u,"float","right"),d(h,"class","sidebar"),d(b,"width","500"),d(b,"height","1100"),d(M,"width","500"),d(M,"height","1000"),ue(C.src,E="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js")||d(C,"src",E),d(C,"charset","utf-8"),d(C,"type","text/javascript"),ue(H.src,D="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/sankey.js")||d(H,"src",D),d(P,"type","text/javascript"),d(k,"id","sankey"),d(n,"lang","en")},m(B,nt){z(B,e,nt),p(e,n),p(n,o),p(o,r),p(o,s),p(o,i),p(i,a),p(n,l),p(n,c),p(c,h),p(h,m),p(m,f),p(h,_),p(h,u),p(u,v),p(c,S),p(c,k),p(k,b),p(k,g),p(k,M),p(k,y),p(k,C),p(k,V),p(k,H),p(k,w),p(k,P),p(P,A)},p:$,i:$,o:$,d(B){B&&x(e)}}}function mo(t,e,n){let{name:o="World"}=e,{index:r}=e;return t.$$set=s=>{"name"in s&&n(0,o=s.name),"index"in s&&n(1,r=s.index)},[o,r]}class uo extends lt{constructor(e){super(),ct(this,e,mo,co,mt,{name:0,index:1})}}const{window:Qe}=tn,fo=t=>({}),ze=t=>({}),ho=t=>({}),qe=t=>({});function _o(t){let e,n,o,r,s,i,a,l,c;ne(t[21]);const h=t[20].background,m=fe(h,t,t[19],qe),f=t[20].foreground,_=fe(f,t,t[19],ze);return{c(){e=G("svelte-scroller-outer"),n=G("svelte-scroller-background-container"),o=G("svelte-scroller-background"),m&&m.c(),s=I(),i=G("svelte-scroller-foreground"),_&&_.c(),this.h()},l(u){e=L(u,"SVELTE-SCROLLER-OUTER",{class:!0});var v=T(e);n=L(v,"SVELTE-SCROLLER-BACKGROUND-CONTAINER",{class:!0,style:!0});var S=T(n);o=L(S,"SVELTE-SCROLLER-BACKGROUND",{class:!0});var k=T(o);m&&m.l(k),k.forEach(x),S.forEach(x),s=j(v),i=L(v,"SVELTE-SCROLLER-FOREGROUND",{class:!0});var b=T(i);_&&_.l(b),b.forEach(x),v.forEach(x),this.h()},h(){ft(o,"class","svelte-xdbafy"),ft(n,"class","background-container svelte-xdbafy"),ft(n,"style",r=""+(t[5]+t[4])),ft(i,"class","svelte-xdbafy"),ft(e,"class","svelte-xdbafy")},m(u,v){z(u,e,v),p(e,n),p(n,o),m&&m.m(o,null),t[22](o),p(e,s),p(e,i),_&&_.m(i,null),t[23](i),t[24](e),a=!0,l||(c=Ze(Qe,"resize",t[21]),l=!0)},p(u,v){m&&m.p&&(!a||v[0]&524288)&&he(m,h,u,u[19],a?_e(h,u[19],v,ho):de(u[19]),qe),(!a||v[0]&48&&r!==(r=""+(u[5]+u[4])))&&ft(n,"style",r),_&&_.p&&(!a||v[0]&524288)&&he(_,f,u,u[19],a?_e(f,u[19],v,fo):de(u[19]),ze)},i(u){a||(O(m,u),O(_,u),a=!0)},o(u){F(m,u),F(_,u),a=!1},d(u){u&&x(e),m&&m.d(u),t[22](null),_&&_.d(u),t[23](null),t[24](null),l=!1,c()}}}const tt=[];let qt;if(typeof window<"u"){const t=()=>tt.forEach(e=>e());window.addEventListener("scroll",t),window.addEventListener("resize",t)}if(typeof IntersectionObserver<"u"){const t=new Map,e=new IntersectionObserver((n,o)=>{n.forEach(r=>{const s=t.get(r.target),i=tt.indexOf(s);r.isIntersecting?i===-1&&tt.push(s):(s(),i!==-1&&tt.splice(i,1))})},{rootMargin:"400px 0px"});qt={add:({outer:n,update:o})=>{const{top:r,bottom:s}=n.getBoundingClientRect();r<window.innerHeight&&s>0&&tt.push(o),t.set(n,o),e.observe(n)},remove:({outer:n,update:o})=>{const r=tt.indexOf(o);r!==-1&&tt.splice(r,1),t.delete(n),e.unobserve(n)}}}else qt={add:({update:t})=>{tt.push(t)},remove:({update:t})=>{const e=tt.indexOf(t);e!==-1&&tt.splice(e,1)}};function go(t,e,n){let o,r,s,i,a,{$$slots:l={},$$scope:c}=e,{top:h=0}=e,{bottom:m=1}=e,{threshold:f=.5}=e,{query:_="section"}=e,{parallax:u=!1}=e,{index:v=0}=e,{count:S=0}=e,{offset:k=0}=e,{progress:b=0}=e,{visible:g=!1}=e,M,y,C,E,V,H=0,D,w=0,P=1;$e(()=>{V=y.querySelectorAll(_),n(7,S=V.length),A();const N={outer:M,update:A};return qt.add(N),()=>qt.remove(N)});function A(){if(!y)return;const N=M.getBoundingClientRect();E=N.left,n(18,P=N.right-E);const R=y.getBoundingClientRect(),ot=C.getBoundingClientRect();n(10,g=R.top<H&&R.bottom>0);const ut=R.bottom-R.top,vt=ot.bottom-ot.top,W=r-o;n(9,b=(o-R.top)/(ut-W)),b<=0?(n(17,w=0),n(16,D=!1)):b>=1?(n(17,w=u?ut-vt:ut-W),n(16,D=!1)):(n(17,w=u?Math.round(o-b*(vt-W)):o),n(16,D=!0));for(let rt=0;rt<V.length;rt++){const Ut=V[rt],{top:wt}=Ut.getBoundingClientRect(),ae=V[rt+1],le=ae?ae.getBoundingClientRect().top:R.bottom;if(n(8,k=(s-wt)/(le-wt)),le>=s){n(6,v=rt);break}}}function B(){n(0,H=Qe.innerHeight)}function nt(N){it[N?"unshift":"push"](()=>{C=N,n(3,C)})}function J(N){it[N?"unshift":"push"](()=>{y=N,n(2,y)})}function Q(N){it[N?"unshift":"push"](()=>{M=N,n(1,M)})}return t.$$set=N=>{"top"in N&&n(11,h=N.top),"bottom"in N&&n(12,m=N.bottom),"threshold"in N&&n(13,f=N.threshold),"query"in N&&n(14,_=N.query),"parallax"in N&&n(15,u=N.parallax),"index"in N&&n(6,v=N.index),"count"in N&&n(7,S=N.count),"offset"in N&&n(8,k=N.offset),"progress"in N&&n(9,b=N.progress),"visible"in N&&n(10,g=N.visible),"$$scope"in N&&n(19,c=N.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2049&&(o=Math.round(h*H)),t.$$.dirty[0]&4097&&(r=Math.round(m*H)),t.$$.dirty[0]&8193&&(s=Math.round(f*H)),t.$$.dirty[0]&47104&&A(),t.$$.dirty[0]&196608&&n(5,i=`
		position: ${D?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${w}px);
		z-index: ${1};
	`),t.$$.dirty[0]&327680&&n(4,a=D?`width:${P}px;`:"")},[H,M,y,C,a,i,v,S,k,b,g,h,m,f,_,u,D,w,P,c,l,B,nt,J,Q]}class yo extends lt{constructor(e){super(),ct(this,e,go,_o,mt,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}function po(t){let e,n,o,r,s,i,a,l,c,h,m,f;return{c(){e=G("h2"),n=X("RemitReturn"),o=I(),r=G("div"),s=G("p"),i=X(`Economic insecurity is the leading cause of migration. Despite the costs
        - both financial and emotional - associated with migrating from the
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United
        States, indviduals take on this burden year after year in search of
        better salaries, working conditions, and opportunities to send money
        home. Migrants who end up working in the destination country long enough
        not only offset the cost of their migration and send remittances home,
        but also spend money in the United States (for food, housing, etc),
        invigorating the economy.`),a=I(),l=G("p"),c=X(`The data displayed here is a subset of the class data. This subset
        includes 454 individuals who reported a cost of migration and whose
        destination was the United States. Of these, 349 currently reside in the
        USA and send remittances back to their families (as of the time of the
        survey, April 2021). 105 paid the cost of migration but either did not
        make it to the USA or were sent back.`),h=I(),m=G("p"),f=X(`Is the cost worth it? At what point do working migrants offset that
        cost? How much are they contributing to the US economy depending on what
        jobs are available? To better understand the tradeoff between the cost
        of migration, remittances, and money entering the USA, we have
        identified 10 migrants who represent a statistically similar sample of
        this larger group.`),this.h()},l(_){e=L(_,"H2",{});var u=T(e);n=K(u,"RemitReturn"),u.forEach(x),o=j(_),r=L(_,"DIV",{class:!0});var v=T(r);s=L(v,"P",{});var S=T(s);i=K(S,`Economic insecurity is the leading cause of migration. Despite the costs
        - both financial and emotional - associated with migrating from the
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United
        States, indviduals take on this burden year after year in search of
        better salaries, working conditions, and opportunities to send money
        home. Migrants who end up working in the destination country long enough
        not only offset the cost of their migration and send remittances home,
        but also spend money in the United States (for food, housing, etc),
        invigorating the economy.`),S.forEach(x),a=j(v),l=L(v,"P",{});var k=T(l);c=K(k,`The data displayed here is a subset of the class data. This subset
        includes 454 individuals who reported a cost of migration and whose
        destination was the United States. Of these, 349 currently reside in the
        USA and send remittances back to their families (as of the time of the
        survey, April 2021). 105 paid the cost of migration but either did not
        make it to the USA or were sent back.`),k.forEach(x),h=j(v),m=L(v,"P",{});var b=T(m);f=K(b,`Is the cost worth it? At what point do working migrants offset that
        cost? How much are they contributing to the US economy depending on what
        jobs are available? To better understand the tradeoff between the cost
        of migration, remittances, and money entering the USA, we have
        identified 10 migrants who represent a statistically similar sample of
        this larger group.`),b.forEach(x),v.forEach(x),this.h()},h(){d(r,"class","IntroText svelte-1khzzid")},m(_,u){z(_,e,u),p(e,n),z(_,o,u),z(_,r,u),p(r,s),p(s,i),p(r,a),p(r,l),p(l,c),p(r,h),p(r,m),p(m,f)},p:$,i:$,o:$,d(_){_&&x(e),_&&x(o),_&&x(r)}}}class xo extends lt{constructor(e){super(),ct(this,e,null,po,mt,{})}}function bo(t){let e,n,o,r,s,i;return{c(){e=G("div"),n=G("p"),o=X(`As seen in the above graph, the time it takes to pay off the cost of the
        migration depends on the job secured by the migrant in the destination
        country and the amount of money they send back as remittances every
        month. It can take as little as 1 month to work off the cost of the
        migration and begin contributing to the economy, but for more expensive
        migrations, the payback period can be as long as a year.`),r=I(),s=G("p"),i=X(`The orange bars represent two migrants who paid thousands of US dollars
        to migrate but were sent back to their country of origin. They never had
        a chance to pay off the amount they invested in the migration. They
        never had the opportunity to work in the US, contribute to its economy,
        and send money back home.`),this.h()},l(a){e=L(a,"DIV",{class:!0});var l=T(e);n=L(l,"P",{});var c=T(n);o=K(c,`As seen in the above graph, the time it takes to pay off the cost of the
        migration depends on the job secured by the migrant in the destination
        country and the amount of money they send back as remittances every
        month. It can take as little as 1 month to work off the cost of the
        migration and begin contributing to the economy, but for more expensive
        migrations, the payback period can be as long as a year.`),c.forEach(x),r=j(l),s=L(l,"P",{});var h=T(s);i=K(h,`The orange bars represent two migrants who paid thousands of US dollars
        to migrate but were sent back to their country of origin. They never had
        a chance to pay off the amount they invested in the migration. They
        never had the opportunity to work in the US, contribute to its economy,
        and send money back home.`),h.forEach(x),l.forEach(x),this.h()},h(){d(e,"class","MiddleText svelte-x6um5r")},m(a,l){z(a,e,l),p(e,n),p(n,o),p(e,r),p(e,s),p(s,i)},p:$,i:$,o:$,d(a){a&&x(e)}}}class ko extends lt{constructor(e){super(),ct(this,e,null,bo,mt,{})}}function vo(t){let e,n,o;return{c(){e=G("div"),n=G("div"),this.h()},l(r){e=L(r,"DIV",{class:!0,slot:!0});var s=T(e);n=L(s,"DIV",{class:!0});var i=T(n);i.forEach(x),s.forEach(x),this.h()},h(){d(n,"class","progress-bars svelte-f2vy7l"),d(e,"class","background svelte-f2vy7l"),d(e,"slot","background"),ne(()=>t[7].call(e))},m(r,s){z(r,e,s),p(e,n),o=en(e,t[7].bind(e))},p:$,d(r){r&&x(e),o()}}}function wo(t){let e,n,o,r,s,i,a,l,c,h,m,f,_,u,v,S;return o=new xo({}),i=new uo({props:{index:t[2]}}),h=new lo({props:{index:t[2],width:t[5],height:t[6],themeColors:t[0]}}),_=new ko({}),{c(){e=G("div"),n=G("section"),dt(o.$$.fragment),r=I(),s=G("section"),dt(i.$$.fragment),a=I(),l=G("section"),c=X(`Cost of migration projected over time (months).
      `),dt(h.$$.fragment),m=I(),f=G("section"),dt(_.$$.fragment),u=I(),v=G("section"),this.h()},l(k){e=L(k,"DIV",{class:!0,slot:!0});var b=T(e);n=L(b,"SECTION",{class:!0});var g=T(n);_t(o.$$.fragment,g),g.forEach(x),r=j(b),s=L(b,"SECTION",{class:!0});var M=T(s);_t(i.$$.fragment,M),M.forEach(x),a=j(b),l=L(b,"SECTION",{class:!0});var y=T(l);c=K(y,`Cost of migration projected over time (months).
      `),_t(h.$$.fragment,y),y.forEach(x),m=j(b),f=L(b,"SECTION",{class:!0});var C=T(f);_t(_.$$.fragment,C),C.forEach(x),u=j(b),v=L(b,"SECTION",{class:!0});var E=T(v);E.forEach(x),b.forEach(x),this.h()},h(){d(n,"class","svelte-f2vy7l"),d(s,"class","svelte-f2vy7l"),d(l,"class","svelte-f2vy7l"),d(f,"class","svelte-f2vy7l"),d(v,"class","svelte-f2vy7l"),d(e,"class","foreground svelte-f2vy7l"),d(e,"slot","foreground")},m(k,b){z(k,e,b),p(e,n),gt(o,n,null),p(e,r),p(e,s),gt(i,s,null),p(e,a),p(e,l),p(l,c),gt(h,l,null),p(e,m),p(e,f),gt(_,f,null),p(e,u),p(e,v),S=!0},p(k,b){const g={};b&4&&(g.index=k[2]),i.$set(g);const M={};b&4&&(M.index=k[2]),b&32&&(M.width=k[5]),b&64&&(M.height=k[6]),h.$set(M)},i(k){S||(O(o.$$.fragment,k),O(i.$$.fragment,k),O(h.$$.fragment,k),O(_.$$.fragment,k),S=!0)},o(k){F(o.$$.fragment,k),F(i.$$.fragment,k),F(h.$$.fragment,k),F(_.$$.fragment,k),S=!1},d(k){k&&x(e),yt(o),yt(i),yt(h),yt(_)}}}function To(t){let e,n,o,r,s,i;function a(f){t[8](f)}function l(f){t[9](f)}function c(f){t[10](f)}function h(f){t[11](f)}let m={top:0,bottom:1,threshold:.5,$$slots:{foreground:[wo],background:[vo]},$$scope:{ctx:t}};return t[1]!==void 0&&(m.count=t[1]),t[2]!==void 0&&(m.index=t[2]),t[3]!==void 0&&(m.offset=t[3]),t[4]!==void 0&&(m.progress=t[4]),e=new yo({props:m}),it.push(()=>Gt(e,"count",a)),it.push(()=>Gt(e,"index",l)),it.push(()=>Gt(e,"offset",c)),it.push(()=>Gt(e,"progress",h)),{c(){dt(e.$$.fragment)},l(f){_t(e.$$.fragment,f)},m(f,_){gt(e,f,_),i=!0},p(f,[_]){const u={};_&4196&&(u.$$scope={dirty:_,ctx:f}),!n&&_&2&&(n=!0,u.count=f[1],Lt(()=>n=!1)),!o&&_&4&&(o=!0,u.index=f[2],Lt(()=>o=!1)),!r&&_&8&&(r=!0,u.offset=f[3],Lt(()=>r=!1)),!s&&_&16&&(s=!0,u.progress=f[4],Lt(()=>s=!1)),e.$set(u)},i(f){i||(O(e.$$.fragment,f),i=!0)},o(f){F(e.$$.fragment,f),i=!1},d(f){yt(e,f)}}}function So(t,e,n){let o,r,s,i,a,l;const c={blue:"#112b64",beige:"#e8e4d5",orange:"#e39d12",pink:"#be318f"};function h(){a=this.clientWidth,l=this.clientHeight,n(5,a),n(6,l)}function m(v){o=v,n(1,o)}function f(v){r=v,n(2,r)}function _(v){s=v,n(3,s)}function u(v){i=v,n(4,i)}return[c,o,r,s,i,a,l,h,m,f,_,u]}class No extends lt{constructor(e){super(),ct(this,e,So,To,mt,{themeColors:0})}get themeColors(){return this.$$.ctx[0]}}function Mo(t){let e,n;return e=new No({}),{c(){dt(e.$$.fragment)},l(o){_t(e.$$.fragment,o)},m(o,r){gt(e,o,r),n=!0},p:$,i(o){n||(O(e.$$.fragment,o),n=!0)},o(o){F(e.$$.fragment,o),n=!1},d(o){yt(e,o)}}}class Go extends lt{constructor(e){super(),ct(this,e,null,Mo,mt,{})}}export{Go as default};
