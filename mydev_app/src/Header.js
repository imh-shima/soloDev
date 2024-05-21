import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="bg-warning p-3">
                <div className="container d-flex justify-content-center align-items-center">
                    <Link className="navbar-brand text-dark" to="/recipe" style={{ fontFamily: 'Arial, sans-serif' }}>レシピアプリ</Link>
                </div>
            </div>

            <nav id="g_navi">
                <ul>
                    <li><Link className="text-light mr-3" to="/recipe">レシピ一覧</Link></li>
                    <li><Link className="text-light" to="/recipe/search">レシピ検索</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
