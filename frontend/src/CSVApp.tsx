import { Cards } from "./components/Cards";
import { SearchBar } from "./components/SearchBar";

function CSVApp() {
  return (
    <>
      <SearchBar />
      <hr className="border-gray-500" />
      <Cards />
    </>
  );
}

export default CSVApp;
