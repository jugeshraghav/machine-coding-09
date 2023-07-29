import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-10 w-full h-full bg-slate-400 ">
        <Header />
      </div>
      <div className="flex gap-2  relative mt-6">
        <div className="w-1/6 sticky top-12 h-full">
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
