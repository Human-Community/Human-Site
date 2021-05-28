import { useState } from 'react';
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
      {/* <Construction lang={lang} setLang={setLang} /> */}
      <Home lang={lang} setLang={setLang} />
      {/* <Projects lang={lang} setLang={setLang} />
      <Rules lang={lang} setLang={setLang} />
      <Contact lang={lang} setLang={setLang} />
      <Footer lang={lang} setLang={setLang} /> */}
    </div>
  );
}

export default App;
