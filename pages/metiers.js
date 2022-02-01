import Layout from '../components/layout/Layout'
import dynamic from 'next/dynamic';



const Metiers = dynamic(() => import('../components/metiers'))


export default function historique() {
  

 
  return (
    <Layout >
        <Metiers />                    
    </Layout>
    
  )
}
