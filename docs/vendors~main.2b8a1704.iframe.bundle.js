/*! For license information please see vendors~main.2b8a1704.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./node_modules/@amsterdam/asc-assets/es/icons/Close.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.a=props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M29.333 5.47L26.53 2.668 16 13.187 5.47 2.666 2.668 5.47 13.187 16 2.666 26.53l2.804 2.803L16 18.813l10.53 10.52 2.803-2.804L18.813 16z",fillRule:"evenodd"},void 0)}),void 0)},"./node_modules/@amsterdam/asc-assets/es/icons/Enlarge.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.a=props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M32 14H18V0h-4v14H0v4h14v14h4V18h14z",fillRule:"evenodd"},void 0)}),void 0)},"./node_modules/@amsterdam/asc-assets/es/icons/Info.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.a=props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",Object.assign({viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zm0 24C8.5 24 4 19.5 4 14S8.5 4 14 4s10 4.5 10 10-4.5 10-10 10zM13 9h2V7h-2v2zm0 12h2V11h-2v10z",fillRule:"evenodd"},void 0)}),void 0)},"./node_modules/@amsterdam/asc-assets/es/icons/Search.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.a=props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M32 29.119l-9.825-9.825a12.217 12.217 0 10-2.88 2.881L29.118 32 32 29.119zm-19.771-8.746a8.145 8.145 0 110-16.289 8.145 8.145 0 010 16.29z",fillRule:"evenodd"},void 0)}),void 0)},"./node_modules/@amsterdam/asc-assets/es/icons/TrashBin.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.a=props=>Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",focusable:!1},props,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M31 6h-8V2H13v4H5v4h2v24h22V10h2zM15 4h6v2h-6zm10 26H11V10h14z"},void 0),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M13.02 14H15v12h-1.98zM17 14h2v12h-2zm4.02 0H23v12h-1.98z"},void 0)]}),void 0)},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),IconStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),Icon=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultProps_size=30,getButtonHeight=theme=>Object(themeUtils.g)(11)({theme:theme}),ArrowRight=styled_components_browser_esm.d.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${Object(themeUtils.f)("secondary")};
  border-right: 0;
  ${Object(polished_esm.h)("border-color","0.1s ease-in-out")}
`,IconLeft=Object(styled_components_browser_esm.d)(Icon.a)`
  margin-right: 10px;
`,IconRight=Object(styled_components_browser_esm.d)(Icon.a)`
  margin-left: 10px;
`;var Button_ButtonStyle=styled_components_browser_esm.d.button`
  height: ${({theme:theme})=>getButtonHeight(theme)};
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding: ${({size:sizeProp,theme:theme})=>sizeProp?"0":Object(themeUtils.g)(3,4)({theme:theme})};
  ${({size:sizeProp,square:square})=>(sizeProp||square)&&styled_components_browser_esm.c`
      display: flex;
      align-items: center;
      justify-content: center;
      ${Object(polished_esm.g)(sizeProp||defaultProps_size)}// width and height
    `}
  ${Object(polished_esm.h)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:theme,variant:variant,color:color})=>{switch(variant){case"primary":return styled_components_browser_esm.c`
          min-width: 90px;
          background-color: ${Object(themeUtils.f)("primary")};
          color: ${Object(polished_esm.e)(Object(themeUtils.f)("primary")({theme:theme}))};
          ${Object(themeUtils.e)(Object(themeUtils.f)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${Object(polished_esm.a)(.1,Object(themeUtils.f)("primary")({theme:theme}))};
          }
        `;case"secondary":return styled_components_browser_esm.c`
          min-width: 90px;
          background-color: ${Object(themeUtils.f)("secondary")};
          color: ${Object(themeUtils.f)("tint","level1")};
          ${Object(themeUtils.e)(Object(themeUtils.f)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${Object(polished_esm.a)(.1,Object(themeUtils.f)("secondary")({theme:theme}))};
          }

          ${taskflow=>taskflow&&styled_components_browser_esm.c`
              &:not(:disabled)&:focus
                ${ArrowRight},
                &:not(:disabled)&:hover
                ${ArrowRight} {
                border-left-color: ${Object(polished_esm.a)(.1,Object(themeUtils.f)("secondary")({theme:theme}))};
              }
            `}
        `;case"tertiary":return styled_components_browser_esm.c`
          min-width: 90px;
          background-color: ${Object(themeUtils.f)("tint","level4")};
          ${Object(themeUtils.e)(Object(themeUtils.f)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${Object(polished_esm.a)(.1,Object(themeUtils.f)("tint","level4")({theme:theme}))};
          }
        `;case"primaryInverted":return styled_components_browser_esm.c`
          min-width: 90px;
          color: ${Object(themeUtils.f)("primary")};
          border: 1px solid ${Object(themeUtils.f)("primary")};
          background-color: ${Object(themeUtils.f)("tint","level1")};
          ${Object(themeUtils.e)(Object(themeUtils.f)("primary","main"))};

          &:hover {
            outline: 1px solid ${Object(themeUtils.f)("primary")};
          }
        `;case"textButton":return styled_components_browser_esm.c`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${Object(themeUtils.f)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${Object(themeUtils.e)(Object(themeUtils.f)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${Object(polished_esm.h)("color","0s")}

          &:hover {
            color: ${Object(themeUtils.f)("secondary")};
            ${Object(themeUtils.e)(Object(themeUtils.f)("secondary","main"))};
          }

          ${IconLeft} {
            margin-right: ${Object(themeUtils.g)(1)};
          }
          ${IconRight} {
            margin-left: ${Object(themeUtils.g)(1)};
          }
        `;case"blank":return styled_components_browser_esm.c`
          background-color: ${Object(themeUtils.f)("tint","level1")};
          ${Object(themeUtils.e)(Object(themeUtils.f)("tint","level7"))};
          &:hover {
            background-color: ${Object(themeUtils.f)("tint","level3")};
          }
        `;case"application":return styled_components_browser_esm.c`
          border: 1px solid ${Object(themeUtils.f)("tint","level7")};
          background-color: ${Object(themeUtils.f)("tint","level1")};
          height: 32px;
          padding: ${Object(themeUtils.g)(1,2)};
          ${Object(themeUtils.e)(Object(themeUtils.f)("tint","level7"))};
          &:hover {
            background-color: ${Object(themeUtils.f)("tint","level4")};
          }
        `;default:return styled_components_browser_esm.c`
          color: ${color?Object(polished_esm.e)(Object(themeUtils.f)(color)({theme:theme})):Object(themeUtils.f)("primary")({theme:theme})};
          ${color&&styled_components_browser_esm.c`
            background: ${Object(themeUtils.f)(color)};
          `}

          ${!color&&styled_components_browser_esm.c`
            border: 1px solid ${Object(themeUtils.f)("primary")};
          `}

        &:hover {
            background: ${color?Object(themeUtils.f)(color,"dark")({theme:theme}):Object(themeUtils.f)("tint","level3")({theme:theme})};
            ${!color&&styled_components_browser_esm.c`
              outline: 1px solid ${Object(themeUtils.f)("primary")};
            `}
          }
        `}}}
  ${styled_components_browser_esm.c`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`} // ie fix
  ${({taskflow:taskflow})=>taskflow&&styled_components_browser_esm.c`
      position: relative;
      min-width: initial;
      padding-right: 0;
      padding-top: 0; // safari fix
      padding-bottom: 0; // safari fix
      line-height: ${({theme:theme})=>getButtonHeight(theme)}; // safari 10.1 fix
      z-index: 0;
      && {
        margin-right: 25px;
      }
      &:focus ${ArrowRight}:after {
        opacity: 1;
      }
    `}
  ${Icon.a} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${Object(themeUtils.f)("tint","level4")};
    background-color: ${Object(themeUtils.f)("tint","level3")};
    ${Object(themeUtils.e)(Object(themeUtils.f)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:taskflow})=>taskflow&&styled_components_browser_esm.c`
        ${ArrowRight} {
          border-left-color: ${Object(themeUtils.f)("tint","level3")};
        }
      `}
    ${({variant:variant})=>variant&&"textButton"===variant&&styled_components_browser_esm.c`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Button=Object(react.forwardRef)(((_a,ref)=>{var{children:children,iconLeft:iconLeft,iconRight:iconRight,icon:icon,iconSize:iconSize,taskflow:taskflow}=_a,otherProps=__rest(_a,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);const iconProps={size:iconSize||IconStyle.b.size};return Object(jsx_runtime.jsxs)(Button_ButtonStyle,Object.assign({ref:ref},otherProps,{taskflow:taskflow},{children:[iconLeft&&Object(jsx_runtime.jsx)(IconLeft,Object.assign({},iconProps,{children:iconLeft}),void 0),icon?Object(jsx_runtime.jsx)(Icon.a,Object.assign({},iconProps,{children:icon}),void 0):children,iconRight&&Object(jsx_runtime.jsx)(IconRight,Object.assign({},iconProps,{children:iconRight}),void 0),taskflow&&Object(jsx_runtime.jsx)(ArrowRight,{},void 0)]}),void 0)}));__webpack_exports__.a=Button},"./node_modules/@amsterdam/asc-ui/es/components/Checkbox/Checkbox.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Indeterminate=props=>Object(jsx_runtime.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.9 14H27v4H4.9z"},void 0)}),void 0);var Checkmark=props=>Object(jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{d:"M12.216 27.016L0 14.168l2.91-2.77 9.346 9.837L29.129 4 32 6.8z",fillRule:"evenodd"},void 0)}),void 0),react=__webpack_require__("./node_modules/react/index.js"),LabelContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),CheckboxStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Checkbox=Object(react.forwardRef)(((_a,externalRef)=>{var{checked:checkedProp,className:className,onChange:onChange,disabled:disabled,error:error,indeterminate:indeterminate}=_a,otherProps=__rest(_a,["checked","className","onChange","disabled","error","indeterminate"]);const[checked,setChecked]=Object(react.useState)(!!checkedProp),{setActive:setActive}=Object(react.useContext)(LabelContext.a),ref=Object(react.useRef)(null);return Object(react.useImperativeHandle)(externalRef,(()=>ref.current)),Object(react.useEffect)((()=>{ref.current&&(ref.current.indeterminate=null!=indeterminate&&indeterminate)}),[ref,indeterminate]),Object(react.useEffect)((()=>{setActive(checked)}),[checked,setActive]),Object(react.useMemo)((()=>{setChecked(!!checkedProp)}),[checkedProp,setChecked]),Object(jsx_runtime.jsxs)(CheckboxStyle.b,Object.assign({},{className:className,disabled:disabled,checked:checked,error:error},{"aria-disabled":disabled},{children:[Object(jsx_runtime.jsxs)(CheckboxStyle.a,Object.assign({},{disabled:disabled,checked:checked,error:error,indeterminate:indeterminate},{"data-testid":"checkboxIcon",size:15},{children:[!checked&&indeterminate&&Object(jsx_runtime.jsx)(Indeterminate,{},void 0),checked&&Object(jsx_runtime.jsx)(Checkmark,{},void 0)]}),void 0),Object(jsx_runtime.jsx)(CheckboxStyle.c,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,checked:checked,ref:ref}),{onChange:e=>{onChange&&onChange(e),void 0===checkedProp&&setChecked(!checked)}}),void 0)]}),void 0)}));__webpack_exports__.a=Checkbox},"./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return CheckboxWrapperStyle})),__webpack_require__.d(__webpack_exports__,"a",(function(){return CheckboxIconStyle}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_Icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");__webpack_exports__.c=styled_components__WEBPACK_IMPORTED_MODULE_0__.d.input.attrs({type:"checkbox"})`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`;const CheckboxIconStyle=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.d)(_Icon__WEBPACK_IMPORTED_MODULE_2__.a)`
  display: flex;
  border-width: 1px;
  border-style: solid;
  width: 22px;
  height: 22px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level1")};
  transition: background-color 0.2s ease-in-out;
  pointer-events: none;
  ${({checked:checked,indeterminate:indeterminate})=>(checked||indeterminate)&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level7")};
      background-color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level7")};
      ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.e)(Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level1"))};
    `};
`,CheckboxWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.d.span`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  margin-bottom: 1px;
  padding: 6px;
  flex-shrink: 0; /* IE11 fix */
  color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level5")};
  ${({disabled:disabled})=>disabled&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      pointer-events: none;
    `}
  ${({checked:checked,disabled:disabled})=>!checked&&!disabled&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      &:hover {
        color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level7")};

        ${CheckboxIconStyle} {
          outline-style: solid;
          outline-width: 1px;
        }
      }
    `}
    ${({error:error,checked:checked,disabled:disabled})=>error&&!checked&&!disabled&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      ${CheckboxIconStyle} {
        border-color: red;
        outline: 1px solid red;
      }
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/GlobalStyle/GlobalStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var polished__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const GlobalStyle=styled_components__WEBPACK_IMPORTED_MODULE_1__.b`
  ${Object(polished__WEBPACK_IMPORTED_MODULE_0__.c)()}
  ${({theme:theme})=>Object(_utils__WEBPACK_IMPORTED_MODULE_2__.c)("globalStyle")({theme:theme})}

  body {
    font-family: ${Object(_utils__WEBPACK_IMPORTED_MODULE_2__.c)("typography.fontFamily")};
  }

  /* Display reset for older browsers that don't support certain HTML5 elements */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
      display: block;
  }
  
  /* Use border-box sizing by default for all elements */
  *, *::before, *::after {
    box-sizing: border-box;
  } 
`;__webpack_exports__.a=GlobalStyle},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var _IconStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");__webpack_exports__.a=_IconStyle__WEBPACK_IMPORTED_MODULE_0__.a},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return defaultProps}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultProps={size:20,padding:0,rotate:0},IconStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.d.span.withConfig({shouldForwardProp:(prop,defaultValidatorFn)=>!["size","rotate","padding","inline","color"].includes(prop)&&defaultValidatorFn(prop)})`
  display: ${({inline:inline})=>inline?"inline-flex":"flex"};
  ${({iconUrl:iconUrl})=>iconUrl&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      background-image: url(${iconUrl});
    `}
  ${({size:size=defaultProps.size,padding:padding=defaultProps.padding})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
    width: ${size-2*padding}px;
    height: ${size-2*padding}px;
  `}
  ${({padding:padding})=>padding&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      padding: ${padding}px;
    `};
  box-sizing: content-box;
  ${({rotate:rotate=defaultProps.rotate})=>`transform: rotate(${rotate}deg)`};

  & > svg {
    ${({size:size=defaultProps.size,padding:padding=defaultProps.padding})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      width: ${size-2*padding}px;
      height: ${size-2*padding}px;
    `}
  }

  ${({color:color})=>color&&Object(_utils__WEBPACK_IMPORTED_MODULE_1__.e)(color)};
