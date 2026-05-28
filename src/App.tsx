import "./App.css";

import {
  Camera,
  Dumbbell,
  Heart,
  MessageCircle,
  Music2,
  Sparkles,
} from "lucide-react";

function App() {
  return (
    <main className="app">
      <header className="header">
        <div className="logo">
          <span className="logoDot"></span>

          <div>
            <strong>Gisele Neymerk</strong>
            <small>
              Personal Trainer • Pilates • Dança
            </small>
          </div>
        </div>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="headerButton"
          href="https://wa.me/5521999638993"
          target="_blank"
        >
          Agendar Aula
        </a>
      </header>

      <section className="hero">
        <div className="heroContent">
          <span className="badge">
            <Sparkles size={16} />
            Energia • Movimento • Bem-estar
          </span>

          <h1>
            Movimento, leveza e transformação.
          </h1>

          <p>
            Gisele Neymerk é Personal Trainer formada em Educação Física pela
            UFRJ, professora de Pilates e Dança, com mais de 14 anos de
            experiência promovendo saúde, bem-estar e qualidade de vida através
            do movimento.
          </p>

          <p>
            Atua com treinamento personalizado, Pilates, dança, consultoria
            online, aulas particulares e palestras voltadas à saúde, qualidade
            de vida, movimento humano, condicionamento físico e desenvolvimento
            corporal. Sua missão é ajudar cada aluno a conquistar mais saúde,
            confiança, equilíbrio e liberdade para viver melhor.
          </p>

          <p>
            Com uma energia leve, acolhedora e contagiante, transforma treinos
            em experiências de bem-estar, autoestima e liberdade corporal.
          </p>

          <div className="heroButtons">
            <a
              className="primaryButton"
              href="https://wa.me/5521999638993"
              target="_blank"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>

            <a className="secondaryButton" href="#servicos">
              Conhecer serviços
            </a>
          </div>
        </div>

        <div className="heroImage">
          <img
            src="/hero.webp"
            alt="Gisele Neymerk"
          />
        </div>
      </section>

      <section id="sobre" className="about">
        <div className="sectionTitle">
          <span>Sobre</span>

          <h2>
            Mais de 14 anos transformando vidas através do movimento.
          </h2>
        </div>

        <p>
          Formada em Educação Física pela UFRJ, Gisele Neymerk atua há mais
          de 14 anos ajudando pessoas a conquistarem saúde, bem-estar,
          autoestima e qualidade de vida por meio da atividade física.
        </p>

        <p>
          Personal Trainer, professora de Pilates e Dança, palestrante e
          consultora online, desenvolve programas personalizados para alunos
          de diferentes perfis e objetivos, sempre unindo conhecimento
          técnico, acolhimento e resultados reais.
        </p>

        <p>
          Sua metodologia integra treinamento de força, 
          mobilidade, consciência corporal, propriocepção, equilíbrio,
          coordenação motora, proporcionando uma experiência completa de 
          transformação física, mental e emocional.
        </p>

        <div className="aboutNumbers">
          <div>
            <strong>14+</strong>
            <span>Anos de experiência</span>
          </div>

          <div>
            <strong>UFRJ</strong>
            <span>Formação em Educação Física</span>
          </div>

          <div>
            <strong>Online</strong>
            <span>Consultoria para todo o Brasil</span>
          </div>

          <div>
            <strong>1:1</strong>
            <span>Aulas particulares personalizadas</span>
          </div>
        </div>
      </section>

      <section id="servicos" className="services">
        <div className="sectionTitle">
          <span>Serviços</span>

          <h2>
            Corpo forte. Mente leve.
          </h2>
        </div>

        <div className="servicesGrid">
          <article className="serviceCard">
            <Dumbbell size={32} />

            <h3>Personal Training</h3>

            <p>
              Treinos personalizados focados em saúde, condicionamento físico,
              autoestima e qualidade de vida.
            </p>
          </article>

          <article className="serviceCard">
            <Heart size={32} />

            <h3>Pilates</h3>

            <p>
              Fortalecimento, mobilidade, consciência corporal, equilíbrio e
              postura através do pilates.
            </p>
          </article>

          <article className="serviceCard">
            <Music2 size={32} />

            <h3>Dança</h3>

            <p>
              Movimento, energia, expressão corporal e liberdade através da
              dança e do ritmo.
            </p>
          </article>
        </div>
      </section>

      <section id="galeria" className="gallery">
        <div className="sectionTitle">
          <span>Galeria</span>

          <h2>
            Energia que inspira.
          </h2>
        </div>

        <div className="galleryGrid">
          <img src="/gallery1.webp" alt="" />
          <img src="/gallery2.webp" alt="" />
          <img src="/gallery3.webp" alt="" />
          <img src="/gallery4.webp" alt="" />
          <img src="/gallery5.webp" alt="" />
          <img src="/gallery6.webp" alt="" />
        </div>
      </section>

      <section id="contato" className="contact">
        <div className="contactCard">
          <span>Vamos começar?</span>

          <h2>
            Sua transformação começa hoje.
          </h2>

          <p>
            Entre em contato e agende sua primeira aula.
          </p>

          <div className="contactButtons">
            <a
              className="primaryButton"
              href="https://wa.me/5521999638993"
              target="_blank"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              className="secondaryButton"
              href="https://instagram.com"
              target="_blank"
            >
              <Camera size={18} />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;