import type { Metadata } from "next";
import Link from "next/link";
import { getAllUsers } from "./../../../lib/users";
export const metadata: Metadata = {
  title: "Users",
};

const Users = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users: User[] = await userData;

  const userListRender = (
    <section className="users-list--container">
      {users.map(({ id, name, username }) => (
        <div className="user-record--container" key={id}>
          <div className="user-record__name">
            <Link href={`users/${id}/`}>{name}</Link>
          </div>
          <div className="user-record__username">{username}</div>
        </div>
      ))}
    </section>
  );
  return <article>{userListRender}</article>;
};

export default Users;
