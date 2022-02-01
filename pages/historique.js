import Layout from '../components/layout/Layout'
import dynamic from 'next/dynamic';



const Historique = dynamic(() => import('../components/historique'))


export default function historique() {
  

 
  return (
    <Layout >
        <Historique />                    
    </Layout>
    
  )
}
