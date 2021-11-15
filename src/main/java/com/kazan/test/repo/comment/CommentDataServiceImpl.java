package com.kazan.test.repo.comment;

import com.kazan.test.model.CommentsData;
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
public CommentsData addComment(CommentsData commentsData){
    return commentDataRepository.save(commentsData);
}

    @Override
    @Transactional
    public List<CommentsData> getCommentsByPatientId(String patientId){
    return commentDataRepository.findAllByPatientId(patientId);
}
}
