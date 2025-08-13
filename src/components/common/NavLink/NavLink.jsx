import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isActiveRoute } from '../../../utils/navigation';
import '../../../styles/components/common/NavLink.css';

/**
 * Navigation Link component with active state
 * @param {object} props - Component props
 * @param {string} props.to - Destination route
 * @param {string} props.children - Link text/content
 * @param {string} props.className - Additional CSS classes
 * @param {object} props.activeStyle - Styles to apply when active
 * @param {string} props.activeClassName - CSS class to apply when active
 * @returns {JSX.Element} NavLink component
 */
const NavLink = ({ 
  to, 
  children, 
  className = '', 
  activeClassName = 'active',
  activeStyle = {},
  ...props 
}) => {
  const location = useLocation();
  const isActive = isActiveRoute(location.pathname, to);
  
  const linkClassName = `nav-link ${className} ${isActive ? activeClassName : ''}`.trim();
  const linkStyle = isActive ? { ...activeStyle } : {};

  return (
    <Link 
      to={to} 
      className={linkClassName}
      style={linkStyle}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
