import City from './assets/city.jpg'
import ListRender from './components/ListRender';
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
      <ListRender/>
    </div>
  );
}
export default App;
