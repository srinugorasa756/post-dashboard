import React, { useEffect, useState, useMemo } from "react";
import { fetchPosts } from "../services/api";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching posts");
        setLoading(false);
      });
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  const paginatedPosts = useMemo(() => {
    const start = (page - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, page]);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <SearchBar setSearch={setSearch} />

      {paginatedPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}

      <Pagination
        total={filteredPosts.length}
        perPage={postsPerPage}
        setPage={setPage}
      />
    </div>
  );
}