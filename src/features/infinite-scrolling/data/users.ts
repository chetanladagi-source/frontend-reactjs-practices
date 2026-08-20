export const users = Array(100)
  .fill(0)
  .map((_, index) => {
    return {
      id: index,
      name: "User " + (index + 1),
      email: "emailuser " + (index + 1) + "@gmail.com",
      age: "30",
    };
  });
