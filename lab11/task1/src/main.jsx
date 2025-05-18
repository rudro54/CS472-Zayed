import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BookProvider } from "./components/itemContext"

createRoot(document.getElementById('root')).render(
    <BookProvider>
        <App/>
    </BookProvider>
)
