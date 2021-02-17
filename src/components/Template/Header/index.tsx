import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { Container } from "./styles";

const Header: React.FC = () => (
  <Container>
    <div>
      <Link to="/settings">
        <FiSettings size={20} />
      </Link>
    </div>
  </Container>
);

export default Header;
