import Header from "../../components/Navbar/Header";
import Pricing from "../../components/partials/Pricing";
import Welcomeuser from "../../components/partials/Welcomeuser";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function index() {
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
