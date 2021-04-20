import Camera from '../../components/Cam/Camera';
import React from 'react';
import Button from '../../components/CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react';
import CamHtml from '../../components/Cam/CamHtml';
import authPost from '../../api';
const blazeface = require("@tensorflow-models/blazeface");

//Add your justify css in your styles const
// try to see good in every thing
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
    const [uriImagetest, setUriImagetest] = useState("");
    const handleClick = async () => {
      console.log("request turning in");
      const model = await blazeface.load();
      const returnTensors = false;
      const predictions = await model.estimateFaces(document.getElementById("imageface"), returnTensors);
      if(predictions.length > 0) {
        // let canvasElement = document.getElementById("myCanvas");
        // let canvas = canvasElement.getContext("2d");
        // canvas.drawImage(document.getElementById("imageface"), 0,0,100,100,0,0,100,100);
        // console.log("length of predicted data: ", predictions.length);
        // console.log(predictions[0]);
        const start = predictions[0].topLeft;
        const end = predictions[0].bottomRight;
        const size = [end[0]-start[0], end[1]-start[1]];
        // canvas.drawImage(document.getElementById("imageface"),start[0]-5,start[1]-30,size[0]+5,size[1]+30,0,0,100,100);

        // tao 1 canvas kich thuoc banng kich thuoc anh can lay : idealWidth, idealHeight
        const idealWidth = size[0]+5;
        const idealHeight = size[1]+30;
        let tempCanvas = document.createElement("canvas");
        tempCanvas.width = idealWidth;
        tempCanvas.height = idealHeight;
        const ctx = tempCanvas.getContext("2d");
        
        // lay anh vao canvas
        ctx.drawImage(document.getElementById("imageface"),start[0]-5,start[1]-30, idealWidth, idealHeight, 0, 0, idealWidth, idealHeight);

        // xem dang base 64 cua anh 
        setUriImagetest(tempCanvas.toDataURL());
        console.log(ctx.toDataURL());
        console.log(uriImagetest);
        console.log("finished ");

      }
      else {
        console.log("can not capture face ");
      }
    }
    
    return (
        <div className={classes.container}>
            <CamHtml handleChangeImage = {(imageBase64) => {setImageBase64(imageBase64)}}/>  
            <img id = "imageface" src={imageBase64}></img>
            <div>
            <Button className={classes.button} onClick={handleClick}>Turn in</Button>
            </div>
            <div src = {uriImagetest}></div>
        </div>
    )
}