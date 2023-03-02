import './home.css'
import photo from '../assets/photoFondHome.png'

export const Home = () => {
    return (
        <main>
            <section className="partieGauche">
                <h1>ARTHUR <br></br><span>LE MENN</span></h1>
                <h2>DÉVELOPPEUR</h2>
            </section>
            <section className="partieDroite">
                <canvas id="canvas">

                </canvas>
            </section>
            <script>
                var canvas = document.getElementById('canvas');
                var ctx = canvas.getContext('2d');
                var w = canvas.width
                var h = canvas.height
                
            </script>
        </main>
        
    )
}