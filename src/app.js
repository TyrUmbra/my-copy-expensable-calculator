
import {NumberTable, InputResult} from "./components/table-button";
import Header from "./components/header";
// import Date from "./components/fate";
import React from "react";

function App() {

  const [number, setNumber] = React.useState("0");
  
  function handleInputChange(value){
    setNumber(value);
  }
  
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        width: "256px",
        height: "333px",
      }}>
        <Header></Header>
        <div style={{
        width: "256px",
        backgroundColor: "red",
        padding: "0",
      }}>
          <InputResult value={number}></InputResult>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 51.2px)",
            gridTemplateRows: "repeat(4, 50px)",
          }}
        >
          <NumberTable number ={number} onChangeInput={handleInputChange} ></NumberTable>  
        </div>
        <div style={{
          width: "256px",
          height: "31px",
          backgroundColor: "#F3F4F6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* <Date></Date> */}
          <p style={{
            margin:"0",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "12px",
            lineHeight: "16px",
            textAlign: "center",
            color: "#4B5563",
          }}> Saturday December,02, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default App;
