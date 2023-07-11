import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link">1</a>
        </li>
        <li class="page-item">
          <a class="page-link">2</a>
        </li>
        <li class="page-item">
          <a class="page-link">3</a>
        </li>
        <li class="page-item">
          <a class="page-link">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
