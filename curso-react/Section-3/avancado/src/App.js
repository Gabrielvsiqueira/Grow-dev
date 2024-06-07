import City from './assets/city.jpg'
import ManageData from './components/ManageData';

function App() {
  return (
    <div>
      <h1>Teste</h1>
        <img src= "/img1.jpg" alt="Paisagem"/>
      <div>
        <img src={City} alt="Cidade"/>
      </div>
      <ManageData/>
    </div>
  );
}
export default App;
