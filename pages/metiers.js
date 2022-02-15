import Layout from '../components/layout/Layout'
import dynamic from 'next/dynamic';



const Metiers = dynamic(() => import('../components/metiers'))


export default function metiers() {
  

 
  return (
    <Layout >
        <Metiers />                    
    </Layout>
    
  )
}
