const Pagination = ({
  limit,
  totalData,
  setCurrentPage,
  currentPage,
  searchedRecord,
  isSeaching,
  search,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / limit); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="Pagination p-3">
      {pageNumber.length > 0 ? (
        pageNumber.map((curr, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(curr)}
              className={
                curr === currentPage ? "mx-1 btn btn-primary" : "mx-1 btn"
              }
            >
              {" "}
              {curr}
            </button>
          );
        })
      ) : (
        <>
          <div>
            {
              <p style={{ fontSize: "25px", fontWeight: 800 }}>
                No records found !
              </p>
            }
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
