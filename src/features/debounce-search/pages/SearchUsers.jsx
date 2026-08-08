import { useEffect, useState } from "react";
import debounceSearchText from "../hooks/useDebounceSearch";
import fetchUsersData from "../services/fetchUsers";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  width: "100%",
  height: "100vh",
  alignItems: "center",
};

const inputStyle = {
  width: "250px",
  padding: "10px",
};

const SearchUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const debaouncedText = debounceSearchText({ searchText });

  const fetchUsers = async (searchText) => {
    setLoading(true);
    try {
      const data = await fetchUsersData({ searchText });
      setUsers(data);
      setLoading(false);
    } catch (e) {
      setError(e.messsage);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(debaouncedText);
  }, [debaouncedText]);

  return (
    <div style={containerStyle}>
      <input
        type="text"
        style={inputStyle}
        placeholder="Search users..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
};

export default SearchUsers;
