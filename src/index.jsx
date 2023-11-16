import App from './App';
import { createRoot } from 'react-dom/client';
import AppContext from './context';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <AppContext>
        <App />
    </AppContext>
)