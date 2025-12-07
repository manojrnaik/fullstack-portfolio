package com.portfolio.service.impl;

import com.portfolio.models.Project;
import com.portfolio.repository.ProjectRepository;
import com.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepo;

    @Override
    public Project createProject(Project project) {
        return projectRepo.save(project);
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepo.findAll();
    }

    @Override
    public Project getProjectById(String id) {
        return projectRepo.findById(id).orElse(null);
    }

    @Override
    public Project updateProject(String id, Project newData) {
        Project project = projectRepo.findById(id).orElse(null);

        if (project == null) return null;

        project.setTitle(newData.getTitle());
        project.setDescription(newData.getDescription());
        project.setGithubLink(newData.getGithubLink());
        project.setTechStack(newData.getTechStack());

        return projectRepo.save(project);
    }

    @Override
    public void deleteProject(String id) {
        projectRepo.deleteById(id);
    }
}
