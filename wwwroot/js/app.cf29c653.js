(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-038f4448":"67fac3aa","chunk-0b28e1af":"9a43a220","chunk-2d0c19e3":"c97851f1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-038f4448":1,"chunk-0b28e1af":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-038f4448":"d51c21dc","chunk-0b28e1af":"7560b895","chunk-2d0c19e3":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01e8":function(e,t,n){"use strict";n("feda")},"41cb":function(e,t,n){"use strict";var r=n("6c02"),a=n("8816");function o(e){return()=>n("a2f9")(`./${e}.vue`)}const c=[{path:"/",name:"Home",component:o("HomePage")},{path:"/profile",name:"Profile",component:o("ProfilePage"),beforeEnter:a["a"]},{path:"/vault/:id",name:"Vault",component:o("VaultPage")}],u=Object(r["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(r["b"])(),routes:c});t["a"]=u},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const a=Object(r["g"])("footer",null,null,-1);function o(e,t,n,o,c,u){const i=Object(r["v"])("Navbar"),s=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["e"])(r["a"],null,[Object(r["g"])("header",null,[Object(r["g"])(i)]),Object(r["g"])("main",null,[Object(r["g"])(s,null,{default:Object(r["B"])(({Component:e})=>[Object(r["g"])(r["b"],{name:"route",mode:"out-in"},{default:Object(r["B"])(()=>[(Object(r["p"])(),Object(r["e"])(Object(r["w"])(e)))]),_:2},1024)]),_:1})]),a],64)}var c=n("83fc"),u={name:"App",setup(){return{appState:Object(r["c"])(()=>c["a"])}}};n("ec82");u.render=o;var i=u;function s(e){const t=n("ccc2");t.keys().forEach(n=>{const r=t(n),a=r.default||r,o=a.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,a)})}var l=n("41cb"),f=n("4989"),d=n.n(f),p=n("1157"),b=n.n(p),g=n("f0bd");const v=Object(r["d"])(i);s(v),v.use(l["a"],d.a,b.a,g["default"]).mount("#app")},"83fc":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("7a23");const a=Object(r["t"])({user:{},profile:{},vaults:[],activeVault:{},keeps:[],activeKeep:{}})},"939e":function(e,t,n){},"9d8d":function(e,t,n){"use strict";n.r(t);var r=n("7a23");const a=Object(r["C"])("data-v-009e6280");Object(r["s"])("data-v-009e6280");const o={class:"d-flex justify-content-between navbar navbar-expand navbar-dark bg-dark"},c=Object(r["g"])("div",{class:"d-flex flex-column align-items-center"},null,-1),u=Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},s={class:"navbar-nav mr-auto"},l={class:"nav-item"},f=Object(r["f"])(" Home "),d={class:"navbar-text"},p={key:1,class:"dropdown"},b={class:"mx-3"},g=Object(r["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Profile ",-1);Object(r["q"])();const v=a((function(e,t,n,v,h,O){const m=Object(r["v"])("router-link");return Object(r["p"])(),Object(r["e"])("nav",o,[Object(r["g"])(m,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:a(()=>[c]),_:1}),u,Object(r["g"])("div",i,[Object(r["g"])("ul",s,[Object(r["g"])("li",l,[Object(r["g"])(m,{to:{name:"Home"},class:"nav-link"},{default:a(()=>[f]),_:1})])]),Object(r["g"])("span",d,[v.user.isAuthenticated?(Object(r["p"])(),Object(r["e"])("div",p,[Object(r["g"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>v.state.dropOpen=!v.state.dropOpen)},[Object(r["g"])("img",{src:v.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(r["g"])("span",b,Object(r["y"])(v.user.name),1)]),Object(r["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:v.state.dropOpen}],onClick:t[4]||(t[4]=e=>v.state.dropOpen=!1)},[Object(r["g"])(m,{to:{name:"Profile"}},{default:a(()=>[g]),_:1}),Object(r["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>v.logout(...e))}," logout ")],2)])):(Object(r["p"])(),Object(r["e"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>v.login(...e))}," Login "))])])])}));var h=n("8816"),O=n("83fc");const m="bcwclassroom.us.auth0.com",j="csgstdwTeKjob32P31fW3JpxK7995Mwp",w="https://keepr/api";var y=n("41cb"),k=n("bc3a"),P=n.n(k);const x=window.location.origin.includes("localhost")?"http://localhost:3000":"",E=P.a.create({baseURL:x,timeout:8e3}),T=function(e){E.defaults.headers.authorization=e};function _(e,t){window.location.origin.includes("localhost")&&console[e](...t)}const C={log(){_("log",arguments)},error(){_("error",arguments)},warn(){_("warn",arguments)},assert(){_("assert",arguments)},trace(){_("trace",arguments)}};class A{async getProfile(){try{const e=await E.get("/profile");O["a"].profile=e.data}catch(e){C.error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const N=new A,S=Object(h["b"])({domain:m,clientId:j,audience:w,onRedirectCallback:e=>{y["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});S.on(S.AUTH_EVENTS.AUTHENTICATED,(async function(){T(S.bearer),await N.getProfile(),O["a"].user=S.user}));var U={name:"Navbar",setup(){const e=Object(r["t"])({dropOpen:!1});return{state:e,user:Object(r["c"])(()=>O["a"].user),async login(){S.loginWithPopup()},async logout(){await S.logout({returnTo:window.location.origin})}}}};n("01e8");U.render=v,U.__scopeId="data-v-009e6280";t["default"]=U},a2f9:function(e,t,n){var r={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./HomePage.vue":["78a7","chunk-0b28e1af"],"./ProfilePage.vue":["1a3e","chunk-038f4448"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="a2f9",e.exports=a},ccc2:function(e,t,n){var r={"./navbar.vue":"9d8d"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="ccc2"},ec82:function(e,t,n){"use strict";n("939e")},feda:function(e,t,n){}});