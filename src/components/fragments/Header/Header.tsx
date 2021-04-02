import { memo } from "react";
import { APPLICATION_TITLE } from "@constants";
import { HeaderContainer, Title } from "./Header.styled";

const Header = () => (
  <HeaderContainer>
    <Title>{APPLICATION_TITLE}</Title>
  </HeaderContainer>
);

export default memo(Header);
