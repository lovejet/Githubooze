import { toVW } from '@helpers/methods'
import { getTypography, spaceDt } from '@helpers/styles'
import styled from 'styled-components'

const GithubUsersListContainer = styled.div`
  height: calc(100% - ${toVW(132, 'desktop')});
  overflow: auto;
  margin-top: ${spaceDt(2)};
  margin-bottom: ${spaceDt(2)};
`

const TotalUserCount = styled.div`
  display: flex;
  align-items: center;
  height: ${toVW(25, 'desktop')};
  ${getTypography('body-2')};
`

export { GithubUsersListContainer, TotalUserCount }
