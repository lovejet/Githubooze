export const APPLICATION_TITLE = 'Githubooze'
export const APPLICATION_DEVELOPER = 'lovejet'
export const API_GITHUB_USER_SEARCH_URL = 'https://api.github.com/search/users?q=%1&page=%2&per_page=%3&order=%4&sort=%5'
export const GITHUB_DEVELOP_TOKEN = '4c057610571dbf4e84b784d9bc97556cf002639b'
export const SORT_OPTIONS = [
  {
    index: 0,
    key: 'Best match',
    o: 'desc',
    s: '',
  },
  {
    index: 1,
    key: 'Most stars',
    o: 'desc',
    s: 'followers',
  },
  {
    index: 2,
    key: 'Fewest stars',
    o: 'asc',
    s: 'followers',
  },
  {
    index: 3,
    key: 'Most forks',
    o: 'desc',
    s: 'repositories',
  },
  {
    index: 4,
    key: 'Fewest forks',
    o: 'asc',
    s: 'repositories',
  },
  {
    index: 5,
    key: 'Recently updated',
    o: 'desc',
    s: 'joined',
  },
  {
    index: 6,
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