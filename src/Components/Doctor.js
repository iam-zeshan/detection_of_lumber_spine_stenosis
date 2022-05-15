import React from "react";
import { Link } from 'react-router-dom';

function Prediction() {
    return (
        <div >
            <div className="container" style={{ "width": "60%", height:500, marginTop:100 }}>
                <h2 className="text-center" style={{ marginBottom: 50 }}>Upload Ultrasound image for Diseas Detection.</h2>
                <div>
                    <label for="formFileLg" className="form-label">Please upload only Ultrasound image!</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
                <br/>
                <br/>
                <Link to="/" className="btn btn-default">Log Out</Link>
            </div>
        </div>
    )
}
export default Prediction