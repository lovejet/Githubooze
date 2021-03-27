export const APPLICATION_TITLE = 'Githubooze'
export const APPLICATION_DEVELOPER = 'lovejet'
export const API_GITHUG_USER_SEARCH_URL = 'https://api.github.com/search/users?q=%1&page=%2&per_page=%3&order=%4&sort=%5'
export const SORT_OPTIONS = [
  {
    key: 'Best match',
    o: 'desc',
    s: '',
  },
  {
    key: 'Most stars',
    o: 'desc',
    s: 'followers',
  },
  {
    key: 'Fewest stars',
    o: 'asc',
    s: 'followers',
  },
  {
    key: 'Most forks',
    o: 'desc',
    s: 'repositories',
  },
  {
    key: 'Fewest forks',
    o: 'asc',
    s: 'repositories',
  },
  {
    key: 'Recently updated',
    o: 'desc',
    s: 'joined',
  },
  {
    key: 'Last recently updated',
    o: 'asc',
    s: 'joined',
  },
]
export const ITEMS_PER_PAGE = [
  10,
  25,
  50,
  100,
]