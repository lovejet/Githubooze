import { toVW } from '@helpers/methods'
import { spaceDt } from '@helpers/styles'
import styled from 'styled-components'

const GithubUsersListContainer = styled.div`
  height: calc(100% - ${toVW(132, 'desktop')});
  overflow: auto;
  margin-top: ${spaceDt(2)};
  margin-bottom: ${spaceDt(2)};
  background-color: green;
`

export { GithubUsersListContainer }
