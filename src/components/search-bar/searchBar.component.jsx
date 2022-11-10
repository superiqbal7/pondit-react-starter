const SearchBar = ({className, type, placeholder, onChangeHandler}) => {
  return (
    <input 
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default SearchBar;
