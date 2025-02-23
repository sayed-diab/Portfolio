import{g as nn,b as en,r as _}from"./index-Bci8n7Y0.js";var on=en();const Rn=nn(on);function rn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Vt(t){return rn(t)||Array.isArray(t)}function sn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function vt(t,n){const o=Object.keys(t),s=Object.keys(n);if(o.length!==s.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),r=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==r?!1:o.every(e=>{const f=t[e],i=n[e];return typeof f=="function"?`${f}`==`${i}`:!Vt(f)||!Vt(i)?f===i:vt(f,i)})}function jt(t){return t.concat().sort((n,o)=>n.name>o.name?1:-1).map(n=>n.options)}function cn(t,n){if(t.length!==n.length)return!1;const o=jt(t),s=jt(n);return o.every((c,r)=>{const e=s[r];return vt(c,e)})}function Dt(t){return typeof t=="number"}function Tt(t){return typeof t=="string"}function St(t){return typeof t=="boolean"}function zt(t){return Object.prototype.toString.call(t)==="[object Object]"}function w(t){return Math.abs(t)}function Ot(t){return Math.sign(t)}function at(t,n){return w(t-n)}function un(t,n){if(t===0||n===0||w(t)<=w(n))return 0;const o=at(w(t),w(n));return w(o/t)}function fn(t){return Math.round(t*100)/100}function lt(t){return dt(t).map(Number)}function j(t){return t[mt(t)]}function mt(t){return Math.max(0,t.length-1)}function At(t,n){return n===mt(t)}function Rt(t,n=0){return Array.from(Array(t),(o,s)=>n+s)}function dt(t){return Object.keys(t)}function Gt(t,n){return[t,n].reduce((o,s)=>(dt(s).forEach(c=>{const r=o[c],e=s[c],f=zt(r)&&zt(e);o[c]=f?Gt(r,e):e}),o),{})}function It(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function an(t,n){const o={start:s,center:c,end:r};function s(){return 0}function c(i){return r(i)/2}function r(i){return n-i}function e(i,u){return Tt(t)?o[t](i):t(n,i,u)}return{measure:e}}function pt(){let t=[];function n(c,r,e,f={passive:!0}){let i;if("addEventListener"in c)c.addEventListener(r,e,f),i=()=>c.removeEventListener(r,e,f);else{const u=c;u.addListener(e),i=()=>u.removeListener(e)}return t.push(i),s}function o(){t=t.filter(c=>c())}const s={add:n,clear:o};return s}function ln(t,n,o,s){const c=pt(),r=1e3/60;let e=null,f=0,i=0;function u(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function h(){b(),c.clear()}function d(g){if(!i)return;e||(e=g,o(),o());const a=g-e;for(e=g,f+=a;f>=r;)o(),f-=r;const S=f/r;s(S),i&&(i=n.requestAnimationFrame(d))}function p(){i||(i=n.requestAnimationFrame(d))}function b(){n.cancelAnimationFrame(i),e=null,f=0,i=0}function l(){e=null,f=0}return{init:u,destroy:h,start:p,stop:b,update:o,render:s}}function dn(t,n){const o=n==="rtl",s=t==="y",c=s?"y":"x",r=s?"x":"y",e=!s&&o?-1:1,f=h(),i=d();function u(l){const{height:m,width:g}=l;return s?m:g}function h(){return s?"top":o?"right":"left"}function d(){return s?"bottom":o?"left":"right"}function p(l){return l*e}return{scroll:c,cross:r,startEdge:f,endEdge:i,measureSize:u,direction:p}}function nt(t=0,n=0){const o=w(t-n);function s(u){return u<t}function c(u){return u>n}function r(u){return s(u)||c(u)}function e(u){return r(u)?s(u)?t:n:u}function f(u){return o?u-o*Math.ceil((u-n)/o):u}return{length:o,max:n,min:t,constrain:e,reachedAny:r,reachedMax:c,reachedMin:s,removeOffset:f}}function Ht(t,n,o){const{constrain:s}=nt(0,t),c=t+1;let r=e(n);function e(p){return o?w((c+p)%c):s(p)}function f(){return r}function i(p){return r=e(p),d}function u(p){return h().set(f()+p)}function h(){return Ht(t,f(),o)}const d={get:f,set:i,add:u,clone:h};return d}function pn(t,n,o,s,c,r,e,f,i,u,h,d,p,b,l,m,g,a,S){const{cross:x,direction:T}=t,A=["INPUT","SELECT","TEXTAREA"],I={passive:!1},E=pt(),L=pt(),v=nt(50,225).constrain(b.measure(20)),P={mouse:300,touch:400},D={mouse:500,touch:600},N=l?43:25;let z=!1,R=0,G=0,Z=!1,X=!1,$=!1,U=!1;function st(y){if(!S)return;function O(k){(St(S)||S(y,k))&&ct(k)}const F=n;E.add(F,"dragstart",k=>k.preventDefault(),I).add(F,"touchmove",()=>{},I).add(F,"touchend",()=>{}).add(F,"touchstart",O).add(F,"mousedown",O).add(F,"touchcancel",C).add(F,"contextmenu",C).add(F,"click",Q,!0)}function H(){E.clear(),L.clear()}function et(){const y=U?o:n;L.add(y,"touchmove",B,I).add(y,"touchend",C).add(y,"mousemove",B,I).add(y,"mouseup",C)}function ot(y){const O=y.nodeName||"";return A.includes(O)}function K(){return(l?D:P)[U?"mouse":"touch"]}function it(y,O){const F=d.add(Ot(y)*-1),k=h.byDistance(y,!l).distance;return l||w(y)<v?k:g&&O?k*.5:h.byIndex(F.get(),0).distance}function ct(y){const O=It(y,s);U=O,$=l&&O&&!y.buttons&&z,z=at(c.get(),e.get())>=2,!(O&&y.button!==0)&&(ot(y.target)||(Z=!0,r.pointerDown(y),u.useFriction(0).useDuration(0),c.set(e),et(),R=r.readPoint(y),G=r.readPoint(y,x),p.emit("pointerDown")))}function B(y){if(!It(y,s)&&y.touches.length>=2)return C(y);const F=r.readPoint(y),k=r.readPoint(y,x),q=at(F,R),J=at(k,G);if(!X&&!U&&(!y.cancelable||(X=q>J,!X)))return C(y);const W=r.pointerMove(y);q>m&&($=!0),u.useFriction(.3).useDuration(.75),f.start(),c.add(T(W)),y.preventDefault()}function C(y){const F=h.byDistance(0,!1).index!==d.get(),k=r.pointerUp(y)*K(),q=it(T(k),F),J=un(k,q),W=N-10*J,Y=a+J/50;X=!1,Z=!1,L.clear(),u.useDuration(W).useFriction(Y),i.distance(q,!l),U=!1,p.emit("pointerUp")}function Q(y){$&&(y.stopPropagation(),y.preventDefault(),$=!1)}function V(){return Z}return{init:st,destroy:H,pointerDown:V}}function mn(t,n){let s,c;function r(d){return d.timeStamp}function e(d,p){const l=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(It(d,n)?d:d.touches[0])[l]}function f(d){return s=d,c=d,e(d)}function i(d){const p=e(d)-e(c),b=r(d)-r(s)>170;return c=d,b&&(s=d),p}function u(d){if(!s||!c)return 0;const p=e(c)-e(s),b=r(d)-r(s),l=r(d)-r(c)>170,m=p/b;return b&&!l&&w(m)>.1?m:0}return{pointerDown:f,pointerMove:i,pointerUp:u,readPoint:e}}function gn(){function t(o){const{offsetTop:s,offsetLeft:c,offsetWidth:r,offsetHeight:e}=o;return{top:s,right:c+r,bottom:s+e,left:c,width:r,height:e}}return{measure:t}}function hn(t){function n(s){return t*(s/100)}return{measure:n}}function Sn(t,n,o,s,c,r,e){const f=[t].concat(s);let i,u,h=[],d=!1;function p(g){return c.measureSize(e.measure(g))}function b(g){if(!r)return;u=p(t),h=s.map(p);function a(S){for(const x of S){if(d)return;const T=x.target===t,A=s.indexOf(x.target),I=T?u:h[A],E=p(T?t:s[A]);if(w(E-I)>=.5){g.reInit(),n.emit("resize");break}}}i=new ResizeObserver(S=>{(St(r)||r(g,S))&&a(S)}),o.requestAnimationFrame(()=>{f.forEach(S=>i.observe(S))})}function l(){d=!0,i&&i.disconnect()}return{init:b,destroy:l}}function yn(t,n,o,s,c,r){let e=0,f=0,i=c,u=r,h=t.get(),d=0;function p(){const I=s.get()-t.get(),E=!i;let L=0;return E?(e=0,o.set(s),t.set(s),L=I):(o.set(t),e+=I/i,e*=u,h+=e,t.add(e),L=h-d),f=Ot(L),d=h,A}function b(){const I=s.get()-n.get();return w(I)<.001}function l(){return i}function m(){return f}function g(){return e}function a(){return x(c)}function S(){return T(r)}function x(I){return i=I,A}function T(I){return u=I,A}const A={direction:m,duration:l,velocity:g,seek:p,settled:b,useBaseFriction:S,useBaseDuration:a,useFriction:T,useDuration:x};return A}function bn(t,n,o,s,c){const r=c.measure(10),e=c.measure(50),f=nt(.1,.99);let i=!1;function u(){return!(i||!t.reachedAny(o.get())||!t.reachedAny(n.get()))}function h(b){if(!u())return;const l=t.reachedMin(n.get())?"min":"max",m=w(t[l]-n.get()),g=o.get()-n.get(),a=f.constrain(m/e);o.subtract(g*a),!b&&w(g)<r&&(o.set(t.constrain(o.get())),s.useDuration(25).useBaseFriction())}function d(b){i=!b}return{shouldConstrain:u,constrain:h,toggleActive:d}}function xn(t,n,o,s,c){const r=nt(-n+t,0),e=d(),f=h(),i=p();function u(l,m){return at(l,m)<=1}function h(){const l=e[0],m=j(e),g=e.lastIndexOf(l),a=e.indexOf(m)+1;return nt(g,a)}function d(){return o.map((l,m)=>{const{min:g,max:a}=r,S=r.constrain(l),x=!m,T=At(o,m);return x?a:T||u(g,S)?g:u(a,S)?a:S}).map(l=>parseFloat(l.toFixed(3)))}function p(){if(n<=t+c)return[r.max];if(s==="keepSnaps")return e;const{min:l,max:m}=f;return e.slice(l,m)}return{snapsContained:i,scrollContainLimit:f}}function En(t,n,o){const s=n[0],c=o?s-t:j(n);return{limit:nt(c,s)}}function Ln(t,n,o,s){const r=n.min+.1,e=n.max+.1,{reachedMin:f,reachedMax:i}=nt(r,e);function u(p){return p===1?i(o.get()):p===-1?f(o.get()):!1}function h(p){if(!u(p))return;const b=t*(p*-1);s.forEach(l=>l.add(b))}return{loop:h}}function Tn(t){const{max:n,length:o}=t;function s(r){const e=r-n;return o?e/-o:0}return{get:s}}function In(t,n,o,s,c){const{startEdge:r,endEdge:e}=t,{groupSlides:f}=c,i=d().map(n.measure),u=p(),h=b();function d(){return f(s).map(m=>j(m)[e]-m[0][r]).map(w)}function p(){return s.map(m=>o[r]-m[r]).map(m=>-w(m))}function b(){return f(u).map(m=>m[0]).map((m,g)=>m+i[g])}return{snaps:u,snapsAligned:h}}function vn(t,n,o,s,c,r){const{groupSlides:e}=c,{min:f,max:i}=s,u=h();function h(){const p=e(r),b=!t||n==="keepSnaps";return o.length===1?[r]:b?p:p.slice(f,i).map((l,m,g)=>{const a=!m,S=At(g,m);if(a){const x=j(g[0])+1;return Rt(x)}if(S){const x=mt(r)-j(g)[0]+1;return Rt(x,j(g)[0])}return l})}return{slideRegistry:u}}function Dn(t,n,o,s,c){const{reachedAny:r,removeOffset:e,constrain:f}=s;function i(l){return l.concat().sort((m,g)=>w(m)-w(g))[0]}function u(l){const m=t?e(l):f(l),g=n.map((S,x)=>({diff:h(S-m,0),index:x})).sort((S,x)=>w(S.diff)-w(x.diff)),{index:a}=g[0];return{index:a,distance:m}}function h(l,m){const g=[l,l+o,l-o];if(!t)return l;if(!m)return i(g);const a=g.filter(S=>Ot(S)===m);return a.length?i(a):j(g)-o}function d(l,m){const g=n[l]-c.get(),a=h(g,m);return{index:l,distance:a}}function p(l,m){const g=c.get()+l,{index:a,distance:S}=u(g),x=!t&&r(g);if(!m||x)return{index:a,distance:l};const T=n[a]-S,A=l+h(T,0);return{index:a,distance:A}}return{byDistance:p,byIndex:d,shortcut:h}}function On(t,n,o,s,c,r,e){function f(d){const p=d.distance,b=d.index!==n.get();r.add(p),p&&(s.duration()?t.start():(t.update(),t.render(1),t.update())),b&&(o.set(n.get()),n.set(d.index),e.emit("select"))}function i(d,p){const b=c.byDistance(d,p);f(b)}function u(d,p){const b=n.clone().set(d),l=c.byIndex(b.get(),p);f(l)}return{distance:i,index:u}}function An(t,n,o,s,c,r,e,f){const i={passive:!0,capture:!0};let u=0;function h(b){if(!f)return;function l(m){if(new Date().getTime()-u>10)return;e.emit("slideFocusStart"),t.scrollLeft=0;const S=o.findIndex(x=>x.includes(m));Dt(S)&&(c.useDuration(0),s.index(S,0),e.emit("slideFocus"))}r.add(document,"keydown",d,!1),n.forEach((m,g)=>{r.add(m,"focus",a=>{(St(f)||f(b,a))&&l(g)},i)})}function d(b){b.code==="Tab"&&(u=new Date().getTime())}return{init:h}}function ft(t){let n=t;function o(){return n}function s(i){n=e(i)}function c(i){n+=e(i)}function r(i){n-=e(i)}function e(i){return Dt(i)?i:i.get()}return{get:o,set:s,add:c,subtract:r}}function qt(t,n){const o=t.scroll==="x"?e:f,s=n.style;let c=null,r=!1;function e(p){return`translate3d(${p}px,0px,0px)`}function f(p){return`translate3d(0px,${p}px,0px)`}function i(p){if(r)return;const b=fn(t.direction(p));b!==c&&(s.transform=o(b),c=b)}function u(p){r=!p}function h(){r||(s.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:h,to:i,toggleActive:u}}function Mn(t,n,o,s,c,r,e,f,i){const h=lt(c),d=lt(c).reverse(),p=a().concat(S());function b(E,L){return E.reduce((v,P)=>v-c[P],L)}function l(E,L){return E.reduce((v,P)=>b(v,L)>0?v.concat([P]):v,[])}function m(E){return r.map((L,v)=>({start:L-s[v]+.5+E,end:L+n-.5+E}))}function g(E,L,v){const P=m(L);return E.map(D=>{const N=v?0:-o,z=v?o:0,R=v?"end":"start",G=P[D][R];return{index:D,loopPoint:G,slideLocation:ft(-1),translate:qt(t,i[D]),target:()=>f.get()>G?N:z}})}function a(){const E=e[0],L=l(d,E);return g(L,o,!1)}function S(){const E=n-e[0]-1,L=l(h,E);return g(L,-o,!0)}function x(){return p.every(({index:E})=>{const L=h.filter(v=>v!==E);return b(L,n)<=.1})}function T(){p.forEach(E=>{const{target:L,translate:v,slideLocation:P}=E,D=L();D!==P.get()&&(v.to(D),P.set(D))})}function A(){p.forEach(E=>E.translate.clear())}return{canLoop:x,clear:A,loop:T,loopPoints:p}}function wn(t,n,o){let s,c=!1;function r(i){if(!o)return;function u(h){for(const d of h)if(d.type==="childList"){i.reInit(),n.emit("slidesChanged");break}}s=new MutationObserver(h=>{c||(St(o)||o(i,h))&&u(h)}),s.observe(t,{childList:!0})}function e(){s&&s.disconnect(),c=!0}return{init:r,destroy:e}}function Pn(t,n,o,s){const c={};let r=null,e=null,f,i=!1;function u(){f=new IntersectionObserver(l=>{i||(l.forEach(m=>{const g=n.indexOf(m.target);c[g]=m}),r=null,e=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:s}),n.forEach(l=>f.observe(l))}function h(){f&&f.disconnect(),i=!0}function d(l){return dt(c).reduce((m,g)=>{const a=parseInt(g),{isIntersecting:S}=c[a];return(l&&S||!l&&!S)&&m.push(a),m},[])}function p(l=!0){if(l&&r)return r;if(!l&&e)return e;const m=d(l);return l&&(r=m),l||(e=m),m}return{init:u,destroy:h,get:p}}function Fn(t,n,o,s,c,r){const{measureSize:e,startEdge:f,endEdge:i}=t,u=o[0]&&c,h=l(),d=m(),p=o.map(e),b=g();function l(){if(!u)return 0;const S=o[0];return w(n[f]-S[f])}function m(){if(!u)return 0;const S=r.getComputedStyle(j(s));return parseFloat(S.getPropertyValue(`margin-${i}`))}function g(){return o.map((S,x,T)=>{const A=!x,I=At(T,x);return A?p[x]+h:I?p[x]+d:T[x+1][f]-S[f]}).map(w)}return{slideSizes:p,slideSizesWithGaps:b,startGap:h,endGap:d}}function Cn(t,n,o,s,c,r,e,f,i){const{startEdge:u,endEdge:h,direction:d}=t,p=Dt(o);function b(a,S){return lt(a).filter(x=>x%S===0).map(x=>a.slice(x,x+S))}function l(a){return a.length?lt(a).reduce((S,x,T)=>{const A=j(S)||0,I=A===0,E=x===mt(a),L=c[u]-r[A][u],v=c[u]-r[x][h],P=!s&&I?d(e):0,D=!s&&E?d(f):0,N=w(v-D-(L+P));return T&&N>n+i&&S.push(x),E&&S.push(a.length),S},[]).map((S,x,T)=>{const A=Math.max(T[x-1]||0);return a.slice(A,S)}):[]}function m(a){return p?b(a,o):l(a)}return{groupSlides:m}}function kn(t,n,o,s,c,r,e){const{align:f,axis:i,direction:u,startIndex:h,loop:d,duration:p,dragFree:b,dragThreshold:l,inViewThreshold:m,slidesToScroll:g,skipSnaps:a,containScroll:S,watchResize:x,watchSlides:T,watchDrag:A,watchFocus:I}=r,E=2,L=gn(),v=L.measure(n),P=o.map(L.measure),D=dn(i,u),N=D.measureSize(v),z=hn(N),R=an(f,N),G=!d&&!!S,Z=d||!!S,{slideSizes:X,slideSizesWithGaps:$,startGap:U,endGap:st}=Fn(D,v,P,o,Z,c),H=Cn(D,N,g,d,v,P,U,st,E),{snaps:et,snapsAligned:ot}=In(D,R,v,P,H),K=-j(et)+j($),{snapsContained:it,scrollContainLimit:ct}=xn(N,K,ot,S,E),B=G?it:ot,{limit:C}=En(K,B,d),Q=Ht(mt(B),h,d),V=Q.clone(),M=lt(o),y=({dragHandler:rt,scrollBody:Et,scrollBounds:Lt,options:{loop:gt}})=>{gt||Lt.constrain(rt.pointerDown()),Et.seek()},O=({scrollBody:rt,translate:Et,location:Lt,offsetLocation:gt,previousLocation:Qt,scrollLooper:Jt,slideLooper:Xt,dragHandler:Yt,animation:_t,eventHandler:Ft,scrollBounds:Zt,options:{loop:Ct}},kt)=>{const Nt=rt.settled(),Wt=!Zt.shouldConstrain(),Bt=Ct?Nt:Nt&&Wt;Bt&&!Yt.pointerDown()&&(_t.stop(),Ft.emit("settle")),Bt||Ft.emit("scroll");const tn=Lt.get()*kt+Qt.get()*(1-kt);gt.set(tn),Ct&&(Jt.loop(rt.direction()),Xt.loop()),Et.to(gt.get())},F=ln(s,c,()=>y(xt),rt=>O(xt,rt)),k=.68,q=B[Q.get()],J=ft(q),W=ft(q),Y=ft(q),tt=ft(q),ut=yn(J,Y,W,tt,p,k),yt=Dn(d,B,K,C,tt),bt=On(F,Q,V,ut,yt,tt,e),Mt=Tn(C),wt=pt(),Ut=Pn(n,o,e,m),{slideRegistry:Pt}=vn(G,S,B,ct,H,M),Kt=An(t,o,Pt,bt,ut,wt,e,I),xt={ownerDocument:s,ownerWindow:c,eventHandler:e,containerRect:v,slideRects:P,animation:F,axis:D,dragHandler:pn(D,t,s,c,tt,mn(D,c),J,F,bt,ut,yt,Q,e,z,b,l,a,k,A),eventStore:wt,percentOfView:z,index:Q,indexPrevious:V,limit:C,location:J,offsetLocation:Y,previousLocation:W,options:r,resizeHandler:Sn(n,e,c,o,D,x,L),scrollBody:ut,scrollBounds:bn(C,Y,tt,ut,z),scrollLooper:Ln(K,C,Y,[J,Y,W,tt]),scrollProgress:Mt,scrollSnapList:B.map(Mt.get),scrollSnaps:B,scrollTarget:yt,scrollTo:bt,slideLooper:Mn(D,N,K,X,$,et,B,Y,o),slideFocus:Kt,slidesHandler:wn(n,e,T),slidesInView:Ut,slideIndexes:M,slideRegistry:Pt,slidesToScroll:H,target:tt,translate:qt(D,n)};return xt}function Nn(){let t={},n;function o(u){n=u}function s(u){return t[u]||[]}function c(u){return s(u).forEach(h=>h(n,u)),i}function r(u,h){return t[u]=s(u).concat([h]),i}function e(u,h){return t[u]=s(u).filter(d=>d!==h),i}function f(){t={}}const i={init:o,emit:c,off:e,on:r,clear:f};return i}const Bn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function Vn(t){function n(r,e){return Gt(r,e||{})}function o(r){const e=r.breakpoints||{},f=dt(e).filter(i=>t.matchMedia(i).matches).map(i=>e[i]).reduce((i,u)=>n(i,u),{});return n(r,f)}function s(r){return r.map(e=>dt(e.breakpoints||{})).reduce((e,f)=>e.concat(f),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:o,optionsMediaQueries:s}}function jn(t){let n=[];function o(r,e){return n=e.filter(({options:f})=>t.optionsAtMedia(f).active!==!1),n.forEach(f=>f.init(r,t)),e.reduce((f,i)=>Object.assign(f,{[i.name]:i}),{})}function s(){n=n.filter(r=>r.destroy())}return{init:o,destroy:s}}function ht(t,n,o){const s=t.ownerDocument,c=s.defaultView,r=Vn(c),e=jn(r),f=pt(),i=Nn(),{mergeOptions:u,optionsAtMedia:h,optionsMediaQueries:d}=r,{on:p,off:b,emit:l}=i,m=D;let g=!1,a,S=u(Bn,ht.globalOptions),x=u(S),T=[],A,I,E;function L(){const{container:M,slides:y}=x;I=(Tt(M)?t.querySelector(M):M)||t.children[0];const F=Tt(y)?I.querySelectorAll(y):y;E=[].slice.call(F||I.children)}function v(M){const y=kn(t,I,E,s,c,M,i);if(M.loop&&!y.slideLooper.canLoop()){const O=Object.assign({},M,{loop:!1});return v(O)}return y}function P(M,y){g||(S=u(S,M),x=h(S),T=y||T,L(),a=v(x),d([S,...T.map(({options:O})=>O)]).forEach(O=>f.add(O,"change",D)),x.active&&(a.translate.to(a.location.get()),a.animation.init(),a.slidesInView.init(),a.slideFocus.init(V),a.eventHandler.init(V),a.resizeHandler.init(V),a.slidesHandler.init(V),a.options.loop&&a.slideLooper.loop(),I.offsetParent&&E.length&&a.dragHandler.init(V),A=e.init(V,T)))}function D(M,y){const O=H();N(),P(u({startIndex:O},M),y),i.emit("reInit")}function N(){a.dragHandler.destroy(),a.eventStore.clear(),a.translate.clear(),a.slideLooper.clear(),a.resizeHandler.destroy(),a.slidesHandler.destroy(),a.slidesInView.destroy(),a.animation.destroy(),e.destroy(),f.clear()}function z(){g||(g=!0,f.clear(),N(),i.emit("destroy"),i.clear())}function R(M,y,O){!x.active||g||(a.scrollBody.useBaseFriction().useDuration(y===!0?0:x.duration),a.scrollTo.index(M,O||0))}function G(M){const y=a.index.add(1).get();R(y,M,-1)}function Z(M){const y=a.index.add(-1).get();R(y,M,1)}function X(){return a.index.add(1).get()!==H()}function $(){return a.index.add(-1).get()!==H()}function U(){return a.scrollSnapList}function st(){return a.scrollProgress.get(a.location.get())}function H(){return a.index.get()}function et(){return a.indexPrevious.get()}function ot(){return a.slidesInView.get()}function K(){return a.slidesInView.get(!1)}function it(){return A}function ct(){return a}function B(){return t}function C(){return I}function Q(){return E}const V={canScrollNext:X,canScrollPrev:$,containerNode:C,internalEngine:ct,destroy:z,off:b,on:p,emit:l,plugins:it,previousScrollSnap:et,reInit:m,rootNode:B,scrollNext:G,scrollPrev:Z,scrollProgress:st,scrollSnapList:U,scrollTo:R,selectedScrollSnap:H,slideNodes:Q,slidesInView:ot,slidesNotInView:K};return P(n,o),setTimeout(()=>i.emit("init"),0),V}ht.globalOptions=void 0;function $t(t={},n=[]){const o=_.useRef(t),s=_.useRef(n),[c,r]=_.useState(),[e,f]=_.useState(),i=_.useCallback(()=>{c&&c.reInit(o.current,s.current)},[c]);return _.useEffect(()=>{vt(o.current,t)||(o.current=t,i())},[t,i]),_.useEffect(()=>{cn(s.current,n)||(s.current=n,i())},[n,i]),_.useEffect(()=>{if(sn()&&e){ht.globalOptions=$t.globalOptions;const u=ht(e,o.current,s.current);return r(u),()=>u.destroy()}else r(void 0)},[e,r]),[f,c]}$t.globalOptions=void 0;export{Rn as R,on as r,$t as u};
