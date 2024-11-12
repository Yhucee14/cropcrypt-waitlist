import Hero from "./Hero";
import Nav from "./Nav";
import herobg from "../assets/herobg.png";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center px-4">
      <Nav />

      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <Hero />
      </div>
    </div>
  );
};

export default Layout;
