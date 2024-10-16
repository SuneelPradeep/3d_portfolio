
import { PiCertificateBold } from 'react-icons/pi';
import { FaCertificate } from 'react-icons/fa';
import { motion } from "framer-motion";
import { MdOutlineDateRange } from 'react-icons/md';
import { certificationData } from "../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};


  const SkillList = ({ skills }) => {
    return (
         
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4 my-6 font-worksans"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill ,index) => (
            <div key={index}>
                <div className='my-4 block-container w-24 h-24'>
              <div className={`btn-front rounded-xl ${skill?.theme}`}>
                <div className='flex justify-center items-center btn-front rounded-xl '>
                  <img src={skill.iconUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
               
         
          </div></div></div>
          <a key={index} href={skill.link ? skill.link : '#'} target='_blank' rel="noopener noreferrer" >
            <motion.div
            className={` p-4 rounded-xl shadow-xl  ${skill.color} transition-colors`}
            variants={skillVariants}
          >
            <div className='grid grid-flow-col gap-4 justify-start items-center'>
                <PiCertificateBold className="text-green-500" /><p className='text-lg  font-poppins' >{skill.name} </p></div>
                <span className='my-2 grid gap-4 grid-flow-col justify-start items-center'>
                {/* <FiExternalLink className="text-blue-300" /> <p>Link</p> */}
               
              <MdOutlineDateRange className="text-blue-400" />  
              <p className="text-gray-500">{skill.date} </p>
              </span> 
            <div className='my-2 grid gap-4 grid-flow-col justify-start items-center'>
                <FaCertificate className="text-yellow-300" /><p className=''>{skill.issuer}</p></div>
            <div className='my-2 grid gap-4 grid-flow-col justify-start items-center'>
           
            </div>
          </motion.div>
          </a></div>
        ))}
      </motion.div>
      
    );
  };

  
const Certifications = () => {


  return (
    <div id="Certifications" className='mx-6 my-8 lg:mx-8 '>
        <h3 className='subhead-text'>My Certifications </h3>
     <SkillList skills={certificationData} />
</div>

  )
}

export default Certifications
