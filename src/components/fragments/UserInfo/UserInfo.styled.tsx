import styled from "styled-components";
import { toVW } from "@helpers/methods";
import {
  color,
  getTypography,
  screenMax,
  spaceDt,
  spaceMb,
} from "@helpers/styles";

const UserInfoContainer = styled.div`
  height: 100%;

  ${screenMax("lg")} {
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${toVW(50, "desktop")};
  color: ${color.bg.secondary};

  ${screenMax("lg")} {
    height: ${toVW(50, "mobile")};
  }
`;

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - ${toVW(60, "desktop")} - ${spaceDt(2)});

  ${screenMax("lg")} {
    flex-direction: column;
    height: calc(100% - ${toVW(50, "mobile")} - ${spaceMb(1)});
    padding-left: ${spaceMb(2)};
    padding-right: ${spaceMb(2)};
  }
`;

const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  width: ${toVW(200, "desktop")};
  margin-right: ${spaceDt(3)};

  ${screenMax("lg")} {
    width: 100%;
    margin-right: 0;
    margin-bottom: ${spaceMb(3)};
    justify-content: center;
  }
`;

const RightPane = styled.div`
  width: calc(100% - ${toVW(200, "desktop")} - ${spaceDt(3)});

  ${screenMax("lg")} {
    width: 100%;
  }
`;

const Avatar = styled.div`
  width: ${toVW(200, "desktop")};
  height: ${toVW(200, "desktop")};
  margin-bottom: ${spaceDt(1)};

  ${screenMax("lg")} {
    width: ${toVW(200, "mobile")};
    height: ${toVW(200, "mobile")};
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${spaceMb(1)};
  }
`;

const SmallField = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${color.text.primary};
  margin-bottom: ${spaceDt(1)};

  ${screenMax("lg")} {
    margin-bottom: ${spaceMb(1)};
  }
`;

const LargeField = styled.div`
  display: flex;
  align-items: center;
  color: ${color.text.primary};
  margin-right: ${spaceDt(2)};

  ${screenMax("lg")} {
    margin-bottom: ${spaceMb(2)};
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${color.text.light};
  ${getTypography("body-3")};

  ${screenMax("lg")} {
    ${getTypography("heading-3")};
  }
`;

const SmallFieldText = styled.div`
  width: 100%;
  margin-left: ${spaceDt(0.5)};
  ${getTypography("body-5")};

  ${screenMax("lg")} {
    ${getTypography("heading-4")};
  }
`;

const LargeFieldText = styled.div`
  margin-left: ${spaceDt(0.5)};
  ${getTypography("body-3")};

  ${screenMax("lg")} {
    margin-left: ${spaceMb(0.5)};
  }
`;

const Link = styled.a`
  cursor: pointer;
  color: ${color.text.primary};
  text-decoration: none;
`;

const InfoPane = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${toVW(50, "desktop")};

  ${screenMax("lg")} {
    flex-direction: column;
    width: 100%;
    height: ${toVW(100, "mobile")};
  }
`;

const CountPane = styled.div`
  display: flex;
  flex-direction: row;
`;

export {
  UserInfoContainer,
  BackButtonContainer,
  UserDataContainer,
  LeftPane,
  RightPane,
  Avatar,
  SmallField,
  UserName,
  SmallFieldText,
  Link,
  LargeField,
  LargeFieldText,
  InfoPane,
  CountPane,
};
