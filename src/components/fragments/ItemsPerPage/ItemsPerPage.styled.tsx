import styled from "styled-components";
import { toVW } from "@helpers/methods";
import {
  color,
  getTypography,
  screenMax,
  spaceDt,
  spaceMb,
} from "@helpers/styles";

const ItemsPerPageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${toVW(50, "desktop")};

  color: ${color.text.light};

  ${screenMax("lg")} {
    width: 100%;
    height: ${toVW(50, "mobile")};
  }
`;

const CustomSelectRender = styled.div`
  display: flex;
  flex-direction: row;

  ${getTypography("body-2")};
`;

const CustomSelectRenderPrefix = styled.div`
  color: ${color.text.primary};
  margin-right: ${spaceDt(1)};

  ${screenMax("lg")} {
    margin-right: ${spaceMb(1)};
  }
`;

export {
  ItemsPerPageBoxContainer,
  CustomSelectRender,
  CustomSelectRenderPrefix,
};
