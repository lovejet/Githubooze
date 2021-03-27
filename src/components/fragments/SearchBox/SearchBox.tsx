import { ChangeEvent, KeyboardEvent, memo, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import { CustomInput, SearchBoxContainer } from './SearchBox.styled'
import { color } from '@helpers/styles'
import { useDispatch } from 'react-redux'
import { setQuery } from '@redux-reducers/search-query'

const useStyles = makeStyles((theme) => ({
  searchBoxNormal: {
    fill: color.bg.light,
  },
  searchBoxActive: {
    fill: color.bg.secondary,
  }
}));

const SearchBox = () => {
  const [text, setText] = useState('')
  const [isActive, setActive] = useState(false)
  const classes = useStyles()
  const dispatch = useDispatch()

  const onBlur = () => {
    setActive(false)
  }

  const onClick = () => {
    setActive(true)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') dispatch(setQuery(text))
  }

  return (
    <SearchBoxContainer>
      <SearchIcon className={isActive ? classes.searchBoxActive : classes.searchBoxNormal} />
      <CustomInput
        placeholder="Search..."
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </SearchBoxContainer>
  )
}

export default memo(SearchBox)
