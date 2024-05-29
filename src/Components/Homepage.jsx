import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
import './Directory.css';

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default Homepage;
