import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/Table';

const List = () => {
    return (
        <>
            <main>
                <h2 className='pageTitle'>Current Employees</h2>
                <Table />
                <Link to="/">Home</Link>
            </main>
        </>
    );
};

export default List;