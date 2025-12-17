import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="container">
      <section className="aboutLayout">
        {/* Coluna esquerda */}
        <div className="aboutLeft">
          {/* hero3 no topo, esquerda */}
          

          {/* Texto (card) */}
          <div className="aboutCard">
            <h1 className="aboutTitle">Sobre</h1>

            <p className="aboutText">
              Sou a <strong>Lara</strong>, designer focada em <strong>UI</strong>{" "}
              e <strong>UX</strong>. Trabalho com interfaces que priorizam
              hierarquia visual, legibilidade e decisões claras — não por “estilo”,
              mas porque isso diminui esforço, aumenta compreensão e melhora a
              experiência real de uso.
            </p>

            <p className="aboutText">
              Eu gosto de construir telas que se explicam sozinhas. Isso passa por
              organizar conteúdo com intenção, escolher tipografia com critério,
              manter consistência nos componentes e usar cor como linguagem, não
              como decoração. Para mim, um bom design é aquele que orienta o
              usuário sem chamar atenção para si mesmo.
            </p>

            <p className="aboutText">
              Aqui eu compartilho estudos e práticas sobre layout, tipografia e cor,
              sempre com foco em aplicação: como ajustar contraste, como pensar
              espaçamento, como definir escala, como criar ritmo visual e como
              evitar padrões que parecem bonitos no mockup mas falham na tela.
              A ideia é documentar decisões e construir repertório com intenção.
            </p>

            <p className="aboutText">
              Se você curte interfaces com personalidade, mas com regras claras,
              esse espaço é pra você. Meu objetivo é sempre o mesmo: fazer o
              usuário entender rápido, navegar com confiança e terminar a tarefa
              sem atrito.
            </p>
          </div>
        </div>

        {/* Coluna direita: hero2 grande */}
        <div className="aboutRight">
          <Image
            src="/images/hero2.png"
            alt=""
            width={820}
            height={980}
            quality={100}
            priority
            className="aboutHero2"
          />
        </div>
      </section>
    </main>
  );
}
