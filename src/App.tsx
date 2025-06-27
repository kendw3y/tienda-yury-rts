
import { AdminUser } from './components/AdminUser'
import { ShopCar } from './components/ShopCar'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
type Props = {}

function App({}: Props) {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<ShopCar></ShopCar>} />
            <Route path='/gestion_user' element={<AdminUser/>} />
            
        </Routes>
    </Router>
  )
}

export default App