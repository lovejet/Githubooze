import PropTypes from 'prop-types'

export interface INTERFACE_SORT_OPTIONS {
  key: string,
  o: string,
  s: string,
}

export interface INTERFACE_SEARCH_QUERY {
  q: string,
  sortOptions: INTERFACE_SORT_OPTIONS,
  itemsPerPage: number,
  currentPage: number,
}

export const TYPE_COMPONENT = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.elementType,
])
