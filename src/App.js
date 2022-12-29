import './App.css';
import Header from './pages/frontpage/Header';
import LeftMenu from './pages/LeftMenu';
import MainWrap from './pages/MainWrap';

function App() {
  return (
    <div className="App">
      <Header/>
      <LeftMenu/>
      <MainWrap/>
    </div>
  );
}

export default App;
