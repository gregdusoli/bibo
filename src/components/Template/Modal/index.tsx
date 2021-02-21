import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export interface ModalProps {
  button: {
    variant: string;
    text: string;
  };
  title: string;
  body: string;
  close: {
    variant: string;
    text: string;
  };
  save?: {
    variant: string;
    text: string;
    handleSave: () => {};
  };
}

const ModalComponent: React.FC<ModalProps> = (props) => {
  const [show, setShow] = useState(false)
  const { button, title, body, close, save } = props

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant={button.variant} onClick={handleShow}>
        {button.text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="dismiss" onClick={handleClose}>
            {close.text}
          </Button>
          {save && (
            <Button variant="primary" type="submit" onClick={save.handleSave}>
              {save.text}
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComponent
