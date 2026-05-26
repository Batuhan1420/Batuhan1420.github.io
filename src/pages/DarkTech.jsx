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
        { subtitle: "Project Setup", content: "De volledige basis van de applicatie from scratch opgebouwd, zodat het team een solide startpunt had." },
        { subtitle: "Architectuur & Structuur", content: "Uitgebreid onderzoek gedaan naar de optimale folder- en projectstructuur en deze geïmplementeerd. Hierbij heb ik het fundament gelegd volgens het Open/Closed Principle, zodat onze software-entiteiten open zijn voor uitbreiding maar gesloten voor modificatie (we kunnen veranderen wat de app doet, zonder te breken hoe de kern werkt)." },
        { subtitle: "Systeemontwerp", content: "UML-diagrammen uitgewerkt om de datastromen en structuur inzichtelijk te maken." }
      ]
    },
    {
      id: "design",
      title: "2. UI/UX Design & Front-end",
      icon: <Layout size={32} className="text-gradient" />,
      items: [
        { subtitle: "Visuele Identiteit", content: "Verantwoordelijk voor het basisdesign, het bepalen van het kleurenpalet en de algehele look-and-feel van de app." },
        { subtitle: "User Experience", content: "Grondig onderzoek gedaan naar dark patterns in UI/UX-design en deze inzichten (en de verdediging ertegen) strategisch geïmplementeerd in het ontwerp van de interface." }
      ]
    },
    {
      id: "ai",
      title: "3. AI Integratie",
      icon: <BrainCircuit size={32} className="text-gradient" />,
      items: [
        { subtitle: "Model Selectie", content: "Verantwoordelijk voor het onderzoek naar en de uiteindelijke keuze van het AI-model dat het beste bij onze use-case past." },
        { subtitle: "Eerste Implementatie", content: "De allereerste AI-integratie (functionaliteit voor het maken/verwerken van foto's) gebouwd. Deze code fungeerde als de blauwdruk waarop de andere teamleden hun AI-features succesvol konden verderbouwen." }
      ]
    },
    {
      id: "team",
      title: "4. Team Lead & Code Kwaliteit (QA)",
      icon: <Users size={32} className="text-gradient" />,
      items: [
        { subtitle: "Mentorschap", content: "Teamleden actief (hands-on) geholpen bij het coderen, het debuggen en het aanleren van de juiste codeerstructuren." },
        { subtitle: "Versiebeheer Workflow", content: "Een professionele Git-workflow geïntroduceerd en gehandhaafd. Dit omvatte het verplichten van atomic commit messages, gestructureerde merge requests en het uitvoeren van strenge merge reviews." },
        { subtitle: "Test- & Kwaliteitsstandaarden", content: "De lat voor betrouwbaarheid hoog gelegd. Ik heb ervoor gezorgd dat we werken met robuuste, productiewaardige standaarden door de code leesbaar te houden via het AAA-patroon, betrouwbaar te maken met de FIRST-principes, en edge cases en foutsituaties grondig af te vangen met de RIGHT-BICEP testmethodiek." }
      ]
    },
    {
      id: "business",
      title: "5. Business & Projectmanagement",
      icon: <Target size={32} className="text-gradient" />,
      items: [
        { subtitle: "Agile Ontwikkeling", content: "Het opstellen van de User Stories om de taken voor het team helder en behapbaar te maken." },
        { subtitle: "Strategie", content: "Het initiëren, onderzoeken en opzetten van het zakelijke Business Plan om de professionele en commerciële kant van het project te borgen." }
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
          Mijn Bijdragen & Verantwoordelijkheden in het Project
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
