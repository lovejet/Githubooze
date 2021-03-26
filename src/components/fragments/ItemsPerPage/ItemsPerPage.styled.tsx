import styled from 'styled-components'
import { color, spaceDt } from '@helpers/styles'
import { toVW } from '@helpers/methods'

const ItemsPerPageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${toVW(50, 'desktop')};

  color: ${color.text.light};
`

const CustomSelectRender = styled.div`
  display: flex;
  flex-direction: row;
`

const CustomSelectRenderPrefix = styled.div`
  color: ${color.text.primary};
  margin-right: ${spaceDt(1)};
`

export { ItemsPerPageBoxContainer, CustomSelectRender, CustomSelectRenderPrefix }
