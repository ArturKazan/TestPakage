import './App.css';
import LeftLayout from "./components/leftLayout/LeftLayout";
import RightLayout from "./components/rightLayout/RightLayout";

function App() {

    return (
        <div className={"App"}>
            <div style={{ "overflow-y": "scroll"}}>
                <LeftLayout/>
            </div>
            <div className={'right-part'} >
                <RightLayout/>
            </div>
        </div>

    );
}

export default App;
