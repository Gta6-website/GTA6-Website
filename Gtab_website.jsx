import React, { useState } from 'react';
import { ChevronDown, Zap, Lock } from 'lucide-react';

export default function GTA6Website() {
  const [activeSection, setActiveSection] = useState('story');
  const [expandedCard, setExpandedCard] = useState(null);

  const sections = {
    story: {
      title: 'THE STORY',
      icon: '🎬',
      content: 'JASON & LUCIA: A TALE OF CRIME & SURVIVAL'
    },
    characters: {
      title: 'CHARACTERS',
      icon: '👥',
      content: 'MEET THE CAST OF LEONIDA'
    },
    easterEggs: {
      title: 'EASTER EGGS',
      icon: '🥚',
      content: 'HIDDEN SECRETS & REFERENCES'
    },
    tips: {
      title: 'TIPS & TRICKS',
      icon: '⚡',
      content: 'PRO GAMER STRATEGIES'
    },
    hidden: {
      title: 'HIDDEN ASPECTS',
      icon: '🔐',
      content: 'SECRETS BEYOND THE SURFACE'
    }
  };

  const storyContent = [
    {
      title: 'LUCIA CAMINOS',
      subtitle: 'The Fighter',
      description: 'Recently released from Leonida Penitentiary for fighting for her family. A Latina protagonist breaking boundaries in gaming. Her fierce determination drives the narrative.',
      details: [
        'First major female lead in mainline GTA',
        'Originated from Liberty City',
        'Expert in combat & street smarts',
        'Romantic connection with Jason'
      ]
    },
    {
      title: 'JASON DUVAL',
      subtitle: 'The Survivor',
      description: 'Failed Army veteran turned drug runner. Grew up around grifters and crooks. Works in the Leonida Keys, searching for a way out of the criminal underworld.',
      details: [
        'Military background (first in franchise)',
        'Networking skills & street connections',
        'Devoted to Lucia\'s survival',
        'Orchestrates the major scores'
      ]
    }
  ];

  const charactersList = [
    {
      name: 'CAL HAMPTON',
      role: 'Jason\'s Paranoid Friend',
      traits: 'Conspiracy theorist, listens to Coast Guard radio'
    },
    {
      name: 'BOOBIE IKE',
      role: 'Vice City Legend',
      traits: 'Business empire owner, real estate & music industry'
    },
    {
      name: 'DRE\'QUAN PRIEST',
      role: 'Record Label Owner',
      traits: 'Only Raw Records founder, music producer'
    },
    {
      name: 'REAL DIMEZ',
      role: 'Musical Duo',
      traits: 'Bae-Luxe & Roxy, viral video creators'
    },
    {
      name: 'RAUL BAUTISTA',
      role: 'Seasoned Bank Robber',
      traits: 'Expert heist planner, tactical knowledge'
    },
    {
      name: 'BRIAN HEDER',
      role: 'Drug Runner Boss',
      traits: 'Jason\'s landlord, local power player'
    }
  ];

  const easterEggs = [
    {
      title: 'VICE CITY NOSTALGIA PACK',
      description: 'Pre-order bonus featuring items inspired by GTA: Vice City (2002) and protagonist Tommy Vercetti. Look for Tommy references throughout Vice City landmarks.',
      rarity: 'COMMON'
    },
    {
      title: 'HIDDEN TOMMY VERCETTI EASTER EGG',
      description: 'According to leaks, there may be a special Easter egg referencing Tommy Vercetti\'s original mansion or a cameo. Check Ocean Beach luxury properties.',
      rarity: 'RARE'
    },
    {
      title: 'BONNIE & CLYDE MONUMENTS',
      description: 'Look for street art, murals, or graffiti making reference to the famous criminal couple that inspired Jason & Lucia. Multiple locations throughout Leonida.',
      rarity: 'COMMON'
    },
    {
      title: 'THE POINTER SISTERS EASTER EGG',
      description: 'The trailer\'s iconic "Hot Together" track is from 1981. Hidden jukebox locations may feature classic Vice City era tracks from the original soundtrack.',
      rarity: 'UNCOMMON'
    },
    {
      title: 'FLORIDA MAN REFERENCES',
      description: 'GTA 6 satirizes "Florida Man" culture. Expect news broadcasts, internet videos, and NPC stories referencing absurd Florida crimes and oddities.',
      rarity: 'COMMON'
    },
    {
      title: 'HIDDEN POLICE CORRUPTION MISSIONS',
      description: 'The mysterious corrupt cop from the trailer may have hidden missions. Look for unmarked police vehicles and back-alley negotiations.',
      rarity: 'RARE'
    }
  ];

  const tips = [
    {
      title: 'CHARACTER SWITCHING ADVANTAGE',
      description: 'Switch between Lucia and Jason during missions to use their unique abilities. Lucia\'s combat skills vs Jason\'s tactical knowledge.',
      category: 'GAMEPLAY'
    },
    {
      title: 'LEONIDA KEYS MONEY FARMS',
      description: 'Early game: Rob convenience stores and diners (like in the trailer) in the Keys before moving to bigger scores. Less heat, consistent cash.',
      category: 'ECONOMY'
    },
    {
      title: 'AVOID THE MYSTERIOUS COP',
      description: 'The corrupt police officer shown in trailers has connections everywhere. Getting on his radar early means increased wanted levels and ambushes.',
      category: 'SURVIVAL'
    },
    {
      title: 'MAXIMIZE PROPERTY INCOME',
      description: 'Invest in properties early. Boobie Ike\'s real estate empire suggests property management will be crucial for steady income streams.',
      category: 'ECONOMY'
    },
    {
      title: 'DUAL ROMANCE MECHANICS',
      description: 'Jason & Lucia\'s relationship affects mission success and story outcomes. Maintain their bond for exclusive dialogue and mission variations.',
      category: 'STORY'
    },
    {
      title: 'VICE CITY DISTRICTS MASTERY',
      description: 'Each district (Ocean Beach, Little Cuba, VC Port, Ambrosia) has unique missions and crime opportunities. Explore them systematically for 100% completion.',
      category: 'EXPLORATION'
    },
    {
      title: 'MUSIC INDUSTRY CONNECTIONS',
      description: 'Network with Dre\'Quan, Real Dimez, and music producers. They unlock unique missions and can provide cover for criminal activities.',
      category: 'NETWORKING'
    },
    {
      title: 'WEAPON CUSTOMIZATION',
      description: 'Different weapons suit different scenarios. Lucia excels with close-range combat weapons, Jason with ranged/tactical loadouts.',
      category: 'COMBAT'
    }
  ];

  const hiddenAspects = [
    {
      title: 'DYNAMIC WORLD REACTIVITY',
      description: 'The world doesn\'t exist in a vacuum. Police body cameras, social media trends, and NPC reactions change based on your actions. Every crime has consequences that ripple through Vice City.',
      icon: '🌍',
      locked: false
    },
    {
      title: 'RELATIONSHIP DEPENDENCY SYSTEM',
      description: 'Jason & Lucia\'s individual skills can deteriorate if you favor one protagonist too heavily. Balance playtime to unlock dual-protagonist combo abilities.',
      icon: '💑',
      locked: false
    },
    {
      title: 'INFLUENCER ECONOMY',
      description: 'Social media clout matters. Pulling off flashy crimes in public increases notoriety but attracts more law enforcement. Subtle scores build reputation with the underworld.',
      icon: '📱',
      locked: false
    },
    {
      title: 'PRISON REHABILITATION SYSTEM',
      description: 'Getting arrested doesn\'t just cost money—it affects your standing with various factions. Some missions become unavailable after certain arrests. Lucia\'s prison history opens unique dialogue trees.',
      icon: '🔒',
      locked: false
    },
    {
      title: 'UNDERGROUND ECONOMY PROGRESSION',
      description: 'Reputation in the drug trade, music industry, and real estate creates hidden faction systems. Hidden missions unlock as your standing rises with specific criminal organizations.',
      icon: '📊',
      locked: true
    },
    {
      title: 'ENVIRONMENTAL STORYTELLING',
      description: 'Pay attention to NPC conversations, graffiti, and environmental details. Vice City\'s corruption and Lucia & Jason\'s rising notoriety are told through world details, not cutscenes alone.',
      icon: '🎨',
      locked: false
    },
    {
      title: 'MORSE CODE & HIDDEN COMMUNICATIONS',
      description: 'Cal Hampton\'s Coast Guard radio obsession hints at a hidden communication system. Some missions may be unlocked through deciphering radio signals and codes.',
      icon: '📡',
      locked: true
    },
    {
      title: 'DUAL PERSPECTIVE STORYLINE SPLITS',
      description: 'Certain story beats play out differently depending on who you\'re controlling. Completing missions as Lucia vs Jason reveals different narrative details and relationships.',
      icon: '🎭',
      locked: false
    }
  ];

  const RarityBadge = ({ rarity }) => {
    const rarityColors = {
      'COMMON': 'text-cyan-400 border-cyan-400',
      'UNCOMMON': 'text-green-400 border-green-400',
      'RARE': 'text-purple-400 border-purple-400',
      'LEGENDARY': 'text-yellow-400 border-yellow-400'
    };
    return (
      <span className={`text-xs font-bold border px-2 py-1 ${rarityColors[rarity] || rarityColors['COMMON']}`}>
        {rarity}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Animated background */}
      <div className="fixed inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-cyan-900"></div>
      </div>

      {/* HERO SECTION WITH PROMOTIONAL IMAGE */}
      <section 
        className="relative z-10 min-h-screen w-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1400&h=900&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Gradient Overlays */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(10,14,39,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(10,14,39,0.8) 100%)'
        }}></div>

        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.05), transparent)'
        }}></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto py-32 md:py-0">
          <h1 
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            style={{ 
              color: '#00ff88', 
              textShadow: '0 0 30px #00ff88, 0 0 60px rgba(0, 255, 136, 0.6), 0 0 90px rgba(0, 255, 136, 0.3)'
            }}
          >
            GRAND THEFT<br />AUTO VI
          </h1>
          
          <div className="h-1.5 w-48 md:w-64 mx-auto mb-8" style={{ 
            background: 'linear-gradient(90deg, #00ff88, #ff00ff, #ff0080)',
            boxShadow: '0 0 30px rgba(0, 255, 136, 0.8)'
          }}></div>
          
          <p className="text-2xl md:text-4xl text-gray-100 mb-6 font-bold tracking-wide">JASON & LUCIA</p>
          
          <p className="text-cyan-300 text-base md:text-xl font-mono mb-8 tracking-widest">ONE LAST SCORE IN THE SUNNIEST PLACE</p>
          
          <p className="text-gray-200 text-lg md:text-2xl font-bold mb-12">LEONIDA • VICE CITY • NOVEMBER 19, 2026</p>
          
          <div className="space-y-2">
            <p className="text-gray-300 text-sm font-mono animate-pulse">↓ SCROLL TO EXPLORE ↓</p>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
      </section>

      {/* Navigation */}
      <nav className="relative z-20 sticky top-0 bg-black/90 backdrop-blur border-b border-cyan-500/20" style={{ boxShadow: '0 0 20px rgba(0, 255, 136, 0.1)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-4 py-2 font-bold text-sm transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-cyan-500 text-black border border-cyan-300'
                    : 'text-cyan-400 border border-cyan-500/50 hover:border-cyan-400'
                }`}
                style={activeSection === key ? { boxShadow: '0 0 15px rgba(0, 255, 136, 0.6)' } : {}}
              >
                {section.icon} {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20">
        {/* STORY SECTION */}
        {activeSection === 'story' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#00ff88' }}>THE STORY</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">A ROMANTIC CRIMINAL PARTNERSHIP. WHEN AN EASY SCORE GOES WRONG, THEY FIND THEMSELVES ON THE DARKEST SIDE OF THE SUNNIEST PLACE.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {storyContent.map((content, idx) => (
                <div
                  key={idx}
                  className="border border-purple-500/50 p-8 hover:border-purple-400 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(0, 255, 136, 0.05))', boxShadow: 'inset 0 0 20px rgba(147, 51, 234, 0.1)' }}
                >
                  <h3 className="text-2xl font-black mb-2" style={{ color: '#ff00ff' }}>{content.title}</h3>
                  <p className="text-cyan-400 text-sm font-bold mb-4">{content.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{content.description}</p>
                  <div className="space-y-2">
                    {content.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <span className="text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Setting Info */}
            <div className="border border-cyan-500/50 p-8 mt-12" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.08), rgba(0, 255, 136, 0.02))' }}>
              <h3 className="text-2xl font-black mb-4" style={{ color: '#00ff88' }}>LEONIDA STATE</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-cyan-400 font-bold mb-2">SETTING</p>
                  <p className="text-gray-300">Florida-inspired open world featuring Vice City, Grassrivers, Port Gellhorn, and the Leonida Keys</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-bold mb-2">SCALE</p>
                  <p className="text-gray-300">Rockstar's most expansive world yet with unprecedented detail and multiple distinct neighborhoods</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-bold mb-2">ERA</p>
                  <p className="text-gray-300">Contemporary 2020s America with satirical takes on influencer culture and social media</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CHARACTERS SECTION */}
        {activeSection === 'characters' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ff00ff' }}>MEET THE CREW</h2>
              <p className="text-gray-400">THE CAST OF LEONIDA</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {charactersList.map((char, idx) => (
                <div
                  key={idx}
                  className="border border-pink-500/50 p-6 cursor-pointer hover:border-pink-400 transition-all duration-300"
                  onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
                  style={{ background: 'linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(255, 0, 255, 0.05))' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-black" style={{ color: '#ff00ff' }}>{char.name}</h4>
                      <p className="text-cyan-400 text-sm font-bold">{char.role}</p>
                    </div>
                    <ChevronDown className={`transition-transform ${expandedCard === idx ? 'rotate-180' : ''}`} size={20} color="#00ff88" />
                  </div>
                  <p className="text-gray-300 text-sm">{char.traits}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EASTER EGGS SECTION */}
        {activeSection === 'easterEggs' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ffd700' }}>HIDDEN SECRETS</h2>
              <p className="text-gray-400">EASTER EGGS & HIDDEN REFERENCES</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {easterEggs.map((egg, idx) => (
                <div
                  key={idx}
                  className="border border-yellow-500/50 p-6 hover:border-yellow-400 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 215, 0, 0.02))' }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-black flex-1" style={{ color: '#ffd700' }}>{egg.title}</h4>
                    <RarityBadge rarity={egg.rarity} />
                  </div>
                  <p className="text-gray-300 leading-relaxed">{egg.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIPS & TRICKS SECTION */}
        {activeSection === 'tips' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#00ff88' }}>PRO TIPS</h2>
              <p className="text-gray-400">STRATEGIES TO DOMINATE LEONIDA</p>
            </div>

            <div className="space-y-4">
              {tips.map((tip, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-cyan-500 p-6 cursor-pointer hover:border-cyan-300 transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, rgba(0, 255, 136, 0.1), transparent)' }}
                  onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-black" style={{ color: '#00ff88' }}>{tip.title}</h4>
                        <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded font-bold">{tip.category}</span>
                      </div>
                      <p className="text-gray-300">{tip.description}</p>
                    </div>
                    <Zap className="ml-4 flex-shrink-0" size={20} color="#00ff88" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HIDDEN ASPECTS SECTION */}
        {activeSection === 'hidden' && (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#ff00ff' }}>HIDDEN MECHANICS</h2>
              <p className="text-gray-400">SECRETS BENEATH THE SURFACE</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {hiddenAspects.map((aspect, idx) => (
                <div
                  key={idx}
                  className="relative border border-purple-500/50 p-6 hover:border-purple-400 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(147, 51, 234, 0.02))' }}
                >
                  {aspect.locked && (
                    <div className="absolute top-3 right-3">
                      <Lock size={16} color="#ff0080" />
                    </div>
                  )}
                  <div className="text-4xl mb-3">{aspect.icon}</div>
                  <h4 className="text-lg font-black mb-2" style={{ color: '#ff00ff' }}>{aspect.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{aspect.description}</p>
                  {aspect.locked && (
                    <p className="text-pink-400 text-xs font-bold mt-3">UNLOCKED POST-LAUNCH</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/20 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm mb-2">GRAND THEFT AUTO VI © 2026 ROCKSTAR GAMES</p>
          <p className="text-gray-600 text-xs">COMING TO PS5 & XBOX SERIES X|S | NOVEMBER 19, 2026</p>
          <div className="mt-4 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00ff88, transparent)' }}></div>
          <p className="text-gray-500 text-xs mt-4">THIS IS AN UNOFFICIAL FAN SITE | NOT AFFILIATED WITH ROCKSTAR GAMES</p>
        </div>
      </footer>

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px)',
        animation: 'scan 8s linear infinite'
      }}></div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #00ff88 #0a0e27;
        }
        
        *::-webkit-scrollbar {
          width: 8px;
        }
        
        *::-webkit-scrollbar-track {
          background: #0a0e27;
        }
        
        *::-webkit-scrollbar-thumb {
          background: #00ff88;
          border-radius: 4px;
        }
        
        *::-webkit-scrollbar-thumb:hover {
          background: #00ff88;
          box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
        }
      `}</style>
    </div>
  );
}
