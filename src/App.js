import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {AccountSammary} from './components/AccountSummary';
import {TransactionHistory} from './components/TransactionHistory';
import {AddTransaction} from './components/AddTransaction';
//import the global provider
import {GlobalProvider} from './context/GlobalState'
function App() {
  return (
    <div>
      <GlobalProvider>
     <Header/>
     <div className ="container">
       <Balance/>
       <AccountSammary/>
       <TransactionHistory/>
       <AddTransaction/>
     </div>
     </GlobalProvider>
    </div>
    
  );
}

export default App;
