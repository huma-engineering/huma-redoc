import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import Modal from "../Modal/Modal";
import { AuthorizationButtonsRow, AuthorizationRow, AuthorizationLabel } from "./styled.elements";
import { l } from '../../services/Labels';
import { Button } from "../../common-elements/buttons";
import Select from "../Select"
import Input from "../Input"

interface componentInterface {
  show: boolean;
  onClose?: () => void;
}

export const ModalAuth: FunctionComponent<componentInterface> = (props) => {

  const { show, onClose } = props
  const [selectedType, setSelectedType] = useState({ value: "", label: "" })
  const [apiKey, setApiKey] = useState("")
  const [apiId, setApiId] = useState("")

  const onAuthorize = () => {

  }

  const isDisabled = (): boolean => {
    return apiKey && apiId ? false : true
  }

  return <Modal
    onClose={() => {
      if (onClose) onClose()
    }}
    title={l("authorization")}
    show={show}>
    <AuthorizationRow style={{ marginBottom: "1rem" }}>
      <div>
        <AuthorizationLabel>
          {l("Authorizationtype")}:
        </AuthorizationLabel>
      </div>
      <div>
        <Select
          onChange={(e) => setSelectedType(e)}
          options={[
            { value: l("Hawk"), label: l("Hawk") }
          ]}
          placeholder={l("SelectAuthType")}
        />
      </div>
    </AuthorizationRow>
    {selectedType.value === "Hawk" &&
      <>
        <AuthorizationRow style={{ marginBottom: "1rem" }}>
          <div>
            <AuthorizationLabel>
              {l("APIkey")}:
            </AuthorizationLabel>
          </div>
          <div>
            <Input placeholder={l("EnterAPIkey")} onChange={setApiKey}/>
          </div>
        </AuthorizationRow>
        <AuthorizationRow style={{ marginBottom: "1.6rem" }}>
          <div>
            <AuthorizationLabel>
              {l("APIID")}:
            </AuthorizationLabel>
          </div>
          <div>
            <Input placeholder={l("EnterAPIID")} onChange={setApiId} />
          </div>
        </AuthorizationRow>
      </>
    }
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