import React, { useEffect } from "react";

const PaginationComponent = ({ range, setPage, page, slice }: any) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div>
      {range.map((el:any, index:any) => (
        <button
          key={index}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default PaginationComponent;