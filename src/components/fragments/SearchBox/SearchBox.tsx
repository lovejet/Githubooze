import { memo, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles';
import { CustomInput, SearchBoxContainer } from './SearchBox.styled'
import { color } from '@helpers/styles';

interface Interface_StyleProps {
  isActive?: boolean,
}

const useStyles = makeStyles((theme) => ({
  search_icon: (props: Interface_StyleProps) => ({
    color: props.isActive ? color.bg.secondary : color.bg.light,
  }),
}));

const SearchBox = () => {
  const [isActive, setActive] = useState(false)
  const classes = useStyles({ isActive })

  const onBlur = () => {
    setActive(false)
  }

  const onClick = () => {
    setActive(true)
  }

  return (
    <SearchBoxContainer>
      <SearchIcon className={classes.search_icon} />
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
