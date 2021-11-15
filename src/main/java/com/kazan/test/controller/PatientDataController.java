package com.kazan.test.controller;

import com.kazan.test.model.PatientsData;
import com.kazan.test.repo.patient.PatientDataRepository;
import com.kazan.test.repo.patient.PatientDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("patients/")
@RequiredArgsConstructor
public class PatientDataController {
    private final PatientDataRepository patientDataRepository;
    private final PatientDataService patientDataService;

    @PostMapping("/create")
    public PatientsData addPatient(
            @RequestBody PatientsData patientsData
    ) {
        return patientDataService.addPatientData(patientsData);
    }

    @GetMapping("/get")
    public List<PatientsData> getAllPatients() {
        return patientDataService.selectAllPatient();
    }

   @PostMapping("/edit")
    public PatientsData editPatientData(PatientsData patientsData){
        return patientDataRepository.save(patientsData);
    }



    @GetMapping("/getOne")
    public PatientsData findPatientData(UUID id) {
 //       return patientDataRepository.findPatientsDataByUniqueId(id);
        return null;
    }
}
