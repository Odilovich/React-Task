import "./style.scss";

const index = () => {
    return (
        <header>
            <div className="container">
                <div className="header-logo">
                    <a href="#">Logo</a>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default index;