import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

function App() {
  return (
<div className="min-h-screen w-full m-0 p-0">
      <Navbar />
      <main className="space-y-16">
        <Hero />
        <AboutMe />
        <Skills />
      </main>
    </div>
  );
}

export default App;


