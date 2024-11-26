import 'normalize.css'
import './App.scss';
import '../shared/styles/globals.css'
import { NavBar } from '../entities/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
            </BrowserRouter>
        </div>
    );
}

export default App;