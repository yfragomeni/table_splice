import { useEffect, useState } from "react";

export const calculateRange = (data: any, rowsPerPage: any) => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = (data: any, page: any, rowsPerPage: any) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data:any, page: any, rowsPerPage: undefined | number) => {
    const [tableRange, setTableRange] = useState<any[]>([]);
    const [slice, setSlice] = useState<any[]>([]);
  
    useEffect(() => {
      if(rowsPerPage) {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);
    
        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
      }
      else {
        setSlice(data)
        setTableRange(data)
      }
    }, [data, setTableRange, page, setSlice]);
  
    return { slice, range: tableRange };
  };
  
  export default useTable;