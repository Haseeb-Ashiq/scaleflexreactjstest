import logo from './logo.svg';
import './App.css';
import BarChart from './components/barchart';
import LineChart from './components/linechart';

function App() {
  const data=[50,25,34,12,120,200,56,23,34,11];
  const data2=[500,300,444,555,666,777,444,4433,222,3333,555,555];
  return (
    <div className="App">
    <BarChart
    mode={'bar'}
    data={data}
    />
    <LineChart
    data={data2}
    />
    </div>
  );
}

export default App;
