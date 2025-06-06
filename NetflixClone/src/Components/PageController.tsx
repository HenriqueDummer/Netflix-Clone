import React, { useState } from "react";

const PageController = ({page, setPage}) => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changePage = (next) => {
    if (next && page < 5) {
      setPage((prev) => prev + 1);
      goToTop();
    } else if (page > 1 && !next) {
      setPage((prev) => prev - 1);
      goToTop();
    }
  };

  return (
    <div className="page_controller">
      <div className="controll">
        <button onClick={() => changePage(false)}>
          <i className="bi bi-arrow-left-short"></i>Prev
        </button>
      </div>
      <div className="page">
        <ul>
          <li className={page === 1 ? `current_page` : ""}>1</li>
          <li className={page === 2 ? `current_page` : ""}>2</li>
          <li className={page === 3 ? `current_page` : ""}>3</li>
          <li className={page === 4 ? `current_page` : ""}>4</li>
          <li className={page === 5 ? `current_page` : ""}>5</li>
        </ul>
      </div>
      <div className="controll">
        <button onClick={() => changePage(true)}>
          Next<i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
  );
};

export default PageController;
