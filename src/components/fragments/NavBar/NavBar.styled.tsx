import styled from 'styled-components'
import { toVW } from '@helpers/methods'

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${toVW(50, 'desktop')};
  min-height: ${toVW(50, 'desktop')};
`

export { NavBarContainer }
