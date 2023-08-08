import Image from 'next/image';
import About from './aboutus/page';
import Landingpage from '/src/components/Landingpage/page';
//import Services from '/src/app/services/page';
//import Projects from '/src/app/projects/page';
//import Contact from './contactus/page';

function Home() {
  return (   
  <div className="bg-white-300">
     <Landingpage/>
     {/* <About/>
     <Services/>
     <Projects/>
     <Contact/>   */}
  </div>
  )
};
  
export default Home;
  
