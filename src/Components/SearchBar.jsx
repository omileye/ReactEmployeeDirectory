import './Directory.css';

function SearchBar() {
  return (
    <div className="SearchBar"> 
      <input type="text" placeholder="Search employees..." />
      <input type="submit" />
    </div>
  );
}

export default SearchBar;
