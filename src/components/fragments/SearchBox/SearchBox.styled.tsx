import styled from 'styled-components'

import { toVW } from '@helpers/methods'
import { color, getTypography, screenMax, spaceDt } from '@helpers/styles'

import { withStyles } from '@material-ui/core/styles'
import { InputBase } from '@material-ui/core'

const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${toVW(50, 'desktop')};
  width: 60%;
  min-width: 60%;

  color: ${color.text.light};
  ${getTypography('body-2')};

  ${screenMax('lg')} {
    height: ${toVW(50, 'mobile')};
    width: 100%;
    min-width: 100%;
  }
`

const CustomInput = withStyles({
  root: {
    width: '100%',
    marginLeft: spaceDt(1),
    borderBottom: `1px solid ${color.bg.light2}`,
    '&:hover': {
      borderBottom: `1px solid ${color.bg.light3}`,
    },
    font: 'inherit',
    fontSize: 18,
    lineHeight: 26,
  },
  input: {
    color: color.bg.light,
    font: 'inherit',
    fontSize: 18,
    lineHeight: 26,
  },
  focused: {
    borderBottom: `1px solid ${color.bg.secondary}`,
    '&:hover': {
      borderBottom: `1px solid ${color.bg.secondary}`
    },
  },
})(InputBase);

export { SearchBoxContainer, CustomInput }
