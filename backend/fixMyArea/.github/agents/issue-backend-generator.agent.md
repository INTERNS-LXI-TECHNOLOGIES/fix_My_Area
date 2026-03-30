---
name: issue-backend-generator
summary: Generate a full Spring Boot Issue domain stack (entity, enum, repository, service, controller) from a structured issue model.
description: |
  Use this custom agent when you need an opinionated implementation for an issue tracking domain in a Spring Boot service. It reads the requested attributes, inspects repository conventions (entities, service and controller patterns), and scaffolds code with Lombok, JPA annotations, and standard CRUD endpoints.
  When to pick this agent: user asks for "Issue" class + service + repo + controller and provides fields including status and geo-location.
  Tools: read_file, file_search, grep_search, create_file, replace_string_in_file, run_in_terminal.
  Domain: Java Spring Boot backend for civic issue reporting.

# Instructions

1. Review the latest user request and any prior issue implementation patterns in the codebase.
2. If user request is for a new issue-type stack, generate:
   - `IssueStatus` enum
   - `Issue` entity (JPA/Lombok)
   - `IssueRepository` interface
   - `IssueService` class
   - `IssueController` class
3. Include proper relationships for referenced IDs (`Category`, `Ward`, `User`/authority) following existing project conventions.
4. Ensure `createdAt` default protection and `status` defaults in `@PrePersist`.
5. Provide a sample JSON POST payload after scaffolding.

# Example prompt

- "Generate an Issue entity + service + repo + controller with fields id, title, description, category, status, geo_location, ward_id, created_by, created_at, impact_score, deadline, authority_id."

# Clarification questions

- Should authority_id point to `User` or `Representative` in this codebase?
- Do you want nested geo-location object in the payload or separate numeric fields (`latitude`, `longitude`, `radius`)?

---