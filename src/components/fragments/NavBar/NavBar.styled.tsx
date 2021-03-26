import styled from 'styled-components'
import { getTypography, color } from '@helpers/styles'
import { toVW } from '@helpers/methods'

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${toVW(50, 'desktop')};
  min-height: ${toVW(50, 'desktop')};
  color: ${color.text.light};
  ${getTypography('body-2')};
`

export { NavBarContainer }
