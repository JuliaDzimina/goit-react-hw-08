import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={css.searchBox}>
      <label>Find contacts by name</label>
      <input
        type="text"
        className={css.seachInput}
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
