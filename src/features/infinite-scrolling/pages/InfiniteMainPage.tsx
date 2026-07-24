import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import { useInfiniteUsers } from "../hooks/useInfiniteUsers";

function InfiniteMainPage() {
  const { users, loading, error, hasMore, sentinelRef } = useInfiniteUsers();

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <h1>Infinite Scroll</h1>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      {loading && <Loader />}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !hasMore && (
        <p style={{ textAlign: "center" }}>No more users</p>
      )}

      <div
        ref={sentinelRef}
        style={{
          height: 1,
        }}
      />
    </div>
  );
}

export default InfiniteMainPage;
