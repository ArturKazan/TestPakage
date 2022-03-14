package com.kazan.test.repo.patient;

import com.kazan.test.model.Patient;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class PatientDataServiceImpl implements PatientDataService{
    private final PatientDataRepository patientDataRepository;

    @Override
    @Transactional
    public Patient addPatientData(Patient patient) {
        UUID uuid = UUID.randomUUID();
        patient.setUniqueId(uuid.toString());
        return patientDataRepository.save(patient);
    }


    @Override
    @Transactional
    public List<Patient> selectAllPatient() {
        return patientDataRepository.findAll();

    }

    @Override
    public Patient editPatientData(Patient newPatient) {
        return patientDataRepository.save(newPatient);
    }

    @Override
    public void removePatient(String patientId) {
        patientDataRepository.deleteById(patientId);
    }
}
