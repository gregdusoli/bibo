import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { withTheme } from 'styled-components'
import { ModalStyle } from './styles'

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
  theme?: any;
  save?: {
    variant: string;
    text: string;
    handleSave: () => void;
  };
}

const ModalComponent: React.FC<ModalProps> = (props) => {
  const [show, setShow] = useState(false)
  const { button, title, body, close, save, theme } = props

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant={button.variant} onClick={handleShow}>
        {button.text}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalStyle>
          <Modal.Header closeButton style={{ backgroundColor: theme.colors.background }}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ backgroundColor: theme.colors.background }}>{body}</Modal.Body>

          <Modal.Footer style={{ backgroundColor: theme.colors.background }}>
            <Button variant="secondary" type="dismiss" onClick={handleClose}>
              {close.text}
            </Button>

            {save && (
              <Button variant="primary" type="submit" onClick={save.handleSave}>
                {save.text}
              </Button>
            )}
          </Modal.Footer>
        </ModalStyle>
      </Modal>
    </>
  )
}

export default withTheme(ModalComponent)
