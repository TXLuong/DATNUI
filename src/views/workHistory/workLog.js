import React from 'react';
import {useState, useEffect} from 'react';
import GridItem from 'components/Grid/GridItem';
import GridContainer from 'components/Grid/GridContainer';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from '@material-ui/core/styles';
import Danger from "components/Typography/Danger.js";
// material UI icons are
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import UserTable from '../../components/WorkLog/UserTable';
import DateSelector from '../../components/WorkLog/DatePicker';
import SeeButton from '../../components/WorkLog/SeeButton';
import {authPost} from '../../api';
import {useDispatch, useSelector} from 'react-redux'
// thoi gian turn in 
// thoi gian leave
// thong ke theo ngay, tuan, thang, ngay cu the
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
const useStyles = makeStyles(styles);
const useStyleForDate = makeStyles({
  listDate : {
    display : 'flex',
    margin : 20,
  }
});


export default function WorkLog(){
    const classes = useStyles();
    const classDate = useStyleForDate();
    const [name, setName] = useState("null");
    const [timeIn, setTimeIn] = useState("null")
    const [timeOut, setTimeOut] = useState("null");
    const [day, setDay] = useState("null");
    const [id, setId] = useState("null");
    const [from, setFrom] = useState(new Date().toLocaleString().split(',')[0]);
    const [to, setTo] = useState(new Date().toLocaleString().split(',')[0]);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    const createData =  (name, timeIn, timeOut, totalTime, day) => {
      {name, timeIn, timeOut, totalTime, day}
    }
    const rows = [
      createData("Alex", "8h10", "18h10", "8h", "4-5-2021"),
      createData("Alex", "8h10", "18h10", "8h", "4-5-2021"),
      createData("Alex", "8h10", "18h10", "8h", "4-5-2021"),
      createData("Alex", "8h10", "18h10", "8h", "4-5-2021")
    ];

    // nhan du lieu tu server 
    // truyen du lieu dang props vao trong usertable 
    // truyen 1 props nua la 1 callback, khi onlcick vao row thi hien thi ra 1 cai chart cua ngay hom do
    const handleChangeDateFrom = (dateFrom) => {
      setFrom(dateFrom);
    };
    const handleChangeDateTo = (dateTo) => {
      setTo(dateTo);
    }
    const handleSeeHistory = async () => {
      // send to server toke + dateFrom + dateTo
      console.log(from + " " + to);
      const body = {
        "dateFrom": from,
        "dateTo": to
      }
      authPost(dispatch, token,"/user/history",body);
    }
    const sendToServerAndRender = async () => {
      let data = {
        "from" : from,
        "to" : to
      }
      authPost(dispatch, token, "/user/seeWork", data);
    }
    useEffect(() => {
      console.log(from + " " + to);
      

    }, []);

    return (
        <div>
            <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Today</p>
              <h3 className={classes.cardTitle}>
                3/8 <small>hour</small>
              </h3>
            </CardHeader>
            {/* <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter> */}
             <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Until now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Total time yesterday</p>
              <h3 className={classes.cardTitle}>8 <small>hours</small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Yesterday
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total time last week</p>
              <h3 className={classes.cardTitle}>38 <small>hours</small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last Week
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total time last month</p>
              <h3 className={classes.cardTitle}>160 <small>hours</small></h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Last month
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <div className = {classDate.listDate}>
        <SeeButton onClick={handleSeeHistory}>See history</SeeButton>
        <DateSelector changeDate = {handleChangeDateFrom} label="From"/>
        <DateSelector changeDate = {handleChangeDateTo} label="To"/>       
      </div>
      <UserTable rows = {rows}></UserTable>
      </div>
    )
}