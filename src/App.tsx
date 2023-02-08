import { Footer, Navbar, Hero } from "./components";
import { hero, navlinks } from "./data/travigodata";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Footer />
    </>
  );
};

export default App;
