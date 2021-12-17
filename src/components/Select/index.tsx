import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { SelectContainer, SelectInput, OptionContainer, SelectList } from "./styled.elements";
import { l } from '../../services/Labels';

interface componentInterface {
  onChange?: (e: object) => void;
  options?: Array<{ value: string, label: string }>;
  placeholder?: string;
  style?: object;
}

const Select: FunctionComponent<componentInterface> = (props) => {

  const { onChange, options, placeholder, style } = props
  const [selected, setSelected] = useState({ value: "", label: "" })
  const [active, setActive] = useState(false)

  const onSelectChange = (item: { value: string, label: string }) => {
    if (onChange) onChange(selected)
    setSelected(item)
    console.log(item)
  }

  return <SelectContainer style={{ ...style }} className={`${active ? "active" : ""}`}>
    <SelectInput
      placeholder={placeholder ? placeholder : l("PleaseSelect")}
      onFocus={() => setActive(true)}
      onBlur={() => setTimeout(() => { setActive(false) }, 100)}
      value={selected.label}
      onChange={() => { }}
    />
    <SelectList className={`${active ? "active" : ""}`}>
      {options?.map((item, i) => (
        <OptionContainer
          key={`op-${i}`}
          onClick={() => onSelectChange(item)}
          className={`${item.value == selected.value ? "active" : ""}`}
        >
          {item.label}
        </OptionContainer>
      ))}
    </SelectList>
  </SelectContainer>
}

export default Select;
