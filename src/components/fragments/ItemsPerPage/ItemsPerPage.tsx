import { ChangeEvent, memo, useState } from 'react'
import { ITEMS_PER_PAGE } from '@constants';
import { color } from '@helpers/styles';
import { ListSubheader, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { ItemsPerPageBoxContainer, CustomSelectRender, CustomSelectRenderPrefix } from './ItemsPerPage.styled'
import { toVW } from '@helpers/methods';

const useStyles = makeStyles((theme) => ({
  select: {
    color: color.bg.light,
    height: toVW(50, 'desktop'),
  },
  icon: {
    fill: color.bg.light,
  },
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
  checkIconNormal: {
    fill: color.text.light,
  },
  checkIconChecked: {
    fill: color.text.black,
  },
}));

const ItemsPerPage = () => {
  const classes = useStyles()
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE[0])

  const onChange = (event: ChangeEvent<{ value: unknown }>) => {
    const updatedSortOptions = event.target.value as number
    if(updatedSortOptions === -1) return
    setItemsPerPage(updatedSortOptions)
  }

  return (
    <ItemsPerPageBoxContainer>
      <Select
        value={itemsPerPage}
        onChange={onChange}
        className={classes.select}
        variant="outlined"
        input={
          <OutlinedInput
            name="age"
            id="outlined-age-simple"
            classes={classes}
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
          <MenuItem value={items_per_page}>
            <CheckIcon className={ itemsPerPage === items_per_page ? classes.checkIconChecked : classes.checkIconNormal } />
            {items_per_page}
          </MenuItem>
        ))}
      </Select>
    </ItemsPerPageBoxContainer>
  )
}

export default memo(ItemsPerPage)
