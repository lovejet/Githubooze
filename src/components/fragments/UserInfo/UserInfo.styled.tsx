import { toVW } from '@helpers/methods'
import { spaceDt } from '@helpers/styles'
import styled from 'styled-components'

const UserInfoContainer = styled.div`
  height: 100%;
`

const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${toVW(50, 'desktop')};
  margin-bottom: ${spaceDt(2)};
`

const UserDataContainer = styled.div`
  height: calc(100% - ${toVW(60, 'desktop')} - ${spaceDt(2)});
`

export { UserInfoContainer, BackButtonContainer, UserDataContainer }
