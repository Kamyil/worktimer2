function w(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function I(){return Object.create(null)}function v(t){t.forEach(V)}function z(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function X(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t){let e;return X(t,n=>e=n)(),e}function Gt(t,e,n){t.$$.on_destroy.push(X(e,n))}function It(t,e,n,i){if(t){const r=Y(t,e,n,i);return t[0](r)}}function Y(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function Kt(t,e,n,i,r,c){if(r){const s=Y(e,n,i,c);t.p(s,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Z=typeof window<"u";let _t=Z?()=>window.performance.now():()=>Date.now(),q=Z?t=>requestAnimationFrame(t):w;const $=new Set;function tt(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&q(tt)}function dt(t){let e;return $.size===0&&q(tt),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let k=!1;function ht(){k=!0}function mt(){k=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:pt(1,r,h=>e[n[h]].claim_order,u))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<c.length&&s[o].claim_order>=c[u].claim_order;)u++;const _=u<c.length?c[u]:null;t.insertBefore(s[o],_)}}function gt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=F("style");return bt(et(t),e),e.sheet}function bt(t,e){return gt(t.head||t,e),e.sheet}function $t(t,e){if(k){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function wt(t,e,n){t.insertBefore(e,n||null)}function vt(t,e,n){k&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function A(t){t.parentNode&&t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function F(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Ut(){return G(" ")}function Vt(){return G("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Yt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,r=!1){nt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function At(t,e,n,i){return it(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Zt(t,e,n){return At(t,e,n,F)}function Tt(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function te(t){return Tt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function ee(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);nt(t);const r=t.splice(n,i-n+1);A(r[0]),A(r[r.length-1]);const c=r.slice(1,r.length-1);for(const s of c)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(c,e)}function ne(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function re(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}class Ct{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Et(n.nodeName):this.e=F(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)wt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(A)}}class K extends Ct{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)vt(this.t,this.n[n],e)}}function se(t,e){return new t(e)}const H=new Map;let j=0;function Mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ht(t,e){const n={stylesheet:xt(e),rules:{}};return H.set(t,n),n}function Q(t,e,n,i,r,c,s,l=0){const o=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=o){const g=e+(n-e)*c(y);u+=y*100+`%{${s(g,1-g)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Mt(_)}_${l}`,h=et(t),{stylesheet:f,rules:d}=H.get(h)||Ht(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,j+=1,a}function jt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),j-=r,j||Dt())}function Dt(){q(()=>{j||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&A(e)}),H.clear())})}let T;function N(t){T=t}function rt(){if(!T)throw new Error("Function called outside component initialization");return T}function le(t){rt().$$.on_mount.push(t)}function oe(t){rt().$$.after_update.push(t)}const b=[],W=[],C=[],U=[],st=Promise.resolve();let B=!1;function lt(){B||(B=!0,st.then(ot))}function ce(){return lt(),st}function D(t){C.push(t)}const O=new Set;let x=0;function ot(){if(x!==0)return;const t=T;do{try{for(;x<b.length;){const e=b[x];x++,N(e),kt(e.$$)}}catch(e){throw b.length=0,x=0,e}for(N(null),b.length=0,x=0;W.length;)W.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];O.has(n)||(O.add(n),n())}C.length=0}while(b.length);for(;U.length;)U.pop()();B=!1,O.clear(),N(t)}function kt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let E;function Lt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function P(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const M=new Set;let p;function ue(){p={r:0,c:[],p}}function ae(){p.r||v(p.c),p=p.p}function Rt(t,e){t&&t.i&&(M.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(M.has(t))return;M.add(t),p.c.push(()=>{M.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Ot={duration:0};function _e(t,e,n,i){const r={direction:"both"};let c=e(t,n,r),s=i?0:1,l=null,o=null,u=null;function _(){u&&jt(t,u)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ut,tick:g=w,css:L}=c||Ot,R={start:_t()+d,b:f};f||(R.group=p,p.r+=1),l||o?o=R:(L&&(_(),u=Q(t,s,f,m,d,y,L)),f&&g(0,1),l=a(R,m),D(()=>P(t,f,"start")),dt(S=>{if(o&&S>o.start&&(l=a(o,m),o=null,P(t,l.b,"start"),L&&(_(),u=Q(t,s,l.b,l.duration,0,y,c.css))),l){if(S>=l.end)g(s=l.b,1-s),P(t,l.b,"end"),o||(l.b?_():--l.group.r||v(l.group.c)),l=null;else if(S>=l.start){const ct=S-l.start;s=l.a+l.d*y(ct/l.duration),g(s,1-s)}}return!!(l||o)}))}return{run(f){z(c)?Lt().then(()=>{c=c(r),h(f)}):h(f)},end(){_(),l=o=null}}}function de(t){t&&t.c()}function he(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(V).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),c.forEach(D)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(b.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function me(t,e,n,i,r,c,s,l=[-1]){const o=T;N(t);const u=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&zt(t,a)),h}):[],u.update(),_=!0,v(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){ht();const a=Nt(e.target);u.fragment&&u.fragment.l(a),a.forEach(A)}else u.fragment&&u.fragment.c();e.intro&&Rt(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),mt(),ot()}N(o)}class pe{$destroy(){Bt(this,1),this.$destroy=w}$on(e,n){if(!z(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Bt as A,ce as B,w as C,It as D,re as E,ee as F,$t as G,K as H,Kt as I,Qt as J,Jt as K,Gt as L,Ft as M,Wt as N,Xt as O,D as P,_e as Q,v as R,pe as S,Ut as a,vt as b,te as c,ae as d,Vt as e,Rt as f,ue as g,A as h,me as i,oe as j,F as k,Zt as l,Nt as m,Yt as n,le as o,ie as p,G as q,Tt as r,qt as s,fe as t,ne as u,W as v,se as w,de as x,he as y,Pt as z};