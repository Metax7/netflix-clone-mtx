import AuthComponent from "@/components/authComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

const Auth = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return <AuthComponent />;
};

export default Auth;
