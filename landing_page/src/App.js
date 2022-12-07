import './App.css';
import Rectangle from './components/rectangle';
import Rectangleinvert from './components/rectangle invert';
import Rectangle2 from './components/rectangle2';
import Firstlayout from './components/firstlayout';
import Lastlayout from './components/lastlayout';
function App() {
  // const text1 = "Son corps idéal : elle voudrait prendre soin de sa peau facilement, et trouver une rutine skin care qui correspond à son type de peau sans passer des mois à contacter un spécialiste.";

  return (
    <div className="App w-full">
      <Firstlayout />
      <Rectangle />
      <Rectangleinvert />
      <Rectangle2 />
      <Lastlayout />
    </div>
  );
}

export default App;
