import React from 'react';
import {useState} from 'react';
export default function UpLoadImg() {
    const [img, setImg] = useState(null);
    const onFileChange = (event) => {
        setImg(event.target.files[0]);
    };
     return (
        <input type="file" onChange={onFileChange} />
     )
}