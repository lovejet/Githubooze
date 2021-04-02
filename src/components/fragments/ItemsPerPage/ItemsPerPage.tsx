import { ChangeEvent, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ITEMS_PER_PAGE } from '@constants'

import CheckIcon from '@material-ui/icons/Check'
import { ListSubheader, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core'

import { color } from '@helpers/styles'
import { toVW } from '@helpers/methods'

import { selectSearchQuery, setCurrentPage, setItemsPerPage } from '@redux-reducers/search-query'

import { ItemsPerPageBoxContainer, CustomSelectRender, CustomSelectRenderPrefix } from './ItemsPerPage.styled'
import { useStateScreenMobile } from '@helpers/hooks'

const useStyles = makeStyles((theme) => ({
  select: {
    color: color.bg.light,
    height: toVW(50, 'desktop'),
  },
  selectMobile: {
    color: color.bg.light,
    width: '100%',
    height: toVW(50, 'mobile'),
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

const ItemsPerPage = () => {
  const classes = useStyles()
  const inputClasses = useInputStyles()
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectSearchQuery)

  const onChange = (event: ChangeEvent<{ value: unknown }>) => {
    const itemsPerPage = event.target.value as number
    if(itemsPerPage === -1) return
    dispatch(setItemsPerPage(itemsPerPage))
    dispatch(setCurrentPage(1))
  }

  return (
    <ItemsPerPageBoxContainer>
      <Select
        value={searchQuery.itemsPerPage}
        onChange={onChange}
        className={!useStateScreenMobile() ? classes.select : classes.selectMobile}
        variant="outlined"
        input={
          <OutlinedInput
            name="items-per-page"
            id="items-per-page"
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
            vertical: "top",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          getContentAnchorEl: null
        }}
        renderValue={(value: unknown) => {
          const items_per_page = value as number
          return (
            <CustomSelectRender>
              <CustomSelectRenderPrefix>Count: </CustomSelectRenderPrefix>
              {items_per_page}
            </CustomSelectRender>
          )
        }}
      >
        <ListSubheader value={-1}>Items per page</ListSubheader>
        {ITEMS_PER_PAGE.map((items_per_page: number, index: number) => (
          <MenuItem key={index} value={items_per_page}>
            <CheckIcon className={ searchQuery.itemsPerPage === items_per_page ? classes.checkIconChecked : classes.checkIconNormal } />
            {items_per_page}
          </MenuItem>
        ))}
      </Select>
    </ItemsPerPageBoxContainer>
  )
}

export default memo(ItemsPerPage)
