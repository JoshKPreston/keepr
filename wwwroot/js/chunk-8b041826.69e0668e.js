(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b041826"],{"1a3e":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const s=Object(c["I"])("data-v-eff056dc");Object(c["t"])("data-v-eff056dc");const l={class:"creator-page container-fluid bg-light"},r={class:"row flex-nowrap p-3"},n={class:"col-2"},b={class:"col-6"},o=Object(c["g"])("div",{class:"row p-5 align-items-center"},[Object(c["g"])("h2",{class:"p-2"}," Vaults "),Object(c["g"])("span",{"data-toggle":"modal","data-target":"#modal_newVaultForm",class:"text-primary"},[Object(c["g"])("i",{class:"fa fa-plus fa-2x","aria-hidden":"true"})])],-1),i={class:"row justify-content-around"},p=Object(c["g"])("div",{class:"row p-5 align-items-center"},[Object(c["g"])("h2",{class:"p-2"}," Keeps "),Object(c["g"])("span",{"data-toggle":"modal","data-target":"#modal_newKeepForm",class:"text-primary"},[Object(c["g"])("i",{class:"fa fa-plus fa-2x","aria-hidden":"true"})])],-1),d={class:"grid"};Object(c["r"])();const j=s((function(e,t,a,s,j,O){const u=Object(c["x"])("vault-component"),g=Object(c["x"])("keep-component");return Object(c["q"])(),Object(c["d"])("div",l,[Object(c["g"])("div",r,[Object(c["g"])("div",n,[Object(c["g"])("img",{class:"img-fluid",src:s.creator.picture},null,8,["src"])]),Object(c["g"])("div",b,[Object(c["g"])("h1",null,Object(c["A"])(s.creator.name),1),Object(c["g"])("h5",null,"Vaults: "+Object(c["A"])(s.vaults.length),1),Object(c["g"])("h5",null,"Keeps: "+Object(c["A"])(s.keeps.length),1)])]),o,Object(c["g"])("div",i,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(s.vaults,e=>(Object(c["q"])(),Object(c["d"])(u,{key:e,"vault-prop":e},null,8,["vault-prop"]))),128))]),p,Object(c["g"])("div",d,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(s.keeps,e=>(Object(c["q"])(),Object(c["d"])(g,{key:e,"keep-prop":e},null,8,["keep-prop"]))),128))])])}));var O=a("b5fa"),u=a("6c02"),g=a("83fc"),f={name:"ProfilePage",setup(){const e=Object(u["c"])();return Object(c["o"])(async()=>{if(await O["a"].GetProfileById(e.params.id),await O["a"].GetVaultsByProfileId(e.params.id),await O["a"].GetKeepsByProfileId(e.params.id),null==this.profile)try{O["a"].getProfile()}catch{}}),{creator:Object(c["b"])(()=>g["a"].creator),vaults:Object(c["b"])(()=>g["a"].vaults),keeps:Object(c["b"])(()=>g["a"].keeps),profile:Object(c["b"])(()=>g["a"].profile)}},components:{}};a("b46d");f.render=j,f.__scopeId="data-v-eff056dc";t["default"]=f},ab96:function(e,t,a){},b46d:function(e,t,a){"use strict";a("ab96")}}]);