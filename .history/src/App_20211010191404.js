// import Button from '@restart/ui/esm/Button';
import { Col,  Container,  FloatingLabel, Row } from 'react-bootstrap';
import {Card} from "react-bootstrap"
import './App.css';
import UploadQuestion from './components/UploadQuestion';
import{Form} from "react-bootstrap"
// import CustomNavbar from './components/CustomNavbar';
import CustomNavbar3 from './components/CustomNavbar3';
// import CustomNav2 from './components/CustomNav2';
import CustomNavbar from './components/CustomNavbar'
import routing from './router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div  className="App">
    <BrowserRouter>
    <div>


<CustomNavbar />
    
<UploadQuestion/>
{routing} 
    </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
