import React, { useEffect, useState } from 'react'
import Logo from './icons/Logo.jsx'
import { Link } from 'react-router-dom'
import { createApi } from 'unsplash-js'

export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Logo/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hoy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Crear</a>
                        </li>
                    </ul>
                    <form className="d-flex ms-auto" role="search">
                        <div className="input-group">
                            <span className="input-group-text border-end-0" style={{borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px"}}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                            <input className="form-control border-start-0" type="search" placeholder="Search" aria-label="Search"  style={{borderTopRightRadius: "15px", borderBottomRightRadius: "15px"}}/>
                        </div>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">User</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )    
}