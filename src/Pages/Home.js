import baseProperties from "../Data/baseProperties";

import './pages.css'
import './Home.css'

import logoRedonda from '../Assets/logoHumamRedondo.png';

function Home(props) {
  var {lang, setLang} = props

  return (
    <div className="degrade _df">
      <div className="_50">
        <img src={logoRedonda} alt="Human logo" />
      </div>
      <div className="_50">
        <div>{baseProperties[lang].title}</div>
        <div>{baseProperties[lang].description}</div>
        <div>COMPONENTE TELEGRAM/WPP/ENTRE</div>
      </div>
      <div>
        <div>Seta pra baixo</div>
        <div>Mudar língua</div>
      </div>
    </div>
  );
}

export default Home;
