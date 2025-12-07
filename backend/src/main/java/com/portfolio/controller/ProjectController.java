package com.portfolio.controller;

import com.portfolio.models.Project;
import com.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    // Create project (Protected — requires JWT)
    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    // Get all projects (Public)
    @GetMapping
    public List<Project> getProjects() {
        return projectService.getAllProjects();
    }

    // Get single project
    @GetMapping("/{id}")
    public Project getProject(@PathVariable String id) {
        return projectService.getProjectById(id);
    }

    // Update project (Protected)
    @PutMapping("/{id}")
    public Project updateProject(@PathVariable String id, @RequestBody Project project) {
        return projectService.updateProject(id, project);
    }

    // Delete project (Protected)
    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable String id) {
        projectService.deleteProject(id);
        return "Deleted";
    }
}
