import React, { useState } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { ReactComponent as GartnerDigitalMarketsLogo } from "./Logo.svg";
import { ReactComponent as MenuToggle } from "./MenuToggle.svg";
import { ReactComponent as MenuToggleClose } from "./MenuToggleClose.svg";
import s from "./nav.module.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((s) => !s);
  return (
    <div className={cx("fluidContainer", s.navbar)}>
      <nav>
        <GartnerDigitalMarketsLogo />
        <div className={s.navMenu}>
          <button className={s.toggle} onClick={toggle}>
            <MenuToggle />
          </button>
          <div className={cx(s.content, { [s.open]: isOpen })}>
            <button className={s.toggle} onClick={toggle}>
              <MenuToggleClose />
            </button>
            <ul onClick={toggle} className={s.menu}>
              <li>
                <Link to="/gdm-static/buyer_discovery">Buyer Discovery</Link>
              </li>
              <li>
                <Link to="/gdm-static/competitive_comparisons">
                  Competitive Comparisions
                </Link>
              </li>
              <li>
                <Link to="/gdm-static/qualityscore">Quality Score</Link>
              </li>
              <li>
                <Link to="/gdm-static/guidelines">Guidelines</Link>
              </li>
              <li>
                <Link to="/gdm-static/accountsfaq">Accounts FAQ</Link>
              </li>
              <li>
                <Link to="/gdm-static/listings_guidelines">
                  Listings Guidelines
                </Link>
              </li>
              <li>
                <Link to="/gdm-static/service_description">
                  Service Description
                </Link>
              </li>
              <li>
                <Link to="/gdm-static/onboarding">Onboarding</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
