import Header from "../../components/admin/Navbar/Header";
import Pricing from "../../components/partials/Pricing";
import Welcomeuser from "../../components/partials/Welcomeuser";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    return;
  }
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Welcomeuser />
            <Pricing />
          </div>
        </main>
      </div>
    </div>
  );
}
