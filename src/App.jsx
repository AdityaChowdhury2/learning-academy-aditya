import './App.css';
import { Toaster } from 'react-hot-toast';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
	return (
		<>
			<Toaster />
			<Header />
			<Main />
		</>
	);
}

export default App;
