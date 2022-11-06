import React, { Component, useState } from "react";
import '../styles/App.css';

const App = () => {
    const [firstname, setFirstname] = useState();
    const [secondname, setSecondname] = useState();
    let [finalstatus, setFinalstatus] = useState();

    const forfirstname = (event) => {
        event.persist();
        setFirstname(() => event.target.value);
    }
    const forsecondname = (event) => {
        event.persist();
        setSecondname(() => event.target.value);
    }

    const checkstatus = () => {
        let arr = [...firstname];
        let brr = [...secondname];
        arr = arr.sort();
        brr = brr.sort();
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < brr.length; j++) {
                if (arr[i] == brr[j] && arr[i] != -1) {
                    arr[i] = -1;
                    brr[j] = -1
                }
                if (arr[i] < arr[j]) {
                    break;
                }

            }
        }
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != -1) {
                count++;
            }
        }
        for (let i = 0; i < brr.length; i++) {
            if (brr[i] != -1) {
                count++;
            }



        }
        count = count % 6;
        switch (count) {
            case 1: setFinalstatus(() => "Friends");
                break;
            case 2: setFinalstatus(() => "Love");
                break;
            case 3: setFinalstatus(() => "Affection");
                break;
            case 4: setFinalstatus(() => "Marriage");
                break;
            case 5: setFinalstatus(() => "Enemy");
                break;
            case 0: setFinalstatus(() => "Siblings");
                break;
            default: console.log("not found");
        }



    }
    const clearinputs = () => {
        // document.getElementById("first").value = "";
        // document.getElementById("second").value = "";

        setFirstname(() => "");
        setSecondname(() => "");
        setFinalstatus(() => "");
    }
    return (
        <div id="main">
            <input type="text" placeholder="First Name" data-testid="input1" value={firstname} onChange={forfirstname} id="first" /><br />
            <input type="text" placeholder="Second Name" data-testid="input2" value={secondname} onChange={forsecondname} id="second" /><br />
            <button data-testid="calculate_relationship" onClick={checkstatus} >Calculate Relationship Future</button><br />
            <button data-testid="clear" onClick={clearinputs} >Clear inputs and relationship status</button>
            <h3 data-testid="answer" >{finalstatus}</h3>
        </div>
    )


}


export default App;
