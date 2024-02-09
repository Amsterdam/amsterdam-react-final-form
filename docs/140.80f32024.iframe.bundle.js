(self.webpackChunk_amsterdam_amsterdam_react_final_form=self.webpackChunk_amsterdam_amsterdam_react_final_form||[]).push([[140],{"./node_modules/@amsterdam/asc-assets/es/icons/Info.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.c=function SvgInfo(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",Object.assign({viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zm0 24C8.5 24 4 19.5 4 14S8.5 4 14 4s10 4.5 10 10-4.5 10-10 10zM13 9h2V7h-2v2zm0 12h2V11h-2v10z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Button_Button}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),IconStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js"),Icon=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultProps_size=30,getButtonHeight=theme=>(0,themeUtils.Qn)(11)({theme:theme}),ArrowRight=styled_components_browser_esm.cp.div`
  position: relative;
  top: 0;
  right: -15px;
  width: 0;
  height: 0;
  border: 22px solid rgba(255, 255, 255, 0);
  border-left: 15px solid ${(0,themeUtils.oR)("secondary")};
  border-right: 0;
  ${(0,polished_esm.Uv)("border-color","0.1s ease-in-out")}
`,IconLeft=(0,styled_components_browser_esm.cp)(Icon.c)`
  margin-right: 10px;
`,IconRight=(0,styled_components_browser_esm.cp)(Icon.c)`
  margin-left: 10px;
`;var Button_ButtonStyle=styled_components_browser_esm.cp.button`
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
  padding: ${({size:sizeProp,theme:theme})=>sizeProp?"0":(0,themeUtils.Qn)(3,4)({theme:theme})};
  ${({size:sizeProp,square:square})=>(sizeProp||square)&&styled_components_browser_esm.gV`
      display: flex;
      align-items: center;
      justify-content: center;
      ${(0,polished_esm.eC)(sizeProp||defaultProps_size)}// width and height
    `}
  ${(0,polished_esm.Uv)(["color","background-color"],"0.1s ease-in-out")}
  ${({theme:theme,variant:variant,color:color})=>{switch(variant){case"primary":return styled_components_browser_esm.gV`
          min-width: 90px;
          background-color: ${(0,themeUtils.oR)("primary")};
          color: ${(0,polished_esm.c$)((0,themeUtils.oR)("primary")({theme:theme}))};
          ${(0,themeUtils.eS)((0,themeUtils.oR)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,polished_esm.sP)(.1,(0,themeUtils.oR)("primary")({theme:theme}))};
          }
        `;case"secondary":return styled_components_browser_esm.gV`
          min-width: 90px;
          background-color: ${(0,themeUtils.oR)("secondary")};
          color: ${(0,themeUtils.oR)("tint","level1")};
          ${(0,themeUtils.eS)((0,themeUtils.oR)("tint","level1"))};

          &:focus,
          &:hover {
            background-color: ${(0,polished_esm.sP)(.1,(0,themeUtils.oR)("secondary")({theme:theme}))};
          }

          ${taskflow=>taskflow&&styled_components_browser_esm.gV`
              &:not(:disabled)&:focus
                ${ArrowRight},
                &:not(:disabled)&:hover
                ${ArrowRight} {
                border-left-color: ${(0,polished_esm.sP)(.1,(0,themeUtils.oR)("secondary")({theme:theme}))};
              }
            `}
        `;case"tertiary":return styled_components_browser_esm.gV`
          min-width: 90px;
          background-color: ${(0,themeUtils.oR)("tint","level4")};
          ${(0,themeUtils.eS)((0,themeUtils.oR)("tint","level7"))};

          &:focus,
          &:hover {
            background-color: ${(0,polished_esm.sP)(.1,(0,themeUtils.oR)("tint","level4")({theme:theme}))};
          }
        `;case"primaryInverted":return styled_components_browser_esm.gV`
          min-width: 90px;
          color: ${(0,themeUtils.oR)("primary")};
          border: 1px solid ${(0,themeUtils.oR)("primary")};
          background-color: ${(0,themeUtils.oR)("tint","level1")};
          ${(0,themeUtils.eS)((0,themeUtils.oR)("primary","main"))};

          &:hover {
            outline: 1px solid ${(0,themeUtils.oR)("primary")};
          }
        `;case"textButton":return styled_components_browser_esm.gV`
          height: auto;
          padding: 0;
          align-self: baseline;
          white-space: normal;
          text-align: left;
          color: ${(0,themeUtils.oR)("primary")};
          background-color: rgba(0, 0, 0, 0);
          ${(0,themeUtils.eS)((0,themeUtils.oR)("primary","main"))};

          /* remove transition because it's async with Icon */
          ${(0,polished_esm.Uv)("color","0s")}

          &:hover {
            color: ${(0,themeUtils.oR)("secondary")};
            ${(0,themeUtils.eS)((0,themeUtils.oR)("secondary","main"))};
          }

          ${IconLeft} {
            margin-right: ${(0,themeUtils.Qn)(1)};
          }
          ${IconRight} {
            margin-left: ${(0,themeUtils.Qn)(1)};
          }
        `;case"blank":return styled_components_browser_esm.gV`
          background-color: ${(0,themeUtils.oR)("tint","level1")};
          ${(0,themeUtils.eS)((0,themeUtils.oR)("tint","level7"))};
          &:hover {
            background-color: ${(0,themeUtils.oR)("tint","level3")};
          }
        `;case"application":return styled_components_browser_esm.gV`
          border: 1px solid ${(0,themeUtils.oR)("tint","level7")};
          background-color: ${(0,themeUtils.oR)("tint","level1")};
          height: 32px;
          padding: ${(0,themeUtils.Qn)(1,2)};
          ${(0,themeUtils.eS)((0,themeUtils.oR)("tint","level7"))};
          &:hover {
            background-color: ${(0,themeUtils.oR)("tint","level4")};
          }
        `;default:return styled_components_browser_esm.gV`
          color: ${color?(0,polished_esm.c$)((0,themeUtils.oR)(color)({theme:theme})):(0,themeUtils.oR)("primary")({theme:theme})};
          ${color&&styled_components_browser_esm.gV`
            background: ${(0,themeUtils.oR)(color)};
          `}

          ${!color&&styled_components_browser_esm.gV`
            border: 1px solid ${(0,themeUtils.oR)("primary")};
          `}

        &:hover {
            background: ${color?(0,themeUtils.oR)(color,"dark")({theme:theme}):(0,themeUtils.oR)("tint","level3")({theme:theme})};
            ${!color&&styled_components_browser_esm.gV`
              outline: 1px solid ${(0,themeUtils.oR)("primary")};
            `}
          }
        `}}}
  ${styled_components_browser_esm.gV`
  &::after {
    content: '';
    display: block;
    min-height: inherit;
    font-size: 0;
  }
`} // ie fix
  ${({taskflow:taskflow})=>taskflow&&styled_components_browser_esm.gV`
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
  ${Icon.c} {
    flex-shrink: 0;
  }
  &:disabled {
    cursor: default;
    outline: none;
    border: none;
    color: ${(0,themeUtils.oR)("tint","level4")};
    background-color: ${(0,themeUtils.oR)("tint","level3")};
    ${(0,themeUtils.eS)((0,themeUtils.oR)("tint","level4"))};
    text-decoration: none;
    ${({taskflow:taskflow})=>taskflow&&styled_components_browser_esm.gV`
        ${ArrowRight} {
          border-left-color: ${(0,themeUtils.oR)("tint","level3")};
        }
      `}
    ${({variant:variant})=>variant&&"textButton"===variant&&styled_components_browser_esm.gV`
        background-color: rgba(0, 0, 0, 0);
      `}
  }
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Button_Button=(0,react.forwardRef)(((_a,ref)=>{var{children:children,iconLeft:iconLeft,iconRight:iconRight,icon:icon,iconSize:iconSize,taskflow:taskflow}=_a,otherProps=__rest(_a,["children","iconLeft","iconRight","icon","iconSize","taskflow"]);const iconProps={size:iconSize||IconStyle.w.size};return(0,jsx_runtime.jsxs)(Button_ButtonStyle,Object.assign({ref:ref},otherProps,{taskflow:taskflow},{children:[iconLeft&&(0,jsx_runtime.jsx)(IconLeft,Object.assign({},iconProps,{children:iconLeft})),icon?(0,jsx_runtime.jsx)(Icon.c,Object.assign({},iconProps,{children:icon})):children,iconRight&&(0,jsx_runtime.jsx)(IconRight,Object.assign({},iconProps,{children:iconRight})),taskflow&&(0,jsx_runtime.jsx)(ArrowRight,{})]}))}))},"./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{OO:function(){return CheckboxIconStyle},i:function(){return CheckboxWrapperStyle}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");__webpack_exports__.cp=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.input.attrs({type:"checkbox"})`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 6px;
  top: 6px;
`;const CheckboxIconStyle=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.cp)(_Icon__WEBPACK_IMPORTED_MODULE_1__.c)`
  display: flex;
  border-width: 1px;
  border-style: solid;
  width: 22px;
  height: 22px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.oR)("tint","level1")};
  transition: background-color 0.2s ease-in-out;
  pointer-events: none;
  ${({checked:checked,indeterminate:indeterminate})=>(checked||indeterminate)&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.oR)("tint","level7")};
      background-color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.oR)("tint","level7")};
      ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.eS)((0,_utils__WEBPACK_IMPORTED_MODULE_2__.oR)("tint","level1"))};
    `};
`,CheckboxWrapperStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.span`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  margin-bottom: 1px;
  padding: 6px;
  flex-shrink: 0; /* IE11 fix */
  color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.oR)("tint","level5")};
  ${({disabled:disabled})=>disabled&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      pointer-events: none;
    `}
  ${({checked:checked,disabled:disabled})=>!checked&&!disabled&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      &:hover {
        color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_2__.oR)("tint","level7")};

        ${CheckboxIconStyle} {
          outline-style: solid;
          outline-width: 1px;
        }
      }
    `}
    ${({error:error,checked:checked,disabled:disabled})=>error&&!checked&&!disabled&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      ${CheckboxIconStyle} {
        border-color: red;
        outline: 1px solid red;
      }
    `}
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _IconStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");__webpack_exports__.c=_IconStyle__WEBPACK_IMPORTED_MODULE_0__.c},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{w:function(){return defaultProps}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultProps={size:20,padding:0,rotate:0},IconStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.span.withConfig({shouldForwardProp:(prop,defaultValidatorFn)=>!["size","rotate","padding","inline","color"].includes(prop)&&defaultValidatorFn(prop)})`
  display: ${({inline:inline})=>inline?"inline-flex":"flex"};
  ${({iconUrl:iconUrl})=>iconUrl&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      background-image: url(${iconUrl});
    `}
  ${({size:size=defaultProps.size,padding:padding=defaultProps.padding})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
    width: ${size-2*padding}px;
    height: ${size-2*padding}px;
  `}
  ${({padding:padding})=>padding&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      padding: ${padding}px;
    `};
  box-sizing: content-box;
  ${({rotate:rotate=defaultProps.rotate})=>`transform: rotate(${rotate}deg)`};

  & > svg {
    ${({size:size=defaultProps.size,padding:padding=defaultProps.padding})=>styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      width: ${size-2*padding}px;
      height: ${size-2*padding}px;
    `}
  }

  ${({color:color})=>color&&(0,_utils__WEBPACK_IMPORTED_MODULE_1__.eS)(color)};
