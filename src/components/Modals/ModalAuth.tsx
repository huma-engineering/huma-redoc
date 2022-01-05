import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
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

  useEffect(() => {
    if (typeof window === 'object' || typeof window !== 'undefined') {
      const localAuth = localStorage.getItem("auth")

      if (localAuth) {
        const localJsonAuth = JSON.parse(localAuth)
        setSelectedType({ value: localJsonAuth.type, label: localJsonAuth.type })
        if (localJsonAuth.data?.key) setApiKey(localJsonAuth.data.key)
        if (localJsonAuth.data?.id) setApiId(localJsonAuth.data.id)
      }
    }
  }, [])

  const onAuthorize = () => {
    if (typeof window === 'object' || typeof window !== 'undefined') {
      if (selectedType.value == "Hawk") localStorage.setItem("auth", JSON.stringify({ type: selectedType.value, data: { key: apiKey, id: apiId } }))
    }
    if (onClose) onClose()
  }

  const isDisabled = (): boolean => {
    return (apiKey && apiId) ? false : true
  }

  const onCancel = () => {
    setSelectedType({ value: "", label: "" })
    setApiKey("")
    setApiId("")
    if (typeof window === 'object' || typeof window !== 'undefined') {
      localStorage.removeItem("auth")
    }
    if (onClose) onClose()
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
          value={selectedType}
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
            <Input value={apiKey} placeholder={l("EnterAPIkey")} onChange={setApiKey} />
          </div>
        </AuthorizationRow>
        <AuthorizationRow style={{ marginBottom: "1.6rem" }}>
          <div>
            <AuthorizationLabel>
              {l("APIID")}:
            </AuthorizationLabel>
          </div>
          <div>
            <Input value={apiId} placeholder={l("EnterAPIID")} onChange={setApiId} />
          </div>
        </AuthorizationRow>
      </>
    }
    <AuthorizationButtonsRow>
      <Button
        className="outline secondary"
        onClick={onCancel}>
        {l("cancel")}
      </Button>
      <Button disabled={isDisabled()} onClick={onAuthorize}>{l("authorize")}</Button>
    </AuthorizationButtonsRow>
  </Modal>
}