import{h as r,j as m,u}from"./json-defa14c4.mjs";import{d as h,t as c,a as v,h as g}from"./entry-b4dfca9a.mjs";import{u as d}from"./asyncData-f4670396.mjs";import{w as y}from"./utils-dde5c55a.mjs";const l=e=>{const t=e==null?void 0:e.params(),n=y(t?`/navigation/${r(t)}`:"/navigation");return $fetch(n,{method:"GET",responseType:"json",params:{_params:m(t||{}),previewToken:u("previewToken").value}})};var j=h({props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=c(e),{data:n,refresh:a}=await d(`content-navigation-${r(t.value)}`,()=>l(t.value),"$Xi87ZVr2zG");return{data:n,refresh:a}},render(e){var s;const t=v(),{query:n,data:a,refresh:i}=e,o=(p,f)=>g("pre",null,JSON.stringify({message:"You should use slots with <ContentNavigation>",slot:p,data:f},null,2));return(t==null?void 0:t.empty)&&(!a||!(a!=null&&a.length))?((s=t==null?void 0:t.empty)==null?void 0:s.call(t,{query:n,...this.$attrs}))||o("empty",{query:n,data:a}):t!=null&&t.default?t.default({navigation:a,refresh:i,...this.$attrs}):o("default",a)}});export{j as default};