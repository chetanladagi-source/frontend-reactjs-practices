import { users } from "../data/users";

const fetchUsersData = async ({ searchText }) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Api goes here
    if (!searchText.trim()) {
      return users;
    }
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredUsers;
  } catch (e) {
    throw new Error("Unable to fetch Employee");
  }
};

export default fetchUsersData;
