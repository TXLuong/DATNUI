import React from 'react';
import {useState} from 'react';
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

    // nhan du lieu tu server 
    // truyen du lieu dang props vao trong usertable 
    // truyen 1 props nua la 1 callback, khi onlcick vao row thi hien thi ra 1 cai chart cua ngay hom do

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
                49/50 <small>GB</small>
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
        <SeeButton></SeeButton>
        <DateSelector label="From"/>
        <DateSelector label="To"/>       
      </div>
      <UserTable ></UserTable>
      </div>
    )
}