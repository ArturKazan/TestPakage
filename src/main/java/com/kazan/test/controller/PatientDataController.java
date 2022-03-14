package com.kazan.test.controller;

import com.kazan.test.model.Patient;
import com.kazan.test.repo.patient.PatientDataService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
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
    public Patient editPatientData(
            @RequestBody Patient patient){
        return patientDataService.editPatientData(patient);
    }

    @GetMapping("/delete/{patientId}")
    public ResponseEntity deletePatient(
            @PathVariable String patientId
    ) {
        patientDataService.removePatient(patientId);
        return ResponseEntity.of(Optional.of(patientId));
    }
}
