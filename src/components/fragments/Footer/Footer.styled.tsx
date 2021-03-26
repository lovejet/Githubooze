import styled from 'styled-components'
import { CopyRightSymbol } from '@illustrations'
import { screenMin, color, spaceDt, getTypography } from '@helpers/styles'
import { toVW } from '@helpers/methods'

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: ${spaceDt(2)};
  margin-bottom: ${spaceDt(1)};
`

const CopyrightText = styled.div`
  display: flex;
  color: ${color.text.secondary};
  align-items: center;

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
