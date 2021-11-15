import './RightLayout.css'
import React, {Component} from "react";
import CommentLayout from "./CommentLayout";
import {renderIntoDocument} from "react-dom/test-utils";



export default class RightLayout extends Component {
createComment(){
    return(
        <div className={"comments"}> Comments:
            <p className={"textLine"}> Comment</p>
            <p className={"textLine"}> Comment</p>
            <p className={"textLine"}> Comment</p>
            <p className={"textLine"}> Comment</p>
            <p className={"textLine"}> Comment</p>
            <p className={"textLine"}> Comment</p>
            <p className={"textLine"}> Comment</p>


            <input className={"inputLine"} type="text"/>
            <button className={"button"}> +</button>
        </div>
    )
}
    render() {
        return (
            <div className={"right"}>
                <form>
                    <div className={"header"}>
                        <div >First Name== Last name 25 years old</div>
                        <div>
                            <button className={"button"} onClick={() => this.createComment()}>edit</button>
                            <button className={"button"}>delete</button>
                        </div>
                    </div>
                </form>
                <div className={'content-part'} >
                    <div>
                        <p className={"textLine"}>First Name<input className={"inputLine"} type="text"/></p>
                        <p className={"textLine"}>Last Name<input className={"inputLine"} type="text"/></p>
                        <p className={"textLine"}>First Name<input className={"inputLine"} type="text"/></p>
                        <p className={"textLine"}>First Name<input className={"inputLine"} type="text"/></p>
                        <p className={"textLine"}>First Name<input className={"inputLine"} type="text"/></p>
                        <p className={"textLine"}>First Name<input className={"inputLine"} type="text"/></p>
                    </div>
                    <div className={"comments"}> Comments:
                        <p className={"textLine"}> Comment</p>
                        <p className={"textLine"}> Comment</p>
                        <p className={"textLine"}> Comment</p>
                        <p className={"textLine"}> Comment</p>
                        <p className={"textLine"}> Comment</p>
                        <p className={"textLine"}> Comment</p>
                        <p className={"textLine"}> Comment</p>


                        <input className={"inputLine"} type="text"/>
                            <button className={"button"}>  +</button>
                    </div>
                </div>
            </div>
        )
    }
}