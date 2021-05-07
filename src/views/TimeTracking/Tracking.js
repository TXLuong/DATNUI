import Camera from '../../components/Cam/Camera';
import React from 'react';
import Button from '../../components/CustomButtons/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useState, useEffect} from 'react';
import CamHtml from '../../components/Cam/CamHtml';
import authPost from '../../api';
import NewWindow from 'react-new-window';
import { useHistory } from "react-router-dom";

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
    marginTop : '50px',
  },
  container: {
    textAlign: 'center',
  }
  }));  
  
export default function TrackingTime(){
    const classes = useStyles();
    const history = useHistory();
    const [imageBase64, setImageBase64] = useState("");
    const [uriImagetest, setUriImagetest] = useState("");
    const [isTurnIn, setIsTurnIn] = useState(false);
    const openPopupWindow = () => {
      let windowObjectReference = window.open(
         history.location.pathname,
        "DescriptiveWindowName",
        "resizable,scrollbars,status,width = 400, height =200"
      );
    }
    const handleClick = async () => {
      // turn in -> True
      console.log("request turning in","url/" + history.location.pathname);
      console.log(history);
      openPopupWindow();
      const model = await blazeface.load();
      const returnTensors = false;
      const predictions = await model.estimateFaces(document.getElementById("imageface"), returnTensors);
      if(predictions.length > 0) {    
        const start = predictions[0].topLeft;
        const end = predictions[0].bottomRight;
        const size = [end[0]-start[0], end[1]-start[1]];
        const idealWidth = size[0]+5;
        const idealHeight = size[1]+30;
        let tempCanvas = document.createElement("canvas");
        tempCanvas.width = 112;
        tempCanvas.height = 112;
        const ctx = tempCanvas.getContext("2d");
        ctx.drawImage(document.getElementById("imageface"),start[0]-5,start[1]-30, idealWidth, idealHeight, 0, 0, 112, 112);
        console.log("finished ", tempCanvas.toDataURL());
        setUriImagetest(tempCanvas.toDataURL());
      }
      else {
        console.log("can not capture face ");
      }
      setIsTurnIn(true);
    }
    // o phia cam : cu 5p chup 1 cai anh 
    // sau khi chup anh thi ngay lap tup truyen ve cho component cha la : TrackingTime
    useEffect(() => {
      const interval = setInterval(() => {
        //setSeconds(seconds => seconds + 1);
        if(isTurnIn){
          console.log("seconds");
          // document.getElementById("cameraMan");
          console.log(document.getElementById("cameraMan"));
        }
        else{
          console.log("Chua bat dau");
        }
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    
    return (
        <div className={classes.container}>
            <CamHtml id = "cameraMan" handleChangeImage = {(imageBase64) => {setImageBase64(imageBase64)}}/>  
            <img id = "imageface" src={imageBase64}></img>
            <img id = "resized" src = {uriImagetest}></img>
            <div>
            <Button className={classes.button} onClick={handleClick}>Turn in</Button>
            </div>
        </div>
    )
}