`;__webpack_exports__.a=IconStyle},"./node_modules/@amsterdam/asc-ui/es/components/Input/Input.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var Keys,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(Keys){Keys.ArrowUp="ArrowUp",Keys.ArrowDown="ArrowDown",Keys.ArrowRight="ArrowRight",Keys.ArrowLeft="ArrowLeft",Keys.Escape="Escape",Keys.Enter="Enter",Keys.Tab="Tab",Keys.Space="Space",Keys.Home="Home",Keys.End="End"}(Keys||(Keys={}));var KeyboardKeys=Keys;var hooks_useActionOnEscape=function useActionOnEscape(callback){return{onKeyDown:event=>{event.key===KeyboardKeys.Escape&&callback()}}};var Input_InputMethodsContext=Object(react.createContext)({}),InputStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Input/InputStyle.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Input=Object(react.forwardRef)(((_a,externalRef)=>{var{blurOnEscape:blurOnEscape,value:value,error:error}=_a,props=__rest(_a,["blurOnEscape","value","error"]);const{onKeyDown:onKeyDown}=props,inputRef=Object(react.useRef)(null);Object(react.useImperativeHandle)(externalRef,(()=>inputRef.current));const{onKeyDown:onKeyDownHook}=hooks_useActionOnEscape((()=>{inputRef.current&&inputRef.current.blur()}));return Object(jsx_runtime.jsx)(Input_InputMethodsContext.Consumer,{children:context=>(context.setInputRef&&context.setInputRef(inputRef),Object(jsx_runtime.jsx)(InputStyle.a,Object.assign({ref:inputRef},props,context,{onKeyDown:e=>{((e,context)=>{onKeyDown&&onKeyDown(e),blurOnEscape&&onKeyDownHook(e),context.onKeyDown&&context.onKeyDown(e)})(e,context)},error:error,value:value}),void 0))},void 0)}));__webpack_exports__.a=Input},"./node_modules/@amsterdam/asc-ui/es/components/Input/InputStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return inputCss}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_shared_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js");const inputCss=styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
  appearance: none;
  font-size: 16px;
  border: solid 1px ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level5")};
  border-radius: 0;
  box-sizing: border-box;
  line-height: 18px;
  padding: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.g)(2)};
  width: 100%;
  height: ${_shared_constants__WEBPACK_IMPORTED_MODULE_2__.b}px;
  ${({error:error})=>!error&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      &:hover {
        border-color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level6")};
      }
    `}

  ${({error:error})=>error&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      border-color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("secondary","main")};
    `}
`,InputStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.d.input`
  ${inputCss}
`;__webpack_exports__.a=InputStyle},"./node_modules/@amsterdam/asc-ui/es/components/Label/Label.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_LabelStyle__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js"),_utils_hooks_usePassPropsToChildren__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js"),_LabelContext__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Label=_a=>{var{children:childrenProps,label:label,disabled:disabled,position:position,noActiveState:noActiveState}=_a,otherProps=__rest(_a,["children","label","disabled","position","noActiveState"]);const[active,setActive]=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),{children:children}=Object(_utils_hooks_usePassPropsToChildren__WEBPACK_IMPORTED_MODULE_3__.a)(childrenProps,{disabled:disabled}),activeState=!noActiveState&&active;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelContext__WEBPACK_IMPORTED_MODULE_4__.a.Provider,Object.assign({value:{active:active,setActive:setActive}},{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LabelStyle__WEBPACK_IMPORTED_MODULE_2__.b,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,position:position}),{active:activeState},{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyle__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({position:position},{children:label}),void 0),children]}),void 0)}),void 0)};Label.defaultProps={noActiveState:!1},__webpack_exports__.a=Label},"./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LabelContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)({active:!1,setActive:()=>{}});__webpack_exports__.a=LabelContext},"./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return LabelTextStyle}));var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js");const LabelStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.d.label`
  display: inline-flex;
  align-items: ${({align:align})=>align};
  vertical-align: middle;
  color: ${Object(_utils__WEBPACK_IMPORTED_MODULE_1__.f)("tint","level7")};
  ${({srOnly:srOnly})=>srOnly&&_utils__WEBPACK_IMPORTED_MODULE_1__.d}
  ${({disabled:disabled})=>disabled?styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
          opacity: 0.3;
        `:styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
          cursor: pointer;
        `}
  ${({position:position})=>("top"===position||"bottom"===position)&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      flex-direction: column;
    `}
  ${({position:position})=>position&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      & ${_Checkbox__WEBPACK_IMPORTED_MODULE_2__.b} {
        padding-${position}: 12px;
      }
    `}
  
  ${({active:active})=>active&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      font-weight: 700;
    `}
