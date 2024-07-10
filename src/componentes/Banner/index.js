import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/foto-de-perfil.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio José, Aluno de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio José de perfil"
                />
            </div>
        </div>
    )
}