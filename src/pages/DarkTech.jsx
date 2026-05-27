import { motion } from 'framer-motion';
import { Server, Layout, BrainCircuit, Users, Target, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const DarkTech = () => {
  const sections = [
    {
      id: "fundament",
      title: "1. Fundament & Software Architectuur",
      icon: <Server size={32} className="text-gradient" />,
      items: [
        { subtitle: "Project Setup", content: "De complete basisapplicatie from scratch opgezet, wat diende als het startpunt voor het ontwikkelteam." },
        { subtitle: "Architectuur & Structuur", content: "De projectstructuur ontworpen en geïmplementeerd. Het fundament is gebouwd volgens het Open/Closed Principle: software-entiteiten (classes, modules, functies) zijn open voor uitbreiding, maar gesloten voor modificatie. Hierdoor kunnen we veranderen wat de applicatie doet, zonder te wijzigen hoe de kern werkt." },
        { subtitle: "Systeemontwerp", content: "Heldere UML diagram" }
      ]
    },
    {
      id: "design",
      title: "2. UI/UX Design & Front-end",
      icon: <Layout size={32} className="text-gradient" />,
      items: [
        { subtitle: "Visuele Identiteit", content: "Volledig verantwoordelijk voor het basisdesign, het kleurenpalet en de algehele look-and-feel van de applicatie." },
        { subtitle: "Ethical UX", content: "Diepgaand onderzoek uitgevoerd naar dark patterns in UI/UX. Deze inzichten strategisch geïmplementeerd in de interface om gebruikers proactief te beschermen." },
        { subtitle: "Front-end Development", content: "Verantwoordelijk voor het vertalen van ontwerpen naar robuuste, interactieve en responsieve front-end code, met een sterke focus op performance." }
      ]
    },
    {
      id: "ai",
      title: "3. AI Integratie & Engineering",
      icon: <BrainCircuit size={32} className="text-gradient" />,
      items: [
        { subtitle: "Model Selectie", content: "Verantwoordelijk voor de evaluatie en uiteindelijke selectie van het meest geschikte AI-model voor onze use-case." },
        { subtitle: "Architecturale Blauwdruk", content: "De allereerste AI-integratie (fotoverwerking) gebouwd. Deze code diende als blauwdruk voor het team om veilig nieuwe AI-features te ontwikkelen." },
        { subtitle: "AI Engineering", content: "Functionaliteiten ontwikkeld, gefinetuned en robuust geïntegreerd voor een innovatieve gebruikerservaring." }
      ]
    },
    {
      id: "team",
      title: "4. Team Lead & Kwaliteitsborging (QA)",
      icon: <Users size={32} className="text-gradient" />,
      items: [
        { subtitle: "Mentorschap", content: "Het team actief (hands-on) begeleid bij het programmeren, debuggen en aanleren van de juiste codeerstructuren." },
        { subtitle: "Versiebeheer Workflow", content: "Een strakke Git-workflow afgedwongen inclusief verplichte atomic commit messages, gestructureerde merge requests en strenge code reviews." },
      ]
    },
    {
      id: "business",
      title: "5. Business & Projectmanagement",
      icon: <Target size={32} className="text-gradient" />,
      items: [
        { subtitle: "Agile Management", content: "Complexe functionaliteiten opgedeeld in behapbare en heldere User Stories voor het team." },
        { subtitle: "Business Strategie", content: "Het zakelijke Business Plan geïnitieerd en uitgewerkt om de commerciële haalbaarheid en professionaliteit van het project te borgen." }
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
          Semester Project
        </div>
        <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Dark Tech</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
          Mijn Rol & Impact in het Project
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
          >
            {/* Soft glow behind the icon */}
            <div style={{ position: 'absolute', top: '3rem', left: '3rem', width: '60px', height: '60px', background: 'var(--color-primary)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.3 }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--color-surface)', border: 'var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {section.icon}
              </div>
              <h2 style={{ margin: 0 }}>{section.title}</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              {section.items.map((item, i) => (
                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-border)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{item.subtitle}</h3>
                  <p style={{ margin: 0 }}>{item.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DarkTech;