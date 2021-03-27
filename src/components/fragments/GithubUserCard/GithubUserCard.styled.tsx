import { toVW } from '@helpers/methods'
import { color, spaceDt } from '@helpers/styles'
import styled from 'styled-components'

const GithubUserCardContainer = styled.div`
  width: ${toVW(420, 'desktop')};
  height: ${toVW(200, 'desktop')};
  margin: ${spaceDt(2)};
  background-color: ${color.bg.primary};
`

export { GithubUserCardContainer }
