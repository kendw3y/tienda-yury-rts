
import { AppNew } from '@/AppNew';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

export const Navigate = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<AppNew />}></Route>
                    <Route path="/about" element={<h1>About</h1>}/>
                    <Route path="/users" element={ <h1>Users</h1>}/>
                    <Route path="/" element={<h1>Home</h1>}/>
            </Routes>
        </Router>
        </>
    );
}

export default Navigate