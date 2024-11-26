import 'normalize.css'
import './App.scss';
import '../shared/styles/globals.css'
import { NavBar } from '../entities/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { BlueButton } from '../shared/ui/BlueButton/BlueButton';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BlueButton className='home-page__button_size'>Online Bank</BlueButton>
            </BrowserRouter>
        </div>
    );
}

export default App;