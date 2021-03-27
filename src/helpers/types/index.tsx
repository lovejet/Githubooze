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

export interface INTERFACE_USER {
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  score: number,
}

export interface INTERFACE_USER_INFO { //RE-CHECK
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string | null,
  company: string | null,
  blog: string | null,
  location: string | null,
  email: string | null,
  hireable: string | null,
  bio: string | null,
  twitter_username: string | null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string,
}

export interface INTERFACE_USER_LIST {
  status: "loading" | "idle",
  total: number,
  data: INTERFACE_USER[],
  error: string | null,
}

export interface INTERFACE_USER_DATA {
  status: "loading" | "idle",
  data: INTERFACE_USER_INFO | null,
  error: string | null,
}

export interface INTERFACE_USER_LIST_RESPONSE {
  total_count: number,
  incomplete_results: boolean,
  items: INTERFACE_USER[],
}

export interface INTERFACE_REJECT_VALUE {
  message: string,
}

export const TYPE_COMPONENT = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
  PropTypes.elementType,
])