`;LabelStyle.defaultProps={position:"right",align:"center"};const LabelTextStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.d.span`
  ${({position:position})=>"top"!==position&&"bottom"!==position&&styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
      margin: 9.2px 0; /* To align the label to a checkbox / radiobutton when having a long text. line-height is 1.15 / 18.4px (from normalize css). Margin top & bottom = lineheight / 2 */
    `}
  ${({position:position})=>"top"===position||"left"===position?styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
          order: 0;
        `:styled_components__WEBPACK_IMPORTED_MODULE_0__.c`
          order: 1;
        `}
`;__webpack_exports__.b=LabelStyle},"./node_modules/@amsterdam/asc-ui/es/components/Radio/Radio.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const RadioStyle=styled_components_browser_esm.d.input.attrs({type:"radio"})`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 4px;
  top: 4px;
  outline-width: 10px;
`,RadioCircleStyle=styled_components_browser_esm.d.span`
  width: 24px;
  height: 24px;
  color: ${Object(themeUtils.f)("tint","level5")};
  background-color: ${Object(themeUtils.f)("tint","level1")};
  border: 1px solid;
  border-radius: 50%;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    background-color: ${Object(themeUtils.f)("tint","level7")};
    opacity: 0;
    z-index: 1;
    ${({checked:checked})=>checked&&styled_components_browser_esm.c`
        opacity: 1;
      `}
  }

  ${({error:error,checked:checked,disabled:disabled,focus:focus})=>error&&!checked&&!disabled&&!focus&&styled_components_browser_esm.c`
      border-width: 2px;
      color: red;
    `}
