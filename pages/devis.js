// import Layout from '../components/layout/Layout';
import Layout2 from '../components/layout/Layout2';
import dynamic from 'next/dynamic';



const Devis = dynamic(() => import('../components/devis'));


export default function devis() {
  

 
  return (
    <Layout2>
       <Devis/>
    </Layout2>
    
  );
}
