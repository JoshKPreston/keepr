(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f07b2d94"],{"2ccc":function(e,t,a){"use strict";a("e33f")},e33f:function(e,t,a){},e6f4:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const l=Object(c["J"])("data-v-7725c27a");Object(c["u"])("data-v-7725c27a");const n={class:"vault-page container-fluid bg-light"},s={class:"row p-5"},i={class:"col"},u={class:"row"},r=Object(c["h"])("i",{class:"fa fa-trash-o fa-2x","aria-hidden":"true"},null,-1),o={class:"row"},b={class:"grid"};Object(c["s"])();const d=l((function(e,t,a,l,d,p){const j=Object(c["y"])("keep-component");return Object(c["r"])(),Object(c["e"])("div",n,[Object(c["h"])("div",s,[Object(c["h"])("div",i,[Object(c["h"])("div",u,[Object(c["h"])("h1",null,Object(c["B"])(l.vault.name),1),l.profile.id==l.vault.creatorId?(Object(c["r"])(),Object(c["e"])("div",{key:0,onClick:t[1]||(t[1]=e=>l.Delete(l.vault.id)),class:"col-1 d-flex justify-content-center align-items-center btn-delete"},[r])):Object(c["f"])("",!0)]),Object(c["h"])("div",o,[Object(c["h"])("h5",null,"Keeps: "+Object(c["B"])(l.keeps.length),1)])])]),Object(c["h"])("div",b,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(l.keeps,e=>(Object(c["r"])(),Object(c["e"])(j,{key:e,"keep-prop":e},null,8,["keep-prop"]))),128))])])}));var p=a("d10d"),j=a("6c02"),O=a("83fc"),f=a("41cb"),v=a("3d20"),h=a.n(v),w=a("a613"),k={name:"VaultPage",setup(){const e=Object(j["c"])();return Object(c["p"])(async()=>{await p["a"].GetOne(e.params.id),await p["a"].GetKeepsByVaultId(e.params.id),await w["a"].Get()}),{route:e,profile:Object(c["c"])(()=>O["a"].profile),vault:Object(c["c"])(()=>O["a"].activeVault),keeps:Object(c["c"])(()=>O["a"].keeps),vaultKeeps:Object(c["c"])(()=>O["a"].vaultKeeps),async Delete(e){await h.a.fire({text:"Are you sure you want to delete this Vault?",icon:"warning",confirmButtonText:"Delete",showCancelButton:!0,cancelButtonText:"Cancel"}).then(t=>{t.value&&(O["a"].vaults=O["a"].vaults.filter(e=>e.id!==this.vault.id),O["a"].activeVault={},p["a"].Delete(e),f["a"].push({name:"ProfilePage",params:{id:this.profile.id}}))})}}}};a("2ccc");k.render=d,k.__scopeId="data-v-7725c27a";t["default"]=k}}]);