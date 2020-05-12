import React from "react";


const ScreenShot = (props) => {
    const styles = {
        container: {
            width: '30%',
            paddingTop : '30px',
            display: 'inline-block',
            textAlign: 'center',
            backgroundColor: 'red',
        },
    }

    console.log(props.myCaptureImg);
    console.log(props.opponentCaptureImg);

    return (
        <div style={styles.container}>
            <img src={`data:image/jpeg;base64,${props.myCaptureImg}`} />
            <img src={props.opponentCaptureImg}/>
        </div>
        );
}

export default ScreenShot;