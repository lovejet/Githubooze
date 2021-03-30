import { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API_GITHUB_USER_REPOS } from '@constants'

import Error from '@components/Error'
import Loading from '@components/Loading'
import NoResult from '@components/NoResult'
import RepoCard from '@components/RepoCard'

import { fetchRepos, selectRepoList } from '@redux-reducers/repo-list'

import { UserRepoListContainer, ListContainer } from './UserRepoList.styled'

const UserRepoList = ({ user }: { user: string | undefined }) => {
  const dispatch = useDispatch()
  const repoList = useSelector(selectRepoList)

  const renderList = () => {
    return (
      <ListContainer>
        {repoList.data.map((repo) => <RepoCard key={repo.node_id} repo={repo} />)}
      </ListContainer>
    )
  }

  const renderChild = () => {
    if (repoList.status === 'loading') return <Loading />
    if (repoList.error) return <Error />
    if (repoList.data.length === 0) return <NoResult />
    return renderList()
  }

  useEffect(() => {
      const api_url = API_GITHUB_USER_REPOS.replace("%1", user || '')
                                           .replace("%2", repoList.current_page.toString())
      
      dispatch(fetchRepos(api_url))
  }, [dispatch, user, repoList.current_page])
  
  return (
    <UserRepoListContainer>
      {renderChild()}
    </UserRepoListContainer>
  )
}

export default memo(UserRepoList)
