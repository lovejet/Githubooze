import GithubUserCard from '@components/GithubUserCard'
import { selectSearchQuery } from '@redux-reducers/search-query'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { GithubUsersListContainer } from './GithubUsersList.styled'

const GithubUsersList = () => {
  const searchQuery = useSelector(selectSearchQuery)

  console.log(searchQuery)
  
  return (
    <GithubUsersListContainer>
      <GithubUserCard />
    </GithubUsersListContainer>
  )
}

export default memo(GithubUsersList)
