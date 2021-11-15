package com.kazan.test.repo.patient;

import com.kazan.test.model.PatientsData;

import java.util.List;
import java.util.UUID;

public interface PatientDataService {
   PatientsData addPatientData(PatientsData patientsData);
   List<PatientsData> selectAllPatient();
   PatientsData editPatientData(PatientsData uuid, PatientsData editedData);


   PatientsData findPatientData(PatientsData uniqueId);
}
