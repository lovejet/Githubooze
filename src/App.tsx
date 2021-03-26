import './App.css'
import styled from 'styled-components'
import { color, spaceDt } from '@helpers/styles'
import Header from '@components/Header'
import Footer from '@components/Footer'
import StylesGlobal from '@components/StylesGlobal'
import NavBar from '@components/NavBar'
import BottomBar from '@components/BottomBar'

const AppContainer = styled.div`
  background-color: ${color.bg.primary};
`

const BodyContainer = styled.div`
  height: 100%;
  color: ${color.text.light};
  background-color: ${color.bg.black};
  padding: ${spaceDt(2)} ${spaceDt(3)};
  
  position: relative;
`

function App() {
  return (
    <AppContainer>
      <StylesGlobal />
      <Header />
      <BodyContainer>
        <NavBar />
        {/* <GithubUsersList /> */}
        <BottomBar />
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
