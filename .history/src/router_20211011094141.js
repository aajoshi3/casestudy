import { BrowserRouter, Link, Route} from "react-router-dom";
import UploadQuestion from './components/UploadQuestion'
import SearchView from "./components/SearchView";
const routing=(
  <BrowserRouter>
  <div>
    {/* <Route exact path='/' component={UploadQuestion}/> */}
    <Link to="/Search" >Search</Link>
    <Route exact path='/Search' component={SearchView}/>
    </div>
    </BrowserRouter>
)
export default routing