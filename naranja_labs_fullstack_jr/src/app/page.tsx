import Footer from "./components/footer";
import Header from "./components/header";
import Title from "./components/title";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full justify-between items-center">
      <Header />
      <section className="w-10/12 h-[569px]">
        <Title />
      </section>
      <Footer />
    </main>
  );
}
