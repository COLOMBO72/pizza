import React from 'react';
import ReactPaginate from 'react-paginate';
import stylesPagination from '../../styles/Pagination.module.scss';

type PaginationType = {
  onChangePage: (page: number)=>void;
}

const Pagination: React.FC<PaginationType> = ({ onChangePage}) => {
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
        // forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
