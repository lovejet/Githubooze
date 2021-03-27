export const APPLICATION_TITLE = 'Githubooze'
export const APPLICATION_DEVELOPER = 'lovejet'
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