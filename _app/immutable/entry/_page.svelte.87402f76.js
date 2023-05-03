import{S as rt,i as ot,s as it,k as C,J as B,a as U,l as A,m as w,K as V,h as p,c as q,p as g,b as D,H as _,g as H,w as te,d as W,f as ee,L as Gt,e as Lt,M as ne,N as ce,r as F,u as G,v as Ve,q as fe,O as me,n as J,D as ue,P as _t,Q as Ze,E as he,F as de,G as ge,o as $e,R as tn,x as ut,T as Ct,z as lt,A as ct,B as ft,U as At,C as mt,V as en}from"../chunks/index.5906a75e.js";function jt(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function nn(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function We(t){let e,n,r;t.length!==2?(e=jt,n=(a,l)=>jt(t(a),l),r=(a,l)=>t(a)-l):(e=t===jt||t===nn?t:rn,n=t,r=t);function o(a,l,c=0,d=a.length){if(c<d){if(e(l,l)!==0)return d;do{const f=c+d>>>1;n(a[f],l)<0?c=f+1:d=f}while(c<d)}return c}function s(a,l,c=0,d=a.length){if(c<d){if(e(l,l)!==0)return d;do{const f=c+d>>>1;n(a[f],l)<=0?c=f+1:d=f}while(c<d)}return c}function i(a,l,c=0,d=a.length){const f=o(a,l,c,d-1);return f>c&&r(a[f-1],l)>-r(a[f],l)?f-1:f}return{left:o,center:i,right:s}}function rn(){return 0}function on(t){return t===null?NaN:+t}const sn=We(jt),an=sn.right;We(on).center;const ln=an,cn=Math.sqrt(50),fn=Math.sqrt(10),mn=Math.sqrt(2);function Ot(t,e,n){const r=(e-t)/Math.max(0,n),o=Math.floor(Math.log10(r)),s=r/Math.pow(10,o),i=s>=cn?10:s>=fn?5:s>=mn?2:1;let a,l,c;return o<0?(c=Math.pow(10,-o)/i,a=Math.round(t*c),l=Math.round(e*c),a/c<t&&++a,l/c>e&&--l,c=-c):(c=Math.pow(10,o)*i,a=Math.round(t/c),l=Math.round(e/c),a*c<t&&++a,l*c>e&&--l),l<a&&.5<=n&&n<2?Ot(t,e,n*2):[a,l,c]}function un(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const r=e<t,[o,s,i]=r?Ot(e,t,n):Ot(t,e,n);if(!(s>=o))return[];const a=s-o+1,l=new Array(a);if(r)if(i<0)for(let c=0;c<a;++c)l[c]=(s-c)/-i;else for(let c=0;c<a;++c)l[c]=(s-c)*i;else if(i<0)for(let c=0;c<a;++c)l[c]=(o+c)/-i;else for(let c=0;c<a;++c)l[c]=(o+c)*i;return l}function Yt(t,e,n){return e=+e,t=+t,n=+n,Ot(t,e,n)[2]}function hn(t,e,n){e=+e,t=+t,n=+n;const r=e<t,o=r?Yt(e,t,n):Yt(t,e,n);return(r?-1:1)*(o<0?1/-o:o)}function re(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Fe(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Tt(){}var Et=.7,Ut=1/Et,vt="\\s*([+-]?\\d+)\\s*",Nt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",et="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",dn=/^#([0-9a-f]{3,8})$/,gn=new RegExp(`^rgb\\(${vt},${vt},${vt}\\)$`),_n=new RegExp(`^rgb\\(${et},${et},${et}\\)$`),yn=new RegExp(`^rgba\\(${vt},${vt},${vt},${Nt}\\)$`),pn=new RegExp(`^rgba\\(${et},${et},${et},${Nt}\\)$`),xn=new RegExp(`^hsl\\(${Nt},${et},${et}\\)$`),vn=new RegExp(`^hsla\\(${Nt},${et},${et},${Nt}\\)$`),_e={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};re(Tt,St,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ye,formatHex:ye,formatHex8:bn,formatHsl:kn,formatRgb:pe,toString:pe});function ye(){return this.rgb().formatHex()}function bn(){return this.rgb().formatHex8()}function kn(){return Ge(this).formatHsl()}function pe(){return this.rgb().formatRgb()}function St(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=dn.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?xe(e):n===3?new K(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Rt(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Rt(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=gn.exec(t))?new K(e[1],e[2],e[3],1):(e=_n.exec(t))?new K(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=yn.exec(t))?Rt(e[1],e[2],e[3],e[4]):(e=pn.exec(t))?Rt(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=xn.exec(t))?ke(e[1],e[2]/100,e[3]/100,1):(e=vn.exec(t))?ke(e[1],e[2]/100,e[3]/100,e[4]):_e.hasOwnProperty(t)?xe(_e[t]):t==="transparent"?new K(NaN,NaN,NaN,0):null}function xe(t){return new K(t>>16&255,t>>8&255,t&255,1)}function Rt(t,e,n,r){return r<=0&&(t=e=n=NaN),new K(t,e,n,r)}function wn(t){return t instanceof Tt||(t=St(t)),t?(t=t.rgb(),new K(t.r,t.g,t.b,t.opacity)):new K}function Xt(t,e,n,r){return arguments.length===1?wn(t):new K(t,e,n,r??1)}function K(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}re(K,Xt,Fe(Tt,{brighter(t){return t=t==null?Ut:Math.pow(Ut,t),new K(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Et:Math.pow(Et,t),new K(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new K(dt(this.r),dt(this.g),dt(this.b),qt(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ve,formatHex:ve,formatHex8:Mn,formatRgb:be,toString:be}));function ve(){return`#${ht(this.r)}${ht(this.g)}${ht(this.b)}`}function Mn(){return`#${ht(this.r)}${ht(this.g)}${ht(this.b)}${ht((isNaN(this.opacity)?1:this.opacity)*255)}`}function be(){const t=qt(this.opacity);return`${t===1?"rgb(":"rgba("}${dt(this.r)}, ${dt(this.g)}, ${dt(this.b)}${t===1?")":`, ${t})`}`}function qt(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function dt(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function ht(t){return t=dt(t),(t<16?"0":"")+t.toString(16)}function ke(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new $(t,e,n,r)}function Ge(t){if(t instanceof $)return new $(t.h,t.s,t.l,t.opacity);if(t instanceof Tt||(t=St(t)),!t)return new $;if(t instanceof $)return t;t=t.rgb();var e=t.r/255,n=t.g/255,r=t.b/255,o=Math.min(e,n,r),s=Math.max(e,n,r),i=NaN,a=s-o,l=(s+o)/2;return a?(e===s?i=(n-r)/a+(n<r)*6:n===s?i=(r-e)/a+2:i=(e-n)/a+4,a/=l<.5?s+o:2-s-o,i*=60):a=l>0&&l<1?0:i,new $(i,a,l,t.opacity)}function En(t,e,n,r){return arguments.length===1?Ge(t):new $(t,e,n,r??1)}function $(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}re($,En,Fe(Tt,{brighter(t){return t=t==null?Ut:Math.pow(Ut,t),new $(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Et:Math.pow(Et,t),new $(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,o=2*n-r;return new K(Wt(t>=240?t-240:t+120,o,r),Wt(t,o,r),Wt(t<120?t+240:t-120,o,r),this.opacity)},clamp(){return new $(we(this.h),Pt(this.s),Pt(this.l),qt(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=qt(this.opacity);return`${t===1?"hsl(":"hsla("}${we(this.h)}, ${Pt(this.s)*100}%, ${Pt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function we(t){return t=(t||0)%360,t<0?t+360:t}function Pt(t){return Math.max(0,Math.min(1,t||0))}function Wt(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const oe=t=>()=>t;function Nn(t,e){return function(n){return t+n*e}}function Sn(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}function Tn(t){return(t=+t)==1?Ye:function(e,n){return n-e?Sn(e,n,t):oe(isNaN(e)?n:e)}}function Ye(t,e){var n=e-t;return n?Nn(t,n):oe(isNaN(t)?e:t)}const Me=function t(e){var n=Tn(e);function r(o,s){var i=n((o=Xt(o)).r,(s=Xt(s)).r),a=n(o.g,s.g),l=n(o.b,s.b),c=Ye(o.opacity,s.opacity);return function(d){return o.r=i(d),o.g=a(d),o.b=l(d),o.opacity=c(d),o+""}}return r.gamma=t,r}(1);function Cn(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,r=e.slice(),o;return function(s){for(o=0;o<n;++o)r[o]=t[o]*(1-s)+e[o]*s;return r}}function An(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Rn(t,e){var n=e?e.length:0,r=t?Math.min(n,t.length):0,o=new Array(r),s=new Array(n),i;for(i=0;i<r;++i)o[i]=ie(t[i],e[i]);for(;i<n;++i)s[i]=e[i];return function(a){for(i=0;i<r;++i)s[i]=o[i](a);return s}}function Pn(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function zt(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function In(t,e){var n={},r={},o;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in t?n[o]=ie(t[o],e[o]):r[o]=e[o];return function(s){for(o in n)r[o]=n[o](s);return r}}var Kt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Ft=new RegExp(Kt.source,"g");function jn(t){return function(){return t}}function Ln(t){return function(e){return t(e)+""}}function On(t,e){var n=Kt.lastIndex=Ft.lastIndex=0,r,o,s,i=-1,a=[],l=[];for(t=t+"",e=e+"";(r=Kt.exec(t))&&(o=Ft.exec(e));)(s=o.index)>n&&(s=e.slice(n,s),a[i]?a[i]+=s:a[++i]=s),(r=r[0])===(o=o[0])?a[i]?a[i]+=o:a[++i]=o:(a[++i]=null,l.push({i,x:zt(r,o)})),n=Ft.lastIndex;return n<e.length&&(s=e.slice(n),a[i]?a[i]+=s:a[++i]=s),a.length<2?l[0]?Ln(l[0].x):jn(e):(e=l.length,function(c){for(var d=0,f;d<e;++d)a[(f=l[d]).i]=f.x(c);return a.join("")})}function ie(t,e){var n=typeof e,r;return e==null||n==="boolean"?oe(e):(n==="number"?zt:n==="string"?(r=St(e))?(e=r,Me):On:e instanceof St?Me:e instanceof Date?Pn:An(e)?Cn:Array.isArray(e)?Rn:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?In:zt)(t,e)}function Un(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function qn(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function Ht(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function bt(t){return t=Ht(Math.abs(t)),t?t[1]:NaN}function zn(t,e){return function(n,r){for(var o=n.length,s=[],i=0,a=t[0],l=0;o>0&&a>0&&(l+a+1>r&&(a=Math.max(1,r-l)),s.push(n.substring(o-=a,o+a)),!((l+=a+1)>r));)a=t[i=(i+1)%t.length];return s.reverse().join(e)}}function Hn(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var Dn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Dt(t){if(!(e=Dn.exec(t)))throw new Error("invalid format: "+t);var e;return new se({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Dt.prototype=se.prototype;function se(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}se.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Bn(t){t:for(var e=t.length,n=1,r=-1,o;n<e;++n)switch(t[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+t[n])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(o+1):t}var Xe;function Vn(t,e){var n=Ht(t,e);if(!n)return t+"";var r=n[0],o=n[1],s=o-(Xe=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,i=r.length;return s===i?r:s>i?r+new Array(s-i+1).join("0"):s>0?r.slice(0,s)+"."+r.slice(s):"0."+new Array(1-s).join("0")+Ht(t,Math.max(0,e+s-1))[0]}function Ee(t,e){var n=Ht(t,e);if(!n)return t+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const Ne={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:qn,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>Ee(t*100,e),r:Ee,s:Vn,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Se(t){return t}var Te=Array.prototype.map,Ce=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Wn(t){var e=t.grouping===void 0||t.thousands===void 0?Se:zn(Te.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",o=t.decimal===void 0?".":t.decimal+"",s=t.numerals===void 0?Se:Hn(Te.call(t.numerals,String)),i=t.percent===void 0?"%":t.percent+"",a=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(f){f=Dt(f);var h=f.fill,y=f.align,m=f.sign,v=f.symbol,E=f.zero,S=f.width,M=f.comma,x=f.precision,b=f.trim,u=f.type;u==="n"?(M=!0,u="g"):Ne[u]||(x===void 0&&(x=12),b=!0,u="g"),(E||h==="0"&&y==="=")&&(E=!0,h="0",y="=");var P=v==="$"?n:v==="#"&&/[boxX]/.test(u)?"0"+u.toLowerCase():"",T=v==="$"?r:/[%p]/.test(u)?i:"",R=Ne[u],I=/[defgprs%]/.test(u);x=x===void 0?6:/[gprs]/.test(u)?Math.max(1,Math.min(21,x)):Math.max(0,Math.min(20,x));function j(k){var z=P,O=T,Y,nt,Q;if(u==="c")O=R(k)+O,k="";else{k=+k;var Z=k<0||1/k<0;if(k=isNaN(k)?l:R(Math.abs(k),x),b&&(k=Bn(k)),Z&&+k==0&&m!=="+"&&(Z=!1),z=(Z?m==="("?m:a:m==="-"||m==="("?"":m)+z,O=(u==="s"?Ce[8+Xe/3]:"")+O+(Z&&m==="("?")":""),I){for(Y=-1,nt=k.length;++Y<nt;)if(Q=k.charCodeAt(Y),48>Q||Q>57){O=(Q===46?o+k.slice(Y+1):k.slice(Y))+O,k=k.slice(0,Y);break}}}M&&!E&&(k=e(k,1/0));var N=z.length+k.length+O.length,L=N<S?new Array(S-N+1).join(h):"";switch(M&&E&&(k=e(L+k,L.length?S-O.length:1/0),L=""),y){case"<":k=z+k+O+L;break;case"=":k=z+L+k+O;break;case"^":k=L.slice(0,N=L.length>>1)+z+k+O+L.slice(N);break;default:k=L+z+k+O;break}return s(k)}return j.toString=function(){return f+""},j}function d(f,h){var y=c((f=Dt(f),f.type="f",f)),m=Math.max(-8,Math.min(8,Math.floor(bt(h)/3)))*3,v=Math.pow(10,-m),E=Ce[8+m/3];return function(S){return y(v*S)+E}}return{format:c,formatPrefix:d}}var It,Ke,Je;Fn({thousands:",",grouping:[3],currency:["$",""]});function Fn(t){return It=Wn(t),Ke=It.format,Je=It.formatPrefix,It}function Gn(t){return Math.max(0,-bt(Math.abs(t)))}function Yn(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bt(e)/3)))*3-bt(Math.abs(t)))}function Xn(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,bt(e)-bt(t))+1}function Kn(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function Jn(t){return function(){return t}}function Qn(t){return+t}var Ae=[0,1];function pt(t){return t}function Jt(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:Jn(isNaN(e)?NaN:.5)}function Zn(t,e){var n;return t>e&&(n=t,t=e,e=n),function(r){return Math.max(t,Math.min(e,r))}}function $n(t,e,n){var r=t[0],o=t[1],s=e[0],i=e[1];return o<r?(r=Jt(o,r),s=n(i,s)):(r=Jt(r,o),s=n(s,i)),function(a){return s(r(a))}}function tr(t,e,n){var r=Math.min(t.length,e.length)-1,o=new Array(r),s=new Array(r),i=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++i<r;)o[i]=Jt(t[i],t[i+1]),s[i]=n(e[i],e[i+1]);return function(a){var l=ln(t,a,1,r)-1;return s[l](o[l](a))}}function er(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function nr(){var t=Ae,e=Ae,n=ie,r,o,s,i=pt,a,l,c;function d(){var h=Math.min(t.length,e.length);return i!==pt&&(i=Zn(t[0],t[h-1])),a=h>2?tr:$n,l=c=null,f}function f(h){return h==null||isNaN(h=+h)?s:(l||(l=a(t.map(r),e,n)))(r(i(h)))}return f.invert=function(h){return i(o((c||(c=a(e,t.map(r),zt)))(h)))},f.domain=function(h){return arguments.length?(t=Array.from(h,Qn),d()):t.slice()},f.range=function(h){return arguments.length?(e=Array.from(h),d()):e.slice()},f.rangeRound=function(h){return e=Array.from(h),n=Un,d()},f.clamp=function(h){return arguments.length?(i=h?!0:pt,d()):i!==pt},f.interpolate=function(h){return arguments.length?(n=h,d()):n},f.unknown=function(h){return arguments.length?(s=h,f):s},function(h,y){return r=h,o=y,d()}}function rr(){return nr()(pt,pt)}function or(t,e,n,r){var o=hn(t,e,n),s;switch(r=Dt(r??",f"),r.type){case"s":{var i=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(s=Yn(o,i))&&(r.precision=s),Je(r,i)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(s=Xn(o,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=s-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(s=Gn(o))&&(r.precision=s-(r.type==="%")*2);break}}return Ke(r)}function ir(t){var e=t.domain;return t.ticks=function(n){var r=e();return un(r[0],r[r.length-1],n??10)},t.tickFormat=function(n,r){var o=e();return or(o[0],o[o.length-1],n??10,r)},t.nice=function(n){n==null&&(n=10);var r=e(),o=0,s=r.length-1,i=r[o],a=r[s],l,c,d=10;for(a<i&&(c=i,i=a,a=c,c=o,o=s,s=c);d-- >0;){if(c=Yt(i,a,n),c===l)return r[o]=i,r[s]=a,e(r);if(c>0)i=Math.floor(i/c)*c,a=Math.ceil(a/c)*c;else if(c<0)i=Math.ceil(i*c)/c,a=Math.floor(a*c)/c;else break;l=c}return t},t}function Qt(){var t=rr();return t.copy=function(){return er(t,Qt())},Kn.apply(t,arguments),ir(t)}function xt(t,e,n){this.k=t,this.x=e,this.y=n}xt.prototype={constructor:xt,scale:function(t){return t===1?this:new xt(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new xt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new xt(1,0,0);xt.prototype;function Zt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Re(t,{delay:e=0,speed:n,duration:r,easing:o=Zt}={}){let s=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(s+=parseInt(i.strokeWidth)),r===void 0?n===void 0?r=800:r=s/n:typeof r=="function"&&(r=r(s)),{delay:e,duration:r,easing:o,css:(a,l)=>`
			stroke-dasharray: ${s};
			stroke-dashoffset: ${l*s};
		`}}const Mt=[{migrant_rsp_id:4645,values:[{month:0,mig_cost_left:303,remit:168,money_us:529},{month:1,mig_cost_left:0,remit:168,money_us:832},{month:2,mig_cost_left:0,remit:168,money_us:832},{month:3,mig_cost_left:0,remit:168,money_us:832},{month:4,mig_cost_left:0,remit:168,money_us:832},{month:5,mig_cost_left:0,remit:168,money_us:832},{month:6,mig_cost_left:0,remit:168,money_us:832},{month:7,mig_cost_left:0,remit:168,money_us:832},{month:8,mig_cost_left:0,remit:168,money_us:832},{month:9,mig_cost_left:0,remit:168,money_us:832},{month:10,mig_cost_left:0,remit:168,money_us:832},{month:11,mig_cost_left:0,remit:168,money_us:832},{month:12,mig_cost_left:0,remit:168,money_us:832},{month:13,mig_cost_left:0,remit:168,money_us:832},{month:14,mig_cost_left:0,remit:168,money_us:832},{month:15,mig_cost_left:0,remit:168,money_us:832}]},{migrant_rsp_id:1358,values:[{month:0,mig_cost_left:3e3,remit:0,money_us:0},{month:1,mig_cost_left:3e3,remit:0,money_us:0},{month:2,mig_cost_left:3e3,remit:0,money_us:0},{month:3,mig_cost_left:3e3,remit:0,money_us:0},{month:4,mig_cost_left:3e3,remit:0,money_us:0},{month:5,mig_cost_left:3e3,remit:0,money_us:0},{month:6,mig_cost_left:3e3,remit:0,money_us:0},{month:7,mig_cost_left:3e3,remit:0,money_us:0},{month:8,mig_cost_left:3e3,remit:0,money_us:0},{month:9,mig_cost_left:3e3,remit:0,money_us:0},{month:10,mig_cost_left:3e3,remit:0,money_us:0},{month:11,mig_cost_left:3e3,remit:0,money_us:0},{month:12,mig_cost_left:3e3,remit:0,money_us:0},{month:13,mig_cost_left:3e3,remit:0,money_us:0},{month:14,mig_cost_left:3e3,remit:0,money_us:0},{month:15,mig_cost_left:3e3,remit:0,money_us:0}]},{migrant_rsp_id:1743,values:[{month:0,mig_cost_left:11e3,remit:17,money_us:0},{month:1,mig_cost_left:10017,remit:17,money_us:0},{month:2,mig_cost_left:9034,remit:17,money_us:0},{month:3,mig_cost_left:8051,remit:17,money_us:0},{month:4,mig_cost_left:7068,remit:17,money_us:0},{month:5,mig_cost_left:6085,remit:17,money_us:0},{month:6,mig_cost_left:5102,remit:17,money_us:0},{month:7,mig_cost_left:4119,remit:17,money_us:0},{month:8,mig_cost_left:3136,remit:17,money_us:0},{month:9,mig_cost_left:2153,remit:17,money_us:0},{month:10,mig_cost_left:1170,remit:17,money_us:0},{month:11,mig_cost_left:187,remit:17,money_us:796},{month:12,mig_cost_left:0,remit:17,money_us:983},{month:13,mig_cost_left:0,remit:17,money_us:983},{month:14,mig_cost_left:0,remit:17,money_us:983},{month:15,mig_cost_left:0,remit:17,money_us:983}]},{migrant_rsp_id:2399,values:[{month:0,mig_cost_left:59,remit:1e3,money_us:0},{month:1,mig_cost_left:59,remit:1e3,money_us:0},{month:2,mig_cost_left:59,remit:1e3,money_us:0},{month:3,mig_cost_left:59,remit:1e3,money_us:0},{month:4,mig_cost_left:59,remit:1e3,money_us:0},{month:5,mig_cost_left:59,remit:1e3,money_us:0},{month:6,mig_cost_left:59,remit:1e3,money_us:0},{month:7,mig_cost_left:59,remit:1e3,money_us:0},{month:8,mig_cost_left:59,remit:1e3,money_us:0},{month:9,mig_cost_left:59,remit:1e3,money_us:0},{month:10,mig_cost_left:59,remit:1e3,money_us:0},{month:11,mig_cost_left:59,remit:1e3,money_us:0},{month:12,mig_cost_left:59,remit:1e3,money_us:0},{month:13,mig_cost_left:59,remit:1e3,money_us:0},{month:14,mig_cost_left:59,remit:1e3,money_us:0},{month:15,mig_cost_left:59,remit:1e3,money_us:0}]},{migrant_rsp_id:853,values:[{month:0,mig_cost_left:421,remit:25,money_us:554},{month:1,mig_cost_left:0,remit:25,money_us:975},{month:2,mig_cost_left:0,remit:25,money_us:975},{month:3,mig_cost_left:0,remit:25,money_us:975},{month:4,mig_cost_left:0,remit:25,money_us:975},{month:5,mig_cost_left:0,remit:25,money_us:975},{month:6,mig_cost_left:0,remit:25,money_us:975},{month:7,mig_cost_left:0,remit:25,money_us:975},{month:8,mig_cost_left:0,remit:25,money_us:975},{month:9,mig_cost_left:0,remit:25,money_us:975},{month:10,mig_cost_left:0,remit:25,money_us:975},{month:11,mig_cost_left:0,remit:25,money_us:975},{month:12,mig_cost_left:0,remit:25,money_us:975},{month:13,mig_cost_left:0,remit:25,money_us:975},{month:14,mig_cost_left:0,remit:25,money_us:975},{month:15,mig_cost_left:0,remit:25,money_us:975}]},{migrant_rsp_id:1575,values:[{month:0,mig_cost_left:842,remit:25,money_us:133},{month:1,mig_cost_left:0,remit:25,money_us:975},{month:2,mig_cost_left:0,remit:25,money_us:975},{month:3,mig_cost_left:0,remit:25,money_us:975},{month:4,mig_cost_left:0,remit:25,money_us:975},{month:5,mig_cost_left:0,remit:25,money_us:975},{month:6,mig_cost_left:0,remit:25,money_us:975},{month:7,mig_cost_left:0,remit:25,money_us:975},{month:8,mig_cost_left:0,remit:25,money_us:975},{month:9,mig_cost_left:0,remit:25,money_us:975},{month:10,mig_cost_left:0,remit:25,money_us:975},{month:11,mig_cost_left:0,remit:25,money_us:975},{month:12,mig_cost_left:0,remit:25,money_us:975},{month:13,mig_cost_left:0,remit:25,money_us:975},{month:14,mig_cost_left:0,remit:25,money_us:975},{month:15,mig_cost_left:0,remit:25,money_us:975}]},{migrant_rsp_id:3921,values:[{month:0,mig_cost_left:6e3,remit:0,money_us:0},{month:1,mig_cost_left:6e3,remit:0,money_us:0},{month:2,mig_cost_left:6e3,remit:0,money_us:0},{month:3,mig_cost_left:6e3,remit:0,money_us:0},{month:4,mig_cost_left:6e3,remit:0,money_us:0},{month:5,mig_cost_left:6e3,remit:0,money_us:0},{month:6,mig_cost_left:6e3,remit:0,money_us:0},{month:7,mig_cost_left:6e3,remit:0,money_us:0},{month:8,mig_cost_left:6e3,remit:0,money_us:0},{month:9,mig_cost_left:6e3,remit:0,money_us:0},{month:10,mig_cost_left:6e3,remit:0,money_us:0},{month:11,mig_cost_left:6e3,remit:0,money_us:0},{month:12,mig_cost_left:6e3,remit:0,money_us:0},{month:13,mig_cost_left:6e3,remit:0,money_us:0},{month:14,mig_cost_left:6e3,remit:0,money_us:0},{month:15,mig_cost_left:6e3,remit:0,money_us:0}]},{migrant_rsp_id:810,values:[{month:0,mig_cost_left:1516,remit:200,money_us:0},{month:1,mig_cost_left:716,remit:200,money_us:84},{month:2,mig_cost_left:0,remit:200,money_us:800},{month:3,mig_cost_left:0,remit:200,money_us:800},{month:4,mig_cost_left:0,remit:200,money_us:800},{month:5,mig_cost_left:0,remit:200,money_us:800},{month:6,mig_cost_left:0,remit:200,money_us:800},{month:7,mig_cost_left:0,remit:200,money_us:800},{month:8,mig_cost_left:0,remit:200,money_us:800},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]},{migrant_rsp_id:1620,values:[{month:0,mig_cost_left:1348,remit:200,money_us:0},{month:1,mig_cost_left:548,remit:200,money_us:252},{month:2,mig_cost_left:0,remit:200,money_us:800},{month:3,mig_cost_left:0,remit:200,money_us:800},{month:4,mig_cost_left:0,remit:200,money_us:800},{month:5,mig_cost_left:0,remit:200,money_us:800},{month:6,mig_cost_left:0,remit:200,money_us:800},{month:7,mig_cost_left:0,remit:200,money_us:800},{month:8,mig_cost_left:0,remit:200,money_us:800},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]},{migrant_rsp_id:1083,values:[{month:0,mig_cost_left:7e3,remit:200,money_us:0},{month:1,mig_cost_left:6200,remit:200,money_us:0},{month:2,mig_cost_left:5400,remit:200,money_us:0},{month:3,mig_cost_left:4600,remit:200,money_us:0},{month:4,mig_cost_left:3800,remit:200,money_us:0},{month:5,mig_cost_left:3e3,remit:200,money_us:0},{month:6,mig_cost_left:2200,remit:200,money_us:0},{month:7,mig_cost_left:1400,remit:200,money_us:0},{month:8,mig_cost_left:600,remit:200,money_us:200},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]}];function Pe(t,e,n){const r=t.slice();return r[22]=e[n],r}function Ie(t,e,n){const r=t.slice();return r[25]=e[n],r}function je(t,e,n){const r=t.slice();return r[28]=e[n],r[30]=n,r}function Le(t){let e,n,r=t[0]>1&&Oe(t);return{c(){r&&r.c(),e=Lt()},l(o){r&&r.l(o),e=Lt()},m(o,s){r&&r.m(o,s),D(o,e,s),n=!0},p(o,s){o[0]>1?r?(r.p(o,s),s&1&&H(r,1)):(r=Oe(o),r.c(),H(r,1),r.m(e.parentNode,e)):r&&(te(),W(r,1,1,()=>{r=null}),ee())},i(o){n||(H(r),n=!0)},o(o){W(r),n=!1},d(o){r&&r.d(o),o&&p(e)}}}function Oe(t){let e,n,r=Mt,o=[];for(let i=0;i<r.length;i+=1)o[i]=Ue(je(t,r,i));const s=i=>W(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=Lt()},l(i){for(let a=0;a<o.length;a+=1)o[a].l(i);e=Lt()},m(i,a){for(let l=0;l<o.length;l+=1)o[l].m(i,a);D(i,e,a),n=!0},p(i,a){if(a&768){r=Mt;let l;for(l=0;l<r.length;l+=1){const c=je(i,r,l);o[l]?(o[l].p(c,a),H(o[l],1)):(o[l]=Ue(c),o[l].c(),H(o[l],1),o[l].m(e.parentNode,e))}for(te(),l=r.length;l<o.length;l+=1)s(l);ee()}},i(i){if(!n){for(let a=0;a<r.length;a+=1)H(o[a]);n=!0}},o(i){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)W(o[a]);n=!1},d(i){Gt(o,i),i&&p(e)}}}function Ue(t){let e,n,r;return{c(){e=B("polyline"),this.h()},l(o){e=V(o,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0}),w(e).forEach(p),this.h()},h(){g(e,"points",t[9](t[28].values)),g(e,"fill","none"),g(e,"stroke",t[8](t[28])),g(e,"stroke-width","3")},m(o,s){D(o,e,s),r=!0},p(o,s){t=o},i(o){r||(ne(()=>{n||(n=ce(e,Re,{duration:5e3,easing:Zt},!0)),n.run(1)}),r=!0)},o(o){n||(n=ce(e,Re,{duration:5e3,easing:Zt},!1)),n.run(0),r=!1},d(o){o&&p(e),o&&n&&n.end()}}}function qe(t){let e,n,r,o=t[25]+"",s,i;return{c(){e=B("g"),n=B("line"),r=B("text"),s=F(o),this.h()},l(a){e=V(a,"g",{class:!0,opacity:!0,transform:!0});var l=w(e);n=V(l,"line",{stroke:!0,y2:!0}),w(n).forEach(p),r=V(l,"text",{dy:!0,fill:!0,y:!0,x:!0,"text-anchor":!0});var c=w(r);s=G(c,o),c.forEach(p),l.forEach(p),this.h()},h(){g(n,"stroke","black"),g(n,"y2","6"),g(r,"dy","0.71em"),g(r,"fill","black"),g(r,"y","10"),g(r,"x","-5"),g(r,"text-anchor","middle"),g(e,"class","tick"),g(e,"opacity","1"),g(e,"transform",i="translate("+t[5](t[25])+",0)")},m(a,l){D(a,e,l),_(e,n),_(e,r),_(r,s)},p(a,l){l&4&&o!==(o=a[25]+"")&&Ve(s,o),l&36&&i!==(i="translate("+a[5](a[25])+",0)")&&g(e,"transform",i)},d(a){a&&p(e)}}}function ze(t){let e,n,r,o="$"+t[22],s,i;return{c(){e=B("g"),n=B("line"),r=B("text"),s=F(o),this.h()},l(a){e=V(a,"g",{class:!0,opacity:!0,transform:!0});var l=w(e);n=V(l,"line",{stroke:!0,x2:!0}),w(n).forEach(p),r=V(l,"text",{dy:!0,fill:!0,x:!0,"text-anchor":!0});var c=w(r);s=G(c,o),c.forEach(p),l.forEach(p),this.h()},h(){g(n,"stroke","black"),g(n,"x2","-5"),g(r,"dy","0.32em"),g(r,"fill","black"),g(r,"x","-"+10),g(r,"text-anchor","end"),g(e,"class","tick"),g(e,"opacity","1"),g(e,"transform",i="translate(0,"+t[4](t[22])+")")},m(a,l){D(a,e,l),_(e,n),_(e,r),_(r,s)},p(a,l){l&8&&o!==(o="$"+a[22])&&Ve(s,o),l&24&&i!==(i="translate(0,"+a[4](a[22])+")")&&g(e,"transform",i)},d(a){a&&p(e)}}}function sr(t){let e,n,r,o,s,i,a,l,c,d,f,h,y,m=t[0]>0&&Le(t),v=t[2],E=[];for(let x=0;x<v.length;x+=1)E[x]=qe(Ie(t,v,x));let S=t[3],M=[];for(let x=0;x<S.length;x+=1)M[x]=ze(Pe(t,S,x));return{c(){e=C("div"),n=B("svg"),r=B("g"),o=B("line"),i=B("line"),l=B("g"),m&&m.c(),c=B("g");for(let x=0;x<E.length;x+=1)E[x].c();d=B("g");for(let x=0;x<M.length;x+=1)M[x].c();f=U(),h=C("div"),this.h()},l(x){e=A(x,"DIV",{class:!0});var b=w(e);n=V(b,"svg",{width:!0,height:!0,id:!0});var u=w(n);r=V(u,"g",{});var P=w(r);o=V(P,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0}),w(o).forEach(p),i=V(P,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0,text:!0}),w(i).forEach(p),P.forEach(p),l=V(u,"g",{});var T=w(l);m&&m.l(T),T.forEach(p),c=V(u,"g",{transform:!0});var R=w(c);for(let j=0;j<E.length;j+=1)E[j].l(R);R.forEach(p),d=V(u,"g",{transform:!0});var I=w(d);for(let j=0;j<M.length;j+=1)M[j].l(I);I.forEach(p),u.forEach(p),b.forEach(p),f=q(x),h=A(x,"DIV",{id:!0}),w(h).forEach(p),this.h()},h(){g(o,"x1",t[6].left),g(o,"x2",$t-t[6].right),g(o,"y1",yt-t[6].bottom),g(o,"y2",yt-t[6].bottom),g(o,"stroke",s=t[1].blue),g(o,"stroke-width","2"),g(o,"class","axis"),g(i,"x1",t[6].left),g(i,"x2",t[6].left),g(i,"y1",t[6].top),g(i,"y2",yt-t[6].bottom),g(i,"stroke",a=t[1].blue),g(i,"stroke-width","2"),g(i,"class","axis"),g(i,"text","Cost of Migration (USD)"),g(c,"transform","translate(0, "+(yt-t[6].bottom)+")"),g(d,"transform","translate("+t[6].left+", 0)"),g(n,"width",$t),g(n,"height",yt),g(n,"id",t[7]),g(e,"class","LineChart2 svelte-1s8vqje"),g(h,"id","chart")},m(x,b){D(x,e,b),_(e,n),_(n,r),_(r,o),_(r,i),_(n,l),m&&m.m(l,null),_(n,c);for(let u=0;u<E.length;u+=1)E[u].m(c,null);_(n,d);for(let u=0;u<M.length;u+=1)M[u].m(d,null);D(x,f,b),D(x,h,b),y=!0},p(x,[b]){if((!y||b&2&&s!==(s=x[1].blue))&&g(o,"stroke",s),(!y||b&2&&a!==(a=x[1].blue))&&g(i,"stroke",a),x[0]>0?m?(m.p(x,b),b&1&&H(m,1)):(m=Le(x),m.c(),H(m,1),m.m(l,null)):m&&(te(),W(m,1,1,()=>{m=null}),ee()),b&36){v=x[2];let u;for(u=0;u<v.length;u+=1){const P=Ie(x,v,u);E[u]?E[u].p(P,b):(E[u]=qe(P),E[u].c(),E[u].m(c,null))}for(;u<E.length;u+=1)E[u].d(1);E.length=v.length}if(b&24){S=x[3];let u;for(u=0;u<S.length;u+=1){const P=Pe(x,S,u);M[u]?M[u].p(P,b):(M[u]=ze(P),M[u].c(),M[u].m(d,null))}for(;u<M.length;u+=1)M[u].d(1);M.length=S.length}},i(x){y||(H(m),y=!0)},o(x){W(m),y=!1},d(x){x&&p(e),m&&m.d(),Gt(E,x),Gt(M,x),x&&p(f),x&&p(h)}}}let $t=600,yt=400,He=10;function ar(t,e,n){let r,o,{index:s,width:i,height:a,projection:l,themeColors:c}=e;const d={top:50,left:50,right:50,bottom:50},f=Mt.flatMap(T=>T.values.map(R=>R.month)),h=[...new Set(f)],y=Math.min(...h),m=Math.max(...h),v=Mt.flatMap(T=>T.values.map(R=>R.mig_cost_left)),E=Math.min(...v),S=Math.max(...v);let M=[],x=[];const b="svg-container-"+Math.random()*1e6;function u(T){return T.values.every(R=>R.remit==0)&&T.values.every(R=>R.money_us==0)?c.orange:c.blue}function P(T){return T.map(function(R){return r(R.month)+","+o(R.mig_cost_left)}).join(" ")}return t.$$set=T=>{"index"in T&&n(0,s=T.index),"width"in T&&n(10,i=T.width),"height"in T&&n(11,a=T.height),"projection"in T&&n(12,l=T.projection),"themeColors"in T&&n(1,c=T.themeColors)},t.$$.update=()=>{if(t.$$.dirty&12&&(n(2,M=[]),n(3,x=[]),Mt.length>1)){let T=[Math.round(y),Math.round(m+1)],R=Math.floor((T[1]-T[0])/He);for(let k=T[0];k<T[1];k=k+Math.max(1,R))M.push(k);let I=[Math.round(E),Math.round(S+1)],j=Math.floor((I[1]-I[0])/He);for(let k=I[0];k<I[1];k=k+Math.max(1,j))x.push(k)}},n(5,r=Qt().domain([y,m]).range([d.left,$t-d.right])),n(4,o=Qt().domain([E,S]).range([yt-d.bottom,d.top])),[s,c,M,x,o,r,d,b,u,P,i,a,l]}class lr extends rt{constructor(e){super(),ot(this,e,ar,sr,it,{index:0,width:10,height:11,projection:12,themeColors:1})}}function cr(t){let e,n,r,o,s,i,a,l,c,d,f,h,y,m,v,E,S,M,x,b,u,P,T,R,I,j,k,z,O;return{c(){e=C("main"),n=C("html"),r=C("head"),o=C("meta"),s=U(),i=C("style"),a=F(`.node rect {\r
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
                }`),l=U(),c=C("body"),d=C("div"),f=C("p"),h=F("Original Occupation"),y=U(),m=C("p"),v=F("US Occupation"),E=U(),S=C("p"),M=C("canvas"),x=U(),b=B("svg"),u=U(),P=C("script"),R=U(),I=C("script"),k=U(),z=C("script"),O=F(`var margin = { top: 1, right: 1, bottom: 10, left: 1 },\r
                        width = 550 - margin.left - margin.right,\r
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
                    }`),this.h()},l(Y){e=A(Y,"MAIN",{});var nt=w(e);n=A(nt,"HTML",{lang:!0});var Q=w(n);r=A(Q,"HEAD",{});var Z=w(r);o=A(Z,"META",{charset:!0}),s=q(Z),i=A(Z,"STYLE",{});var N=w(i);a=G(N,`.node rect {\r
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
                }`),N.forEach(p),Z.forEach(p),l=q(Q),c=A(Q,"BODY",{});var L=w(c);d=A(L,"DIV",{class:!0});var st=w(d);f=A(st,"P",{style:!0});var gt=w(f);h=G(gt,"Original Occupation"),gt.forEach(p),y=q(st),m=A(st,"P",{style:!0});var kt=w(m);v=G(kt,"US Occupation"),kt.forEach(p),st.forEach(p),E=q(L),S=A(L,"P",{id:!0});var X=w(S);M=A(X,"CANVAS",{width:!0,height:!0}),w(M).forEach(p),x=q(X),b=V(X,"svg",{width:!0,height:!0}),w(b).forEach(p),u=q(X),P=A(X,"SCRIPT",{src:!0,charset:!0,type:!0});var at=w(P);at.forEach(p),R=q(X),I=A(X,"SCRIPT",{src:!0});var Vt=w(I);Vt.forEach(p),k=q(X),z=A(X,"SCRIPT",{type:!0});var wt=w(z);O=G(wt,`var margin = { top: 1, right: 1, bottom: 10, left: 1 },\r
                        width = 550 - margin.left - margin.right,\r
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
                    }`),wt.forEach(p),X.forEach(p),L.forEach(p),Q.forEach(p),nt.forEach(p),this.h()},h(){g(o,"charset","utf-8"),fe(f,"float","left"),fe(m,"float","right"),g(d,"class","sidebar"),g(M,"width","700"),g(M,"height","1100"),g(b,"width","700"),g(b,"height","1000"),me(P.src,T="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js")||g(P,"src",T),g(P,"charset","utf-8"),g(P,"type","text/javascript"),me(I.src,j="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/sankey.js")||g(I,"src",j),g(z,"type","text/javascript"),g(S,"id","sankey"),g(n,"lang","en")},m(Y,nt){D(Y,e,nt),_(e,n),_(n,r),_(r,o),_(r,s),_(r,i),_(i,a),_(n,l),_(n,c),_(c,d),_(d,f),_(f,h),_(d,y),_(d,m),_(m,v),_(c,E),_(c,S),_(S,M),_(S,x),_(S,b),_(S,u),_(S,P),_(S,R),_(S,I),_(S,k),_(S,z),_(z,O)},p:J,i:J,o:J,d(Y){Y&&p(e)}}}function fr(t,e,n){let{name:r="World"}=e,{index:o}=e;return t.$$set=s=>{"name"in s&&n(0,r=s.name),"index"in s&&n(1,o=s.index)},[r,o]}class mr extends rt{constructor(e){super(),ot(this,e,fr,cr,it,{name:0,index:1})}}const{window:Qe}=tn,ur=t=>({}),De=t=>({}),hr=t=>({}),Be=t=>({});function dr(t){let e,n,r,o,s,i,a,l,c;ne(t[21]);const d=t[20].background,f=ue(d,t,t[19],Be),h=t[20].foreground,y=ue(h,t,t[19],De);return{c(){e=C("svelte-scroller-outer"),n=C("svelte-scroller-background-container"),r=C("svelte-scroller-background"),f&&f.c(),s=U(),i=C("svelte-scroller-foreground"),y&&y.c(),this.h()},l(m){e=A(m,"SVELTE-SCROLLER-OUTER",{class:!0});var v=w(e);n=A(v,"SVELTE-SCROLLER-BACKGROUND-CONTAINER",{class:!0,style:!0});var E=w(n);r=A(E,"SVELTE-SCROLLER-BACKGROUND",{class:!0});var S=w(r);f&&f.l(S),S.forEach(p),E.forEach(p),s=q(v),i=A(v,"SVELTE-SCROLLER-FOREGROUND",{class:!0});var M=w(i);y&&y.l(M),M.forEach(p),v.forEach(p),this.h()},h(){_t(r,"class","svelte-xdbafy"),_t(n,"class","background-container svelte-xdbafy"),_t(n,"style",o=""+(t[5]+t[4])),_t(i,"class","svelte-xdbafy"),_t(e,"class","svelte-xdbafy")},m(m,v){D(m,e,v),_(e,n),_(n,r),f&&f.m(r,null),t[22](r),_(e,s),_(e,i),y&&y.m(i,null),t[23](i),t[24](e),a=!0,l||(c=Ze(Qe,"resize",t[21]),l=!0)},p(m,v){f&&f.p&&(!a||v[0]&524288)&&he(f,d,m,m[19],a?ge(d,m[19],v,hr):de(m[19]),Be),(!a||v[0]&48&&o!==(o=""+(m[5]+m[4])))&&_t(n,"style",o),y&&y.p&&(!a||v[0]&524288)&&he(y,h,m,m[19],a?ge(h,m[19],v,ur):de(m[19]),De)},i(m){a||(H(f,m),H(y,m),a=!0)},o(m){W(f,m),W(y,m),a=!1},d(m){m&&p(e),f&&f.d(m),t[22](null),y&&y.d(m),t[23](null),t[24](null),l=!1,c()}}}const tt=[];let Bt;if(typeof window<"u"){const t=()=>tt.forEach(e=>e());window.addEventListener("scroll",t),window.addEventListener("resize",t)}if(typeof IntersectionObserver<"u"){const t=new Map,e=new IntersectionObserver((n,r)=>{n.forEach(o=>{const s=t.get(o.target),i=tt.indexOf(s);o.isIntersecting?i===-1&&tt.push(s):(s(),i!==-1&&tt.splice(i,1))})},{rootMargin:"400px 0px"});Bt={add:({outer:n,update:r})=>{const{top:o,bottom:s}=n.getBoundingClientRect();o<window.innerHeight&&s>0&&tt.push(r),t.set(n,r),e.observe(n)},remove:({outer:n,update:r})=>{const o=tt.indexOf(r);o!==-1&&tt.splice(o,1),t.delete(n),e.unobserve(n)}}}else Bt={add:({update:t})=>{tt.push(t)},remove:({update:t})=>{const e=tt.indexOf(t);e!==-1&&tt.splice(e,1)}};function gr(t,e,n){let r,o,s,i,a,{$$slots:l={},$$scope:c}=e,{top:d=0}=e,{bottom:f=1}=e,{threshold:h=.5}=e,{query:y="section"}=e,{parallax:m=!1}=e,{index:v=0}=e,{count:E=0}=e,{offset:S=0}=e,{progress:M=0}=e,{visible:x=!1}=e,b,u,P,T,R,I=0,j,k=0,z=1;$e(()=>{R=u.querySelectorAll(y),n(7,E=R.length),O();const N={outer:b,update:O};return Bt.add(N),()=>Bt.remove(N)});function O(){if(!u)return;const N=b.getBoundingClientRect();T=N.left,n(18,z=N.right-T);const L=u.getBoundingClientRect(),st=P.getBoundingClientRect();n(10,x=L.top<I&&L.bottom>0);const gt=L.bottom-L.top,kt=st.bottom-st.top,X=o-r;n(9,M=(r-L.top)/(gt-X)),M<=0?(n(17,k=0),n(16,j=!1)):M>=1?(n(17,k=m?gt-kt:gt-X),n(16,j=!1)):(n(17,k=m?Math.round(r-M*(kt-X)):r),n(16,j=!0));for(let at=0;at<R.length;at++){const Vt=R[at],{top:wt}=Vt.getBoundingClientRect(),ae=R[at+1],le=ae?ae.getBoundingClientRect().top:L.bottom;if(n(8,S=(s-wt)/(le-wt)),le>=s){n(6,v=at);break}}}function Y(){n(0,I=Qe.innerHeight)}function nt(N){ut[N?"unshift":"push"](()=>{P=N,n(3,P)})}function Q(N){ut[N?"unshift":"push"](()=>{u=N,n(2,u)})}function Z(N){ut[N?"unshift":"push"](()=>{b=N,n(1,b)})}return t.$$set=N=>{"top"in N&&n(11,d=N.top),"bottom"in N&&n(12,f=N.bottom),"threshold"in N&&n(13,h=N.threshold),"query"in N&&n(14,y=N.query),"parallax"in N&&n(15,m=N.parallax),"index"in N&&n(6,v=N.index),"count"in N&&n(7,E=N.count),"offset"in N&&n(8,S=N.offset),"progress"in N&&n(9,M=N.progress),"visible"in N&&n(10,x=N.visible),"$$scope"in N&&n(19,c=N.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2049&&(r=Math.round(d*I)),t.$$.dirty[0]&4097&&(o=Math.round(f*I)),t.$$.dirty[0]&8193&&(s=Math.round(h*I)),t.$$.dirty[0]&47104&&O(),t.$$.dirty[0]&196608&&n(5,i=`
		position: ${j?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${k}px);
		z-index: ${1};
	`),t.$$.dirty[0]&327680&&n(4,a=j?`width:${z}px;`:"")},[I,b,u,P,a,i,v,E,S,M,x,d,f,h,y,m,j,k,z,c,l,Y,nt,Q,Z]}class _r extends rt{constructor(e){super(),ot(this,e,gr,dr,it,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}function yr(t){let e,n,r,o,s,i,a,l,c,d,f,h;return{c(){e=C("h2"),n=F("RemitReturn"),r=U(),o=C("div"),s=C("p"),i=F(`Economic insecurity is the leading cause of migration. Despite the costs\r
        - both financial and emotional - associated with migrating from the\r
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United\r
        States, indviduals take on this burden year after year in search of\r
        better salaries, working conditions, and opportunities to send money\r
        home. Migrants who end up working in the destination country long enough\r
        not only offset the cost of their migration and send remittances home,\r
        but also spend money in the United States (for food, housing, etc),\r
        invigorating the economy. Data sourced from the UN World Food Programme (WFP).`),a=U(),l=C("p"),c=F(`The data displayed here is a subset of the class data. This subset\r
        includes 454 individuals who reported a cost of migration and whose\r
        destination was the United States. Of these, 349 currently reside in the\r
        USA and send remittances back to their families (as of the time of the\r
        survey, April 2021). 105 paid the cost of migration but either did not\r
        make it to the USA or were sent back.`),d=U(),f=C("p"),h=F(`Is the cost worth it? At what point do working migrants offset that\r
        cost? How much are they contributing to the US economy depending on what\r
        jobs are available? To better understand the tradeoff between the cost\r
        of migration, remittances, and money entering the USA, we have\r
        identified 10 migrants who represent a statistically similar sample of\r
        this larger group.`),this.h()},l(y){e=A(y,"H2",{});var m=w(e);n=G(m,"RemitReturn"),m.forEach(p),r=q(y),o=A(y,"DIV",{class:!0});var v=w(o);s=A(v,"P",{});var E=w(s);i=G(E,`Economic insecurity is the leading cause of migration. Despite the costs\r
        - both financial and emotional - associated with migrating from the\r
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United\r
        States, indviduals take on this burden year after year in search of\r
        better salaries, working conditions, and opportunities to send money\r
        home. Migrants who end up working in the destination country long enough\r
        not only offset the cost of their migration and send remittances home,\r
        but also spend money in the United States (for food, housing, etc),\r
        invigorating the economy. Data sourced from the UN World Food Programme (WFP).`),E.forEach(p),a=q(v),l=A(v,"P",{});var S=w(l);c=G(S,`The data displayed here is a subset of the class data. This subset\r
        includes 454 individuals who reported a cost of migration and whose\r
        destination was the United States. Of these, 349 currently reside in the\r
        USA and send remittances back to their families (as of the time of the\r
        survey, April 2021). 105 paid the cost of migration but either did not\r
        make it to the USA or were sent back.`),S.forEach(p),d=q(v),f=A(v,"P",{});var M=w(f);h=G(M,`Is the cost worth it? At what point do working migrants offset that\r
        cost? How much are they contributing to the US economy depending on what\r
        jobs are available? To better understand the tradeoff between the cost\r
        of migration, remittances, and money entering the USA, we have\r
        identified 10 migrants who represent a statistically similar sample of\r
        this larger group.`),M.forEach(p),v.forEach(p),this.h()},h(){g(o,"class","IntroText svelte-1khzzid")},m(y,m){D(y,e,m),_(e,n),D(y,r,m),D(y,o,m),_(o,s),_(s,i),_(o,a),_(o,l),_(l,c),_(o,d),_(o,f),_(f,h)},p:J,i:J,o:J,d(y){y&&p(e),y&&p(r),y&&p(o)}}}class pr extends rt{constructor(e){super(),ot(this,e,null,yr,it,{})}}function xr(t){let e,n,r,o,s,i;return{c(){e=C("div"),n=C("p"),r=F(`As seen in the above graph, the time it takes to pay off the cost of the\r
        migration depends on the job secured by the migrant in the destination\r
        country and the amount of money they send back as remittances every\r
        month. It can take as little as 1 month to work off the cost of the\r
        migration and begin contributing to the economy, but for more expensive\r
        migrations, the payback period can be as long as a year.`),o=U(),s=C("p"),i=F(`The orange bars represent two migrants who paid thousands of US dollars\r
        to migrate but were sent back to their country of origin. They never had\r
        a chance to pay off the amount they invested in the migration. They\r
        never had the opportunity to work in the US, contribute to its economy,\r
        and send money back home.`),this.h()},l(a){e=A(a,"DIV",{class:!0});var l=w(e);n=A(l,"P",{});var c=w(n);r=G(c,`As seen in the above graph, the time it takes to pay off the cost of the\r
        migration depends on the job secured by the migrant in the destination\r
        country and the amount of money they send back as remittances every\r
        month. It can take as little as 1 month to work off the cost of the\r
        migration and begin contributing to the economy, but for more expensive\r
        migrations, the payback period can be as long as a year.`),c.forEach(p),o=q(l),s=A(l,"P",{});var d=w(s);i=G(d,`The orange bars represent two migrants who paid thousands of US dollars\r
        to migrate but were sent back to their country of origin. They never had\r
        a chance to pay off the amount they invested in the migration. They\r
        never had the opportunity to work in the US, contribute to its economy,\r
        and send money back home.`),d.forEach(p),l.forEach(p),this.h()},h(){g(e,"class","MiddleText svelte-x6um5r")},m(a,l){D(a,e,l),_(e,n),_(n,r),_(e,o),_(e,s),_(s,i)},p:J,i:J,o:J,d(a){a&&p(e)}}}class vr extends rt{constructor(e){super(),ot(this,e,null,xr,it,{})}}function br(t){let e,n,r,o,s;return{c(){e=C("div"),n=C("p"),r=F(`The sankey chart represents the occupations for migrants before and after their \r
        migration to the US. There are 8 different categories of occupations. Before migration,\r
        across all the categories, Agriculture production or labor has the most people with 392.\r
        Informal work and Student catgeory also have over 300 people. \r
    `),o=C("p"),s=F(`After migration, the Informal work catgeory has over 450 people and there are changes in\r
        occupations for some of the migrants. By hovering over the origin country occupation nodes, \r
        we get perspective regarding changes for people for a particular occupation when\r
        they move to the US. Hovering over the US occupation nodes, we can see how people \r
        from different occupations in the origin countries take up jobs in a new occupation\r
        category.`),this.h()},l(i){e=A(i,"DIV",{class:!0});var a=w(e);n=A(a,"P",{});var l=w(n);r=G(l,`The sankey chart represents the occupations for migrants before and after their \r
        migration to the US. There are 8 different categories of occupations. Before migration,\r
        across all the categories, Agriculture production or labor has the most people with 392.\r
        Informal work and Student catgeory also have over 300 people. \r
    `),l.forEach(p),o=A(a,"P",{});var c=w(o);s=G(c,`After migration, the Informal work catgeory has over 450 people and there are changes in\r
        occupations for some of the migrants. By hovering over the origin country occupation nodes, \r
        we get perspective regarding changes for people for a particular occupation when\r
        they move to the US. Hovering over the US occupation nodes, we can see how people \r
        from different occupations in the origin countries take up jobs in a new occupation\r
        category.`),c.forEach(p),a.forEach(p),this.h()},h(){g(e,"class","SankeyText svelte-nbohqb")},m(i,a){D(i,e,a),_(e,n),_(n,r),_(e,o),_(o,s)},p:J,i:J,o:J,d(i){i&&p(e)}}}class kr extends rt{constructor(e){super(),ot(this,e,null,br,it,{})}}function wr(t){let e,n,r;return{c(){e=C("div"),n=C("div"),this.h()},l(o){e=A(o,"DIV",{class:!0,slot:!0});var s=w(e);n=A(s,"DIV",{class:!0});var i=w(n);i.forEach(p),s.forEach(p),this.h()},h(){g(n,"class","progress-bars svelte-f2vy7l"),g(e,"class","background svelte-f2vy7l"),g(e,"slot","background"),ne(()=>t[7].call(e))},m(o,s){D(o,e,s),_(e,n),r=en(e,t[7].bind(e))},p:J,d(o){o&&p(e),r()}}}function Mr(t){let e,n,r,o,s,i,a,l,c,d,f,h,y,m,v,E,S,M,x;return r=new pr({}),i=new mr({props:{index:t[2]}}),c=new kr({props:{index:t[2]}}),y=new lr({props:{index:t[2],width:t[5],height:t[6],themeColors:t[0]}}),E=new vr({}),{c(){e=C("div"),n=C("section"),lt(r.$$.fragment),o=U(),s=C("section"),lt(i.$$.fragment),a=U(),l=C("section"),lt(c.$$.fragment),d=U(),f=C("section"),h=F(`Cost of migration projected over time (months).\r
      `),lt(y.$$.fragment),m=U(),v=C("section"),lt(E.$$.fragment),S=U(),M=C("section"),this.h()},l(b){e=A(b,"DIV",{class:!0,slot:!0});var u=w(e);n=A(u,"SECTION",{class:!0});var P=w(n);ct(r.$$.fragment,P),P.forEach(p),o=q(u),s=A(u,"SECTION",{class:!0});var T=w(s);ct(i.$$.fragment,T),T.forEach(p),a=q(u),l=A(u,"SECTION",{class:!0});var R=w(l);ct(c.$$.fragment,R),R.forEach(p),d=q(u),f=A(u,"SECTION",{class:!0});var I=w(f);h=G(I,`Cost of migration projected over time (months).\r
      `),ct(y.$$.fragment,I),I.forEach(p),m=q(u),v=A(u,"SECTION",{class:!0});var j=w(v);ct(E.$$.fragment,j),j.forEach(p),S=q(u),M=A(u,"SECTION",{class:!0});var k=w(M);k.forEach(p),u.forEach(p),this.h()},h(){g(n,"class","svelte-f2vy7l"),g(s,"class","svelte-f2vy7l"),g(l,"class","svelte-f2vy7l"),g(f,"class","svelte-f2vy7l"),g(v,"class","svelte-f2vy7l"),g(M,"class","svelte-f2vy7l"),g(e,"class","foreground svelte-f2vy7l"),g(e,"slot","foreground")},m(b,u){D(b,e,u),_(e,n),ft(r,n,null),_(e,o),_(e,s),ft(i,s,null),_(e,a),_(e,l),ft(c,l,null),_(e,d),_(e,f),_(f,h),ft(y,f,null),_(e,m),_(e,v),ft(E,v,null),_(e,S),_(e,M),x=!0},p(b,u){const P={};u&4&&(P.index=b[2]),i.$set(P);const T={};u&4&&(T.index=b[2]),c.$set(T);const R={};u&4&&(R.index=b[2]),u&32&&(R.width=b[5]),u&64&&(R.height=b[6]),y.$set(R)},i(b){x||(H(r.$$.fragment,b),H(i.$$.fragment,b),H(c.$$.fragment,b),H(y.$$.fragment,b),H(E.$$.fragment,b),x=!0)},o(b){W(r.$$.fragment,b),W(i.$$.fragment,b),W(c.$$.fragment,b),W(y.$$.fragment,b),W(E.$$.fragment,b),x=!1},d(b){b&&p(e),mt(r),mt(i),mt(c),mt(y),mt(E)}}}function Er(t){let e,n,r,o,s,i;function a(h){t[8](h)}function l(h){t[9](h)}function c(h){t[10](h)}function d(h){t[11](h)}let f={top:0,bottom:1,threshold:.5,$$slots:{foreground:[Mr],background:[wr]},$$scope:{ctx:t}};return t[1]!==void 0&&(f.count=t[1]),t[2]!==void 0&&(f.index=t[2]),t[3]!==void 0&&(f.offset=t[3]),t[4]!==void 0&&(f.progress=t[4]),e=new _r({props:f}),ut.push(()=>Ct(e,"count",a)),ut.push(()=>Ct(e,"index",l)),ut.push(()=>Ct(e,"offset",c)),ut.push(()=>Ct(e,"progress",d)),{c(){lt(e.$$.fragment)},l(h){ct(e.$$.fragment,h)},m(h,y){ft(e,h,y),i=!0},p(h,[y]){const m={};y&4196&&(m.$$scope={dirty:y,ctx:h}),!n&&y&2&&(n=!0,m.count=h[1],At(()=>n=!1)),!r&&y&4&&(r=!0,m.index=h[2],At(()=>r=!1)),!o&&y&8&&(o=!0,m.offset=h[3],At(()=>o=!1)),!s&&y&16&&(s=!0,m.progress=h[4],At(()=>s=!1)),e.$set(m)},i(h){i||(H(e.$$.fragment,h),i=!0)},o(h){W(e.$$.fragment,h),i=!1},d(h){mt(e,h)}}}function Nr(t,e,n){let r,o,s,i,a,l;const c={blue:"#112b64",beige:"#e8e4d5",orange:"#e39d12",pink:"#be318f"};function d(){a=this.clientWidth,l=this.clientHeight,n(5,a),n(6,l)}function f(v){r=v,n(1,r)}function h(v){o=v,n(2,o)}function y(v){s=v,n(3,s)}function m(v){i=v,n(4,i)}return[c,r,o,s,i,a,l,d,f,h,y,m]}class Sr extends rt{constructor(e){super(),ot(this,e,Nr,Er,it,{themeColors:0})}get themeColors(){return this.$$.ctx[0]}}function Tr(t){let e,n;return e=new Sr({}),{c(){lt(e.$$.fragment)},l(r){ct(e.$$.fragment,r)},m(r,o){ft(e,r,o),n=!0},p:J,i(r){n||(H(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){mt(e,r)}}}class Ar extends rt{constructor(e){super(),ot(this,e,null,Tr,it,{})}}export{Ar as default};
