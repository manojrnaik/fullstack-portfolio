package com.portfolio.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "projects")
public class Project {

    @Id
    private String id;

    private String title;
    private String description;
    private String githubLink;
    private String techStack;

    public Project() {}

    public Project(String title, String description, String githubLink, String techStack) {
        this.title = title;
        this.description = description;
        this.githubLink = githubLink;
        this.techStack = techStack;
    }

    // Getters & Setters ...
}
