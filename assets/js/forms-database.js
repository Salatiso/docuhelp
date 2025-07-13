/**
 * @file forms-database.js
 * @description Centralized data for all forms available in the DocuHelp ecosystem.
 */

// A comprehensive list of all forms from DocuHelp and partner sites.
export const formsDatabase = [
    // DocuHelp Forms
    { id: 'biz-business-plan', title: 'Business Plan', description: 'Comprehensive template for business planning and strategy.', category: 'business', url: 'business-documents/business-plan.html', source: 'DocuHelp' },
    { id: 'biz-company-policy', title: 'Company Policy', description: 'A standard format for defining internal company policies.', category: 'business', url: 'business-documents/company-policy.html', source: 'DocuHelp' },
    { id: 'biz-employment-contract', title: 'Employment Contract', description: 'A formal agreement outlining the terms of employment.', category: 'business', url: 'business-documents/employment-contract.html', source: 'DocuHelp' },
    { id: 'academic-grant-proposal-template', title: 'Grant Proposal', description: 'A structured template for applying for grants and funding.', category: 'academic', url: 'academic-documents/grant-proposal-template.html', source: 'DocuHelp' },
    { id: 'academic-research-proposal', title: 'Research Proposal', description: 'Outline your research objectives, methodology, and expected outcomes.', category: 'academic', url: 'academic-documents/research-proposal.html', source: 'DocuHelp' },
    { id: 'governance-dna-policy-agreement', title: 'DNA Policy Agreement', description: 'Policy framework for handling genetic data and family lineage.', category: 'governance', url: 'governance/dna-policy-agreement.html', source: 'DocuHelp' },
    { id: 'governance-family-shareholders-agreement', title: 'Family Shareholders Agreement', description: 'Governs the relationship between shareholders in a family business.', category: 'governance', url: 'governance/family-shareholders-agreement.html', source: 'DocuHelp' },
    { id: 'governance-trust-deed-summary', title: 'Trust Deed Summary', description: 'A simplified summary of the key terms of a trust deed.', category: 'governance', url: 'governance/trust-deed-summary.html', source: 'DocuHelp' },
    { id: 'lifesync-chore-reward-contract', title: 'Chore & Reward Contract', description: 'A fun agreement to manage chores and rewards for children.', category: 'personal', url: 'lifesync/chore-reward-contract.html', source: 'DocuHelp' },
    { id: 'lifesync-family-constitution', title: 'Family Constitution', description: 'A foundational document outlining a family\'s values, vision, and governance.', category: 'governance', url: 'lifesync/family-constitution.html', source: 'DocuHelp' },
    { id: 'lifesync-tech-time-agreement', title: 'Tech Time Agreement', description: 'Sets rules and boundaries for technology use within the family.', category: 'personal', url: 'lifesync/tech-time-agreement.html', source: 'DocuHelp' },
    { id: 'personal-cohabitation-agreement', title: 'Cohabitation Agreement', description: 'For partners living together to define property and financial arrangements.', category: 'personal', url: 'personal/cohabitation-agreement.html', source: 'DocuHelp' },
    { id: 'personal-engagement-agreement', title: 'Engagement Agreement', description: 'Sets out terms and agreements for an engaged couple.', category: 'personal', url: 'personal/engagement-agreement.html', source: 'DocuHelp' },
    { id: 'personal-parent-adult-child-agreement', title: 'Parent-Adult Child Agreement', description: 'Formalizes arrangements or loans between parents and their adult children.', category: 'personal', url: 'personal/parent-adult-child-agreement.html', source: 'DocuHelp' },
    { id: 'personal-loan-agreement', title: 'Personal Loan Agreement', description: 'A simple, clear contract for lending money between individuals.', category: 'personal', url: 'personal/personal-loan-agreement.html', source: 'DocuHelp' },
    { id: 'property-proof-of-residence', title: 'Proof of Residence', description: 'A declaration to confirm an individual\'s residential address.', category: 'property', url: 'property/proof-of-residence.html', source: 'DocuHelp' },
    { id: 'property-rental-agreement-family', title: 'Family Rental Agreement', description: 'A lease agreement tailored for renting property to a family member.', category: 'property', url: 'property/rental-agreement-family.html', source: 'DocuHelp' },
    { id: 'property-standard-residential-lease', title: 'Standard Residential Lease', description: 'A standard lease agreement for residential properties.', category: 'property', url: 'property/standard-residential-lease.html', source: 'DocuHelp' },
    { id: 'property-sublet-agreement', title: 'Sublet Agreement', description: 'Contract for a tenant to re-rent their property to another individual.', category: 'property', url: 'property/sublet-agreement.html', source: 'DocuHelp' },
    { id: 'strategic-consulting-proposal', title: 'Consulting Proposal', description: 'Professional proposal for offering consulting services.', category: 'business', url: 'strategic/consulting-proposal.html', source: 'DocuHelp' },
    { id: 'strategic-jv-partnership-agreement', title: 'JV & Partnership Agreement', description: 'Template for establishing joint ventures or business partnerships.', category: 'business', url: 'strategic/jv-partnership-agreement.html', source: 'DocuHelp' },
    { id: 'strategic-padp-template', title: 'Personal/Professional Development Plan', description: 'Structure your goals and development action plans.', category: 'business', url: 'strategic/padp-template.html', source: 'DocuHelp' },
    { id: 'strategic-role-profile-charter', title: 'Role Profile & Charter', description: 'Clearly define roles, responsibilities, and authorities.', category: 'business', url: 'strategic/role-profile-charter.html', source: 'DocuHelp' },

    // SafetyHelp Forms (Featured List)
    { id: 'ohs-policy', title: 'Health and Safety Policy', description: 'Core OHS policy document for any business.', category: 'ohs', url: 'https://safetyfirst.help/pages/ohs-system.html', source: 'SafetyHelp' },
    { id: 'ohs-hira', title: 'HIRA Procedure', description: 'Hazard Identification and Risk Assessment procedure.', category: 'ohs', url: 'https://safetyfirst.help/pages/ohs-system.html', source: 'SafetyHelp' },
    { id: 'ohs-incident', title: 'Incident Management Policy', description: 'Policy for reporting and managing workplace incidents.', category: 'ohs', url: 'https://safetyfirst.help/pages/ohs-system.html', source: 'SafetyHelp' },
    { id: 'ohs-construction', title: 'Construction Health & Safety Plan', description: 'Mandatory safety plan for construction projects.', category: 'ohs', url: 'https://safetyfirst.help/pages/ohs-system.html', source: 'SafetyHelp' },
    { id: 'ohs-emergency', title: 'Emergency Response Plan', description: 'Plan for handling workplace emergencies like fires or injuries.', category: 'ohs', url: 'https://safetyfirst.help/pages/ohs-system.html', source: 'SafetyHelp' },

    // Flamea Forms (Featured List)
    { id: 'flamea-parental-rights', title: 'Parental Rights Affirmation', description: 'Formal letter to affirm your parental rights and responsibilities.', category: 'personal', url: 'https://flamea.org/forms.html', source: 'Flamea' },
    { id: 'flamea-parenting-plan', title: 'Comprehensive Parenting Plan', description: 'A detailed template for co-parents to agree on child-rearing.', category: 'personal', url: 'https://flamea.org/forms.html', source: 'Flamea' },
    { id: 'flamea-mediation', title: 'Mediation Request Letter', description: 'Formally request mediation to resolve a dispute with another party.', category: 'personal', url: 'https://flamea.org/forms.html', source: 'Flamea' },
    { id: 'flamea-saps-complaint', title: 'Affidavit for SAPS Complaint', description: 'A sworn statement for filing a formal complaint against SAPS.', category: 'governance', url: 'https://flamea.org/forms.html', source: 'Flamea' },
    { id: 'flamea-school-letter', title: 'General Letter to School', description: 'A template for formal communication with your child\'s school.', category: 'personal', url: 'https://flamea.org/forms.html', source: 'Flamea' },

    // HRHelp Forms (Featured List)
    { id: 'hr-offer-letter', title: 'Letter of Offer', description: 'Formally offer a position to a successful candidate.', category: 'business', url: 'https://salatiso.com/hrhelp/', source: 'HRHelp' },
    { id: 'hr-pip', title: 'Performance Improvement Plan (PIP)', description: 'A structured plan to help an employee improve their performance.', category: 'business', url: 'https://salatiso.com/hrhelp/', source: 'HRHelp' },
    { id: 'hr-discipline', title: 'Notice for Disciplinary Hearing', description: 'The correct legal notice to give an employee for a hearing.', category: 'business', url: 'https://salatiso.com/hrhelp/', source: 'HRHelp' },
    { id: 'hr-termination', title: 'Notice of Termination', description: 'The final letter to formalize the end of an employment contract.', category: 'business', url: 'https://salatiso.com/hrhelp/', source: 'HRHelp' },
    { id: 'hr-grievance', title: 'Employee Grievance Form', description: 'A form for employees to officially raise a workplace issue.', category: 'business', url: 'https://salatiso.com/hrhelp/', source: 'HRHelp' }
];

// Defines the categories for grouping forms in the UI.
export const formCategories = {
    personal: { name: 'Personal & Family', icon: 'fa-heart' },
    business: { name: 'Business & Professional', icon: 'fa-briefcase' },
    property: { name: 'Property & Tenancy', icon: 'fa-home' },
    governance: { name: 'Governance & Legal', icon: 'fa-gavel' },
    academic: { name: 'Academic & Research', icon: 'fa-graduation-cap' },
    ohs: { name: 'Occupational Health & Safety', icon: 'fa-hard-hat' }
};
