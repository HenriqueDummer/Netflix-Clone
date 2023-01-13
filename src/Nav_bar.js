export default function Nav_bar() {

    return(
        <div className="nav_bar">
            <div className="nav_content">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="" />
                <div className="nav_items">
                    <ul>
                        <li>Home</li>
                        <li>Shows</li>
                        <li>Movies</li>
                        <li>New</li>
                    </ul>

                    <ul>
                        <li><i className="fa-solid fa-magnifying-glass"></i></li>
                        <li><i className="fa-regular fa-bell"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}