`,RadioWrapperStyle=styled_components_browser_esm.d.span`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0; /* IE11 fix */
  padding: ${Object(themeUtils.g)(1)};
  margin-bottom: 1px;
  margin-right: ${Object(themeUtils.g)(2)};

  input:focus ~ span {
    display: inline-block;
  }

  ${({disabled:disabled})=>disabled&&styled_components_browser_esm.c`
      pointer-events: none;
    `}

  ${({checked:checked,disabled:disabled,focus:focus})=>!checked&&!disabled&&!focus&&styled_components_browser_esm.c`
      &:hover ${RadioCircleStyle} {
        border: 2px solid;
        color: ${Object(themeUtils.f)("tint","level7")};
      }
    `}
`;var Radio_RadioStyle=RadioStyle,RadioContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js"),LabelContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Radio=Object(react.forwardRef)(((_a,ref)=>{var{className:className,onChange:onChange,disabled:disabled,id:id,checked:defaultChecked,error:errorProp,value:value}=_a,otherProps=__rest(_a,["className","onChange","disabled","id","checked","error","value"]);const[focus,setFocus]=Object(react.useState)(!1),{setChecked:setChecked,checked:checkedProp,name:name,error:errorGroup}=Object(react.useContext)(RadioContext.a),{setActive:setActive}=Object(react.useContext)(LabelContext.a),checked=checkedProp===id,error=errorProp||errorGroup||!1;return Object(react.useEffect)((()=>{setActive(checked)}),[checked,setActive]),Object(react.useEffect)((()=>{defaultChecked&&setChecked(id)}),[id,defaultChecked,setChecked]),Object(jsx_runtime.jsxs)(RadioWrapperStyle,Object.assign({},{focus:focus,error:error,className:className,disabled:disabled,checked:checked},{"aria-disabled":disabled},{children:[Object(jsx_runtime.jsx)(Radio_RadioStyle,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,id:id,name:name,value:value,checked:checked,ref:ref}),{onFocus:()=>{setFocus(!0)},onBlur:()=>setFocus(!1),onChange:e=>{onChange&&onChange(e),setChecked(e.target.id)}}),void 0),Object(jsx_runtime.jsx)(RadioCircleStyle,Object.assign({},{error:error,disabled:disabled,focus:focus,checked:checked}),void 0)]}),void 0)}));__webpack_exports__.a=Radio},"./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const defaultValue={checked:"",setChecked:()=>{},name:void 0,error:!1},RadioContext=Object(react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);__webpack_exports__.a=RadioContext},"./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioGroup.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),usePassPropsToChildren=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),LabelStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),RadioGroupStyle=styled_components_browser_esm.d.div`
  display: flex;
  flex-direction: ${({horizontal:horizontal})=>horizontal?"row":"column"};
  ${({horizontal:horizontal})=>horizontal&&styled_components_browser_esm.c`
      ${LabelStyle.b} {
        margin-right: ${Object(themeUtils.g)(4)};
      }
    `}
