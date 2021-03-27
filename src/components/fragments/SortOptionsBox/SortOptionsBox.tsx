import { ChangeEvent, memo, useState } from 'react'
import { SORT_OPTIONS } from '@constants'
import { color } from '@helpers/styles'
import { ListSubheader, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { SortOptionsBoxContainer, CustomSelectRender, CustomSelectRenderPrefix } from './SortOptionsBox.styled'
import { toVW } from '@helpers/methods'
import { INTERFACE_SORT_OPTIONS } from '@helpers/types'
import { useDispatch } from 'react-redux'
import { setSortOptions } from '@redux-reducers/search-query'

const useStyles = makeStyles((theme) => ({
  select: {
    height: toVW(50, 'desktop'),
    color: color.bg.light,
  },
  icon: {
    fill: color.bg.light,
  },
  checkIconNormal: {
    fill: color.text.light,
  },
  checkIconChecked: {
    fill: color.text.black,
  },
}));

const useInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      borderColor: color.bg.light2,
    },
    "&:hover $notchedOutline": {
      borderColor: color.bg.light3,
    },
    "&$focused $notchedOutline": {
      borderColor: color.bg.secondary,
    }
  },
  focused: {},
  notchedOutline: {},
}))

const SortOptionsBox = () => {
  const classes = useStyles()
  const inputClasses = useInputStyles(0)
  const [sortOptionsIndex, setSortOptionsIndex] = useState(0)
  const dispatch = useDispatch()

  const onChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newIndex = event.target.value as number
    if(newIndex === -1) return
    setSortOptionsIndex(newIndex)
    dispatch(setSortOptions(SORT_OPTIONS[newIndex]))
  }

  return (
    <SortOptionsBoxContainer>
      <Select
        value={sortOptionsIndex}
        onChange={onChange}
        className={classes.select}
        variant="outlined"
        input={
          <OutlinedInput
            name="sort-options"
            id="sort-options"
            classes={inputClasses}
          />
        }
        inputProps={{
          classes: {
              icon: classes.icon,
          },
        }}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null
        }}
        renderValue={(value: unknown) => {
          const index = value as number
          return (
            <CustomSelectRender>
              <CustomSelectRenderPrefix>Sort:</CustomSelectRenderPrefix>
              {SORT_OPTIONS[index].key}
            </CustomSelectRender>
          )
        }}
      >
        <ListSubheader value={-1}>Sort Options</ListSubheader>
        {SORT_OPTIONS.map((option: INTERFACE_SORT_OPTIONS, index: number) => (
          <MenuItem key={index} value={index}>
            <CheckIcon className={ sortOptionsIndex === index ? classes.checkIconChecked : classes.checkIconNormal } />
            {option.key}
          </MenuItem>
        ))}
      </Select>
    </SortOptionsBoxContainer>
  )
}

export default memo(SortOptionsBox)
