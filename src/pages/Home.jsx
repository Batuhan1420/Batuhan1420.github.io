import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px' }}
        >
          <motion.div variants={itemVariants} style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--color-surface)', borderRadius: '50px', border: 'var(--glass-border)', marginBottom: '2rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              <Sparkles size={16} color="var(--color-primary)" />
              Software Developer & AI Enthusiast
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ marginBottom: '1.5rem' }}>
            Building <span className="text-gradient">digital experiences</span> that inspire and perform.
          </motion.h1>
          
          <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px' }}>
            Ik ben gepassioneerd door het bouwen van innovatieve software, van robuuste architecturen tot naadloze gebruikerservaringen met de nieuwste AI-integraties.
          </motion.p>
          
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary">
              Bekijk mijn werk <ArrowRight size={18} />
            </a>
            <Link to="/contact" className="btn btn-outline">
              Neem contact op
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding" style={{ paddingTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Terminal size={32} color="var(--color-primary)" />
            Uitgelichte Projecten
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Dark Tech Project Card */}
            <Link to="/dark-tech" style={{ display: 'block' }}>
              <motion.div 
                className="glass-panel"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
              >
                {/* Decorative background blob */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.2 }}></div>
                
                <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '0.75rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--color-primary)' }}>
                  <Code size={24} />
                </div>
                
                <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>Dark Tech</h3>
                <p style={{ flex: 1, marginBottom: '2rem' }}>
                  Een innovatief semesterproject waar ik de leiding nam over de architectuur, AI-integratie, en de implementatie van dark patterns in UI/UX-design.
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {['React', 'AI Model', 'UI/UX', 'Architecture'].map(tag => (
                    <span key={tag} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', background: 'var(--color-surface)', border: 'var(--glass-border)', borderRadius: '20px', color: 'var(--color-text-muted)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
            
            {/* Placeholder for future projects */}
            <div className="glass-panel" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px dashed var(--color-border)', background: 'transparent', opacity: 0.5 }}>
              <p style={{ margin: 0 }}>Meer projecten volgen snel...</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
