package com.kazan.test.repo.comment;

import com.kazan.test.model.CommentsData;
import com.kazan.test.model.PatientsData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentDataRepository extends JpaRepository<CommentsData, String> {

    List<CommentsData> findAllByPatientId(String patientId);
}
