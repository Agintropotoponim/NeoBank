import 'normalize.css';
import '../shared/styles/globals.css';
import { AppProviders } from './providers/AppProviders';
import AppRouter from './routers/AppRouter';

function App() {
    return (
        <div className="App">
            <AppProviders>
                <AppRouter />
            </AppProviders>
        </div>
    );
}

export default App;