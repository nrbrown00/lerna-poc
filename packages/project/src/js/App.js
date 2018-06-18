import React from "react";
import ReactDOM from "react-dom";
import TextInput from "components/dist/TextInput";

const App = () => {
    return (<div>React time!
        <TextInput />
    </div>);
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));