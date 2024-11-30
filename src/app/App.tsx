import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';
import '../shared/styles/globals.css';
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