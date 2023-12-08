import{j as m}from"./jsx-runtime-29545a09.js";import{r as D}from"./index-76fb7be0.js";import{I as k,z as I,Q as A,X as N}from"./SPA-0f542073.js";import"./index-d3ea75b5.js";var b={},U=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(o){e.addRange(o)}),t&&t.focus()}},M=U,O={"text/plain":"Text","text/html":"Url",default:"Text"},q="Copy to clipboard: #{key}, Enter";function z(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function B(e,t){var r,n,o,i,c,a,u=!1;t||(t={}),r=t.debug||!1;try{o=M(),i=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(l){if(l.stopPropagation(),t.format)if(l.preventDefault(),typeof l.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var f=O[t.format]||O.default;window.clipboardData.setData(f,e)}else l.clipboardData.clearData(),l.clipboardData.setData(t.format,e);t.onCopy&&(l.preventDefault(),t.onCopy(l.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),c.addRange(i);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");u=!0}catch(l){r&&console.error("unable to copy using execCommand: ",l),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(f){r&&console.error("unable to copy using clipboardData: ",f),r&&console.error("falling back to prompt"),n=z("message"in t?t.message:q),window.prompt(n,e)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),a&&document.body.removeChild(a),o()}return u}var $=B;function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}Object.defineProperty(b,"__esModule",{value:!0});b.CopyToClipboard=void 0;var y=x(D),K=x($),L=["text","onCopy","options","children"];function x(e){return e&&e.__esModule?e:{default:e}}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(n){h(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function W(e,t){if(e==null)return{};var r=X(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function X(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e,t,r){return t&&P(e.prototype,t),r&&P(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}function g(e,t){return g=Object.setPrototypeOf||function(n,o){return n.__proto__=o,n},g(e,t)}function V(e){var t=J();return function(){var n=d(e),o;if(t){var i=d(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return G(this,o)}}function G(e,t){if(t&&(v(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},d(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){Q(r,e);var t=V(r);function r(){var n;F(this,r);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=t.call.apply(t,[this].concat(i)),h(S(n),"onClick",function(a){var u=n.props,p=u.text,l=u.onCopy,f=u.children,E=u.options,s=y.default.Children.only(f),R=(0,K.default)(p,E);l&&l(p,R),s&&s.props&&typeof s.props.onClick=="function"&&s.props.onClick(a)}),n}return H(r,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var i=o.children,c=W(o,L),a=y.default.Children.only(i);return y.default.cloneElement(a,w(w({},c),{},{onClick:this.onClick}))}}]),r}(y.default.PureComponent);b.CopyToClipboard=j;h(j,"defaultProps",{onCopy:void 0,options:void 0});var Y=b,C=Y.CopyToClipboard;C.CopyToClipboard=C;var Z=C;const T=({value:e})=>{const[t,r]=D.useState(!1),n=()=>{r(!0),setTimeout(()=>r(!1),2e3)};return m(k,{disabled:!0,value:e,rightIcon:m(Z.CopyToClipboard,{text:e,children:m(I,{minimal:!0,onClick:n,icon:t?A:N,title:"Copy",...t?{themeColor:"green100"}:{}})})})};try{T.displayName="CopyToClipboardInput",T.__docgenInfo={description:"",displayName:"CopyToClipboardInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}}}}}catch{}export{T as C};
//# sourceMappingURL=CopyToClipboardInput-c3203b16.js.map