import os
import shutil

BASE_DIR = r"d:\java\springboot\fix_my_area\backend\fix_my_area\src\main\java\com\diviso\fix_my_area"
PACKAGE_NAME = "com.diviso.fix_my_area"

ENUMS = {
    "IssueStatus": ["RAISED", "ACKNOWLEDGED", "IN_PROGRESS", "RESOLVED", "CANCELLED", "FAKE", "DELETED"],
    "VisibilityLevel": ["WARD", "PANCHAYATH", "REGION", "DISTRICT", "STATE"],
    "PriorityLevel": ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
    "AuthorityRole": ["WARD_PRESIDENT", "PANCHAYATH_PRESIDENT", "BLOCK_PANCHAYATH_PRESIDENT", "DISTRICT_PANCHAYATH_PRESIDENT", "MLA", "MP", "MINISTER", "CHIEF_MINISTER", "COLLECTOR", "ADDITIONAL_COLLECTOR", "IPS_OFFICER", "DISTRICT_SP", "CIRCLE_INSPECTOR", "POLICE_INSPECTOR", "SUB_INSPECTOR", "CIVIL_SERVANT", "DISTRICT_MEDICAL_OFFICER", "HEALTH_OFFICER", "REVENUE_OFFICER", "TAHSILDAR", "VILLAGE_OFFICER", "JUDGE", "MAGISTRATE", "MUNICIPAL_COMMISSIONER", "CORPORATION_SECRETARY", "OTHER"],
    "AuthorityType": ["POLITICAL", "NON_POLITICAL"],
    "JurisdictionLevel": ["WARD", "PANCHAYATH", "REGION", "DISTRICT", "STATE", "NATIONAL"],
    "CitizenStatus": ["ACTIVE", "SUSPENDED", "DELETED"],
    "PanchayathType": ["GRAM_PANCHAYATH", "BLOCK_PANCHAYATH", "DISTRICT_PANCHAYATH", "MUNICIPALITY", "CORPORATION"]
}

ENTITIES = {
    "State": [
        "private String name;",
        "private String code;",
        "private Boolean isActive;",
        "private Instant createdAt;"
    ],
    "District": [
        "private String name;",
        "private String code;",
        "private Boolean isActive;",
        "private Instant createdAt;",
        "@ManyToOne\n    private State state;"
    ],
    "Region": [
        "private String name;",
        "private String code;",
        "private Boolean isActive;",
        "private Instant createdAt;",
        "@ManyToOne\n    private District district;"
    ],
    "Panchayath": [
        "private String name;",
        "private String code;",
        "@Enumerated(EnumType.STRING)\n    private PanchayathType panchayathType;",
        "private Boolean isActive;",
        "private Instant createdAt;",
        "@ManyToOne\n    private Region region;"
    ],
    "Ward": [
        "private Integer wardNumber;",
        "private String name;",
        "private Boolean isActive;",
        "private Instant createdAt;",
        "@ManyToOne\n    private Panchayath panchayath;"
    ],
    "Citizen": [
        "private String fullName;",
        "private String phoneNumber;",
        "private String houseNumber;",
        "private String aadhaarNumber;",
        "private String email;",
        "private String profilePhotoUrl;",
        "private Boolean isVerified;",
        "@Enumerated(EnumType.STRING)\n    private CitizenStatus citizenStatus;",
        "private Instant createdAt;",
        "private Instant updatedAt;",
        "@ManyToOne\n    private Ward ward;"
    ],
    "IssueCategory": [
        "private String name;",
        "private String description;",
        "private String iconUrl;",
        "private Boolean isActive;",
        "private Integer displayOrder;",
        "private Instant createdAt;"
    ],
    "Issue": [
        "private String title;",
        "@Lob\n    private String description;",
        "private String photoUrls;",
        "private String videoUrl;",
        "private Double latitude;",
        "private Double longitude;",
        "private String locationDescription;",
        "@Enumerated(EnumType.STRING)\n    private VisibilityLevel visibilityLevel;",
        "@Enumerated(EnumType.STRING)\n    private IssueStatus issueStatus;",
        "@Enumerated(EnumType.STRING)\n    private PriorityLevel priorityLevel;",
        "private Boolean isDeleted;",
        "private Instant createdAt;",
        "private Instant updatedAt;",
        "private Instant resolvedAt;",
        "private LocalDate expectedResolutionDate;",
        "private Integer voteCount;",
        "private Long panchayathId;",
        "private Long regionId;",
        "private Long districtId;",
        "private Long stateId;",
        "private Long assignedAuthorityId;",
        "private Instant assignedAt;",
        "@ManyToOne\n    private Citizen citizen;",
        "@ManyToOne\n    private Ward ward;",
        "@ManyToOne\n    private IssueCategory issueCategory;",
        "@ManyToOne\n    private Authority assignedAuthority;"
    ],
    "IssueStatusHistory": [
        "@Enumerated(EnumType.STRING)\n    private IssueStatus previousStatus;",
        "@Enumerated(EnumType.STRING)\n    private IssueStatus newStatus;",
        "private String remarks;",
        "private Instant changedAt;",
        "@ManyToOne\n    private Issue issue;",
        "@ManyToOne\n    private Authority authority;"
    ],
    "Authority": [
        "private String fullName;",
        "private String phoneNumber;",
        "private String email;",
        "private String profilePhotoUrl;",
        "@Enumerated(EnumType.STRING)\n    private AuthorityRole authorityRole;",
        "@Enumerated(EnumType.STRING)\n    private AuthorityType authorityType;",
        "private String party;",
        "@Enumerated(EnumType.STRING)\n    private JurisdictionLevel jurisdictionLevel;",
        "private Boolean isActive;",
        "private LocalDate termStart;",
        "private LocalDate termEnd;",
        "private Instant createdAt;",
        "private Instant updatedAt;"
    ],
    "AuthorityJurisdiction": [
        "@Enumerated(EnumType.STRING)\n    private JurisdictionLevel jurisdictionLevel;",
        "private Long referenceId;",
        "private String referenceName;",
        "private Boolean isPrimary;",
        "private Instant createdAt;",
        "@ManyToOne\n    private Authority authority;"
    ],
    "IssueComment": [
        "@Lob\n    private String content;",
        "private Boolean isFromAuthority;",
        "private Boolean isDeleted;",
        "private Instant createdAt;",
        "@ManyToOne\n    private Issue issue;",
        "@ManyToOne\n    private Citizen citizen;",
        "@ManyToOne\n    private Authority authority;",
        "@ManyToOne\n    private IssueComment parentComment;"
    ],
    "IssueVote": [
        "private Instant votedAt;",
        "@ManyToOne\n    private Issue issue;",
        "@ManyToOne\n    private Citizen citizen;"
    ]
}

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)

