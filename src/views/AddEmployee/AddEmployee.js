import React from 'react';
import AccountProfileDetails from '../../components/Account/EmployeeAccount';
import UpLoadImg from '../../components/Account/UpLoadImg';
import Button from '../../components/CustomButtons/Button';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { authPost } from '../../api';
export default function AddEmployee(){
    const token =  useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [imageUrl, setImageUrl] = useState(null);
    const handleChildImage = (base64) => {
        setImageUrl(base64);
    }
    const handleChildChanges = (val) => {
        setValues(val);
    }

    const onClick = () => {
        let data = {
            "infor" : values,
            'face' : imageUrl
        }
        authPost(dispatch, token, "/addFace", data);
        // location.reload();
        setValues(null);
        setImageUrl(null);
    }
    return (
        <>
            <AccountProfileDetails handleChildChanges={handleChildChanges}/>
            <div style = {{color: "green", textAlign: "center", margin : '20px'}}>
            <UpLoadImg handleChildImage = {handleChildImage} ></UpLoadImg>
            </div>
            <div style = {{color:  "red", textAlign: "center", margin : '20px'}}>
                <Button onClick = {onClick}> Add new employee </Button>
            </div>
        </>
    )
}