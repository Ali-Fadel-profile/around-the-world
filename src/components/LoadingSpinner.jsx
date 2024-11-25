function LoadingSpinner() {
  return (
    <div className="font-inter flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>{" "}
      <p className="text-2xl font-bold">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;
