import React from "react";
import { useState, useMemo } from "react";

function ExpensiveCalculation({number}){
    const calculate=(num)=>{
        console.log("Calculating...");
        return num * 2;
        };
    const result = useMemo(() => calculate(number), [number]);

    return <p>Result : {result}</p>;

}

export default ExpensiveCalculation;