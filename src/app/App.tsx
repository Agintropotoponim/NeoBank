import 'normalize.css'
import './App.scss';
import '../shared/styles/globals.css'
import { NavBar } from '../entities/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { BlueButton } from '../shared/ui/BlueButton/BlueButton';
import AppRouter from './routers/AppRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;