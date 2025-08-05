import { motion } from 'framer-motion';

const skills = [
  'React', 'Spring Boot', 'Java', 'Python', 'TypeScript', 'Docker', 'Jenkins', 'MongoDB', 'MySQL', 'Git'
];

const Skills = () => {
  return (
    <section className="bg-gray-700 py-16 text-center px-4 text-white">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 shadow-md rounded-lg bg-gray-800 hover:bg-blue-600 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <p className="text-lg font-semibold">{skill}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;