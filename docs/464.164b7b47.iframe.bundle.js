(self.webpackChunk_amsterdam_amsterdam_react_final_form=self.webpackChunk_amsterdam_amsterdam_react_final_form||[]).push([[464],{"./node_modules/@amsterdam/asc-assets/es/icons/Enlarge.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.c=function SvgEnlarge(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M32 14H18V0h-4v14H0v4h14v14h4V18h14z",fillRule:"evenodd"})}))}},"./node_modules/@amsterdam/asc-assets/es/icons/TrashBin.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.c=function SvgTrashBin(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",role:"img",focusable:!1},props,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M31 6h-8V2H13v4H5v4h2v24h22V10h2zM15 4h6v2h-6zm10 26H11V10h14z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M13.02 14H15v12h-1.98zM17 14h2v12h-2zm4.02 0H23v12h-1.98z"})]}))}},"./node_modules/@amsterdam/asc-ui/es/components/Checkbox/Checkbox.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Checkbox_Checkbox}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Indeterminate=function SvgIndeterminate(props){return(0,jsx_runtime.jsx)("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",role:"img",focusable:!1},props,{children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.9 14H27v4H4.9z"})}))};var Checkmark=function SvgCheckmark(props){return(0,jsx_runtime.jsx)("svg",Object.assign({viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",role:"img",focusable:!1},props,{children:(0,jsx_runtime.jsx)("path",{d:"M12.216 27.016 0 14.168l2.91-2.77 9.346 9.837L29.129 4 32 6.8z",fillRule:"evenodd"})}))},react=__webpack_require__("./node_modules/react/index.js"),LabelContext=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Label/LabelContext.js"),CheckboxStyle=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/components/Checkbox/CheckboxStyle.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var Checkbox_Checkbox=(0,react.forwardRef)(((_a,externalRef)=>{var{checked:checkedProp,className:className,onChange:onChange,disabled:disabled,error:error,indeterminate:indeterminate}=_a,otherProps=__rest(_a,["checked","className","onChange","disabled","error","indeterminate"]);const[checked,setChecked]=(0,react.useState)(!!checkedProp),{setActive:setActive}=(0,react.useContext)(LabelContext.c),ref=(0,react.useRef)(null);return(0,react.useImperativeHandle)(externalRef,(()=>ref.current)),(0,react.useEffect)((()=>{ref.current&&(ref.current.indeterminate=null!=indeterminate&&indeterminate)}),[ref,indeterminate]),(0,react.useEffect)((()=>{setActive(checked)}),[checked,setActive]),(0,react.useMemo)((()=>{setChecked(!!checkedProp)}),[checkedProp,setChecked]),(0,jsx_runtime.jsxs)(CheckboxStyle.i,Object.assign({},{className:className,disabled:disabled,checked:checked,error:error},{"aria-disabled":disabled},{children:[(0,jsx_runtime.jsxs)(CheckboxStyle.OO,Object.assign({},{disabled:disabled,checked:checked,error:error,indeterminate:indeterminate},{"data-testid":"checkboxIcon",size:15},{children:[!checked&&indeterminate&&(0,jsx_runtime.jsx)(Indeterminate,{}),checked&&(0,jsx_runtime.jsx)(Checkmark,{})]})),(0,jsx_runtime.jsx)(CheckboxStyle.cp,Object.assign({},Object.assign(Object.assign({},otherProps),{disabled:disabled,checked:checked,ref:ref}),{onChange:e=>{onChange&&onChange(e),void 0===checkedProp&&setChecked(!checked)}}))]}))}))},"./node_modules/@amsterdam/asc-ui/es/components/Radio/Radio.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{c:function(){return Radio_Radio}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),themeUtils=__webpack_require__("./node_modules/@amsterdam/asc-ui/es/utils/themeUtils.js");const RadioStyle=styled_components_browser_esm.cp.input.attrs({type:"radio"})`
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
`,__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};var TextArea_TextArea=(0,react.forwardRef)(((_a,ref)=>{var{value:value,error:error}=_a,otherProps=__rest(_a,["value","error"]);return(0,jsx_runtime.jsx)(TextArea_TextAreaStyle,Object.assign({ref:ref,error:error,value:value},otherProps))}))},"./node_modules/lodash/isEqual.js":function(module,__unused_webpack_exports,__webpack_require__){var baseIsEqual=__webpack_require__("./node_modules/lodash/_baseIsEqual.js");module.exports=function isEqual(value,other){return baseIsEqual(value,other)}},"./node_modules/react-final-form-arrays/dist/react-final-form-arrays.es.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{KE:function(){return FieldArray},QL:function(){return useFieldArray}});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),final_form__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/final-form/dist/final-form.es.js"),react_final_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-final-form/dist/react-final-form.es.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_excluded$2=["render","children","component"];var defaultIsEqual=function defaultIsEqual(aArray,bArray){return aArray===bArray||Array.isArray(aArray)&&Array.isArray(bArray)&&aArray.length===bArray.length&&!aArray.some((function(a,index){return a!==bArray[index]}))};var _excluded$1=["length"],_excluded2=["meta","input"],all=final_form__WEBPACK_IMPORTED_MODULE_0__.oJ.reduce((function(result,key){return result[key]=!0,result}),{}),useFieldArray=function useFieldArray(name,_temp){var _ref=void 0===_temp?{}:_temp,_ref$subscription=_ref.subscription,subscription=void 0===_ref$subscription?all:_ref$subscription,defaultValue=_ref.defaultValue,initialValue=_ref.initialValue,_ref$isEqual=_ref.isEqual,isEqual=void 0===_ref$isEqual?defaultIsEqual:_ref$isEqual,validateProp=_ref.validate,formMutators=(0,react_final_form__WEBPACK_IMPORTED_MODULE_1__.aS)("useFieldArray").mutators;if(!!!(formMutators&&formMutators.push&&formMutators.pop))throw new Error("Array mutators not found. You need to provide the mutators from final-form-arrays to your form");var mutators=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return Object.keys(formMutators).reduce((function(result,key){return result[key]=function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return formMutators[key].apply(formMutators,[name].concat(args))},result}),{})}),[name,formMutators]),validate=function useConstant(init){var ref=react__WEBPACK_IMPORTED_MODULE_2__.useRef();return ref.current||(ref.current=init()),ref.current}((function(){return function(value,allValues,meta){if(validateProp){var error=validateProp(value,allValues,meta);if(!error||Array.isArray(error))return error;var arrayError=[];return arrayError[final_form__WEBPACK_IMPORTED_MODULE_0__.eY]=error,arrayError}}})),_useField=(0,react_final_form__WEBPACK_IMPORTED_MODULE_1__.m4)(name,{subscription:(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.c)({},subscription,{length:!0}),defaultValue:defaultValue,initialValue:initialValue,isEqual:isEqual,validate:validate,format:function format(v){return v}}),_useField$meta=_useField.meta,length=_useField$meta.length,meta=(0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__.c)(_useField$meta,_excluded$1),input=_useField.input,fieldState=(0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__.c)(_useField,_excluded2);return{fields:(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.c)({name:name,forEach:function forEach(iterator){for(var len=length||0,i=0;i<len;i++)iterator(name+"["+i+"]",i)},length:length||0,map:function map(iterator){for(var len=length||0,results=[],i=0;i<len;i++)results.push(iterator(name+"["+i+"]",i));return results}},mutators,fieldState,{value:input.value}),meta:meta}},_excluded=["name","subscription","defaultValue","initialValue","isEqual","validate"],versions={"final-form":final_form__WEBPACK_IMPORTED_MODULE_0__.WU,"react-final-form":react_final_form__WEBPACK_IMPORTED_MODULE_1__.WU,"react-final-form-arrays":"3.1.3"},FieldArray=function FieldArray(_ref){var name=_ref.name,subscription=_ref.subscription,defaultValue=_ref.defaultValue,initialValue=_ref.initialValue,isEqual=_ref.isEqual,validate=_ref.validate,rest=(0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__.c)(_ref,_excluded),_useFieldArray=useFieldArray(name,{subscription:subscription,defaultValue:defaultValue,initialValue:initialValue,isEqual:isEqual,validate:validate}),fields=_useFieldArray.fields,meta=_useFieldArray.meta;return function renderComponent(props,name){var render=props.render,children=props.children,component=props.component,rest=(0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_3__.c)(props,_excluded$2);if(component)return react__WEBPACK_IMPORTED_MODULE_2__.createElement(component,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.c)({},rest,{children:children,render:render}));if(render)return render(void 0===children?rest:(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.c)({},rest,{children:children}));if("function"!=typeof children)throw new Error("Must specify either a render prop, a render function as children, or a component prop to "+name);return children(rest)}((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.c)({fields:fields,meta:(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__.c)({},meta,{__versions:versions})},rest),"FieldArray("+name+")")}}}]);
//# sourceMappingURL=464.164b7b47.iframe.bundle.js.map