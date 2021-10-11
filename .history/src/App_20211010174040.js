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
    <BrowserRouter>
    <div className="App">

<Card>
<CustomNavbar />
{routing}
{/* <CustomNav2 /> */}
{/* <CustomNavbar3 /> */}
  <Card.Body>

<Container>
<UploadQuestion />
<Row xs={1} sm={2} md={4} lg={4}>

<Col  ><FloatingLabel  controlId="floatingInput"  label="Candidate Name"  className="mb-3"  size ="md"  id=''>
<Form.Control type="text" placeholder=" hi" />
  </FloatingLabel></Col>

    <Col><FloatingLabel controlId="floatingSelect" label="Department" className="mb-3">
  <Form.Select aria-label="Floating label select example">
    <option>select... </option>
    <option value="1">HR</option>
    <option value="2">IT</option>
    <option value="3">ACCOUNTS</option>
  </Form.Select>
</FloatingLabel></Col>

<Col  ><FloatingLabel  controlId="floatingInput"  label="Clinet Name"  className="mb-3"  size ="md"  id=''>
<Form.Control type="text" placeholder=" hi" />
  </FloatingLabel></Col>

    <Col>
    
    <FloatingLabel controlId="floatingSelect" label="Technology" className="mb-3">
  <Form.Select aria-label="Floating label select example">
    <option> select...</option>
    <option value="1">React.js</option>
    <option value="2">vue.js</option>
    <option value="3">Angular</option>
    <option value="3">Python</option>
    <option value="3">next.js</option>


  </Form.Select>
</FloatingLabel></Col>
  </Row>
</Container>
<Container >
  <Row  >
  <Col lg={9}     >
  <FloatingLabel    controlId="floatingTextarea" label="Question" className="mb-3">
    <Form.Control as="textarea" placeholder="x" />
  </FloatingLabel>
  </Col>


  <Col lg={3}  md={{ order: 'first' }}  xs={{order: 'first'}} lg={{order:'last'}}   >

  <FloatingLabel controlId="floatingSelect" label="Difficulty level" className="mb-3">
  <Form.Select aria-label="Floating label select example">
    <option> select...</option>
    <option value="1">Easy</option>
    <option value="2">Intermediate</option>
    <option value="3">Expert</option>
  </Form.Select>
</FloatingLabel>
  </Col>
  </Row>

</Container>

<Container   style={{ width: 'white' }}      > 
<Row>
      <Col lg={9} > 
      <FloatingLabel className="mb-3 " controlId="floatingTextarea2" label="Answer">
    <Form.Control
      as="textarea"
      placeholder=" x"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
   </Col>
   <Col lg={3}     >
   {/* <Button variant="warning"  style={{ color: 'white' }} ><i class="fas fa-plus-circle"></i> Add New </Button> */}
   <button className="btn"    id="button1" ><i className="fa fa-plus-circle"></i> Add New</button>
   </Col>
    </Row>
</Container>
    
<br/>
<br/>
<br/>


    <Container>
    <button   className="btn1"   style={{ color: 'white' }}  > Submit </button>
    </Container>
      </Card.Body>
      </Card>
    </div>
  );
}

export default App;
