import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { InputContainer, InputElement, InputClear } from "./styled.elements";
import { IconClose } from "../Icons"

interface componentInterface {
  value?: string;
  placeholder?: string;
  onChange?: (e: string) => void;
}

const Input: FunctionComponent<componentInterface> = (props) => {

  const { value, onChange, placeholder } = props
  const [active, setActive] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  useEffect(()=>{
    setInputValue(value)
  }, [value])

  return <InputContainer className={`${active ? "active" : ""}`}>
    {inputValue &&
      <InputClear onClick={()=>{
        setInputValue("")
        if (onChange) onChange("")
        }}>
        <IconClose />
      </InputClear>
    }
    <InputElement
      value={inputValue}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onChange={(e) => {
        if (onChange) onChange(e.target.value)
        setInputValue(e.target.value)
      }
      }
      placeholder={placeholder ? placeholder : ""}
    />
  </InputContainer>
}


export default Input