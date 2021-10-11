import React from 'react'
import { Col, Container, FloatingLabel, Row } from 'react-bootstrap'
import{Form} from "react-bootstrap"


function CustomNav2() {
          return (
                           

<  >
<Row   xs={1} sm={1} md={6} lg={6}>
<img src={require('../image/logo2.jpg').default}   />
<Col lg={1}>  
<FloatingLabel controlId="floatingSelect" label="Technology" className="mb-2">
  <Form.Select aria-label="Floating label select example">
    <option> select...</option>
    <option value="1">React.js</option>
    <option value="2">vue.js</option>
    <option value="3">Angular</option>
    <option value="3">Python</option>
    <option value="3">next.js</option>
  </Form.Select>
</FloatingLabel>
</Col>

<Col lg={1}>
<FloatingLabel controlId="floatingSelect" label="Department" className="mb-2">
  <Form.Select aria-label="Floating label select example">
    <option>select... </option>
    <option value="1">HR</option>
    <option value="2">IT</option>
    <option value="3">ACCOUNTS</option>
  </Form.Select>
</FloatingLabel>
</Col>

<Col lg={1} >

<FloatingLabel  controlId="floatingInput"  label="From date"  className="mb-2"  size ="md"  id=''>
<Form.Control type="date" placeholder="From date" onFocus={(e)=>(e.target.type  = "date")} />

</FloatingLabel>

</Col>

    <Col lg={1}>
 <FloatingLabel  controlId="floatingInput"  label="To date"  className="mb-2"  size ="md"  id=''>
<Form.Control type="date" placeholder="12/12/12 " />
</FloatingLabel>

</Col>

<Col lg={4}>  

<FloatingLabel  controlId="floatingInput" label=" Search... " className=""  >
    <Form.Control type="search" placeholder=" search"  />
  </FloatingLabel>
  </Col>

<Col lg={1} >  

  <button   className="btn1"  style={{ color: 'white' }}  > Search </button>
</Col>
 

  </Row>
</>
  
)
}

export default CustomNav2
