package com.kazan.test.repo.patient;

import com.kazan.test.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientDataRepository extends JpaRepository <Patient, String> {

    Patient findPatientsDataByUniqueId(Patient uniqueId);

    List<Patient> findAll();

}