`,RadioContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};__webpack_exports__.a=_a=>{var{disabled:disabled,error:error,name:name,horizontal:horizontal,children:childrenProps}=_a,otherProps=__rest(_a,["disabled","error","name","horizontal","children"]);const[checked,setChecked]=Object(react.useState)(""),{children:children}=Object(usePassPropsToChildren.a)(childrenProps,{disabled:disabled});return Object(jsx_runtime.jsx)(RadioContext.a.Provider,Object.assign({value:{checked:checked,setChecked:setChecked,name:name,error:error}},{children:Object(jsx_runtime.jsx)(RadioGroupStyle,Object.assign({horizontal:horizontal},otherProps,{children:disabled?children:childrenProps}),void 0)}),void 0)}},"./node_modules/@amsterdam/asc-ui/es/components/Select/Select.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");var FormLabelStyle_FormLabelStyle=styled_components_browser_esm.d.label.attrs((({htmlFor:htmlFor})=>({htmlFor:htmlFor})))`
  ${({label:label})=>label&&styled_components_browser_esm.c`
      ${({theme:theme})=>Object(themeUtils.b)()({as:"p",gutterBottom:0,theme:theme})};
    `}

  ${({srOnly:srOnly,label:label,error:error})=>(label||error)&&!srOnly&&styled_components_browser_esm.c`
      display: block;
      padding-bottom: ${Object(themeUtils.g)(2)};
      font-weight: 700;
    `}

  ${({error:error})=>error&&styled_components_browser_esm.c`
      color: ${Object(themeUtils.f)("error","main")};
    `}

  ${({srOnly:srOnly})=>srOnly&&themeUtils.d}
`;var ChevronDown=props=>Object(jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{d:"M16 25.757l-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z",fillRule:"evenodd"},void 0)}),void 0),constants=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js");const SelectWrapper=styled_components_browser_esm.d.div`
  position: relative;
  height: ${constants.b}px;
  width: 100%;
