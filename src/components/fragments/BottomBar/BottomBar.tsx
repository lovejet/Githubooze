import { memo } from 'react'
import ItemsPerPage from '@components/ItemsPerPage'
import { BottomBarContainer } from './BottomBar.styled'
// import CustomPagination from '@components/CustomPagination'

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <ItemsPerPage />
      {/* <CustomPagination pages={10} /> */}
    </BottomBarContainer>
  )
}

export default memo(BottomBar)
