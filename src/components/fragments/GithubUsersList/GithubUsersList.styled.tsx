import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color, getTypography, spaceDt } from '@helpers/styles'

const GithubUsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${toVW(132, 'desktop')});
  margin-top: ${spaceDt(2)};
  margin-bottom: ${spaceDt(2)};
`

const TotalUserCount = styled.div`
  display: flex;
  align-items: center;
  height: ${toVW(25, 'desktop')};

  color: ${({ active }: { active: boolean}) => (active ? color.text.light : color.text.secondary)};

  ${getTypography('body-2')};
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: center;
  height: calc(100% - ${toVW(25, 'desktop')});
  overflow-x: hidden;
  overflow-y: auto;
`

export { GithubUsersListContainer, TotalUserCount, ListContainer }
