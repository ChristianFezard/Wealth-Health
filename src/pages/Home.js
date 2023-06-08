import React from 'react';
import InformationForm from '../components/InformationForm';

const Home = () => {
    return (
        <>
            <main>
                <h2 className='pageTitle'>Create a new employee</h2>
                <InformationForm/>
            </main>
        </>
    );
};

export default Home;