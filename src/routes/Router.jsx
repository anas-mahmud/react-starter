import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-2xl text-blue-500 text-center font-semibold">
        Vite React Starter with tailwind CSS
      </div>
    ),
  },
  // Not Found route
  {
    path: "*",
    element: (
      <div className="text-2xl font-semibold text-center text-red-500">
        No Page Found
      </div>
    ),
  },
]);

export default router;
