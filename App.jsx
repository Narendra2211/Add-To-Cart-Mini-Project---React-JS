import Header from './components/header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/App.css';
function App() {
  return (
      <div className='app'>
      <Header />
      <Aside />
      <Main />
      <Footer/> 
      </div>    
  )
}
export default App;
