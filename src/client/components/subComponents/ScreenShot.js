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

    console.log(props.winnerCaptureImg);
    console.log(props.looserCaptureImg);

    return (
        <div style={styles.container}>
            <img src={`data:image/jpeg;base64,${props.winnerCaptureImg}`} />
            <img src={props.looserCaptureImg}/>
        </div>
        );
}

export default ScreenShot;