import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loading;
