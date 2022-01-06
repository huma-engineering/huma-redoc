import * as React from 'react';
import { FunctionComponent, useState, useEffect } from 'react';
import { ModalContainer, ModalInner, ModalOverlay, ModalTitle, ModelContent, ModalClose } from "./styled.elements";
import { IconClose } from "../Icons"

interface componentInterface {
  show: boolean;
  onClose?: () => void;
  title: string;
}

const Modal: FunctionComponent<componentInterface> = (props) => {

  const { show, onClose, children, title } = props
  const [delayedShow, setDelayedShow] = useState(show)

  useEffect(() => {
    setDelayedShow(show)
  }, [show])

  const onModalClose = () => {
    if (onClose) onClose()
    setDelayedShow(false)
  }

  return <ModalContainer className={`${delayedShow ? "active" : ""}`}>
    <ModalOverlay className={`${delayedShow ? "active" : ""}`} onClick={onModalClose} />
    <ModalInner>
      <ModalTitle>
        <span>{title}</span>
        <ModalClose onClick={onModalClose}>
          <IconClose />
        </ModalClose>
      </ModalTitle>
      <ModelContent>{children}</ModelContent>
    </ModalInner>
  </ModalContainer>
}


export default Modal