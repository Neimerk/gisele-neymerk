import "./App.css";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Camera,
  Dumbbell,
  Heart,
  MessageCircle,
  Music2,
  PlayCircle,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5521999638993";
const INSTAGRAM = "https://www.instagram.com/gizaneymerkoficial/";
const TIKTOK = "https://www.tiktok.com/@gizaneymerkoficial";
const YOUTUBE = "https://youtube.com/@gizaneymerkoficial";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const services = [
  {
    icon: Dumbbell,
    title: "Personal Training",
    text: "Treinos personalizados focados em saúde, condicionamento físico, autoestima e qualidade de vida.",
  },
  {
    icon: Heart,
    title: "Pilates",
    text: "Fortalecimento, mobilidade, consciência corporal, equilíbrio e postura através do pilates.",
  },
  {
    icon: Music2,
    title: "Dança",
    text: "Movimento, energia, expressão corporal e liberdade através da dança e do ritmo.",
  },
  {
    icon: Sparkles,
    title: "Palestras",
    text: "Palestras voltadas às áreas da saúde, qualidade de vida, bem-estar, movimento humano e vida da mulher.",
  },
  {
    icon: MessageCircle,
    title: "Consultoria Online",
    text: "Acompanhamento à distância com orientação personalizada para treinar com segurança, constância e direção.",
  },
];

const stats = [
  { value: "14+", label: "Anos de experiência" },
  { value: "UFRJ", label: "Formação em Educação Física" },
  { value: "Online", label: "Consultoria para todo o Brasil" },
  { value: "1:1", label: "Aulas particulares personalizadas" },
];

const gallery = [
  { src: "/gallery1.webp", alt: "Gisele celebrando entre confetes" },
  { src: "/gallery2.webp", alt: "Gisele em momento de treino" },
  { src: "/gallery3.webp", alt: "Gisele em atividade física ao ar livre" },
  { src: "/gallery4.webp", alt: "Gisele praticando movimento e dança" },
  { src: "/gallery5.webp", alt: "Gisele em sessão de bem-estar" },
  { src: "/gallery6.webp", alt: "Gisele transmitindo energia e leveza" },
];

const testimonials = [
  {
    name: "Patrícia Mendes",
    role: "Aluna de Personal Training",
    text: "A Gisele transformou minha relação com o exercício. Em poucos meses ganhei força, postura e uma autoestima que eu não conhecia. Cada treino é leve e cheio de energia.",
  },
  {
    name: "Renata Lopes",
    role: "Aluna de Pilates",
    text: "As aulas de Pilates acabaram com as minhas dores nas costas. A Gisele é atenciosa, técnica e acolhedora — me sinto cuidada do começo ao fim de cada sessão.",
  },
  {
    name: "Carla Figueiredo",
    role: "Consultoria Online",
    text: "Mesmo à distância, o acompanhamento é impecável. Tenho direção, constância e resultados reais. A Gisele me motiva a não desistir e a celebrar cada conquista.",
  },
  {
    name: "Juliana Castro",
    role: "Aluna de Dança",
    text: "Eu redescobri o prazer de me movimentar. As aulas de dança são pura alegria e liberdade. Saio de cada uma mais feliz, leve e confiante no meu corpo.",
  },
];

