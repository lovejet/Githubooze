import { memo, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles';
import { CustomInput, SearchBoxContainer } from './SearchBox.styled'
import { color } from '@helpers/styles';

const useStyles = makeStyles((theme) => ({
  searchBoxNormal: {
    fill: color.bg.light,
  },
  searchBoxActive: {
    fill: color.bg.secondary,
  }
}));

const SearchBox = () => {
  const [isActive, setActive] = useState(false)
  const classes = useStyles()

  const onBlur = () => {
    setActive(false)
  }

  const onClick = () => {
    setActive(true)
  }

  return (
    <SearchBoxContainer>
      <SearchIcon className={isActive ? classes.searchBoxActive : classes.searchBoxNormal} />
      <CustomInput
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        onBlur={onBlur}
        onClick={onClick}
      />
    </SearchBoxContainer>
  )
}

export default memo(SearchBox)
