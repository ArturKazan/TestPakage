package com.kazan.test.repo.comment;

import com.kazan.test.model.Comment;

import java.util.List;

public interface CommentDataService {
//    List<CommentsData> findAll();
    Comment addComment(Comment comment);
    List<Comment> getCommentsByPatientId(String patientId);


}
