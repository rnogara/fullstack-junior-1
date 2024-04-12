import CarBanner from "./components/carBanner";
import Footer from "./components/footer";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Title from "./components/title";

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full justify-between items-center">
      <Header />
      <section className="w-10/12 h-[569px]">
        <div className="flex flex-row justify-between">
          <Title />
          <CarBanner />
        </div>
        <SearchBar />
      </section>
      <Footer />
    </main>
  );
}
