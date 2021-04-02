import { memo } from 'react'
import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color, getTypography, screenMax } from '@helpers/styles'

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - ${toVW(25, 'desktop')});
  width: 100%;
  color: ${color.text.light};
  ${getTypography('heading-3')};
  
  ${screenMax('lg')} {
    height: calc(100% - ${toVW(25, 'mobile')});
  }
`

const Loading = () => (
  <LoadingContainer>
    Loading...
  </LoadingContainer>
)

export default memo(Loading)
