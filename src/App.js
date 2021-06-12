import { useState } from 'react';

import baseProperties from './Data/baseProperties.js';

/* import Construction from './Pages/Construction'; */
import Home from './Pages/Home';
import Menu from './Components/Menu.js';
import Projects from './Pages/Projects';
import Rules from './Pages/Rules';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  const [lang, setLang] = useState('br');

  return (
    <div className="_white">
      {/* <Construction lang={lang} baseProps={baseProperties} /> */}
      <Home lang={lang} setLang={setLang} baseProps={baseProperties} />

      <Menu lang={lang} baseProps={baseProperties} />

      <Projects lang={lang} baseProps={baseProperties} />
      <Rules lang={lang} baseProps={baseProperties} />
      <Contact lang={lang} baseProps={baseProperties} />

      <Footer lang={lang} baseProps={baseProperties} />
    </div>
  );
}

export default App;
