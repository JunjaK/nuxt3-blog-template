import{h as w}from"./json-defa14c4.mjs";import{d as g,t as S,c as b,a as C,h as $}from"./entry-b4dfca9a.mjs";import{u as k}from"./asyncData-f4670396.mjs";import{q as c}from"./query-867b352c.mjs";import"./utils-dde5c55a.mjs";var j=g({props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:n,where:i,sort:l,limit:o,skip:f,locale:s,find:d}=S(a),p=b(()=>t.value.includes("/_")),{data:h,refresh:v}=await k(`content-query-${w(a)}`,()=>{let e;return t.value?e=c(t.value):e=c(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),i.value&&(e=e.where(i.value)),l.value&&(e=e.sort(l.value)),o.value&&(e=e.limit(o.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()},"$PYgG92qKca");return{isPartial:p,data:h,refresh:v}},render(a){var y;const t=C(),{data:r,refresh:n,isPartial:i,path:l,only:o,without:f,where:s,sort:d,limit:p,skip:h,locale:v,find:e}=a,u={path:l,only:o,without:f,where:s,sort:d,limit:p,skip:h,locale:v,find:e};if(u.find==="one"){if(!r&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(r._type&&r._type==="markdown"&&!((y=r==null?void 0:r.body)!=null&&y.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:i,props:u,...this.$attrs}):((m,q)=>$("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:m,data:q},null,2)))("default",{data:r,props:u,isPartial:i})}});export{j as default};
