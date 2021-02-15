import './App.scss';
import CardsView from './components/CardsView/CardsView';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <div className="shop-body">
        <NavigationBar></NavigationBar>
        <CardsView></CardsView>
      </div>
    </div>
  );
}

export default App;
