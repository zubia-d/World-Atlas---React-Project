// this is a React functional component called SearchFilter.

// It receives props:

// search: the 

// setSearch: function to update the search term.

// filter: the current selected region.

// setFilter: function to update the region filter.

// countries: current list of countries.

// setCountries: function to update the countries list (after sorting).



export const SearchFilter = ({
  search,  //current search term.
  setSearch, //function to update the search term.
  filter, // current selected region.
  setFilter, // function to update the region filter.
  countries, // current list of countries.
  setCountries, // function to update the countries list (after sorting).
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => sortCountries("des")}>Desc</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};