import{j as m}from"./jsx-runtime-29545a09.js";import{r as y}from"./index-76fb7be0.js";import{O as F,Q as k,U as C,V as L,W as j,S as M}from"./SPA-0f542073.js";import"./index-d3ea75b5.js";const q="No items(s) found",g=e=>typeof e=="string",N=e=>typeof e=="number"&&!isNaN(e),h=e=>g(e)||N(e),O=(e,a)=>{if(!Array.isArray(a)||!a.length||!N(e)&&!g(e)&&!Array.isArray(e))return"";if(Array.isArray(e)){const r=a.filter(l=>e.includes(l.value)).map(l=>l.label);return e.length?h(r[0])?r.join(", "):r:""}else{const r=a.find(l=>l.value===e);return(r==null?void 0:r.label)??""}},E=(e,a,r,l)=>{const o=r||"",s=l||q;if(!Array.isArray(e)||!e.length)return[{type:"header",label:s}];const c=e.filter(n=>{const d=n==null?void 0:n.label,f=n==null?void 0:n.description,u=h(d)?`${d}`:f||"";return u?(g(u)?u.toLowerCase():u).includes(o.toLowerCase()):!0}).map(n=>({...n,selected:Array.isArray(a)?a.includes(n.value):n.value===a}));return!Array.isArray(c)||!c.length?[{type:"header",label:s}]:c},I=({id:e,error:a,value:r,initValue:l,options:o,onChange:s,disabled:c,placeholder:n,showInternalSearch:d,noFoundText:f=q,children:u,..._})=>{const[A,S]=y.useState(""),[V,T]=y.useState(l),p=y.useMemo(()=>O(r||V,o),[r,V,o]),x=y.useMemo(()=>E(o,r,A,f),[o,r,A,f]),b=(t,i)=>{if(h(t))T(i.value),s&&s(i.value);else if(Array.isArray(t)){const w=t.includes(i.value)?t.filter(D=>D!==i.value):[...t,i.value];T(w),s&&s(w)}};return m(F,{disabled:c,showInternalSearch:d,fetchMoreText:"Fetch more",autoscrollText:"Autoscroll",selectedIcon:k,externalLinkIcon:C,placement:"bottom-start",hideIcons:!0,inputValue:A,onSelectOption:t=>{S(""),b(r||V,t)},onInputChange:t=>{d&&S(t)},options:x,..._,children:({targetRef:t,targetProps:i})=>u?m("div",{ref:t,...i,children:u}):m(L,{...e?{id:e}:{},placeholder:n||"Select Value",variant:"inline",rightIcon:j,error:a,ref:t,...i,value:Array.isArray(p)?h(p[0])?p[0]:m(M,{gap:6,wrap:"wrap",style:{marginBottom:6},children:p}):p,style:{paddingRight:0,cursor:c?"not-allowed":"pointer"}})})};try{I.displayName="Select",I.__docgenInfo={description:"",displayName:"Select",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"T | T[]"}},initValue:{defaultValue:null,description:"",name:"initValue",required:!1,type:{name:"T | T[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownValueType<T>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: T | T[]) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},showInternalSearch:{defaultValue:null,description:"",name:"showInternalSearch",required:!1,type:{name:"boolean"}},noFoundText:{defaultValue:{value:"No items(s) found"},description:"",name:"noFoundText",required:!1,type:{name:"string"}}}}}catch{}export{I as S};
//# sourceMappingURL=Select-4c57e640.js.map