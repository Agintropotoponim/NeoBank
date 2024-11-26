import 'normalize.css'
import './App.scss';
import '../shared/styles/globals.css'
import { NavBar } from '../entities/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { BlueButton } from '../shared/ui/BlueButton/BlueButton';
import { Logo } from '../shared/ui/Logo';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Logo>NeoBank</Logo>
            </BrowserRouter>
        </div>
    );
}

export default App;