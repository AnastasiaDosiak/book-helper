import React, {memo} from "react";
import InputSelect from "../Form/Form";
import Instructions from "../Instructions/Instructions";
import "./App.scss";

const App: React.FC = () => {
    return (
        <div className="App">
            <Instructions/>
            <InputSelect/>
        </div>
    );
}

export default memo(App);
