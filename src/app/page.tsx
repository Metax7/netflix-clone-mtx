import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import Logout from "@/components/logout";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/auth");
  }

  return (
    <main className="flex text-xl">
      {session?.user?.email} <Logout />
    </main>
  );
}
