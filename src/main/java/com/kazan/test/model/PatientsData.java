package com.kazan.test.model;

import lombok.*;

import javax.persistence.*;
import java.sql.Date;

@Entity(name = "patients")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PatientsData {
    @Id
    private String uniqueId;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private Date birthDate;
    @Column
    private Boolean sex;
    @Column
    private String country;
    @Column
    private String adress;
    @Column
    private String state;

}
