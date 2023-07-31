import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';

const Table = () => {

    const tableData = useSelector((state) => state.table)
    const [searchText, setSearchText] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const filteredData = tableData.filter(
        (item) => 
            item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            item.department.toLowerCase().includes(searchText.toLowerCase()) ||
            item.street.toLowerCase().includes(searchText.toLowerCase()) ||
            item.city.toLowerCase().includes(searchText.toLowerCase()) ||
            item.state.toLowerCase().includes(searchText.toLowerCase()) ||
            item.zipCode.toLowerCase().includes(searchText.toLowerCase())
    )

    const handleSearch = (e) => {
        setSearchText(e.target.value)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const handleItems = (count) => {
        setItemsPerPage(count)
        setCurrentPage(1)
    }

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    )

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const month = date.getMonth() + 1
        const day = date.getDate()
        const year = date.getFullYear()
        return `${month}-${day}-${year}`
      }

    const columns = [
        { name: 'First Name', selector: 'firstName', sortable: true },
        { name: 'Last Name', selector: 'lastName', sortable: true },
        { name: 'Start Date', selector: 'startDate', sortable: true, format: (row) => formatDate(row.startDate) },
        { name: 'Department', selector: 'department', sortable: true },
        { name: 'Date of Birth', selector: 'dateOfBirth', sortable: true, format: (row) => formatDate(row.dateOfBirth) },
        { name: 'Street', selector: 'street', sortable: true },
        { name: 'City', selector: 'city', sortable: true },
        { name: 'State', selector: 'state', sortable: true },
        { name: 'Zip Code', selector: 'zipCode', sortable: true },
    ]

    return (
        <>
            <div className='searchField'>
                <p>Search :</p>
                <input className='searchInput' type='search' value={searchText} onChange={handleSearch}/>
            </div>
            <DataTable 
                title='Employee Table'
                columns={columns}
                data={paginatedData}
                pagination
                paginationServer
                paginationTotalRows={filteredData.length}
                paginationPerPage={itemsPerPage}
                paginationComponentOptions={{
                    rowsPerPageText: 'Showing',
                    rangeSeparatorText: 'to',
                    noRowsPerPage: false,
                    selectAllRowsItem: false,
                    selectAllRowsItemText: 'All',
                }}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleItems}
            />
        </>
    );
};
 
export default Table;