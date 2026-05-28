import "./App.css";

import {
  Camera,
  Dumbbell,
  Heart,
  MessageCircle,
  Music2,
  PlayCircle,
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
            <strong>Gisele Neymerk</strong> é Personal Trainer formada em Educação Física pela
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
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              className="secondaryButton"
              href="https://www.instagram.com/gizaneymerkoficial/"
              target="_blank"
              rel="noreferrer"
            >
              <Camera size={18} />
              Instagram
            </a>

            <a
              className="secondaryButton"
              href="https://www.tiktok.com/@gizaneymerkoficial"
              target="_blank"
              rel="noreferrer"
            >
              <Music2 size={18} />
              TikTok
            </a>

            <a
              className="secondaryButton"
              href="https://youtube.com/@gizaneymerkoficial"
              target="_blank"
              rel="noreferrer"
            >
              <PlayCircle size={18} />
              YouTube
            </a>
          </div>
        </div>
      </section>

      <section className="inspiration">
        <div className="inspirationHeader">
          <span>Inspiração</span>

          <h2>
            O movimento transforma. A decisão começa hoje.
          </h2>

          <p>
            Cada treino, cada escolha e cada pequeno passo constroem uma versão
            mais forte, saudável e feliz de você mesma.
          </p>
        </div>

        <div className="videoSection">
          <iframe
            src="https://www.youtube.com/embed/watch?v=Wi5VJVLul3M"
            title="Gisele Neymerk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="impactCards">
          <article>
            <strong>Movimento é Vida</strong>

            <p>
              Seu corpo foi criado para se mover, evoluir e conquistar novos
              desafios todos os dias.
            </p>
          </article>

          <article>
            <strong>Equilíbrio é Poder</strong>

            <p>
              Saúde física, emocional e mental caminham juntas para uma vida
              plena e com propósito.
            </p>
          </article>

          <article>
            <strong>Você é Capaz</strong>

            <p>
              Grandes transformações começam com uma simples decisão:
              começar.
            </p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <div className="footerContent">
          <div className="footerBrand">
            <div className="footerLogo">
              <span className="logoDot"></span>

              <div>
                <h3>Gisele Neymerk</h3>
                <p>
                  Personal Trainer • Pilates • Dança
                </p>
              </div>
            </div>

            <span className="footerPhrase">
              Movimento, saúde e qualidade de vida para uma vida mais leve.
            </span>
          </div>

          <div className="footerLinks">
            <h4>Navegação</h4>

            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
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

            <a
              href="https://wa.me/5521999638993"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/gizaneymerkoficial/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@gizaneymerkoficial"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>

            <a
              href="https://youtube.com/@gizaneymerkoficial"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>

            <span>Rio de Janeiro • RJ</span>
          </div>
        </div>

        <div className="footerBottom">
          <span>
            © {new Date().getFullYear()} Gisele Neymerk.
            Todos os direitos reservados.
          </span>

          <span>
            Desenvolvido com ❤️ para promover saúde e bem-estar.
          </span>
        </div>
      </footer>
    </main>
  );
}

export default App;