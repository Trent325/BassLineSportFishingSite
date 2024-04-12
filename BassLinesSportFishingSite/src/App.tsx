import './App.css';
import AppRouter from './components/router/Router';
import NavBar from './components/nav/NavBar';
import Footer from './components/nav/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow">
        <NavBar />
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
