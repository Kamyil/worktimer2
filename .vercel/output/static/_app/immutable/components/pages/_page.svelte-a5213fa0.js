import{M as Yt,S as nt,i as rt,s as lt,D as Gt,k as b,a as N,q as D,l as $,m as w,c as U,r as S,h as f,n as c,b as A,G as o,u as G,I as qt,J as Qt,K as Xt,f as K,t as Y,C as F,N as Ct,L as pt,O as R,P as vt,x as Q,y as X,z as tt,A as et,o as Pt,E as te}from"../../chunks/index-5a684132.js";import{w as ee}from"../../chunks/index-8a7608a3.js";function Et(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function _t(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_t=function(n){return typeof n}:_t=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_t(e)}function Lt(e){Et(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||_t(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function mt(e){Et(1,arguments);var t=Lt(e),n=t.getHours();return n}function ht(e){Et(1,arguments);var t=Lt(e),n=t.getMinutes();return n}const W=ee({lastUsedId:3,work_records:new Map([[1,{start:{hour:10,minute:0},end:{hour:11,minute:0},total_time_spent_in_minutes:60,name:"Good morning :)"}]])});function ne({start:e,end:t}){let n=new Date,l=n.setHours(e.hour);l=n.setMinutes(e.minute);let r=n.setHours(t.hour);return r=n.setMinutes(t.minute),(r-l)/1e3/60}function re(e){W.update(t=>{if(t.work_records.has(e))t.work_records.delete(e);else throw Error(`Couldn't find work record with id=${e}`);return t})}function dt(e,t,n,l){W.update(r=>{let s=r.work_records.get(t),_=0;if(s)s[n][l]=Number(e.target.value);else throw Error(`Couldn't find work record with id=${t}`);return s.total_time_spent_in_minutes=ne({start:s.start,end:s.end}),r.work_records.forEach(a=>{_+=a.total_time_spent_in_minutes}),r})}function yt(e){if(e>=60){let t=Math.floor(e/60),n=e%60;return{hours:t<10?"0"+t:String(t),minutes:n<10?"0"+n:String(n)}}else return{hours:"0",minutes:String(e)}}function le(e,t){W.update(n=>{if(n.work_records.has(t))n.work_records.get(t).name=String(e.target.value);else throw Error(`Couldn't find work record with id=${t}`);return n})}function se(){W.update(e=>(e.work_records.set(e.lastUsedId+1,{name:"TASK",start:{hour:mt(new Date),minute:ht(new Date)},end:{hour:mt(new Date),minute:ht(new Date)+15},total_time_spent_in_minutes:15}),e.lastUsedId++,e))}function ae(){W.update(e=>(e.work_records.set(e.lastUsedId+1,{name:"PRZERWA",start:{hour:mt(new Date),minute:ht(new Date)},end:{hour:mt(new Date),minute:ht(new Date)+15},total_time_spent_in_minutes:15}),e.lastUsedId++,e))}function Rt(){let e=Yt(W),t=JSON.stringify({...e,work_records:[...e.work_records]});localStorage.setItem("state",t)}function oe(){let e=JSON.parse(localStorage.getItem("state"));W.set({...e,work_records:new Map(e.work_records)})}function ue(e){let t,n,l,r,s,_,a,m,v;const d=e[3].default,h=Gt(d,e,e[2],null);return{c(){t=b("div"),n=b("input"),l=N(),r=b("div"),s=b("h1"),_=D(e[0]),a=N(),m=b("div"),h&&h.c(),this.h()},l(u){t=$(u,"DIV",{class:!0});var i=w(t);n=$(i,"INPUT",{type:!0,class:!0}),l=U(i),r=$(i,"DIV",{class:!0});var E=w(r);s=$(E,"H1",{});var p=w(s);_=S(p,e[0]),p.forEach(f),E.forEach(f),a=U(i),m=$(i,"DIV",{class:!0});var y=w(m);h&&h.l(y),y.forEach(f),i.forEach(f),this.h()},h(){c(n,"type","checkbox"),c(n,"class","peer"),n.checked=e[1],c(r,"class","collapse-title"),c(m,"class","collapse-content"),c(t,"class","collapse shadow-2xl w-full collapse-arrow bg-base-100 rounded-box")},m(u,i){A(u,t,i),o(t,n),o(t,l),o(t,r),o(r,s),o(s,_),o(t,a),o(t,m),h&&h.m(m,null),v=!0},p(u,[i]){(!v||i&2)&&(n.checked=u[1]),(!v||i&1)&&G(_,u[0]),h&&h.p&&(!v||i&4)&&qt(h,d,u,u[2],v?Xt(d,u[2],i,null):Qt(u[2]),null)},i(u){v||(K(h,u),v=!0)},o(u){Y(h,u),v=!1},d(u){u&&f(t),h&&h.d(u)}}}function ie(e,t,n){let{$$slots:l={},$$scope:r}=t,{title:s}=t,{openedByDefault:_=!1}=t;return e.$$set=a=>{"title"in a&&n(0,s=a.title),"openedByDefault"in a&&n(1,_=a.openedByDefault),"$$scope"in a&&n(2,r=a.$$scope)},[s,_,r,l]}class Mt extends nt{constructor(t){super(),rt(this,t,ie,ue,lt,{title:0,openedByDefault:1})}}function Ot(e,t,n){const l=e.slice();return l[7]=t[n][0],l[8]=t[n][1],l}function ce(e){const t=e.slice(),n=yt(t[8].total_time_spent_in_minutes);return t[11]=n.hours,t[12]=n.minutes,t}function fe(e){let t=e[8].total_time_spent_in_minutes+"",n,l;return{c(){n=D(t),l=D("m")},l(r){n=S(r,t),l=S(r,"m")},m(r,s){A(r,n,s),A(r,l,s)},p(r,s){s&1&&t!==(t=r[8].total_time_spent_in_minutes+"")&&G(n,t)},d(r){r&&f(n),r&&f(l)}}}function Vt(e){let t=e[11]+"",n,l,r=e[12]+"",s,_;return{c(){n=D(t),l=D("h "),s=D(r),_=D("m")},l(a){n=S(a,t),l=S(a,"h "),s=S(a,r),_=S(a,"m")},m(a,m){A(a,n,m),A(a,l,m),A(a,s,m),A(a,_,m)},p(a,m){m&1&&t!==(t=a[11]+"")&&G(n,t),m&1&&r!==(r=a[12]+"")&&G(s,r)},d(a){a&&f(n),a&&f(l),a&&f(s),a&&f(_)}}}function Bt(e){let t,n,l,r,s,_,a,m,v,d,h,u,i,E,p,y,H,j,P,C,g,T,M,O,L,I,V,z,st,q,ut,x,it,J,at,bt,$t,wt,Tt;function Wt(...B){return e[1](e[7],...B)}function Zt(...B){return e[2](e[7],...B)}function xt(...B){return e[3](e[7],...B)}function Ft(...B){return e[4](e[7],...B)}function Jt(...B){return e[5](e[7],...B)}function kt(B,k){return B[8].total_time_spent_in_minutes>=60?Vt:fe}function gt(B,k){return k===Vt?ce(B):B}let ot=kt(e),Z=ot(gt(e,ot));function Kt(){return e[6](e[7])}return{c(){t=b("tr"),n=b("td"),l=N(),r=b("td"),s=b("input"),a=N(),m=b("td"),v=b("div"),d=b("input"),E=D(`
            :
            `),p=b("input"),P=N(),C=b("td"),g=b("div"),T=b("input"),I=D(`
            :
            `),V=b("input"),ut=N(),x=b("td"),Z.c(),it=N(),J=b("td"),at=b("button"),bt=D("USUŃ"),$t=N(),this.h()},l(B){t=$(B,"TR",{});var k=w(t);n=$(k,"TD",{}),w(n).forEach(f),l=U(k),r=$(k,"TD",{class:!0});var Dt=w(r);s=$(Dt,"INPUT",{class:!0,type:!0,name:!0,id:!0}),Dt.forEach(f),a=U(k),m=$(k,"TD",{class:!0});var St=w(m);v=$(St,"DIV",{class:!0});var ct=w(v);d=$(ct,"INPUT",{class:!0,type:!0,name:!0,id:!0,min:!0,max:!0}),E=S(ct,`
            :
            `),p=$(ct,"INPUT",{class:!0,type:!0,name:!0,id:!0,min:!0,max:!0}),ct.forEach(f),St.forEach(f),P=U(k),C=$(k,"TD",{class:!0});var It=w(C);g=$(It,"DIV",{class:!0});var ft=w(g);T=$(ft,"INPUT",{class:!0,type:!0,name:!0,id:!0,min:!0,max:!0}),I=S(ft,`
            :
            `),V=$(ft,"INPUT",{class:!0,type:!0,name:!0,id:!0,min:!0,max:!0}),ft.forEach(f),It.forEach(f),ut=U(k),x=$(k,"TD",{class:!0});var Nt=w(x);Z.l(Nt),Nt.forEach(f),it=U(k),J=$(k,"TD",{});var Ut=w(J);at=$(Ut,"BUTTON",{class:!0});var At=w(at);bt=S(At,"USUŃ"),At.forEach(f),Ut.forEach(f),$t=U(k),k.forEach(f),this.h()},h(){c(s,"class","w-full input-bordered input input-md text-center"),c(s,"type","text"),c(s,"name","work_name"),c(s,"id","work_name"),s.value=_=e[8].name,c(r,"class","w-fit"),c(d,"class","input-bordered input input-md w-20 text-center"),c(d,"type","number"),c(d,"name",h=`${e[7]}-start-hour`),c(d,"id",u=`${e[7]}-start-hour`),c(d,"min","0"),c(d,"max","23"),d.value=i=e[8].start.hour,c(p,"class","input-bordered input input-md w-20 text-center"),c(p,"type","number"),c(p,"name",y=`${e[7]}-start-minute`),c(p,"id",H=`${e[7]}-start-minute`),c(p,"min","0"),c(p,"max","59"),p.value=j=e[8].start.minute,c(v,"class","w-full text-center"),c(m,"class","w-fit"),c(T,"class","input-bordered input input-md w-20 text-center"),c(T,"type","number"),c(T,"name",M=`${e[7]}-end-hour`),c(T,"id",O=`${e[7]}-end-hour`),c(T,"min","0"),c(T,"max","23"),T.value=L=e[8].end.hour,c(V,"class","input-bordered input input-md w-20 text-center"),c(V,"type","number"),c(V,"name",z=`${e[7]}-end-minute`),c(V,"id",st=`${e[7]}-end-minute`),c(V,"min","0"),c(V,"max","59"),V.value=q=e[8].end.minute,c(g,"class","w-full text-center"),c(C,"class","w-fit"),c(x,"class","text-center text-white"),c(at,"class","btn-outline btn-xs btn")},m(B,k){A(B,t,k),o(t,n),o(t,l),o(t,r),o(r,s),o(t,a),o(t,m),o(m,v),o(v,d),o(v,E),o(v,p),o(t,P),o(t,C),o(C,g),o(g,T),o(g,I),o(g,V),o(t,ut),o(t,x),Z.m(x,null),o(t,it),o(t,J),o(J,at),o(at,bt),o(t,$t),wt||(Tt=[R(s,"input",Wt),R(d,"input",Zt),R(p,"input",xt),R(T,"input",Ft),R(V,"input",Jt),R(at,"click",Kt)],wt=!0)},p(B,k){e=B,k&1&&_!==(_=e[8].name)&&s.value!==_&&(s.value=_),k&1&&h!==(h=`${e[7]}-start-hour`)&&c(d,"name",h),k&1&&u!==(u=`${e[7]}-start-hour`)&&c(d,"id",u),k&1&&i!==(i=e[8].start.hour)&&d.value!==i&&(d.value=i),k&1&&y!==(y=`${e[7]}-start-minute`)&&c(p,"name",y),k&1&&H!==(H=`${e[7]}-start-minute`)&&c(p,"id",H),k&1&&j!==(j=e[8].start.minute)&&p.value!==j&&(p.value=j),k&1&&M!==(M=`${e[7]}-end-hour`)&&c(T,"name",M),k&1&&O!==(O=`${e[7]}-end-hour`)&&c(T,"id",O),k&1&&L!==(L=e[8].end.hour)&&T.value!==L&&(T.value=L),k&1&&z!==(z=`${e[7]}-end-minute`)&&c(V,"name",z),k&1&&st!==(st=`${e[7]}-end-minute`)&&c(V,"id",st),k&1&&q!==(q=e[8].end.minute)&&V.value!==q&&(V.value=q),ot===(ot=kt(e))&&Z?Z.p(gt(e,ot),k):(Z.d(1),Z=ot(gt(e,ot)),Z&&(Z.c(),Z.m(x,null)))},d(B){B&&f(t),Z.d(),wt=!1,vt(Tt)}}}function de(e){let t,n,l,r,s,_,a,m,v,d,h,u,i,E,p,y,H,j,P,C,g,T=[...e[0].work_records],M=[];for(let O=0;O<T.length;O+=1)M[O]=Bt(Ot(e,T,O));return{c(){t=b("div"),n=b("table"),l=b("thead"),r=b("tr"),s=b("th"),_=N(),a=b("th"),m=D("Task"),v=N(),d=b("th"),h=D("Start"),u=N(),i=b("th"),E=D("Koniec"),p=N(),y=b("th"),H=D("Spędzony czas"),j=N(),P=b("th"),C=N(),g=b("tbody");for(let O=0;O<M.length;O+=1)M[O].c();this.h()},l(O){t=$(O,"DIV",{class:!0});var L=w(t);n=$(L,"TABLE",{class:!0});var I=w(n);l=$(I,"THEAD",{});var V=w(l);r=$(V,"TR",{});var z=w(r);s=$(z,"TH",{}),w(s).forEach(f),_=U(z),a=$(z,"TH",{class:!0});var st=w(a);m=S(st,"Task"),st.forEach(f),v=U(z),d=$(z,"TH",{class:!0});var q=w(d);h=S(q,"Start"),q.forEach(f),u=U(z),i=$(z,"TH",{class:!0});var ut=w(i);E=S(ut,"Koniec"),ut.forEach(f),p=U(z),y=$(z,"TH",{class:!0});var x=w(y);H=S(x,"Spędzony czas"),x.forEach(f),j=U(z),P=$(z,"TH",{class:!0}),w(P).forEach(f),z.forEach(f),V.forEach(f),C=U(I),g=$(I,"TBODY",{class:!0});var it=w(g);for(let J=0;J<M.length;J+=1)M[J].l(it);it.forEach(f),I.forEach(f),L.forEach(f),this.h()},h(){c(a,"class","text-center"),c(d,"class","text-center"),c(i,"class","text-center"),c(y,"class","text-center"),c(P,"class","text-center"),c(g,"class","h-full mt-52 overflow-y-auto"),c(n,"class","table table-zebra w-full"),c(t,"class","overflow-y-auto max-h-[600px]")},m(O,L){A(O,t,L),o(t,n),o(n,l),o(l,r),o(r,s),o(r,_),o(r,a),o(a,m),o(r,v),o(r,d),o(d,h),o(r,u),o(r,i),o(i,E),o(r,p),o(r,y),o(y,H),o(r,j),o(r,P),o(n,C),o(n,g);for(let I=0;I<M.length;I+=1)M[I].m(g,null)},p(O,[L]){if(L&1){T=[...O[0].work_records];let I;for(I=0;I<T.length;I+=1){const V=Ot(O,T,I);M[I]?M[I].p(V,L):(M[I]=Bt(V),M[I].c(),M[I].m(g,null))}for(;I<M.length;I+=1)M[I].d(1);M.length=T.length}},i:F,o:F,d(O){O&&f(t),Ct(M,O)}}}function _e(e,t,n){let l;return pt(e,W,d=>n(0,l=d)),[l,(d,h)=>le(h,d),(d,h)=>dt(h,d,"start","hour"),(d,h)=>dt(h,d,"start","minute"),(d,h)=>dt(h,d,"end","hour"),(d,h)=>dt(h,d,"end","minute"),d=>re(d)]}class me extends nt{constructor(t){super(),rt(this,t,_e,de,lt,{})}}function he(e,t){return t instanceof Map?{dataType:"Map",value:Array.from(t.entries())}:t}function pe(e,t){return typeof t=="object"&&t!==null&&t.dataType==="Map"?new Map(t.value):t}function ve(e){let t,n,l,r,s,_,a,m;return{c(){t=b("label"),n=D(`Import danych
    `),l=b("input"),r=N(),s=b("button"),_=D("Export danych"),this.h()},l(v){t=$(v,"LABEL",{for:!0,class:!0});var d=w(t);n=S(d,`Import danych
    `),l=$(d,"INPUT",{type:!0,name:!0,class:!0,id:!0}),d.forEach(f),r=U(v),s=$(v,"BUTTON",{class:!0});var h=w(s);_=S(h,"Export danych"),h.forEach(f),this.h()},h(){c(l,"type","file"),c(l,"name",""),c(l,"class","hidden"),c(l,"id","import-state-data"),c(t,"for","import-state-data"),c(t,"class","btn-outline btn-sm btn"),c(s,"class","btn-outline btn-sm btn")},m(v,d){A(v,t,d),o(t,n),o(t,l),A(v,r,d),A(v,s,d),o(s,_),a||(m=[R(l,"change",e[1]),R(s,"click",e[0])],a=!0)},p:F,i:F,o:F,d(v){v&&f(t),v&&f(r),v&&f(s),a=!1,vt(m)}}}function be(e,t,n){const l=document.createElement("a"),r=new Blob([e],{type:n});l.href=URL.createObjectURL(r),l.download=t,l.click()}function $e(e,t,n){let l;pt(e,W,_=>n(2,l=_));function r(){be(JSON.stringify(l,he),`czas-pracy-${new Date}.txt`,"text/plain")}async function s(_){const a=_.target.files[0],m=await new Blob([a]).text(),v=JSON.parse(m,pe);console.log(v),W.set(v)}return[r,s]}class we extends nt{constructor(t){super(),rt(this,t,$e,ve,lt,{})}}function ge(e){let t,n,l,r,s,_,a,m,v,d,h,u;return l=new we({}),{c(){t=b("div"),n=b("div"),Q(l.$$.fragment),r=N(),s=b("button"),_=D("Zapisz do local storage"),a=N(),m=b("button"),v=D("Wczytaj z local storage"),this.h()},l(i){t=$(i,"DIV",{class:!0});var E=w(t);n=$(E,"DIV",{class:!0});var p=w(n);X(l.$$.fragment,p),r=U(p),s=$(p,"BUTTON",{class:!0});var y=w(s);_=S(y,"Zapisz do local storage"),y.forEach(f),a=U(p),m=$(p,"BUTTON",{class:!0});var H=w(m);v=S(H,"Wczytaj z local storage"),H.forEach(f),p.forEach(f),E.forEach(f),this.h()},h(){c(s,"class","btn-outline btn-sm btn"),c(m,"class","btn-outline btn-sm btn"),c(n,"class","shadow m-2"),c(t,"class","flex flex-col")},m(i,E){A(i,t,E),o(t,n),tt(l,n,null),o(n,r),o(n,s),o(s,_),o(n,a),o(n,m),o(m,v),d=!0,h||(u=[R(s,"click",Rt),R(m,"click",oe)],h=!0)},p:F,i(i){d||(K(l.$$.fragment,i),d=!0)},o(i){Y(l.$$.fragment,i),d=!1},d(i){i&&f(t),et(l),h=!1,vt(u)}}}class Ee extends nt{constructor(t){super(),rt(this,t,null,ge,lt,{})}}function Ht(e,t,n){const l=e.slice();return l[2]=t[n][0],l[3]=t[n][1],l}function ye(e){const t=e.slice(),n=yt(t[3].total_time_spent_in_minutes);return t[6]=n.hours,t[7]=n.minutes,t}function Te(e){let t=e[3].total_time_spent_in_minutes+"",n,l;return{c(){n=D(t),l=D("m")},l(r){n=S(r,t),l=S(r,"m")},m(r,s){A(r,n,s),A(r,l,s)},p(r,s){s&1&&t!==(t=r[3].total_time_spent_in_minutes+"")&&G(n,t)},d(r){r&&f(n),r&&f(l)}}}function zt(e){let t=e[6]+"",n,l,r=e[7]+"",s,_;return{c(){n=D(t),l=D("h "),s=D(r),_=D("m")},l(a){n=S(a,t),l=S(a,"h "),s=S(a,r),_=S(a,"m")},m(a,m){A(a,n,m),A(a,l,m),A(a,s,m),A(a,_,m)},p(a,m){m&1&&t!==(t=a[6]+"")&&G(n,t),m&1&&r!==(r=a[7]+"")&&G(s,r)},d(a){a&&f(n),a&&f(l),a&&f(s),a&&f(_)}}}function jt(e){let t,n,l=e[3].name+"",r,s,_,a;function m(u,i){return u[3].total_time_spent_in_minutes>=60?zt:Te}function v(u,i){return i===zt?ye(u):u}let d=m(e),h=d(v(e,d));return{c(){t=b("tr"),n=b("td"),r=D(l),s=N(),_=b("td"),h.c(),a=N(),this.h()},l(u){t=$(u,"TR",{});var i=w(t);n=$(i,"TD",{class:!0});var E=w(n);r=S(E,l),E.forEach(f),s=U(i),_=$(i,"TD",{class:!0});var p=w(_);h.l(p),p.forEach(f),a=U(i),i.forEach(f),this.h()},h(){c(n,"class","text-center"),c(_,"class","text-center")},m(u,i){A(u,t,i),o(t,n),o(n,r),o(t,s),o(t,_),h.m(_,null),o(t,a)},p(u,i){i&1&&l!==(l=u[3].name+"")&&G(r,l),d===(d=m(u))&&h?h.p(v(u,d),i):(h.d(1),h=d(v(u,d)),h&&(h.c(),h.m(_,null)))},d(u){u&&f(t),h.d()}}}function ke(e){let t,n,l,r,s,_,a,m,v,d,h=[...e[0]],u=[];for(let i=0;i<h.length;i+=1)u[i]=jt(Ht(e,h,i));return{c(){t=b("div"),n=b("table"),l=b("thead"),r=b("th"),s=D("TASK"),_=N(),a=b("th"),m=D("CZAS ZSUMOWANY"),v=N(),d=b("tbody");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=$(i,"DIV",{class:!0});var E=w(t);n=$(E,"TABLE",{class:!0});var p=w(n);l=$(p,"THEAD",{});var y=w(l);r=$(y,"TH",{class:!0});var H=w(r);s=S(H,"TASK"),H.forEach(f),_=U(y),a=$(y,"TH",{});var j=w(a);m=S(j,"CZAS ZSUMOWANY"),j.forEach(f),y.forEach(f),v=U(p),d=$(p,"TBODY",{});var P=w(d);for(let C=0;C<u.length;C+=1)u[C].l(P);P.forEach(f),p.forEach(f),E.forEach(f),this.h()},h(){c(r,"class","text-center"),c(n,"class","table-compact table"),c(t,"class","overflow-y-auto min-h-96")},m(i,E){A(i,t,E),o(t,n),o(n,l),o(l,r),o(r,s),o(l,_),o(l,a),o(a,m),o(n,v),o(n,d);for(let p=0;p<u.length;p+=1)u[p].m(d,null)},p(i,[E]){if(E&1){h=[...i[0]];let p;for(p=0;p<h.length;p+=1){const y=Ht(i,h,p);u[p]?u[p].p(y,E):(u[p]=jt(y),u[p].c(),u[p].m(d,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=h.length}},i:F,o:F,d(i){i&&f(t),Ct(u,i)}}}function De(e,t,n){let l,r;return pt(e,W,s=>n(1,r=s)),e.$$.update=()=>{e.$$.dirty&2&&n(0,l=[...r.work_records.values()].reduce((s,_)=>{const{name:a,total_time_spent_in_minutes:m}=_;if(s.has(a)){const v=s.get(a);v.total_time_spent_in_minutes+=m}else s.set(a,{name:a,total_time_spent_in_minutes:m});return s},new Map))},[l,r]}class Se extends nt{constructor(t){super(),rt(this,t,De,ke,lt,{})}}function Ie(e){let t,n;return t=new Se({}),{c(){Q(t.$$.fragment)},l(l){X(t.$$.fragment,l)},m(l,r){tt(t,l,r),n=!0},i(l){n||(K(t.$$.fragment,l),n=!0)},o(l){Y(t.$$.fragment,l),n=!1},d(l){et(t,l)}}}function Ne(e){let t,n,l,r,s,_,a,m,v=e[0]()+"",d,h,u,i,E,p,y,H,j,P,C;return t=new me({}),{c(){Q(t.$$.fragment),n=N(),l=b("div"),r=b("div"),s=b("div"),_=D("ŁĄCZNIE"),a=N(),m=b("div"),d=D(v),h=N(),u=b("div"),i=b("button"),E=D("Dodaj wpis"),p=N(),y=b("button"),H=D("Dodaj przerwę"),this.h()},l(g){X(t.$$.fragment,g),n=U(g),l=$(g,"DIV",{class:!0});var T=w(l);r=$(T,"DIV",{class:!0});var M=w(r);s=$(M,"DIV",{class:!0});var O=w(s);_=S(O,"ŁĄCZNIE"),O.forEach(f),a=U(M),m=$(M,"DIV",{class:!0});var L=w(m);d=S(L,v),L.forEach(f),M.forEach(f),T.forEach(f),h=U(g),u=$(g,"DIV",{class:!0});var I=w(u);i=$(I,"BUTTON",{class:!0});var V=w(i);E=S(V,"Dodaj wpis"),V.forEach(f),p=U(I),y=$(I,"BUTTON",{class:!0});var z=w(y);H=S(z,"Dodaj przerwę"),z.forEach(f),I.forEach(f),this.h()},h(){c(s,"class","stat-title"),c(m,"class","stat-value"),c(r,"class","stat flex flex-col items-end"),c(l,"class","stats w-full shadow"),c(i,"class","btn-outline btn-sm btn mx-2"),c(y,"class","btn-outline btn-sm btn"),c(u,"class","m-2 flex justify-end")},m(g,T){tt(t,g,T),A(g,n,T),A(g,l,T),o(l,r),o(r,s),o(s,_),o(r,a),o(r,m),o(m,d),A(g,h,T),A(g,u,T),o(u,i),o(i,E),o(u,p),o(u,y),o(y,H),j=!0,P||(C=[R(i,"click",se),R(y,"click",ae)],P=!0)},p(g,T){(!j||T&1)&&v!==(v=g[0]()+"")&&G(d,v)},i(g){j||(K(t.$$.fragment,g),j=!0)},o(g){Y(t.$$.fragment,g),j=!1},d(g){et(t,g),g&&f(n),g&&f(l),g&&f(h),g&&f(u),P=!1,vt(C)}}}function Ue(e){let t,n,l,r,s,_,a,m,v,d,h;return l=new Ee({}),a=new Mt({props:{openedByDefault:!0,title:"GRUPY",$$slots:{default:[Ie]},$$scope:{ctx:e}}}),d=new Mt({props:{openedByDefault:!0,title:"POJEDYNCZE",$$slots:{default:[Ne]},$$scope:{ctx:e}}}),{c(){t=b("div"),n=b("div"),Q(l.$$.fragment),r=N(),s=b("div"),_=b("div"),Q(a.$$.fragment),m=N(),v=b("div"),Q(d.$$.fragment),this.h()},l(u){t=$(u,"DIV",{class:!0});var i=w(t);n=$(i,"DIV",{class:!0});var E=w(n);X(l.$$.fragment,E),r=U(E),s=$(E,"DIV",{class:!0});var p=w(s);_=$(p,"DIV",{class:!0});var y=w(_);X(a.$$.fragment,y),y.forEach(f),m=U(p),v=$(p,"DIV",{class:!0});var H=w(v);X(d.$$.fragment,H),H.forEach(f),p.forEach(f),E.forEach(f),i.forEach(f),this.h()},h(){c(_,"class","w-3/12"),c(v,"class","w-9/12"),c(s,"class","flex flex-row-reverse"),c(n,"class","mockup-window border border-zinc-900"),c(t,"class","mainview flex h-fit w-full items-center justify-center")},m(u,i){A(u,t,i),o(t,n),tt(l,n,null),o(n,r),o(n,s),o(s,_),tt(a,_,null),o(s,m),o(s,v),tt(d,v,null),h=!0},p(u,[i]){const E={};i&4&&(E.$$scope={dirty:i,ctx:u}),a.$set(E);const p={};i&5&&(p.$$scope={dirty:i,ctx:u}),d.$set(p)},i(u){h||(K(l.$$.fragment,u),K(a.$$.fragment,u),K(d.$$.fragment,u),h=!0)},o(u){Y(l.$$.fragment,u),Y(a.$$.fragment,u),Y(d.$$.fragment,u),h=!1},d(u){u&&f(t),et(l),et(a),et(d)}}}const Ae=9e5;function Me(e,t,n){let l,r;return pt(e,W,s=>n(1,r=s)),Pt(()=>{setInterval(Rt,Ae)}),e.$$.update=()=>{e.$$.dirty&2&&n(0,l=()=>{let s=0;r.work_records.forEach(({total_time_spent_in_minutes:m})=>{s+=m});let{hours:_,minutes:a}=yt(s);return`${_}h ${a}m`})},[l,r]}class Oe extends nt{constructor(t){super(),rt(this,t,Me,Ue,lt,{})}}function Ve(e){let t,n,l;return n=new Oe({}),{c(){t=b("div"),Q(n.$$.fragment),this.h()},l(r){t=$(r,"DIV",{class:!0});var s=w(t);X(n.$$.fragment,s),s.forEach(f),this.h()},h(){c(t,"class","app svelte-101jdel")},m(r,s){A(r,t,s),tt(n,t,null),l=!0},p:F,i(r){l||(K(n.$$.fragment,r),l=!0)},o(r){Y(n.$$.fragment,r),l=!1},d(r){r&&f(t),et(n)}}}class Be extends nt{constructor(t){super(),rt(this,t,null,Ve,lt,{})}}function He(e){let t,n,l,r;return l=new Be({}),{c(){t=b("meta"),n=N(),Q(l.$$.fragment),this.h()},l(s){const _=te("svelte-t32ptj",document.head);t=$(_,"META",{name:!0,content:!0}),_.forEach(f),n=U(s),X(l.$$.fragment,s),this.h()},h(){document.title="Home",c(t,"name","description"),c(t,"content","Svelte demo app")},m(s,_){o(document.head,t),A(s,n,_),tt(l,s,_),r=!0},p:F,i(s){r||(K(l.$$.fragment,s),r=!0)},o(s){Y(l.$$.fragment,s),r=!1},d(s){f(t),s&&f(n),et(l,s)}}}function ze(e){return Pt(()=>{navigator.serviceWorker.register("/service-worker.js")}),[]}class Pe extends nt{constructor(t){super(),rt(this,t,ze,He,lt,{})}}export{Pe as default};