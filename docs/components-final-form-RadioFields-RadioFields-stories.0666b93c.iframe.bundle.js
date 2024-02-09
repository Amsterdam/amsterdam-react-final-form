"use strict";(self.webpackChunk_amsterdam_amsterdam_react_final_form=self.webpackChunk_amsterdam_amsterdam_react_final_form||[]).push([[760],{"./node_modules/@amsterdam/asc-assets/es/icons/Info.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.c=function SvgInfo(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",Object.assign({viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zm0 24C8.5 24 4 19.5 4 14S8.5 4 14 4s10 4.5 10 10-4.5 10-10 10zM13 9h2V7h-2v2zm0 12h2V11h-2v10z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{OO:function(){return CheckboxIconStyle},i:function(){return CheckboxWrapperStyle}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");__webpack_exports__.cp=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.input.attrs({type:"checkbox"})`
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
`},"./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _IconStyle__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js");__webpack_exports__.c=_IconStyle__WEBPACK_IMPORTED_MODULE_0__.c},"./node_modules/@amsterdam/asc-ui/es/components/Icon/IconStyle.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w:function(){return defaultProps}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const defaultProps={size:20,padding:0,rotate:0},IconStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.span.withConfig({shouldForwardProp:(prop,defaultValidatorFn)=>!["size","rotate","padding","inline","color"].includes(prop)&&defaultValidatorFn(prop)})`
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
`;__webpack_exports__.c=IconStyle},"./node_modules/@amsterdam/asc-ui/es/components/Label/Label.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_LabelStyle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js"),_utils_hooks_usePassPropsToChildren__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js"),_LabelContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Label(_a){var{children:childrenProps,label:label,disabled:disabled,position:position,noActiveState:noActiveState}=_a,otherProps=__rest(_a,["children","label","disabled","position","noActiveState"]);const[active,setActive]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),{children:children}=(0,_utils_hooks_usePassPropsToChildren__WEBPACK_IMPORTED_MODULE_2__.c)(childrenProps,{disabled:disabled}),activeState=!noActiveState&&active,value=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({active:active,setActive:setActive})),[active]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelContext__WEBPACK_IMPORTED_MODULE_3__.c.Provider,Object.assign({value:value},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_LabelStyle__WEBPACK_IMPORTED_MODULE_4__.c,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,position:position}),{active:activeState},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LabelStyle__WEBPACK_IMPORTED_MODULE_4__.w,Object.assign({position:position},{children:label})),children]}))}))}Label.defaultProps={noActiveState:!1},__webpack_exports__.c=Label},"./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const LabelContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({active:!1,setActive:()=>{}});__webpack_exports__.c=LabelContext},"./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{w:function(){return LabelTextStyle}});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js");const LabelStyle=styled_components__WEBPACK_IMPORTED_MODULE_0__.cp.label`
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
`;__webpack_exports__.c=LabelStyle},"./node_modules/@amsterdam/asc-ui/es/components/Radio/Radio.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return Radio_Radio}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const RadioStyle=styled_components_browser_esm.cp.input.attrs({type:"radio"})`
  cursor: inherit;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  left: 4px;
  top: 4px;
  outline-width: 10px;
`,RadioCircleStyle=styled_components_browser_esm.cp.span`
  width: 24px;
  height: 24px;
  color: ${(0,themeUtils.oR)("tint","level5")};
  background-color: ${(0,themeUtils.oR)("tint","level1")};
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
    background-color: ${(0,themeUtils.oR)("tint","level7")};
    opacity: 0;
    z-index: 1;
    ${({checked:checked})=>checked&&styled_components_browser_esm.gV`
        opacity: 1;
      `}
  }

  ${({error:error,checked:checked,disabled:disabled,focus:focus})=>error&&!checked&&!disabled&&!focus&&styled_components_browser_esm.gV`
      border-width: 2px;
      color: red;
    `}
`,RadioWrapperStyle=styled_components_browser_esm.cp.span`
  position: relative;
  display: inline-flex;
  user-select: none;
  vertical-align: middle;
  flex-shrink: 0; /* IE11 fix */
  padding: ${(0,themeUtils.Qn)(1)};
  margin-bottom: 1px;
  margin-right: ${(0,themeUtils.Qn)(2)};

  input:focus ~ span {
    display: inline-block;
  }

  ${({disabled:disabled})=>disabled&&styled_components_browser_esm.gV`
      pointer-events: none;
    `}

  ${({checked:checked,disabled:disabled,focus:focus})=>!checked&&!disabled&&!focus&&styled_components_browser_esm.gV`
      &:hover ${RadioCircleStyle} {
        border: 2px solid;
        color: ${(0,themeUtils.oR)("tint","level7")};
      }
    `}
`;var Radio_RadioStyle=RadioStyle,RadioContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js"),LabelContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Radio_Radio=(0,react.forwardRef)(((_a,ref)=>{var{className:className,onChange:onChange,disabled:disabled,id:id,checked:defaultChecked,error:errorProp,value:value}=_a,otherProps=__rest(_a,["className","onChange","disabled","id","checked","error","value"]);const[focus,setFocus]=(0,react.useState)(!1),{setChecked:setChecked,checked:checkedProp,name:name,error:errorGroup}=(0,react.useContext)(RadioContext.c),{setActive:setActive}=(0,react.useContext)(LabelContext.c),checked=checkedProp===id,error=errorProp||errorGroup||!1;return(0,react.useEffect)((()=>{setActive(checked)}),[checked,setActive]),(0,react.useEffect)((()=>{defaultChecked&&setChecked(id)}),[id,defaultChecked,setChecked]),(0,jsx_runtime.jsxs)(RadioWrapperStyle,Object.assign({},{focus:focus,error:error,className:className,disabled:disabled,checked:checked},{"aria-disabled":disabled},{children:[(0,jsx_runtime.jsx)(Radio_RadioStyle,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,id:id,name:name,value:value,checked:checked,ref:ref}),{onFocus:()=>{setFocus(!0)},onBlur:()=>setFocus(!1),onChange:e=>{onChange&&onChange(e),setChecked(e.target.id)}})),(0,jsx_runtime.jsx)(RadioCircleStyle,Object.assign({},{error:error,disabled:disabled,focus:focus,checked:checked}))]}))}))},"./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){const defaultValue={checked:"",setChecked:()=>{},name:void 0,error:!1},RadioContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(defaultValue);__webpack_exports__.c=RadioContext},"./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioGroup.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return Radio_RadioGroup}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),usePassPropsToChildren=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),LabelStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),RadioGroupStyle=styled_components_browser_esm.cp.div`
  display: flex;
  flex-direction: ${({horizontal:horizontal})=>horizontal?"row":"column"};
  ${({horizontal:horizontal})=>horizontal&&styled_components_browser_esm.gV`
      ${LabelStyle.c} {
        margin-right: ${(0,themeUtils.Qn)(4)};
      }
    `}
`,RadioContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Radio_RadioGroup=function RadioGroup(_a){var{disabled:disabled,error:error,name:name,horizontal:horizontal,children:childrenProps}=_a,otherProps=__rest(_a,["disabled","error","name","horizontal","children"]);const[checked,setChecked]=(0,react.useState)(""),{children:children}=(0,usePassPropsToChildren.c)(childrenProps,{disabled:disabled}),value=(0,react.useMemo)((()=>({checked:checked,setChecked:setChecked,name:name,error:error})),[checked,name,error]);return(0,jsx_runtime.jsx)(RadioContext.c.Provider,Object.assign({value:value},{children:(0,jsx_runtime.jsx)(RadioGroupStyle,Object.assign({horizontal:horizontal},otherProps,{children:disabled?children:childrenProps}))}))}},"./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");__webpack_exports__.c=(childrenProps,propsOrCallback)=>({children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childrenProps,((child,index)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,"function"==typeof propsOrCallback?propsOrCallback(index):propsOrCallback)))})},"./src/components/final-form/RadioFields/RadioFields.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:function(){return Horizontal},WithError:function(){return WithError},WithHint:function(){return WithHint},WithLabel:function(){return WithLabel},WithoutLabel:function(){return WithoutLabel},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _RadioFields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/final-form/RadioFields/RadioFields.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"RadioFields"};const WithLabel=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RadioFields__WEBPACK_IMPORTED_MODULE_1__.c,{name:"myFieldName",label:"foo",options:{foo:"Foo",bar:"Bar"}});WithLabel.displayName="WithLabel";const WithHint=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RadioFields__WEBPACK_IMPORTED_MODULE_1__.c,{name:"myFieldName",label:"foo",hint:"Nullam quis risus eget urna mollis ornare vel eu leo.",options:{foo:"Foo",bar:"Bar"}});WithHint.displayName="WithHint";const WithoutLabel=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RadioFields__WEBPACK_IMPORTED_MODULE_1__.c,{name:"myFieldName",options:{foo:"Foo",bar:"Bar"}});WithoutLabel.displayName="WithoutLabel";const Horizontal=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RadioFields__WEBPACK_IMPORTED_MODULE_1__.c,{label:"Foo",horizontal:!0,name:"myFieldName",options:{foo:"Foo",bar:"Bar"}});Horizontal.displayName="Horizontal";const WithError=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_RadioFields__WEBPACK_IMPORTED_MODULE_1__.c,{name:"myFieldName",options:{foo:"Foo",bar:"Bar"},validate:()=>"Some error occurred"});WithError.displayName="WithError",WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"() => <RadioFields name='myFieldName' label='foo' options={{\n  foo: \"Foo\",\n  bar: \"Bar\"\n}} />",...WithLabel.parameters?.docs?.source}}},WithHint.parameters={...WithHint.parameters,docs:{...WithHint.parameters?.docs,source:{originalSource:"() => <RadioFields name='myFieldName' label='foo' hint='Nullam quis risus eget urna mollis ornare vel eu leo.' options={{\n  foo: \"Foo\",\n  bar: \"Bar\"\n}} />",...WithHint.parameters?.docs?.source}}},WithoutLabel.parameters={...WithoutLabel.parameters,docs:{...WithoutLabel.parameters?.docs,source:{originalSource:'() => <RadioFields name=\'myFieldName\' options={{\n  foo: "Foo",\n  bar: "Bar"\n}} />',...WithoutLabel.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"() => <RadioFields label='Foo' horizontal={true} name='myFieldName' options={{\n  foo: \"Foo\",\n  bar: \"Bar\"\n}} />",...Horizontal.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:'() => <RadioFields name=\'myFieldName\' options={{\n  foo: "Foo",\n  bar: "Bar"\n}} validate={() => "Some error occurred"} />',...WithError.parameters?.docs?.source}}};const __namedExportsOrder=["WithLabel","WithHint","WithoutLabel","Horizontal","WithError"]},"./src/components/final-form/RadioFields/RadioFields.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var react_final_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-final-form/dist/react-final-form.es.js"),_unbound_UnboundRadioFields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/unbound/UnboundRadioFields.tsx"),_validators_isRequired__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/validators/isRequired.ts"),_validators_composeValidation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/validators/composeValidation.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioFields=_ref=>{let{name:name,isRequired:isRequired,validate:validate,...restProps}=_ref;const{input:input,meta:meta}=(0,react_final_form__WEBPACK_IMPORTED_MODULE_1__.m4)(name,{validate:(0,_validators_composeValidation__WEBPACK_IMPORTED_MODULE_4__.u)([isRequired&&(0,_validators_isRequired__WEBPACK_IMPORTED_MODULE_5__.U)(),validate])});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_unbound_UnboundRadioFields__WEBPACK_IMPORTED_MODULE_2__.c,{error:meta.dirty&&meta.error,...input,...restProps})};RadioFields.displayName="RadioFields",__webpack_exports__.c=RadioFields},"./src/components/layout/responsiveProps.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return responsiveProps}});var _amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const breakPoints=["mobileS","mobileM","mobileL","tabletS","tabletM","laptop","laptopM","laptopL","desktop","desktopL"],responsiveProps=(props,map)=>{const nonResponsiveRules=Object.entries(map).filter((_ref=>{let[key]=_ref;return!(obj=>{if("object"!=typeof obj)return!1;const keys=Object.keys(obj);for(const breakPoint of breakPoints)if(keys.includes(breakPoint))return!0;return!1})(props[key])})).map((_ref2=>{let[key,fun]=_ref2;return fun(props[key])}));return[breakPoints.map((bp=>{const responsiveCssRules=Object.entries(map).filter((_ref3=>{let[key]=_ref3;return void 0!==props?.[key]?.[bp]})).map((_ref4=>{let[key,fun]=_ref4;return fun(props[key][bp])}));return responsiveCssRules.length>0?(bk=bp,cssRules=responsiveCssRules,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
  @media screen and ${(0,_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_1__.eK)("min-width",bk)} {
    ${cssRules}
  }
`):void 0;var bk,cssRules})).filter((_=>void 0!==_)),...nonResponsiveRules]}},"./src/components/unbound/ComposedField.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return unbound_ComposedField}});__webpack_require__("./node_modules/react/index.js");var themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),Label=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/Label.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Icon=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Icon/Icon.js"),Info=__webpack_require__("./node_modules/@amsterdam/asc-assets/es/icons/Info.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Wrap=styled_components_browser_esm.cp.div`
  position: relative;
  display: inline-block;
  cursor: help;
  margin-left: ${(0,themeUtils.Qn)(2)} !important;
`,StyledTooltipText=styled_components_browser_esm.cp.span`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  z-index: 100;
  white-space: normal;
  width: 250px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #fff;
  text-align: center;
  font-size: 14px;
  border-radius: 6px;
  padding: ${(0,themeUtils.Qn)(2)};
  bottom: 100%;
  left: 50%;
  margin-left: -125px !important;
  transition: opacity 0.3s;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
  ${Wrap}:hover & {
    visibility: visible;
    opacity: 1;
  }
`,InfoTooltip=_ref=>{let{text:text}=_ref;return(0,jsx_runtime.jsxs)(Wrap,{children:[(0,jsx_runtime.jsx)(Icon.c,{size:18,children:(0,jsx_runtime.jsx)(Info.c,{})}),(0,jsx_runtime.jsx)(StyledTooltipText,{children:text})]})};InfoTooltip.displayName="InfoTooltip";var utils_InfoTooltip=InfoTooltip;const style=styled_components_browser_esm.gV`
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;

  span {
    margin: ${(0,themeUtils.Qn)(1)} 0;
    align-items: center;
    display: flex;
  }
`,FlexWrap=styled_components_browser_esm.cp.div`
  display: flex;
  justify-content: ${_ref=>{let{extraLabelAlign:extraLabelAlign}=_ref;return"right"===extraLabelAlign?"space-between":"flex-start"}}
`,Left=styled_components_browser_esm.cp.div`
  flex-grow: 0;
  flex-shrink: 0;
  white-space: nowrap;
  align-self: center;
  margin-right: ${(0,themeUtils.Qn)(2)};
`,Right=styled_components_browser_esm.cp.div`
  margin: ${(0,themeUtils.Qn)(1)} 0;
`,StyledLabel=(0,styled_components_browser_esm.cp)(Label.c)`
  ${style}
`;StyledLabel.displayName="StyledLabel";const Label_Label=_ref2=>{let{label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign="left",htmlFor:htmlFor,children:children,tooltip:tooltip}=_ref2;return void 0!==label?extraLabel?(0,jsx_runtime.jsxs)(FlexWrap,{extraLabelAlign:extraLabelAlign,children:[(0,jsx_runtime.jsx)(Left,{children:(0,jsx_runtime.jsx)(StyledLabel,{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label,tooltip&&(0,jsx_runtime.jsx)(utils_InfoTooltip,{text:tooltip})]}),htmlFor:htmlFor,position:"top",align:"flex-start",children:children})}),"right"===extraLabelAlign?(0,jsx_runtime.jsx)(Right,{children:extraLabel}):(0,jsx_runtime.jsx)(Left,{children:extraLabel})]}):(0,jsx_runtime.jsx)(StyledLabel,{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label,tooltip&&(0,jsx_runtime.jsx)(utils_InfoTooltip,{text:tooltip})]}),htmlFor:htmlFor,position:"top",align:"flex-start",children:children}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children})},Hint=styled_components_browser_esm.cp.p`
  color: ${(0,themeUtils.oR)("tint","level4")};
  font-size: ${(0,themeUtils.Qn)(4)};
  margin: 0;  
  line-height: 22px;
  font-weight: normal;
`,FieldError=styled_components_browser_esm.cp.div`
  line-height: 25px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  
  margin-top: ${(0,themeUtils.Qn)(2)};
  color: ${(0,themeUtils.oR)("support","invalid")}
`;FieldError.displayName="FieldError";var responsiveProps=__webpack_require__("./src/components/layout/responsiveProps.ts");const FormGridCell=styled_components_browser_esm.cp.div`

  margin: ${(0,themeUtils.Qn)(1)} ${(0,themeUtils.Qn)(2)};
  ${_ref=>{let{rowOffset:rowOffset}=_ref;return void 0!==rowOffset&&styled_components_browser_esm.gV`
    display: flex;
    flex-direction: column;
    margin-bottom: ${(0,themeUtils.Qn)(5)};`}}

  align-self: ${_ref2=>{let{rowOffset:rowOffset}=_ref2;return void 0===rowOffset?"end":"initial"}};
  -ms-grid-row-align: ${_ref3=>{let{rowOffset:rowOffset}=_ref3;return void 0===rowOffset?"end":"initial"}};

  ${props=>(0,responsiveProps.Y)(props,{align:unit=>styled_components_browser_esm.gV`text-align: ${unit};`,position:unit=>((position,rowOffset)=>{const parts=[];return void 0===position||(void 0!==position.row&&parts.push(styled_components_browser_esm.gV`
      grid-row-start: ${2*position.row+1+rowOffset};
      -ms-grid-row: ${2*position.row+1+rowOffset};
    `),position.rowSpan&&rowOffset&&parts.push(styled_components_browser_esm.gV`
      grid-row-end: span ${2*position.rowSpan-1};
      -ms-grid-row-span: ${2*position.rowSpan-1};
    `),void 0!==position.column&&parts.push(styled_components_browser_esm.gV`
      grid-column-start: ${position.column+1};
      -ms-grid-column: ${position.column+1};
    `),void 0!==position.columnSpan&&parts.push(styled_components_browser_esm.gV`
      grid-column-end: span ${position.columnSpan};
      -ms-grid-column-span: ${position.columnSpan};
    `)),parts})(unit,props.rowOffset??0)})}
`;FormGridCell.displayName="FormGridCell";var layout_FormGridCell=FormGridCell;var unbound_ComposedField=_ref=>{let{children:children,id:id,label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,hint:hint,error:error,position:position,align:align,tooltip:tooltip}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(hint||label)&&(0,jsx_runtime.jsxs)(layout_FormGridCell,{position:position,align:align,children:[(0,jsx_runtime.jsx)(Label_Label,{label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,htmlFor:id,tooltip:tooltip}),hint&&(0,jsx_runtime.jsx)(Hint,{children:hint})]}),(0,jsx_runtime.jsxs)(layout_FormGridCell,{position:position,align:align,rowOffset:1,children:[children,error&&(0,jsx_runtime.jsx)(FieldError,{children:error})]})]})}},"./src/components/unbound/UnboundRadioFields.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioGroup.js"),_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/Label.js"),_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/Radio.js"),_ComposedField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/unbound/ComposedField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UnboundRadioFields=_ref=>{let{name:name,horizontal:horizontal,label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,hint:hint,error:error,position:position,align:align,options:options,value:value,onChange:onChange,tooltip:tooltip,...restProps}=_ref;const handleChange=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{onChange&&onChange(e.target.value)}),[onChange]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ComposedField__WEBPACK_IMPORTED_MODULE_1__.c,{label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,hint:hint,error:error,position:position,align:align,tooltip:tooltip,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_3__.c,{name:name,horizontal:horizontal,children:Object.entries(options).map((_ref2=>{let[key,label]=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_4__.c,{htmlFor:`${name}_${key}`,label:label,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_5__.c,{...restProps,onChange:handleChange,error:!!error,id:`${name}_${key}`,"data-testid":key,name:name,value:key,checked:value===key})},key)}))})})};UnboundRadioFields.displayName="UnboundRadioFields",__webpack_exports__.c=react__WEBPACK_IMPORTED_MODULE_0__.memo(UnboundRadioFields)},"./src/validators/composeValidation.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return composeValidation}});const composeValidation=validators=>function(){for(var _len=arguments.length,validators=new Array(_len),_key=0;_key<_len;_key++)validators[_key]=arguments[_key];return(value,allValues,meta)=>{for(const validator of validators){const result=validator(value,allValues,meta);if(void 0!==result)return result}}}(...validators.filter((_=>!!_)))},"./src/validators/isRequired.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return isRequired}});const isRequired=function(){let message=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Dit veld is verplicht";return value=>Array.isArray(value)&&0===value.length||null==value?message:void 0}}}]);
//# sourceMappingURL=components-final-form-RadioFields-RadioFields-stories.0666b93c.iframe.bundle.js.map