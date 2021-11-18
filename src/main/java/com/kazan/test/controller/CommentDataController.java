package com.kazan.test.controller;

import com.kazan.test.model.Comment;
import com.kazan.test.repo.comment.CommentDataService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("comments/")
@RequiredArgsConstructor
public class CommentDataController {

  private final CommentDataService commentDataService;

    @GetMapping("/get/{patientId}")
    public List<Comment> createcomment(@PathVariable("patientId") String patientId){
      return commentDataService.getCommentsByPatientId(patientId);
    }

  @PostMapping("/create")
  public Comment addComment(
      @RequestBody Comment comment
  ) {
    return commentDataService.addComment(comment);
  }
}
