import { motion } from 'framer-motion';
import { Server, Layout, BrainCircuit, Users, Target, ArrowLeft, PenTool, Lightbulb, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const DarkTech = () => {
  const roles = [
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

  const phases = [
    {
      id: "adviseren",
      title: "Adviseren",
      icon: <Lightbulb size={32} className="text-gradient" />,
      items: [
        {
          content: "Uitgebreide business plan geschreven."
        },
        {
          content: "Gebruikerstesten heb ik uitgevoerd zoals te zien in de dia van mijn eindpresentatie (zie afbeelding direct hieronder). Hierbij heb ik de feedback constant verwerkt in het project. Eerste gebruikerstest was van de kennisparade waarbij we allemaal een app hadden gedesigned en dat lieten testen. Vervolgens uit de feedback die we hadden gekregen had ik een begin gemaakt aan de echte app. Vervolgens hebben de spiegelgrootte getest met studenten uit onze klas. Daarna had ik de app getest tijdens de studio next event en als laatst had ik de app getest met fashion studenten van Jolijn. De feedback die we hier allemaal uit hebben gekregen hebben we allemaal verwerkt. Hier nog de google form resultaten die je ook kan zien uit de dia van mijn eindpresentatie. Dit heb ik uitgebreid uitgelegd tijdens mijn eindpresentatie.",
          image: "/adviseren-testen.png"
        },
        {
          content: "Hierna heb ik ook gewerkt aan het onderzoeksrapport waarbij ik de human physiology heb onderzocht en hoe ik dit het best zo dark mogelijk kon implementeren in de app. Dit heb ik ook daadwerkelijk geïmplementeerd. Vervolgens als digital business engineer heb ik een hele concrete business plan opgesteld zoals dat ik dat heb vermeld in mijn eindpresentatie. Ook heb ik gewerkt aan het adviesrapport, hierbij heb ik het gedeelte dark-dilemma-light gedeelte gemaakt. Ook heb ik de feedback verwerkt van de opdrachtgever erin.",
          image: "/adviseren-onderzoek.png"
        },
        {
          content: "Uitwerking van het Business Plan en SWOT-analyse:",
          image: "/business-plan.png"
        }
      ]
    },
    {
      id: "ontwerpen",
      title: "Ontwerpen",
      icon: <PenTool size={32} className="text-gradient" />,
      items: [
        {
          content: "Hierbij heb ik de gebruikerstesten volledig zelf ontworpen of gedeeltelijk samen met Adam. Ook de brainstorm en ideation sessies (zie sticky notes) hebben geleid tot de eerste concepten.",
          image: "/ideation.png"
        },
        {
          content: "Hiernaast voor de kennisparade om te testen met prototypes heb ik zelf een design gemaakt en dat getest met gebruikers, hier zit vooral de dark patterns van human physiology in, die ik had onderzocht. Hierover is ook een uitgebreid analyse uitgevoerd in de inspiratie analyse die ik ook ga inleveren samen met deze document. In dat document moet je specifiek naar het kopje: 'Conceptueel Kader: Smaakmanipulatie & Psychologisch Ontwerp' gaan. Hier nog een screenshot van mijn design die ook in de inspiratie analyse staat.",
          image: "/ontwerpen-design.png"
        }
      ]
    },
    {
      id: "realiseren",
      title: "Realiseren",
      icon: <Code size={32} className="text-gradient" />,
      items: [
        {
          content: "Hiernaast nog een UML gemaakt, een clean folder architecture ontworpen en merge requests per branch/user story. Hierbij heb ik gebruik gemaakt van atomic commit messages en mijn merge request moest getest worden door 1 ander teamlid.",
          image: "/realiseren-uml.png"
        },
        {
          content: "Overzicht van wat er is gemaakt:",
          image: "/wat-gemaakt.png"
        },
        {
          content: "Demo van de applicatie:",
          image: "/fotos-demo.png"
        }
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto', marginBottom: '6rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Project Fasen</h2>
        {phases.map((phase, index) => (
          <motion.div
            key={phase.id}
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
                {phase.icon}
              </div>
              <h2 style={{ margin: 0 }}>{phase.title}</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
              {phase.items.map((item, i) => (
                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-border)' }}>
                  {item.subtitle && <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{item.subtitle}</h3>}
                  <p style={{ margin: 0, lineHeight: '1.6', color: 'var(--color-text-muted)' }}>{item.content}</p>
                  {item.image && (
                    <div style={{ marginTop: '1.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                      <img src={item.image} alt={item.subtitle || phase.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Mijn Specifieke Rollen</h2>
        {roles.map((role, index) => (
          <motion.div
            key={role.id}
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
                {role.icon}
              </div>
              <h2 style={{ margin: 0 }}>{role.title}</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              {role.items.map((item, i) => (
                <div key={i} style={{ paddingLeft: '1.5rem', borderLeft: '2px solid var(--color-border)' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>{item.subtitle}</h3>
                  <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>{item.content}</p>
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