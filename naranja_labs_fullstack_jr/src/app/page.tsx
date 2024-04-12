import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full justify-between items-center">
      <Header />
      <Footer />
    </main>
  );
}
