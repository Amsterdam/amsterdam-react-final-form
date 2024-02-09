(self.webpackChunk_amsterdam_amsterdam_react_final_form=self.webpackChunk_amsterdam_amsterdam_react_final_form||[]).push([[628],{"./node_modules/@amsterdam/asc-ui/es/components/Checkbox/Checkbox.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Checkbox_Checkbox}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Indeterminate=function SvgIndeterminate(props){return(0,jsx_runtime.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",role:"img",focusable:!1},props,{children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.9 14H27v4H4.9z"})}))};var Checkmark=function SvgCheckmark(props){return(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},props,{children:(0,jsx_runtime.jsx)("path",{d:"M12.216 27.016 0 14.168l2.91-2.77 9.346 9.837L29.129 4 32 6.8z",fillRule:"evenodd"})}))},react=__webpack_require__("./node_modules/react/index.js"),LabelContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),CheckboxStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Checkbox_Checkbox=(0,react.forwardRef)(((_a,externalRef)=>{var{checked:checkedProp,className:className,onChange:onChange,disabled:disabled,error:error,indeterminate:indeterminate}=_a,otherProps=__rest(_a,["checked","className","onChange","disabled","error","indeterminate"]);const[checked,setChecked]=(0,react.useState)(!!checkedProp),{setActive:setActive}=(0,react.useContext)(LabelContext.c),ref=(0,react.useRef)(null);return(0,react.useImperativeHandle)(externalRef,(()=>ref.current)),(0,react.useEffect)((()=>{ref.current&&(ref.current.indeterminate=null!=indeterminate&&indeterminate)}),[ref,indeterminate]),(0,react.useEffect)((()=>{setActive(checked)}),[checked,setActive]),(0,react.useMemo)((()=>{setChecked(!!checkedProp)}),[checkedProp,setChecked]),(0,jsx_runtime.jsxs)(CheckboxStyle.i,Object.assign({},{className:className,disabled:disabled,checked:checked,error:error},{"aria-disabled":disabled},{children:[(0,jsx_runtime.jsxs)(CheckboxStyle.OO,Object.assign({},{disabled:disabled,checked:checked,error:error,indeterminate:indeterminate},{"data-testid":"checkboxIcon",size:15},{children:[!checked&&indeterminate&&(0,jsx_runtime.jsx)(Indeterminate,{}),checked&&(0,jsx_runtime.jsx)(Checkmark,{})]})),(0,jsx_runtime.jsx)(CheckboxStyle.cp,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,checked:checked,ref:ref}),{onChange:e=>{onChange&&onChange(e),void 0===checkedProp&&setChecked(!checked)}}))]}))}))},"./node_modules/@amsterdam/asc-ui/es/components/Radio/Radio.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Radio_Radio}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const RadioStyle=styled_components_browser_esm.cp.input.attrs({type:"radio"})`
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
`;var Radio_RadioStyle=RadioStyle,RadioContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js"),LabelContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Radio_Radio=(0,react.forwardRef)(((_a,ref)=>{var{className:className,onChange:onChange,disabled:disabled,id:id,checked:defaultChecked,error:errorProp,value:value}=_a,otherProps=__rest(_a,["className","onChange","disabled","id","checked","error","value"]);const[focus,setFocus]=(0,react.useState)(!1),{setChecked:setChecked,checked:checkedProp,name:name,error:errorGroup}=(0,react.useContext)(RadioContext.c),{setActive:setActive}=(0,react.useContext)(LabelContext.c),checked=checkedProp===id,error=errorProp||errorGroup||!1;return(0,react.useEffect)((()=>{setActive(checked)}),[checked,setActive]),(0,react.useEffect)((()=>{defaultChecked&&setChecked(id)}),[id,defaultChecked,setChecked]),(0,jsx_runtime.jsxs)(RadioWrapperStyle,Object.assign({},{focus:focus,error:error,className:className,disabled:disabled,checked:checked},{"aria-disabled":disabled},{children:[(0,jsx_runtime.jsx)(Radio_RadioStyle,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,id:id,name:name,value:value,checked:checked,ref:ref}),{onFocus:()=>{setFocus(!0)},onBlur:()=>setFocus(!1),onChange:e=>{onChange&&onChange(e),setChecked(e.target.id)}})),(0,jsx_runtime.jsx)(RadioCircleStyle,Object.assign({},{error:error,disabled:disabled,focus:focus,checked:checked}))]}))}))},"./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";const defaultValue={checked:"",setChecked:()=>{},name:void 0,error:!1},RadioContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(defaultValue);__webpack_exports__.c=RadioContext},"./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioGroup.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Radio_RadioGroup}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),usePassPropsToChildren=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/hooks/usePassPropsToChildren.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),LabelStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelStyle.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js"),RadioGroupStyle=styled_components_browser_esm.cp.div`
  display: flex;
  flex-direction: ${({horizontal:horizontal})=>horizontal?"row":"column"};
  ${({horizontal:horizontal})=>horizontal&&styled_components_browser_esm.gV`
      ${LabelStyle.c} {
        margin-right: ${(0,themeUtils.Qn)(4)};
      }
    `}
