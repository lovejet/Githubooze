import styled from "styled-components";
import { toVW } from "@helpers/methods";
import {
  screenMin,
  color,
  spaceDt,
  getTypography,
  spaceMb,
} from "@helpers/styles";
import { CopyRightSymbol } from "@illustrations";

const FooterContainer = styled.div`
  width: 100%;
  height: ${toVW(30, "mobile")};
  display: flex;
  justify-content: flex-end;
  background-color: ${color.bg.primary};

  ${screenMin("lg")} {
    height: ${toVW(30, "desktop")};
  }
`;

const CopyrightText = styled.div`
  display: flex;
  color: ${color.text.primary};
  align-items: center;
  margin-right: ${spaceDt(1)};

  ${getTypography("body-3")};
`;

const CopyRightVector = styled(CopyRightSymbol)`
  width: ${toVW(12, "mobile")};
  height: ${toVW(12, "mobile")};
  margin-left: ${spaceMb(0.5)};
  margin-right: ${spaceMb(0.5)};
  ${screenMin("lg")} {
    width: ${toVW(12, "desktop")};
    height: ${toVW(12, "desktop")};
    margin-left: ${spaceDt(0.5)};
    margin-right: ${spaceDt(0.5)};
  }
`;

export { FooterContainer, CopyrightText, CopyRightVector };
