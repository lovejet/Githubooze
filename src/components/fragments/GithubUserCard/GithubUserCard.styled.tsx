import styled from "styled-components";
import { toVW } from "@helpers/methods";
import { color, screenMax, spaceDt, spaceMb } from "@helpers/styles";

const GithubUserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${toVW(420, "desktop")};
  height: ${toVW(200, "desktop")};
  margin: ${spaceDt(1)} ${spaceDt(2)};
  background-color: ${color.bg.primary};

  ${screenMax("lg")} {
    width: 100%;
    height: ${toVW(100, "mobile")};
    margin: ${spaceMb(1)} ${spaceMb(1)};
  }
`;

const AvatarPane = styled.div`
  width: ${toVW(200, "desktop")};
  height: ${toVW(200, "desktop")};
  padding: ${spaceDt(2)};

  ${screenMax("lg")} {
    width: ${toVW(100, "mobile")};
    height: ${toVW(100, "mobile")};
    padding: ${spaceMb(1)};
  }
`;

const InfoPane = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${toVW(200, "desktop")} - ${spaceDt(2)});
  margin: ${spaceDt(2)} 0;
  justify-content: center;

  ${screenMax("lg")} {
    width: calc(100% - ${toVW(100, "mobile")} - ${spaceMb(1)});
    margin: ${spaceMb(1)} 0;
  }
`;

const UserId = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: ${spaceDt(2)};

  ${screenMax("lg")} {
    margin-bottom: ${spaceMb(2)};
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Link = styled.a`
  cursor: pointer;
  color: ${color.bg.secondary};
  text-decoration: none;
`;

export { GithubUserCardContainer, AvatarPane, InfoPane, UserId, Links, Link };
