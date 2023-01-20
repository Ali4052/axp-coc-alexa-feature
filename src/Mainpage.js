import React, {useState} from 'react';

var myString;

function Mainpage({setFlag, setDisclosure}) {

    const [ActiveFlag,setActiveFlag] = useState(false);

    function setAlexa() {
        setFlag(true);
        setDisclosure(myString);
    }

    function settempflag() {
        setActiveFlag(true)
    }

    function TextSetter(data) {
        myString = data.target.value;
    }

    return (
        <div>
            <p1 className="p1"><b>AMERICAN EXPRESS</b> | Customer Value Portal <p1 className="p2">|&emsp;&emsp;|&emsp;&emsp;User</p1></p1>
            <div>
                <div className="column b">
                    <h1>FNAME LNAME</h1>
                    <p>member since 1992(27 years)</p>
                    <hr></hr>
                    <h4>Consumer</h4>
                    <p>Rewards exchanged ...............Yes</p>
                    <p>AMEX share of wallet ..........high</p>
                    <hr></hr>
                    <h3>Card currently being serviced</h3>
                    <p className="p3">AQUISITION</p>
                    <p>1234567890&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;A0000009WGW</p>
                    <br></br>
                    <button className="btn1">Cancel reasons</button>
                </div>
                <div className="column d">
                    <p>&ensp;&ensp;&ensp;&ensp;</p>
                </div>
                <div>
                    <div className="column e">
                        <p1>CVP overview</p1>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="column c">
                        <h5>STN cash magnet XSELL L2L</h5>
                        <h5><u>Channel of Choice</u></h5>
                        <input type="text" onChange={TextSetter} />
                        <p>Do you want me to read you the additional information on the phone or send it to you by email/text/Alexa?</p>
                        <br></br>
                        <input type="radio" name="options" />
                        <label>SMS</label>
                        <br></br>
                        <p1 color="blue">(i) you must scroll down to read all required information before clicking continue</p1>
                        <br></br>
                        <input type="radio" name="options" />
                        <label>Read Now</label> <br></br>
                        <input type="radio" name="options" onChange={settempflag} />
                        <label>Alexa</label><br></br><br></br>
                        <input type="checkbox" />
                        <label>Click here to confirm that you have read all the srequired disclosures</label><br></br><br></br><br></br><br></br><br></br>
                        <button className="btn2"><b>Decline</b></button>
                        <button className="btn3"><b>Back</b></button>&ensp;&ensp;&ensp;
                        <button className="btn2"><b>cancel</b></button>&ensp;&ensp;&ensp;
                        <button className="btn2" disabled={(ActiveFlag === false)} onClick={setAlexa}><b>Continue</b></button>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default  Mainpage;