`;__webpack_exports__.c=IconStyle},"./node_modules/@amsterdam/asc-ui/es/components/Input/Input.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Input_Input}});var Keys,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");!function(Keys){Keys.ArrowUp="ArrowUp",Keys.ArrowDown="ArrowDown",Keys.ArrowRight="ArrowRight",Keys.ArrowLeft="ArrowLeft",Keys.Escape="Escape",Keys.Enter="Enter",Keys.Tab="Tab",Keys.Space="Space",Keys.Home="Home",Keys.End="End"}(Keys||(Keys={}));var KeyboardKeys=Keys;var hooks_useActionOnEscape=function useActionOnEscape(callback){return{onKeyDown:event=>{event.key===KeyboardKeys.Escape&&callback()}}};var Input_InputMethodsContext=(0,react.createContext)({}),InputStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Input/InputStyle.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Input_Input=(0,react.forwardRef)(((_a,externalRef)=>{var{blurOnEscape:blurOnEscape,value:value,error:error}=_a,props=__rest(_a,["blurOnEscape","value","error"]);const{onKeyDown:onKeyDown}=props,inputRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(externalRef,(()=>inputRef.current));const{onKeyDown:onKeyDownHook}=hooks_useActionOnEscape((()=>{inputRef.current&&inputRef.current.blur()}));return(0,jsx_runtime.jsx)(Input_InputMethodsContext.Consumer,{children:context=>(context.setInputRef&&context.setInputRef(inputRef),(0,jsx_runtime.jsx)(InputStyle.c,Object.assign({ref:inputRef},props,context,{onKeyDown:e=>{((e,context)=>{onKeyDown&&onKeyDown(e),blurOnEscape&&onKeyDownHook(e),context.onKeyDown&&context.onKeyDown(e)})(e,context)},error:error,value:value})))})}))},"./node_modules/@amsterdam/asc-ui/es/components/Input/InputStyle.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{u:function(){return inputCss}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_shared_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js");const inputCss=styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
  appearance: none;
  font-size: 16px;
  border: solid 1px ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oR)("tint","level5")};
  border-radius: 0;
  box-sizing: border-box;
  line-height: 18px;
  padding: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.Qn)(2)};
  width: 100%;
  height: ${_shared_constants__WEBPACK_IMPORTED_MODULE_2__.Ku}px;
  ${({error:error})=>!error&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      &:hover {
        border-color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oR)("tint","level6")};
      }
    `}

  ${({error:error})=>error&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      border-color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oR)("secondary","main")};
    `}
`,InputStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.input`
  ${inputCss}
`;__webpack_exports__.c=InputStyle},"./node_modules/@amsterdam/asc-ui/es/components/Label/Label.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_LabelStyle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js"),_utils_hooks_usePassPropsToChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js"),_LabelContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Label(_a){var{children:childrenProps,label:label,disabled:disabled,position:position,noActiveState:noActiveState}=_a,otherProps=__rest(_a,["children","label","disabled","position","noActiveState"]);const[active,setActive]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),{children:children}=(0,_utils_hooks_usePassPropsToChildren__WEBPACK_IMPORTED_MODULE_2__.c)(childrenProps,{disabled:disabled}),activeState=!noActiveState&&active,value=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({active:active,setActive:setActive})),[active]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelContext__WEBPACK_IMPORTED_MODULE_3__.c.Provider,Object.assign({value:value},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LabelStyle__WEBPACK_IMPORTED_MODULE_4__.c,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,position:position}),{active:activeState},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyle__WEBPACK_IMPORTED_MODULE_4__.w,Object.assign({position:position},{children:label})),children]}))}))}Label.defaultProps={noActiveState:!1},__webpack_exports__.c=Label},"./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";const LabelContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({active:!1,setActive:()=>{}});__webpack_exports__.c=LabelContext},"./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{w:function(){return LabelTextStyle}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js");const LabelStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.label`
  display: inline-flex;
  align-items: ${({align:align})=>align};
  vertical-align: middle;
  color: ${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.oR)("tint","level7")};
  ${({srOnly:srOnly})=>srOnly&&_utils__WEBPACK_IMPORTED_MODULE_1__.OE}
  ${({disabled:disabled})=>disabled?styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
          opacity: 0.3;
        `:styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
          cursor: pointer;
        `}
  ${({position:position})=>("top"===position||"bottom"===position)&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      flex-direction: column;
    `}
  ${({position:position})=>position&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      & ${_Checkbox__WEBPACK_IMPORTED_MODULE_2__.i} {
        padding-${position}: 12px;
      }
    `}
  
  ${({active:active})=>active&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      font-weight: 700;
    `}
`;LabelStyle.defaultProps={position:"right",align:"center"};const LabelTextStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.span`
  ${({position:position})=>"top"!==position&&"bottom"!==position&&styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
      margin: 9.2px 0; /* To align the label to a checkbox / radiobutton when having a long text. line-height is 1.15 / 18.4px (from normalize css). Margin top & bottom = lineheight / 2 */
    `}
  ${({position:position})=>"top"===position||"left"===position?styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
          order: 0;
        `:styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
          order: 1;
        `}
