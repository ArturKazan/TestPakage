package com.kazan.test.model;

import lombok.*;

import javax.persistence.*;
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
    private String patientId;
    @Column
    private String commentText;
    @Column
    private Date commentDate;

}
