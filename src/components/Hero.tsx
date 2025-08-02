const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 bg-gray-100">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Hi, I'm Jayasurya Pazhani</h2>
      <p className="text-xl md:text-2xl mb-6">Full Stack Developer | React | Java | Python Enthusiast</p>
      <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
        View My Projects
      </a>
    </section>
  );
};

export default Hero;
