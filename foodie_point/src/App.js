import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AllRoutes } from './component/AllRoutes/AllRoutes';
import { MyNav } from './component/pages/MyNav';



function App() {
  return (
    <div className="App">
      <MyNav />
      <AllRoutes />
    </div>
  );
}

export default App;
