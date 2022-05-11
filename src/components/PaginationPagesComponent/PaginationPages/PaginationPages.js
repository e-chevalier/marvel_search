import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

function PaginationPages({currentPage, total, onChange}) {

    let items = [];
    for (let i = 0; i < total; i++) {

        let page = i+1

        items.push(
            <Pagination.Item key={page} active={page === currentPage} onClick={() => { onChange(page)}}>
                {page}
            </Pagination.Item>,
        );
    }

    return (
        <div className="d-flex justify-content-center py-5">
            <Pagination>{items}</Pagination>
        </div>
    )
}

export default PaginationPages