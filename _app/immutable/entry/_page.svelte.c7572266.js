import{S as ct,i as mt,s as ut,k as G,J as X,a as I,l as L,m as w,K,h as y,c as O,p as g,b as F,H as h,g as W,w as ee,d as Q,f as ne,L as Yt,e as Pt,M as re,N as me,r as U,u as B,v as Tt,q as ue,O as fe,n as rt,D as he,P as ft,Q as Ze,E as de,F as _e,G as ge,o as $e,R as tn,x as st,T as Lt,z as dt,A as _t,B as gt,U as Ct,C as yt,V as en}from"../chunks/index.5906a75e.js";function Dt(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function nn(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Be(t){let e,n,r;t.length!==2?(e=Dt,n=(a,l)=>Dt(t(a),l),r=(a,l)=>t(a)-l):(e=t===Dt||t===nn?t:rn,n=t,r=t);function o(a,l,c=0,d=a.length){if(c<d){if(e(l,l)!==0)return d;do{const m=c+d>>>1;n(a[m],l)<0?c=m+1:d=m}while(c<d)}return c}function s(a,l,c=0,d=a.length){if(c<d){if(e(l,l)!==0)return d;do{const m=c+d>>>1;n(a[m],l)<=0?c=m+1:d=m}while(c<d)}return c}function i(a,l,c=0,d=a.length){const m=o(a,l,c,d-1);return m>c&&r(a[m-1],l)>-r(a[m],l)?m-1:m}return{left:o,center:i,right:s}}function rn(){return 0}function on(t){return t===null?NaN:+t}const sn=Be(Dt),an=sn.right;Be(on).center;const ln=an,cn=Math.sqrt(50),mn=Math.sqrt(10),un=Math.sqrt(2);function At(t,e,n){const r=(e-t)/Math.max(0,n),o=Math.floor(Math.log10(r)),s=r/Math.pow(10,o),i=s>=cn?10:s>=mn?5:s>=un?2:1;let a,l,c;return o<0?(c=Math.pow(10,-o)/i,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,o)*i,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?At(t,e,n*2):[a,l,c]}function fn(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const r=e<t,[o,s,i]=r?At(e,t,n):At(t,e,n);if(!(s>=o))return[];const a=s-o+1,l=new Array(a);if(r)if(i<0)for(let c=0;c<a;++c)l[c]=(s-c)/-i;else for(let c=0;c<a;++c)l[c]=(s-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(o+c)/-i;else for(let c=0;c<a;++c)l[c]=(o+c)*i;return l}function Xt(t,e,n){return e=+e,t=+t,n=+n,At(t,e,n)[2]}function hn(t,e,n){e=+e,t=+t,n=+n;const r=e<t,o=r?Xt(e,t,n):Xt(t,e,n);return(r?-1:1)*(o<0?1/-o:o)}function oe(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function We(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Gt(){}var Nt=.7,It=1/Nt,bt="\\s*([+-]?\\d+)\\s*",Et="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",ot="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dn=/^#([0-9a-f]{3,8})$/,_n=new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`),gn=new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`),yn=new RegExp(`^rgba\\(${bt},${bt},${bt},${Et}\\)$`),pn=new RegExp(`^rgba\\(${ot},${ot},${ot},${Et}\\)$`),xn=new RegExp(`^hsl\\(${Et},${ot},${ot}\\)$`),bn=new RegExp(`^hsla\\(${Et},${ot},${ot},${Et}\\)$`),ye={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};oe(Gt,Mt,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:pe,formatHex:pe,formatHex8:kn,formatHsl:vn,formatRgb:xe,toString:xe});function pe(){return this.rgb().formatHex()}function kn(){return this.rgb().formatHex8()}function vn(){return Fe(this).formatHsl()}function xe(){return this.rgb().formatRgb()}function Mt(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=dn.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?be(e):n===3?new Z(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Vt(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Vt(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=_n.exec(t))?new Z(e[1],e[2],e[3],1):(e=gn.exec(t))?new Z(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=yn.exec(t))?Vt(e[1],e[2],e[3],e[4]):(e=pn.exec(t))?Vt(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=xn.exec(t))?we(e[1],e[2]/100,e[3]/100,1):(e=bn.exec(t))?we(e[1],e[2]/100,e[3]/100,e[4]):ye.hasOwnProperty(t)?be(ye[t]):t==="transparent"?new Z(NaN,NaN,NaN,0):null}function be(t){return new Z(t>>16&255,t>>8&255,t&255,1)}function Vt(t,e,n,r){return r<=0&&(t=e=n=NaN),new Z(t,e,n,r)}function wn(t){return t instanceof Gt||(t=Mt(t)),t?(t=t.rgb(),new Z(t.r,t.g,t.b,t.opacity)):new Z}function Kt(t,e,n,r){return arguments.length===1?wn(t):new Z(t,e,n,r??1)}function Z(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}oe(Z,Kt,We(Gt,{brighter(t){return t=t==null?It:Math.pow(It,t),new Z(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Nt:Math.pow(Nt,t),new Z(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Z(lt(this.r),lt(this.g),lt(this.b),Ot(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ke,formatHex:ke,formatHex8:Tn,formatRgb:ve,toString:ve}));function ke(){return`#${at(this.r)}${at(this.g)}${at(this.b)}`}function Tn(){return`#${at(this.r)}${at(this.g)}${at(this.b)}${at((isNaN(this.opacity)?1:this.opacity)*255)}`}function ve(){const t=Ot(this.opacity);return`${t===1?"rgb(":"rgba("}${lt(this.r)}, ${lt(this.g)}, ${lt(this.b)}${t===1?")":`, ${t})`}`}function Ot(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function lt(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function at(t){return t=lt(t),(t<16?"0":"")+t.toString(16)}function we(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new $(t,e,n,r)}function Fe(t){if(t instanceof $)return new $(t.h,t.s,t.l,t.opacity);if(t instanceof Gt||(t=Mt(t)),!t)return new $;if(t instanceof $)return t;t=t.rgb();var e=t.r/255,n=t.g/255,r=t.b/255,o=Math.min(e,n,r),s=Math.max(e,n,r),i=NaN,a=s-o,l=(s+o)/2;return a?(e===s?i=(n-r)/a+(n<r)*6:n===s?i=(r-e)/a+2:i=(e-n)/a+4,a/=l<.5?s+o:2-s-o,i*=60):a=l>0&&l<1?0:i,new $(i,a,l,t.opacity)}function Sn(t,e,n,r){return arguments.length===1?Fe(t):new $(t,e,n,r??1)}function $(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}oe($,Sn,We(Gt,{brighter(t){return t=t==null?It:Math.pow(It,t),new $(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Nt:Math.pow(Nt,t),new $(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,o=2*n-r;return new Z(Wt(t>=240?t-240:t+120,o,r),Wt(t,o,r),Wt(t<120?t+240:t-120,o,r),this.opacity)},clamp(){return new $(Te(this.h),Rt(this.s),Rt(this.l),Ot(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Ot(this.opacity);return`${t===1?"hsl(":"hsla("}${Te(this.h)}, ${Rt(this.s)*100}%, ${Rt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Te(t){return t=(t||0)%360,t<0?t+360:t}function Rt(t){return Math.max(0,Math.min(1,t||0))}function Wt(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const ie=t=>()=>t;function Nn(t,e){return function(n){return t+n*e}}function En(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}function Mn(t){return(t=+t)==1?Ye:function(e,n){return n-e?En(e,n,t):ie(isNaN(e)?n:e)}}function Ye(t,e){var n=e-t;return n?Nn(t,n):ie(isNaN(t)?e:t)}const Se=function t(e){var n=Mn(e);function r(o,s){var i=n((o=Kt(o)).r,(s=Kt(s)).r),a=n(o.g,s.g),l=n(o.b,s.b),c=Ye(o.opacity,s.opacity);return function(d){return o.r=i(d),o.g=a(d),o.b=l(d),o.opacity=c(d),o+""}}return r.gamma=t,r}(1);function Gn(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,r=e.slice(),o;return function(s){for(o=0;o<n;++o)r[o]=t[o]*(1-s)+e[o]*s;return r}}function Ln(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Cn(t,e){var n=e?e.length:0,r=t?Math.min(n,t.length):0,o=new Array(r),s=new Array(n),i;for(i=0;i<r;++i)o[i]=se(t[i],e[i]);for(;i<n;++i)s[i]=e[i];return function(a){for(i=0;i<r;++i)s[i]=o[i](a);return s}}function Vn(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function jt(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function Rn(t,e){var n={},r={},o;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in t?n[o]=se(t[o],e[o]):r[o]=e[o];return function(s){for(o in n)r[o]=n[o](s);return r}}var Jt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ft=new RegExp(Jt.source,"g");function Hn(t){return function(){return t}}function Dn(t){return function(e){return t(e)+""}}function Pn(t,e){var n=Jt.lastIndex=Ft.lastIndex=0,r,o,s,i=-1,a=[],l=[];for(t=t+"",e=e+"";(r=Jt.exec(t))&&(o=Ft.exec(e));)(s=o.index)>n&&(s=e.slice(n,s),a[i]?a[i]+=s:a[++i]=s),(r=r[0])===(o=o[0])?a[i]?a[i]+=o:a[++i]=o:(a[++i]=null,l.push({i,x:jt(r,o)})),n=Ft.lastIndex;return n<e.length&&(s=e.slice(n),a[i]?a[i]+=s:a[++i]=s),a.length<2?l[0]?Dn(l[0].x):Hn(e):(e=l.length,function(c){for(var d=0,m;d<e;++d)a[(m=l[d]).i]=m.x(c);return a.join("")})}function se(t,e){var n=typeof e,r;return e==null||n==="boolean"?ie(e):(n==="number"?jt:n==="string"?(r=Mt(e))?(e=r,Se):Pn:e instanceof Mt?Se:e instanceof Date?Vn:Ln(e)?Gn:Array.isArray(e)?Cn:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Rn:jt)(t,e)}function An(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function In(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function zt(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function kt(t){return t=zt(Math.abs(t)),t?t[1]:NaN}function On(t,e){return function(n,r){for(var o=n.length,s=[],i=0,a=t[0],l=0;o>0&&a>0&&(l+a+1>r&&(a=Math.max(1,r-l)),s.push(n.substring(o-=a,o+a)),!((l+=a+1)>r));)a=t[i=(i+1)%t.length];return s.reverse().join(e)}}function jn(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var zn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function qt(t){if(!(e=zn.exec(t)))throw new Error("invalid format: "+t);var e;return new ae({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}qt.prototype=ae.prototype;function ae(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}ae.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function qn(t){t:for(var e=t.length,n=1,r=-1,o;n<e;++n)switch(t[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+t[n])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(o+1):t}var Xe;function Un(t,e){var n=zt(t,e);if(!n)return t+"";var r=n[0],o=n[1],s=o-(Xe=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,i=r.length;return s===i?r:s>i?r+new Array(s-i+1).join("0"):s>0?r.slice(0,s)+"."+r.slice(s):"0."+new Array(1-s).join("0")+zt(t,Math.max(0,e+s-1))[0]}function Ne(t,e){var n=zt(t,e);if(!n)return t+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const Ee={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:In,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Ne(t*100,e),r:Ne,s:Un,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Me(t){return t}var Ge=Array.prototype.map,Le=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Bn(t){var e=t.grouping===void 0||t.thousands===void 0?Me:On(Ge.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",o=t.decimal===void 0?".":t.decimal+"",s=t.numerals===void 0?Me:jn(Ge.call(t.numerals,String)),i=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(m){m=qt(m);var f=m.fill,_=m.align,u=m.sign,v=m.symbol,N=m.zero,b=m.width,k=m.comma,p=m.precision,E=m.trim,x=m.type;x==="n"?(k=!0,x="g"):Ee[x]||(p===void 0&&(p=12),E=!0,x="g"),(N||f==="0"&&_==="=")&&(N=!0,f="0",_="=");var C=v==="$"?n:v==="#"&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",M=v==="$"?r:/[%p]/.test(x)?i:"",V=Ee[x],D=/[defgprs%]/.test(x);p=p===void 0?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p));function R(T){var j=C,z=M,H,q,P;if(x==="c")z=V(T)+z,T="";else{T=+T;var Y=T<0||1/T<0;if(T=isNaN(T)?l:V(Math.abs(T),p),E&&(T=qn(T)),Y&&+T==0&&u!=="+"&&(Y=!1),j=(Y?u==="("?u:a:u==="-"||u==="("?"":u)+j,z=(x==="s"?Le[8+Xe/3]:"")+z+(Y&&u==="("?")":""),D){for(H=-1,q=T.length;++H<q;)if(P=T.charCodeAt(H),48>P||P>57){z=(P===46?o+T.slice(H+1):T.slice(H))+z,T=T.slice(0,H);break}}}k&&!N&&(T=e(T,1/0));var S=j.length+T.length+z.length,A=S<b?new Array(b-S+1).join(f):"";switch(k&&N&&(T=e(A+T,A.length?b-z.length:1/0),A=""),_){case"<":T=j+T+z+A;break;case"=":T=j+A+T+z;break;case"^":T=A.slice(0,S=A.length>>1)+j+T+z+A.slice(S);break;default:T=A+j+T+z;break}return s(T)}return R.toString=function(){return m+""},R}function d(m,f){var _=c((m=qt(m),m.type="f",m)),u=Math.max(-8,Math.min(8,Math.floor(kt(f)/3)))*3,v=Math.pow(10,-u),N=Le[8+u/3];return function(b){return _(v*b)+N}}return{format:c,formatPrefix:d}}var Ht,Ke,Je;Wn({thousands:",",grouping:[3],currency:["$",""]});function Wn(t){return Ht=Bn(t),Ke=Ht.format,Je=Ht.formatPrefix,Ht}function Fn(t){return Math.max(0,-kt(Math.abs(t)))}function Yn(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(kt(e)/3)))*3-kt(Math.abs(t)))}function Xn(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,kt(e)-kt(t))+1}function Kn(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function Jn(t){return function(){return t}}function Qn(t){return+t}var Ce=[0,1];function pt(t){return t}function Qt(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:Jn(isNaN(e)?NaN:.5)}function Zn(t,e){var n;return t>e&&(n=t,t=e,e=n),function(r){return Math.max(t,Math.min(e,r))}}function $n(t,e,n){var r=t[0],o=t[1],s=e[0],i=e[1];return o<r?(r=Qt(o,r),s=n(i,s)):(r=Qt(r,o),s=n(s,i)),function(a){return s(r(a))}}function tr(t,e,n){var r=Math.min(t.length,e.length)-1,o=new Array(r),s=new Array(r),i=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++i<r;)o[i]=Qt(t[i],t[i+1]),s[i]=n(e[i],e[i+1]);return function(a){var l=ln(t,a,1,r)-1;return s[l](o[l](a))}}function er(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function nr(){var t=Ce,e=Ce,n=se,r,o,s,i=pt,a,l,c;function d(){var f=Math.min(t.length,e.length);return i!==pt&&(i=Zn(t[0],t[f-1])),a=f>2?tr:$n,l=c=null,m}function m(f){return f==null||isNaN(f=+f)?s:(l||(l=a(t.map(r),e,n)))(r(i(f)))}return m.invert=function(f){return i(o((c||(c=a(e,t.map(r),jt)))(f)))},m.domain=function(f){return arguments.length?(t=Array.from(f,Qn),d()):t.slice()},m.range=function(f){return arguments.length?(e=Array.from(f),d()):e.slice()},m.rangeRound=function(f){return e=Array.from(f),n=An,d()},m.clamp=function(f){return arguments.length?(i=f?!0:pt,d()):i!==pt},m.interpolate=function(f){return arguments.length?(n=f,d()):n},m.unknown=function(f){return arguments.length?(s=f,m):s},function(f,_){return r=f,o=_,d()}}function rr(){return nr()(pt,pt)}function or(t,e,n,r){var o=hn(t,e,n),s;switch(r=qt(r??",f"),r.type){case"s":{var i=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(s=Yn(o,i))&&(r.precision=s),Je(r,i)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(s=Xn(o,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=s-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(s=Fn(o))&&(r.precision=s-(r.type==="%")*2);break}}return Ke(r)}function ir(t){var e=t.domain;return t.ticks=function(n){var r=e();return fn(r[0],r[r.length-1],n??10)},t.tickFormat=function(n,r){var o=e();return or(o[0],o[o.length-1],n??10,r)},t.nice=function(n){n==null&&(n=10);var r=e(),o=0,s=r.length-1,i=r[o],a=r[s],l,c,d=10;for(a<i&&(c=i,i=a,a=c,c=o,o=s,s=c);d-- >0;){if(c=Xt(i,a,n),c===l)return r[o]=i,r[s]=a,e(r);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function Zt(){var t=rr();return t.copy=function(){return er(t,Zt())},Kn.apply(t,arguments),ir(t)}function xt(t,e,n){this.k=t,this.x=e,this.y=n}xt.prototype={constructor:xt,scale:function(t){return t===1?this:new xt(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new xt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new xt(1,0,0);xt.prototype;function $t(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Ve(t,{delay:e=0,speed:n,duration:r,easing:o=$t}={}){let s=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(s+=parseInt(i.strokeWidth)),r===void 0?n===void 0?r=800:r=s/n:typeof r=="function"&&(r=r(s)),{delay:e,duration:r,easing:o,css:(a,l)=>`
			stroke-dasharray: ${s};
			stroke-dashoffset: ${l*s};
		`}}const St=[{migrant_rsp_id:4645,values:[{month:0,mig_cost_left:303,remit:168,home_country:"GT",money_us:529},{month:1,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:2,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:3,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:4,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:5,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:6,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:7,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:8,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:9,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:10,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:11,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:12,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:13,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:14,mig_cost_left:0,remit:168,home_country:"GT",money_us:832},{month:15,mig_cost_left:0,remit:168,home_country:"GT",money_us:832}]},{migrant_rsp_id:1358,values:[{month:0,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:1,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:2,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:3,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:4,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:5,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:6,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:7,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:8,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:9,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:10,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:11,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:12,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:13,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:14,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0},{month:15,mig_cost_left:3e3,remit:0,home_country:"SLV",money_us:0}]},{migrant_rsp_id:1743,values:[{month:0,mig_cost_left:11e3,remit:17,home_country:"HND",money_us:0},{month:1,mig_cost_left:10017,remit:17,home_country:"HND",money_us:0},{month:2,mig_cost_left:9034,remit:17,home_country:"HND",money_us:0},{month:3,mig_cost_left:8051,remit:17,home_country:"HND",money_us:0},{month:4,mig_cost_left:7068,remit:17,home_country:"HND",money_us:0},{month:5,mig_cost_left:6085,remit:17,home_country:"HND",money_us:0},{month:6,mig_cost_left:5102,remit:17,home_country:"HND",money_us:0},{month:7,mig_cost_left:4119,remit:17,home_country:"HND",money_us:0},{month:8,mig_cost_left:3136,remit:17,home_country:"HND",money_us:0},{month:9,mig_cost_left:2153,remit:17,home_country:"HND",money_us:0},{month:10,mig_cost_left:1170,remit:17,home_country:"HND",money_us:0},{month:11,mig_cost_left:187,remit:17,home_country:"HND",money_us:796},{month:12,mig_cost_left:0,remit:17,home_country:"HND",money_us:983},{month:13,mig_cost_left:0,remit:17,home_country:"HND",money_us:983},{month:14,mig_cost_left:0,remit:17,home_country:"HND",money_us:983},{month:15,mig_cost_left:0,remit:17,home_country:"HND",money_us:983}]},{migrant_rsp_id:2399,values:[{month:0,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:1,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:2,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:3,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:4,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:5,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:6,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:7,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:8,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:9,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:10,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:11,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:12,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:13,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:14,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0},{month:15,mig_cost_left:59,remit:1e3,home_country:"HND",money_us:0}]},{migrant_rsp_id:853,values:[{month:0,mig_cost_left:421,remit:25,home_country:"GT",money_us:554},{month:1,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:2,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:3,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:4,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:5,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:6,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:7,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:8,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:9,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:10,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:11,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:12,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:13,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:14,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:15,mig_cost_left:0,remit:25,home_country:"GT",money_us:975}]},{migrant_rsp_id:1575,values:[{month:0,mig_cost_left:842,remit:25,home_country:"GT",money_us:133},{month:1,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:2,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:3,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:4,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:5,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:6,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:7,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:8,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:9,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:10,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:11,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:12,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:13,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:14,mig_cost_left:0,remit:25,home_country:"GT",money_us:975},{month:15,mig_cost_left:0,remit:25,home_country:"GT",money_us:975}]},{migrant_rsp_id:3921,values:[{month:0,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:1,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:2,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:3,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:4,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:5,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:6,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:7,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:8,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:9,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:10,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:11,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:12,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:13,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:14,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0},{month:15,mig_cost_left:6e3,remit:0,home_country:"SLV",money_us:0}]},{migrant_rsp_id:810,values:[{month:0,mig_cost_left:1516,remit:200,home_country:"GT",money_us:0},{month:1,mig_cost_left:716,remit:200,home_country:"GT",money_us:84},{month:2,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:3,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:4,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:5,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:6,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:7,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:8,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:9,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:10,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:11,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:12,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:13,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:14,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:15,mig_cost_left:0,remit:200,home_country:"GT",money_us:800}]},{migrant_rsp_id:1620,values:[{month:0,mig_cost_left:1348,remit:200,home_country:"GT",money_us:0},{month:1,mig_cost_left:548,remit:200,home_country:"GT",money_us:252},{month:2,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:3,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:4,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:5,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:6,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:7,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:8,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:9,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:10,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:11,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:12,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:13,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:14,mig_cost_left:0,remit:200,home_country:"GT",money_us:800},{month:15,mig_cost_left:0,remit:200,home_country:"GT",money_us:800}]},{migrant_rsp_id:1083,values:[{month:0,mig_cost_left:7e3,remit:200,home_country:"SLV",money_us:0},{month:1,mig_cost_left:6200,remit:200,home_country:"SLV",money_us:0},{month:2,mig_cost_left:5400,remit:200,home_country:"SLV",money_us:0},{month:3,mig_cost_left:4600,remit:200,home_country:"SLV",money_us:0},{month:4,mig_cost_left:3800,remit:200,home_country:"SLV",money_us:0},{month:5,mig_cost_left:3e3,remit:200,home_country:"SLV",money_us:0},{month:6,mig_cost_left:2200,remit:200,home_country:"SLV",money_us:0},{month:7,mig_cost_left:1400,remit:200,home_country:"SLV",money_us:0},{month:8,mig_cost_left:600,remit:200,home_country:"SLV",money_us:200},{month:9,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:10,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:11,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:12,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:13,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:14,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800},{month:15,mig_cost_left:0,remit:200,home_country:"SLV",money_us:800}]}];function Re(t,e,n){const r=t.slice();return r[22]=e[n],r}function He(t,e,n){const r=t.slice();return r[25]=e[n],r}function De(t,e,n){const r=t.slice();return r[28]=e[n],r[30]=n,r}function Pe(t){let e,n,r=t[0]>1&&Ae(t);return{c(){r&&r.c(),e=Pt()},l(o){r&&r.l(o),e=Pt()},m(o,s){r&&r.m(o,s),F(o,e,s),n=!0},p(o,s){o[0]>1?r?(r.p(o,s),s&1&&W(r,1)):(r=Ae(o),r.c(),W(r,1),r.m(e.parentNode,e)):r&&(ee(),Q(r,1,1,()=>{r=null}),ne())},i(o){n||(W(r),n=!0)},o(o){Q(r),n=!1},d(o){r&&r.d(o),o&&y(e)}}}function Ae(t){let e,n,r=St,o=[];for(let i=0;i<r.length;i+=1)o[i]=Ie(De(t,r,i));const s=i=>Q(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Pt()},l(i){for(let a=0;a<o.length;a+=1)o[a].l(i);e=Pt()},m(i,a){for(let l=0;l<o.length;l+=1)o[l].m(i,a);F(i,e,a),n=!0},p(i,a){if(a&768){r=St;let l;for(l=0;l<r.length;l+=1){const c=De(i,r,l);o[l]?(o[l].p(c,a),W(o[l],1)):(o[l]=Ie(c),o[l].c(),W(o[l],1),o[l].m(e.parentNode,e))}for(ee(),l=r.length;l<o.length;l+=1)s(l);ne()}},i(i){if(!n){for(let a=0;a<r.length;a+=1)W(o[a]);n=!0}},o(i){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)Q(o[a]);n=!1},d(i){Yt(o,i),i&&y(e)}}}function Ie(t){let e,n,r;return{c(){e=X("polyline"),this.h()},l(o){e=K(o,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0}),w(e).forEach(y),this.h()},h(){g(e,"points",t[9](t[28].values)),g(e,"fill","none"),g(e,"stroke",t[8](t[28])),g(e,"stroke-width","3")},m(o,s){F(o,e,s),r=!0},p(o,s){t=o},i(o){r||(re(()=>{n||(n=me(e,Ve,{duration:5e3,easing:$t},!0)),n.run(1)}),r=!0)},o(o){n||(n=me(e,Ve,{duration:5e3,easing:$t},!1)),n.run(0),r=!1},d(o){o&&y(e),o&&n&&n.end()}}}function Oe(t){let e,n,r,o=t[25]+"",s,i;return{c(){e=X("g"),n=X("line"),r=X("text"),s=U(o),this.h()},l(a){e=K(a,"g",{class:!0,opacity:!0,transform:!0});var l=w(e);n=K(l,"line",{stroke:!0,y2:!0}),w(n).forEach(y),r=K(l,"text",{dy:!0,fill:!0,y:!0,x:!0,"text-anchor":!0});var c=w(r);s=B(c,o),c.forEach(y),l.forEach(y),this.h()},h(){g(n,"stroke","black"),g(n,"y2","6"),g(r,"dy","0.71em"),g(r,"fill","black"),g(r,"y","10"),g(r,"x","-5"),g(r,"text-anchor","middle"),g(e,"class","tick"),g(e,"opacity","1"),g(e,"transform",i="translate("+t[5](t[25])+",0)")},m(a,l){F(a,e,l),h(e,n),h(e,r),h(r,s)},p(a,l){l&4&&o!==(o=a[25]+"")&&Tt(s,o),l&36&&i!==(i="translate("+a[5](a[25])+",0)")&&g(e,"transform",i)},d(a){a&&y(e)}}}function je(t){let e,n,r,o="$"+t[22],s,i;return{c(){e=X("g"),n=X("line"),r=X("text"),s=U(o),this.h()},l(a){e=K(a,"g",{class:!0,opacity:!0,transform:!0});var l=w(e);n=K(l,"line",{stroke:!0,x2:!0}),w(n).forEach(y),r=K(l,"text",{dy:!0,fill:!0,x:!0,"text-anchor":!0});var c=w(r);s=B(c,o),c.forEach(y),l.forEach(y),this.h()},h(){g(n,"stroke","black"),g(n,"x2","-5"),g(r,"dy","0.32em"),g(r,"fill","black"),g(r,"x","-"+10),g(r,"text-anchor","end"),g(e,"class","tick"),g(e,"opacity","1"),g(e,"transform",i="translate(0,"+t[4](t[22])+")")},m(a,l){F(a,e,l),h(e,n),h(e,r),h(r,s)},p(a,l){l&8&&o!==(o="$"+a[22])&&Tt(s,o),l&24&&i!==(i="translate(0,"+a[4](a[22])+")")&&g(e,"transform",i)},d(a){a&&y(e)}}}function sr(t){let e,n,r,o,s,i,a,l,c,d,m,f,_,u=t[0]>0&&Pe(t),v=t[2],N=[];for(let p=0;p<v.length;p+=1)N[p]=Oe(He(t,v,p));let b=t[3],k=[];for(let p=0;p<b.length;p+=1)k[p]=je(Re(t,b,p));return{c(){e=G("div"),n=X("svg"),r=X("g"),o=X("line"),i=X("line"),l=X("g"),u&&u.c(),c=X("g");for(let p=0;p<N.length;p+=1)N[p].c();d=X("g");for(let p=0;p<k.length;p+=1)k[p].c();m=I(),f=G("div"),this.h()},l(p){e=L(p,"DIV",{class:!0});var E=w(e);n=K(E,"svg",{width:!0,height:!0,id:!0});var x=w(n);r=K(x,"g",{});var C=w(r);o=K(C,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0}),w(o).forEach(y),i=K(C,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0,text:!0}),w(i).forEach(y),C.forEach(y),l=K(x,"g",{});var M=w(l);u&&u.l(M),M.forEach(y),c=K(x,"g",{transform:!0});var V=w(c);for(let R=0;R<N.length;R+=1)N[R].l(V);V.forEach(y),d=K(x,"g",{transform:!0});var D=w(d);for(let R=0;R<k.length;R+=1)k[R].l(D);D.forEach(y),x.forEach(y),E.forEach(y),m=O(p),f=L(p,"DIV",{id:!0}),w(f).forEach(y),this.h()},h(){g(o,"x1",t[6].left),g(o,"x2",te-t[6].right),g(o,"y1",ht-t[6].bottom),g(o,"y2",ht-t[6].bottom),g(o,"stroke",s=t[1].blue),g(o,"stroke-width","2"),g(o,"class","axis"),g(i,"x1",t[6].left),g(i,"x2",t[6].left),g(i,"y1",t[6].top),g(i,"y2",ht-t[6].bottom),g(i,"stroke",a=t[1].blue),g(i,"stroke-width","2"),g(i,"class","axis"),g(i,"text","Cost of Migration (USD)"),g(c,"transform","translate(0, "+(ht-t[6].bottom)+")"),g(d,"transform","translate("+t[6].left+", 0)"),g(n,"width",te),g(n,"height",ht),g(n,"id",t[7]),g(e,"class","LineChart2 svelte-14o9rub"),g(f,"id","chart")},m(p,E){F(p,e,E),h(e,n),h(n,r),h(r,o),h(r,i),h(n,l),u&&u.m(l,null),h(n,c);for(let x=0;x<N.length;x+=1)N[x].m(c,null);h(n,d);for(let x=0;x<k.length;x+=1)k[x].m(d,null);F(p,m,E),F(p,f,E),_=!0},p(p,[E]){if((!_||E&2&&s!==(s=p[1].blue))&&g(o,"stroke",s),(!_||E&2&&a!==(a=p[1].blue))&&g(i,"stroke",a),p[0]>0?u?(u.p(p,E),E&1&&W(u,1)):(u=Pe(p),u.c(),W(u,1),u.m(l,null)):u&&(ee(),Q(u,1,1,()=>{u=null}),ne()),E&36){v=p[2];let x;for(x=0;x<v.length;x+=1){const C=He(p,v,x);N[x]?N[x].p(C,E):(N[x]=Oe(C),N[x].c(),N[x].m(c,null))}for(;x<N.length;x+=1)N[x].d(1);N.length=v.length}if(E&24){b=p[3];let x;for(x=0;x<b.length;x+=1){const C=Re(p,b,x);k[x]?k[x].p(C,E):(k[x]=je(C),k[x].c(),k[x].m(d,null))}for(;x<k.length;x+=1)k[x].d(1);k.length=b.length}},i(p){_||(W(u),_=!0)},o(p){Q(u),_=!1},d(p){p&&y(e),u&&u.d(),Yt(N,p),Yt(k,p),p&&y(m),p&&y(f)}}}let te=600,ht=400,ze=10;function ar(t,e,n){let r,o,{index:s,width:i,height:a,projection:l,themeColors:c}=e;const d={top:50,left:50,right:50,bottom:50},m=St.flatMap(M=>M.values.map(V=>V.month)),f=[...new Set(m)],_=Math.min(...f),u=Math.max(...f),v=St.flatMap(M=>M.values.map(V=>V.mig_cost_left)),N=Math.min(...v),b=Math.max(...v);let k=[],p=[];const E="svg-container-"+Math.random()*1e6;function x(M){return M.values.every(V=>V.remit==0)&&M.values.every(V=>V.money_us==0)?c.orange:c.blue}function C(M){return M.map(function(V){return r(V.month)+","+o(V.mig_cost_left)}).join(" ")}return t.$$set=M=>{"index"in M&&n(0,s=M.index),"width"in M&&n(10,i=M.width),"height"in M&&n(11,a=M.height),"projection"in M&&n(12,l=M.projection),"themeColors"in M&&n(1,c=M.themeColors)},t.$$.update=()=>{if(t.$$.dirty&12&&(n(2,k=[]),n(3,p=[]),St.length>1)){let M=[Math.round(_),Math.round(u+1)],V=Math.floor((M[1]-M[0])/ze);for(let T=M[0];T<M[1];T=T+Math.max(1,V))k.push(T);let D=[Math.round(N),Math.round(b+1)],R=Math.floor((D[1]-D[0])/ze);for(let T=D[0];T<D[1];T=T+Math.max(1,R))p.push(T)}},n(5,r=Zt().domain([_,u]).range([d.left,te-d.right])),n(4,o=Zt().domain([N,b]).range([ht-d.bottom,d.top])),[s,c,k,p,o,r,d,E,x,C,i,a,l]}class lr extends ct{constructor(e){super(),mt(this,e,ar,sr,ut,{index:0,width:10,height:11,projection:12,themeColors:1})}}function cr(t){let e,n,r,o,s,i,a,l,c,d,m,f,_,u,v,N,b,k,p,E,x,C,M,V,D,R,T,j,z;return{c(){e=G("main"),n=G("html"),r=G("head"),o=G("meta"),s=I(),i=G("style"),a=U(`.node rect {
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
                }`),l=I(),c=G("body"),d=G("div"),m=G("p"),f=U("Original Occupation"),_=I(),u=G("p"),v=U("US Occupation"),N=I(),b=G("p"),k=G("canvas"),p=I(),E=X("svg"),x=I(),C=G("script"),V=I(),D=G("script"),T=I(),j=G("script"),z=U(`var margin = { top: 10, right: 10, bottom: 10, left: 10 },
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
                    }`),this.h()},l(H){e=L(H,"MAIN",{});var q=w(e);n=L(q,"HTML",{lang:!0});var P=w(n);r=L(P,"HEAD",{});var Y=w(r);o=L(Y,"META",{charset:!0}),s=O(Y),i=L(Y,"STYLE",{});var S=w(i);a=B(S,`.node rect {
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
                }`),S.forEach(y),Y.forEach(y),l=O(P),c=L(P,"BODY",{});var A=w(c);d=L(A,"DIV",{class:!0});var tt=w(d);m=L(tt,"P",{style:!0});var et=w(m);f=B(et,"Original Occupation"),et.forEach(y),_=O(tt),u=L(tt,"P",{style:!0});var vt=w(u);v=B(vt,"US Occupation"),vt.forEach(y),tt.forEach(y),N=O(A),b=L(A,"P",{id:!0});var J=w(b);k=L(J,"CANVAS",{width:!0,height:!0}),w(k).forEach(y),p=O(J),E=K(J,"svg",{width:!0,height:!0}),w(E).forEach(y),x=O(J),C=L(J,"SCRIPT",{src:!0,charset:!0,type:!0});var it=w(C);it.forEach(y),V=O(J),D=L(J,"SCRIPT",{src:!0});var Bt=w(D);Bt.forEach(y),T=O(J),j=L(J,"SCRIPT",{type:!0});var wt=w(j);z=B(wt,`var margin = { top: 10, right: 10, bottom: 10, left: 10 },
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
                    }`),wt.forEach(y),J.forEach(y),A.forEach(y),P.forEach(y),q.forEach(y),this.h()},h(){g(o,"charset","utf-8"),ue(m,"float","left"),ue(u,"float","right"),g(d,"class","sidebar"),g(k,"width","500"),g(k,"height","1100"),g(E,"width","500"),g(E,"height","1000"),fe(C.src,M="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js")||g(C,"src",M),g(C,"charset","utf-8"),g(C,"type","text/javascript"),fe(D.src,R="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/sankey.js")||g(D,"src",R),g(j,"type","text/javascript"),g(b,"id","sankey"),g(n,"lang","en")},m(H,q){F(H,e,q),h(e,n),h(n,r),h(r,o),h(r,s),h(r,i),h(i,a),h(n,l),h(n,c),h(c,d),h(d,m),h(m,f),h(d,_),h(d,u),h(u,v),h(c,N),h(c,b),h(b,k),h(b,p),h(b,E),h(b,x),h(b,C),h(b,V),h(b,D),h(b,T),h(b,j),h(j,z)},p:rt,i:rt,o:rt,d(H){H&&y(e)}}}function mr(t,e,n){let{name:r="World"}=e,{index:o}=e;return t.$$set=s=>{"name"in s&&n(0,r=s.name),"index"in s&&n(1,o=s.index)},[r,o]}class ur extends ct{constructor(e){super(),mt(this,e,mr,cr,ut,{name:0,index:1})}}const{window:Qe}=tn,fr=t=>({}),qe=t=>({}),hr=t=>({}),Ue=t=>({});function dr(t){let e,n,r,o,s,i,a,l,c;re(t[21]);const d=t[20].background,m=he(d,t,t[19],Ue),f=t[20].foreground,_=he(f,t,t[19],qe);return{c(){e=G("svelte-scroller-outer"),n=G("svelte-scroller-background-container"),r=G("svelte-scroller-background"),m&&m.c(),s=I(),i=G("svelte-scroller-foreground"),_&&_.c(),this.h()},l(u){e=L(u,"SVELTE-SCROLLER-OUTER",{class:!0});var v=w(e);n=L(v,"SVELTE-SCROLLER-BACKGROUND-CONTAINER",{class:!0,style:!0});var N=w(n);r=L(N,"SVELTE-SCROLLER-BACKGROUND",{class:!0});var b=w(r);m&&m.l(b),b.forEach(y),N.forEach(y),s=O(v),i=L(v,"SVELTE-SCROLLER-FOREGROUND",{class:!0});var k=w(i);_&&_.l(k),k.forEach(y),v.forEach(y),this.h()},h(){ft(r,"class","svelte-xdbafy"),ft(n,"class","background-container svelte-xdbafy"),ft(n,"style",o=""+(t[5]+t[4])),ft(i,"class","svelte-xdbafy"),ft(e,"class","svelte-xdbafy")},m(u,v){F(u,e,v),h(e,n),h(n,r),m&&m.m(r,null),t[22](r),h(e,s),h(e,i),_&&_.m(i,null),t[23](i),t[24](e),a=!0,l||(c=Ze(Qe,"resize",t[21]),l=!0)},p(u,v){m&&m.p&&(!a||v[0]&524288)&&de(m,d,u,u[19],a?ge(d,u[19],v,hr):_e(u[19]),Ue),(!a||v[0]&48&&o!==(o=""+(u[5]+u[4])))&&ft(n,"style",o),_&&_.p&&(!a||v[0]&524288)&&de(_,f,u,u[19],a?ge(f,u[19],v,fr):_e(u[19]),qe)},i(u){a||(W(m,u),W(_,u),a=!0)},o(u){Q(m,u),Q(_,u),a=!1},d(u){u&&y(e),m&&m.d(u),t[22](null),_&&_.d(u),t[23](null),t[24](null),l=!1,c()}}}const nt=[];let Ut;if(typeof window<"u"){const t=()=>nt.forEach(e=>e());window.addEventListener("scroll",t),window.addEventListener("resize",t)}if(typeof IntersectionObserver<"u"){const t=new Map,e=new IntersectionObserver((n,r)=>{n.forEach(o=>{const s=t.get(o.target),i=nt.indexOf(s);o.isIntersecting?i===-1&&nt.push(s):(s(),i!==-1&&nt.splice(i,1))})},{rootMargin:"400px 0px"});Ut={add:({outer:n,update:r})=>{const{top:o,bottom:s}=n.getBoundingClientRect();o<window.innerHeight&&s>0&&nt.push(r),t.set(n,r),e.observe(n)},remove:({outer:n,update:r})=>{const o=nt.indexOf(r);o!==-1&&nt.splice(o,1),t.delete(n),e.unobserve(n)}}}else Ut={add:({update:t})=>{nt.push(t)},remove:({update:t})=>{const e=nt.indexOf(t);e!==-1&&nt.splice(e,1)}};function _r(t,e,n){let r,o,s,i,a,{$$slots:l={},$$scope:c}=e,{top:d=0}=e,{bottom:m=1}=e,{threshold:f=.5}=e,{query:_="section"}=e,{parallax:u=!1}=e,{index:v=0}=e,{count:N=0}=e,{offset:b=0}=e,{progress:k=0}=e,{visible:p=!1}=e,E,x,C,M,V,D=0,R,T=0,j=1;$e(()=>{V=x.querySelectorAll(_),n(7,N=V.length),z();const S={outer:E,update:z};return Ut.add(S),()=>Ut.remove(S)});function z(){if(!x)return;const S=E.getBoundingClientRect();M=S.left,n(18,j=S.right-M);const A=x.getBoundingClientRect(),tt=C.getBoundingClientRect();n(10,p=A.top<D&&A.bottom>0);const et=A.bottom-A.top,vt=tt.bottom-tt.top,J=o-r;n(9,k=(r-A.top)/(et-J)),k<=0?(n(17,T=0),n(16,R=!1)):k>=1?(n(17,T=u?et-vt:et-J),n(16,R=!1)):(n(17,T=u?Math.round(r-k*(vt-J)):r),n(16,R=!0));for(let it=0;it<V.length;it++){const Bt=V[it],{top:wt}=Bt.getBoundingClientRect(),le=V[it+1],ce=le?le.getBoundingClientRect().top:A.bottom;if(n(8,b=(s-wt)/(ce-wt)),ce>=s){n(6,v=it);break}}}function H(){n(0,D=Qe.innerHeight)}function q(S){st[S?"unshift":"push"](()=>{C=S,n(3,C)})}function P(S){st[S?"unshift":"push"](()=>{x=S,n(2,x)})}function Y(S){st[S?"unshift":"push"](()=>{E=S,n(1,E)})}return t.$$set=S=>{"top"in S&&n(11,d=S.top),"bottom"in S&&n(12,m=S.bottom),"threshold"in S&&n(13,f=S.threshold),"query"in S&&n(14,_=S.query),"parallax"in S&&n(15,u=S.parallax),"index"in S&&n(6,v=S.index),"count"in S&&n(7,N=S.count),"offset"in S&&n(8,b=S.offset),"progress"in S&&n(9,k=S.progress),"visible"in S&&n(10,p=S.visible),"$$scope"in S&&n(19,c=S.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2049&&(r=Math.round(d*D)),t.$$.dirty[0]&4097&&(o=Math.round(m*D)),t.$$.dirty[0]&8193&&(s=Math.round(f*D)),t.$$.dirty[0]&47104&&z(),t.$$.dirty[0]&196608&&n(5,i=`
		position: ${R?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${T}px);
		z-index: ${1};
	`),t.$$.dirty[0]&327680&&n(4,a=R?`width:${j}px;`:"")},[D,E,x,C,a,i,v,N,b,k,p,d,m,f,_,u,R,T,j,c,l,H,q,P,Y]}class gr extends ct{constructor(e){super(),mt(this,e,_r,dr,ut,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}function yr(t){let e,n,r,o,s,i,a,l,c,d,m,f;return{c(){e=G("h2"),n=U("RemitReturn"),r=I(),o=G("div"),s=G("p"),i=U(`Economic insecurity is the leading cause of migration. Despite the costs
        - both financial and emotional - associated with migrating from the
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United
        States, indviduals take on this burden year after year in search of
        better salaries, working conditions, and opportunities to send money
        home. Migrants who end up working in the destination country long enough
        not only offset the cost of their migration and send remittances home,
        but also spend money in the United States (for food, housing, etc),
        invigorating the economy.`),a=I(),l=G("p"),c=U(`The data displayed here is a subset of the class data. This subset
        includes 454 individuals who reported a cost of migration and whose
        destination was the United States. Of these, 349 currently reside in the
        USA and send remittances back to their families (as of the time of the
        survey, April 2021). 105 paid the cost of migration but either did not
        make it to the USA or were sent back.`),d=I(),m=G("p"),f=U(`Is the cost worth it? At what point do working migrants offset that
        cost? How much are they contributing to the US economy depending on what
        jobs are available? To better understand the tradeoff between the cost
        of migration, remittances, and money entering the USA, we have
        identified 10 migrants who represent a statistically similar sample of
        this larger group.`),this.h()},l(_){e=L(_,"H2",{});var u=w(e);n=B(u,"RemitReturn"),u.forEach(y),r=O(_),o=L(_,"DIV",{class:!0});var v=w(o);s=L(v,"P",{});var N=w(s);i=B(N,`Economic insecurity is the leading cause of migration. Despite the costs
        - both financial and emotional - associated with migrating from the
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United
        States, indviduals take on this burden year after year in search of
        better salaries, working conditions, and opportunities to send money
        home. Migrants who end up working in the destination country long enough
        not only offset the cost of their migration and send remittances home,
        but also spend money in the United States (for food, housing, etc),
        invigorating the economy.`),N.forEach(y),a=O(v),l=L(v,"P",{});var b=w(l);c=B(b,`The data displayed here is a subset of the class data. This subset
        includes 454 individuals who reported a cost of migration and whose
        destination was the United States. Of these, 349 currently reside in the
        USA and send remittances back to their families (as of the time of the
        survey, April 2021). 105 paid the cost of migration but either did not
        make it to the USA or were sent back.`),b.forEach(y),d=O(v),m=L(v,"P",{});var k=w(m);f=B(k,`Is the cost worth it? At what point do working migrants offset that
        cost? How much are they contributing to the US economy depending on what
        jobs are available? To better understand the tradeoff between the cost
        of migration, remittances, and money entering the USA, we have
        identified 10 migrants who represent a statistically similar sample of
        this larger group.`),k.forEach(y),v.forEach(y),this.h()},h(){g(o,"class","IntroText svelte-1khzzid")},m(_,u){F(_,e,u),h(e,n),F(_,r,u),F(_,o,u),h(o,s),h(s,i),h(o,a),h(o,l),h(l,c),h(o,d),h(o,m),h(m,f)},p:rt,i:rt,o:rt,d(_){_&&y(e),_&&y(r),_&&y(o)}}}class pr extends ct{constructor(e){super(),mt(this,e,null,yr,ut,{})}}function xr(t){let e,n,r,o,s,i;return{c(){e=G("div"),n=G("p"),r=U(`As seen in the above graph, the time it takes to pay off the cost of the
        migration depends on the job secured by the migrant in the destination
        country and the amount of money they send back as remittances every
        month. It can take as little as 1 month to work off the cost of the
        migration and begin contributing to the economy, but for more expensive
        migrations, the payback period can be as long as a year.`),o=I(),s=G("p"),i=U(`The orange bars represent two migrants who paid thousands of US
        dollars to migrate but were sent back to their country of origin. They
        never had a chance to pay off the amount they invested in the migration.
        They never had the opportunity to work in the US, contribute to its
        economy, and send money back home.`),this.h()},l(a){e=L(a,"DIV",{class:!0});var l=w(e);n=L(l,"P",{});var c=w(n);r=B(c,`As seen in the above graph, the time it takes to pay off the cost of the
        migration depends on the job secured by the migrant in the destination
        country and the amount of money they send back as remittances every
        month. It can take as little as 1 month to work off the cost of the
        migration and begin contributing to the economy, but for more expensive
        migrations, the payback period can be as long as a year.`),c.forEach(y),o=O(l),s=L(l,"P",{});var d=w(s);i=B(d,`The orange bars represent two migrants who paid thousands of US
        dollars to migrate but were sent back to their country of origin. They
        never had a chance to pay off the amount they invested in the migration.
        They never had the opportunity to work in the US, contribute to its
        economy, and send money back home.`),d.forEach(y),l.forEach(y),this.h()},h(){g(e,"class","MiddleText svelte-1sgrxv0")},m(a,l){F(a,e,l),h(e,n),h(n,r),h(e,o),h(e,s),h(s,i)},p:rt,i:rt,o:rt,d(a){a&&y(e)}}}class br extends ct{constructor(e){super(),mt(this,e,null,xr,ut,{})}}function kr(t){let e,n,r,o,s,i=t[2]+1+"",a,l,c,d,m,f,_,u,v,N,b,k,p,E,x,C,M,V,D,R,T,j,z;return{c(){e=G("div"),n=G("div"),r=G("p"),o=U("current section: "),s=G("strong"),a=U(i),l=U("/"),c=U(t[1]),d=I(),m=G("progress"),_=I(),u=G("p"),v=U("offset in current section"),N=I(),b=G("progress"),p=I(),E=G("p"),x=U("total progress"),C=I(),M=G("progress"),D=I(),R=G("p"),T=U("current index: "),j=U(t[2]),this.h()},l(H){e=L(H,"DIV",{class:!0,slot:!0});var q=w(e);n=L(q,"DIV",{class:!0});var P=w(n);r=L(P,"P",{});var Y=w(r);o=B(Y,"current section: "),s=L(Y,"STRONG",{});var S=w(s);a=B(S,i),l=B(S,"/"),c=B(S,t[1]),S.forEach(y),Y.forEach(y),d=O(P),m=L(P,"PROGRESS",{}),w(m).forEach(y),_=O(P),u=L(P,"P",{});var A=w(u);v=B(A,"offset in current section"),A.forEach(y),N=O(P),b=L(P,"PROGRESS",{}),w(b).forEach(y),p=O(P),E=L(P,"P",{});var tt=w(E);x=B(tt,"total progress"),tt.forEach(y),C=O(P),M=L(P,"PROGRESS",{}),w(M).forEach(y),D=O(P),R=L(P,"P",{});var et=w(R);T=B(et,"current index: "),j=B(et,t[2]),et.forEach(y),P.forEach(y),q.forEach(y),this.h()},h(){m.value=f=t[1]?(t[2]+1)/t[1]:0,b.value=k=t[3]||0,M.value=V=t[4]||0,g(n,"class","progress-bars svelte-6iolnr"),g(e,"class","background svelte-6iolnr"),g(e,"slot","background"),re(()=>t[7].call(e))},m(H,q){F(H,e,q),h(e,n),h(n,r),h(r,o),h(r,s),h(s,a),h(s,l),h(s,c),h(n,d),h(n,m),h(n,_),h(n,u),h(u,v),h(n,N),h(n,b),h(n,p),h(n,E),h(E,x),h(n,C),h(n,M),h(n,D),h(n,R),h(R,T),h(R,j),z=en(e,t[7].bind(e))},p(H,q){q&4&&i!==(i=H[2]+1+"")&&Tt(a,i),q&2&&Tt(c,H[1]),q&6&&f!==(f=H[1]?(H[2]+1)/H[1]:0)&&(m.value=f),q&8&&k!==(k=H[3]||0)&&(b.value=k),q&16&&V!==(V=H[4]||0)&&(M.value=V),q&4&&Tt(j,H[2])},d(H){H&&y(e),z()}}}function vr(t){let e,n,r,o,s,i,a,l,c,d,m,f,_,u,v,N;return r=new pr({}),i=new ur({props:{index:t[2]}}),d=new lr({props:{index:t[2],width:t[5],height:t[6],themeColors:t[0]}}),_=new br({}),{c(){e=G("div"),n=G("section"),dt(r.$$.fragment),o=I(),s=G("section"),dt(i.$$.fragment),a=I(),l=G("section"),c=U(`Cost of migration projected over time (months).
      `),dt(d.$$.fragment),m=I(),f=G("section"),dt(_.$$.fragment),u=I(),v=G("section"),this.h()},l(b){e=L(b,"DIV",{class:!0,slot:!0});var k=w(e);n=L(k,"SECTION",{class:!0});var p=w(n);_t(r.$$.fragment,p),p.forEach(y),o=O(k),s=L(k,"SECTION",{class:!0});var E=w(s);_t(i.$$.fragment,E),E.forEach(y),a=O(k),l=L(k,"SECTION",{class:!0});var x=w(l);c=B(x,`Cost of migration projected over time (months).
      `),_t(d.$$.fragment,x),x.forEach(y),m=O(k),f=L(k,"SECTION",{class:!0});var C=w(f);_t(_.$$.fragment,C),C.forEach(y),u=O(k),v=L(k,"SECTION",{class:!0});var M=w(v);M.forEach(y),k.forEach(y),this.h()},h(){g(n,"class","svelte-6iolnr"),g(s,"class","svelte-6iolnr"),g(l,"class","svelte-6iolnr"),g(f,"class","svelte-6iolnr"),g(v,"class","svelte-6iolnr"),g(e,"class","foreground svelte-6iolnr"),g(e,"slot","foreground")},m(b,k){F(b,e,k),h(e,n),gt(r,n,null),h(e,o),h(e,s),gt(i,s,null),h(e,a),h(e,l),h(l,c),gt(d,l,null),h(e,m),h(e,f),gt(_,f,null),h(e,u),h(e,v),N=!0},p(b,k){const p={};k&4&&(p.index=b[2]),i.$set(p);const E={};k&4&&(E.index=b[2]),k&32&&(E.width=b[5]),k&64&&(E.height=b[6]),d.$set(E)},i(b){N||(W(r.$$.fragment,b),W(i.$$.fragment,b),W(d.$$.fragment,b),W(_.$$.fragment,b),N=!0)},o(b){Q(r.$$.fragment,b),Q(i.$$.fragment,b),Q(d.$$.fragment,b),Q(_.$$.fragment,b),N=!1},d(b){b&&y(e),yt(r),yt(i),yt(d),yt(_)}}}function wr(t){let e,n,r,o,s,i;function a(f){t[8](f)}function l(f){t[9](f)}function c(f){t[10](f)}function d(f){t[11](f)}let m={top:0,bottom:1,threshold:.5,$$slots:{foreground:[vr],background:[kr]},$$scope:{ctx:t}};return t[1]!==void 0&&(m.count=t[1]),t[2]!==void 0&&(m.index=t[2]),t[3]!==void 0&&(m.offset=t[3]),t[4]!==void 0&&(m.progress=t[4]),e=new gr({props:m}),st.push(()=>Lt(e,"count",a)),st.push(()=>Lt(e,"index",l)),st.push(()=>Lt(e,"offset",c)),st.push(()=>Lt(e,"progress",d)),{c(){dt(e.$$.fragment)},l(f){_t(e.$$.fragment,f)},m(f,_){gt(e,f,_),i=!0},p(f,[_]){const u={};_&4222&&(u.$$scope={dirty:_,ctx:f}),!n&&_&2&&(n=!0,u.count=f[1],Ct(()=>n=!1)),!r&&_&4&&(r=!0,u.index=f[2],Ct(()=>r=!1)),!o&&_&8&&(o=!0,u.offset=f[3],Ct(()=>o=!1)),!s&&_&16&&(s=!0,u.progress=f[4],Ct(()=>s=!1)),e.$set(u)},i(f){i||(W(e.$$.fragment,f),i=!0)},o(f){Q(e.$$.fragment,f),i=!1},d(f){yt(e,f)}}}function Tr(t,e,n){let r,o,s,i,a,l;const c={blue:"#112b64",beige:"#e8e4d5",orange:"#e39d12",pink:"#be318f"};function d(){a=this.clientWidth,l=this.clientHeight,n(5,a),n(6,l)}function m(v){r=v,n(1,r)}function f(v){o=v,n(2,o)}function _(v){s=v,n(3,s)}function u(v){i=v,n(4,i)}return[c,r,o,s,i,a,l,d,m,f,_,u]}class Sr extends ct{constructor(e){super(),mt(this,e,Tr,wr,ut,{themeColors:0})}get themeColors(){return this.$$.ctx[0]}}function Nr(t){let e,n;return e=new Sr({}),{c(){dt(e.$$.fragment)},l(r){_t(e.$$.fragment,r)},m(r,o){gt(e,r,o),n=!0},p:rt,i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){Q(e.$$.fragment,r),n=!1},d(r){yt(e,r)}}}class Mr extends ct{constructor(e){super(),mt(this,e,null,Nr,ut,{})}}export{Mr as default};
