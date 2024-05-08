import React from "react";

function Posts() {
  return (
    <div className="px-px md:px-3">
      {/* Mobile user info */}
      <ul className="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm">
        <li>
          <span className="font-semibold text-gray-800 block">136</span>
          posts
        </li>
        <li>
          <span className="font-semibold text-gray-800 block">40.5k</span>
          followers
        </li>
        <li>
          <span className="font-semibold text-gray-800 block">302</span>
          following
        </li>
      </ul>

      {/* Instagram features */}
      <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
        <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
          <a className="inline-block p-3" href="#">
            <i className="fas fa-th-large text-xl md:text-xs"></i>
            <span className="hidden md:inline">post</span>
          </a>
        </li>
        <li>
          <a className="inline-block p-3" href="#">
            <i className="far fa-square text-xl md:text-xs"></i>
            <span className="hidden md:inline">igtv</span>
          </a>
        </li>
        <li>
          <a className="inline-block p-3" href="#">
            <i className="fas fa-user border border-gray-500 px-1 pt-1 rounded text-xl md:text-xs"></i>
            <span className="hidden md:inline">tagged</span>
          </a>
        </li>
      </ul>

      {/* Flexbox grid */}
      <div className="flex flex-wrap -mx-px md:-mx-3">
        {/* Post 1 */}
        <div className="w-1/3 p-px md:px-3">
          <a href="#">
            <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
              <img
                className="w-full h-full absolute left-0 top-0 object-cover"
                src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
                alt="image"
              />
              <i className="fas fa-square absolute right-0 top-0 m-1"></i>
              {/* Overlay */}
              <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden">
                <div className="flex justify-center items-center space-x-4 h-full">
                  <span className="p-2">
                    <i className="fas fa-heart"></i>
                    412K
                  </span>
                  <span className="p-2">
                    <i className="fas fa-comment"></i>
                    2,909
                  </span>
                </div>
              </div>
            </article>
          </a>
        </div>

        {/* Post 2 */}
        <div className="w-1/3 p-px md:px-3">
          <a href="#">
            <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
              <img
                className="w-full h-full absolute left-0 top-0 object-cover"
                src="https://images.unsplash.com/photo-1498409570040-05bf6d3dd5b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="image"
              />
              {/* Overlay */}
              <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden">
                <div className="flex justify-center items-center space-x-4 h-full">
                  <span className="p-2">
                    <i className="fas fa-heart"></i>
                    412K
                  </span>
                  <span className="p-2">
                    <i className="fas fa-comment"></i>
                    1,993
                  </span>
                </div>
              </div>
            </article>
          </a>
        </div>

        {/* Post 3 */}
        <div className="w-1/3 p-px md:px-3">
          <a href="#">
            <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
              <img
                className="w-full h-full absolute left-0 top-0 object-cover"
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="image"
              />
              {/* Overlay */}
              <div className="overlay bg-gray-800 bg-opacity-25 w-full h-full absolute left-0 top-0 hidden">
                <div className="flex justify-center items-center space-x-4 h-full">
                  <span className="p-2">
                    <i className="fas fa-heart"></i>
                    112K
                  </span>
                  <span className="p-2">
                    <i className="fas fa-comment"></i>
                    2,090
                  </span>
                </div>
              </div>
            </article>
          </a>
        </div>

        {/* Repeat for other posts */}
      </div>
    </div>
  );
}

export default Posts;
