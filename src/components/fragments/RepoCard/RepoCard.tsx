import { memo } from 'react'

import { INTERFACE_REPO } from '@helpers/types'
import StarIcon from '@material-ui/icons/Star'
import ForkIcon from '@material-ui/icons/CallSplit'
import WatchIcon from '@material-ui/icons/Visibility'

import {
  RepoCardContainer,
  RepoName,
  RepoDescription,
  InfoPane,
  CountPane,
  LargeField,
  LargeFieldText
} from './RepoCard.styled'

const RepoCard = ({ repo }: { repo: INTERFACE_REPO}) => {
  const renderLargeField = (icon: React.ReactNode, text: React.ReactNode) => (
    <LargeField>{icon}<LargeFieldText>{text}</LargeFieldText></LargeField>
  )

  return (
    <RepoCardContainer>
      <InfoPane>
        <RepoName href={repo.html_url}>{repo.name}</RepoName>
        <RepoDescription>{repo.description}</RepoDescription>
      </InfoPane>
      <CountPane>
        {renderLargeField(
          <StarIcon />,
          `${repo.stargazers_count}`
        )}
        {renderLargeField(
          <ForkIcon />,
          `${repo.forks_count}`
        )}
        {renderLargeField(
          <WatchIcon />,
          `${repo.watchers_count}`
        )}
      </CountPane>
    </RepoCardContainer>
  )
}

export default memo(RepoCard)
