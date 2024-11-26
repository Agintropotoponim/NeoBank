import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import '../shared/styles/globals.css';
import { Header } from '../widgets/Header';
import './App.scss';
import AppRouter from './routers/AppRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Header />
            </BrowserRouter>
        </div>
    );
}

export default App;