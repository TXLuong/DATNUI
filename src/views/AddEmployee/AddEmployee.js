import React from 'react';
import AccountProfileDetails from '../../components/Account/EmployeeAccount';
import UpLoadImg from '../../components/Account/UpLoadImg';
import Button from '../../components/CustomButtons/Button';
export default function AddEmployee(){


    return (
        <>
            <AccountProfileDetails/>
            <div style = {{color: "green", textAlign: "center", margin : '20px'}}>
            <UpLoadImg></UpLoadImg>
            </div>
            <div style = {{color:  "red", textAlign: "center", margin : '20px'}}>
                <Button> Add new employee</Button>
            </div>
            
        </>
    )
}