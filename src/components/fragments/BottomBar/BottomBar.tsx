import { memo } from 'react'
import ItemsPerPage from '@components/ItemsPerPage'
import { BottomBarContainer } from './BottomBar.styled'
import CustomPagination from '@components/CustomPagination'
import { useSelector } from 'react-redux'
import { selectUserList } from '@redux-reducers/user-list'
import { selectSearchQuery } from '@redux-reducers/search-query'

const BottomBar = () => {
  const searchQuery = useSelector(selectSearchQuery)
  const userList = useSelector(selectUserList)
  return (
    <BottomBarContainer>
      <ItemsPerPage />
      <CustomPagination pages={Math.min(Math.ceil(userList.total / searchQuery.itemsPerPage), 100)} />
    </BottomBarContainer>
  )
}

export default memo(BottomBar)
