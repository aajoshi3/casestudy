import {  Route} from "react-router-dom";
import UploadQuestion from './components/UploadQuestion'
import SearchView from "./components/SearchView";
const routing=(
    
  <div>
    <Route exact path='/' component={UploadQuestion}/>
    <Route exact path='/Search' component={SearchView}/>
    </div>

)
export default routing