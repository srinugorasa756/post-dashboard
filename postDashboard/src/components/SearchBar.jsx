export default function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Search posts..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}