import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';

function SearchView() {
     const [displayData, setdisplayData] = useState([{
         question:'what is react js.',
         answer:'React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, ..'   },
     {
        answer:'Determining what exactly defines a short story has been recurrently problematic.[2] A classic definition of a short story is that one should be able to read it in one sitting, a point most notably made in Edgar Allan Poe s essay"The Philosophy of Composition 1846 HG Wells described the purpose of the short story as The jolly art, of making something very bright and moving; it may be horrible or pathetic or funny or profoundly illuminating, having only this essential, that it should take from fifteen to fifty minutes to read aloud According to William Faulkner"',
        question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it'
    },
    {
      question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
      answer:'React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, ..'
  }, {
    question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
    answer:'"React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, ..'},
{
  question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
  answer:'"React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, ..'}, 
  {
  question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
  answer:'React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, ..'}, 
  {
  question:'"If you take me seriously then I am perfect for you but if you take me as a game then I will make rules to play it',
  answer:'React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, ..'
}])
const [pageNumber, setPageNumber] = useState(0);

const usersPerPage = 4;
const pagesVisited = pageNumber * usersPerPage;
const pageCount = Math.ceil(displayData.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


    
    
      const displayDatas = displayData
.slice(pagesVisited, pagesVisited + usersPerPage)
  .map((data,index)=>{
    return (<Card xs={3} md={6} ls={3} >
  <Card.Body>
    <Card.Text>
    <h5 class="card-title" style={{color:'#707070'}}>Question {index + 1}</h5>
      {/* <p key={index}  id="questio" style={{color:''#707070'}}>{data.question}</p> */}
      <p key={index} id="question" style={{color:'#707070'}}><i class="fas fa-check" style={{top: "419px",
     left: "88px",
     width: "36px",
     height: "27px",
     color:"#00A743",

     }}></i>{data.question}<br/>{data.answer}</p>
    </Card.Text>
  
  </Card.Body>
</Card>

    )
})        

return <div className="">
{displayDatas}
<ReactPaginate 
  previousLabel={"Previous"}
  nextLabel={"Next"}
  pageCount={pageCount}
  onPageChange={changePage}
  containerClassName={"paginationBttns"}
  previousLinkClassName={"previousBttn"}
  nextLinkClassName={"nextBttn"}
  disabledClassName={"paginationDisabled"}
  activeClassName={"paginationActive"}
/>
  </div>
}
        

export default SearchView