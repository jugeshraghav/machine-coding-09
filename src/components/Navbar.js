import { CgPlayListAdd } from "react-icons/cg";
import { AiFillClockCircle } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className=" md:h-full bg-slate-200 p-2 flex flex-col gap-4">
        <NavLink to="/" className="flex gap-2 items-center">
          <AiFillHome /> Home
        </NavLink>
        <NavLink to="/explore" className="flex gap-2 items-center">
          <MdExplore /> Explore
        </NavLink>
        <NavLink to="/watch-later" className="flex gap-2 items-center">
          <AiFillClockCircle /> Watch Later
        </NavLink>
        <NavLink to="/playlist" className="flex gap-2 items-center">
          <CgPlayListAdd /> Playlist
        </NavLink>
      </div>
    </>
  );
};
