import logo from './logo.svg';
import './App.css';
import Quote from './components/Quote';

function App() {
  const style = {backgroundColor: 'red', color: 'white'};
  return (
    <div>
      <h1 style={style}>"Frase Motivacional"</h1>
      <Quote />
    </div>
  );
}

export default App;
