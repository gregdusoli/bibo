import styled from "styled-components";

export const TopBar = styled.header`
  margin-bottom: 10px;
`;

export const Content = styled.main`
  min-height: 480px;
  flex-direction: column;
`;

export const NavBar = styled.nav`
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.colors.line};
`;
