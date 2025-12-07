package com.portfolio.service;

import com.portfolio.models.Project;
import java.util.List;

public interface ProjectService {

    Project createProject(Project project);

    List<Project> getAllProjects();

    Project getProjectById(String id);

    Project updateProject(String id, Project project);

    void deleteProject(String id);
}
