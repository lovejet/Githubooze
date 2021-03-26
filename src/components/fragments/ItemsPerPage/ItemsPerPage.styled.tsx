import styled from 'styled-components'
import { color, spaceDt } from '@helpers/styles'
import { toVW } from '@helpers/methods'

const ItemsPerPageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

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

const CustomSelectRenderCount = styled.div`
  text-align: end;
  width: ${toVW(20, 'desktop')};
`

export { ItemsPerPageBoxContainer, CustomSelectRender, CustomSelectRenderPrefix, CustomSelectRenderCount }
