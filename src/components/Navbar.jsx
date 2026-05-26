import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '1.5rem 0',
        background: 'rgba(10, 10, 12, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--color-primary)' }}>B</span>
          <span>Portfolio</span>
        </Link>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link 
            to="/" 
            style={{ 
              fontWeight: 500, 
              color: location.pathname === '/' ? 'var(--color-text)' : 'var(--color-text-muted)',
              borderBottom: location.pathname === '/' ? '2px solid var(--color-primary)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            Home
          </Link>
          <Link 
            to="/dark-tech" 
            style={{ 
              fontWeight: 500, 
              color: location.pathname === '/dark-tech' ? 'var(--color-text)' : 'var(--color-text-muted)',
              borderBottom: location.pathname === '/dark-tech' ? '2px solid var(--color-primary)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            Dark Tech
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
