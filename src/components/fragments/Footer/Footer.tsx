import { memo } from 'react'
import { FooterContainer, CopyrightText, CopyRightVector } from './Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>Copyright<CopyRightVector />2021 All Rights Reserved by Lovejet</CopyrightText>
    </FooterContainer>
  )
}

export default memo(Footer)