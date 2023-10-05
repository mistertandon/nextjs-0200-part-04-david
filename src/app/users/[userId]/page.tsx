import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import {
  getAllUsers,
  fetchUserRecord,
  fetchUserPosts,
} from "./../../../../lib/users";
import { UserPosts, User } from "./components";

type UserParams = {
  params: {
    userId: string;
  };
};

const revalidate = 60;

const generateMetadata = async ({
  params: { userId },
}: UserParams): Promise<Metadata> => {
  const userPromise: Promise<User> = fetchUserRecord(userId);
  const user = await userPromise;
  const { name } = user;

  return {
    title: `${name}`,
    description: `${name} Page`,
  };
};

const UserPage = async ({ params: { userId } }: UserParams) => {
  const userPromise: Promise<User> = fetchUserRecord(userId);
  const userPostsPromise: Promise<Post[]> = fetchUserPosts(userId);

  return (
    <section className="user--container">
      <div className="user-navigation__user">
        Back to <Link href="/users">Users</Link>
      </div>
      <Suspense fallback={<h3>User Loading...</h3>}>
        <User userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<h3>User posts Loading...</h3>}>
        <UserPosts
          userPromise={userPromise}
          userPostsPromise={userPostsPromise}
        />
      </Suspense>
    </section>
  );
};

const generateStaticParams = async () => {
  const usersPromise: Promise<User[]> = getAllUsers();
  const users = await usersPromise;

  return users.map((id) => {
    {
      userId: id.toString();
    }
  });
};

export {
  UserPage as default,
  generateMetadata,
  revalidate,
  generateStaticParams,
};
