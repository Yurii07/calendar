import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./components/calendar/calendar";

const style = {
    position: "relative",
    margin: "50px auto"
};

function App (){
    return(
        <div className="App">
            <Calendar style={style} width="302px" />
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);