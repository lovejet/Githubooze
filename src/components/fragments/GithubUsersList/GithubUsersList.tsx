import { API_GITHUG_USER_SEARCH_URL } from '@constants'
import { selectSearchQuery } from '@redux-reducers/search-query'
import { fetchUsers, resetUserList, selectUserList } from '@redux-reducers/user-list'
import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GithubUsersListContainer, TotalUserCount, ListContainer } from './GithubUsersList.styled'
import Loading from '@components/Loading'
import NoResult from '@components/NoResult'
import Error from '@components/Error'
import GithubUserCard from '@components/GithubUserCard'

const GithubUsersList = () => {
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectSearchQuery)
  const userList = useSelector(selectUserList)

  const renderList = () => {
    return (
      <ListContainer>
        {userList.data.map((user) => <GithubUserCard key={user.node_id} user={user}/>)}
      </ListContainer>
    )
  }

  const renderChild = () => {
    if (userList.status === 'loading') return <Loading />
    if (userList.error) return <Error />
    if (userList.data.length === 0) return <NoResult />
    return renderList()
  }

  useEffect(() => {
    if(searchQuery.q !== '') {
      const api_url = API_GITHUG_USER_SEARCH_URL.replace("%1", searchQuery.q)
                                                .replace("%2", searchQuery.currentPage.toString())
                                                .replace("%3", searchQuery.itemsPerPage.toString())
                                                .replace("%4", searchQuery.sortOptions.o)
                                                .replace("%5", searchQuery.sortOptions.s)
      dispatch(fetchUsers(api_url))
    } else {
      dispatch(resetUserList())
    }
  }, [dispatch, searchQuery])
  
  return (
    <GithubUsersListContainer>
      <TotalUserCount active={userList.total !== 0}>{userList.total} user{userList.total >= 2 ? 's' : ''} found.</TotalUserCount>
      {renderChild()}
    </GithubUsersListContainer>
  )
}

export default memo(GithubUsersList)
