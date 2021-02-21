import styled from 'styled-components'

export const Container = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
  }
`
