import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination(props){

    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

        useEffect(() => {

            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems (data.slice (itemOffset, endOffset));
            setPageCount (Math.ceil(data.length / itemsPerPage));
        }, [itemOffset, itemsPerPage, data]);
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
        <ReactPaginate
        breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            />
        </>
    );

}