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
      <div className="area fixed top-0 left-0 w-full h-full">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="relative z-10">
        <Profil />
        <Parcours />
        <Experience />
        <Projet />
        <Creation />
        <Competence />
        <Technologie />
      </div>
    </>
  )
}

export default App;