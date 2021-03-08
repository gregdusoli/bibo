import styled from 'styled-components'

export const Container = styled.section`
  * {
    list-style: none;

    & > button {
      margin-top: 10px;
    }

    & > div > ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      button {
        margin: 6px 3px 0px 3px;
        width: 45px;
      }
    }

    a:hover {
      text-decoration: none;
    }
  }
`
