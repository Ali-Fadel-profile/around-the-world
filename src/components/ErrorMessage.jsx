function ErrorMessage() {
  return (
    <div className="font-inter flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="flex flex-col items-center rounded-lg border border-gray-400 bg-gray-200 p-6 shadow-md dark:border-gray-600 dark:bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-700 dark:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0zM12 8v4m0 4h.01"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
          Something Went Wrong
        </h2>
      </div>
    </div>
  );
}

export default ErrorMessage;
