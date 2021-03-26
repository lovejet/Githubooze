import styled from 'styled-components'
import { toVW } from '@helpers/methods'

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${toVW(50, 'desktop')};
  min-height: ${toVW(50, 'desktop')};
`

export { BottomBarContainer }
