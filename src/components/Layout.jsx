import Hero from "./Hero";
import Nav from "./Nav";


const Layout = () => {
  return (
    <div className="flex flex-col justify-center px-4">
      <Nav />

      <Hero />
    </div>
  );
};

export default Layout;
