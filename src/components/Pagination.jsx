import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={"←"}
      nextLabel={"→"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={"flex justify-center mt-8 gap-2"}
      pageClassName={"px-3 py-1 border rounded cursor-pointer"}
      activeClassName={"bg-yellow-500 text-white cursor-pointer"}
      previousClassName={"px-3 py-1 border rounded cursor-pointer"}
      nextClassName={"px-3 py-1 border rounded cursor-pointer"}
      disabledClassName={"opacity-50 cursor-not-allowed"}
    />
  );
};

export default Pagination;
