import Dashboard from "@/components/dashboard";
import SignOut from "@/components/common/signoutBtn";

export default function Home() {
  return (
    <main className="px-4">
      <Dashboard />
      <SignOut />
    </main>
  );
}
