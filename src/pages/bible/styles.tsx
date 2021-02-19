import styled from 'styled-components'

export const Container = styled.div`
    * {
        display: flex;
        flex-wrap: wrap;

        & > div {
            width: 100%;
        }
    }
`

export const Section = styled.div`
    a:hover {
        text-decoration: none;
    }

    button {
        margin: 6px 3px 0px 3px;
    }
`
