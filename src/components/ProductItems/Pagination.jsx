import React from 'react';
import ReactPaginate from 'react-paginate';
import stylesPagination from '../../styles/Pagination.module.scss';

const Pagination = ({onChangePage}) => {
  return (
    <div>
      <ReactPaginate
        className={stylesPagination.pagination}
        breakLabel="..."
        nextLabel="=>"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<="
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
