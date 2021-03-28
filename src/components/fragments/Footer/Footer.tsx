import { memo } from 'react'
import { APPLICATION_DEVELOPER } from '@constants'
import { FooterContainer, CopyrightText, CopyRightVector } from './Footer.styled'

const Footer = () => (
  <FooterContainer>
    <CopyrightText>Copyright<CopyRightVector />2021 All Rights Reserved by {APPLICATION_DEVELOPER}</CopyrightText>
  </FooterContainer>
)

export default memo(Footer)
