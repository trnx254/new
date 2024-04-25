import Image from "next/image";
import Link from "next/link";

const CardWithImg = (props) => {
  return (
    <div className="w-full max-w-xs m-4 relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={props.link}>
        <Image class="p-2 rounded-t-lg" src={props.img} alt={props.title} width={400} height={50} />
        <p className="bg-blue-500 h-3 rounded-b-2xl mb-2"></p>
      </Link>
      <div className="px-5 pb-5">
        <Link href={props.link}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </Link>
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
      </div>
    </div>
  );
};

export default CardWithImg;
