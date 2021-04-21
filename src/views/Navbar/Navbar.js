import React from 'react';
import PropTypes from 'prop-types';

import NavbarDesktop from '../../components/NavbarDesktop';
import NavbarMobile from '../../components/NavbarMobile';

const Navbar = ({ links }) => {

  return (
    <>
    <NavbarMobile links={links}/>
    <NavbarDesktop links={links}/>
    </>
  )
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
}

export default Navbar
