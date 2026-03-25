export default function Pagination({ total, perPage, setPage }) {
  const pages = Math.ceil(total / perPage);

  return (
    <div className="button-group">
      {[...Array(pages)].map((_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}