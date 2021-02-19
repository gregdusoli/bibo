import styled from 'styled-components'

export const Container = styled.section`
  * {
    list-style: none;
  }
`
export const Section = styled.div`
    * {
        display: flex;
        flex-wrap: wrap;
        list-style: none;

        & > div {
            width: 100%;
        }
    }

    a:hover {
        text-decoration: none;
    }

    button {
        margin: 6px 3px 0px 3px;
        width: 45px;
    }
`
