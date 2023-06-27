import React, { useState, useEffect } from "react";

export default function App() {
    const [prd, setPrd] = useState([]);
    const [filter, setFilter] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setPrd(data);
                setFilteredData(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleInput = () => {
        const filteredData = prd.filter((r) =>
            r.title.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredData(filteredData);
        setCurrentPage(1); // Reset to the first page when filter is applied
    };

    const handleSort = (e) => {
        const selectedOption = e.target.value;
        let sortedData = [...filteredData];
        if (selectedOption === "asc") {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (selectedOption === "desc") {
            sortedData.sort((a, b) => b.price - a.price);
        }
        setFilteredData(sortedData);
    };

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <h1>Hello</h1>
            <input
                type="text"
                placeholder="Search Here"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            ></input>
            <button onClick={handleInput}>Click me</button>

            <select value="" onChange={handleSort}>
                <option value="">Sort By</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
            <ol>
                {currentItems.map((r) => (
                    <li key={r.id}>{r.title}</li>
                ))}
            </ol>

            {/* Pagination */}
            <div>
                {filteredData.length > itemsPerPage && (
                    <ul className="pagination">
                        {Array.from(
                            { length: Math.ceil(filteredData.length / itemsPerPage) },
                            (_, i) => (
                                <li
                                    key={i}
                                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                                >
                                    <button className="page-link" onClick={() => paginate(i + 1)}>
                                        {i + 1}
                                    </button>
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}
