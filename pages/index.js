import Layout from '../components/layout/Layout'
import useInView from "react-cool-inview";
import dynamic from 'next/dynamic';


const DynamicComponent = dynamic(() => import('../components/Homepage'))
const Section2 = dynamic(() => import('../components/Section2'))
const Section3 = dynamic(() => import('../components/Section3'))
const Section4 = dynamic(() => import('../components/Section4'))
const Section5 = dynamic(() => import('../components/Section5'))
const Section6 = dynamic(() => import('../components/Section6'))
const Section9 = dynamic(() => import('../components/Section9'))
const Section7 = dynamic(() => import('../components/Section7'))


export default function Home() {
  const { observe, inView,ref } = useInView({
    threshold : 0.25 , 
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

 
  return (
    <Layout >
        <DynamicComponent />
        <div ref={observe} >
                
                {inView && <Section2 />}
                {inView && <Section9 />}    
        </div>    
        <div ref={observe} >
                {inView && <Section7 />}
                
        </div>  
        <div ref={observe} >
                {inView && <Section4 />}
                {inView && <Section5 />}
                {inView && <Section6 />}  
        </div>              
    </Layout>
    
  )
}
