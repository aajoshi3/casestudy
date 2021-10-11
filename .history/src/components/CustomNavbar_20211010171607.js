
import React from 'react'
import { Button,  Container,  FloatingLabel,  Form, FormControl,  Nav, Navbar} from 'react-bootstrap'
import { withRouter } from 'react-router';
// import logo from "./TeLogo"


function CustomNavbar(props) {


 
    const navigateToHome=()=>{
      console.log(props);
      props.history.push('/')
    }
  
    const navigateToSearch=()=>{
      console.log(props);
      props.history.push('/Search')
    }
  return (
    <div>

      <div>
        
      </div>
        
  <Navbar bg="light" expand="lg"   >
  <Container fluid>
    <Navbar.Brand href="">    
    
      <div><img src={require('../image/logo2.jpg').default}   style={{width:"170px"}} onClick={navigateToHome}  alt="Loading" /></div>
     
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll"  >
      <Nav 
        className="me-auto my-2 my-lg-0"

        navbarScroll
      >
        

<FloatingLabel    id="Floating-label1"      className="  me-4  mb-2  form-group  lg"  controlId="floatingSelect" label="Technology" >
  <Form.Select     className="form-control" aria-label="Floating label select example"   >
    <option> select...</option>
    <option value="1">React.js</option>
    <option value="2">vue.js</option>
    <option value="3">Angular</option>
    <option value="3">Python</option>
    <option value="3">next.js</option>
  </Form.Select>
</FloatingLabel>


<FloatingLabel  id="Floating-label2"  className=" me-4  mb-2  form-group  lg" controlId="floatingSelect" label="Department" >
  <Form.Select  className="form-control" aria-label="Floating label select example">
    <option>select... </option>
    <option value="1">HR</option>
    <option value="2">IT</option>
    <option value="3">ACCOUNTS</option>
  </Form.Select>
</FloatingLabel>

      <Form className="d-flex"  >
        <FormControl  id="date1" label="From date"
          type="date"
          placeholder="From Date"
          className="me-2 mb-2"
          aria-label="Search"
          />
      </Form>

      <Form className="d-flex  form-group">
        <FormControl id="date1"
          type="date"
          placeholder="To Date "
          className="me-2 mb-2"
          aria-label="Search"
          />
        
      </Form     >
      <Form className="d-flex "  >
        <FormControl className="form-group"
          type="search"
          placeholder="Search"
          className="me-2 mb-2"
          aria-label="Search"
          />
        <Button variant="warning" onClick={navigateToSearch}>Search</Button>
      </Form>
          </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default withRouter(CustomNavbar)
// export default CustomNavbar