`,AbsoluteContentWrapper=styled_components_browser_esm.d.div.attrs({"aria-hidden":"true"})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 3px; /* Allows the default browser(s) default focus style to be displayed. */
  padding: 0 calc(${Object(themeUtils.g)(3)} - 1px); /* Match the spacing of the select element. */
  display: flex;
  align-items: center;
  pointer-events: none;
  background-color: ${Object(themeUtils.f)("tint","level1")};
`,SelectedValue=styled_components_browser_esm.d.div`
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({disabled:disabled})=>disabled&&styled_components_browser_esm.c`
      opacity: 0.5;
    `}
`,SelectIcon=Object(styled_components_browser_esm.d)(ChevronDown)`
  display: block;
  width: ${Object(themeUtils.g)(3)};
  height: ${Object(themeUtils.g)(3)};
  margin-left: ${Object(themeUtils.g)(3)};
`;var Select_SelectStyle=styled_components_browser_esm.d.select`
  width: 100%;
  height: 100%;
  padding: ${Object(themeUtils.g)(2,3)};
  font-size: 1rem;
  border: 1px solid ${Object(themeUtils.f)("tint","level5")};
  border-radius: 0;
  background-color: ${Object(themeUtils.f)("tint","level1")};
  appearance: none;
  cursor: pointer;

  /* IE11 (hide native arrow button) */
  &::-ms-expand {
    display: none;
  }

  /* IE11 (hide native focus state) */
  &::-ms-value {
    color: black;
    background: transparent;
  }

  /* Firefox (hide native focus state) */
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 ${Object(themeUtils.f)("tint","level7")};
  }

  &:hover {
    ${({disabled:disabled,error:error})=>!disabled&&!error&&styled_components_browser_esm.c`
        border: 1px solid ${Object(themeUtils.f)("tint","level7")};
      `}
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    border: 1px solid ${Object(themeUtils.f)("tint","level4")};
  }

  ${({error:error})=>error&&styled_components_browser_esm.c`
      border: 1px solid ${Object(themeUtils.f)("error","main")};
    `}
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Select=Object(react.forwardRef)(((_a,externalRef)=>{var{id:id,value:value,label:label,srOnly:srOnlyProp,error:error,labelStyle:labelStyle,onChange:onChange,children:children,disabled:disabled,className:className}=_a,otherProps=__rest(_a,["id","value","label","srOnly","error","labelStyle","onChange","children","disabled","className"]);const srOnly=srOnlyProp||!1,[selectedValue,setSelectedValue]=Object(react.useState)(""),ref=Object(react.useRef)(null),updateValue=Object(react.useCallback)((select=>{const selectedOption=function getSelectedOptions(select){return select.selectedOptions?Array.from(select.selectedOptions):Array.from(select.querySelectorAll(":checked"))}(select)[0];(null==selectedOption?void 0:selectedOption.textContent)&&setSelectedValue(selectedOption.textContent)}),[]),handleChange=Object(react.useCallback)((event=>{updateValue(event.target),onChange&&onChange(event)}),[onChange,updateValue]);return Object(react.useImperativeHandle)(externalRef,(()=>ref.current)),Object(react.useEffect)((()=>{ref.current&&updateValue(ref.current)}),[ref,updateValue,value]),Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label&&Object(jsx_runtime.jsx)(FormLabelStyle_FormLabelStyle,Object.assign({srOnly:srOnly,htmlFor:id,label:label,style:labelStyle},{children:label}),void 0),Object(jsx_runtime.jsxs)(SelectWrapper,Object.assign({className:className},{children:[Object(jsx_runtime.jsx)(Select_SelectStyle,Object.assign({},Object.assign(Object.assign({},otherProps),{id:id,value:value,error:error}),{disabled:disabled,error:error,ref:ref,onChange:handleChange},{children:children}),void 0),Object(jsx_runtime.jsxs)(AbsoluteContentWrapper,{children:[Object(jsx_runtime.jsx)(SelectedValue,Object.assign({"data-testid":"selectedValue",disabled:disabled},{children:selectedValue}),void 0),Object(jsx_runtime.jsx)(SelectIcon,{},void 0)]},void 0)]}),void 0)]},void 0)}));__webpack_exports__.a=Select},"./node_modules/@amsterdam/asc-ui/es/components/Spinner/Spinner.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Spinner=props=>Object(jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",focusable:!1},props,{children:Object(jsx_runtime.jsx)("path",{d:"M50 100C22.4 99.967.033 77.6 0 50h10c0 22.091 17.909 40 40 40s40-17.909 40-40-17.909-40-40-40V0c27.614 0 50 22.386 50 50s-22.386 50-50 50z"},void 0)}),void 0),Icon=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js");var Spinner_SpinnerStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").d.div.withConfig({shouldForwardProp:(prop,defaultValidatorFn)=>!["size","color"].includes(prop)&&defaultValidatorFn(prop)})`
  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: ${({size:size})=>size}px;
  height: ${({size:size})=>size}px;

  & svg {
    animation: rotating 1s linear infinite;
  }
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const Spinner_Spinner=_a=>{var{size:size,color:color}=_a,otherProps=__rest(_a,["size","color"]);return Object(jsx_runtime.jsx)(Spinner_SpinnerStyle,Object.assign({size:size},otherProps,{children:Object(jsx_runtime.jsx)(Icon.a,Object.assign({size:size,color:color},{children:Object(jsx_runtime.jsx)(Spinner,{},void 0)}),void 0)}),void 0)};Spinner_Spinner.defaultProps={size:20};__webpack_exports__.a=Spinner_Spinner},"./node_modules/@amsterdam/asc-ui/es/components/TextArea/TextArea.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),InputStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Input/InputStyle.js");var TextArea_TextAreaStyle=styled_components_browser_esm.d.textarea`
  ${InputStyle.b}
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const TextArea=Object(react.forwardRef)(((_a,ref)=>{var{value:value,error:error}=_a,otherProps=__rest(_a,["value","error"]);return Object(jsx_runtime.jsx)(TextArea_TextAreaStyle,Object.assign({ref:ref,error:error,value:value},otherProps),void 0)}));__webpack_exports__.a=TextArea},"./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return BACKDROP_Z_INDEX})),__webpack_require__.d(__webpack_exports__,"b",(function(){return INPUT_SIZE}));const BACKDROP_Z_INDEX=20,INPUT_SIZE=44},"./node_modules/@amsterdam/asc-ui/es/theme/ThemeProvider.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var default_namespaceObject={};__webpack_require__.r(default_namespaceObject),__webpack_require__.d(default_namespaceObject,"DEFAULT_THEME_NAME",(function(){return DEFAULT_THEME_NAME})),__webpack_require__.d(default_namespaceObject,"breakpoints",(function(){return default_breakpoints})),__webpack_require__.d(default_namespaceObject,"colors",(function(){return default_colors})),__webpack_require__.d(default_namespaceObject,"globalStyle",(function(){return default_globalStyle})),__webpack_require__.d(default_namespaceObject,"typography",(function(){return default_typography})),__webpack_require__.d(default_namespaceObject,"layouts",(function(){return default_layouts})),__webpack_require__.d(default_namespaceObject,"maxGridWidth",(function(){return maxGridWidth})),__webpack_require__.d(default_namespaceObject,"maxContainerWidth",(function(){return maxContainerWidth})),__webpack_require__.d(default_namespaceObject,"spacing",(function(){return default_spacing}));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),cjs=__webpack_require__("./node_modules/deepmerge/dist/cjs.js"),cjs_default=__webpack_require__.n(cjs),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const withTypeBreakpoint=size=>type=>`(${type}: ${size+("max-width"===type?-1:0)}px)`,sizes_mobileM=375,sizes_mobileL=414,sizes_tabletS=540,sizes_tabletM=768,sizes_laptop=1024,sizes_laptopM=1200,sizes_laptopL=1430,sizes_desktop=1920,sizes_desktopL=2560;var default_breakpoints={mobileS:withTypeBreakpoint(320),mobileM:withTypeBreakpoint(sizes_mobileM),mobileL:withTypeBreakpoint(sizes_mobileL),tabletS:withTypeBreakpoint(sizes_tabletS),tabletM:withTypeBreakpoint(sizes_tabletM),laptop:withTypeBreakpoint(sizes_laptop),laptopM:withTypeBreakpoint(sizes_laptopM),laptopL:withTypeBreakpoint(sizes_laptopL),desktop:withTypeBreakpoint(sizes_desktop),desktopL:withTypeBreakpoint(sizes_desktopL)};var default_colors={primary:{main:"#004699",dark:"#00387a"},secondary:{main:"#ec0000",dark:"#bc0000"},tint:{level1:"#ffffff",level2:"#f5f5f5",level3:"#e6e6e6",level4:"#b4b4b4",level5:"#767676",level6:"#323232",level7:"#000000"},support:{valid:"#00a03c",invalid:"#ec0000",focus:"#fec813"},supplement:{purple:"#a00078",pink:"#e50082",orange:"#ff9100",yellow:"#ffe600",lightgreen:"#bed200",darkgreen:"#00a03c",lightblue:"#009dec"},bright:{main:"#ffffff"},error:{main:"#ec0000"}};var default_globalStyle="";var default_typography={fontFamily:"Avenir Next, Arial, sans-serif",fontSize:"16px",h1:{color:default_colors.tint.level7,fontSize:"24px",fontWeight:700,letterSpacing:"inherit",lineHeight:"30px",marginBottom:"0",breakpoints:{laptop:{fontSize:"30px",lineHeight:"38px"}}},h2:{color:default_colors.tint.level7,fontSize:"20px",fontWeight:700,letterSpacing:"inherit",lineHeight:"28px",marginBottom:"8px",breakpoints:{laptop:{fontSize:"24px",lineHeight:"30px"}}},h3:{color:default_colors.tint.level7,fontSize:"20px",fontWeight:700,letterSpacing:"inherit",lineHeight:"28px",marginBottom:"8px"},h4:{color:default_colors.tint.level7,fontSize:"18px",fontWeight:700,letterSpacing:"inherit",lineHeight:"25px",marginBottom:"8px"},h5:{color:default_colors.tint.level7,fontSize:"18px",fontWeight:700,letterSpacing:"inherit",lineHeight:"25px",marginBottom:"8px"},h6:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:500,letterSpacing:"inherit",lineHeight:"20px",marginBottom:"0"},a:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"22px",marginBottom:"0",breakpoints:{laptop:{fontSize:"18px",lineHeight:"25px"}}},p:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:400,letterSpacing:"inherit",lineHeight:"22px",marginBottom:"20px",breakpoints:{tabletS:{marginBottom:"24px"},laptop:{fontSize:"18px",lineHeight:"25px"}}},li:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:400,letterSpacing:"inherit",lineHeight:"22px",marginBottom:"8",breakpoints:{laptop:{fontSize:"18px",lineHeight:"25px"}}},em:{color:default_colors.tint.level7,fontSize:"16px",fontWeight:400,letterSpacing:"inherit",lineHeight:1.25,marginBottom:"0"},small:{color:default_colors.tint.level7,fontSize:"14px",fontWeight:400,letterSpacing:"inherit",lineHeight:"18px",marginBottom:"0"},span:{color:default_colors.tint.level7,fontSize:"14px",fontWeight:400,letterSpacing:"inherit",lineHeight:"18px",marginBottom:"0"}};const maxGridWidth=sizes_laptopL,maxContainerWidth=sizes_desktop;var default_layouts={xLarge:{columns:12,margin:44,gutter:24,min:sizes_laptopM},large:{columns:12,margin:32,gutter:24,max:sizes_laptopM,min:sizes_laptop},big:{columns:6,margin:24,gutter:24,max:sizes_laptop,min:sizes_tabletM},medium:{columns:2,margin:20,gutter:20,max:sizes_tabletM,min:sizes_mobileL},small:{columns:1,margin:20,max:sizes_mobileL}};var default_spacing=4;const DEFAULT_THEME_NAME="default";__webpack_exports__.a=({theme:defaultTheme=default_namespaceObject,overrides:overrides,deep:deep=!0,children:children})=>{const theme=deep?cjs_default()(defaultTheme,overrides||{}):Object.assign(Object.assign({},defaultTheme),overrides);return Object(jsx_runtime.jsx)(styled_components_browser_esm.a,Object.assign({theme:theme},{children:children}),void 0)}},"./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js":function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.a=(childrenProps,propsOrCallback)=>({children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childrenProps,((child,index)=>Object(react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,"function"==typeof propsOrCallback?propsOrCallback(index):propsOrCallback)))})},"./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return getValueFromTheme})),__webpack_require__.d(__webpack_exports__,"f",(function(){return themeColor})),__webpack_require__.d(__webpack_exports__,"a",(function(){return breakpoint})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getTypographyFromTheme})),__webpack_require__.d(__webpack_exports__,"d",(function(){return srOnlyStyle})),__webpack_require__.d(__webpack_exports__,"e",(function(){return svgFill})),__webpack_require__.d(__webpack_exports__,"g",(function(){return themeSpacing}));var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js");var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};const withTheme=cb=>(...params)=>({theme:theme})=>cb(theme,...params),getValueFromTheme=withTheme(((theme,identifier,callback)=>((identifier,callback)=>source=>{try{const value=(obj=source,identifier.split(".").reduce(((reduced,index)=>reduced[index]),obj));return callback?callback(value):value}catch(e){return}var obj})(identifier,callback)(theme))),themeColor=withTheme(((theme,colorType,colorSubtype="main",override)=>override||(colorType?getValueFromTheme(`colors.${[colorType]}.${[colorSubtype]}`)({theme:theme}):getValueFromTheme("colors.tint.level1")({theme:theme})))),breakpoint=withTheme(((theme,type,variant)=>{const breakpointFunc=getValueFromTheme(`breakpoints.${[variant]}`)({theme:theme});return breakpointFunc&&breakpointFunc(type)})),generateCSSFromTypography=({color:color,fontWeight:fontWeight,fontSize:fontSize,letterSpacing:letterSpacing,lineHeight:lineHeight,marginBottom:marginBottom},gutterBottom)=>styled_components_browser_esm.c`
  color: ${color};
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  letter-spacing: ${letterSpacing};
  line-height: ${lineHeight};
  margin-bottom: ${"number"==typeof gutterBottom?`${gutterBottom}px`:marginBottom};
