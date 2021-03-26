import { memo } from 'react'
import SearchBox from '@components/SearchBox'
import SortOptionsBox from '@components/SortOptionsBox'
import { NavBarContainer } from './NavBar.styled'

const NavBar = () => {
  return (
    <NavBarContainer>
      <SearchBox />
      <SortOptionsBox />
    </NavBarContainer>
  )
}

export default memo(NavBar)
