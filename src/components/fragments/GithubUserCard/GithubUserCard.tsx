import { memo } from 'react'
import { GithubUserCardContainer } from './GithubUserCard.styled'
import { INTERFACE_USER } from '@helpers/types'

const GithubUserCard = ({ user }: { user: INTERFACE_USER}) => {
  return (
    <GithubUserCardContainer>
      GithubUserCard
    </GithubUserCardContainer>
  )
}

export default memo(GithubUserCard)
