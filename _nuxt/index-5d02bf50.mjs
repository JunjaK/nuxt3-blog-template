import{v as _,F as u,x as i,C as l,H as d,I as f,G as m,J as x}from"./entry-b4dfca9a.mjs";import{u as y}from"./asyncData-f4670396.mjs";import{q as g}from"./query-867b352c.mjs";import"./json-defa14c4.mjs";import"./utils-dde5c55a.mjs";const v={__name:"index",async setup(p,{expose:c}){c();let e,r;const{data:a}=([e,r]=u(()=>y("ContentDoc",()=>g("").find(),"$xBPy7wOdsE")),e=await e,r(),e),t={};a.value.forEach(s=>{s.tags.split(",").forEach(o=>{t[o]==null&&(t[o]=0),t[o]+=1})}),console.log(a,t);const n={data:a,tagObj:t};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function $(p,c,e,r,a,t){return i(),l("div",null,[(i(),l(d,null,f(r.tagObj,(n,s)=>m("div",null,x(`${s}: ${n}`),1)),64))])}var O=_(v,[["render",$]]);export{O as default};