import React from 'react'
import img from "../assets/main-Img.jpeg"
import "../css/AllEventCss.css"
import { Button,Input,Card,CardBody, CardSubtitle,CardTitle,CardText} from 'reactstrap'
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import Bottom from './Bottom'


export default function AllEvent() {
  return (
    <div>
       <div >
          <div className='header d-flex justify-content-evenly'>
            <div>
                  <h1>
                      EventHive-ing the Best.Day.Ever.
                  </h1>
                  <Button className='btn'>
                      2k+
                      total events
                      Hosted
                  </Button>
                  <Button className='btn'>
                      100+
                      total events
                      live
                  </Button>
            </div>
            <div className='img-head'>
                <img src={img} alt="img" className="img-fluid"/>
            </div>
          </div>
       </div>
        <div className='options d-flex' >
            <div>
                  <h1>Events around you</h1>
            </div>
            <div className='d-flex  justify-content-evenly'>
            <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        weekdays
        </option>
   
    </Input>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        Event type
        </option>
   
    </Input>
    <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
            Any category
        </option>
   
    </Input>
            </div>
        </div>
        <div>
            <div className='contanier-card d-flex'>
            <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img1}
           />
      <CardBody>
       <CardTitle tag="h5">
           BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
        <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img2}
           />
      <CardBody>
       <CardTitle tag="h5">
       BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
        <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img3}
           />
      <CardBody>
       <CardTitle tag="h5">
       BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
        <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img3}
           />
      <CardBody>
       <CardTitle tag="h5">
       BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
        <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img3}
           />
      <CardBody>
       <CardTitle tag="h5">
       BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
        <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img1}
           />
      <CardBody>
       <CardTitle tag="h5">
       BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
        <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img3}
           />
      <CardBody>
       <CardTitle tag="h5">
       BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
        <Card
           style={{
            width: '18rem'
                }}
          >
           <img
              alt="Sample"
             src={img3}
           />
      <CardBody>
       <CardTitle tag="h5">
       BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
       </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
        >
      Saturdat, March 18, 9.30PM
   </CardSubtitle>
     <CardText>
       ONLINE EVENT - Attend anywhere
      </CardText>
      </CardBody>
        </Card>
            </div>
        </div>
        <Bottom/>
    </div>
  )
}
