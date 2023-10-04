type UserType = {
  userPromise: Promise<User>;
};

const User = async ({ userPromise }: UserType) => {
  const user = await userPromise;
  const { name, username, email, phone } = user;
  return (
    <section>
      <h3>Hello from User</h3>
      <div className="user-record--container">
        <div className="user-record__name">{name}</div>
        <div className="user-record__username">{username}</div>
        <div className="user-record__email">{email}</div>
        <div className="user-record__phone">{phone}</div>
      </div>
    </section>
  );
};
export default User;
