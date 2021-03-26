import { ChangeEvent, useState } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { Pagination } from '@material-ui/lab'
import { PaginationContainer } from './CustomPagination.styled'
import { makeStyles } from '@material-ui/core'
import { color } from '@helpers/styles'

const useStyles = makeStyles((theme) => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: color.text.light,
      backgroundColor: color.bg.secondary
    }
  }
}));

export default function CustomPagination({ pages }: InferProps<typeof CustomPagination.propTypes>) {
  const [page, setPage] = useState(1)
  const classes = useStyles()

  const onChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <PaginationContainer>
      <Pagination classes={{ ul: classes.ul }} count={pages} page={page} onChange={onChange} />
    </PaginationContainer>
  )
}

CustomPagination.propTypes = {
  pages: PropTypes.number.isRequired
}
