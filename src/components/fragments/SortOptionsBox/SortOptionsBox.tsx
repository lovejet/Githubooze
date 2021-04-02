import { ChangeEvent, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SORT_OPTIONS } from '@constants'

import { color } from '@helpers/styles'
import { toVW } from '@helpers/methods'
import { useStateScreenMobile } from '@helpers/hooks'
import { INTERFACE_SORT_OPTIONS } from '@helpers/types'

import CheckIcon from '@material-ui/icons/Check'
import { ListSubheader, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core'

import { selectSearchQuery, setCurrentPage, setSortOptions } from '@redux-reducers/search-query'

import { SortOptionsBoxContainer, CustomSelectRender, CustomSelectRenderPrefix } from './SortOptionsBox.styled'

const useStyles = makeStyles((theme) => ({
  select: {
    height: toVW(50, 'desktop'),
    color: color.bg.light,
  },
  selectMobile: {
    width: '100%',
    height: toVW(50, 'mobile'),
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
  const searchQuery = useSelector(selectSearchQuery)
  const inputClasses = useInputStyles()
  const [sortOptionsIndex, setSortOptionsIndex] = useState(searchQuery.sortOptions.index)
  const dispatch = useDispatch()

  const onChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newIndex = event.target.value as number
    if(newIndex === -1) return
    setSortOptionsIndex(newIndex)
    dispatch(setSortOptions(SORT_OPTIONS[newIndex]))
    dispatch(setCurrentPage(1))
  }

  return (
    <SortOptionsBoxContainer>
      <Select
        value={sortOptionsIndex}
        onChange={onChange}
        className={!useStateScreenMobile() ? classes.select : classes.selectMobile}
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
