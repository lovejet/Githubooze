import { ChangeEvent, memo, useState } from 'react'
import { ITEMS_PER_PAGE } from '@constants';
import { color } from '@helpers/styles';
import { ListSubheader, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { ItemsPerPageBoxContainer, CustomSelectRender, CustomSelectRenderPrefix, CustomSelectRenderCount } from './ItemsPerPage.styled'

const useStyles = makeStyles((theme) => ({
  select: {
    color: color.bg.light,
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
  const [sortOptions, setSortOptions] = useState(0)

  const onChange = (event: ChangeEvent<{ value: unknown }>) => {
    const updatedSortOptions = event.target.value as number
    if(updatedSortOptions === -1) return
    setSortOptions(updatedSortOptions)
  }

  return (
    <ItemsPerPageBoxContainer>
      <Select
        value={sortOptions}
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
          const index = value as number
          return (
            <CustomSelectRender>
              <CustomSelectRenderPrefix>Count: </CustomSelectRenderPrefix>
              <CustomSelectRenderCount>{ITEMS_PER_PAGE[index]}</CustomSelectRenderCount>
            </CustomSelectRender>
          )
        }}
      >
        <ListSubheader value={-1}>Items per page</ListSubheader>
        {ITEMS_PER_PAGE.map((items_per_page: number, index: number) => (
          <MenuItem value={index}>
            <CheckIcon className={ sortOptions === index ? classes.checkIconChecked : classes.checkIconNormal } />
            {items_per_page}
          </MenuItem>
        ))}
      </Select>
    </ItemsPerPageBoxContainer>
  )
}

export default memo(ItemsPerPage)
