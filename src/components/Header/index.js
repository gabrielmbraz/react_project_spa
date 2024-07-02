import { Link } from 'react-router-dom';

import './styles.css'

const Header = () =>{
   return (
         <main className="container-main">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
               <div class="container-fluid">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                           <div class="nav-link">
                              <Link to="/">
                                 Home
                              </Link>
                           </div>
                        </li>
                        <li class="nav-item">
                           <div class="nav-link">
                              <Link to="/Menu">
                                 Menu
                              </Link>
                           </div>
                        </li>
                        <li class="nav-item">
                           <div class="nav-link">
                              <Link to="/About">
                                 Sobre
                              </Link>
                           </div>
                        </li>
                        <li class="nav-item">
                           <div class="nav-link">
                              <Link to="/Contato">
                                 Contato
                              </Link>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         </main>
   )
}

export default Header;