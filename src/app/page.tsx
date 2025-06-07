import Header from "@/app/components/Header";
import Divider from "@/app/components/Divider";
import History from "@/app/components/History";
import Works from "@/app/components/Works";
import Qualifications from "@/app/components/Qualifications";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Divider />
      <History />
      <Divider />
      <Works />
      <Divider />
      <Qualifications />
    </main>
  );
}
