import { useState } from "react";

function Pagination({current,onChange,total}) {

  // 
  const prev = (
    <button
      data-testid="prev-page"
      disabled={current<=1}
      onClick={()=>onChange(current-1)}
    >
      Prev
    </button>
  );
  const currentPage = <button data-testid="current-page" >{current}</button>;
  const next = (
    <button
      data-testid="next-page"
      disabled={current == 10}
      onClick = {()=>onChange(current+1)}
    >
      Next
    </button>
  );
  return (
  <div data-testid="page-container">
      <div>
      {prev}
      {currentPage}
      {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{total}</b>
      </div>
    </div>
  );
}

export default Pagination;
