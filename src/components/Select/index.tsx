import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import { SelectContainer, SelectInput, OptionContainer, SelectList, SelectIcon } from "./styled.elements";
import { l } from '../../services/Labels';
import {ShelfIcon} from "../../common-elements/shelfs"

interface componentInterface {
  onChange?: (e: {value: string, label: string}) => void;
  options?: Array<{ value: string, label: string }>;
  placeholder?: string;
  style?: object;
}

const Select: FunctionComponent<componentInterface> = (props) => {

  const { onChange, options, placeholder, style } = props
  const [selected, setSelected] = useState({ value: "", label: "" })
  const [active, setActive] = useState(false)

  const onSelectChange = (item: { value: string, label: string }) => {
    if (onChange) onChange(item)
    setSelected(item)
  }

  return <SelectContainer style={{ ...style }} className={`${active ? "active" : ""}`}>
    <SelectIcon>
      <ShelfIcon size={'0.875rem'} direction={active ? 'up' : 'down'}/>
    </SelectIcon>
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
