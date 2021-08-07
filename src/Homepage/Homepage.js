import React, { Component } from 'react'
import { auth } from '../Firebase'
import Collection from '../Collection/Collection';
import './Homepage.css'

export default function Homepage({history}) {
const handleSubmit=()=>{
    auth.signOut()
}

        return (
            <div className="homepage">
                <div className="main-section">
                  <nav className="navbar">
                      <div className="nav-header">
                         <h1 className="title-name">Western Desire</h1>
                      </div>   
                      <div className="nav-footer">
                          <h3>Contact Us</h3>
                <h3 onClick={handleSubmit}>Sign Out</h3>   
                      </div>
                </nav>  
                  <div className="body-section">
                    <h1>Hey there <br />Welcome To our Page</h1>
                    <div className="collections">
                        <h1>Collections</h1>
                       <Collection/>
                    </div>
                </div>
                </div>
            </div>
        )
    
}
