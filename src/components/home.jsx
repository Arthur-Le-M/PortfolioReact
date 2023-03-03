import './home.css'
import { useEffect } from 'react'
import { MiniJeu } from './miniJeu'

export const Home = () => {
    return (
        <main>
            <section className="partieGauche">
                <h1>ARTHUR <br></br><span>LE MENN</span></h1>
                <h2>DÉVELOPPEUR</h2>
            </section>
            <section className="partieDroite">
                <MiniJeu />
            </section>
        </main>
    )
}