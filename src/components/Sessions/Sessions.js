// import { Link } from "react-router-dom";
import SessionsItem from "./SessionsItem/SessionsItem";
import './Sessions.scss';
import Navbar from "../Navbar/Navbar";
import { sessions } from "../../data/sessions";

const Sessions = () => {
    const output = () => {
        return sessions
    }
    console.log(output())
    return (<div className="Sessions">
        <div className="container">
            <Navbar />
            <h1 className="mt-5">Today</h1>
            {output}
        </div>
    </div>);
}

export default Sessions;