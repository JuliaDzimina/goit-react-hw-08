import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

import { useId } from "react";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const serchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label htmlFor={serchId}>Find contacts by name</label>
      <input
        type="text"
        className={css.seachInput}
        id={serchId}
        value={filter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;
