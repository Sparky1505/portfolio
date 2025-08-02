import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      className="py-16 text-center px-4 text-white"
      style={{
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
      <p className="text-lg md:text-xl max-w-3xl mx-auto">
        I’m Jayasurya Pazhani, a passionate Full Stack Developer with hands-on experience in Java, Spring Boot, React, Python, and more.
        I specialize in building scalable web applications, collaborating with cross-functional teams, and continuously learning new technologies.
      </p>
    </motion.section>
  );
};

export default AboutMe;
