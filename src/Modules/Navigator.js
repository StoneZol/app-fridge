import React from "react";
import {Link} from "react-router-dom";
import RegForm from "./RegForm";
import AuthForm from "./AuthForm";

const Navigator = () => {
    return (
    <nav className="Navigator">
    <div className="NavigatorBox">
        <div className="BrandBox">
        <div className="Link"><Link to = "/">Холодос</Link></div>
        </div>
        <div className="SearchBox">
            <form className="SearchForm">
                <input
                    className="NavInput"
                    type="search"
                    placeholder="Поиск"
                    aria-label="Search"></input>
                <button className="SearchButt" type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="30"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </form>
        </div>
        <div className="RegAuth">
          <div className ="Link"><Link to="/Reg">Регистрация</Link></div>
          <div className ="Link"><Link to = "/Auth">Вход</Link></div>    
        </div>
    </div>
</nav>
    );
}

export default Navigator;
