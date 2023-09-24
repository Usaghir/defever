import ClipLoader from "react-spinners/ClipLoader";
import React from 'react';
const LoadingSkeleton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div>
        <ClipLoader
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default LoadingSkeleton;
