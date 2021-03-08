import React from 'react'
import { Card as CustomCard, CardProps } from 'react-bootstrap'

interface CustomCardProps {
  [key: string]: string
}

const Card: React.FC<CardProps|CustomCardProps> = (props, customProps?) => (
  <CustomCard {...props}>
    <CustomCard.Header>
      <CustomCard.Title>
        {customProps.title}
      </CustomCard.Title>
    </CustomCard.Header>
    <CustomCard.Body>
      {props.children}
    </CustomCard.Body>
  </CustomCard>
)

export default Card
