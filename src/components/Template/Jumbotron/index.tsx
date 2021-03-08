import React from 'react'
import { JumbotronProps, Jumbotron as CustomJumbotron } from 'react-bootstrap'

const Jumbotron: React.FC<JumbotronProps> = (props) => {
  return (
    <CustomJumbotron {...props}>
      {props.children}
    </CustomJumbotron>
  )
}

export default Jumbotron
