import './App.css';
/* import HelloStranger from './components/HelloWorld';
import ActionLink from './components/ActionLink';
import Day from './components/Day';
import Toggle from './components/Toggle';
import LoginControl from './components/LoginControl';
import Blog from './components/Blog';
import Month from './components/Month'; */

import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Calendar />
      {/* <div>\
        <HelloStranger name="Brenton" />
      </div>
      <div>
        <ActionLink/>
      </div>
      <div>
        <Toggle/>
      </div>
      <div>
        <LoginControl />
      </div>
      <Blog comments={comments}/> */}
    </div>
  );
}

export default App;

/* const comments = [
  {userName: "Peter", comment:"Pie is best!"},
  {userName: "Ann", comment:"Cake is!"},
  {userName: "Peter", comment:"Fake news!"},
  {userName: "Ann", comment:"Shut up!"},
  {userName: "Henry", comment:"Will you both shut up!"}
]; */