const reverse = (s: string) => {
  return s.split("").reverse().join("");
};

const MAKE_REV_TOKEN = () => {
  return reverse(process.env.REACT_APP_GITHUB_API_DEVELOP_TOKEN_REV as string);
};

export const APPLICATION_TITLE = "Githubooze";
export const APPLICATION_DEVELOPER = "lovejet";
export const API_GITHUB_USER_SEARCH_URL =
  "https://api.github.com/search/users?q=%1&page=%2&per_page=%3&order=%4&sort=%5";
export const API_GITHUB_USER_STARS =
  "https://api.github.com/users/%1/starred?page=%2&per_page=100";
export const API_GITHUB_USER_REPOS =
  "https://api.github.com/users/%1/repos?page=%2&per_page=100";
export const GITHUB_API_DEVELOP_TOKEN = MAKE_REV_TOKEN();
export const SORT_OPTIONS = [
  {
    index: 0,
    key: "Best match",
    o: "desc",
    s: "",
  },
  {
    index: 1,
    key: "Most stars",
    o: "desc",
    s: "followers",
  },
  {
    index: 2,
    key: "Fewest stars",
    o: "asc",
    s: "followers",
  },
  {
    index: 3,
    key: "Most forks",
    o: "desc",
    s: "repositories",
  },
  {
    index: 4,
    key: "Fewest forks",
    o: "asc",
    s: "repositories",
  },
  {
    index: 5,
    key: "Recently updated",
    o: "desc",
    s: "joined",
  },
  {
    index: 6,
    key: "Last recently updated",
    o: "asc",
    s: "joined",
  },
];
export const ITEMS_PER_PAGE = [10, 25, 50, 100];
