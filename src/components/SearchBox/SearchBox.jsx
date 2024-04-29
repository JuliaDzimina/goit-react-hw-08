import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { useId } from "react";

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
