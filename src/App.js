
import './App.css';
import Employee from './Component/Employee'

function App() {
  return (
    <div className="App">
      <Employee name = 'Charlie' job = 'Janitor' />
      <Employee name = 'Mac' job = 'Bouncer' />
      <Employee name = 'Dee' job = 'Aspiring Actress' />
      <Employee name = 'Dennis' job = 'Bartender' />
      
    </div>
  );
}

export default App;