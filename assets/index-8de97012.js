var bt=Object.defineProperty;var gt=(e,t,r)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ae=(e,t,r)=>(gt(e,typeof t!="symbol"?t+"":t,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();var ie,v,Je,H,Pe,Qe,_e,j={},Xe=[],St=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ge=Array.isArray;function I(e,t){for(var r in t)e[r]=t[r];return e}function Ze(e){var t=e.parentNode;t&&t.removeChild(e)}function wt(e,t,r){var n,i,o,c={};for(o in t)o=="key"?n=t[o]:o=="ref"?i=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?ie.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return Y(e,c,n,i,null)}function Y(e,t,r,n,i){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++Je};return i==null&&v.vnode!=null&&v.vnode(o),o}function R(e){return e.children}function K(e,t){this.props=e,this.context=t}function Z(e,t){if(t==null)return e.__?Z(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Z(e):null}function et(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return et(e)}}function Oe(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!ee.__r++||Pe!==v.debounceRendering)&&((Pe=v.debounceRendering)||Qe)(ee)}function ee(){var e,t,r,n,i,o,c,u,a;for(H.sort(_e);e=H.shift();)e.__d&&(t=H.length,n=void 0,i=void 0,o=void 0,u=(c=(r=e).__v).__e,(a=r.__P)&&(n=[],i=[],(o=I({},c)).__v=c.__v+1,Se(a,c,o,r.__n,a.ownerSVGElement!==void 0,c.__h!=null?[u]:null,n,u??Z(c),c.__h,i),ot(n,c,i),c.__e!=u&&et(c)),H.length>t&&H.sort(_e));ee.__r=0}function tt(e,t,r,n,i,o,c,u,a,l,_){var s,p,h,f,d,L,y,b,T,$,k=0,E=n&&n.__k||Xe,O=E.length,C=O,w=t.length;for(r.__k=[],s=0;s<w;s++)(f=r.__k[s]=(f=t[s])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?Y(null,f,null,null,f):ge(f)?Y(R,{children:f},null,null,null):f.__b>0?Y(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null&&(f.__=r,f.__b=r.__b+1,(b=kt(f,E,y=s+k,C))===-1?h=j:(h=E[b]||j,E[b]=void 0,C--),Se(e,f,h,i,o,c,u,a,l,_),d=f.__e,(p=f.ref)&&h.ref!=p&&(h.ref&&we(h.ref,null,f),_.push(p,f.__c||d,f)),d!=null&&(L==null&&(L=d),$=!(T=h===j||h.__v===null)&&b===y,T?b==-1&&k--:b!==y&&(b===y+1?(k++,$=!0):b>y?C>w-y?(k+=b-y,$=!0):k--:k=b<y&&b==y-1?b-y:0),y=s+k,$=$||b==s&&!T,typeof f.type!="function"||b===y&&h.__k!==f.__k?typeof f.type=="function"||$?f.__d!==void 0?(a=f.__d,f.__d=void 0):a=d.nextSibling:a=nt(e,d,a):a=rt(f,a,e),typeof r.type=="function"&&(r.__d=a)));for(r.__e=L,s=O;s--;)E[s]!=null&&(typeof r.type=="function"&&E[s].__e!=null&&E[s].__e==r.__d&&(r.__d=E[s].__e.nextSibling),it(E[s],E[s]))}function rt(e,t,r){for(var n,i=e.__k,o=0;i&&o<i.length;o++)(n=i[o])&&(n.__=e,t=typeof n.type=="function"?rt(n,t,r):nt(r,n.__e,t));return t}function nt(e,t,r){return r==null||r.parentNode!==e?e.insertBefore(t,null):t==r&&t.parentNode!=null||e.insertBefore(t,r),t.nextSibling}function kt(e,t,r,n){var i=e.key,o=e.type,c=r-1,u=r+1,a=t[r];if(a===null||a&&i==a.key&&o===a.type)return r;if(n>(a!=null?1:0))for(;c>=0||u<t.length;){if(c>=0){if((a=t[c])&&i==a.key&&o===a.type)return c;c--}if(u<t.length){if((a=t[u])&&i==a.key&&o===a.type)return u;u++}}return-1}function Et(e,t,r,n,i){var o;for(o in r)o==="children"||o==="key"||o in t||te(e,o,null,r[o],n);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||r[o]===t[o]||te(e,o,t[o],r[o],n)}function Ce(e,t,r){t[0]==="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||St.test(t)?r:r+"px"}function te(e,t,r,n,i){var o;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Ce(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||Ce(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n||e.addEventListener(t,o?Ue:He,o):e.removeEventListener(t,o?Ue:He,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,r))}}function He(e){return this.l[e.type+!1](v.event?v.event(e):e)}function Ue(e){return this.l[e.type+!0](v.event?v.event(e):e)}function Se(e,t,r,n,i,o,c,u,a,l){var _,s,p,h,f,d,L,y,b,T,$,k,E,O,C,w=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(a=r.__h,u=t.__e=r.__e,t.__h=null,o=[u]),(_=v.__b)&&_(t);try{e:if(typeof w=="function"){if(y=t.props,b=(_=w.contextType)&&n[_.__c],T=_?b?b.props.value:_.__:n,r.__c?L=(s=t.__c=r.__c).__=s.__E:("prototype"in w&&w.prototype.render?t.__c=s=new w(y,T):(t.__c=s=new K(y,T),s.constructor=w,s.render=xt),b&&b.sub(s),s.props=y,s.state||(s.state={}),s.context=T,s.__n=n,p=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),w.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=I({},s.__s)),I(s.__s,w.getDerivedStateFromProps(y,s.__s))),h=s.props,f=s.state,s.__v=t,p)w.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(w.getDerivedStateFromProps==null&&y!==h&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(y,T),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(y,s.__s,T)===!1||t.__v===r.__v)){for(t.__v!==r.__v&&(s.props=y,s.state=s.__s,s.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(W){W&&(W.__=t)}),$=0;$<s._sb.length;$++)s.__h.push(s._sb[$]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(y,s.__s,T),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(h,f,d)})}if(s.context=T,s.props=y,s.__P=e,s.__e=!1,k=v.__r,E=0,"prototype"in w&&w.prototype.render){for(s.state=s.__s,s.__d=!1,k&&k(t),_=s.render(s.props,s.state,s.context),O=0;O<s._sb.length;O++)s.__h.push(s._sb[O]);s._sb=[]}else do s.__d=!1,k&&k(t),_=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++E<25);s.state=s.__s,s.getChildContext!=null&&(n=I(I({},n),s.getChildContext())),p||s.getSnapshotBeforeUpdate==null||(d=s.getSnapshotBeforeUpdate(h,f)),tt(e,ge(C=_!=null&&_.type===R&&_.key==null?_.props.children:_)?C:[C],t,r,n,i,o,c,u,a,l),s.base=t.__e,t.__h=null,s.__h.length&&c.push(s),L&&(s.__E=s.__=null)}else o==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=Tt(r.__e,t,r,n,i,o,c,a,l);(_=v.diffed)&&_(t)}catch(W){t.__v=null,(a||o!=null)&&(t.__e=u,t.__h=!!a,o[o.indexOf(u)]=null),v.__e(W,t,r)}}function ot(e,t,r){for(var n=0;n<r.length;n++)we(r[n],r[++n],r[++n]);v.__c&&v.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){v.__e(o,i.__v)}})}function Tt(e,t,r,n,i,o,c,u,a){var l,_,s,p=r.props,h=t.props,f=t.type,d=0;if(f==="svg"&&(i=!0),o!=null){for(;d<o.length;d++)if((l=o[d])&&"setAttribute"in l==!!f&&(f?l.localName===f:l.nodeType===3)){e=l,o[d]=null;break}}if(e==null){if(f===null)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,h.is&&h),o=null,u=!1}if(f===null)p===h||u&&e.data===h||(e.data=h);else{if(o=o&&ie.call(e.childNodes),_=(p=r.props||j).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!u){if(o!=null)for(p={},d=0;d<e.attributes.length;d++)p[e.attributes[d].name]=e.attributes[d].value;(s||_)&&(s&&(_&&s.__html==_.__html||s.__html===e.innerHTML)||(e.innerHTML=s&&s.__html||""))}if(Et(e,h,p,i,u),s)t.__k=[];else if(tt(e,ge(d=t.props.children)?d:[d],t,r,n,i&&f!=="foreignObject",o,c,o?o[0]:r.__k&&Z(r,0),u,a),o!=null)for(d=o.length;d--;)o[d]!=null&&Ze(o[d]);u||("value"in h&&(d=h.value)!==void 0&&(d!==e.value||f==="progress"&&!d||f==="option"&&d!==p.value)&&te(e,"value",d,p.value,!1),"checked"in h&&(d=h.checked)!==void 0&&d!==e.checked&&te(e,"checked",d,p.checked,!1))}return e}function we(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(n){v.__e(n,r)}}function it(e,t,r){var n,i;if(v.unmount&&v.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||we(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){v.__e(o,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(i=0;i<n.length;i++)n[i]&&it(n[i],t,r||typeof e.type!="function");r||e.__e==null||Ze(e.__e),e.__=e.__e=e.__d=void 0}function xt(e,t,r){return this.constructor(e,r)}function $t(e,t,r){var n,i,o,c;v.__&&v.__(e,t),i=(n=typeof r=="function")?null:r&&r.__k||t.__k,o=[],c=[],Se(t,e=(!n&&r||t).__k=wt(R,null,[e]),i||j,j,t.ownerSVGElement!==void 0,!n&&r?[r]:i?null:t.firstChild?ie.call(t.childNodes):null,o,!n&&r?r:i?i.__e:t.firstChild,n,c),ot(o,e,c)}ie=Xe.slice,v={__e:function(e,t,r,n){for(var i,o,c;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,n||{}),c=i.__d),c)return i.__E=i}catch(u){e=u}throw e}},Je=0,K.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=I({},this.state),typeof e=="function"&&(e=e(I({},r),this.props)),e&&I(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Oe(this))},K.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Oe(this))},K.prototype.render=R,H=[],Qe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_e=function(e,t){return e.__v.__b-t.__v.__b},ee.__r=0;var B,m,se,Fe,re=0,ct=[],J=[],Le=v.__b,je=v.__r,Ne=v.diffed,Me=v.__c,Re=v.unmount;function ke(e,t){v.__h&&v.__h(m,e,re||t),re=0;var r=m.__H||(m.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:J}),r.__[e]}function De(e){return re=1,It(ut,e)}function It(e,t,r){var n=ke(B++,2);if(n.t=e,!n.__c&&(n.__=[r?r(t):ut(void 0,t),function(u){var a=n.__N?n.__N[0]:n.__[0],l=n.t(a,u);a!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=m,!m.u)){var i=function(u,a,l){if(!n.__c.__H)return!0;var _=n.__c.__H.__.filter(function(p){return p.__c});if(_.every(function(p){return!p.__N}))return!o||o.call(this,u,a,l);var s=!1;return _.forEach(function(p){if(p.__N){var h=p.__[0];p.__=p.__N,p.__N=void 0,h!==p.__[0]&&(s=!0)}}),!(!s&&n.__c.props===u)&&(!o||o.call(this,u,a,l))};m.u=!0;var o=m.shouldComponentUpdate,c=m.componentWillUpdate;m.componentWillUpdate=function(u,a,l){if(this.__e){var _=o;o=void 0,i(u,a,l),o=_}c&&c.call(this,u,a,l)},m.shouldComponentUpdate=i}return n.__N||n.__}function Ve(e,t){var r=ke(B++,3);!v.__s&&st(r.__H,t)&&(r.__=e,r.i=t,m.__H.__h.push(r))}function At(e,t){var r=ke(B++,7);return st(r.__H,t)?(r.__V=e(),r.i=t,r.__h=e,r.__V):r.__}function ue(e,t){return re=8,At(function(){return e},t)}function Pt(){for(var e;e=ct.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(pe),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){m=null,Le&&Le(e)},v.__r=function(e){je&&je(e),B=0;var t=(m=e.__c).__H;t&&(se===m?(t.__h=[],m.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=J,r.__N=r.i=void 0})):(t.__h.forEach(Q),t.__h.forEach(pe),t.__h=[],B=0)),se=m},v.diffed=function(e){Ne&&Ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ct.push(t)!==1&&Fe===v.requestAnimationFrame||((Fe=v.requestAnimationFrame)||Ot)(Pt)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==J&&(r.__=r.__V),r.i=void 0,r.__V=J})),se=m=null},v.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Q),r.__h=r.__h.filter(function(n){return!n.__||pe(n)})}catch(n){t.some(function(i){i.__h&&(i.__h=[])}),t=[],v.__e(n,r.__v)}}),Me&&Me(e,t)},v.unmount=function(e){Re&&Re(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{Q(n)}catch(i){t=i}}),r.__H=void 0,t&&v.__e(t,r.__v))};var Be=typeof requestAnimationFrame=="function";function Ot(e){var t,r=function(){clearTimeout(n),Be&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);Be&&(t=requestAnimationFrame(r))}function Q(e){var t=m,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),m=t}function pe(e){var t=m;e.__c=e.__(),m=t}function st(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function ut(e,t){return typeof t=="function"?t(e):t}var Ct=0;function g(e,t,r,n,i,o){var c,u,a={};for(u in t)u=="ref"?c=t[u]:a[u]=t[u];var l={type:e,props:a,key:r,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ct,__source:i,__self:o};if(typeof e=="function"&&(c=e.defaultProps))for(u in c)a[u]===void 0&&(a[u]=c[u]);return v.vnode&&v.vnode(l),l}function Ht({iconName:e,onBtnClick:t,title:r}){return g("button",{className:"action-btn","data-test":r==null?void 0:r.toLowerCase(),onClick:t,title:r,children:g("i",{class:`fa-solid fa-${e}`})})}function Ut(e){const t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60,i=t.toString().padStart(2,"0"),o=r.toString().padStart(2,"0"),c=n.toString().padStart(2,"0");return`${i}:${o}:${c}`}function Ft({tracker:e,onStartTracker:t,isActive:r,onPauseTracker:n,onDeleteTracker:i}){const o=ue(()=>{n==null||n(e)},[e,n]),c=ue(()=>{t==null||t(e)},[e,t]),u=ue(()=>{i==null||i(e)},[e,i]),a=Ut(e.timeInSecs);return g("div",{className:"tracker","data-test":"tracker",children:[g("span",{children:e.name}),g("span",{"data-test":"tracker-time",children:a}),!r&&g("button",{"data-test":"start-tracker",className:"primary",onClick:c,children:"Start"}),r&&g("button",{className:"primary",onClick:o,children:"Pause"}),g("div",{className:"actions",children:g(Ht,{iconName:"trash",onBtnClick:u,title:"Delete"})})]})}const V=class V{add(){let t;do t=prompt("Enter name of tracker");while(!t);return{name:t,timeInSecs:0}}save(t){localStorage.setItem(V.storageKey,JSON.stringify(t))}load(){const t=localStorage.getItem(V.storageKey);return t?JSON.parse(t):[]}};Ae(V,"storageKey","trackers");let de=V;const at={getTrackerService(){return new de}};var he=function(e,t){return he=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},he(e,t)};function D(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");he(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}function Lt(e,t,r,n){function i(o){return o instanceof r?o:new r(function(c){c(o)})}return new(r||(r=Promise))(function(o,c){function u(_){try{l(n.next(_))}catch(s){c(s)}}function a(_){try{l(n.throw(_))}catch(s){c(s)}}function l(_){_.done?o(_.value):i(_.value).then(u,a)}l((n=n.apply(e,t||[])).next())})}function lt(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,c;return c={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function u(l){return function(_){return a([l,_])}}function a(l){if(n)throw new TypeError("Generator is already executing.");for(;c&&(c=0,l[0]&&(r=0)),r;)try{if(n=1,i&&(o=l[0]&2?i.return:l[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,l[1])).done)return o;switch(i=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(l[0]===6&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(_){l=[6,_],i=0}finally{n=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function M(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ne(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,o=[],c;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)o.push(i.value)}catch(u){c={error:u}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(c)throw c.error}}return o}function oe(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,o;n<i;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function N(e){return this instanceof N?(this.v=e,this):new N(e)}function jt(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),i,o=[];return i={},c("next"),c("throw"),c("return"),i[Symbol.asyncIterator]=function(){return this},i;function c(p){n[p]&&(i[p]=function(h){return new Promise(function(f,d){o.push([p,h,f,d])>1||u(p,h)})})}function u(p,h){try{a(n[p](h))}catch(f){s(o[0][3],f)}}function a(p){p.value instanceof N?Promise.resolve(p.value.v).then(l,_):s(o[0][2],p)}function l(p){u("next",p)}function _(p){u("throw",p)}function s(p,h){p(h),o.shift(),o.length&&u(o[0][0],o[0][1])}}function Nt(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof M=="function"?M(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=e[o]&&function(c){return new Promise(function(u,a){c=e[o](c),i(u,a,c.done,c.value)})}}function i(o,c,u,a){Promise.resolve(a).then(function(l){o({value:l,done:u})},c)}}function S(e){return typeof e=="function"}function ft(e){var t=function(n){Error.call(n),n.stack=new Error().stack},r=e(t);return r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r}var ae=ft(function(e){return function(r){e(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(n,i){return i+1+") "+n.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r}});function ve(e,t){if(e){var r=e.indexOf(t);0<=r&&e.splice(r,1)}}var ce=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,r,n,i,o;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var u=M(c),a=u.next();!a.done;a=u.next()){var l=a.value;l.remove(this)}}catch(d){t={error:d}}finally{try{a&&!a.done&&(r=u.return)&&r.call(u)}finally{if(t)throw t.error}}else c.remove(this);var _=this.initialTeardown;if(S(_))try{_()}catch(d){o=d instanceof ae?d.errors:[d]}var s=this._finalizers;if(s){this._finalizers=null;try{for(var p=M(s),h=p.next();!h.done;h=p.next()){var f=h.value;try{We(f)}catch(d){o=o??[],d instanceof ae?o=oe(oe([],ne(o)),ne(d.errors)):o.push(d)}}}catch(d){n={error:d}}finally{try{h&&!h.done&&(i=p.return)&&i.call(p)}finally{if(n)throw n.error}}}if(o)throw new ae(o)}},e.prototype.add=function(t){var r;if(t&&t!==this)if(this.closed)We(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(r=this._finalizers)!==null&&r!==void 0?r:[]).push(t)}},e.prototype._hasParent=function(t){var r=this._parentage;return r===t||Array.isArray(r)&&r.includes(t)},e.prototype._addParent=function(t){var r=this._parentage;this._parentage=Array.isArray(r)?(r.push(t),r):r?[r,t]:t},e.prototype._removeParent=function(t){var r=this._parentage;r===t?this._parentage=null:Array.isArray(r)&&ve(r,t)},e.prototype.remove=function(t){var r=this._finalizers;r&&ve(r,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),_t=ce.EMPTY;function pt(e){return e instanceof ce||e&&"closed"in e&&S(e.remove)&&S(e.add)&&S(e.unsubscribe)}function We(e){S(e)?e():e.unsubscribe()}var dt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},ye={setTimeout:function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var i=ye.delegate;return i!=null&&i.setTimeout?i.setTimeout.apply(i,oe([e,t],ne(r))):setTimeout.apply(void 0,oe([e,t],ne(r)))},clearTimeout:function(e){var t=ye.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function ht(e){ye.setTimeout(function(){throw e})}function me(){}function X(e){e()}var Ee=function(e){D(t,e);function t(r){var n=e.call(this)||this;return n.isStopped=!1,r?(n.destination=r,pt(r)&&r.add(n)):n.destination=Vt,n}return t.create=function(r,n,i){return new be(r,n,i)},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(ce),Mt=Function.prototype.bind;function le(e,t){return Mt.call(e,t)}var Rt=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var r=this.partialObserver;if(r.next)try{r.next(t)}catch(n){q(n)}},e.prototype.error=function(t){var r=this.partialObserver;if(r.error)try{r.error(t)}catch(n){q(n)}else q(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(r){q(r)}},e}(),be=function(e){D(t,e);function t(r,n,i){var o=e.call(this)||this,c;if(S(r)||!r)c={next:r??void 0,error:n??void 0,complete:i??void 0};else{var u;o&&dt.useDeprecatedNextContext?(u=Object.create(r),u.unsubscribe=function(){return o.unsubscribe()},c={next:r.next&&le(r.next,u),error:r.error&&le(r.error,u),complete:r.complete&&le(r.complete,u)}):c=r}return o.destination=new Rt(c),o}return t}(Ee);function q(e){ht(e)}function Dt(e){throw e}var Vt={closed:!0,next:me,error:Dt,complete:me},Te=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function vt(e){return e}function Bt(e){return e.length===0?vt:e.length===1?e[0]:function(r){return e.reduce(function(n,i){return i(n)},r)}}var P=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var r=new e;return r.source=this,r.operator=t,r},e.prototype.subscribe=function(t,r,n){var i=this,o=qt(t)?t:new be(t,r,n);return X(function(){var c=i,u=c.operator,a=c.source;o.add(u?u.call(o,a):a?i._subscribe(o):i._trySubscribe(o))}),o},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(r){t.error(r)}},e.prototype.forEach=function(t,r){var n=this;return r=qe(r),new r(function(i,o){var c=new be({next:function(u){try{t(u)}catch(a){o(a),c.unsubscribe()}},error:o,complete:i});n.subscribe(c)})},e.prototype._subscribe=function(t){var r;return(r=this.source)===null||r===void 0?void 0:r.subscribe(t)},e.prototype[Te]=function(){return this},e.prototype.pipe=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return Bt(t)(this)},e.prototype.toPromise=function(t){var r=this;return t=qe(t),new t(function(n,i){var o;r.subscribe(function(c){return o=c},function(c){return i(c)},function(){return n(o)})})},e.create=function(t){return new e(t)},e}();function qe(e){var t;return(t=e??dt.Promise)!==null&&t!==void 0?t:Promise}function Wt(e){return e&&S(e.next)&&S(e.error)&&S(e.complete)}function qt(e){return e&&e instanceof Ee||Wt(e)&&pt(e)}function zt(e){return S(e==null?void 0:e.lift)}function xe(e){return function(t){if(zt(t))return t.lift(function(r){try{return e(r,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function $e(e,t,r,n,i){return new Gt(e,t,r,n,i)}var Gt=function(e){D(t,e);function t(r,n,i,o,c,u){var a=e.call(this,r)||this;return a.onFinalize=c,a.shouldUnsubscribe=u,a._next=n?function(l){try{n(l)}catch(_){r.error(_)}}:e.prototype._next,a._error=o?function(l){try{o(l)}catch(_){r.error(_)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=i?function(){try{i()}catch(l){r.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,a}return t.prototype.unsubscribe=function(){var r;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var n=this.closed;e.prototype.unsubscribe.call(this),!n&&((r=this.onFinalize)===null||r===void 0||r.call(this))}},t}(Ee),Yt=ft(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),U=function(e){D(t,e);function t(){var r=e.call(this)||this;return r.closed=!1,r.currentObservers=null,r.observers=[],r.isStopped=!1,r.hasError=!1,r.thrownError=null,r}return t.prototype.lift=function(r){var n=new ze(this,this);return n.operator=r,n},t.prototype._throwIfClosed=function(){if(this.closed)throw new Yt},t.prototype.next=function(r){var n=this;X(function(){var i,o;if(n._throwIfClosed(),!n.isStopped){n.currentObservers||(n.currentObservers=Array.from(n.observers));try{for(var c=M(n.currentObservers),u=c.next();!u.done;u=c.next()){var a=u.value;a.next(r)}}catch(l){i={error:l}}finally{try{u&&!u.done&&(o=c.return)&&o.call(c)}finally{if(i)throw i.error}}}})},t.prototype.error=function(r){var n=this;X(function(){if(n._throwIfClosed(),!n.isStopped){n.hasError=n.isStopped=!0,n.thrownError=r;for(var i=n.observers;i.length;)i.shift().error(r)}})},t.prototype.complete=function(){var r=this;X(function(){if(r._throwIfClosed(),!r.isStopped){r.isStopped=!0;for(var n=r.observers;n.length;)n.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var r;return((r=this.observers)===null||r===void 0?void 0:r.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(r){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,r)},t.prototype._subscribe=function(r){return this._throwIfClosed(),this._checkFinalizedStatuses(r),this._innerSubscribe(r)},t.prototype._innerSubscribe=function(r){var n=this,i=this,o=i.hasError,c=i.isStopped,u=i.observers;return o||c?_t:(this.currentObservers=null,u.push(r),new ce(function(){n.currentObservers=null,ve(u,r)}))},t.prototype._checkFinalizedStatuses=function(r){var n=this,i=n.hasError,o=n.thrownError,c=n.isStopped;i?r.error(o):c&&r.complete()},t.prototype.asObservable=function(){var r=new P;return r.source=this,r},t.create=function(r,n){return new ze(r,n)},t}(P),ze=function(e){D(t,e);function t(r,n){var i=e.call(this)||this;return i.destination=r,i.source=n,i}return t.prototype.next=function(r){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.next)===null||i===void 0||i.call(n,r)},t.prototype.error=function(r){var n,i;(i=(n=this.destination)===null||n===void 0?void 0:n.error)===null||i===void 0||i.call(n,r)},t.prototype.complete=function(){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.complete)===null||n===void 0||n.call(r)},t.prototype._subscribe=function(r){var n,i;return(i=(n=this.source)===null||n===void 0?void 0:n.subscribe(r))!==null&&i!==void 0?i:_t},t}(U),Kt=function(e){D(t,e);function t(r){var n=e.call(this)||this;return n._value=r,n}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(r){var n=e.prototype._subscribe.call(this,r);return!n.closed&&r.next(this._value),n},t.prototype.getValue=function(){var r=this,n=r.hasError,i=r.thrownError,o=r._value;if(n)throw i;return this._throwIfClosed(),o},t.prototype.next=function(r){e.prototype.next.call(this,this._value=r)},t}(U),Jt=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function Qt(e){return S(e==null?void 0:e.then)}function Xt(e){return S(e[Te])}function Zt(e){return Symbol.asyncIterator&&S(e==null?void 0:e[Symbol.asyncIterator])}function er(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function tr(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var rr=tr();function nr(e){return S(e==null?void 0:e[rr])}function or(e){return jt(this,arguments,function(){var r,n,i,o;return lt(this,function(c){switch(c.label){case 0:r=e.getReader(),c.label=1;case 1:c.trys.push([1,,9,10]),c.label=2;case 2:return[4,N(r.read())];case 3:return n=c.sent(),i=n.value,o=n.done,o?[4,N(void 0)]:[3,5];case 4:return[2,c.sent()];case 5:return[4,N(i)];case 6:return[4,c.sent()];case 7:return c.sent(),[3,2];case 8:return[3,10];case 9:return r.releaseLock(),[7];case 10:return[2]}})})}function ir(e){return S(e==null?void 0:e.getReader)}function cr(e){if(e instanceof P)return e;if(e!=null){if(Xt(e))return sr(e);if(Jt(e))return ur(e);if(Qt(e))return ar(e);if(Zt(e))return yt(e);if(nr(e))return lr(e);if(ir(e))return fr(e)}throw er(e)}function sr(e){return new P(function(t){var r=e[Te]();if(S(r.subscribe))return r.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ur(e){return new P(function(t){for(var r=0;r<e.length&&!t.closed;r++)t.next(e[r]);t.complete()})}function ar(e){return new P(function(t){e.then(function(r){t.closed||(t.next(r),t.complete())},function(r){return t.error(r)}).then(null,ht)})}function lr(e){return new P(function(t){var r,n;try{for(var i=M(e),o=i.next();!o.done;o=i.next()){var c=o.value;if(t.next(c),t.closed)return}}catch(u){r={error:u}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}t.complete()})}function yt(e){return new P(function(t){_r(e,t).catch(function(r){return t.error(r)})})}function fr(e){return yt(or(e))}function _r(e,t){var r,n,i,o;return Lt(this,void 0,void 0,function(){var c,u;return lt(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),r=Nt(e),a.label=1;case 1:return[4,r.next()];case 2:if(n=a.sent(),!!n.done)return[3,4];if(c=n.value,t.next(c),t.closed)return[2];a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return u=a.sent(),i={error:u},[3,11];case 6:return a.trys.push([6,,9,10]),n&&!n.done&&(o=r.return)?[4,o.call(r)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function fe(e,t){return xe(function(r,n){var i=0;r.subscribe($e(n,function(o){n.next(e.call(t,o,i++))}))})}function Ge(e){return xe(function(t,r){cr(e).subscribe($e(r,function(){return r.complete()},me)),!r.closed&&t.subscribe(r)})}function z(e,t,r){var n=S(e)||t||r?{next:e,error:t,complete:r}:e;return n?xe(function(i,o){var c;(c=n.subscribe)===null||c===void 0||c.call(n);var u=!0;i.subscribe($e(o,function(a){var l;(l=n.next)===null||l===void 0||l.call(n,a),o.next(a)},function(){var a;u=!1,(a=n.complete)===null||a===void 0||a.call(n),o.complete()},function(a){var l;u=!1,(l=n.error)===null||l===void 0||l.call(n,a),o.error(a)},function(){var a,l;u&&((a=n.unsubscribe)===null||a===void 0||a.call(n)),(l=n.finalize)===null||l===void 0||l.call(n)}))}):vt}const Ie=at.getTrackerService();let mt;const x=new Kt({trackers:Ie.load(),activeTracker:void 0}),A={addTrackerClick$:new U,deleteTrackerClick$:new U,startTracker$:new U,pauseTracker$:new U},F={setTrackers(e){let t;typeof e=="function"?t=e(x.value.trackers):t=e,x.next({...x.value,trackers:t}),Ie.save(t)},setTimer(e){mt=e},setActiveTracker(e){let t;typeof e=="function"?t=e(x.value.activeTracker):t=e,x.next({...x.value,activeTracker:t})}},Ye=()=>{clearInterval(mt),F.setTimer(void 0)},Ke=(e,t)=>{t&&(n=>{const{trackers:i}=x.value,o=i.findIndex(c=>c.name===n.name);i.splice(o,1,n),F.setTrackers([...i])})(t),F.setActiveTracker(e)},pr=()=>{const e=setInterval(()=>{F.setActiveTracker(t=>t&&{...t,timeInSecs:t.timeInSecs+1})},1e3);F.setTimer(e)},G={addTracker$:A.addTrackerClick$.pipe(fe(Ie.add),fe(e=>[...x.value.trackers,e]),z(e=>{F.setTrackers(e)})),deleteTracker$:A.deleteTrackerClick$.pipe(fe(e=>confirm(`Are you sure you want to delete tracker - ${e.name} ?`)?(n=>x.value.trackers.filter(i=>i.name!==n.name))(e):x.value.trackers),z(e=>{F.setTrackers(e)})),startTracker$:A.startTracker$.pipe(z(e=>{Ye(),Ke(e,x.value.activeTracker),pr()})),pauseTracker$:A.pauseTracker$.pipe(z(e=>{Ye(),Ke(void 0,e)}))};function dr(e){return{subscribe(t){return t.pipe(Ge(e)).subscribe()},stream(t){return t.pipe(Ge(e))}}}const hr=10,vr=at.getTrackerService();function yr(){const[e,t]=De([]),[r,n]=De(void 0);return Ve(()=>{const i=new U,{subscribe:o,stream:c}=dr(i);return c(x).subscribe(u=>{t(u.trackers),n(u.activeTracker)}),o(G.addTracker$),o(G.deleteTracker$),o(G.startTracker$),o(G.pauseTracker$),()=>{i.next(),i.complete()}},[]),Ve(()=>{let i=setInterval(()=>{vr.save(e)},hr*1e3);return()=>{clearInterval(i)}},[]),g(R,{children:[g("ul",{className:"tracker-list",children:e.map(i=>g("li",{children:g(Ft,{onStartTracker:o=>A.startTracker$.next(o),onPauseTracker:o=>A.pauseTracker$.next(o),onDeleteTracker:o=>A.deleteTrackerClick$.next(o),isActive:i.name===(r==null?void 0:r.name),tracker:i.name===(r==null?void 0:r.name)?r:i})},i.name))}),g("button",{"data-test":"add-tracker",onClick:()=>A.addTrackerClick$.next(),class:"add-tracker",children:"Add"})]})}function mr(){return g(R,{children:g(yr,{})})}$t(g(mr,{}),document.getElementById("app"));
