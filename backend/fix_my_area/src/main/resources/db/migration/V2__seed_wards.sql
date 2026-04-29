INSERT INTO authority (name) VALUES 
('Panchayat Authority'),
('Municipal Corporation'),
('Electricity Board'),
('Water Authority');

INSERT INTO ward (name, city) VALUES 
('Ward 12', 'Palakkad'),
('Ward 10', 'Palakkad');

INSERT INTO issue (title, category, status, lat, lng, ward_id, authority_id, created_at) VALUES 
('Broken Road Near Government School', 'Infrastructure', 'VALIDATED', 10.7867, 76.6548, 1, 1, DATE_SUB(NOW(), INTERVAL 2 HOUR)),
('No Water Supply in Block A', 'Water', 'UNDER_REVIEW', 10.7880, 76.6550, 1, 4, DATE_SUB(NOW(), INTERVAL 1 DAY)),
('Street Lights Not Working - Main Road', 'Electricity', 'APPROVED', 10.7900, 76.6500, 2, 3, DATE_SUB(NOW(), INTERVAL 2 DAY));

INSERT INTO issue_reaction (issue_id, user_id, type) VALUES 
(1, 101, 'SUPPORT'),
(1, 102, 'SUPPORT'),
(1, 103, 'CONCERN'),
(2, 101, 'URGENT'),
(2, 104, 'SUPPORT'),
(3, 105, 'SUPPORT');
