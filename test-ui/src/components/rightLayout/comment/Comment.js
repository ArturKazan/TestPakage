import React, {Component} from "react";
import "./Comment.css";

const Comment = (props) => {
    return (
        <div className="talkbubble">
            <p style={{alignContent:'center', fontSize:14,marginLeft:10}}>{props.comment.text}</p>
            <p style={{alignContent:'right', fontSize:14,marginLeft:10}}>{props.comment.date.toString()}</p>
        </div>
    )
}
export default Comment;