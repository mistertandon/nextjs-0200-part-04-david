const getAllUsers = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!result.ok) throw new Error("Failed to fetch data");

  return result.json();
};

const fetchUserRecord = async (userId: string) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!result.ok) throw new Error("Failed to fetch Userdata");

  return result.json();
};

const fetchUserPosts = async (userId: string) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );

  if (!result.ok) throw new Error("Failed to fetch User posts");

  return result.json();
};

export { getAllUsers, fetchUserRecord, fetchUserPosts };
