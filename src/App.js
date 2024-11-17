import './App.css';
import Navbar from './components/header/Header';
import Hero from './components/hero/Hero'
import About from './components/about/about'
import Ability from './components/ability/ability';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';
import Sticky from './components/sticky/sticky';
import React, {useState, useEffect} from "react";
function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the mode
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Check the user's preferred color scheme on initial render
    const preferredMode = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(preferredMode.matches);

    // Add an event listener for changes in the preferred color scheme
    const handleChange = (event) => {
      setIsDarkMode(event.matches);
    };

    preferredMode.addEventListener('change', handleChange);

    // Clean up the event listener
    return () => {
      preferredMode.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div className="App">
      <main className={isDarkMode ? 'darkMode' : 'lightMode'}>
        <section>
          <Navbar  toggleMode={toggleMode} isDarkMode={isDarkMode} />
        </section>
        <section id='home'>
          <Hero/>
        </section>
        <section id='about'>
          <About/>  
        </section>
        <section id='skills'>
          <Ability/>
        </section>
        <section id='work'>
          <Portfolio/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
        <section>
          <Footer/>
        </section>
        <section>
          <Sticky/>
        </section>
      </main>
    </div>
  );
}

export default App;
