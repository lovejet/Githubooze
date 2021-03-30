import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color, getTypography, spaceDt } from '@helpers/styles'

const UserInfoContainer = styled.div`
  height: 100%;
`

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${toVW(50, 'desktop')};
  color: ${color.bg.secondary};
`

const UserDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - ${toVW(60, 'desktop')} - ${spaceDt(2)});
`

const LeftPane = styled.div`
  width: ${toVW(200, 'desktop')};
  margin-right: ${spaceDt(3)};
`

const RightPane = styled.div`
  width: calc(100% - ${toVW(200, 'desktop')} - ${spaceDt(3)});
`

const Avatar = styled.div`
  width: ${toVW(200, 'desktop')};
  height: ${toVW(200, 'desktop')};
  border-radius: 100%;
  margin-bottom: ${spaceDt(1)};
`

const SmallField = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${color.text.primary};
  margin-bottom: ${spaceDt(1)};
`

const LargeField = styled.div`
  display: flex;
  align-items: center;
  color: ${color.text.primary};
  margin-right: ${spaceDt(2)};
`

const UserName = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${color.text.light};
  ${getTypography('body-3')};
`

const SmallFieldText = styled.div`
  width: 100%;
  margin-left: ${spaceDt(0.5)};
  ${getTypography('body-5')};
`

const LargeFieldText = styled.div`
  margin-left: ${spaceDt(0.5)};
  ${getTypography('body-3')};
`

const Link = styled.a`
  cursor: pointer;
  color: ${color.text.primary};
  text-decoration: none;
`

const InfoPane = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${toVW(50, 'desktop')};
`

const CountPane = styled.div`
  display: flex;
  flex-direction: row;
`

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
}
