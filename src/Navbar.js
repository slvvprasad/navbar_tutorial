import './Navbar.css';

function Navbar(){
    return(
        <nav className="nav">
            <a href="/" className="site-title">
                Logo
            </a>
            <ul>
               <li>
                <a href="/home">Home</a>
               </li>
               <li>
                <a href="/about">About</a>
               </li>
               <li>
                <a href="/contact">Contact</a>
               </li>
               <li>
                <a href="/login">Login</a>
               </li>
            </ul>
        </nav>
    );
}

export default Navbar;