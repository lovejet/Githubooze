import styled from 'styled-components'
import { CopyRightSymbol } from '@illustrations'
import { screenMin, color, spaceDt, getTypography } from '@helpers/styles'
import { toVW } from '@helpers/methods'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${toVW(30, 'desktop')};
  display: flex;
  justify-content: flex-end;
  background-color: ${color.bg.primary};
`

const CopyrightText = styled.div`
  display: flex;
  color: ${color.text.primary};
  align-items: center;
  margin-right: ${spaceDt(1)};

  ${getTypography('body-3')};
`

const CopyRightVector = styled(CopyRightSymbol)`
  ${screenMin('lg')} {
    width: ${toVW(12, 'desktop')};
    height: ${toVW(12, 'desktop')};
    margin-left: ${spaceDt(0.5)};
    margin-right: ${spaceDt(0.5)};
  }
`

export { FooterContainer, CopyrightText, CopyRightVector }
