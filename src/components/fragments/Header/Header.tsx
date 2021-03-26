import { memo } from 'react'
import { HeaderContainer, Title } from './Header.styled'
import { APPLICATION_TITLE } from '@constants'

const Header = () => (
  <HeaderContainer>
    <Title>{APPLICATION_TITLE}</Title>
  </HeaderContainer>
)

export default memo(Header)
