import { ChangeEvent, memo, useState } from 'react'
import { SORT_OPTIONS } from '@constants';
import { color } from '@helpers/styles';
import { ListSubheader, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { SortOptionsBoxContainer, CustomSelectRender, CustomSelectRenderPrefix } from './SortOptionsBox.styled'
import { toVW } from '@helpers/methods';

const useStyles = makeStyles((theme) => ({
  select: {
    height: toVW(50, 'desktop'),
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

const SortOptionsBox = () => {
  const classes = useStyles()
  const [sortOptions, setSortOptions] = useState(0)

  const onChange = (event: ChangeEvent<{ value: unknown }>) => {
    const updatedSortOptions = event.target.value as number
    if(updatedSortOptions === -1) return
    setSortOptions(updatedSortOptions)
  }

  return (
    <SortOptionsBoxContainer>
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
              {SORT_OPTIONS[index]}
            </CustomSelectRender>
          )
        }}
      >
        <ListSubheader value={-1}>Sort Options</ListSubheader>
        {SORT_OPTIONS.map((option: string, index: number) => (
          <MenuItem value={index}>
            <CheckIcon className={ sortOptions === index ? classes.checkIconChecked : classes.checkIconNormal } />
            {option}
          </MenuItem>
        ))}
      </Select>
    </SortOptionsBoxContainer>
  )
}

export default memo(SortOptionsBox)
