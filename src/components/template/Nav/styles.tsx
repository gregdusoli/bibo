import styled from 'styled-components'

export const Container = styled.div`
  padding: 0px 5px 0px 5px;
  border-top: 2px solid ${(props) => props.theme.colors.line};

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin-top: -5px;

    li {
      font-size: 2em;
    }
  }
`
