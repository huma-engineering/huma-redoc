import * as React from 'react';
import { FunctionComponent } from 'react';
import Modal from "../Modal/Modal";
import { AuthorizationButtonsRow } from "./styled.elements";
import { l } from '../../services/Labels';
import { Button } from "../../common-elements/buttons";
import Select from "../Select"

interface componentInterface {
  show: boolean;
  onClose?: () => void;
}

export const ModalAuth: FunctionComponent<componentInterface> = (props) => {

  const { show, onClose } = props

  const onAuthorize = () => {

  }

  const isDisabled = ():boolean => {
    return true
  }

  return <Modal
    onClose={() => {
      if (onClose) onClose()
    }}
    title={l("authorization")}
    show={show}>
      <Select
        onChange={(e)=>console.log(e)}
        options={[{value:l("Hawk"), label:l("Hawk")}]}
        placeholder={l("SelectAuthType")}
        style={{marginBottom: "1.6rem"}}
      />
    <AuthorizationButtonsRow>
      <Button
        className="outline secondary"
        onClick={() => {
          if (onClose) onClose()
        }}>
        {l("cancel")}
      </Button>
      <Button disabled={isDisabled()} onClick={onAuthorize}>{l("authorize")}</Button>
    </AuthorizationButtonsRow>
  </Modal>
}