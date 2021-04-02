import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color, getTypography, screenMax, spaceDt, spaceMb } from '@helpers/styles'

const GithubUsersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${toVW(132, 'desktop')});
  margin-top: ${spaceDt(2)};
  margin-bottom: ${spaceDt(2)};

  ${screenMax('lg')} {
    height: calc(100% - ${toVW(232, 'mobile')});
    margin-top: ${spaceMb(1)};
    margin-bottom: ${spaceMb(1)};
  }
`

const TotalUserCount = styled.div`
  display: flex;
  align-items: center;
  height: ${toVW(25, 'desktop')};
  margin-bottom: ${spaceDt(1)};

  color: ${({ active }: { active: boolean}) => (active ? color.text.light : color.text.secondary)};

  ${getTypography('body-2')};

  ${screenMax('lg')} {
    height: ${toVW(25, 'mobile')};
    margin-bottom: ${spaceMb(1)};
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: center;
  height: calc(100% - ${toVW(25, 'desktop')});
  overflow-x: hidden;
  overflow-y: auto;
  ${screenMax('lg')} {
    height: calc(100% - ${toVW(25, 'mobile')});
  }
`

export { GithubUsersListContainer, TotalUserCount, ListContainer }
