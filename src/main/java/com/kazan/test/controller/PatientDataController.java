package com.kazan.test.controller;

import com.kazan.test.model.Patient;
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
    private final PatientDataService patientDataService;

    @PostMapping("/create")
    public Patient addPatient(
            @RequestBody Patient patient
    ) {
        return patientDataService.addPatientData(patient);
    }

    @GetMapping("/get")
    public List<Patient> getAllPatients() {
        return patientDataService.selectAllPatient();
    }

   @PostMapping("/edit")
    public Patient editPatientData(Patient patient){
        return patientDataService.editPatientData(patient);
    }
}
