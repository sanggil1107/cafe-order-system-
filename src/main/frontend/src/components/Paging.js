import React, { useState } from 'react';
import './Paging.css';
import Pagination from 'react-js-pagination';

const Paging = ({ page, count, setPage }) => {

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={count}
            pageRangeDisplayed={10}
            prevPageText={"<"}
            nextPageText={">"}
            firstPageText={"<<"}
            lastPageText={">>"}
            onChange={setPage}
        />
    );
}

export default Paging;