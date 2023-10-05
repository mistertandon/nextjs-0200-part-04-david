const getAllUsers = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!result.ok) throw new Error("Failed to fetch data");

  return result.json();
};

/**
 * Available options for cache configurations are
 * "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
 * {cache: 'force-cache'}
 * {cache: 'no-store'}
 */
const fetchUserRecord = async (userId: string) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "force-cache" }
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
