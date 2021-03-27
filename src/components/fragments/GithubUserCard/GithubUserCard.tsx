import { memo } from 'react'
import { GithubUserCardContainer } from './GithubUserCard.styled'

const GithubUserCard = () => {
  return (
    <GithubUserCardContainer>
      GithubUserCardContainer
    </GithubUserCardContainer>
  )
}

export default memo(GithubUserCard)
