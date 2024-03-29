import{j as f}from"./jsx-runtime-29545a09.js";import{r as n}from"./index-76fb7be0.js";import{S as s}from"./Search-866f8fed.js";import{a as h}from"./chunk-WFFRPTHA-a68c42c5.js";import"./_commonjsHelpers-de833af9.js";import"./SPA-7e65fab1.js";import"./index-d3ea75b5.js";import"./index-9d475cdf.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const j={title:"Core/Search",component:s,argTypes:{label:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},isFetching:{control:"boolean"},marginBottom:{control:"number"},onChange:{action:"change"},inputProps:{control:"object"}}},e=t=>f(s,{...t});e.args={label:"",disabled:!1,required:!1,isFetching:!1,marginBottom:10,onChange:h("onChange"),inputProps:{placeholder:"Enter the value"}};const o=t=>{const r=n.useRef(null);return n.useEffect(()=>{var a;return r&&((a=r.current)==null?void 0:a.focus())},[r]),f(s,{ref:r,...t})};var c,p,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"props => <Search {...props} />",...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,i,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`props => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => searchInputRef && searchInputRef.current?.focus(), [searchInputRef]);
  return <Search ref={searchInputRef} {...props} />;
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const _=["Default","AutoFocus"];export{o as AutoFocus,e as Default,_ as __namedExportsOrder,j as default};
