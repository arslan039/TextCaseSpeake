
  import React from 'react'
  

export default function About(props) {

let myStyle = {
color : props.mode==="dark" ? "white" : "black" ,
backgroundColor : props.mode==="dark" ? "#333c53" : "white"

}



return (
  <div className='container-fluid' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: '-110px' ,  height: '80vh' ,  }}>
    <div className='container my-3'>
      <h2 className='my-3' style = {{color : props.mode==="dark" ? "white" : "black"}}>About US</h2>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong> Analyze Your Text</strong>
              
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              "TextCaseSpeak" is a powerful and versatile text analysis application designed to assist users in comprehensively evaluating and understanding the content of written text
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Speaks the text</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              The app incorporates a text-to-speech feature that can convert the analyzed text into spoken words. This can be beneficial for users with visual impairments or those who prefer to listen to content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              Keep track of the latest versions of web browsers and ensure that TextCaseSpeak remains compatible with them. Regularly update and optimize the application to accommodate changes and improvements in browser technology.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}