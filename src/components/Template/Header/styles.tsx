import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-top: 0px;
  border-bottom: 1px solid ${(props) => props.theme.colors.line};

  div {
    text-align: right;
    width: 100%;
    margin-bottom: 8px;
  }
`
