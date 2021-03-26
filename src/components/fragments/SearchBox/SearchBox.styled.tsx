import styled from 'styled-components'
import { color } from '@helpers/styles'

const CustomInput = styled(({ ...otherProps }) => <input {...otherProps} />)`
  color: ${color.text.light} !important;
  border-color: ${color.bg.secondary} !important;

  ::placeholder {
    color: ${color.text.primary} !important;
  }
`

export { CustomInput }
