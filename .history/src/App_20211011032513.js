// import Button from '@restart/ui/esm/Button';
import { Col,  Container,  FloatingLabel, Row } from 'react-bootstrap';
import {Card} from "react-bootstrap"
import './App.css';
import UploadQuestion from './components/UploadQuestion';
import{Form} from "react-bootstrap"
 import CustomNavbar from './components/CustomNavbar';
import CustomNavbar3 from './components/CustomNavbar3';
import routing from './router';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Success from './components/Success';
import useForm from './components/useForm';
import validate from './components/Validate';
import Button from '@restart/ui/esm/Button';
// import CustomNav2 from './components/CustomNav2';

function App() {
  const {handleChange,values,handleSubmit,errors}=useForm(validate)

  const [primaryInfo, setprimaryInfo] = useState({
    candidateName: "",
    department: "",
    clientName: "",
    technology: "",
    questions: [],
  });

  const saveData=()=>{
    <Success/>
    const getQuestionsCopy=[...questions]
    setprimaryInfo({
      ...primaryInfo,
      questions:[getQuestionsCopy]
    })
  }
  
  const updatePrimaryInfo = (event) =>{
    debugger
    setprimaryInfo({
      ...primaryInfo,
      [event.target.name]: event.target.value,
    });
    console.log(primaryInfo)

  };

  const [questions, setquestions] = useState([
    {
      question: "",
      answer: "",
      diffiultyLevel: "",
    },
  ]);

  


  console.log('---------------------------------------')

  const handleQuestionChange = (i, event) => {
    // debugger
    const arrayQuestionCopy = [...questions];
    arrayQuestionCopy[i].question = event.target.value;
    setquestions(arrayQuestionCopy);
    // console.log(questions[i]);
  };

  const handleLevelChange=(i,event)=>{
    const arrayLevelCopy = [...questions];
    arrayLevelCopy[i].diffiultyLevel = event.target.value;
    setquestions(arrayLevelCopy);
    console.log(questions[i]);
  }

  const handleAnswerChange=(i,event)=>{

    const arrayAnswerCopy = [...questions];
    arrayAnswerCopy[i].answer = event.target.value;
    setquestions(arrayAnswerCopy);
    console.log(questions[i]);
  }

  const handleRemoveClick = (index) => {
  
    const questionsCopy = [...questions];
    questionsCopy.splice(index, 1);
    setquestions(questionsCopy);
    alert('question is deleted')
  };

  const handleAddClick = () => {
    const questionsCopy = [...questions];
    questionsCopy.push([{ question: "", answer: "", diffiultyLevel: "" }]);
    setquestions(questionsCopy);
    
  };
  return (

    <div className="App">

<Card>

<BrowserRouter>
<CustomNavbar />

{routing}
</BrowserRouter>
{/* <CustomNav2 /> */}
{/* <CustomNavbar3 /> */}
  <Card.Body>

<Container>
{/* <UploadQuestion /> */}
<Row xs={1} sm={2} md={4} lg={4}>

<Col  ><FloatingLabel  controlId="floatingInput"  label="Candidate Name"  className="mb-3"  size ="md"  id=''>
<Form.Control type="text" placeholder=" hi" name="candidateName"
value={primaryInfo.candidateName}
onChange={(event)=>updatePrimaryInfo(event)}/>
  </FloatingLabel>
  {errors.candidateName && <p className='color3'>{errors.candidateName}</p>}

  </Col>

    <Col><FloatingLabel controlId="floatingSelect" label="Department" className="mb-3">
  <Form.Select aria-label="Floating label select example" name="department"
  value={primaryInfo.department}
  onChange={(event)=>updatePrimaryInfo(event)}>
    <option>select... </option>
    <option value="1">HR</option>
    <option value="2">IT</option>
    <option value="3">ACCOUNTS</option>
  </Form.Select>
</FloatingLabel>
{errors.department && <p className='depcolor'>{errors.department}</p>}

</Col>

<Col  ><FloatingLabel  controlId="floatingInput"  label="Clinet Name"  className="mb-3"  size ="md"  id=''>
<Form.Control type="text" placeholder=" hi" name="clientName"
value={primaryInfo.clientName}
onChange={(event)=>updatePrimaryInfo(event)} />
  </FloatingLabel>
  {errors.clientName && <p className='cliecolor'>{errors.clientName}</p>}

  </Col>

    <Col>
    
    <FloatingLabel controlId="floatingSelect" label="Technology" className="mb-3">
  <Form.Select aria-label="Floating label select example" name="technolody"
  value={primaryInfo.technology}
  onChange={(event)=>updatePrimaryInfo(event)}>
    <option> select...</option>
    <option value="1">React.js</option>
    <option value="2">vue.js</option>
    <option value="3">Angular</option>
    <option value="3">Python</option>
    <option value="3">next.js</option>


  </Form.Select>
</FloatingLabel>
{errors.technology && <p className='techcolor'>{errors.technology}</p>}

</Col>
  </Row>
</Container>
{questions.map((val, i) => {
  return(
  <>
<Container >
  <Row  >
  <Col lg={9}     >
  <FloatingLabel    controlId="floatingTextarea" label="Question" className="mb-3">
    <Form.Control as="textarea" placeholder="x" 
      value={val.question}
      // onChange={handleChange}
     onChange={(event) => handleQuestionChange(i, event)}/>
  </FloatingLabel>
  {errors.question && <p className='color1'>{errors.question}</p>}

  </Col>


  <Col lg={3}  md={{ order: 'first' }}  xs={{order: 'first'}} lg={{order:'last'}}   >

  <FloatingLabel controlId="floatingSelect" label="Difficulty level" className="mb-3">
  <Form.Select aria-label="Floating label select example" 
    value={val.diffiultyLevel}
    // onChange={handleChange}
   onChange={(event) => handleLevelChange(i, event)}>
    <option> select...</option>
    <option value="1">Easy</option>
    <option value="2">Intermediate</option>
    <option value="3">Expert</option>
  </Form.Select>
</FloatingLabel>
{errors.difficultyLevel && <p className='diffcolor'>{errors.difficultyLevel}</p>}

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
      value={val.answer}
      // onChange={handleChange}
     onChange={(event) => handleAnswerChange(i, event)}
    />
  </FloatingLabel>
   </Col>
   <Col lg={3} >
                        {questions.length !== i+1 && (
                          <Button
                            className="btn"
                            onClick={() => handleRemoveClick(i)}
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>{" "}
                            Delete
                          </Button>
 )}
                        <br />
                        <br />

                        {/* <Button variant="warning"  style={{ color: 'white' }} ><i class="fas fa-plus-circle"></i> Add New </Button> */}
                        {questions.length - 1 === i && (
                          <button class="btn" onClick={handleAddClick}>
                            <i className="fa fa-plus-circle"></i> Add New
                          </button>
                        )}
                      </Col>
    </Row>
    
</Container>
</>
              );
            })}
    
<br/>
<br/>
<br/>


    <Container>
    <button   className="btn1"   style={{ color: 'white' }}  onClick={handleSubmit}> Submit </button>
    </Container>
      </Card.Body>
      </Card>
    </div>
    
  );
}

export default App;
