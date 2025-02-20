import styles from "../styles/Home.module.css";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export default function Home(){
    return (
        <div className={styles.container}>
    <Header/>
 

        <section className= {styles.section}>
        <div className={styles.card}>
            <img className={styles.imgs} src="/cr7.jpg" alt="" />
        </div>

        <div className={styles.card}>
        <img className={styles.imgs} src="/yuri.jpg" alt="" />
        </div>

        <div className={styles.card}>

        <img className={styles.imgs} src="/ney.jpg" alt="" />
        </div>

        </section>
        <div>   
            
        </div>
        <aside className= {styles.aside}>
        <div className={styles.card2}>
        <h1>Teste do semantic</h1>
        </div>
        </aside>
        <Footer/>
        </div>
        

        
    );
} 
