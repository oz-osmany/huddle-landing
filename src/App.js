import './css/main.css'
import logo from './assets/logo.svg'
import illustration from './assets/illustration-mockups.svg'
const App=()=> {
  return (
    <div className="container">
        {/* <div className='container__background'>
          
        </div> */}
      <div className='container__inner'>
        {/* Logo de la pagina */}
        <header className='header'>
          <img src={logo} />
        </header>
        <main>
          <div className='principal'>
            <div className='principal__blok_imagen'>
              <img src={illustration} className="principal__imagen"/>
            </div>
            <div className='principal__info'>
              <div>
                <h1 className='principal__titulo'>
                  Build The Community Your Fans Will Love
                </h1>
              </div>
              <div className='principal__sub_block'>
                <p className='principal__subtitulo'>
                  Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                  Create connections with your users as you engage in genuine discussion.
                </p>
              </div>
              <button className='principal__btn'>Register</button>
            </div>
          </div>

        </main>
        
          <footer>
            <div className='footer'>
              <ion-icon name="logo-facebook"></ion-icon>
              <ion-icon name="logo-twitter"></ion-icon>
              <ion-icon name="logo-instagram"></ion-icon>
            </div>
          </footer>
      </div>
    </div>
  );
}

export default App;
