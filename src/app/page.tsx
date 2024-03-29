import { SignOutButton, auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = auth();
  let user;
  if (userId) {
    user = await currentUser();
  }
  return (
    <div>
      <header>
        <nav
          className="flex items-center justify-between p-6 lg:px-8 h-20 border border-t-0 border-x-0 border-b-gray-600"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 text-2xl p-1.5">
              clerk-next
            </a>
          </div>
          {userId && (
            <div className="bg-blue-500 hover:bg-blue-400 rounded px-2 py-1">
              <SignOutButton />
            </div>
          )}
        </nav>
      </header>
      <div className="flex min-h-screen items-center justify-center">
        {userId ? (
          <h1 className="text-2xl -mt-36 font-bold">
            Hello {user?.firstName} {user?.lastName}
          </h1>
        ) : (
          <div className="flex flex-col justify-center items-center -mt-36 space-y-3">
            <h1 className="text-2xl font-bold mb-5">Login</h1>
            <Link
              className="bg-blue-600 px-3 py-2 text-lg  font-semibold rounded"
              href={"/signin"}
            >
              signin
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
