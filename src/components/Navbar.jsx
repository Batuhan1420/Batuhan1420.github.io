import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/dark-tech', label: 'Dark Tech Project' }
  ];

  return (
    <div style={{ position: 'fixed', top: '1.5rem', left: 0, right: 0, zIndex: 1000, display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          pointerEvents: 'auto',
          background: 'rgba(15, 15, 18, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '100px',
          padding: '0.6rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        <Link 
          to="/" 
          style={{ 
            fontSize: '1.25rem', 
            fontWeight: '800', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            letterSpacing: '-0.02em',
            color: 'var(--color-text)',
            textDecoration: 'none'
          }}
        >
          <div style={{ 
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))', 
            padding: '0.4rem', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
          }}>
            <Code2 size={18} strokeWidth={2.5} />
          </div>
          <span>Batuhan<span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>.dev</span></span>
        </Link>
        
        <nav style={{ display: 'flex', gap: '0.25rem' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path}
                to={link.path} 
                style={{ 
                  position: 'relative',
                  fontWeight: 500, 
                  fontSize: '0.95rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '100px',
                  color: isActive ? 'var(--color-text)' : 'var(--color-text-muted)',
                  transition: 'color 0.3s ease',
                  textDecoration: 'none',
                  zIndex: 1
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '100px',
                      zIndex: -1
                    }}
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
