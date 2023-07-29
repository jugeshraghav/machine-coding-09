import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10 w-full h-full bg-white border-b-slate-500">
        <Header />
      </div>
      <div className="md:flex gap-2  relative mt-6 ">
        <div className="md:w-1/6 sticky top-12 h-full bg-white z-20 md:px-4">
          {" "}
          <Navbar />
        </div>
        <div className=" w-5/6">
          {" "}
          <Outlet />
        </div>
      </div>
    </div>
  );
};
