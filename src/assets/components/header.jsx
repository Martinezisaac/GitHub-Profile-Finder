import React, { useState } from 'react';
import '../styles/header.css'
import github_logo from '../icons/githubWhite.svg'
import search from '../icons/search.svg'
import userDataFetcher from '../customHooks/userDataFetecher';

const Header = ( { sendData }) => {
    const { userName, setUserName, loading, handleEnter, fetchGitHubUsers } = userDataFetcher(sendData);
    return (
        <div className="header"> 
            <div className="header-container">
                <div className="logo-container">
                    <img src= { github_logo } />
                    <h1>GitHub Profile Finder</h1>
                </div>
                <div className="search-display">
                    <div className='input-container'>
                        <img src= { search } className='input-icon'/> 
                        <input 
                            placeholder='Search Github User' 
                            className='input-text' 
                            value={ userName } 
                            onKeyDown = { handleEnter } 
                            onChange={ (event) => setUserName(event.target.value) }
                        />                       
                    </div>
                </div>
            </div>
            {loading && <div className="loading-section"><h1>Loading information...</h1></div>}
        </div>
    );
}

export default Header;