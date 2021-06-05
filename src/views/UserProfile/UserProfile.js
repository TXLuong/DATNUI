import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {useState, useEffect} from "react";
import avatar from "assets/img/faces/marc.jpg";
import {authGet} from '../../api';
import {useSelector, useDispatch} from "react-redux";
import CamHtml from "components/Cam/CamHtml";
const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const getMonitor = ()=>{
    authGet(dispatch, token, "/monitor/current").then(
      res =>{
        console.log("res ---------- ", res);
        if (res != null) {
          setFirstname(res.firstname);
          setLastname(res.lastname);
          setId(res.id);
          if(res.roleid == 1) {
            setRole("Monitor");
          }
          else {
            setRole("Employee");
          }
          setEmail(res.email);
        }
      }
    );
  }
  const handleUpdate = () => {

  }
  useEffect(() =>{
    getMonitor();
  },[]);
  document.getElementById("mutualCamera").innerHTML = "<CamHtml/>" ;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Organization"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true,
                      value: "Hust"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Role"
                    id="Role"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps = {
                      {
                        value: role,
                        disabled: true,
                      }
                    }
                    labelProps = {"acasc"}
                   
                  >
                  </CustomInput>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="ID"
                    id="ID"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps = {
                      {
                        value: id,
                        disabled: true
                      }
                    }
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps = {
                      {
                        value : firstname
                      }
                    }
                    onChange={() => console.log("Role changed")}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps = {
                      {
                        value : lastname
                      }
                    }
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="Email address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps = {
                      {
                        value : email
                      }
                    }
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps = {
                      {
                        disabled: true,
                        value: "Viet Nam"
                      }
                    }
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps = {
                      {
                        disabled: true,
                        value: "+84"
                      }
                    }
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                  <CustomInput
                    labelText="Introduction"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                      value: "I'm a nice fun and friendly person, I'm honest and punctual, I work well in a team but also on my own",
                      disabled: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleUpdate}>Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
