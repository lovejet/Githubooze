import { memo } from 'react'
import { useSelector } from 'react-redux'

import ItemsPerPage from '@components/ItemsPerPage'
import CustomPagination from '@components/CustomPagination'

import { selectUserList } from '@redux-reducers/user-list'
import { selectSearchQuery } from '@redux-reducers/search-query'

import { BottomBarContainer } from './BottomBar.styled'

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
