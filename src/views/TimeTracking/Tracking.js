import Camera from '../../components/Cam/Camera';
import React from 'react';
import Button from '../../components/CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import CamHtml from '../../components/Cam/CamHtml';
import authPost from '../../api';

//Add your justify css in your styles const
const styles = {
    root: {
        justifyContent: 'center'
    }
};
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  button:{
    //   textAlign: 'center',
    //   display:'block',
    marginTop : '50px',
  }, container: {
    textAlign: 'center',
  }
  }));  
  
export default function TrackingTime(){
    const classes = useStyles();
    const [imageBase64, setImageBase64] = useState("");
    const [content, setContent] = useState("sdcsdc");
    const handleClick = ()=>{
      // detect and crop human face 
      
     // send image to server

     console.log("clicked");
    }
    return (
        <div className={classes.container}>
            <CamHtml handleChangeImage = {(imageBase64) => {setImageBase64(imageBase64)}}/>  
            <img src={imageBase64}></img>
            <div>
            <Button className={classes.button} onClick={handleClick}>Turn in</Button>
            </div>
        </div>
    )
}