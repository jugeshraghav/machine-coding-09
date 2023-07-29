import { CgPlayListAdd } from "react-icons/cg";
import { AiFillClockCircle } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className=" md:h-full md:w-full p-2 flex md:flex-col sm:justify-around gap-4 p-xl-5">
        <NavLink to="/" className="flex gap-2 items-center text-xxl md:text-lg">
          <AiFillHome /> <span className="hidden md:block">Home</span>
        </NavLink>
        <NavLink
          to="/explore"
          className="flex gap-2 items-center text-xxl md:text-lg"
        >
          <MdExplore /> <span className="hidden md:block">Explore</span>
        </NavLink>
        <NavLink to="/watch-later" className="flex gap-2 items-center">
          <AiFillClockCircle />{" "}
          <span className="hidden md:block">Watch Later</span>
        </NavLink>
        <NavLink
          to="/playlist"
          className="flex gap-2 items-center text-xxl md:text-lg"
        >
          <CgPlayListAdd /> <span className="hidden md:block">Playlist</span>
        </NavLink>
      </div>
    </>
  );
};
