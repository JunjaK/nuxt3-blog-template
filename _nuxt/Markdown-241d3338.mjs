import{d as p,a as g,c as h,h as a,j as w}from"./entry-b4dfca9a.mjs";import{u as y}from"./utils-dde5c55a.mjs";var M=p({name:"Markdown",functional:!0,props:{use:{type:[String,Function],default:"default"},unwrap:{type:[Boolean,String],default:!1}},setup(r){const{parent:u}=w(),{between:s}=g();return{tags:h(()=>typeof r.unwrap=="string"?r.unwrap.split(" "):["*"]),between:s,parent:u}},render({use:r,unwrap:u,between:s,tags:f,parent:n}){var l;try{const o=typeof r=="string"?(n==null?void 0:n.slots[r])||((l=n==null?void 0:n.parent)==null?void 0:l.slots[r]):r;if(!o)return a("div");if(!u)return[o()];const{flatUnwrap:d}=y(),i=d(o(),f);return s?i.flatMap((t,e)=>e===0?[t]:[s(),t]):i.reduce((t,e)=>(typeof e.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=e.children:t.push(e.children):t.push(e),t),[])}catch{return a("div")}}});export{M as default};
