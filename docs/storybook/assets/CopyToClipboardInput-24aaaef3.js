import{j as t}from"./jsx-runtime-d3c0a380.js";import{r as s}from"./index-070054a4.js";import{l as i}from"./index-2476389d.js";import{I as n,a as l,f as c,b as m}from"./SPA-bfde073d.js";import"./index-f347cf61.js";const p=({value:o})=>{const[e,r]=s.useState(!1),a=()=>{r(!0),setTimeout(()=>r(!1),2e3)};return t.jsx(n,{disabled:!0,value:o,rightIcon:t.jsx(i.CopyToClipboard,{text:o,children:t.jsx(l,{minimal:!0,onClick:a,icon:e?c:m,title:"Copy",...e?{themeColor:"green100"}:{}})})})};try{p.displayName="CopyToClipboardInput",p.__docgenInfo={description:"",displayName:"CopyToClipboardInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}}}catch{}export{p as C};