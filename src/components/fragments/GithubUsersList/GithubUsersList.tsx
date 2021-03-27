import GithubUserCard from '@components/GithubUserCard'
import { GithubUsersListContainer } from './GithubUsersList.styled'

const GithubUsersList = () => {
  return (
    <GithubUsersListContainer>
      <GithubUserCard />
    </GithubUsersListContainer>
  )
}

export default GithubUsersList
