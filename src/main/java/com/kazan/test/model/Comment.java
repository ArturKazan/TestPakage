package com.kazan.test.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity(name = "comments")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Comment {
    @Id
    private String commentId;

    @Column
    @NotNull
    private String patientId;

    @Column
    @NotNull
    private String commentText;

    @Column( columnDefinition="DATE")
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date commentDate;

}
