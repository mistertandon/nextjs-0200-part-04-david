type UserPostsType = {
  userPromise: Promise<User>;
  userPostsPromise: Promise<Post[]>;
};

const UserPosts = async ({ userPromise, userPostsPromise }: UserPostsType) => {
  const user = await userPromise;
  const userPosts = await userPostsPromise;
  const { name } = user;

  return (
    <article>
      <h3>Posts by {name}</h3>
      <section className="user-posts--container">
        {userPosts.map(({ id, title, body }) => (
          <div className="user-post--container" key={id}>
            <div className="user-post__title">{title}</div>
            <div className="user-post__body">{body}</div>
          </div>
        ))}
      </section>
    </article>
  );
};

export default UserPosts;