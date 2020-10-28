
import './App.css';
import { MainMenu } from './components/MainMenu';
import { SearchBar } from './components/SearchBar';

function App() {
  return (
    <header className="main-header">
      <div className="main-logo">
        <h1>Logo</h1>
      </div>

      <div className="header-info">
        <MainMenu />
        <SearchBar />
      </div>
    </header>
  );
}

export default App;
