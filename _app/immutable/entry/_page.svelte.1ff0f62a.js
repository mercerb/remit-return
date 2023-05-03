import{S as rt,i as ot,s as it,k as C,J as D,a as z,l as R,m as w,K as B,h as p,c as H,n as d,b as V,G as y,g as W,v as He,d as J,f as De,L as Ft,e as se,M as $t,N as ae,q as F,r as G,u as Be,p as le,O as ce,H as K,C as fe,P as yt,Q as Qe,D as me,E as ue,F as he,o as Ze,R as $e,w as ht,T as Ct,y as ct,z as ft,A as mt,U as Rt,B as ut,V as tn}from"../chunks/index.a433e44c.js";function qt(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function en(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Ve(t){let e,n,r;t.length!==2?(e=qt,n=(s,l)=>qt(t(s),l),r=(s,l)=>t(s)-l):(e=t===qt||t===en?t:nn,n=t,r=t);function o(s,l,c=0,g=s.length){if(c<g){if(e(l,l)!==0)return g;do{const f=c+g>>>1;n(s[f],l)<0?c=f+1:g=f}while(c<g)}return c}function a(s,l,c=0,g=s.length){if(c<g){if(e(l,l)!==0)return g;do{const f=c+g>>>1;n(s[f],l)<=0?c=f+1:g=f}while(c<g)}return c}function i(s,l,c=0,g=s.length){const f=o(s,l,c,g-1);return f>c&&r(s[f-1],l)>-r(s[f],l)?f-1:f}return{left:o,center:i,right:a}}function nn(){return 0}function rn(t){return t===null?NaN:+t}const on=Ve(qt),sn=on.right;Ve(rn).center;const an=sn,ln=Math.sqrt(50),cn=Math.sqrt(10),fn=Math.sqrt(2);function jt(t,e,n){const r=(e-t)/Math.max(0,n),o=Math.floor(Math.log10(r)),a=r/Math.pow(10,o),i=a>=ln?10:a>=cn?5:a>=fn?2:1;let s,l,c;return o<0?(c=Math.pow(10,-o)/i,s=Math.round(t*c),l=Math.round(e*c),s/c<t&&++s,l/c>e&&--l,c=-c):(c=Math.pow(10,o)*i,s=Math.round(t/c),l=Math.round(e/c),s*c<t&&++s,l*c>e&&--l),l<s&&.5<=n&&n<2?jt(t,e,n*2):[s,l,c]}function mn(t,e,n){if(e=+e,t=+t,n=+n,!(n>0))return[];if(t===e)return[t];const r=e<t,[o,a,i]=r?jt(e,t,n):jt(t,e,n);if(!(a>=o))return[];const s=a-o+1,l=new Array(s);if(r)if(i<0)for(let c=0;c<s;++c)l[c]=(a-c)/-i;else for(let c=0;c<s;++c)l[c]=(a-c)*i;else if(i<0)for(let c=0;c<s;++c)l[c]=(o+c)/-i;else for(let c=0;c<s;++c)l[c]=(o+c)*i;return l}function Gt(t,e,n){return e=+e,t=+t,n=+n,jt(t,e,n)[2]}function un(t,e,n){e=+e,t=+t,n=+n;const r=e<t,o=r?Gt(e,t,n):Gt(t,e,n);return(r?-1:1)*(o<0?1/-o:o)}function te(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function We(t,e){var n=Object.create(t.prototype);for(var r in e)n[r]=e[r];return n}function Tt(){}var Et=.7,Lt=1/Et,xt="\\s*([+-]?\\d+)\\s*",Nt="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",et="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",hn=/^#([0-9a-f]{3,8})$/,dn=new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`),gn=new RegExp(`^rgb\\(${et},${et},${et}\\)$`),_n=new RegExp(`^rgba\\(${xt},${xt},${xt},${Nt}\\)$`),yn=new RegExp(`^rgba\\(${et},${et},${et},${Nt}\\)$`),pn=new RegExp(`^hsl\\(${Nt},${et},${et}\\)$`),xn=new RegExp(`^hsla\\(${Nt},${et},${et},${Nt}\\)$`),de={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};te(Tt,St,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ge,formatHex:ge,formatHex8:bn,formatHsl:kn,formatRgb:_e,toString:_e});function ge(){return this.rgb().formatHex()}function bn(){return this.rgb().formatHex8()}function kn(){return Fe(this).formatHsl()}function _e(){return this.rgb().formatRgb()}function St(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=hn.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?ye(e):n===3?new X(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?At(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?At(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=dn.exec(t))?new X(e[1],e[2],e[3],1):(e=gn.exec(t))?new X(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=_n.exec(t))?At(e[1],e[2],e[3],e[4]):(e=yn.exec(t))?At(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=pn.exec(t))?be(e[1],e[2]/100,e[3]/100,1):(e=xn.exec(t))?be(e[1],e[2]/100,e[3]/100,e[4]):de.hasOwnProperty(t)?ye(de[t]):t==="transparent"?new X(NaN,NaN,NaN,0):null}function ye(t){return new X(t>>16&255,t>>8&255,t&255,1)}function At(t,e,n,r){return r<=0&&(t=e=n=NaN),new X(t,e,n,r)}function vn(t){return t instanceof Tt||(t=St(t)),t?(t=t.rgb(),new X(t.r,t.g,t.b,t.opacity)):new X}function Yt(t,e,n,r){return arguments.length===1?vn(t):new X(t,e,n,r??1)}function X(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}te(X,Yt,We(Tt,{brighter(t){return t=t==null?Lt:Math.pow(Lt,t),new X(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Et:Math.pow(Et,t),new X(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new X(gt(this.r),gt(this.g),gt(this.b),Ot(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:pe,formatHex:pe,formatHex8:wn,formatRgb:xe,toString:xe}));function pe(){return`#${dt(this.r)}${dt(this.g)}${dt(this.b)}`}function wn(){return`#${dt(this.r)}${dt(this.g)}${dt(this.b)}${dt((isNaN(this.opacity)?1:this.opacity)*255)}`}function xe(){const t=Ot(this.opacity);return`${t===1?"rgb(":"rgba("}${gt(this.r)}, ${gt(this.g)}, ${gt(this.b)}${t===1?")":`, ${t})`}`}function Ot(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function gt(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function dt(t){return t=gt(t),(t<16?"0":"")+t.toString(16)}function be(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new $(t,e,n,r)}function Fe(t){if(t instanceof $)return new $(t.h,t.s,t.l,t.opacity);if(t instanceof Tt||(t=St(t)),!t)return new $;if(t instanceof $)return t;t=t.rgb();var e=t.r/255,n=t.g/255,r=t.b/255,o=Math.min(e,n,r),a=Math.max(e,n,r),i=NaN,s=a-o,l=(a+o)/2;return s?(e===a?i=(n-r)/s+(n<r)*6:n===a?i=(r-e)/s+2:i=(e-n)/s+4,s/=l<.5?a+o:2-a-o,i*=60):s=l>0&&l<1?0:i,new $(i,s,l,t.opacity)}function Mn(t,e,n,r){return arguments.length===1?Fe(t):new $(t,e,n,r??1)}function $(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}te($,Mn,We(Tt,{brighter(t){return t=t==null?Lt:Math.pow(Lt,t),new $(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Et:Math.pow(Et,t),new $(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,o=2*n-r;return new X(Vt(t>=240?t-240:t+120,o,r),Vt(t,o,r),Vt(t<120?t+240:t-120,o,r),this.opacity)},clamp(){return new $(ke(this.h),Pt(this.s),Pt(this.l),Ot(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Ot(this.opacity);return`${t===1?"hsl(":"hsla("}${ke(this.h)}, ${Pt(this.s)*100}%, ${Pt(this.l)*100}%${t===1?")":`, ${t})`}`}}));function ke(t){return t=(t||0)%360,t<0?t+360:t}function Pt(t){return Math.max(0,Math.min(1,t||0))}function Vt(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const ee=t=>()=>t;function En(t,e){return function(n){return t+n*e}}function Nn(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}function Sn(t){return(t=+t)==1?Ge:function(e,n){return n-e?Nn(e,n,t):ee(isNaN(e)?n:e)}}function Ge(t,e){var n=e-t;return n?En(t,n):ee(isNaN(t)?e:t)}const ve=function t(e){var n=Sn(e);function r(o,a){var i=n((o=Yt(o)).r,(a=Yt(a)).r),s=n(o.g,a.g),l=n(o.b,a.b),c=Ge(o.opacity,a.opacity);return function(g){return o.r=i(g),o.g=s(g),o.b=l(g),o.opacity=c(g),o+""}}return r.gamma=t,r}(1);function Tn(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,r=e.slice(),o;return function(a){for(o=0;o<n;++o)r[o]=t[o]*(1-a)+e[o]*a;return r}}function Cn(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Rn(t,e){var n=e?e.length:0,r=t?Math.min(n,t.length):0,o=new Array(r),a=new Array(n),i;for(i=0;i<r;++i)o[i]=ne(t[i],e[i]);for(;i<n;++i)a[i]=e[i];return function(s){for(i=0;i<r;++i)a[i]=o[i](s);return a}}function An(t,e){var n=new Date;return t=+t,e=+e,function(r){return n.setTime(t*(1-r)+e*r),n}}function Ut(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function Pn(t,e){var n={},r={},o;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(o in e)o in t?n[o]=ne(t[o],e[o]):r[o]=e[o];return function(a){for(o in n)r[o]=n[o](a);return r}}var Xt=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Wt=new RegExp(Xt.source,"g");function In(t){return function(){return t}}function qn(t){return function(e){return t(e)+""}}function jn(t,e){var n=Xt.lastIndex=Wt.lastIndex=0,r,o,a,i=-1,s=[],l=[];for(t=t+"",e=e+"";(r=Xt.exec(t))&&(o=Wt.exec(e));)(a=o.index)>n&&(a=e.slice(n,a),s[i]?s[i]+=a:s[++i]=a),(r=r[0])===(o=o[0])?s[i]?s[i]+=o:s[++i]=o:(s[++i]=null,l.push({i,x:Ut(r,o)})),n=Wt.lastIndex;return n<e.length&&(a=e.slice(n),s[i]?s[i]+=a:s[++i]=a),s.length<2?l[0]?qn(l[0].x):In(e):(e=l.length,function(c){for(var g=0,f;g<e;++g)s[(f=l[g]).i]=f.x(c);return s.join("")})}function ne(t,e){var n=typeof e,r;return e==null||n==="boolean"?ee(e):(n==="number"?Ut:n==="string"?(r=St(e))?(e=r,ve):jn:e instanceof St?ve:e instanceof Date?An:Cn(e)?Tn:Array.isArray(e)?Rn:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Pn:Ut)(t,e)}function Ln(t,e){return t=+t,e=+e,function(n){return Math.round(t*(1-n)+e*n)}}function On(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function zt(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,r=t.slice(0,n);return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]}function bt(t){return t=zt(Math.abs(t)),t?t[1]:NaN}function Un(t,e){return function(n,r){for(var o=n.length,a=[],i=0,s=t[0],l=0;o>0&&s>0&&(l+s+1>r&&(s=Math.max(1,r-l)),a.push(n.substring(o-=s,o+s)),!((l+=s+1)>r));)s=t[i=(i+1)%t.length];return a.reverse().join(e)}}function zn(t){return function(e){return e.replace(/[0-9]/g,function(n){return t[+n]})}}var Hn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Ht(t){if(!(e=Hn.exec(t)))throw new Error("invalid format: "+t);var e;return new re({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Ht.prototype=re.prototype;function re(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}re.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Dn(t){t:for(var e=t.length,n=1,r=-1,o;n<e;++n)switch(t[n]){case".":r=o=n;break;case"0":r===0&&(r=n),o=n;break;default:if(!+t[n])break t;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(o+1):t}var Ye;function Bn(t,e){var n=zt(t,e);if(!n)return t+"";var r=n[0],o=n[1],a=o-(Ye=Math.max(-8,Math.min(8,Math.floor(o/3)))*3)+1,i=r.length;return a===i?r:a>i?r+new Array(a-i+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+zt(t,Math.max(0,e+a-1))[0]}function we(t,e){var n=zt(t,e);if(!n)return t+"";var r=n[0],o=n[1];return o<0?"0."+new Array(-o).join("0")+r:r.length>o+1?r.slice(0,o+1)+"."+r.slice(o+1):r+new Array(o-r.length+2).join("0")}const Me={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:On,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>we(t*100,e),r:we,s:Bn,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Ee(t){return t}var Ne=Array.prototype.map,Se=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Vn(t){var e=t.grouping===void 0||t.thousands===void 0?Ee:Un(Ne.call(t.grouping,Number),t.thousands+""),n=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",o=t.decimal===void 0?".":t.decimal+"",a=t.numerals===void 0?Ee:zn(Ne.call(t.numerals,String)),i=t.percent===void 0?"%":t.percent+"",s=t.minus===void 0?"−":t.minus+"",l=t.nan===void 0?"NaN":t.nan+"";function c(f){f=Ht(f);var u=f.fill,x=f.align,_=f.sign,k=f.symbol,M=f.zero,T=f.width,E=f.comma,P=f.precision,b=f.trim,m=f.type;m==="n"?(E=!0,m="g"):Me[m]||(P===void 0&&(P=12),b=!0,m="g"),(M||u==="0"&&x==="=")&&(M=!0,u="0",x="=");var A=k==="$"?n:k==="#"&&/[boxX]/.test(m)?"0"+m.toLowerCase():"",h=k==="$"?r:/[%p]/.test(m)?i:"",N=Me[m],I=/[defgprs%]/.test(m);P=P===void 0?6:/[gprs]/.test(m)?Math.max(1,Math.min(21,P)):Math.max(0,Math.min(20,P));function L(v){var O=A,q=h,j,nt,Q;if(m==="c")q=N(v)+q,v="";else{v=+v;var Z=v<0||1/v<0;if(v=isNaN(v)?l:N(Math.abs(v),P),b&&(v=Dn(v)),Z&&+v==0&&_!=="+"&&(Z=!1),O=(Z?_==="("?_:s:_==="-"||_==="("?"":_)+O,q=(m==="s"?Se[8+Ye/3]:"")+q+(Z&&_==="("?")":""),I){for(j=-1,nt=v.length;++j<nt;)if(Q=v.charCodeAt(j),48>Q||Q>57){q=(Q===46?o+v.slice(j+1):v.slice(j))+q,v=v.slice(0,j);break}}}E&&!M&&(v=e(v,1/0));var S=O.length+v.length+q.length,U=S<T?new Array(T-S+1).join(u):"";switch(E&&M&&(v=e(U+v,U.length?T-q.length:1/0),U=""),x){case"<":v=O+v+q+U;break;case"=":v=O+U+v+q;break;case"^":v=U.slice(0,S=U.length>>1)+O+v+q+U.slice(S);break;default:v=U+O+v+q;break}return a(v)}return L.toString=function(){return f+""},L}function g(f,u){var x=c((f=Ht(f),f.type="f",f)),_=Math.max(-8,Math.min(8,Math.floor(bt(u)/3)))*3,k=Math.pow(10,-_),M=Se[8+_/3];return function(T){return x(k*T)+M}}return{format:c,formatPrefix:g}}var It,Xe,Ke;Wn({thousands:",",grouping:[3],currency:["$",""]});function Wn(t){return It=Vn(t),Xe=It.format,Ke=It.formatPrefix,It}function Fn(t){return Math.max(0,-bt(Math.abs(t)))}function Gn(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(bt(e)/3)))*3-bt(Math.abs(t)))}function Yn(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,bt(e)-bt(t))+1}function Xn(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}function Kn(t){return function(){return t}}function Jn(t){return+t}var Te=[0,1];function pt(t){return t}function Kt(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:Kn(isNaN(e)?NaN:.5)}function Qn(t,e){var n;return t>e&&(n=t,t=e,e=n),function(r){return Math.max(t,Math.min(e,r))}}function Zn(t,e,n){var r=t[0],o=t[1],a=e[0],i=e[1];return o<r?(r=Kt(o,r),a=n(i,a)):(r=Kt(r,o),a=n(a,i)),function(s){return a(r(s))}}function $n(t,e,n){var r=Math.min(t.length,e.length)-1,o=new Array(r),a=new Array(r),i=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++i<r;)o[i]=Kt(t[i],t[i+1]),a[i]=n(e[i],e[i+1]);return function(s){var l=an(t,s,1,r)-1;return a[l](o[l](s))}}function tr(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function er(){var t=Te,e=Te,n=ne,r,o,a,i=pt,s,l,c;function g(){var u=Math.min(t.length,e.length);return i!==pt&&(i=Qn(t[0],t[u-1])),s=u>2?$n:Zn,l=c=null,f}function f(u){return u==null||isNaN(u=+u)?a:(l||(l=s(t.map(r),e,n)))(r(i(u)))}return f.invert=function(u){return i(o((c||(c=s(e,t.map(r),Ut)))(u)))},f.domain=function(u){return arguments.length?(t=Array.from(u,Jn),g()):t.slice()},f.range=function(u){return arguments.length?(e=Array.from(u),g()):e.slice()},f.rangeRound=function(u){return e=Array.from(u),n=Ln,g()},f.clamp=function(u){return arguments.length?(i=u?!0:pt,g()):i!==pt},f.interpolate=function(u){return arguments.length?(n=u,g()):n},f.unknown=function(u){return arguments.length?(a=u,f):a},function(u,x){return r=u,o=x,g()}}function nr(){return er()(pt,pt)}function rr(t,e,n,r){var o=un(t,e,n),a;switch(r=Ht(r??",f"),r.type){case"s":{var i=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(a=Gn(o,i))&&(r.precision=a),Ke(r,i)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=Yn(o,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=Fn(o))&&(r.precision=a-(r.type==="%")*2);break}}return Xe(r)}function or(t){var e=t.domain;return t.ticks=function(n){var r=e();return mn(r[0],r[r.length-1],n??10)},t.tickFormat=function(n,r){var o=e();return rr(o[0],o[o.length-1],n??10,r)},t.nice=function(n){n==null&&(n=10);var r=e(),o=0,a=r.length-1,i=r[o],s=r[a],l,c,g=10;for(s<i&&(c=i,i=s,s=c,c=o,o=a,a=c);g-- >0;){if(c=Gt(i,s,n),c===l)return r[o]=i,r[a]=s,e(r);if(c>0)i=Math.floor(i/c)*c,s=Math.ceil(s/c)*c;else if(c<0)i=Math.ceil(i*c)/c,s=Math.floor(s*c)/c;else break;l=c}return t},t}function Jt(){var t=nr();return t.copy=function(){return tr(t,Jt())},Xn.apply(t,arguments),or(t)}function wt(t,e,n){this.k=t,this.x=e,this.y=n}wt.prototype={constructor:wt,scale:function(t){return t===1?this:new wt(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new wt(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};wt.prototype;function Qt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Ce(t,{delay:e=0,speed:n,duration:r,easing:o=Qt}={}){let a=t.getTotalLength();const i=getComputedStyle(t);return i.strokeLinecap!=="butt"&&(a+=parseInt(i.strokeWidth)),r===void 0?n===void 0?r=800:r=a/n:typeof r=="function"&&(r=r(a)),{delay:e,duration:r,easing:o,css:(s,l)=>`
			stroke-dasharray: ${a};
			stroke-dashoffset: ${l*a};
		`}}const Mt=[{migrant_rsp_id:4645,values:[{month:0,mig_cost_left:303,remit:168,money_us:529},{month:1,mig_cost_left:0,remit:168,money_us:832},{month:2,mig_cost_left:0,remit:168,money_us:832},{month:3,mig_cost_left:0,remit:168,money_us:832},{month:4,mig_cost_left:0,remit:168,money_us:832},{month:5,mig_cost_left:0,remit:168,money_us:832},{month:6,mig_cost_left:0,remit:168,money_us:832},{month:7,mig_cost_left:0,remit:168,money_us:832},{month:8,mig_cost_left:0,remit:168,money_us:832},{month:9,mig_cost_left:0,remit:168,money_us:832},{month:10,mig_cost_left:0,remit:168,money_us:832},{month:11,mig_cost_left:0,remit:168,money_us:832},{month:12,mig_cost_left:0,remit:168,money_us:832},{month:13,mig_cost_left:0,remit:168,money_us:832},{month:14,mig_cost_left:0,remit:168,money_us:832},{month:15,mig_cost_left:0,remit:168,money_us:832}]},{migrant_rsp_id:1358,values:[{month:0,mig_cost_left:3e3,remit:0,money_us:0},{month:1,mig_cost_left:3e3,remit:0,money_us:0},{month:2,mig_cost_left:3e3,remit:0,money_us:0},{month:3,mig_cost_left:3e3,remit:0,money_us:0},{month:4,mig_cost_left:3e3,remit:0,money_us:0},{month:5,mig_cost_left:3e3,remit:0,money_us:0},{month:6,mig_cost_left:3e3,remit:0,money_us:0},{month:7,mig_cost_left:3e3,remit:0,money_us:0},{month:8,mig_cost_left:3e3,remit:0,money_us:0},{month:9,mig_cost_left:3e3,remit:0,money_us:0},{month:10,mig_cost_left:3e3,remit:0,money_us:0},{month:11,mig_cost_left:3e3,remit:0,money_us:0},{month:12,mig_cost_left:3e3,remit:0,money_us:0},{month:13,mig_cost_left:3e3,remit:0,money_us:0},{month:14,mig_cost_left:3e3,remit:0,money_us:0},{month:15,mig_cost_left:3e3,remit:0,money_us:0}]},{migrant_rsp_id:1743,values:[{month:0,mig_cost_left:11e3,remit:17,money_us:0},{month:1,mig_cost_left:10017,remit:17,money_us:0},{month:2,mig_cost_left:9034,remit:17,money_us:0},{month:3,mig_cost_left:8051,remit:17,money_us:0},{month:4,mig_cost_left:7068,remit:17,money_us:0},{month:5,mig_cost_left:6085,remit:17,money_us:0},{month:6,mig_cost_left:5102,remit:17,money_us:0},{month:7,mig_cost_left:4119,remit:17,money_us:0},{month:8,mig_cost_left:3136,remit:17,money_us:0},{month:9,mig_cost_left:2153,remit:17,money_us:0},{month:10,mig_cost_left:1170,remit:17,money_us:0},{month:11,mig_cost_left:187,remit:17,money_us:796},{month:12,mig_cost_left:0,remit:17,money_us:983},{month:13,mig_cost_left:0,remit:17,money_us:983},{month:14,mig_cost_left:0,remit:17,money_us:983},{month:15,mig_cost_left:0,remit:17,money_us:983}]},{migrant_rsp_id:2399,values:[{month:0,mig_cost_left:59,remit:1e3,money_us:0},{month:1,mig_cost_left:59,remit:1e3,money_us:0},{month:2,mig_cost_left:59,remit:1e3,money_us:0},{month:3,mig_cost_left:59,remit:1e3,money_us:0},{month:4,mig_cost_left:59,remit:1e3,money_us:0},{month:5,mig_cost_left:59,remit:1e3,money_us:0},{month:6,mig_cost_left:59,remit:1e3,money_us:0},{month:7,mig_cost_left:59,remit:1e3,money_us:0},{month:8,mig_cost_left:59,remit:1e3,money_us:0},{month:9,mig_cost_left:59,remit:1e3,money_us:0},{month:10,mig_cost_left:59,remit:1e3,money_us:0},{month:11,mig_cost_left:59,remit:1e3,money_us:0},{month:12,mig_cost_left:59,remit:1e3,money_us:0},{month:13,mig_cost_left:59,remit:1e3,money_us:0},{month:14,mig_cost_left:59,remit:1e3,money_us:0},{month:15,mig_cost_left:59,remit:1e3,money_us:0}]},{migrant_rsp_id:853,values:[{month:0,mig_cost_left:421,remit:25,money_us:554},{month:1,mig_cost_left:0,remit:25,money_us:975},{month:2,mig_cost_left:0,remit:25,money_us:975},{month:3,mig_cost_left:0,remit:25,money_us:975},{month:4,mig_cost_left:0,remit:25,money_us:975},{month:5,mig_cost_left:0,remit:25,money_us:975},{month:6,mig_cost_left:0,remit:25,money_us:975},{month:7,mig_cost_left:0,remit:25,money_us:975},{month:8,mig_cost_left:0,remit:25,money_us:975},{month:9,mig_cost_left:0,remit:25,money_us:975},{month:10,mig_cost_left:0,remit:25,money_us:975},{month:11,mig_cost_left:0,remit:25,money_us:975},{month:12,mig_cost_left:0,remit:25,money_us:975},{month:13,mig_cost_left:0,remit:25,money_us:975},{month:14,mig_cost_left:0,remit:25,money_us:975},{month:15,mig_cost_left:0,remit:25,money_us:975}]},{migrant_rsp_id:1575,values:[{month:0,mig_cost_left:842,remit:25,money_us:133},{month:1,mig_cost_left:0,remit:25,money_us:975},{month:2,mig_cost_left:0,remit:25,money_us:975},{month:3,mig_cost_left:0,remit:25,money_us:975},{month:4,mig_cost_left:0,remit:25,money_us:975},{month:5,mig_cost_left:0,remit:25,money_us:975},{month:6,mig_cost_left:0,remit:25,money_us:975},{month:7,mig_cost_left:0,remit:25,money_us:975},{month:8,mig_cost_left:0,remit:25,money_us:975},{month:9,mig_cost_left:0,remit:25,money_us:975},{month:10,mig_cost_left:0,remit:25,money_us:975},{month:11,mig_cost_left:0,remit:25,money_us:975},{month:12,mig_cost_left:0,remit:25,money_us:975},{month:13,mig_cost_left:0,remit:25,money_us:975},{month:14,mig_cost_left:0,remit:25,money_us:975},{month:15,mig_cost_left:0,remit:25,money_us:975}]},{migrant_rsp_id:3921,values:[{month:0,mig_cost_left:6e3,remit:0,money_us:0},{month:1,mig_cost_left:6e3,remit:0,money_us:0},{month:2,mig_cost_left:6e3,remit:0,money_us:0},{month:3,mig_cost_left:6e3,remit:0,money_us:0},{month:4,mig_cost_left:6e3,remit:0,money_us:0},{month:5,mig_cost_left:6e3,remit:0,money_us:0},{month:6,mig_cost_left:6e3,remit:0,money_us:0},{month:7,mig_cost_left:6e3,remit:0,money_us:0},{month:8,mig_cost_left:6e3,remit:0,money_us:0},{month:9,mig_cost_left:6e3,remit:0,money_us:0},{month:10,mig_cost_left:6e3,remit:0,money_us:0},{month:11,mig_cost_left:6e3,remit:0,money_us:0},{month:12,mig_cost_left:6e3,remit:0,money_us:0},{month:13,mig_cost_left:6e3,remit:0,money_us:0},{month:14,mig_cost_left:6e3,remit:0,money_us:0},{month:15,mig_cost_left:6e3,remit:0,money_us:0}]},{migrant_rsp_id:810,values:[{month:0,mig_cost_left:1516,remit:200,money_us:0},{month:1,mig_cost_left:716,remit:200,money_us:84},{month:2,mig_cost_left:0,remit:200,money_us:800},{month:3,mig_cost_left:0,remit:200,money_us:800},{month:4,mig_cost_left:0,remit:200,money_us:800},{month:5,mig_cost_left:0,remit:200,money_us:800},{month:6,mig_cost_left:0,remit:200,money_us:800},{month:7,mig_cost_left:0,remit:200,money_us:800},{month:8,mig_cost_left:0,remit:200,money_us:800},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]},{migrant_rsp_id:1620,values:[{month:0,mig_cost_left:1348,remit:200,money_us:0},{month:1,mig_cost_left:548,remit:200,money_us:252},{month:2,mig_cost_left:0,remit:200,money_us:800},{month:3,mig_cost_left:0,remit:200,money_us:800},{month:4,mig_cost_left:0,remit:200,money_us:800},{month:5,mig_cost_left:0,remit:200,money_us:800},{month:6,mig_cost_left:0,remit:200,money_us:800},{month:7,mig_cost_left:0,remit:200,money_us:800},{month:8,mig_cost_left:0,remit:200,money_us:800},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]},{migrant_rsp_id:1083,values:[{month:0,mig_cost_left:7e3,remit:200,money_us:0},{month:1,mig_cost_left:6200,remit:200,money_us:0},{month:2,mig_cost_left:5400,remit:200,money_us:0},{month:3,mig_cost_left:4600,remit:200,money_us:0},{month:4,mig_cost_left:3800,remit:200,money_us:0},{month:5,mig_cost_left:3e3,remit:200,money_us:0},{month:6,mig_cost_left:2200,remit:200,money_us:0},{month:7,mig_cost_left:1400,remit:200,money_us:0},{month:8,mig_cost_left:600,remit:200,money_us:200},{month:9,mig_cost_left:0,remit:200,money_us:800},{month:10,mig_cost_left:0,remit:200,money_us:800},{month:11,mig_cost_left:0,remit:200,money_us:800},{month:12,mig_cost_left:0,remit:200,money_us:800},{month:13,mig_cost_left:0,remit:200,money_us:800},{month:14,mig_cost_left:0,remit:200,money_us:800},{month:15,mig_cost_left:0,remit:200,money_us:800}]}];function Re(t,e,n){const r=t.slice();return r[22]=e[n],r}function Ae(t,e,n){const r=t.slice();return r[25]=e[n],r}function Pe(t,e,n){const r=t.slice();return r[28]=e[n],r[30]=n,r}function Ie(t){let e,n,r=Mt,o=[];for(let i=0;i<r.length;i+=1)o[i]=qe(Pe(t,r,i));const a=i=>J(o[i],1,1,()=>{o[i]=null});return{c(){for(let i=0;i<o.length;i+=1)o[i].c();e=se()},l(i){for(let s=0;s<o.length;s+=1)o[s].l(i);e=se()},m(i,s){for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(i,s);V(i,e,s),n=!0},p(i,s){if(s&768){r=Mt;let l;for(l=0;l<r.length;l+=1){const c=Pe(i,r,l);o[l]?(o[l].p(c,s),W(o[l],1)):(o[l]=qe(c),o[l].c(),W(o[l],1),o[l].m(e.parentNode,e))}for(He(),l=r.length;l<o.length;l+=1)a(l);De()}},i(i){if(!n){for(let s=0;s<r.length;s+=1)W(o[s]);n=!0}},o(i){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)J(o[s]);n=!1},d(i){Ft(o,i),i&&p(e)}}}function qe(t){let e,n,r;return{c(){e=D("polyline"),this.h()},l(o){e=B(o,"polyline",{points:!0,fill:!0,stroke:!0,"stroke-width":!0}),w(e).forEach(p),this.h()},h(){d(e,"points",t[9](t[28].values)),d(e,"fill","none"),d(e,"stroke",t[8](t[28])),d(e,"stroke-width","3")},m(o,a){V(o,e,a),r=!0},p(o,a){t=o},i(o){r||($t(()=>{r&&(n||(n=ae(e,Ce,{duration:5e3,easing:Qt},!0)),n.run(1))}),r=!0)},o(o){n||(n=ae(e,Ce,{duration:5e3,easing:Qt},!1)),n.run(0),r=!1},d(o){o&&p(e),o&&n&&n.end()}}}function je(t){let e,n,r,o=t[25]+"",a,i;return{c(){e=D("g"),n=D("line"),r=D("text"),a=F(o),this.h()},l(s){e=B(s,"g",{class:!0,opacity:!0,transform:!0});var l=w(e);n=B(l,"line",{stroke:!0,y2:!0}),w(n).forEach(p),r=B(l,"text",{dy:!0,fill:!0,y:!0,x:!0,"text-anchor":!0});var c=w(r);a=G(c,o),c.forEach(p),l.forEach(p),this.h()},h(){d(n,"stroke","black"),d(n,"y2","6"),d(r,"dy","0.71em"),d(r,"fill","black"),d(r,"y","10"),d(r,"x","-5"),d(r,"text-anchor","middle"),d(e,"class","tick"),d(e,"opacity","1"),d(e,"transform",i="translate("+t[5](t[25])+",0)")},m(s,l){V(s,e,l),y(e,n),y(e,r),y(r,a)},p(s,l){l&4&&o!==(o=s[25]+"")&&Be(a,o),l&36&&i!==(i="translate("+s[5](s[25])+",0)")&&d(e,"transform",i)},d(s){s&&p(e)}}}function Le(t){let e,n,r,o="$"+t[22],a,i;return{c(){e=D("g"),n=D("line"),r=D("text"),a=F(o),this.h()},l(s){e=B(s,"g",{class:!0,opacity:!0,transform:!0});var l=w(e);n=B(l,"line",{stroke:!0,x2:!0}),w(n).forEach(p),r=B(l,"text",{dy:!0,fill:!0,x:!0,"text-anchor":!0});var c=w(r);a=G(c,o),c.forEach(p),l.forEach(p),this.h()},h(){d(n,"stroke","black"),d(n,"x2","-5"),d(r,"dy","0.32em"),d(r,"fill","black"),d(r,"x","-10"),d(r,"text-anchor","end"),d(e,"class","tick"),d(e,"opacity","1"),d(e,"transform",i="translate(0,"+t[4](t[22])+")")},m(s,l){V(s,e,l),y(e,n),y(e,r),y(r,a)},p(s,l){l&8&&o!==(o="$"+s[22])&&Be(a,o),l&24&&i!==(i="translate(0,"+s[4](s[22])+")")&&d(e,"transform",i)},d(s){s&&p(e)}}}function ir(t){let e,n,r,o,a,i,s,l,c,g,f,u,x,_,k,M=t[0]>1&&Ie(t),T=t[2],E=[];for(let m=0;m<T.length;m+=1)E[m]=je(Ae(t,T,m));let P=t[3],b=[];for(let m=0;m<P.length;m+=1)b[m]=Le(Re(t,P,m));return{c(){e=C("div"),n=D("svg"),r=D("g"),o=D("line"),i=D("line"),l=D("text"),c=D("text"),g=D("g"),M&&M.c(),f=D("g");for(let m=0;m<E.length;m+=1)E[m].c();u=D("g");for(let m=0;m<b.length;m+=1)b[m].c();x=z(),_=C("div"),this.h()},l(m){e=R(m,"DIV",{class:!0});var A=w(e);n=B(A,"svg",{width:!0,height:!0,id:!0});var h=w(n);r=B(h,"g",{});var N=w(r);o=B(N,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0}),w(o).forEach(p),i=B(N,"line",{x1:!0,x2:!0,y1:!0,y2:!0,stroke:!0,"stroke-width":!0,class:!0}),w(i).forEach(p),l=B(N,"text",{x:!0,y:!0,transform:!0});var I=w(l);I.forEach(p),c=B(N,"text",{x:!0,y:!0});var L=w(c);L.forEach(p),N.forEach(p),g=B(h,"g",{});var v=w(g);M&&M.l(v),v.forEach(p),f=B(h,"g",{transform:!0});var O=w(f);for(let j=0;j<E.length;j+=1)E[j].l(O);O.forEach(p),u=B(h,"g",{transform:!0});var q=w(u);for(let j=0;j<b.length;j+=1)b[j].l(q);q.forEach(p),h.forEach(p),A.forEach(p),x=H(m),_=R(m,"DIV",{id:!0}),w(_).forEach(p),this.h()},h(){d(o,"x1",t[6].left),d(o,"x2",Zt-t[6].right),d(o,"y1",lt-t[6].bottom),d(o,"y2",lt-t[6].bottom),d(o,"stroke",a=t[1].blue),d(o,"stroke-width","2"),d(o,"class","axis"),d(i,"x1",t[6].left),d(i,"x2",t[6].left),d(i,"y1",t[6].top),d(i,"y2",lt-t[6].bottom),d(i,"stroke",s=t[1].blue),d(i,"stroke-width","2"),d(i,"class","axis"),d(l,"x",t[6].left),d(l,"y",lt-t[6].bottom),d(l,"transform","translate(0,0) rotate(90)"),d(c,"x",t[6].left),d(c,"y",t[6].top),d(f,"transform","translate(0, "+(lt-t[6].bottom)+")"),d(u,"transform","translate("+t[6].left+", 0)"),d(n,"width",Zt),d(n,"height",lt),d(n,"id",t[7]),d(e,"class","LineChart2 svelte-1s8vqje"),d(_,"id","chart")},m(m,A){V(m,e,A),y(e,n),y(n,r),y(r,o),y(r,i),y(r,l),y(r,c),y(n,g),M&&M.m(g,null),y(n,f);for(let h=0;h<E.length;h+=1)E[h]&&E[h].m(f,null);y(n,u);for(let h=0;h<b.length;h+=1)b[h]&&b[h].m(u,null);V(m,x,A),V(m,_,A),k=!0},p(m,[A]){if((!k||A&2&&a!==(a=m[1].blue))&&d(o,"stroke",a),(!k||A&2&&s!==(s=m[1].blue))&&d(i,"stroke",s),m[0]>1?M?(M.p(m,A),A&1&&W(M,1)):(M=Ie(m),M.c(),W(M,1),M.m(g,null)):M&&(He(),J(M,1,1,()=>{M=null}),De()),A&36){T=m[2];let h;for(h=0;h<T.length;h+=1){const N=Ae(m,T,h);E[h]?E[h].p(N,A):(E[h]=je(N),E[h].c(),E[h].m(f,null))}for(;h<E.length;h+=1)E[h].d(1);E.length=T.length}if(A&24){P=m[3];let h;for(h=0;h<P.length;h+=1){const N=Re(m,P,h);b[h]?b[h].p(N,A):(b[h]=Le(N),b[h].c(),b[h].m(u,null))}for(;h<b.length;h+=1)b[h].d(1);b.length=P.length}},i(m){k||(W(M),k=!0)},o(m){J(M),k=!1},d(m){m&&p(e),M&&M.d(),Ft(E,m),Ft(b,m),m&&p(x),m&&p(_)}}}let Zt=600,lt=400,Oe=10;function sr(t,e,n){let r,o,{index:a,width:i,height:s,projection:l,themeColors:c}=e;const g={top:50,left:60,right:50,bottom:50},f=Mt.flatMap(h=>h.values.map(N=>N.month)),u=[...new Set(f)],x=Math.min(...u),_=Math.max(...u),k=Mt.flatMap(h=>h.values.map(N=>N.mig_cost_left)),M=Math.min(...k),T=Math.max(...k);let E=[],P=[];const b="svg-container-"+Math.random()*1e6;function m(h){return h.values.every(N=>N.remit==0)&&h.values.every(N=>N.money_us==0)?c.orange:c.blue}function A(h){return h.map(function(N){return r(N.month)+","+o(N.mig_cost_left)}).join(" ")}return t.$$set=h=>{"index"in h&&n(0,a=h.index),"width"in h&&n(10,i=h.width),"height"in h&&n(11,s=h.height),"projection"in h&&n(12,l=h.projection),"themeColors"in h&&n(1,c=h.themeColors)},t.$$.update=()=>{if(t.$$.dirty&12&&(n(2,E=[]),n(3,P=[]),Mt.length>1)){let h=[Math.round(x),Math.round(_+1)],N=Math.floor((h[1]-h[0])/Oe);for(let v=h[0];v<h[1];v=v+Math.max(1,N))E.push(v);let I=[Math.round(M),Math.round(T+1)],L=Math.floor((I[1]-I[0])/Oe);L=1e3*Math.round(L/1e3);for(let v=I[0];v<I[1];v=v+Math.max(1,L))P.push(v)}},n(5,r=Jt().domain([x,_]).range([g.left,Zt-g.right])),n(4,o=Jt().domain([M,T]).range([lt-g.bottom,g.top])),[a,c,E,P,o,r,g,b,m,A,i,s,l]}class ar extends rt{constructor(e){super(),ot(this,e,sr,ir,it,{index:0,width:10,height:11,projection:12,themeColors:1})}}function lr(t){let e,n,r,o,a,i,s,l,c,g,f,u,x,_,k,M,T,E,P,b,m,A,h,N,I,L,v,O,q;return{c(){e=C("main"),n=C("html"),r=C("head"),o=C("meta"),a=z(),i=C("style"),s=F(`.node rect {
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
                    position: relative; 
                    text-anchor: middle;
                }
                canvas {
                    position: absolute;
                }`),l=z(),c=C("body"),g=C("div"),f=C("p"),u=F("Original Occupation"),x=z(),_=C("p"),k=F("US Occupation"),M=z(),T=C("p"),E=C("canvas"),P=z(),b=D("svg"),m=z(),A=C("script"),N=z(),I=C("script"),v=z(),O=C("script"),q=F(`var margin = { top: 1, right: 1, bottom: 10, left: 1 },
                        width = 550 - margin.left - margin.right,
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
                    }`),this.h()},l(j){e=R(j,"MAIN",{});var nt=w(e);n=R(nt,"HTML",{lang:!0});var Q=w(n);r=R(Q,"HEAD",{});var Z=w(r);o=R(Z,"META",{charset:!0}),a=H(Z),i=R(Z,"STYLE",{});var S=w(i);s=G(S,`.node rect {
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
                    position: relative; 
                    text-anchor: middle;
                }
                canvas {
                    position: absolute;
                }`),S.forEach(p),Z.forEach(p),l=H(Q),c=R(Q,"BODY",{});var U=w(c);g=R(U,"DIV",{class:!0});var st=w(g);f=R(st,"P",{style:!0});var _t=w(f);u=G(_t,"Original Occupation"),_t.forEach(p),x=H(st),_=R(st,"P",{style:!0});var kt=w(_);k=G(kt,"US Occupation"),kt.forEach(p),st.forEach(p),M=H(U),T=R(U,"P",{id:!0});var Y=w(T);E=R(Y,"CANVAS",{width:!0,height:!0}),w(E).forEach(p),P=H(Y),b=B(Y,"svg",{width:!0,height:!0}),w(b).forEach(p),m=H(Y),A=R(Y,"SCRIPT",{src:!0,charset:!0,type:!0});var at=w(A);at.forEach(p),N=H(Y),I=R(Y,"SCRIPT",{src:!0});var Bt=w(I);Bt.forEach(p),v=H(Y),O=R(Y,"SCRIPT",{type:!0});var vt=w(O);q=G(vt,`var margin = { top: 1, right: 1, bottom: 10, left: 1 },
                        width = 550 - margin.left - margin.right,
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
                    }`),vt.forEach(p),Y.forEach(p),U.forEach(p),Q.forEach(p),nt.forEach(p),this.h()},h(){d(o,"charset","utf-8"),le(f,"float","left"),le(_,"float","right"),d(g,"class","sidebar"),d(E,"width","700"),d(E,"height","1100"),d(b,"width","700"),d(b,"height","1000"),ce(A.src,h="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js")||d(A,"src",h),d(A,"charset","utf-8"),d(A,"type","text/javascript"),ce(I.src,L="https://cdn.jsdelivr.net/gh/holtzy/D3-graph-gallery@master/LIB/sankey.js")||d(I,"src",L),d(O,"type","text/javascript"),d(T,"id","sankey"),d(n,"lang","en")},m(j,nt){V(j,e,nt),y(e,n),y(n,r),y(r,o),y(r,a),y(r,i),y(i,s),y(n,l),y(n,c),y(c,g),y(g,f),y(f,u),y(g,x),y(g,_),y(_,k),y(c,M),y(c,T),y(T,E),y(T,P),y(T,b),y(T,m),y(T,A),y(T,N),y(T,I),y(T,v),y(T,O),y(O,q)},p:K,i:K,o:K,d(j){j&&p(e)}}}function cr(t,e,n){let{name:r="World"}=e,{index:o}=e;return t.$$set=a=>{"name"in a&&n(0,r=a.name),"index"in a&&n(1,o=a.index)},[r,o]}class fr extends rt{constructor(e){super(),ot(this,e,cr,lr,it,{name:0,index:1})}}const{window:Je}=$e,mr=t=>({}),Ue=t=>({}),ur=t=>({}),ze=t=>({});function hr(t){let e,n,r,o,a,i,s,l,c;$t(t[21]);const g=t[20].background,f=fe(g,t,t[19],ze),u=t[20].foreground,x=fe(u,t,t[19],Ue);return{c(){e=C("svelte-scroller-outer"),n=C("svelte-scroller-background-container"),r=C("svelte-scroller-background"),f&&f.c(),a=z(),i=C("svelte-scroller-foreground"),x&&x.c(),this.h()},l(_){e=R(_,"SVELTE-SCROLLER-OUTER",{class:!0});var k=w(e);n=R(k,"SVELTE-SCROLLER-BACKGROUND-CONTAINER",{class:!0,style:!0});var M=w(n);r=R(M,"SVELTE-SCROLLER-BACKGROUND",{class:!0});var T=w(r);f&&f.l(T),T.forEach(p),M.forEach(p),a=H(k),i=R(k,"SVELTE-SCROLLER-FOREGROUND",{class:!0});var E=w(i);x&&x.l(E),E.forEach(p),k.forEach(p),this.h()},h(){yt(r,"class","svelte-xdbafy"),yt(n,"class","background-container svelte-xdbafy"),yt(n,"style",o=""+(t[5]+t[4])),yt(i,"class","svelte-xdbafy"),yt(e,"class","svelte-xdbafy")},m(_,k){V(_,e,k),y(e,n),y(n,r),f&&f.m(r,null),t[22](r),y(e,a),y(e,i),x&&x.m(i,null),t[23](i),t[24](e),s=!0,l||(c=Qe(Je,"resize",t[21]),l=!0)},p(_,k){f&&f.p&&(!s||k[0]&524288)&&me(f,g,_,_[19],s?he(g,_[19],k,ur):ue(_[19]),ze),(!s||k[0]&48&&o!==(o=""+(_[5]+_[4])))&&yt(n,"style",o),x&&x.p&&(!s||k[0]&524288)&&me(x,u,_,_[19],s?he(u,_[19],k,mr):ue(_[19]),Ue)},i(_){s||(W(f,_),W(x,_),s=!0)},o(_){J(f,_),J(x,_),s=!1},d(_){_&&p(e),f&&f.d(_),t[22](null),x&&x.d(_),t[23](null),t[24](null),l=!1,c()}}}const tt=[];let Dt;if(typeof window<"u"){const t=()=>tt.forEach(e=>e());window.addEventListener("scroll",t),window.addEventListener("resize",t)}if(typeof IntersectionObserver<"u"){const t=new Map,e=new IntersectionObserver((n,r)=>{n.forEach(o=>{const a=t.get(o.target),i=tt.indexOf(a);o.isIntersecting?i===-1&&tt.push(a):(a(),i!==-1&&tt.splice(i,1))})},{rootMargin:"400px 0px"});Dt={add:({outer:n,update:r})=>{const{top:o,bottom:a}=n.getBoundingClientRect();o<window.innerHeight&&a>0&&tt.push(r),t.set(n,r),e.observe(n)},remove:({outer:n,update:r})=>{const o=tt.indexOf(r);o!==-1&&tt.splice(o,1),t.delete(n),e.unobserve(n)}}}else Dt={add:({update:t})=>{tt.push(t)},remove:({update:t})=>{const e=tt.indexOf(t);e!==-1&&tt.splice(e,1)}};function dr(t,e,n){let r,o,a,i,s,{$$slots:l={},$$scope:c}=e,{top:g=0}=e,{bottom:f=1}=e,{threshold:u=.5}=e,{query:x="section"}=e,{parallax:_=!1}=e,{index:k=0}=e,{count:M=0}=e,{offset:T=0}=e,{progress:E=0}=e,{visible:P=!1}=e,b,m,A,h,N,I=0,L,v=0,O=1;Ze(()=>{N=m.querySelectorAll(x),n(7,M=N.length),q();const S={outer:b,update:q};return Dt.add(S),()=>Dt.remove(S)});function q(){if(!m)return;const S=b.getBoundingClientRect();h=S.left,n(18,O=S.right-h);const U=m.getBoundingClientRect(),st=A.getBoundingClientRect();n(10,P=U.top<I&&U.bottom>0);const _t=U.bottom-U.top,kt=st.bottom-st.top,Y=o-r;n(9,E=(r-U.top)/(_t-Y)),E<=0?(n(17,v=0),n(16,L=!1)):E>=1?(n(17,v=_?_t-kt:_t-Y),n(16,L=!1)):(n(17,v=_?Math.round(r-E*(kt-Y)):r),n(16,L=!0));for(let at=0;at<N.length;at++){const Bt=N[at],{top:vt}=Bt.getBoundingClientRect(),oe=N[at+1],ie=oe?oe.getBoundingClientRect().top:U.bottom;if(n(8,T=(a-vt)/(ie-vt)),ie>=a){n(6,k=at);break}}}function j(){n(0,I=Je.innerHeight)}function nt(S){ht[S?"unshift":"push"](()=>{A=S,n(3,A)})}function Q(S){ht[S?"unshift":"push"](()=>{m=S,n(2,m)})}function Z(S){ht[S?"unshift":"push"](()=>{b=S,n(1,b)})}return t.$$set=S=>{"top"in S&&n(11,g=S.top),"bottom"in S&&n(12,f=S.bottom),"threshold"in S&&n(13,u=S.threshold),"query"in S&&n(14,x=S.query),"parallax"in S&&n(15,_=S.parallax),"index"in S&&n(6,k=S.index),"count"in S&&n(7,M=S.count),"offset"in S&&n(8,T=S.offset),"progress"in S&&n(9,E=S.progress),"visible"in S&&n(10,P=S.visible),"$$scope"in S&&n(19,c=S.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&2049&&(r=Math.round(g*I)),t.$$.dirty[0]&4097&&(o=Math.round(f*I)),t.$$.dirty[0]&8193&&(a=Math.round(u*I)),t.$$.dirty[0]&47104&&q(),t.$$.dirty[0]&196608&&n(5,i=`
		position: ${L?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${v}px);
		z-index: 1;
	`),t.$$.dirty[0]&327680&&n(4,s=L?`width:${O}px;`:"")},[I,b,m,A,s,i,k,M,T,E,P,g,f,u,x,_,L,v,O,c,l,j,nt,Q,Z]}class gr extends rt{constructor(e){super(),ot(this,e,dr,hr,it,{top:11,bottom:12,threshold:13,query:14,parallax:15,index:6,count:7,offset:8,progress:9,visible:10},null,[-1,-1])}}function _r(t){let e,n,r,o,a,i,s,l,c,g,f,u;return{c(){e=C("h2"),n=F("RemitReturn"),r=z(),o=C("div"),a=C("p"),i=F(`Economic insecurity is the leading cause of migration. Despite the costs
        - both financial and emotional - associated with migrating from the
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United
        States, indviduals take on this burden year after year in search of
        better salaries, working conditions, and opportunities to send money
        home. Migrants who end up working in the destination country long enough
        not only offset the cost of their migration and send remittances home,
        but also spend money in the United States (for food, housing, etc),
        invigorating the economy. Data sourced from the UN World Food Programme (WFP).`),s=z(),l=C("p"),c=F(`The data displayed here is a subset of the class data. This subset
        includes 454 individuals who reported a cost of migration and whose
        destination was the United States. Of these, 349 currently reside in the
        USA and send remittances back to their families (as of the time of the
        survey, April 2021). 105 paid the cost of migration but either did not
        make it to the USA or were sent back.`),g=z(),f=C("p"),u=F(`Is the cost worth it? At what point do working migrants offset that
        cost? How much are they contributing to the US economy depending on what
        jobs are available? To better understand the tradeoff between the cost
        of migration, remittances, and money entering the USA, we have
        identified 10 migrants who represent a statistically similar sample of
        this larger group.`),this.h()},l(x){e=R(x,"H2",{});var _=w(e);n=G(_,"RemitReturn"),_.forEach(p),r=H(x),o=R(x,"DIV",{class:!0});var k=w(o);a=R(k,"P",{});var M=w(a);i=G(M,`Economic insecurity is the leading cause of migration. Despite the costs
        - both financial and emotional - associated with migrating from the
        Northern Triangle (El Salvador, Honduras, and Guatemala) to the United
        States, indviduals take on this burden year after year in search of
        better salaries, working conditions, and opportunities to send money
        home. Migrants who end up working in the destination country long enough
        not only offset the cost of their migration and send remittances home,
        but also spend money in the United States (for food, housing, etc),
        invigorating the economy. Data sourced from the UN World Food Programme (WFP).`),M.forEach(p),s=H(k),l=R(k,"P",{});var T=w(l);c=G(T,`The data displayed here is a subset of the class data. This subset
        includes 454 individuals who reported a cost of migration and whose
        destination was the United States. Of these, 349 currently reside in the
        USA and send remittances back to their families (as of the time of the
        survey, April 2021). 105 paid the cost of migration but either did not
        make it to the USA or were sent back.`),T.forEach(p),g=H(k),f=R(k,"P",{});var E=w(f);u=G(E,`Is the cost worth it? At what point do working migrants offset that
        cost? How much are they contributing to the US economy depending on what
        jobs are available? To better understand the tradeoff between the cost
        of migration, remittances, and money entering the USA, we have
        identified 10 migrants who represent a statistically similar sample of
        this larger group.`),E.forEach(p),k.forEach(p),this.h()},h(){d(o,"class","IntroText svelte-1khzzid")},m(x,_){V(x,e,_),y(e,n),V(x,r,_),V(x,o,_),y(o,a),y(a,i),y(o,s),y(o,l),y(l,c),y(o,g),y(o,f),y(f,u)},p:K,i:K,o:K,d(x){x&&p(e),x&&p(r),x&&p(o)}}}class yr extends rt{constructor(e){super(),ot(this,e,null,_r,it,{})}}function pr(t){let e,n,r,o,a,i;return{c(){e=C("div"),n=C("p"),r=F(`As seen in the above graph, the time it takes to pay off the cost of the
        migration depends on the job secured by the migrant in the destination
        country and the amount of money they send back as remittances every
        month. It can take as little as 1 month to work off the cost of the
        migration and begin contributing to the economy, but for more expensive
        migrations, the payback period can be as long as a year.`),o=z(),a=C("p"),i=F(`The orange bars represent two migrants who paid thousands of US dollars
        to migrate but were sent back to their country of origin. They never had
        a chance to pay off the amount they invested in the migration. They
        never had the opportunity to work in the US, contribute to its economy,
        and send money back home.`),this.h()},l(s){e=R(s,"DIV",{class:!0});var l=w(e);n=R(l,"P",{});var c=w(n);r=G(c,`As seen in the above graph, the time it takes to pay off the cost of the
        migration depends on the job secured by the migrant in the destination
        country and the amount of money they send back as remittances every
        month. It can take as little as 1 month to work off the cost of the
        migration and begin contributing to the economy, but for more expensive
        migrations, the payback period can be as long as a year.`),c.forEach(p),o=H(l),a=R(l,"P",{});var g=w(a);i=G(g,`The orange bars represent two migrants who paid thousands of US dollars
        to migrate but were sent back to their country of origin. They never had
        a chance to pay off the amount they invested in the migration. They
        never had the opportunity to work in the US, contribute to its economy,
        and send money back home.`),g.forEach(p),l.forEach(p),this.h()},h(){d(e,"class","MiddleText svelte-x6um5r")},m(s,l){V(s,e,l),y(e,n),y(n,r),y(e,o),y(e,a),y(a,i)},p:K,i:K,o:K,d(s){s&&p(e)}}}class xr extends rt{constructor(e){super(),ot(this,e,null,pr,it,{})}}function br(t){let e,n,r,o,a;return{c(){e=C("div"),n=C("p"),r=F(`The sankey chart represents the occupations for migrants before and after their 
        migration to the US. There are 8 different categories of occupations. Before migration,
        across all the categories, "agriculture production or labor" has the most people with 392.
        Informal work and Student category also have over 300 people. 
    `),o=C("p"),a=F(`After migration, the Informal work category has over 450 people and there are changes in
        occupations for some of the migrants. By hovering over the origin country occupation nodes, 
        we get perspective regarding changes for people for a particular occupation when
        they move to the US. Hovering over the US occupation nodes, we can see how people 
        from different occupations in the origin countries take up jobs in a new occupation
        category.`),this.h()},l(i){e=R(i,"DIV",{class:!0});var s=w(e);n=R(s,"P",{});var l=w(n);r=G(l,`The sankey chart represents the occupations for migrants before and after their 
        migration to the US. There are 8 different categories of occupations. Before migration,
        across all the categories, "agriculture production or labor" has the most people with 392.
        Informal work and Student category also have over 300 people. 
    `),l.forEach(p),o=R(s,"P",{});var c=w(o);a=G(c,`After migration, the Informal work category has over 450 people and there are changes in
        occupations for some of the migrants. By hovering over the origin country occupation nodes, 
        we get perspective regarding changes for people for a particular occupation when
        they move to the US. Hovering over the US occupation nodes, we can see how people 
        from different occupations in the origin countries take up jobs in a new occupation
        category.`),c.forEach(p),s.forEach(p),this.h()},h(){d(e,"class","SankeyText svelte-nbohqb")},m(i,s){V(i,e,s),y(e,n),y(n,r),y(e,o),y(o,a)},p:K,i:K,o:K,d(i){i&&p(e)}}}class kr extends rt{constructor(e){super(),ot(this,e,null,br,it,{})}}function vr(t){let e,n,r;return{c(){e=C("div"),n=C("div"),this.h()},l(o){e=R(o,"DIV",{class:!0,slot:!0});var a=w(e);n=R(a,"DIV",{class:!0});var i=w(n);i.forEach(p),a.forEach(p),this.h()},h(){d(n,"class","progress-bars svelte-19lyq44"),d(e,"class","background svelte-19lyq44"),d(e,"slot","background"),$t(()=>t[7].call(e))},m(o,a){V(o,e,a),y(e,n),r=tn(e,t[7].bind(e))},p:K,d(o){o&&p(e),r()}}}function wr(t){let e,n,r,o,a,i,s,l,c,g,f,u,x,_,k,M,T,E,P;return r=new yr({}),i=new fr({props:{index:t[2]}}),c=new kr({props:{index:t[2]}}),x=new ar({props:{index:t[2],width:t[5],height:t[6],themeColors:t[0]}}),M=new xr({}),{c(){e=C("div"),n=C("section"),ct(r.$$.fragment),o=z(),a=C("section"),ct(i.$$.fragment),s=z(),l=C("section"),ct(c.$$.fragment),g=z(),f=C("section"),u=F(`Cost of migration projected over time (months).
      `),ct(x.$$.fragment),_=z(),k=C("section"),ct(M.$$.fragment),T=z(),E=C("section"),this.h()},l(b){e=R(b,"DIV",{class:!0,slot:!0});var m=w(e);n=R(m,"SECTION",{class:!0});var A=w(n);ft(r.$$.fragment,A),A.forEach(p),o=H(m),a=R(m,"SECTION",{class:!0});var h=w(a);ft(i.$$.fragment,h),h.forEach(p),s=H(m),l=R(m,"SECTION",{class:!0});var N=w(l);ft(c.$$.fragment,N),N.forEach(p),g=H(m),f=R(m,"SECTION",{class:!0});var I=w(f);u=G(I,`Cost of migration projected over time (months).
      `),ft(x.$$.fragment,I),I.forEach(p),_=H(m),k=R(m,"SECTION",{class:!0});var L=w(k);ft(M.$$.fragment,L),L.forEach(p),T=H(m),E=R(m,"SECTION",{class:!0});var v=w(E);v.forEach(p),m.forEach(p),this.h()},h(){d(n,"class","svelte-19lyq44"),d(a,"class","svelte-19lyq44"),d(l,"class","svelte-19lyq44"),d(f,"class","svelte-19lyq44"),d(k,"class","svelte-19lyq44"),d(E,"class","svelte-19lyq44"),d(e,"class","foreground svelte-19lyq44"),d(e,"slot","foreground")},m(b,m){V(b,e,m),y(e,n),mt(r,n,null),y(e,o),y(e,a),mt(i,a,null),y(e,s),y(e,l),mt(c,l,null),y(e,g),y(e,f),y(f,u),mt(x,f,null),y(e,_),y(e,k),mt(M,k,null),y(e,T),y(e,E),P=!0},p(b,m){const A={};m&4&&(A.index=b[2]),i.$set(A);const h={};m&4&&(h.index=b[2]),c.$set(h);const N={};m&4&&(N.index=b[2]),m&32&&(N.width=b[5]),m&64&&(N.height=b[6]),x.$set(N)},i(b){P||(W(r.$$.fragment,b),W(i.$$.fragment,b),W(c.$$.fragment,b),W(x.$$.fragment,b),W(M.$$.fragment,b),P=!0)},o(b){J(r.$$.fragment,b),J(i.$$.fragment,b),J(c.$$.fragment,b),J(x.$$.fragment,b),J(M.$$.fragment,b),P=!1},d(b){b&&p(e),ut(r),ut(i),ut(c),ut(x),ut(M)}}}function Mr(t){let e,n,r,o,a,i;function s(u){t[8](u)}function l(u){t[9](u)}function c(u){t[10](u)}function g(u){t[11](u)}let f={top:0,bottom:1,threshold:.5,$$slots:{foreground:[wr],background:[vr]},$$scope:{ctx:t}};return t[1]!==void 0&&(f.count=t[1]),t[2]!==void 0&&(f.index=t[2]),t[3]!==void 0&&(f.offset=t[3]),t[4]!==void 0&&(f.progress=t[4]),e=new gr({props:f}),ht.push(()=>Ct(e,"count",s)),ht.push(()=>Ct(e,"index",l)),ht.push(()=>Ct(e,"offset",c)),ht.push(()=>Ct(e,"progress",g)),{c(){ct(e.$$.fragment)},l(u){ft(e.$$.fragment,u)},m(u,x){mt(e,u,x),i=!0},p(u,[x]){const _={};x&4196&&(_.$$scope={dirty:x,ctx:u}),!n&&x&2&&(n=!0,_.count=u[1],Rt(()=>n=!1)),!r&&x&4&&(r=!0,_.index=u[2],Rt(()=>r=!1)),!o&&x&8&&(o=!0,_.offset=u[3],Rt(()=>o=!1)),!a&&x&16&&(a=!0,_.progress=u[4],Rt(()=>a=!1)),e.$set(_)},i(u){i||(W(e.$$.fragment,u),i=!0)},o(u){J(e.$$.fragment,u),i=!1},d(u){ut(e,u)}}}function Er(t,e,n){let r,o,a,i,s,l;const c={blue:"#112b64",beige:"#e8e4d5",orange:"#e39d12",pink:"#be318f"};function g(){s=this.clientWidth,l=this.clientHeight,n(5,s),n(6,l)}function f(k){r=k,n(1,r)}function u(k){o=k,n(2,o)}function x(k){a=k,n(3,a)}function _(k){i=k,n(4,i)}return[c,r,o,a,i,s,l,g,f,u,x,_]}class Nr extends rt{constructor(e){super(),ot(this,e,Er,Mr,it,{themeColors:0})}get themeColors(){return this.$$.ctx[0]}}function Sr(t){let e,n;return e=new Nr({}),{c(){ct(e.$$.fragment)},l(r){ft(e.$$.fragment,r)},m(r,o){mt(e,r,o),n=!0},p:K,i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){J(e.$$.fragment,r),n=!1},d(r){ut(e,r)}}}class Cr extends rt{constructor(e){super(),ot(this,e,null,Sr,it,{})}}export{Cr as default};
