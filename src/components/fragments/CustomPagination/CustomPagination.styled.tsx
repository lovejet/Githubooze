import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color } from '@helpers/styles'

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: ${toVW(50, 'desktop')};

  color: ${color.text.light};
`

export { PaginationContainer }
