import{j as l}from"./jsx-runtime-6d9837fe.js";import{K as p,c as i}from"./SPA-63b29876.js";import{T as r}from"./TwoButtonGroup-a846b546.js";import"./index-93f6b7ae.js";import"./index-03a57050.js";const b={title:"Core/TwoButtonGroup",component:r,argTypes:{selected:{control:{type:"radio"},options:["one","two"]},oneLabel:{control:"text"},twoLabel:{control:"text"},oneOnClick:{action:"clicked",table:{disable:!0}},twoOnClick:{action:"clicked",table:{disable:!0}},oneIcon:{control:"boolean"},twoIcon:{control:"boolean"}}},o=({oneIcon:a,twoIcon:c,...s})=>l.jsx(r,{...s,...a?{oneIcon:p}:{},...c?{twoIcon:i}:{}});o.args={selected:"one",oneLabel:"Find",twoLabel:"Create",oneIcon:!0,twoIcon:!0};var e,t,n;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`({
  oneIcon,
  twoIcon,
  ...props
}) => <TwoButtonGroup {...props} {...oneIcon ? {
  oneIcon: faSearch
} : {}} {...twoIcon ? {
  twoIcon: faPlus
} : {}} />`,...(n=(t=o.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const f=["Default"];export{o as Default,f as __namedExportsOrder,b as default};