def main():
    # Write Enums
    for enum_name, values in ENUMS.items():
        file_path = os.path.join(BASE_DIR, "enumeration", f"{enum_name}.java")
        content = f"""package {PACKAGE_NAME}.enumeration;

public enum {enum_name} {{
    {", ".join(values)}
}}
"""
        write_file(file_path, content)

    # Write Entities
    for entity_name, fields in ENTITIES.items():
        file_path = os.path.join(BASE_DIR, "entity", f"{entity_name}.java")
        fields_str = "\n    ".join(fields)
        content = f"""package {PACKAGE_NAME}.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.Instant;
import java.time.LocalDate;
import {PACKAGE_NAME}.enumeration.*;

@Entity
@Table(name = "{entity_name.lower()}")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class {entity_name} {{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    {fields_str}
}}
"""
        write_file(file_path, content)

    # Write Repositories
    for entity_name in ENTITIES.keys():
        file_path = os.path.join(BASE_DIR, "repository", f"{entity_name}Repository.java")
        content = f"""package {PACKAGE_NAME}.repository;

import {PACKAGE_NAME}.entity.{entity_name};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface {entity_name}Repository extends JpaRepository<{entity_name}, Long> {{
}}
"""
        write_file(file_path, content)

    # Write Services
    for entity_name in ENTITIES.keys():
        file_path = os.path.join(BASE_DIR, "service", f"{entity_name}Service.java")
        content = f"""package {PACKAGE_NAME}.service;

import {PACKAGE_NAME}.entity.{entity_name};
import {PACKAGE_NAME}.repository.{entity_name}Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class {entity_name}Service {{

    @Autowired
    private {entity_name}Repository repository;

    public List<{entity_name}> findAll() {{
        return repository.findAll();
    }}

    public Optional<{entity_name}> findById(Long id) {{
        return repository.findById(id);
    }}

    public {entity_name} save({entity_name} entity) {{
        return repository.save(entity);
    }}

    public void deleteById(Long id) {{
        repository.deleteById(id);
    }}
}}
"""
        write_file(file_path, content)

    # Write Controllers
    for entity_name in ENTITIES.keys():
        file_path = os.path.join(BASE_DIR, "controller", f"{entity_name}Controller.java")
        param_name = entity_name[0].lower() + entity_name[1:]
        content = f"""package {PACKAGE_NAME}.controller;

import {PACKAGE_NAME}.entity.{entity_name};
import {PACKAGE_NAME}.service.{entity_name}Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/{entity_name.lower()}s")
public class {entity_name}Controller {{

    @Autowired
    private {entity_name}Service service;

    @GetMapping
    public List<{entity_name}> getAll() {{
        return service.findAll();
    }}

    @GetMapping("/{{id}}")
    public ResponseEntity<{entity_name}> getById(@PathVariable Long id) {{
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }}

    @PostMapping
    public {entity_name} create(@RequestBody {entity_name} {param_name}) {{
        return service.save({param_name});
    }}

    @PutMapping("/{{id}}")
    public ResponseEntity<{entity_name}> update(@PathVariable Long id, @RequestBody {entity_name} {param_name}) {{
        return service.findById(id)
                .map(existingObj -> {{
                    {param_name}.setId(id);
                    return ResponseEntity.ok(service.save({param_name}));
                }})
                .orElse(ResponseEntity.notFound().build());
    }}

    @DeleteMapping("/{{id}}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {{
        return service.findById(id)
                .map(existingObj -> {{
                    service.deleteById(id);
                    return ResponseEntity.ok().<Void>build();
                }})
                .orElse(ResponseEntity.notFound().build());
    }}
}}
"""
        write_file(file_path, content)

if __name__ == "__main__":
    main()