`;__webpack_exports__.c=LabelStyle},"./node_modules/@amsterdam/asc-ui/es/components/Spinner/Spinner.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return components_Spinner_Spinner}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Spinner=function SvgSpinner(props){return(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},props,{children:(0,jsx_runtime.jsx)("path",{d:"M50 100C22.4 99.967.033 77.6 0 50h10c0 22.091 17.909 40 40 40s40-17.909 40-40-17.909-40-40-40V0c27.614 0 50 22.386 50 50s-22.386 50-50 50z"})}))},Icon=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js");var Spinner_SpinnerStyle=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").cp.div.withConfig({shouldForwardProp:(prop,defaultValidatorFn)=>!["size","color"].includes(prop)&&defaultValidatorFn(prop)})`
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
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Spinner_Spinner(_a){var{size:size,color:color}=_a,otherProps=__rest(_a,["size","color"]);return(0,jsx_runtime.jsx)(Spinner_SpinnerStyle,Object.assign({size:size},otherProps,{children:(0,jsx_runtime.jsx)(Icon.c,Object.assign({size:size,color:color},{children:(0,jsx_runtime.jsx)(Spinner,{})}))}))}Spinner_Spinner.defaultProps={size:20};var components_Spinner_Spinner=Spinner_Spinner},"./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Ku:function(){return INPUT_SIZE}});const INPUT_SIZE=44},"./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.c=(childrenProps,propsOrCallback)=>({children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childrenProps,((child,index)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,"function"==typeof propsOrCallback?propsOrCallback(index):propsOrCallback)))})},"./node_modules/lodash.isempty/index.js":function(module,exports,__webpack_require__){module=__webpack_require__.nmd(module);var MAX_SAFE_INTEGER=9007199254740991,argsTag="[object Arguments]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",setTag="[object Set]",reIsHostCtor=/^\[object .+?Constructor\]$/,freeGlobal="object"==typeof __webpack_require__.g&&__webpack_require__.g&&__webpack_require__.g.Object===Object&&__webpack_require__.g,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal||freeSelf||Function("return this")(),freeExports=exports&&!exports.nodeType&&exports,freeModule=freeExports&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports;var uid,funcProto=Function.prototype,objectProto=Object.prototype,coreJsData=root["__core-js_shared__"],maskSrcKey=(uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||""))?"Symbol(src)_1."+uid:"",funcToString=funcProto.toString,hasOwnProperty=objectProto.hasOwnProperty,objectToString=objectProto.toString,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Buffer=moduleExports?root.Buffer:void 0,propertyIsEnumerable=objectProto.propertyIsEnumerable,nativeIsBuffer=Buffer?Buffer.isBuffer:void 0,nativeKeys=function overArg(func,transform){return function(arg){return func(transform(arg))}}(Object.keys,Object),DataView=getNative(root,"DataView"),Map=getNative(root,"Map"),Promise=getNative(root,"Promise"),Set=getNative(root,"Set"),WeakMap=getNative(root,"WeakMap"),nonEnumShadows=!propertyIsEnumerable.call({valueOf:1},"valueOf"),dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);function baseIsNative(value){if(!isObject(value)||function isMasked(func){return!!maskSrcKey&&maskSrcKey in func}(value))return!1;var pattern=isFunction(value)||function isHostObject(value){var result=!1;if(null!=value&&"function"!=typeof value.toString)try{result=!!(value+"")}catch(e){}return result}(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value))}function getNative(object,key){var value=function getValue(object,key){return null==object?void 0:object[key]}(object,key);return baseIsNative(value)?value:void 0}var getTag=function baseGetTag(value){return objectToString.call(value)};function toSource(func){if(null!=func){try{return funcToString.call(func)}catch(e){}try{return func+""}catch(e){}}return""}function isArguments(value){return function isArrayLikeObject(value){return function isObjectLike(value){return!!value&&"object"==typeof value}(value)&&isArrayLike(value)}(value)&&hasOwnProperty.call(value,"callee")&&(!propertyIsEnumerable.call(value,"callee")||objectToString.call(value)==argsTag)}(DataView&&"[object DataView]"!=getTag(new DataView(new ArrayBuffer(1)))||Map&&getTag(new Map)!=mapTag||Promise&&"[object Promise]"!=getTag(Promise.resolve())||Set&&getTag(new Set)!=setTag||WeakMap&&"[object WeakMap]"!=getTag(new WeakMap))&&(getTag=function(value){var result=objectToString.call(value),Ctor="[object Object]"==result?value.constructor:void 0,ctorString=Ctor?toSource(Ctor):void 0;if(ctorString)switch(ctorString){case dataViewCtorString:return"[object DataView]";case mapCtorString:return mapTag;case promiseCtorString:return"[object Promise]";case setCtorString:return setTag;case weakMapCtorString:return"[object WeakMap]"}return result});var isArray=Array.isArray;function isArrayLike(value){return null!=value&&function isLength(value){return"number"==typeof value&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER}(value.length)&&!isFunction(value)}var isBuffer=nativeIsBuffer||function stubFalse(){return!1};function isFunction(value){var tag=isObject(value)?objectToString.call(value):"";return tag==funcTag||tag==genTag}function isObject(value){var type=typeof value;return!!value&&("object"==type||"function"==type)}module.exports=function isEmpty(value){if(isArrayLike(value)&&(isArray(value)||"string"==typeof value||"function"==typeof value.splice||isBuffer(value)||isArguments(value)))return!value.length;var tag=getTag(value);if(tag==mapTag||tag==setTag)return!value.size;if(nonEnumShadows||function isPrototype(value){var Ctor=value&&value.constructor;return value===("function"==typeof Ctor&&Ctor.prototype||objectProto)}(value))return!nativeKeys(value).length;for(var key in value)if(hasOwnProperty.call(value,key))return!1;return!0}}}]);
//# sourceMappingURL=140.80f32024.iframe.bundle.js.map