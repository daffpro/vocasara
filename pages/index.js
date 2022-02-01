import Layout from '../components/layout/Layout'
import useInView from "react-cool-inview";
import dynamic from 'next/dynamic';
import { lazy, Suspense } from 'react';

const DynamicComponent = dynamic(() => import('../components/Homepage'))
const Section2 = dynamic(() => import('../components/Section2'))
const Section3 = dynamic(() => import('../components/Section3'))
const Section4 = dynamic(() => import('../components/Section4'))
const Section5 = dynamic(() => import('../components/Section5'))
const Section6 = dynamic(() => import('../components/Section6'))
const Section7 = dynamic(() => import('../components/Section7'))

export default function Home() {
  const { observe, inView,ref } = useInView({
    threshold : 0.25 , 
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

 
  return (
    <Layout >
        <DynamicComponent />
        <Section2 />
        <Section7 />
        <Suspense fallback={<div>Loading...</div>} await>
           
            <div ref={observe} className='2'>
                {inView && <Section3 />}
                
            </div>
         </Suspense>
         <Section4 />
         <Section5 />
         <Section6 />
        {/* <Suspense fallback={<div>Loading...</div>}>
           
            <div ref={observe}>
                {inView && <Section2 />}
                
            </div>
            
        </Suspense> */}
        
        {/* <div ref={observe}>
            {inView && <Section3/>}
        </div>
        <div ref={observe}>
            {inView && <Section5/>}
        </div>
        <div ref={observe}>
            {inView && <Section4/>}
        </div>
        <div ref={observe}>
            {inView && <Section6/>}
        </div> */}
                    
    </Layout>
    
  )
}
