import { ChangeEvent, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce";

import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import { color } from "@helpers/styles";

import {
  selectSearchQuery,
  setCurrentPage,
  setQuery,
} from "@redux-reducers/search-query";

import { CustomInput, SearchBoxContainer } from "./SearchBox.styled";

const useStyles = makeStyles((theme) => ({
  searchBoxNormal: {
    fill: color.bg.light,
  },
  searchBoxActive: {
    fill: color.bg.secondary,
  },
}));

const SearchBox = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const [text, setText] = useState(searchQuery.q);
  const [isActive, setActive] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const debouncedSetText = useDebouncedCallback((nextValue: string) => {
    dispatch(setCurrentPage(1));
    dispatch(setQuery(nextValue));
  }, 1000);

  const onBlur = () => {
    setActive(false);
  };

  const onClick = () => {
    setActive(true);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    debouncedSetText(event.target.value);
  };

  return (
    <SearchBoxContainer>
      <SearchIcon
        className={isActive ? classes.searchBoxActive : classes.searchBoxNormal}
      />
      <CustomInput
        value={text}
        placeholder="Search..."
        onBlur={onBlur}
        onClick={onClick}
        onChange={onChange}
      />
    </SearchBoxContainer>
  );
};

export default memo(SearchBox);
