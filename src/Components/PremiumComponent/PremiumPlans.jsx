import { Link } from "react-router-dom";

export const PayPlans = () => {
  return (
    <div className=" p-6 mx-auto  text-center text-gray-900 shadow-[-1px_18px_17px_-8px_rgba(166,31,166,0.78)] bg-fuchsia-900/30 rounded-lg border-2 border-gray-900 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <h3 className="mb-4 text-2xl text-sky-200 font-semibold">Premium</h3>
      <p className="font-light text-cyan-400 sm:text-lg dark:text-gray-400">
        Buy once, use forever
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl text-sky-200 font-extrabold">$15</span>
        <span className="text-cyan-500 dark:text-gray-400">/once</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-cyan-400">All tools unlocked</span>
        </li>
        <li className="flex items-center space-x-3">
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-cyan-400">No setup, or hidden fees</span>
        </li>
      </ul>
      <div className="flex flex-col">
        <Link to={"/confirm/payform"}>
          <button className="mt-3 mx-14 px-2 py-2 w-36 text-sky-100 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};
