"use client"
import { FC } from "react";

const staticNum:number = 5;
 type Gender = "Male"|"Female"|"lGBTQ"

interface Props {
    initVal:number;
    gender:Gender;
}

interface Person {
    firstName:string;
    lastName:string;
    age:number;
    single:boolean;
}

const Person : Person = {
    firstName:"Iris",
    lastName:"Ayame",
    age: 20 ,
    single: true,
}

const Basic:FC<Props>= ({ initVal,gender }) =>{
    const verifyGender = (gd:Gender)=>{
        if (gd === "Female") 
            console.log(gd);
         else 
            console.log("not female");
        
    }





    return(
        <>
        <p>Basic</p>
        <div>{staticNum}</div>
        <div>{Person.firstName}</div>
        <div>{initVal}</div>
        <div>{gender}</div>
        <button>increase</button>
        <button onClick={()=>verifyGender(gender)}>Gender</button>
        </>
    )
}
Basic.defaultProps={
    initVal : 0,
    gender : "Female"
}
export default Basic;