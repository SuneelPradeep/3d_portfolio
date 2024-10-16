import React, {Suspense, useState } from 'react'
import Loader from '../components/Loader'
import { Canvas } from '@react-three/fiber'
import Alert from '../components/Alert'
import useAlert from '../hooks/useAlert'
import Monster from '../models/Monster'
import { useSelector } from 'react-redux'
import Gear5Luffy from '../models/Gear5Luffy'
import { useFormspark } from '@formspark/use-formspark'


const ContactSection = () => {
  
    const [form,setForm] = useState({name : '', email : '',message:''})
    const [isLoading,setIsLoading] =useState(false)
    const darkMode = useSelector(state => state.darkMode)
    const [darkcurrentAnimation,setdarkCurrentAnimation] =useState('Roar')
    const [lightcurrentAnimation,setlightCurrentAnimation] =useState('Armature|Walk')
    const [submit,submitting] = useFormspark({formId:"tsYoM4nAT"})
    
    
    
    const {alert, showAlert, hideAlert} = useAlert()
    
    
    const handleChange = (e)=>{
     setForm({...form, [e.target.name] : e.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()  // not to reload
        setIsLoading(true)
        // darkMode ?   setdarkCurrentAnimation('stunhurtbig') : setlightCurrentAnimation('Armature|Corkscrew Evade')    
        if(form.name !== "" || form.email !== "" || form.message !==""){
        const res =   await submit(form)
        
         if(res){
          showAlert({show:true, type:'success', text:'Message sent successfully'})
          darkMode ?   setdarkCurrentAnimation('stunhurtbig') : setlightCurrentAnimation('Armature|Corkscrew Evade')
          setIsLoading(false)
          setForm({name : '', email : '',message:''})
         }
         else{
          darkMode ?  setdarkCurrentAnimation('dead') : setlightCurrentAnimation('Armature|Walk')
          showAlert({show:true, type:'danger', text:"Message didn't sent "})
          setIsLoading(false)
          setTimeout(()=>{
            hideAlert()
          },3000)
         }
        }
         
        // if using emailjs we need to signin to free 200 msgs limit to gmail or whatever mail we give and 
        // emailjs.send( serviceid,
        //  templateid, 
        //  publickey,
        // {from_name : form.name, to_name :"Suneel", from_email : form.email, to_email : ernestsolomoninzion@gmail.com, message: form.message}
        // ,publickey).then(()=> {setIsLoading(false); //todo show success message , // hide alert}).catch((e)=> { setIsLoading(false); })
    }
    const handleFocus = ()=>{
      darkMode?  setdarkCurrentAnimation('travelrun') : setlightCurrentAnimation('Armature|Butterfly Twirl')
      // Armature|Corkscrew Evade  , Armature|Walk Armature|Butterfly Twirl

    }
    const handleBlur = ()=>{
       darkMode ? setdarkCurrentAnimation('attack_3') : setlightCurrentAnimation('Armature|Walk')
    }
  
   
  return (
    <section className="max-container dark:bg-black lg:h-screen xl:h-screen 3xl:h-screen h-full flex lg:flex-row flex-col ">
     <div className='flex-1 min-w-[50%] flex flex-col'>
        {alert.show && <Alert {...alert} />}
        {/* <Alert type='success' text='message sent successfully' /> */}
        <h1 className='head-text'> Get in Touch </h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
       <label className='dark:text-white text-black-500 font-semibold'> Name 
       <input type='text' className='input' placeholder='John' name='name' value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
       </label>
       <label className='dark:text-white text-black-500 font-semibold'> Email 
       <input type='email' className='input' placeholder='John@gmail.com' name='email' value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
       </label>
       <label className='dark:text-white text-black-500 font-semibold'> Your Message 
       <textarea className='input' placeholder='Let me know how I can help you ?' name='message' value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} required />
       </label>
       <button type='submit' disabled={isLoading} className='btn' onFocus={handleFocus} onBlur={handleBlur}> 
        {isLoading  ? "Sending..." : "Send Message" }</button>
       
        </form>
     </div>
     <div className='lg:w-1/2   w-full lg:h-full md:h-[600px] h-[350px]'>
        <Canvas camera={{ position : [0,0,5]}}>
            <directionalLight intensity={2.5} position={[0,0,1]} />
            <ambientLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
        {darkMode ?
         (<Monster 
        position={[0.5,-0.85,0]} rotation ={[12.6,-0.6,0]} scale={[2.5,2.5,2.5]} currentAnimation={darkcurrentAnimation} />) 
        : 
        (<Gear5Luffy position={[1,-2.5,0.1]} rotation ={[12.6,-0.6,0]} scale={[0.2,0.2,0.2]} currentAnimation={lightcurrentAnimation} />) 
        
        }

        {/* <Fox position={[0.5,0.35,0]} rotation ={[12.6,-0.6,0]} scale={[0.5,0.5,0.5]} currentAnimation={currentAnimation} /> */}
        </Suspense>
        </Canvas>
     </div>

    </section>
  )
}

export default ContactSection
