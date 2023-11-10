import Link from "next/link";
import { GrCompare } from "react-icons/gr";

const Card = (props) => {
  return (
    <div className="w-full max-w-xs mt-4 relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={props.link} target="_blank">
        {/* Image component Insert TODO */}
        <p className="bg-blue-500 h-3 rounded-b-2xl mb-2"></p>
      </a>
      <div className="px-5 pb-5">
        <a href={props.link} target="_blank">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-2.5">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            {props.rating == "" ? (
              <code>No Data Available</code>
            ) : (
              <>
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {props.rating} / 5
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {props.total_people_review}
                </span>
              </>
            )}
          </div>
        </div>
        <code className="text-sm font-medium text-gray-900 dark:text-white mb-6 ml-0 mt-0">
          {props.link_text}
          <br />
          <span className="text-xs">{props.delivery}</span>
        </code>
        <div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">
            {props.price}
          </div>
          {props.compare != null ? (
            <Link
              href={`/search/compare/${props.id}`}
              className="group text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 absolute bottom-0 right-0 flex items-center gap-2"
            >
              <GrCompare />
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </Link>
          ) : (
            <a
              href={props.link}
              className="group text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 absolute bottom-0 right-0 flex items-center gap-2"
              target="_blank"
            >
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
