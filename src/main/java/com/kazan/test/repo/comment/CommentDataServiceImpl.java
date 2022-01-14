package com.kazan.test.repo.comment;

import com.kazan.test.model.Comment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CommentDataServiceImpl implements CommentDataService{
    private final CommentDataRepository commentDataRepository;

@Override
@Transactional
public Comment addComment(Comment comment){
    UUID uuid = UUID.randomUUID();
    comment.setCommentId(uuid.toString());
    return commentDataRepository.save(comment);
}

    @Override
    @Transactional
    public List<Comment> getCommentsByPatientId(String patientId){
    return commentDataRepository.findAllByPatientId(patientId);
}
}
