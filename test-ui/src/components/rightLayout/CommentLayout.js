import React, {Component} from "react";

export default class CommentLayout{
render() {
        return (
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
        );
}

}
