import React from 'react';
import {firestore} from './firebase';
import {addDoc, collection } from '@firebase/firestore';

function Alexa({Disclosure, setFlag }) {

    const ref = collection (firestore,"Disclosure");

    console.log(Disclosure);

    function goback() {
        setFlag(false);
    }
    
    const handleSave = async (e) => {
        e.preventDefault();
        console.log(Disclosure);
        let data = {message: Disclosure};

        try {
            addDoc(ref,data);
        }
        catch(e){
            console.log(e);
        }
    };

    return (
        <div className="container">
        <div className="row">
            <div className="col-sm-4 p1">
                <p1><b>AMERICAN EXPRESS</b> | Customer Value Portal</p1> 
            </div>   
            <div className="col-sm-8 p2">
                <p>|&emsp;&emsp;|&emsp;&emsp;User</p>
            </div>                        
        </div>
        <div className="row">
            <div className="col-sm-4 column b">
            <h1>FNAME LNAME</h1>
                <p>member since 1992(27 years)</p>
                <hr></hr>
                <h4>Consumer</h4>
                <p>Rewards exchanged ...............Yes</p>
                <p>AMEX share of wallet ..........high</p>
                <hr></hr>
                <h3>Card currently being serviced hi</h3>
                <p className="p3">AQUISITION</p>
                <p>1234567890&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;A0000009WGW</p>
                <br></br>
                <button className="btn1">Cancel reasons</button>  
            </div>
            <div className="col-sm-1 column d">
                <p>&ensp;&ensp;&ensp;&ensp;</p>
            </div>
            <div className="col-sm-7">
                <div>
                    <p1 className="column e">CVP overview</p1>
                </div>
                    <br></br>
                    <br></br>
                    <div className="column c">
                        <h5>STN cash magnet XSELL L2L</h5>
                        <h5><u>Sales Summary</u></h5>
                        <p>(i) You can remove individual offer by clicking remove.</p>
                        <p>Accepted Offers</p>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Product</th>
                            </tr>
                            <tr>
                                <td>FNAME LNAME</td>
                                <td>This is product name</td>
                                <button className="btn2">Remove</button>
                            </tr>
                        </table><br></br><br></br>
                        <ul className="list">
                            <li>If your account is approved, we will mail your new card with detailed prodcut information including rate, fees as well as terms and limitatuins. you will receive your new card in the email within 7-10 business days. Please thoroughly review this information.</li>
                            <li>You can cancel your card without obligation to pay any fees or charges until you can use it or make a payment. To cancel, Please call the number on the back of your card.</li>
                        </ul><br></br>
                        <button className="btn2"><b>Decline</b></button>
                        <button className="btn3" onClick={goback}><b>Back</b></button>&ensp;&ensp;
                        <button className="btn2"><b>cancel</b></button>&ensp;&ensp;&ensp;
                        <button className="btn4" type="submit"  onClick={handleSave}><b>Send to Alexa</b></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alexa;