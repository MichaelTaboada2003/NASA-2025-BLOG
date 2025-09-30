import React, { useState } from "react";

export default function TeamCarousel() {
  // Datos del equipo - Personaliza con tu información real
  const teamMembers = [
    {
      id: 1,
      name: "Michael Taboada",
      nickname: "Maic",
      role: "Backend Developer",
      image: "/public/michael.jpg",
      description: [
        "Me llamo Michael Andres pero mis amigos me llaman Maic, Maick, Maicol, May, Maicrophone, Maicky, Maickolín, Maickel, Mikel, Michael, Michell, Michelle, Mich, Empecé en la programación con un C++, tenía 9 meses. Actualmente estoy desempleado.",
        "Algunos de mis éxitos incluyen colaborar con Mozilla para el desarrollo de las primeras apps en su sistema FirefoxOS. Aunque hoy está desaparecido fue un gran avance en el mundo del desarrollo web.",
        "También he participado en comunidades y eventos, creando contenido y materiales educativos para ayudar a más personas a entrar en el mundo del desarrollo."
      ]
    },
    {
      id: 2,
      name: "Luna Quintero",
      nickname: "Lunita",
      role: "Team Lead",
      image: "/public/luna.jpg",
      description: [
        "Soy Luna, especialista en desarrollo frontend con más de 8 años de experiencia. Mi pasión es crear interfaces intuitivas y accesibles que mejoren la experiencia del usuario.",
        "He trabajado en proyectos de e-commerce para grandes marcas, optimizando el rendimiento y la conversión de aplicaciones web que reciben millones de visitas mensuales.",
        "Me encanta compartir conocimiento y soy mentora en varios bootcamps, ayudando a la próxima generación de desarrolladores a encontrar su camino en el mundo tech."
      ]
    },
    {
      id: 3,
      name: "Leonardo Gonzalez",
      nickname: "Leo",
      role: "Backend Developer",
      image: "/public/Leonardo.jpg",
      description: [
        "Hola, soy Leonardo Llevo más de 10 años construyendo arquitecturas robustas y escalables. Mi especialidad son los microservicios y la optimización de bases de datos.",
        "He liderado la migración de sistemas monolíticos a arquitecturas cloud-native, reduciendo costos operativos en un 40% y mejorando la disponibilidad del servicio.",
        "Contribuyo activamente a proyectos open source y soy speaker regular en conferencias sobre arquitectura de software y mejores prácticas en desarrollo backend."
      ]
    },
    {
      id: 4,
      name: "María Salazar",
      nickname: "Cami",
      role: "UX/UI Designer",
      image: "/public/María.jpg",
      description: [
        "Soy María, diseñadora UX/UI con formación en psicología. Combino la comprensión del comportamiento humano con el diseño para crear experiencias digitales memorables.",
        "He diseñado aplicaciones que han ganado premios internacionales de diseño, siempre poniendo al usuario en el centro del proceso creativo.",
        "Además del diseño, soy investigadora UX certificada y he establecido procesos de design thinking en múltiples startups tecnológicas."
      ]
    },
    {
      id: 5,
      name: "Mauro González",
      nickname: "Mau",
      role: "DevOps Engineer",
      image: "/public/mauro.png",
      description: [
        "Me llamo Mauro y soy ingeniero DevOps. Mi misión es hacer que el desarrollo y el despliegue sean tan fluidos como sea posible. Automatización es mi segundo nombre.",
        "He implementado pipelines CI/CD que han reducido el tiempo de deployment de días a minutos, y establecido sistemas de monitoreo que previenen problemas antes de que ocurran.",
        "Soy evangelista de la cultura DevOps y ayudo a los equipos a adoptar mejores prácticas de colaboración entre desarrollo y operaciones."
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section id="equipo" className="section-container">
      <h2 className="title-section">
        <svg
          className="profile-check"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12 1.75a5.25 5.25 0 1 1-5.25 5.25A5.26 5.26 0 0 1 12 1.75zm0 9A3.75 3.75 0 1 0 8.25 7 3.75 3.75 0 0 0 12 10.75Zm8 9.5a.75.75 0 0 1-1.06 0 7.93 7.93 0 0 0-5.64-2.34h-2.6A7.93 7.93 0 0 0 5.06 20.25a.75.75 0 0 1-1.06-1.06 9.43 9.43 0 0 1 6.69-2.79h2.6a9.43 9.43 0 0 1 6.69 2.79.75.75 0 0 1 0 1.06Z" />
          <path d="M21.53 9.22a.75.75 0 0 0-1.06 0L18 11.69l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06Z" />
        </svg>
        <span>Nuestro Equipo</span>
      </h2>

      <div className="carousel-container">
        <article className={`about-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
          <div className="about-text">
            <div className="member-header">
              <h3 className="member-name">
                {currentMember.name} 
                <span className="member-nickname">"{currentMember.nickname}"</span>
              </h3>
              <p className="member-role">{currentMember.role}</p>
            </div>
            
            {currentMember.description.map((paragraph, index) => (
              <p key={index}>
                {index === 0 ? (
                  <span dangerouslySetInnerHTML={{ 
                    __html: paragraph.replace(
                      /(liderando equipos|colaborar con Mozilla|interfaces intuitivas|arquitecturas robustas|experiencias digitales|Automatización)/g, 
                      '<strong>$1</strong>'
                    )
                  }} />
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          <div className="about-photo">
            <figure className="photo-frame">
              <img
                src={currentMember.image}
                alt={currentMember.name}
                loading="lazy"
              />
            </figure>
          </div>
        </article>

        {/* Controles de navegación */}
        <div className="carousel-controls">
          <button 
            className="carousel-button prev" 
            onClick={goToPrevious}
            aria-label="Miembro anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-dots">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Ir a ${teamMembers[index].name}`}
              />
            ))}
          </div>

          <button 
            className="carousel-button next" 
            onClick={goToNext}
            aria-label="Siguiente miembro"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ===== CSS PURO ===== */}
      <style>{`
        /* SectionContainer */
        .section-container{
          max-width: 1000px;
          margin: 0 auto;
          padding: 2.5rem 1rem;
        }

        /* TitleSection */
        .title-section{
          display: flex;
          align-items: center;
          gap: .75rem;
          font-size: clamp(1.25rem, 1.2vw + 1rem, 1.75rem);
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1.5rem 0;
        }

        .profile-check{
          width: 2rem;
          height: 2rem;
          fill: currentColor;
        }

        /* Carousel Container */
        .carousel-container {
          position: relative;
        }

        /* AboutMe layout */
        .about-wrapper{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          color: var(--text);
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
          min-height: 400px;
        }

        .about-wrapper.transitioning {
          opacity: 0;
        }

        @media (min-width: 768px){
          .about-wrapper{ flex-direction: row; }
        }

        /* Member header */
        .member-header {
          margin-bottom: 1rem;
        }

        .member-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
          color: var(--text);
        }

        .member-nickname {
          font-size: 1.1rem;
          font-weight: 400;
          opacity: 0.7;
          margin-left: 0.5rem;
        }

        .member-role {
          font-size: 1rem;
          color: var(--accent);
          font-weight: 600;
          margin: 0;
        }

        /* bloque de texto con "prose" mínima */
        .about-text{
          order: 2;
          text-wrap: pretty;
          max-width: 60ch;
        }
        @media (min-width: 768px){
          .about-text{ order: 1; }
        }

        /* estilos de párrafos y strong */
        .about-text > p{ 
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        .about-text strong{
          color: var(--accent);
          font-weight: 400;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }

        /* dark mode opcional con clase .dark en <html> */
        .dark .about-wrapper{ color: var(--text-dark); }
        .dark .member-name { color: var(--text-dark); }
        .dark .member-role { color: var(--accent-dark); }
        .dark .about-text strong{ color: var(--accent-dark); }

        /* Foto */
        .about-photo{ 
          order: 1; 
          display: grid; 
          place-items: center;
        }
        @media (min-width: 768px){ 
          .about-photo{ order: 2; } 
        }

        .photo-frame{
          width: 16rem;
          aspect-ratio: 1 / 1;
          display: grid;
          place-items: center;
          padding: .25rem;
          background: rgba(0,0,0,.20);
          border-radius: 1rem;
          transform: rotate(3deg);
          border: 1px solid rgba(0,0,0,.7);
          box-shadow:
            0 0 0 1px rgba(0,0,0,.05),
            0 10px 15px -3px rgba(0,0,0,.10),
            0 4px 6px -4px rgba(0,0,0,.10);
          transition: transform 0.3s ease;
        }

        .photo-frame:hover {
          transform: rotate(0deg) scale(1.02);
        }

        @media (min-width: 1024px){
          .photo-frame{ padding: .5rem; }
        }

        .photo-frame img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          border-radius: calc(1rem - .25rem);
        }

        /* Carousel Controls */
        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .carousel-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          color: var(--text);
        }

        .carousel-button:hover {
          background: var(--accent);
          color: white;
          transform: scale(1.1);
        }

        .carousel-button:active {
          transform: scale(0.95);
        }

        .dark .carousel-button {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-dark);
        }

        .dark .carousel-button:hover {
          background: var(--accent-dark);
          color: white;
        }

        /* Dots */
        .carousel-dots {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .dot {
          width: 10px;
          height: 10px;
          border: none;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: rgba(0, 0, 0, 0.4);
          transform: scale(1.2);
        }

        .dot.active {
          width: 24px;
          border-radius: 12px;
          background: var(--accent);
        }

        .dark .dot {
          background: rgba(255, 255, 255, 0.2);
        }

        .dark .dot:hover {
          background: rgba(255, 255, 255, 0.4);
        }

        .dark .dot.active {
          background: var(--accent-dark);
        }

        /* Animación suave para móviles */
        @media (max-width: 767px) {
          .carousel-controls {
            position: relative;
            padding: 0 1rem;
          }
          
          .carousel-button {
            width: 35px;
            height: 35px;
          }
        }

        /* Accesibilidad - Focus visible */
        .carousel-button:focus-visible,
        .dot:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}