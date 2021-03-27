import { toVW } from '@helpers/methods'
import { color, getTypography } from '@helpers/styles'
import { memo } from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - ${toVW(25)});
  width: 100%;
  color: ${color.text.light};
  ${getTypography('heading-3')};
`

const Loading = () => (
  <LoadingContainer>
    Loading...
  </LoadingContainer>
)

export default memo(Loading)
