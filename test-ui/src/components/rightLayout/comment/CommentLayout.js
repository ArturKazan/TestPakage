import React, {Component, useEffect} from "react";
import { useState } from "react/cjs/react.development";
import { createComment, getComments } from "../../api";
import Comment from "./Comment";
import "../RightLayout.css"
const CommentLayout = (props) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [commentCreated, setCommentCreated] = useState(false);
    useEffect(() => {
        if (props.patientId || commentCreated ){
            getComments((data) => {setComments(data.map(comment => {return ({text: comment.commentText, date: comment.commentDate})}))},props.patientId)
            setCommentCreated(false);
        }
    },[props.patientId, commentCreated]);
    const handleAddComment = (event) => {
        const request = {
            patientId: props.patientId,
            commentText: comment,
            commentDate: Date.now()
        }
        createComment((data) => alert(data.commentText),request)
        setComment("")
        setCommentCreated(true);
        }
        return (
            <div>
            <h4>Comments: </h4>
            <div className={"comments"} style={{width:800}}>
                {comments.sort().map((comment) => {
                   return <Comment comment={comment}/>
                })}
            </div>
                <div className={"newCommentArea"}>
                <textarea value= {comment}  onChange={(event) => {
                                event.preventDefault();
                                setComment(event.target.value)
                            }} name="textarea" style={{width: "80%", height: 60, marginTop:20}} placeholder={"Enter your comment"}/>
                <button className={"button"} onClick={(event) => handleAddComment(event)} > + Comment</button>
                </div>
            </div>
        );
}

export default CommentLayout;