import styled from 'styled-components'
import { toVW } from '@helpers/methods'
import { color, getTypography, spaceDt } from '@helpers/styles'

const RepoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${toVW(530, 'desktop')};
  height: ${toVW(150, 'desktop')};
  margin: ${spaceDt(1)} ${spaceDt(2)};
  background-color: ${color.bg.primary};
  padding: ${spaceDt(2)};
`

const RepoName  = styled.div`
  ${getTypography('body-2')};
`

const RepoDescription = styled.div`
  color: ${color.text.primary};
  margin-top: ${spaceDt(1)};

  ${getTypography('body-5')};
`

const InfoPane = styled.div`
  height: calc(100% - ${toVW(25, 'desktop')});
`

const CountPane = styled.div`
  display: flex;
  flex-direction: row;
  height: ${toVW(25, 'desktop')};
`

const LargeField = styled.div`
  display: flex;
  align-items: center;
  color: ${color.text.primary};
  margin-right: ${spaceDt(2)};
`

const LargeFieldText = styled.div`
  margin-left: ${spaceDt(0.5)};
  ${getTypography('body-3')};
`

export {
  RepoCardContainer,
  RepoName,
  RepoDescription,
  InfoPane,
  CountPane,
  LargeField,
  LargeFieldText
}
