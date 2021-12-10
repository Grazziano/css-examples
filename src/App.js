import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote';
import Button from './components/button';

function App() {
  const style = {backgroundColor: 'red', color: 'white'};
  return (
    <div>
      <h1 style={style}>"Frase Motivacional"</h1>
      <Quote />
      <Button>Teste</Button>
    </div>
  );
}

export default App;
