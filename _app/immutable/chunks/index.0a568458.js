function $(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function J(){return Object.create(null)}function v(t){t.forEach(V)}function q(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function qt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function Ft(t,e,n,i){if(t){const r=X(t,e,n,i);return t[0](r)}}function X(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function It(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,l){if(r){const s=X(e,n,i,l);t.p(s,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Y=typeof window<"u";let _t=Y?()=>window.performance.now():()=>Date.now(),F=Y?t=>requestAnimationFrame(t):$;const x=new Set;function Z(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&F(Z)}function ht(t){let e;return x.size===0&&F(Z),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let O=!1;function mt(){O=!0}function pt(){O=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const d=e[u];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=u?r+1:yt(1,r,h=>e[n[h]].claim_order,u))-1;i[c]=n[d]+1;const a=d+1;n[a]=c,r=Math.max(a,r)}const l=[],s=[];let o=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const d=u<l.length?l[u]:null;t.insertBefore(s[c],d)}}function tt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=H("style");return wt(et(t),e),e.sheet}function wt(t,e){return tt(t.head||t,e),e.sheet}function xt(t,e){if(O){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function I(t){t.parentNode&&t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function H(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Qt(){return G(" ")}function Ut(){return G("")}function K(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:vt(t,e,n)}function Et(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){Nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Xt(t,e,n){return it(t,e,n,H)}function Yt(t,e,n){return it(t,e,n,$t)}function At(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function Zt(t){return At(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}let C;function St(){if(C===void 0){C=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{C=!0}}return C}function ne(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=H("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=St();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=K(window,"message",s=>{s.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{l=K(i.contentWindow,"resize",e)}),tt(t,i),()=>{(r||l&&i.contentWindow)&&l(),I(i)}}function Ct(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e){return new t(e)}const M=new Map;let z=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:bt(e),rules:{}};return M.set(t,n),n}function Q(t,e,n,i,r,l,s,o=0){const c=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*l(y);u+=y*100+`%{${s(g,1-g)}}
`}const d=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(d)}_${o}`,h=et(t),{stylesheet:f,rules:_}=M.get(h)||jt(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,z+=1,a}function Mt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),z-=r,z||zt())}function zt(){F(()=>{z||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&I(e)}),M.clear())})}let A;function N(t){A=t}function rt(){if(!A)throw new Error("Function called outside component initialization");return A}function re(t){rt().$$.on_mount.push(t)}function se(t){rt().$$.after_update.push(t)}const w=[],U=[],k=[],L=[],st=Promise.resolve();let W=!1;function ot(){W||(W=!0,st.then(ct))}function oe(){return ot(),st}function T(t){k.push(t)}function ce(t){L.push(t)}const R=new Set;let b=0;function ct(){if(b!==0)return;const t=A;do{try{for(;b<w.length;){const e=w[b];b++,N(e),Tt(e.$$)}}catch(e){throw w.length=0,b=0,e}for(N(null),w.length=0,b=0;U.length;)U.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];R.has(n)||(R.add(n),n())}k.length=0}while(w.length);for(;L.length;)L.pop()();W=!1,R.clear(),N(t)}function Tt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let E;function Ot(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function B(t,e,n){t.dispatchEvent(Ct(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function le(){p={r:0,c:[],p}}function ue(){p.r||v(p.c),p=p.p}function Pt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ae(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Dt={duration:0};function fe(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,o=null,c=null,u=null;function d(){u&&Mt(t,u)}function a(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:y=ut,tick:g=$,css:P}=l||Dt,D={start:_t()+_,b:f};f||(D.group=p,p.r+=1),o||c?c=D:(P&&(d(),u=Q(t,s,f,m,_,y,P)),f&&g(0,1),o=a(D,m),T(()=>B(t,f,"start")),ht(S=>{if(c&&S>c.start&&(o=a(c,m),c=null,B(t,o.b,"start"),P&&(d(),u=Q(t,s,o.b,o.duration,0,y,l.css))),o){if(S>=o.end)g(s=o.b,1-s),B(t,o.b,"end"),c||(o.b?d():--o.group.r||v(o.group.c)),o=null;else if(S>=o.start){const lt=S-o.start;s=o.a+o.d*y(lt/o.duration),g(s,1-s)}}return!!(o||c)}))}return{run(f){q(l)?Ot().then(()=>{l=l(r),h(f)}):h(f)},end(){d(),o=c=null}}}const de=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _e(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||T(()=>{const s=t.$$.on_mount.map(V).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),l.forEach(T)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,r,l,s,o=[-1]){const c=A;N(t);const u=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:J(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=_)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](_),d&&Lt(t,a)),h}):[],u.update(),d=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const a=Et(e.target);u.fragment&&u.fragment.l(a),a.forEach(I)}else u.fragment&&u.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),pt(),ct()}N(c)}class ye{$destroy(){Bt(this,1),this.$destroy=$}$on(e,n){if(!q(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{me as A,Rt as B,Bt as C,Ft as D,Ht as E,Gt as F,It as G,xt as H,qt as I,$t as J,Yt as K,Kt as L,T as M,fe as N,Vt as O,K as P,de as Q,_e as R,ye as S,ce as T,ne as U,Qt as a,Jt as b,Zt as c,ae as d,Ut as e,ue as f,Pt as g,I as h,pe as i,se as j,H as k,Xt as l,Et as m,$ as n,re as o,vt as p,ee as q,G as r,Wt as s,oe as t,At as u,te as v,le as w,U as x,ie as y,he as z};