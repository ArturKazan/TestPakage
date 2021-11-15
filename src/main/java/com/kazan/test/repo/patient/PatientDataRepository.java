package com.kazan.test.repo.patient;
//Repository that will work with our database
import com.kazan.test.model.PatientsData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientDataRepository extends JpaRepository <PatientsData, String> {

    PatientsData findPatientsDataByUniqueId(PatientsData uniqueId);

    List<PatientsData> findAll();

}
