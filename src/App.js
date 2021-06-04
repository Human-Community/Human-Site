import { useState } from 'react';

import baseProperties from './Data/baseProperties.js';

import Construction from './Pages/Construction';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Rules from './Pages/Rules';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  const [lang, setLang] = useState('br');

  return (
    <div>
      <Construction lang={lang} setLang={setLang} baseProps={baseProperties} />
      {/* <Home lang={lang} setLang={setLang} baseProps={baseProperties} />
      <Projects lang={lang} setLang={setLang} baseProps={baseProperties} />
      <Rules lang={lang} setLang={setLang} baseProps={baseProperties} />
      <Contact lang={lang} setLang={setLang} baseProps={baseProperties} />
      <Footer lang={lang} setLang={setLang} baseProps={baseProperties} /> */}
    </div>
  );
}

export default App;
