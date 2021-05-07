import React from 'react'
import { ButtonProps, Button as CustomButton } from 'react-bootstrap'

interface CustomButtonProps {
  [key: string]: string
}

const Button: React.FC<CustomButtonProps|ButtonProps> = (props, customProps?) => {
  return (
    <CustomButton {...props}>
      {props.children}
    </CustomButton>
  )
}

export default Button
