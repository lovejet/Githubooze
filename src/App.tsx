import './App.css'
import styled from 'styled-components'
import { color, spaceDt } from '@helpers/styles'
import Header from '@components/Header'
import Footer from '@components/Footer'
import StylesGlobal from '@components/StylesGlobal'
import NavBar from '@components/NavBar'
import BottomBar from '@components/BottomBar'
import GithubUsersList from '@components/GithubUsersList'
import { toVW } from '@helpers/methods'
import { useSelector } from 'react-redux'
import { selectUserData } from '@redux-reducers/user-data'
import UserInfo from '@components/UserInfo'

const AppContainer = styled.div`
  background-color: ${color.bg.primary};
`

const BodyContainer = styled.div`
  height: calc(100% - ${toVW(100, 'desktop')});
  color: ${color.text.light};
  background-color: ${color.bg.black};
  padding: ${spaceDt(2)} ${spaceDt(3)};
`

function App() {
  const userData = useSelector(selectUserData)

  return (
    <AppContainer>
      <StylesGlobal />
      <Header />
      <BodyContainer>
        {!userData.data && (
          <>
            <NavBar />
            <GithubUsersList />
            <BottomBar />
          </>
        )}
        {userData.data && (
          <UserInfo />
        )}
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
