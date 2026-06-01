import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Sparkles, Terminal, Camera, X, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

const Home = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Zodra je meer eigen foto's hebt (bijv. own_photo2.jpeg), voeg ze hier toe in de lijst!
  const galleryImages = [
    "/hero-portrait.png",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", // Placeholder foto 1 (vervang later)
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop"  // Placeholder foto 2 (vervang later)
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center', gap: '4rem', justifyContent: 'space-between', width: '100%' }}>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ flex: '1 1 500px', maxWidth: '700px' }}
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}
          >
            <motion.div 
              style={{ position: 'relative', width: '320px', height: '320px', cursor: 'pointer' }}
              whileHover="hover"
              onClick={() => setIsGalleryOpen(true)}
            >
              {/* Decorative background glow that expands on hover */}
              <motion.div 
                className="animate-float" 
                variants={{ hover: { scale: 1.15, opacity: 0.6 } }}
                transition={{ duration: 0.3 }}
                style={{ position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%', background: 'linear-gradient(45deg, var(--color-primary), var(--color-accent))', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.3, zIndex: 0 }} 
              />
              
              {/* Image container */}
              <motion.div 
                variants={{ hover: { scale: 1.05, rotateY: 5, rotateX: -5 } }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid rgba(255, 255, 255, 0.1)', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', perspective: 1000 }}
              >
                {/* Continuous cinematic video-like animation on the image */}
                <motion.img 
                  src="/hero-portrait.png" 
                  alt="Batuhan Arslan" 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    x: [0, 10, -10, 0],
                    y: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    duration: 20, 
                    ease: "easeInOut", 
                    repeat: Infinity 
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center' }} 
                />
                
                {/* Hover overlay with Camera icon */}
                <motion.div 
                  variants={{ hover: { opacity: 1 } }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', backdropFilter: 'blur(3px)' }}
                >
                  <motion.div variants={{ hover: { scale: 1, y: 0 } }} initial={{ scale: 0.8, y: 10 }}>
                    <Camera size={48} strokeWidth={1.5} color="white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding" style={{ paddingTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem', fontSize: '2.5rem' }}>
            <Terminal size={32} color="var(--color-primary)" />
            Uitgelichte Projecten
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Dark Tech Project Card */}
            <Link to="/dark-tech" style={{ display: 'block', height: '100%' }}>
              <motion.div
                className="glass-panel"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ 
                  height: '100%', 
                  padding: '2.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  position: 'relative', 
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {/* Decorative background blob */}
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(90px)', opacity: 0.15 }}></div>

                {/* Icon wrapper - Fixed stretching */}
                <div style={{ 
                  marginBottom: '2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '64px', 
                  height: '64px', 
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05))', 
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '16px', 
                  color: 'var(--color-primary)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  alignSelf: 'flex-start' /* Prevents flex column from stretching it */
                }}>
                  <Code size={28} />
                </div>

                <h3 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--color-text)' }}>Dark Tech</h3>
                <p style={{ flex: 1, marginBottom: '2.5rem', fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                  Een innovatief semesterproject waar ik de leiding nam over de architectuur, AI-integratie, en de implementatie van dark patterns in UI/UX-design.
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {['React', 'AI Model', 'UI/UX', 'Architecture'].map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: '500', 
                      padding: '0.4rem 1rem', 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.08)', 
                      borderRadius: '100px', 
                      color: 'var(--color-text-muted)',
                      letterSpacing: '0.02em',
                      backdropFilter: 'blur(4px)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>

            {/* Educatief Leerplatform Project Card */}
            <Link to="/edu-app" style={{ display: 'block', height: '100%' }}>
              <motion.div
                className="glass-panel"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{ 
                  height: '100%', 
                  padding: '3rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  position: 'relative', 
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '24px'
                }}
              >
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '250px', height: '250px', background: 'var(--color-accent)', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.15 }}></div>

                <div style={{ 
                  marginBottom: '2rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '70px', 
                  height: '70px', 
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(139, 92, 246, 0.05))', 
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                  borderRadius: '20px', 
                  color: 'var(--color-accent)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                  alignSelf: 'flex-start'
                }}>
                  <Smartphone size={32} />
                </div>

                <h3 style={{ marginBottom: '1.5rem', fontSize: '2.2rem', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--color-text)', lineHeight: 1.2 }}>Educatief Leerplatform</h3>
                <p style={{ flex: 1, marginBottom: '3rem', fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                  Een mobiele applicatie voor basisschoolleerlingen gericht op gamification, educatie en premium UI/UX.
                </p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {['React Native', 'C# / .NET', 'TypeScript', 'Gamification'].map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.9rem', 
                      fontWeight: '500', 
                      padding: '0.5rem 1.2rem', 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid rgba(255,255,255,0.08)', 
                      borderRadius: '100px', 
                      color: 'var(--color-text-muted)',
                      backdropFilter: 'blur(4px)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Interactive Photo Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(15px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setIsGalleryOpen(false)}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsGalleryOpen(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              style={{
                position: 'absolute',
                left: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000
              }}
            >
              <ChevronLeft size={32} />
            </motion.button>

            {/* Current Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                position: 'relative',
                width: '90vw',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[currentImageIndex]} 
                alt={`Gallery ${currentImageIndex + 1}`} 
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              />
            </motion.div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              style={{
                position: 'absolute',
                right: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10000
              }}
            >
              <ChevronRight size={32} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
