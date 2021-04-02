import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { screenMax, screenMin } from '@helpers/styles'

const UserRepoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${toVW(50, 'desktop')});

  ${screenMax('lg')} {
    height: 100%;
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  height: 100%;

  ${screenMin('lg')} {
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export { UserRepoListContainer, ListContainer }