const impact = [
  {
    title: "Movimento é Vida",
    text: "Seu corpo foi criado para se mover, evoluir e conquistar novos desafios todos os dias.",
  },
  {
    title: "Equilíbrio é Poder",
    text: "Saúde física, emocional e mental caminham juntas para uma vida plena e com propósito.",
  },
  {
    title: "Você é Capaz",
    text: "Grandes transformações começam com uma simples decisão: começar.",
  },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="app">
      <header className={`header ${scrolled ? "isScrolled" : ""}`}>
        <div className="headerInner">
          <a href="#top" className="logo" onClick={closeMenu}>
            <span className="logoDot" aria-hidden="true">
              GN
            </span>
            <div>
              <strong>Gisele Neymerk</strong>
              <small>Personal Trainer • Pilates • Dança</small>
            </div>
          </a>

          <nav className="desktopNav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="headerButton" href={WHATSAPP} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            Agendar Aula
          </a>

          <button
            className={`burger ${menuOpen ? "isOpen" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobileNav ${menuOpen ? "isOpen" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="primaryButton" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={closeMenu}>
            <MessageCircle size={18} />
            Agendar Aula
          </a>
        </div>
      </header>

      <span id="top"></span>

      <section className="hero">
        <div className="heroGlow" aria-hidden="true"></div>

        <div className="heroContent" data-reveal>
          <span className="badge">
            <Sparkles size={16} />
            Energia • Movimento • Bem-estar
          </span>

          <h1>
            Movimento, leveza e{" "}
            <span className="highlight">transformação.</span>
          </h1>

          <p className="lead">
            <strong>Gisele Neymerk</strong> é Personal Trainer formada em Educação
            Física pela UFRJ, professora de Pilates e Dança, com mais de 14 anos
            promovendo saúde, bem-estar e qualidade de vida através do movimento.
          </p>

          <p>
            Treinamento personalizado, Pilates, dança, consultoria online, aulas
            particulares e palestras. Uma energia leve, acolhedora e contagiante
            que transforma treinos em experiências de autoestima e liberdade.
          </p>

          <div className="heroButtons">
            <a className="primaryButton" href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
            <a className="secondaryButton" href="#servicos">
              Conhecer serviços
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="heroTrust">
            <span>
              <strong>14+</strong> anos de experiência
            </span>
            <span className="dot" aria-hidden="true"></span>
            <span>
              <strong>UFRJ</strong> Educação Física
            </span>
          </div>
        </div>

        <div className="heroImage" data-reveal style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}>
          <span className="heroTag">leveza</span>
          <img src="/hero.webp" alt="Gisele Neymerk de braços erguidos no topo de uma montanha no Rio de Janeiro" />
          <div className="heroFloat">
            <Heart size={20} />
            <div>
              <strong>+1000</strong>
              <span>vidas em movimento</span>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="about">
        <div className="aboutText">
          <div className="sectionTitle" data-reveal>
            <span className="eyebrow">Sobre</span>
            <h2>Mais de 14 anos transformando vidas através do movimento.</h2>
          </div>

          <p data-reveal>
            Formada em Educação Física pela UFRJ, Gisele Neymerk atua há mais de 14
            anos ajudando pessoas a conquistarem saúde, bem-estar, autoestima e
            qualidade de vida por meio da atividade física.
          </p>
          <p data-reveal>
            Personal Trainer, professora de Pilates e Dança, palestrante e
            consultora online, desenvolve programas personalizados para alunos de
            diferentes perfis e objetivos — unindo conhecimento técnico,
            acolhimento e resultados reais.
          </p>
          <p data-reveal>
            Sua metodologia integra força, mobilidade, consciência corporal,
            propriocepção, equilíbrio e coordenação motora, proporcionando uma
            experiência completa de transformação física, mental e emocional.
          </p>
        </div>

        <div className="aboutNumbers">
          {stats.map((stat, i) => (
            <div key={stat.label} data-reveal style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="services">
        <div className="sectionTitle center" data-reveal>
          <span className="eyebrow">Serviços</span>
          <h2>Corpo forte. Mente leve. Vida em movimento.</h2>
        </div>

        <div className="servicesGrid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="serviceCard"
                data-reveal
                style={{ "--reveal-delay": `${i * 0.06}s` } as React.CSSProperties}
              >
                <span className="serviceIcon">
                  <Icon size={26} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="galeria" className="gallery">
        <div className="sectionTitle center" data-reveal>
          <span className="eyebrow">Galeria</span>
          <h2>Energia que inspira.</h2>
        </div>

        <div className="galleryGrid">
          {gallery.map((photo, i) => (
            <figure
              key={photo.src}
              className="galleryItem"
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section id="depoimentos" className="testimonials">
        <div className="sectionTitle center" data-reveal>
          <span className="eyebrow">Depoimentos</span>
          <h2>Histórias de quem se transformou.</h2>
        </div>

        <div className="testimonialsGrid">
          {testimonials.map((item, i) => (
            <article
              key={item.name}
              className="testimonialCard"
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 0.08}s` } as React.CSSProperties}
            >
              <Quote className="quoteMark" size={36} aria-hidden="true" />

              <div className="stars" aria-label="Avaliação 5 de 5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>

              <p>{item.text}</p>

              <div className="testimonialAuthor">
                <span className="authorAvatar" aria-hidden="true">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contactCard" data-reveal>
          <div className="contactGlow" aria-hidden="true"></div>
          <span className="eyebrow">Vamos começar?</span>
          <h2>Sua transformação começa hoje.</h2>
          <p>Entre em contato e agende sua primeira aula. Bora se movimentar?</p>

          <div className="contactButtons">
            <a className="primaryButton" href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a className="secondaryButton" href={INSTAGRAM} target="_blank" rel="noreferrer">
              <Camera size={18} />
              Instagram
            </a>
            <a className="secondaryButton" href={TIKTOK} target="_blank" rel="noreferrer">
              <Music2 size={18} />
              TikTok
            </a>
            <a className="secondaryButton" href={YOUTUBE} target="_blank" rel="noreferrer">
              <PlayCircle size={18} />
              YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="inspiration">
        <div className="inspirationHeader" data-reveal>
          <span className="eyebrow">Inspiração</span>
          <h2>O movimento transforma. A decisão começa hoje.</h2>
          <p>
            Cada treino, cada escolha e cada pequeno passo constroem uma versão
            mais forte, saudável e feliz de você mesma.
          </p>
        </div>

        <div className="videoSection" data-reveal>
          <iframe
            src="https://www.youtube.com/embed/Wi5VJVLul3M"
            title="Gisele Neymerk em movimento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="impactCards">
          {impact.map((card, i) => (
            <article
              key={card.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <strong>{card.title}</strong>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footerContent">
          <div className="footerBrand">
            <div className="footerLogo">
              <span className="logoDot" aria-hidden="true">
                GN
              </span>
              <div>
                <h3>Gisele Neymerk</h3>
                <p>Personal Trainer • Pilates • Dança</p>
              </div>
            </div>
            <span className="footerPhrase">
              Movimento, saúde e qualidade de vida para uma vida mais leve.
            </span>
            <div className="footerSocials">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href={TIKTOK} target="_blank" rel="noreferrer" aria-label="TikTok">
                <Music2 size={20} />
              </a>
              <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube">
                <PlayCircle size={20} />
              </a>
            </div>
          </div>

          <div className="footerLinks">
            <h4>Navegação</h4>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footerLinks">
            <h4>Atendimentos</h4>
            <span>Personal Training</span>
            <span>Pilates</span>
            <span>Dança</span>
            <span>Consultoria Online</span>
            <span>Aulas Particulares</span>
            <span>Palestras</span>
          </div>

          <div className="footerLinks">
            <h4>Contato</h4>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={TIKTOK} target="_blank" rel="noreferrer">
              TikTok
            </a>
            <a href={YOUTUBE} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <span>Rio de Janeiro • RJ</span>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Gisele Neymerk. Todos os direitos reservados.</span>
          <span>Desenvolvido com ❤️ para promover saúde e bem-estar.</span>
        </div>
      </footer>

      <a className="floatingWhats" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <MessageCircle size={26} />
      </a>
    </main>
  );
}

export default App;
