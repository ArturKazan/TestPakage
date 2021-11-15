package com.kazan.test.repo.patient;

import com.kazan.test.model.PatientsData;
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
    public PatientsData addPatientData(PatientsData patientsData) {
        UUID uuid = UUID.randomUUID();
        patientsData.setUniqueId(uuid.toString());
        return patientDataRepository.save(patientsData);
    }


    @Override
    @Transactional
    public List<PatientsData> selectAllPatient() {
        return patientDataRepository.findAll();

    }

    @Override
    @Transactional

    public PatientsData editPatientData(PatientsData uuid, PatientsData editedData) {
        PatientsData prop = findPatientData(uuid);
        prop = patientDataRepository.save(editedData);
        return prop;
    }

    @Override
    @Transactional
    public PatientsData findPatientData(PatientsData uuid) {
        return patientDataRepository.findPatientsDataByUniqueId(uuid);
    }
}
