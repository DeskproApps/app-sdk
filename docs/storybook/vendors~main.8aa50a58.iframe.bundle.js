/*! For license information please see vendors~main.8aa50a58.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./node_modules/.pnpm/@babel+runtime@7.17.0/node_modules/@babel/runtime/helpers/esm/extends.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,"a",(function(){return _extends}))},"./node_modules/.pnpm/@babel+runtime@7.17.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return _inheritsLoose}));var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.0/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.a)(subClass,superClass)}},"./node_modules/.pnpm/@babel+runtime@7.17.0/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,"a",(function(){return _setPrototypeOf}))},"./node_modules/.pnpm/@base2+pretty-print-object@1.0.1/node_modules/@base2/pretty-print-object/dist/index.js":function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__spreadArrays=this&&this.__spreadArrays||function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r};Object.defineProperty(exports,"__esModule",{value:!0});var seen=[];exports.prettyPrint=function prettyPrint(input,options,pad){void 0===pad&&(pad="");var tokens,combinedOptions=__assign(__assign({},{indent:"\t",singleQuotes:!0}),options);tokens=void 0===combinedOptions.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:pad,indent:pad+combinedOptions.indent}:{newLine:"@@__PRETTY_PRINT_NEW_LINE__@@",newLineOrSpace:"@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@",pad:"@@__PRETTY_PRINT_PAD__@@",indent:"@@__PRETTY_PRINT_INDENT__@@"};var expandWhiteSpace=function(string){if(void 0===combinedOptions.inlineCharacterLimit)return string;var oneLined=string.replace(new RegExp(tokens.newLine,"g"),"").replace(new RegExp(tokens.newLineOrSpace,"g")," ").replace(new RegExp(tokens.pad+"|"+tokens.indent,"g"),"");return oneLined.length<=combinedOptions.inlineCharacterLimit?oneLined:string.replace(new RegExp(tokens.newLine+"|"+tokens.newLineOrSpace,"g"),"\n").replace(new RegExp(tokens.pad,"g"),pad).replace(new RegExp(tokens.indent,"g"),pad+combinedOptions.indent)};if(-1!==seen.indexOf(input))return'"[Circular]"';if(null==input||"number"==typeof input||"boolean"==typeof input||"function"==typeof input||"symbol"==typeof input||function isRegexp(value){return"[object RegExp]"===Object.prototype.toString.call(value)}(input))return String(input);if(input instanceof Date)return"new Date('"+input.toISOString()+"')";if(Array.isArray(input)){if(0===input.length)return"[]";seen.push(input);var ret="["+tokens.newLine+input.map((function(el,i){var eol=input.length-1===i?tokens.newLine:","+tokens.newLineOrSpace,value=prettyPrint(el,combinedOptions,pad+combinedOptions.indent);return combinedOptions.transform&&(value=combinedOptions.transform(input,i,value)),tokens.indent+value+eol})).join("")+tokens.pad+"]";return seen.pop(),expandWhiteSpace(ret)}if(function isObj(value){var type=typeof value;return null!==value&&("object"===type||"function"===type)}(input)){var objKeys_1=__spreadArrays(Object.keys(input),function getOwnEnumPropSymbols(object){return Object.getOwnPropertySymbols(object).filter((function(keySymbol){return Object.prototype.propertyIsEnumerable.call(object,keySymbol)}))}(input));if(combinedOptions.filter&&(objKeys_1=objKeys_1.filter((function(el){return combinedOptions.filter&&combinedOptions.filter(input,el)}))),0===objKeys_1.length)return"{}";seen.push(input);ret="{"+tokens.newLine+objKeys_1.map((function(el,i){var eol=objKeys_1.length-1===i?tokens.newLine:","+tokens.newLineOrSpace,isSymbol="symbol"==typeof el,isClassic=!isSymbol&&/^[a-z$_][a-z$_0-9]*$/i.test(el.toString()),key=isSymbol||isClassic?el:prettyPrint(el,combinedOptions),value=prettyPrint(input[el],combinedOptions,pad+combinedOptions.indent);return combinedOptions.transform&&(value=combinedOptions.transform(input,el,value)),tokens.indent+String(key)+": "+value+eol})).join("")+tokens.pad+"}";return seen.pop(),expandWhiteSpace(ret)}return input=String(input).replace(/[\r\n]/g,(function(x){return"\n"===x?"\\n":"\\r"})),combinedOptions.singleQuotes?"'"+(input=input.replace(/\\?'/g,"\\'"))+"'":'"'+(input=input.replace(/"/g,'\\"'))+'"'}},"./node_modules/.pnpm/@deskpro+deskpro-ui@4.7.0_821e7334cdd16d28ad9e89168789e778/node_modules/@deskpro/deskpro-ui/dist/deskpro-custom-icons.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/.pnpm/style-loader@1.3.0_webpack@4.46.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/@deskpro+deskpro-ui@4.7.0_821e7334cdd16d28ad9e89168789e778/node_modules/@deskpro/deskpro-ui/dist/deskpro-custom-icons.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./node_modules/.pnpm/@deskpro+deskpro-ui@4.7.0_821e7334cdd16d28ad9e89168789e778/node_modules/@deskpro/deskpro-ui/dist/deskpro-ui.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/.pnpm/style-loader@1.3.0_webpack@4.46.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/.pnpm/css-loader@3.6.0_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/@deskpro+deskpro-ui@4.7.0_821e7334cdd16d28ad9e89168789e778/node_modules/@deskpro/deskpro-ui/dist/deskpro-ui.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./node_modules/.pnpm/@deskpro+deskpro-ui@4.7.0_821e7334cdd16d28ad9e89168789e778/node_modules/@deskpro/deskpro-ui/dist/esm/lib.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AttachmentTag_AttachmentTag})),__webpack_require__.d(__webpack_exports__,"b",(function(){return Button_Button})),__webpack_require__.d(__webpack_exports__,"w",(function(){return Button_IconButton})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ButtonGroup})),__webpack_require__.d(__webpack_exports__,"d",(function(){return Checkbox})),__webpack_require__.d(__webpack_exports__,"i",(function(){return Dropdown})),__webpack_require__.d(__webpack_exports__,"m",(function(){return DropdownItem})),__webpack_require__.d(__webpack_exports__,"f",(function(){return Dropdown_CreateNewOption})),__webpack_require__.d(__webpack_exports__,"l",(function(){return DropdownHeaderItem})),__webpack_require__.d(__webpack_exports__,"k",(function(){return DropdownDividerItem})),__webpack_require__.d(__webpack_exports__,"j",(function(){return DropdownContainer})),__webpack_require__.d(__webpack_exports__,"v",(function(){return Icon_Icon})),__webpack_require__.d(__webpack_exports__,"eb",(function(){return isFaIcon})),__webpack_require__.d(__webpack_exports__,"x",(function(){return Infinite})),__webpack_require__.d(__webpack_exports__,"y",(function(){return Input_Input})),__webpack_require__.d(__webpack_exports__,"g",(function(){return Input_DivAsInput})),__webpack_require__.d(__webpack_exports__,"z",(function(){return InputWithDisplay})),__webpack_require__.d(__webpack_exports__,"h",(function(){return DivAsInputWithDisplay})),__webpack_require__.d(__webpack_exports__,"A",(function(){return Label_Label})),__webpack_require__.d(__webpack_exports__,"B",(function(){return LabelGroup})),__webpack_require__.d(__webpack_exports__,"R",(function(){return RoundedLabelTag})),__webpack_require__.d(__webpack_exports__,"X",(function(){return TagCircleIcon})),__webpack_require__.d(__webpack_exports__,"P",(function(){return Pill})),__webpack_require__.d(__webpack_exports__,"Q",(function(){return Radio})),__webpack_require__.d(__webpack_exports__,"S",(function(){return Scrollbar})),__webpack_require__.d(__webpack_exports__,"T",(function(){return Select})),__webpack_require__.d(__webpack_exports__,"U",(function(){return Spinner})),__webpack_require__.d(__webpack_exports__,"Y",(function(){return TextArea_TextArea})),__webpack_require__.d(__webpack_exports__,"Z",(function(){return TextAreaWithDisplay})),__webpack_require__.d(__webpack_exports__,"bb",(function(){return Toggle})),__webpack_require__.d(__webpack_exports__,"cb",(function(){return Tooltip})),__webpack_require__.d(__webpack_exports__,"db",(function(){return TooltipCommonIcon})),__webpack_require__.d(__webpack_exports__,"o",(function(){return H0})),__webpack_require__.d(__webpack_exports__,"p",(function(){return H1})),__webpack_require__.d(__webpack_exports__,"q",(function(){return H2})),__webpack_require__.d(__webpack_exports__,"r",(function(){return H3})),__webpack_require__.d(__webpack_exports__,"s",(function(){return H4})),__webpack_require__.d(__webpack_exports__,"t",(function(){return H5})),__webpack_require__.d(__webpack_exports__,"u",(function(){return H6})),__webpack_require__.d(__webpack_exports__,"C",(function(){return P1})),__webpack_require__.d(__webpack_exports__,"H",(function(){return P2})),__webpack_require__.d(__webpack_exports__,"I",(function(){return P3})),__webpack_require__.d(__webpack_exports__,"J",(function(){return P4})),__webpack_require__.d(__webpack_exports__,"K",(function(){return P5})),__webpack_require__.d(__webpack_exports__,"L",(function(){return P6})),__webpack_require__.d(__webpack_exports__,"M",(function(){return P7})),__webpack_require__.d(__webpack_exports__,"N",(function(){return P8})),__webpack_require__.d(__webpack_exports__,"O",(function(){return P9})),__webpack_require__.d(__webpack_exports__,"D",(function(){return P10})),__webpack_require__.d(__webpack_exports__,"E",(function(){return P11})),__webpack_require__.d(__webpack_exports__,"F",(function(){return P12})),__webpack_require__.d(__webpack_exports__,"G",(function(){return P13})),__webpack_require__.d(__webpack_exports__,"e",(function(){return Code})),__webpack_require__.d(__webpack_exports__,"V",(function(){return Stack})),__webpack_require__.d(__webpack_exports__,"W",(function(){return StackItem})),__webpack_require__.d(__webpack_exports__,"fb",(function(){return lightTheme})),__webpack_require__.d(__webpack_exports__,"n",(function(){return GlobalStyles})),__webpack_require__.d(__webpack_exports__,"ab",(function(){return ThemeProvider}));var react=__webpack_require__("./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),react_default=__webpack_require__.n(react),react_is=__webpack_require__("./node_modules/.pnpm/react-is@17.0.2/node_modules/react-is/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/.pnpm/styled-components@5.3.5_react-dom@17.0.2+react@17.0.2/node_modules/styled-components/dist/styled-components.browser.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var noop=function noop(){},_WINDOW={},_DOCUMENT={},_MUTATION_OBSERVER=null,_PERFORMANCE={mark:noop,measure:noop};try{"undefined"!=typeof window&&(_WINDOW=window),"undefined"!=typeof document&&(_DOCUMENT=document),"undefined"!=typeof MutationObserver&&(_MUTATION_OBSERVER=MutationObserver),"undefined"!=typeof performance&&(_PERFORMANCE=performance)}catch(e){}var _familyProxy,_familyProxy2,_familyProxy3,_familyProxy4,_familyProxy5,_ref$userAgent=(_WINDOW.navigator||{}).userAgent,userAgent=void 0===_ref$userAgent?"":_ref$userAgent,WINDOW=_WINDOW,DOCUMENT=_DOCUMENT,MUTATION_OBSERVER=_MUTATION_OBSERVER,PERFORMANCE=_PERFORMANCE,IS_DOM=(WINDOW.document,!!DOCUMENT.documentElement&&!!DOCUMENT.head&&"function"==typeof DOCUMENT.addEventListener&&"function"==typeof DOCUMENT.createElement),IS_IE=~userAgent.indexOf("MSIE")||~userAgent.indexOf("Trident/"),TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS=["HTML","HEAD","STYLE","SCRIPT"],PRODUCTION=function(){try{return!0}catch(e){return!1}}(),FAMILIES=["classic","sharp"];function familyProxy(obj){return new Proxy(obj,{get:function get(target,prop){return prop in target?target[prop]:target.classic}})}var PREFIX_TO_STYLE=familyProxy((_defineProperty(_familyProxy={},"classic",{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_defineProperty(_familyProxy,"sharp",{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),_familyProxy)),STYLE_TO_PREFIX=familyProxy((_defineProperty(_familyProxy2={},"classic",{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_defineProperty(_familyProxy2,"sharp",{solid:"fass",regular:"fasr"}),_familyProxy2)),PREFIX_TO_LONG_STYLE=familyProxy((_defineProperty(_familyProxy3={},"classic",{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_defineProperty(_familyProxy3,"sharp",{fass:"fa-solid",fasr:"fa-regular"}),_familyProxy3)),LONG_STYLE_TO_PREFIX=familyProxy((_defineProperty(_familyProxy4={},"classic",{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_defineProperty(_familyProxy4,"sharp",{"fa-solid":"fass","fa-regular":"fasr"}),_familyProxy4)),ICON_SELECTION_SYNTAX_PATTERN=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,FONT_FAMILY_PATTERN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,FONT_WEIGHT_TO_PREFIX=familyProxy((_defineProperty(_familyProxy5={},"classic",{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_defineProperty(_familyProxy5,"sharp",{900:"fass",400:"fasr"}),_familyProxy5)),oneToTen=[1,2,3,4,5,6,7,8,9,10],oneToTwenty=oneToTen.concat([11,12,13,14,15,16,17,18,19,20]),ATTRIBUTES_WATCHED_FOR_MUTATION=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],DUOTONE_CLASSES_GROUP="duotone-group",DUOTONE_CLASSES_SWAP_OPACITY="swap-opacity",DUOTONE_CLASSES_PRIMARY="primary",DUOTONE_CLASSES_SECONDARY="secondary",prefixes=new Set;Object.keys(STYLE_TO_PREFIX.classic).map(prefixes.add.bind(prefixes)),Object.keys(STYLE_TO_PREFIX.sharp).map(prefixes.add.bind(prefixes));var RESERVED_CLASSES=[].concat(FAMILIES,_toConsumableArray(prefixes),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",DUOTONE_CLASSES_GROUP,DUOTONE_CLASSES_SWAP_OPACITY,DUOTONE_CLASSES_PRIMARY,DUOTONE_CLASSES_SECONDARY]).concat(oneToTen.map((function(n){return"".concat(n,"x")}))).concat(oneToTwenty.map((function(n){return"w-".concat(n)}))),fontawesome_svg_core_initial=WINDOW.FontAwesomeConfig||{};if(DOCUMENT&&"function"==typeof DOCUMENT.querySelector){[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(_ref){var _ref2=_slicedToArray(_ref,2),attr=_ref2[0],key=_ref2[1],val=function coerce(val){return""===val||"false"!==val&&("true"===val||val)}(function getAttrConfig(attr){var element=DOCUMENT.querySelector("script["+attr+"]");if(element)return element.getAttribute(attr)}(attr));null!=val&&(fontawesome_svg_core_initial[key]=val)}))}var _default={styleDefault:"solid",familyDefault:"classic",cssPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};fontawesome_svg_core_initial.familyPrefix&&(fontawesome_svg_core_initial.cssPrefix=fontawesome_svg_core_initial.familyPrefix);var _config=_objectSpread2(_objectSpread2({},_default),fontawesome_svg_core_initial);_config.autoReplaceSvg||(_config.observeMutations=!1);var fontawesome_svg_core_config={};Object.keys(_default).forEach((function(key){Object.defineProperty(fontawesome_svg_core_config,key,{enumerable:!0,set:function set(val){_config[key]=val,_onChangeCb.forEach((function(cb){return cb(fontawesome_svg_core_config)}))},get:function get(){return _config[key]}})})),Object.defineProperty(fontawesome_svg_core_config,"familyPrefix",{enumerable:!0,set:function set(val){_config.cssPrefix=val,_onChangeCb.forEach((function(cb){return cb(fontawesome_svg_core_config)}))},get:function get(){return _config.cssPrefix}}),WINDOW.FontAwesomeConfig=fontawesome_svg_core_config;var _onChangeCb=[];var d=16,meaninglessTransform={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nextUniqueId(){for(var size=12,id="";size-- >0;)id+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return id}function toArray(obj){for(var array=[],i=(obj||[]).length>>>0;i--;)array[i]=obj[i];return array}function classArray(node){return node.classList?toArray(node.classList):(node.getAttribute("class")||"").split(" ").filter((function(i){return i}))}function htmlEscape(str){return"".concat(str).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function joinStyles(styles){return Object.keys(styles||{}).reduce((function(acc,styleName){return acc+"".concat(styleName,": ").concat(styles[styleName].trim(),";")}),"")}function transformIsMeaningful(transform){return transform.size!==meaninglessTransform.size||transform.x!==meaninglessTransform.x||transform.y!==meaninglessTransform.y||transform.rotate!==meaninglessTransform.rotate||transform.flipX||transform.flipY}function css(){var drc="svg-inline--fa",fp=fontawesome_svg_core_config.cssPrefix,rc=fontawesome_svg_core_config.replacementClass,s=':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';if("fa"!==fp||rc!==drc){var dPatt=new RegExp("\\.".concat("fa","\\-"),"g"),customPropPatt=new RegExp("\\--".concat("fa","\\-"),"g"),rPatt=new RegExp("\\.".concat(drc),"g");s=s.replace(dPatt,".".concat(fp,"-")).replace(customPropPatt,"--".concat(fp,"-")).replace(rPatt,".".concat(rc))}return s}var _cssInserted=!1;function ensureCss(){fontawesome_svg_core_config.autoAddCss&&!_cssInserted&&(!function insertCss(css){if(css&&IS_DOM){var style=DOCUMENT.createElement("style");style.setAttribute("type","text/css"),style.innerHTML=css;for(var headChildren=DOCUMENT.head.childNodes,beforeChild=null,i=headChildren.length-1;i>-1;i--){var child=headChildren[i],tagName=(child.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(tagName)>-1&&(beforeChild=child)}return DOCUMENT.head.insertBefore(style,beforeChild),css}}(css()),_cssInserted=!0)}var InjectCSS={mixout:function mixout(){return{dom:{css:css,insertCss:ensureCss}}},hooks:function hooks(){return{beforeDOMElementCreation:function beforeDOMElementCreation(){ensureCss()},beforeI2svg:function beforeI2svg(){ensureCss()}}}},w=WINDOW||{};w.___FONT_AWESOME___||(w.___FONT_AWESOME___={}),w.___FONT_AWESOME___.styles||(w.___FONT_AWESOME___.styles={}),w.___FONT_AWESOME___.hooks||(w.___FONT_AWESOME___.hooks={}),w.___FONT_AWESOME___.shims||(w.___FONT_AWESOME___.shims=[]);var namespace=w.___FONT_AWESOME___,functions=[],loaded=!1;function domready(fn){IS_DOM&&(loaded?setTimeout(fn,0):functions.push(fn))}function toHtml(abstractNodes){var tag=abstractNodes.tag,_abstractNodes$attrib=abstractNodes.attributes,attributes=void 0===_abstractNodes$attrib?{}:_abstractNodes$attrib,_abstractNodes$childr=abstractNodes.children,children=void 0===_abstractNodes$childr?[]:_abstractNodes$childr;return"string"==typeof abstractNodes?htmlEscape(abstractNodes):"<".concat(tag," ").concat(function joinAttributes(attributes){return Object.keys(attributes||{}).reduce((function(acc,attributeName){return acc+"".concat(attributeName,'="').concat(htmlEscape(attributes[attributeName]),'" ')}),"").trim()}(attributes),">").concat(children.map(toHtml).join(""),"</").concat(tag,">")}function iconFromMapping(mapping,prefix,iconName){if(mapping&&mapping[prefix]&&mapping[prefix][iconName])return{prefix:prefix,iconName:iconName,icon:mapping[prefix][iconName]}}IS_DOM&&((loaded=(DOCUMENT.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(DOCUMENT.readyState))||DOCUMENT.addEventListener("DOMContentLoaded",(function listener(){DOCUMENT.removeEventListener("DOMContentLoaded",listener),loaded=1,functions.map((function(fn){return fn()}))})));var reduce=function fastReduceObject(subject,fn,initialValue,thisContext){var i,key,result,keys=Object.keys(subject),length=keys.length,iterator=void 0!==thisContext?function bindInternal4(func,thisContext){return function(a,b,c,d){return func.call(thisContext,a,b,c,d)}}(fn,thisContext):fn;for(void 0===initialValue?(i=1,result=subject[keys[0]]):(i=0,result=initialValue);i<length;i++)result=iterator(result,subject[key=keys[i]],key,subject);return result};function toHex(unicode){var decoded=function ucs2decode(string){for(var output=[],counter=0,length=string.length;counter<length;){var value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){var extra=string.charCodeAt(counter++);56320==(64512&extra)?output.push(((1023&value)<<10)+(1023&extra)+65536):(output.push(value),counter--)}else output.push(value)}return output}(unicode);return 1===decoded.length?decoded[0].toString(16):null}function normalizeIcons(icons){return Object.keys(icons).reduce((function(acc,iconName){var icon=icons[iconName];return!!icon.icon?acc[icon.iconName]=icon.icon:acc[iconName]=icon,acc}),{})}function defineIcons(prefix,icons){var params=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},_params$skipHooks=params.skipHooks,skipHooks=void 0!==_params$skipHooks&&_params$skipHooks,normalized=normalizeIcons(icons);"function"!=typeof namespace.hooks.addPack||skipHooks?namespace.styles[prefix]=_objectSpread2(_objectSpread2({},namespace.styles[prefix]||{}),normalized):namespace.hooks.addPack(prefix,normalizeIcons(icons)),"fas"===prefix&&defineIcons("fa",icons)}var _LONG_STYLE,_PREFIXES,_PREFIXES_FOR_FAMILY,fontawesome_svg_core_styles=namespace.styles,shims=namespace.shims,LONG_STYLE=(_defineProperty(_LONG_STYLE={},"classic",Object.values(PREFIX_TO_LONG_STYLE.classic)),_defineProperty(_LONG_STYLE,"sharp",Object.values(PREFIX_TO_LONG_STYLE.sharp)),_LONG_STYLE),_defaultUsablePrefix=null,_byUnicode={},_byLigature={},_byOldName={},_byOldUnicode={},_byAlias={},PREFIXES=(_defineProperty(_PREFIXES={},"classic",Object.keys(PREFIX_TO_STYLE.classic)),_defineProperty(_PREFIXES,"sharp",Object.keys(PREFIX_TO_STYLE.sharp)),_PREFIXES);function getIconName(cssPrefix,cls){var parts=cls.split("-"),prefix=parts[0],iconName=parts.slice(1).join("-");return prefix!==cssPrefix||""===iconName||function isReserved(name){return~RESERVED_CLASSES.indexOf(name)}(iconName)?null:iconName}var fontawesome_svg_core_build=function build(){var lookup=function lookup(reducer){return reduce(fontawesome_svg_core_styles,(function(o,style,prefix){return o[prefix]=reduce(style,reducer,{}),o}),{})};_byUnicode=lookup((function(acc,icon,iconName){(icon[3]&&(acc[icon[3]]=iconName),icon[2])&&icon[2].filter((function(a){return"number"==typeof a})).forEach((function(alias){acc[alias.toString(16)]=iconName}));return acc})),_byLigature=lookup((function(acc,icon,iconName){(acc[iconName]=iconName,icon[2])&&icon[2].filter((function(a){return"string"==typeof a})).forEach((function(alias){acc[alias]=iconName}));return acc})),_byAlias=lookup((function(acc,icon,iconName){var aliases=icon[2];return acc[iconName]=iconName,aliases.forEach((function(alias){acc[alias]=iconName})),acc}));var hasRegular="far"in fontawesome_svg_core_styles||fontawesome_svg_core_config.autoFetchSvg,shimLookups=reduce(shims,(function(acc,shim){var maybeNameMaybeUnicode=shim[0],prefix=shim[1],iconName=shim[2];return"far"!==prefix||hasRegular||(prefix="fas"),"string"==typeof maybeNameMaybeUnicode&&(acc.names[maybeNameMaybeUnicode]={prefix:prefix,iconName:iconName}),"number"==typeof maybeNameMaybeUnicode&&(acc.unicodes[maybeNameMaybeUnicode.toString(16)]={prefix:prefix,iconName:iconName}),acc}),{names:{},unicodes:{}});_byOldName=shimLookups.names,_byOldUnicode=shimLookups.unicodes,_defaultUsablePrefix=getCanonicalPrefix(fontawesome_svg_core_config.styleDefault,{family:fontawesome_svg_core_config.familyDefault})};function byUnicode(prefix,unicode){return(_byUnicode[prefix]||{})[unicode]}function byAlias(prefix,alias){return(_byAlias[prefix]||{})[alias]}function byOldName(name){return _byOldName[name]||{prefix:null,iconName:null}}function getDefaultUsablePrefix(){return _defaultUsablePrefix}!function fontawesome_svg_core_onChange(cb){return _onChangeCb.push(cb),function(){_onChangeCb.splice(_onChangeCb.indexOf(cb),1)}}((function(c){_defaultUsablePrefix=getCanonicalPrefix(c.styleDefault,{family:fontawesome_svg_core_config.familyDefault})})),fontawesome_svg_core_build();function getCanonicalPrefix(styleOrPrefix){var params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_params$family=params.family,family=void 0===_params$family?"classic":_params$family,style=PREFIX_TO_STYLE[family][styleOrPrefix],prefix=STYLE_TO_PREFIX[family][styleOrPrefix]||STYLE_TO_PREFIX[family][style],defined=styleOrPrefix in namespace.styles?styleOrPrefix:null;return prefix||defined||null}var PREFIXES_FOR_FAMILY=(_defineProperty(_PREFIXES_FOR_FAMILY={},"classic",Object.keys(PREFIX_TO_LONG_STYLE.classic)),_defineProperty(_PREFIXES_FOR_FAMILY,"sharp",Object.keys(PREFIX_TO_LONG_STYLE.sharp)),_PREFIXES_FOR_FAMILY);function getCanonicalIcon(values){var _famProps,params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_params$skipLookups=params.skipLookups,skipLookups=void 0!==_params$skipLookups&&_params$skipLookups,famProps=(_defineProperty(_famProps={},"classic","".concat(fontawesome_svg_core_config.cssPrefix,"-").concat("classic")),_defineProperty(_famProps,"sharp","".concat(fontawesome_svg_core_config.cssPrefix,"-").concat("sharp")),_famProps),givenPrefix=null,family="classic";(values.includes(famProps.classic)||values.some((function(v){return PREFIXES_FOR_FAMILY.classic.includes(v)})))&&(family="classic"),(values.includes(famProps.sharp)||values.some((function(v){return PREFIXES_FOR_FAMILY.sharp.includes(v)})))&&(family="sharp");var canonical=values.reduce((function(acc,cls){var iconName=getIconName(fontawesome_svg_core_config.cssPrefix,cls);if(fontawesome_svg_core_styles[cls]?(cls=LONG_STYLE[family].includes(cls)?LONG_STYLE_TO_PREFIX[family][cls]:cls,givenPrefix=cls,acc.prefix=cls):PREFIXES[family].indexOf(cls)>-1?(givenPrefix=cls,acc.prefix=getCanonicalPrefix(cls,{family:family})):iconName?acc.iconName=iconName:cls!==fontawesome_svg_core_config.replacementClass&&cls!==famProps.classic&&cls!==famProps.sharp&&acc.rest.push(cls),!skipLookups&&acc.prefix&&acc.iconName){var shim="fa"===givenPrefix?byOldName(acc.iconName):{},aliasIconName=byAlias(acc.prefix,acc.iconName);shim.prefix&&(givenPrefix=null),acc.iconName=shim.iconName||aliasIconName||acc.iconName,acc.prefix=shim.prefix||acc.prefix,"far"!==acc.prefix||fontawesome_svg_core_styles.far||!fontawesome_svg_core_styles.fas||fontawesome_svg_core_config.autoFetchSvg||(acc.prefix="fas")}return acc}),{prefix:null,iconName:null,rest:[]});return(values.includes("fa-brands")||values.includes("fab"))&&(canonical.prefix="fab"),(values.includes("fa-duotone")||values.includes("fad"))&&(canonical.prefix="fad"),canonical.prefix||"sharp"!==family||!fontawesome_svg_core_styles.fass&&!fontawesome_svg_core_config.autoFetchSvg||(canonical.prefix="fass",canonical.iconName=byAlias(canonical.prefix,canonical.iconName)||canonical.iconName),"fa"!==canonical.prefix&&"fa"!==givenPrefix||(canonical.prefix=getDefaultUsablePrefix()||"fas"),canonical}var Library=function(){function Library(){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Library),this.definitions={}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Library,[{key:"add",value:function add(){for(var _this=this,_len=arguments.length,definitions=new Array(_len),_key=0;_key<_len;_key++)definitions[_key]=arguments[_key];var additions=definitions.reduce(this._pullDefinitions,{});Object.keys(additions).forEach((function(key){_this.definitions[key]=_objectSpread2(_objectSpread2({},_this.definitions[key]||{}),additions[key]),defineIcons(key,additions[key]);var longPrefix=PREFIX_TO_LONG_STYLE.classic[key];longPrefix&&defineIcons(longPrefix,additions[key]),fontawesome_svg_core_build()}))}},{key:"reset",value:function reset(){this.definitions={}}},{key:"_pullDefinitions",value:function _pullDefinitions(additions,definition){var normalized=definition.prefix&&definition.iconName&&definition.icon?{0:definition}:definition;return Object.keys(normalized).map((function(key){var _normalized$key=normalized[key],prefix=_normalized$key.prefix,iconName=_normalized$key.iconName,icon=_normalized$key.icon,aliases=icon[2];additions[prefix]||(additions[prefix]={}),aliases.length>0&&aliases.forEach((function(alias){"string"==typeof alias&&(additions[prefix][alias]=icon)})),additions[prefix][iconName]=icon})),additions}}]),Library}(),_plugins=[],_hooks={},providers={},defaultProviderKeys=Object.keys(providers);function chainHooks(hook,accumulator){for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++)args[_key-2]=arguments[_key];var hookFns=_hooks[hook]||[];return hookFns.forEach((function(hookFn){accumulator=hookFn.apply(null,[accumulator].concat(args))})),accumulator}function callHooks(hook){for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];var hookFns=_hooks[hook]||[];hookFns.forEach((function(hookFn){hookFn.apply(null,args)}))}function callProvided(){var hook=arguments[0],args=Array.prototype.slice.call(arguments,1);return providers[hook]?providers[hook].apply(null,args):void 0}function findIconDefinition(iconLookup){"fa"===iconLookup.prefix&&(iconLookup.prefix="fas");var iconName=iconLookup.iconName,prefix=iconLookup.prefix||getDefaultUsablePrefix();if(iconName)return iconName=byAlias(prefix,iconName)||iconName,iconFromMapping(library.definitions,prefix,iconName)||iconFromMapping(namespace.styles,prefix,iconName)}var library=new Library,dom={i2svg:function i2svg(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return IS_DOM?(callHooks("beforeI2svg",params),callProvided("pseudoElements2svg",params),callProvided("i2svg",params)):Promise.reject("Operation requires a DOM of some kind.")},watch:function watch(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},autoReplaceSvgRoot=params.autoReplaceSvgRoot;!1===fontawesome_svg_core_config.autoReplaceSvg&&(fontawesome_svg_core_config.autoReplaceSvg=!0),fontawesome_svg_core_config.observeMutations=!0,domready((function(){autoReplace({autoReplaceSvgRoot:autoReplaceSvgRoot}),callHooks("watch",params)}))}},api={noAuto:function noAuto(){fontawesome_svg_core_config.autoReplaceSvg=!1,fontawesome_svg_core_config.observeMutations=!1,callHooks("noAuto")},config:fontawesome_svg_core_config,dom:dom,parse:{icon:function icon(_icon){if(null===_icon)return null;if("object"===_typeof(_icon)&&_icon.prefix&&_icon.iconName)return{prefix:_icon.prefix,iconName:byAlias(_icon.prefix,_icon.iconName)||_icon.iconName};if(Array.isArray(_icon)&&2===_icon.length){var iconName=0===_icon[1].indexOf("fa-")?_icon[1].slice(3):_icon[1],prefix=getCanonicalPrefix(_icon[0]);return{prefix:prefix,iconName:byAlias(prefix,iconName)||iconName}}if("string"==typeof _icon&&(_icon.indexOf("".concat(fontawesome_svg_core_config.cssPrefix,"-"))>-1||_icon.match(ICON_SELECTION_SYNTAX_PATTERN))){var canonicalIcon=getCanonicalIcon(_icon.split(" "),{skipLookups:!0});return{prefix:canonicalIcon.prefix||getDefaultUsablePrefix(),iconName:byAlias(canonicalIcon.prefix,canonicalIcon.iconName)||canonicalIcon.iconName}}if("string"==typeof _icon){var _prefix=getDefaultUsablePrefix();return{prefix:_prefix,iconName:byAlias(_prefix,_icon)||_icon}}}},library:library,findIconDefinition:findIconDefinition,toHtml:toHtml},autoReplace=function autoReplace(){var params=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},_params$autoReplaceSv=params.autoReplaceSvgRoot,autoReplaceSvgRoot=void 0===_params$autoReplaceSv?DOCUMENT:_params$autoReplaceSv;(Object.keys(namespace.styles).length>0||fontawesome_svg_core_config.autoFetchSvg)&&IS_DOM&&fontawesome_svg_core_config.autoReplaceSvg&&api.dom.i2svg({node:autoReplaceSvgRoot})};function domVariants(val,abstractCreator){return Object.defineProperty(val,"abstract",{get:abstractCreator}),Object.defineProperty(val,"html",{get:function get(){return val.abstract.map((function(a){return toHtml(a)}))}}),Object.defineProperty(val,"node",{get:function get(){if(IS_DOM){var container=DOCUMENT.createElement("div");return container.innerHTML=val.html,container.children}}}),val}function makeInlineSvgAbstract(params){var _params$icons=params.icons,main=_params$icons.main,mask=_params$icons.mask,prefix=params.prefix,iconName=params.iconName,transform=params.transform,symbol=params.symbol,title=params.title,maskId=params.maskId,titleId=params.titleId,extra=params.extra,_params$watchable=params.watchable,watchable=void 0!==_params$watchable&&_params$watchable,_ref=mask.found?mask:main,width=_ref.width,height=_ref.height,isUploadedIcon="fak"===prefix,attrClass=[fontawesome_svg_core_config.replacementClass,iconName?"".concat(fontawesome_svg_core_config.cssPrefix,"-").concat(iconName):""].filter((function(c){return-1===extra.classes.indexOf(c)})).filter((function(c){return""!==c||!!c})).concat(extra.classes).join(" "),content={children:[],attributes:_objectSpread2(_objectSpread2({},extra.attributes),{},{"data-prefix":prefix,"data-icon":iconName,class:attrClass,role:extra.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(width," ").concat(height)})},uploadedIconWidthStyle=isUploadedIcon&&!~extra.classes.indexOf("fa-fw")?{width:"".concat(width/height*16*.0625,"em")}:{};watchable&&(content.attributes["data-fa-i2svg"]=""),title&&(content.children.push({tag:"title",attributes:{id:content.attributes["aria-labelledby"]||"title-".concat(titleId||nextUniqueId())},children:[title]}),delete content.attributes.title);var args=_objectSpread2(_objectSpread2({},content),{},{prefix:prefix,iconName:iconName,main:main,mask:mask,maskId:maskId,transform:transform,symbol:symbol,styles:_objectSpread2(_objectSpread2({},uploadedIconWidthStyle),extra.styles)}),_ref2=mask.found&&main.found?callProvided("generateAbstractMask",args)||{children:[],attributes:{}}:callProvided("generateAbstractIcon",args)||{children:[],attributes:{}},children=_ref2.children,attributes=_ref2.attributes;return args.children=children,args.attributes=attributes,symbol?function asSymbol(_ref){var prefix=_ref.prefix,iconName=_ref.iconName,children=_ref.children,attributes=_ref.attributes,symbol=_ref.symbol,id=!0===symbol?"".concat(prefix,"-").concat(fontawesome_svg_core_config.cssPrefix,"-").concat(iconName):symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_objectSpread2(_objectSpread2({},attributes),{},{id:id}),children:children}]}]}(args):function asIcon(_ref){var children=_ref.children,main=_ref.main,mask=_ref.mask,attributes=_ref.attributes,styles=_ref.styles,transform=_ref.transform;if(transformIsMeaningful(transform)&&main.found&&!mask.found){var offset={x:main.width/main.height/2,y:.5};attributes.style=joinStyles(_objectSpread2(_objectSpread2({},styles),{},{"transform-origin":"".concat(offset.x+transform.x/16,"em ").concat(offset.y+transform.y/16,"em")}))}return[{tag:"svg",attributes:attributes,children:children}]}(args)}function makeLayersTextAbstract(params){var content=params.content,width=params.width,height=params.height,transform=params.transform,title=params.title,extra=params.extra,_params$watchable2=params.watchable,watchable=void 0!==_params$watchable2&&_params$watchable2,attributes=_objectSpread2(_objectSpread2(_objectSpread2({},extra.attributes),title?{title:title}:{}),{},{class:extra.classes.join(" ")});watchable&&(attributes["data-fa-i2svg"]="");var styles=_objectSpread2({},extra.styles);transformIsMeaningful(transform)&&(styles.transform=function transformForCss(_ref2){var transform=_ref2.transform,_ref2$width=_ref2.width,width=void 0===_ref2$width?16:_ref2$width,_ref2$height=_ref2.height,height=void 0===_ref2$height?16:_ref2$height,_ref2$startCentered=_ref2.startCentered,startCentered=void 0!==_ref2$startCentered&&_ref2$startCentered,val="";return val+=startCentered&&IS_IE?"translate(".concat(transform.x/d-width/2,"em, ").concat(transform.y/d-height/2,"em) "):startCentered?"translate(calc(-50% + ".concat(transform.x/d,"em), calc(-50% + ").concat(transform.y/d,"em)) "):"translate(".concat(transform.x/d,"em, ").concat(transform.y/d,"em) "),val+="scale(".concat(transform.size/d*(transform.flipX?-1:1),", ").concat(transform.size/d*(transform.flipY?-1:1),") "),val+"rotate(".concat(transform.rotate,"deg) ")}({transform:transform,startCentered:!0,width:width,height:height}),styles["-webkit-transform"]=styles.transform);var styleString=joinStyles(styles);styleString.length>0&&(attributes.style=styleString);var val=[];return val.push({tag:"span",attributes:attributes,children:[content]}),title&&val.push({tag:"span",attributes:{class:"sr-only"},children:[title]}),val}function makeLayersCounterAbstract(params){var content=params.content,title=params.title,extra=params.extra,attributes=_objectSpread2(_objectSpread2(_objectSpread2({},extra.attributes),title?{title:title}:{}),{},{class:extra.classes.join(" ")}),styleString=joinStyles(extra.styles);styleString.length>0&&(attributes.style=styleString);var val=[];return val.push({tag:"span",attributes:attributes,children:[content]}),title&&val.push({tag:"span",attributes:{class:"sr-only"},children:[title]}),val}var styles$1=namespace.styles;function asFoundIcon(icon){var width=icon[0],height=icon[1],vectorData=_slicedToArray(icon.slice(4),1)[0];return{found:!0,width:width,height:height,icon:Array.isArray(vectorData)?{tag:"g",attributes:{class:"".concat(fontawesome_svg_core_config.cssPrefix,"-").concat(DUOTONE_CLASSES_GROUP)},children:[{tag:"path",attributes:{class:"".concat(fontawesome_svg_core_config.cssPrefix,"-").concat(DUOTONE_CLASSES_SECONDARY),fill:"currentColor",d:vectorData[0]}},{tag:"path",attributes:{class:"".concat(fontawesome_svg_core_config.cssPrefix,"-").concat(DUOTONE_CLASSES_PRIMARY),fill:"currentColor",d:vectorData[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:vectorData}}}}var missingIconResolutionMixin={found:!1,width:512,height:512};function findIcon(iconName,prefix){var givenPrefix=prefix;return"fa"===prefix&&null!==fontawesome_svg_core_config.styleDefault&&(prefix=getDefaultUsablePrefix()),new Promise((function(resolve,reject){callProvided("missingIconAbstract");if("fa"===givenPrefix){var shim=byOldName(iconName)||{};iconName=shim.iconName||iconName,prefix=shim.prefix||prefix}if(iconName&&prefix&&styles$1[prefix]&&styles$1[prefix][iconName])return resolve(asFoundIcon(styles$1[prefix][iconName]));!function maybeNotifyMissing(iconName,prefix){PRODUCTION||fontawesome_svg_core_config.showMissingIcons||!iconName||console.error('Icon with name "'.concat(iconName,'" and prefix "').concat(prefix,'" is missing.'))}(iconName,prefix),resolve(_objectSpread2(_objectSpread2({},missingIconResolutionMixin),{},{icon:fontawesome_svg_core_config.showMissingIcons&&iconName&&callProvided("missingIconAbstract")||{}}))}))}var noop$1=function noop(){},fontawesome_svg_core_p=fontawesome_svg_core_config.measurePerformance&&PERFORMANCE&&PERFORMANCE.mark&&PERFORMANCE.measure?PERFORMANCE:{mark:noop$1,measure:noop$1},end=function end(name){fontawesome_svg_core_p.mark("".concat('FA "6.3.0"'," ").concat(name," ends")),fontawesome_svg_core_p.measure("".concat('FA "6.3.0"'," ").concat(name),"".concat('FA "6.3.0"'," ").concat(name," begins"),"".concat('FA "6.3.0"'," ").concat(name," ends"))},perf_begin=function begin(name){return fontawesome_svg_core_p.mark("".concat('FA "6.3.0"'," ").concat(name," begins")),function(){return end(name)}},noop$2=function noop(){};function isWatched(node){return"string"==typeof(node.getAttribute?node.getAttribute("data-fa-i2svg"):null)}function createElementNS(tag){return DOCUMENT.createElementNS("http://www.w3.org/2000/svg",tag)}function createElement(tag){return DOCUMENT.createElement(tag)}function convertSVG(abstractObj){var params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_params$ceFn=params.ceFn,ceFn=void 0===_params$ceFn?"svg"===abstractObj.tag?createElementNS:createElement:_params$ceFn;if("string"==typeof abstractObj)return DOCUMENT.createTextNode(abstractObj);var tag=ceFn(abstractObj.tag);Object.keys(abstractObj.attributes||[]).forEach((function(key){tag.setAttribute(key,abstractObj.attributes[key])}));var children=abstractObj.children||[];return children.forEach((function(child){tag.appendChild(convertSVG(child,{ceFn:ceFn}))})),tag}var mutators={replace:function replace(mutation){var node=mutation[0];if(node.parentNode)if(mutation[1].forEach((function(_abstract){node.parentNode.insertBefore(convertSVG(_abstract),node)})),null===node.getAttribute("data-fa-i2svg")&&fontawesome_svg_core_config.keepOriginalSource){var comment=DOCUMENT.createComment(function nodeAsComment(node){var comment=" ".concat(node.outerHTML," ");return"".concat(comment,"Font Awesome fontawesome.com ")}(node));node.parentNode.replaceChild(comment,node)}else node.remove()},nest:function nest(mutation){var node=mutation[0],_abstract2=mutation[1];if(~classArray(node).indexOf(fontawesome_svg_core_config.replacementClass))return mutators.replace(mutation);var forSvg=new RegExp("".concat(fontawesome_svg_core_config.cssPrefix,"-.*"));if(delete _abstract2[0].attributes.id,_abstract2[0].attributes.class){var splitClasses=_abstract2[0].attributes.class.split(" ").reduce((function(acc,cls){return cls===fontawesome_svg_core_config.replacementClass||cls.match(forSvg)?acc.toSvg.push(cls):acc.toNode.push(cls),acc}),{toNode:[],toSvg:[]});_abstract2[0].attributes.class=splitClasses.toSvg.join(" "),0===splitClasses.toNode.length?node.removeAttribute("class"):node.setAttribute("class",splitClasses.toNode.join(" "))}var newInnerHTML=_abstract2.map((function(a){return toHtml(a)})).join("\n");node.setAttribute("data-fa-i2svg",""),node.innerHTML=newInnerHTML}};function performOperationSync(op){op()}function perform(mutations,callback){var callbackFunction="function"==typeof callback?callback:noop$2;if(0===mutations.length)callbackFunction();else{var frame=performOperationSync;"async"===fontawesome_svg_core_config.mutateApproach&&(frame=WINDOW.requestAnimationFrame||performOperationSync),frame((function(){var mutator=function getMutator(){return!0===fontawesome_svg_core_config.autoReplaceSvg?mutators.replace:mutators[fontawesome_svg_core_config.autoReplaceSvg]||mutators.replace}(),mark=perf_begin("mutate");mutations.map(mutator),mark(),callbackFunction()}))}}var fontawesome_svg_core_disabled=!1;function disableObservation(){fontawesome_svg_core_disabled=!0}function enableObservation(){fontawesome_svg_core_disabled=!1}var mo=null;function observe(options){if(MUTATION_OBSERVER&&fontawesome_svg_core_config.observeMutations){var _options$treeCallback=options.treeCallback,treeCallback=void 0===_options$treeCallback?noop$2:_options$treeCallback,_options$nodeCallback=options.nodeCallback,nodeCallback=void 0===_options$nodeCallback?noop$2:_options$nodeCallback,_options$pseudoElemen=options.pseudoElementsCallback,pseudoElementsCallback=void 0===_options$pseudoElemen?noop$2:_options$pseudoElemen,_options$observeMutat=options.observeMutationsRoot,observeMutationsRoot=void 0===_options$observeMutat?DOCUMENT:_options$observeMutat;mo=new MUTATION_OBSERVER((function(objects){if(!fontawesome_svg_core_disabled){var defaultPrefix=getDefaultUsablePrefix();toArray(objects).forEach((function(mutationRecord){if("childList"===mutationRecord.type&&mutationRecord.addedNodes.length>0&&!isWatched(mutationRecord.addedNodes[0])&&(fontawesome_svg_core_config.searchPseudoElements&&pseudoElementsCallback(mutationRecord.target),treeCallback(mutationRecord.target)),"attributes"===mutationRecord.type&&mutationRecord.target.parentNode&&fontawesome_svg_core_config.searchPseudoElements&&pseudoElementsCallback(mutationRecord.target.parentNode),"attributes"===mutationRecord.type&&isWatched(mutationRecord.target)&&~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName))if("class"===mutationRecord.attributeName&&function hasPrefixAndIcon(node){var prefix=node.getAttribute?node.getAttribute("data-prefix"):null,icon=node.getAttribute?node.getAttribute("data-icon"):null;return prefix&&icon}(mutationRecord.target)){var _getCanonicalIcon=getCanonicalIcon(classArray(mutationRecord.target)),prefix=_getCanonicalIcon.prefix,iconName=_getCanonicalIcon.iconName;mutationRecord.target.setAttribute("data-prefix",prefix||defaultPrefix),iconName&&mutationRecord.target.setAttribute("data-icon",iconName)}else(function hasBeenReplaced(node){return node&&node.classList&&node.classList.contains&&node.classList.contains(fontawesome_svg_core_config.replacementClass)})(mutationRecord.target)&&nodeCallback(mutationRecord.target)}))}})),IS_DOM&&mo.observe(observeMutationsRoot,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function styleParser(node){var style=node.getAttribute("style"),val=[];return style&&(val=style.split(";").reduce((function(acc,style){var styles=style.split(":"),prop=styles[0],value=styles.slice(1);return prop&&value.length>0&&(acc[prop]=value.join(":").trim()),acc}),{})),val}function classParser(node){var existingPrefix=node.getAttribute("data-prefix"),existingIconName=node.getAttribute("data-icon"),innerText=void 0!==node.innerText?node.innerText.trim():"",val=getCanonicalIcon(classArray(node));return val.prefix||(val.prefix=getDefaultUsablePrefix()),existingPrefix&&existingIconName&&(val.prefix=existingPrefix,val.iconName=existingIconName),val.iconName&&val.prefix||(val.prefix&&innerText.length>0&&(val.iconName=function byLigature(prefix,ligature){return(_byLigature[prefix]||{})[ligature]}(val.prefix,node.innerText)||byUnicode(val.prefix,toHex(node.innerText))),!val.iconName&&fontawesome_svg_core_config.autoFetchSvg&&node.firstChild&&node.firstChild.nodeType===Node.TEXT_NODE&&(val.iconName=node.firstChild.data)),val}function attributesParser(node){var extraAttributes=toArray(node.attributes).reduce((function(acc,attr){return"class"!==acc.name&&"style"!==acc.name&&(acc[attr.name]=attr.value),acc}),{}),title=node.getAttribute("title"),titleId=node.getAttribute("data-fa-title-id");return fontawesome_svg_core_config.autoA11y&&(title?extraAttributes["aria-labelledby"]="".concat(fontawesome_svg_core_config.replacementClass,"-title-").concat(titleId||nextUniqueId()):(extraAttributes["aria-hidden"]="true",extraAttributes.focusable="false")),extraAttributes}function parseMeta(node){var parser=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{styleParser:!0},_classParser=classParser(node),iconName=_classParser.iconName,prefix=_classParser.prefix,extraClasses=_classParser.rest,extraAttributes=attributesParser(node),pluginMeta=chainHooks("parseNodeAttributes",{},node),extraStyles=parser.styleParser?styleParser(node):[];return _objectSpread2({iconName:iconName,title:node.getAttribute("title"),titleId:node.getAttribute("data-fa-title-id"),prefix:prefix,transform:meaninglessTransform,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:extraClasses,styles:extraStyles,attributes:extraAttributes}},pluginMeta)}var styles$2=namespace.styles;function generateMutation(node){var nodeMeta="nest"===fontawesome_svg_core_config.autoReplaceSvg?parseMeta(node,{styleParser:!1}):parseMeta(node);return~nodeMeta.extra.classes.indexOf("fa-layers-text")?callProvided("generateLayersText",node,nodeMeta):callProvided("generateSvgReplacementMutation",node,nodeMeta)}var knownPrefixes=new Set;function onTree(root){var callback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!IS_DOM)return Promise.resolve();var htmlClassList=DOCUMENT.documentElement.classList,hclAdd=function hclAdd(suffix){return htmlClassList.add("".concat("fontawesome-i2svg","-").concat(suffix))},hclRemove=function hclRemove(suffix){return htmlClassList.remove("".concat("fontawesome-i2svg","-").concat(suffix))},prefixes=fontawesome_svg_core_config.autoFetchSvg?knownPrefixes:FAMILIES.map((function(f){return"fa-".concat(f)})).concat(Object.keys(styles$2));prefixes.includes("fa")||prefixes.push("fa");var prefixesDomQuery=[".".concat("fa-layers-text",":not([").concat("data-fa-i2svg","])")].concat(prefixes.map((function(p){return".".concat(p,":not([").concat("data-fa-i2svg","])")}))).join(", ");if(0===prefixesDomQuery.length)return Promise.resolve();var candidates=[];try{candidates=toArray(root.querySelectorAll(prefixesDomQuery))}catch(e){}if(!(candidates.length>0))return Promise.resolve();hclAdd("pending"),hclRemove("complete");var mark=perf_begin("onTree"),mutations=candidates.reduce((function(acc,node){try{var mutation=generateMutation(node);mutation&&acc.push(mutation)}catch(e){PRODUCTION||"MissingIcon"===e.name&&console.error(e)}return acc}),[]);return new Promise((function(resolve,reject){Promise.all(mutations).then((function(resolvedMutations){perform(resolvedMutations,(function(){hclAdd("active"),hclAdd("complete"),hclRemove("pending"),"function"==typeof callback&&callback(),mark(),resolve()}))})).catch((function(e){mark(),reject(e)}))}))}function onNode(node){var callback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;generateMutation(node).then((function(mutation){mutation&&perform([mutation],callback)}))}FAMILIES.map((function(family){knownPrefixes.add("fa-".concat(family))})),Object.keys(PREFIX_TO_STYLE.classic).map(knownPrefixes.add.bind(knownPrefixes)),Object.keys(PREFIX_TO_STYLE.sharp).map(knownPrefixes.add.bind(knownPrefixes)),knownPrefixes=_toConsumableArray(knownPrefixes);var fontawesome_svg_core_render=function render(iconDefinition){var params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_params$transform=params.transform,transform=void 0===_params$transform?meaninglessTransform:_params$transform,_params$symbol=params.symbol,symbol=void 0!==_params$symbol&&_params$symbol,_params$mask=params.mask,mask=void 0===_params$mask?null:_params$mask,_params$maskId=params.maskId,maskId=void 0===_params$maskId?null:_params$maskId,_params$title=params.title,title=void 0===_params$title?null:_params$title,_params$titleId=params.titleId,titleId=void 0===_params$titleId?null:_params$titleId,_params$classes=params.classes,classes=void 0===_params$classes?[]:_params$classes,_params$attributes=params.attributes,attributes=void 0===_params$attributes?{}:_params$attributes,_params$styles=params.styles,styles=void 0===_params$styles?{}:_params$styles;if(iconDefinition){var prefix=iconDefinition.prefix,iconName=iconDefinition.iconName,icon=iconDefinition.icon;return domVariants(_objectSpread2({type:"icon"},iconDefinition),(function(){return callHooks("beforeDOMElementCreation",{iconDefinition:iconDefinition,params:params}),fontawesome_svg_core_config.autoA11y&&(title?attributes["aria-labelledby"]="".concat(fontawesome_svg_core_config.replacementClass,"-title-").concat(titleId||nextUniqueId()):(attributes["aria-hidden"]="true",attributes.focusable="false")),makeInlineSvgAbstract({icons:{main:asFoundIcon(icon),mask:mask?asFoundIcon(mask.icon):{found:!1,width:null,height:null,icon:{}}},prefix:prefix,iconName:iconName,transform:_objectSpread2(_objectSpread2({},meaninglessTransform),transform),symbol:symbol,title:title,maskId:maskId,titleId:titleId,extra:{attributes:attributes,styles:styles,classes:classes}})}))}},ReplaceElements={mixout:function mixout(){return{icon:(next=fontawesome_svg_core_render,function(maybeIconDefinition){var params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},iconDefinition=(maybeIconDefinition||{}).icon?maybeIconDefinition:findIconDefinition(maybeIconDefinition||{}),mask=params.mask;return mask&&(mask=(mask||{}).icon?mask:findIconDefinition(mask||{})),next(iconDefinition,_objectSpread2(_objectSpread2({},params),{},{mask:mask}))})};var next},hooks:function hooks(){return{mutationObserverCallbacks:function mutationObserverCallbacks(accumulator){return accumulator.treeCallback=onTree,accumulator.nodeCallback=onNode,accumulator}}},provides:function provides(providers$$1){providers$$1.i2svg=function(params){var _params$node=params.node,node=void 0===_params$node?DOCUMENT:_params$node,_params$callback=params.callback;return onTree(node,void 0===_params$callback?function(){}:_params$callback)},providers$$1.generateSvgReplacementMutation=function(node,nodeMeta){var iconName=nodeMeta.iconName,title=nodeMeta.title,titleId=nodeMeta.titleId,prefix=nodeMeta.prefix,transform=nodeMeta.transform,symbol=nodeMeta.symbol,mask=nodeMeta.mask,maskId=nodeMeta.maskId,extra=nodeMeta.extra;return new Promise((function(resolve,reject){Promise.all([findIcon(iconName,prefix),mask.iconName?findIcon(mask.iconName,mask.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then((function(_ref){var _ref2=_slicedToArray(_ref,2),main=_ref2[0],mask=_ref2[1];resolve([node,makeInlineSvgAbstract({icons:{main:main,mask:mask},prefix:prefix,iconName:iconName,transform:transform,symbol:symbol,maskId:maskId,title:title,titleId:titleId,extra:extra,watchable:!0})])})).catch(reject)}))},providers$$1.generateAbstractIcon=function(_ref3){var nextChild,children=_ref3.children,attributes=_ref3.attributes,main=_ref3.main,transform=_ref3.transform,styleString=joinStyles(_ref3.styles);return styleString.length>0&&(attributes.style=styleString),transformIsMeaningful(transform)&&(nextChild=callProvided("generateAbstractTransformGrouping",{main:main,transform:transform,containerWidth:main.width,iconWidth:main.width})),children.push(nextChild||main.icon),{children:children,attributes:attributes}}}},Layers={mixout:function mixout(){return{layer:function layer(assembler){var params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_params$classes=params.classes,classes=void 0===_params$classes?[]:_params$classes;return domVariants({type:"layer"},(function(){callHooks("beforeDOMElementCreation",{assembler:assembler,params:params});var children=[];return assembler((function(args){Array.isArray(args)?args.map((function(a){children=children.concat(a.abstract)})):children=children.concat(args.abstract)})),[{tag:"span",attributes:{class:["".concat(fontawesome_svg_core_config.cssPrefix,"-layers")].concat(_toConsumableArray(classes)).join(" ")},children:children}]}))}}}},LayersCounter={mixout:function mixout(){return{counter:function counter(content){var params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_params$title=params.title,title=void 0===_params$title?null:_params$title,_params$classes=params.classes,classes=void 0===_params$classes?[]:_params$classes,_params$attributes=params.attributes,attributes=void 0===_params$attributes?{}:_params$attributes,_params$styles=params.styles,styles=void 0===_params$styles?{}:_params$styles;return domVariants({type:"counter",content:content},(function(){return callHooks("beforeDOMElementCreation",{content:content,params:params}),makeLayersCounterAbstract({content:content.toString(),title:title,extra:{attributes:attributes,styles:styles,classes:["".concat(fontawesome_svg_core_config.cssPrefix,"-layers-counter")].concat(_toConsumableArray(classes))}})}))}}}},LayersText={mixout:function mixout(){return{text:function text(content){var params=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_params$transform=params.transform,transform=void 0===_params$transform?meaninglessTransform:_params$transform,_params$title=params.title,title=void 0===_params$title?null:_params$title,_params$classes=params.classes,classes=void 0===_params$classes?[]:_params$classes,_params$attributes=params.attributes,attributes=void 0===_params$attributes?{}:_params$attributes,_params$styles=params.styles,styles=void 0===_params$styles?{}:_params$styles;return domVariants({type:"text",content:content},(function(){return callHooks("beforeDOMElementCreation",{content:content,params:params}),makeLayersTextAbstract({content:content,transform:_objectSpread2(_objectSpread2({},meaninglessTransform),transform),title:title,extra:{attributes:attributes,styles:styles,classes:["".concat(fontawesome_svg_core_config.cssPrefix,"-layers-text")].concat(_toConsumableArray(classes))}})}))}}},provides:function provides(providers$$1){providers$$1.generateLayersText=function(node,nodeMeta){var title=nodeMeta.title,transform=nodeMeta.transform,extra=nodeMeta.extra,width=null,height=null;if(IS_IE){var computedFontSize=parseInt(getComputedStyle(node).fontSize,10),boundingClientRect=node.getBoundingClientRect();width=boundingClientRect.width/computedFontSize,height=boundingClientRect.height/computedFontSize}return fontawesome_svg_core_config.autoA11y&&!title&&(extra.attributes["aria-hidden"]="true"),Promise.resolve([node,makeLayersTextAbstract({content:node.innerHTML,width:width,height:height,transform:transform,title:title,extra:extra,watchable:!0})])}}},CLEAN_CONTENT_PATTERN=new RegExp('"',"ug"),SECONDARY_UNICODE_RANGE=[1105920,1112319];function replaceForPosition(node,position){var pendingAttribute="".concat("data-fa-pseudo-element-pending").concat(position.replace(":","-"));return new Promise((function(resolve,reject){if(null!==node.getAttribute(pendingAttribute))return resolve();var alreadyProcessedPseudoElement=toArray(node.children).filter((function(c){return c.getAttribute("data-fa-pseudo-element")===position}))[0],styles=WINDOW.getComputedStyle(node,position),fontFamily=styles.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN),fontWeight=styles.getPropertyValue("font-weight"),content=styles.getPropertyValue("content");if(alreadyProcessedPseudoElement&&!fontFamily)return node.removeChild(alreadyProcessedPseudoElement),resolve();if(fontFamily&&"none"!==content&&""!==content){var _content=styles.getPropertyValue("content"),family=~["Sharp"].indexOf(fontFamily[2])?"sharp":"classic",prefix=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(fontFamily[2])?STYLE_TO_PREFIX[family][fontFamily[2].toLowerCase()]:FONT_WEIGHT_TO_PREFIX[family][fontWeight],_hexValueFromContent=function hexValueFromContent(content){var cleaned=content.replace(CLEAN_CONTENT_PATTERN,""),codePoint=function codePointAt(string,index){var second,size=string.length,first=string.charCodeAt(index);return first>=55296&&first<=56319&&size>index+1&&(second=string.charCodeAt(index+1))>=56320&&second<=57343?1024*(first-55296)+second-56320+65536:first}(cleaned,0),isPrependTen=codePoint>=SECONDARY_UNICODE_RANGE[0]&&codePoint<=SECONDARY_UNICODE_RANGE[1],isDoubled=2===cleaned.length&&cleaned[0]===cleaned[1];return{value:toHex(isDoubled?cleaned[0]:cleaned),isSecondary:isPrependTen||isDoubled}}(_content),hexValue=_hexValueFromContent.value,isSecondary=_hexValueFromContent.isSecondary,isV4=fontFamily[0].startsWith("FontAwesome"),iconName=byUnicode(prefix,hexValue),iconIdentifier=iconName;if(isV4){var iconName4=function byOldUnicode(unicode){var oldUnicode=_byOldUnicode[unicode],newUnicode=byUnicode("fas",unicode);return oldUnicode||(newUnicode?{prefix:"fas",iconName:newUnicode}:null)||{prefix:null,iconName:null}}(hexValue);iconName4.iconName&&iconName4.prefix&&(iconName=iconName4.iconName,prefix=iconName4.prefix)}if(!iconName||isSecondary||alreadyProcessedPseudoElement&&alreadyProcessedPseudoElement.getAttribute("data-prefix")===prefix&&alreadyProcessedPseudoElement.getAttribute("data-icon")===iconIdentifier)resolve();else{node.setAttribute(pendingAttribute,iconIdentifier),alreadyProcessedPseudoElement&&node.removeChild(alreadyProcessedPseudoElement);var meta=function blankMeta(){return{iconName:null,title:null,titleId:null,prefix:null,transform:meaninglessTransform,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}(),extra=meta.extra;extra.attributes["data-fa-pseudo-element"]=position,findIcon(iconName,prefix).then((function(main){var _abstract=makeInlineSvgAbstract(_objectSpread2(_objectSpread2({},meta),{},{icons:{main:main,mask:{prefix:null,iconName:null,rest:[]}},prefix:prefix,iconName:iconIdentifier,extra:extra,watchable:!0})),element=DOCUMENT.createElement("svg");"::before"===position?node.insertBefore(element,node.firstChild):node.appendChild(element),element.outerHTML=_abstract.map((function(a){return toHtml(a)})).join("\n"),node.removeAttribute(pendingAttribute),resolve()})).catch(reject)}}else resolve()}))}function replace(node){return Promise.all([replaceForPosition(node,"::before"),replaceForPosition(node,"::after")])}function processable(node){return!(node.parentNode===document.head||~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase())||node.getAttribute("data-fa-pseudo-element")||node.parentNode&&"svg"===node.parentNode.tagName)}function searchPseudoElements(root){if(IS_DOM)return new Promise((function(resolve,reject){var operations=toArray(root.querySelectorAll("*")).filter(processable).map(replace),end=perf_begin("searchPseudoElements");disableObservation(),Promise.all(operations).then((function(){end(),enableObservation(),resolve()})).catch((function(){end(),enableObservation(),reject()}))}))}var _unwatched=!1,parseTransformString=function parseTransformString(transformString){return transformString.toLowerCase().split(" ").reduce((function(acc,n){var parts=n.toLowerCase().split("-"),first=parts[0],rest=parts.slice(1).join("-");if(first&&"h"===rest)return acc.flipX=!0,acc;if(first&&"v"===rest)return acc.flipY=!0,acc;if(rest=parseFloat(rest),isNaN(rest))return acc;switch(first){case"grow":acc.size=acc.size+rest;break;case"shrink":acc.size=acc.size-rest;break;case"left":acc.x=acc.x-rest;break;case"right":acc.x=acc.x+rest;break;case"up":acc.y=acc.y-rest;break;case"down":acc.y=acc.y+rest;break;case"rotate":acc.rotate=acc.rotate+rest}return acc}),{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},PowerTransforms={mixout:function mixout(){return{parse:{transform:function transform(transformString){return parseTransformString(transformString)}}}},hooks:function hooks(){return{parseNodeAttributes:function parseNodeAttributes(accumulator,node){var transformString=node.getAttribute("data-fa-transform");return transformString&&(accumulator.transform=parseTransformString(transformString)),accumulator}}},provides:function provides(providers){providers.generateAbstractTransformGrouping=function(_ref){var main=_ref.main,transform=_ref.transform,containerWidth=_ref.containerWidth,iconWidth=_ref.iconWidth,outer={transform:"translate(".concat(containerWidth/2," 256)")},innerTranslate="translate(".concat(32*transform.x,", ").concat(32*transform.y,") "),innerScale="scale(".concat(transform.size/16*(transform.flipX?-1:1),", ").concat(transform.size/16*(transform.flipY?-1:1),") "),innerRotate="rotate(".concat(transform.rotate," 0 0)"),operations={outer:outer,inner:{transform:"".concat(innerTranslate," ").concat(innerScale," ").concat(innerRotate)},path:{transform:"translate(".concat(iconWidth/2*-1," -256)")}};return{tag:"g",attributes:_objectSpread2({},operations.outer),children:[{tag:"g",attributes:_objectSpread2({},operations.inner),children:[{tag:main.icon.tag,children:main.icon.children,attributes:_objectSpread2(_objectSpread2({},main.icon.attributes),operations.path)}]}]}}}},ALL_SPACE={x:0,y:0,width:"100%",height:"100%"};function fillBlack(_abstract){var force=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return _abstract.attributes&&(_abstract.attributes.fill||force)&&(_abstract.attributes.fill="black"),_abstract}var Masks={hooks:function hooks(){return{parseNodeAttributes:function parseNodeAttributes(accumulator,node){var maskData=node.getAttribute("data-fa-mask"),mask=maskData?getCanonicalIcon(maskData.split(" ").map((function(i){return i.trim()}))):{prefix:null,iconName:null,rest:[]};return mask.prefix||(mask.prefix=getDefaultUsablePrefix()),accumulator.mask=mask,accumulator.maskId=node.getAttribute("data-fa-mask-id"),accumulator}}},provides:function provides(providers){providers.generateAbstractMask=function(_ref){var _abstract2,children=_ref.children,attributes=_ref.attributes,main=_ref.main,mask=_ref.mask,explicitMaskId=_ref.maskId,transform=_ref.transform,mainWidth=main.width,mainPath=main.icon,maskWidth=mask.width,maskPath=mask.icon,trans=function transformForSvg(_ref){var transform=_ref.transform,containerWidth=_ref.containerWidth,iconWidth=_ref.iconWidth,outer={transform:"translate(".concat(containerWidth/2," 256)")},innerTranslate="translate(".concat(32*transform.x,", ").concat(32*transform.y,") "),innerScale="scale(".concat(transform.size/16*(transform.flipX?-1:1),", ").concat(transform.size/16*(transform.flipY?-1:1),") "),innerRotate="rotate(".concat(transform.rotate," 0 0)");return{outer:outer,inner:{transform:"".concat(innerTranslate," ").concat(innerScale," ").concat(innerRotate)},path:{transform:"translate(".concat(iconWidth/2*-1," -256)")}}}({transform:transform,containerWidth:maskWidth,iconWidth:mainWidth}),maskRect={tag:"rect",attributes:_objectSpread2(_objectSpread2({},ALL_SPACE),{},{fill:"white"})},maskInnerGroupChildrenMixin=mainPath.children?{children:mainPath.children.map(fillBlack)}:{},maskInnerGroup={tag:"g",attributes:_objectSpread2({},trans.inner),children:[fillBlack(_objectSpread2({tag:mainPath.tag,attributes:_objectSpread2(_objectSpread2({},mainPath.attributes),trans.path)},maskInnerGroupChildrenMixin))]},maskOuterGroup={tag:"g",attributes:_objectSpread2({},trans.outer),children:[maskInnerGroup]},maskId="mask-".concat(explicitMaskId||nextUniqueId()),clipId="clip-".concat(explicitMaskId||nextUniqueId()),maskTag={tag:"mask",attributes:_objectSpread2(_objectSpread2({},ALL_SPACE),{},{id:maskId,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[maskRect,maskOuterGroup]},defs={tag:"defs",children:[{tag:"clipPath",attributes:{id:clipId},children:(_abstract2=maskPath,"g"===_abstract2.tag?_abstract2.children:[_abstract2])},maskTag]};return children.push(defs,{tag:"rect",attributes:_objectSpread2({fill:"currentColor","clip-path":"url(#".concat(clipId,")"),mask:"url(#".concat(maskId,")")},ALL_SPACE)}),{children:children,attributes:attributes}}}},MissingIconIndicator={provides:function provides(providers){var reduceMotion=!1;WINDOW.matchMedia&&(reduceMotion=WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches),providers.missingIconAbstract=function(){var gChildren=[],FILL={fill:"currentColor"},ANIMATION_BASE={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};gChildren.push({tag:"path",attributes:_objectSpread2(_objectSpread2({},FILL),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var OPACITY_ANIMATE=_objectSpread2(_objectSpread2({},ANIMATION_BASE),{},{attributeName:"opacity"}),dot={tag:"circle",attributes:_objectSpread2(_objectSpread2({},FILL),{},{cx:"256",cy:"364",r:"28"}),children:[]};return reduceMotion||dot.children.push({tag:"animate",attributes:_objectSpread2(_objectSpread2({},ANIMATION_BASE),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_objectSpread2(_objectSpread2({},OPACITY_ANIMATE),{},{values:"1;0;1;1;0;1;"})}),gChildren.push(dot),gChildren.push({tag:"path",attributes:_objectSpread2(_objectSpread2({},FILL),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:reduceMotion?[]:[{tag:"animate",attributes:_objectSpread2(_objectSpread2({},OPACITY_ANIMATE),{},{values:"1;0;0;0;0;1;"})}]}),reduceMotion||gChildren.push({tag:"path",attributes:_objectSpread2(_objectSpread2({},FILL),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_objectSpread2(_objectSpread2({},OPACITY_ANIMATE),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:gChildren}}}};!function registerPlugins(nextPlugins,_ref){var obj=_ref.mixoutsTo;return _plugins=nextPlugins,_hooks={},Object.keys(providers).forEach((function(k){-1===defaultProviderKeys.indexOf(k)&&delete providers[k]})),_plugins.forEach((function(plugin){var mixout=plugin.mixout?plugin.mixout():{};if(Object.keys(mixout).forEach((function(tk){"function"==typeof mixout[tk]&&(obj[tk]=mixout[tk]),"object"===_typeof(mixout[tk])&&Object.keys(mixout[tk]).forEach((function(sk){obj[tk]||(obj[tk]={}),obj[tk][sk]=mixout[tk][sk]}))})),plugin.hooks){var hooks=plugin.hooks();Object.keys(hooks).forEach((function(hook){_hooks[hook]||(_hooks[hook]=[]),_hooks[hook].push(hooks[hook])}))}plugin.provides&&plugin.provides(providers)})),obj}([InjectCSS,ReplaceElements,Layers,LayersCounter,LayersText,{hooks:function hooks(){return{mutationObserverCallbacks:function mutationObserverCallbacks(accumulator){return accumulator.pseudoElementsCallback=searchPseudoElements,accumulator}}},provides:function provides(providers$$1){providers$$1.pseudoElements2svg=function(params){var _params$node=params.node,node=void 0===_params$node?DOCUMENT:_params$node;fontawesome_svg_core_config.searchPseudoElements&&searchPseudoElements(node)}}},{mixout:function mixout(){return{dom:{unwatch:function unwatch(){disableObservation(),_unwatched=!0}}}},hooks:function hooks(){return{bootstrap:function bootstrap(){observe(chainHooks("mutationObserverCallbacks",{}))},noAuto:function noAuto(){!function disconnect(){mo&&mo.disconnect()}()},watch:function watch(params){var observeMutationsRoot=params.observeMutationsRoot;_unwatched?enableObservation():observe(chainHooks("mutationObserverCallbacks",{observeMutationsRoot:observeMutationsRoot}))}}}},PowerTransforms,Masks,MissingIconIndicator,{hooks:function hooks(){return{parseNodeAttributes:function parseNodeAttributes(accumulator,node){var symbolData=node.getAttribute("data-fa-symbol"),symbol=null!==symbolData&&(""===symbolData||symbolData);return accumulator.symbol=symbol,accumulator}}}}],{mixoutsTo:api});var parse$1=api.parse,toHtml$1=api.toHtml,fontawesome_svg_core_icon=api.icon,prop_types=__webpack_require__("./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);function index_es_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_es_objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_es_ownKeys(Object(source),!0).forEach((function(key){index_es_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_es_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function index_es_typeof(obj){return index_es_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},index_es_typeof(obj)}function index_es_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function index_es_toConsumableArray(arr){return function index_es_arrayWithoutHoles(arr){if(Array.isArray(arr))return index_es_arrayLikeToArray(arr)}(arr)||function index_es_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function index_es_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return index_es_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return index_es_arrayLikeToArray(o,minLen)}(arr)||function index_es_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function index_es_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function camelize(string){return function _isNumerical(obj){return(obj-=0)==obj}(string)?string:(string=string.replace(/[\-_\s]+(.)?/g,(function(match,chr){return chr?chr.toUpperCase():""}))).substr(0,1).toLowerCase()+string.substr(1)}var _excluded$1=["style"];function styleToObject(style){return style.split(";").map((function(s){return s.trim()})).filter((function(s){return s})).reduce((function(acc,pair){var i=pair.indexOf(":"),prop=camelize(pair.slice(0,i)),value=pair.slice(i+1).trim();return prop.startsWith("webkit")?acc[function index_es_capitalize(val){return val.charAt(0).toUpperCase()+val.slice(1)}(prop)]=value:acc[prop]=value,acc}),{})}var index_es_PRODUCTION=!1;try{index_es_PRODUCTION=!0}catch(e){}function normalizeIconArgs(icon){return icon&&"object"===index_es_typeof(icon)&&icon.prefix&&icon.iconName&&icon.icon?icon:parse$1.icon?parse$1.icon(icon):null===icon?null:icon&&"object"===index_es_typeof(icon)&&icon.prefix&&icon.iconName?icon:Array.isArray(icon)&&2===icon.length?{prefix:icon[0],iconName:icon[1]}:"string"==typeof icon?{prefix:"fas",iconName:icon}:void 0}function objectWithKey(key,value){return Array.isArray(value)&&value.length>0||!Array.isArray(value)&&value?index_es_defineProperty({},key,value):{}}var _excluded=["forwardedRef"];function FontAwesomeIcon(_ref){var forwardedRef=_ref.forwardedRef,props=_objectWithoutProperties(_ref,_excluded),iconArgs=props.icon,maskArgs=props.mask,symbol=props.symbol,className=props.className,title=props.title,titleId=props.titleId,maskId=props.maskId,iconLookup=normalizeIconArgs(iconArgs),classes=objectWithKey("classes",[].concat(index_es_toConsumableArray(function classList(props){var _classes,beat=props.beat,fade=props.fade,beatFade=props.beatFade,bounce=props.bounce,shake=props.shake,flash=props.flash,spin=props.spin,spinPulse=props.spinPulse,spinReverse=props.spinReverse,pulse=props.pulse,fixedWidth=props.fixedWidth,inverse=props.inverse,border=props.border,listItem=props.listItem,flip=props.flip,size=props.size,rotation=props.rotation,pull=props.pull,classes=(index_es_defineProperty(_classes={"fa-beat":beat,"fa-fade":fade,"fa-beat-fade":beatFade,"fa-bounce":bounce,"fa-shake":shake,"fa-flash":flash,"fa-spin":spin,"fa-spin-reverse":spinReverse,"fa-spin-pulse":spinPulse,"fa-pulse":pulse,"fa-fw":fixedWidth,"fa-inverse":inverse,"fa-border":border,"fa-li":listItem,"fa-flip-horizontal":"horizontal"===flip||"both"===flip,"fa-flip-vertical":"vertical"===flip||"both"===flip},"fa-".concat(size),null!=size),index_es_defineProperty(_classes,"fa-rotate-".concat(rotation),null!=rotation&&0!==rotation),index_es_defineProperty(_classes,"fa-pull-".concat(pull),null!=pull),index_es_defineProperty(_classes,"fa-swap-opacity",props.swapOpacity),_classes);return Object.keys(classes).map((function(key){return classes[key]?key:null})).filter((function(key){return key}))}(props)),index_es_toConsumableArray(className.split(" ")))),transform=objectWithKey("transform","string"==typeof props.transform?parse$1.transform(props.transform):props.transform),mask=objectWithKey("mask",normalizeIconArgs(maskArgs)),renderedIcon=fontawesome_svg_core_icon(iconLookup,index_es_objectSpread2(index_es_objectSpread2(index_es_objectSpread2(index_es_objectSpread2({},classes),transform),mask),{},{symbol:symbol,title:title,titleId:titleId,maskId:maskId}));if(!renderedIcon)return function log(){var _console;!index_es_PRODUCTION&&console&&"function"==typeof console.error&&(_console=console).error.apply(_console,arguments)}("Could not find icon",iconLookup),null;var abstract=renderedIcon.abstract,extraProps={ref:forwardedRef};return Object.keys(props).forEach((function(key){FontAwesomeIcon.defaultProps.hasOwnProperty(key)||(extraProps[key]=props[key])})),convertCurry(abstract[0],extraProps)}FontAwesomeIcon.displayName="FontAwesomeIcon",FontAwesomeIcon.propTypes={beat:prop_types_default.a.bool,border:prop_types_default.a.bool,bounce:prop_types_default.a.bool,className:prop_types_default.a.string,fade:prop_types_default.a.bool,flash:prop_types_default.a.bool,mask:prop_types_default.a.oneOfType([prop_types_default.a.object,prop_types_default.a.array,prop_types_default.a.string]),maskId:prop_types_default.a.string,fixedWidth:prop_types_default.a.bool,inverse:prop_types_default.a.bool,flip:prop_types_default.a.oneOf(["horizontal","vertical","both"]),icon:prop_types_default.a.oneOfType([prop_types_default.a.object,prop_types_default.a.array,prop_types_default.a.string]),listItem:prop_types_default.a.bool,pull:prop_types_default.a.oneOf(["right","left"]),pulse:prop_types_default.a.bool,rotation:prop_types_default.a.oneOf([0,90,180,270]),shake:prop_types_default.a.bool,size:prop_types_default.a.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:prop_types_default.a.bool,spinPulse:prop_types_default.a.bool,spinReverse:prop_types_default.a.bool,symbol:prop_types_default.a.oneOfType([prop_types_default.a.bool,prop_types_default.a.string]),title:prop_types_default.a.string,titleId:prop_types_default.a.string,transform:prop_types_default.a.oneOfType([prop_types_default.a.string,prop_types_default.a.object]),swapOpacity:prop_types_default.a.bool},FontAwesomeIcon.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var convertCurry=function convert(createElement,element){var extraProps=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof element)return element;var children=(element.children||[]).map((function(child){return convert(createElement,child)})),mixins=Object.keys(element.attributes||{}).reduce((function(acc,key){var val=element.attributes[key];switch(key){case"class":acc.attrs.className=val,delete element.attributes.class;break;case"style":acc.attrs.style=styleToObject(val);break;default:0===key.indexOf("aria-")||0===key.indexOf("data-")?acc.attrs[key.toLowerCase()]=val:acc.attrs[camelize(key)]=val}return acc}),{attrs:{}}),_extraProps$style=extraProps.style,existingStyle=void 0===_extraProps$style?{}:_extraProps$style,remaining=_objectWithoutProperties(extraProps,_excluded$1);return mixins.attrs.style=index_es_objectSpread2(index_es_objectSpread2({},mixins.attrs.style),existingStyle),createElement.apply(void 0,[element.tag,index_es_objectSpread2(index_es_objectSpread2({},mixins.attrs),remaining)].concat(index_es_toConsumableArray(children)))}.bind(null,react_default.a.createElement);function notEmpty(value){return null!=value}const objCache={},dpNameProp=(name,ident)=>{const identStr=ident?`${ident[0]}=${ident[1]}`:"",cacheKey=name+(identStr||"");if(void 0!==objCache[cacheKey])return objCache[cacheKey];const props={"data-dp-name":name};return ident&&(props["data-dp-ident"]=identStr),objCache[cacheKey]=props},DeskproCustomIcon=({icon:icon,className:className,...rest})=>{const classNames=`dp-custom-icon-${icon} ${className}`;return react.createElement("i",{...rest,...dpNameProp("DeskproCustomIcon"),className:classNames,style:{lineHeight:1,height:"auto"}})},DpCustomIconIdSet=new Set(Object.keys({"active-call":"61697",admin:"61698","advanced-filter":"61699",agent:"61700",api:"61701",approval:"61702","apps-zapier":"61703",arrow:"61704","column-width":"61705",community:"61706",crown:"61707",deskpro:"61708",dot:"61709",drag:"61710","dual-card":"61711","dual-table":"61712","dual-view":"61713","email-primary":"61714",enter:"61715","export-alt":"61716",export:"61717","follow-up-new":"61718","follow-up":"61719",glossary:"61720","google-analytics":"61721",grip:"61722","hang-up":"61723","helping-hand":"61724",history:"61725","im-outline":"61726","im-send":"61727",im:"61728","inbound-call":"61729","kanban-view":"61730","level-down":"61731","linked-ticket-new":"61732","linked-ticket":"61733","location-arrow":"61734",merge:"61735",merge2:"61736","missed-call":"61737","mobile-rotate":"61738","organization-circle":"61739","outbound-call":"61740",read:"61741",record:"61742",sent:"61743","sip-address":"61744",sort:"61745","transfer-queue":"61746",triangle:"61747","user-edit":"61748","warm-add":"61749","warm-transfer":"61750",webhook:"61751"})),isDpCustomIconId=icon=>"string"==typeof icon&&DpCustomIconIdSet.has(icon),isSVGRIcon=icon=>"function"==typeof icon||Object(react_is.isValidElementType)(icon)&&"string"!=typeof icon,SVGRIcon=({icon:icon,...rest})=>{const Icon=icon;return react.createElement(Icon,{...rest})};function isFaIcon(icon){return"object"==typeof icon&&notEmpty(icon)&&"prefix"in icon&&"iconName"in icon}function isAnyIcon(icon){return isDpCustomIconId(icon)||isFaIcon(icon)||isSVGRIcon(icon)||Object(react_is.isElement)(icon)}function isIconProps(props){return"object"==typeof props&&notEmpty(props)&&"icon"in props&&isAnyIcon(props.icon)}const Icon_Icon=Object(styled_components_browser_esm.d)((function Icon({icon:icon,themeColor:themeColor,size:size,...rest}){return isFaIcon(icon)?react.createElement(FontAwesomeIcon,{"data-testid":"fa-icon",...dpNameProp("FAIcon"),icon:icon,...rest}):isDpCustomIconId(icon)?react.createElement(DeskproCustomIcon,{"data-testid":"custom-icon",icon:icon,...rest}):isSVGRIcon(icon)?react.createElement("span",{"data-testid":"svgr-icon",style:{display:"contents",fontSize:size}},react.createElement(SVGRIcon,{icon:icon,...rest})):Object(react_is.isElement)(icon)?react.createElement("span",{"data-testid":"jsx-icon",className:rest.className,style:{display:"contents"}},icon):react.createElement(DeskproCustomIcon,{"data-testid":"custom-icon",icon:"dot",...rest})}))`
  height: 1em;
  color: ${props=>{var _a;return null!==(_a=props.theme.colors[props.themeColor])&&void 0!==_a?_a:"inherit"}};
  font-size: ${props=>"number"==typeof props.size?`${props.size}px`:"inherit"};
  user-select: none;
`,common=styled_components_browser_esm.c`
  margin: 0;
  padding: 0;
`,headingStyles={h_h1:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 112%;
`,h_h1_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
`,h_h2:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 112%;
`,h_h2_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
`,h_h3:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 112%;
`,h_h3_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`,h_h4:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 112%;
`,h_h4_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`,h_h5:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 112%;
`,h_h5_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
`,h_h6:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 112%;
`,h_h6_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 120%;
`,h_h6_kerning:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 112%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`},paragraphStyled={p_p1:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
`,p_p1_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
`,p_p1_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
`,p_p1_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
`,p_p1_paragraph_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
`,p_p1_paragraph_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`,p_p2:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
`,p_p2_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
`,p_p2_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`,p_p2_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`,p_p2_paragraph_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
`,p_p2_paragraph_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
`,p_p3:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
`,p_p3_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
`,p_p3_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 120%;
`,p_p3_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
`,p_p3_paragraph_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
`,p_p3_paragraph_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 150%;
`,p_p4:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 126%;
`,p_p4_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 126%;
`,p_p4_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 126%;
`,p_p4_paragraph:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 150%;
`,p_p4_paragraph_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 150%;
`,p_p4_paragraph_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 150%;
`},othersStyled={label1:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 140%;
`,label1_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
`,label1_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 140%;
`,label2:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 600;
  font-size: 8px;
  line-height: 140%;
`,monospace:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.monospace};
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 120%;
`,monospace_medium:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.monospace};
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 120%;
`,monospace_semibold:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.monospace};
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 120%;
`,shortcode:styled_components_browser_esm.c`
  font-family: ${props=>props.theme.fonts.inter};
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 126%;
  letter-spacing: 0.03em;
`},styles_common=(styled_components_browser_esm.d.h1.attrs({type:"h_h1"})`
  ${common};
  ${headingStyles.h_h1}
`,styled_components_browser_esm.d.h1.attrs({type:"h_h1_paragraph"})`
  ${common};
  ${headingStyles.h_h1_paragraph}
`,styled_components_browser_esm.d.h2.attrs({type:"h_h2"})`
  ${common};
  ${headingStyles.h_h2}
`,styled_components_browser_esm.d.h2.attrs({type:"h_h2_paragraph"})`
  ${common};
  ${headingStyles.h_h2_paragraph}
`,styled_components_browser_esm.d.h1.attrs({type:"h_h3"})`
  ${common};
  ${headingStyles.h_h3}
`,styled_components_browser_esm.d.h3.attrs({type:"h_h3_paragraph"})`
  ${common};
  ${headingStyles.h_h3_paragraph}
`,styled_components_browser_esm.d.h4.attrs({type:"h_h4"})`
  ${common};
  ${headingStyles.h_h4}
`,styled_components_browser_esm.d.h4.attrs({type:"h_h4_paragraph"})`
  ${common};
  ${headingStyles.h_h4_paragraph}
`,styled_components_browser_esm.d.h5.attrs({type:"h_h5"})`
  ${common};
  ${headingStyles.h_h5}
`,styled_components_browser_esm.d.h5.attrs({type:"h_h5_paragraph"})`
  ${common};
  ${headingStyles.h_h5_paragraph}
`,styled_components_browser_esm.d.h6.attrs({type:"h_h6"})`
  ${common};
  ${headingStyles.h_h6}
`,styled_components_browser_esm.d.h6.attrs({type:"h_h6_paragraph"})`
  ${common};
  ${headingStyles.h_h6_paragraph}
`,styled_components_browser_esm.d.h6.attrs({type:"h_h6_kerning"})`
  ${common};
  ${headingStyles.h_h6_kerning}
`,styled_components_browser_esm.d.p.attrs({type:"p_p1"})`
  ${common};
  ${paragraphStyled.p_p1}
`,styled_components_browser_esm.d.p.attrs({type:"p_p1_medium"})`
  ${common};
  ${paragraphStyled.p_p1_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p1_semibold"})`
  ${common};
  ${paragraphStyled.p_p1_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"p_p1_paragraph"})`
  ${common};
  ${paragraphStyled.p_p1_paragraph}
`,styled_components_browser_esm.d.p.attrs({type:"p_p1_paragraph_medium"})`
  ${common};
  ${paragraphStyled.p_p1_paragraph_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p1_paragraph_semibold"})`
  ${common};
  ${paragraphStyled.p_p1_paragraph_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"p_p2"})`
  ${common};
  ${paragraphStyled.p_p2}
`,styled_components_browser_esm.d.p.attrs({type:"p_p2_medium"})`
  ${common};
  ${paragraphStyled.p_p2_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p2_semibold"})`
  ${common};
  ${paragraphStyled.p_p2_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"p_p2_paragraph"})`
  ${common};
  ${paragraphStyled.p_p2_paragraph}
`,styled_components_browser_esm.d.p.attrs({type:"p_p2_paragraph_medium"})`
  ${common};
  ${paragraphStyled.p_p2_paragraph_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p2_paragraph_semibold"})`
  ${common};
  ${paragraphStyled.p_p2_paragraph_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"p_p3"})`
  ${common};
  ${paragraphStyled.p_p3}
`,styled_components_browser_esm.d.p.attrs({type:"p_p3_medium"})`
  ${common};
  ${paragraphStyled.p_p3_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p3_semibold"})`
  ${common};
  ${paragraphStyled.p_p3_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"p_p3_paragraph"})`
  ${common};
  ${paragraphStyled.p_p3_paragraph}
`,styled_components_browser_esm.d.p.attrs({type:"p_p3_paragraph_medium"})`
  ${common};
  ${paragraphStyled.p_p3_paragraph_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p3_paragraph_semibold"})`
  ${common};
  ${paragraphStyled.p_p3_paragraph_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"p_p4"})`
  ${common};
  ${paragraphStyled.p_p4}
`,styled_components_browser_esm.d.p.attrs({type:"p_p4_medium"})`
  ${common};
  ${paragraphStyled.p_p4_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p4_semibold"})`
  ${common};
  ${paragraphStyled.p_p4_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"p_p4_paragraph"})`
  ${common};
  ${paragraphStyled.p_p4_paragraph}
`,styled_components_browser_esm.d.p.attrs({type:"p_p4_paragraph_medium"})`
  ${common};
  ${paragraphStyled.p_p4_paragraph_medium}
`,styled_components_browser_esm.d.p.attrs({type:"p_p4_paragraph_semibold"})`
  ${common};
  ${paragraphStyled.p_p4_paragraph_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"label1"})`
  ${common};
  ${othersStyled.label1}
`,styled_components_browser_esm.d.p.attrs({type:"label1medium"})`
  ${common};
  ${othersStyled.label1_medium}
`,styled_components_browser_esm.d.p.attrs({type:"label1semibold"})`
  ${common};
  ${othersStyled.label1_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"label2"})`
  ${common};
  ${othersStyled.label2}
`,styled_components_browser_esm.d.p.attrs({type:"monospace"})`
  ${common};
  ${othersStyled.monospace}
`,styled_components_browser_esm.d.p.attrs({type:"monospace_medium"})`
  ${common};
  ${othersStyled.monospace_medium}
`,styled_components_browser_esm.d.p.attrs({type:"monospace_semibold"})`
  ${common};
  ${othersStyled.monospace_semibold}
`,styled_components_browser_esm.d.p.attrs({type:"shortcode"})`
  ${common};
  ${othersStyled.shortcode}
`,styled_components_browser_esm.c`
  margin: 0;
  padding: 0;
`),styles_headingStyles={h0:styled_components_browser_esm.c`
  font-size: 14px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 110%;
`,h1:styled_components_browser_esm.c`
  font-size: 12px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 110%;
`,h2:styled_components_browser_esm.c`
  font-size: 12px;
  font-weight: normal;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 110%;
`,h3:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 110%;
`,h4:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: normal;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 110%;
`,h5:styled_components_browser_esm.c`
  font-size: 10px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 110%;
`,h6:styled_components_browser_esm.c`
  font-size: 9px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 110%;
`,h7:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 150%;
`,h8:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.inter};
  line-height: 150%;
`,h9:styled_components_browser_esm.c`
  font-size: 14px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.inter};
  line-height: 100%;
`,h10:styled_components_browser_esm.c`
  font-size: 16px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.inter};
  line-height: 112%;
`,h11:styled_components_browser_esm.c`
  font-size: 16px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.headingPrimary};
  line-height: 120%;
`},styles_paragraphStyled={p1:styled_components_browser_esm.c`
  font-size: 12px;
  font-weight: normal;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p2:styled_components_browser_esm.c`
  font-size: 12px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p3:styled_components_browser_esm.c`
  font-size: 12px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p4:styled_components_browser_esm.c`
  font-size: 12px;
  font-weight: bold;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p5:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: normal;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p6:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p7:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p8:styled_components_browser_esm.c`
  font-size: 10px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p9:styled_components_browser_esm.c`
  font-size: 10px;
  font-weight: bold;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p10:styled_components_browser_esm.c`
  font-size: 9px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p11:styled_components_browser_esm.c`
  font-size: 9px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p12:styled_components_browser_esm.c`
  font-size: 9px;
  font-weight: normal;
  font-family: ${props=>props.theme.fonts.monospace};
  line-height: 150%;
`,p13:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: normal;
  font-family: ${props=>props.theme.fonts.monospace};
  line-height: 150%;
`,p14:styled_components_browser_esm.c`
  font-size: 9px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.monospace};
  line-height: 150%;
`,p15:styled_components_browser_esm.c`
  font-size: 10px;
  font-weight: 400;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 150%;
`,p16:styled_components_browser_esm.c`
  font-size: 12px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.inter};
  line-height: 150%;
`,p17:styled_components_browser_esm.c`
  font-size: 13px;
  font-weight: 600;
  font-family: ${props=>props.theme.fonts.inter};
  line-height: 100%;
`,p18:styled_components_browser_esm.c`
  font-size: 11px;
  font-weight: 500;
  font-family: ${props=>props.theme.fonts.primary};
  line-height: 120%;
`},H0=styled_components_browser_esm.d.h1.attrs({type:"h0"})`
  ${styles_common};
  ${styles_headingStyles.h0}
`,H1=styled_components_browser_esm.d.h1.attrs({type:"h1"})`
  ${styles_common};
  ${styles_headingStyles.h1}
`,H2=styled_components_browser_esm.d.h2.attrs({type:"h2"})`
  ${styles_common};
  ${styles_headingStyles.h2}
`,H3=styled_components_browser_esm.d.h3.attrs({type:"h3"})`
  ${styles_common};
  ${styles_headingStyles.h3}
`,H4=styled_components_browser_esm.d.h4.attrs({type:"h4"})`
  ${styles_common};
  ${styles_headingStyles.h4}
`,H5=styled_components_browser_esm.d.h5.attrs({type:"h5"})`
  ${styles_common};
  ${styles_headingStyles.h5}
`,H6=styled_components_browser_esm.d.h6.attrs({type:"h6"})`
  ${styles_common};
  ${styles_headingStyles.h6}
`,P1=(styled_components_browser_esm.d.h6.attrs({type:"h7"})`
  ${styles_common};
  ${styles_headingStyles.h7}
`,styled_components_browser_esm.d.h6.attrs({type:"h8"})`
  ${styles_common};
  ${styles_headingStyles.h8}
`,styled_components_browser_esm.d.h1.attrs({type:"h9"})`
  ${styles_common};
  ${styles_headingStyles.h9}
`,styled_components_browser_esm.d.h1.attrs({type:"h10"})`
  ${styles_common};
  ${styles_headingStyles.h10}
`,styled_components_browser_esm.d.h1.attrs({type:"h11"})`
  ${styles_common};
  ${styles_headingStyles.h11}
`,styled_components_browser_esm.d.p.attrs({type:"p1"})`
  ${styles_common};
  ${styles_paragraphStyled.p1}
`),P2=styled_components_browser_esm.d.p.attrs({type:"p2"})`
  ${styles_common};
  ${styles_paragraphStyled.p2}
`,P3=styled_components_browser_esm.d.p.attrs({type:"p3"})`
  ${styles_common};
  ${styles_paragraphStyled.p3}
`,P4=styled_components_browser_esm.d.p.attrs({type:"p4"})`
  ${styles_common};
  ${styles_paragraphStyled.p4}
`,P5=styled_components_browser_esm.d.p.attrs({type:"p5"})`
  ${styles_common};
  ${styles_paragraphStyled.p5}
`,P6=styled_components_browser_esm.d.p.attrs({type:"p6"})`
  ${styles_common};
  ${styles_paragraphStyled.p6}
`,P7=styled_components_browser_esm.d.p.attrs({type:"p7"})`
  ${styles_common};
  ${styles_paragraphStyled.p7}
`,P8=styled_components_browser_esm.d.p.attrs({type:"p8"})`
  ${styles_common};
  ${styles_paragraphStyled.p8}
`,P9=styled_components_browser_esm.d.p.attrs({type:"p9"})`
  ${styles_common};
  ${styles_paragraphStyled.p9}
`,P10=styled_components_browser_esm.d.p.attrs({type:"p10"})`
  ${styles_common};
  ${styles_paragraphStyled.p10}
`,P11=styled_components_browser_esm.d.p.attrs({type:"p11"})`
  ${styles_common};
  ${styles_paragraphStyled.p11}
`,P12=styled_components_browser_esm.d.p.attrs({type:"p12"})`
  ${styles_common};
  ${styles_paragraphStyled.p12}
`,P13=styled_components_browser_esm.d.p.attrs({type:"p13"})`
  ${styles_common};
  ${styles_paragraphStyled.p13}
`,Code=styled_components_browser_esm.d.code`
  ${styles_common};
  ${styles_paragraphStyled.p13}
`,v1Styles=(styled_components_browser_esm.d.code`
  ${styles_common};
  ${styles_paragraphStyled.p14}
`,styled_components_browser_esm.d.code`
  ${styles_common};
  ${styles_paragraphStyled.p15}
`,styled_components_browser_esm.d.p.attrs({type:"p16"})`
  ${styles_common};
  ${styles_paragraphStyled.p16}
`,styled_components_browser_esm.d.p.attrs({type:"p17"})`
  ${styles_common};
  ${styles_paragraphStyled.p17}
`,styled_components_browser_esm.d.p.attrs({type:"p18"})`
  ${styles_common};
  ${styles_paragraphStyled.p18}
`,{...styles_headingStyles,...styles_paragraphStyled}),v2Styles={...headingStyles,...paragraphStyled,...othersStyled},TSpan=Object(styled_components_browser_esm.d)("span")`
  ${common};
  color: ${props=>{var _a;return null!==(_a=props.theme.colors[props.themeColor])&&void 0!==_a?_a:"inherit"}};
  flex: ${props=>props.flex?props.flex:void 0};
  ${props=>props.$fill?styled_components_browser_esm.c`
          flex-grow: 1;
        `:styled_components_browser_esm.c`
          max-width: max-content;
        `}
  ${props=>props.overflow?styled_components_browser_esm.c`
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ${props.overflow};
        `:void 0}

  ${props=>v1Styles[props.type]||v2Styles[props.type]}
  ${props=>props.font&&styled_components_browser_esm.c`
      font-family: ${props.font};
    `};
  ${props=>props.transform&&styled_components_browser_esm.c`
      text-transform: ${props.transform};
    `}

  ${props=>props.textAlign&&styled_components_browser_esm.c`
      text-align: ${props.textAlign};
    `};
`,Typography_headingStyles={...styles_headingStyles,...headingStyles},Typography_paragraphStyled={...styles_paragraphStyled,...paragraphStyled};var index_module=__webpack_require__("./node_modules/.pnpm/ts-pattern@4.2.1/node_modules/ts-pattern/dist/index.module.js");const ButtonText=styled_components_browser_esm.d.span`
  user-select: none;
  flex: 0 1 auto;
  ${Typography_paragraphStyled.p6};

  ${props=>props.overflow?styled_components_browser_esm.c`
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ${props.overflow};
        `:void 0}
`,buttonBaseCss=styled_components_browser_esm.c`
  position: relative;
  transition: all 0.1s ease-in-out;
  display: inline-flex;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px 8px;
  vertical-align: middle;
  height: 24px;
  max-height: 24px;
  min-height: 24px;
  min-width: 24px;
  align-items: center;
  gap: 7px;

  :disabled {
    cursor: not-allowed;
  }

  :focus {
    outline-visible: 2px solid ${({theme:theme})=>theme.colors.cyan80};
    outline-offset: 1px;
  }

  > * {
    flex: 0;
  }

  ${Icon_Icon} {
    ${Typography_paragraphStyled.p6};
    flex: 0 0 auto;
  }

  ${ButtonText} {
    flex: 0 1 auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`,buttonLarge=styled_components_browser_esm.c`
  min-height: 28px;
  min-width: 28px;
  padding: 6px 10px;
  ${ButtonText} {
    ${Typography_paragraphStyled.p2};
  }

  ${Icon_Icon} {
    ${Typography_paragraphStyled.p2}
  }
`,buttonXLarge=styled_components_browser_esm.c`
  min-height: 32px;
  min-width: 28px;
  padding: 4px 16px;
  ${ButtonText} {
    ${Typography_paragraphStyled.p2};
  }

  ${Icon_Icon} {
    ${Typography_paragraphStyled.p2}
  }
`,buttonSmall=styled_components_browser_esm.c`
  height: 18px;
  min-height: 18px;
  min-width: 18px;
  padding: 3px 8px;
  ${ButtonText} {
    ${Typography_paragraphStyled.p11};
  }

  ${Icon_Icon} {
    ${Typography_paragraphStyled.p11}
  }
`,buttonTiny=styled_components_browser_esm.c`
  height: 16px;
  min-height: 16px;
  max-height: 16px;
  min-width: 28px;
  justify-content: center;
  padding: 1px 2px;
  ${ButtonText} {
    ${Typography_paragraphStyled.p11};
  }

  ${Icon_Icon} {
    ${Typography_paragraphStyled.p11};
  }
`,iconButtonBase=styled_components_browser_esm.c`
  border-radius: 50%;
  justify-content: center;
  ${Icon_Icon} {
    ${Typography_paragraphStyled.p1}
  }
`,iconButtonSmall=styled_components_browser_esm.c`
  border-radius: 4px;
  padding: 3px;
  height: 20px;
  min-height: 20px;
  max-height: 20px;
  width: 20px;
  ${ButtonText} {
    ${Typography_paragraphStyled.p11};
  }

  ${Icon_Icon} {
    ${Typography_paragraphStyled.p8}
  }

  &:hover,
  &:active,
  &:focus {
    ${Icon_Icon} {
      color: inherit;
    }
  }
`,primaryActive=styled_components_browser_esm.c`
  background-color: ${props=>props.theme.colors.cyan100};
  border: 1px solid ${props=>props.theme.colors.cyan100};
`,buttonPrimaryBase=styled_components_browser_esm.c`
  background-color: ${props=>props.theme.colors.brandShade100};
  color: ${props=>props.theme.colors.white};
  border: 1px solid ${props=>props.theme.colors.brandShade100};

  :hover {
    background-color: ${props=>props.theme.colors.cyan100};
    border: 1px solid ${props=>props.theme.colors.cyan100};
  }

  :focus,
  :active {
    ${primaryActive}
  }

  :disabled {
    border: 1px solid ${props=>props.theme.colors.grey20};
    background-color: ${props=>props.theme.colors.grey20};
  }
`,secondaryActive=styled_components_browser_esm.c`
  border-color: ${props=>props.theme.colors.brandShade100};
  background-color: ${props=>props.theme.colors.brandShade40};
`,buttonSecondaryBase=styled_components_browser_esm.c`
  background-color: ${props=>props.theme.colors.white};
  border: 1px solid ${props=>props.theme.colors.grey20};
  color: ${props=>props.theme.colors.brandShade100};

  :hover {
    background-color: ${props=>props.theme.colors.brandShade20};
    border-color: ${props=>props.theme.colors.brandShade100};
  }

  :focus,
  :active {
    ${secondaryActive}
  }

  :disabled {
    color: ${props=>props.theme.colors.grey40};
    border-color: ${props=>props.theme.colors.grey20};
    background-color: ${props=>props.theme.colors.grey5};
  }
`,tertiaryActive=styled_components_browser_esm.c`
  border-color: ${props=>props.theme.colors.brandShade100};
  background-color: ${props=>props.theme.colors.systemShade30};
  color: ${props=>props.theme.colors.brandShade100};
`,buttonTertiaryBase=styled_components_browser_esm.c`
  background-color: ${props=>props.theme.colors.systemShade10};
  border: 1px solid ${props=>props.theme.colors.systemShade40};
  color: ${props=>props.theme.colors.systemShade80};

  :hover {
    background-color: ${props=>props.theme.colors.brandShade20};
    border-color: ${props=>props.theme.colors.brandShade80};
    color: ${props=>props.theme.colors.systemShade80};
  }

  :focus,
  :active {
    ${tertiaryActive}
  }

  :disabled {
    color: ${props=>props.theme.colors.systemShade40};
    border-color: ${props=>props.theme.colors.systemShade30};
    background-color: ${props=>props.theme.colors.systemShade10};
  }
`,buttonMinimalDisabled=styled_components_browser_esm.c`
  background: none;
  color: ${({theme:theme})=>theme.colors.grey20};
  border: none;
  :active,
  :hover,
  :focus {
    background: none;
    color: ${({theme:theme})=>theme.colors.grey20};
    border: none;
    cursor: not-allowed;
  }
`,buttonMinimalActive=styled_components_browser_esm.c`
  background: none;
  color: ${({theme:theme})=>theme.colors.brandPrimary};
  border: none;
  outline-visible: none;
`,buttonMinimal=styled_components_browser_esm.c`
  background: none;
  border: none;
  border-radius: 0;
  color: ${({theme:theme})=>theme.colors.grey40};
  padding-left: 2px;
  padding-right: 2px;
  ${Typography_headingStyles.h5}

  :active, :hover, :focus {
    ${buttonMinimalActive}
  }

  :disabled {
    ${buttonMinimalDisabled}
  }
`,buttonMinimalUnderline=styled_components_browser_esm.c`
  ${buttonMinimal}

  border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey40};

  :disabled {
    border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey20};
  }

  :hover,
  :active,
  :focus {
    border-bottom: 1px solid ${({theme:theme})=>theme.colors.brandPrimary};
  }
`,minimalBlockActive=styled_components_browser_esm.c`
  color: ${props=>props.theme.colors.white};
  background-color: ${props=>props.theme.colors.cyan100};
  border: none;
  &:hover {
    color: ${props=>props.theme.colors.white};
    background-color: ${props=>props.theme.colors.cyan80};
    border: none;
  }
`,minimalBLock=styled_components_browser_esm.c`
  padding: 0;
  height: 22px;
  min-height: 22px;
  max-height: 22px;
  min-width: 22px;
  max-width: 22px;
  width: 22px;
  color: ${props=>props.theme.colors.grey80};
  background-color: transparent;
  border: none;
  border-radius: 4px;
  :hover {
    color: ${props=>props.theme.colors.brandShade100};
    background-color: ${props=>props.theme.colors.brandShade20};
    border: none;
  }
  :active {
    &:hover {
      color: ${props=>props.theme.colors.white};
      background-color: ${props=>props.theme.colors.cyan80};
      border: none;
    }
  }
  :active,
  :focus {
    ${minimalBlockActive}
  }
  :disabled {
    background-color: ${props=>props.theme.colors.grey5};
    color: ${props=>props.theme.colors.grey80};
    border: none;
  }
  ${Icon_Icon} {
    ${Typography_headingStyles.h0}
  }
`,dangerPrimaryActive=styled_components_browser_esm.c`
  outline-visible: none;
  background-color: ${props=>props.theme.colors.red100};
  border: 1px solid ${props=>props.theme.colors.red100};
`,dangerPrimary=styled_components_browser_esm.c`
  :hover {
    background-color: ${props=>props.theme.colors.red100};
    border: 1px solid ${props=>props.theme.colors.red100};
  }

  :focus,
  :active {
    ${dangerPrimaryActive}
  }
`,dangerSecondaryTeritaryActive=styled_components_browser_esm.c`
  color: ${props=>props.theme.colors.red100};
  background-color: ${props=>props.theme.colors.red40};
  border: 1px solid ${props=>props.theme.colors.red100};
`,dangerSecondaryTertiary=styled_components_browser_esm.c`
  :focus {
    outline: none;
    background-color: ${props=>props.theme.colors.white};
    border: 1px solid ${props=>props.theme.colors.grey20};
  }

  :active {
    ${dangerSecondaryTeritaryActive}
  }

  :hover {
    color: ${props=>props.theme.colors.red100};
    background-color: ${props=>props.theme.colors.red20};
    border: 1px solid ${props=>props.theme.colors.red100};
  }
`,primaryDisabled=styled_components_browser_esm.c`
  border: 1px solid ${props=>props.theme.colors.grey20};
  background-color: ${props=>props.theme.colors.grey20};
  cursor: not-allowed;
`,secondaryDisabled=styled_components_browser_esm.c`
  color: ${props=>props.theme.colors.grey40};
  border-color: ${props=>props.theme.colors.grey20};
  background-color: ${props=>props.theme.colors.grey5};
  cursor: not-allowed;
`,tertiaryDisabled=styled_components_browser_esm.c`
  color: ${props=>props.theme.colors.grey40};
  border-color: ${props=>props.theme.colors.grey20};
  background-color: ${props=>props.theme.colors.grey5};
  cursor: not-allowed;
`,buttonFill=styled_components_browser_esm.c`
  width: 100%;
  & > * {
    flex: 1;
  }

  ${ButtonText} {
    width: 100%;
  }
`;function getIntentBase(props){switch(props.intent){case void 0:case"primary":return buttonPrimaryBase;case"secondary":return buttonSecondaryBase;case"tertiary":return buttonTertiaryBase;case"minimal":return buttonMinimal;case"minimalUnderline":return buttonMinimalUnderline;case"minimalBlock":return minimalBLock}}function getDangerIntent(props){switch(props.intent){case void 0:case"primary":return dangerPrimary;case"tertiary":case"secondary":return dangerSecondaryTertiary}}function getActiveIntent(props){if(props.danger)switch(props.intent){case void 0:case"primary":return dangerPrimaryActive;case"secondary":case"tertiary":return dangerSecondaryTeritaryActive}switch(props.intent){case void 0:case"primary":return primaryActive;case"secondary":return secondaryActive;case"tertiary":return tertiaryActive;case"minimal":return buttonMinimalActive;case"minimalBlock":return minimalBlockActive}}const getDisabledIntent=props=>{if(props.minimal)return buttonMinimalDisabled;switch(props.intent){case void 0:case"primary":return primaryDisabled;case"secondary":return secondaryDisabled;case"tertiary":return tertiaryDisabled;case"minimal":case"minimalUnderline":return buttonMinimalDisabled}},ButtonLoaderContainer=styled_components_browser_esm.d.div.attrs(dpNameProp("ButtonLoader"))`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: ${props=>props.theme.colors.brandPrimary};
  margin: 0 !important;
  opacity: 0.8;
`,buttonLoading=styled_components_browser_esm.c`
  &,
  :hover,
  :active,
  :focus {
    background-color: ${props=>props.theme.colors.grey10} !important;
    color: transparent !important;
    border-color: ${props=>props.theme.colors.grey10} !important;
  }
`,navButtonBase=styled_components_browser_esm.c`
  position: relative;
  transition: all 0.1s ease-in-out;
  display: inline-flex;
  flex-direction: column;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 4px 8px;
  vertical-align: middle;
  height: 55px;
  width: 90px;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;

  :disabled {
    cursor: not-allowed;
  }

  ${Icon_Icon} {
    font-size: 20px;
    flex: 1;
  }

  ${ButtonText} {
    ${Typography_paragraphStyled.p8}
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`,navButtonSmall=styled_components_browser_esm.c`
  height: 50px;
  width: 60px;
  min-height: 50px;
  min-width: 60px;
`,overlayButtonStyle=styled_components_browser_esm.c`
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    background-color 0.2s ease-in-out, fill 0.2s ease-in-out;
  align-items: center;
  background-color: ${props=>props.theme.colors.white};

  cursor: pointer;
  display: flex;
  justify-content: center;
  min-width: 25px;
  height: 22px;
  border-color: ${props=>props.theme.colors.grey40};
  border-style: solid;
  color: ${props=>props.theme.colors.grey80};

  &:hover {
    color: ${props=>props.theme.colors.brandShade100};
    background-color: ${props=>props.theme.colors.brandShade10};
    border-color: ${props=>props.theme.colors.brandShade100};

    ${Icon_Icon} {
      color: ${props=>props.theme.colors.brandShade100};
    }
  }

  &:active {
    color: ${props=>props.theme.colors.brandShade100};
    border-color: ${props=>props.theme.colors.brandShade100};
    background-color: ${props=>props.theme.colors.brandShade40};

    ${Icon_Icon} {
      color: ${props=>props.theme.colors.brandShade100};
    }
  }

  & > :not(:last-child) {
    margin-right: 7px;
  }
`,overlayButtonRightTop=styled_components_browser_esm.c`
  border-bottom-left-radius: 5px;
  border-bottom-width: 1px;
  border-left-width: 1px;

  border-top: 0;
  border-right: 0;
  top: 0;
  right: 0;
`,overlayButtonRightBottom=styled_components_browser_esm.c`
  border-top-left-radius: 5px;
  border-top-width: 1px;
  border-left-width: 1px;
  border-bottom: 0;
  border-right: 0;
  bottom: 0;
  right: 0;
`,overlayButtonLeftTop=styled_components_browser_esm.c`
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-left: 0;
  border-top: 0;
  top: 0;
  left: 0;
`,overlayButtonLeftBottom=styled_components_browser_esm.c`
  border-top-right-radius: 5px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left: 0;
  border-bottom: 0;
  top: 0;
  left: 0;
`,overlayButtonMiddleBottom=styled_components_browser_esm.c`
  border-radius: 5px;
  border-width: 1px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
`,overlayButtonMiddleTop=styled_components_browser_esm.c`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-top: 0;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`,buttonIconSubsection=styled_components_browser_esm.c`
  min-width: 18px;
  width: 18px;
  ${Icon_Icon} {
    width: 12px;
    height: 12px;
  }
`;function Spinner({size:size="large",color:color}){const{colors:colors}=Object(styled_components_browser_esm.e)(),spinnerSize=Object(index_module.b)(size).with("extra-small",(()=>8)).with("small",(()=>16)).with("medium",(()=>30)).with("large",(()=>40)).with("extra-large",(()=>60)).exhaustive();return react.createElement(StyledSpinner,{size:spinnerSize,color:"string"==typeof color?colors[color]:colors.cyan100,role:"alert","aria-live":"assertive"})}const StyledSpinner=styled_components_browser_esm.d.span`
  background: transparent !important;
  width: ${({size:size})=>size}px;
  height: ${({size:size})=>size}px;
  border-radius: 100%;
  border: 2px solid;
  border-color: ${({color:color})=>color};
  border-bottom-color: transparent;
  display: inline-block;
  animation: rotate 0.75s 0s infinite linear;
  animation-fill-mode: both;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,tspanType={tiny:"p11",small:"p11",normal:"p6",large:"p2",xlarge:"p2"},Button_Button=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function Button({text:text,icon:icon,rightIcon:rightIcon,minimal:minimal,noMinimalUnderline:noMinimalUnderline,loading:loading,disabled:disabled,danger:danger,fill:fill,active:active,alignText:alignText,type:type="button",...rest},ref){var _a;return react.createElement("button",{type:type,...dpNameProp("Button"),ref:ref,disabled:disabled||loading,"data-size":null!==(_a=null==rest?void 0:rest.size)&&void 0!==_a?_a:"normal",...rest},loading&&react.createElement(ButtonLoaderContainer,null,react.createElement(Spinner,{size:"small"})),isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{...icon}):icon,text&&react.createElement(ButtonText,{type:rest.size?tspanType[rest.size]:tspanType.normal},text),isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon)})))`
  text-align: ${props=>{var _a;return null!==(_a=props.alignText)&&void 0!==_a?_a:"left"}};
  ${buttonBaseCss}
  ${props=>"xlarge"===props.size&&buttonXLarge}
  ${props=>"large"===props.size&&buttonLarge}
  ${props=>"small"===props.size&&buttonSmall}
  ${props=>"tiny"===props.size&&buttonTiny}

  ${props=>getIntentBase({intent:calculateIntent(props)})}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.danger&&getDangerIntent({intent:calculatedIntent})}}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.active&&getActiveIntent({intent:calculatedIntent,danger:props.danger})}}
  ${props=>props.loading&&buttonLoading};
  ${props=>props.fill&&buttonFill}
`,Button_IconButton=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function IconButton({icon:icon,rightIcon:rightIcon,minimal:minimal,active:active,danger:danger,loading:loading,themeColor:themeColor,noMinimalUnderline:noMinimalUnderline,iconSubsection:iconSubsection,type:type="button",disabled:disabled,...rest},ref){return react.createElement("button",{...dpNameProp("IconButton"),ref:ref,type:type,...rest,disabled:disabled||loading},loading?react.createElement(ButtonLoaderContainer,null,react.createElement(Spinner,{size:"small"})):isAnyIcon(icon)?react.createElement(Icon_Icon,{themeColor:themeColor,icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{themeColor:themeColor,...icon}):icon)})))`
  height: 28px;
  max-height: 28px;
  width: 28px;
  ${buttonBaseCss}
  ${iconButtonBase}
  ${props=>"small"===props.size&&iconButtonSmall}
  ${props=>"tiny"===props.size&&buttonTiny}
  ${props=>"large"===props.size&&buttonLarge}
   ${props=>{const calculatedIntent=calculateIntent(props);return getIntentBase({intent:"minimalUnderline"===calculatedIntent?"minimal":calculatedIntent})}}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.danger&&getDangerIntent({intent:calculatedIntent})}}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.active&&getActiveIntent({intent:calculatedIntent})}}
  ${props=>props.loading&&buttonLoading};
  ${props=>props.iconSubsection&&buttonIconSubsection};
`,Button_AnchorButton=(Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function AvatarButton({avatarSize:avatarSize,type:type="button",...rest},ref){return react.createElement(Button_IconButton,{ref:ref,type:type,...rest})})))`
  width: ${({avatarSize:avatarSize})=>avatarSize+4}px;
  height: ${({avatarSize:avatarSize})=>avatarSize+4}px;
  max-height: ${({avatarSize:avatarSize})=>avatarSize+4}px;
  min-height: ${({avatarSize:avatarSize})=>avatarSize+4}px;
  max-width: ${({avatarSize:avatarSize})=>avatarSize+4}px;
  min-width: ${({avatarSize:avatarSize})=>avatarSize+4}px;
  border: 2px solid ${({theme:theme})=>theme.colors.white};
  border-radius: 50%;
  position: relative;
  :hover {
    border: 2px solid ${({theme:theme})=>theme.colors.brandShade60};
  }

  ${({active:active,theme:theme})=>active&&styled_components_browser_esm.c`
      border: 2px solid ${theme.colors.cyan100};
    `};

  :active,
  :focus {
    border: 2px solid ${({theme:theme})=>theme.colors.cyan100};
  }

  ${({disabled:disabled})=>disabled?"cursor: not-allowed;":""}
  :disabled {
    cursor: not-allowed;
  }

  > div {
    flex: 1;
    max-height: ${({avatarSize:avatarSize})=>avatarSize}px;
    min-height: ${({avatarSize:avatarSize})=>avatarSize}px;
    max-width: ${({avatarSize:avatarSize})=>avatarSize}px;
    min-width: ${({avatarSize:avatarSize})=>avatarSize}px;
  }
  & > :not(:last-child) {
    margin-right: 0;
  }
`,Object(styled_components_browser_esm.d)(Button_IconButton)`
  max-height: initial;
  min-height: initial;
  max-width: initial;
  min-width: initial;
  width: auto;
  height: auto;
`,Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function AnchorButton({icon:icon,rightIcon:rightIcon,text:text,loading:loading,fill:fill,active:active,danger:danger,href:href,onClick:onClick,disabled:disabled,alignText:alignText,...rest},ref){return react.createElement("a",{...dpNameProp("AnchorButton"),ref:ref,href:disabled?void 0:href,onClick:e=>{!disabled&&(null==onClick||onClick(e))},...rest},loading&&react.createElement(ButtonLoaderContainer,null,react.createElement(Spinner,{size:"small"})),isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{...icon}):icon,text&&react.createElement(ButtonText,{type:rest.size?tspanType[rest.size]:tspanType.normal},text),isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon)})))`
  text-align: ${props=>{var _a;return null!==(_a=props.alignText)&&void 0!==_a?_a:"left"}};
  text-decoration: none;
  ${buttonBaseCss}
  ${props=>"large"===props.size&&buttonLarge}
  ${props=>"small"===props.size&&buttonSmall}
  ${props=>"tiny"===props.size&&buttonTiny}
  ${props=>getIntentBase({intent:calculateIntent(props)})}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.danger&&getDangerIntent({intent:calculatedIntent})}}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.active&&getActiveIntent({intent:calculatedIntent})}}
  ${props=>props.disabled&&getDisabledIntent(props)};
  :active,
  :focus,
  :hover {
    ${props=>props.disabled&&getDisabledIntent(props)};
  }
  ${props=>props.fill&&buttonFill}
  ${props=>props.loading&&buttonLoading};
`),Button_OverlayButton=(Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function LabelButton({children:children,icon:icon,rightIcon:rightIcon,fill:fill,text:text,loading:loading,active:active,danger:danger,minimal:minimal,noMinimalUnderline:noMinimalUnderline,disabled:disabled,alignText:alignText,onClick:onClick,...rest},ref){return react.createElement("label",{...dpNameProp("LabelButton"),ref:ref,onClick:e=>{disabled?e.preventDefault():null==onClick||onClick(e)},...rest},loading&&react.createElement(ButtonLoaderContainer,null,react.createElement(Spinner,{size:"small"})),children,isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{...icon}):icon,text&&react.createElement(ButtonText,{type:rest.size?tspanType[rest.size]:tspanType.normal},text),isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon)})))`
  text-align: ${props=>{var _a;return null!==(_a=props.alignText)&&void 0!==_a?_a:"left"}};
  ${buttonBaseCss}
  ${props=>"large"===props.size&&buttonLarge}
  ${props=>"small"===props.size&&buttonSmall}
  ${props=>"tiny"===props.size&&buttonTiny}
  ${props=>getIntentBase({intent:calculateIntent(props)})}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.danger&&getDangerIntent({intent:calculatedIntent})}}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.active&&getActiveIntent({intent:calculatedIntent})}}
  ${props=>props.disabled&&getDisabledIntent(props)};
  :active,
  :focus,
  :hover {
    ${props=>props.disabled&&getDisabledIntent(props)};
  }
  ${props=>props.fill&&buttonFill}
  ${props=>props.loading&&buttonLoading};
`,styled_components_browser_esm.d.input.attrs({type:"file"})`
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`,Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function NavButton({text:text,type:type="button",icon:icon,active:active,alignText:alignText,reverse:reverse=!1,...rest},ref){return react.createElement("button",{type:type,ref:ref,...dpNameProp("NavButton"),...rest},reverse&&react.createElement(react.Fragment,null,text&&react.createElement(ButtonText,{overflow:"ellipsis",type:rest.size?tspanType[rest.size]:tspanType.normal},text),isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{...icon}):icon),!reverse&&react.createElement(react.Fragment,null,isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{...icon}):icon,text&&react.createElement(ButtonText,{overflow:"ellipsis",type:rest.size?tspanType[rest.size]:tspanType.normal},text)))})))`
  ${navButtonBase}
  ${props=>getIntentBase({intent:calculateIntent(props)})}
  ${props=>"small"===props.size&&navButtonSmall}
  ${props=>{const calculatedIntent=calculateIntent(props);return props.active&&getActiveIntent({intent:calculatedIntent})}}
`,Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function OverlayButton({icon:icon,active:active,danger:danger,loading:loading,text:text,type:type="button",alignText:alignText,placement:placement,rightIcon:rightIcon,...rest},ref){return react.createElement("button",{type:type,...dpNameProp("OverlayButton"),ref:ref,...rest},loading&&react.createElement(ButtonLoaderContainer,null,react.createElement(Spinner,{size:"small"})),isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon,size:10}):isIconProps(icon)?react.createElement(Icon_Icon,{size:10,...icon}):icon,text&&react.createElement(ButtonText,{type:tspanType.normal},text),isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon,size:10}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{size:10,...rightIcon}):rightIcon)})))`
  text-align: ${props=>{var _a;return null!==(_a=props.alignText)&&void 0!==_a?_a:"left"}};
  ${overlayButtonStyle}
  ${props=>{var _a;return Object(index_module.b)(null!==(_a=props.placement)&&void 0!==_a?_a:"right-top").with("right-top",(()=>overlayButtonRightTop)).with("right-bottom",(()=>overlayButtonRightBottom)).with("left-top",(()=>overlayButtonLeftTop)).with("left-bottom",(()=>overlayButtonLeftBottom)).with("middle-bottom",(()=>overlayButtonMiddleBottom)).with("middle-top",(()=>overlayButtonMiddleTop)).exhaustive()}}

  position: ${({position:position})=>position||"absolute"};
`),calculateIntent=({minimal:minimal,noMinimalUnderline:noMinimalUnderline,intent:intent})=>{const newIntent=minimal?noMinimalUnderline?"minimal":"minimalUnderline":intent;return null!=newIntent?newIntent:"primary"},getBackground=({theme:theme,...props})=>Object(index_module.b)(props).with({selected:!0,intent:"tertiary"},(()=>theme.colors.grey100)).with({selected:!0,intent:"secondary"},(()=>theme.colors.brandShade10)).with({selected:!0},(()=>theme.colors.cyan100)).with({intent:"tertiary"},(()=>theme.colors.dark100)).with({intent:"secondary"},(()=>theme.colors.systemShade30)).otherwise((()=>theme.colors.grey100)),getHeight=({theme:theme,...props})=>Object(index_module.b)(props).with({size:"xlarge"},(()=>"26px")).with({size:"small"},{size:"tiny"},(()=>"22px")).otherwise((()=>"24px")),GroupByStyledButton=styled_components_browser_esm.d.button`
  text-align: ${props=>{var _a;return null!==(_a=props.alignText)&&void 0!==_a?_a:"left"}};
  ${buttonBaseCss}
  ${getIntentBase}
  ${props=>props.fill&&buttonFill}
  border-radius: 3px;
  border: none;
  height: unset;
  padding: ${props=>Object(index_module.b)(props).with({size:"xlarge"},(()=>"6px 12px")).with({size:"large"},(()=>"5px 10px")).with({size:"small"},(()=>"4px 5px")).with({size:"tiny"},(()=>"4px 3px")).otherwise((()=>"5px 6px"))};
  height: ${getHeight};
  max-height: ${getHeight};
  color: ${({theme:theme,...props})=>Object(index_module.b)(props).with({intent:"tertiary",selected:!0},(()=>theme.colors.white)).with({intent:"secondary",selected:!0},(()=>theme.colors.brandShade100)).with({intent:"tertiary"},(()=>theme.colors.grey40)).with({intent:"secondary"},(()=>theme.colors.systemShade80)).otherwise((()=>theme.colors.white))};
  width: 100%;
  &,
  &:focus {
    background: ${getBackground};
  }

  &:hover,
  &:focus-visible {
    border: none;
    outline: none;
    background: ${({theme:theme,...props})=>Object(index_module.b)(props).with({intent:"tertiary"},(()=>theme.colors.dark40)).with({intent:"secondary"},(()=>theme.colors.systemShade20)).otherwise((()=>theme.colors.grey80))};
    ${({theme:theme,intent:intent})=>"tertiary"===intent&&styled_components_browser_esm.c`
        color: ${theme.colors.white};
      `}
  }
`,ButtonWrapper=styled_components_browser_esm.d.div`
  border-radius: ${({side:side})=>Object(index_module.b)(side).with("left",(()=>"6px 0 0 6px")).with("right",(()=>"0 6px 6px 0")).otherwise((()=>0))};
  padding: 3px;
  width: 100%;
  ${props=>props.fill&&styled_components_browser_esm.c`
      background: ${getBackground(props)};
    `};
`;Object(react.forwardRef)((({icon:icon,text:text,...props},ref)=>react.createElement(ButtonWrapper,{fill:props.fill,side:props.side,intent:props.intent},react.createElement(GroupByStyledButton,{ref:ref,...props},isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{...icon}):icon,text&&react.createElement(ButtonText,{type:"p4",style:{fontFamily:"Inter",fontSize:11}},text)))));var free_solid_svg_icons=__webpack_require__("./node_modules/.pnpm/@fortawesome+free-solid-svg-icons@6.3.0/node_modules/@fortawesome/free-solid-svg-icons/index.mjs");const BYTE_UNITS=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],BIBYTE_UNITS=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],BIT_UNITS=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],BIBIT_UNITS=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],toLocaleString=(number,locale,options)=>{let result=number;return"string"==typeof locale||Array.isArray(locale)?result=number.toLocaleString(locale,options):!0!==locale&&void 0===options||(result=number.toLocaleString(void 0,options)),result};const numToPx=input=>"number"==typeof input?input+"px":input,growShrinkToVal=input=>!0===input?1:!1===input?0:input||0,StackItem=styled_components_browser_esm.d.div`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;

  ${props=>props.flex&&`\n    flex: ${props.flex};\n  `}
  ${props=>props.justifySelf&&`\n    justify-self: ${props.justifySelf};\n  `}

  ${props=>props.alignSelf&&`\n    align-self: ${props.alignSelf};\n  `}

  ${props=>props.grow&&`\n    flex-grow: ${growShrinkToVal(props.grow)};\n  `}
  ${props=>props.basis&&`\n    flex-basis: ${props.basis};\n  `}
  ${props=>void 0!==props.shrink&&`\n    flex-shrink: ${growShrinkToVal(props.shrink)};\n  `}
  ${props=>props.padding&&`\n    padding: ${numToPx(props.padding)};\n  `}
  ${props=>props.gap&&`\n     margin: ${numToPx(props.gap)};\n  `}
  ${props=>props.fixedHeight&&`\n     height: ${numToPx(props.fixedHeight)};\n  `}
  ${props=>void 0!==props.basis&&`\n    flex-basis: ${props.basis};\n  `}
`,Stack=styled_components_browser_esm.d.div`
  margin: 0;
  padding: 0;
  border: 0;
  border-bottom: ${props=>props.borderBottom?`1px solid ${props.theme.colors.grey20}`:0};
  box-sizing: border-box;
  outline: none;
  list-style: none;
  flex-direction: ${props=>props.vertical?props.reverse?"column-reverse":"column":props.reverse?"row-reverse":"row"};
  display: ${props=>props.inline?"inline-flex":"flex"};
  flex-wrap: ${props=>{return"reverse"===(wrap=props.wrap)?"wrap-reverse":wrap||"nowrap";var wrap}};
  justify-content: ${props=>(align=>{switch(align){case"start":return"flex-start";case"end":return"flex-end"}return align||"flex-start"})(props.justify)};
  align-items: ${props=>(align=>{switch(align){case"start":return"flex-start";case"end":return"flex-end"}return align||"flex-start"})(props.align)};
  ${props=>void 0!==props.maxWidth&&`\n    max-width: ${numToPx(props.maxWidth)};\n  `}
  ${props=>void 0!==props.maxHeight&&`\n    max-height: ${numToPx(props.maxHeight)};\n  `}
  ${props=>void 0!==props.padding&&`\n    padding: ${numToPx(props.padding)};\n  `}
  ${props=>void 0!==props.grow&&`\n    flex-grow: ${growShrinkToVal(props.grow)};\n  `}
  ${props=>void 0!==props.basis&&`\n    flex-basis: ${props.basis.toString()};\n  `}
  ${props=>void 0!==props.shrink&&`\n    flex-shrink: ${growShrinkToVal(props.shrink)};\n  `}
  ${props=>void 0!==props.fixedHeight&&`\n     height: ${numToPx(props.fixedHeight)};\n  `}

  ${props=>props.overflow&&`\n     overflow: ${props.overflow};\n  `}
  ${props=>void 0!==props.gap&&styled_components_browser_esm.c`
      gap: ${numToPx(props.gap)};
    `}
`;Stack.displayName="Stack";styled_components_browser_esm.d.div`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: none;
  flex-grow: 1;
  flex-shrink: 1;
  ${({width:width})=>width&&styled_components_browser_esm.c`
      width: ${"string"==typeof width?width:`${width}px`};
    `};
`;const ToolbarStack=Object(styled_components_browser_esm.d)(Stack).attrs((props=>({...props,align:"center",justify:"start"})))``,ToolbarItem=Object(styled_components_browser_esm.d)(StackItem).attrs((props=>({...props,shrink:1})))``;Object.assign(ToolbarStack,{Item:ToolbarItem,Spacer:function ToolbarSpacer(){return react.createElement(StackItem,{grow:1}," ")}}),styled_components_browser_esm.d.div`
  ${Typography_paragraphStyled.p6}
  box-sizing: border-box;
  display: flex;
  background-color: ${({theme:theme})=>theme.colors.grey5};
  color: ${({theme:theme})=>theme.colors.grey80};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 20px;
  width: fit-content;
  padding: 2px 8px;
  gap: 6px;
`;const InlineLoadingSpinner=()=>react.createElement(Spinner,{size:"small",color:"grey80"}),StyledContainer=Object(styled_components_browser_esm.d)(Stack)`
  background-color: ${({theme:theme,variant:variant})=>"default"===variant?theme.colors.brandShade20:theme.colors.white};
  color: ${props=>props.theme.colors.brandShade100};
  border-radius: 10px;
  padding: 2px 10px;
  height: 20px;
  max-width: ${({maxWidth:maxWidth})=>null!=maxWidth?maxWidth:"250px"};
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: 11px;
  color: ${props=>props.theme.colors.brandShade100};
  overflow: hidden;
`,AttachmentLink=styled_components_browser_esm.d.a`
  color: ${props=>props.theme.colors.brandShade100};
  text-decoration: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-size: 11px;
  overflow: hidden;
  gap: 6px;
`,Name=Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p6"})`
  color: ${({theme:theme,variant:variant})=>"default"===variant?theme.colors.cyan100:theme.colors.brandShade100};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`,Size=Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p8"})`
  white-space: nowrap;
`,AttachmentTag_AttachmentTag=Object(react.forwardRef)((function AttachmentTag({filename:filename,fileSize:fileSize,icon:icon,onClose:onClose,withClose:withClose,variant:variant="default",maxWidth:maxWidth,isLoading:isLoading,...rest},ref){const displayFileSize=fileSize?function prettyBytes(number,options){if(!Number.isFinite(number))throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);const UNITS=(options={bits:!1,binary:!1,...options}).bits?options.binary?BIBIT_UNITS:BIT_UNITS:options.binary?BIBYTE_UNITS:BYTE_UNITS;if(options.signed&&0===number)return` 0 ${UNITS[0]}`;const isNegative=number<0,prefix=isNegative?"-":options.signed?"+":"";let localeOptions;if(isNegative&&(number=-number),void 0!==options.minimumFractionDigits&&(localeOptions={minimumFractionDigits:options.minimumFractionDigits}),void 0!==options.maximumFractionDigits&&(localeOptions={maximumFractionDigits:options.maximumFractionDigits,...localeOptions}),number<1)return prefix+toLocaleString(number,options.locale,localeOptions)+" "+UNITS[0];const exponent=Math.min(Math.floor(options.binary?Math.log(number)/Math.log(1024):Math.log10(number)/3),UNITS.length-1);return number/=(options.binary?1024:1e3)**exponent,localeOptions||(number=number.toPrecision(3)),prefix+toLocaleString(Number(number),options.locale,localeOptions)+" "+UNITS[exponent]}(fileSize,{locale:!0}):void 0;return react.createElement(StyledContainer,{...dpNameProp("AttachmentTag"),gap:6,variant:variant,style:{maxWidth:maxWidth}},react.createElement(AttachmentLink,{ref:ref,...rest,title:filename,target:"_blank",rel:"noopener nofollow noreferrer"},react.createElement(Icon_Icon,{icon:icon}),react.createElement(Name,{variant:variant},filename),react.createElement(Size,null,displayFileSize)),Object(index_module.b)({withClose:withClose,isLoading:isLoading}).with({isLoading:!0},(()=>react.createElement(InlineLoadingSpinner,null))).with({withClose:!0},(()=>react.createElement(Button_IconButton,{role:"button","aria-label":"close-attachment",minimal:!0,onClick:onClose,icon:free_solid_svg_icons.x}))).otherwise((()=>null)))}));var lib_popper=__webpack_require__("./node_modules/.pnpm/@popperjs+core@2.11.2/node_modules/@popperjs/core/lib/popper.js"),applyStyles=__webpack_require__("./node_modules/.pnpm/@popperjs+core@2.11.2/node_modules/@popperjs/core/lib/modifiers/applyStyles.js"),TOUCH_OPTIONS={passive:!0,capture:!0},TIPPY_DEFAULT_APPEND_TO=function TIPPY_DEFAULT_APPEND_TO(){return document.body};function getValueAtIndexOrReturn(value,index,defaultValue){if(Array.isArray(value)){var v=value[index];return null==v?Array.isArray(defaultValue)?defaultValue[index]:defaultValue:v}return value}function tippy_esm_isType(value,type){var str={}.toString.call(value);return 0===str.indexOf("[object")&&str.indexOf(type+"]")>-1}function invokeWithArgsOrReturn(value,args){return"function"==typeof value?value.apply(void 0,args):value}function debounce(fn,ms){return 0===ms?fn:function(arg){clearTimeout(timeout),timeout=setTimeout((function(){fn(arg)}),ms)};var timeout}function normalizeToArray(value){return[].concat(value)}function pushIfUnique(arr,value){-1===arr.indexOf(value)&&arr.push(value)}function getBasePlacement(placement){return placement.split("-")[0]}function arrayFrom(value){return[].slice.call(value)}function removeUndefinedProps(obj){return Object.keys(obj).reduce((function(acc,key){return void 0!==obj[key]&&(acc[key]=obj[key]),acc}),{})}function div(){return document.createElement("div")}function isElement(value){return["Element","Fragment"].some((function(type){return tippy_esm_isType(value,type)}))}function isMouseEvent(value){return tippy_esm_isType(value,"MouseEvent")}function isReferenceElement(value){return!(!value||!value._tippy||value._tippy.reference!==value)}function getArrayOfElements(value){return isElement(value)?[value]:function isNodeList(value){return tippy_esm_isType(value,"NodeList")}(value)?arrayFrom(value):Array.isArray(value)?value:arrayFrom(document.querySelectorAll(value))}function setTransitionDuration(els,value){els.forEach((function(el){el&&(el.style.transitionDuration=value+"ms")}))}function setVisibilityState(els,state){els.forEach((function(el){el&&el.setAttribute("data-state",state)}))}function getOwnerDocument(elementOrElements){var _element$ownerDocumen,element=normalizeToArray(elementOrElements)[0];return null!=element&&null!=(_element$ownerDocumen=element.ownerDocument)&&_element$ownerDocumen.body?element.ownerDocument:document}function updateTransitionEndListener(box,action,listener){var method=action+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(event){box[method](event,listener)}))}function actualContains(parent,child){for(var target=child;target;){var _target$getRootNode;if(parent.contains(target))return!0;target=null==target.getRootNode||null==(_target$getRootNode=target.getRootNode())?void 0:_target$getRootNode.host}return!1}var currentInput={isTouch:!1},lastMouseMoveTime=0;function onDocumentTouchStart(){currentInput.isTouch||(currentInput.isTouch=!0,window.performance&&document.addEventListener("mousemove",onDocumentMouseMove))}function onDocumentMouseMove(){var now=performance.now();now-lastMouseMoveTime<20&&(currentInput.isTouch=!1,document.removeEventListener("mousemove",onDocumentMouseMove)),lastMouseMoveTime=now}function onWindowBlur(){var activeElement=document.activeElement;if(isReferenceElement(activeElement)){var instance=activeElement._tippy;activeElement.blur&&!instance.state.isVisible&&activeElement.blur()}}var isIE11=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto;var pluginProps={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},tippy_esm_defaultProps=Object.assign({appendTo:TIPPY_DEFAULT_APPEND_TO,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function onAfterUpdate(){},onBeforeUpdate:function onBeforeUpdate(){},onCreate:function onCreate(){},onDestroy:function onDestroy(){},onHidden:function onHidden(){},onHide:function onHide(){},onMount:function onMount(){},onShow:function onShow(){},onShown:function onShown(){},onTrigger:function onTrigger(){},onUntrigger:function onUntrigger(){},onClickOutside:function onClickOutside(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},pluginProps,{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),defaultKeys=Object.keys(tippy_esm_defaultProps);function getExtendedPassedProps(passedProps){var pluginProps=(passedProps.plugins||[]).reduce((function(acc,plugin){var _name,name=plugin.name,defaultValue=plugin.defaultValue;name&&(acc[name]=void 0!==passedProps[name]?passedProps[name]:null!=(_name=tippy_esm_defaultProps[name])?_name:defaultValue);return acc}),{});return Object.assign({},passedProps,pluginProps)}function evaluateProps(reference,props){var out=Object.assign({},props,{content:invokeWithArgsOrReturn(props.content,[reference])},props.ignoreAttributes?{}:function getDataAttributeProps(reference,plugins){return(plugins?Object.keys(getExtendedPassedProps(Object.assign({},tippy_esm_defaultProps,{plugins:plugins}))):defaultKeys).reduce((function(acc,key){var valueAsString=(reference.getAttribute("data-tippy-"+key)||"").trim();if(!valueAsString)return acc;if("content"===key)acc[key]=valueAsString;else try{acc[key]=JSON.parse(valueAsString)}catch(e){acc[key]=valueAsString}return acc}),{})}(reference,props.plugins));return out.aria=Object.assign({},tippy_esm_defaultProps.aria,out.aria),out.aria={expanded:"auto"===out.aria.expanded?props.interactive:out.aria.expanded,content:"auto"===out.aria.content?props.interactive?null:"describedby":out.aria.content},out}function dangerouslySetInnerHTML(element,html){element.innerHTML=html}function createArrowElement(value){var arrow=div();return!0===value?arrow.className="tippy-arrow":(arrow.className="tippy-svg-arrow",isElement(value)?arrow.appendChild(value):dangerouslySetInnerHTML(arrow,value)),arrow}function tippy_esm_setContent(content,props){isElement(props.content)?(dangerouslySetInnerHTML(content,""),content.appendChild(props.content)):"function"!=typeof props.content&&(props.allowHTML?dangerouslySetInnerHTML(content,props.content):content.textContent=props.content)}function getChildren(popper){var box=popper.firstElementChild,boxChildren=arrayFrom(box.children);return{box:box,content:boxChildren.find((function(node){return node.classList.contains("tippy-content")})),arrow:boxChildren.find((function(node){return node.classList.contains("tippy-arrow")||node.classList.contains("tippy-svg-arrow")})),backdrop:boxChildren.find((function(node){return node.classList.contains("tippy-backdrop")}))}}function tippy_esm_render(instance){var popper=div(),box=div();box.className="tippy-box",box.setAttribute("data-state","hidden"),box.setAttribute("tabindex","-1");var content=div();function onUpdate(prevProps,nextProps){var _getChildren=getChildren(popper),box=_getChildren.box,content=_getChildren.content,arrow=_getChildren.arrow;nextProps.theme?box.setAttribute("data-theme",nextProps.theme):box.removeAttribute("data-theme"),"string"==typeof nextProps.animation?box.setAttribute("data-animation",nextProps.animation):box.removeAttribute("data-animation"),nextProps.inertia?box.setAttribute("data-inertia",""):box.removeAttribute("data-inertia"),box.style.maxWidth="number"==typeof nextProps.maxWidth?nextProps.maxWidth+"px":nextProps.maxWidth,nextProps.role?box.setAttribute("role",nextProps.role):box.removeAttribute("role"),prevProps.content===nextProps.content&&prevProps.allowHTML===nextProps.allowHTML||tippy_esm_setContent(content,instance.props),nextProps.arrow?arrow?prevProps.arrow!==nextProps.arrow&&(box.removeChild(arrow),box.appendChild(createArrowElement(nextProps.arrow))):box.appendChild(createArrowElement(nextProps.arrow)):arrow&&box.removeChild(arrow)}return content.className="tippy-content",content.setAttribute("data-state","hidden"),tippy_esm_setContent(content,instance.props),popper.appendChild(box),box.appendChild(content),onUpdate(instance.props,instance.props),{popper:popper,onUpdate:onUpdate}}tippy_esm_render.$$tippy=!0;var idCounter=1,mouseMoveListeners=[],mountedInstances=[];function createTippy(reference,passedProps){var showTimeout,hideTimeout,scheduleHideAnimationFrame,lastTriggerEvent,currentTransitionEndListener,onFirstUpdate,currentTarget,props=evaluateProps(reference,Object.assign({},tippy_esm_defaultProps,getExtendedPassedProps(removeUndefinedProps(passedProps)))),isVisibleFromClick=!1,didHideDueToDocumentMouseDown=!1,didTouchMove=!1,ignoreOnFirstUpdate=!1,listeners=[],debouncedOnMouseMove=debounce(onMouseMove,props.interactiveDebounce),id=idCounter++,plugins=function unique(arr){return arr.filter((function(item,index){return arr.indexOf(item)===index}))}(props.plugins),instance={id:id,reference:reference,popper:div(),popperInstance:null,props:props,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:plugins,clearDelayTimeouts:function clearDelayTimeouts(){clearTimeout(showTimeout),clearTimeout(hideTimeout),cancelAnimationFrame(scheduleHideAnimationFrame)},setProps:function setProps(partialProps){0;if(instance.state.isDestroyed)return;invokeHook("onBeforeUpdate",[instance,partialProps]),removeListeners();var prevProps=instance.props,nextProps=evaluateProps(reference,Object.assign({},prevProps,removeUndefinedProps(partialProps),{ignoreAttributes:!0}));instance.props=nextProps,addListeners(),prevProps.interactiveDebounce!==nextProps.interactiveDebounce&&(cleanupInteractiveMouseListeners(),debouncedOnMouseMove=debounce(onMouseMove,nextProps.interactiveDebounce));prevProps.triggerTarget&&!nextProps.triggerTarget?normalizeToArray(prevProps.triggerTarget).forEach((function(node){node.removeAttribute("aria-expanded")})):nextProps.triggerTarget&&reference.removeAttribute("aria-expanded");handleAriaExpandedAttribute(),handleStyles(),onUpdate&&onUpdate(prevProps,nextProps);instance.popperInstance&&(createPopperInstance(),getNestedPopperTree().forEach((function(nestedPopper){requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate)})));invokeHook("onAfterUpdate",[instance,partialProps])},setContent:function setContent(content){instance.setProps({content:content})},show:function show(){0;var isAlreadyVisible=instance.state.isVisible,isDestroyed=instance.state.isDestroyed,isDisabled=!instance.state.isEnabled,isTouchAndTouchDisabled=currentInput.isTouch&&!instance.props.touch,duration=getValueAtIndexOrReturn(instance.props.duration,0,tippy_esm_defaultProps.duration);if(isAlreadyVisible||isDestroyed||isDisabled||isTouchAndTouchDisabled)return;if(getCurrentTarget().hasAttribute("disabled"))return;if(invokeHook("onShow",[instance],!1),!1===instance.props.onShow(instance))return;instance.state.isVisible=!0,getIsDefaultRenderFn()&&(popper.style.visibility="visible");handleStyles(),addDocumentPress(),instance.state.isMounted||(popper.style.transition="none");if(getIsDefaultRenderFn()){var _getDefaultTemplateCh2=getDefaultTemplateChildren(),box=_getDefaultTemplateCh2.box,content=_getDefaultTemplateCh2.content;setTransitionDuration([box,content],0)}onFirstUpdate=function onFirstUpdate(){var _instance$popperInsta2;if(instance.state.isVisible&&!ignoreOnFirstUpdate){if(ignoreOnFirstUpdate=!0,popper.offsetHeight,popper.style.transition=instance.props.moveTransition,getIsDefaultRenderFn()&&instance.props.animation){var _getDefaultTemplateCh3=getDefaultTemplateChildren(),_box=_getDefaultTemplateCh3.box,_content=_getDefaultTemplateCh3.content;setTransitionDuration([_box,_content],duration),setVisibilityState([_box,_content],"visible")}handleAriaContentAttribute(),handleAriaExpandedAttribute(),pushIfUnique(mountedInstances,instance),null==(_instance$popperInsta2=instance.popperInstance)||_instance$popperInsta2.forceUpdate(),invokeHook("onMount",[instance]),instance.props.animation&&getIsDefaultRenderFn()&&function onTransitionedIn(duration,callback){onTransitionEnd(duration,callback)}(duration,(function(){instance.state.isShown=!0,invokeHook("onShown",[instance])}))}},function mount(){var parentNode,appendTo=instance.props.appendTo,node=getCurrentTarget();parentNode=instance.props.interactive&&appendTo===TIPPY_DEFAULT_APPEND_TO||"parent"===appendTo?node.parentNode:invokeWithArgsOrReturn(appendTo,[node]);parentNode.contains(popper)||parentNode.appendChild(popper);instance.state.isMounted=!0,createPopperInstance(),!1}()},hide:function hide(){0;var isAlreadyHidden=!instance.state.isVisible,isDestroyed=instance.state.isDestroyed,isDisabled=!instance.state.isEnabled,duration=getValueAtIndexOrReturn(instance.props.duration,1,tippy_esm_defaultProps.duration);if(isAlreadyHidden||isDestroyed||isDisabled)return;if(invokeHook("onHide",[instance],!1),!1===instance.props.onHide(instance))return;instance.state.isVisible=!1,instance.state.isShown=!1,ignoreOnFirstUpdate=!1,isVisibleFromClick=!1,getIsDefaultRenderFn()&&(popper.style.visibility="hidden");if(cleanupInteractiveMouseListeners(),removeDocumentPress(),handleStyles(!0),getIsDefaultRenderFn()){var _getDefaultTemplateCh4=getDefaultTemplateChildren(),box=_getDefaultTemplateCh4.box,content=_getDefaultTemplateCh4.content;instance.props.animation&&(setTransitionDuration([box,content],duration),setVisibilityState([box,content],"hidden"))}handleAriaContentAttribute(),handleAriaExpandedAttribute(),instance.props.animation?getIsDefaultRenderFn()&&function onTransitionedOut(duration,callback){onTransitionEnd(duration,(function(){!instance.state.isVisible&&popper.parentNode&&popper.parentNode.contains(popper)&&callback()}))}(duration,instance.unmount):instance.unmount()},hideWithInteractivity:function hideWithInteractivity(event){0;getDocument().addEventListener("mousemove",debouncedOnMouseMove),pushIfUnique(mouseMoveListeners,debouncedOnMouseMove),debouncedOnMouseMove(event)},enable:function enable(){instance.state.isEnabled=!0},disable:function disable(){instance.hide(),instance.state.isEnabled=!1},unmount:function unmount(){0;instance.state.isVisible&&instance.hide();if(!instance.state.isMounted)return;destroyPopperInstance(),getNestedPopperTree().forEach((function(nestedPopper){nestedPopper._tippy.unmount()})),popper.parentNode&&popper.parentNode.removeChild(popper);mountedInstances=mountedInstances.filter((function(i){return i!==instance})),instance.state.isMounted=!1,invokeHook("onHidden",[instance])},destroy:function destroy(){0;if(instance.state.isDestroyed)return;instance.clearDelayTimeouts(),instance.unmount(),removeListeners(),delete reference._tippy,instance.state.isDestroyed=!0,invokeHook("onDestroy",[instance])}};if(!props.render)return instance;var _props$render=props.render(instance),popper=_props$render.popper,onUpdate=_props$render.onUpdate;popper.setAttribute("data-tippy-root",""),popper.id="tippy-"+instance.id,instance.popper=popper,reference._tippy=instance,popper._tippy=instance;var pluginsHooks=plugins.map((function(plugin){return plugin.fn(instance)})),hasAriaExpanded=reference.hasAttribute("aria-expanded");return addListeners(),handleAriaExpandedAttribute(),handleStyles(),invokeHook("onCreate",[instance]),props.showOnCreate&&scheduleShow(),popper.addEventListener("mouseenter",(function(){instance.props.interactive&&instance.state.isVisible&&instance.clearDelayTimeouts()})),popper.addEventListener("mouseleave",(function(){instance.props.interactive&&instance.props.trigger.indexOf("mouseenter")>=0&&getDocument().addEventListener("mousemove",debouncedOnMouseMove)})),instance;function getNormalizedTouchSettings(){var touch=instance.props.touch;return Array.isArray(touch)?touch:[touch,0]}function getIsCustomTouchBehavior(){return"hold"===getNormalizedTouchSettings()[0]}function getIsDefaultRenderFn(){var _instance$props$rende;return!(null==(_instance$props$rende=instance.props.render)||!_instance$props$rende.$$tippy)}function getCurrentTarget(){return currentTarget||reference}function getDocument(){var parent=getCurrentTarget().parentNode;return parent?getOwnerDocument(parent):document}function getDefaultTemplateChildren(){return getChildren(popper)}function getDelay(isShow){return instance.state.isMounted&&!instance.state.isVisible||currentInput.isTouch||lastTriggerEvent&&"focus"===lastTriggerEvent.type?0:getValueAtIndexOrReturn(instance.props.delay,isShow?0:1,tippy_esm_defaultProps.delay)}function handleStyles(fromHide){void 0===fromHide&&(fromHide=!1),popper.style.pointerEvents=instance.props.interactive&&!fromHide?"":"none",popper.style.zIndex=""+instance.props.zIndex}function invokeHook(hook,args,shouldInvokePropsHook){var _instance$props;(void 0===shouldInvokePropsHook&&(shouldInvokePropsHook=!0),pluginsHooks.forEach((function(pluginHooks){pluginHooks[hook]&&pluginHooks[hook].apply(pluginHooks,args)})),shouldInvokePropsHook)&&(_instance$props=instance.props)[hook].apply(_instance$props,args)}function handleAriaContentAttribute(){var aria=instance.props.aria;if(aria.content){var attr="aria-"+aria.content,id=popper.id;normalizeToArray(instance.props.triggerTarget||reference).forEach((function(node){var currentValue=node.getAttribute(attr);if(instance.state.isVisible)node.setAttribute(attr,currentValue?currentValue+" "+id:id);else{var nextValue=currentValue&&currentValue.replace(id,"").trim();nextValue?node.setAttribute(attr,nextValue):node.removeAttribute(attr)}}))}}function handleAriaExpandedAttribute(){!hasAriaExpanded&&instance.props.aria.expanded&&normalizeToArray(instance.props.triggerTarget||reference).forEach((function(node){instance.props.interactive?node.setAttribute("aria-expanded",instance.state.isVisible&&node===getCurrentTarget()?"true":"false"):node.removeAttribute("aria-expanded")}))}function cleanupInteractiveMouseListeners(){getDocument().removeEventListener("mousemove",debouncedOnMouseMove),mouseMoveListeners=mouseMoveListeners.filter((function(listener){return listener!==debouncedOnMouseMove}))}function onDocumentPress(event){if(!currentInput.isTouch||!didTouchMove&&"mousedown"!==event.type){var actualTarget=event.composedPath&&event.composedPath()[0]||event.target;if(!instance.props.interactive||!actualContains(popper,actualTarget)){if(normalizeToArray(instance.props.triggerTarget||reference).some((function(el){return actualContains(el,actualTarget)}))){if(currentInput.isTouch)return;if(instance.state.isVisible&&instance.props.trigger.indexOf("click")>=0)return}else invokeHook("onClickOutside",[instance,event]);!0===instance.props.hideOnClick&&(instance.clearDelayTimeouts(),instance.hide(),didHideDueToDocumentMouseDown=!0,setTimeout((function(){didHideDueToDocumentMouseDown=!1})),instance.state.isMounted||removeDocumentPress())}}}function onTouchMove(){didTouchMove=!0}function onTouchStart(){didTouchMove=!1}function addDocumentPress(){var doc=getDocument();doc.addEventListener("mousedown",onDocumentPress,!0),doc.addEventListener("touchend",onDocumentPress,TOUCH_OPTIONS),doc.addEventListener("touchstart",onTouchStart,TOUCH_OPTIONS),doc.addEventListener("touchmove",onTouchMove,TOUCH_OPTIONS)}function removeDocumentPress(){var doc=getDocument();doc.removeEventListener("mousedown",onDocumentPress,!0),doc.removeEventListener("touchend",onDocumentPress,TOUCH_OPTIONS),doc.removeEventListener("touchstart",onTouchStart,TOUCH_OPTIONS),doc.removeEventListener("touchmove",onTouchMove,TOUCH_OPTIONS)}function onTransitionEnd(duration,callback){var box=getDefaultTemplateChildren().box;function listener(event){event.target===box&&(updateTransitionEndListener(box,"remove",listener),callback())}if(0===duration)return callback();updateTransitionEndListener(box,"remove",currentTransitionEndListener),updateTransitionEndListener(box,"add",listener),currentTransitionEndListener=listener}function on(eventType,handler,options){void 0===options&&(options=!1),normalizeToArray(instance.props.triggerTarget||reference).forEach((function(node){node.addEventListener(eventType,handler,options),listeners.push({node:node,eventType:eventType,handler:handler,options:options})}))}function addListeners(){getIsCustomTouchBehavior()&&(on("touchstart",onTrigger,{passive:!0}),on("touchend",onMouseLeave,{passive:!0})),function splitBySpaces(value){return value.split(/\s+/).filter(Boolean)}(instance.props.trigger).forEach((function(eventType){if("manual"!==eventType)switch(on(eventType,onTrigger),eventType){case"mouseenter":on("mouseleave",onMouseLeave);break;case"focus":on(isIE11?"focusout":"blur",onBlurOrFocusOut);break;case"focusin":on("focusout",onBlurOrFocusOut)}}))}function removeListeners(){listeners.forEach((function(_ref){var node=_ref.node,eventType=_ref.eventType,handler=_ref.handler,options=_ref.options;node.removeEventListener(eventType,handler,options)})),listeners=[]}function onTrigger(event){var _lastTriggerEvent,shouldScheduleClickHide=!1;if(instance.state.isEnabled&&!isEventListenerStopped(event)&&!didHideDueToDocumentMouseDown){var wasFocused="focus"===(null==(_lastTriggerEvent=lastTriggerEvent)?void 0:_lastTriggerEvent.type);lastTriggerEvent=event,currentTarget=event.currentTarget,handleAriaExpandedAttribute(),!instance.state.isVisible&&isMouseEvent(event)&&mouseMoveListeners.forEach((function(listener){return listener(event)})),"click"===event.type&&(instance.props.trigger.indexOf("mouseenter")<0||isVisibleFromClick)&&!1!==instance.props.hideOnClick&&instance.state.isVisible?shouldScheduleClickHide=!0:scheduleShow(event),"click"===event.type&&(isVisibleFromClick=!shouldScheduleClickHide),shouldScheduleClickHide&&!wasFocused&&scheduleHide(event)}}function onMouseMove(event){var target=event.target,isCursorOverReferenceOrPopper=getCurrentTarget().contains(target)||popper.contains(target);if("mousemove"!==event.type||!isCursorOverReferenceOrPopper){var popperTreeData=getNestedPopperTree().concat(popper).map((function(popper){var _instance$popperInsta,state=null==(_instance$popperInsta=popper._tippy.popperInstance)?void 0:_instance$popperInsta.state;return state?{popperRect:popper.getBoundingClientRect(),popperState:state,props:props}:null})).filter(Boolean);(function isCursorOutsideInteractiveBorder(popperTreeData,event){var clientX=event.clientX,clientY=event.clientY;return popperTreeData.every((function(_ref){var popperRect=_ref.popperRect,popperState=_ref.popperState,interactiveBorder=_ref.props.interactiveBorder,basePlacement=getBasePlacement(popperState.placement),offsetData=popperState.modifiersData.offset;if(!offsetData)return!0;var topDistance="bottom"===basePlacement?offsetData.top.y:0,bottomDistance="top"===basePlacement?offsetData.bottom.y:0,leftDistance="right"===basePlacement?offsetData.left.x:0,rightDistance="left"===basePlacement?offsetData.right.x:0,exceedsTop=popperRect.top-clientY+topDistance>interactiveBorder,exceedsBottom=clientY-popperRect.bottom-bottomDistance>interactiveBorder,exceedsLeft=popperRect.left-clientX+leftDistance>interactiveBorder,exceedsRight=clientX-popperRect.right-rightDistance>interactiveBorder;return exceedsTop||exceedsBottom||exceedsLeft||exceedsRight}))})(popperTreeData,event)&&(cleanupInteractiveMouseListeners(),scheduleHide(event))}}function onMouseLeave(event){isEventListenerStopped(event)||instance.props.trigger.indexOf("click")>=0&&isVisibleFromClick||(instance.props.interactive?instance.hideWithInteractivity(event):scheduleHide(event))}function onBlurOrFocusOut(event){instance.props.trigger.indexOf("focusin")<0&&event.target!==getCurrentTarget()||instance.props.interactive&&event.relatedTarget&&popper.contains(event.relatedTarget)||scheduleHide(event)}function isEventListenerStopped(event){return!!currentInput.isTouch&&getIsCustomTouchBehavior()!==event.type.indexOf("touch")>=0}function createPopperInstance(){destroyPopperInstance();var _instance$props2=instance.props,popperOptions=_instance$props2.popperOptions,placement=_instance$props2.placement,offset=_instance$props2.offset,getReferenceClientRect=_instance$props2.getReferenceClientRect,moveTransition=_instance$props2.moveTransition,arrow=getIsDefaultRenderFn()?getChildren(popper).arrow:null,computedReference=getReferenceClientRect?{getBoundingClientRect:getReferenceClientRect,contextElement:getReferenceClientRect.contextElement||getCurrentTarget()}:reference,tippyModifier={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function fn(_ref2){var state=_ref2.state;if(getIsDefaultRenderFn()){var box=getDefaultTemplateChildren().box;["placement","reference-hidden","escaped"].forEach((function(attr){"placement"===attr?box.setAttribute("data-placement",state.placement):state.attributes.popper["data-popper-"+attr]?box.setAttribute("data-"+attr,""):box.removeAttribute("data-"+attr)})),state.attributes.popper={}}}},modifiers=[{name:"offset",options:{offset:offset}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!moveTransition}},tippyModifier];getIsDefaultRenderFn()&&arrow&&modifiers.push({name:"arrow",options:{element:arrow,padding:3}}),modifiers.push.apply(modifiers,(null==popperOptions?void 0:popperOptions.modifiers)||[]),instance.popperInstance=Object(lib_popper.a)(computedReference,popper,Object.assign({},popperOptions,{placement:placement,onFirstUpdate:onFirstUpdate,modifiers:modifiers}))}function destroyPopperInstance(){instance.popperInstance&&(instance.popperInstance.destroy(),instance.popperInstance=null)}function getNestedPopperTree(){return arrayFrom(popper.querySelectorAll("[data-tippy-root]"))}function scheduleShow(event){instance.clearDelayTimeouts(),event&&invokeHook("onTrigger",[instance,event]),addDocumentPress();var delay=getDelay(!0),_getNormalizedTouchSe=getNormalizedTouchSettings(),touchValue=_getNormalizedTouchSe[0],touchDelay=_getNormalizedTouchSe[1];currentInput.isTouch&&"hold"===touchValue&&touchDelay&&(delay=touchDelay),delay?showTimeout=setTimeout((function(){instance.show()}),delay):instance.show()}function scheduleHide(event){if(instance.clearDelayTimeouts(),invokeHook("onUntrigger",[instance,event]),instance.state.isVisible){if(!(instance.props.trigger.indexOf("mouseenter")>=0&&instance.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(event.type)>=0&&isVisibleFromClick)){var delay=getDelay(!1);delay?hideTimeout=setTimeout((function(){instance.state.isVisible&&instance.hide()}),delay):scheduleHideAnimationFrame=requestAnimationFrame((function(){instance.hide()}))}}else removeDocumentPress()}}function tippy_esm_tippy(targets,optionalProps){void 0===optionalProps&&(optionalProps={});var plugins=tippy_esm_defaultProps.plugins.concat(optionalProps.plugins||[]);(function bindGlobalEventListeners(){document.addEventListener("touchstart",onDocumentTouchStart,TOUCH_OPTIONS),window.addEventListener("blur",onWindowBlur)})();var passedProps=Object.assign({},optionalProps,{plugins:plugins}),instances=getArrayOfElements(targets).reduce((function(acc,reference){var instance=reference&&createTippy(reference,passedProps);return instance&&acc.push(instance),acc}),[]);return isElement(targets)?instances[0]:instances}tippy_esm_tippy.defaultProps=tippy_esm_defaultProps,tippy_esm_tippy.setDefaultProps=function setDefaultProps(partialProps){Object.keys(partialProps).forEach((function(key){tippy_esm_defaultProps[key]=partialProps[key]}))},tippy_esm_tippy.currentInput=currentInput;Object.assign({},applyStyles.a,{effect:function effect(_ref){var state=_ref.state,initialStyles={popper:{position:state.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper),state.styles=initialStyles,state.elements.arrow&&Object.assign(state.elements.arrow.style,initialStyles.arrow)}});tippy_esm_tippy.setDefaultProps({render:tippy_esm_render});var tippy_esm=tippy_esm_tippy,react_dom=__webpack_require__("./node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");function tippy_react_esm_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var tippy_react_esm_isBrowser="undefined"!=typeof window&&"undefined"!=typeof document;function preserveRef(ref,node){ref&&("function"==typeof ref&&ref(node),{}.hasOwnProperty.call(ref,"current")&&(ref.current=node))}function ssrSafeCreateDiv(){return tippy_react_esm_isBrowser&&document.createElement("div")}function deepEqual(x,y){if(x===y)return!0;if("object"==typeof x&&null!=x&&"object"==typeof y&&null!=y){if(Object.keys(x).length!==Object.keys(y).length)return!1;for(var prop in x){if(!y.hasOwnProperty(prop))return!1;if(!deepEqual(x[prop],y[prop]))return!1}return!0}return!1}function uniqueByShape(arr){var output=[];return arr.forEach((function(item){output.find((function(outputItem){return deepEqual(item,outputItem)}))||output.push(item)})),output}function deepPreserveProps(instanceProps,componentProps){var _instanceProps$popper,_componentProps$poppe;return Object.assign({},componentProps,{popperOptions:Object.assign({},instanceProps.popperOptions,componentProps.popperOptions,{modifiers:uniqueByShape([].concat((null==(_instanceProps$popper=instanceProps.popperOptions)?void 0:_instanceProps$popper.modifiers)||[],(null==(_componentProps$poppe=componentProps.popperOptions)?void 0:_componentProps$poppe.modifiers)||[]))})})}var useIsomorphicLayoutEffect=tippy_react_esm_isBrowser?react.useLayoutEffect:react.useEffect;function useMutableBox(initialValue){var ref=Object(react.useRef)();return ref.current||(ref.current="function"==typeof initialValue?initialValue():initialValue),ref.current}function updateClassName(box,action,classNames){classNames.split(/\s+/).forEach((function(name){name&&box.classList[action](name)}))}var classNamePlugin={name:"className",defaultValue:"",fn:function fn(instance){var box=instance.popper.firstElementChild,isDefaultRenderFn=function isDefaultRenderFn(){var _instance$props$rende;return!!(null==(_instance$props$rende=instance.props.render)?void 0:_instance$props$rende.$$tippy)};function add(){instance.props.className&&!isDefaultRenderFn()||updateClassName(box,"add",instance.props.className)}return{onCreate:add,onBeforeUpdate:function remove(){isDefaultRenderFn()&&updateClassName(box,"remove",instance.props.className)},onAfterUpdate:add}}};function TippyGenerator(tippy){return function Tippy(_ref){var children=_ref.children,content=_ref.content,visible=_ref.visible,singleton=_ref.singleton,render=_ref.render,reference=_ref.reference,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$ignoreAttributes=_ref.ignoreAttributes,ignoreAttributes=void 0===_ref$ignoreAttributes||_ref$ignoreAttributes,restOfNativeProps=(_ref.__source,_ref.__self,tippy_react_esm_objectWithoutPropertiesLoose(_ref,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),isControlledMode=void 0!==visible,isSingletonMode=void 0!==singleton,_useState=Object(react.useState)(!1),mounted=_useState[0],setMounted=_useState[1],_useState2=Object(react.useState)({}),attrs=_useState2[0],setAttrs=_useState2[1],_useState3=Object(react.useState)(),singletonContent=_useState3[0],setSingletonContent=_useState3[1],mutableBox=useMutableBox((function(){return{container:ssrSafeCreateDiv(),renders:1}})),props=Object.assign({ignoreAttributes:ignoreAttributes},restOfNativeProps,{content:mutableBox.container});isControlledMode&&(props.trigger="manual",props.hideOnClick=!1),isSingletonMode&&(disabled=!0);var computedProps=props,plugins=props.plugins||[];render&&(computedProps=Object.assign({},props,{plugins:isSingletonMode&&null!=singleton.data?[].concat(plugins,[{fn:function fn(){return{onTrigger:function onTrigger(instance,event){var node=singleton.data.children.find((function(_ref2){return _ref2.instance.reference===event.currentTarget}));instance.state.$$activeSingletonInstance=node.instance,setSingletonContent(node.content)}}}}]):plugins,render:function render(){return{popper:mutableBox.container}}}));var deps=[reference].concat(children?[children.type]:[]);return useIsomorphicLayoutEffect((function(){var element=reference;reference&&reference.hasOwnProperty("current")&&(element=reference.current);var instance=tippy(element||mutableBox.ref||ssrSafeCreateDiv(),Object.assign({},computedProps,{plugins:[classNamePlugin].concat(props.plugins||[])}));return mutableBox.instance=instance,disabled&&instance.disable(),visible&&instance.show(),isSingletonMode&&singleton.hook({instance:instance,content:content,props:computedProps,setSingletonContent:setSingletonContent}),setMounted(!0),function(){instance.destroy(),null==singleton||singleton.cleanup(instance)}}),deps),useIsomorphicLayoutEffect((function(){var _instance$popperInsta;if(1!==mutableBox.renders){var instance=mutableBox.instance;instance.setProps(deepPreserveProps(instance.props,computedProps)),null==(_instance$popperInsta=instance.popperInstance)||_instance$popperInsta.forceUpdate(),disabled?instance.disable():instance.enable(),isControlledMode&&(visible?instance.show():instance.hide()),isSingletonMode&&singleton.hook({instance:instance,content:content,props:computedProps,setSingletonContent:setSingletonContent})}else mutableBox.renders++})),useIsomorphicLayoutEffect((function(){var _instance$props$poppe;if(render){var instance=mutableBox.instance;instance.setProps({popperOptions:Object.assign({},instance.props.popperOptions,{modifiers:[].concat(((null==(_instance$props$poppe=instance.props.popperOptions)?void 0:_instance$props$poppe.modifiers)||[]).filter((function(_ref3){return"$$tippyReact"!==_ref3.name})),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function fn(_ref4){var _state$modifiersData,state=_ref4.state,hideData=null==(_state$modifiersData=state.modifiersData)?void 0:_state$modifiersData.hide;attrs.placement===state.placement&&attrs.referenceHidden===(null==hideData?void 0:hideData.isReferenceHidden)&&attrs.escaped===(null==hideData?void 0:hideData.hasPopperEscaped)||setAttrs({placement:state.placement,referenceHidden:null==hideData?void 0:hideData.isReferenceHidden,escaped:null==hideData?void 0:hideData.hasPopperEscaped}),state.attributes.popper={}}}])})})}}),[attrs.placement,attrs.referenceHidden,attrs.escaped].concat(deps)),react_default.a.createElement(react_default.a.Fragment,null,children?Object(react.cloneElement)(children,{ref:function ref(node){mutableBox.ref=node,preserveRef(children.ref,node)}}):null,mounted&&Object(react_dom.createPortal)(render?render(function toDataAttributes(attrs){var dataAttrs={"data-placement":attrs.placement};return attrs.referenceHidden&&(dataAttrs["data-reference-hidden"]=""),attrs.escaped&&(dataAttrs["data-escaped"]=""),dataAttrs}(attrs),singletonContent,mutableBox.instance):content,mutableBox.container))}}var forwardRef=function(Tippy,defaultProps){return Object(react.forwardRef)((function TippyWrapper(_ref,_ref2){var children=_ref.children,props=tippy_react_esm_objectWithoutPropertiesLoose(_ref,["children"]);return react_default.a.createElement(Tippy,Object.assign({},defaultProps,props),children?Object(react.cloneElement)(children,{ref:function ref(node){preserveRef(_ref2,node),preserveRef(children.ref,node)}}):null)}))},tippy_react_esm=forwardRef(TippyGenerator(tippy_esm));const getStyle=(styleType,theme)=>{const styles={light:{backgroundColor:theme.colors.white,color:theme.colors.grey100,border:"none",borderColor:"white",boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);"},lightBox:{backgroundColor:theme.colors.white,color:theme.colors.grey100,border:`1px solid ${theme.colors.grey20}`,borderColor:theme.colors.grey20,boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);"},lightBoxModal:{backgroundColor:theme.colors.white,color:theme.colors.grey100,border:`1px solid ${theme.colors.grey20}`,borderColor:theme.colors.grey20,boxShadow:"0px 4px 16px rgba(0, 0, 0, 0.3)"},dark:{backgroundColor:theme.colors.grey40,color:theme.colors.white,border:"none",borderColor:theme.colors.grey40,boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);"},extraDark:{backgroundColor:theme.colors.grey100,color:theme.colors.white,border:"none",borderColor:theme.colors.grey100,boxShadow:"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);"}};return styles[styleType]||styles.dark},Tooltip=Object(styled_components_browser_esm.d)((({suppressClassNameWarning:suppressClassNameWarning,styleType:styleType,arrow:arrow=!1,width:width,offsetTop:offsetTop,styledCss:styledCss,customComponent:customComponent,arrowColor:arrowColor,offsetLeft:offsetLeft,borderRadius:borderRadius,onPresEsc:onPresEsc,...props})=>{const escPlugIn={name:"hideOnEsc",defaultValue:!0,fn(){function onKeyDown(event){27===event.keyCode&&onPresEsc&&onPresEsc()}return{onShow(){document.addEventListener("keydown",onKeyDown)},onHide(){document.removeEventListener("keydown",onKeyDown)}}}};return react.createElement(tippy_react_esm,{arrow:arrow,...props,plugins:[...onPresEsc?[escPlugIn]:[]]})})).attrs({suppressClassNameWarning:!0})`
  &.tippy-box {
    background-color: ${({theme:theme,styleType:styleType="light"})=>getStyle(styleType,theme).backgroundColor};
    color: ${({theme:theme,styleType:styleType="light"})=>getStyle(styleType,theme).color};
    box-shadow: ${({theme:theme,styleType:styleType="light"})=>getStyle(styleType,theme).boxShadow};
    border: ${({theme:theme,styleType:styleType="light"})=>getStyle(styleType,theme).border};
    border-radius: ${({borderRadius:borderRadius})=>borderRadius||3}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${props=>props.theme.fonts.primary};
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 150%;
    max-width: ${({maxWidth:maxWidth})=>maxWidth}px !important;
    word-break: break-word;
    width: ${({width:width})=>width};
    ${({offsetTop:offsetTop})=>offsetTop&&`top: ${offsetTop}px !important`};
    ${({offsetLeft:offsetLeft})=>offsetLeft&&`left: ${offsetLeft}px !important`};
  }
  ${({styledCss:styledCss})=>styledCss}
  ${({customComponent:customComponent})=>customComponent&&styled_components_browser_esm.c`
      .tippy-content {
        padding: 0;
      }
    `}
  ${({arrowColor:arrowColor,theme:theme,styleType:styleType="light"})=>styled_components_browser_esm.c`
      .tippy-arrow {
        color: ${getStyle(styleType,theme).borderColor};
        border-top-color: ${arrowColor?theme.colors[arrowColor]:getStyle(styleType,theme).backgroundColor} !important;
        &::before {
          color: ${arrowColor?theme.colors[arrowColor]:getStyle(styleType,theme).backgroundColor};
        }
      }
    `}
`;function TooltipCommonIcon({content:content,styleType:styleType="light",placement:placement="top",iconSize:iconSize=10}){return react.createElement(Tooltip,{...dpNameProp("Tooltip"),content:content,suppressClassNameWarning:!0,placement:placement,styleType:styleType},react.createElement(Stack,{align:"center"},react.createElement(Icon_Icon,{icon:free_solid_svg_icons.t,themeColor:"grey40",size:iconSize})))}const Tag_Container=styled_components_browser_esm.d.div`
  box-sizing: border-box;
  padding: ${({size:size})=>Object(index_module.b)(size).with("large",(()=>"8px 12px")).with("medium",(()=>"3px 8px")).with("small",(()=>"1px 4px")).exhaustive()};
  margin: ${({addMargin:addMargin})=>addMargin?"2px 4px 2px 0":"0"};
  background-color: ${({theme:theme,backgroundColor:backgroundColor})=>backgroundColor in theme.colors?theme.colors[backgroundColor]:backgroundColor};
  border: 1px solid
    ${({borderColor:borderColor,theme:theme})=>borderColor&&borderColor in theme.colors?theme.colors[borderColor]:borderColor};
  color: ${({theme:theme,textColor:textColor})=>textColor?textColor in theme.colors?theme.colors[textColor]:textColor:theme.colors.grey40};
  border-radius: 4px;
  display: flex;
  align-items: center;
  ${({maxWidth:maxWidth})=>styled_components_browser_esm.c`
      max-width: ${maxWidth}px;
    `}
  gap: 6px;
  max-height: ${({size:size})=>Object(index_module.b)(size).with("large",(()=>"28px")).with("medium",(()=>"26px")).with("small",(()=>"26px")).exhaustive()};
  width: fit-content;
`,RoundedContainer=Object(styled_components_browser_esm.d)(Tag_Container)`
  border-radius: 12px;
`,Text=(Object(styled_components_browser_esm.d)(Stack)`
  box-sizing: border-box;
  padding: 1px 4px;
  margin: ${({addMargin:addMargin})=>addMargin?"2px 4px 2px 0":"0"};
  background-color: ${({theme:theme})=>theme.colors.grey10};
  border: 1px solid ${({theme:theme})=>theme.colors.grey10};
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 6px;
  height: 16px;
  width: ${({width:width})=>width||"40px"};
`,styled_components_browser_esm.d.div`
  box-sizing: border-box;
  padding: 1px 8px;
  margin: 0;
  background-color: ${props=>props.backgroundColor};
  border: 1px solid ${props=>props.borderColor};
  color: ${props=>props.borderColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 6px;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p8"})`
  color: ${({theme:theme,color:color})=>color||theme.colors.grey100};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: ${({capitalize:capitalize})=>capitalize?"capitalize":"initial"};
  font-size: ${({size:size})=>Object(index_module.b)(size).with("large",(()=>"12px")).with("medium",(()=>"11px")).with("small",(()=>"10px")).exhaustive()};
  display: block;
  cursor: ${({onClick:onClick})=>onClick?"pointer":"default"};
`),CloseButton=(styled_components_browser_esm.d.div`
  font-family: ${({theme:theme})=>theme.fonts.primary};
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
`,Object(styled_components_browser_esm.d)(Button_IconButton)`
  height: 10px;
  width: 10px;
  min-height: 10px;
  min-width: 10px;
`),IconWrapper=styled_components_browser_esm.d.div`
  font-size: 9px;
  display: flex;
  align-items: center;
`,RoundedLabelTag=({label:label,withClose:withClose,onCloseClick:onCloseClick,onLabelClick:onLabelClick,closeIcon:closeIcon=free_solid_svg_icons.j,capitalize:capitalize,className:className,addMargin:addMargin,icon:icon,size:size="small",backgroundColor:backgroundColor,borderColor:borderColor,textColor:textColor})=>react.createElement(RoundedContainer,{backgroundColor:backgroundColor,borderColor:null!=borderColor?borderColor:backgroundColor,textColor:textColor,className:null!=className?className:"tag",addMargin:addMargin,size:size},icon&&react.createElement(IconWrapper,null,react.createElement(Icon_Icon,{icon:icon,size:Object(index_module.b)(size).with("large",(()=>12)).with("medium",(()=>8)).with("small",(()=>{})).exhaustive()})),react.createElement(Text,{size:size,capitalize:capitalize,color:textColor,onClick:onLabelClick},label),withClose&&react.createElement(CloseButton,{minimal:!0,icon:closeIcon,onClick:onCloseClick,style:{color:textColor},type:"button"})),GetLabelColorByChar=char=>{const standardLabelColors=Object(styled_components_browser_esm.e)().standardLabelColors;switch(char.toUpperCase().charAt(0)){case"A":return standardLabelColors.amber;case"H":return standardLabelColors.beige;case"O":return standardLabelColors.brown;case"V":return standardLabelColors.burgundy;case"B":return standardLabelColors.coral;case"I":return standardLabelColors.cyan;case"P":return standardLabelColors.cyan_light;case"W":return standardLabelColors.green;case"C":return standardLabelColors.vermilion;case"J":case"X":return standardLabelColors.grey_black;case"Q":return standardLabelColors.yellow;case"D":return standardLabelColors.lemon;case"K":return standardLabelColors.lime;case"R":return standardLabelColors.magenta;case"Y":return standardLabelColors.myrtle;case"E":return standardLabelColors.olive;case"L":return standardLabelColors.orange;case"S":return standardLabelColors.pink;case"Z":return standardLabelColors.grey;case"F":return standardLabelColors.purple;case"M":return standardLabelColors.lavender;case"T":return standardLabelColors.red;case"G":return standardLabelColors.rose_dawn;case"N":return standardLabelColors.sage;case"U":return standardLabelColors.sky_blue;default:return standardLabelColors.turquoise}},CircleIconContainer=styled_components_browser_esm.d.div`
  box-sizing: border-box;
  display: ${({isVisible:isVisible})=>isVisible?"flex":"none"};
  align-items: center;
  justify-content: center;
  color: ${props=>props.borderColor};
  padding: 0;
  margin: 0;
  font-weight: 600;
  background-color: ${props=>props.backgroundColor};
  border: 1px solid ${props=>props.borderColor};
  border-radius: 50%;
  min-height: ${({size:size})=>size}px;
  min-width: ${({size:size})=>size}px;
  height: ${({size:size})=>size}px;
  width: ${({size:size})=>size}px;
  user-select: none;
`,CircleLetterContainer=styled_components_browser_esm.d.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props=>props.borderColor};
  padding: 0;
  margin: 0;
  font-weight: 600;
  background-color: ${props=>props.backgroundColor};
  border: 1px solid ${props=>props.borderColor};
  border-radius: 50%;
  height: ${({size:size})=>size}px;
  width: ${({size:size})=>size}px;
  user-select: none;
`,TagCircleIcon=({color:color,icon:icon,size:size,iconSize:iconSize,isVisible:isVisible=!0})=>{const theme=Object(styled_components_browser_esm.e)(),{borderColor:borderColor,backgroundColor:backgroundColor}=theme.standardLabelColors[color];let fontSize;switch(size){case 14:fontSize=6;break;case 15:fontSize=7;break;case 18:fontSize=8;break;case 20:case 22:fontSize=12;break;case 24:case 26:case 28:default:fontSize=14;break;case 40:fontSize=20;break;case 48:fontSize=24;break;case 56:fontSize=28;break;case 72:fontSize=34;break;case 100:fontSize=46;break;case 120:fontSize=60}return react.createElement(CircleIconContainer,{...dpNameProp("TagCircleIcon"),backgroundColor:backgroundColor,borderColor:borderColor,size:size,isVisible:isVisible},react.createElement("div",{style:{fontSize:fontSize,display:"flex"}},react.createElement(Icon_Icon,{icon:icon,size:iconSize})))},TagCircleLetter=({color:color,name:name,size:size,className:className})=>{const theme=Object(styled_components_browser_esm.e)();let displayBorderColor,displayBackgroundColor;const oneLetter=name.charAt(0).toUpperCase(),twoLetters=name.split(" ").map((word=>word.charAt(0).toUpperCase())).slice(0,2).join("");let letterDisplay=oneLetter;if(size>=18&&(letterDisplay=twoLetters),color){const{borderColor:borderColor,backgroundColor:backgroundColor}=theme.standardLabelColors[color];displayBorderColor=borderColor,displayBackgroundColor=backgroundColor}else{const randomColors=GetLabelColorByChar(oneLetter);displayBorderColor=randomColors.borderColor,displayBackgroundColor=randomColors.backgroundColor}return react.createElement(CircleLetterContainer,{title:name,backgroundColor:displayBackgroundColor,borderColor:displayBorderColor,size:size,className:className},size<26?react.createElement(TSpan,{overflow:"ellipsis",type:"p12"},letterDisplay):react.createElement(TSpan,{type:"p6",overflow:"ellipsis"},letterDisplay))},UNWANTED_CHARS_REGEX=/\([^)]*\)|[\0-\u001F!-/:-@[-`{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,PHONENUMBER_REGEX=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,MULTIPLE_WHITESPACES_REGEX=/\s+/g,UNSUPPORTED_TEXT_REGEX=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;function getInitials(displayName,isRtl,allowPhoneInitials){if(displayName&&(displayName=function cleanupDisplayName(displayName){return(displayName=(displayName=displayName.replace(UNWANTED_CHARS_REGEX,"")).replace(MULTIPLE_WHITESPACES_REGEX," ")).trim()}(displayName),!(UNSUPPORTED_TEXT_REGEX.test(displayName)||!allowPhoneInitials&&PHONENUMBER_REGEX.test(displayName))))return function getInitialsLatin(displayName,isRtl){let initials="";const splits=displayName.split(" ");return 2===splits.length?(initials+=splits[0].charAt(0).toUpperCase(),initials+=splits[1].charAt(0).toUpperCase()):3===splits.length?(initials+=splits[0].charAt(0).toUpperCase(),initials+=splits[2].charAt(0).toUpperCase()):0!==splits.length&&(initials+=splits[0].charAt(0).toUpperCase()),isRtl&&initials.length>1?initials.charAt(1)+initials.charAt(0):initials}(displayName,isRtl)}const AvaImage=styled_components_browser_esm.d.img`
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: ${({size:size})=>size}px;
  width: ${({size:size})=>size}px;
  min-height: ${({size:size})=>size}px;
  min-width: ${({size:size})=>size}px;
  max-height: ${({size:size})=>size}px;
  max-width: ${({size:size})=>size}px;
  object-fit: cover;
  ${({rounded:rounded})=>rounded?"border-radius: 50%;":""}
  color: red;
`,FaIcon=styled_components_browser_esm.d.i`
  max-height: ${({size:size})=>size}px;
  max-width: ${({size:size})=>size}px;
  font-size: ${({size:size})=>.8*size}px;

  ${({rounded:rounded})=>rounded?"border-radius: 50%;":""}
  &::before {
    align-self: center;
  }
`,Emoji=styled_components_browser_esm.d.div`
  height: ${({size:size})=>size}px;
  width: ${({size:size})=>size}px;
  ${({rounded:rounded})=>rounded?"border-radius: 50%;":""}
`,StatusCircle=styled_components_browser_esm.d.div`
  height: ${({size:size})=>size}px;
  width: ${({size:size})=>size}px;
  position: absolute;
  background-color: ${props=>{var _a;return null!==(_a=props.theme.colors[props.themeColor])&&void 0!==_a?_a:props.themeColor}};
  right: ${({position:position})=>position.right}px;
  bottom: ${({position:position})=>position.bottom}px;
  ${({rounded:rounded=!0})=>rounded?"border-radius: 50%;":""};
  border: ${props=>props.borderWidth}px solid ${props=>props.theme.colors.white};
`,statusCircleSizeProps={14:{size:6,position:{right:-1,bottom:-1},borderWidth:1},15:{size:7,position:{right:-1,bottom:-1},borderWidth:1},18:{size:8,position:{right:-1,bottom:-1},borderWidth:1},20:{size:8,position:{right:-1,bottom:-1},borderWidth:1},22:{size:8,position:{right:-1,bottom:-1},borderWidth:1},24:{size:8,position:{right:-1,bottom:-1},borderWidth:1},26:{size:8,position:{right:-1,bottom:-1},borderWidth:1},28:{size:9,position:{right:-1,bottom:-1},borderWidth:1},32:{size:9,position:{right:-1,bottom:-1},borderWidth:1},34:{size:10,position:{right:-1,bottom:-1},borderWidth:1},40:{size:12,position:{right:-1,bottom:-1},borderWidth:1},48:{size:12,position:{right:-1,bottom:-1},borderWidth:1},56:{size:14,position:{right:-1,bottom:-1},borderWidth:2},72:{size:18,position:{right:-1,bottom:-1},borderWidth:2},100:{size:24,position:{right:-1,bottom:-1},borderWidth:2},120:{size:30,position:{right:-1,bottom:-1},borderWidth:3}},isEmojiAvatarProps=(Object(react.memo)((({imageStyles:imageStyles,backupIcon:backupIcon=free_solid_svg_icons.y,name:name,size:size=18,themeColor:themeColor,onlineStatus:onlineStatus,showOnlineBadge:showOnlineBadge,showTooltip:showTooltip=!0,rounded:rounded=!0,...props})=>{const[imgErrored,setImgErrored]=Object(react.useState)(!1),statusColor=Object(react.useMemo)((()=>{if(showOnlineBadge)switch(onlineStatus){case"online":return"turquoise100";case"offline":return"grey40";case"busy":return"yellow100";case"archived":return"grey80"}}),[onlineStatus,showOnlineBadge]),initials=Object(react.useMemo)((()=>name?getInitials(name,!1,!1):null),[name]),randomColors=GetLabelColorByChar(null!=initials?initials:"X"),imgContainerStyle=Object(react.useMemo)((()=>isImageAvatarProps(props)?{...imageStyles||{},backgroundColor:randomColors.backgroundColor}:{}),[imageStyles,props,randomColors.backgroundColor]),AvatarComponent=Object(react.useMemo)((()=>{if(isEmojiAvatarProps(props))return react.createElement(Emoji,{title:name,size:size,style:props.emojiStyles,rounded:rounded});if(isFaIconAvatarProps(props)){const Component=react.createElement(FaIcon,{title:name,size:size,className:props.faIconClassName,style:props.iconStyles,rounded:rounded});return showTooltip?react.createElement(Tooltip,{delay:[1e3,0],content:name},Component):Component}if(isImageAvatarProps(props)&&!imgErrored&&props.imageUrl){const Component=react.createElement(AvaImage,{alt:name,size:size,style:imgContainerStyle,src:props.imageUrl,loading:"lazy",rounded:rounded,onError:()=>setImgErrored(!0)});return showTooltip?react.createElement(Tooltip,{delay:[1e3,0],content:name},Component):Component}return rounded?name&&initials?react.createElement(TagCircleLetter,{name:name,size:size}):react.createElement(TagCircleIcon,{icon:backupIcon,color:null!=themeColor?themeColor:"brandShade",size:size}):react.createElement(Icon_Icon,{icon:backupIcon,size:size})}),[props,imgErrored,rounded,name,size,showTooltip,imgContainerStyle,initials,backupIcon,themeColor]);return react.createElement(AvatarContainer,{...dpNameProp("Avatar"),size:size},react.createElement(Stack,{style:{position:"relative"}},AvatarComponent,statusColor&&showOnlineBadge&&react.createElement(StatusCircle,{themeColor:statusColor,rounded:rounded,...statusCircleSizeProps[size]})))})),avatarProps=>"emojiStyles"in avatarProps),isFaIconAvatarProps=avatarProps=>"faIconClassName"in avatarProps,isImageAvatarProps=avatarProps=>"imageUrl"in avatarProps,AvatarContainer=Object(styled_components_browser_esm.d)(Stack).attrs({inline:!0,align:"center",justify:"center"})`
  height: ${({size:size})=>size}px;
  width: ${({size:size})=>size}px;
`,Wrapper=styled_components_browser_esm.d.div`
  display: flex;
  font-size: 9px;
  align-items: center;
  height: 16px;
  user-select: none;
  position: relative;
  z-index: 0; // SubStatus set to -1 in order to sit behind primary status, but that causes it to be hidden unless this is set to 0
`,Pill_Container=styled_components_browser_esm.d.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.backgroundColor};
  border: ${props=>props.border};
  color: ${props=>props.textColor};
  padding: ${({noLabel:noLabel,noIcon:noIcon})=>noLabel?"0":noIcon?"0 8px":"0 8px 0 4px"};
  width: 16px;
  border-radius: 20px;
  width: fit-content;
  gap: 2px;
`,SubStatus=styled_components_browser_esm.d.div`
  border-radius: 20px;
  border: 1px solid ${props=>props.bordercolor};
  height: 100%;
  color: ${props=>props.theme.colors.grey100};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.backgroundColor};
  padding-left: 18px;
  padding-right: 8px;
  position: relative;
  margin-left: -14px;
  z-index: -1;
`,IconContainer=Object(styled_components_browser_esm.d)(Stack)`
  font-size: 8px;
  width: 16px;
`,LabelText=Object(styled_components_browser_esm.d)(TSpan)`
  line-height: unset;
  text-transform: capitalize;
  white-space: nowrap;
  ${({isCompact:isCompact})=>isCompact?"\n    max-width: 100px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap\n  ":""}
`;function Pill({label:label,icon:icon,subStatus:subStatus,backgroundColor:backgroundColor,textColor:textColor,subStatusBackgroudcolor:subStatusBackgroudcolor,isCompact:isCompact,border:border,themeColor:themeColor,type:type="p11",...rest}){return react.createElement(Wrapper,{...dpNameProp("Pill"),...rest},react.createElement(Pill_Container,{backgroundColor:backgroundColor,textColor:textColor,noLabel:!label||!!isCompact,noIcon:!icon,border:border},icon&&react.createElement(IconContainer,{align:"center",justify:"center"},react.createElement(Icon_Icon,{icon:icon,themeColor:themeColor})),!isCompact&&label&&react.createElement(LabelText,{type:type},label)),subStatus&&react.createElement(SubStatus,{backgroundColor:subStatusBackgroudcolor||"",bordercolor:backgroundColor},react.createElement(LabelText,{type:type,isCompact:isCompact},subStatus)))}const UrgencyCircle_Container=styled_components_browser_esm.d.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props=>props.backgroundColor};
  color: ${props=>props.textColor};
  border-radius: 20px;
  height: ${({size:size})=>size}px;
  width: ${({size:size})=>size}px;
  text-decoration: ${props=>props.strikethrough?"solid !important":"inherit"};
`;function getUrgencyColor({urgency:urgency,colors:colors,urgencyColors:urgencyColors}){let backgroundColor=colors.grey20,textColor=colors.white;switch(urgency){case 1:backgroundColor=urgencyColors[1].background,textColor=colors.grey100;break;case 2:backgroundColor=urgencyColors[2].background,textColor=colors.grey100;break;case 3:backgroundColor=urgencyColors[3].background,textColor=colors.grey100;break;case 4:backgroundColor=urgencyColors[4].background,textColor=colors.grey100;break;case 5:backgroundColor=urgencyColors[5].background,textColor=colors.grey100;break;case 6:backgroundColor=urgencyColors[6].background;break;case 7:backgroundColor=urgencyColors[7].background;break;case 8:backgroundColor=urgencyColors[8].background;break;case 9:backgroundColor=urgencyColors[9].background;break;case 10:backgroundColor=urgencyColors[10].background}return{backgroundColor:backgroundColor,textColor:textColor}}function UrgencyCircle({urgency:urgency,size:size=18,className:className,strikethrough:strikethrough}){const{colors:colors,urgencyColors:urgencyColors}=Object(styled_components_browser_esm.e)();return!urgency||urgency<1||urgency>10?react.createElement(react.Fragment,null):react.createElement(UrgencyCircle_Container,{...dpNameProp("UrgencyCircle"),backgroundColor:getUrgencyColor({urgency:urgency,colors:colors,urgencyColors:urgencyColors}).backgroundColor,textColor:getUrgencyColor({urgency:urgency,colors:colors,urgencyColors:urgencyColors}).textColor,size:size,className:className,strikethrough:strikethrough},react.createElement(TSpan,{type:"p11"},urgency))}Object(styled_components_browser_esm.d)(UrgencyCircle)`
  padding: 0 11px;
  white-space: nowrap;
`;Object(styled_components_browser_esm.d)(Stack)`
  position: relative;
  height: ${({size:size})=>size}px;
  min-width: ${({size:size,length:length})=>length*size-size/5*length}px;
`,styled_components_browser_esm.d.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: ${({index:index,size:size})=>index*size-size/6*index}px;
  z-index: ${({index:index,length:length})=>length-index};
  background-color: ${({theme:theme})=>theme.colors.white};
  background-clip: content-box;
  overflow: unset;
  border: 2px solid
    ${({theme:theme,overlapBackgroundColor:overlapBackgroundColor})=>overlapBackgroundColor?theme.colors[overlapBackgroundColor]:theme.colors.white};
  border-radius: 50%;
  padding: 0;
  margin: 0;
`,styled_components_browser_esm.d.div`
  display: flex;
  align-items: center;
  height: ${({size:size})=>size}px;
  color: ${({theme:theme})=>theme.colors.grey80};
  padding-right: 6px;
`,styled_components_browser_esm.d.span`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  flex-shrink: 0;
  user-select: none;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p9"})`
  position: absolute;
  top: 0;
  right: 0;
  transform: scale(1) translate(60%, -60%);
  transform-origin: 100% 0%;
  padding-left: 4px;
  padding-right: 4px;
  ${({theme:theme,textColor:textColor})=>textColor&&styled_components_browser_esm.c`
      color: ${theme.colors[textColor]};
    `}

  background: ${({themeColor:themeColor,theme:theme})=>theme.colors[themeColor]};
  border-radius: 10px;
  height: 18px;
  min-width: 18px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;const ButtonGroup=styled_components_browser_esm.d.div.attrs(dpNameProp("ButtonGroup"))`
  display: inline-flex;

  ${Button_Button}, ${Button_AnchorButton} {
    flex: 0 1 auto;
    position: relative;

    &:not(:last-child) {
      border-bottom-right-radius: 0%;
      border-top-right-radius: 0%;
    }

    &:not(:first-child) {
      border-bottom-left-radius: 0%;
      border-top-left-radius: 0%;
      border-left: none;
    }
  }
`,HiddenCheckbox=styled_components_browser_esm.d.input`
  display: none;
`,StyledCheckbox=styled_components_browser_esm.d.span`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  box-sizing: border-box;
  background: ${({disabled:disabled,error:error,checked:checked,theme:theme})=>Object(index_module.b)({disabled:disabled,error:error,checked:checked}).with({disabled:!0,checked:!0},(()=>theme.colors.grey40)).with({disabled:!0,checked:!1},(()=>theme.colors.grey10)).with({error:!0,checked:!0},(()=>theme.colors.red100)).with({checked:!0},(()=>theme.colors.brandShade100)).otherwise((()=>theme.colors.white))};
  border-radius: 3px;
  transition: all 150ms;
  cursor: ${props=>props.disabled?"not-allowed":"pointer"};
  border: ${({disabled:disabled,error:error,checked:checked,theme:theme})=>{if(checked)return;return`solid 1px ${Object(index_module.b)({disabled:disabled,error:error}).with({disabled:!0},(()=>theme.colors.grey20)).with({error:!0},(()=>theme.colors.red100)).otherwise((()=>theme.colors.grey20))}`}};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: ${props=>props.size-3}px;
    width: ${props=>props.size-3}px;
    color: ${({theme:theme})=>theme.colors.white};
    visibility: ${props=>props.checked?"visible":"hidden"};
  }

  &:hover {
    border: ${({disabled:disabled,error:error,checked:checked,theme:theme,isDisplayOnly:isDisplayOnly})=>{if(checked||isDisplayOnly)return;return`solid 1px ${Object(index_module.b)({disabled:disabled,error:error}).with({disabled:!0},(()=>theme.colors.grey20)).with({error:!0},(()=>theme.colors.red100)).otherwise((()=>theme.colors.grey40))}`}};
  }
`,CheckboxContainer=styled_components_browser_esm.d.div`
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  display: inline-flex;
  align-items: center;
  position: relative;
  border-radius: 4px;

  &::before {
    content: "";
    vertical-align: middle;
    height: 100%;
  }
  &:focus {
    outline: 2px solid ${({theme:theme})=>theme.colors.cyan90};
  }
`,LabelStyled=styled_components_browser_esm.d.label`
  display: flex;
  align-items: center;
  gap: 8px;
`,WithSelectionIcon=Object(styled_components_browser_esm.d)(Icon_Icon)`
  color: ${({checked:checked,disabled:disabled,error:error,theme:theme})=>Object(index_module.b)({checked:checked,disabled:disabled,error:error}).with({disabled:!0},(()=>theme.colors.grey20)).with({error:!0},(()=>theme.colors.red100)).with({checked:!0},(()=>theme.colors.brandShade100)).otherwise((()=>theme.colors.grey40))};
`,Checkbox=({label:label,labelIsPrefix:labelIsPrefix=!1,id:id,size:size=12,checked:checked,containerStyle:containerStyle,labelStyle:labelStyle,indeterminate:indeterminate,labelProps:labelProps,disabled:disabled,isDisplayOnly:isDisplayOnly,error:error,withSelection:withSelection,...rest})=>react.createElement(LabelStyled,{...dpNameProp("Checkbox"),...labelProps},label&&labelIsPrefix&&react.createElement(TSpan,{type:"p5",style:labelStyle},label),react.createElement(CheckboxContainer,{size:size,style:containerStyle},!isDisplayOnly&&react.createElement(HiddenCheckbox,{id:id,checked:!!checked,type:"checkbox",disabled:disabled,...rest}),react.createElement(StyledCheckbox,{size:size,indeterminate:!!indeterminate,checked:checked,disabled:disabled,isDisplayOnly:isDisplayOnly,error:error},checked&&react.createElement(Icon_Icon,{icon:indeterminate?free_solid_svg_icons.q:free_solid_svg_icons.f}))),withSelection&&react.createElement(WithSelectionIcon,{icon:free_solid_svg_icons.d,size:12,checked:checked,disabled:disabled,error:error}),label&&!labelIsPrefix&&react.createElement(TSpan,{type:"p5",style:labelStyle},label)),HoverButton=Object(styled_components_browser_esm.d)(Stack)`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${({theme:theme})=>theme.colors.white};
  border: 1px solid ${({theme:theme})=>theme.colors.brandShade20};
  border-radius: 0 0 0 5px;
  padding: 6px 8px;
  > button {
    height: 10px;
    width: 10px;
  }
`;styled_components_browser_esm.d.div`
  position: relative;
  :hover {
    ${HoverButton} {
      display: block;
    }
  }
`,styled_components_browser_esm.d.label`
  background-color: ${({backgroundColor:backgroundColor,theme:theme})=>null!=backgroundColor?backgroundColor:theme.colors.white};
  display: flex;
  :hover {
    cursor: pointer;
    background-color: ${({theme:theme})=>theme.colors.brandShade10};
    .hoverTextBlue {
      color: ${({theme:theme})=>theme.colors.brandShade100};
    }
  }
`,styled_components_browser_esm.d.div`
  display: flex;
  padding: 10px 11px 10px 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey20};
  margin-left: 10px;
  min-width: 0;
`,Object(styled_components_browser_esm.d)(Stack)`
  width: 100%;
  border-bottom: ${({theme:theme,noBorder:noBorder})=>noBorder?"0px":`1px solid ${theme.colors.grey10}`};
  padding: 6px 12px 6px 0;
`,Object(styled_components_browser_esm.d)(Stack)`
  position: relative;
  width: 100%;
  .textGrey {
    color: ${({theme:theme})=>theme.colors.grey80};
  }
  ${({noHover:noHover})=>!noHover&&styled_components_browser_esm.c`
      :hover {
        cursor: pointer;
        background-color: ${({theme:theme})=>theme.colors.brandShade10};
        .hoverTextBlue {
          color: ${({theme:theme})=>theme.colors.brandShade100};
        }
      }
    `}
`,Object(styled_components_browser_esm.d)(Stack)`
  flex: 1 1 0;
  min-width: 0;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p6",overflow:"ellipsis"})`
  flex: 2;
  font-size: 10px;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p8",overflow:"ellipsis"})`
  color: ${props=>props.theme.colors.grey80};
  flex: 1;
  font-size: 10px;
  padding-left: 4px;
  padding-right: 8px;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p5",overflow:"ellipsis"})``,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p5",overflow:"ellipsis"})`
  color: ${props=>props.theme.colors.grey80};
  margin-right: 4px;
`,styled_components_browser_esm.d.span`
  color: ${({theme:theme})=>theme.colors.grey80};
  font-family: monospace;
  font-size: 9px;
  word-break: normal;
`;Object(styled_components_browser_esm.d)(Stack)`
  ${({isLoading:isLoading})=>!isLoading&&styled_components_browser_esm.c`
      overflow: hidden;
    `};
  transition: color 0.2s ease-in, background-color 0.2s ease-in, border-color 0.2s ease-in;
  cursor: pointer;
  background-color: ${({theme:theme,isGreyed:isGreyed})=>isGreyed?theme.colors.brandShade10:theme.colors.white};
  border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey20};
  border-top: 1px solid ${({theme:theme})=>theme.colors.white};
  min-height: ${({height:height,isLoading:isLoading})=>isLoading?"auto":height?`${height}px`:"0"};

  ${({theme:theme,isSelected:isSelected,isOpening:isOpening})=>Boolean(isSelected||isOpening)&&`\n    background-color: ${theme.colors.brandShade10};\n    border-bottom: 1px solid ${theme.colors.brandShade100};\n    border-top: 1px solid ${theme.colors.brandShade100};\n  `};

  ${({theme:theme,isNew:isNew})=>isNew&&`\n    background-color: ${theme.colors.cyan10};\n    border-bottom: 1px solid ${theme.colors.cyan80};\n    border-top: 1px solid ${theme.colors.cyan80};\n  `};

  padding: 12px 8px;
  padding-top: 11px;
  width: ${({width:width})=>width};

  ${({isLoading:isLoading,isSelected:isSelected,theme:theme,isOpening:isOpening})=>!isLoading&&`\n  :hover {\n    background-color: ${theme.colors.brandShade10};\n    border-bottom: 1px solid\n       ${isSelected||isOpening?theme.colors.brandShade100:theme.colors.grey40};\n    border-top: 1px solid\n       ${isSelected||isOpening?theme.colors.brandShade100:theme.colors.grey40};\n  }\n\n  `}
`,styled_components_browser_esm.d.div`
  background-color: ${({theme:theme})=>theme.colors.grey5};
  height: 16px;
  width: ${({width:width})=>width}px;
  min-width: 16px;
  border-radius: ${({round:round})=>round?"100%":"4px"};
`;Object(styled_components_browser_esm.d)(Stack)`
  background-color: ${({theme:theme})=>theme.colors.white};
  border: 1px solid ${({theme:theme})=>theme.colors.grey20};

  ${({theme:theme,isSelected:isSelected})=>isSelected&&`\n    background-color: ${theme.colors.brandShade10};\n    border: 1px solid ${theme.colors.brandShade100};\n  `};

  ${({theme:theme,isNew:isNew})=>isNew&&`\n    background-color: ${theme.colors.cyan10};\n    border: 1px solid ${theme.colors.cyan80};\n  `};

  padding: 12px 11px;
  width: ${({width:width})=>width}px;
  border-radius: 6px;

  ${({isLoading:isLoading,isSelected:isSelected,theme:theme})=>!isLoading&&`\n  :hover {\n    background-color: ${theme.colors.brandShade10};\n    border: 1px solid\n       ${isSelected?theme.colors.brandShade100:theme.colors.grey40};\n  }\n\n  `}
`,styled_components_browser_esm.d.div`
  position: relative;
  margin-top: -14px;
  margin-left: -12px;
  border-radius: 6px 0 6px 0;
`,styled_components_browser_esm.d.div`
  background-color: ${({theme:theme})=>theme.colors.grey5};
  height: 16px;
  width: ${({width:width})=>width}px;
  min-width: 16px;
  border-radius: 4px;
`;const agentStyle=styled_components_browser_esm.c`
  background-color: ${({theme:theme})=>theme.colors.yellow10};
`,userStyle=styled_components_browser_esm.c`
  background-color: ${({theme:theme})=>theme.colors.white};
`,pendingStyle=styled_components_browser_esm.c`
  background-color: ${({theme:theme})=>theme.colors.grey5};
  border-color: ${({theme:theme})=>theme.colors.grey20};
`;styled_components_browser_esm.d.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  transition: border-color 0.2s ease-in-out;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  ${props=>{var _a;return Object(index_module.b)(null!==(_a=props.messageType)&&void 0!==_a?_a:"user").with("pending",(()=>pendingStyle)).with("agent",(()=>agentStyle)).with("user",(()=>userStyle)).exhaustive()}}

  ${props=>props.isOfficialResponse&&styled_components_browser_esm.c`
      border-color: ${({theme:theme})=>theme.colors.purple80};
    `}

  :focus-within {
    border: 1px solid ${({theme:theme})=>theme.colors.cyan80};
  }
`,Object(styled_components_browser_esm.d)(Stack)`
  background-color: ${({theme:theme})=>theme.colors.white};
  border-top: 1px solid ${({theme:theme})=>theme.colors.grey10};
  border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey10};

  padding: 12px 11px;

  width: 100%;

  ${({theme:theme,isSelected:isSelected})=>isSelected&&`\n    border-top: 1px solid ${theme.colors.brandShade100};\n    border-bottom: 1px solid ${theme.colors.brandShade100};\n  `};

  ${({theme:theme,isNew:isNew})=>isNew&&`\n    background-color: ${theme.colors.cyan10};\n    border-top: 1px solid ${theme.colors.cyan80};\n    border-bottom: 1px solid ${theme.colors.cyan80};\n  `};

  ${({theme:theme,isPending:isPending,isNew:isNew})=>isPending&&`\n    background-color: ${isNew?theme.colors.cyan10:theme.colors.grey5};\n  `};

  ${({isLoading:isLoading,isSelected:isSelected,theme:theme})=>!isLoading&&`\n  :hover {\n    background-color: ${theme.colors.brandShade10};\n    border-top: 1px solid\n       ${isSelected?theme.colors.brandShade100:theme.colors.grey40};\n    border-bottom: 1px solid\n       ${isSelected?theme.colors.brandShade100:theme.colors.grey40};\n  }\n  \n  `}
`,styled_components_browser_esm.d.div`
  position: relative;
  border-radius: 6px 0 6px 0;
  padding-right: 12px;
  margin-top: 5px;
`,styled_components_browser_esm.d.div`
  background-color: ${({theme:theme})=>theme.colors.grey5};
  height: 16px;
  width: ${({width:width})=>width}px;
  min-width: 16px;
  border-radius: 4px;
`;Object(styled_components_browser_esm.d)(TSpan)`
  ::before {
    content: "<";
  }

  ::after {
    content: ">";
  }
`,Object(styled_components_browser_esm.d)(TSpan)`
  ::before {
    content: "#";
  }
`,Object(styled_components_browser_esm.d)(Stack)`
  box-sizing: border-box;
  background-color: ${({theme:theme})=>theme.colors.brandShade20};
  border-radius: 10px;
  height: 20px;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  padding: 2px 5px 2px 10px;
  font-size: 11px;
  color: #1c3e55;
`;var tslib=__webpack_require__("./node_modules/.pnpm/tslib@2.4.1/node_modules/tslib/tslib.js"),process=__webpack_require__("./node_modules/.pnpm/framer-motion@6.3.3_react-dom@17.0.2+react@17.0.2/node_modules/framer-motion/dist/es/utils/process.mjs"),createDefinition=function(propNames){return{isEnabled:function(props){return propNames.some((function(name){return!!props[name]}))}}},featureDefinitions={measureLayout:createDefinition(["layout","layoutId","drag"]),animation:createDefinition(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:createDefinition(["exit"]),drag:createDefinition(["drag","dragControls"]),focus:createDefinition(["whileFocus"]),hover:createDefinition(["whileHover","onHoverStart","onHoverEnd"]),tap:createDefinition(["whileTap","onTap","onTapStart","onTapCancel"]),pan:createDefinition(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:createDefinition(["whileInView","onViewportEnter","onViewportLeave"])};var dist=__webpack_require__("./node_modules/.pnpm/hey-listen@1.0.8/node_modules/hey-listen/dist/index.js"),LazyContext=Object(react.createContext)({strict:!1}),featureNames=Object.keys(featureDefinitions),numFeatures=featureNames.length;var MotionConfigContext=Object(react.createContext)({transformPagePoint:function(p){return p},isStatic:!1,reducedMotion:"never"}),MotionContext=Object(react.createContext)({});var PresenceContext=Object(react.createContext)(null),is_browser_isBrowser="undefined"!=typeof document,use_isomorphic_effect_useIsomorphicLayoutEffect=is_browser_isBrowser?react.useLayoutEffect:react.useEffect,prefersReducedMotion={current:null},hasDetected=!1;function useReducedMotion(){return!hasDetected&&function initPrefersReducedMotion(){if(hasDetected=!0,is_browser_isBrowser)if(window.matchMedia){var motionMediaQuery_1=window.matchMedia("(prefers-reduced-motion)"),setReducedMotionPreferences=function(){return prefersReducedMotion.current=motionMediaQuery_1.matches};motionMediaQuery_1.addListener(setReducedMotionPreferences),setReducedMotionPreferences()}else prefersReducedMotion.current=!1}(),Object(tslib.__read)(Object(react.useState)(prefersReducedMotion.current),1)[0]}function useVisualElement(Component,visualState,props,createVisualElement){var lazyContext=Object(react.useContext)(LazyContext),parent=function useVisualElementContext(){return Object(react.useContext)(MotionContext).visualElement}(),presenceContext=Object(react.useContext)(PresenceContext),shouldReduceMotion=function useReducedMotionConfig(){var reducedMotionPreference=useReducedMotion(),reducedMotion=Object(react.useContext)(MotionConfigContext).reducedMotion;return"never"!==reducedMotion&&("always"===reducedMotion||reducedMotionPreference)}(),visualElementRef=Object(react.useRef)(void 0);createVisualElement||(createVisualElement=lazyContext.renderer),!visualElementRef.current&&createVisualElement&&(visualElementRef.current=createVisualElement(Component,{visualState:visualState,parent:parent,props:props,presenceId:null==presenceContext?void 0:presenceContext.id,blockInitialAnimation:!1===(null==presenceContext?void 0:presenceContext.initial),shouldReduceMotion:shouldReduceMotion}));var visualElement=visualElementRef.current;return use_isomorphic_effect_useIsomorphicLayoutEffect((function(){null==visualElement||visualElement.syncRender()})),Object(react.useEffect)((function(){var _a;null===(_a=null==visualElement?void 0:visualElement.animationState)||void 0===_a||_a.animateChanges()})),use_isomorphic_effect_useIsomorphicLayoutEffect((function(){return function(){return null==visualElement?void 0:visualElement.notifyUnmount()}}),[]),visualElement}function isRefObject(ref){return"object"==typeof ref&&Object.prototype.hasOwnProperty.call(ref,"current")}function isVariantLabels(v){return Array.isArray(v)}function isVariantLabel(v){return"string"==typeof v||isVariantLabels(v)}function resolveVariantFromProps(props,definition,custom,currentValues,currentVelocity){var _a;return void 0===currentValues&&(currentValues={}),void 0===currentVelocity&&(currentVelocity={}),"function"==typeof definition&&(definition=definition(null!=custom?custom:props.custom,currentValues,currentVelocity)),"string"==typeof definition&&(definition=null===(_a=props.variants)||void 0===_a?void 0:_a[definition]),"function"==typeof definition&&(definition=definition(null!=custom?custom:props.custom,currentValues,currentVelocity)),definition}function resolveVariant(visualElement,definition,custom){var props=visualElement.getProps();return resolveVariantFromProps(props,definition,null!=custom?custom:props.custom,function getCurrent(visualElement){var current={};return visualElement.forEachValue((function(value,key){return current[key]=value.get()})),current}(visualElement),function getVelocity(visualElement){var velocity={};return visualElement.forEachValue((function(value,key){return velocity[key]=value.getVelocity()})),velocity}(visualElement))}function checkIfControllingVariants(props){var _a;return"function"==typeof(null===(_a=props.animate)||void 0===_a?void 0:_a.start)||isVariantLabel(props.initial)||isVariantLabel(props.animate)||isVariantLabel(props.whileHover)||isVariantLabel(props.whileDrag)||isVariantLabel(props.whileTap)||isVariantLabel(props.whileFocus)||isVariantLabel(props.exit)}function checkIfVariantNode(props){return Boolean(checkIfControllingVariants(props)||props.variants)}function useCreateMotionContext(props){var _a=function getCurrentTreeVariants(props,context){if(checkIfControllingVariants(props)){var initial=props.initial,animate=props.animate;return{initial:!1===initial||isVariantLabel(initial)?initial:void 0,animate:isVariantLabel(animate)?animate:void 0}}return!1!==props.inherit?context:{}}(props,Object(react.useContext)(MotionContext)),initial=_a.initial,animate=_a.animate;return Object(react.useMemo)((function(){return{initial:initial,animate:animate}}),[variantLabelsAsDependency(initial),variantLabelsAsDependency(animate)])}function variantLabelsAsDependency(prop){return Array.isArray(prop)?prop.join(" "):prop}function useConstant(init){var ref=Object(react.useRef)(null);return null===ref.current&&(ref.current=init()),ref.current}var framesync_cjs=__webpack_require__("./node_modules/.pnpm/framesync@6.0.1/node_modules/framesync/dist/framesync.cjs.js"),framesync_cjs_default=__webpack_require__.n(framesync_cjs),popmotion_cjs=__webpack_require__("./node_modules/.pnpm/popmotion@11.0.3/node_modules/popmotion/dist/popmotion.cjs.js");function addUniqueItem(arr,item){-1===arr.indexOf(item)&&arr.push(item)}function removeItem(arr,item){var index=arr.indexOf(item);index>-1&&arr.splice(index,1)}var subscription_manager_SubscriptionManager=function(){function SubscriptionManager(){this.subscriptions=[]}return SubscriptionManager.prototype.add=function(handler){var _this=this;return addUniqueItem(this.subscriptions,handler),function(){return removeItem(_this.subscriptions,handler)}},SubscriptionManager.prototype.notify=function(a,b,c){var numSubscriptions=this.subscriptions.length;if(numSubscriptions)if(1===numSubscriptions)this.subscriptions[0](a,b,c);else for(var i=0;i<numSubscriptions;i++){var handler=this.subscriptions[i];handler&&handler(a,b,c)}},SubscriptionManager.prototype.getSize=function(){return this.subscriptions.length},SubscriptionManager.prototype.clear=function(){this.subscriptions.length=0},SubscriptionManager}(),value_MotionValue=function(){function MotionValue(init){var value,_this=this;this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new subscription_manager_SubscriptionManager,this.velocityUpdateSubscribers=new subscription_manager_SubscriptionManager,this.renderSubscribers=new subscription_manager_SubscriptionManager,this.canTrackVelocity=!1,this.updateAndNotify=function(v,render){void 0===render&&(render=!0),_this.prev=_this.current,_this.current=v;var _a=Object(framesync_cjs.getFrameData)(),delta=_a.delta,timestamp=_a.timestamp;_this.lastUpdated!==timestamp&&(_this.timeDelta=delta,_this.lastUpdated=timestamp,framesync_cjs_default.a.postRender(_this.scheduleVelocityCheck)),_this.prev!==_this.current&&_this.updateSubscribers.notify(_this.current),_this.velocityUpdateSubscribers.getSize()&&_this.velocityUpdateSubscribers.notify(_this.getVelocity()),render&&_this.renderSubscribers.notify(_this.current)},this.scheduleVelocityCheck=function(){return framesync_cjs_default.a.postRender(_this.velocityCheck)},this.velocityCheck=function(_a){_a.timestamp!==_this.lastUpdated&&(_this.prev=_this.current,_this.velocityUpdateSubscribers.notify(_this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=init,this.canTrackVelocity=(value=this.current,!isNaN(parseFloat(value)))}return MotionValue.prototype.onChange=function(subscription){return this.updateSubscribers.add(subscription)},MotionValue.prototype.clearListeners=function(){this.updateSubscribers.clear()},MotionValue.prototype.onRenderRequest=function(subscription){return subscription(this.get()),this.renderSubscribers.add(subscription)},MotionValue.prototype.attach=function(passiveEffect){this.passiveEffect=passiveEffect},MotionValue.prototype.set=function(v,render){void 0===render&&(render=!0),render&&this.passiveEffect?this.passiveEffect(v,this.updateAndNotify):this.updateAndNotify(v,render)},MotionValue.prototype.get=function(){return this.current},MotionValue.prototype.getPrevious=function(){return this.prev},MotionValue.prototype.getVelocity=function(){return this.canTrackVelocity?Object(popmotion_cjs.velocityPerSecond)(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0},MotionValue.prototype.start=function(animation){var _this=this;return this.stop(),new Promise((function(resolve){_this.hasAnimated=!0,_this.stopAnimation=animation(resolve)})).then((function(){return _this.clearAnimation()}))},MotionValue.prototype.stop=function(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()},MotionValue.prototype.isAnimating=function(){return!!this.stopAnimation},MotionValue.prototype.clearAnimation=function(){this.stopAnimation=null},MotionValue.prototype.destroy=function(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()},MotionValue}();function motionValue(init){return new value_MotionValue(init)}var isMotionValue=function(value){return Boolean(null!==value&&"object"==typeof value&&value.getVelocity)},secondsToMilliseconds=function(seconds){return 1e3*seconds},easingLookup={linear:popmotion_cjs.linear,easeIn:popmotion_cjs.easeIn,easeInOut:popmotion_cjs.easeInOut,easeOut:popmotion_cjs.easeOut,circIn:popmotion_cjs.circIn,circInOut:popmotion_cjs.circInOut,circOut:popmotion_cjs.circOut,backIn:popmotion_cjs.backIn,backInOut:popmotion_cjs.backInOut,backOut:popmotion_cjs.backOut,anticipate:popmotion_cjs.anticipate,bounceIn:popmotion_cjs.bounceIn,bounceInOut:popmotion_cjs.bounceInOut,bounceOut:popmotion_cjs.bounceOut},easingDefinitionToFunction=function(definition){if(Array.isArray(definition)){Object(dist.invariant)(4===definition.length,"Cubic bezier arrays must contain four numerical values.");var _a=Object(tslib.__read)(definition,4),x1=_a[0],y1=_a[1],x2=_a[2],y2=_a[3];return Object(popmotion_cjs.cubicBezier)(x1,y1,x2,y2)}return"string"==typeof definition?(Object(dist.invariant)(void 0!==easingLookup[definition],"Invalid easing type '".concat(definition,"'")),easingLookup[definition]):definition},valueTypes_cjs=__webpack_require__("./node_modules/.pnpm/style-value-types@5.0.0/node_modules/style-value-types/dist/valueTypes.cjs.js"),isAnimatable=function(key,value){return"zIndex"!==key&&(!("number"!=typeof value&&!Array.isArray(value))||!("string"!=typeof value||!valueTypes_cjs.complex.test(value)||value.startsWith("url(")))},isKeyframesTarget=function(v){return Array.isArray(v)},underDampedSpring=function(){return{type:"spring",stiffness:500,damping:25,restSpeed:10}},criticallyDampedSpring=function(to){return{type:"spring",stiffness:550,damping:0===to?2*Math.sqrt(550):30,restSpeed:10}},linearTween=function(){return{type:"keyframes",ease:"linear",duration:.3}},keyframes=function(values){return{type:"keyframes",duration:.8,values:values}},defaultTransitions={x:underDampedSpring,y:underDampedSpring,z:underDampedSpring,rotate:underDampedSpring,rotateX:underDampedSpring,rotateY:underDampedSpring,rotateZ:underDampedSpring,scaleX:criticallyDampedSpring,scaleY:criticallyDampedSpring,scale:criticallyDampedSpring,opacity:linearTween,backgroundColor:linearTween,color:linearTween,default:criticallyDampedSpring},type_int_int=Object(tslib.__assign)(Object(tslib.__assign)({},valueTypes_cjs.number),{transform:Math.round}),numberValueTypes={borderWidth:valueTypes_cjs.px,borderTopWidth:valueTypes_cjs.px,borderRightWidth:valueTypes_cjs.px,borderBottomWidth:valueTypes_cjs.px,borderLeftWidth:valueTypes_cjs.px,borderRadius:valueTypes_cjs.px,radius:valueTypes_cjs.px,borderTopLeftRadius:valueTypes_cjs.px,borderTopRightRadius:valueTypes_cjs.px,borderBottomRightRadius:valueTypes_cjs.px,borderBottomLeftRadius:valueTypes_cjs.px,width:valueTypes_cjs.px,maxWidth:valueTypes_cjs.px,height:valueTypes_cjs.px,maxHeight:valueTypes_cjs.px,size:valueTypes_cjs.px,top:valueTypes_cjs.px,right:valueTypes_cjs.px,bottom:valueTypes_cjs.px,left:valueTypes_cjs.px,padding:valueTypes_cjs.px,paddingTop:valueTypes_cjs.px,paddingRight:valueTypes_cjs.px,paddingBottom:valueTypes_cjs.px,paddingLeft:valueTypes_cjs.px,margin:valueTypes_cjs.px,marginTop:valueTypes_cjs.px,marginRight:valueTypes_cjs.px,marginBottom:valueTypes_cjs.px,marginLeft:valueTypes_cjs.px,rotate:valueTypes_cjs.degrees,rotateX:valueTypes_cjs.degrees,rotateY:valueTypes_cjs.degrees,rotateZ:valueTypes_cjs.degrees,scale:valueTypes_cjs.scale,scaleX:valueTypes_cjs.scale,scaleY:valueTypes_cjs.scale,scaleZ:valueTypes_cjs.scale,skew:valueTypes_cjs.degrees,skewX:valueTypes_cjs.degrees,skewY:valueTypes_cjs.degrees,distance:valueTypes_cjs.px,translateX:valueTypes_cjs.px,translateY:valueTypes_cjs.px,translateZ:valueTypes_cjs.px,x:valueTypes_cjs.px,y:valueTypes_cjs.px,z:valueTypes_cjs.px,perspective:valueTypes_cjs.px,transformPerspective:valueTypes_cjs.px,opacity:valueTypes_cjs.alpha,originX:valueTypes_cjs.progressPercentage,originY:valueTypes_cjs.progressPercentage,originZ:valueTypes_cjs.px,zIndex:type_int_int,fillOpacity:valueTypes_cjs.alpha,strokeOpacity:valueTypes_cjs.alpha,numOctaves:type_int_int},defaultValueTypes=Object(tslib.__assign)(Object(tslib.__assign)({},numberValueTypes),{color:valueTypes_cjs.color,backgroundColor:valueTypes_cjs.color,outlineColor:valueTypes_cjs.color,fill:valueTypes_cjs.color,stroke:valueTypes_cjs.color,borderColor:valueTypes_cjs.color,borderTopColor:valueTypes_cjs.color,borderRightColor:valueTypes_cjs.color,borderBottomColor:valueTypes_cjs.color,borderLeftColor:valueTypes_cjs.color,filter:valueTypes_cjs.filter,WebkitFilter:valueTypes_cjs.filter}),getDefaultValueType=function(key){return defaultValueTypes[key]};function getAnimatableNone(key,value){var _a,defaultValueType=getDefaultValueType(key);return defaultValueType!==valueTypes_cjs.filter&&(defaultValueType=valueTypes_cjs.complex),null===(_a=defaultValueType.getAnimatableNone)||void 0===_a?void 0:_a.call(defaultValueType,value)}var instantAnimationState_current=!1,resolveFinalValueInKeyframes=function(v){return isKeyframesTarget(v)?v[v.length-1]||0:v};var legacyRepeatWarning=!1;function convertTransitionToAnimationOptions(_a){var ease=_a.ease,times=_a.times,yoyo=_a.yoyo,flip=_a.flip,loop=_a.loop,transition=Object(tslib.__rest)(_a,["ease","times","yoyo","flip","loop"]),options=Object(tslib.__assign)({},transition);return times&&(options.offset=times),transition.duration&&(options.duration=secondsToMilliseconds(transition.duration)),transition.repeatDelay&&(options.repeatDelay=secondsToMilliseconds(transition.repeatDelay)),ease&&(options.ease=function(ease){return Array.isArray(ease)&&"number"!=typeof ease[0]}(ease)?ease.map(easingDefinitionToFunction):easingDefinitionToFunction(ease)),"tween"===transition.type&&(options.type="keyframes"),(yoyo||loop||flip)&&(Object(dist.warning)(!legacyRepeatWarning,"yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."),legacyRepeatWarning=!0,yoyo?options.repeatType="reverse":loop?options.repeatType="loop":flip&&(options.repeatType="mirror"),options.repeat=loop||yoyo||flip||transition.repeat),"spring"!==transition.type&&(options.type="keyframes"),options}function getPopmotionAnimationOptions(transition,options,key){var _a,valueKey,to,transitionFactory;return Array.isArray(options.to)&&(null!==(_a=transition.duration)&&void 0!==_a||(transition.duration=.8)),function hydrateKeyframes(options){return Array.isArray(options.to)&&null===options.to[0]&&(options.to=Object(tslib.__spreadArray)([],Object(tslib.__read)(options.to),!1),options.to[0]=options.from),options}(options),function isTransitionDefined(_a){_a.when,_a.delay,_a.delayChildren,_a.staggerChildren,_a.staggerDirection,_a.repeat,_a.repeatType,_a.repeatDelay,_a.from;var transition=Object(tslib.__rest)(_a,["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(transition).length}(transition)||(transition=Object(tslib.__assign)(Object(tslib.__assign)({},transition),(valueKey=key,to=options.to,transitionFactory=isKeyframesTarget(to)?keyframes:defaultTransitions[valueKey]||defaultTransitions.default,Object(tslib.__assign)({to:to},transitionFactory(to))))),Object(tslib.__assign)(Object(tslib.__assign)({},options),convertTransitionToAnimationOptions(transition))}function isZero(value){return 0===value||"string"==typeof value&&0===parseFloat(value)&&-1===value.indexOf(" ")}function getZeroUnit(potentialUnitType){return"number"==typeof potentialUnitType?0:getAnimatableNone("",potentialUnitType)}function getValueTransition(transition,key){return transition[key]||transition.default||transition}function startAnimation(key,value,target,transition){return void 0===transition&&(transition={}),instantAnimationState_current&&(transition={type:!1}),value.start((function(onComplete){var delayTimer,controls,animation=function transitions_getAnimation(key,value,target,transition,onComplete){var _a,valueTransition=getValueTransition(transition,key),origin=null!==(_a=valueTransition.from)&&void 0!==_a?_a:value.get(),isTargetAnimatable=isAnimatable(key,target);"none"===origin&&isTargetAnimatable&&"string"==typeof target?origin=getAnimatableNone(key,target):isZero(origin)&&"string"==typeof target?origin=getZeroUnit(target):!Array.isArray(target)&&isZero(target)&&"string"==typeof origin&&(target=getZeroUnit(origin));var isOriginAnimatable=isAnimatable(key,origin);return Object(dist.warning)(isOriginAnimatable===isTargetAnimatable,"You are trying to animate ".concat(key,' from "').concat(origin,'" to "').concat(target,'". ').concat(origin," is not an animatable value - to enable this animation set ").concat(origin," to a value animatable to ").concat(target," via the `style` property.")),isOriginAnimatable&&isTargetAnimatable&&!1!==valueTransition.type?function start(){var options={from:origin,to:target,velocity:value.getVelocity(),onComplete:onComplete,onUpdate:function(v){return value.set(v)}};return"inertia"===valueTransition.type||"decay"===valueTransition.type?Object(popmotion_cjs.inertia)(Object(tslib.__assign)(Object(tslib.__assign)({},options),valueTransition)):Object(popmotion_cjs.animate)(Object(tslib.__assign)(Object(tslib.__assign)({},getPopmotionAnimationOptions(valueTransition,options,key)),{onUpdate:function(v){var _a;options.onUpdate(v),null===(_a=valueTransition.onUpdate)||void 0===_a||_a.call(valueTransition,v)},onComplete:function(){var _a;options.onComplete(),null===(_a=valueTransition.onComplete)||void 0===_a||_a.call(valueTransition)}}))}:function set(){var _a,_b,finalTarget=resolveFinalValueInKeyframes(target);return value.set(finalTarget),onComplete(),null===(_a=null==valueTransition?void 0:valueTransition.onUpdate)||void 0===_a||_a.call(valueTransition,finalTarget),null===(_b=null==valueTransition?void 0:valueTransition.onComplete)||void 0===_b||_b.call(valueTransition),{stop:function(){}}}}(key,value,target,transition,onComplete),delay=function getDelayFromTransition(transition,key){var _a,_b;return null!==(_b=null!==(_a=(getValueTransition(transition,key)||{}).delay)&&void 0!==_a?_a:transition.delay)&&void 0!==_b?_b:0}(transition,key),start=function(){return controls=animation()};return delay?delayTimer=window.setTimeout(start,secondsToMilliseconds(delay)):start(),function(){clearTimeout(delayTimer),null==controls||controls.stop()}}))}var borders=["TopLeft","TopRight","BottomLeft","BottomRight"],numBorders=borders.length,asNumber=function(value){return"string"==typeof value?parseFloat(value):value},isPx=function(value){return"number"==typeof value||valueTypes_cjs.px.test(value)};function getRadius(values,radiusName){var _a;return null!==(_a=values[radiusName])&&void 0!==_a?_a:values.borderRadius}var easeCrossfadeIn=compress(0,.5,popmotion_cjs.circOut),easeCrossfadeOut=compress(.5,.95,popmotion_cjs.linear);function compress(min,max,easing){return function(p){return p<min?0:p>max?1:easing(Object(popmotion_cjs.progress)(min,max,p))}}function copyAxisInto(axis,originAxis){axis.min=originAxis.min,axis.max=originAxis.max}function copyBoxInto(box,originBox){copyAxisInto(box.x,originBox.x),copyAxisInto(box.y,originBox.y)}function isIdentityScale(scale){return void 0===scale||1===scale}function hasScale(_a){var scale=_a.scale,scaleX=_a.scaleX,scaleY=_a.scaleY;return!isIdentityScale(scale)||!isIdentityScale(scaleX)||!isIdentityScale(scaleY)}function has_transform_hasTransform(values){return hasScale(values)||hasTranslate(values.x)||hasTranslate(values.y)||values.z||values.rotate||values.rotateX||values.rotateY}function hasTranslate(value){return value&&"0%"!==value}function scalePoint(point,scale,originPoint){return originPoint+scale*(point-originPoint)}function applyPointDelta(point,translate,scale,originPoint,boxScale){return void 0!==boxScale&&(point=scalePoint(point,boxScale,originPoint)),scalePoint(point,scale,originPoint)+translate}function applyAxisDelta(axis,translate,scale,originPoint,boxScale){void 0===translate&&(translate=0),void 0===scale&&(scale=1),axis.min=applyPointDelta(axis.min,translate,scale,originPoint,boxScale),axis.max=applyPointDelta(axis.max,translate,scale,originPoint,boxScale)}function applyBoxDelta(box,_a){var x=_a.x,y=_a.y;applyAxisDelta(box.x,x.translate,x.scale,x.originPoint),applyAxisDelta(box.y,y.translate,y.scale,y.originPoint)}function translateAxis(axis,distance){axis.min=axis.min+distance,axis.max=axis.max+distance}function transformAxis(axis,transforms,_a){var _b=Object(tslib.__read)(_a,3),key=_b[0],scaleKey=_b[1],originKey=_b[2],axisOrigin=void 0!==transforms[originKey]?transforms[originKey]:.5,originPoint=Object(popmotion_cjs.mix)(axis.min,axis.max,axisOrigin);applyAxisDelta(axis,transforms[key],transforms[scaleKey],originPoint,transforms.scale)}var xKeys=["x","scaleX","originX"],yKeys=["y","scaleY","originY"];function transformBox(box,transform){transformAxis(box.x,transform,xKeys),transformAxis(box.y,transform,yKeys)}function calcLength(axis){return axis.max-axis.min}function isNear(value,target,maxDistance){return void 0===target&&(target=0),void 0===maxDistance&&(maxDistance=.01),Object(popmotion_cjs.distance)(value,target)<maxDistance}function calcAxisDelta(delta,source,target,origin){void 0===origin&&(origin=.5),delta.origin=origin,delta.originPoint=Object(popmotion_cjs.mix)(source.min,source.max,delta.origin),delta.scale=calcLength(target)/calcLength(source),(isNear(delta.scale,1,1e-4)||isNaN(delta.scale))&&(delta.scale=1),delta.translate=Object(popmotion_cjs.mix)(target.min,target.max,delta.origin)-delta.originPoint,(isNear(delta.translate)||isNaN(delta.translate))&&(delta.translate=0)}function calcBoxDelta(delta,source,target,origin){calcAxisDelta(delta.x,source.x,target.x,null==origin?void 0:origin.originX),calcAxisDelta(delta.y,source.y,target.y,null==origin?void 0:origin.originY)}function calcRelativeAxis(target,relative,parent){target.min=parent.min+relative.min,target.max=target.min+calcLength(relative)}function calcRelativeAxisPosition(target,layout,parent){target.min=layout.min-parent.min,target.max=target.min+calcLength(layout)}function calcRelativePosition(target,layout,parent){calcRelativeAxisPosition(target.x,layout.x,parent.x),calcRelativeAxisPosition(target.y,layout.y,parent.y)}function removePointDelta(point,translate,scale,originPoint,boxScale){return point=scalePoint(point-=translate,1/scale,originPoint),void 0!==boxScale&&(point=scalePoint(point,1/boxScale,originPoint)),point}function removeAxisTransforms(axis,transforms,_a,origin,sourceAxis){var _b=Object(tslib.__read)(_a,3),key=_b[0],scaleKey=_b[1],originKey=_b[2];!function removeAxisDelta(axis,translate,scale,origin,boxScale,originAxis,sourceAxis){if(void 0===translate&&(translate=0),void 0===scale&&(scale=1),void 0===origin&&(origin=.5),void 0===originAxis&&(originAxis=axis),void 0===sourceAxis&&(sourceAxis=axis),valueTypes_cjs.percent.test(translate)&&(translate=parseFloat(translate),translate=Object(popmotion_cjs.mix)(sourceAxis.min,sourceAxis.max,translate/100)-sourceAxis.min),"number"==typeof translate){var originPoint=Object(popmotion_cjs.mix)(originAxis.min,originAxis.max,origin);axis===originAxis&&(originPoint-=translate),axis.min=removePointDelta(axis.min,translate,scale,originPoint,boxScale),axis.max=removePointDelta(axis.max,translate,scale,originPoint,boxScale)}}(axis,transforms[key],transforms[scaleKey],transforms[originKey],transforms.scale,origin,sourceAxis)}var delta_remove_xKeys=["x","scaleX","originX"],delta_remove_yKeys=["y","scaleY","originY"];function removeBoxTransforms(box,transforms,originBox,sourceBox){removeAxisTransforms(box.x,transforms,delta_remove_xKeys,null==originBox?void 0:originBox.x,null==sourceBox?void 0:sourceBox.x),removeAxisTransforms(box.y,transforms,delta_remove_yKeys,null==originBox?void 0:originBox.y,null==sourceBox?void 0:sourceBox.y)}function isAxisDeltaZero(delta){return 0===delta.translate&&1===delta.scale}function isDeltaZero(delta){return isAxisDeltaZero(delta.x)&&isAxisDeltaZero(delta.y)}function boxEquals(a,b){return a.x.min===b.x.min&&a.x.max===b.x.max&&a.y.min===b.y.min&&a.y.max===b.y.max}var stack_NodeStack=function(){function NodeStack(){this.members=[]}return NodeStack.prototype.add=function(node){addUniqueItem(this.members,node),node.scheduleRender()},NodeStack.prototype.remove=function(node){if(removeItem(this.members,node),node===this.prevLead&&(this.prevLead=void 0),node===this.lead){var prevLead=this.members[this.members.length-1];prevLead&&this.promote(prevLead)}},NodeStack.prototype.relegate=function(node){var prevLead,indexOfNode=this.members.findIndex((function(member){return node===member}));if(0===indexOfNode)return!1;for(var i=indexOfNode;i>=0;i--){var member=this.members[i];if(!1!==member.isPresent){prevLead=member;break}}return!!prevLead&&(this.promote(prevLead),!0)},NodeStack.prototype.promote=function(node,preserveFollowOpacity){var _a,prevLead=this.lead;node!==prevLead&&(this.prevLead=prevLead,this.lead=node,node.show(),prevLead&&(prevLead.instance&&prevLead.scheduleRender(),node.scheduleRender(),node.resumeFrom=prevLead,preserveFollowOpacity&&(node.resumeFrom.preserveOpacity=!0),prevLead.snapshot&&(node.snapshot=prevLead.snapshot,node.snapshot.latestValues=prevLead.animationValues||prevLead.latestValues,node.snapshot.isShared=!0),(null===(_a=node.root)||void 0===_a?void 0:_a.isUpdating)&&(node.isLayoutDirty=!0),!1===node.options.crossfade&&prevLead.hide()))},NodeStack.prototype.exitAnimationComplete=function(){this.members.forEach((function(node){var _a,_b,_c,_d,_e;null===(_b=(_a=node.options).onExitComplete)||void 0===_b||_b.call(_a),null===(_e=null===(_c=node.resumingFrom)||void 0===_c?void 0:(_d=_c.options).onExitComplete)||void 0===_e||_e.call(_d)}))},NodeStack.prototype.scheduleRender=function(){this.members.forEach((function(node){node.instance&&node.scheduleRender(!1)}))},NodeStack.prototype.removeLeadSnapshot=function(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)},NodeStack}(),scaleCorrectors={};function buildProjectionTransform(delta,treeScale,latestTransform){var xTranslate=delta.x.translate/treeScale.x,yTranslate=delta.y.translate/treeScale.y,transform="translate3d(".concat(xTranslate,"px, ").concat(yTranslate,"px, 0) ");if(latestTransform){var rotate=latestTransform.rotate,rotateX=latestTransform.rotateX,rotateY=latestTransform.rotateY;rotate&&(transform+="rotate(".concat(rotate,"deg) ")),rotateX&&(transform+="rotateX(".concat(rotateX,"deg) ")),rotateY&&(transform+="rotateY(".concat(rotateY,"deg) "))}return"translate3d(0px, 0px, 0) scale(1, 1)"===(transform+="scale(".concat(delta.x.scale,", ").concat(delta.y.scale,")"))?"none":transform}function eachAxis(callback){return[callback("x"),callback("y")]}var transformAxes=["","X","Y","Z"],transformProps=["transformPerspective","x","y","z"];function sortTransformProps(a,b){return transformProps.indexOf(a)-transformProps.indexOf(b)}["translate","scale","rotate","skew"].forEach((function(operationKey){return transformAxes.forEach((function(axesKey){return transformProps.push(operationKey+axesKey)}))}));var transformPropSet=new Set(transformProps);function isTransformProp(key){return transformPropSet.has(key)}var transformOriginProps=new Set(["originX","originY","originZ"]);function isTransformOriginProp(key){return transformOriginProps.has(key)}var compareByDepth=function(a,b){return a.depth-b.depth},flat_tree_FlatTree=function(){function FlatTree(){this.children=[],this.isDirty=!1}return FlatTree.prototype.add=function(child){addUniqueItem(this.children,child),this.isDirty=!0},FlatTree.prototype.remove=function(child){removeItem(this.children,child),this.isDirty=!0},FlatTree.prototype.forEach=function(callback){this.isDirty&&this.children.sort(compareByDepth),this.isDirty=!1,this.children.forEach(callback)},FlatTree}();function resolveMotionValue(value){var v,unwrappedValue=isMotionValue(value)?value.get():value;return v=unwrappedValue,Boolean(v&&"object"==typeof v&&v.mix&&v.toValue)?unwrappedValue.toValue():unwrappedValue}var globalProjectionState={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function createProjectionNode(_a){var attachResizeListener=_a.attachResizeListener,defaultParent=_a.defaultParent,measureScroll=_a.measureScroll,resetTransform=_a.resetTransform;return function(){function ProjectionNode(id,latestValues,parent){var _this=this;void 0===latestValues&&(latestValues={}),void 0===parent&&(parent=null==defaultParent?void 0:defaultParent()),this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=function(){_this.isUpdating&&(_this.isUpdating=!1,_this.clearAllSnapshots())},this.updateProjection=function(){_this.nodes.forEach(resolveTargetDelta),_this.nodes.forEach(calcProjection)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.id=id,this.latestValues=latestValues,this.root=parent?parent.root||parent:this,this.path=parent?Object(tslib.__spreadArray)(Object(tslib.__spreadArray)([],Object(tslib.__read)(parent.path),!1),[parent],!1):[],this.parent=parent,this.depth=parent?parent.depth+1:0,id&&this.root.registerPotentialNode(id,this);for(var i=0;i<this.path.length;i++)this.path[i].shouldResetTransform=!0;this.root===this&&(this.nodes=new flat_tree_FlatTree)}return ProjectionNode.prototype.addEventListener=function(name,handler){return this.eventHandlers.has(name)||this.eventHandlers.set(name,new subscription_manager_SubscriptionManager),this.eventHandlers.get(name).add(handler)},ProjectionNode.prototype.notifyListeners=function(name){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];var subscriptionManager=this.eventHandlers.get(name);null==subscriptionManager||subscriptionManager.notify.apply(subscriptionManager,Object(tslib.__spreadArray)([],Object(tslib.__read)(args),!1))},ProjectionNode.prototype.hasListeners=function(name){return this.eventHandlers.has(name)},ProjectionNode.prototype.registerPotentialNode=function(id,node){this.potentialNodes.set(id,node)},ProjectionNode.prototype.mount=function(instance,isLayoutDirty){var _a,_this=this;if(void 0===isLayoutDirty&&(isLayoutDirty=!1),!this.instance){this.isSVG=instance instanceof SVGElement&&"svg"!==instance.tagName,this.instance=instance;var _b=this.options,layoutId=_b.layoutId,layout=_b.layout,visualElement=_b.visualElement;if(visualElement&&!visualElement.getInstance()&&visualElement.mount(instance),this.root.nodes.add(this),null===(_a=this.parent)||void 0===_a||_a.children.add(this),this.id&&this.root.potentialNodes.delete(this.id),isLayoutDirty&&(layout||layoutId)&&(this.isLayoutDirty=!0),attachResizeListener){var unblockTimeout_1,resizeUnblockUpdate_1=function(){return _this.root.updateBlockedByResize=!1};attachResizeListener(instance,(function(){_this.root.updateBlockedByResize=!0,clearTimeout(unblockTimeout_1),unblockTimeout_1=window.setTimeout(resizeUnblockUpdate_1,250),globalProjectionState.hasAnimatedSinceResize&&(globalProjectionState.hasAnimatedSinceResize=!1,_this.nodes.forEach(finishAnimation))}))}layoutId&&this.root.registerSharedNode(layoutId,this),!1!==this.options.animate&&visualElement&&(layoutId||layout)&&this.addEventListener("didUpdate",(function(_a){var _b,_c,_d,_e,_f,delta=_a.delta,hasLayoutChanged=_a.hasLayoutChanged,hasRelativeTargetChanged=_a.hasRelativeTargetChanged,newLayout=_a.layout;if(_this.isTreeAnimationBlocked())return _this.target=void 0,void(_this.relativeTarget=void 0);var layoutTransition=null!==(_c=null!==(_b=_this.options.transition)&&void 0!==_b?_b:visualElement.getDefaultTransition())&&void 0!==_c?_c:defaultLayoutTransition,_g=visualElement.getProps(),onLayoutAnimationStart=_g.onLayoutAnimationStart,onLayoutAnimationComplete=_g.onLayoutAnimationComplete,targetChanged=!_this.targetLayout||!boxEquals(_this.targetLayout,newLayout)||hasRelativeTargetChanged,hasOnlyRelativeTargetChanged=!hasLayoutChanged&&hasRelativeTargetChanged;if((null===(_d=_this.resumeFrom)||void 0===_d?void 0:_d.instance)||hasOnlyRelativeTargetChanged||hasLayoutChanged&&(targetChanged||!_this.currentAnimation)){_this.resumeFrom&&(_this.resumingFrom=_this.resumeFrom,_this.resumingFrom.resumingFrom=void 0),_this.setAnimationOrigin(delta,hasOnlyRelativeTargetChanged);var animationOptions=Object(tslib.__assign)(Object(tslib.__assign)({},getValueTransition(layoutTransition,"layout")),{onPlay:onLayoutAnimationStart,onComplete:onLayoutAnimationComplete});visualElement.shouldReduceMotion&&(animationOptions.delay=0,animationOptions.type=!1),_this.startAnimation(animationOptions)}else hasLayoutChanged||0!==_this.animationProgress||_this.finishAnimation(),_this.isLead()&&(null===(_f=(_e=_this.options).onExitComplete)||void 0===_f||_f.call(_e));_this.targetLayout=newLayout}))}},ProjectionNode.prototype.unmount=function(){var _a,_b;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),null===(_a=this.getStack())||void 0===_a||_a.remove(this),null===(_b=this.parent)||void 0===_b||_b.children.delete(this),this.instance=void 0,framesync_cjs.cancelSync.preRender(this.updateProjection)},ProjectionNode.prototype.blockUpdate=function(){this.updateManuallyBlocked=!0},ProjectionNode.prototype.unblockUpdate=function(){this.updateManuallyBlocked=!1},ProjectionNode.prototype.isUpdateBlocked=function(){return this.updateManuallyBlocked||this.updateBlockedByResize},ProjectionNode.prototype.isTreeAnimationBlocked=function(){var _a;return this.isAnimationBlocked||(null===(_a=this.parent)||void 0===_a?void 0:_a.isTreeAnimationBlocked())||!1},ProjectionNode.prototype.startUpdate=function(){var _a;this.isUpdateBlocked()||(this.isUpdating=!0,null===(_a=this.nodes)||void 0===_a||_a.forEach(resetRotation))},ProjectionNode.prototype.willUpdate=function(shouldNotifyListeners){var _a,_b,_c;if(void 0===shouldNotifyListeners&&(shouldNotifyListeners=!0),this.root.isUpdateBlocked())null===(_b=(_a=this.options).onExitComplete)||void 0===_b||_b.call(_a);else if(!this.root.isUpdating&&this.root.startUpdate(),!this.isLayoutDirty){this.isLayoutDirty=!0;for(var i=0;i<this.path.length;i++){var node=this.path[i];node.shouldResetTransform=!0,node.updateScroll()}var _d=this.options,layoutId=_d.layoutId,layout=_d.layout;if(void 0!==layoutId||layout){var transformTemplate=null===(_c=this.options.visualElement)||void 0===_c?void 0:_c.getProps().transformTemplate;this.prevTransformTemplateValue=null==transformTemplate?void 0:transformTemplate(this.latestValues,""),this.updateSnapshot(),shouldNotifyListeners&&this.notifyListeners("willUpdate")}}},ProjectionNode.prototype.didUpdate=function(){if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(clearMeasurements);this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(mountNodeEarly),this.potentialNodes.clear()),this.nodes.forEach(resetTransformStyle),this.nodes.forEach(updateLayout),this.nodes.forEach(notifyLayoutUpdate),this.clearAllSnapshots(),framesync_cjs.flushSync.update(),framesync_cjs.flushSync.preRender(),framesync_cjs.flushSync.render())},ProjectionNode.prototype.clearAllSnapshots=function(){this.nodes.forEach(clearSnapshot),this.sharedNodes.forEach(removeLeadSnapshots)},ProjectionNode.prototype.scheduleUpdateProjection=function(){framesync_cjs_default.a.preRender(this.updateProjection,!1,!0)},ProjectionNode.prototype.scheduleCheckAfterUnmount=function(){var _this=this;framesync_cjs_default.a.postRender((function(){_this.isLayoutDirty?_this.root.didUpdate():_this.root.checkUpdateFailed()}))},ProjectionNode.prototype.updateSnapshot=function(){if(!this.snapshot&&this.instance){var measured=this.measure(),layout=this.removeTransform(this.removeElementScroll(measured));roundBox(layout),this.snapshot={measured:measured,layout:layout,latestValues:{}}}},ProjectionNode.prototype.updateLayout=function(){var _a;if(this.instance&&(this.updateScroll(),this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty)){if(this.resumeFrom&&!this.resumeFrom.instance)for(var i=0;i<this.path.length;i++){this.path[i].updateScroll()}var measured=this.measure();roundBox(measured);var prevLayout=this.layout;this.layout={measured:measured,actual:this.removeElementScroll(measured)},this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.actual),null===(_a=this.options.visualElement)||void 0===_a||_a.notifyLayoutMeasure(this.layout.actual,null==prevLayout?void 0:prevLayout.actual)}},ProjectionNode.prototype.updateScroll=function(){this.options.layoutScroll&&this.instance&&(this.scroll=measureScroll(this.instance))},ProjectionNode.prototype.resetTransform=function(){var _a;if(resetTransform){var isResetRequested=this.isLayoutDirty||this.shouldResetTransform,hasProjection=this.projectionDelta&&!isDeltaZero(this.projectionDelta),transformTemplate=null===(_a=this.options.visualElement)||void 0===_a?void 0:_a.getProps().transformTemplate,transformTemplateValue=null==transformTemplate?void 0:transformTemplate(this.latestValues,""),transformTemplateHasChanged=transformTemplateValue!==this.prevTransformTemplateValue;isResetRequested&&(hasProjection||has_transform_hasTransform(this.latestValues)||transformTemplateHasChanged)&&(resetTransform(this.instance,transformTemplateValue),this.shouldResetTransform=!1,this.scheduleRender())}},ProjectionNode.prototype.measure=function(){var visualElement=this.options.visualElement;if(!visualElement)return{x:{min:0,max:0},y:{min:0,max:0}};var box=visualElement.measureViewportBox(),scroll=this.root.scroll;return scroll&&(translateAxis(box.x,scroll.x),translateAxis(box.y,scroll.y)),box},ProjectionNode.prototype.removeElementScroll=function(box){var boxWithoutScroll={x:{min:0,max:0},y:{min:0,max:0}};copyBoxInto(boxWithoutScroll,box);for(var i=0;i<this.path.length;i++){var node=this.path[i],scroll_1=node.scroll,options=node.options;node!==this.root&&scroll_1&&options.layoutScroll&&(translateAxis(boxWithoutScroll.x,scroll_1.x),translateAxis(boxWithoutScroll.y,scroll_1.y))}return boxWithoutScroll},ProjectionNode.prototype.applyTransform=function(box,transformOnly){void 0===transformOnly&&(transformOnly=!1);var withTransforms={x:{min:0,max:0},y:{min:0,max:0}};copyBoxInto(withTransforms,box);for(var i=0;i<this.path.length;i++){var node=this.path[i];!transformOnly&&node.options.layoutScroll&&node.scroll&&node!==node.root&&transformBox(withTransforms,{x:-node.scroll.x,y:-node.scroll.y}),has_transform_hasTransform(node.latestValues)&&transformBox(withTransforms,node.latestValues)}return has_transform_hasTransform(this.latestValues)&&transformBox(withTransforms,this.latestValues),withTransforms},ProjectionNode.prototype.removeTransform=function(box){var _a,boxWithoutTransform={x:{min:0,max:0},y:{min:0,max:0}};copyBoxInto(boxWithoutTransform,box);for(var i=0;i<this.path.length;i++){var node=this.path[i];if(node.instance&&has_transform_hasTransform(node.latestValues)){hasScale(node.latestValues)&&node.updateSnapshot();var sourceBox={x:{min:0,max:0},y:{min:0,max:0}};copyBoxInto(sourceBox,node.measure()),removeBoxTransforms(boxWithoutTransform,node.latestValues,null===(_a=node.snapshot)||void 0===_a?void 0:_a.layout,sourceBox)}}return has_transform_hasTransform(this.latestValues)&&removeBoxTransforms(boxWithoutTransform,this.latestValues),boxWithoutTransform},ProjectionNode.prototype.setTargetDelta=function(delta){this.targetDelta=delta,this.root.scheduleUpdateProjection()},ProjectionNode.prototype.setOptions=function(options){var _a;this.options=Object(tslib.__assign)(Object(tslib.__assign)(Object(tslib.__assign)({},this.options),options),{crossfade:null===(_a=options.crossfade)||void 0===_a||_a})},ProjectionNode.prototype.clearMeasurements=function(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1},ProjectionNode.prototype.resolveTargetDelta=function(){var _a,_b=this.options,layout=_b.layout,layoutId=_b.layoutId;this.layout&&(layout||layoutId)&&(this.targetDelta||this.relativeTarget||(this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&this.relativeParent.layout&&(this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},calcRelativePosition(this.relativeTargetOrigin,this.layout.actual,this.relativeParent.layout.actual),copyBoxInto(this.relativeTarget,this.relativeTargetOrigin))),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&(null===(_a=this.relativeParent)||void 0===_a?void 0:_a.target)?function calcRelativeBox(target,relative,parent){calcRelativeAxis(target.x,relative.x,parent.x),calcRelativeAxis(target.y,relative.y,parent.y)}(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.actual):copyBoxInto(this.target,this.layout.actual),applyBoxDelta(this.target,this.targetDelta)):copyBoxInto(this.target,this.layout.actual),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.relativeParent=this.getClosestProjectingParent(),this.relativeParent&&Boolean(this.relativeParent.resumingFrom)===Boolean(this.resumingFrom)&&!this.relativeParent.options.layoutScroll&&this.relativeParent.target&&(this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},calcRelativePosition(this.relativeTargetOrigin,this.target,this.relativeParent.target),copyBoxInto(this.relativeTarget,this.relativeTargetOrigin)))))},ProjectionNode.prototype.getClosestProjectingParent=function(){if(this.parent&&!has_transform_hasTransform(this.parent.latestValues))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()},ProjectionNode.prototype.calcProjection=function(){var _a,_b=this.options,layout=_b.layout,layoutId=_b.layoutId;if(this.isTreeAnimating=Boolean((null===(_a=this.parent)||void 0===_a?void 0:_a.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),this.layout&&(layout||layoutId)){var lead=this.getLead();copyBoxInto(this.layoutCorrected,this.layout.actual),function applyTreeDeltas(box,treeScale,treePath,isSharedTransition){var _a,_b;void 0===isSharedTransition&&(isSharedTransition=!1);var treeLength=treePath.length;if(treeLength){var node,delta;treeScale.x=treeScale.y=1;for(var i=0;i<treeLength;i++)delta=(node=treePath[i]).projectionDelta,"contents"!==(null===(_b=null===(_a=node.instance)||void 0===_a?void 0:_a.style)||void 0===_b?void 0:_b.display)&&(isSharedTransition&&node.options.layoutScroll&&node.scroll&&node!==node.root&&transformBox(box,{x:-node.scroll.x,y:-node.scroll.y}),delta&&(treeScale.x*=delta.x.scale,treeScale.y*=delta.y.scale,applyBoxDelta(box,delta)),isSharedTransition&&has_transform_hasTransform(node.latestValues)&&transformBox(box,node.latestValues))}}(this.layoutCorrected,this.treeScale,this.path,Boolean(this.resumingFrom)||this!==lead);var target=lead.target;if(target){this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});var prevTreeScaleX=this.treeScale.x,prevTreeScaleY=this.treeScale.y,prevProjectionTransform=this.projectionTransform;calcBoxDelta(this.projectionDelta,this.layoutCorrected,target,this.latestValues),this.projectionTransform=buildProjectionTransform(this.projectionDelta,this.treeScale),this.projectionTransform===prevProjectionTransform&&this.treeScale.x===prevTreeScaleX&&this.treeScale.y===prevTreeScaleY||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",target))}}},ProjectionNode.prototype.hide=function(){this.isVisible=!1},ProjectionNode.prototype.show=function(){this.isVisible=!0},ProjectionNode.prototype.scheduleRender=function(notifyAll){var _a,_b,_c;void 0===notifyAll&&(notifyAll=!0),null===(_b=(_a=this.options).scheduleRender)||void 0===_b||_b.call(_a),notifyAll&&(null===(_c=this.getStack())||void 0===_c||_c.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)},ProjectionNode.prototype.setAnimationOrigin=function(delta,hasOnlyRelativeTargetChanged){var _a,_this=this;void 0===hasOnlyRelativeTargetChanged&&(hasOnlyRelativeTargetChanged=!1);var snapshot=this.snapshot,snapshotLatestValues=(null==snapshot?void 0:snapshot.latestValues)||{},mixedValues=Object(tslib.__assign)({},this.latestValues),targetDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!hasOnlyRelativeTargetChanged;var relativeLayout={x:{min:0,max:0},y:{min:0,max:0}},isSharedLayoutAnimation=null==snapshot?void 0:snapshot.isShared,isOnlyMember=((null===(_a=this.getStack())||void 0===_a?void 0:_a.members.length)||0)<=1,shouldCrossfadeOpacity=Boolean(isSharedLayoutAnimation&&!isOnlyMember&&!0===this.options.crossfade&&!this.path.some(hasOpacityCrossfade));this.animationProgress=0,this.mixTargetDelta=function(latest){var _a,progress=latest/1e3;mixAxisDelta(targetDelta.x,delta.x,progress),mixAxisDelta(targetDelta.y,delta.y,progress),_this.setTargetDelta(targetDelta),_this.relativeTarget&&_this.relativeTargetOrigin&&_this.layout&&(null===(_a=_this.relativeParent)||void 0===_a?void 0:_a.layout)&&(calcRelativePosition(relativeLayout,_this.layout.actual,_this.relativeParent.layout.actual),function mixBox(output,from,to,p){mixAxis(output.x,from.x,to.x,p),mixAxis(output.y,from.y,to.y,p)}(_this.relativeTarget,_this.relativeTargetOrigin,relativeLayout,progress)),isSharedLayoutAnimation&&(_this.animationValues=mixedValues,function mixValues(target,follow,lead,progress,shouldCrossfadeOpacity,isOnlyMember){var _a,_b,_c,_d;shouldCrossfadeOpacity?(target.opacity=Object(popmotion_cjs.mix)(0,null!==(_a=lead.opacity)&&void 0!==_a?_a:1,easeCrossfadeIn(progress)),target.opacityExit=Object(popmotion_cjs.mix)(null!==(_b=follow.opacity)&&void 0!==_b?_b:1,0,easeCrossfadeOut(progress))):isOnlyMember&&(target.opacity=Object(popmotion_cjs.mix)(null!==(_c=follow.opacity)&&void 0!==_c?_c:1,null!==(_d=lead.opacity)&&void 0!==_d?_d:1,progress));for(var i=0;i<numBorders;i++){var borderLabel="border".concat(borders[i],"Radius"),followRadius=getRadius(follow,borderLabel),leadRadius=getRadius(lead,borderLabel);void 0===followRadius&&void 0===leadRadius||(followRadius||(followRadius=0),leadRadius||(leadRadius=0),0===followRadius||0===leadRadius||isPx(followRadius)===isPx(leadRadius)?(target[borderLabel]=Math.max(Object(popmotion_cjs.mix)(asNumber(followRadius),asNumber(leadRadius),progress),0),(valueTypes_cjs.percent.test(leadRadius)||valueTypes_cjs.percent.test(followRadius))&&(target[borderLabel]+="%")):target[borderLabel]=leadRadius)}(follow.rotate||lead.rotate)&&(target.rotate=Object(popmotion_cjs.mix)(follow.rotate||0,lead.rotate||0,progress))}(mixedValues,snapshotLatestValues,_this.latestValues,progress,shouldCrossfadeOpacity,isOnlyMember)),_this.root.scheduleUpdateProjection(),_this.scheduleRender(),_this.animationProgress=progress},this.mixTargetDelta(0)},ProjectionNode.prototype.startAnimation=function(options){var _a,_b,_this=this;this.notifyListeners("animationStart"),null===(_a=this.currentAnimation)||void 0===_a||_a.stop(),this.resumingFrom&&(null===(_b=this.resumingFrom.currentAnimation)||void 0===_b||_b.stop()),this.pendingAnimation&&(framesync_cjs.cancelSync.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=framesync_cjs_default.a.update((function(){globalProjectionState.hasAnimatedSinceResize=!0,_this.currentAnimation=function animate_animate(from,to,transition){void 0===transition&&(transition={});var value=isMotionValue(from)?from:motionValue(from);return startAnimation("",value,to,transition),{stop:function(){return value.stop()},isAnimating:function(){return value.isAnimating()}}}(0,1e3,Object(tslib.__assign)(Object(tslib.__assign)({},options),{onUpdate:function(latest){var _a;_this.mixTargetDelta(latest),null===(_a=options.onUpdate)||void 0===_a||_a.call(options,latest)},onComplete:function(){var _a;null===(_a=options.onComplete)||void 0===_a||_a.call(options),_this.completeAnimation()}})),_this.resumingFrom&&(_this.resumingFrom.currentAnimation=_this.currentAnimation),_this.pendingAnimation=void 0}))},ProjectionNode.prototype.completeAnimation=function(){var _a;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),null===(_a=this.getStack())||void 0===_a||_a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")},ProjectionNode.prototype.finishAnimation=function(){var _a;this.currentAnimation&&(null===(_a=this.mixTargetDelta)||void 0===_a||_a.call(this,1e3),this.currentAnimation.stop()),this.completeAnimation()},ProjectionNode.prototype.applyTransformsToTarget=function(){var _a=this.getLead(),targetWithTransforms=_a.targetWithTransforms,target=_a.target,layout=_a.layout,latestValues=_a.latestValues;targetWithTransforms&&target&&layout&&(copyBoxInto(targetWithTransforms,target),transformBox(targetWithTransforms,latestValues),calcBoxDelta(this.projectionDeltaWithTransform,this.layoutCorrected,targetWithTransforms,latestValues))},ProjectionNode.prototype.registerSharedNode=function(layoutId,node){var _a,_b,_c;this.sharedNodes.has(layoutId)||this.sharedNodes.set(layoutId,new stack_NodeStack),this.sharedNodes.get(layoutId).add(node),node.promote({transition:null===(_a=node.options.initialPromotionConfig)||void 0===_a?void 0:_a.transition,preserveFollowOpacity:null===(_c=null===(_b=node.options.initialPromotionConfig)||void 0===_b?void 0:_b.shouldPreserveFollowOpacity)||void 0===_c?void 0:_c.call(_b,node)})},ProjectionNode.prototype.isLead=function(){var stack=this.getStack();return!stack||stack.lead===this},ProjectionNode.prototype.getLead=function(){var _a;return this.options.layoutId&&(null===(_a=this.getStack())||void 0===_a?void 0:_a.lead)||this},ProjectionNode.prototype.getPrevLead=function(){var _a;return this.options.layoutId?null===(_a=this.getStack())||void 0===_a?void 0:_a.prevLead:void 0},ProjectionNode.prototype.getStack=function(){var layoutId=this.options.layoutId;if(layoutId)return this.root.sharedNodes.get(layoutId)},ProjectionNode.prototype.promote=function(_a){var _b=void 0===_a?{}:_a,needsReset=_b.needsReset,transition=_b.transition,preserveFollowOpacity=_b.preserveFollowOpacity,stack=this.getStack();stack&&stack.promote(this,preserveFollowOpacity),needsReset&&(this.projectionDelta=void 0,this.needsReset=!0),transition&&this.setOptions({transition:transition})},ProjectionNode.prototype.relegate=function(){var stack=this.getStack();return!!stack&&stack.relegate(this)},ProjectionNode.prototype.resetRotation=function(){var visualElement=this.options.visualElement;if(visualElement){for(var hasRotate=!1,resetValues={},i=0;i<transformAxes.length;i++){var key="rotate"+transformAxes[i];visualElement.getStaticValue(key)&&(hasRotate=!0,resetValues[key]=visualElement.getStaticValue(key),visualElement.setStaticValue(key,0))}if(hasRotate){for(var key in null==visualElement||visualElement.syncRender(),resetValues)visualElement.setStaticValue(key,resetValues[key]);visualElement.scheduleRender()}}},ProjectionNode.prototype.getProjectionStyles=function(styleProp){var _a,_b,_c,_d,_e,_f;void 0===styleProp&&(styleProp={});var styles={};if(!this.instance||this.isSVG)return styles;if(!this.isVisible)return{visibility:"hidden"};styles.visibility="";var transformTemplate=null===(_a=this.options.visualElement)||void 0===_a?void 0:_a.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,styles.opacity="",styles.pointerEvents=resolveMotionValue(styleProp.pointerEvents)||"",styles.transform=transformTemplate?transformTemplate(this.latestValues,""):"none",styles;var lead=this.getLead();if(!this.projectionDelta||!this.layout||!lead.target){var emptyStyles={};return this.options.layoutId&&(emptyStyles.opacity=null!==(_b=this.latestValues.opacity)&&void 0!==_b?_b:1,emptyStyles.pointerEvents=resolveMotionValue(styleProp.pointerEvents)||""),this.hasProjected&&!has_transform_hasTransform(this.latestValues)&&(emptyStyles.transform=transformTemplate?transformTemplate({},""):"none",this.hasProjected=!1),emptyStyles}var valuesToRender=lead.animationValues||lead.latestValues;this.applyTransformsToTarget(),styles.transform=buildProjectionTransform(this.projectionDeltaWithTransform,this.treeScale,valuesToRender),transformTemplate&&(styles.transform=transformTemplate(valuesToRender,styles.transform));var _g=this.projectionDelta,x=_g.x,y=_g.y;for(var key in styles.transformOrigin="".concat(100*x.origin,"% ").concat(100*y.origin,"% 0"),lead.animationValues?styles.opacity=lead===this?null!==(_d=null!==(_c=valuesToRender.opacity)&&void 0!==_c?_c:this.latestValues.opacity)&&void 0!==_d?_d:1:this.preserveOpacity?this.latestValues.opacity:valuesToRender.opacityExit:styles.opacity=lead===this?null!==(_e=valuesToRender.opacity)&&void 0!==_e?_e:"":null!==(_f=valuesToRender.opacityExit)&&void 0!==_f?_f:0,scaleCorrectors)if(void 0!==valuesToRender[key]){var _h=scaleCorrectors[key],correct=_h.correct,applyTo=_h.applyTo,corrected=correct(valuesToRender[key],lead);if(applyTo)for(var num=applyTo.length,i=0;i<num;i++)styles[applyTo[i]]=corrected;else styles[key]=corrected}return this.options.layoutId&&(styles.pointerEvents=lead===this?resolveMotionValue(styleProp.pointerEvents)||"":"none"),styles},ProjectionNode.prototype.clearSnapshot=function(){this.resumeFrom=this.snapshot=void 0},ProjectionNode.prototype.resetTree=function(){this.root.nodes.forEach((function(node){var _a;return null===(_a=node.currentAnimation)||void 0===_a?void 0:_a.stop()})),this.root.nodes.forEach(clearMeasurements),this.root.sharedNodes.clear()},ProjectionNode}()}function updateLayout(node){node.updateLayout()}function notifyLayoutUpdate(node){var _a,_b,_c,_d,snapshot=null!==(_b=null===(_a=node.resumeFrom)||void 0===_a?void 0:_a.snapshot)&&void 0!==_b?_b:node.snapshot;if(node.isLead()&&node.layout&&snapshot&&node.hasListeners("didUpdate")){var _e=node.layout,layout_1=_e.actual,measuredLayout=_e.measured;"size"===node.options.animationType?eachAxis((function(axis){var axisSnapshot=snapshot.isShared?snapshot.measured[axis]:snapshot.layout[axis],length=calcLength(axisSnapshot);axisSnapshot.min=layout_1[axis].min,axisSnapshot.max=axisSnapshot.min+length})):"position"===node.options.animationType&&eachAxis((function(axis){var axisSnapshot=snapshot.isShared?snapshot.measured[axis]:snapshot.layout[axis],length=calcLength(layout_1[axis]);axisSnapshot.max=axisSnapshot.min+length}));var layoutDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};calcBoxDelta(layoutDelta,layout_1,snapshot.layout);var visualDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};snapshot.isShared?calcBoxDelta(visualDelta,node.applyTransform(measuredLayout,!0),snapshot.measured):calcBoxDelta(visualDelta,layout_1,snapshot.layout);var hasLayoutChanged=!isDeltaZero(layoutDelta),hasRelativeTargetChanged=!1;if(!node.resumeFrom&&(node.relativeParent=node.getClosestProjectingParent(),node.relativeParent&&!node.relativeParent.resumeFrom)){var _f=node.relativeParent,parentSnapshot=_f.snapshot,parentLayout=_f.layout;if(parentSnapshot&&parentLayout){var relativeSnapshot={x:{min:0,max:0},y:{min:0,max:0}};calcRelativePosition(relativeSnapshot,snapshot.layout,parentSnapshot.layout);var relativeLayout={x:{min:0,max:0},y:{min:0,max:0}};calcRelativePosition(relativeLayout,layout_1,parentLayout.actual),boxEquals(relativeSnapshot,relativeLayout)||(hasRelativeTargetChanged=!0)}}node.notifyListeners("didUpdate",{layout:layout_1,snapshot:snapshot,delta:visualDelta,layoutDelta:layoutDelta,hasLayoutChanged:hasLayoutChanged,hasRelativeTargetChanged:hasRelativeTargetChanged})}else node.isLead()&&(null===(_d=(_c=node.options).onExitComplete)||void 0===_d||_d.call(_c));node.options.transition=void 0}function clearSnapshot(node){node.clearSnapshot()}function clearMeasurements(node){node.clearMeasurements()}function resetTransformStyle(node){var visualElement=node.options.visualElement;(null==visualElement?void 0:visualElement.getProps().onBeforeLayoutMeasure)&&visualElement.notifyBeforeLayoutMeasure(),node.resetTransform()}function finishAnimation(node){node.finishAnimation(),node.targetDelta=node.relativeTarget=node.target=void 0}function resolveTargetDelta(node){node.resolveTargetDelta()}function calcProjection(node){node.calcProjection()}function resetRotation(node){node.resetRotation()}function removeLeadSnapshots(stack){stack.removeLeadSnapshot()}function mixAxisDelta(output,delta,p){output.translate=Object(popmotion_cjs.mix)(delta.translate,0,p),output.scale=Object(popmotion_cjs.mix)(delta.scale,1,p),output.origin=delta.origin,output.originPoint=delta.originPoint}function mixAxis(output,from,to,p){output.min=Object(popmotion_cjs.mix)(from.min,to.min,p),output.max=Object(popmotion_cjs.mix)(from.max,to.max,p)}function hasOpacityCrossfade(node){return node.animationValues&&void 0!==node.animationValues.opacityExit}var defaultLayoutTransition={duration:.45,ease:[.4,0,.1,1]};function mountNodeEarly(node,id){for(var searchNode=node.root,i=node.path.length-1;i>=0;i--)if(Boolean(node.path[i].instance)){searchNode=node.path[i];break}var element=(searchNode&&searchNode!==node.root?searchNode.instance:document).querySelector('[data-projection-id="'.concat(id,'"]'));element&&node.mount(element,!0)}function roundAxis(axis){axis.min=Math.round(axis.min),axis.max=Math.round(axis.max)}function roundBox(box){roundAxis(box.x),roundAxis(box.y)}var id_id=1;var LayoutGroupContext=Object(react.createContext)({}),SwitchLayoutGroupContext=Object(react.createContext)({});var VisualElementHandler_VisualElementHandler=function(_super){function VisualElementHandler(){return null!==_super&&_super.apply(this,arguments)||this}return Object(tslib.__extends)(VisualElementHandler,_super),VisualElementHandler.prototype.getSnapshotBeforeUpdate=function(){return this.updateProps(),null},VisualElementHandler.prototype.componentDidUpdate=function(){},VisualElementHandler.prototype.updateProps=function(){var _a=this.props,visualElement=_a.visualElement,props=_a.props;visualElement&&visualElement.setProps(props)},VisualElementHandler.prototype.render=function(){return this.props.children},VisualElementHandler}(react_default.a.Component);function createMotionComponent(_a){var preloadedFeatures=_a.preloadedFeatures,createVisualElement=_a.createVisualElement,projectionNodeConstructor=_a.projectionNodeConstructor,useRender=_a.useRender,useVisualState=_a.useVisualState,Component=_a.Component;return preloadedFeatures&&function loadFeatures(features){for(var key in features)null!==features[key]&&("projectionNodeConstructor"===key?featureDefinitions.projectionNodeConstructor=features[key]:featureDefinitions[key].Component=features[key])}(preloadedFeatures),Object(react.forwardRef)((function MotionComponent(props,externalRef){var layoutId=function useLayoutId(_a){var _b,layoutId=_a.layoutId,layoutGroupId=null===(_b=Object(react.useContext)(LayoutGroupContext))||void 0===_b?void 0:_b.id;return layoutGroupId&&void 0!==layoutId?layoutGroupId+"-"+layoutId:layoutId}(props);props=Object(tslib.__assign)(Object(tslib.__assign)({},props),{layoutId:layoutId});var config=Object(react.useContext)(MotionConfigContext),features=null,context=useCreateMotionContext(props),projectionId=config.isStatic?void 0:function useProjectionId(){return useConstant((function(){if(globalProjectionState.hasEverUpdated)return id_id++}))}(),visualState=useVisualState(props,config.isStatic);return!config.isStatic&&is_browser_isBrowser&&(context.visualElement=useVisualElement(Component,visualState,Object(tslib.__assign)(Object(tslib.__assign)({},config),props),createVisualElement),function useProjection(projectionId,_a,visualElement,ProjectionNodeConstructor){var _b,layoutId=_a.layoutId,layout=_a.layout,drag=_a.drag,dragConstraints=_a.dragConstraints,layoutScroll=_a.layoutScroll,initialPromotionConfig=Object(react.useContext)(SwitchLayoutGroupContext);ProjectionNodeConstructor&&visualElement&&!(null==visualElement?void 0:visualElement.projection)&&(visualElement.projection=new ProjectionNodeConstructor(projectionId,visualElement.getLatestValues(),null===(_b=visualElement.parent)||void 0===_b?void 0:_b.projection),visualElement.projection.setOptions({layoutId:layoutId,layout:layout,alwaysMeasureLayout:Boolean(drag)||dragConstraints&&isRefObject(dragConstraints),visualElement:visualElement,scheduleRender:function(){return visualElement.scheduleRender()},animationType:"string"==typeof layout?layout:"both",initialPromotionConfig:initialPromotionConfig,layoutScroll:layoutScroll}))}(projectionId,props,context.visualElement,projectionNodeConstructor||featureDefinitions.projectionNodeConstructor),features=function useFeatures(props,visualElement,preloadedFeatures){var features=[],lazyContext=Object(react.useContext)(LazyContext);if(!visualElement)return null;"production"!==process.a.env.NODE_ENV&&preloadedFeatures&&lazyContext.strict&&Object(dist.invariant)(!1,"You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");for(var i=0;i<numFeatures;i++){var name_1=featureNames[i],_a=featureDefinitions[name_1],isEnabled=_a.isEnabled,Component=_a.Component;isEnabled(props)&&Component&&features.push(react.createElement(Component,Object(tslib.__assign)({key:name_1},props,{visualElement:visualElement})))}return features}(props,context.visualElement,preloadedFeatures)),react.createElement(VisualElementHandler_VisualElementHandler,{visualElement:context.visualElement,props:Object(tslib.__assign)(Object(tslib.__assign)({},config),props)},features,react.createElement(MotionContext.Provider,{value:context},useRender(Component,props,projectionId,function useMotionRef(visualState,visualElement,externalRef){return Object(react.useCallback)((function(instance){var _a;instance&&(null===(_a=visualState.mount)||void 0===_a||_a.call(visualState,instance)),visualElement&&(instance?visualElement.mount(instance):visualElement.unmount()),externalRef&&("function"==typeof externalRef?externalRef(instance):isRefObject(externalRef)&&(externalRef.current=instance))}),[visualElement])}(visualState,context.visualElement,externalRef),visualState,config.isStatic,context.visualElement)))}))}function createMotionProxy(createConfig){function custom(Component,customMotionComponentConfig){return void 0===customMotionComponentConfig&&(customMotionComponentConfig={}),createMotionComponent(createConfig(Component,customMotionComponentConfig))}if("undefined"==typeof Proxy)return custom;var componentCache=new Map;return new Proxy(custom,{get:function(_target,key){return componentCache.has(key)||componentCache.set(key,custom(key)),componentCache.get(key)}})}var lowercaseSVGElements=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","svg","switch","symbol","text","tspan","use","view"];function isSVGComponent(Component){return"string"==typeof Component&&!Component.includes("-")&&!!(lowercaseSVGElements.indexOf(Component)>-1||/[A-Z]/.test(Component))}function isForcedMotionValue(key,_a){var layout=_a.layout,layoutId=_a.layoutId;return isTransformProp(key)||isTransformOriginProp(key)||(layout||void 0!==layoutId)&&(!!scaleCorrectors[key]||"opacity"===key)}var translateAlias={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"};function isCSSVariable(key){return key.startsWith("--")}var getValueAsType=function(value,type){return type&&"number"==typeof value?type.transform(value):value};function buildHTMLStyles(state,latestValues,options,transformTemplate){var _a,style=state.style,vars=state.vars,transform=state.transform,transformKeys=state.transformKeys,transformOrigin=state.transformOrigin;transformKeys.length=0;var hasTransform=!1,hasTransformOrigin=!1,transformIsNone=!0;for(var key in latestValues){var value=latestValues[key];if(isCSSVariable(key))vars[key]=value;else{var valueType=numberValueTypes[key],valueAsType=getValueAsType(value,valueType);if(isTransformProp(key)){if(hasTransform=!0,transform[key]=valueAsType,transformKeys.push(key),!transformIsNone)continue;value!==(null!==(_a=valueType.default)&&void 0!==_a?_a:0)&&(transformIsNone=!1)}else isTransformOriginProp(key)?(transformOrigin[key]=valueAsType,hasTransformOrigin=!0):style[key]=valueAsType}}hasTransform?style.transform=function buildTransform(_a,_b,transformIsDefault,transformTemplate){var transform=_a.transform,transformKeys=_a.transformKeys,_c=_b.enableHardwareAcceleration,enableHardwareAcceleration=void 0===_c||_c,_d=_b.allowTransformNone,allowTransformNone=void 0===_d||_d,transformString="";transformKeys.sort(sortTransformProps);for(var transformHasZ=!1,numTransformKeys=transformKeys.length,i=0;i<numTransformKeys;i++){var key=transformKeys[i];transformString+="".concat(translateAlias[key]||key,"(").concat(transform[key],") "),"z"===key&&(transformHasZ=!0)}return!transformHasZ&&enableHardwareAcceleration?transformString+="translateZ(0)":transformString=transformString.trim(),transformTemplate?transformString=transformTemplate(transform,transformIsDefault?"":transformString):allowTransformNone&&transformIsDefault&&(transformString="none"),transformString}(state,options,transformIsNone,transformTemplate):transformTemplate?style.transform=transformTemplate({},""):!latestValues.transform&&style.transform&&(style.transform="none"),hasTransformOrigin&&(style.transformOrigin=function buildTransformOrigin(_a){var _b=_a.originX,originX=void 0===_b?"50%":_b,_c=_a.originY,originY=void 0===_c?"50%":_c,_d=_a.originZ,originZ=void 0===_d?0:_d;return"".concat(originX," ").concat(originY," ").concat(originZ)}(transformOrigin))}var createHtmlRenderState=function(){return{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}};function copyRawValuesOnly(target,source,props){for(var key in source)isMotionValue(source[key])||isForcedMotionValue(key,props)||(target[key]=source[key])}function useStyle(props,visualState,isStatic){var style={};return copyRawValuesOnly(style,props.style||{},props),Object.assign(style,function useInitialMotionValues(_a,visualState,isStatic){var transformTemplate=_a.transformTemplate;return Object(react.useMemo)((function(){var state={style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}};buildHTMLStyles(state,visualState,{enableHardwareAcceleration:!isStatic},transformTemplate);var vars=state.vars,style=state.style;return Object(tslib.__assign)(Object(tslib.__assign)({},vars),style)}),[visualState])}(props,visualState,isStatic)),props.transformValues&&(style=props.transformValues(style)),style}function useHTMLProps(props,visualState,isStatic){var htmlProps={},style=useStyle(props,visualState,isStatic);return Boolean(props.drag)&&!1!==props.dragListener&&(htmlProps.draggable=!1,style.userSelect=style.WebkitUserSelect=style.WebkitTouchCallout="none",style.touchAction=!0===props.drag?"none":"pan-".concat("x"===props.drag?"y":"x")),htmlProps.style=style,htmlProps}var validMotionProps=new Set(["initial","animate","exit","style","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","whileDrag","onPan","onPanStart","onPanEnd","onPanSessionStart","onTap","onTapStart","onTapCancel","onHoverStart","onHoverEnd","whileFocus","whileTap","whileHover","whileInView","onViewportEnter","onViewportLeave","viewport","layoutScroll"]);function isValidMotionProp(key){return validMotionProps.has(key)}var shouldForward=function(key){return!isValidMotionProp(key)};try{!function loadExternalIsValidProp(isValidProp){isValidProp&&(shouldForward=function(key){return key.startsWith("on")?!isValidMotionProp(key):isValidProp(key)})}(__webpack_require__("./node_modules/.pnpm/@emotion+is-prop-valid@0.8.8/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js").default)}catch(_a){}function calcOrigin(origin,offset,size){return"string"==typeof origin?origin:valueTypes_cjs.px.transform(offset+size*origin)}var dashKeys={offset:"stroke-dashoffset",array:"stroke-dasharray"},camelKeys={offset:"strokeDashoffset",array:"strokeDasharray"};function buildSVGAttrs(state,_a,options,transformTemplate){var attrX=_a.attrX,attrY=_a.attrY,originX=_a.originX,originY=_a.originY,pathLength=_a.pathLength,_b=_a.pathSpacing,pathSpacing=void 0===_b?1:_b,_c=_a.pathOffset,pathOffset=void 0===_c?0:_c;buildHTMLStyles(state,Object(tslib.__rest)(_a,["attrX","attrY","originX","originY","pathLength","pathSpacing","pathOffset"]),options,transformTemplate),state.attrs=state.style,state.style={};var attrs=state.attrs,style=state.style,dimensions=state.dimensions;attrs.transform&&(dimensions&&(style.transform=attrs.transform),delete attrs.transform),dimensions&&(void 0!==originX||void 0!==originY||style.transform)&&(style.transformOrigin=function calcSVGTransformOrigin(dimensions,originX,originY){var pxOriginX=calcOrigin(originX,dimensions.x,dimensions.width),pxOriginY=calcOrigin(originY,dimensions.y,dimensions.height);return"".concat(pxOriginX," ").concat(pxOriginY)}(dimensions,void 0!==originX?originX:.5,void 0!==originY?originY:.5)),void 0!==attrX&&(attrs.x=attrX),void 0!==attrY&&(attrs.y=attrY),void 0!==pathLength&&function buildSVGPath(attrs,length,spacing,offset,useDashCase){void 0===spacing&&(spacing=1),void 0===offset&&(offset=0),void 0===useDashCase&&(useDashCase=!0),attrs.pathLength=1;var keys=useDashCase?dashKeys:camelKeys;attrs[keys.offset]=valueTypes_cjs.px.transform(-offset);var pathLength=valueTypes_cjs.px.transform(length),pathSpacing=valueTypes_cjs.px.transform(spacing);attrs[keys.array]="".concat(pathLength," ").concat(pathSpacing)}(attrs,pathLength,pathSpacing,pathOffset,!1)}var createSvgRenderState=function(){return Object(tslib.__assign)(Object(tslib.__assign)({},{style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}}),{attrs:{}})};function useSVGProps(props,visualState){var visualProps=Object(react.useMemo)((function(){var state=createSvgRenderState();return buildSVGAttrs(state,visualState,{enableHardwareAcceleration:!1},props.transformTemplate),Object(tslib.__assign)(Object(tslib.__assign)({},state.attrs),{style:Object(tslib.__assign)({},state.style)})}),[visualState]);if(props.style){var rawStyles={};copyRawValuesOnly(rawStyles,props.style,props),visualProps.style=Object(tslib.__assign)(Object(tslib.__assign)({},rawStyles),visualProps.style)}return visualProps}function createUseRender(forwardMotionProps){void 0===forwardMotionProps&&(forwardMotionProps=!1);return function(Component,props,projectionId,ref,_a,isStatic){var latestValues=_a.latestValues,visualProps=(isSVGComponent(Component)?useSVGProps:useHTMLProps)(props,latestValues,isStatic),filteredProps=function filterProps(props,isDom,forwardMotionProps){var filteredProps={};for(var key in props)(shouldForward(key)||!0===forwardMotionProps&&isValidMotionProp(key)||!isDom&&!isValidMotionProp(key)||props.draggable&&key.startsWith("onDrag"))&&(filteredProps[key]=props[key]);return filteredProps}(props,"string"==typeof Component,forwardMotionProps),elementProps=Object(tslib.__assign)(Object(tslib.__assign)(Object(tslib.__assign)({},filteredProps),visualProps),{ref:ref});return projectionId&&(elementProps["data-projection-id"]=projectionId),Object(react.createElement)(Component,elementProps)}}var CAMEL_CASE_PATTERN=/([a-z])([A-Z])/g,camelToDash=function(str){return str.replace(CAMEL_CASE_PATTERN,"$1-$2").toLowerCase()};function renderHTML(element,_a,styleProp,projection){var style=_a.style,vars=_a.vars;for(var key in Object.assign(element.style,style,projection&&projection.getProjectionStyles(styleProp)),vars)element.style.setProperty(key,vars[key])}var camelCaseAttributes=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function renderSVG(element,renderState,_styleProp,projection){for(var key in renderHTML(element,renderState,void 0,projection),renderState.attrs)element.setAttribute(camelCaseAttributes.has(key)?key:camelToDash(key),renderState.attrs[key])}function scrape_motion_values_scrapeMotionValuesFromProps(props){var style=props.style,newValues={};for(var key in style)(isMotionValue(style[key])||isForcedMotionValue(key,props))&&(newValues[key]=style[key]);return newValues}function utils_scrape_motion_values_scrapeMotionValuesFromProps(props){var newValues=scrape_motion_values_scrapeMotionValuesFromProps(props);for(var key in props){if(isMotionValue(props[key]))newValues["x"===key||"y"===key?"attr"+key.toUpperCase():key]=props[key]}return newValues}function isAnimationControls(v){return"object"==typeof v&&"function"==typeof v.start}function makeState(_a,props,context,presenceContext){var scrapeMotionValuesFromProps=_a.scrapeMotionValuesFromProps,createRenderState=_a.createRenderState,onMount=_a.onMount,state={latestValues:makeLatestValues(props,context,presenceContext,scrapeMotionValuesFromProps),renderState:createRenderState()};return onMount&&(state.mount=function(instance){return onMount(props,instance,state)}),state}var makeUseVisualState=function(config){return function(props,isStatic){var context=Object(react.useContext)(MotionContext),presenceContext=Object(react.useContext)(PresenceContext);return isStatic?makeState(config,props,context,presenceContext):useConstant((function(){return makeState(config,props,context,presenceContext)}))}};function makeLatestValues(props,context,presenceContext,scrapeMotionValues){var values={},blockInitialAnimation=!1===(null==presenceContext?void 0:presenceContext.initial),motionValues=scrapeMotionValues(props);for(var key in motionValues)values[key]=resolveMotionValue(motionValues[key]);var initial=props.initial,animate=props.animate,isControllingVariants=checkIfControllingVariants(props),isVariantNode=checkIfVariantNode(props);context&&isVariantNode&&!isControllingVariants&&!1!==props.inherit&&(null!=initial||(initial=context.initial),null!=animate||(animate=context.animate));var initialAnimationIsBlocked=blockInitialAnimation||!1===initial,variantToSet=initialAnimationIsBlocked?animate:initial;variantToSet&&"boolean"!=typeof variantToSet&&!isAnimationControls(variantToSet)&&(Array.isArray(variantToSet)?variantToSet:[variantToSet]).forEach((function(definition){var resolved=resolveVariantFromProps(props,definition);if(resolved){var transitionEnd=resolved.transitionEnd;resolved.transition;var target=Object(tslib.__rest)(resolved,["transitionEnd","transition"]);for(var key in target){var valueTarget=target[key];if(Array.isArray(valueTarget))valueTarget=valueTarget[initialAnimationIsBlocked?valueTarget.length-1:0];null!==valueTarget&&(values[key]=valueTarget)}for(var key in transitionEnd)values[key]=transitionEnd[key]}}));return values}var AnimationType,svgMotionConfig={useVisualState:makeUseVisualState({scrapeMotionValuesFromProps:utils_scrape_motion_values_scrapeMotionValuesFromProps,createRenderState:createSvgRenderState,onMount:function(props,instance,_a){var renderState=_a.renderState,latestValues=_a.latestValues;try{renderState.dimensions="function"==typeof instance.getBBox?instance.getBBox():instance.getBoundingClientRect()}catch(e){renderState.dimensions={x:0,y:0,width:0,height:0}}buildSVGAttrs(renderState,latestValues,{enableHardwareAcceleration:!1},props.transformTemplate),renderSVG(instance,renderState)}})},htmlMotionConfig={useVisualState:makeUseVisualState({scrapeMotionValuesFromProps:scrape_motion_values_scrapeMotionValuesFromProps,createRenderState:createHtmlRenderState})};function createDomMotionConfig(Component,_a,preloadedFeatures,createVisualElement,projectionNodeConstructor){var _b=_a.forwardMotionProps,forwardMotionProps=void 0!==_b&&_b,baseConfig=isSVGComponent(Component)?svgMotionConfig:htmlMotionConfig;return Object(tslib.__assign)(Object(tslib.__assign)({},baseConfig),{preloadedFeatures:preloadedFeatures,useRender:createUseRender(forwardMotionProps),createVisualElement:createVisualElement,projectionNodeConstructor:projectionNodeConstructor,Component:Component})}function addDomEvent(target,eventName,handler,options){return target.addEventListener(eventName,handler,options),function(){return target.removeEventListener(eventName,handler,options)}}function useDomEvent(ref,eventName,handler,options){Object(react.useEffect)((function(){var element=ref.current;if(handler&&element)return addDomEvent(element,eventName,handler,options)}),[ref,eventName,handler,options])}function event_type_isMouseEvent(event){return"undefined"!=typeof PointerEvent&&event instanceof PointerEvent?!("mouse"!==event.pointerType):event instanceof MouseEvent}function isTouchEvent(event){return!!event.touches}!function(AnimationType){AnimationType.Animate="animate",AnimationType.Hover="whileHover",AnimationType.Tap="whileTap",AnimationType.Drag="whileDrag",AnimationType.Focus="whileFocus",AnimationType.InView="whileInView",AnimationType.Exit="exit"}(AnimationType||(AnimationType={}));var defaultPagePoint={pageX:0,pageY:0};function pointFromTouch(e,pointType){void 0===pointType&&(pointType="page");var point=e.touches[0]||e.changedTouches[0]||defaultPagePoint;return{x:point[pointType+"X"],y:point[pointType+"Y"]}}function pointFromMouse(point,pointType){return void 0===pointType&&(pointType="page"),{x:point[pointType+"X"],y:point[pointType+"Y"]}}function extractEventInfo(event,pointType){return void 0===pointType&&(pointType="page"),{point:isTouchEvent(event)?pointFromTouch(event,pointType):pointFromMouse(event,pointType)}}var wrapHandler=function(handler,shouldFilterPrimaryPointer){void 0===shouldFilterPrimaryPointer&&(shouldFilterPrimaryPointer=!1);var listener=function(event){return handler(event,extractEventInfo(event))};return shouldFilterPrimaryPointer?function filterPrimaryPointer(eventHandler){return function(event){var isMouseEvent=event instanceof MouseEvent;(!isMouseEvent||isMouseEvent&&0===event.button)&&eventHandler(event)}}(listener):listener},mouseEventNames={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},touchEventNames={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function getPointerEventName(name){return is_browser_isBrowser&&null===window.onpointerdown?name:is_browser_isBrowser&&null===window.ontouchstart?touchEventNames[name]:is_browser_isBrowser&&null===window.onmousedown?mouseEventNames[name]:name}function addPointerEvent(target,eventName,handler,options){return addDomEvent(target,getPointerEventName(eventName),wrapHandler(handler,"pointerdown"===eventName),options)}function usePointerEvent(ref,eventName,handler,options){return useDomEvent(ref,getPointerEventName(eventName),handler&&wrapHandler(handler,"pointerdown"===eventName),options)}function createLock(name){var lock=null;return function(){return null===lock&&(lock=name,function(){lock=null})}}var globalHorizontalLock=createLock("dragHorizontal"),globalVerticalLock=createLock("dragVertical");function getGlobalLock(drag){var lock=!1;if("y"===drag)lock=globalVerticalLock();else if("x"===drag)lock=globalHorizontalLock();else{var openHorizontal_1=globalHorizontalLock(),openVertical_1=globalVerticalLock();openHorizontal_1&&openVertical_1?lock=function(){openHorizontal_1(),openVertical_1()}:(openHorizontal_1&&openHorizontal_1(),openVertical_1&&openVertical_1())}return lock}function isDragActive(){var openGestureLock=getGlobalLock(!0);return!openGestureLock||(openGestureLock(),!1)}function createHoverEvent(visualElement,isActive,callback){return function(event,info){var _a;event_type_isMouseEvent(event)&&!isDragActive()&&(null===(_a=visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.Hover,isActive),null==callback||callback(event,info))}}var isNodeOrChild=function(parent,child){return!!child&&(parent===child||isNodeOrChild(parent,child.parentElement))};function useUnmountEffect(callback){return Object(react.useEffect)((function(){return function(){return callback()}}),[])}var warned=new Set;var observerCallbacks=new WeakMap,observers=new WeakMap,fireObserverCallback=function(entry){var _a;null===(_a=observerCallbacks.get(entry.target))||void 0===_a||_a(entry)},fireAllObserverCallbacks=function(entries){entries.forEach(fireObserverCallback)};function observeIntersection(element,options,callback){var rootInteresectionObserver=function initIntersectionObserver(_a){var root=_a.root,options=Object(tslib.__rest)(_a,["root"]),lookupRoot=root||document;observers.has(lookupRoot)||observers.set(lookupRoot,{});var rootObservers=observers.get(lookupRoot),key=JSON.stringify(options);return rootObservers[key]||(rootObservers[key]=new IntersectionObserver(fireAllObserverCallbacks,Object(tslib.__assign)({root:root},options))),rootObservers[key]}(options);return observerCallbacks.set(element,callback),rootInteresectionObserver.observe(element),function(){observerCallbacks.delete(element),rootInteresectionObserver.unobserve(element)}}var thresholdNames={some:0,all:1};function useIntersectionObserver(shouldObserve,state,visualElement,_a){var root=_a.root,rootMargin=_a.margin,_b=_a.amount,amount=void 0===_b?"some":_b,once=_a.once;Object(react.useEffect)((function(){if(shouldObserve){var options={root:null==root?void 0:root.current,rootMargin:rootMargin,threshold:"number"==typeof amount?amount:thresholdNames[amount]};return observeIntersection(visualElement.getInstance(),options,(function(entry){var _a,isIntersecting=entry.isIntersecting;if(state.isInView!==isIntersecting&&(state.isInView=isIntersecting,!once||isIntersecting||!state.hasEnteredView)){isIntersecting&&(state.hasEnteredView=!0),null===(_a=visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.InView,isIntersecting);var props=visualElement.getProps(),callback=isIntersecting?props.onViewportEnter:props.onViewportLeave;null==callback||callback(entry)}}))}}),[shouldObserve,root,rootMargin,amount])}function useMissingIntersectionObserver(shouldObserve,state,visualElement,_a){var _b=_a.fallback,fallback=void 0===_b||_b;Object(react.useEffect)((function(){shouldObserve&&fallback&&("production"!==process.a.env.NODE_ENV&&function warnOnce(condition,message,element){condition||warned.has(message)||(console.warn(message),element&&console.warn(element),warned.add(message))}(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame((function(){var _a;state.hasEnteredView=!0;var onViewportEnter=visualElement.getProps().onViewportEnter;null==onViewportEnter||onViewportEnter(null),null===(_a=visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.InView,!0)})))}),[shouldObserve])}var makeRenderlessComponent=function(hook){return function(props){return hook(props),null}},gestureAnimations={inView:makeRenderlessComponent((function useViewport(_a){var visualElement=_a.visualElement,whileInView=_a.whileInView,onViewportEnter=_a.onViewportEnter,onViewportLeave=_a.onViewportLeave,_b=_a.viewport,viewport=void 0===_b?{}:_b,state=Object(react.useRef)({hasEnteredView:!1,isInView:!1}),shouldObserve=Boolean(whileInView||onViewportEnter||onViewportLeave);viewport.once&&state.current.hasEnteredView&&(shouldObserve=!1),("undefined"==typeof IntersectionObserver?useMissingIntersectionObserver:useIntersectionObserver)(shouldObserve,state.current,visualElement,viewport)})),tap:makeRenderlessComponent((function useTapGesture(_a){var onTap=_a.onTap,onTapStart=_a.onTapStart,onTapCancel=_a.onTapCancel,whileTap=_a.whileTap,visualElement=_a.visualElement,hasPressListeners=onTap||onTapStart||onTapCancel||whileTap,isPressing=Object(react.useRef)(!1),cancelPointerEndListeners=Object(react.useRef)(null);function removePointerEndListener(){var _a;null===(_a=cancelPointerEndListeners.current)||void 0===_a||_a.call(cancelPointerEndListeners),cancelPointerEndListeners.current=null}function checkPointerEnd(){var _a;return removePointerEndListener(),isPressing.current=!1,null===(_a=visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.Tap,!1),!isDragActive()}function onPointerUp(event,info){checkPointerEnd()&&(isNodeOrChild(visualElement.getInstance(),event.target)?null==onTap||onTap(event,info):null==onTapCancel||onTapCancel(event,info))}function onPointerCancel(event,info){checkPointerEnd()&&(null==onTapCancel||onTapCancel(event,info))}usePointerEvent(visualElement,"pointerdown",hasPressListeners?function onPointerDown(event,info){var _a;removePointerEndListener(),isPressing.current||(isPressing.current=!0,cancelPointerEndListeners.current=Object(popmotion_cjs.pipe)(addPointerEvent(window,"pointerup",onPointerUp),addPointerEvent(window,"pointercancel",onPointerCancel)),null===(_a=visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.Tap,!0),null==onTapStart||onTapStart(event,info))}:void 0),useUnmountEffect(removePointerEndListener)})),focus:makeRenderlessComponent((function useFocusGesture(_a){var whileFocus=_a.whileFocus,visualElement=_a.visualElement;useDomEvent(visualElement,"focus",whileFocus?function(){var _a;null===(_a=visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.Focus,!0)}:void 0),useDomEvent(visualElement,"blur",whileFocus?function(){var _a;null===(_a=visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.Focus,!1)}:void 0)})),hover:makeRenderlessComponent((function useHoverGesture(_a){var onHoverStart=_a.onHoverStart,onHoverEnd=_a.onHoverEnd,whileHover=_a.whileHover,visualElement=_a.visualElement;usePointerEvent(visualElement,"pointerenter",onHoverStart||whileHover?createHoverEvent(visualElement,!0,onHoverStart):void 0),usePointerEvent(visualElement,"pointerleave",onHoverEnd||whileHover?createHoverEvent(visualElement,!1,onHoverEnd):void 0)}))},use_id_counter=0,incrementId=function(){return use_id_counter++},useId=function(){return useConstant(incrementId)};function usePresence(){var context=Object(react.useContext)(PresenceContext);if(null===context)return[!0,null];var isPresent=context.isPresent,onExitComplete=context.onExitComplete,register=context.register,id=useId();Object(react.useEffect)((function(){return register(id)}),[]);return!isPresent&&onExitComplete?[!1,function(){return null==onExitComplete?void 0:onExitComplete(id)}]:[!0]}function shallowCompare(next,prev){if(!Array.isArray(prev))return!1;var prevLength=prev.length;if(prevLength!==next.length)return!1;for(var i=0;i<prevLength;i++)if(prev[i]!==next[i])return!1;return!0}var isZeroValueString=function(v){return/^0[^.\s]+$/.test(v)},testValueType=function(v){return function(type){return type.test(v)}},dimensionValueTypes=[valueTypes_cjs.number,valueTypes_cjs.px,valueTypes_cjs.percent,valueTypes_cjs.degrees,valueTypes_cjs.vw,valueTypes_cjs.vh,{test:function(v){return"auto"===v},parse:function(v){return v}}],findDimensionValueType=function(v){return dimensionValueTypes.find(testValueType(v))},valueTypes=Object(tslib.__spreadArray)(Object(tslib.__spreadArray)([],Object(tslib.__read)(dimensionValueTypes),!1),[valueTypes_cjs.color,valueTypes_cjs.complex],!1),findValueType=function(v){return valueTypes.find(testValueType(v))};function setMotionValue(visualElement,key,value){visualElement.hasValue(key)?visualElement.getValue(key).set(value):visualElement.addValue(key,motionValue(value))}function setTarget(visualElement,definition){var resolved=resolveVariant(visualElement,definition),_a=resolved?visualElement.makeTargetAnimatable(resolved,!1):{},_b=_a.transitionEnd,transitionEnd=void 0===_b?{}:_b;_a.transition;var target=Object(tslib.__rest)(_a,["transitionEnd","transition"]);for(var key in target=Object(tslib.__assign)(Object(tslib.__assign)({},target),transitionEnd)){setMotionValue(visualElement,key,resolveFinalValueInKeyframes(target[key]))}}function getOriginFromTransition(key,transition){if(transition)return(transition[key]||transition.default||transition).from}function animateVariant(visualElement,variant,options){var _a;void 0===options&&(options={});var resolved=resolveVariant(visualElement,variant,options.custom),_b=(resolved||{}).transition,transition=void 0===_b?visualElement.getDefaultTransition()||{}:_b;options.transitionOverride&&(transition=options.transitionOverride);var getAnimation=resolved?function(){return animateTarget(visualElement,resolved,options)}:function(){return Promise.resolve()},getChildAnimations=(null===(_a=visualElement.variantChildren)||void 0===_a?void 0:_a.size)?function(forwardDelay){void 0===forwardDelay&&(forwardDelay=0);var _a=transition.delayChildren,delayChildren=void 0===_a?0:_a,staggerChildren=transition.staggerChildren,staggerDirection=transition.staggerDirection;return function animateChildren(visualElement,variant,delayChildren,staggerChildren,staggerDirection,options){void 0===delayChildren&&(delayChildren=0);void 0===staggerChildren&&(staggerChildren=0);void 0===staggerDirection&&(staggerDirection=1);var animations=[],maxStaggerDuration=(visualElement.variantChildren.size-1)*staggerChildren,generateStaggerDuration=1===staggerDirection?function(i){return void 0===i&&(i=0),i*staggerChildren}:function(i){return void 0===i&&(i=0),maxStaggerDuration-i*staggerChildren};return Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((function(child,i){animations.push(animateVariant(child,variant,Object(tslib.__assign)(Object(tslib.__assign)({},options),{delay:delayChildren+generateStaggerDuration(i)})).then((function(){return child.notifyAnimationComplete(variant)})))})),Promise.all(animations)}(visualElement,variant,delayChildren+forwardDelay,staggerChildren,staggerDirection,options)}:function(){return Promise.resolve()},when=transition.when;if(when){var _c=Object(tslib.__read)("beforeChildren"===when?[getAnimation,getChildAnimations]:[getChildAnimations,getAnimation],2),first=_c[0],last=_c[1];return first().then(last)}return Promise.all([getAnimation(),getChildAnimations(options.delay)])}function animateTarget(visualElement,definition,_a){var _b,_c=void 0===_a?{}:_a,_d=_c.delay,delay=void 0===_d?0:_d,transitionOverride=_c.transitionOverride,type=_c.type,_e=visualElement.makeTargetAnimatable(definition),_f=_e.transition,transition=void 0===_f?visualElement.getDefaultTransition():_f,transitionEnd=_e.transitionEnd,target=Object(tslib.__rest)(_e,["transition","transitionEnd"]);transitionOverride&&(transition=transitionOverride);var animations=[],animationTypeState=type&&(null===(_b=visualElement.animationState)||void 0===_b?void 0:_b.getState()[type]);for(var key in target){var value=visualElement.getValue(key),valueTarget=target[key];if(!(!value||void 0===valueTarget||animationTypeState&&shouldBlockAnimation(animationTypeState,key))){var valueTransition=Object(tslib.__assign)({delay:delay},transition);visualElement.shouldReduceMotion&&isTransformProp(key)&&(valueTransition=Object(tslib.__assign)(Object(tslib.__assign)({},valueTransition),{type:!1,delay:0}));var animation=startAnimation(key,value,valueTarget,valueTransition);animations.push(animation)}}return Promise.all(animations).then((function(){transitionEnd&&setTarget(visualElement,transitionEnd)}))}function sortByTreeOrder(a,b){return a.sortNodePosition(b)}function shouldBlockAnimation(_a,key){var protectedKeys=_a.protectedKeys,needsAnimating=_a.needsAnimating,shouldBlock=protectedKeys.hasOwnProperty(key)&&!0!==needsAnimating[key];return needsAnimating[key]=!1,shouldBlock}var variantPriorityOrder=[AnimationType.Animate,AnimationType.InView,AnimationType.Focus,AnimationType.Hover,AnimationType.Tap,AnimationType.Drag,AnimationType.Exit],reversePriorityOrder=Object(tslib.__spreadArray)([],Object(tslib.__read)(variantPriorityOrder),!1).reverse(),numAnimationTypes=variantPriorityOrder.length;function animateList(visualElement){return function(animations){return Promise.all(animations.map((function(_a){var animation=_a.animation,options=_a.options;return function animateVisualElement(visualElement,definition,options){var animation;if(void 0===options&&(options={}),visualElement.notifyAnimationStart(definition),Array.isArray(definition)){var animations=definition.map((function(variant){return animateVariant(visualElement,variant,options)}));animation=Promise.all(animations)}else if("string"==typeof definition)animation=animateVariant(visualElement,definition,options);else{var resolvedDefinition="function"==typeof definition?resolveVariant(visualElement,definition,options.custom):definition;animation=animateTarget(visualElement,resolvedDefinition,options)}return animation.then((function(){return visualElement.notifyAnimationComplete(definition)}))}(visualElement,animation,options)})))}}function createAnimationState(visualElement){var animate=animateList(visualElement),state=function createState(){var _a;return(_a={})[AnimationType.Animate]=createTypeState(!0),_a[AnimationType.InView]=createTypeState(),_a[AnimationType.Hover]=createTypeState(),_a[AnimationType.Tap]=createTypeState(),_a[AnimationType.Drag]=createTypeState(),_a[AnimationType.Focus]=createTypeState(),_a[AnimationType.Exit]=createTypeState(),_a}(),allAnimatedKeys={},isInitialRender=!0,buildResolvedTypeValues=function(acc,definition){var resolved=resolveVariant(visualElement,definition);if(resolved){resolved.transition;var transitionEnd=resolved.transitionEnd,target=Object(tslib.__rest)(resolved,["transition","transitionEnd"]);acc=Object(tslib.__assign)(Object(tslib.__assign)(Object(tslib.__assign)({},acc),target),transitionEnd)}return acc};function animateChanges(options,changedActiveType){for(var _a,props=visualElement.getProps(),context=visualElement.getVariantContext(!0)||{},animations=[],removedKeys=new Set,encounteredKeys={},removedVariantIndex=1/0,_loop_1=function(i){var type=reversePriorityOrder[i],typeState=state[type],prop=null!==(_a=props[type])&&void 0!==_a?_a:context[type],propIsVariant=isVariantLabel(prop),activeDelta=type===changedActiveType?typeState.isActive:null;!1===activeDelta&&(removedVariantIndex=i);var isInherited=prop===context[type]&&prop!==props[type]&&propIsVariant;if(isInherited&&isInitialRender&&visualElement.manuallyAnimateOnMount&&(isInherited=!1),typeState.protectedKeys=Object(tslib.__assign)({},encounteredKeys),!typeState.isActive&&null===activeDelta||!prop&&!typeState.prevProp||isAnimationControls(prop)||"boolean"==typeof prop)return"continue";var variantDidChange=function checkVariantsDidChange(prev,next){if("string"==typeof next)return next!==prev;if(isVariantLabels(next))return!shallowCompare(next,prev);return!1}(typeState.prevProp,prop),shouldAnimateType=variantDidChange||type===changedActiveType&&typeState.isActive&&!isInherited&&propIsVariant||i>removedVariantIndex&&propIsVariant,definitionList=Array.isArray(prop)?prop:[prop],resolvedValues=definitionList.reduce(buildResolvedTypeValues,{});!1===activeDelta&&(resolvedValues={});var _b=typeState.prevResolvedValues,prevResolvedValues=void 0===_b?{}:_b,allKeys=Object(tslib.__assign)(Object(tslib.__assign)({},prevResolvedValues),resolvedValues),markToAnimate=function(key){shouldAnimateType=!0,removedKeys.delete(key),typeState.needsAnimating[key]=!0};for(var key in allKeys){var next=resolvedValues[key],prev=prevResolvedValues[key];encounteredKeys.hasOwnProperty(key)||(next!==prev?isKeyframesTarget(next)&&isKeyframesTarget(prev)?!shallowCompare(next,prev)||variantDidChange?markToAnimate(key):typeState.protectedKeys[key]=!0:void 0!==next?markToAnimate(key):removedKeys.add(key):void 0!==next&&removedKeys.has(key)?markToAnimate(key):typeState.protectedKeys[key]=!0)}typeState.prevProp=prop,typeState.prevResolvedValues=resolvedValues,typeState.isActive&&(encounteredKeys=Object(tslib.__assign)(Object(tslib.__assign)({},encounteredKeys),resolvedValues)),isInitialRender&&visualElement.blockInitialAnimation&&(shouldAnimateType=!1),shouldAnimateType&&!isInherited&&animations.push.apply(animations,Object(tslib.__spreadArray)([],Object(tslib.__read)(definitionList.map((function(animation){return{animation:animation,options:Object(tslib.__assign)({type:type},options)}}))),!1))},i=0;i<numAnimationTypes;i++)_loop_1(i);if(allAnimatedKeys=Object(tslib.__assign)({},encounteredKeys),removedKeys.size){var fallbackAnimation_1={};removedKeys.forEach((function(key){var fallbackTarget=visualElement.getBaseTarget(key);void 0!==fallbackTarget&&(fallbackAnimation_1[key]=fallbackTarget)})),animations.push({animation:fallbackAnimation_1})}var shouldAnimate=Boolean(animations.length);return isInitialRender&&!1===props.initial&&!visualElement.manuallyAnimateOnMount&&(shouldAnimate=!1),isInitialRender=!1,shouldAnimate?animate(animations):Promise.resolve()}return{isAnimated:function isAnimated(key){return void 0!==allAnimatedKeys[key]},animateChanges:animateChanges,setActive:function setActive(type,isActive,options){var _a;if(state[type].isActive===isActive)return Promise.resolve();null===(_a=visualElement.variantChildren)||void 0===_a||_a.forEach((function(child){var _a;return null===(_a=child.animationState)||void 0===_a?void 0:_a.setActive(type,isActive)})),state[type].isActive=isActive;var animations=animateChanges(options,type);for(var key in state)state[key].protectedKeys={};return animations},setAnimateFunction:function setAnimateFunction(makeAnimator){animate=makeAnimator(visualElement)},getState:function(){return state}}}function createTypeState(isActive){return void 0===isActive&&(isActive=!1),{isActive:isActive,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}var animations_animations={animation:makeRenderlessComponent((function(_a){var visualElement=_a.visualElement,animate=_a.animate;visualElement.animationState||(visualElement.animationState=createAnimationState(visualElement)),isAnimationControls(animate)&&Object(react.useEffect)((function(){return animate.subscribe(visualElement)}),[animate])})),exit:makeRenderlessComponent((function(props){var custom=props.custom,visualElement=props.visualElement,_a=Object(tslib.__read)(usePresence(),2),isPresent=_a[0],safeToRemove=_a[1],presenceContext=Object(react.useContext)(PresenceContext);Object(react.useEffect)((function(){var _a,_b;visualElement.isPresent=isPresent;var animation=null===(_a=visualElement.animationState)||void 0===_a?void 0:_a.setActive(AnimationType.Exit,!isPresent,{custom:null!==(_b=null==presenceContext?void 0:presenceContext.custom)&&void 0!==_b?_b:custom});!isPresent&&(null==animation||animation.then(safeToRemove))}),[isPresent])}))},PanSession_PanSession=function(){function PanSession(event,handlers,_a){var _this=this,transformPagePoint=(void 0===_a?{}:_a).transformPagePoint;if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=function(){if(_this.lastMoveEvent&&_this.lastMoveEventInfo){var info=getPanInfo(_this.lastMoveEventInfo,_this.history),isPanStarted=null!==_this.startEvent,isDistancePastThreshold=Object(popmotion_cjs.distance)(info.offset,{x:0,y:0})>=3;if(isPanStarted||isDistancePastThreshold){var point=info.point,timestamp=Object(framesync_cjs.getFrameData)().timestamp;_this.history.push(Object(tslib.__assign)(Object(tslib.__assign)({},point),{timestamp:timestamp}));var _a=_this.handlers,onStart=_a.onStart,onMove=_a.onMove;isPanStarted||(onStart&&onStart(_this.lastMoveEvent,info),_this.startEvent=_this.lastMoveEvent),onMove&&onMove(_this.lastMoveEvent,info)}}},this.handlePointerMove=function(event,info){_this.lastMoveEvent=event,_this.lastMoveEventInfo=PanSession_transformPoint(info,_this.transformPagePoint),event_type_isMouseEvent(event)&&0===event.buttons?_this.handlePointerUp(event,info):framesync_cjs_default.a.update(_this.updatePoint,!0)},this.handlePointerUp=function(event,info){_this.end();var _a=_this.handlers,onEnd=_a.onEnd,onSessionEnd=_a.onSessionEnd,panInfo=getPanInfo(PanSession_transformPoint(info,_this.transformPagePoint),_this.history);_this.startEvent&&onEnd&&onEnd(event,panInfo),onSessionEnd&&onSessionEnd(event,panInfo)},!(isTouchEvent(event)&&event.touches.length>1)){this.handlers=handlers,this.transformPagePoint=transformPagePoint;var initialInfo=PanSession_transformPoint(extractEventInfo(event),this.transformPagePoint),point=initialInfo.point,timestamp=Object(framesync_cjs.getFrameData)().timestamp;this.history=[Object(tslib.__assign)(Object(tslib.__assign)({},point),{timestamp:timestamp})];var onSessionStart=handlers.onSessionStart;onSessionStart&&onSessionStart(event,getPanInfo(initialInfo,this.history)),this.removeListeners=Object(popmotion_cjs.pipe)(addPointerEvent(window,"pointermove",this.handlePointerMove),addPointerEvent(window,"pointerup",this.handlePointerUp),addPointerEvent(window,"pointercancel",this.handlePointerUp))}}return PanSession.prototype.updateHandlers=function(handlers){this.handlers=handlers},PanSession.prototype.end=function(){this.removeListeners&&this.removeListeners(),framesync_cjs.cancelSync.update(this.updatePoint)},PanSession}();function PanSession_transformPoint(info,transformPagePoint){return transformPagePoint?{point:transformPagePoint(info.point)}:info}function subtractPoint(a,b){return{x:a.x-b.x,y:a.y-b.y}}function getPanInfo(_a,history){var point=_a.point;return{point:point,delta:subtractPoint(point,lastDevicePoint(history)),offset:subtractPoint(point,startDevicePoint(history)),velocity:PanSession_getVelocity(history,.1)}}function startDevicePoint(history){return history[0]}function lastDevicePoint(history){return history[history.length-1]}function PanSession_getVelocity(history,timeDelta){if(history.length<2)return{x:0,y:0};for(var i=history.length-1,timestampedPoint=null,lastPoint=lastDevicePoint(history);i>=0&&(timestampedPoint=history[i],!(lastPoint.timestamp-timestampedPoint.timestamp>secondsToMilliseconds(timeDelta)));)i--;if(!timestampedPoint)return{x:0,y:0};var time=(lastPoint.timestamp-timestampedPoint.timestamp)/1e3;if(0===time)return{x:0,y:0};var currentVelocity={x:(lastPoint.x-timestampedPoint.x)/time,y:(lastPoint.y-timestampedPoint.y)/time};return currentVelocity.x===1/0&&(currentVelocity.x=0),currentVelocity.y===1/0&&(currentVelocity.y=0),currentVelocity}function calcRelativeAxisConstraints(axis,min,max){return{min:void 0!==min?axis.min+min:void 0,max:void 0!==max?axis.max+max-(axis.max-axis.min):void 0}}function calcViewportAxisConstraints(layoutAxis,constraintsAxis){var _a,min=constraintsAxis.min-layoutAxis.min,max=constraintsAxis.max-layoutAxis.max;return constraintsAxis.max-constraintsAxis.min<layoutAxis.max-layoutAxis.min&&(min=(_a=Object(tslib.__read)([max,min],2))[0],max=_a[1]),{min:min,max:max}}function resolveAxisElastic(dragElastic,minLabel,maxLabel){return{min:resolvePointElastic(dragElastic,minLabel),max:resolvePointElastic(dragElastic,maxLabel)}}function resolvePointElastic(dragElastic,label){var _a;return"number"==typeof dragElastic?dragElastic:null!==(_a=dragElastic[label])&&void 0!==_a?_a:0}function convertBoundingBoxToBox(_a){var top=_a.top;return{x:{min:_a.left,max:_a.right},y:{min:top,max:_a.bottom}}}function measure_measureViewportBox(instance,transformPoint){return convertBoundingBoxToBox(function transformBoxPoints(point,transformPoint){if(!transformPoint)return point;var topLeft=transformPoint({x:point.left,y:point.top}),bottomRight=transformPoint({x:point.right,y:point.bottom});return{top:topLeft.y,left:topLeft.x,bottom:bottomRight.y,right:bottomRight.x}}(instance.getBoundingClientRect(),transformPoint))}var elementDragControls=new WeakMap,VisualElementDragControls_VisualElementDragControls=function(){function VisualElementDragControls(visualElement){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=visualElement}return VisualElementDragControls.prototype.start=function(originEvent,_a){var _this=this,_c=(void 0===_a?{}:_a).snapToCursor,snapToCursor=void 0!==_c&&_c;if(!1!==this.visualElement.isPresent){this.panSession=new PanSession_PanSession(originEvent,{onSessionStart:function(event){_this.stopAnimation(),snapToCursor&&_this.snapToCursor(extractEventInfo(event,"page").point)},onStart:function(event,info){var _a,_b=_this.getProps(),drag=_b.drag,dragPropagation=_b.dragPropagation,onDragStart=_b.onDragStart;(!drag||dragPropagation||(_this.openGlobalLock&&_this.openGlobalLock(),_this.openGlobalLock=getGlobalLock(drag),_this.openGlobalLock))&&(_this.isDragging=!0,_this.currentDirection=null,_this.resolveConstraints(),_this.visualElement.projection&&(_this.visualElement.projection.isAnimationBlocked=!0,_this.visualElement.projection.target=void 0),eachAxis((function(axis){var _a,_b,current=_this.getAxisMotionValue(axis).get()||0;if(valueTypes_cjs.percent.test(current)){var measuredAxis=null===(_b=null===(_a=_this.visualElement.projection)||void 0===_a?void 0:_a.layout)||void 0===_b?void 0:_b.actual[axis];if(measuredAxis)current=calcLength(measuredAxis)*(parseFloat(current)/100)}_this.originPoint[axis]=current})),null==onDragStart||onDragStart(event,info),null===(_a=_this.visualElement.animationState)||void 0===_a||_a.setActive(AnimationType.Drag,!0))},onMove:function(event,info){var _a=_this.getProps(),dragPropagation=_a.dragPropagation,dragDirectionLock=_a.dragDirectionLock,onDirectionLock=_a.onDirectionLock,onDrag=_a.onDrag;if(dragPropagation||_this.openGlobalLock){var offset=info.offset;if(dragDirectionLock&&null===_this.currentDirection)return _this.currentDirection=function getCurrentDirection(offset,lockThreshold){void 0===lockThreshold&&(lockThreshold=10);var direction=null;Math.abs(offset.y)>lockThreshold?direction="y":Math.abs(offset.x)>lockThreshold&&(direction="x");return direction}(offset),void(null!==_this.currentDirection&&(null==onDirectionLock||onDirectionLock(_this.currentDirection)));_this.updateAxis("x",info.point,offset),_this.updateAxis("y",info.point,offset),_this.visualElement.syncRender(),null==onDrag||onDrag(event,info)}},onSessionEnd:function(event,info){return _this.stop(event,info)}},{transformPagePoint:this.visualElement.getTransformPagePoint()})}},VisualElementDragControls.prototype.stop=function(event,info){var isDragging=this.isDragging;if(this.cancel(),isDragging){var velocity=info.velocity;this.startAnimation(velocity);var onDragEnd=this.getProps().onDragEnd;null==onDragEnd||onDragEnd(event,info)}},VisualElementDragControls.prototype.cancel=function(){var _a,_b;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),null===(_a=this.panSession)||void 0===_a||_a.end(),this.panSession=void 0,!this.getProps().dragPropagation&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),null===(_b=this.visualElement.animationState)||void 0===_b||_b.setActive(AnimationType.Drag,!1)},VisualElementDragControls.prototype.updateAxis=function(axis,_point,offset){var drag=this.getProps().drag;if(offset&&shouldDrag(axis,drag,this.currentDirection)){var axisValue=this.getAxisMotionValue(axis),next=this.originPoint[axis]+offset[axis];this.constraints&&this.constraints[axis]&&(next=function applyConstraints(point,_a,elastic){var min=_a.min,max=_a.max;return void 0!==min&&point<min?point=elastic?Object(popmotion_cjs.mix)(min,point,elastic.min):Math.max(point,min):void 0!==max&&point>max&&(point=elastic?Object(popmotion_cjs.mix)(max,point,elastic.max):Math.min(point,max)),point}(next,this.constraints[axis],this.elastic[axis])),axisValue.set(next)}},VisualElementDragControls.prototype.resolveConstraints=function(){var _this=this,_a=this.getProps(),dragConstraints=_a.dragConstraints,dragElastic=_a.dragElastic,layout=(this.visualElement.projection||{}).layout,prevConstraints=this.constraints;dragConstraints&&isRefObject(dragConstraints)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!dragConstraints||!layout)&&function calcRelativeConstraints(layoutBox,_a){var top=_a.top,left=_a.left,bottom=_a.bottom,right=_a.right;return{x:calcRelativeAxisConstraints(layoutBox.x,left,right),y:calcRelativeAxisConstraints(layoutBox.y,top,bottom)}}(layout.actual,dragConstraints),this.elastic=function resolveDragElastic(dragElastic){return void 0===dragElastic&&(dragElastic=.35),!1===dragElastic?dragElastic=0:!0===dragElastic&&(dragElastic=.35),{x:resolveAxisElastic(dragElastic,"left","right"),y:resolveAxisElastic(dragElastic,"top","bottom")}}(dragElastic),prevConstraints!==this.constraints&&layout&&this.constraints&&!this.hasMutatedConstraints&&eachAxis((function(axis){_this.getAxisMotionValue(axis)&&(_this.constraints[axis]=function rebaseAxisConstraints(layout,constraints){var relativeConstraints={};return void 0!==constraints.min&&(relativeConstraints.min=constraints.min-layout.min),void 0!==constraints.max&&(relativeConstraints.max=constraints.max-layout.min),relativeConstraints}(layout.actual[axis],_this.constraints[axis]))}))},VisualElementDragControls.prototype.resolveRefConstraints=function(){var _a=this.getProps(),constraints=_a.dragConstraints,onMeasureDragConstraints=_a.onMeasureDragConstraints;if(!constraints||!isRefObject(constraints))return!1;var constraintsElement=constraints.current;Object(dist.invariant)(null!==constraintsElement,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");var projection=this.visualElement.projection;if(!projection||!projection.layout)return!1;var constraintsBox=function measurePageBox(element,rootProjectionNode,transformPagePoint){var viewportBox=measure_measureViewportBox(element,transformPagePoint),scroll=rootProjectionNode.scroll;return scroll&&(translateAxis(viewportBox.x,scroll.x),translateAxis(viewportBox.y,scroll.y)),viewportBox}(constraintsElement,projection.root,this.visualElement.getTransformPagePoint()),measuredConstraints=function calcViewportConstraints(layoutBox,constraintsBox){return{x:calcViewportAxisConstraints(layoutBox.x,constraintsBox.x),y:calcViewportAxisConstraints(layoutBox.y,constraintsBox.y)}}(projection.layout.actual,constraintsBox);if(onMeasureDragConstraints){var userConstraints=onMeasureDragConstraints(function convertBoxToBoundingBox(_a){var x=_a.x,y=_a.y;return{top:y.min,right:x.max,bottom:y.max,left:x.min}}(measuredConstraints));this.hasMutatedConstraints=!!userConstraints,userConstraints&&(measuredConstraints=convertBoundingBoxToBox(userConstraints))}return measuredConstraints},VisualElementDragControls.prototype.startAnimation=function(velocity){var _this=this,_a=this.getProps(),drag=_a.drag,dragMomentum=_a.dragMomentum,dragElastic=_a.dragElastic,dragTransition=_a.dragTransition,dragSnapToOrigin=_a.dragSnapToOrigin,onDragTransitionEnd=_a.onDragTransitionEnd,constraints=this.constraints||{},momentumAnimations=eachAxis((function(axis){var _a;if(shouldDrag(axis,drag,_this.currentDirection)){var transition=null!==(_a=null==constraints?void 0:constraints[axis])&&void 0!==_a?_a:{};dragSnapToOrigin&&(transition={min:0,max:0});var bounceStiffness=dragElastic?200:1e6,bounceDamping=dragElastic?40:1e7,inertia=Object(tslib.__assign)(Object(tslib.__assign)({type:"inertia",velocity:dragMomentum?velocity[axis]:0,bounceStiffness:bounceStiffness,bounceDamping:bounceDamping,timeConstant:750,restDelta:1,restSpeed:10},dragTransition),transition);return _this.startAxisValueAnimation(axis,inertia)}}));return Promise.all(momentumAnimations).then(onDragTransitionEnd)},VisualElementDragControls.prototype.startAxisValueAnimation=function(axis,transition){return startAnimation(axis,this.getAxisMotionValue(axis),0,transition)},VisualElementDragControls.prototype.stopAnimation=function(){var _this=this;eachAxis((function(axis){return _this.getAxisMotionValue(axis).stop()}))},VisualElementDragControls.prototype.getAxisMotionValue=function(axis){var _a,_b,dragKey="_drag"+axis.toUpperCase(),externalMotionValue=this.visualElement.getProps()[dragKey];return externalMotionValue||this.visualElement.getValue(axis,null!==(_b=null===(_a=this.visualElement.getProps().initial)||void 0===_a?void 0:_a[axis])&&void 0!==_b?_b:0)},VisualElementDragControls.prototype.snapToCursor=function(point){var _this=this;eachAxis((function(axis){if(shouldDrag(axis,_this.getProps().drag,_this.currentDirection)){var projection=_this.visualElement.projection,axisValue=_this.getAxisMotionValue(axis);if(projection&&projection.layout){var _a=projection.layout.actual[axis],min=_a.min,max=_a.max;axisValue.set(point[axis]-Object(popmotion_cjs.mix)(min,max,.5))}}}))},VisualElementDragControls.prototype.scalePositionWithinConstraints=function(){var _a,_this=this,_b=this.getProps(),drag=_b.drag,dragConstraints=_b.dragConstraints,projection=this.visualElement.projection;if(isRefObject(dragConstraints)&&projection&&this.constraints){this.stopAnimation();var boxProgress={x:0,y:0};eachAxis((function(axis){var axisValue=_this.getAxisMotionValue(axis);if(axisValue){var latest=axisValue.get();boxProgress[axis]=function constraints_calcOrigin(source,target){var origin=.5,sourceLength=calcLength(source),targetLength=calcLength(target);return targetLength>sourceLength?origin=Object(popmotion_cjs.progress)(target.min,target.max-sourceLength,source.min):sourceLength>targetLength&&(origin=Object(popmotion_cjs.progress)(source.min,source.max-targetLength,target.min)),Object(popmotion_cjs.clamp)(0,1,origin)}({min:latest,max:latest},_this.constraints[axis])}}));var transformTemplate=this.visualElement.getProps().transformTemplate;this.visualElement.getInstance().style.transform=transformTemplate?transformTemplate({},""):"none",null===(_a=projection.root)||void 0===_a||_a.updateScroll(),projection.updateLayout(),this.resolveConstraints(),eachAxis((function(axis){if(shouldDrag(axis,drag,null)){var axisValue=_this.getAxisMotionValue(axis),_a=_this.constraints[axis],min=_a.min,max=_a.max;axisValue.set(Object(popmotion_cjs.mix)(min,max,boxProgress[axis]))}}))}},VisualElementDragControls.prototype.addListeners=function(){var _a,_this=this;elementDragControls.set(this.visualElement,this);var stopPointerListener=addPointerEvent(this.visualElement.getInstance(),"pointerdown",(function(event){var _a=_this.getProps(),drag=_a.drag,_b=_a.dragListener;drag&&(void 0===_b||_b)&&_this.start(event)})),measureDragConstraints=function(){isRefObject(_this.getProps().dragConstraints)&&(_this.constraints=_this.resolveRefConstraints())},projection=this.visualElement.projection,stopMeasureLayoutListener=projection.addEventListener("measure",measureDragConstraints);projection&&!projection.layout&&(null===(_a=projection.root)||void 0===_a||_a.updateScroll(),projection.updateLayout()),measureDragConstraints();var stopResizeListener=addDomEvent(window,"resize",(function(){_this.scalePositionWithinConstraints()}));return projection.addEventListener("didUpdate",(function(_a){var delta=_a.delta,hasLayoutChanged=_a.hasLayoutChanged;_this.isDragging&&hasLayoutChanged&&(eachAxis((function(axis){var motionValue=_this.getAxisMotionValue(axis);motionValue&&(_this.originPoint[axis]+=delta[axis].translate,motionValue.set(motionValue.get()+delta[axis].translate))})),_this.visualElement.syncRender())})),function(){stopResizeListener(),stopPointerListener(),stopMeasureLayoutListener()}},VisualElementDragControls.prototype.getProps=function(){var props=this.visualElement.getProps(),_a=props.drag,drag=void 0!==_a&&_a,_b=props.dragDirectionLock,dragDirectionLock=void 0!==_b&&_b,_c=props.dragPropagation,dragPropagation=void 0!==_c&&_c,_d=props.dragConstraints,dragConstraints=void 0!==_d&&_d,_e=props.dragElastic,dragElastic=void 0===_e?.35:_e,_f=props.dragMomentum,dragMomentum=void 0===_f||_f;return Object(tslib.__assign)(Object(tslib.__assign)({},props),{drag:drag,dragDirectionLock:dragDirectionLock,dragPropagation:dragPropagation,dragConstraints:dragConstraints,dragElastic:dragElastic,dragMomentum:dragMomentum})},VisualElementDragControls}();function shouldDrag(direction,drag,currentDirection){return!(!0!==drag&&drag!==direction||null!==currentDirection&&currentDirection!==direction)}var drag_drag={pan:makeRenderlessComponent((function usePanGesture(_a){var onPan=_a.onPan,onPanStart=_a.onPanStart,onPanEnd=_a.onPanEnd,onPanSessionStart=_a.onPanSessionStart,visualElement=_a.visualElement,hasPanEvents=onPan||onPanStart||onPanEnd||onPanSessionStart,panSession=Object(react.useRef)(null),transformPagePoint=Object(react.useContext)(MotionConfigContext).transformPagePoint,handlers={onSessionStart:onPanSessionStart,onStart:onPanStart,onMove:onPan,onEnd:function(event,info){panSession.current=null,onPanEnd&&onPanEnd(event,info)}};Object(react.useEffect)((function(){null!==panSession.current&&panSession.current.updateHandlers(handlers)})),usePointerEvent(visualElement,"pointerdown",hasPanEvents&&function onPointerDown(event){panSession.current=new PanSession_PanSession(event,handlers,{transformPagePoint:transformPagePoint})}),useUnmountEffect((function(){return panSession.current&&panSession.current.end()}))})),drag:makeRenderlessComponent((function useDrag(props){var groupDragControls=props.dragControls,visualElement=props.visualElement,dragControls=useConstant((function(){return new VisualElementDragControls_VisualElementDragControls(visualElement)}));Object(react.useEffect)((function(){return groupDragControls&&groupDragControls.subscribe(dragControls)}),[dragControls,groupDragControls]),Object(react.useEffect)((function(){return dragControls.addListeners()}),[dragControls])}))},names=["LayoutMeasure","BeforeLayoutMeasure","LayoutUpdate","ViewportBoxUpdate","Update","Render","AnimationComplete","LayoutAnimationComplete","AnimationStart","LayoutAnimationStart","SetAxisTarget","Unmount"];var render_visualElement=function(_a){var _b=_a.treeType,treeType=void 0===_b?"":_b,build=_a.build,getBaseTarget=_a.getBaseTarget,makeTargetAnimatable=_a.makeTargetAnimatable,measureViewportBox=_a.measureViewportBox,renderInstance=_a.render,readValueFromInstance=_a.readValueFromInstance,removeValueFromRenderState=_a.removeValueFromRenderState,sortNodePosition=_a.sortNodePosition,scrapeMotionValuesFromProps=_a.scrapeMotionValuesFromProps;return function(_a,options){var parent=_a.parent,props=_a.props,presenceId=_a.presenceId,blockInitialAnimation=_a.blockInitialAnimation,visualState=_a.visualState,shouldReduceMotion=_a.shouldReduceMotion;void 0===options&&(options={});var instance,removeFromVariantTree,isMounted=!1,latestValues=visualState.latestValues,renderState=visualState.renderState,lifecycles=function createLifecycles(){var managers=names.map((function(){return new subscription_manager_SubscriptionManager})),propSubscriptions={},lifecycles={clearAllListeners:function(){return managers.forEach((function(manager){return manager.clear()}))},updatePropListeners:function(props){names.forEach((function(name){var _a,on="on"+name,propListener=props[on];null===(_a=propSubscriptions[name])||void 0===_a||_a.call(propSubscriptions),propListener&&(propSubscriptions[name]=lifecycles[on](propListener))}))}};return managers.forEach((function(manager,i){lifecycles["on"+names[i]]=function(handler){return manager.add(handler)},lifecycles["notify"+names[i]]=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return manager.notify.apply(manager,Object(tslib.__spreadArray)([],Object(tslib.__read)(args),!1))}})),lifecycles}(),values=new Map,valueSubscriptions=new Map,prevMotionValues={},baseTarget=Object(tslib.__assign)({},latestValues);function render(){instance&&isMounted&&(triggerBuild(),renderInstance(instance,renderState,props.style,element.projection))}function triggerBuild(){build(element,renderState,latestValues,options,props)}function update(){lifecycles.notifyUpdate(latestValues)}function bindToMotionValue(key,value){var removeOnChange=value.onChange((function(latestValue){latestValues[key]=latestValue,props.onUpdate&&framesync_cjs_default.a.update(update,!1,!0)})),removeOnRenderRequest=value.onRenderRequest(element.scheduleRender);valueSubscriptions.set(key,(function(){removeOnChange(),removeOnRenderRequest()}))}var initialMotionValues=scrapeMotionValuesFromProps(props);for(var key in initialMotionValues){var value=initialMotionValues[key];void 0!==latestValues[key]&&isMotionValue(value)&&value.set(latestValues[key],!1)}var isControllingVariants=checkIfControllingVariants(props),isVariantNode=checkIfVariantNode(props),element=Object(tslib.__assign)(Object(tslib.__assign)({treeType:treeType,current:null,depth:parent?parent.depth+1:0,parent:parent,children:new Set,presenceId:presenceId,shouldReduceMotion:shouldReduceMotion,variantChildren:isVariantNode?new Set:void 0,isVisible:void 0,manuallyAnimateOnMount:Boolean(null==parent?void 0:parent.isMounted()),blockInitialAnimation:blockInitialAnimation,isMounted:function(){return Boolean(instance)},mount:function(newInstance){isMounted=!0,instance=element.current=newInstance,element.projection&&element.projection.mount(newInstance),isVariantNode&&parent&&!isControllingVariants&&(removeFromVariantTree=null==parent?void 0:parent.addVariantChild(element)),values.forEach((function(value,key){return bindToMotionValue(key,value)})),null==parent||parent.children.add(element),element.setProps(props)},unmount:function(){var _a;null===(_a=element.projection)||void 0===_a||_a.unmount(),framesync_cjs.cancelSync.update(update),framesync_cjs.cancelSync.render(render),valueSubscriptions.forEach((function(remove){return remove()})),null==removeFromVariantTree||removeFromVariantTree(),null==parent||parent.children.delete(element),lifecycles.clearAllListeners(),instance=void 0,isMounted=!1},addVariantChild:function(child){var _a,closestVariantNode=element.getClosestVariantNode();if(closestVariantNode)return null===(_a=closestVariantNode.variantChildren)||void 0===_a||_a.add(child),function(){return closestVariantNode.variantChildren.delete(child)}},sortNodePosition:function(other){return sortNodePosition&&treeType===other.treeType?sortNodePosition(element.getInstance(),other.getInstance()):0},getClosestVariantNode:function(){return isVariantNode?element:null==parent?void 0:parent.getClosestVariantNode()},getLayoutId:function(){return props.layoutId},getInstance:function(){return instance},getStaticValue:function(key){return latestValues[key]},setStaticValue:function(key,value){return latestValues[key]=value},getLatestValues:function(){return latestValues},setVisibility:function(visibility){element.isVisible!==visibility&&(element.isVisible=visibility,element.scheduleRender())},makeTargetAnimatable:function(target,canMutate){return void 0===canMutate&&(canMutate=!0),makeTargetAnimatable(element,target,props,canMutate)},measureViewportBox:function(){return measureViewportBox(instance,props)},addValue:function(key,value){element.hasValue(key)&&element.removeValue(key),values.set(key,value),latestValues[key]=value.get(),bindToMotionValue(key,value)},removeValue:function(key){var _a;values.delete(key),null===(_a=valueSubscriptions.get(key))||void 0===_a||_a(),valueSubscriptions.delete(key),delete latestValues[key],removeValueFromRenderState(key,renderState)},hasValue:function(key){return values.has(key)},getValue:function(key,defaultValue){var value=values.get(key);return void 0===value&&void 0!==defaultValue&&(value=motionValue(defaultValue),element.addValue(key,value)),value},forEachValue:function(callback){return values.forEach(callback)},readValue:function(key){var _a;return null!==(_a=latestValues[key])&&void 0!==_a?_a:readValueFromInstance(instance,key,options)},setBaseTarget:function(key,value){baseTarget[key]=value},getBaseTarget:function(key){if(getBaseTarget){var target=getBaseTarget(props,key);if(void 0!==target&&!isMotionValue(target))return target}return baseTarget[key]}},lifecycles),{build:function(){return triggerBuild(),renderState},scheduleRender:function(){framesync_cjs_default.a.render(render,!1,!0)},syncRender:render,setProps:function(newProps){(newProps.transformTemplate||props.transformTemplate)&&element.scheduleRender(),props=newProps,lifecycles.updatePropListeners(newProps),prevMotionValues=function updateMotionValuesFromProps(element,next,prev){var _a;for(var key in next){var nextValue=next[key],prevValue=prev[key];if(isMotionValue(nextValue))element.addValue(key,nextValue);else if(isMotionValue(prevValue))element.addValue(key,motionValue(nextValue));else if(prevValue!==nextValue)if(element.hasValue(key)){var existingValue=element.getValue(key);!existingValue.hasAnimated&&existingValue.set(nextValue)}else element.addValue(key,motionValue(null!==(_a=element.getStaticValue(key))&&void 0!==_a?_a:nextValue))}for(var key in prev)void 0===next[key]&&element.removeValue(key);return next}(element,scrapeMotionValuesFromProps(props),prevMotionValues)},getProps:function(){return props},getVariant:function(name){var _a;return null===(_a=props.variants)||void 0===_a?void 0:_a[name]},getDefaultTransition:function(){return props.transition},getTransformPagePoint:function(){return props.transformPagePoint},getVariantContext:function(startAtParent){if(void 0===startAtParent&&(startAtParent=!1),startAtParent)return null==parent?void 0:parent.getVariantContext();if(!isControllingVariants){var context_1=(null==parent?void 0:parent.getVariantContext())||{};return void 0!==props.initial&&(context_1.initial=props.initial),context_1}for(var context={},i=0;i<numVariantProps;i++){var name_1=variantProps[i],prop=props[name_1];(isVariantLabel(prop)||!1===prop)&&(context[name_1]=prop)}return context}});return element}},variantProps=Object(tslib.__spreadArray)(["initial"],Object(tslib.__read)(variantPriorityOrder),!1),numVariantProps=variantProps.length;function css_variables_conversion_isCSSVariable(value){return"string"==typeof value&&value.startsWith("var(--")}var cssVariableRegex=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function getVariableValue(current,element,depth){void 0===depth&&(depth=1),Object(dist.invariant)(depth<=4,'Max CSS variable fallback depth detected in property "'.concat(current,'". This may indicate a circular fallback dependency.'));var _a=Object(tslib.__read)(function parseCSSVariable(current){var match=cssVariableRegex.exec(current);if(!match)return[,];var _a=Object(tslib.__read)(match,3);return[_a[1],_a[2]]}(current),2),token=_a[0],fallback=_a[1];if(token){var resolved=window.getComputedStyle(element).getPropertyValue(token);return resolved?resolved.trim():css_variables_conversion_isCSSVariable(fallback)?getVariableValue(fallback,element,depth+1):fallback}}var BoundingBoxDimension,positionalKeys=new Set(["width","height","top","left","right","bottom","x","y"]),isPositionalKey=function(key){return positionalKeys.has(key)},setAndResetVelocity=function(value,to){value.set(to,!1),value.set(to)},isNumOrPxType=function(v){return v===valueTypes_cjs.number||v===valueTypes_cjs.px};!function(BoundingBoxDimension){BoundingBoxDimension.width="width",BoundingBoxDimension.height="height",BoundingBoxDimension.left="left",BoundingBoxDimension.right="right",BoundingBoxDimension.top="top",BoundingBoxDimension.bottom="bottom"}(BoundingBoxDimension||(BoundingBoxDimension={}));var getPosFromMatrix=function(matrix,pos){return parseFloat(matrix.split(", ")[pos])},getTranslateFromMatrix=function(pos2,pos3){return function(_bbox,_a){var transform=_a.transform;if("none"===transform||!transform)return 0;var matrix3d=transform.match(/^matrix3d\((.+)\)$/);if(matrix3d)return getPosFromMatrix(matrix3d[1],pos3);var matrix=transform.match(/^matrix\((.+)\)$/);return matrix?getPosFromMatrix(matrix[1],pos2):0}},unit_conversion_transformKeys=new Set(["x","y","z"]),nonTranslationalTransformKeys=transformProps.filter((function(key){return!unit_conversion_transformKeys.has(key)}));var positionalValues={width:function(_a,_b){var x=_a.x,_c=_b.paddingLeft,paddingLeft=void 0===_c?"0":_c,_d=_b.paddingRight,paddingRight=void 0===_d?"0":_d;return x.max-x.min-parseFloat(paddingLeft)-parseFloat(paddingRight)},height:function(_a,_b){var y=_a.y,_c=_b.paddingTop,paddingTop=void 0===_c?"0":_c,_d=_b.paddingBottom,paddingBottom=void 0===_d?"0":_d;return y.max-y.min-parseFloat(paddingTop)-parseFloat(paddingBottom)},top:function(_bbox,_a){var top=_a.top;return parseFloat(top)},left:function(_bbox,_a){var left=_a.left;return parseFloat(left)},bottom:function(_a,_b){var y=_a.y,top=_b.top;return parseFloat(top)+(y.max-y.min)},right:function(_a,_b){var x=_a.x,left=_b.left;return parseFloat(left)+(x.max-x.min)},x:getTranslateFromMatrix(4,13),y:getTranslateFromMatrix(5,14)},checkAndConvertChangedValueTypes=function(visualElement,target,origin,transitionEnd){void 0===origin&&(origin={}),void 0===transitionEnd&&(transitionEnd={}),target=Object(tslib.__assign)({},target),transitionEnd=Object(tslib.__assign)({},transitionEnd);var targetPositionalKeys=Object.keys(target).filter(isPositionalKey),removedTransformValues=[],hasAttemptedToRemoveTransformValues=!1,changedValueTypeKeys=[];if(targetPositionalKeys.forEach((function(key){var value=visualElement.getValue(key);if(visualElement.hasValue(key)){var toType,from=origin[key],fromType=findDimensionValueType(from),to=target[key];if(isKeyframesTarget(to)){var numKeyframes=to.length,fromIndex=null===to[0]?1:0;from=to[fromIndex],fromType=findDimensionValueType(from);for(var i=fromIndex;i<numKeyframes;i++)toType?Object(dist.invariant)(findDimensionValueType(to[i])===toType,"All keyframes must be of the same type"):(toType=findDimensionValueType(to[i]),Object(dist.invariant)(toType===fromType||isNumOrPxType(fromType)&&isNumOrPxType(toType),"Keyframes must be of the same dimension as the current value"))}else toType=findDimensionValueType(to);if(fromType!==toType)if(isNumOrPxType(fromType)&&isNumOrPxType(toType)){var current=value.get();"string"==typeof current&&value.set(parseFloat(current)),"string"==typeof to?target[key]=parseFloat(to):Array.isArray(to)&&toType===valueTypes_cjs.px&&(target[key]=to.map(parseFloat))}else(null==fromType?void 0:fromType.transform)&&(null==toType?void 0:toType.transform)&&(0===from||0===to)?0===from?value.set(toType.transform(from)):target[key]=fromType.transform(to):(hasAttemptedToRemoveTransformValues||(removedTransformValues=function removeNonTranslationalTransform(visualElement){var removedTransforms=[];return nonTranslationalTransformKeys.forEach((function(key){var value=visualElement.getValue(key);void 0!==value&&(removedTransforms.push([key,value.get()]),value.set(key.startsWith("scale")?1:0))})),removedTransforms.length&&visualElement.syncRender(),removedTransforms}(visualElement),hasAttemptedToRemoveTransformValues=!0),changedValueTypeKeys.push(key),transitionEnd[key]=void 0!==transitionEnd[key]?transitionEnd[key]:target[key],setAndResetVelocity(value,to))}})),changedValueTypeKeys.length){var convertedTarget=function(target,visualElement,changedKeys){var originBbox=visualElement.measureViewportBox(),element=visualElement.getInstance(),elementComputedStyle=getComputedStyle(element),display=elementComputedStyle.display,origin={};"none"===display&&visualElement.setStaticValue("display",target.display||"block"),changedKeys.forEach((function(key){origin[key]=positionalValues[key](originBbox,elementComputedStyle)})),visualElement.syncRender();var targetBbox=visualElement.measureViewportBox();return changedKeys.forEach((function(key){var value=visualElement.getValue(key);setAndResetVelocity(value,origin[key]),target[key]=positionalValues[key](targetBbox,elementComputedStyle)})),target}(target,visualElement,changedValueTypeKeys);return removedTransformValues.length&&removedTransformValues.forEach((function(_a){var _b=Object(tslib.__read)(_a,2),key=_b[0],value=_b[1];visualElement.getValue(key).set(value)})),visualElement.syncRender(),{target:convertedTarget,transitionEnd:transitionEnd}}return{target:target,transitionEnd:transitionEnd}};function unitConversion(visualElement,target,origin,transitionEnd){return function(target){return Object.keys(target).some(isPositionalKey)}(target)?checkAndConvertChangedValueTypes(visualElement,target,origin,transitionEnd):{target:target,transitionEnd:transitionEnd}}var parseDomVariant=function(visualElement,target,origin,transitionEnd){var resolved=function resolveCSSVariables(visualElement,_a,transitionEnd){var _b,target=Object(tslib.__rest)(_a,[]),element=visualElement.getInstance();if(!(element instanceof Element))return{target:target,transitionEnd:transitionEnd};for(var key in transitionEnd&&(transitionEnd=Object(tslib.__assign)({},transitionEnd)),visualElement.forEachValue((function(value){var current=value.get();if(css_variables_conversion_isCSSVariable(current)){var resolved=getVariableValue(current,element);resolved&&value.set(resolved)}})),target){var current=target[key];if(css_variables_conversion_isCSSVariable(current)){var resolved=getVariableValue(current,element);resolved&&(target[key]=resolved,transitionEnd&&(null!==(_b=transitionEnd[key])&&void 0!==_b||(transitionEnd[key]=current)))}}return{target:target,transitionEnd:transitionEnd}}(visualElement,target,transitionEnd);return unitConversion(visualElement,target=resolved.target,origin,transitionEnd=resolved.transitionEnd)};var htmlConfig={treeType:"dom",readValueFromInstance:function(domElement,key){if(isTransformProp(key)){var defaultType=getDefaultValueType(key);return defaultType&&defaultType.default||0}var computedStyle=function visual_element_getComputedStyle(element){return window.getComputedStyle(element)}(domElement);return(isCSSVariable(key)?computedStyle.getPropertyValue(key):computedStyle[key])||0},sortNodePosition:function(a,b){return 2&a.compareDocumentPosition(b)?1:-1},getBaseTarget:function(props,key){var _a;return null===(_a=props.style)||void 0===_a?void 0:_a[key]},measureViewportBox:function(element,_a){return measure_measureViewportBox(element,_a.transformPagePoint)},resetTransform:function(element,domElement,props){var transformTemplate=props.transformTemplate;domElement.style.transform=transformTemplate?transformTemplate({},""):"none",element.scheduleRender()},restoreTransform:function(instance,mutableState){instance.style.transform=mutableState.style.transform},removeValueFromRenderState:function(key,_a){var vars=_a.vars,style=_a.style;delete vars[key],delete style[key]},makeTargetAnimatable:function(element,_a,_b,isMounted){var transformValues=_b.transformValues;void 0===isMounted&&(isMounted=!0);var transition=_a.transition,transitionEnd=_a.transitionEnd,target=Object(tslib.__rest)(_a,["transition","transitionEnd"]),origin=function getOrigin(target,transition,visualElement){var _a,_b,origin={};for(var key in target)origin[key]=null!==(_a=getOriginFromTransition(key,transition))&&void 0!==_a?_a:null===(_b=visualElement.getValue(key))||void 0===_b?void 0:_b.get();return origin}(target,transition||{},element);if(transformValues&&(transitionEnd&&(transitionEnd=transformValues(transitionEnd)),target&&(target=transformValues(target)),origin&&(origin=transformValues(origin))),isMounted){!function checkTargetForNewValues(visualElement,target,origin){var _a,_b,_c,_d,newValueKeys=Object.keys(target).filter((function(key){return!visualElement.hasValue(key)})),numNewValues=newValueKeys.length;if(numNewValues)for(var i=0;i<numNewValues;i++){var key=newValueKeys[i],targetValue=target[key],value=null;Array.isArray(targetValue)&&(value=targetValue[0]),null===value&&(value=null!==(_b=null!==(_a=origin[key])&&void 0!==_a?_a:visualElement.readValue(key))&&void 0!==_b?_b:target[key]),null!=value&&("string"==typeof value&&(/^\-?\d*\.?\d+$/.test(value)||isZeroValueString(value))?value=parseFloat(value):!findValueType(value)&&valueTypes_cjs.complex.test(targetValue)&&(value=getAnimatableNone(key,targetValue)),visualElement.addValue(key,motionValue(value)),null!==(_c=(_d=origin)[key])&&void 0!==_c||(_d[key]=value),visualElement.setBaseTarget(key,value))}}(element,target,origin);var parsed=parseDomVariant(element,target,origin,transitionEnd);transitionEnd=parsed.transitionEnd,target=parsed.target}return Object(tslib.__assign)({transition:transition,transitionEnd:transitionEnd},target)},scrapeMotionValuesFromProps:scrape_motion_values_scrapeMotionValuesFromProps,build:function(element,renderState,latestValues,options,props){void 0!==element.isVisible&&(renderState.style.visibility=element.isVisible?"visible":"hidden"),buildHTMLStyles(renderState,latestValues,options,props.transformTemplate)},render:renderHTML},htmlVisualElement=render_visualElement(htmlConfig),svgVisualElement=render_visualElement(Object(tslib.__assign)(Object(tslib.__assign)({},htmlConfig),{getBaseTarget:function(props,key){return props[key]},readValueFromInstance:function(domElement,key){var _a;return isTransformProp(key)?(null===(_a=getDefaultValueType(key))||void 0===_a?void 0:_a.default)||0:(key=camelCaseAttributes.has(key)?key:camelToDash(key),domElement.getAttribute(key))},scrapeMotionValuesFromProps:utils_scrape_motion_values_scrapeMotionValuesFromProps,build:function(_element,renderState,latestValues,options,props){buildSVGAttrs(renderState,latestValues,options,props.transformTemplate)},render:renderSVG})),createDomVisualElement=function(Component,options){return isSVGComponent(Component)?svgVisualElement(options,{enableHardwareAcceleration:!1}):htmlVisualElement(options,{enableHardwareAcceleration:!0})};function pixelsToPercent(pixels,axis){return axis.max===axis.min?0:pixels/(axis.max-axis.min)*100}var correctBorderRadius={correct:function(latest,node){if(!node.target)return latest;if("string"==typeof latest){if(!valueTypes_cjs.px.test(latest))return latest;latest=parseFloat(latest)}var x=pixelsToPercent(latest,node.target.x),y=pixelsToPercent(latest,node.target.y);return"".concat(x,"% ").concat(y,"%")}},correctBoxShadow={correct:function(latest,_a){var treeScale=_a.treeScale,projectionDelta=_a.projectionDelta,original=latest,containsCSSVariables=latest.includes("var("),cssVariables=[];containsCSSVariables&&(latest=latest.replace(cssVariableRegex,(function(match){return cssVariables.push(match),"_$css"})));var shadow=valueTypes_cjs.complex.parse(latest);if(shadow.length>5)return original;var template=valueTypes_cjs.complex.createTransformer(latest),offset="number"!=typeof shadow[0]?1:0,xScale=projectionDelta.x.scale*treeScale.x,yScale=projectionDelta.y.scale*treeScale.y;shadow[0+offset]/=xScale,shadow[1+offset]/=yScale;var averageScale=Object(popmotion_cjs.mix)(xScale,yScale,.5);"number"==typeof shadow[2+offset]&&(shadow[2+offset]/=averageScale),"number"==typeof shadow[3+offset]&&(shadow[3+offset]/=averageScale);var output=template(shadow);if(containsCSSVariables){var i_1=0;output=output.replace("_$css",(function(){var cssVariable=cssVariables[i_1];return i_1++,cssVariable}))}return output}},MeasureLayout_MeasureLayoutWithContext=function(_super){function MeasureLayoutWithContext(){return null!==_super&&_super.apply(this,arguments)||this}return Object(tslib.__extends)(MeasureLayoutWithContext,_super),MeasureLayoutWithContext.prototype.componentDidMount=function(){var _this=this,_a=this.props,visualElement=_a.visualElement,layoutGroup=_a.layoutGroup,switchLayoutGroup=_a.switchLayoutGroup,layoutId=_a.layoutId,projection=visualElement.projection;!function addScaleCorrector(correctors){Object.assign(scaleCorrectors,correctors)}(defaultScaleCorrectors),projection&&((null==layoutGroup?void 0:layoutGroup.group)&&layoutGroup.group.add(projection),(null==switchLayoutGroup?void 0:switchLayoutGroup.register)&&layoutId&&switchLayoutGroup.register(projection),projection.root.didUpdate(),projection.addEventListener("animationComplete",(function(){_this.safeToRemove()})),projection.setOptions(Object(tslib.__assign)(Object(tslib.__assign)({},projection.options),{onExitComplete:function(){return _this.safeToRemove()}}))),globalProjectionState.hasEverUpdated=!0},MeasureLayoutWithContext.prototype.getSnapshotBeforeUpdate=function(prevProps){var _this=this,_a=this.props,layoutDependency=_a.layoutDependency,visualElement=_a.visualElement,drag=_a.drag,isPresent=_a.isPresent,projection=visualElement.projection;return projection?(projection.isPresent=isPresent,drag||prevProps.layoutDependency!==layoutDependency||void 0===layoutDependency?projection.willUpdate():this.safeToRemove(),prevProps.isPresent!==isPresent&&(isPresent?projection.promote():projection.relegate()||framesync_cjs_default.a.postRender((function(){var _a;(null===(_a=projection.getStack())||void 0===_a?void 0:_a.members.length)||_this.safeToRemove()}))),null):null},MeasureLayoutWithContext.prototype.componentDidUpdate=function(){var projection=this.props.visualElement.projection;projection&&(projection.root.didUpdate(),!projection.currentAnimation&&projection.isLead()&&this.safeToRemove())},MeasureLayoutWithContext.prototype.componentWillUnmount=function(){var _a=this.props,visualElement=_a.visualElement,layoutGroup=_a.layoutGroup,promoteContext=_a.switchLayoutGroup,projection=visualElement.projection;projection&&(projection.scheduleCheckAfterUnmount(),(null==layoutGroup?void 0:layoutGroup.group)&&layoutGroup.group.remove(projection),(null==promoteContext?void 0:promoteContext.deregister)&&promoteContext.deregister(projection))},MeasureLayoutWithContext.prototype.safeToRemove=function(){var safeToRemove=this.props.safeToRemove;null==safeToRemove||safeToRemove()},MeasureLayoutWithContext.prototype.render=function(){return null},MeasureLayoutWithContext}(react_default.a.Component);var defaultScaleCorrectors={borderRadius:Object(tslib.__assign)(Object(tslib.__assign)({},correctBorderRadius),{applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]}),borderTopLeftRadius:correctBorderRadius,borderTopRightRadius:correctBorderRadius,borderBottomLeftRadius:correctBorderRadius,borderBottomRightRadius:correctBorderRadius,boxShadow:correctBoxShadow},layoutFeatures={measureLayout:function MeasureLayout(props){var _a=Object(tslib.__read)(usePresence(),2),isPresent=_a[0],safeToRemove=_a[1],layoutGroup=Object(react.useContext)(LayoutGroupContext);return react_default.a.createElement(MeasureLayout_MeasureLayoutWithContext,Object(tslib.__assign)({},props,{layoutGroup:layoutGroup,switchLayoutGroup:Object(react.useContext)(SwitchLayoutGroupContext),isPresent:isPresent,safeToRemove:safeToRemove}))}},DocumentProjectionNode=createProjectionNode({attachResizeListener:function(ref,notify){return ref.addEventListener("resize",notify,{passive:!0}),function(){return ref.removeEventListener("resize",notify)}},measureScroll:function(){return{x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}}}),HTMLProjectionNode_rootProjectionNode={current:void 0},HTMLProjectionNode=createProjectionNode({measureScroll:function(instance){return{x:instance.scrollLeft,y:instance.scrollTop}},defaultParent:function(){if(!HTMLProjectionNode_rootProjectionNode.current){var documentNode=new DocumentProjectionNode(0,{});documentNode.mount(window),documentNode.setOptions({layoutScroll:!0}),HTMLProjectionNode_rootProjectionNode.current=documentNode}return HTMLProjectionNode_rootProjectionNode.current},resetTransform:function(instance,value){instance.style.transform=null!=value?value:"none"}}),featureBundle=Object(tslib.__assign)(Object(tslib.__assign)(Object(tslib.__assign)(Object(tslib.__assign)({},animations_animations),gestureAnimations),drag_drag),layoutFeatures),motion=createMotionProxy((function(Component,config){return createDomMotionConfig(Component,config,featureBundle,createDomVisualElement,HTMLProjectionNode)}));function useIsMounted(){var isMounted=Object(react.useRef)(!1);return use_isomorphic_effect_useIsomorphicLayoutEffect((function(){return isMounted.current=!0,function(){isMounted.current=!1}}),[]),isMounted}var PresenceChild=function(_a){var children=_a.children,initial=_a.initial,isPresent=_a.isPresent,onExitComplete=_a.onExitComplete,custom=_a.custom,presenceAffectsLayout=_a.presenceAffectsLayout,presenceChildren=useConstant(newChildrenMap),id=useId(),context=Object(react.useMemo)((function(){return{id:id,initial:initial,isPresent:isPresent,custom:custom,onExitComplete:function(childId){var e_1,_a;presenceChildren.set(childId,!0);try{for(var _b=Object(tslib.__values)(presenceChildren.values()),_c=_b.next();!_c.done;_c=_b.next()){if(!_c.value)return}}catch(e_1_1){e_1={error:e_1_1}}finally{try{_c&&!_c.done&&(_a=_b.return)&&_a.call(_b)}finally{if(e_1)throw e_1.error}}null==onExitComplete||onExitComplete()},register:function(childId){return presenceChildren.set(childId,!1),function(){return presenceChildren.delete(childId)}}}}),presenceAffectsLayout?void 0:[isPresent]);return Object(react.useMemo)((function(){presenceChildren.forEach((function(_,key){return presenceChildren.set(key,!1)}))}),[isPresent]),react.useEffect((function(){!isPresent&&!presenceChildren.size&&(null==onExitComplete||onExitComplete())}),[isPresent]),react.createElement(PresenceContext.Provider,{value:context},children)};function newChildrenMap(){return new Map}var getChildKey=function(child){return child.key||""},isDev="production"!==process.a.env.NODE_ENV;var AnimatePresence=function(_a){var children=_a.children,custom=_a.custom,_b=_a.initial,initial=void 0===_b||_b,onExitComplete=_a.onExitComplete,exitBeforeEnter=_a.exitBeforeEnter,_c=_a.presenceAffectsLayout,presenceAffectsLayout=void 0===_c||_c,_d=Object(tslib.__read)(function useForceUpdate(){var isMounted=useIsMounted(),_a=Object(tslib.__read)(Object(react.useState)(0),2),forcedRenderCount=_a[0],setForcedRenderCount=_a[1],forceRender=Object(react.useCallback)((function(){isMounted.current&&setForcedRenderCount(forcedRenderCount+1)}),[forcedRenderCount]);return[Object(react.useCallback)((function(){return framesync_cjs_default.a.postRender(forceRender)}),[forceRender]),forcedRenderCount]}(),1),forceRender=_d[0],forceRenderLayoutGroup=Object(react.useContext)(LayoutGroupContext).forceRender;forceRenderLayoutGroup&&(forceRender=forceRenderLayoutGroup);var isMounted=useIsMounted(),filteredChildren=function onlyElements(children){var filtered=[];return react.Children.forEach(children,(function(child){Object(react.isValidElement)(child)&&filtered.push(child)})),filtered}(children),childrenToRender=filteredChildren,exiting=new Set,presentChildren=Object(react.useRef)(childrenToRender),allChildren=Object(react.useRef)(new Map).current,isInitialRender=Object(react.useRef)(!0);if(use_isomorphic_effect_useIsomorphicLayoutEffect((function(){isInitialRender.current=!1,function updateChildLookup(children,allChildren){var seenChildren=isDev?new Set:null;children.forEach((function(child){var key=getChildKey(child);isDev&&seenChildren&&seenChildren.has(key)&&(console.warn('Children of AnimatePresence require unique keys. "'.concat(key,'" is a duplicate.')),seenChildren.add(key)),allChildren.set(key,child)}))}(filteredChildren,allChildren),presentChildren.current=childrenToRender})),useUnmountEffect((function(){isInitialRender.current=!0,allChildren.clear(),exiting.clear()})),isInitialRender.current)return react.createElement(react.Fragment,null,childrenToRender.map((function(child){return react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,initial:!!initial&&void 0,presenceAffectsLayout:presenceAffectsLayout},child)})));childrenToRender=Object(tslib.__spreadArray)([],Object(tslib.__read)(childrenToRender),!1);for(var presentKeys=presentChildren.current.map(getChildKey),targetKeys=filteredChildren.map(getChildKey),numPresent=presentKeys.length,i=0;i<numPresent;i++){var key=presentKeys[i];-1===targetKeys.indexOf(key)&&exiting.add(key)}return exitBeforeEnter&&exiting.size&&(childrenToRender=[]),exiting.forEach((function(key){if(-1===targetKeys.indexOf(key)){var child=allChildren.get(key);if(child){var insertionIndex=presentKeys.indexOf(key);childrenToRender.splice(insertionIndex,0,react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!1,onExitComplete:function(){allChildren.delete(key),exiting.delete(key);var removeIndex=presentChildren.current.findIndex((function(presentChild){return presentChild.key===key}));if(presentChildren.current.splice(removeIndex,1),!exiting.size){if(presentChildren.current=filteredChildren,!1===isMounted.current)return;forceRender(),onExitComplete&&onExitComplete()}},custom:custom,presenceAffectsLayout:presenceAffectsLayout},child))}}})),childrenToRender=childrenToRender.map((function(child){var key=child.key;return exiting.has(key)?child:react.createElement(PresenceChild,{key:getChildKey(child),isPresent:!0,presenceAffectsLayout:presenceAffectsLayout},child)})),"production"!==process.a.env.NODE_ENV&&exitBeforeEnter&&childrenToRender.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),react.createElement(react.Fragment,null,exiting.size?childrenToRender:childrenToRender.map((function(child){return Object(react.cloneElement)(child)})))};const PortalContainer=styled_components_browser_esm.d.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`,Portal_root=document.createElement("div");function Portal({children:children}){const renderedChildrenOnce=Object(react.useRef)(!1);return children&&(renderedChildrenOnce.current=!0),renderedChildrenOnce.current?Object(react_dom.createPortal)(react.createElement(PortalContainer,null,children),Portal_root):null}Portal_root.className="deskpro-modal-root",document.body.append(Portal_root);const scrollableOverlay=styled_components_browser_esm.c`
  overflow: auto;
`,nonScrollableOverlay=styled_components_browser_esm.c`
  overflow: hidden;
`,overlayBackDrop=(styled_components_browser_esm.d.div`
  overflow: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${({zIndex:zIndex,theme:theme})=>zIndex?theme.layers[zIndex]:theme.layers.modal};
  ${props=>props.scrollable?scrollableOverlay:nonScrollableOverlay}
`,styled_components_browser_esm.c`
  background-color: ${props=>props.theme.colors.grey100};
`);Object(styled_components_browser_esm.d)(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  ${props=>props.hasBackDrop&&overlayBackDrop}
`;Object(styled_components_browser_esm.d)(motion.div)`
  padding-top: ${props=>"fullPage"===props.size?"57px":0};
  display: flex;
  position: fixed;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
`,styled_components_browser_esm.d.div`
  align-self: ${props=>"fullPage"===props.size?"flex-start":"center"};
  background-color: ${props=>props.theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: ${props=>props.containerPadding?"20px":0};
  pointer-events: all;
  width: ${props=>Object(index_module.b)(props.size).with("small",(()=>"350px")).with("medium",(()=>"500px")).with("large",(()=>"700px")).with("xLarge",(()=>"840px")).with("xxLarge",(()=>"1000px")).with("fullPage",(()=>"94vw")).exhaustive()};
  max-height: ${props=>Object(index_module.b)(props.size).with("fullPage",(()=>"calc(100vh - 114px)")).otherwise((()=>"80vh"))};
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.15));
  z-index: 20;
  overflow-y: hidden;
`;Object(styled_components_browser_esm.d)(Stack)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top: 8px solid ${props=>props.theme.standardLabelColors[props.themeColor].borderColor};
  padding-top: 20px;
  padding-bottom: 10px;
`,Object(styled_components_browser_esm.d)(TSpan)`
  font-size: 16px;
`;const verticalDivider=styled_components_browser_esm.c`
  border-right: 1px solid;
  height: 100%;
`,horizontalDivider=styled_components_browser_esm.c`
  border-top: 1px solid;
  width: 100%;
`;styled_components_browser_esm.d.div.attrs(dpNameProp("Divider"))`
  transition: border-color 0.2s ease-in-out;

  ${props=>props.vertical?verticalDivider:horizontalDivider}
  border-color: ${({theme:theme,themeColor:themeColor})=>themeColor?theme.colors[themeColor]:theme.colors.grey20}
`;var usePopper=__webpack_require__("./node_modules/.pnpm/react-popper@2.2.5_4d48938cec404f33c7375aa6b453941c/node_modules/react-popper/lib/esm/usePopper.js");Object(styled_components_browser_esm.d)(motion.div).attrs(dpNameProp("Drilldown"))`
  overflow: hidden;
  background: ${({theme:theme})=>theme.colors.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  z-index: ${({theme:theme,layer:layer})=>theme.layers[layer]};
  outline: none;
  padding-top: 5px;
  padding-bottom: 5px;
  width: ${({containerWidth:containerWidth})=>null!=containerWidth?containerWidth:200}px;
  ${({containerHeight:containerHeight})=>containerHeight?`height: ${containerHeight}px;`:""}
  user-select: none;
`,styled_components_browser_esm.d.div`
  width: 100%;
  border-top: 1px solid ${({theme:theme})=>theme.colors.grey10};
`,styled_components_browser_esm.d.div`
  font-family: ${({theme:theme})=>theme.fonts.inter};
  font-size: 12px;
  font-weight: 500;
  padding-top: 8px;
  padding-bottom: 5px;
  padding-left: 15px;
  line-height: 110%;
  user-select: none;
  padding-right: 15px;
`;const DrilldownItemLayout=styled_components_browser_esm.d.a`
  transition: background-color 0.1s ease-in-out;
  outline: none;
  padding-left: ${({paddingLeft:paddingLeft=!0})=>paddingLeft?15:0}px;
  padding-right: 0;
  display: flex;
  user-select: none;
  cursor: ${({disabled:disabled})=>disabled?"not-allowed":"pointer"};
  background-color: ${({theme:theme,active:active})=>active?theme.colors.brandShade40:""};

  &:hover {
    background-color: ${({theme:theme,disabled:disabled})=>disabled?"":theme.colors.brandShade20};
  }

  &:focus {
    background-color: ${({theme:theme})=>theme.colors.brandShade20};
  }

  &:active {
    background-color: ${({theme:theme})=>theme.colors.brandShade40};
  }

  font-size: 12px;
  font-family: ${({theme:theme})=>theme.fonts.inter};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  opacity: ${({disabled:disabled})=>disabled?"0.5":"1"};
  text-decoration: none;
`;styled_components_browser_esm.d.a`
  outline: none;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  user-select: none;
  height: 32px;
  cursor: pointer;

  svg {
    color: ${({theme:theme})=>theme.colors.grey80};
  }

  &:hover {
    svg {
      color: ${({theme:theme})=>theme.colors.brandShade100};
    }
  }

  &:focus {
    svg {
      color: ${({theme:theme})=>theme.colors.brandShade100};
    }
  }

  &:active {
    svg {
      color: ${({theme:theme})=>theme.colors.brandShade100};
    }
  }

  font-size: 12px;
  font-family: ${({theme:theme})=>theme.fonts.inter};
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  gap: 8px;
`,Object(styled_components_browser_esm.d)(DrilldownItemLayout)`
  padding-left: 0;

  div {
    color: ${({theme:theme})=>theme.colors.cyan100};
  }
`,Object(styled_components_browser_esm.d)(Button_IconButton)`
  visibility: ${({$visible:$visible})=>$visible?"visible":"hidden"};

  && svg {
    font-size: 14px;
    color: ${({theme:theme})=>theme.colors.grey100};
  }
`,styled_components_browser_esm.d.div`
  width: calc(100% - 30px);
  color: ${({theme:theme,selected:selected})=>selected?theme.colors.brandPrimary:theme.colors.grey100};
  font-weight: ${({selected:selected})=>selected?500:400};
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  gap: 6px;
  user-select: none;

  .resetButton & {
    color: ${({theme:theme})=>theme.colors.grey100};
    font-size: 12px;
  }

  min-height: 36px;
`,styled_components_browser_esm.d.div`
  padding-right: 5px;
  width: ${({iconColumnWidth:iconColumnWidth})=>(iconColumnWidth||24)+"px"};

  .resetButton & {
    color: ${({theme:theme})=>theme.colors.grey40};
  }
`,styled_components_browser_esm.d.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`,Object(styled_components_browser_esm.d)(Stack)`
  overflow: hidden;
  height: 100%;
  width: 100%;
`,Object(styled_components_browser_esm.d)(Stack)`
  width: 100%;
  height: 100%;

  &.drilldown {
    animation-duration: ${({animationDuration:animationDuration})=>`${animationDuration}s`};
    animation-name: drilldown;
  }

  &.drillup {
    animation-duration: ${({animationDuration:animationDuration})=>`${animationDuration}s`};
    animation-name: drillup;
  }

  @keyframes drilldown {
    from {
      margin-left: 0%;
    }

    to {
      margin-left: -100%;
    }
  }
  @keyframes drillup {
    from {
      margin-left: -100%;
    }

    to {
      margin-left: 0%;
    }
  }
`,Object(styled_components_browser_esm.d)(Stack)`
  width: ${({width:width})=>"string"==typeof width?width:`${width}px`};
  min-width: ${({width:width})=>"string"==typeof width?width:`${width}px`};
  order: ${({order:order})=>null!=order?order:0};
`;function useDebouncedCallback(func,wait,options){var _this=this,lastCallTime=Object(react.useRef)(null),lastInvokeTime=Object(react.useRef)(0),timerId=Object(react.useRef)(null),lastArgs=Object(react.useRef)([]),lastThis=Object(react.useRef)(),result=Object(react.useRef)(),funcRef=Object(react.useRef)(func),mounted=Object(react.useRef)(!0);funcRef.current=func;var useRAF=!wait&&0!==wait&&"undefined"!=typeof window;if("function"!=typeof func)throw new TypeError("Expected a function");wait=+wait||0;var leading=!!(options=options||{}).leading,trailing=!("trailing"in options)||!!options.trailing,maxing="maxWait"in options,maxWait=maxing?Math.max(+options.maxWait||0,wait):null;Object(react.useEffect)((function(){return mounted.current=!0,function(){mounted.current=!1}}),[]);var debounced=Object(react.useMemo)((function(){var invokeFunc=function(time){var args=lastArgs.current,thisArg=lastThis.current;return lastArgs.current=lastThis.current=null,lastInvokeTime.current=time,result.current=funcRef.current.apply(thisArg,args)},startTimer=function(pendingFunc,wait){useRAF&&cancelAnimationFrame(timerId.current),timerId.current=useRAF?requestAnimationFrame(pendingFunc):setTimeout(pendingFunc,wait)},shouldInvoke=function(time){if(!mounted.current)return!1;var timeSinceLastCall=time-lastCallTime.current,timeSinceLastInvoke=time-lastInvokeTime.current;return!lastCallTime.current||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait},trailingEdge=function(time){return timerId.current=null,trailing&&lastArgs.current?invokeFunc(time):(lastArgs.current=lastThis.current=null,result.current)},timerExpired=function(){var time=Date.now();if(shouldInvoke(time))return trailingEdge(time);if(mounted.current){var timeSinceLastCall=time-lastCallTime.current,timeSinceLastInvoke=time-lastInvokeTime.current,timeWaiting=wait-timeSinceLastCall,remainingWait=maxing?Math.min(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting;startTimer(timerExpired,remainingWait)}},func=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var time=Date.now(),isInvoking=shouldInvoke(time);if(lastArgs.current=args,lastThis.current=_this,lastCallTime.current=time,isInvoking){if(!timerId.current&&mounted.current)return lastInvokeTime.current=lastCallTime.current,startTimer(timerExpired,wait),leading?invokeFunc(lastCallTime.current):result.current;if(maxing)return startTimer(timerExpired,wait),invokeFunc(lastCallTime.current)}return timerId.current||startTimer(timerExpired,wait),result.current};return func.cancel=function(){timerId.current&&(useRAF?cancelAnimationFrame(timerId.current):clearTimeout(timerId.current)),lastInvokeTime.current=0,lastArgs.current=lastCallTime.current=lastThis.current=timerId.current=null},func.isPending=function(){return!!timerId.current},func.flush=function(){return timerId.current?trailingEdge(Date.now()):result.current},func}),[leading,maxing,wait,maxWait,trailing,useRAF]);return debounced}const Observed=styled_components_browser_esm.d.div`
  height: 3px;
  width: 100%;
`;function ObservedDiv({onIntersect:onIntersect,reverse:reverse=!1}){const ref=Object(react.useRef)(null),callback=Object(react.useRef)(onIntersect);return Object(react.useLayoutEffect)((()=>{callback.current=onIntersect}),[onIntersect]),Object(react.useLayoutEffect)((()=>{if(!ref.current)return;const observer=new IntersectionObserver((entries=>{entries.some((entry=>entry.isIntersecting))&&callback.current()}));return observer.observe(ref.current),()=>observer.disconnect()}),[]),react.createElement(Observed,{...dpNameProp("ObservedDiv"),"data-testid":"observer",position:reverse?"top":"bottom",ref:ref})}__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/web.dom-collections.iterator.js");var ResizeObserverBoxOptions,lodash_throttle=__webpack_require__("./node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"),lodash_throttle_default=__webpack_require__.n(lodash_throttle),lodash_debounce=__webpack_require__("./node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"),lodash_debounce_default=__webpack_require__.n(lodash_debounce),lodash_memoize=__webpack_require__("./node_modules/.pnpm/lodash.memoize@4.1.2/node_modules/lodash.memoize/index.js"),lodash_memoize_default=__webpack_require__.n(lodash_memoize),resizeObservers=[];!function(ResizeObserverBoxOptions){ResizeObserverBoxOptions.BORDER_BOX="border-box",ResizeObserverBoxOptions.CONTENT_BOX="content-box",ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(ResizeObserverBoxOptions||(ResizeObserverBoxOptions={}));var trigger,freeze=function(obj){return Object.freeze(obj)},ResizeObserverSize_ResizeObserverSize=function ResizeObserverSize(inlineSize,blockSize){this.inlineSize=inlineSize,this.blockSize=blockSize,freeze(this)},DOMRectReadOnly_DOMRectReadOnly=function(){function DOMRectReadOnly(x,y,width,height){return this.x=x,this.y=y,this.width=width,this.height=height,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,freeze(this)}return DOMRectReadOnly.prototype.toJSON=function(){var _a=this;return{x:_a.x,y:_a.y,top:_a.top,right:_a.right,bottom:_a.bottom,left:_a.left,width:_a.width,height:_a.height}},DOMRectReadOnly.fromRect=function(rectangle){return new DOMRectReadOnly(rectangle.x,rectangle.y,rectangle.width,rectangle.height)},DOMRectReadOnly}(),isSVG=function(target){return target instanceof SVGElement&&"getBBox"in target},isHidden=function(target){if(isSVG(target)){var _a=target.getBBox(),width=_a.width,height=_a.height;return!width&&!height}var _b=target,offsetWidth=_b.offsetWidth,offsetHeight=_b.offsetHeight;return!(offsetWidth||offsetHeight||target.getClientRects().length)},element_isElement=function(obj){var _a,_b;if(obj instanceof Element)return!0;var scope=null===(_b=null===(_a=obj)||void 0===_a?void 0:_a.ownerDocument)||void 0===_b?void 0:_b.defaultView;return!!(scope&&obj instanceof scope.Element)},global="undefined"!=typeof window?window:{},calculateBoxSize_cache=new WeakMap,scrollRegexp=/auto|scroll/,verticalRegexp=/^tb|vertical/,IE=/msie|trident/i.test(global.navigator&&global.navigator.userAgent),parseDimension=function(pixel){return parseFloat(pixel||"0")},calculateBoxSize_size=function(inlineSize,blockSize,switchSizes){return void 0===inlineSize&&(inlineSize=0),void 0===blockSize&&(blockSize=0),void 0===switchSizes&&(switchSizes=!1),new ResizeObserverSize_ResizeObserverSize((switchSizes?blockSize:inlineSize)||0,(switchSizes?inlineSize:blockSize)||0)},zeroBoxes=freeze({devicePixelContentBoxSize:calculateBoxSize_size(),borderBoxSize:calculateBoxSize_size(),contentBoxSize:calculateBoxSize_size(),contentRect:new DOMRectReadOnly_DOMRectReadOnly(0,0,0,0)}),calculateBoxSizes=function(target,forceRecalculation){if(void 0===forceRecalculation&&(forceRecalculation=!1),calculateBoxSize_cache.has(target)&&!forceRecalculation)return calculateBoxSize_cache.get(target);if(isHidden(target))return calculateBoxSize_cache.set(target,zeroBoxes),zeroBoxes;var cs=getComputedStyle(target),svg=isSVG(target)&&target.ownerSVGElement&&target.getBBox(),removePadding=!IE&&"border-box"===cs.boxSizing,switchSizes=verticalRegexp.test(cs.writingMode||""),canScrollVertically=!svg&&scrollRegexp.test(cs.overflowY||""),canScrollHorizontally=!svg&&scrollRegexp.test(cs.overflowX||""),paddingTop=svg?0:parseDimension(cs.paddingTop),paddingRight=svg?0:parseDimension(cs.paddingRight),paddingBottom=svg?0:parseDimension(cs.paddingBottom),paddingLeft=svg?0:parseDimension(cs.paddingLeft),borderTop=svg?0:parseDimension(cs.borderTopWidth),borderRight=svg?0:parseDimension(cs.borderRightWidth),borderBottom=svg?0:parseDimension(cs.borderBottomWidth),horizontalPadding=paddingLeft+paddingRight,verticalPadding=paddingTop+paddingBottom,horizontalBorderArea=(svg?0:parseDimension(cs.borderLeftWidth))+borderRight,verticalBorderArea=borderTop+borderBottom,horizontalScrollbarThickness=canScrollHorizontally?target.offsetHeight-verticalBorderArea-target.clientHeight:0,verticalScrollbarThickness=canScrollVertically?target.offsetWidth-horizontalBorderArea-target.clientWidth:0,widthReduction=removePadding?horizontalPadding+horizontalBorderArea:0,heightReduction=removePadding?verticalPadding+verticalBorderArea:0,contentWidth=svg?svg.width:parseDimension(cs.width)-widthReduction-verticalScrollbarThickness,contentHeight=svg?svg.height:parseDimension(cs.height)-heightReduction-horizontalScrollbarThickness,borderBoxWidth=contentWidth+horizontalPadding+verticalScrollbarThickness+horizontalBorderArea,borderBoxHeight=contentHeight+verticalPadding+horizontalScrollbarThickness+verticalBorderArea,boxes=freeze({devicePixelContentBoxSize:calculateBoxSize_size(Math.round(contentWidth*devicePixelRatio),Math.round(contentHeight*devicePixelRatio),switchSizes),borderBoxSize:calculateBoxSize_size(borderBoxWidth,borderBoxHeight,switchSizes),contentBoxSize:calculateBoxSize_size(contentWidth,contentHeight,switchSizes),contentRect:new DOMRectReadOnly_DOMRectReadOnly(paddingLeft,paddingTop,contentWidth,contentHeight)});return calculateBoxSize_cache.set(target,boxes),boxes},calculateBoxSize=function(target,observedBox,forceRecalculation){var _a=calculateBoxSizes(target,forceRecalculation),borderBoxSize=_a.borderBoxSize,contentBoxSize=_a.contentBoxSize,devicePixelContentBoxSize=_a.devicePixelContentBoxSize;switch(observedBox){case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:return devicePixelContentBoxSize;case ResizeObserverBoxOptions.BORDER_BOX:return borderBoxSize;default:return contentBoxSize}},ResizeObserverEntry_ResizeObserverEntry=function ResizeObserverEntry(target){var boxes=calculateBoxSizes(target);this.target=target,this.contentRect=boxes.contentRect,this.borderBoxSize=freeze([boxes.borderBoxSize]),this.contentBoxSize=freeze([boxes.contentBoxSize]),this.devicePixelContentBoxSize=freeze([boxes.devicePixelContentBoxSize])},calculateDepthForNode=function(node){if(isHidden(node))return 1/0;for(var depth=0,parent=node.parentNode;parent;)depth+=1,parent=parent.parentNode;return depth},broadcastActiveObservations=function(){var shallowestDepth=1/0,callbacks=[];resizeObservers.forEach((function processObserver(ro){if(0!==ro.activeTargets.length){var entries=[];ro.activeTargets.forEach((function processTarget(ot){var entry=new ResizeObserverEntry_ResizeObserverEntry(ot.target),targetDepth=calculateDepthForNode(ot.target);entries.push(entry),ot.lastReportedSize=calculateBoxSize(ot.target,ot.observedBox),targetDepth<shallowestDepth&&(shallowestDepth=targetDepth)})),callbacks.push((function resizeObserverCallback(){ro.callback.call(ro.observer,entries,ro.observer)})),ro.activeTargets.splice(0,ro.activeTargets.length)}}));for(var _i=0,callbacks_1=callbacks;_i<callbacks_1.length;_i++){(0,callbacks_1[_i])()}return shallowestDepth},gatherActiveObservationsAtDepth=function(depth){resizeObservers.forEach((function processObserver(ro){ro.activeTargets.splice(0,ro.activeTargets.length),ro.skippedTargets.splice(0,ro.skippedTargets.length),ro.observationTargets.forEach((function processTarget(ot){ot.isActive()&&(calculateDepthForNode(ot.target)>depth?ro.activeTargets.push(ot):ro.skippedTargets.push(ot))}))}))},process_process=function(){var event,depth=0;for(gatherActiveObservationsAtDepth(depth);resizeObservers.some((function(ro){return ro.activeTargets.length>0}));)depth=broadcastActiveObservations(),gatherActiveObservationsAtDepth(depth);return resizeObservers.some((function(ro){return ro.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?event=new ErrorEvent("error",{message:"ResizeObserver loop completed with undelivered notifications."}):((event=document.createEvent("Event")).initEvent("error",!1,!1),event.message="ResizeObserver loop completed with undelivered notifications."),window.dispatchEvent(event)),depth>0},queueMicroTask_callbacks=[],queueMicroTask=function(callback){if(!trigger){var toggle_1=0,el_1=document.createTextNode("");new MutationObserver((function(){return queueMicroTask_callbacks.splice(0).forEach((function(cb){return cb()}))})).observe(el_1,{characterData:!0}),trigger=function(){el_1.textContent=""+(toggle_1?toggle_1--:toggle_1++)}}queueMicroTask_callbacks.push(callback),trigger()},watching=0,observerConfig={attributes:!0,characterData:!0,childList:!0,subtree:!0},events=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],scheduler_time=function(timeout){return void 0===timeout&&(timeout=0),Date.now()+timeout},scheduled=!1,scheduler=new(function(){function Scheduler(){var _this=this;this.stopped=!0,this.listener=function(){return _this.schedule()}}return Scheduler.prototype.run=function(timeout){var _this=this;if(void 0===timeout&&(timeout=250),!scheduled){scheduled=!0;var cb,until=scheduler_time(timeout);cb=function(){var elementsHaveResized=!1;try{elementsHaveResized=process_process()}finally{if(scheduled=!1,timeout=until-scheduler_time(),!watching)return;elementsHaveResized?_this.run(1e3):timeout>0?_this.run(timeout):_this.start()}},queueMicroTask((function ResizeObserver(){requestAnimationFrame(cb)}))}},Scheduler.prototype.schedule=function(){this.stop(),this.run()},Scheduler.prototype.observe=function(){var _this=this,cb=function(){return _this.observer&&_this.observer.observe(document.body,observerConfig)};document.body?cb():global.addEventListener("DOMContentLoaded",cb)},Scheduler.prototype.start=function(){var _this=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),events.forEach((function(name){return global.addEventListener(name,_this.listener,!0)})))},Scheduler.prototype.stop=function(){var _this=this;this.stopped||(this.observer&&this.observer.disconnect(),events.forEach((function(name){return global.removeEventListener(name,_this.listener,!0)})),this.stopped=!0)},Scheduler}()),updateCount=function(n){!watching&&n>0&&scheduler.start(),!(watching+=n)&&scheduler.stop()},ResizeObservation_ResizeObservation=function(){function ResizeObservation(target,observedBox){this.target=target,this.observedBox=observedBox||ResizeObserverBoxOptions.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return ResizeObservation.prototype.isActive=function(){var target,size=calculateBoxSize(this.target,this.observedBox,!0);return target=this.target,isSVG(target)||function(target){switch(target.tagName){case"INPUT":if("image"!==target.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(target)||"inline"!==getComputedStyle(target).display||(this.lastReportedSize=size),this.lastReportedSize.inlineSize!==size.inlineSize||this.lastReportedSize.blockSize!==size.blockSize},ResizeObservation}(),ResizeObserverDetail=function ResizeObserverDetail(resizeObserver,callback){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=resizeObserver,this.callback=callback},observerMap=new WeakMap,getObservationIndex=function(observationTargets,target){for(var i=0;i<observationTargets.length;i+=1)if(observationTargets[i].target===target)return i;return-1},ResizeObserverController_ResizeObserverController=function(){function ResizeObserverController(){}return ResizeObserverController.connect=function(resizeObserver,callback){var detail=new ResizeObserverDetail(resizeObserver,callback);observerMap.set(resizeObserver,detail)},ResizeObserverController.observe=function(resizeObserver,target,options){var detail=observerMap.get(resizeObserver),firstObservation=0===detail.observationTargets.length;getObservationIndex(detail.observationTargets,target)<0&&(firstObservation&&resizeObservers.push(detail),detail.observationTargets.push(new ResizeObservation_ResizeObservation(target,options&&options.box)),updateCount(1),scheduler.schedule())},ResizeObserverController.unobserve=function(resizeObserver,target){var detail=observerMap.get(resizeObserver),index=getObservationIndex(detail.observationTargets,target),lastObservation=1===detail.observationTargets.length;index>=0&&(lastObservation&&resizeObservers.splice(resizeObservers.indexOf(detail),1),detail.observationTargets.splice(index,1),updateCount(-1))},ResizeObserverController.disconnect=function(resizeObserver){var _this=this,detail=observerMap.get(resizeObserver);detail.observationTargets.slice().forEach((function(ot){return _this.unobserve(resizeObserver,ot.target)})),detail.activeTargets.splice(0,detail.activeTargets.length)},ResizeObserverController}(),ResizeObserver_ResizeObserver=function(){function ResizeObserver(callback){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof callback)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");ResizeObserverController_ResizeObserverController.connect(this,callback)}return ResizeObserver.prototype.observe=function(target,options){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!element_isElement(target))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");ResizeObserverController_ResizeObserverController.observe(this,target,options)},ResizeObserver.prototype.unobserve=function(target){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!element_isElement(target))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");ResizeObserverController_ResizeObserverController.unobserve(this,target)},ResizeObserver.prototype.disconnect=function(){ResizeObserverController_ResizeObserverController.disconnect(this)},ResizeObserver.toString=function(){return"function ResizeObserver () { [polyfill code] }"},ResizeObserver}(),can_use_dom=__webpack_require__("./node_modules/.pnpm/can-use-dom@0.1.0/node_modules/can-use-dom/index.js"),can_use_dom_default=__webpack_require__.n(can_use_dom);__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.21.0/node_modules/core-js/modules/es.string.replace.js");function getElementWindow(element){return element&&element.ownerDocument&&element.ownerDocument.defaultView?element.ownerDocument.defaultView:window}function getElementDocument(element){return element&&element.ownerDocument?element.ownerDocument:document}var cachedScrollbarWidth=null,cachedDevicePixelRatio=null;function scrollbarWidth(el){if(null===cachedScrollbarWidth){var document=getElementDocument(el);if(void 0===document)return cachedScrollbarWidth=0;var body=document.body,box=document.createElement("div");box.classList.add("simplebar-hide-scrollbar"),body.appendChild(box);var width=box.getBoundingClientRect().right;body.removeChild(box),cachedScrollbarWidth=width}return cachedScrollbarWidth}can_use_dom_default.a&&window.addEventListener("resize",(function(){cachedDevicePixelRatio!==window.devicePixelRatio&&(cachedDevicePixelRatio=window.devicePixelRatio,cachedScrollbarWidth=null)}));var simplebar_core_esm_SimpleBar=function(){function SimpleBar(element,options){var _this=this;this.onScroll=function(){var elWindow=getElementWindow(_this.el);_this.scrollXTicking||(elWindow.requestAnimationFrame(_this.scrollX),_this.scrollXTicking=!0),_this.scrollYTicking||(elWindow.requestAnimationFrame(_this.scrollY),_this.scrollYTicking=!0)},this.scrollX=function(){_this.axis.x.isOverflowing&&(_this.showScrollbar("x"),_this.positionScrollbar("x")),_this.scrollXTicking=!1},this.scrollY=function(){_this.axis.y.isOverflowing&&(_this.showScrollbar("y"),_this.positionScrollbar("y")),_this.scrollYTicking=!1},this.onMouseEnter=function(){_this.showScrollbar("x"),_this.showScrollbar("y")},this.onMouseMove=function(e){_this.mouseX=e.clientX,_this.mouseY=e.clientY,(_this.axis.x.isOverflowing||_this.axis.x.forceVisible)&&_this.onMouseMoveForAxis("x"),(_this.axis.y.isOverflowing||_this.axis.y.forceVisible)&&_this.onMouseMoveForAxis("y")},this.onMouseLeave=function(){_this.onMouseMove.cancel(),(_this.axis.x.isOverflowing||_this.axis.x.forceVisible)&&_this.onMouseLeaveForAxis("x"),(_this.axis.y.isOverflowing||_this.axis.y.forceVisible)&&_this.onMouseLeaveForAxis("y"),_this.mouseX=-1,_this.mouseY=-1},this.onWindowResize=function(){_this.scrollbarWidth=_this.getScrollbarWidth(),_this.hideNativeScrollbar()},this.hideScrollbars=function(){_this.axis.x.track.rect=_this.axis.x.track.el.getBoundingClientRect(),_this.axis.y.track.rect=_this.axis.y.track.el.getBoundingClientRect(),_this.isWithinBounds(_this.axis.y.track.rect)||(_this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible),_this.axis.y.isVisible=!1),_this.isWithinBounds(_this.axis.x.track.rect)||(_this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible),_this.axis.x.isVisible=!1)},this.onPointerEvent=function(e){var isWithinTrackXBounds,isWithinTrackYBounds;_this.axis.x.track.rect=_this.axis.x.track.el.getBoundingClientRect(),_this.axis.y.track.rect=_this.axis.y.track.el.getBoundingClientRect(),(_this.axis.x.isOverflowing||_this.axis.x.forceVisible)&&(isWithinTrackXBounds=_this.isWithinBounds(_this.axis.x.track.rect)),(_this.axis.y.isOverflowing||_this.axis.y.forceVisible)&&(isWithinTrackYBounds=_this.isWithinBounds(_this.axis.y.track.rect)),(isWithinTrackXBounds||isWithinTrackYBounds)&&(e.preventDefault(),e.stopPropagation(),"mousedown"===e.type&&(isWithinTrackXBounds&&(_this.axis.x.scrollbar.rect=_this.axis.x.scrollbar.el.getBoundingClientRect(),_this.isWithinBounds(_this.axis.x.scrollbar.rect)?_this.onDragStart(e,"x"):_this.onTrackClick(e,"x")),isWithinTrackYBounds&&(_this.axis.y.scrollbar.rect=_this.axis.y.scrollbar.el.getBoundingClientRect(),_this.isWithinBounds(_this.axis.y.scrollbar.rect)?_this.onDragStart(e,"y"):_this.onTrackClick(e,"y"))))},this.drag=function(e){var track=_this.axis[_this.draggedAxis].track,trackSize=track.rect[_this.axis[_this.draggedAxis].sizeAttr],scrollbar=_this.axis[_this.draggedAxis].scrollbar,contentSize=_this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr],hostSize=parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr],10);e.preventDefault(),e.stopPropagation();var scrollPos=(("y"===_this.draggedAxis?e.pageY:e.pageX)-track.rect[_this.axis[_this.draggedAxis].offsetAttr]-_this.axis[_this.draggedAxis].dragOffset)/(trackSize-scrollbar.size)*(contentSize-hostSize);"x"===_this.draggedAxis&&(scrollPos=_this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollbarInverted?scrollPos-(trackSize+scrollbar.size):scrollPos,scrollPos=_this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollingInverted?-scrollPos:scrollPos),_this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr]=scrollPos},this.onEndDrag=function(e){var elDocument=getElementDocument(_this.el),elWindow=getElementWindow(_this.el);e.preventDefault(),e.stopPropagation(),_this.el.classList.remove(_this.classNames.dragging),elDocument.removeEventListener("mousemove",_this.drag,!0),elDocument.removeEventListener("mouseup",_this.onEndDrag,!0),_this.removePreventClickId=elWindow.setTimeout((function(){elDocument.removeEventListener("click",_this.preventClick,!0),elDocument.removeEventListener("dblclick",_this.preventClick,!0),_this.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=element,this.minScrollbarWidth=20,this.options=Object.assign({},SimpleBar.defaultOptions,{},options),this.classNames=Object.assign({},SimpleBar.defaultOptions.classNames,{},this.options.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,SimpleBar.instances.has(this.el)||(this.recalculate=lodash_throttle_default()(this.recalculate.bind(this),64),this.onMouseMove=lodash_throttle_default()(this.onMouseMove.bind(this),64),this.hideScrollbars=lodash_debounce_default()(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=lodash_debounce_default()(this.onWindowResize.bind(this),64,{leading:!0}),SimpleBar.getRtlHelpers=lodash_memoize_default()(SimpleBar.getRtlHelpers),this.init())}SimpleBar.getRtlHelpers=function getRtlHelpers(){var dummyDiv=document.createElement("div");dummyDiv.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var scrollbarDummyEl=dummyDiv.firstElementChild;document.body.appendChild(scrollbarDummyEl);var dummyContainerChild=scrollbarDummyEl.firstElementChild;scrollbarDummyEl.scrollLeft=0;var dummyContainerOffset=SimpleBar.getOffset(scrollbarDummyEl),dummyContainerChildOffset=SimpleBar.getOffset(dummyContainerChild);scrollbarDummyEl.scrollLeft=999;var dummyContainerScrollOffsetAfterScroll=SimpleBar.getOffset(dummyContainerChild);return{isRtlScrollingInverted:dummyContainerOffset.left!==dummyContainerChildOffset.left&&dummyContainerChildOffset.left-dummyContainerScrollOffsetAfterScroll.left!=0,isRtlScrollbarInverted:dummyContainerOffset.left!==dummyContainerChildOffset.left}},SimpleBar.getOffset=function getOffset(el){var rect=el.getBoundingClientRect(),elDocument=getElementDocument(el),elWindow=getElementWindow(el);return{top:rect.top+(elWindow.pageYOffset||elDocument.documentElement.scrollTop),left:rect.left+(elWindow.pageXOffset||elDocument.documentElement.scrollLeft)}};var _proto=SimpleBar.prototype;return _proto.init=function init(){SimpleBar.instances.set(this.el,this),can_use_dom_default.a&&(this.initDOM(),this.setAccessibilityAttributes(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},_proto.initDOM=function initDOM(){var _this2=this;if(Array.prototype.filter.call(this.el.children,(function(child){return child.classList.contains(_this2.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector("."+this.classNames.contentWrapper),this.contentEl=this.options.contentNode||this.el.querySelector("."+this.classNames.contentEl),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.placeholderEl=this.findChild(this.wrapperEl,"."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var track=document.createElement("div"),scrollbar=document.createElement("div");track.classList.add(this.classNames.track),scrollbar.classList.add(this.classNames.scrollbar),track.appendChild(scrollbar),this.axis.x.track.el=track.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=track.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},_proto.setAccessibilityAttributes=function setAccessibilityAttributes(){var ariaLabel=this.options.ariaLabel||"scrollable content";this.contentWrapperEl.setAttribute("tabindex","0"),this.contentWrapperEl.setAttribute("role","region"),this.contentWrapperEl.setAttribute("aria-label",ariaLabel)},_proto.initListeners=function initListeners(){var _this3=this,elWindow=getElementWindow(this.el);this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){_this3.el.addEventListener(e,_this3.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){_this3.el.addEventListener(e,_this3.onPointerEvent,{capture:!0,passive:!0})})),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),elWindow.addEventListener("resize",this.onWindowResize);var resizeObserverStarted=!1,resizeObserver=elWindow.ResizeObserver||ResizeObserver_ResizeObserver;this.resizeObserver=new resizeObserver((function(){resizeObserverStarted&&_this3.recalculate()})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),elWindow.requestAnimationFrame((function(){resizeObserverStarted=!0})),this.mutationObserver=new elWindow.MutationObserver(this.recalculate),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})},_proto.recalculate=function recalculate(){var elWindow=getElementWindow(this.el);this.elStyles=elWindow.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var isHeightAuto=this.heightAutoObserverEl.offsetHeight<=1,isWidthAuto=this.heightAutoObserverEl.offsetWidth<=1,contentElOffsetWidth=this.contentEl.offsetWidth,contentWrapperElOffsetWidth=this.contentWrapperEl.offsetWidth,elOverflowX=this.elStyles.overflowX,elOverflowY=this.elStyles.overflowY;this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft;var contentElScrollHeight=this.contentEl.scrollHeight,contentElScrollWidth=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=isHeightAuto?"auto":"100%",this.placeholderEl.style.width=isWidthAuto?contentElOffsetWidth+"px":"auto",this.placeholderEl.style.height=contentElScrollHeight+"px";var contentWrapperElOffsetHeight=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=contentElScrollWidth>contentElOffsetWidth,this.axis.y.isOverflowing=contentElScrollHeight>contentWrapperElOffsetHeight,this.axis.x.isOverflowing="hidden"!==elOverflowX&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==elOverflowY&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var offsetForXScrollbar=this.axis.x.isOverflowing?this.scrollbarWidth:0,offsetForYScrollbar=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&contentElScrollWidth>contentWrapperElOffsetWidth-offsetForYScrollbar,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&contentElScrollHeight>contentWrapperElOffsetHeight-offsetForXScrollbar,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},_proto.getScrollbarSize=function getScrollbarSize(axis){if(void 0===axis&&(axis="y"),!this.axis[axis].isOverflowing)return 0;var scrollbarSize,contentSize=this.contentEl[this.axis[axis].scrollSizeAttr],trackSize=this.axis[axis].track.el[this.axis[axis].offsetSizeAttr],scrollbarRatio=trackSize/contentSize;return scrollbarSize=Math.max(~~(scrollbarRatio*trackSize),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(scrollbarSize=Math.min(scrollbarSize,this.options.scrollbarMaxSize)),scrollbarSize},_proto.positionScrollbar=function positionScrollbar(axis){if(void 0===axis&&(axis="y"),this.axis[axis].isOverflowing){var contentSize=this.contentWrapperEl[this.axis[axis].scrollSizeAttr],trackSize=this.axis[axis].track.el[this.axis[axis].offsetSizeAttr],hostSize=parseInt(this.elStyles[this.axis[axis].sizeAttr],10),scrollbar=this.axis[axis].scrollbar,scrollOffset=this.contentWrapperEl[this.axis[axis].scrollOffsetAttr],scrollPourcent=(scrollOffset="x"===axis&&this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollingInverted?-scrollOffset:scrollOffset)/(contentSize-hostSize),handleOffset=~~((trackSize-scrollbar.size)*scrollPourcent);handleOffset="x"===axis&&this.isRtl&&SimpleBar.getRtlHelpers().isRtlScrollbarInverted?handleOffset+(trackSize-scrollbar.size):handleOffset,scrollbar.el.style.transform="x"===axis?"translate3d("+handleOffset+"px, 0, 0)":"translate3d(0, "+handleOffset+"px, 0)"}},_proto.toggleTrackVisibility=function toggleTrackVisibility(axis){void 0===axis&&(axis="y");var track=this.axis[axis].track.el,scrollbar=this.axis[axis].scrollbar.el;this.axis[axis].isOverflowing||this.axis[axis].forceVisible?(track.style.visibility="visible",this.contentWrapperEl.style[this.axis[axis].overflowAttr]="scroll"):(track.style.visibility="hidden",this.contentWrapperEl.style[this.axis[axis].overflowAttr]="hidden"),this.axis[axis].isOverflowing?scrollbar.style.display="block":scrollbar.style.display="none"},_proto.hideNativeScrollbar=function hideNativeScrollbar(){this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+this.scrollbarWidth+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+this.scrollbarWidth+"px":0},_proto.onMouseMoveForAxis=function onMouseMoveForAxis(axis){void 0===axis&&(axis="y"),this.axis[axis].track.rect=this.axis[axis].track.el.getBoundingClientRect(),this.axis[axis].scrollbar.rect=this.axis[axis].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[axis].scrollbar.rect)?this.axis[axis].scrollbar.el.classList.add(this.classNames.hover):this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[axis].track.rect)?(this.showScrollbar(axis),this.axis[axis].track.el.classList.add(this.classNames.hover)):this.axis[axis].track.el.classList.remove(this.classNames.hover)},_proto.onMouseLeaveForAxis=function onMouseLeaveForAxis(axis){void 0===axis&&(axis="y"),this.axis[axis].track.el.classList.remove(this.classNames.hover),this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover)},_proto.showScrollbar=function showScrollbar(axis){void 0===axis&&(axis="y");var scrollbar=this.axis[axis].scrollbar.el;this.axis[axis].isVisible||(scrollbar.classList.add(this.classNames.visible),this.axis[axis].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},_proto.onDragStart=function onDragStart(e,axis){void 0===axis&&(axis="y");var elDocument=getElementDocument(this.el),elWindow=getElementWindow(this.el),scrollbar=this.axis[axis].scrollbar,eventOffset="y"===axis?e.pageY:e.pageX;this.axis[axis].dragOffset=eventOffset-scrollbar.rect[this.axis[axis].offsetAttr],this.draggedAxis=axis,this.el.classList.add(this.classNames.dragging),elDocument.addEventListener("mousemove",this.drag,!0),elDocument.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(elDocument.addEventListener("click",this.preventClick,!0),elDocument.addEventListener("dblclick",this.preventClick,!0)):(elWindow.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},_proto.onTrackClick=function onTrackClick(e,axis){var _this4=this;if(void 0===axis&&(axis="y"),this.options.clickOnTrack){var elWindow=getElementWindow(this.el);this.axis[axis].scrollbar.rect=this.axis[axis].scrollbar.el.getBoundingClientRect();var scrollbarOffset=this.axis[axis].scrollbar.rect[this.axis[axis].offsetAttr],hostSize=parseInt(this.elStyles[this.axis[axis].sizeAttr],10),scrolled=this.contentWrapperEl[this.axis[axis].scrollOffsetAttr],dir=("y"===axis?this.mouseY-scrollbarOffset:this.mouseX-scrollbarOffset)<0?-1:1,scrollSize=-1===dir?scrolled-hostSize:scrolled+hostSize;!function scrollTo(){var _this4$contentWrapper,_this4$contentWrapper2;-1===dir?scrolled>scrollSize&&(scrolled-=_this4.options.clickOnTrackSpeed,_this4.contentWrapperEl.scrollTo(((_this4$contentWrapper={})[_this4.axis[axis].offsetAttr]=scrolled,_this4$contentWrapper)),elWindow.requestAnimationFrame(scrollTo)):scrolled<scrollSize&&(scrolled+=_this4.options.clickOnTrackSpeed,_this4.contentWrapperEl.scrollTo(((_this4$contentWrapper2={})[_this4.axis[axis].offsetAttr]=scrolled,_this4$contentWrapper2)),elWindow.requestAnimationFrame(scrollTo))}()}},_proto.getContentElement=function getContentElement(){return this.contentEl},_proto.getScrollElement=function getScrollElement(){return this.contentWrapperEl},_proto.getScrollbarWidth=function getScrollbarWidth(){try{return"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:scrollbarWidth(this.el)}catch(e){return scrollbarWidth(this.el)}},_proto.removeListeners=function removeListeners(){var _this5=this,elWindow=getElementWindow(this.el);this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach((function(e){_this5.el.removeEventListener(e,_this5.onPointerEvent,!0)})),["touchstart","touchend","touchmove"].forEach((function(e){_this5.el.removeEventListener(e,_this5.onPointerEvent,{capture:!0,passive:!0})})),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),elWindow.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},_proto.unMount=function unMount(){this.removeListeners(),SimpleBar.instances.delete(this.el)},_proto.isWithinBounds=function isWithinBounds(bbox){return this.mouseX>=bbox.left&&this.mouseX<=bbox.left+bbox.width&&this.mouseY>=bbox.top&&this.mouseY<=bbox.top+bbox.height},_proto.findChild=function findChild(el,query){var matches=el.matches||el.webkitMatchesSelector||el.mozMatchesSelector||el.msMatchesSelector;return Array.prototype.filter.call(el.children,(function(child){return matches.call(child,query)}))[0]},SimpleBar}();simplebar_core_esm_SimpleBar.defaultOptions={autoHide:!0,forceVisible:!1,clickOnTrack:!0,clickOnTrackSpeed:40,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},simplebar_core_esm_SimpleBar.instances=new WeakMap;var simplebar_core_esm=simplebar_core_esm_SimpleBar;function simplebar_react_esm_defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function simplebar_react_esm_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function simplebar_react_esm_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function simplebar_react_esm_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var simplebar_react_esm_SimpleBar=react_default.a.forwardRef((function(_ref,ref){var instance,children=_ref.children,_ref$scrollableNodePr=_ref.scrollableNodeProps,scrollableNodeProps=void 0===_ref$scrollableNodePr?{}:_ref$scrollableNodePr,otherProps=simplebar_react_esm_objectWithoutProperties(_ref,["children","scrollableNodeProps"]),scrollableNodeRef=Object(react.useRef)(),elRef=Object(react.useRef)(),contentNodeRef=Object(react.useRef)(),options={},rest={},deprecatedOptions=[];return Object.keys(otherProps).forEach((function(key){Object.prototype.hasOwnProperty.call(simplebar_core_esm.defaultOptions,key)?options[key]=otherProps[key]:key.match(/data-simplebar-(.+)/)&&"data-simplebar-direction"!==key?deprecatedOptions.push({name:key,value:otherProps[key]}):rest[key]=otherProps[key]})),deprecatedOptions.length&&console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' —> 'autoHide=\"false\"'\n      "),Object(react.useEffect)((function(){return scrollableNodeRef=scrollableNodeProps.ref||scrollableNodeRef,elRef.current&&(instance=new simplebar_core_esm(elRef.current,function simplebar_react_esm_objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?simplebar_react_esm_ownKeys(source,!0).forEach((function(key){simplebar_react_esm_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):simplebar_react_esm_ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},function getOptions(obj){return Array.prototype.reduce.call(obj,(function(acc,attribute){var option=attribute.name.match(/data-simplebar-(.+)/);if(option){var key=option[1].replace(/\W+(.)/g,(function(x,chr){return chr.toUpperCase()}));switch(attribute.value){case"true":acc[key]=!0;break;case"false":acc[key]=!1;break;case void 0:acc[key]=!0;break;default:acc[key]=attribute.value}}return acc}),{})}(deprecatedOptions),{},options,{},scrollableNodeRef&&{scrollableNode:scrollableNodeRef.current},{},contentNodeRef.current&&{contentNode:contentNodeRef.current})),ref&&(ref.current=instance)),function(){instance.unMount(),instance=null}}),[]),react_default.a.createElement("div",_extends({ref:elRef,"data-simplebar":!0},rest),react_default.a.createElement("div",{className:"simplebar-wrapper"},react_default.a.createElement("div",{className:"simplebar-height-auto-observer-wrapper"},react_default.a.createElement("div",{className:"simplebar-height-auto-observer"})),react_default.a.createElement("div",{className:"simplebar-mask"},react_default.a.createElement("div",{className:"simplebar-offset"},"function"==typeof children?children({scrollableNodeRef:scrollableNodeRef,contentNodeRef:contentNodeRef}):react_default.a.createElement("div",_extends({},scrollableNodeProps,{className:"simplebar-content-wrapper".concat(scrollableNodeProps.className?" ".concat(scrollableNodeProps.className):"")}),react_default.a.createElement("div",{className:"simplebar-content"},children)))),react_default.a.createElement("div",{className:"simplebar-placeholder"})),react_default.a.createElement("div",{className:"simplebar-track simplebar-horizontal"},react_default.a.createElement("div",{className:"simplebar-scrollbar"})),react_default.a.createElement("div",{className:"simplebar-track simplebar-vertical"},react_default.a.createElement("div",{className:"simplebar-scrollbar"})))}));simplebar_react_esm_SimpleBar.displayName="SimpleBar",simplebar_react_esm_SimpleBar.propTypes={children:prop_types_default.a.oneOfType([prop_types_default.a.node,prop_types_default.a.func]),scrollableNodeProps:prop_types_default.a.object};var simplebar_react_esm=simplebar_react_esm_SimpleBar;const Scrollbar=Object(react.forwardRef)((({children:children,height:height,width:width,style:style,...props},ref)=>{const allStyles=Object(react.useMemo)((()=>({minHeight:0,...style,...height?{height:height}:void 0,...width?{width:width}:void 0})),[style,height,width]);return react.createElement(StyledSimpleBar,{ref:ref,style:allStyles,...props},children)})),StyledSimpleBar=Object(styled_components_browser_esm.d)(simplebar_react_esm)`
  // Prevent rendering double scrollbars on iOS
  && ::-webkit-scrollbar {
    display: none;
  }
`;function Infinite({children:children,reverse:reverse=!1,anchor:anchor=!1,onFetchMore:onFetchMore,status:status,maxHeight:maxHeight="100%",scrollSideEffect:scrollSideEffect,width:width,fetchMoreText:fetchMoreText,autoscrollText:autoscrollText,scrollRef:scrollRef,justify:justify}){const{ref:ref,isAttached:isAttached,onScroll:onScroll,reAttach:reAttach}=function useScrollControl(children,reverse,anchor,scrollSideEffect,outerRef){const innerRef=Object(react.useRef)(null),ref=null!=outerRef?outerRef:innerRef,firstMount=Object(react.useRef)(!0),shouldAttachScroll=Object(react.useRef)(!0),[isAttached,setIsAttached]=Object(react.useState)(!0),lastKnownScrollOffset=Object(react.useRef)();Object(react.useEffect)((()=>{ref.current&&shouldAttachScroll.current&&(reverse?ref.current.scrollTo({top:ref.current.scrollHeight}):ref.current.scrollTo(0,0))}),[ref,reverse]),Object(react.useLayoutEffect)((()=>{!firstMount.current&&anchor?ref.current&&(shouldAttachScroll.current?reverse?ref.current.scrollTo({top:ref.current.scrollHeight}):ref.current.scrollTo({top:0}):"number"==typeof lastKnownScrollOffset.current&&reverse&&ref.current.scrollTo({top:Math.abs(lastKnownScrollOffset.current-(ref.current.scrollHeight-ref.current.clientHeight))})):firstMount.current=!1}));const debouncedSetIsAttached=useDebouncedCallback((()=>{"number"==typeof lastKnownScrollOffset.current&&ref.current&&(shouldAttachScroll.current!==isAttached&&lastKnownScrollOffset.current>300||shouldAttachScroll.current!==isAttached&&0===lastKnownScrollOffset.current)&&setIsAttached(shouldAttachScroll.current)}),100,{trailing:!0,leading:!0}),handleScroll=Object(react.useCallback)((()=>{ref.current&&!isAttached&&ref.current.scrollTop+ref.current.offsetHeight>ref.current.scrollHeight-2&&setIsAttached(!0),ref.current&&(reverse?ref.current.scrollTop<ref.current.scrollHeight-ref.current.clientHeight?shouldAttachScroll.current=!1:shouldAttachScroll.current=!0:ref.current.scrollTop>0?shouldAttachScroll.current=!1:shouldAttachScroll.current=!0,null==scrollSideEffect||scrollSideEffect(),lastKnownScrollOffset.current=Math.abs(ref.current.scrollTop-(ref.current.scrollHeight-ref.current.clientHeight)),debouncedSetIsAttached())}),[ref,isAttached,reverse,scrollSideEffect,debouncedSetIsAttached]),reAttach=Object(react.useCallback)((()=>{shouldAttachScroll.current=!0,setIsAttached(!0),ref.current&&(reverse?ref.current.scrollTo({top:ref.current.scrollHeight}):ref.current.scrollTo(0,0))}),[ref,reverse]);return{ref:ref,onScroll:handleScroll,isAttached:isAttached,reAttach:reAttach}}(0,reverse,anchor,scrollSideEffect,scrollRef),handleIntersect=Object(react.useCallback)((()=>{!onFetchMore||status&&"end"===status||onFetchMore()}),[onFetchMore,status]),theme=Object(styled_components_browser_esm.e)().colors;return react.createElement(Stack,{...dpNameProp("Infinite"),maxHeight:"100%",style:{position:"relative",overflow:"hidden",height:"100%",width:width},justify:justify,align:"stretch",vertical:!0},react.createElement(Scrollbar,{autoHide:!0,style:{maxHeight:maxHeight},scrollableNodeProps:{ref:ref,onScroll:onScroll}},reverse&&status&&Object(index_module.b)(status).with("loading","hasNextPage",(()=>react.createElement(Stack,{justify:"center",align:"center",padding:5,style:{minHeight:60}},react.createElement(Spinner,null)))).with("end",(()=>null)).with("end-with-force",(()=>react.createElement(Stack,{justify:"center",align:"center",padding:5},react.createElement(Button_Button,{intent:"tertiary",onClick:onFetchMore,text:fetchMoreText})))).exhaustive(),reverse&&react.createElement(ObservedDiv,{onIntersect:handleIntersect}),children,!reverse&&react.createElement(ObservedDiv,{onIntersect:handleIntersect}),!reverse&&("loading"===status||"hasNextPage"===status)&&react.createElement(Stack,{justify:"center",align:"center",padding:5,style:{minHeight:60}},react.createElement(Spinner,null))),anchor&&!isAttached&&react.createElement(Button_OverlayButton,{placement:reverse?"middle-bottom":"middle-top",text:autoscrollText,onClick:reAttach,icon:{icon:free_solid_svg_icons.a,size:14},rightIcon:{icon:free_solid_svg_icons.a,size:14},style:{color:theme.brandShade100}}))}const mergeRefs_mergeRefs=(...refs)=>{const filteredRefs=refs.filter(Boolean);return 0===filteredRefs.length?null:inst=>{for(const ref of filteredRefs)"function"==typeof ref?ref(inst):ref&&(ref.current=inst)}},LeftElement=styled_components_browser_esm.d.span`
  display: inline-flex;
  height: 100%;
  align-items: center;
  padding-left: ${({leftAlignLeftIcon:leftAlignLeftIcon})=>leftAlignLeftIcon?0:9}px;
  padding-right: 5px;
  position: absolute;
  top: 0;
  left: 0;
  ${props=>Object(index_module.b)(props.size).with("large","xLarge",(()=>styled_components_browser_esm.c`
            font-size: 16px;
          `)).otherwise((()=>styled_components_browser_esm.c`
            font-size: 12px;
          `))}
`,RightElement=styled_components_browser_esm.d.span`
  display: inline-flex;
  height: 100%;
  align-items: center;
  position: absolute;
  padding-right: 9px;
  padding-left: 5px;
  top: 0;
  right: 0;

  ${props=>Object(index_module.b)(props.size).with("large","xLarge",(()=>styled_components_browser_esm.c`
            font-size: 16px;
          `)).otherwise((()=>styled_components_browser_esm.c`
            font-size: 12px;
          `))}
`,InputGroupContainer=styled_components_browser_esm.d.div`
  position: relative;
  width: 100%;
  ${Typography_paragraphStyled.p2};

  :focus-within {
    ${LeftElement} > ${Icon_Icon} {
      transition: color 0.2s ease-in-out;
      color: ${props=>props.theme.colors.cyan100};
    }
  }

  ${({error:error,theme:theme})=>!error&&`:hover input:not(:focus) {\n    border-color: ${theme.colors.grey20};\n  }\n   :hover ${DisplayText} {\n    border-bottom: 1px solid ${theme.colors.grey20};\n  }\n  `}
`,baseInputStyle=styled_components_browser_esm.c`
  ${Typography_paragraphStyled.p2};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  color: ${({theme:theme})=>theme.colors.grey100};
  background-color: ${props=>props.theme.colors.white};
  height: 30px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({theme:theme})=>theme.colors.grey20};
  outline: none;
  padding: 0 10px;
  box-sizing: border-box;

  :hover {
    border-color: ${({theme:theme})=>theme.colors.grey40};
  }

  ::placeholder {
    font-family: ${props=>props.theme.fonts.primary};
    color: ${props=>props.theme.colors.grey80};
  }

  :focus {
    border-color: ${({theme:theme})=>theme.colors.cyan80};
    box-shadow: 0 0 0 2px ${({theme:theme})=>theme.colors.cyan20};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${props=>props.theme.colors.grey5};
    border-color: ${props=>props.theme.colors.grey20};
  }

  :read-only {
    cursor: not-allowed;
  }
`,xLargeInput=styled_components_browser_esm.c`
  height: 50px;
  min-height: 50px;
`,largeInput=styled_components_browser_esm.c`
  font-size: 16px;
`,smallInput=styled_components_browser_esm.c`
  height: 24px;
  min-height: 24px;
`,xSmallInput=styled_components_browser_esm.c`
  height: 18px;
  min-height: 18px;
`,errorInput=styled_components_browser_esm.c`
  && {
    border-color: ${props=>props.theme.colors.red40};
  }

  :hover {
    border-color: ${props=>props.theme.colors.red40};
  }

  :focus {
    border-color: ${({theme:theme})=>theme.colors.red40};
    box-shadow: 0 0 0 2px ${({theme:theme})=>theme.colors.red20};
  }
`,baseInlineInputStyle=styled_components_browser_esm.c`
  ${Typography_paragraphStyled.p2};
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  color: ${({theme:theme})=>theme.colors.grey100};
  outline: none;
  height: 30px;
  border: none;
  border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey10};
  width: 100%;
  padding-left: 1px;
  padding-right: 1px;

  box-shadow: none !important;

  :hover {
    border-color: ${({theme:theme})=>theme.colors.grey20};
  }

  :focus {
    border-color: ${({theme:theme})=>theme.colors.cyan80};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${props=>props.theme.colors.grey5};
    border-color: ${props=>props.theme.colors.grey10};
  }

  :read-only {
    cursor: not-allowed;
  }

  ::placeholder {
    color: ${({theme:theme})=>theme.colors.grey40};
    opacity: 1;
  }
`,baseInlineDisplayTextStyle=styled_components_browser_esm.c`
  display: inline-flex;
  align-items: center;
  border-color: ${({isVisibleRightIcon:isVisibleRightIcon,theme:theme,error:error})=>isVisibleRightIcon?theme.colors.grey20:error?"":theme.colors.white};

  :read-only {
    cursor: default;
  }

  :hover {
    cursor: pointer;
  }

  :hover[data-disabled="true"],
  :hover[data-readonly="true"] {
    cursor: default;
    border-color: ${({theme:theme})=>theme.colors.white};
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`,DisplayText=Object(styled_components_browser_esm.d)(TSpan)`
  max-width: initial;
  && {
    color: ${({theme:theme,value:value,defaultValue:defaultValue})=>value||defaultValue?theme.colors.grey100:theme.colors.grey40};
  }
`,baseDivAsInput=styled_components_browser_esm.c`
  display: inline-flex;
  align-items: center;
  height: auto;
  min-height: 30px;

  :read-only {
    cursor: default;
  }
`,Placeholder=Object(styled_components_browser_esm.d)(TSpan)`
  color: ${({theme:theme})=>theme.colors.grey40};
`,styles_hideBorder=styled_components_browser_esm.c`
  &&& {
    border-color: transparent;
    :hover,
    :focus {
      border-color: transparent;
    }
  }
`;function getStyleByVariant(props){return"normal"===props.variant||void 0===props.variant?styled_components_browser_esm.c`
      ${baseInputStyle};
      ${"xLarge"===props.inputsize&&xLargeInput};
      ${"large"===props.inputsize&&largeInput};
      ${"small"===props.inputsize&&smallInput};
      ${"xSmall"===props.inputsize&&xSmallInput};
      ${(props.error||props.required)&&errorInput};
    `:styled_components_browser_esm.c`
    ${baseInlineInputStyle}
    ${"xLarge"===props.inputsize&&xLargeInput};
    ${"large"===props.inputsize&&largeInput};
    ${"small"===props.inputsize&&smallInput};
    ${"xSmall"===props.inputsize&&xSmallInput};
    ${(props.error||props.required)&&errorInput};
    ${props.hideBorder&&styles_hideBorder}
  `}const Input_Input=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function Input({leftIcon:leftIcon,rightIcon:rightIcon,type:type="text",inputsize:inputSize,error:error,leftAlignLeftIcon:leftAlignLeftIcon,placeholder:placeholder,required:required,isVisibleRightIconOnFocus:isVisibleRightIconOnFocus,hideBorder:hideBorder,...rest},ref){const[leftPadding,setLeftPadding]=Object(react.useState)(),[rightPadding,setRightPadding]=Object(react.useState)(),leftElementRef=Object(react.useRef)(null),rightElementRef=Object(react.useRef)(null);return Object(react.useEffect)((()=>{if(leftElementRef.current){const{clientWidth:clientWidth}=leftElementRef.current;(void 0===leftPadding||Math.abs(clientWidth-leftPadding)>2)&&setLeftPadding(clientWidth)}else setLeftPadding(void 0);if(rightElementRef.current){const{clientWidth:clientWidth}=rightElementRef.current;(void 0===rightPadding||Math.abs(clientWidth-rightPadding)>2)&&setRightPadding(clientWidth)}else setRightPadding(void 0)}),[leftIcon,rightIcon]),react.createElement(InputGroupContainer,{...dpNameProp("Input"),error:error,type:"p2"},leftIcon&&react.createElement(LeftElement,{size:inputSize,ref:leftElementRef,leftAlignLeftIcon:leftAlignLeftIcon},isAnyIcon(leftIcon)?react.createElement(Icon_Icon,{icon:leftIcon}):isIconProps(leftIcon)?react.createElement(Icon_Icon,{...leftIcon}):leftIcon),react.createElement("input",{style:{paddingLeft:leftPadding,paddingRight:rightPadding},ref:ref,type:type,...rest,placeholder:required&&placeholder?`${placeholder}*`:placeholder}),rightIcon&&react.createElement(RightElement,{size:inputSize,ref:rightElementRef},isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon))})))`
  ${props=>getStyleByVariant(props)}
`,InputWithDisplay=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function Input({leftIcon:leftIcon,rightIcon:rightIcon,type:type="text",inputsize:inputSize,error:error,isVisibleInput:isVisibleInputFromParent,isVisibleRightIconOnFocus:isVisibleRightIconOnFocus=!0,isAlwaysVisibleRightIcon:isAlwaysVisibleRightIcon,leftAlignLeftIcon:leftAlignLeftIcon,required:required,hideBorder:hideBorder,onDisplayClick:onDisplayClick,isVisibleRightIcon:isVisibleRightIcon,onClickInputGroup:onClickInputGroup,hideAsterisk:hideAsterisk=!1,typographyType:typographyType="p2",...rest},ref){const innerInputRef=Object(react.useRef)(null),inputRef=mergeRefs_mergeRefs(ref,innerInputRef),[isVisibleInputLocal,setIsVisibleInput]=Object(react.useState)(!1),isVisibleInput="boolean"==typeof isVisibleInputFromParent?isVisibleInputFromParent:isVisibleInputLocal,[isVisibleRightIconState,setIsVisibleRightIcon]=Object(react.useState)(!1),visibleRightIcon=null!=isAlwaysVisibleRightIcon?isAlwaysVisibleRightIcon:isVisibleRightIconState,[leftPadding,setLeftPadding]=Object(react.useState)(),[rightPadding,setRightPadding]=Object(react.useState)(),leftElementRef=Object(react.useRef)(null),rightElementRef=Object(react.useRef)(null);return Object(react.useLayoutEffect)((()=>{if(leftElementRef.current){const{clientWidth:clientWidth}=leftElementRef.current;(void 0===leftPadding||Math.abs(clientWidth-leftPadding)>2)&&setLeftPadding(clientWidth)}else setLeftPadding(void 0);if(rightElementRef.current){const{clientWidth:clientWidth}=rightElementRef.current;(void 0===rightPadding||Math.abs(clientWidth-rightPadding)>2)&&setRightPadding(clientWidth)}else setRightPadding(void 0)}),[leftIcon,rightIcon]),Object(react.useEffect)((()=>{rest.autoFocus&&setIsVisibleInput(!0)}),[rest.autoFocus]),Object(react.useEffect)((()=>{isVisibleInput&&innerInputRef.current&&innerInputRef.current.focus()}),[isVisibleInput]),react.createElement(InputGroupContainer,{...dpNameProp("InputWithDisplay"),"data-disabled":rest.disabled,"data-readonly":rest.readOnly,onClick:e=>{rest.disabled||rest.readOnly||(setIsVisibleInput(!0),setIsVisibleRightIcon(isVisibleRightIconOnFocus),onClickInputGroup&&onClickInputGroup(e))},onMouseEnter:()=>{rest.disabled||rest.readOnly||setIsVisibleRightIcon(!0)},onMouseLeave:()=>{rest.disabled||rest.readOnly||setIsVisibleRightIcon(!1)},type:typographyType},leftIcon&&react.createElement(LeftElement,{ref:leftElementRef,leftAlignLeftIcon:leftAlignLeftIcon},isAnyIcon(leftIcon)?react.createElement(Icon_Icon,{icon:leftIcon}):isIconProps(leftIcon)?react.createElement(Icon_Icon,{...leftIcon}):leftIcon),react.createElement("input",{...rest,autoFocus:!0,style:{...rest.style,paddingLeft:leftPadding,paddingRight:rightPadding,display:isVisibleInput?"block":"none"},ref:inputRef,type:type,onBlur:e=>{setIsVisibleInput(!1),setIsVisibleRightIcon(!1),rest.onBlur&&rest.onBlur(e)}}),react.createElement(DisplayText,{...rest,style:{...rest.style,paddingLeft:leftPadding||1,paddingRight:rightPadding||1,paddingTop:1,display:isVisibleInput?"none":void 0},"data-disabled":rest.disabled,"data-readonly":rest.readOnly,role:"textbox",type:typographyType},react.createElement("span",{onClick:onDisplayClick},rest.value||rest.defaultValue||react.createElement(react.Fragment,null,rest.placeholder,required&&!hideAsterisk&&react.createElement(TSpan,{type:"p1",themeColor:"red100"},"*")))),rightIcon&&react.createElement(RightElement,{ref:rightElementRef,style:{visibility:visibleRightIcon||isVisibleRightIconOnFocus&&isVisibleInput?"visible":"hidden"}},isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon))})))`
  ${baseInlineInputStyle};
  ${baseInlineDisplayTextStyle};
  ${props=>"xLarge"===props.inputsize&&xLargeInput};
  ${props=>"large"===props.inputsize&&largeInput};
  ${props=>"small"===props.inputsize&&smallInput};
  ${props=>"xSmall"===props.inputsize&&xSmallInput};
  ${props=>(props.error||props.required)&&errorInput};
  ${props=>props.hideBorder&&styles_hideBorder};
`,Input_DivAsInput=(Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function Input({leftIcon:leftIcon,rightIcon:rightIcon,type:type="text",inputsize:inputSize,error:error,required:required,onFocus:onFocus,leftAlignLeftIcon:leftAlignLeftIcon,isDatePickerOpen:isDatePickerOpen,...rest},ref){const[isVisibleRightIcon,setIsVisibleRightIcon]=Object(react.useState)(!1),[leftPadding,setLeftPadding]=Object(react.useState)(),[rightPadding,setRightPadding]=Object(react.useState)(),leftElementRef=Object(react.useRef)(null),rightElementRef=Object(react.useRef)(null);return Object(react.useLayoutEffect)((()=>{if(leftElementRef.current){const{clientWidth:clientWidth}=leftElementRef.current;(void 0===leftPadding||Math.abs(clientWidth-leftPadding)>2)&&setLeftPadding(clientWidth)}else setLeftPadding(void 0);if(rightElementRef.current){const{clientWidth:clientWidth}=rightElementRef.current;(void 0===rightPadding||Math.abs(clientWidth-rightPadding)>2)&&setRightPadding(clientWidth)}else setRightPadding(void 0)}),[leftIcon,rightIcon]),react.createElement(InputGroupContainer,{...dpNameProp("DatePickerInputWithDisplay"),"data-disabled":rest.disabled,"data-readonly":rest.readOnly,onMouseEnter:()=>{rest.disabled||rest.readOnly||setIsVisibleRightIcon(!0)},onMouseLeave:()=>{rest.disabled||rest.readOnly||setIsVisibleRightIcon(!1)},onClick:rest.onClick},leftIcon&&react.createElement(LeftElement,{ref:leftElementRef,leftAlignLeftIcon:leftAlignLeftIcon},isAnyIcon(leftIcon)?react.createElement(Icon_Icon,{icon:leftIcon}):isIconProps(leftIcon)?react.createElement(Icon_Icon,{...leftIcon}):leftIcon),react.createElement("input",{style:{paddingLeft:leftPadding,paddingRight:rightPadding},ref:ref,type:type,...rest}),rightIcon&&react.createElement(RightElement,{ref:rightElementRef,style:{visibility:isVisibleRightIcon||isDatePickerOpen?"visible":"hidden"}},isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon))})))`
  ${baseInlineInputStyle};
  ${baseInlineDisplayTextStyle};
  ${props=>"xLarge"===props.inputsize&&xLargeInput};
  ${props=>"large"===props.inputsize&&largeInput};
  ${props=>"small"===props.inputsize&&smallInput};
  ${props=>"xSmall"===props.inputsize&&xSmallInput};
  ${props=>(props.error||props.required)&&errorInput};
`,Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function DivAsInput({leftIcon:leftIcon,rightIcon:rightIcon,inputsize:inputSize,error:error,required:required,onFocus:onFocus,children:children,value:value,placeholder:placeholder,hideBorder:hideBorder,...rest},ref){const[leftPadding,setLeftPadding]=Object(react.useState)(),[rightPadding,setRightPadding]=Object(react.useState)(),leftElementRef=Object(react.useRef)(null),rightElementRef=Object(react.useRef)(null);return Object(react.useLayoutEffect)((()=>{if(leftElementRef.current){const{clientWidth:clientWidth}=leftElementRef.current;(void 0===leftPadding||Math.abs(clientWidth-leftPadding)>2)&&setLeftPadding(clientWidth)}else setLeftPadding(void 0);if(rightElementRef.current){const{clientWidth:clientWidth}=rightElementRef.current;(void 0===rightPadding||Math.abs(clientWidth-rightPadding)>2)&&setRightPadding(clientWidth)}else setRightPadding(void 0)}),[leftIcon,rightIcon]),react.createElement(InputGroupContainer,{...dpNameProp("DivAsInput"),ref:ref,...rest,"data-disabled":rest.disabled,"data-readonly":rest.readOnly},leftIcon&&react.createElement(LeftElement,{ref:leftElementRef},isAnyIcon(leftIcon)?react.createElement(Icon_Icon,{icon:leftIcon}):isIconProps(leftIcon)?react.createElement(Icon_Icon,{...leftIcon}):leftIcon),react.createElement(TSpan,{style:{paddingLeft:leftPadding,paddingRight:rightPadding},type:"p2",as:"div"},value||react.createElement(Placeholder,{overflow:"ellipsis",type:"p1"},required?placeholder+"*":placeholder)),rightIcon&&react.createElement(RightElement,{ref:rightElementRef},isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon))})))`
  ${props=>getStyleByVariant(props)};
  ${baseDivAsInput};
  ${props=>props.hideBorder&&styles_hideBorder};
  ${({disabled:disabled,theme:theme})=>disabled?styled_components_browser_esm.c`
          background-color: ${theme.colors.grey10};
          border-radius: 3px;
          pointer-events: none;
        `:""}
`),DivAsInputWithDisplay=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function DivAsInput({leftIcon:leftIcon,rightIcon:rightIcon,inputsize:inputSize,error:error,required:required,onFocus:onFocus,children:children,value:value,placeholder:placeholder,leftAlignLeftIcon:leftAlignLeftIcon,isVisibleRightIcon:isVisibleRightIconFromParent,...rest},ref){const[leftPadding,setLeftPadding]=Object(react.useState)(),[rightPadding,setRightPadding]=Object(react.useState)(),leftElementRef=Object(react.useRef)(null),rightElementRef=Object(react.useRef)(null),[isVisibleRightIcon,setIsVisibleRightIcon]=Object(react.useState)(null!=isVisibleRightIconFromParent&&isVisibleRightIconFromParent);return Object(react.useLayoutEffect)((()=>{if(leftElementRef.current){const{clientWidth:clientWidth}=leftElementRef.current;(void 0===leftPadding||Math.abs(clientWidth-leftPadding)>2)&&setLeftPadding(clientWidth)}else setLeftPadding(void 0);if(rightElementRef.current){const{clientWidth:clientWidth}=rightElementRef.current;(void 0===rightPadding||Math.abs(clientWidth-rightPadding)>2)&&setRightPadding(clientWidth)}else setRightPadding(void 0)}),[leftIcon,rightIcon]),react.createElement(InputGroupContainer,{"data-disabled":rest.disabled,"data-readonly":rest.readOnly,ref:ref,...rest,onMouseEnter:()=>{setIsVisibleRightIcon(!0)},onMouseLeave:()=>{setIsVisibleRightIcon(!1)}},leftIcon&&react.createElement(LeftElement,{ref:leftElementRef,leftAlignLeftIcon:leftAlignLeftIcon},isAnyIcon(leftIcon)?react.createElement(Icon_Icon,{icon:leftIcon}):isIconProps(leftIcon)?react.createElement(Icon_Icon,{...leftIcon}):leftIcon),react.createElement(TSpan,{style:{paddingLeft:leftPadding,paddingRight:rightPadding},type:"p2",as:"div"},value||react.createElement(Placeholder,{overflow:"ellipsis",type:"p1"},placeholder)),rightIcon&&react.createElement(RightElement,{ref:rightElementRef,style:{visibility:isVisibleRightIcon||isVisibleRightIconFromParent?"visible":"hidden"}},isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon))})))`
  ${props=>getStyleByVariant(props)};
  ${baseDivAsInput};
  ${baseInlineDisplayTextStyle};
  ${props=>"small"===props.inputsize&&styled_components_browser_esm.c`
      min-height: 24px;
    `};
  ${props=>"xSmall"===props.inputsize&&styled_components_browser_esm.c`
      min-height: 18px;
    `};
`;var TabBar_styles={bar:{container:()=>styled_components_browser_esm.c`
    border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey20};
    padding-left: 12px;
  `,TabContainer:()=>styled_components_browser_esm.c`
    margin-bottom: -1px;
    box-sizing: border-box;
    align-items: center;
  `,TabInner:({active:active})=>styled_components_browser_esm.c`
    border: 1px solid transparent;
    border-color: ${({theme:theme})=>active?`${theme.colors.grey20} ${theme.colors.grey20} ${theme.colors.white}`:`transparent transparent ${theme.colors.grey20} transparent`};
    padding: 9px 16px;
    background: ${({theme:theme})=>active?theme.colors.white:theme.colors.grey10};
    color: ${({theme:theme})=>active?theme.colors.grey_black100:theme.colors.grey80};
    display: flex;
    align-items: center;
    cursor: pointer;
  `},button:{container:()=>styled_components_browser_esm.c`
    border-bottom: none;
    padding: 0;
    justify-content: space-around;
    appearance: auto; // Prevent Safari rendering as a button
  `,TabContainer:({active:active,disabled:disabled,isTicketHistory:isTicketHistory})=>styled_components_browser_esm.c`
    font-family: ${({theme:theme})=>theme.fonts.headingPrimary};
    font-style: normal;
    font-weight: ${active?"500":"400"};
    font-size: 11px;
    line-height: 110%;
    cursor: default;
    pointer-events: ${disabled?"none":"initial"};
    color: ${({theme:theme})=>active?theme.colors.brandPrimary:disabled?theme.colors.grey20:theme.colors.grey40};
    border: 1px solid ${({theme:theme})=>theme.colors.grey20};
    border-bottom: ${({theme:theme})=>`solid 1px ${active?theme.colors.brandPrimary:theme.colors.grey20}`};
    padding: 0 3px 6px 3px;
    flex-grow: 1;
    border-right-width: 0;

    :hover {
      color: ${({theme:theme})=>theme.colors.grey100};
      cursor: pointer;
    }

    :first-of-type {
      border-left-width: 0;
    }

    ${({theme:theme})=>active&&styled_components_browser_esm.c`
        background-color: ${theme.colors.brandShade20};
      `};
    padding: 7px;
    ${active&&isTicketHistory?styles_headingStyles.h1:styles_headingStyles.h2}
    appearance: auto; // Prevent Safari rendering as a button
  `,TabInner:()=>styled_components_browser_esm.c`
    align-items: center;
    justify-content: center;
    appearance: auto; // Prevent Safari rendering as a button
  `,label:()=>styled_components_browser_esm.c`
    appearance: auto; // Prevent Safari rendering as a button
  `},nav:{container:()=>styled_components_browser_esm.c`
    position: relative;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 3px;
    align-items: center;
    padding: 8px 5px 0px 5px;
    background-color: ${props=>props.theme.colors.systemShade20};
    border-bottom: ${props=>`1px solid ${props.theme.colors.systemShade30}`};
    justify-content: flex-start;
    width: 100%;
  `,TabContainer:({active:active})=>styled_components_browser_esm.c`
    background: none;
    padding: 8px;
    padding-bottom: 6px;
    box-sizing: border-box;
    width: 82px;
    position: relative;
    z-index: 2;
    border: 1px solid transparent;

    ${({theme:theme})=>active&&`\n    z-index: 3;\n    border-radius: 8px 8px 0 0;\n    background-color: ${theme.colors.systemShade10};\n    border: 1px solid ${theme.colors.systemShade30};\n    border-bottom: 1px solid ${theme.colors.systemShade10};\n    margin-bottom: -2px;\n\n    &::before,\n    &::after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      bottom: -2px;\n      height: 5px;\n      width: 5px;\n      background-color: transparent;\n      z-index: 2;\n      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);\n    }\n\n    &::before {\n      left: -5px;\n      border-bottom: 1px solid ${theme.colors.systemShade30};\n      border-right: 1px solid ${theme.colors.systemShade30};\n      box-shadow: 1px 1px 0 0 ${theme.colors.systemShade10};\n      border-radius: 0 0 4px 0;\n      bottom: -1px;\n    }\n\n    &::after {\n      right: -5px;\n      border-bottom: 1px solid ${theme.colors.systemShade30};\n      border-left: 1px solid ${theme.colors.systemShade30};\n      box-shadow: -1px 1px 0 0 ${theme.colors.systemShade10};\n      border-radius: 0 0 0 4px;\n      bottom: -1px;\n    }\n  `}

    &:hover {
      cursor: pointer;
    }
  `,TabInner:()=>styled_components_browser_esm.c`
    align-items: center;
    justify-content: center;
  `,label:()=>styled_components_browser_esm.c`
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-style: normal;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    ${Typography_headingStyles.h8}
    color: ${props=>props.theme.colors.systemShade80};
  `},tab:{container:()=>styled_components_browser_esm.c`
    border-bottom: ${({theme:theme})=>`1px solid ${theme.colors.grey5}`};
    padding: 6px 12px 0 12px;
    justify-content: space-around;
  `,TabContainer:({active:active,disabled:disabled,isTicketHistory:isTicketHistory})=>styled_components_browser_esm.c`
    font-family: ${({theme:theme})=>theme.fonts.headingPrimary};
    font-style: normal;
    font-weight: ${active?"500":"400"};
    font-size: 11px;
    line-height: 110%;
    cursor: default;
    pointer-events: ${disabled?"none":"initial"};
    color: ${({theme:theme})=>active?theme.colors.brandPrimary:disabled?theme.colors.grey20:theme.colors.grey40};
    border-bottom: ${({theme:theme})=>active?`solid 2px ${theme.colors.brandPrimary}`:"none"};
    padding: 0 3px 6px 3px;
    :hover {
      color: ${({theme:theme})=>theme.colors.grey100};
      cursor: pointer;
    }
    ${active&&isTicketHistory?Typography_headingStyles.h1:Typography_headingStyles.h2}
  `,TabInner:()=>styled_components_browser_esm.c`
    align-items: center;
    justify-content: center;
  `}};const TabBarContainer=Object(styled_components_browser_esm.d)(Stack)`
  width: 100%;
  ${({type:type})=>{var _a,_b,_c;return null!==(_c=null===(_b=(_a=TabBar_styles[type]).container)||void 0===_b?void 0:_b.call(_a))&&void 0!==_c?_c:""}}
`,TabBarTabContainer=styled_components_browser_esm.d.div`
  ${({type:type,active:active})=>{var _a,_b,_c;return null!==(_c=null===(_b=(_a=TabBar_styles[type]).TabContainer)||void 0===_b?void 0:_b.call(_a,{active:active}))&&void 0!==_c?_c:""}}
`,TabBarTabInner=Object(styled_components_browser_esm.d)(Stack)`
  ${({type:type,active:active})=>{var _a,_b,_c;return null!==(_c=null===(_b=(_a=TabBar_styles[type]).TabInner)||void 0===_b?void 0:_b.call(_a,{active:active}))&&void 0!==_c?_c:""}}
`,TabBarTabIcon=styled_components_browser_esm.d.span`
  padding-right: 8px;
  font-size: 11px;
`,TabBarTabLabel=Object(styled_components_browser_esm.d)(TSpan).attrs({type:"h4"})`
  color: ${({theme:theme,active:active})=>active?theme.colors.grey_black100:theme.colors.grey80};
  ${({tabType:tabType})=>{var _a,_b,_c;return null!==(_c=null===(_b=(_a=TabBar_styles[tabType]).label)||void 0===_b?void 0:_b.call(_a))&&void 0!==_c?_c:""}}
`,TabBar=({tabs:tabs,activeIndex:activeIndex=0,onClickTab:onClickTab,type:type="bar",isTicketHistory:isTicketHistory,tooltipStyle:tooltipStyle,tooltipPlacement:tooltipPlacement,containerStyles:containerStyles,className:className,...rest})=>react.createElement(TabBarContainer,{type:type,className:className,style:containerStyles,...dpNameProp("TabBar"),...rest},tabs.map(((tab,index)=>react.createElement(TabBarTab,{key:index,...tab,active:activeIndex===index,onClick:()=>onClickTab(index),type:type,tooltipStyle:tooltipStyle,tooltipPlacement:tooltipPlacement,isTicketHistory:isTicketHistory})))),TabBarTab=({icon:icon,label:label,onClick:onClick,type:type,tooltip:tooltip,tooltipStyle:tooltipStyle,tooltipPlacement:tooltipPlacement,...props})=>react.createElement(Tooltip,{disabled:!tooltip,styleType:tooltipStyle,placement:tooltipPlacement,content:tooltip},react.createElement(TabBarTabContainer,{type:type,...dpNameProp("TabBarTab"),...props,onClick:onClick},react.createElement(TabBarTabInner,{type:type,...props},icon&&react.createElement(TabBarTabIcon,null,react.createElement(Icon_Icon,{icon:icon})),react.createElement(TabBarTabLabel,{tabType:type,active:props.active},label))));react.forwardRef((function ChevronRightIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 5l7 7-7 7"}))}));react.forwardRef((function ChevronLeftIcon(props,svgRef){return react.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:svgRef},props),react.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"}))}));styled_components_browser_esm.d.div`
  cursor: pointer;
  user-select: none;
`;const DropdownContainer=Object(styled_components_browser_esm.d)(motion.div).attrs(dpNameProp("Dropdown"))`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({theme:theme})=>theme.colors.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  z-index: ${({theme:theme,layer:layer})=>theme.layers[layer]};
  outline: none;
  padding-top: 5px;
  padding-bottom: 5px;
  // TODO: allow menu contents to define width
  // TODO: set min width based on ref of input trigger
  width: ${({containerWidth:containerWidth})=>null!=containerWidth?containerWidth:200}px;
  ${({containerHeight:containerHeight})=>containerHeight?`height: ${containerHeight}px;`:""}
  ${({containerMaxHeight:containerMaxHeight})=>containerMaxHeight?`max-height: ${containerMaxHeight}px;`:""}
  user-select: none;
`,DropdownDividerItem=styled_components_browser_esm.d.div`
  width: 100%;
  border-top: 1px solid ${({theme:theme})=>theme.colors.grey10};
  margin-top: 5px;
  margin-bottom: 5px;
`,DropdownHeaderItem=styled_components_browser_esm.d.div`
  font-family: ${({theme:theme})=>theme.fonts.inter};
  font-size: 12px;
  font-weight: 500;
  padding-top: 8px;
  padding-bottom: 5px;
  padding-left: 15px;
  line-height: 110%;
  user-select: none;
  padding-right: 15px;
`,DropdownItemLayout=styled_components_browser_esm.d.a`
  transition: background-color 0.1s ease-in-out;
  outline: none;
  padding-left: 15px;
  padding-right: ${({drillDown:drillDown})=>drillDown?"0px":"15px"};
  display: flex;
  user-select: none;
  cursor: ${({disabled:disabled})=>disabled?"not-allowed":"pointer"};
  background-color: ${({theme:theme,active:active})=>active?theme.colors.brandShade40:""};
  &:hover {
    background-color: ${({theme:theme,disabled:disabled})=>disabled?"":theme.colors.brandShade20};
  }
  &:focus {
    background-color: ${({theme:theme})=>theme.colors.brandShade20};
  }
  &:active {
    background-color: ${({theme:theme})=>theme.colors.brandShade40};
  }
  font-size: 12px;
  font-family: ${({theme:theme})=>theme.fonts.inter};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  opacity: ${({disabled:disabled})=>disabled?"0.5":"1"};
  text-decoration: none;
`,styles_CreateNewItemLayout=Object(styled_components_browser_esm.d)(DropdownItemLayout)`
  div {
    color: ${({theme:theme})=>theme.colors.cyan100};
  }
`,styles_ExpandButton=styled_components_browser_esm.d.button`
  cursor: pointer;
  padding: 0;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0;
  border: none;
  background: none;
  height: 24px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`,DropDownLabel=styled_components_browser_esm.d.div`
  width: ${({hasSubItems:hasSubItems})=>hasSubItems?"calc(100% - 30px)":"100%"};
  color: ${({theme:theme,selected:selected})=>selected?theme.colors.brandPrimary:theme.colors.grey100};
  font-weight: ${({selected:selected})=>selected?500:400};
  display: flex;
  align-items: center;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  gap: 6px;
  user-select: none;
  .resetButton & {
    color: ${({theme:theme})=>theme.colors.grey100};
    font-size: 12px;
  }

  min-height: 36px;
`,DropdownIcon=styled_components_browser_esm.d.div`
  padding-right: 5px;
  width: ${({iconColumnWidth:iconColumnWidth})=>(iconColumnWidth||24)+"px"};

  .resetButton & {
    color: ${({theme:theme})=>theme.colors.grey40};
  }
`,DropdownInternalSearchInputContainer=styled_components_browser_esm.d.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;function utility_mergeRefs(...refObjects){return ref=>{for(const refObject of refObjects)"function"==typeof refObject?refObject(ref):null!==refObject&&(refObject.current=ref)}}styled_components_browser_esm.d.div`
  cursor: pointer;
  user-select: none;
`;function dropdownRenderOptions(handleSelectOption,activeItem,activeSubItem,setActiveSubItem,fetchMoreText,autoscrollText,selectedIcon,externalLinkIcon,hideIcons,iconColumnWidth){return(opt,index)=>{switch(opt.type){case"value":return react.createElement(DropdownItem,{active:(null==activeItem?void 0:activeItem.key)===opt.key,onSelect:handleSelectOption,onSelectIcon:opt.onClickIcon,onClickSubItem:opt.onClickSubItem,key:opt.key,value:opt,meta:{active:!1,input:""},activeSubItem:activeSubItem,setActiveSubItem:setActiveSubItem,hideIcons:hideIcons,iconColumnWidth:iconColumnWidth,fetchMoreText:fetchMoreText,autoscrollText:autoscrollText,selectedIcon:selectedIcon,externalLinkIcon:externalLinkIcon});case"header":return react.createElement(DropdownHeaderItem,{key:`header${index}`},opt.label);case"divider":return react.createElement(DropdownDividerItem,{key:`divider${index}`});default:return null}}}function Dropdown_getNextItem(options,currentIndex,direction,hasCreateNewOption){if(0===options.length)return hasCreateNewOption?"createNew":0;const maxIndex=options.length-1;if("createNew"===currentIndex)switch(direction){case"down":return 0;case"up":return maxIndex}switch(direction){case"down":return currentIndex>=maxIndex?hasCreateNewOption?"createNew":0:currentIndex+1;case"up":return 0===currentIndex?hasCreateNewOption?"createNew":maxIndex:currentIndex-1;default:return 0}}function Dropdown({children:children,options:options,stickyHeaderOptions:stickyHeaderOptions,stickyFooterOptions:stickyFooterOptions,inputValue:inputValue,searchPlaceholder:searchPlaceholder,placement:placement="bottom-start",showInternalSearch:showInternalSearch=!1,isLoading:isLoading=!1,usePortal:usePortal=!0,closeOnSelect:closeOnSelect=!0,isOpen:isOpenProp,renderCreateNewOption:renderCreateNewOption,onCreateNewOption:onCreateNewOption,hideIcons:hideIcons,iconColumnWidth:iconColumnWidth,containerWidth:containerWidth,containerHeight:containerHeight,onSelectOption:onSelectOption,onInputChange:onInputChange,onFetchMore:onFetchMore,onClear:onClear,onClose:onClose,onOpen:onOpen,optionsRenderer:optionsRenderer,onInputReturn:onInputReturn,tabProps:tabProps,disabled:disabled,fetchMoreText:fetchMoreText,autoscrollText:autoscrollText,externalLinkIcon:externalLinkIcon,selectedIcon:selectedIcon,layer:layer="popover",containerMaxHeight:containerMaxHeight}){var _a;const valueOptions=Object(react.useMemo)((()=>[...null!=stickyHeaderOptions?stickyHeaderOptions:[],...options,...null!=stickyFooterOptions?stickyFooterOptions:[]].filter((opt=>"value"===opt.type))),[options,stickyFooterOptions,stickyHeaderOptions]),hasCreateNewOption=!!renderCreateNewOption,[isOpenState,setIsOpenState]=Object(react.useState)(!1),[activeValueIndex,setActiveValueIndex]=Object(react.useState)((()=>0===valueOptions.length&&hasCreateNewOption?"createNew":0));Object(react.useEffect)((()=>{0===valueOptions.length&&hasCreateNewOption&&setActiveValueIndex("createNew")}),[hasCreateNewOption,valueOptions.length]);const[activeSubItem,setActiveSubItem]=Object(react.useState)(null),activeDropdownItem=null!==(_a="createNew"!==activeValueIndex?valueOptions[activeValueIndex]:null)&&void 0!==_a?_a:null,isOpen=null!=isOpenProp?isOpenProp:isOpenState,handleOpen=Object(react.useCallback)((()=>{disabled||(null==onOpen||onOpen(),setIsOpenState(!0))}),[disabled,onOpen]),handleClose=Object(react.useCallback)((cause=>{function close(){setIsOpenState(!1),null==onClose||onClose(),setActiveValueIndex(0),setActiveSubItem(null)}("select"!==cause||closeOnSelect)&&close()}),[closeOnSelect,onClose]),targetRef=Object(react.useRef)(null),inputSearchRef=Object(react.useRef)(null),dropdownRef=Object(react.useRef)(null);Object(react.useEffect)((()=>{if(isOpen)return document.addEventListener("click",handler),()=>{document.removeEventListener("click",handler)};function handler(event){window.document.activeElement!==inputSearchRef.current&&(Dropdown_isHtmlNode(dropdownRef.current)&&dropdownRef.current.contains(event.target)||Dropdown_isHtmlNode(targetRef.current)&&targetRef.current.contains(event.target)||handleClose())}}),[handleClose,isOpen]),Object(react.useEffect)((()=>{isOpen&&disabled&&handleClose()}),[isOpen,disabled,handleClose]),Object(react.useEffect)((()=>{var _a;isOpen&&(null===(_a=inputSearchRef.current)||void 0===_a||_a.focus({preventScroll:!0}))}),[isOpen]),Object(react.useEffect)((()=>{function handler(event){"Escape"!==event.key&&27!==event.keyCode||handleClose()}return document.addEventListener("keydown",handler),()=>document.removeEventListener("keydown",handler)}),[handleClose]);const[referenceElement,setReferenceElement]=Object(react.useState)(null),[popperElement,setPopperElement]=Object(react.useState)(null),{styles:styles,attributes:attributes,update:update}=Object(usePopper.a)(referenceElement,popperElement,{placement:placement,modifiers:[{name:"offset",options:{offset:[0,2]}}]});Object(react.useEffect)((()=>{update&&update()}),[update,options,stickyHeaderOptions,stickyFooterOptions]);const handleOnClick=Object(react.useCallback)((()=>{isOpen?handleClose():handleOpen()}),[handleClose,handleOpen,isOpen]),handleKeyDown=Object(react.useCallback)((e=>{switch(e.key){case"ArrowUp":e.preventDefault(),setActiveValueIndex(Dropdown_getNextItem(valueOptions,activeValueIndex,"up",hasCreateNewOption));break;case"ArrowDown":e.preventDefault(),setActiveValueIndex(Dropdown_getNextItem(valueOptions,activeValueIndex,"down",hasCreateNewOption));break;case"Enter":{if("createNew"===activeValueIndex){null==onCreateNewOption||onCreateNewOption();break}const option=valueOptions[activeValueIndex];option?(null==onSelectOption||onSelectOption(option),handleClose("select")):onInputReturn&&inputValue&&inputValue.length>0&&(null==onInputReturn||onInputReturn(inputValue),handleClose());break}case"ArrowRight":activeValueIndex&&e.preventDefault()}}),[activeValueIndex,handleClose,inputValue,onCreateNewOption,onInputReturn,onSelectOption,hasCreateNewOption,valueOptions]),handleSelectOption=Object(react.useCallback)((value=>{null==onSelectOption||onSelectOption(value),handleClose("select")}),[handleClose,onSelectOption]),handleCreateNew=Object(react.useCallback)((()=>{null==onCreateNewOption||onCreateNewOption(),handleClose("select")}),[handleClose,onCreateNewOption]),refWidth=Object(react.useMemo)((()=>(null==referenceElement?void 0:referenceElement.scrollWidth)&&referenceElement.scrollWidth>236?referenceElement.scrollWidth:236),[null==referenceElement?void 0:referenceElement.scrollWidth]),innerDropdownContent=react.createElement(react.Fragment,null,optionsRenderer&&optionsRenderer(options,handleSelectOption,activeDropdownItem,activeSubItem,setActiveSubItem,hideIcons),!optionsRenderer&&options.length>0&&react.createElement(Infinite,{maxHeight:containerHeight?void 0:"40vh",onFetchMore:onFetchMore,anchor:!1,scrollSideEffect:()=>setActiveSubItem(null),fetchMoreText:fetchMoreText,autoscrollText:autoscrollText},options.map(dropdownRenderOptions(handleSelectOption,activeDropdownItem,activeSubItem,setActiveSubItem,fetchMoreText,autoscrollText,selectedIcon,externalLinkIcon,hideIcons,iconColumnWidth))),isLoading&&react.createElement(Spinner,null)),dropdown=react.createElement(DropdownContainer,{role:"list",layer:layer,initial:{opacity:0},animate:{opacity:1},transition:{type:"spring",mass:.5},onKeyDownCapture:handleKeyDown,"data-testid":"dropdown-container",ref:utility_mergeRefs(setPopperElement,dropdownRef),style:styles.popper,containerWidth:containerWidth||refWidth,containerHeight:containerHeight,containerMaxHeight:containerMaxHeight,...attributes.popper},stickyHeaderOptions&&react.createElement(react.Fragment,null,stickyHeaderOptions.map(dropdownRenderOptions(handleSelectOption,activeDropdownItem,activeSubItem,setActiveSubItem,fetchMoreText,autoscrollText,selectedIcon,externalLinkIcon)),react.createElement(DropdownDividerItem,null)),showInternalSearch&&react.createElement(DropdownInternalSearchInputContainer,null,react.createElement(Input_Input,{inputsize:"small",leftIcon:{icon:free_solid_svg_icons.u,themeColor:"cyan100"},rightIcon:react.createElement(Button_IconButton,{minimal:!0,icon:free_solid_svg_icons.x,onClick:()=>null==onInputChange?void 0:onInputChange("")}),value:inputValue,onChange:event=>null==onInputChange?void 0:onInputChange(event.target.value),ref:inputSearchRef,placeholder:searchPlaceholder})),tabProps&&react.createElement(Stack,{vertical:!0,padding:"6px 8px"},react.createElement(TabBar,{type:"tab",tabs:tabProps.tabs,onClickTab:tabProps.onTabChange,activeIndex:tabProps.activeTabIndex,containerStyles:{padding:"0 8px",justifyContent:"flex-start",gap:5}})),innerDropdownContent,stickyFooterOptions&&react.createElement(react.Fragment,null,react.createElement(DropdownDividerItem,null),stickyFooterOptions.map(dropdownRenderOptions(handleSelectOption,activeDropdownItem,activeSubItem,setActiveSubItem,fetchMoreText,autoscrollText,selectedIcon,externalLinkIcon))),hasCreateNewOption&&react.createElement(react.Fragment,null,react.createElement(DropdownDividerItem,null),renderCreateNewOption("createNew"===activeValueIndex,handleCreateNew))),targetProps={active:isOpen,targetProps:{onClick:handleOnClick,...styles.reference,...attributes.reference},targetRef:utility_mergeRefs(setReferenceElement,targetRef),inputRef:utility_mergeRefs(setReferenceElement,inputSearchRef),inputProps:{value:inputValue,onFocus:handleOpen,onChange:event=>null==onInputChange?void 0:onInputChange(event.target.value),placeholder:searchPlaceholder,onKeyDown:handleKeyDown},handleOnClear:onClear};return react.createElement(react.Fragment,null,"function"==typeof children?children(targetProps):children,isOpen&&(usePortal?react.createElement(Portal,null,dropdown):dropdown))}function DropdownItem({value:value,active:active,onSelect:onSelect,onSelectIcon:onSelectIcon,onClickSubItem:onClickSubItem,activeSubItem:activeSubItem,setActiveSubItem:setActiveSubItem,hideIcons:hideIcons,iconColumnWidth:iconColumnWidth,fetchMoreText:fetchMoreText,autoscrollText:autoscrollText,selectedIcon:selectedIcon,externalLinkIcon:externalLinkIcon}){var _a,_b,_c;const hasSubItems=(null!==(_b=null===(_a=value.subItems)||void 0===_a?void 0:_a.length)&&void 0!==_b?_b:0)>0,handleOnClick=e=>{if(value.disabled)return e.stopPropagation(),void e.preventDefault();value.subItems&&value.openSubmenuOnSelect?(null==setActiveSubItem||setActiveSubItem(value.key),null==onClickSubItem||onClickSubItem(value)):null==onSelect||onSelect(value)};return react.createElement(Dropdown,{isOpen:activeSubItem===value.key,options:null!==(_c=value.subItems)&&void 0!==_c?_c:[],placement:"right-start",onSelectOption:onSelect,onFetchMore:value.onFetchMoreSubItems,fetchMoreText:fetchMoreText,autoscrollText:autoscrollText,externalLinkIcon:externalLinkIcon,selectedIcon:selectedIcon},(({targetProps:targetProps,targetRef:targetRef})=>{var _a,_b;return react.createElement(DropdownItemLayout,{role:"listitem",ref:targetRef,...targetProps,"data-testid":"dropdown-value",active:active,onKeyDownCapture:e=>{"ArrowRight"===e.key&&(e.preventDefault(),e.stopPropagation())},tabIndex:0,href:value.href,rel:value.href?"noreferrer noopener":void 0,target:value.href?"_blank":void 0,onClick:value.href?void 0:handleOnClick,disabled:value.disabled,drillDown:(null!==(_b=null===(_a=value.subItems)||void 0===_a?void 0:_a.length)&&void 0!==_b?_b:0)>0},react.createElement(DropDownLabel,{selected:value.selected,hasSubItems:hasSubItems},!hideIcons&&react.createElement(DropdownIcon,{iconColumnWidth:iconColumnWidth,onClick:value.icon&&onSelectIcon?e=>{e.stopPropagation(),onSelectIcon(value.value)}:void 0},isAnyIcon(value.icon)?react.createElement(Icon_Icon,{icon:value.icon}):isIconProps(value.icon)?react.createElement(Icon_Icon,{...value.icon}):value.icon),value.label),value.selected&&react.createElement(Icon_Icon,{icon:selectedIcon}),value.href&&value.showHrefIcon&&react.createElement(Icon_Icon,{icon:externalLinkIcon,themeColor:"cyan100"}),hasSubItems&&react.createElement(styles_ExpandButton,{type:"button",onClick:e=>{e.preventDefault(),e.stopPropagation(),null==setActiveSubItem||setActiveSubItem(value.key),null==onClickSubItem||onClickSubItem(value)}},react.createElement(Icon_Icon,{icon:free_solid_svg_icons.e})))}))}const Dropdown_CreateNewOption=({text:text,icon:icon,onClick:onClick,resetButton:resetButton,iconColor:iconColor,active:active})=>react.createElement(styles_CreateNewItemLayout,{active:active,className:resetButton?"resetButton":"",onClick:onClick},react.createElement(DropDownLabel,{selected:active},react.createElement(DropdownIcon,null,react.createElement(Icon_Icon,{themeColor:iconColor,icon:icon})),text));function Dropdown_isHtmlNode(node){return"object"==typeof node&&notEmpty(node)&&node instanceof HTMLElement}var react_fast_compare=__webpack_require__("./node_modules/.pnpm/react-fast-compare@2.0.4/node_modules/react-fast-compare/index.js"),react_fast_compare_default=__webpack_require__.n(react_fast_compare),isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&Object.keys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),Object.keys(source).forEach((function(key){options.isMergeableObject(source[key])&&target[key]?destination[key]=deepmerge(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options)})),destination}(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var _root=__webpack_require__("./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js"),_Symbol=_root.a.Symbol,objectProto=Object.prototype,_getRawTag_hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;var _getRawTag=function getRawTag(value){var isOwn=_getRawTag_hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=void 0;var unmasked=!0}catch(e){}var result=nativeObjectToString.call(value);return unmasked&&(isOwn?value[symToStringTag]=tag:delete value[symToStringTag]),result},_objectToString_nativeObjectToString=Object.prototype.toString;var _objectToString=function objectToString(value){return _objectToString_nativeObjectToString.call(value)},_baseGetTag_symToStringTag=_Symbol?_Symbol.toStringTag:void 0;var _baseGetTag=function baseGetTag(value){return null==value?void 0===value?"[object Undefined]":"[object Null]":_baseGetTag_symToStringTag&&_baseGetTag_symToStringTag in Object(value)?_getRawTag(value):_objectToString(value)};var _overArg=function overArg(func,transform){return function(arg){return func(transform(arg))}},_getPrototype=_overArg(Object.getPrototypeOf,Object);var lodash_es_isObjectLike=function isObjectLike(value){return null!=value&&"object"==typeof value},funcProto=Function.prototype,isPlainObject_objectProto=Object.prototype,funcToString=funcProto.toString;isPlainObject_objectProto.hasOwnProperty,funcToString.call(Object);var _listCacheClear=function listCacheClear(){this.__data__=[],this.size=0};var lodash_es_eq=function eq(value,other){return value===other||value!=value&&other!=other};var _assocIndexOf=function assocIndexOf(array,key){for(var length=array.length;length--;)if(lodash_es_eq(array[length][0],key))return length;return-1},splice=Array.prototype.splice;var _listCacheDelete=function listCacheDelete(key){var data=this.__data__,index=_assocIndexOf(data,key);return!(index<0)&&(index==data.length-1?data.pop():splice.call(data,index,1),--this.size,!0)};var _listCacheGet=function listCacheGet(key){var data=this.__data__,index=_assocIndexOf(data,key);return index<0?void 0:data[index][1]};var _listCacheHas=function listCacheHas(key){return _assocIndexOf(this.__data__,key)>-1};var _listCacheSet=function listCacheSet(key,value){var data=this.__data__,index=_assocIndexOf(data,key);return index<0?(++this.size,data.push([key,value])):data[index][1]=value,this};function ListCache(entries){var index=-1,length=null==entries?0:entries.length;for(this.clear();++index<length;){var entry=entries[index];this.set(entry[0],entry[1])}}ListCache.prototype.clear=_listCacheClear,ListCache.prototype.delete=_listCacheDelete,ListCache.prototype.get=_listCacheGet,ListCache.prototype.has=_listCacheHas,ListCache.prototype.set=_listCacheSet;var _ListCache=ListCache;var _stackClear=function stackClear(){this.__data__=new _ListCache,this.size=0};var _stackDelete=function stackDelete(key){var data=this.__data__,result=data.delete(key);return this.size=data.size,result};var _stackGet=function stackGet(key){return this.__data__.get(key)};var _stackHas=function stackHas(key){return this.__data__.has(key)};var lodash_es_isObject=function isObject(value){var type=typeof value;return null!=value&&("object"==type||"function"==type)};var uid,lodash_es_isFunction=function isFunction(value){if(!lodash_es_isObject(value))return!1;var tag=_baseGetTag(value);return"[object Function]"==tag||"[object GeneratorFunction]"==tag||"[object AsyncFunction]"==tag||"[object Proxy]"==tag},_coreJsData=_root.a["__core-js_shared__"],maskSrcKey=(uid=/[^.]+$/.exec(_coreJsData&&_coreJsData.keys&&_coreJsData.keys.IE_PROTO||""))?"Symbol(src)_1."+uid:"";var _isMasked=function isMasked(func){return!!maskSrcKey&&maskSrcKey in func},_toSource_funcToString=Function.prototype.toString;var _toSource=function toSource(func){if(null!=func){try{return _toSource_funcToString.call(func)}catch(e){}try{return func+""}catch(e){}}return""},reIsHostCtor=/^\[object .+?Constructor\]$/,_baseIsNative_funcProto=Function.prototype,_baseIsNative_objectProto=Object.prototype,_baseIsNative_funcToString=_baseIsNative_funcProto.toString,_baseIsNative_hasOwnProperty=_baseIsNative_objectProto.hasOwnProperty,reIsNative=RegExp("^"+_baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _baseIsNative=function baseIsNative(value){return!(!lodash_es_isObject(value)||_isMasked(value))&&(lodash_es_isFunction(value)?reIsNative:reIsHostCtor).test(_toSource(value))};var _getValue=function getValue(object,key){return null==object?void 0:object[key]};var _getNative=function getNative(object,key){var value=_getValue(object,key);return _baseIsNative(value)?value:void 0},_Map=_getNative(_root.a,"Map"),_nativeCreate=_getNative(Object,"create");var _hashClear=function hashClear(){this.__data__=_nativeCreate?_nativeCreate(null):{},this.size=0};var _hashDelete=function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];return this.size-=result?1:0,result},_hashGet_hasOwnProperty=Object.prototype.hasOwnProperty;var _hashGet=function hashGet(key){var data=this.__data__;if(_nativeCreate){var result=data[key];return"__lodash_hash_undefined__"===result?void 0:result}return _hashGet_hasOwnProperty.call(data,key)?data[key]:void 0},_hashHas_hasOwnProperty=Object.prototype.hasOwnProperty;var _hashHas=function hashHas(key){var data=this.__data__;return _nativeCreate?void 0!==data[key]:_hashHas_hasOwnProperty.call(data,key)};var _hashSet=function hashSet(key,value){var data=this.__data__;return this.size+=this.has(key)?0:1,data[key]=_nativeCreate&&void 0===value?"__lodash_hash_undefined__":value,this};function Hash(entries){var index=-1,length=null==entries?0:entries.length;for(this.clear();++index<length;){var entry=entries[index];this.set(entry[0],entry[1])}}Hash.prototype.clear=_hashClear,Hash.prototype.delete=_hashDelete,Hash.prototype.get=_hashGet,Hash.prototype.has=_hashHas,Hash.prototype.set=_hashSet;var _Hash=Hash;var _mapCacheClear=function mapCacheClear(){this.size=0,this.__data__={hash:new _Hash,map:new(_Map||_ListCache),string:new _Hash}};var _isKeyable=function isKeyable(value){var type=typeof value;return"string"==type||"number"==type||"symbol"==type||"boolean"==type?"__proto__"!==value:null===value};var _getMapData=function getMapData(map,key){var data=map.__data__;return _isKeyable(key)?data["string"==typeof key?"string":"hash"]:data.map};var _mapCacheDelete=function mapCacheDelete(key){var result=_getMapData(this,key).delete(key);return this.size-=result?1:0,result};var _mapCacheGet=function mapCacheGet(key){return _getMapData(this,key).get(key)};var _mapCacheHas=function mapCacheHas(key){return _getMapData(this,key).has(key)};var _mapCacheSet=function mapCacheSet(key,value){var data=_getMapData(this,key),size=data.size;return data.set(key,value),this.size+=data.size==size?0:1,this};function MapCache(entries){var index=-1,length=null==entries?0:entries.length;for(this.clear();++index<length;){var entry=entries[index];this.set(entry[0],entry[1])}}MapCache.prototype.clear=_mapCacheClear,MapCache.prototype.delete=_mapCacheDelete,MapCache.prototype.get=_mapCacheGet,MapCache.prototype.has=_mapCacheHas,MapCache.prototype.set=_mapCacheSet;var _MapCache=MapCache;var _stackSet=function stackSet(key,value){var data=this.__data__;if(data instanceof _ListCache){var pairs=data.__data__;if(!_Map||pairs.length<199)return pairs.push([key,value]),this.size=++data.size,this;data=this.__data__=new _MapCache(pairs)}return data.set(key,value),this.size=data.size,this};function _Stack_Stack(entries){var data=this.__data__=new _ListCache(entries);this.size=data.size}_Stack_Stack.prototype.clear=_stackClear,_Stack_Stack.prototype.delete=_stackDelete,_Stack_Stack.prototype.get=_stackGet,_Stack_Stack.prototype.has=_stackHas,_Stack_Stack.prototype.set=_stackSet;var _Stack=_Stack_Stack;var _arrayEach=function arrayEach(array,iteratee){for(var index=-1,length=null==array?0:array.length;++index<length&&!1!==iteratee(array[index],index,array););return array},lodash_es_defineProperty=function(){try{var func=_getNative(Object,"defineProperty");return func({},"",{}),func}catch(e){}}();var _baseAssignValue=function baseAssignValue(object,key,value){"__proto__"==key&&lodash_es_defineProperty?lodash_es_defineProperty(object,key,{configurable:!0,enumerable:!0,value:value,writable:!0}):object[key]=value},_assignValue_hasOwnProperty=Object.prototype.hasOwnProperty;var _assignValue=function assignValue(object,key,value){var objValue=object[key];_assignValue_hasOwnProperty.call(object,key)&&lodash_es_eq(objValue,value)&&(void 0!==value||key in object)||_baseAssignValue(object,key,value)};var _copyObject=function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});for(var index=-1,length=props.length;++index<length;){var key=props[index],newValue=customizer?customizer(object[key],source[key],key,object,source):void 0;void 0===newValue&&(newValue=source[key]),isNew?_baseAssignValue(object,key,newValue):_assignValue(object,key,newValue)}return object};var _baseTimes=function baseTimes(n,iteratee){for(var index=-1,result=Array(n);++index<n;)result[index]=iteratee(index);return result};var _baseIsArguments=function baseIsArguments(value){return lodash_es_isObjectLike(value)&&"[object Arguments]"==_baseGetTag(value)},isArguments_objectProto=Object.prototype,isArguments_hasOwnProperty=isArguments_objectProto.hasOwnProperty,propertyIsEnumerable=isArguments_objectProto.propertyIsEnumerable,isArguments=_baseIsArguments(function(){return arguments}())?_baseIsArguments:function(value){return lodash_es_isObjectLike(value)&&isArguments_hasOwnProperty.call(value,"callee")&&!propertyIsEnumerable.call(value,"callee")},lodash_es_isArguments=isArguments,lodash_es_isArray=Array.isArray,isBuffer=__webpack_require__("./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js"),reIsUint=/^(?:0|[1-9]\d*)$/;var _isIndex=function isIndex(value,length){var type=typeof value;return!!(length=null==length?9007199254740991:length)&&("number"==type||"symbol"!=type&&reIsUint.test(value))&&value>-1&&value%1==0&&value<length};var lodash_es_isLength=function isLength(value){return"number"==typeof value&&value>-1&&value%1==0&&value<=9007199254740991},typedArrayTags={};typedArrayTags["[object Float32Array]"]=typedArrayTags["[object Float64Array]"]=typedArrayTags["[object Int8Array]"]=typedArrayTags["[object Int16Array]"]=typedArrayTags["[object Int32Array]"]=typedArrayTags["[object Uint8Array]"]=typedArrayTags["[object Uint8ClampedArray]"]=typedArrayTags["[object Uint16Array]"]=typedArrayTags["[object Uint32Array]"]=!0,typedArrayTags["[object Arguments]"]=typedArrayTags["[object Array]"]=typedArrayTags["[object ArrayBuffer]"]=typedArrayTags["[object Boolean]"]=typedArrayTags["[object DataView]"]=typedArrayTags["[object Date]"]=typedArrayTags["[object Error]"]=typedArrayTags["[object Function]"]=typedArrayTags["[object Map]"]=typedArrayTags["[object Number]"]=typedArrayTags["[object Object]"]=typedArrayTags["[object RegExp]"]=typedArrayTags["[object Set]"]=typedArrayTags["[object String]"]=typedArrayTags["[object WeakMap]"]=!1;var _baseIsTypedArray=function baseIsTypedArray(value){return lodash_es_isObjectLike(value)&&lodash_es_isLength(value.length)&&!!typedArrayTags[_baseGetTag(value)]};var _baseUnary=function baseUnary(func){return function(value){return func(value)}},_nodeUtil=__webpack_require__("./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js"),nodeIsTypedArray=_nodeUtil.a&&_nodeUtil.a.isTypedArray,lodash_es_isTypedArray=nodeIsTypedArray?_baseUnary(nodeIsTypedArray):_baseIsTypedArray,_arrayLikeKeys_hasOwnProperty=Object.prototype.hasOwnProperty;var _arrayLikeKeys=function arrayLikeKeys(value,inherited){var isArr=lodash_es_isArray(value),isArg=!isArr&&lodash_es_isArguments(value),isBuff=!isArr&&!isArg&&Object(isBuffer.a)(value),isType=!isArr&&!isArg&&!isBuff&&lodash_es_isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?_baseTimes(value.length,String):[],length=result.length;for(var key in value)!inherited&&!_arrayLikeKeys_hasOwnProperty.call(value,key)||skipIndexes&&("length"==key||isBuff&&("offset"==key||"parent"==key)||isType&&("buffer"==key||"byteLength"==key||"byteOffset"==key)||_isIndex(key,length))||result.push(key);return result},_isPrototype_objectProto=Object.prototype;var _isPrototype=function isPrototype(value){var Ctor=value&&value.constructor;return value===("function"==typeof Ctor&&Ctor.prototype||_isPrototype_objectProto)},_nativeKeys=_overArg(Object.keys,Object),_baseKeys_hasOwnProperty=Object.prototype.hasOwnProperty;var _baseKeys=function baseKeys(object){if(!_isPrototype(object))return _nativeKeys(object);var result=[];for(var key in Object(object))_baseKeys_hasOwnProperty.call(object,key)&&"constructor"!=key&&result.push(key);return result};var lodash_es_isArrayLike=function isArrayLike(value){return null!=value&&lodash_es_isLength(value.length)&&!lodash_es_isFunction(value)};var lodash_es_keys=function keys_keys(object){return lodash_es_isArrayLike(object)?_arrayLikeKeys(object):_baseKeys(object)};var _baseAssign=function baseAssign(object,source){return object&&_copyObject(source,lodash_es_keys(source),object)};var _nativeKeysIn=function nativeKeysIn(object){var result=[];if(null!=object)for(var key in Object(object))result.push(key);return result},_baseKeysIn_hasOwnProperty=Object.prototype.hasOwnProperty;var _baseKeysIn=function baseKeysIn(object){if(!lodash_es_isObject(object))return _nativeKeysIn(object);var isProto=_isPrototype(object),result=[];for(var key in object)("constructor"!=key||!isProto&&_baseKeysIn_hasOwnProperty.call(object,key))&&result.push(key);return result};var lodash_es_keysIn=function keysIn(object){return lodash_es_isArrayLike(object)?_arrayLikeKeys(object,!0):_baseKeysIn(object)};var _baseAssignIn=function baseAssignIn(object,source){return object&&_copyObject(source,lodash_es_keysIn(source),object)},_cloneBuffer=__webpack_require__("./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneBuffer.js");var _copyArray=function copyArray(source,array){var index=-1,length=source.length;for(array||(array=Array(length));++index<length;)array[index]=source[index];return array};var _arrayFilter=function arrayFilter(array,predicate){for(var index=-1,length=null==array?0:array.length,resIndex=0,result=[];++index<length;){var value=array[index];predicate(value,index,array)&&(result[resIndex++]=value)}return result};var lodash_es_stubArray=function stubArray(){return[]},_getSymbols_propertyIsEnumerable=Object.prototype.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,_getSymbols=nativeGetSymbols?function(object){return null==object?[]:(object=Object(object),_arrayFilter(nativeGetSymbols(object),(function(symbol){return _getSymbols_propertyIsEnumerable.call(object,symbol)})))}:lodash_es_stubArray;var _copySymbols=function copySymbols(source,object){return _copyObject(source,_getSymbols(source),object)};var _arrayPush=function arrayPush(array,values){for(var index=-1,length=values.length,offset=array.length;++index<length;)array[offset+index]=values[index];return array},_getSymbolsIn=Object.getOwnPropertySymbols?function(object){for(var result=[];object;)_arrayPush(result,_getSymbols(object)),object=_getPrototype(object);return result}:lodash_es_stubArray;var _copySymbolsIn=function copySymbolsIn(source,object){return _copyObject(source,_getSymbolsIn(source),object)};var _baseGetAllKeys=function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return lodash_es_isArray(object)?result:_arrayPush(result,symbolsFunc(object))};var _getAllKeys=function getAllKeys(object){return _baseGetAllKeys(object,lodash_es_keys,_getSymbols)};var _getAllKeysIn=function getAllKeysIn(object){return _baseGetAllKeys(object,lodash_es_keysIn,_getSymbolsIn)},_DataView=_getNative(_root.a,"DataView"),_Promise=_getNative(_root.a,"Promise"),_Set=_getNative(_root.a,"Set"),_WeakMap=_getNative(_root.a,"WeakMap"),dataViewCtorString=_toSource(_DataView),mapCtorString=_toSource(_Map),promiseCtorString=_toSource(_Promise),setCtorString=_toSource(_Set),weakMapCtorString=_toSource(_WeakMap),getTag=_baseGetTag;(_DataView&&"[object DataView]"!=getTag(new _DataView(new ArrayBuffer(1)))||_Map&&"[object Map]"!=getTag(new _Map)||_Promise&&"[object Promise]"!=getTag(_Promise.resolve())||_Set&&"[object Set]"!=getTag(new _Set)||_WeakMap&&"[object WeakMap]"!=getTag(new _WeakMap))&&(getTag=function(value){var result=_baseGetTag(value),Ctor="[object Object]"==result?value.constructor:void 0,ctorString=Ctor?_toSource(Ctor):"";if(ctorString)switch(ctorString){case dataViewCtorString:return"[object DataView]";case mapCtorString:return"[object Map]";case promiseCtorString:return"[object Promise]";case setCtorString:return"[object Set]";case weakMapCtorString:return"[object WeakMap]"}return result});var _getTag=getTag,_initCloneArray_hasOwnProperty=Object.prototype.hasOwnProperty;var _initCloneArray=function initCloneArray(array){var length=array.length,result=new array.constructor(length);return length&&"string"==typeof array[0]&&_initCloneArray_hasOwnProperty.call(array,"index")&&(result.index=array.index,result.input=array.input),result},_Uint8Array=_root.a.Uint8Array;var _cloneArrayBuffer=function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);return new _Uint8Array(result).set(new _Uint8Array(arrayBuffer)),result};var _cloneDataView=function cloneDataView(dataView,isDeep){var buffer=isDeep?_cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength)},reFlags=/\w*$/;var _cloneRegExp=function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));return result.lastIndex=regexp.lastIndex,result},symbolProto=_Symbol?_Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;var _cloneSymbol=function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{}};var _cloneTypedArray=function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?_cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)};var _initCloneByTag=function initCloneByTag(object,tag,isDeep){var Ctor=object.constructor;switch(tag){case"[object ArrayBuffer]":return _cloneArrayBuffer(object);case"[object Boolean]":case"[object Date]":return new Ctor(+object);case"[object DataView]":return _cloneDataView(object,isDeep);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return _cloneTypedArray(object,isDeep);case"[object Map]":case"[object Set]":return new Ctor;case"[object Number]":case"[object String]":return new Ctor(object);case"[object RegExp]":return _cloneRegExp(object);case"[object Symbol]":return _cloneSymbol(object)}},objectCreate=Object.create,_baseCreate=function(){function object(){}return function(proto){if(!lodash_es_isObject(proto))return{};if(objectCreate)return objectCreate(proto);object.prototype=proto;var result=new object;return object.prototype=void 0,result}}();var _initCloneObject=function initCloneObject(object){return"function"!=typeof object.constructor||_isPrototype(object)?{}:_baseCreate(_getPrototype(object))};var _baseIsMap=function baseIsMap(value){return lodash_es_isObjectLike(value)&&"[object Map]"==_getTag(value)},nodeIsMap=_nodeUtil.a&&_nodeUtil.a.isMap,lodash_es_isMap=nodeIsMap?_baseUnary(nodeIsMap):_baseIsMap;var _baseIsSet=function baseIsSet(value){return lodash_es_isObjectLike(value)&&"[object Set]"==_getTag(value)},nodeIsSet=_nodeUtil.a&&_nodeUtil.a.isSet,lodash_es_isSet=nodeIsSet?_baseUnary(nodeIsSet):_baseIsSet,cloneableTags={};cloneableTags["[object Arguments]"]=cloneableTags["[object Array]"]=cloneableTags["[object ArrayBuffer]"]=cloneableTags["[object DataView]"]=cloneableTags["[object Boolean]"]=cloneableTags["[object Date]"]=cloneableTags["[object Float32Array]"]=cloneableTags["[object Float64Array]"]=cloneableTags["[object Int8Array]"]=cloneableTags["[object Int16Array]"]=cloneableTags["[object Int32Array]"]=cloneableTags["[object Map]"]=cloneableTags["[object Number]"]=cloneableTags["[object Object]"]=cloneableTags["[object RegExp]"]=cloneableTags["[object Set]"]=cloneableTags["[object String]"]=cloneableTags["[object Symbol]"]=cloneableTags["[object Uint8Array]"]=cloneableTags["[object Uint8ClampedArray]"]=cloneableTags["[object Uint16Array]"]=cloneableTags["[object Uint32Array]"]=!0,cloneableTags["[object Error]"]=cloneableTags["[object Function]"]=cloneableTags["[object WeakMap]"]=!1;var _baseClone=function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=1&bitmask,isFlat=2&bitmask,isFull=4&bitmask;if(customizer&&(result=object?customizer(value,key,object,stack):customizer(value)),void 0!==result)return result;if(!lodash_es_isObject(value))return value;var isArr=lodash_es_isArray(value);if(isArr){if(result=_initCloneArray(value),!isDeep)return _copyArray(value,result)}else{var tag=_getTag(value),isFunc="[object Function]"==tag||"[object GeneratorFunction]"==tag;if(Object(isBuffer.a)(value))return Object(_cloneBuffer.a)(value,isDeep);if("[object Object]"==tag||"[object Arguments]"==tag||isFunc&&!object){if(result=isFlat||isFunc?{}:_initCloneObject(value),!isDeep)return isFlat?_copySymbolsIn(value,_baseAssignIn(result,value)):_copySymbols(value,_baseAssign(result,value))}else{if(!cloneableTags[tag])return object?value:{};result=_initCloneByTag(value,tag,isDeep)}}stack||(stack=new _Stack);var stacked=stack.get(value);if(stacked)return stacked;stack.set(value,result),lodash_es_isSet(value)?value.forEach((function(subValue){result.add(baseClone(subValue,bitmask,customizer,subValue,value,stack))})):lodash_es_isMap(value)&&value.forEach((function(subValue,key){result.set(key,baseClone(subValue,bitmask,customizer,key,value,stack))}));var props=isArr?void 0:(isFull?isFlat?_getAllKeysIn:_getAllKeys:isFlat?lodash_es_keysIn:lodash_es_keys)(value);return _arrayEach(props||value,(function(subValue,key){props&&(subValue=value[key=subValue]),_assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack))})),result};var lodash_es_clone=function clone(value){return _baseClone(value,4)};var _arrayMap=function arrayMap(array,iteratee){for(var index=-1,length=null==array?0:array.length,result=Array(length);++index<length;)result[index]=iteratee(array[index],index,array);return result};var lodash_es_isSymbol=function isSymbol(value){return"symbol"==typeof value||lodash_es_isObjectLike(value)&&"[object Symbol]"==_baseGetTag(value)};function memoize(func,resolver){if("function"!=typeof func||null!=resolver&&"function"!=typeof resolver)throw new TypeError("Expected a function");var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key))return cache.get(key);var result=func.apply(this,args);return memoized.cache=cache.set(key,result)||cache,result};return memoized.cache=new(memoize.Cache||_MapCache),memoized}memoize.Cache=_MapCache;var lodash_es_memoize=memoize;var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,_stringToPath=function memoizeCapped(func){var result=lodash_es_memoize(func,(function(key){return 500===cache.size&&cache.clear(),key})),cache=result.cache;return result}((function(string){var result=[];return 46===string.charCodeAt(0)&&result.push(""),string.replace(rePropName,(function(match,number,quote,subString){result.push(quote?subString.replace(reEscapeChar,"$1"):number||match)})),result}));var _toKey=function toKey(value){if("string"==typeof value||lodash_es_isSymbol(value))return value;var result=value+"";return"0"==result&&1/value==-Infinity?"-0":result},_baseToString_symbolProto=_Symbol?_Symbol.prototype:void 0,symbolToString=_baseToString_symbolProto?_baseToString_symbolProto.toString:void 0;var _baseToString=function baseToString(value){if("string"==typeof value)return value;if(lodash_es_isArray(value))return _arrayMap(value,baseToString)+"";if(lodash_es_isSymbol(value))return symbolToString?symbolToString.call(value):"";var result=value+"";return"0"==result&&1/value==-Infinity?"-0":result};var lodash_es_toString=function toString_toString(value){return null==value?"":_baseToString(value)};var lodash_es_toPath=function toPath(value){return lodash_es_isArray(value)?_arrayMap(value,_toKey):lodash_es_isSymbol(value)?[value]:_copyArray(_stringToPath(lodash_es_toString(value)))};var tiny_warning_esm=function warning(condition,message){},hoist_non_react_statics_cjs=__webpack_require__("./node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),hoist_non_react_statics_cjs_default=__webpack_require__.n(hoist_non_react_statics_cjs);var lodash_es_cloneDeep=function cloneDeep(value){return _baseClone(value,5)};function formik_esm_extends(){return formik_esm_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},formik_esm_extends.apply(this,arguments)}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,subClass.__proto__=superClass}function formik_esm_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}var isEmptyArray=function isEmptyArray(value){return Array.isArray(value)&&0===value.length},formik_esm_isFunction=function isFunction(obj){return"function"==typeof obj},formik_esm_isObject=function isObject(obj){return null!==obj&&"object"==typeof obj},isInteger=function isInteger(obj){return String(Math.floor(Number(obj)))===obj},formik_esm_isEmptyChildren=function isEmptyChildren(children){return 0===react.Children.count(children)};function getIn(obj,key,def,p){void 0===p&&(p=0);for(var path=lodash_es_toPath(key);obj&&p<path.length;)obj=obj[path[p++]];return void 0===obj?def:obj}function setIn(obj,path,value){for(var res=lodash_es_clone(obj),resVal=res,i=0,pathArray=lodash_es_toPath(path);i<pathArray.length-1;i++){var currentPath=pathArray[i],currentObj=getIn(obj,pathArray.slice(0,i+1));if(currentObj&&(formik_esm_isObject(currentObj)||Array.isArray(currentObj)))resVal=resVal[currentPath]=lodash_es_clone(currentObj);else{var nextPath=pathArray[i+1];resVal=resVal[currentPath]=isInteger(nextPath)&&Number(nextPath)>=0?[]:{}}}return(0===i?obj:resVal)[pathArray[i]]===value?obj:(void 0===value?delete resVal[pathArray[i]]:resVal[pathArray[i]]=value,0===i&&void 0===value&&delete res[pathArray[i]],res)}var FormikContext=Object(react.createContext)(void 0);FormikContext.displayName="FormikContext";FormikContext.Provider;var FormikConsumer=FormikContext.Consumer;function useFormikContext(){var formik=Object(react.useContext)(FormikContext);return formik||tiny_warning_esm(!1),formik}"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?react.useLayoutEffect:react.useEffect;function connect(Comp){var C=function C(props){return Object(react.createElement)(FormikConsumer,null,(function(formik){return formik||tiny_warning_esm(!1),Object(react.createElement)(Comp,Object.assign({},props,{formik:formik}))}))},componentDisplayName=Comp.displayName||Comp.name||Comp.constructor&&Comp.constructor.name||"Component";return C.WrappedComponent=Comp,C.displayName="FormikConnect("+componentDisplayName+")",hoist_non_react_statics_cjs_default()(C,Comp)}Object(react.forwardRef)((function(props,ref){var action=props.action,rest=formik_esm_objectWithoutPropertiesLoose(props,["action"]),_action=null!=action?action:"#",_useFormikContext=useFormikContext(),handleReset=_useFormikContext.handleReset,handleSubmit=_useFormikContext.handleSubmit;return Object(react.createElement)("form",Object.assign({onSubmit:handleSubmit,ref:ref,onReset:handleReset,action:_action},rest))})).displayName="Form";var insert=function insert(arrayLike,index,value){var copy=copyArrayLike(arrayLike);return copy.splice(index,0,value),copy},copyArrayLike=function copyArrayLike(arrayLike){if(arrayLike){if(Array.isArray(arrayLike))return[].concat(arrayLike);var maxIndex=Object.keys(arrayLike).map((function(key){return parseInt(key)})).reduce((function(max,el){return el>max?el:max}),0);return Array.from(formik_esm_extends({},arrayLike,{length:maxIndex+1}))}return[]},formik_esm_FieldArrayInner=function(_React$Component){function FieldArrayInner(props){var _this;return(_this=_React$Component.call(this,props)||this).updateArrayField=function(fn,alterTouched,alterErrors){var _this$props=_this.props,name=_this$props.name;(0,_this$props.formik.setFormikState)((function(prevState){var updateErrors="function"==typeof alterErrors?alterErrors:fn,updateTouched="function"==typeof alterTouched?alterTouched:fn,values=setIn(prevState.values,name,fn(getIn(prevState.values,name))),fieldError=alterErrors?updateErrors(getIn(prevState.errors,name)):void 0,fieldTouched=alterTouched?updateTouched(getIn(prevState.touched,name)):void 0;return isEmptyArray(fieldError)&&(fieldError=void 0),isEmptyArray(fieldTouched)&&(fieldTouched=void 0),formik_esm_extends({},prevState,{values:values,errors:alterErrors?setIn(prevState.errors,name,fieldError):prevState.errors,touched:alterTouched?setIn(prevState.touched,name,fieldTouched):prevState.touched})}))},_this.push=function(value){return _this.updateArrayField((function(arrayLike){return[].concat(copyArrayLike(arrayLike),[lodash_es_cloneDeep(value)])}),!1,!1)},_this.handlePush=function(value){return function(){return _this.push(value)}},_this.swap=function(indexA,indexB){return _this.updateArrayField((function(array){return function swap(arrayLike,indexA,indexB){var copy=copyArrayLike(arrayLike),a=copy[indexA];return copy[indexA]=copy[indexB],copy[indexB]=a,copy}(array,indexA,indexB)}),!0,!0)},_this.handleSwap=function(indexA,indexB){return function(){return _this.swap(indexA,indexB)}},_this.move=function(from,to){return _this.updateArrayField((function(array){return function move(array,from,to){var copy=copyArrayLike(array),value=copy[from];return copy.splice(from,1),copy.splice(to,0,value),copy}(array,from,to)}),!0,!0)},_this.handleMove=function(from,to){return function(){return _this.move(from,to)}},_this.insert=function(index,value){return _this.updateArrayField((function(array){return insert(array,index,value)}),(function(array){return insert(array,index,null)}),(function(array){return insert(array,index,null)}))},_this.handleInsert=function(index,value){return function(){return _this.insert(index,value)}},_this.replace=function(index,value){return _this.updateArrayField((function(array){return function replace(arrayLike,index,value){var copy=copyArrayLike(arrayLike);return copy[index]=value,copy}(array,index,value)}),!1,!1)},_this.handleReplace=function(index,value){return function(){return _this.replace(index,value)}},_this.unshift=function(value){var length=-1;return _this.updateArrayField((function(array){var arr=array?[value].concat(array):[value];return length<0&&(length=arr.length),arr}),(function(array){var arr=array?[null].concat(array):[null];return length<0&&(length=arr.length),arr}),(function(array){var arr=array?[null].concat(array):[null];return length<0&&(length=arr.length),arr})),length},_this.handleUnshift=function(value){return function(){return _this.unshift(value)}},_this.handleRemove=function(index){return function(){return _this.remove(index)}},_this.handlePop=function(){return function(){return _this.pop()}},_this.remove=_this.remove.bind(_assertThisInitialized(_this)),_this.pop=_this.pop.bind(_assertThisInitialized(_this)),_this}_inheritsLoose(FieldArrayInner,_React$Component);var _proto=FieldArrayInner.prototype;return _proto.componentDidUpdate=function componentDidUpdate(prevProps){this.props.validateOnChange&&this.props.formik.validateOnChange&&!react_fast_compare_default()(getIn(prevProps.formik.values,prevProps.name),getIn(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},_proto.remove=function remove(index){var result;return this.updateArrayField((function(array){var copy=array?copyArrayLike(array):[];return result||(result=copy[index]),formik_esm_isFunction(copy.splice)&&copy.splice(index,1),copy}),!0,!0),result},_proto.pop=function pop(){var result;return this.updateArrayField((function(array){var tmp=array;return result||(result=tmp&&tmp.pop&&tmp.pop()),tmp}),!0,!0),result},_proto.render=function render(){var arrayHelpers={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},_this$props2=this.props,component=_this$props2.component,render=_this$props2.render,children=_this$props2.children,name=_this$props2.name,props=formik_esm_extends({},arrayHelpers,{form:formik_esm_objectWithoutPropertiesLoose(_this$props2.formik,["validate","validationSchema"]),name:name});return component?Object(react.createElement)(component,props):render?render(props):children?"function"==typeof children?children(props):formik_esm_isEmptyChildren(children)?null:react.Children.only(children):null},FieldArrayInner}(react.Component);formik_esm_FieldArrayInner.defaultProps={validateOnChange:!0};react.Component,react.Component,new Uint8Array(16);for(var byteToHex=[],stringify_i=0;stringify_i<256;++stringify_i)byteToHex.push((stringify_i+256).toString(16).substr(1));const LabelContainer=styled_components_browser_esm.d.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
`,LabelTitle=Object(styled_components_browser_esm.d)(TSpan)`
  ${props=>"agent"===props.variant?styled_components_browser_esm.c`
          color: ${props.error?props.theme.colors.red100:props.theme.colors.grey80};
        `:styled_components_browser_esm.c`
          color: ${props.error?props.theme.colors.red100:props.theme.colors.grey100};
        `}
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex: 2;
  max-width: fit-content;
`,LabelRequired=styled_components_browser_esm.d.span`
  position: relative;
  left: -2px;
  top: -2px;

  ::after {
    content: "*";
    color: ${props=>props.theme.colors.red100};
  }
`,LabelInfo=Object(styled_components_browser_esm.d)(TSpan).attrs({as:"div"})`
  color: ${props=>props.theme.colors.grey40};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: ${props=>props.multiLine?"initial":"nowrap"};
  min-width: 50px;
  flex: ${props=>props.fullWidth?"flex: 0 0 100%":"1"};
  max-width: fit-content;
`,LabelDescription=Object(styled_components_browser_esm.d)(TSpan).attrs({as:"div"})`
  ${props=>"agent"===props.variant?styled_components_browser_esm.c`
          ${Typography_paragraphStyled.p8}
        `:styled_components_browser_esm.c`
          ${Typography_paragraphStyled.p1};
        `}
  color: ${props=>props.theme.colors.grey40};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 50px;
  flex: 1;
  max-width: fit-content;
  align-self: baseline;
`,LabelError=Object(styled_components_browser_esm.d)(LabelDescription)`
  color: ${props=>props.theme.colors.red100};
`,LabelChildren=styled_components_browser_esm.d.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 4px;
  }
`,labelBase=styled_components_browser_esm.c`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 1px;
  }
`,Label_Label=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function Label({label:label,children:children,error:error,errorMsg:errorMsg,labelInfo:labelInfo,labelInfoMultiLine:labelInfoMultiLine=!1,labelAction:labelAction,description:description,required:required,variant:variant="agent",labelInfoFullWidth:labelInfoFullWidth=!1,...rest},ref){return react.createElement("label",{...dpNameProp("Label"),ref:ref,...rest},react.createElement(LabelContainer,null,label&&react.createElement(LabelTitle,{variant:variant,type:"agent"===variant?"p6":"h1",error:error,title:"string"==typeof label?label:void 0},label),required&&react.createElement(LabelRequired,null),labelInfo&&react.createElement(LabelInfo,{multiLine:labelInfoMultiLine,fullWidth:labelInfoFullWidth,variant:variant,type:"agent"===variant?"p8":"p1"},labelInfo),labelAction&&react.createElement(Stack,{align:"center",grow:!0,justify:"space-between",style:{height:"100%"}},labelAction)),react.createElement(LabelChildren,null,children),description&&react.createElement(LabelDescription,{type:"agent"===variant?"p8":"p1",variant:variant},description),error&&errorMsg&&react.createElement(LabelError,{type:"agent"===variant?"p8":"p1",variant:variant},errorMsg))})))`
  ${labelBase}
`,LabelGroup=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function FieldSetLabel({label:label,children:children,error:error,errorMsg:errorMsg,labelInfo:labelInfo,labelInfoMultiLine:labelInfoMultiLine=!1,labelAction:labelAction,description:description,variant:variant="agent",required:required,...rest},ref){return react.createElement("div",{...dpNameProp("LabelGroup"),role:"group",ref:ref,...rest},react.createElement(LabelContainer,null,react.createElement(LabelTitle,{type:"agent"===variant?"p6":"h1",variant:variant,error:error,title:"string"==typeof label?label:void 0},label),required&&react.createElement(LabelRequired,null),labelInfo&&react.createElement(LabelInfo,{multiLine:labelInfoMultiLine,variant:variant,type:"agent"===variant?"p8":"p1"},labelInfo),labelAction),react.createElement(LabelChildren,null,children),description&&react.createElement(LabelDescription,{type:"agent"===variant?"p8":"p1",variant:variant},description),errorMsg&&react.createElement(LabelError,{type:"agent"===variant?"p8":"p1",variant:variant},errorMsg))})))`
  ${labelBase}
`,PopoverTargetContainer=(styled_components_browser_esm.d.a`
  display: inline;
  text-decoration: ${({underline:underline})=>underline?"underline":"none"};
  color: ${props=>props.theme.colors.cyan100};

  :hover,
  :hover :visited {
    color: ${props=>props.theme.colors.cyan80};
    cursor: pointer;
  }

  :active,
  :active :visited {
    color: ${props=>props.theme.colors.cyan80};
  }
`,styled_components_browser_esm.d.a`
  display: inline;
  text-decoration: none;

  :hover,
  :hover :visited {
    cursor: pointer;
  }
`,styled_components_browser_esm.d.div.attrs(dpNameProp("LoadingBlock"))`
  background-color: ${({theme:theme})=>theme.colors.grey10};
  height: ${({height:height})=>height||16}px;
  width: ${({width:width})=>Object(index_module.b)(width).with("stretch",(()=>"100%")).with(index_module.a.string,(width=>width)).with(index_module.a.number,(width=>`${width}px`)).otherwise((()=>{}))};
  border-radius: ${({round:round})=>round?"100%":"4px"};
  ${({animate:animate=!0})=>animate&&styled_components_browser_esm.c`
      animation: pulseAnimation 3s infinite ease-in-out;
    `};

  @keyframes pulseAnimation {
    0% {
      opacity: 0.85;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.85;
    }
  }
`,styled_components_browser_esm.d.span`
  display: block;
`),PopoverContentContainer=Object(styled_components_browser_esm.d)(motion.div)`
  z-index: ${props=>props.setIndex?props.setIndex:"inherit"};
`;function Popover(props){const{children:children,content:content,placement:placement="auto",isOpen:isOpenOverride,setIndex:setIndex,disabled:disabled,interactionType:interactionType="click",onRequestClose:onRequestClose,usePortal:usePortal=!0,modifiers:modifiers,clickable:clickable=!1,interactionDelay:interactionDelay,onOpenStateChange:onOpenStateChange,style:style}=props,[isOpenState,setIsOpen]=Object(react.useState)(!1),isOpen=null!=isOpenOverride?isOpenOverride:isOpenState;Object(react.useEffect)((()=>{null==onOpenStateChange||onOpenStateChange(isOpenState)}),[isOpenState,onOpenStateChange]);const[referenceElement,setReferenceElement]=Object(react.useState)(null),[popperElement,setPopperElement]=Object(react.useState)(null),{styles:styles,attributes:attributes}=Object(usePopper.a)(referenceElement,popperElement,{placement:placement,modifiers:modifiers});!function useCloseOnClickOutside({popperElement:popperElement,referenceElement:referenceElement,onRequestClose:onRequestClose,setIsOpen:setIsOpen,clickable:clickable}){Object(react.useEffect)((()=>{function handler(e){(e.target instanceof HTMLElement||e.target instanceof SVGElement)&&(e.target!==document.body&&e.target!==document.querySelector("html")&&!document.body.contains(e.target)&&clickable||(popperElement===e.target||popperElement&&popperElement.contains(e.target))&&clickable||referenceElement===e.target||referenceElement&&referenceElement.contains(e.target)||(null==onRequestClose||onRequestClose(),setIsOpen(!1)))}return document.addEventListener("click",handler),()=>{document.removeEventListener("click",handler)}}),[referenceElement,onRequestClose,setIsOpen,popperElement,clickable])}({popperElement:popperElement,referenceElement:referenceElement,onRequestClose:onRequestClose,setIsOpen:setIsOpen,interactionType:interactionType,clickable:clickable}),function useCloseOnEsc(onRequestClose,setIsOpen){Object(react.useEffect)((()=>{function handler(event){"Escape"===event.key&&(null==onRequestClose||onRequestClose(),setIsOpen(!1))}return document.addEventListener("keydown",handler),()=>document.removeEventListener("keydown",handler)}),[onRequestClose,setIsOpen])}(onRequestClose,setIsOpen);const handlers=function useGetHandlers(interactionType,isOpenState,setIsOpen,disabled,interactionDelay,popperElement){const isMouseInTargetOrPopover=Object(react.useRef)(!1),delayTimeout=Object(react.useRef)(0),handleTargetClick=Object(react.useCallback)((e=>{"contextMenu"===interactionType&&e.preventDefault(),interactionDelay?(clearTimeout(delayTimeout.current),delayTimeout.current=setTimeout((()=>{setIsOpen((prev=>!prev))}),Array.isArray(interactionDelay)?interactionDelay[isOpenState?1:0]:interactionDelay)):setIsOpen((prev=>!prev))}),[interactionType,interactionDelay,isOpenState,setIsOpen]),handleMouseEnter=Object(react.useCallback)((_t=>{isMouseInTargetOrPopover.current=!0,interactionDelay?(clearTimeout(delayTimeout.current),delayTimeout.current=setTimeout((()=>{setIsOpen(!0)}),Array.isArray(interactionDelay)?interactionDelay[0]:interactionDelay)):setIsOpen(!0)}),[isMouseInTargetOrPopover,interactionDelay,setIsOpen]),handleMouseLeave=Object(react.useCallback)((_e=>{isMouseInTargetOrPopover.current=!1,setTimeout((()=>{isMouseInTargetOrPopover.current||(clearTimeout(delayTimeout.current),setIsOpen(!1))}),Array.isArray(interactionDelay)?interactionDelay[1]:300)}),[interactionDelay,setIsOpen]),handleKeyboardFocus=Object(react.useCallback)((_e=>{isMouseInTargetOrPopover.current=!0,interactionDelay?(clearTimeout(delayTimeout.current),delayTimeout.current=setTimeout((()=>{setIsOpen(!0)}),Array.isArray(interactionDelay)?interactionDelay[isOpenState?1:0]:interactionDelay)):setIsOpen(!0)}),[interactionDelay,isOpenState,setIsOpen]),handleKeyboardBlur=Object(react.useCallback)((evt=>{popperElement&&popperElement.contains(evt.relatedTarget)||(isMouseInTargetOrPopover.current=!1,setTimeout((()=>{isMouseInTargetOrPopover.current||(clearTimeout(delayTimeout.current),setIsOpen(!1))}),300))}),[isMouseInTargetOrPopover,popperElement,setIsOpen]);return Object(react.useMemo)((()=>{const handlers={};return disabled||("click"===interactionType&&(handlers.onClick=handleTargetClick),"contextMenu"===interactionType&&(handlers.onContextMenu=handleTargetClick),"hover"===interactionType&&(handlers.onMouseEnter=handleMouseEnter,handlers.onMouseLeave=handleMouseLeave,handlers.onFocus=handleKeyboardFocus,handlers.onBlur=handleKeyboardBlur)),handlers}),[disabled,interactionType,handleTargetClick,handleMouseEnter,handleMouseLeave,handleKeyboardFocus,handleKeyboardBlur])}(interactionType,isOpenState,setIsOpen,disabled,interactionDelay,popperElement),contentContainer=react.createElement(PopoverContentContainer,{transition:{duration:.2},initial:{opacity:.15},animate:{opacity:1},exit:{opacity:.15},style:{...styles.popper,...style},...attributes.popper,ref:setPopperElement,setIndex:setIndex,onMouseEnter:handlers.onMouseEnter,onMouseLeave:handlers.onMouseLeave,onBlur:handlers.onBlur},content);return react.createElement(react.Fragment,null,"function"==typeof children&&children({isOpen:isOpen,...handlers,ref:setReferenceElement}),"function"!=typeof children&&react.createElement(PopoverTargetContainer,{...handlers,ref:setReferenceElement},children),react.createElement(AnimatePresence,null,isOpen&&(usePortal?react.createElement(Portal,null,contentContainer):contentContainer)))}const Menu=styled_components_browser_esm.d.ul`
  margin: 0;
  gap: 5px;
  background-color: ${({theme:theme,type:type})=>"nav"===type?theme.colors.systemShade10:theme.colors.white};
  border-radius: ${({type:type})=>"nav"===type?"0":"4px"};
  list-style: none;
  min-width: ${({type:type})=>"nav"===type?"214px":"140px"};
  width: max-content;
  padding: ${({type:type})=>"nav"===type?"5px 8px":"5px"};
  text-align: left;

  user-select: none;

  ${props=>props.$fill?styled_components_browser_esm.c`
          width: 100%;
        `:styled_components_browser_esm.c`
          max-width: 200px;
        `}

  ${props=>props.$hasElevation&&styled_components_browser_esm.c`
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    `}

  ${({type:type})=>"nav"===type&&styled_components_browser_esm.c`
      & & {
        padding: 2px 8px;
        background: ${({theme:theme})=>theme.colors.systemShade20};
        margin-left: -8px;
        box-shadow: none;
      }
    `}
`,styles_MenuItem=(styled_components_browser_esm.d.li`
  display: block;
  cursor: default;
  user-select: none;
  ${({type:type,theme:theme,hasTitle:hasTitle})=>"nav"===type?styled_components_browser_esm.c`
          padding: 7px 0px;
          margin: ${hasTitle?"17px 10px 4px 10px":"0 15px"};
          color: ${theme.colors.systemShade40};
          letter-spacing: 0.08em;
          border-bottom: 1px solid ${theme.colors.systemShade30};
        `:styled_components_browser_esm.c`
          border-top: 1px solid ${theme.colors.grey20};
          margin: 5px;
          > * {
            padding-top: 10px;
            display: inline-block;
          }

          :first-of-type {
            border-color: transparent;
            > * {
              padding-top: 0;
            }
          }
        `}
`,styled_components_browser_esm.d.a`
  align-items: center;
  overflow: hidden;
  display: flex;
  border-radius: ${({type:type})=>"nav"===type?"3px":"2px"};
  padding: ${({type:type})=>"nav"===type?"5px 12px":"5px 7px"};
  text-decoration: none;
  user-select: none;
  background-color: transparent;
  text-decoration: none;
  user-select: none;
  cursor: pointer;
  gap: 5px;
  ${({type:type,theme:theme})=>"nav"===type&&styled_components_browser_esm.c`
      color: ${theme.colors.systemShade80};
      margin: 2px 0;
    `};

  :hover,
  :focus {
    background-color: ${({type:type,theme:theme})=>"nav"===type?theme.colors.systemShade20:theme.colors.grey10};
  }

  ${Menu} ${Menu} &:not([disabled]):hover,
    ${Menu} ${Menu} &:not([disabled]):focus {
    ${({type:type})=>"nav"===type&&styled_components_browser_esm.c`
        background: ${({theme:theme})=>theme.colors.systemShade30};
      `}
  }
  ${({useHoverState:useHoverState,type:type,theme:theme})=>useHoverState&&styled_components_browser_esm.c`
      background-color: ${"nav"===type?theme.colors.systemShade20:theme.colors.grey10};
    `}

  &[data-active="true"],
  :active {
    background-color: ${({type:type,theme:theme})=>"nav"===type?theme.colors.systemShade30:theme.colors.grey20};
    ${({type:type})=>"nav"==type&&styled_components_browser_esm.c`
        color: ${({theme:theme})=>theme.colors.brandShade100};
      `}
  }
  ${Menu} ${Menu} &:not([disabled])[data-active="true"] {
    ${({type:type})=>"nav"===type&&styled_components_browser_esm.c`
        background: ${({theme:theme})=>theme.colors.systemShade30};
      `}
  }
  &[disabled] {
    background-color: transparent;
    color: ${props=>props.theme.colors.grey20};

    &[data-active="true"],
    :hover,
    :focus,
    :active {
      cursor: default;
      background-color: ${props=>props.theme.colors.white};
      color: ${props=>props.theme.colors.grey20};
    }
  }
`);function Menu_Menu({fill:fill=!1,hasElevation:hasElevation=!0,children:children,type:type,...props}){return react.createElement(Menu,{role:"menu",...dpNameProp("Menu"),$fill:fill,$hasElevation:hasElevation,type:type,...props},children)}Object(react.forwardRef)((function MenuItem({active:active,children:children,disabled:disabled,icon:icon,rightIcon:rightIcon,label:label,htmlTitle:htmlTitle,iconColor:iconColor,type:type="normal",useHoverState:useHoverState,href:href,...anchorProps},ref){const{colors:colors}=Object(styled_components_browser_esm.e)(),fontType="nav"===type?"p16":"p5",target=react.createElement(styles_MenuItem,{...dpNameProp("MenuItem"),ref:ref,disabled:disabled,...anchorProps,title:htmlTitle,role:"menuitem",useHoverState:useHoverState,active:active,type:type,href:href,"data-active":active},react.createElement(react.Fragment,null,icon&&react.createElement(TSpan,{type:fontType,style:{color:iconColor||colors.grey20}},isAnyIcon(icon)?react.createElement(Icon_Icon,{icon:icon}):isIconProps(icon)?react.createElement(Icon_Icon,{...icon}):icon),react.createElement(TSpan,{$fill:!0,overflow:"ellipsis",type:fontType},label),rightIcon&&react.createElement(TSpan,{type:fontType},isAnyIcon(rightIcon)?react.createElement(Icon_Icon,{icon:rightIcon}):isIconProps(rightIcon)?react.createElement(Icon_Icon,{...rightIcon}):rightIcon),children&&react.createElement(Icon_Icon,{icon:free_solid_svg_icons.e})));return children?react.createElement("li",{role:"none"},react.createElement(Popover,{modifiers:subMenuModifiers,placement:"right-start",clickable:!0,interactionType:"hover",content:react.createElement(Menu_Menu,null,children),usePortal:!1},target)):react.createElement("li",{role:"none"},target)}));const subMenuModifiers=[{name:"flip",options:{rootBoundary:"viewport",padding:20}},{name:"offset",options:{offset:[-5,14]}},{name:"preventOverflow",options:{rootBoundary:"viewport",padding:20}}],headerHeight=(styled_components_browser_esm.d.div`
  position: absolute;
  ${({top:top})=>top?"top: "+top:""};
  ${({bottom:bottom})=>bottom?"bottom: "+bottom:""};
  ${({left:left})=>left?"left: "+left:""};
  ${({right:right})=>right?"right: "+right:""};
`,Object(styled_components_browser_esm.d)(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  width: 100%;
  pointer-events: none;
  position: relative;
`,styled_components_browser_esm.d.div`
  background-color: ${props=>props.theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  pointer-events: all;
  width: ${props=>props.width?props.width:"calc(100vw - 80px)"}; // Space for the close btn
  height: ${props=>props.height?props.height:"90vh"};
  overflow: hidden;
  z-index: 20;
  filter: drop-shadow(0px 8px 20px rgba(0, 0, 0, 0.15));
`,styled_components_browser_esm.d.div`
  padding: 0 38px;
  position: relative;
`,styled_components_browser_esm.d.div`
  position: absolute;
  right: 0;
  background-color: ${({theme:theme})=>theme.colors.white};
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 100%;
  width: 28px;
  height: 28px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: ${({theme:theme})=>theme.layers.modal};

  button {
    color: ${({theme:theme})=>theme.colors.brandShade100};
  }
`,{small:32,medium:40,large:48,xlarge:76});Object(styled_components_browser_esm.d)(Stack)`
  background-color: ${props=>props.backgroundColor?props.theme.colors[props.backgroundColor]:props.theme.colors.grey5};
  color: ${props=>props.color?props.theme.colors[props.color]:props.theme.colors.grey100};
  height: ${({size:size="small"})=>headerHeight[size]}px;
  padding: 0 12px;
  flex-shrink: 0;
`;Object(styled_components_browser_esm.d)(Icon_Icon)`
  font-size: 42px;
  color: ${({theme:theme})=>theme.colors.grey40};
`;styled_components_browser_esm.d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,styled_components_browser_esm.d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p6",as:"label"})`
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  padding: 2px 6px;
  min-height: 20px;
  width: fit-content;
  gap: 6px;
  color: ${props=>props.theme.colors.brandShade100};
  background-color: ${({theme:theme})=>theme.colors.brandShade20};

  :hover {
    background-color: ${({theme:theme})=>theme.colors.brandShade40};
  }
`;const StyledIcon=Object(styled_components_browser_esm.d)(Icon_Icon)`
  visibility: hidden;
  position: absolute;
  right: 9px;
  top: 10px;
  pointer-events: none;
  color: ${({theme:theme})=>theme.colors.grey40};
`,StyledSelect=styled_components_browser_esm.d.div`
  width: ${({fillWidth:fillWidth})=>fillWidth?"100%":"fit-content"};
  display: ${({fillWidth:fillWidth})=>fillWidth?"block":"inline-block"};
  position: relative;

  select {
    border-radius: 4px;
    border: 1px solid ${({theme:theme,error:error})=>error?theme.colors.red100:theme.colors.grey20};
    color: ${({theme:theme,hasSelectedValue:hasSelectedValue,hasPlaceholder:hasPlaceholder})=>!hasPlaceholder||hasSelectedValue?theme.colors.grey100:theme.colors.grey80};
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    justify-content: center;
    text-align: left;
    vertical-align: middle;
    -moz-appearance: none;
    -webkit-appearance: none;
    height: 30px;
    line-height: 25px;
    padding: 0 25px 0 10px;
    width: ${({fillWidth:fillWidth})=>fillWidth?"100%":"auto"};

    > * {
      flex-grow: 0;
      flex-shrink: 0;
    }

    option {
      color: ${({theme:theme})=>theme.colors.grey100};
    }

    &:hover {
      border-color: ${({theme:theme,error:error})=>error?theme.colors.red100:theme.colors.grey40};
      color: ${({theme:theme})=>theme.colors.grey100};
    }

    &:focus {
      border-color: ${({theme:theme})=>theme.colors.brandShade100};
      color: ${({theme:theme})=>theme.colors.brandShade100};
      background-color: ${({theme:theme})=>theme.colors.brandShade40};
      outline: none;
    }

    &:disabled {
      border-color: ${({theme:theme})=>theme.colors.grey20};
      color: ${({theme:theme})=>theme.colors.grey40};
      background-color: ${({theme:theme})=>theme.colors.grey5};
    }

    ${({theme:theme,inline:inline,required:required,error:error})=>inline&&styled_components_browser_esm.c`
        border: none;
        border-radius: 0;
        border-bottom: 1px solid
          ${error?theme.colors.red100:required?theme.colors.red20:"transparent"};

        &:hover {
          border-bottom-color: ${required?theme.colors.red20:error?theme.colors.red100:theme.colors.grey20};
        }

        &:focus {
          border-bottom-color: ${({theme:theme})=>theme.colors.cyan80};
          color: ${({theme:theme})=>theme.colors.grey100};
          background-color: ${theme.colors.white};
        }
        &:disabled {
          background-color: ${({theme:theme})=>theme.colors.white};
        }
      `};
  }

  // Control the dropdown icon color
  :hover {
    ${StyledIcon} {
      visibility: visible;
      color: ${({theme:theme,inline:inline,disabled:disabled})=>inline&&!disabled&&theme.colors.brandShade100};
    }
  }
  &:focus-within {
    ${StyledIcon} {
      color: ${({theme:theme})=>theme.colors.brandShade100};
    }
  }
`;function Select({options:options,optGroup:optGroup,fillWidth:fillWidth,placeholder:placeholder,onChange:onChange,defaultValue:defaultValue,error:error,inline:inline,required:required,...rest}){const[hasSelectedValue,setHasSelectedValue]=Object(react.useState)(!1),[value,setValue]=Object(react.useState)(null!=defaultValue?defaultValue:""),renderOptions=options=>options.map((({label:label,...rest},index)=>react.createElement("option",{key:index,...rest},label)));return react.createElement(StyledSelect,{...dpNameProp("Select"),fillWidth:fillWidth,hasPlaceholder:!!placeholder,hasSelectedValue:hasSelectedValue,error:error,inline:inline,required:required,disabled:rest.disabled},react.createElement("select",{onChange:event=>{setHasSelectedValue(!0),setValue(event.target.value),onChange&&onChange(event)},value:value,...rest},placeholder&&react.createElement("option",{value:"",disabled:!0,hidden:!0},placeholder),options&&renderOptions(options),optGroup&&optGroup.map((({options:options,...attrs},index)=>react.createElement("optgroup",{key:index,...attrs},options&&renderOptions(options))))),react.createElement(StyledIcon,{icon:free_solid_svg_icons.d,size:11}))}Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p1"})`
  color: ${({theme:theme})=>theme.colors.grey80};
  margin-right: 8px;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p1"})`
  margin-right: 8px;
`,Object(styled_components_browser_esm.d)(StackItem)`
  margin-right: 16px;
`,Object(styled_components_browser_esm.d)(StackItem)`
  margin-right: 8px;
`,Object(styled_components_browser_esm.d)(StackItem)`
  margin-left: 8px;
`,Object(styled_components_browser_esm.d)(StackItem)`
  margin-left: 12px;
`;const HiddenRadio=styled_components_browser_esm.d.input`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  opacity: 0;
`,Radio_LabelStyled=styled_components_browser_esm.d.label`
  display: flex;
  align-items: center;
  gap: 8px;
`,RadioContainer=styled_components_browser_esm.d.div`
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 12px;
  height: 12px;
`,StyledRadio=styled_components_browser_esm.d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  min-width: 12px;
  min-height: 12px;
  border: ${({disabled:disabled,error:error,checked:checked,theme:theme})=>{if(checked)return;return`solid 1px ${Object(index_module.b)({disabled:disabled,error:error}).with({disabled:!0},(()=>theme.colors.grey20)).with({error:!0},(()=>theme.colors.red100)).otherwise((()=>theme.colors.grey20))}`}};
  box-sizing: border-box;
  opacity: ${props=>props.checked?"1":"0.7"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${({disabled:disabled,error:error,checked:checked,theme:theme})=>Object(index_module.b)({disabled:disabled,error:error,checked:checked}).with({disabled:!0,checked:!0},(()=>theme.colors.grey40)).with({disabled:!0,checked:!1},(()=>theme.colors.grey10)).with({error:!0,checked:!0},(()=>theme.colors.red100)).with({checked:!0},(()=>theme.colors.brandShade100)).otherwise((()=>theme.colors.white))};
  cursor: ${({disabled:disabled})=>disabled?"not-allowed":"pointer"};
  &:hover {
    border: ${({disabled:disabled,error:error,checked:checked,theme:theme,isDisplayOnly:isDisplayOnly})=>{if(checked||isDisplayOnly)return;return`solid 1px ${Object(index_module.b)({disabled:disabled,error:error}).with({disabled:!0},(()=>theme.colors.grey20)).with({error:!0},(()=>theme.colors.red100)).otherwise((()=>theme.colors.grey40))}`}};
  }
`,InnerCircle=styled_components_browser_esm.d.div`
  display: ${props=>!props.checked&&"none"};
  width: 4px;
  height: 4px;
  background: ${props=>props.theme.colors.white};
  box-sizing: border-box;
  border-radius: 50%;
  margin: auto;
`;function Radio({label:label,labelIsPrefix:labelIsPrefix=!1,checked:checked,id:id,isDisplayOnly:isDisplayOnly,style:style,disabled:disabled,error:error,size:size=12,...rest}){return react.createElement(Radio_LabelStyled,{...dpNameProp("Radio"),style:style},label&&labelIsPrefix&&react.createElement(TSpan,{type:"p5"},label),react.createElement(RadioContainer,{size:size},!isDisplayOnly&&react.createElement(HiddenRadio,{role:"radio",type:"radio",...rest,id:id,disabled:disabled,checked:checked}),react.createElement(StyledRadio,{size:size,checked:checked,disabled:disabled,error:error,isDisplayOnly:isDisplayOnly},react.createElement(InnerCircle,{checked:checked}))),label&&!labelIsPrefix&&react.createElement(TSpan,{type:"p5"},label))}styled_components_browser_esm.d.div`
  font-family: ${({theme:theme})=>theme.fonts.headingPrimary};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 110%;
  padding: 6px 0;
  display: flex;
  align-items: center;
`,Object(styled_components_browser_esm.d)(Stack)`
  flex-direction: column;
  padding: 6px 8px;
`,Object(styled_components_browser_esm.d)(Stack).attrs({vertical:!0})`
  padding: 6px 0;
  width: 100%;
`;const TabWrapperCSS=styled_components_browser_esm.c`
  ${({active:active,isTicketHistory:isTicketHistory})=>active&&isTicketHistory?Typography_headingStyles.h1:Typography_headingStyles.h2}
`;Object(styled_components_browser_esm.d)(Stack)`
  cursor: default;
  align-items: center;
  justify-content: center;
  pointer-events: ${({disabled:disabled})=>disabled?"none":"initial"};
  color: ${props=>props.active?props.theme.colors.brandPrimary:props.disabled?props.theme.colors.grey20:props.theme.colors.grey40};
  border-bottom: ${props=>props.active?`solid 2px ${props.theme.colors.brandPrimary}`:"none"};
  padding: 0 3px 6px 3px;

  :hover {
    color: ${props=>props.theme.colors.grey100};
    cursor: pointer;
  }

  ${({active:active,tabStyle:tabStyle,theme:theme})=>"button"===tabStyle&&styled_components_browser_esm.c`
      flex-grow: 1;
      border: 1px solid ${theme.colors.grey20};
      border-bottom: solid 1px ${active?theme.colors.brandPrimary:theme.colors.grey20};
      border-right-width: 0;

      :first-of-type {
        border-left-width: 0;
      }

      padding: 7px;

      ${active&&styled_components_browser_esm.c`
        background-color: ${theme.colors.brandShade20};
      `};
    `};

  ${TabWrapperCSS};
`,Object(styled_components_browser_esm.d)(Stack)`
  border-bottom: ${({tabStyle:tabStyle,theme:theme})=>"button"===tabStyle?"none":`1px solid ${theme.colors.grey5}`};
  width: 100%;
  padding: ${({tabStyle:tabStyle})=>"button"===tabStyle?0:"6px 12px 0 12px"};
`;styled_components_browser_esm.d.ul`
  margin: 0;
  padding: 0;

  list-style: none;
  display: flex;
  overflow: hidden;
  width: 100%;
  flex-basis: 35px;
  height: 35px;
  flex-shrink: 0;
`;const Tabs_activeTab=styled_components_browser_esm.c`
  background-color: ${props=>props.theme.colors.brandShade20};
  ${Icon_Icon} {
    color: ${props=>props.theme.colors.brandShade100};
  }
`,TabItem=styled_components_browser_esm.d.li`
  flex-basis: ${({hasOptions:hasOptions})=>hasOptions?"60px":"36px"};
  height: 100%;
  min-width: 40px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid transparent;
  background-color: ${props=>props.theme.colors.white};

  :hover {
    background-color: ${props=>props.theme.colors.brandShade10};
    ${Icon_Icon} {
      color: ${props=>props.theme.colors.brandShade100};
    }
    .hoverTextBlue {
      color: ${props=>props.theme.colors.brandShade100};
    }
  }

  ${props=>props.$fill&&styled_components_browser_esm.c`
      border-bottom: 1px solid ${props=>props.theme.colors.grey20};
      background-color: ${props=>props.theme.colors.grey3};
      :hover {
        background-color: ${props=>props.theme.colors.brandShade10};
      }
    `}

  a {
    width: 100%;
    transition: all 0.1s ease-in-out;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 100%;
    cursor: pointer;

    :active {
      background-color: ${props=>props.theme.colors.brandShade20};
      ${Icon_Icon} {
        color: ${props=>props.theme.colors.brandShade100};
      }
    }
  }
  :not(:last-child) {
    border-right: 1px solid ${props=>props.theme.colors.grey20};
  }

  overflow: hidden;

  ${props=>props.$fill&&styled_components_browser_esm.c`
      a {
        justify-content: flex-start;
      }
      flex: 1;
    `}
  ${props=>props.active&&Tabs_activeTab};
`;Object(react.forwardRef)((function Tab({active:active,children:children,fill:fill,hasOptions:hasOptions,...rest},ref){return react.createElement(TabItem,{...dpNameProp("Tab"),$fill:fill,active:active,hasOptions:hasOptions},react.createElement("a",{ref:ref,...rest},children))}));const InputGroup=Object(styled_components_browser_esm.d)(TSpan).attrs({type:"p1",as:"div"})`
  position: relative;
  width: 100%;
  line-height: 0;
  outline: none;
  max-width: initial;
`,styles_RightElement=styled_components_browser_esm.d.span`
  display: block;
  position: absolute;
  padding-right: 5px;
  padding-left: 10px;
  bottom: 3px;
  right: 0;
  background: ${({theme:theme})=>theme.colors.white};
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 10px);
`,styles_baseInputStyle=styled_components_browser_esm.c`
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  color: ${({theme:theme})=>theme.colors.grey100};
  background-color: ${props=>props.theme.colors.white};
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({theme:theme})=>theme.colors.grey20};
  outline: none;
  padding: 7px 10px;
  box-sizing: border-box;
  :hover {
    border-color: ${({theme:theme})=>theme.colors.grey40};
  }

  ::placeholder {
    font-family: ${props=>props.theme.fonts.primary};
    color: ${props=>props.theme.colors.grey80};
  }

  :focus {
    border-color: ${({theme:theme})=>theme.colors.cyan80};
    box-shadow: 0 0 0 2px ${({theme:theme})=>theme.colors.cyan20};
  }

  :disabled {
    cursor: not-allowed;
    background-color: ${props=>props.theme.colors.grey5};
    border-color: ${props=>props.theme.colors.grey20};
  }

  :read-only {
    cursor: not-allowed;
  }
`,baseInlineStyle=styled_components_browser_esm.c`
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  color: ${({theme:theme})=>theme.colors.grey100};
  outline: none;
  border: none;
  border-bottom: 1px solid ${({theme:theme})=>theme.colors.grey10};
  width: 100%;
  line-height: 150%;
  box-shadow: none !important;
  resize: none;
  padding-left: 1px;
  padding-right: 1px;

  :disabled {
    cursor: not-allowed;
    background-color: ${props=>props.theme.colors.grey5};
    border-color: ${props=>props.theme.colors.grey10};
  }

  :read-only {
    cursor: not-allowed;
  }

  ::placeholder {
    color: ${({theme:theme})=>theme.colors.grey40};
    opacity: 1;
  }
`,baseInlineStyleBorder=styled_components_browser_esm.c`
  :hover {
    border-color: ${({theme:theme})=>theme.colors.grey20};
  }

  :focus {
    border-color: ${({theme:theme})=>theme.colors.cyan80};
  }
`,styles_errorInput=styled_components_browser_esm.c`
  border-color: ${props=>props.theme.colors.red40};

  :hover {
    border-color: ${props=>props.theme.colors.red80};
  }

  :focus {
    border-color: ${({theme:theme})=>theme.colors.red100};
    box-shadow: 0 0 0 2px ${({theme:theme})=>theme.colors.red20};
  }
`,styles_baseInlineDisplayTextStyle=styled_components_browser_esm.c`
  display: inline-flex;
  align-items: center;
  border-color: ${({theme:theme})=>theme.colors.white};
  padding: 2px 1px;

  :read-only {
    cursor: default;
  }
  :hover {
    cursor: pointer;
  }
  :hover[data-disabled="true"],
  :hover[data-readonly="true"] {
    cursor: default;
    border-color: ${({theme:theme})=>theme.colors.white};
  }
`,styles_DisplayText=styled_components_browser_esm.d.span`
  && {
    color: ${({theme:theme,value:value,defaultValue:defaultValue})=>value||defaultValue?theme.colors.grey100:theme.colors.grey40};
  }
`,DisplayTextInner=styled_components_browser_esm.d.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
  word-break: break-all;
`;var main=__webpack_require__("./node_modules/.pnpm/react-highlight-words@0.17.0_react@17.0.2/node_modules/react-highlight-words/dist/main.js"),main_default=__webpack_require__.n(main);const TextAreaStyle=styled_components_browser_esm.d.div`
  white-space: pre-wrap;

  & span {
    word-break: break-word;
  }
`,getTextareaNumberOfLines=element=>{const previous_height=element.style.height;element.style.height="0";const lines=Math.floor(element.scrollHeight/parseInt(getComputedStyle(element).lineHeight));return element.style.height=previous_height,lines};const TextArea_TextArea=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function TextArea({error:error,onChange:onChange,calcRow:calcRow=!0,...rest},ref){const localRef=Object(react.useRef)(null),[rows,setRows]=Object(react.useState)();return Object(react.useEffect)((()=>{localRef.current&&setRows(getTextareaNumberOfLines(localRef.current))}),[localRef,setRows]),react.createElement(InputGroup,{...dpNameProp("TextArea")},react.createElement("textarea",{...rest,ref:mergeRefs_mergeRefs(localRef,ref),rows:calcRow?rows:void 0,onChange:e=>{onChange&&onChange(e),setRows(getTextareaNumberOfLines(e.target))}}))})))`
  ${props=>function TextArea_getStyleByVariant(props){return"normal"===props.variant||void 0===props.variant?styled_components_browser_esm.c`
      ${styles_baseInputStyle};
    `:styled_components_browser_esm.c`
    ${baseInlineInputStyle}
  `}(props)}
  height: auto;
  ${props=>(props.error||props.required)&&styles_errorInput};
`,TextAreaWithDisplay=Object(styled_components_browser_esm.d)(Object(react.forwardRef)((function TextArea({error:error,isVisibleInput:isVisibleInputFromParent,onChange:onChange,maxRows:maxRows,removeHoverStyle:removeHoverStyle,disableEditOnClick:disableEditOnClick,highlightWord:highlightWord,onClickInputGroup:onClickInputGroup,...rest},ref){var _a;const[rows,setRows]=Object(react.useState)(1),[isVisibleInput,setIsVisibleInput]=Object(react.useState)(!1),[isVisibleRightIcon,setIsVisibleRightIcon]=Object(react.useState)(!1),[maxHeightPx,setMaxHeightPx]=Object(react.useState)();Object(react.useEffect)((()=>{void 0!==isVisibleInputFromParent&&setIsVisibleInput(isVisibleInputFromParent)}),[isVisibleInputFromParent]);const localRef=Object(react.useRef)(null),displayTextRef=Object(react.useRef)(null);Object(react.useEffect)((()=>{!isVisibleInput&&displayTextRef.current&&setRows(getTextareaNumberOfLines(displayTextRef.current))}),[setRows,isVisibleInput]),Object(react.useEffect)((()=>{isVisibleInput&&localRef.current&&(localRef.current.focus({preventScroll:!0}),localRef.current.setSelectionRange(localRef.current.value.length,localRef.current.value.length))}),[isVisibleInput]),Object(react.useEffect)((()=>{if(displayTextRef.current){const newMaxHeightPx=maxRows?((element,rows)=>Math.ceil(rows*parseInt(getComputedStyle(element).lineHeight)))(displayTextRef.current,maxRows):void 0;setMaxHeightPx(newMaxHeightPx)}}),[maxRows]);const showTooltip=maxHeightPx&&displayTextRef.current&&maxHeightPx<(null===(_a=displayTextRef.current)||void 0===_a?void 0:_a.scrollHeight)&&!isVisibleInput;return react.createElement(Tooltip,{content:rest.value,disabled:!showTooltip,styleType:"light",hideOnClick:!0},react.createElement(TextAreaStyle,null,react.createElement(InputGroup,{"data-disabled":rest.disabled,"data-readonly":rest.readOnly,onClick:e=>{rest.disabled||rest.readOnly||disableEditOnClick||(setIsVisibleInput(!0),setIsVisibleRightIcon(!0),onClickInputGroup&&onClickInputGroup(e))},onMouseEnter:()=>{rest.disabled||rest.readOnly||setIsVisibleRightIcon(!0)},onMouseLeave:()=>{rest.disabled||rest.readOnly||setIsVisibleRightIcon(!1)}},isVisibleInput?react.createElement("textarea",{...rest,ref:mergeRefs_mergeRefs(localRef,ref),rows:rows,onChange:e=>{onChange&&onChange(e),setRows(getTextareaNumberOfLines(e.target))},onBlur:e=>{setIsVisibleInput(!1),setIsVisibleRightIcon(!1),rest.onBlur&&rest.onBlur(e)},onFocus:e=>rest.onFocus&&rest.onFocus(e)}):react.createElement(styles_DisplayText,{...rest,"data-disabled":rest.disabled,"data-readonly":rest.readOnly},react.createElement(DisplayTextInner,{style:{maxHeight:maxHeightPx},ref:displayTextRef},highlightWord&&"string"==typeof rest.value?react.createElement(main_default.a,{searchWords:[highlightWord],autoEscape:"string"==typeof highlightWord,textToHighlight:rest.value,highlightStyle:{fontWeight:"bold",background:"none"}}):rest.value||rest.defaultValue||rest.placeholder),!removeHoverStyle&&react.createElement(styles_RightElement,{style:{visibility:isVisibleRightIcon?"visible":"hidden"}},react.createElement(Icon_Icon,{icon:free_solid_svg_icons.r}))))))})))`
  ${baseInlineStyle};
  ${({removeHoverStyle:removeHoverStyle})=>!removeHoverStyle&&baseInlineStyleBorder};
  ${styles_baseInlineDisplayTextStyle};
  ${props=>(props.error||props.required)&&styles_errorInput};
`;styled_components_browser_esm.d.label`
  display: flex;
  flex-direction: column;
`,styled_components_browser_esm.d.div`
  padding: 3px 0;
  margin-left: 4px;
  position: relative;
  top: 3px;
`,Object(styled_components_browser_esm.d)(Stack)`
  width: 30px;
  margin-right: 3px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${Input_Input} {
    border-bottom-color: transparent;

    :focus {
      border-color: ${({theme:theme})=>theme.colors.cyan80};
    }
  }

  input {
    -moz-appearance: textfield; // To hide arrows on input with type="number"
  }
`;Object(styled_components_browser_esm.d)(Stack).attrs({gap:3})`
  height: 26px;
  align-items: center;
  justify-content: center;
`,styled_components_browser_esm.d.div`
  padding: 3px 0;
  margin-left: 4px;
  position: relative;
  top: -7px;
`;const SliderStyled=styled_components_browser_esm.d.span`
  position: absolute;
  cursor: ${props=>props.isLocked?"not-allowed":"pointer"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props=>props.indeterminate?props.theme.colors.yellow80:props.theme.colors.grey20};

  transition: 0.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    background-image: ${props=>"boolean"==typeof props.isLocked&&props.isLocked?`url(${((faIcon,color)=>{const abstract=fontawesome_svg_core_icon(faIcon).abstract[0];return color&&abstract&&abstract.children&&(abstract.children[0].attributes.fill=color),`data:image/svg+xml;base64,${btoa(toHtml$1(abstract))}`})(free_solid_svg_icons.p,props.theme.colors.grey80)})`:"none"};
    background-size: ${props=>"small"===props.size?5:6}px;
    height: ${props=>"small"===props.size?6:8}px;
    background-repeat: no-repeat;
    background-position: center;
    stroke: ${props=>props.theme.colors.white};
    height: ${props=>"small"===props.size?8:12}px;
    width: ${props=>"small"===props.size?8:12}px;
    left: ${props=>"small"===props.size?2:3}px;
    bottom: ${props=>"small"===props.size?2:3}px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`,InputStyled=styled_components_browser_esm.d.input.attrs({type:"checkbox"})`
  opacity: 0;
  width: 0;
  height: 0;
  display: block;
`,ToggleContainer=styled_components_browser_esm.d.div`
  position: relative;
  display: inline-block;
  width: ${props=>"small"===props.size?18:27}px;
  height: ${props=>"small"===props.size?12:18}px;

  input:checked + span {
    background-color: ${props=>props.indeterminate?"":props.theme.colors.turquoise100};
  }
  input:focus + span {
    box-shadow: 0 0 1px ${props=>props.indeterminate?"":props.theme.colors.turquoise100};
  }
  input:checked + span:before {
    transform: ${props=>props.indeterminate?"":"small"===props.size?"translateX(6px)":"translateX(9px)"};
  }
  input + span:before {
    transform: ${props=>props.indeterminate?"small"===props.size?"translateX(3px)":"translateX(4px)":""};
  }
  span:hover {
    ${({disabled:disabled})=>disabled&&styled_components_browser_esm.c`
        cursor: not-allowed;
      `}
    ${({readOnly:readOnly})=>readOnly&&styled_components_browser_esm.c`
        cursor: default;
      `}
  }
`,Toggle_LabelStyled=styled_components_browser_esm.d.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;function Toggle({id:id,checked:checked,className:className,style:style,disabled:disabled,size:size="medium",isLocked:isLocked,indeterminate:indeterminate,label:label,customLabel:customLabel,labelIsPrefix:labelIsPrefix=!1,...rest}){const ref=Object(react.useRef)(null);return Object(react.useLayoutEffect)((()=>{ref.current&&(ref.current.indeterminate=!!indeterminate)}),[indeterminate]),react.createElement(Toggle_LabelStyled,{...dpNameProp("Toggle")},customLabel&&labelIsPrefix&&react.createElement(TSpan,{type:"p1",themeColor:"grey100"},customLabel),label&&labelIsPrefix&&react.createElement(TSpan,{type:"p5"},label),react.createElement(ToggleContainer,{style:style,className:`${className} toggle`,size:size,indeterminate:indeterminate,disabled:disabled,readOnly:rest.readOnly},react.createElement(InputStyled,{id:id,checked:!!checked,disabled:isLocked||disabled,ref:ref,...rest}),react.createElement(SliderStyled,{size:size,isLocked:isLocked,indeterminate:indeterminate})),label&&!labelIsPrefix&&react.createElement(TSpan,{type:"p5"},label))}styled_components_browser_esm.d.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  height: 38px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${props=>props.theme.colors.grey20};
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"h0",as:"h2"})`
  display: block;
  text-overflow: ellipsis;
  margin-left: 12px;
  flex-shrink: 1;
  flex-grow: 0;
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
  max-width: 600px;
`,Object(styled_components_browser_esm.d)(TSpan).attrs({type:"h1",as:"h3"})`
  display: block;
  text-overflow: ellipsis;
  margin-left: 12px;
  flex-shrink: 1;
  flex-grow: 0;
  line-height: normal;
`,styled_components_browser_esm.d.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`,styled_components_browser_esm.d.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 0;
  margin-left: 10px;
  padding: 10px 10px 6px 0;
  border-bottom: 1px solid
    ${props=>props.noBorder?"transparent":props.theme.colors.grey10};

  > label {
    width: 100%;
  }
`,styled_components_browser_esm.d.div`
  display: flex;
  margin: 0 8px 0 0;
  flex-shrink: 0;
  align-items: center;
  font-size: 80%;

  > *:not(:first-child) {
    margin-left: 6px;
  }
`;const AppSidebarWrapper=styled_components_browser_esm.d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 8px;
`,brandShade=(styled_components_browser_esm.d.div`
  flex-grow: ${props=>props.isScrollEnabled?1:0};
  border-right: ${props=>props.borderRight?`1px solid ${props.theme.colors.grey20}`:"none"};
  overflow: hidden;
`,styled_components_browser_esm.d.div`
  flex-grow: 0;
  flex-shrink: 0;
  padding: ${({padding:padding="10px"})=>padding};
  border-top: 1px solid ${props=>props.theme.colors.grey20};
`,Object(react.forwardRef)((function Container(props,ref){return react.createElement(AppSidebarWrapper,{style:props.styles,ref:ref},props.children)})),{brandShade100:"#1C3E55",brandShade80:"#335166",brandShade60:"#8D9FAA",brandShade50:"#C6CED4",brandShade40:"#D2D8DD",brandShade20:"#E8EBEE",brandShade10:"#F3F5F7"}),cyan={cyan100:"#3A8DDE",cyan90:"#55A1E3",cyan80:"#9FCCF3",cyan40:"#CFE5F9",cyan20:"#E1EEFB",cyan10:"#F5FAFE",cyan5:"#FAFDFF"},lightTheme_colors={brandPrimary:brandShade.brandShade100,brandSecondary:cyan.cyan100,white:"#FFFFFF",systemShade100:"#011A2E",systemShade80:"#566672",systemShade40:"#9AA3A9",systemShade30:"#DCE1E5",systemShade20:"#ECEEF0",systemShade10:"#F7F7F8",grey500:"#6B7280",grey100:"#4C4F50",grey80:"#8B9293",grey40:"#A9B0B0",grey20:"#D3D6D7",grey10:"#EFF0F0",grey5:"#F7F7F7",grey3:"#FBFBFB",...brandShade,...cyan,red100:"#E84954",red80:"#FD667F",red60:"#FD8C9F",red40:"#FEB3BF",red20:"#FBE1E3",red10:"#FFF0F2",pink100:"#DF5E9C",pink80:"#EFAFCD",pink40:"#F7D7E6",pink20:"#FAE8F0",pink10:"#FDF6F9",orange100:"#EC6C4E",orange80:"#F5B5A7",orange40:"#FADAD3",orange20:"#F9E6E1",orange10:"#FDF8F7",yellow100:"#F8AF3C",yellow80:"#FBD79D",yellow40:"#FDEBCE",yellow20:"#FFF8E1",yellow10:"#FFFBF0",purple100:"#9384BD",purple80:"#C9C1DE",purple40:"#EBE4F2",purple20:"#F3EFF7",purple10:"#FBFAFC",amethyst100:"#7A56DE",amethyst80:"#9578E5",amethyst40:"#CABBF2",amethyst20:"#E4DDF8",amethyst10:"#F2EEFC",turquoise100:"#5BB6B1",turquoise80:"#ADDBD8",turquoise40:"#D6EDEB",turquoise20:"#E6F4F3",turquoise10:"#F3F9F9",green100:"#54B162",green80:"#76C181",green40:"#BBE0C0",green20:"#DDEFE0",green10:"#EEF7EF",jasper100:"#EA6548",jasper80:"#ED854A",jasper40:"#F39E4F",jasper20:"#F8C595",jasper10:"#FBE2CA",ochre100:"#F5B44D",ochre80:"#F8C474",ochre40:"#FBD79D",ochre20:"#FBF0DB",ochre10:"#FEF7ED",amber100:"#F3993D",amber10:"#FEF5EC",beige100:"#E7D3A2",beige10:"#FDFBF6",brown100:"#B98846",brown10:"#F8F3EC",burgundy100:"#912066",burgundy10:"#F4E9F0",coral100:"#F5B5A7",coral10:"#FDF8F7",grey_black100:"#4C4F50",grey_black10:"#EFF0F0",lavender100:"#DCB7FD",lavender10:"#F8F1FF",lemon100:"#F3DF5A",lemon10:"#FEFCEF",lime100:"#BAD60B",lime10:"#F8FBE7",magenta100:"#9C27B0",magenta10:"#F5E9F7",myrtle100:"#2C787C",myrtle10:"#EAF1F2",olive100:"#B9BB72",olive10:"#F8F8F1",pink_light100:"#EFAFCD",pink_light10:"#FDF6F9",purple_light100:"#C9C1DE",purple_light10:"#FBFAFC",rose_dawn100:"#CD8376",rose_dawn10:"#FAF3F1",sage100:"#86A393",sage20:"#ECF2EE",sage10:"#F3F6F4",sky_blue100:"#30B3DE",sky_blue10:"#EAF7FC",turquoise_light100:"#ADDBD8",turquoise_light10:"#F3F9F9",vermilion100:"#CD4718",vermilion10:"#FAEDE8",violet100:"#9C5DF2",violet10:"#F5EFFE",navy100:"#003171",scarlett100:"#DF2633",scarlett80:"#E23C47",scarlett40:"#E5515C",scarlett20:"#EC7D85",scarlett10:"#F5BEC2",emerald100:"#29983A",emerald10:"#EEF7EF",ultramarine100:"#1368E8",ultramarine10:"#F5FAFE",dark100:"#16151A",dark80:"#1E2025",dark40:"#34373E"},lightTheme_standardLabelColors={brandShade:{backgroundColor:lightTheme_colors.brandShade10,borderColor:lightTheme_colors.brandShade100,textColor:lightTheme_colors.grey100},amber:{backgroundColor:lightTheme_colors.amber10,borderColor:lightTheme_colors.amber100,textColor:lightTheme_colors.grey100},beige:{backgroundColor:lightTheme_colors.beige10,borderColor:lightTheme_colors.beige100,textColor:lightTheme_colors.grey100},brown:{backgroundColor:lightTheme_colors.brown10,borderColor:lightTheme_colors.brown100,textColor:lightTheme_colors.grey100},burgundy:{backgroundColor:lightTheme_colors.burgundy10,borderColor:lightTheme_colors.burgundy100,textColor:lightTheme_colors.grey100},coral:{backgroundColor:lightTheme_colors.coral10,borderColor:lightTheme_colors.coral100,textColor:lightTheme_colors.grey100},cyan:{backgroundColor:lightTheme_colors.cyan10,borderColor:lightTheme_colors.cyan100,textColor:lightTheme_colors.grey100},cyan_light:{backgroundColor:lightTheme_colors.cyan10,borderColor:lightTheme_colors.cyan80,textColor:lightTheme_colors.grey100},green:{backgroundColor:lightTheme_colors.green10,borderColor:lightTheme_colors.green100,textColor:lightTheme_colors.grey100},grey:{backgroundColor:lightTheme_colors.grey5,borderColor:lightTheme_colors.grey80,textColor:lightTheme_colors.grey100},grey_black:{backgroundColor:lightTheme_colors.grey_black10,borderColor:lightTheme_colors.grey_black100,textColor:lightTheme_colors.grey100},lavender:{backgroundColor:lightTheme_colors.lavender10,borderColor:lightTheme_colors.lavender100,textColor:lightTheme_colors.grey100},lemon:{backgroundColor:lightTheme_colors.lemon10,borderColor:lightTheme_colors.lemon100,textColor:lightTheme_colors.grey100},lime:{backgroundColor:lightTheme_colors.lime10,borderColor:lightTheme_colors.lime100,textColor:lightTheme_colors.grey100},magenta:{backgroundColor:lightTheme_colors.magenta10,borderColor:lightTheme_colors.magenta100,textColor:lightTheme_colors.grey100},myrtle:{backgroundColor:lightTheme_colors.myrtle10,borderColor:lightTheme_colors.myrtle100,textColor:lightTheme_colors.grey100},olive:{backgroundColor:lightTheme_colors.olive10,borderColor:lightTheme_colors.olive100,textColor:lightTheme_colors.grey100},orange:{backgroundColor:lightTheme_colors.orange10,borderColor:lightTheme_colors.orange100,textColor:lightTheme_colors.grey100},pink:{backgroundColor:lightTheme_colors.pink10,borderColor:lightTheme_colors.pink100,textColor:lightTheme_colors.grey100},pink_light:{backgroundColor:lightTheme_colors.pink_light10,borderColor:lightTheme_colors.pink_light100,textColor:lightTheme_colors.grey100},purple:{backgroundColor:lightTheme_colors.purple10,borderColor:lightTheme_colors.purple100,textColor:lightTheme_colors.grey100},purple_light:{backgroundColor:lightTheme_colors.purple_light10,borderColor:lightTheme_colors.purple_light100,textColor:lightTheme_colors.grey100},red:{backgroundColor:lightTheme_colors.red10,borderColor:lightTheme_colors.red100,textColor:lightTheme_colors.red100},rose_dawn:{backgroundColor:lightTheme_colors.rose_dawn10,borderColor:lightTheme_colors.rose_dawn100,textColor:lightTheme_colors.grey100},sage:{backgroundColor:lightTheme_colors.sage10,borderColor:lightTheme_colors.sage100,textColor:lightTheme_colors.grey100},sky_blue:{backgroundColor:lightTheme_colors.sky_blue10,borderColor:lightTheme_colors.sky_blue100,textColor:lightTheme_colors.grey100},turquoise:{backgroundColor:lightTheme_colors.turquoise10,borderColor:lightTheme_colors.turquoise100,textColor:lightTheme_colors.grey100},turquoise_light:{backgroundColor:lightTheme_colors.turquoise_light10,borderColor:lightTheme_colors.turquoise_light100,textColor:lightTheme_colors.grey100},vermilion:{backgroundColor:lightTheme_colors.vermilion10,borderColor:lightTheme_colors.vermilion100,textColor:lightTheme_colors.grey100},violet:{backgroundColor:lightTheme_colors.violet10,borderColor:lightTheme_colors.violet100,textColor:lightTheme_colors.grey100},yellow:{backgroundColor:lightTheme_colors.yellow10,borderColor:lightTheme_colors.yellow100,textColor:lightTheme_colors.grey100},jasper:{backgroundColor:lightTheme_colors.jasper10,borderColor:lightTheme_colors.jasper100,textColor:lightTheme_colors.grey100},ochre:{backgroundColor:lightTheme_colors.ochre10,borderColor:lightTheme_colors.ochre100,textColor:lightTheme_colors.grey100}},primary='"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu,Cantarell, "Helvetica Neue", sans-serif',lightTheme={type:"light",colors:lightTheme_colors,urgencyColors:{1:{background:"#FFF8E1",textColor:"#4C4F50",subStatusBackgroundColor:"#FFFBF0"},2:{background:"#FFF8E1",textColor:"#4C4F50",subStatusBackgroundColor:"#FFFBF0"},3:{background:"#FBD79D",textColor:"#4C4F50",subStatusBackgroundColor:"#FFFBF0"},4:{background:"#F8C474",textColor:"#4C4F50",subStatusBackgroundColor:"#FEF7ED"},5:{background:"#F5B44D",textColor:"#4C4F50",subStatusBackgroundColor:"#FDF0DB"},6:{background:"#F39E4F",textColor:"#FFFFFF",subStatusBackgroundColor:"#FDF0DB"},7:{background:"#ED854A",textColor:"#FFFFFF",subStatusBackgroundColor:"#FBE2CA"},8:{background:"#EA6548",textColor:"#FFFFFF",subStatusBackgroundColor:"#FBE2CA"},9:{background:"#E84954",textColor:"#FFFFFF",subStatusBackgroundColor:"#FBE1E3"},10:{background:"#DF2633",textColor:"#FFFFFF",subStatusBackgroundColor:"#F5BEC2"}},standardLabelColors:lightTheme_standardLabelColors,standardLabelColorsKeys:Object.keys(lightTheme_standardLabelColors),fonts:{primary:primary,headingPrimary:`Rubik, ${primary}`,monospace:'"Source Code Pro", monospace',inter:`Inter, ${primary}`,baseSize:"14px"},layers:{popover:3002,modal:4e3,modalPopover:4500},dev:{placeholderBgColor:"#f00"}},GlobalStyles=styled_components_browser_esm.b`
  body {
    color: ${props=>props.theme.colors.grey100};
    font-family: "Noto Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
  }
`;styled_components_browser_esm.b`

  html, body, #root, #deskpro-agent-root  {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    margin: 0;
    padding: 0;

   @media only screen and (max-width: 640px) {
     height: 100%; // https://developers.google.com/web/updates/2016/12/url-bar-resizing
   }
  }
//# sourceMappingURL=vendors~main.8aa50a58.iframe.bundle.js.map