
import { BiLinkExternal } from "react-icons/bi";
import CustomButton from '../styles/CustomButton'
import { LinksData } from "../constants";
import resumeDownload from '../assets/images/work/My resume.pdf'
import { NavLink } from "react-router-dom";
import resumepic from '../assets/images/work/resume.png'
const Resume = () => {
  const externalLink = LinksData?.resume; 
  
 return (
        <div id="Resume" className="mx-6 lg:mx-8 my-6 lg:my-16">
<h3 className="subhead-text">My Resume </h3>
         <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-8 relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <NavLink
                to={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-full flex items-center justify-center"
              >
                
                <span className="w-[90%] h-full relative rounded shadow-lg overflow-hidden hover:opacity-60 ">
          <img
            src={resumepic}
            alt='resume'       
          />
          <span className="absolute inset-0 text-black  opacity-0 flex items-center justify-center transition hover:opacity-100 ">
        <BiLinkExternal fontSize={64} />
      </span>
        </span>
              </NavLink>
            </div>
            <div className="my-8 mx-8 flex flex-col items-center justify-center">
              <h1 className="font-worksans text-xl lg:text-3xl mb-8 text-center">
                For a concise and detailed overview of my professional experience and skills, please download my resume in PDF
              </h1>
              <a href={resumeDownload} download className="px-16 py-4 items-center justify-center">
                <CustomButton text="Download Resume" type="button" disabled={false} />
              </a>
            </div>
          </div>
        </div>
      )
    }
    
export default Resume;

