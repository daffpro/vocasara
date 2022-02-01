import Layout from '../components/layout/Layout'
import dynamic from 'next/dynamic';



const Mission = dynamic(() => import('../components/missions'))


export default function historique() {
  

 
  return (
    <Layout >
        <Mission />                    
    </Layout>
    
  )
}
