function A(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function H(){return Object.create(null)}function v(t){t.forEach(W)}function G(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(et(e,n))}function bt(t,e,n,i){if(t){const r=J(t,e,n,i);return t[0](r)}}function J(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let u=0;u<c;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function $t(t,e,n,i,r,o){if(r){const c=J(e,n,i,o);t.p(c,r)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){return t??""}let M=!1;function nt(){M=!0}function it(){M=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ct(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[s]=n[f]+1;const _=f+1;n[_]=s,r=Math.max(_,r)}const o=[],c=[];let u=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);u>=s;u--)c.push(e[u]);u--}for(;u>=0;u--)c.push(e[u]);o.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<o.length&&c[s].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(c[s],f)}}function st(t,e){if(M){for(ct(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Nt(t,e,n){M&&!n?st(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function St(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function q(t){return document.createTextNode(t)}function kt(){return q(" ")}function At(){return q("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function K(t,e,n,i,r=!1){ft(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(e(u)){const s=n(u);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Q(t,e,n,i){return K(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];n[u.name]||o.push(u.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Lt(t,e,n){return Q(t,e,n,ut)}function Tt(t,e,n){return Q(t,e,n,ot)}function dt(t,e){return K(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>q(e),!0)}function Bt(t){return dt(t," ")}function Ot(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Pt(t,e){t.value=e??""}function Dt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function qt(t,e,n){t.classList[n?"add":"remove"](e)}function zt(t,e){return new t(e)}let $;function w(t){$=t}function R(){if(!$)throw new Error("Function called outside component initialization");return $}function Ft(t){R().$$.on_mount.push(t)}function Ht(t){R().$$.after_update.push(t)}const b=[],I=[],S=[],O=[],U=Promise.resolve();let P=!1;function V(){P||(P=!0,U.then(X))}function It(){return V(),U}function D(t){S.push(t)}function Wt(t){O.push(t)}const B=new Set;let x=0;function X(){if(x!==0)return;const t=$;do{try{for(;x<b.length;){const e=b[x];x++,w(e),_t(e.$$)}}catch(e){throw b.length=0,x=0,e}for(w(null),b.length=0,x=0;I.length;)I.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];B.has(n)||(B.add(n),n())}S.length=0}while(b.length);for(;O.length;)O.pop()();P=!1,B.clear(),w(t)}function _t(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}const k=new Set;let g;function Gt(){g={r:0,c:[],p:g}}function Jt(){g.r||v(g.c),g=g.p}function Y(t,e){t&&t.i&&(k.delete(t),t.i(e))}function ht(t,e,n,i){if(t&&t.o){if(k.has(t))return;k.add(t),g.c.push(()=>{k.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Kt(t,e){ht(t,1,1,()=>{e.delete(t.key)})}function Qt(t,e,n,i,r,o,c,u,s,l,f,_){let d=t.length,m=o.length,h=d;const j={};for(;h--;)j[t[h].key]=h;const E=[],C=new Map,L=new Map;for(h=m;h--;){const a=_(r,o,h),p=n(a);let y=c.get(p);y?i&&y.p(a,e):(y=l(p,a),y.c()),C.set(p,E[h]=y),p in j&&L.set(p,Math.abs(h-j[p]))}const z=new Set,F=new Set;function T(a){Y(a,1),a.m(u,f),c.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=E[m-1],p=t[d-1],y=a.key,N=p.key;a===p?(f=a.first,d--,m--):C.has(N)?!c.has(y)||z.has(y)?T(a):F.has(N)?d--:L.get(y)>L.get(N)?(F.add(y),T(a)):(z.add(N),d--):(s(p,c),d--)}for(;d--;){const a=t[d];C.has(a.key)||s(a,c)}for(;m;)T(E[m-1]);return E}function Rt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Ut(t){t&&t.c()}function Vt(t,e){t&&t.l(e)}function mt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||D(()=>{const c=t.$$.on_mount.map(W).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),o.forEach(D)}function pt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(t,e){t.$$.dirty[0]===-1&&(b.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Xt(t,e,n,i,r,o,c,u=[-1]){const s=$;w(t);const l=t.$$={fragment:null,ctx:[],props:o,update:A,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&yt(t,_)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=at(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),mt(t,e.target,e.anchor,e.customElement),it(),X()}w(s)}class Yt{$destroy(){pt(this,1),this.$destroy=A}$on(e,n){if(!G(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Vt as A,mt as B,pt as C,bt as D,$t as E,vt as F,wt as G,st as H,xt as I,ot as J,Tt as K,Mt as L,St as M,v as N,qt as O,Pt as P,Et as Q,Rt as R,Yt as S,jt as T,Qt as U,Wt as V,Kt as W,kt as a,Nt as b,Bt as c,ht as d,At as e,Jt as f,Y as g,lt as h,Xt as i,Ht as j,ut as k,Lt as l,at as m,A as n,Ft as o,Ct as p,Dt as q,q as r,gt as s,It as t,dt as u,Ot as v,Gt as w,I as x,zt as y,Ut as z};
