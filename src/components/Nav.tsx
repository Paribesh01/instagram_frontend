import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="border-b px-4 py-2 bg-white">
      <div className="flex flex-wrap items-center justify-between md:justify-around">
        {/* logo */}
        <Link to={"/"}>
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/150px-Instagram_logo.svg.png"
            alt="instagram"
          />
        </Link>

        {/* search */}
        <div className="relative hidden sm:block text-gray-500">
          <input
            className="search-bar max-w-xs border rounded bg-gray-200 px-4 text-center outline-none focus:border-gray-400"
            type="search"
            placeholder="Search"
          />
          <i className="fa fa-search absolute top-0 left-0 ml-12 mt-1"></i>
        </div>

        <div className="space-x-4">
          <Link
            className="inline-block px-2 py-1 text-white font-semibold text-sm rounded"
            to="/createPost"
          >
            <img
              className=" w-8"
              src="https://img.freepik.com/premium-vector/add-post-icon-line-icon_707519-2569.jpg"
              alt="add Post"
            />
          </Link>
          <Link
            className="inline-block px-2 py-1 text-white font-semibold text-sm rounded"
            to="/profile"
          >
            <img
              className=" w-8"
              src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
              alt="Profile"
            />
          </Link>
          {/* <a
            className="inline-block text-blue-500 font-semibold text-sm"
            href="#"
          >
            Sign Up
          </a>  */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
