
// import PropTypes from 'prop-types';

import Link from "../link/Link";

const Nevbar = () => {
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/products", name: "Products" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "User Profile" },
      ];
      
    return (
        
            <div>
                
                  <ul className="md:flex justify-around ">
                  {      
                       routes.map(route => 
                       <Link 
                       key={routes.id}
                       route={route}
                       ></Link>)
                      
                   }
                  </ul>
            </div>
      
    );
};

// Nevbar.propTypes = {
    
// };

export default Nevbar;