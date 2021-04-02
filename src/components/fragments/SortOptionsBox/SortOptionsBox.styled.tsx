import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color, getTypography, screenMax, spaceDt, spaceMb } from '@helpers/styles'

const SortOptionsBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${toVW(50, 'desktop')};
  width: 35%;
  min-width: 35%;

  color: ${color.text.light};

  ${screenMax('lg')} {
    height: ${toVW(50, 'mobile')};
    width: 100%;
    min-width: 100%;
  }
`

const CustomSelectRender = styled.div`
  display: flex;
  flex-direction: row;

  ${getTypography('body-2')};
`

const CustomSelectRenderPrefix = styled.div`
  color: ${color.text.primary};
  margin-right: ${spaceDt(1)};

  ${screenMax('lg')} {
    margin-right: ${spaceMb(1)};
  }
`

export { SortOptionsBoxContainer, CustomSelectRender, CustomSelectRenderPrefix }
