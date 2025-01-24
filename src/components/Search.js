

function Search({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
}

export default Search;
