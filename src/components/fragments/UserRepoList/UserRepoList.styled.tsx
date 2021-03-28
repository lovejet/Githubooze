import { toVW } from '@helpers/methods'
import styled from 'styled-components'

const UserRepoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${toVW(50, 'desktop')});
`

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`

export { UserRepoListContainer, ListContainer }
