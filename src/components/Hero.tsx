const Hero = () => {
  return (
    <section
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 white-text-Hero"
      style={{ background: 'linear-gradient(to right, #3b82f6, #60a5fa, #93c5fd)' }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 white-text-Hero">Hi, I'm Jayasurya Pazhani</h1>
      <p className="text-xl md:text-2xl mb-6 text-white">Full Stack Developer | React | Java | Python Enthusiast</p>
   <a
  href="/portfolio/assets/Jayasurya_Pazhani_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="cylinder-outline-button"
>
  Download Resume
</a>


   
    </section>
  );
};

export default Hero;
