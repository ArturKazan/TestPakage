package com.kazan.test.repo.patient;

import com.kazan.test.model.Patient;

import java.util.List;

public interface PatientDataService {
   Patient addPatientData(Patient patient);
   List<Patient> selectAllPatient();
   Patient editPatientData(Patient newPatient);

   void removePatient(String patientId);
}
