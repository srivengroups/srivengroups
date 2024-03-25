import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import SgNavbar from "./SgNavbar";
import Footer from "./Footer";
import { useParams } from 'react-router-dom';

const Properties = ({ properties }) => {
    const {status} = useParams();
    const [searchText, setSearchText] = useState("");
    const [propertyStatus, setPropertyStatus] = useState(status);
    const [priceFilter, setPriceFilter] = useState("");

    const handleSearchTextChange = (e) => {
        setSearchText(e.target.value);
    };

    const handlePropertyStatusChange = (e) => {
        setPropertyStatus(e.target.value);
    };

    const handlePriceFilterChange = (e) => {
        setPriceFilter(e.target.value);
    };

    const filteredProperties = properties.filter(property => {
        // Filter by search text
        // const matchSearchText = property.heading.toLowerCase().includes(searchText.toLowerCase());
        const matchSearchText = Object.values(property).some(value => value.toLowerCase().includes(searchText.toLowerCase()));

        // Filter by property status
        const matchPropertyStatus = property.propertyStatus === propertyStatus || propertyStatus === "";

        // Filter by price details
        const matchPriceFilter = priceFilter === "" || (property.price.includes(priceFilter));

        return matchSearchText && matchPropertyStatus && matchPriceFilter;
    });


    const propertiesPerPage = 3; // Number of properties to display per page
    const [currentPage, setCurrentPage] = useState(1); // Current page number

    // Calculate the index range of properties to display for the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="propertiesPage">
        <SgNavbar fixedTop={false}/>
        <div className="properties">
            {/* Search input */}
            <div className="propertyFilters">
            <input type="text" className="searchField filterFields" value={searchText} onChange={handleSearchTextChange} placeholder="Search..." />

            {/* Property status filter */}
            <div className="filter">
            <label htmlFor="propertyStatusFilter">Property Status:</label>
            <select value={propertyStatus} className="propertyStatusFilter filterFields" onChange={handlePropertyStatusChange}>
                <option value="">All</option>
                <option value="readyToMove">Ready to Move</option>
                <option value="underConstruction">Under Construction</option>
                <option value="soldOut">Sold Out</option>
            </select>
            </div>
            {/* Price details filter */}
            <div className="filter">
            <label htmlFor="priceFilter">Price Details:</label>
            <select value={priceFilter} className="priceFilter filterFields" onChange={handlePriceFilterChange}>
                <option value="">All</option>
                <option value="above1cr">Above 1 Cr</option>
                <option value="below1cr">Below 1 Cr</option>
            </select>
            </div>
            </div>
            {/* Render filtered properties */}
            {currentProperties.length===0?
            <p>There are no Properties that are 
            {propertyStatus==="readyToMove"?
            " ready to move:(":propertyStatus === " underConstruction:("? 
            "under construction": " sold out:("}</p>:

            (currentProperties.map((property, idx) => (
                <PropertyCard key={idx} property={property} />
            )))}

            {/* Pagination */}
            <p style={{marginBottom: 0}}>Page No.</p>
            <ul className="pagination">
                
                {Array.from({ length: Math.ceil(properties.length / propertiesPerPage) }).map((_, index) => (
                    <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                        <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                    </li>
                ))}
            </ul>
        </div>

        <Footer />
        </div>
    );
};

export default Properties;
