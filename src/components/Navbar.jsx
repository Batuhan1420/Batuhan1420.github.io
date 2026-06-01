import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/dark-tech', label: 'Dark Tech Project' }
  ];

  return (
    <div className="navbar-container">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="navbar-header"
      >
        <Link 
          to="/" 
          className="navbar-brand"
        >
          <div className="navbar-brand-icon">
            <Code2 size={18} strokeWidth={2.5} />
          </div>
          <span className="navbar-brand-text">Batuhan<span className="navbar-brand-domain">.dev</span></span>
        </Link>
        
        <nav className="navbar-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path} 
                className="navbar-link"
                style={{ 
                  color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)'
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="navbar-active-bg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>
      </motion.header>
    </div>
  );
};

export default Navbar;
