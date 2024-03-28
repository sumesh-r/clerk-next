import { SignOutButton, auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = auth();
  if (!userId) {
    redirect("/signin");
  }
  const user = await currentUser();
  return (
    <div>
      {" "}
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
        <h1>
          Hello {user?.firstName} {user?.lastName}
        </h1>
      </div>
    </div>
  );
}
