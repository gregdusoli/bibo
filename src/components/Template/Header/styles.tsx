import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 3px 10px;
  border-bottom: 2px solid ${(props) => props.theme.colors.line};
`
