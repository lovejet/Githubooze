import SearchBox from '@components/SearchBox'
// import SortOptionBox from '@components/SortOptionBox'
import { NavBarContainer } from './NavBar.styled'

const NavBar = () => {
  return (
    <NavBarContainer>
      <SearchBox />
      {/* <SortOptionBox /> */}
    </NavBarContainer>
  )
}

export default NavBar
