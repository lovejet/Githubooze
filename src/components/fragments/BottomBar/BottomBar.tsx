import { memo } from 'react'
import ItemsPerPage from '@components/ItemsPerPage'
import { BottomBarContainer } from './BottomBar.styled'

const BottomBar = () => {
  return (
    <BottomBarContainer>
      <ItemsPerPage />
    </BottomBarContainer>
  )
}

export default memo(BottomBar)
