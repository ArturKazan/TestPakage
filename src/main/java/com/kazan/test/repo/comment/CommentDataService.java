package com.kazan.test.repo.comment;

import com.kazan.test.model.CommentsData;

import java.util.List;
import java.util.UUID;

public interface CommentDataService {
//    List<CommentsData> findAll();
    CommentsData addComment(CommentsData commentsData);
    List<CommentsData> getCommentsByPatientId(String patientId);


}
