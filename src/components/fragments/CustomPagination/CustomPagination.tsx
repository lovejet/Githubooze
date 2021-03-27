import { ChangeEvent, memo } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Pagination, PaginationItem } from '@material-ui/lab'
import { PaginationContainer } from './CustomPagination.styled'
import { makeStyles } from '@material-ui/core'
import { color } from '@helpers/styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchQuery, setCurrentPage } from '@redux-reducers/search-query'

const useStyles = makeStyles((theme) => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: color.text.light,
      font: 'inherit',
      fontSize: 18,
    },
    "& .Mui-selected": {
      color: color.bg.secondary,
    },
  },
  selected: {},
}));

function CustomPagination ({ pages }: InferProps<typeof CustomPagination.propTypes>) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectSearchQuery)

  const onChange = (event: ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value))
  }

  return (
    <PaginationContainer>
      <Pagination
        classes={{ul: classes.ul}}
        count={pages}
        page={searchQuery.currentPage}
        onChange={onChange} 
        renderItem={(item)=> <PaginationItem {...item} classes={{selected:classes.selected}} />} />
    </PaginationContainer>
  )
}

CustomPagination.propTypes = {
  pages: PropTypes.number.isRequired
}

export default memo(CustomPagination)
