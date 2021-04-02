import styled from "styled-components";
import { getTypography, color, spaceDt } from "@helpers/styles";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${spaceDt(1)};
  padding-bottom: ${spaceDt(1)};
`;

const Title = styled.div`
  color: ${color.text.primary};

  ${getTypography("heading-3")};
`;

export { HeaderContainer, Title };
