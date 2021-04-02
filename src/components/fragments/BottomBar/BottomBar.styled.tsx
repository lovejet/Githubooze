import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { screenMax } from '@helpers/styles'

const BottomBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${toVW(50, 'desktop')};
  min-height: ${toVW(50, 'desktop')};

  ${screenMax('lg')} {
    flex-direction: column-reverse;
    height: ${toVW(100, 'mobile')};
    min-height: ${toVW(100, 'mobile')};
  }
`

export { BottomBarContainer }
