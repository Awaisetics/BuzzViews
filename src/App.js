import './App.css';
import './components/Sidebar/sidebar.css';
import Sidebar from './components/Sidebar/index';
import Home from './pages/Home'

function App() {
  return (
    <div >
      <Sidebar childern={Home} />
    </div>
  );
}

export default App;
