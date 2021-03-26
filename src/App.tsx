import './App.css'
import styled from 'styled-components'
import { color, spaceDt } from '@helpers/styles'
import Header from '@components/Header'
import Footer from '@components/Footer'
import StylesGlobal from '@components/StylesGlobal'
import NavBar from '@components/NavBar'
import BottomBar from '@components/BottomBar'
import GithubUsersList from '@components/GithubUsersList'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.bg.primary};
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${color.text.light};
  background-color: ${color.bg.black};
  padding: ${spaceDt(2)} ${spaceDt(3)};
`

function App() {
  return (
    <AppContainer>
      <StylesGlobal />
      <Header />
      <BodyContainer>
        <NavBar />
        <GithubUsersList />
        <BottomBar />
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
