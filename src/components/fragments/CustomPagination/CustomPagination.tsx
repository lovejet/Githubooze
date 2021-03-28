import { ChangeEvent, memo } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core'
import { Pagination, PaginationItem } from '@material-ui/lab'

import { color } from '@helpers/styles'

import { selectSearchQuery, setCurrentPage } from '@redux-reducers/search-query'
import { selectRepoList, setCurrentPageOfRepo } from '@redux-reducers/repo-list'

import { PaginationContainer } from './CustomPagination.styled'

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

function CustomPagination ({ pages, type }: InferProps<typeof CustomPagination.propTypes>) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const searchQuery = useSelector(selectSearchQuery)
  const repoList = useSelector(selectRepoList)

  const onChange = (event: ChangeEvent<unknown>, value: number) => {
    if (type === 'users') dispatch(setCurrentPage(value))
    else dispatch(setCurrentPageOfRepo(value))
  }

  return (
    <PaginationContainer>
      <Pagination
        classes={{ul: classes.ul}}
        count={pages}
        page={type === 'users' ? searchQuery.currentPage : repoList.current_page}
        onChange={onChange} 
        renderItem={(item)=> <PaginationItem {...item} classes={{selected:classes.selected}} />} />
    </PaginationContainer>
  )
}

CustomPagination.propTypes = {
  pages: PropTypes.number.isRequired,
  type: PropTypes.string,
}

CustomPagination.defaultProps = {
  type: 'users',
}

export default memo(CustomPagination)