`,RadioContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Radio/RadioContext.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Radio_RadioGroup=function RadioGroup(_a){var{disabled:disabled,error:error,name:name,horizontal:horizontal,children:childrenProps}=_a,otherProps=__rest(_a,["disabled","error","name","horizontal","children"]);const[checked,setChecked]=(0,react.useState)(""),{children:children}=(0,usePassPropsToChildren.c)(childrenProps,{disabled:disabled}),value=(0,react.useMemo)((()=>({checked:checked,setChecked:setChecked,name:name,error:error})),[checked,name,error]);return(0,jsx_runtime.jsx)(RadioContext.c.Provider,Object.assign({value:value},{children:(0,jsx_runtime.jsx)(RadioGroupStyle,Object.assign({horizontal:horizontal},otherProps,{children:disabled?children:childrenProps}))}))}},"./node_modules/@amsterdam/asc-ui/es/components/Select/Select.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Select_Select}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");var FormLabelStyle_FormLabelStyle=styled_components_browser_esm.cp.label.attrs((({htmlFor:htmlFor})=>({htmlFor:htmlFor})))`
  ${({label:label})=>label&&styled_components_browser_esm.gV`
      ${({theme:theme})=>(0,themeUtils._C)()({as:"p",gutterBottom:0,theme:theme})};
    `}

  ${({srOnly:srOnly,label:label,error:error})=>(label||error)&&!srOnly&&styled_components_browser_esm.gV`
      display: block;
      padding-bottom: ${(0,themeUtils.Qn)(2)};
      font-weight: 700;
    `}

  ${({error:error})=>error&&styled_components_browser_esm.gV`
      color: ${(0,themeUtils.oR)("error","main")};
    `}

  ${({srOnly:srOnly})=>srOnly&&themeUtils.OE}
`;var ChevronDown=function SvgChevronDown(props){return(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},props,{children:(0,jsx_runtime.jsx)("path",{d:"m16 25.757-16-16 2.91-2.9L16 19.937l13.09-13.08 2.91 2.9z",fillRule:"evenodd"})}))},constants=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/shared/constants.js");const SelectWrapper=styled_components_browser_esm.cp.div`
  position: relative;
  height: ${constants.Ku}px;
  width: 100%;
