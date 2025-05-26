import React from "react";

export default function Loader() {
  return (
    <div className="loader" aria-label="Loading">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>
  );
}