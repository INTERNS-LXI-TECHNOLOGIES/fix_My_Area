package com.diviso.fix_my_area.config;

import com.diviso.fix_my_area.entity.*;
import com.diviso.fix_my_area.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {

    private final AuthorityRepository authorityRepository;
    private final WardRepository wardRepository;
    private final IssueRepository issueRepository;
    private final IssueReactionRepository issueReactionRepository;

    public DataSeeder(AuthorityRepository authorityRepository, WardRepository wardRepository,
                      IssueRepository issueRepository, IssueReactionRepository issueReactionRepository) {
        this.authorityRepository = authorityRepository;
        this.wardRepository = wardRepository;
        this.issueRepository = issueRepository;
        this.issueReactionRepository = issueReactionRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (authorityRepository.count() == 0) {
            Authority auth1 = new Authority(null, "Panchayat Authority");
            Authority auth2 = new Authority(null, "Municipal Corporation");
            Authority auth3 = new Authority(null, "Electricity Board");
            Authority auth4 = new Authority(null, "Water Authority");
            authorityRepository.saveAll(List.of(auth1, auth2, auth3, auth4));

            Ward ward1 = new Ward(null, "Ward 12", "Palakkad");
            Ward ward2 = new Ward(null, "Ward 10", "Palakkad");
            wardRepository.saveAll(List.of(ward1, ward2));

            Issue issue1 = new Issue(null, "Broken Road Near Government School", "Infrastructure", 
                    IssueStatus.VALIDATED, 10.7867, 76.6548, ward1, auth1, LocalDateTime.now().minusHours(2));
            Issue issue2 = new Issue(null, "No Water Supply in Block A", "Water", 
                    IssueStatus.UNDER_REVIEW, 10.7880, 76.6550, ward1, auth4, LocalDateTime.now().minusDays(1));
            Issue issue3 = new Issue(null, "Street Lights Not Working - Main Road", "Electricity", 
                    IssueStatus.APPROVED, 10.7900, 76.6500, ward2, auth3, LocalDateTime.now().minusDays(2));
            issueRepository.saveAll(List.of(issue1, issue2, issue3));

            issueReactionRepository.save(new IssueReaction(null, issue1, 101L, ReactionType.SUPPORT, LocalDateTime.now()));
            issueReactionRepository.save(new IssueReaction(null, issue1, 102L, ReactionType.SUPPORT, LocalDateTime.now()));
            issueReactionRepository.save(new IssueReaction(null, issue1, 103L, ReactionType.CONCERN, LocalDateTime.now()));
            
            issueReactionRepository.save(new IssueReaction(null, issue2, 101L, ReactionType.URGENT, LocalDateTime.now()));
            issueReactionRepository.save(new IssueReaction(null, issue2, 104L, ReactionType.SUPPORT, LocalDateTime.now()));
            
            issueReactionRepository.save(new IssueReaction(null, issue3, 105L, ReactionType.SUPPORT, LocalDateTime.now()));
            
            System.out.println("✅ DATABASE SEEDED SUCCESSFULLY WITH DUMMY DATA!");
        }
    }
}
