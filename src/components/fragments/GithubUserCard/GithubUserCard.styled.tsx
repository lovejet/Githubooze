import { toVW } from '@helpers/methods'
import { color, spaceDt } from '@helpers/styles'
import styled from 'styled-components'

const GithubUserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${toVW(420, 'desktop')};
  height: ${toVW(200, 'desktop')};
  margin: ${spaceDt(2)};
  background-color: ${color.bg.primary};
`

const AvatarPane = styled.div`
  width: ${toVW(200, 'desktop')};
  height: ${toVW(200, 'desktop')};
  padding: ${spaceDt(2)};
`

const InfoPane = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${toVW(200, 'desktop')} - ${spaceDt(2)});
  margin: ${spaceDt(2)} 0;
  justify-content: center;
`

const UserId = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: ${spaceDt(2)};
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Link = styled.a`
  cursor: pointer;
  color: ${color.bg.secondary};
  text-decoration: none;
`

export { GithubUserCardContainer, AvatarPane, InfoPane, UserId, Links, Link }
