const SearchBox = (props) => {
  const { filter, onSearchChange, className, placeholder } = props;

  return (
    <input
      type='search'
      className={className}
      placeholder={placeholder}
      value={filter}
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
