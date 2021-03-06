import React from "react"
import Scaffold from "../Scaffold/Scaffold"
import ComplexRadioFields from "./ComplexRadioFields"

export default {
  title: "RadioFields/Complex data structure"
}

type MyComplexDataStructure = {
  myLabel: string
  myValue: number,
  something: { nested: { foo: boolean } }
}

export const WithLabel = () => <ComplexRadioFields<MyComplexDataStructure>
  name='myFieldName'
  label='foo'
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } } },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithoutLabel = () => <ComplexRadioFields<MyComplexDataStructure>
  name='myFieldName'
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithError = () => <ComplexRadioFields<MyComplexDataStructure>
  name='myFieldName'
  validate={() => "Some error occurred"}
  optionLabelField='myLabel'
  options={[
    { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
    { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
  ]}
/>

export const WithMultipleFields = () => <>
  <ComplexRadioFields<MyComplexDataStructure>
    name='myFieldName'
    optionLabelField='myLabel'
    options={[
      { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
      { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
    ]}
  />
  <ComplexRadioFields<MyComplexDataStructure>
    name='myFieldName2'
    optionLabelField='myLabel'
    options={[
      { myLabel: "My Label 1", myValue: 1, something: { nested: { foo: true } }  },
      { myLabel: "My Label 2", myValue: 2, something: { nested: { foo: false } }  }
    ]}
  />
</>

export const SingleRadio = () => <Scaffold fields={{
  field4: { type: "ComplexRadioFields", props: { label: "Single Radio", name: "field4", optionLabelField:"mySingleRadio", isRequired: true, options: [{ myLabel: "My Label 1", myValue: 1 }]} },
  submit: { type: "SubmitButton", props: { label: "Submit" } }
}} />
