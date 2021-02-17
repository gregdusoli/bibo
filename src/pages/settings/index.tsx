import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";
import { Container } from "./styles";
import { ThemeModeContext } from "../../styles/themes";

const Settings: React.FC = () => {
  const { name: themed } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeModeContext);

  return (
    <Container>
      <h6>Configurações</h6>
      <div>
        <span>Tema de cor</span>
        <button onClick={toggleTheme}>
          {themed === "light" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </Container>
  );
};

export default Settings;
