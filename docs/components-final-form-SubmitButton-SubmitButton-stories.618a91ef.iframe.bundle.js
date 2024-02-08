"use strict";(self.webpackChunk_amsterdam_amsterdam_react_final_form=self.webpackChunk_amsterdam_amsterdam_react_final_form||[]).push([[412],{"./src/components/final-form/SubmitButton/SubmitButton.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},__namedExportsOrder:function(){return __namedExportsOrder}});var _SubmitButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/final-form/SubmitButton/SubmitButton.tsx"),_TextField_TextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/final-form/TextField/TextField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Button/Submit button",component:_SubmitButton__WEBPACK_IMPORTED_MODULE_0__.c};const Example=(args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextField_TextField__WEBPACK_IMPORTED_MODULE_1__.c,{name:"foo",label:"Some field"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SubmitButton__WEBPACK_IMPORTED_MODULE_0__.c,{...args})]})).bind({});Example.args={label:"Save"},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'args => <>\n    <TextField name="foo" label="Some field" />\n    <SubmitButton {...args} />\n  </>',...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"./src/components/final-form/SubmitButton/SubmitButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var react_final_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-final-form/dist/react-final-form.es.js"),_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Spinner/Spinner.js"),lodash_isempty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash.isempty/index.js"),lodash_isempty__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_2__),_unbound_UnboundButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/unbound/UnboundButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SubmitButton=_ref=>{let{onClick:onClick,label:label,...otherProps}=_ref;const{submitting:submitting,invalid:invalid,touched:touched}=(0,react_final_form__WEBPACK_IMPORTED_MODULE_1__.sr)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_unbound_UnboundButton__WEBPACK_IMPORTED_MODULE_3__.c,{type:"submit",icon:submitting?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_5__.c,{}):void 0,variant:"secondary",disabled:submitting||invalid||lodash_isempty__WEBPACK_IMPORTED_MODULE_2___default()(touched),"data-testid":"submit",...otherProps,children:label})};SubmitButton.displayName="SubmitButton",__webpack_exports__.c=SubmitButton},"./src/components/final-form/TextField/TextField.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var react_final_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-final-form/dist/react-final-form.es.js"),_unbound_UnboundTextField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/unbound/UnboundTextField.tsx"),_validators_composeValidation__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/validators/composeValidation.ts"),_validators_isRequired__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/validators/isRequired.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TextField=_ref=>{let{name:name,label:label,validate:validate,isRequired:isRequired,...otherProps}=_ref;const{meta:meta,input:input}=(0,react_final_form__WEBPACK_IMPORTED_MODULE_1__.m4)(name,{type:"text",validate:(0,_validators_composeValidation__WEBPACK_IMPORTED_MODULE_4__.u)([isRequired&&(0,_validators_isRequired__WEBPACK_IMPORTED_MODULE_5__.U)(),validate])});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_unbound_UnboundTextField__WEBPACK_IMPORTED_MODULE_2__.c,{label:label,error:meta.touched&&meta.error,...input,...otherProps})};TextField.displayName="TextField",__webpack_exports__.c=TextField},"./src/components/layout/responsiveProps.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Y:function(){return responsiveProps}});var _amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const breakPoints=["mobileS","mobileM","mobileL","tabletS","tabletM","laptop","laptopM","laptopL","desktop","desktopL"],responsiveProps=(props,map)=>{const nonResponsiveRules=Object.entries(map).filter((_ref=>{let[key]=_ref;return!(obj=>{if("object"!=typeof obj)return!1;const keys=Object.keys(obj);for(const breakPoint of breakPoints)if(keys.includes(breakPoint))return!0;return!1})(props[key])})).map((_ref2=>{let[key,fun]=_ref2;return fun(props[key])}));return[breakPoints.map((bp=>{const responsiveCssRules=Object.entries(map).filter((_ref3=>{let[key]=_ref3;return void 0!==props?.[key]?.[bp]})).map((_ref4=>{let[key,fun]=_ref4;return fun(props[key][bp])}));return responsiveCssRules.length>0?(bk=bp,cssRules=responsiveCssRules,styled_components__WEBPACK_IMPORTED_MODULE_0__.gV`
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
`;FormGridCell.displayName="FormGridCell";var layout_FormGridCell=FormGridCell;var unbound_ComposedField=_ref=>{let{children:children,id:id,label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,hint:hint,error:error,position:position,align:align,tooltip:tooltip}=_ref;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(hint||label)&&(0,jsx_runtime.jsxs)(layout_FormGridCell,{position:position,align:align,children:[(0,jsx_runtime.jsx)(Label_Label,{label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,htmlFor:id,tooltip:tooltip}),hint&&(0,jsx_runtime.jsx)(Hint,{children:hint})]}),(0,jsx_runtime.jsxs)(layout_FormGridCell,{position:position,align:align,rowOffset:1,children:[children,error&&(0,jsx_runtime.jsx)(FieldError,{children:error})]})]})}},"./src/components/unbound/UnboundButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var _amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Button/Button.js"),_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ComposedField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/unbound/ComposedField.tsx"),_layout_responsiveProps__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/layout/responsiveProps.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledButton=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.cp)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_4__.c)`
  margin-top: ${(0,_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_5__.Qn)(1)};
  
  ${props=>(0,_layout_responsiveProps__WEBPACK_IMPORTED_MODULE_6__.Y)(props,{alignedHorizontally:unit=>styled_components__WEBPACK_IMPORTED_MODULE_3__.gV`margin-top: ${(0,_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_5__.Qn)(unit?-1:1)};`})}
`,UnboundButton=_ref=>{let{position:position,align:align,...restProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ComposedField__WEBPACK_IMPORTED_MODULE_1__.c,{position:position,align:align,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledButton,{...restProps})})})};UnboundButton.displayName="UnboundButton",__webpack_exports__.c=UnboundButton},"./src/components/unbound/UnboundTextField.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/react/index.js");var _amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Input/Input.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ComposedField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/unbound/ComposedField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.cp)(_amsterdam_asc_ui__WEBPACK_IMPORTED_MODULE_4__.c)`
  min-height: ${props=>"time"===props.type?"40px":"auto"};
`,UnboundTextField=_ref=>{let{label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,hint:hint,error:error,position:position,align:align,tooltip:tooltip,...otherProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ComposedField__WEBPACK_IMPORTED_MODULE_1__.c,{id:otherProps.id??otherProps.name,label:label,extraLabel:extraLabel,extraLabelAlign:extraLabelAlign,hint:hint,error:error,position:position,align:align,tooltip:tooltip,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledInput,{error:!!error,id:otherProps.id??otherProps.name,"data-testid":otherProps.id??otherProps.name,...otherProps})})};UnboundTextField.displayName="UnboundTextField",__webpack_exports__.c=UnboundTextField},"./src/validators/composeValidation.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return composeValidation}});const composeValidation=validators=>function(){for(var _len=arguments.length,validators=new Array(_len),_key=0;_key<_len;_key++)validators[_key]=arguments[_key];return(value,allValues,meta)=>{for(const validator of validators){const result=validator(value,allValues,meta);if(void 0!==result)return result}}}(...validators.filter((_=>!!_)))},"./src/validators/isRequired.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return isRequired}});const isRequired=function(){let message=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Dit veld is verplicht";return value=>Array.isArray(value)&&0===value.length||null==value?message:void 0}}}]);
//# sourceMappingURL=components-final-form-SubmitButton-SubmitButton-stories.618a91ef.iframe.bundle.js.map