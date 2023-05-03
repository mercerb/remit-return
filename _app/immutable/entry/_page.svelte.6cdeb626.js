import{S as lt,i as ct,s as ft,k as C,J as V,a as q,l as R,m as M,K as W,h as x,c as H,p as d,b as D,H as p,g as U,w as te,d as G,f as ee,L as Gt,e as jt,M as ne,N as ce,r as X,u as K,v as We,q as fe,O as me,n as $,D as ue,P as ut,Q as Ze,E as he,F as de,G as ge,o as $e,R as tn,x as it,T as Ct,z as dt,A as gt,B as _t,U as Rt,C as yt,V as en}from"../chunks/index.5906a75e.js";function Lt(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function nn(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Be(t){let e,n,r;t.length!==2?(e=Lt,n=(a,l)=>Lt(t(a),l),r=(a,l)=>t(a)-l):(e=t===Lt||t===nn?t:rn,n=t,r=t);function o(a,l,c=0,h=a.length){if(c<h){if(e(l,l)!==0)return h;do{const f=c+h>>>1;n(a[f],l)<0?c=f+1:h=f}while(c<h)}return c}function s(a,l,c=0,h=a.length){if(c<h){if(e(l,l)!==0)return h;do{const f=c+h>>>1;n(a[f],l)<=0?c=f+1:h=f}while(c<h)}return c}function i(a,l,c=0,h=a.length){const f=o(a,l,c,h-1);return f>c&&r(a[f-1],l)>-r(a[f],l)?f-1:f}return{left:o,center:i,right:s}}function rn(){return 0}function on(t){return t===null?NaN:+t}const sn=Be(Lt),an=sn.right;Be(on).center;const ln=an,cn=Math.sqrt(50),fn=Math.sqrt(10),mn=Math.sqrt(2);function Ot(t,e,n){const r=(e-t)/Math.max(0,n),o=Math.floor(Math.log10(r)),s=r/Math.pow(10,o),i=s>=cn?10:s>=fn?5:s>=mn?2:1;let a,l,c;return o<0?(c=Math.pow(10,-o)/i,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,o)*i,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?Ot(t,e,n*2):[a,l,c]}function un(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const r=e<t,[o,s,i]=r?Ot(e,t,n):Ot(t,e,n);if(!(s>=o))return[];const a=s-o+1,l=new Array(a);if(r)if(i<0)for(let c=0;c<a;++c)l[c]=(s-c)/-i;else for(let c=0;c<a;++c)l[c]=(s-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(o+c)/-i;else for(let c=0;c<a;++c)l[c]=(o+c)*i;return l}function Yt(t,e,n){return e=+e,t=+t,n=+n,Ot(t,e,n)[2]}function hn(t,e,n){e=+e,t=+t,n=+n;const r=e<t,o=r?Yt(e,t,n):Yt(t,e,n);return(r?-1:1)*(o<0?1/-o:o)}function re(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Fe(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Tt(){}var Et=.7,zt=1/Et,bt="\\s*([+-]?\\d+)\\s*",Nt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",et="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dn=/^#([0-9a-f]{3,8})$/,gn=new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`),_n=new RegExp(`^rgb\\(${et},${et},${et}\\)$`),yn=new RegExp(`^rgba\\(${bt},${bt},${bt},${Nt}\\)$`),pn=new RegExp(`^rgba\\(${et},${et},${et},${Nt}\\)$`),xn=new RegExp(`^hsl\\(${Nt},${et},${et}\\)$`),bn=new RegExp(`^hsla\\(${Nt},${et},${et},${Nt}\\)$`),_e={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};re(Tt,St,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ye,formatHex:ye,formatHex8:kn,formatHsl:vn,formatRgb:pe,toString:pe});function ye(){return this.rgb().formatHex()}function kn(){return this.rgb().formatHex8()}function vn(){return Ge(this).formatHsl()}function pe(){return this.rgb().formatRgb()}function St(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=dn.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?xe(e):n===3?new Y(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?At(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?At(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=gn.exec(t))?new Y(e[1],e[2],e[3],1):(e=_n.exec(t))?new Y(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=yn.exec(t))?At(e[1],e[2],e[3],e[4]):(e=pn.exec(t))?At(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=xn.exec(t))?ve(e[1],e[2]/100,e[3]/100,1):(e=bn.exec(t))?ve(e[1],e[2]/100,e[3]/100,e[4]):_e.hasOwnProperty(t)?xe(_e[t]):t==="transparent"?new Y(NaN,NaN,NaN,0):null}function xe(t){return new Y(t>>16&255,t>>8&255,t&255,1)}function At(t,e,n,r){return r<=0&&(t=e=n=NaN),new Y(t,e,n,r)}function wn(t){return t instanceof Tt||(t=St(t)),t?(t=t.rgb(),new Y(t.r,t.g,t.b,t.opacity)):new Y}function Xt(t,e,n,r){return arguments.length===1?wn(t):new Y(t,e,n,r??1)}function Y(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}re(Y,Xt,Fe(Tt,{brighter(t){return t=t==null?zt:Math.pow(zt,t),new Y(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Et:Math.pow(Et,t),new Y(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Y(at(this.r),at(this.g),at(this.b),qt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:be,formatHex:be,formatHex8:Mn,formatRgb:ke,toString:ke}));function be(){return`#${st(this.r)}${st(this.g)}${st(this.b)}`}function Mn(){return`#${st(this.r)}${st(this.g)}${st(this.b)}${st((isNaN(this.opacity)?1:this.opacity)*255)}`}function ke(){const t=qt(this.opacity);return`${t===1?"rgb(":"rgba("}${at(this.r)}, ${at(this.g)}, ${at(this.b)}${t===1?")":`, ${t})`}`}function qt(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function at(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function st(t){return t=at(t),(t<16?"0":"")+t.toString(16)}function ve(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Z(t,e,n,r)}function Ge(t){if(t instanceof Z)return new Z(t.h,t.s,t.l,t.opacity);if(t instanceof Tt||(t=St(t)),!t)return new Z;if(t instanceof Z)return t;t=t.rgb();var e=t.r/255,n=t.g/255,r=t.b/255,o=Math.min(e,n,r),s=Math.max(e,n,r),i=NaN,a=s-o,l=(s+o)/2;return a?(e===s?i=(n-r)/a+(n<r)*6:n===s?i=(r-e)/a+2:i=(e-n)/a+4,a/=l<.5?s+o:2-s-o,i*=60):a=l>0&&l<1?0:i,new Z(i,a,l,t.opacity)}function En(t,e,n,r){return arguments.length===1?Ge(t):new Z(t,e,n,r??1)}function Z(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}re(Z,En,Fe(Tt,{brighter(t){return t=t==null?zt:Math.pow(zt,t),new Z(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Et:Math.pow(Et,t),new Z(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,o=2*n-r;return new Y(Bt(t>=240?t-240:t+120,o,r),Bt(t,o,r),Bt(t<120?t+240:t-120,o,r),this.opacity)},clamp(){return new Z(we(this.h),Pt(this.s),Pt(this.l),qt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=qt(this.opacity);return`${t===1?"hsl(":"hsla("}${we(this.h)}, ${Pt(this.s)*100}%, ${Pt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function we(t){return t=(t||0)%360,t<0?t+360:t}function Pt(t){return Math.max(0,Math.min(1,t||0))}function Bt(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const oe=t=>()=>t;function Nn(t,e){return function(n){return t+n*e}}function Sn(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}function Tn(t){return(t=+t)==1?Ye:function(e,n){return n-e?Sn(e,n,t):oe(isNaN(e)?n:e)}}function Ye(t,e){var n=e-t;return n?Nn(t,n):oe(isNaN(t)?e:t)}const Me=function t(e){var n=Tn(e);function r(o,s){var i=n((o=Xt(o)).r,(s=Xt(s)).r),a=n(o.g,s.g),l=n(o.b,s.b),c=Ye(o.opacity,s.opacity);return function(h){return o.r=i(h),o.g=a(h),o.b=l(h),o.opacity=c(h),o+""}}return r.gamma=t,r}(1);function Cn(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,r=e.slice(),o;return function(s){for(o=0;o<n;++o)r[o]=t[o]*(1-s)+e[o]*s;return r}}function Rn(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function An(t,e){var n=e?e.length:0,r=t?Math.min(n,t.length):0,o=new Array(r),s=new Array(n),i;for(i=0;i<r;++i)o[i]=ie(t[i],e[i]);for(;i<n;++i)s[i]=e[i];return function(a){for(i=0;i<r;++i)s[i]=o[i](a);return s}}function Pn(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function Ht(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function In(t,e){var n={},r={},o;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in t?n[o]=ie(t[o],e[o]):r[o]=e[o];return function(s){for(o in n)r[o]=n[o](s);return r}}var Kt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ft=new RegExp(Kt.source,"g");function Ln(t){return function(){return t}}function jn(t){return function(e){return t(e)+""}}function On(t,e){var n=Kt.lastIndex=Ft.lastIndex=0,r,o,s,i=-1,a=[],l=[];for(t=t+"",e=e+"";(r=Kt.exec(t))&&(o=Ft.exec(e));)(s=o.index)>n&&(s=e.slice(n,s),a[i]?a[i]+=s:a[++i]=s),(r=r[0])===(o=o[0])?a[i]?a[i]+=o:a[++i]=o:(a[++i]=null,l.push({i,x:Ht(r,o)})),n=Ft.lastIndex;return n<e.length&&(s=e.slice(n),a[i]?a[i]+=s:a[++i]=s),a.length<2?l[0]?jn(l[0].x):Ln(e):(e=l.length,function(c){for(var h=0,f;h<e;++h)a[(f=l[h]).i]=f.x(c);return a.join("")})}function ie(t,e){var n=typeof e,r;return e==null||n==="boolean"?oe(e):(n==="number"?Ht:n==="string"?(r=St(e))?(e=r,Me):On:e instanceof St?Me:e instanceof Date?Pn:Rn(e)?Cn:Array.isArray(e)?An:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?In:Ht)(t,e)}function zn(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function qn(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ut(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function kt(t){return t=Ut(Math.abs(t)),t?t[1]:NaN}function Hn(t,e){return function(n,r){for(var o=n.length,s=[],i=0,a=t[0],l=0;o>0&&a>0&&(l+a+1>r&&(a=Math.max(1,r-l)),s.push(n.substring(o-=a,o+a)),!((l+=a+1)>r));)a=t[i=(i+1)%t.length];return s.reverse().join(e)}}function Un(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var Dn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Dt(t){if(!(e=Dn.exec(t)))throw new Error("invalid format: "+t);var e;return new se({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Dt.prototype=se.prototype;function se(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}se.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Vn(t){t:for(var e=t.length,n=1,r=-1,o;n<e;++n)switch(t[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+t[n])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(o+1):t}var Xe;function Wn(t,e){var n=Ut(t,e);if(!n)return t+"";var r=n[0],o=n[1],s=o-(Xe=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,i=r.length;return s===i?r:s>i?r+new Array(s-i+1).join("0"):s>0?r.slice(0,s)+"."+r.slice(s):"0."+new Array(1-s).join("0")+Ut(t,Math.max(0,e+s-1))[0]}function Ee(t,e){var n=Ut(t,e);if(!n)return t+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const Ne={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:qn,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Ee(t*100,e),r:Ee,s:Wn,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Se(t){return t}var Te=Array.prototype.map,Ce=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Bn(t){var e=t.grouping===void 0||t.thousands===void 0?Se:Hn(Te.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",o=t.decimal===void 0?".":t.decimal+"",s=t.numerals===void 0?Se:Un(Te.call(t.numerals,String)),i=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(f){f=Dt(f);var u=f.fill,g=f.align,m=f.sign,v=f.symbol,E=f.zero,k=f.width,b=f.comma,_=f.precision,S=f.trim,y=f.type;y==="n"?(b=!0,y="g"):Ne[y]||(_===void 0&&(_=12),S=!0,y="g"),(E||u==="0"&&g==="=")&&(E=!0,u="0",g="=");var A=v==="$"?n:v==="#"&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",T=v==="$"?r:/[%p]/.test(y)?i:"",P=Ne[y],I=/[defgprs%]/.test(y);_=_===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,_)):Math.max(0,Math.min(20,_));function L(w){var z=A,O=T,B,nt,J;if(y==="c")O=P(w)+O,w="";else{w=+w;var Q=w<0||1/w<0;if(w=isNaN(w)?l:P(Math.abs(w),_),S&&(w=Vn(w)),Q&&+w==0&&m!=="+"&&(Q=!1),z=(Q?m==="("?m:a:m==="-"||m==="("?"":m)+z,O=(y==="s"?Ce[8+Xe/3]:"")+O+(Q&&m==="("?")":""),I){for(B=-1,nt=w.length;++B<nt;)if(J=w.charCodeAt(B),48>J||J>57){O=(J===46?o+w.slice(B+1):w.slice(B))+O,w=w.slice(0,B);break}}}b&&!E&&(w=e(w,1/0));var N=z.length+w.length+O.length,j=N<k?new Array(k-N+1).join(u):"";switch(b&&E&&(w=e(j+w,j.length?k-O.length:1/0),j=""),g){case"<":w=z+w+O+j;break;case"=":w=z+j+w+O;break;case"^":w=j.slice(0,N=j.length>>1)+z+w+O+j.slice(N);break;default:w=j+z+w+O;break}return s(w)}return L.toString=function(){return f+""},L}function h(f,u){var g=c((f=Dt(f),f.type="f",f)),m=Math.max(-8,Math.min(8,Math.floor(kt(u)/3)))*3,v=Math.pow(10,-m),E=Ce[8+m/3];return function(k){return g(v*k)+E}}return{format:c,formatPrefix:h}}var It,Ke,Je;Fn({thousands:",",grouping:[3],currency:["$",""]});function Fn(t){return It=Bn(t),Ke=It.format,Je=It.formatPrefix,It}function Gn(t){return Math.max(0,-kt(Math.abs(t)))}function Yn(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(kt(e)/3)))*3-kt(Math.abs(t)))}function Xn(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,kt(e)-kt(t))+1}function Kn(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function Jn(t){return function(){return t}}function Qn(t){return+t}var Re=[0,1];function pt(t){return t}function Jt(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:Jn(isNaN(e)?NaN:.5)}function Zn(t,e){var n;return t>e&&(n=t,t=e,e=n),function(r){return Math.max(t,Math.min(e,r))}}function $n(t,e,n){var r=t[0],o=t[1],s=e[0],i=e[1];return o<r?(r=Jt(o,r),s=n(i,s)):(r=Jt(r,o),s=n(s,i)),function(a){return s(r(a))}}function tr(t,e,n){var r=Math.min(t.length,e.length)-1,o=new Array(r),s=new Array(r),i=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++i<r;)o[i]=Jt(t[i],t[i+1]),s[i]=n(e[i],e[i+1]);return function(a){var l=ln(t,a,1,r)-1;return s[l](o[l](a))}}function er(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function nr(){var t=Re,e=Re,n=ie,r,o,s,i=pt,a,l,c;function h(){var u=Math.min(t.length,e.length);return i!==pt&&(i=Zn(t[0],t[u-1])),a=u>2?tr:$n,l=c=null,f}function f(u){return u==null||isNaN(u=+u)?s:(l||(l=a(t.map(r),e,n)))(r(i(u)))}return f.invert=function(u){return i(o((c||(c=a(e,t.map(r),Ht)))(u)))},f.domain=function(u){return arguments.length?(t=Array.from(u,Qn),h()):t.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),h()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),n=zn,h()},f.clamp=function(u){return arguments.length?(i=u?!0:pt,h()):i!==pt},f.interpolate=function(u){return arguments.length?(n=u,h()):n},f.unknown=function(u){return arguments.length?(s=u,f):s},function(u,g){return r=u,o=g,h()}}function rr(){return nr()(pt,pt)}function or(t,e,n,r){var o=hn(t,e,n),s;switch(r=Dt(r??",f"),r.type){case"s":{var i=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(s=Yn(o,i))&&(r.precision=s),Je(r,i)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(s=Xn(o,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=s-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(s=Gn(o))&&(r.precision=s-(r.type==="%")*2);break}}return Ke(r)}function ir(t){var e=t.domain;return t.ticks=function(n){var r=e();return un(r[0],r[r.length-1],n??10)},t.tickFormat=function(n,r){var o=e();return or(o[0],o[o.length-1],n??10,r)},t.nice=function(n){n==null&&(n=10);var r=e(),o=0,s=r.length-1,i=r[o],a=r[s],l,c,h=10;for(a<i&&(c=i,i=a,a=c,c=o,o=s,s=c);h-- >0;){if(c=Yt(i,a,n),c===l)return r[o]=i,r[s]=a,e(r);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function Qt(){var t=rr();return t.copy=function(){return er(t,Qt())},Kn.apply(t,arguments),ir(t)}function xt(t,e,n){this.k=t,this.x=e,this.y=n}xt.prototype={constructor:xt,scale:function(t){return t===1?this:new xt(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new xt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new xt(1,0,0);xt.prototype;function Zt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Ae(t,{delay:e=0,speed:n,duration:r,easing:o=Zt}={}){let s=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(s+=parseInt(i.strokeWidth)),r===void 0?n===void 0?r=800:r=s/n:typeof r=="function"&&(r=r(s)),{delay:e,duration:r,easing:o,css:(a,l)=>`
			stroke-dasharray: ${s};
			stroke-dashoffset: ${l*s};
		`}}const Mt=[{migrant_rsp_id:4645,values:[{month:0,mig_cost_left:303,remit:168,money_us:529},{month:1,mig_cost_left:0,remit:168,money_us:832},{month:2,mig_cost_left:0,remit:168,money_us:832},{month:3,mig_cost_left:0,remit:168,money_us:832},{month:4,mig_cost_left:0,remit:168,money_us:832},{month:5,mig_cost_left:0,remit:168,money_us:832},{month:6,mig_cost_left:0,remit:168,money_us:832},{month:7,mig_cost_left:0,remit:168,money_us:832},{month:8,mig_cost_left:0,remit:168,money_us:832},{month:9,mig_cost_left:0,remit:168,money_us:832},{month:10,mig_cost_left:0,remit:168,money_us:832},{month:11,mig_cost_left:0,remit:168,money_us:832},{month:12,mig_cost_left:0,remit:168,money_us:832},{month:13,mig_cost_left:0,remit:168,money_us:832},{month:14,mig_cost_left:0,remit:168,money_us:832},{month:15,mig_cost_left:0,remit:168,money_us:832}]},{migrant_rsp_id:1358,values:[{month:0,mig_cost_left:3e3,remit:0,money_us:0},{month:1,mig_cost_left:3e3,remit:0,money_us:0},{month:2,mig_cost_left:3e3,remit:0,money_us:0},{month:3,mig_cost_left:3e3,remit:0,money_us:0},{month:4,mig_cost_left:3e3,remit:0,money_us:0},{month:5,mig_cost_left:3e3,remit:0,money_us:0},{month:6,mig_cost_left:3e3,remit:0,money_us:0},{month:7,mig_cost_left:3e3,remit:0,money_us:0},{month:8,mig_cost_left:3e3,remit:0,money_us:0},{month:9,mig_cost_left:3e3,remit:0,money_us:0},{month:10,mig_cost_left:3e3,remit:0,money_us:0},{month:11,mig_cost_left:3e3,remit:0,money_us:0},{month:12,mig_cost_left:3e3,remit:0,money_us:0},{month:13,mig_cost_left:3e3,remit:0,money_us:0},{month:14,mig_cost_left:3e3,remit:0,money_us:0},{month:15,mig_cost_left:3e3,remit:0,money_us:0}]},{migrant_rsp_id:1743,values:[{month:0,mig_cost_left:11e3,remit:17,money_us:0},{month:1,mig_cost_left:10017,remit:17,money_us:0},{month:2,mig_cost_left:9034,remit:17,money_us:0},{month:3,mig_cost_left:8051,remit:17,money_us:0},{month:4,mig_cost_left:7068,remit:17,money_us:0},{month:5,mig_cost_left:6085,remit:17,money_us:0},{month:6,mig_cost_left:5102,remit:17,money_us:0},{month:7,mig_cost_left:4119,remit:17,money_us:0},{month:8,mig_cost_left:3136,remit:17,money_us:0},{month:9,mig_cost_left:2153,remit:17,money_us:0},{month:10,mig_cost_left:1170,remit:17,money_us:0},{month:11,mig_cost_left:187,remit:17,money_us:796},{month:12,mig_cost_left:0,remit:17,money_us:983},{month:13,mig_cost_left:0,remit:17,money_us:983},{month:14,mig_cost_left:0,remit:17,money_us:983},{month:15,mig_cost_left:0,remit:17,money_us:983}]},{migrant_rsp_id:2399,values:[{month:0,mig_cost_left:59,remit:1e3,money_us:0},{month:1,mig_cost_left:59,remit:1e3,money_us:0},{month:2,mig_cost_left:59,remit:1e3,money_us:0},{month:3,mig_cost_left:59,remit:1e3,money_us:0},{month:4,mig_cost_left:59,remit:1e3,money_us:0},{month:5,mig_cost_left:59,remit:1e3,money_us:0},{month:6,mig_cost_left:59,remit:1e3,money_us:0},{month:7,mig_cost_left:59,remit:1e3,money_us:0},{month:8,mig_cost_left:59,remit:1e3,money_us:0},{month:9,mig_cost_left:59,remit:1e3,money_us:0},{month:10,mig_cost_left:59,remit:1e3,money_us:0},{month:11,mig_cost_left:59,remit:1e3,money_us:0},{month:12,mig_cost_left:59,remit:1e3,money_us:0},{month:13,mig_cost_left:59,remit:1e3,money_us:0},{month:14,mig_cost_left:59,remit:1e3,money_us:0},{month:15,mig_cost_left:59,remit:1e3,money_us:0}]},{migrant_rsp_id:853,values:[{month:0,mig_cost_left:421,remit:25,money_us:554},{month:1,mig_cost_left:0,remit:25,money_us:975},{month:2,mig_cost_left:0,remit:25,money_us:975},{month:3,mig_cost_left:0,remit:25,money_us:975},{month:4,mig_cost_left:0,remit:25,money_us:975},{month:5,mig_cost_left:0,remit:25,money_us:975},{month:6,mig_cost_left:0,remit:25,money_us:975},{month:7,mig_cost_left:0,remit:25,money_us:975},{month:8,mig_cost_left:0,remit:25,money_us:975},{month:9,mig_cost_left:0,remit:25,money_us:975},{month:10,mig_cost_left:0,remit:25,money_us:975},{month:11,mig_cost_left:0,remit:25,money_us:975},{month:12,mig_cost_left:0,remit:25,money_us:975},{month:13,mig_cost_left:0,remit:25,money_us:975},{month:14,mig_cost_left:0,remit:25,money_us:975},{month:15,mig_cost_left:0,remit:25,money_us:975}]},{migrant_rsp_id:1575,values:[{month:0,mig_cost_left:842,remit:25,money_us:133},{month:1,mig_cost_left:0,remit:25,money_us:975},{month:2,mig_cost_left:0,remit:25,money_us:975},{month:3,mig_cost_left:0,remit:25,money_us:975},{month:4,mig_cost_left:0,remit:25,money_us:975},{month:5,mig_cost_left:0,remit:25,money_us:975},{month:6,mig_cost_left:0,remit:25,money_us:975},{month:7,mig_cost_left:0,remit:25,money_us:975},{month:8,mig_cost_left:0,remit:25,money_us:975},{month:9,mig_cost_left:0,remit:25,money_us:975},{month:10,mig_cost_left:0,remit:25,money_us:975},{month:11,mig_cost_left:0,remit:25,money_us:975},{month:12,mig_cost_left:0,remit:25,money_us:975},{month:13,mig_cost_left:0,remit:25,money_us:975},{month:14,mig_cost_left:0,remit:25,money_us:975},{month:15,mig_cost_left:0,remit:25,money_us:975}]},{migrant_rsp_id:3921,values:[{month:0,mig_cost_left:6e3,remit:0,money_us:0},{month:1,mig_cost_left:6e3,remit:0,money_us:0},{month:2,mig_cost_left:6e3,remit:0,money_us:0},{month:3,mig_cost_left:6e3,remit:0,money_us:0},{month:4,mig_cost_left:6e3,remit:0,money_us:0},{month:5,mig_cost_left:6e3,remit:0,money_us:0},{month:6,mig_cost_left:6e3,remit:0,money_us:0},{month:7,mig_cost_left:6e3,remit:0,money_us:0},{month:8,mig_cost_left:6e3,remit:0,money_us:0},{month:9,mig_cost_left:6e3,remit:0,money_us:0},{month:10,mig_cost_left:6e3,remit:0,money_us:0},{month:11,mig_cost_left:6e3,remit:0,money_us:0},{month:12,mig_cost_left:6e3,remit:0,money_us:0},{month:13,mig_cost_left:6e3,remit:0,money_us:0},{month:14,mig_cost_left:6e3,remit:0,money_us:0},{month:15,mig_cost_left:6e3,remit:0,money_us:0}]},{migrant_rsp_id:810,values:[{month:0,mig_cost_left:1516,remit:200,money_us:0},{month:1,mig_cost_left:716,remit:200,money_us:84},{month:2,mig_cost_left:0,remit:200,money_us:800},{month:3,mig_cost_left:0,remit:200,money_us:800},{month:4,mig_cost_left:0,remit:200,money_us:800},{month:5,mig_cost_left:0,remit:200,money_us:800},{month:6,mig_cost_left:0,remit:200,money_us:800},{month:7,mig_cost_left:0,remit:200,money_us:800},{month:8,mig_cost_left:0,remit:200,money_us:800},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]},{migrant_rsp_id:1620,values:[{month:0,mig_cost_left:1348,remit:200,money_us:0},{month:1,mig_cost_left:548,remit:200,money_us:252},{month:2,mig_cost_left:0,remit:200,money_us:800},{month:3,mig_cost_left:0,remit:200,money_us:800},{month:4,mig_cost_left:0,remit:200,money_us:800},{month:5,mig_cost_left:0,remit:200,money_us:800},{month:6,mig_cost_left:0,remit:200,money_us:800},{month:7,mig_cost_left:0,remit:200,money_us:800},{month:8,mig_cost_left:0,remit:200,money_us:800},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]},{migrant_rsp_id:1083,values:[{month:0,mig_cost_left:7e3,remit:200,money_us:0},{month:1,mig_cost_left:6200,remit:200,money_us:0},{month:2,mig_cost_left:5400,remit:200,money_us:0},{month:3,mig_cost_left:4600,remit:200,money_us:0},{month:4,mig_cost_left:3800,remit:200,money_us:0},{month:5,mig_cost_left:3e3,remit:200,money_us:0},{month:6,mig_cost_left:2200,remit:200,money_us:0},{month:7,mig_cost_left:1400,remit:200,money_us:0},{month:8,mig_cost_left:600,remit:200,money_us:200},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]}];function Pe(t,e,n){const r=t.slice();return r[22]=e[n],r}function Ie(t,e,n){const r=t.slice();return r[25]=e[n],r}function Le(t,e,n){const r=t.slice();return r[28]=e[n],r[30]=n,r}function je(t){let e,n,r=t[0]>1&&Oe(t);return{c(){r&&r.c(),e=jt()},l(o){r&&r.l(o),e=jt()},m(o,s){r&&r.m(o,s),D(o,e,s),n=!0},p(o,s){o[0]>1?r?(r.p(o,s),s&1&&U(r,1)):(r=Oe(o),r.c(),U(r,1),r.m(e.parentNode,e)):r&&(te(),G(r,1,1,()=>{r=null}),ee())},i(o){n||(U(r),n=!0)},o(o){G(r),n=!1},d(o){r&&r.d(o),o&&x(e)}}}function Oe(t){let e,n,r=Mt,o=[];for(let i=0;i<r.length;i+=1)o[i]=ze(Le(t,r,i));const s=i=>G(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=jt()},l(i){for(let a=0;a<o.length;a+=1)o[a].l(i);e=jt()},m(i,a){for(let l=0;l<o.length;l+=1)o[l].m(i,a);D(i,e,a),n=!0},p(i,a){if(a&768){r=Mt;let l;for(l=0;l<r.length;l+=1){const c=Le(i,r,l);o[l]?(o[l].p(c,a),U(o[l],1)):(o[l]=ze(c),o[l].c(),U(o[l],1),o[l].m(e.parentNode,e))}for(te(),l=r.length;l<o.length;l+=1)s(l);ee()}},i(i){if(!n){for(let a=0;a<r.length;a+=1)U(o[a]);n=!0}},o(i){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)G(o[a]);n=!1},d(i){Gt(o,i),i&&x(e)}}}function ze(t){let e,n,r;return{c(){e=V("polyline"),this.h()},l(o){e=W(o,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0}),M(e).forEach(x),this.h()},h(){d(e,"points",t[9](t[28].values)),d(e,"fill","none"),d(e,"stroke",t[8](t[28])),d(e,"stroke-width","3")},m(o,s){D(o,e,s),r=!0},p(o,s){t=o},i(o){r||(ne(()=>{n||(n=ce(e,Ae,{duration:5e3,easing:Zt},!0)),n.run(1)}),r=!0)},o(o){n||(n=ce(e,Ae,{duration:5e3,easing:Zt},!1)),n.run(0),r=!1},d(o){o&&x(e),o&&n&&n.end()}}}function qe(t){let e,n,r,o=t[25]+"",s,i;return{c(){e=V("g"),n=V("line"),r=V("text"),s=X(o),this.h()},l(a){e=W(a,"g",{class:!0,opacity:!0,transform:!0});var l=M(e);n=W(l,"line",{stroke:!0,y2:!0}),M(n).forEach(x),r=W(l,"text",{dy:!0,fill:!0,y:!0,x:!0,"text-anchor":!0});var c=M(r);s=K(c,o),c.forEach(x),l.forEach(x),this.h()},h(){d(n,"stroke","black"),d(n,"y2","6"),d(r,"dy","0.71em"),d(r,"fill","black"),d(r,"y","10"),d(r,"x","-5"),d(r,"text-anchor","middle"),d(e,"class","tick"),d(e,"opacity","1"),d(e,"transform",i="translate("+t[5](t[25])+",0)")},m(a,l){D(a,e,l),p(e,n),p(e,r),p(r,s)},p(a,l){l&4&&o!==(o=a[25]+"")&&We(s,o),l&36&&i!==(i="translate("+a[5](a[25])+",0)")&&d(e,"transform",i)},d(a){a&&x(e)}}}function He(t){let e,n,r,o="$"+t[22],s,i;return{c(){e=V("g"),n=V("line"),r=V("text"),s=X(o),this.h()},l(a){e=W(a,"g",{class:!0,opacity:!0,transform:!0});var l=M(e);n=W(l,"line",{stroke:!0,x2:!0}),M(n).forEach(x),r=W(l,"text",{dy:!0,fill:!0,x:!0,"text-anchor":!0});var c=M(r);s=K(c,o),c.forEach(x),l.forEach(x),this.h()},h(){d(n,"stroke","black"),d(n,"x2","-5"),d(r,"dy","0.32em"),d(r,"fill","black"),d(r,"x","-"+10),d(r,"text-anchor","end"),d(e,"class","tick"),d(e,"opacity","1"),d(e,"transform",i="translate(0,"+t[4](t[22])+")")},m(a,l){D(a,e,l),p(e,n),p(e,r),p(r,s)},p(a,l){l&8&&o!==(o="$"+a[22])&&We(s,o),l&24&&i!==(i="translate(0,"+a[4](a[22])+")")&&d(e,"transform",i)},d(a){a&&x(e)}}}function sr(t){let e,n,r,o,s,i,a,l,c,h,f,u,g,m=t[0]>0&&je(t),v=t[2],E=[];for(let _=0;_<v.length;_+=1)E[_]=qe(Ie(t,v,_));let k=t[3],b=[];for(let _=0;_<k.length;_+=1)b[_]=He(Pe(t,k,_));return{c(){e=C("div"),n=V("svg"),r=V("g"),o=V("line"),i=V("line"),l=V("g"),m&&m.c(),c=V("g");for(let _=0;_<E.length;_+=1)E[_].c();h=V("g");for(let _=0;_<b.length;_+=1)b[_].c();f=q(),u=C("div"),this.h()},l(_){e=R(_,"DIV",{class:!0});var S=M(e);n=W(S,"svg",{width:!0,height:!0,id:!0});var y=M(n);r=W(y,"g",{});var A=M(r);o=W(A,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0}),M(o).forEach(x),i=W(A,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0,text:!0}),M(i).forEach(x),A.forEach(x),l=W(y,"g",{});var T=M(l);m&&m.l(T),T.forEach(x),c=W(y,"g",{transform:!0});var P=M(c);for(let L=0;L<E.length;L+=1)E[L].l(P);P.forEach(x),h=W(y,"g",{transform:!0});var I=M(h);for(let L=0;L<b.length;L+=1)b[L].l(I);I.forEach(x),y.forEach(x),S.forEach(x),f=H(_),u=R(_,"DIV",{id:!0}),M(u).forEach(x),this.h()},h(){d(o,"x1",t[6].left),d(o,"x2",$t-t[6].right),d(o,"y1",ht-t[6].bottom),d(o,"y2",ht-t[6].bottom),d(o,"stroke",s=t[1].blue),d(o,"stroke-width","2"),d(o,"class","axis"),d(i,"x1",t[6].left),d(i,"x2",t[6].left),d(i,"y1",t[6].top),d(i,"y2",ht-t[6].bottom),d(i,"stroke",a=t[1].blue),d(i,"stroke-width","2"),d(i,"class","axis"),d(i,"text","Cost of Migration (USD)"),d(c,"transform","translate(0, "+(ht-t[6].bottom)+")"),d(h,"transform","translate("+t[6].left+", 0)"),d(n,"width",$t),d(n,"height",ht),d(n,"id",t[7]),d(e,"class","LineChart2 svelte-14o9rub"),d(u,"id","chart")},m(_,S){D(_,e,S),p(e,n),p(n,r),p(r,o),p(r,i),p(n,l),m&&m.m(l,null),p(n,c);for(let y=0;y<E.length;y+=1)E[y].m(c,null);p(n,h);for(let y=0;y<b.length;y+=1)b[y].m(h,null);D(_,f,S),D(_,u,S),g=!0},p(_,[S]){if((!g||S&2&&s!==(s=_[1].blue))&&d(o,"stroke",s),(!g||S&2&&a!==(a=_[1].blue))&&d(i,"stroke",a),_[0]>0?m?(m.p(_,S),S&1&&U(m,1)):(m=je(_),m.c(),U(m,1),m.m(l,null)):m&&(te(),G(m,1,1,()=>{m=null}),ee()),S&36){v=_[2];let y;for(y=0;y<v.length;y+=1){const A=Ie(_,v,y);E[y]?E[y].p(A,S):(E[y]=qe(A),E[y].c(),E[y].m(c,null))}for(;y<E.length;y+=1)E[y].d(1);E.length=v.length}if(S&24){k=_[3];let y;for(y=0;y<k.length;y+=1){const A=Pe(_,k,y);b[y]?b[y].p(A,S):(b[y]=He(A),b[y].c(),b[y].m(h,null))}for(;y<b.length;y+=1)b[y].d(1);b.length=k.length}},i(_){g||(U(m),g=!0)},o(_){G(m),g=!1},d(_){_&&x(e),m&&m.d(),Gt(E,_),Gt(b,_),_&&x(f),_&&x(u)}}}let $t=600,ht=400,Ue=10;function ar(t,e,n){let r,o,{index:s,width:i,height:a,projection:l,themeColors:c}=e;const h={top:50,left:50,right:50,bottom:50},f=Mt.flatMap(T=>T.values.map(P=>P.month)),u=[...new Set(f)],g=Math.min(...u),m=Math.max(...u),v=Mt.flatMap(T=>T.values.map(P=>P.mig_cost_left)),E=Math.min(...v),k=Math.max(...v);let b=[],_=[];const S="svg-container-"+Math.random()*1e6;function y(T){return T.values.every(P=>P.remit==0)&&T.values.every(P=>P.money_us==0)?c.orange:c.blue}function A(T){return T.map(function(P){return r(P.month)+","+o(P.mig_cost_left)}).join(" ")}return t.$$set=T=>{"index"in T&&n(0,s=T.index),"width"in T&&n(10,i=T.width),"height"in T&&n(11,a=T.height),"projection"in T&&n(12,l=T.projection),"themeColors"in T&&n(1,c=T.themeColors)},t.$$.update=()=>{if(t.$$.dirty&12&&(n(2,b=[]),n(3,_=[]),Mt.length>1)){let T=[Math.round(g),Math.round(m+1)],P=Math.floor((T[1]-T[0])/Ue);for(let w=T[0];w<T[1];w=w+Math.max(1,P))b.push(w);let I=[Math.round(E),Math.round(k+1)],L=Math.floor((I[1]-I[0])/Ue);for(let w=I[0];w<I[1];w=w+Math.max(1,L))_.push(w)}},n(5,r=Qt().domain([g,m]).range([h.left,$t-h.right])),n(4,o=Qt().domain([E,k]).range([ht-h.bottom,h.top])),[s,c,b,_,o,r,h,S,y,A,i,a,l]}class lr extends lt{constructor(e){super(),ct(this,e,ar,sr,ft,{index:0,width:10,height:11,projection:12,themeColors:1})}}function cr(t){let e,n,r,o,s,i,a,l,c,h,f,u,g,m,v,E,k,b,_,S,y,A,T,P,I,L,w,z,O;return{c(){e=C("main"),n=C("html"),r=C("head"),o=C("meta"),s=q(),i=C("style"),a=X(`.node rect {\r
                    cursor: move;\r
                    fill-opacity: 0.9;\r
                    shape-rendering: crispEdges;\r
                }\r
                .node text {\r
                    pointer-events: none;\r
                    text-shadow: 0 1px 0 #fff;\r
                }\r
                .link {\r
                    fill: none;\r
                    stroke: burlywood;\r
                    stroke-opacity: 0.2;\r
                }\r
                .link:hover {\r
                    fill: red;\r
                    stroke: red;\r
                    stroke-opacity: 1000;\r
                }\r
                svg {\r
                    position: relative; \r
                    text-anchor: middle;\r
                }\r
                canvas {\r
                    position: absolute;\r
                }`),l=q(),c=C("body"),h=C("div"),f=C("p"),u=X("Original Occupation"),g=q(),m=C("p"),v=X("US Occupation"),E=q(),k=C("p"),b=C("canvas"),_=q(),S=V("svg"),y=q(),A=C("script"),P=q(),I=C("script"),w=q(),z=C("script"),O=X(`var margin = { top: 1, right: 1, bottom: 6, left: 1 },\r
                        width = 600 - margin.left - margin.right,\r
                        height = 500 - margin.top - margin.bottom;\r
                    var formatNumber = d3.format(",.0f"),\r
                        format = function (d) {\r
                            return formatNumber(d);\r
                        },\r
                        color = d3.scale.category20();\r
                    var svg = d3\r
                        .select("svg")\r
                        .attr("width", width + margin.left + margin.right)\r
                        .attr("height", height + margin.top + margin.bottom)\r
                        .append("g")\r
                        .attr(\r
                            "transform",\r
                            "translate(" + margin.left + "," + margin.top + ")"\r
                        );\r
                    var sankey = d3\r
                        .sankey()\r
                        .nodeWidth(15)\r
                        .nodePadding(10)\r
                        .size([width, height]);\r
                    var path = sankey.link();\r
                    var freqCounter = 1;\r
                    d3.json(\r
                        "https://raw.githubusercontent.com/mercerb/remit-return/sankey/remitreturn/src/data/sankey.json",\r
                        function (energy) {\r
                            sankey\r
                                .nodes(energy.nodes)\r
                                .links(energy.links)\r
                                .layout(32);\r
                            var link = svg\r
                                .append("g")\r
                                .selectAll(".link")\r
                                .data(energy.links)\r
                                .attr("fill", "yellow")\r
                                .enter()\r
                                .append("path")\r
                                .attr("class", "link")\r
                                .attr("opacity", 0.1)\r
                                .attr("d", path)\r
\r
                                .style("stroke-width", function (d) {\r
                                    return Math.max(1, d.dy);\r
                                })\r
                                .sort(function (a, b) {\r
                                    return b.dy - a.dy;\r
                                });\r
\r
                            link.append("title").text(function (d) {\r
                                return (\r
                                    d.source.name +\r
                                    " → " +\r
                                    d.target.name +\r
                                    "\\n" +\r
                                    format(d.value)\r
                                );\r
                            });\r
                            var node = svg\r
                                .append("g")\r
                                .selectAll(".node")\r
                                .data(energy.nodes)\r
                                .enter()\r
                                .append("g")\r
                                .attr("class", "node")\r
                                .attr("transform", function (d) {\r
                                    return "translate(" + d.x + "," + d.y + ")";\r
                                })\r
                                .call(\r
                                    d3.behavior\r
                                        .drag()\r
                                        .origin(function (d) {\r
                                            return d;\r
                                        })\r
                                        .on("dragstart", function () {\r
                                            this.parentNode.appendChild(this);\r
                                        })\r
                                        .on("drag", dragmove)\r
                                );\r
                            node.append("rect")\r
                                .attr("height", function (d) {\r
                                    return d.dy;\r
                                })\r
                                .attr("width", sankey.nodeWidth())\r
                                .style("fill", function (d) {\r
                                    return (d.color = color(\r
                                        d.name.replace(/ .*/, "")\r
                                    ));\r
                                })\r
                                .style("stroke", "none")\r
                                .append("title")\r
                                .text(function (d) {\r
                                    return d.name + "\\n" + format(d.value);\r
                                });\r
                            node.on("mouseover", function (d) {\r
                                link.transition()\r
                                    .duration(300)\r
                                    .style("stroke-opacity", function (l) {\r
                                        return l.source === d || l.target === d\r
                                            ? 1\r
                                            : 0.2;\r
                                    });\r
                            }).on("mouseleave", function (d) {\r
                                link.transition()\r
                                    .duration(300)\r
                                    .style("stroke-opacity", 0.2);\r
                            });\r
                            node.append("text")\r
                                .attr("x", -6)\r
                                .attr("y", function (d) {\r
                                    return d.dy / 2;\r
                                })\r
                                .attr("dy", ".35em")\r
                                .attr("text-anchor", "end")\r
                                .attr("transform", null)\r
                                .text(function (d) {\r
                                    return d.name;\r
                                })\r
                                .filter(function (d) {\r
                                    return d.x < width / 2;\r
                                })\r
                                .attr("x", 6 + sankey.nodeWidth())\r
                                .attr("text-anchor", "start");\r
                            function dragmove(d) {\r
                                d3.select(this).attr(\r
                                    "transform",\r
                                    "translate(" +\r
                                        d.x +\r
                                        "," +\r
                                        (d.y = Math.max(\r
                                            0,\r
                                            Math.min(height - d.dy, d3.event.y)\r
                                        )) +\r
                                        ")"\r
                                );\r
                                sankey.relayout();\r
                                link.attr("d", path);\r
                            }\r
\r
                            var linkExtent = d3.extent(\r
                                energy.links,\r
                                function (d) {\r
                                    return d.value;\r
                                }\r
                            );\r
                            var frequencyScale = d3.scale\r
                                .linear()\r
                                .domain(linkExtent)\r
                                .range([0.05, 1]);\r
                            var particleSize = d3.scale\r
                                .linear()\r
                                .domain(linkExtent)\r
                                .range([1, 5]);\r
                            energy.links.forEach(function (link) {\r
                                link.freq = frequencyScale(link.value);\r
                                link.particleSize = 1;\r
                                link.color = d3.scale\r
                                    .linear()\r
                                    .domain([0, 1])\r
                                    .range([\r
                                        link.source.color,\r
                                        link.target.color,\r
                                    ]);\r
                                link.particleColor = d3.scale\r
                                    .linear()\r
                                    .domain([0, 1])\r
                                    .range([\r
                                        link.source.color,\r
                                        link.target.color,\r
                                    ]);\r
                            });\r
                            var t = d3.timer(tick, 50);\r
                            var particles = [];\r
                            function tick(elapsed, time) {\r
                                particles = particles.filter(function (d) {\r
                                    return d.current < d.path.getTotalLength();\r
                                });\r
                                d3.selectAll("path.link").each(function (d) {\r
                                    for (var x = 0; x < 2; x++) {\r
                                        var offset =\r
                                            (Math.random() - 0.5) * (d.dy - 4);\r
                                        if (Math.random() < d.freq) {\r
                                            var length = this.getTotalLength();\r
                                            particles.push({\r
                                                link: d,\r
                                                time: elapsed,\r
                                                offset: offset,\r
                                                path: this,\r
                                                length: length,\r
                                                animateTime: length,\r
                                                speed: 0.5 + Math.random(),\r
                                            });\r
                                        }\r
                                    }\r
                                });\r
                                particleEdgeCanvasPath(elapsed);\r
                            }\r
                            function particleEdgeCanvasPath(elapsed) {\r
                                var context = d3\r
                                    .select("canvas")\r
                                    .node()\r
                                    .getContext("2d");\r
                                context.clearRect(0, 0, 1000, 1000);\r
                                context.fillStyle = "gray";\r
                                context.lineWidth = "1px";\r
                                for (var x in particles) {\r
                                    var currentTime =\r
                                        elapsed - particles[x].time;\r
                                    particles[x].current =\r
                                        currentTime * 0.15 * particles[x].speed;\r
                                    var currentPos = particles[\r
                                        x\r
                                    ].path.getPointAtLength(\r
                                        particles[x].current\r
                                    );\r
                                    context.beginPath();\r
                                    context.fillStyle =\r
                                        particles[x].link.particleColor(0);\r
                                    context.arc(\r
                                        currentPos.x,\r
                                        currentPos.y + particles[x].offset,\r
                                        particles[x].link.particleSize,\r
                                        0,\r
                                        2 * Math.PI\r
                                    );\r
                                    context.fill();\r
                                }\r
                            }\r
                        }\r
                    );\r
                    function highlight_node_links(node, i) {\r
                        var remainingNodes = [],\r
                            nextNodes = [];\r
                        var stroke_opacity = 0;\r
                        if (d3.select(this).attr("data-clicked") == "1") {\r
                            d3.select(this).attr("data-clicked", "0");\r
                            stroke_opacity = 0.2;\r
                        } else {\r
                            d3.select(this).attr("data-clicked", "1");\r
                            stroke_opacity = 0.5;\r
                        }\r
                        var traverse = [\r
                            {\r
                                linkType: "sourceLinks",\r
                                nodeType: "target",\r
                            },\r
                            {\r
                                linkType: "targetLinks",\r
                                nodeType: "source",\r
                            },\r
                        ];\r
                        traverse.forEach(function (step) {\r
                            node[step.linkType].forEach(function (link) {\r
                                remainingNodes.push(link[step.nodeType]);\r
                                highlight_link(link.id, stroke_opacity);\r
                            });\r
                            while (remainingNodes.length) {\r
                                nextNodes = [];\r
                                remainingNodes.forEach(function (node) {\r
                                    node[step.linkType].forEach(function (\r
                                        link\r
                                    ) {\r
                                        nextNodes.push(link[step.nodeType]);\r
                                        highlight_link(link.id, stroke_opacity);\r
                                    });\r
                                });\r
                                remainingNodes = nextNodes;\r
                            }\r
                        });\r
                    }\r
                    function highlight_link(id, opacity) {\r
                        d3.select("#link-" + id).style(\r
                            "stroke-opacity",\r
                            opacity\r
                        );\r
                    }`),this.h()},l(B){e=R(B,"MAIN",{});var nt=M(e);n=R(nt,"HTML",{lang:!0});var J=M(n);r=R(J,"HEAD",{});var Q=M(r);o=R(Q,"META",{charset:!0}),s=H(Q),i=R(Q,"STYLE",{});var N=M(i);a=K(N,`.node rect {\r
                    cursor: move;\r
                    fill-opacity: 0.9;\r
                    shape-rendering: crispEdges;\r
                }\r
                .node text {\r
                    pointer-events: none;\r
                    text-shadow: 0 1px 0 #fff;\r
                }\r
                .link {\r
                    fill: none;\r
                    stroke: burlywood;\r
                    stroke-opacity: 0.2;\r
                }\r
                .link:hover {\r
                    fill: red;\r
                    stroke: red;\r
                    stroke-opacity: 1000;\r
                }\r
                svg {\r
                    position: relative; \r
                    text-anchor: middle;\r
                }\r
                canvas {\r
                    position: absolute;\r
                }`),N.forEach(x),Q.forEach(x),l=H(J),c=R(J,"BODY",{});var j=M(c);h=R(j,"DIV",{class:!0});var rt=M(h);f=R(rt,"P",{style:!0});var mt=M(f);u=K(mt,"Original Occupation"),mt.forEach(x),g=H(rt),m=R(rt,"P",{style:!0});var vt=M(m);v=K(vt,"US Occupation"),vt.forEach(x),rt.forEach(x),E=H(j),k=R(j,"P",{id:!0});var F=M(k);b=R(F,"CANVAS",{width:!0,height:!0}),M(b).forEach(x),_=H(F),S=W(F,"svg",{width:!0,height:!0}),M(S).forEach(x),y=H(F),A=R(F,"SCRIPT",{src:!0,charset:!0,type:!0});var ot=M(A);ot.forEach(x),P=H(F),I=R(F,"SCRIPT",{src:!0});var Wt=M(I);Wt.forEach(x),w=H(F),z=R(F,"SCRIPT",{type:!0});var wt=M(z);O=K(wt,`var margin = { top: 1, right: 1, bottom: 6, left: 1 },\r
                        width = 600 - margin.left - margin.right,\r
                        height = 500 - margin.top - margin.bottom;\r
                    var formatNumber = d3.format(",.0f"),\r
                        format = function (d) {\r
                            return formatNumber(d);\r
                        },\r
                        color = d3.scale.category20();\r
                    var svg = d3\r
                        .select("svg")\r
                        .attr("width", width + margin.left + margin.right)\r
                        .attr("height", height + margin.top + margin.bottom)\r
                        .append("g")\r
                        .attr(\r
                            "transform",\r
                            "translate(" + margin.left + "," + margin.top + ")"\r
                        );\r
                    var sankey = d3\r
                        .sankey()\r
                        .nodeWidth(15)\r
                        .nodePadding(10)\r
                        .size([width, height]);\r
                    var path = sankey.link();\r
                    var freqCounter = 1;\r
                    d3.json(\r
                        "https://raw.githubusercontent.com/mercerb/remit-return/sankey/remitreturn/src/data/sankey.json",\r
                        function (energy) {\r
                            sankey\r
                                .nodes(energy.nodes)\r
                                .links(energy.links)\r
                                .layout(32);\r
                            var link = svg\r
                                .append("g")\r
                                .selectAll(".link")\r
                                .data(energy.links)\r
                                .attr("fill", "yellow")\r
                                .enter()\r
                                .append("path")\r
                                .attr("class", "link")\r
                                .attr("opacity", 0.1)\r
                                .attr("d", path)\r
\r
                                .style("stroke-width", function (d) {\r
                                    return Math.max(1, d.dy);\r
                                })\r
                                .sort(function (a, b) {\r
                                    return b.dy - a.dy;\r
                                });\r
\r
                            link.append("title").text(function (d) {\r
                                return (\r
                                    d.source.name +\r
                                    " → " +\r
                                    d.target.name +\r
                                    "\\n" +\r
                                    format(d.value)\r
                                );\r
                            });\r
                            var node = svg\r
                                .append("g")\r
                                .selectAll(".node")\r
                                .data(energy.nodes)\r
                                .enter()\r
                                .append("g")\r
                                .attr("class", "node")\r
                                .attr("transform", function (d) {\r
                                    return "translate(" + d.x + "," + d.y + ")";\r
                                })\r
                                .call(\r
                                    d3.behavior\r
                                        .drag()\r
                                        .origin(function (d) {\r
                                            return d;\r
                                        })\r
                                        .on("dragstart", function () {\r
                                            this.parentNode.appendChild(this);\r
                                        })\r
                                        .on("drag", dragmove)\r
                                );\r
                            node.append("rect")\r
                                .attr("height", function (d) {\r
                                    return d.dy;\r
                                })\r
                                .attr("width", sankey.nodeWidth())\r
                                .style("fill", function (d) {\r
                                    return (d.color = color(\r
                                        d.name.replace(/ .*/, "")\r
                                    ));\r
                                })\r
                                .style("stroke", "none")\r
                                .append("title")\r
                                .text(function (d) {\r
                                    return d.name + "\\n" + format(d.value);\r
                                });\r
                            node.on("mouseover", function (d) {\r
                                link.transition()\r
                                    .duration(300)\r
                                    .style("stroke-opacity", function (l) {\r
                                        return l.source === d || l.target === d\r
                                            ? 1\r
                                            : 0.2;\r
                                    });\r
                            }).on("mouseleave", function (d) {\r
                                link.transition()\r
                                    .duration(300)\r
                                    .style("stroke-opacity", 0.2);\r
                            });\r
                            node.append("text")\r
                                .attr("x", -6)\r
                                .attr("y", function (d) {\r
                                    return d.dy / 2;\r
                                })\r
                                .attr("dy", ".35em")\r
                                .attr("text-anchor", "end")\r
                                .attr("transform", null)\r
                                .text(function (d) {\r
                                    return d.name;\r
                                })\r
                                .filter(function (d) {\r
                                    return d.x < width / 2;\r
                                })\r
                                .attr("x", 6 + sankey.nodeWidth())\r
                                .attr("text-anchor", "start");\r
                            function dragmove(d) {\r
                                d3.select(this).attr(\r
                                    "transform",\r
                                    "translate(" +\r
                                        d.x +\r
                                        "," +\r
                                        (d.y = Math.max(\r
                                            0,\r
                                            Math.min(height - d.dy, d3.event.y)\r
                                        )) +\r
                                        ")"\r
                                );\r
                                sankey.relayout();\r
                                link.attr("d", path);\r
                            }\r
\r
                            var linkExtent = d3.extent(\r
                                energy.links,\r
                                function (d) {\r
                                    return d.value;\r
                                }\r
                            );\r
                            var frequencyScale = d3.scale\r
                                .linear()\r
                                .domain(linkExtent)\r
                                .range([0.05, 1]);\r
                            var particleSize = d3.scale\r
                                .linear()\r
                                .domain(linkExtent)\r
                                .range([1, 5]);\r
                            energy.links.forEach(function (link) {\r
                                link.freq = frequencyScale(link.value);\r
                                link.particleSize = 1;\r
                                link.color = d3.scale\r
                                    .linear()\r
                                    .domain([0, 1])\r
                                    .range([\r
                                        link.source.color,\r
                                        link.target.color,\r
                                    ]);\r
                                link.particleColor = d3.scale\r
                                    .linear()\r
                                    .domain([0, 1])\r
                                    .range([\r
                                        link.source.color,\r
                                        link.target.color,\r
                                    ]);\r
                            });\r
                            var t = d3.timer(tick, 50);\r
                            var particles = [];\r
                            function tick(elapsed, time) {\r
                                particles = particles.filter(function (d) {\r
                                    return d.current < d.path.getTotalLength();\r
                                });\r
                                d3.selectAll("path.link").each(function (d) {\r
                                    for (var x = 0; x < 2; x++) {\r
                                        var offset =\r
                                            (Math.random() - 0.5) * (d.dy - 4);\r
                                        if (Math.random() < d.freq) {\r
                                            var length = this.getTotalLength();\r
                                            particles.push({\r
                                                link: d,\r
                                                time: elapsed,\r
                                                offset: offset,\r
                                                path: this,\r
                                                length: length,\r
                                                animateTime: length,\r
                                                speed: 0.5 + Math.random(),\r
                                            });\r
                                        }\r
                                    }\r
                                });\r
                                particleEdgeCanvasPath(elapsed);\r
                            }\r
                            function particleEdgeCanvasPath(elapsed) {\r
                                var context = d3\r
                                    .select("canvas")\r
                                    .node()\r
                                    .getContext("2d");\r
                                context.clearRect(0, 0, 1000, 1000);\r
                                context.fillStyle = "gray";\r
                                context.lineWidth = "1px";\r
                                for (var x in particles) {\r
                                    var currentTime =\r
                                        elapsed - particles[x].time;\r
                                    particles[x].current =\r
                                        currentTime * 0.15 * particles[x].speed;\r
                                    var currentPos = particles[\r
                                        x\r
                                    ].path.getPointAtLength(\r
                                        particles[x].current\r
                                    );\r
                                    context.beginPath();\r
                                    context.fillStyle =\r
                                        particles[x].link.particleColor(0);\r
                                    context.arc(\r
                                        currentPos.x,\r
                                        currentPos.y + particles[x].offset,\r
                                        particles[x].link.particleSize,\r
                                        0,\r
                                        2 * Math.PI\r
                                    );\r
                                    context.fill();\r
                                }\r
                            }\r
                        }\r
                    );\r
                    function highlight_node_links(node, i) {\r
                        var remainingNodes = [],\r
                            nextNodes = [];\r
                        var stroke_opacity = 0;\r
                        if (d3.select(this).attr("data-clicked") == "1") {\r
                            d3.select(this).attr("data-clicked", "0");\r
                            stroke_opacity = 0.2;\r
                        } else {\r
                            d3.select(this).attr("data-clicked", "1");\r
                            stroke_opacity = 0.5;\r
                        }\r
                        var traverse = [\r
                            {\r
                                linkType: "sourceLinks",\r
                                nodeType: "target",\r
                            },\r
                            {\r
                                linkType: "targetLinks",\r
                                nodeType: "source",\r
                            },\r
                        ];\r
                        traverse.forEach(function (step) {\r
                            node[step.linkType].forEach(function (link) {\r
                                remainingNodes.push(link[step.nodeType]);\r
                                highlight_link(link.id, stroke_opacity);\r
                            });\r
                            while (remainingNodes.length) {\r
                                nextNodes = [];\r
                                remainingNodes.forEach(function (node) {\r
                                    node[step.linkType].forEach(function (\r
                                        link\r
                                    ) {\r
                                        nextNodes.push(link[step.nodeType]);\r
                                        highlight_link(link.id, stroke_opacity);\r
                                    });\r
                                });\r
                                remainingNodes = nextNodes;\r
                            }\r
                        });\r
                    }\r
                    function highlight_link(id, opacity) {\r
                        d3.select("#link-" + id).style(\r
                            "stroke-opacity",\r
                            opacity\r
                        );\r
                    }`),wt.forEach(x),F.forEach(x),j.forEach(x),J.forEach(x),nt.forEach(x),this.h()},h(){d(o,"charset","utf-8"),fe(f,"float","left"),fe(m,"float","right"),d(h,"class","sidebar"),d(b,"width","800"),d(b,"height","1100"),d(S,"width","800"),d(S,"height","1000"),me(A.src,T="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js")||d(A,"src",T),d(A,"charset","utf-8"),d(A,"type","text/javascript"),me(I.src,L="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/sankey.js")||d(I,"src",L),d(z,"type","text/javascript"),d(k,"id","sankey"),d(n,"lang","en")},m(B,nt){D(B,e,nt),p(e,n),p(n,r),p(r,o),p(r,s),p(r,i),p(i,a),p(n,l),p(n,c),p(c,h),p(h,f),p(f,u),p(h,g),p(h,m),p(m,v),p(c,E),p(c,k),p(k,b),p(k,_),p(k,S),p(k,y),p(k,A),p(k,P),p(k,I),p(k,w),p(k,z),p(z,O)},p:$,i:$,o:$,d(B){B&&x(e)}}}function fr(t,e,n){let{name:r="World"}=e,{index:o}=e;return t.$$set=s=>{"name"in s&&n(0,r=s.name),"index"in s&&n(1,o=s.index)},[r,o]}class mr extends lt{constructor(e){super(),ct(this,e,fr,cr,ft,{name:0,index:1})}}const{window:Qe}=tn,ur=t=>({}),De=t=>({}),hr=t=>({}),Ve=t=>({});function dr(t){let e,n,r,o,s,i,a,l,c;ne(t[21]);const h=t[20].background,f=ue(h,t,t[19],Ve),u=t[20].foreground,g=ue(u,t,t[19],De);return{c(){e=C("svelte-scroller-outer"),n=C("svelte-scroller-background-container"),r=C("svelte-scroller-background"),f&&f.c(),s=q(),i=C("svelte-scroller-foreground"),g&&g.c(),this.h()},l(m){e=R(m,"SVELTE-SCROLLER-OUTER",{class:!0});var v=M(e);n=R(v,"SVELTE-SCROLLER-BACKGROUND-CONTAINER",{class:!0,style:!0});var E=M(n);r=R(E,"SVELTE-SCROLLER-BACKGROUND",{class:!0});var k=M(r);f&&f.l(k),k.forEach(x),E.forEach(x),s=H(v),i=R(v,"SVELTE-SCROLLER-FOREGROUND",{class:!0});var b=M(i);g&&g.l(b),b.forEach(x),v.forEach(x),this.h()},h(){ut(r,"class","svelte-xdbafy"),ut(n,"class","background-container svelte-xdbafy"),ut(n,"style",o=""+(t[5]+t[4])),ut(i,"class","svelte-xdbafy"),ut(e,"class","svelte-xdbafy")},m(m,v){D(m,e,v),p(e,n),p(n,r),f&&f.m(r,null),t[22](r),p(e,s),p(e,i),g&&g.m(i,null),t[23](i),t[24](e),a=!0,l||(c=Ze(Qe,"resize",t[21]),l=!0)},p(m,v){f&&f.p&&(!a||v[0]&524288)&&he(f,h,m,m[19],a?ge(h,m[19],v,hr):de(m[19]),Ve),(!a||v[0]&48&&o!==(o=""+(m[5]+m[4])))&&ut(n,"style",o),g&&g.p&&(!a||v[0]&524288)&&he(g,u,m,m[19],a?ge(u,m[19],v,ur):de(m[19]),De)},i(m){a||(U(f,m),U(g,m),a=!0)},o(m){G(f,m),G(g,m),a=!1},d(m){m&&x(e),f&&f.d(m),t[22](null),g&&g.d(m),t[23](null),t[24](null),l=!1,c()}}}const tt=[];let Vt;if(typeof window<"u"){const t=()=>tt.forEach(e=>e());window.addEventListener("scroll",t),window.addEventListener("resize",t)}if(typeof IntersectionObserver<"u"){const t=new Map,e=new IntersectionObserver((n,r)=>{n.forEach(o=>{const s=t.get(o.target),i=tt.indexOf(s);o.isIntersecting?i===-1&&tt.push(s):(s(),i!==-1&&tt.splice(i,1))})},{rootMargin:"400px 0px"});Vt={add:({outer:n,update:r})=>{const{top:o,bottom:s}=n.getBoundingClientRect();o<window.innerHeight&&s>0&&tt.push(r),t.set(n,r),e.observe(n)},remove:({outer:n,update:r})=>{const o=tt.indexOf(r);o!==-1&&tt.splice(o,1),t.delete(n),e.unobserve(n)}}}else Vt={add:({update:t})=>{tt.push(t)},remove:({update:t})=>{const e=tt.indexOf(t);e!==-1&&tt.splice(e,1)}};function gr(t,e,n){let r,o,s,i,a,{$$slots:l={},$$scope:c}=e,{top:h=0}=e,{bottom:f=1}=e,{threshold:u=.5}=e,{query:g="section"}=e,{parallax:m=!1}=e,{index:v=0}=e,{count:E=0}=e,{offset:k=0}=e,{progress:b=0}=e,{visible:_=!1}=e,S,y,A,T,P,I=0,L,w=0,z=1;$e(()=>{P=y.querySelectorAll(g),n(7,E=P.length),O();const N={outer:S,update:O};return Vt.add(N),()=>Vt.remove(N)});function O(){if(!y)return;const N=S.getBoundingClientRect();T=N.left,n(18,z=N.right-T);const j=y.getBoundingClientRect(),rt=A.getBoundingClientRect();n(10,_=j.top<I&&j.bottom>0);const mt=j.bottom-j.top,vt=rt.bottom-rt.top,F=o-r;n(9,b=(r-j.top)/(mt-F)),b<=0?(n(17,w=0),n(16,L=!1)):b>=1?(n(17,w=m?mt-vt:mt-F),n(16,L=!1)):(n(17,w=m?Math.round(r-b*(vt-F)):r),n(16,L=!0));for(let ot=0;ot<P.length;ot++){const Wt=P[ot],{top:wt}=Wt.getBoundingClientRect(),ae=P[ot+1],le=ae?ae.getBoundingClientRect().top:j.bottom;if(n(8,k=(s-wt)/(le-wt)),le>=s){n(6,v=ot);break}}}function B(){n(0,I=Qe.innerHeight)}function nt(N){it[N?"unshift":"push"](()=>{A=N,n(3,A)})}function J(N){it[N?"unshift":"push"](()=>{y=N,n(2,y)})}function Q(N){it[N?"unshift":"push"](()=>{S=N,n(1,S)})}return t.$$set=N=>{"top"in N&&n(11,h=N.top),"bottom"in N&&n(12,f=N.bottom),"threshold"in N&&n(13,u=N.threshold),"query"in N&&n(14,g=N.query),"parallax"in N&&n(15,m=N.parallax),"index"in N&&n(6,v=N.index),"count"in N&&n(7,E=N.count),"offset"in N&&n(8,k=N.offset),"progress"in N&&n(9,b=N.progress),"visible"in N&&n(10,_=N.visible),"$$scope"in N&&n(19,c=N.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2049&&(r=Math.round(h*I)),t.$$.dirty[0]&4097&&(o=Math.round(f*I)),t.$$.dirty[0]&8193&&(s=Math.round(u*I)),t.$$.dirty[0]&47104&&O(),t.$$.dirty[0]&196608&&n(5,i=`
		position: ${L?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${w}px);
		z-index: ${1};
	`),t.$$.dirty[0]&327680&&n(4,a=L?`width:${z}px;`:"")},[I,S,y,A,a,i,v,E,k,b,_,h,f,u,g,m,L,w,z,c,l,B,nt,J,Q]}class _r extends lt{constructor(e){super(),ct(this,e,gr,dr,ft,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}function yr(t){let e,n,r,o,s,i,a,l,c,h,f,u;return{c(){e=C("h2"),n=X("RemitReturn"),r=q(),o=C("div"),s=C("p"),i=X(`Economic insecurity is the leading cause of migration. Despite the costs\r
        - both financial and emotional - associated with migrating from the\r
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United\r
        States, indviduals take on this burden year after year in search of\r
        better salaries, working conditions, and opportunities to send money\r
        home. Migrants who end up working in the destination country long enough\r
        not only offset the cost of their migration and send remittances home,\r
        but also spend money in the United States (for food, housing, etc),\r
        invigorating the economy. Data sourced from the UN World Food Programme (WFP).`),a=q(),l=C("p"),c=X(`The data displayed here is a subset of the class data. This subset\r
        includes 454 individuals who reported a cost of migration and whose\r
        destination was the United States. Of these, 349 currently reside in the\r
        USA and send remittances back to their families (as of the time of the\r
        survey, April 2021). 105 paid the cost of migration but either did not\r
        make it to the USA or were sent back.`),h=q(),f=C("p"),u=X(`Is the cost worth it? At what point do working migrants offset that\r
        cost? How much are they contributing to the US economy depending on what\r
        jobs are available? To better understand the tradeoff between the cost\r
        of migration, remittances, and money entering the USA, we have\r
        identified 10 migrants who represent a statistically similar sample of\r
        this larger group.`),this.h()},l(g){e=R(g,"H2",{});var m=M(e);n=K(m,"RemitReturn"),m.forEach(x),r=H(g),o=R(g,"DIV",{class:!0});var v=M(o);s=R(v,"P",{});var E=M(s);i=K(E,`Economic insecurity is the leading cause of migration. Despite the costs\r
        - both financial and emotional - associated with migrating from the\r
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United\r
        States, indviduals take on this burden year after year in search of\r
        better salaries, working conditions, and opportunities to send money\r
        home. Migrants who end up working in the destination country long enough\r
        not only offset the cost of their migration and send remittances home,\r
        but also spend money in the United States (for food, housing, etc),\r
        invigorating the economy. Data sourced from the UN World Food Programme (WFP).`),E.forEach(x),a=H(v),l=R(v,"P",{});var k=M(l);c=K(k,`The data displayed here is a subset of the class data. This subset\r
        includes 454 individuals who reported a cost of migration and whose\r
        destination was the United States. Of these, 349 currently reside in the\r
        USA and send remittances back to their families (as of the time of the\r
        survey, April 2021). 105 paid the cost of migration but either did not\r
        make it to the USA or were sent back.`),k.forEach(x),h=H(v),f=R(v,"P",{});var b=M(f);u=K(b,`Is the cost worth it? At what point do working migrants offset that\r
        cost? How much are they contributing to the US economy depending on what\r
        jobs are available? To better understand the tradeoff between the cost\r
        of migration, remittances, and money entering the USA, we have\r
        identified 10 migrants who represent a statistically similar sample of\r
        this larger group.`),b.forEach(x),v.forEach(x),this.h()},h(){d(o,"class","IntroText svelte-1khzzid")},m(g,m){D(g,e,m),p(e,n),D(g,r,m),D(g,o,m),p(o,s),p(s,i),p(o,a),p(o,l),p(l,c),p(o,h),p(o,f),p(f,u)},p:$,i:$,o:$,d(g){g&&x(e),g&&x(r),g&&x(o)}}}class pr extends lt{constructor(e){super(),ct(this,e,null,yr,ft,{})}}function xr(t){let e,n,r,o,s,i;return{c(){e=C("div"),n=C("p"),r=X(`As seen in the above graph, the time it takes to pay off the cost of the\r
        migration depends on the job secured by the migrant in the destination\r
        country and the amount of money they send back as remittances every\r
        month. It can take as little as 1 month to work off the cost of the\r
        migration and begin contributing to the economy, but for more expensive\r
        migrations, the payback period can be as long as a year.`),o=q(),s=C("p"),i=X(`The orange bars represent two migrants who paid thousands of US dollars\r
        to migrate but were sent back to their country of origin. They never had\r
        a chance to pay off the amount they invested in the migration. They\r
        never had the opportunity to work in the US, contribute to its economy,\r
        and send money back home.`),this.h()},l(a){e=R(a,"DIV",{class:!0});var l=M(e);n=R(l,"P",{});var c=M(n);r=K(c,`As seen in the above graph, the time it takes to pay off the cost of the\r
        migration depends on the job secured by the migrant in the destination\r
        country and the amount of money they send back as remittances every\r
        month. It can take as little as 1 month to work off the cost of the\r
        migration and begin contributing to the economy, but for more expensive\r
        migrations, the payback period can be as long as a year.`),c.forEach(x),o=H(l),s=R(l,"P",{});var h=M(s);i=K(h,`The orange bars represent two migrants who paid thousands of US dollars\r
        to migrate but were sent back to their country of origin. They never had\r
        a chance to pay off the amount they invested in the migration. They\r
        never had the opportunity to work in the US, contribute to its economy,\r
        and send money back home.`),h.forEach(x),l.forEach(x),this.h()},h(){d(e,"class","MiddleText svelte-x6um5r")},m(a,l){D(a,e,l),p(e,n),p(n,r),p(e,o),p(e,s),p(s,i)},p:$,i:$,o:$,d(a){a&&x(e)}}}class br extends lt{constructor(e){super(),ct(this,e,null,xr,ft,{})}}function kr(t){let e,n,r;return{c(){e=C("div"),n=C("div"),this.h()},l(o){e=R(o,"DIV",{class:!0,slot:!0});var s=M(e);n=R(s,"DIV",{class:!0});var i=M(n);i.forEach(x),s.forEach(x),this.h()},h(){d(n,"class","progress-bars svelte-f2vy7l"),d(e,"class","background svelte-f2vy7l"),d(e,"slot","background"),ne(()=>t[7].call(e))},m(o,s){D(o,e,s),p(e,n),r=en(e,t[7].bind(e))},p:$,d(o){o&&x(e),r()}}}function vr(t){let e,n,r,o,s,i,a,l,c,h,f,u,g,m,v,E;return r=new pr({}),i=new mr({props:{index:t[2]}}),h=new lr({props:{index:t[2],width:t[5],height:t[6],themeColors:t[0]}}),g=new br({}),{c(){e=C("div"),n=C("section"),dt(r.$$.fragment),o=q(),s=C("section"),dt(i.$$.fragment),a=q(),l=C("section"),c=X(`Cost of migration projected over time (months).\r
      `),dt(h.$$.fragment),f=q(),u=C("section"),dt(g.$$.fragment),m=q(),v=C("section"),this.h()},l(k){e=R(k,"DIV",{class:!0,slot:!0});var b=M(e);n=R(b,"SECTION",{class:!0});var _=M(n);gt(r.$$.fragment,_),_.forEach(x),o=H(b),s=R(b,"SECTION",{class:!0});var S=M(s);gt(i.$$.fragment,S),S.forEach(x),a=H(b),l=R(b,"SECTION",{class:!0});var y=M(l);c=K(y,`Cost of migration projected over time (months).\r
      `),gt(h.$$.fragment,y),y.forEach(x),f=H(b),u=R(b,"SECTION",{class:!0});var A=M(u);gt(g.$$.fragment,A),A.forEach(x),m=H(b),v=R(b,"SECTION",{class:!0});var T=M(v);T.forEach(x),b.forEach(x),this.h()},h(){d(n,"class","svelte-f2vy7l"),d(s,"class","svelte-f2vy7l"),d(l,"class","svelte-f2vy7l"),d(u,"class","svelte-f2vy7l"),d(v,"class","svelte-f2vy7l"),d(e,"class","foreground svelte-f2vy7l"),d(e,"slot","foreground")},m(k,b){D(k,e,b),p(e,n),_t(r,n,null),p(e,o),p(e,s),_t(i,s,null),p(e,a),p(e,l),p(l,c),_t(h,l,null),p(e,f),p(e,u),_t(g,u,null),p(e,m),p(e,v),E=!0},p(k,b){const _={};b&4&&(_.index=k[2]),i.$set(_);const S={};b&4&&(S.index=k[2]),b&32&&(S.width=k[5]),b&64&&(S.height=k[6]),h.$set(S)},i(k){E||(U(r.$$.fragment,k),U(i.$$.fragment,k),U(h.$$.fragment,k),U(g.$$.fragment,k),E=!0)},o(k){G(r.$$.fragment,k),G(i.$$.fragment,k),G(h.$$.fragment,k),G(g.$$.fragment,k),E=!1},d(k){k&&x(e),yt(r),yt(i),yt(h),yt(g)}}}function wr(t){let e,n,r,o,s,i;function a(u){t[8](u)}function l(u){t[9](u)}function c(u){t[10](u)}function h(u){t[11](u)}let f={top:0,bottom:1,threshold:.5,$$slots:{foreground:[vr],background:[kr]},$$scope:{ctx:t}};return t[1]!==void 0&&(f.count=t[1]),t[2]!==void 0&&(f.index=t[2]),t[3]!==void 0&&(f.offset=t[3]),t[4]!==void 0&&(f.progress=t[4]),e=new _r({props:f}),it.push(()=>Ct(e,"count",a)),it.push(()=>Ct(e,"index",l)),it.push(()=>Ct(e,"offset",c)),it.push(()=>Ct(e,"progress",h)),{c(){dt(e.$$.fragment)},l(u){gt(e.$$.fragment,u)},m(u,g){_t(e,u,g),i=!0},p(u,[g]){const m={};g&4196&&(m.$$scope={dirty:g,ctx:u}),!n&&g&2&&(n=!0,m.count=u[1],Rt(()=>n=!1)),!r&&g&4&&(r=!0,m.index=u[2],Rt(()=>r=!1)),!o&&g&8&&(o=!0,m.offset=u[3],Rt(()=>o=!1)),!s&&g&16&&(s=!0,m.progress=u[4],Rt(()=>s=!1)),e.$set(m)},i(u){i||(U(e.$$.fragment,u),i=!0)},o(u){G(e.$$.fragment,u),i=!1},d(u){yt(e,u)}}}function Mr(t,e,n){let r,o,s,i,a,l;const c={blue:"#112b64",beige:"#e8e4d5",orange:"#e39d12",pink:"#be318f"};function h(){a=this.clientWidth,l=this.clientHeight,n(5,a),n(6,l)}function f(v){r=v,n(1,r)}function u(v){o=v,n(2,o)}function g(v){s=v,n(3,s)}function m(v){i=v,n(4,i)}return[c,r,o,s,i,a,l,h,f,u,g,m]}class Er extends lt{constructor(e){super(),ct(this,e,Mr,wr,ft,{themeColors:0})}get themeColors(){return this.$$.ctx[0]}}function Nr(t){let e,n;return e=new Er({}),{c(){dt(e.$$.fragment)},l(r){gt(e.$$.fragment,r)},m(r,o){_t(e,r,o),n=!0},p:$,i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){G(e.$$.fragment,r),n=!1},d(r){yt(e,r)}}}class Tr extends lt{constructor(e){super(),ct(this,e,null,Nr,ft,{})}}export{Tr as default};
