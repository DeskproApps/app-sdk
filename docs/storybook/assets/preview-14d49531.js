import{_ as a}from"./iframe-26e5c104.js";import"../sb-preview/runtime.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__;var s=Object.entries(i.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-PKQXORMH-d22d15e4.js").then(r=>r.ai),["./DocsRenderer-PKQXORMH-d22d15e4.js","./iframe-26e5c104.js","./index-070054a4.js","./react-18-c8227282.js","./index-f347cf61.js","./index-1b441bc2.js","./isArray-ea5e9d75.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>s[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
