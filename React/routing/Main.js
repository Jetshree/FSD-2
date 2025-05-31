import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Nopage from './Nopage'

function main(){
    return(
        <div>
            <Router>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Product'>Product</Link></li>
                </ul>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/product' element={<Product/>}></Route>
                    <Route path='#' element={<Nopage/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default main