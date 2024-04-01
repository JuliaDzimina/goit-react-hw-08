const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <p>Search by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
