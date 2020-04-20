import React from "react";





// import axios from 'axios';

// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };
// const bodyParameters = {
//    key: "value"
// };
// Axios.post( 
//   'http://localhost:8000/api/v1/get_token_payloads',
//   bodyParameters,
//   config
// ).then(console.log).catch(console.log);








function Deck() {
    const styles = {
        card: {
            width: '15%',
            height: '15vh',
            backgroundColor: 'yellow',
            textAlign: 'center',
        },
    }

    return (
        <div style={styles.card}>
            <p>Deck</p>
        </div>
    );
}

export default Deck;







