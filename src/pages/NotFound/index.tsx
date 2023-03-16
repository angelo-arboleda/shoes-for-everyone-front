import { Link } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";
const NotFound = () => {
  return (
    <>
      <AppLayout />
      <div className="flex items-center justify-center text-center px-4 flex-col sm:flex-row h-[calc(100vh-5rem)]">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:dark:border-slate-300/10 dark:text-slate-200">
          404
        </h1>
        <Link
          to="/"
          className="mt-2 text-lg text-slate-700 dark:text-slate-400 sm:mt-0"
        >
          Go home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