`,getTypographyFromTheme=()=>({as:asProp="p",gutterBottom:gutterBottom,styleAs:styleAs,theme:theme})=>{const styles=getValueFromTheme(`typography.${[styleAs||asProp]}`)({theme:theme});if(!styles)return"";const{breakpoints:breakpoints}=styles,otherProps=__rest(styles,["breakpoints"]);return styled_components_browser_esm.c`
      ${generateCSSFromTypography(otherProps,gutterBottom)}
      ${()=>breakpoints?Object.entries(breakpoints).map((([breakpointFromTypography,typoStyles])=>styled_components_browser_esm.c`
                @media screen and ${breakpoint("min-width",breakpointFromTypography)} {
                  ${generateCSSFromTypography(typoStyles||{},gutterBottom)}
                }
              `)):""}
    `},srOnlyStyle=(withTheme(((theme,element,property,breakpointRule)=>{const rules=getValueFromTheme(`typography.${[element]}`)({theme:theme});return breakpointRule?rules.breakpoints[breakpointRule]?rules.breakpoints[breakpointRule][property]:"":rules[property]})),styled_components_browser_esm.c`
  border-width: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`),svgFill=withTheme(((theme,color)=>{const fill="function"==typeof color?color({theme:theme}):color;return styled_components_browser_esm.c`
    & svg {
      circle,
      rect,
      polygon,
      path {
        fill: ${fill};
      }
    }
  `})),themeSpacing=(withTheme(((theme,animateLoading=!0)=>{const animation=styled_components_browser_esm.e`
      0% {
        background-color: ${themeColor("tint","level3")({theme:theme})};
      }

      50% {
        background-color: ${themeColor("tint","level4")({theme:theme})};
      }

      100% {
        background-color: ${themeColor("tint","level3")({theme:theme})};
      }
    `;return animateLoading?styled_components_browser_esm.c`
        animation: ${animation} 2s ease-in-out infinite;
      `:styled_components_browser_esm.c`
        background-color: ${themeColor("tint","level4")({theme:theme})};
//# sourceMappingURL=vendors~main.2b8a1704.iframe.bundle.js.map