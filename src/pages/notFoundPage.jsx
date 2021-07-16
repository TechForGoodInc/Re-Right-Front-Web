import React, { Component } from 'react';

class NotFoundPage extends Component {
    state = {  }
    render() { 
        return (
            <center style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <h1 style={{fontSize: 150}}>404</h1>
                <h2 style={{fontSize: 50}}>Page Not Found</h2>
            </center>
         );
    }
}
 
export default NotFoundPage;