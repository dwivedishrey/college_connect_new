import { verify } from '../actions/auth';
import React, { useState } from 'react';
import { Navigate,useParams} from 'react-router-dom';
import { connect } from 'react-redux';
const Activate = ({ verify }) => {
    const [verified, setVerified] = useState(false);
    const routeParams = useParams(); 
    const verify_account = e => {
      const uid =routeParams.uid;
      const token = routeParams.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/' replace/>
    }

    return (
        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Verify your Account:</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);