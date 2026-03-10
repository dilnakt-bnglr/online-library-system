import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <>
      <div className="h-screen relative bg-red-600">
        <div className="absolute inset-0 m-auto w-80 h-40 text-center">
          <h1 className="font-extrabold text-2xl">
            Page Not Found - {error.error.message}
          </h1>
          <p className="text-black underline">
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Error;
