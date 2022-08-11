import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN-IN
          </Link>
        </div>
      </div>
      <Outlet />
      {/* Children route of the route containing Navigation will be rendered here */}
    </>
  );
};

export default Navigation;