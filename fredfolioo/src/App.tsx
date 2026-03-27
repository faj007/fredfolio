
import './App.css'
import Profil from './component/Profil';
import Parcours from './component/Parcours';
import Projet from './component/Projet';
import Technologie from './component/Technologie';
import Competence from './component/Competence';
import Creation from './component/Creation';
import Experience from './component/Experience';




function App() {



   
  return (
    <>
    <div>
    <section>
      <Profil />
      <Parcours />
      <Experience />
      <Projet />
      <Creation />
      <Competence />
      <Technologie />
    </section>    
    </div>
   
      </>
  )
}

export default App
