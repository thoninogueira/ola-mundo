import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Thoni!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Thoni de perfil"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                👋 Oi, tudo bem? Sou Antonio José Nogueira Pereira, mais conhecido como Thoni Nogueira, estudante de Ciências da Computação na Unopar e participante da trilha do programa One da Oracle. Meu objetivo é explorar a tecnologia e me comprometer com a aprendizagem contínua e a inovação.
            </p>
            <p className={styles.paragrafo}>
                🌱 Minha trajetória profissional inclui vários projetos e desafios desenvolvidos durante os cursos da Alura. No repositório "Challenge-portfolio", criei um portfólio pessoal   para exibir meus trabalhos e habilidades. Desenvolvi o "Jogo-do-Número-Secreto", um jogo interativo que reforça meus conhecimentos em JavaScript e lógica de programação.
            </p>
            <p className={styles.paragrafo}>
                Participei de outros projetos como o "Fokus", uma aplicação para gestão de tarefas, e "aluraflix-api", onde desenvolvi uma API para streaming de vídeos. Outro projeto interessante foi o "challenge-aluraflix", onde implementei um front-end para consumir essa API.
            </p>
            <p className={styles.paragrafo}>
                Também trabalhei no "desktop-tutorial", uma aplicação que fornece tutoriais e guias para iniciantes, e no "portfolio-pessoal", onde construí um portfólio mais robusto e completo.
            </p>
            <p className={styles.paragrafo}>
                Outros projetos incluem "organo-panda", uma aplicação que simula o gerenciamento de uma equipe de trabalho em uma organização fictícia chamada Bambutech, e seus funcionários são Ursos Pandas, onde criei as imagens usando inteligencia artificial, "monibank-main", um simulador de banco digital, e "aluraplay", uma aplicação que consome APIs para streaming de vídeos.

            </p>
            <p className={styles.paragrafo}>
                Recentemente, também desenvolvi o "challenge-one-alurageek-main", um projeto voltado para a criação de uma loja online onde escolhi o tema do Free Fire e seus personagens, e o "Alura-Midi", uma aplicação que simula um teclado musical, permitindo que os usuários toquem sons diferentes ao pressionar as teclas.
            </p>
            <p className={styles.paragrafo}>
                💞️ Estou constantemente aprendendo e aplicando novas tecnologias, com foco em JavaScript e React, para me tornar um desenvolvedor cada vez mais completo e preparado para os desafios do mercado, especialmente nas áreas de desenvolvimento de jogos e páginas web. Estou sempre aberto a novas oportunidades para aprender e compartilhar conhecimentos com outros profissionais e entusiastas da área.
            </p>
        </PostModelo>
    )
}