`,AbsoluteContentWrapper=styled_components_browser_esm.cp.div.attrs({"aria-hidden":"true"})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 3px; /* Allows the default browser(s) default focus style to be displayed. */
  padding: 0 calc(${(0,themeUtils.Qn)(3)} - 1px); /* Match the spacing of the select element. */
  display: flex;
  align-items: center;
  pointer-events: none;
  background-color: ${(0,themeUtils.oR)("tint","level1")};
`,SelectedValue=styled_components_browser_esm.cp.div`
  margin-right: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({disabled:disabled})=>disabled&&styled_components_browser_esm.gV`
      opacity: 0.5;
    `}
`,SelectIcon=(0,styled_components_browser_esm.cp)(ChevronDown)`
  display: block;
  width: ${(0,themeUtils.Qn)(3)};
  height: ${(0,themeUtils.Qn)(3)};
  margin-left: ${(0,themeUtils.Qn)(3)};
`;var Select_SelectStyle=styled_components_browser_esm.cp.select`
  width: 100%;
  height: 100%;
  padding: ${(0,themeUtils.Qn)(2,3)};
  font-size: 1rem;
  border: 1px solid ${(0,themeUtils.oR)("tint","level5")};
  border-radius: 0;
  background-color: ${(0,themeUtils.oR)("tint","level1")};
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
    text-shadow: 0 0 0 ${(0,themeUtils.oR)("tint","level7")};
  }

  &:hover {
    ${({disabled:disabled,error:error})=>!disabled&&!error&&styled_components_browser_esm.gV`
        border: 1px solid ${(0,themeUtils.oR)("tint","level7")};
      `}
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    border: 1px solid ${(0,themeUtils.oR)("tint","level4")};
  }

  ${({error:error})=>error&&styled_components_browser_esm.gV`
      border: 1px solid ${(0,themeUtils.oR)("error","main")};
    `}
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Select_Select=(0,react.forwardRef)(((_a,externalRef)=>{var{id:id,value:value,label:label,srOnly:srOnlyProp,error:error,labelStyle:labelStyle,onChange:onChange,children:children,disabled:disabled,className:className}=_a,otherProps=__rest(_a,["id","value","label","srOnly","error","labelStyle","onChange","children","disabled","className"]);const srOnly=srOnlyProp||!1,[selectedValue,setSelectedValue]=(0,react.useState)(""),ref=(0,react.useRef)(null),updateValue=(0,react.useCallback)((select=>{const selectedOption=function getSelectedOptions(select){return select.selectedOptions?Array.from(select.selectedOptions):Array.from(select.querySelectorAll(":checked"))}(select)[0];(null==selectedOption?void 0:selectedOption.textContent)&&setSelectedValue(selectedOption.textContent)}),[]),handleChange=(0,react.useCallback)((event=>{updateValue(event.target),onChange&&onChange(event)}),[onChange,updateValue]);return(0,react.useImperativeHandle)(externalRef,(()=>ref.current)),(0,react.useEffect)((()=>{ref.current&&updateValue(ref.current)}),[ref,updateValue,value]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[label&&(0,jsx_runtime.jsx)(FormLabelStyle_FormLabelStyle,Object.assign({srOnly:srOnly,htmlFor:id,label:label,style:labelStyle},{children:label})),(0,jsx_runtime.jsxs)(SelectWrapper,Object.assign({className:className},{children:[(0,jsx_runtime.jsx)(Select_SelectStyle,Object.assign({},Object.assign(Object.assign({},otherProps),{id:id,value:value,error:error}),{disabled:disabled,error:error,ref:ref,onChange:handleChange},{children:children})),(0,jsx_runtime.jsxs)(AbsoluteContentWrapper,{children:[(0,jsx_runtime.jsx)(SelectedValue,Object.assign({"data-testid":"selectedValue",disabled:disabled},{children:selectedValue})),(0,jsx_runtime.jsx)(SelectIcon,{})]})]}))]})}))},"./node_modules/@amsterdam/asc-ui/es/components/TextArea/TextArea.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return TextArea_TextArea}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),InputStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Input/InputStyle.js");var TextArea_TextAreaStyle=styled_components_browser_esm.cp.textarea`
  ${InputStyle.u}
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var TextArea_TextArea=(0,react.forwardRef)(((_a,ref)=>{var{value:value,error:error}=_a,otherProps=__rest(_a,["value","error"]);return(0,jsx_runtime.jsx)(TextArea_TextAreaStyle,Object.assign({ref:ref,error:error,value:value},otherProps))}))},"./src/components/final-form/composed.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:function(){return Example},ExampleUsingComplexFields:function(){return ExampleUsingComplexFields},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _NumberField_NumberField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/final-form/NumberField/NumberField.tsx"),_TextAreaField_TextAreaField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/final-form/TextAreaField/TextAreaField.tsx"),_TextField_TextField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/final-form/TextField/TextField.tsx"),_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/final-form/SelectField/SelectField.tsx"),_CheckboxFields_CheckboxFields__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/final-form/CheckboxFields/CheckboxFields.tsx"),_RadioFields_RadioFields__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/final-form/RadioFields/RadioFields.tsx"),_SelectField_ComplexSelectField__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/final-form/SelectField/ComplexSelectField.tsx"),_CheckboxFields_ComplexCheckboxFields__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/final-form/CheckboxFields/ComplexCheckboxFields.tsx"),_RadioFields_ComplexRadioFields__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/final-form/RadioFields/ComplexRadioFields.tsx"),_BooleanField_BooleanField__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/components/final-form/BooleanField/BooleanField.tsx"),_SubmitButton_SubmitButton__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/components/final-form/SubmitButton/SubmitButton.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Complete form"};const Example=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_TextField_TextField__WEBPACK_IMPORTED_MODULE_3__.c,{name:"personal.firstName",label:"First name"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_TextField_TextField__WEBPACK_IMPORTED_MODULE_3__.c,{name:"personal.surname",label:"Surname",tooltip:"Text to explain certain things in a tooltip",validate:()=>"This is an example error"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_NumberField_NumberField__WEBPACK_IMPORTED_MODULE_1__.c,{name:"personal.age",label:"Age"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SelectField_SelectField__WEBPACK_IMPORTED_MODULE_4__.c,{name:"pizza.crust",options:{thick:"Thick crust",thin:"Thin crust"},label:"Crust"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_CheckboxFields_CheckboxFields__WEBPACK_IMPORTED_MODULE_5__.c,{name:"pizza.toppings",options:{tomato:"Tomato",cheese:"Cheese",ham:"Ham",pineapple:"Pineapple"},label:"Toppings",tooltip:"Text to explain certain things in a tooltip",hint:"hint text",extraLabel:"extraLabel tekst"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_RadioFields_RadioFields__WEBPACK_IMPORTED_MODULE_6__.c,{name:"pizza.delivery",options:{yes:"Yes",no:"No"},label:"Delivery",tooltip:"Text to explain certain things in a tooltip",horizontal:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_RadioFields_RadioFields__WEBPACK_IMPORTED_MODULE_6__.c,{name:"pizza.payment",options:{credit:"Credit card",ideal:"iDeal"},label:"Payment method"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_TextAreaField_TextAreaField__WEBPACK_IMPORTED_MODULE_2__.c,{name:"pizza.notes",label:"Notes",hint:"Leave your delivery man a note"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_BooleanField_BooleanField__WEBPACK_IMPORTED_MODULE_10__.c,{name:"terms",label:"I agree with the terms of service"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SubmitButton_SubmitButton__WEBPACK_IMPORTED_MODULE_11__.c,{label:"Submit this form",align:"right"})]}),ExampleUsingComplexFields=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p",{children:"You can also give complex (nested)-data-structures as options:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_SelectField_ComplexSelectField__WEBPACK_IMPORTED_MODULE_7__.c,{label:"Select",name:"user.select",options:[{username:"Zutt01",id:"xxx01"},{username:"Vanzee02",id:"xxx02"}],optionLabelField:"username"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_CheckboxFields_ComplexCheckboxFields__WEBPACK_IMPORTED_MODULE_8__.c,{label:"Complex checkboxes",name:"user.checkbox",options:[{username:"Zutt01",id:"xxx01"},{username:"Vanzee02",id:"xxx02"}],optionLabelField:"username"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_RadioFields_ComplexRadioFields__WEBPACK_IMPORTED_MODULE_9__.c,{label:"Complex checkboxes",name:"user.radio",options:[{username:"Zutt01",id:"xxx01"},{username:"Vanzee02",id:"xxx02"}],optionLabelField:"username"})]});Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'() => <>\n  <TextField name=\'personal.firstName\' label=\'First name\' />\n  <TextField name=\'personal.surname\' label=\'Surname\' tooltip="Text to explain certain things in a tooltip" validate={() => "This is an example error"} />\n  <NumberField name=\'personal.age\' label=\'Age\' />\n  <SelectField name=\'pizza.crust\' options={{\n    "thick": "Thick crust",\n    "thin": "Thin crust"\n  }} label=\'Crust\' />\n  <CheckboxFields name=\'pizza.toppings\' options={{\n    "tomato": "Tomato",\n    "cheese": "Cheese",\n    "ham": "Ham",\n    "pineapple": "Pineapple"\n  }} label=\'Toppings\' tooltip="Text to explain certain things in a tooltip" hint="hint text" extraLabel="extraLabel tekst" />\n  <RadioFields name=\'pizza.delivery\' options={{\n    "yes": "Yes",\n    "no": "No"\n  }} label=\'Delivery\' tooltip="Text to explain certain things in a tooltip" horizontal={true} />\n  <RadioFields name=\'pizza.payment\' options={{\n    "credit": "Credit card",\n    "ideal": "iDeal"\n  }} label=\'Payment method\' />\n  <TextAreaField name=\'pizza.notes\' label=\'Notes\' hint=\'Leave your delivery man a note\' />\n  <BooleanField name=\'terms\' label=\'I agree with the terms of service\' />\n  <SubmitButton label="Submit this form" align="right" />\n</>',...Example.parameters?.docs?.source}}},ExampleUsingComplexFields.parameters={...ExampleUsingComplexFields.parameters,docs:{...ExampleUsingComplexFields.parameters?.docs,source:{originalSource:'() => <>\n  <p>\n    You can also give complex (nested)-data-structures as options:\n  </p>\n  <ComplexSelectField label=\'Select\' name=\'user.select\' options={[{\n    username: "Zutt01",\n    id: "xxx01"\n  }, {\n    username: "Vanzee02",\n    id: "xxx02"\n  }]} optionLabelField=\'username\' />\n  <ComplexCheckboxFields label=\'Complex checkboxes\' name=\'user.checkbox\' options={[{\n    username: "Zutt01",\n    id: "xxx01"\n  }, {\n    username: "Vanzee02",\n    id: "xxx02"\n  }]} optionLabelField=\'username\' />\n  <ComplexRadioFields label=\'Complex checkboxes\' name=\'user.radio\' options={[{\n    username: "Zutt01",\n    id: "xxx01"\n  }, {\n    username: "Vanzee02",\n    id: "xxx02"\n  }]} optionLabelField=\'username\' />\n</>',...ExampleUsingComplexFields.parameters?.docs?.source}}};const __namedExportsOrder=["Example","ExampleUsingComplexFields"]},"./node_modules/lodash/isEqual.js":function(module,__unused_webpack_exports,__webpack_require__){var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js");module.exports=function isEqual(value,other){return baseIsEqual(value,other)}}}]);
//# sourceMappingURL=components-final-form-composed-stories.60becf97.iframe.bundle.js.map