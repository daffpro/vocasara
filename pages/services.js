import Layout from '../components/layout/Layout'
import dynamic from 'next/dynamic';



const Services = dynamic(() => import('../components/services'))


export default function historique() {
  

 
  return (
    <Layout >
        <Services />                    
    </Layout>
    
  )
}
