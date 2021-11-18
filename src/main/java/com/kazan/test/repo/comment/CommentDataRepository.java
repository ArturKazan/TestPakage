package com.kazan.test.repo.comment;

import com.kazan.test.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentDataRepository extends JpaRepository<Comment, String> {

    List<Comment> findAllByPatientId(String patientId);
}
