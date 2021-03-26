import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { spaceDt } from '@helpers/styles'

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${toVW(50, 'desktop')};
  min-height: ${toVW(50, 'desktop')};
  margin-bottom: ${spaceDt(2)};

  position: absolute;
  bottom: ${toVW(100, 'desktop')};
`

export { BottomBarContainer }
