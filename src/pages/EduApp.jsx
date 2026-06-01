import { motion } from 'framer-motion';
import { ArrowLeft, Gamepad2, BookOpen, Users, Sparkles, Server, Smartphone, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const EduApp = () => {
  const features = [
    {
      id: "gamification",
      title: "1. Gamification & Motivatie (Het 'Magische' Thema)",
      icon: <Gamepad2 size={32} className="text-gradient" />,
      items: [
        { subtitle: "Klas Ranglijst (Leaderboard)", content: "Een dynamisch, geanimeerd podium waar leerlingen hun positie in de klas kunnen zien op basis van verdiende sterren." },
        { subtitle: "Dagelijkse Missies & Streaks", content: "Leerlingen worden gestimuleerd om elke dag terug te komen via een streak-systeem en het voltooien van dagelijkse missies." },
        { subtitle: "Persoonlijke Avatars & Helden", content: "Kinderen kunnen hun eigen profiel personaliseren met magische avatars en helden verzamelen." }
      ]
    },
    {
      id: "educatief",
      title: "2. Educatieve Modules",
      icon: <BookOpen size={32} className="text-gradient" />,
      items: [
        { subtitle: "Gepersonaliseerd Lezen", content: "Een leesmodule die verhalen aanbiedt op basis van het individuele leesniveau van het kind (zoals AVI-niveaus)." },
        { subtitle: "Woordenlijst & Spreekwoorden", content: "Interactieve secties waar leerlingen nieuwe woorden ('Woordenlijst') en de betekenis van spreekwoorden ('Schatkamer') kunnen leren en oefenen." }
      ]
    },
    {
      id: "dashboards",
      title: "3. Ouder & Kind Dashboard (Multi-User Focus)",
      icon: <Users size={32} className="text-gradient" />,
      items: [
        { subtitle: "Ouder Dashboard", content: "Een apart portaal ('Parent Dashboard') met een glassmorphism design waar ouders de voortgang van hun kind kunnen inzien, abonnementen kunnen beheren (Paywall integraties) en inzicht krijgen in de leerontwikkeling." },
        { subtitle: "Kind Dashboard", content: "Een kleurrijk, visueel stimulerend thuisscherm dat kinderen direct meeneemt in hun leeravontuur, voorzien van vloeiende animaties en intuïtieve navigatie." }
      ]
    },
    {
      id: "uiux",
      title: "4. Premium UI/UX & Animaties",
      icon: <Sparkles size={32} className="text-gradient" />,
      items: [
        { subtitle: "Glassmorphism & Gradients", content: "Geavanceerde styling technieken gebruikt voor kaarten, knoppen en achtergronden om de app een moderne en diepe uitstraling te geven." },
        { subtitle: "Micro-animaties", content: "Veelvuldig gebruik van react-native-reanimated voor vloeiende overgangen, pulserende notificatiebadges, en geveerde (spring) animaties bij het navigeren door de app, wat de app 'levendig' maakt." }
      ]
    },
    {
      id: "backend",
      title: "5. Robuuste Backend Integratie",
      icon: <Server size={32} className="text-gradient" />,
      items: [
        { subtitle: "API Communicatie", content: "Naadloze koppeling met een .NET/C# backend via robuuste API-services, inclusief veilige authenticatie (JWT tokens) via SecureStore en AsyncStorage." },
        { subtitle: "Foutafhandeling", content: "Implementatie van betrouwbare netwerk-interceptors om sessie-verloop (401 errors) en server-fouten elegant af te vangen zonder de gebruikerservaring te verstoren." }
      ]
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
        <ArrowLeft size={16} /> Terug naar overzicht
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem', textAlign: 'center' }}
      >
        <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--color-accent)', borderRadius: '50px', marginBottom: '1.5rem', fontWeight: 600 }}>
          Mobile Application
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Educatief Leerplatform</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'var(--color-text-muted)' }}>
          Mobiele applicatie voor basisschoolleerlingen
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <strong>Rol:</strong> Full-Stack Developer / Mobile App Developer
          </span>
          <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <strong>Tech Stack:</strong> React Native, Expo, TypeScript, Reanimated, .NET, Prisma ORM
          </span>
        </div>
      </motion.div>

      {/* Introductie */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', marginBottom: '4rem' }}>
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: '3rem', left: '3rem', width: '60px', height: '60px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.3 }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-surface)', border: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Info size={32} className="text-gradient" />
            </div>
            <h2 style={{ margin: 0 }}>Over het Project</h2>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', margin: 0 }}>
              Dit project is een uitgebreide, interactieve mobiele applicatie ontworpen om het leerproces van basisschoolleerlingen te stimuleren en te digitaliseren. Het hoofddoel van de app is om educatie leuk, visueel aantrekkelijk en belonend te maken door middel van vergaande <em>gamification</em>. De app is gebouwd met een sterke focus op een premium, "magische" gebruikerservaring die kinderen motiveert om dagelijks te oefenen met taal, lezen en woordenschat.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Kernfunctionaliteiten */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Kernfunctionaliteiten & Bijdragen</h2>
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '3rem', left: '3rem', width: '60px', height: '60px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.3 }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-surface)', border: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {feature.icon}
              </div>
              <h2 style={{ margin: 0 }}>{feature.title}</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              {feature.items.map((item, i) => (
                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-border)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{item.subtitle}</h3>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resultaat */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', marginBottom: '6rem' }}>
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          style={{ padding: '3rem', position: 'relative', overflow: 'hidden', border: '1px solid rgba(139, 92, 246, 0.3)' }}
        >
          <div style={{ position: 'absolute', top: '3rem', left: '3rem', width: '60px', height: '60px', background: 'var(--color-accent)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.3 }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-surface)', border: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle size={32} className="text-gradient" />
            </div>
            <h2 style={{ margin: 0 }}>Het Resultaat</h2>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-muted)', margin: 0 }}>
              Het eindresultaat is een stabiele, visueel indrukwekkende mobiele applicatie die een brug slaat tussen leren en spelen. Het demonstreert mijn vermogen om complexe technische vereisten (zoals multi-user dashboards en complexe animaties) te vertalen naar een intuïtief en aantrekkelijk eindproduct voor een specifieke, jonge doelgroep.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default EduApp;
