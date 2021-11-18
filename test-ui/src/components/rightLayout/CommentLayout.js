import React, {Component} from "react";
import Comment from "./Comment";

const CommentLayout = () => {
    const comments = [
        "Text 1",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate ",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo "
    ]
        return (
            <div>
            <h4>Comments: </h4>
            <div className={"comments"}>
                {comments.map((text) => {
                   return <Comment comment={text}/>
                })}
            </div>
                <div className={"newCommentArea"}>
                <textarea name="textarea" style={{width: "80%", height: 60, marginTop:20}} placeholder={"Enter your comment"}/>
                <button className={"button"}> + Comment</button>
                </div>
            </div>
        );
}

export default CommentLayout;