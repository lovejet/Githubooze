import './App.css'
import styled from 'styled-components'
import { color } from '@helpers/styles'
import Footer from '@components/Footer'
import StylesGlobal from '@components/StylesGlobal'

const AppContainer = styled.div`
  background-color: ${color.bg.primary};
`

function App() {
  return (
    <AppContainer>
      <StylesGlobal />
      <Footer />
    </AppContainer>
  );
}

export default App;
