"use client";
import React, { useEffect } from "react";
const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.log("Error", error);
  }, [error]);

  return (
    <article>
      <h3>Something went wrong</h3>
      <button onClick={() => reset()}>Try again</button>
    </article>
  );
};

export default Error;
