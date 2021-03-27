import { memo } from 'react'
import ItemsPerPage from '@components/ItemsPerPage'
import { BottomBarContainer } from './BottomBar.styled'
import CustomPagination from '@components/CustomPagination'
import { useSelector } from 'react-redux'
import { selectUserList } from '@redux-reducers/user-list'

const BottomBar = () => {
  const userList = useSelector(selectUserList)
  return (
    <BottomBarContainer>
      <ItemsPerPage />
      <CustomPagination pages={userList.total} />
    </BottomBarContainer>
  )
}

export default memo(BottomBar)
