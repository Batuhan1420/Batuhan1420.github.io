import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '4rem 0 2rem 0', 
      borderTop: '1px solid var(--color-border)',
      marginTop: '4rem',
      background: 'rgba(18, 18, 23, 0.3)'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', padding: 0 }}>
            <Github size={20} />
          </a>
          <a href="#" className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', padding: 0 }}>
            <Linkedin size={20} />
          </a>
          <a href="#" className="btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', padding: 0 }}>
            <Mail size={20} />
          </a>
        </div>
        <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
          &copy; {new Date().getFullYear()} Batuhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
