/**
 * The Cybersecurity Trade Project - Interactive Portal Engine
 * Features:
 * 1. Automatic Glossary Term Parsing & Floating Tooltip Cards.
 * 2. Active Sidebar Navigation Tracking.
 */

(function () {
  "use strict";

  const GLOSSARY_TERMS = {
    "18-Month Curriculum Notice Rule": {
      title: "18-Month Curriculum Notice Rule",
      category: "Labor & Governance",
      def: "A statutory governance constraint requiring the National Board to provide an 18-month lead time before changing practical examination requirements, preventing curriculum disruption for active JATC apprentice cohorts.",
      citation: "Trade Framework Glossary"
    },
    "72-Hour Internal Remediation Rule": {
      title: "72-Hour Internal Remediation Rule",
      category: "Labor & Governance",
      def: "A mandatory corporate cure period requiring a reporting practitioner to log an internal Form FORM-003 Exception Flag and provide a 72-hour internal remediation window before claiming external whistleblower recovery bounties, preventing malicious compliance traps over routine timing anomalies.",
      citation: "Trade Framework Glossary"
    },
    "Actuarial Attestation Feed": {
      title: "Actuarial Attestation Feed",
      category: "Labor & Governance",
      def: "A zero-knowledge cryptographic API feed enabling sponsoring employers to securely transmit verified operational labor ratios, active MoR presence, and supervised runtime metrics to cyber liability underwriters without exposing proprietary network architecture, logs, or employee identities.",
      citation: "Trade Framework Glossary"
    },
    "AMF (Annual Maintenance Fee)": {
      title: "Annual Maintenance Fee (AMF)",
      category: "Labor & Governance",
      def: "Recurring commercial certification vendor subscription fees charged annually to maintain credential designations, strictly prohibited from trade licensure renewals.",
      citation: "Pillar IV / Anti-Credentialism"
    },
    "AMF": {
      title: "Annual Maintenance Fee (AMF)",
      category: "Labor & Governance",
      def: "Recurring commercial certification vendor subscription fees charged annually to maintain credential designations, strictly prohibited from trade licensure renewals.",
      citation: "Pillar IV / Anti-Credentialism"
    },
    "Annual Maintenance Fee": {
      title: "Annual Maintenance Fee (AMF)",
      category: "Labor & Governance",
      def: "Recurring commercial certification vendor subscription fees charged annually to maintain credential designations, strictly prohibited from trade licensure renewals.",
      citation: "Pillar IV / Anti-Credentialism"
    },
    "Anti-Hostage Logbook Safe Harbor": {
      title: "Anti-Hostage Logbook Safe Harbor",
      category: "Labor & Governance",
      def: "A statutory protection establishing that Universal Logbooks are the personal property of the individual practitioner, legally barring employers from withholding hour sign-offs, demanding non-disparagement waivers, or asserting NDA/trade-secret claims against sanitized logbook exports.",
      citation: "Trade Framework Glossary"
    },
    "Apprentice": {
      title: "Apprentice",
      category: "Labor & Governance",
      def: "An entry-level practitioner engaged in a formal, paid, zero-tuition training program combining on-the-job operational hours (80%) with structured, paid classroom instruction (20%).",
      citation: "Pillar II & Pillar III"
    },
    "Apprentice Advocate Delegate": {
      title: "Apprentice Advocate Delegate",
      category: "Labor & Governance",
      def: "A non-voting advisory delegate elected directly by registered apprentices with statutory standing to attend Board proceedings, report supervisory ratio violations, and represent trainee welfare before the National Board.",
      citation: "Trade Framework Glossary"
    },
    "Basic Membership Dues": {
      title: "Basic Membership Dues",
      category: "Labor & Governance",
      def: "A flat monthly fee ($35/month for Journeymen/Masters, $15/month for Apprentices) maintaining active Guild standing, voting rights, legal defense retainer coverage, and portable disability/death benefit funds.",
      citation: "Trade Framework Glossary"
    },
    "Blind Ombudsperson Institutional Proxy": {
      title: "Blind Ombudsperson Institutional Proxy",
      category: "Labor & Governance",
      def: "A statutory privilege enabling the Guild Ombudsperson to receive confidential disclosures and formally prosecute complaints under institutional standing, permanently sealing the victim's identity from public dockets.",
      citation: "Trade Framework Glossary"
    },
    "Board (National Cybersecurity Trade Board)": {
      title: "National Cybersecurity Trade Board",
      category: "Labor & Governance",
      def: "An independent, multilateral 11-member regulatory body responsible for public safety, competency standards, practical challenge exams, and professional licensing, strictly separated from labor unions and individual employers.",
      citation: "Trade Framework Glossary"
    },
    "Board": {
      title: "National Cybersecurity Trade Board",
      category: "Labor & Governance",
      def: "An independent, multilateral 11-member regulatory body responsible for public safety, competency standards, practical challenge exams, and professional licensing, strictly separated from labor unions and individual employers.",
      citation: "Trade Framework Glossary"
    },
    "National Cybersecurity Trade Board": {
      title: "National Cybersecurity Trade Board",
      category: "Labor & Governance",
      def: "An independent, multilateral 11-member regulatory body responsible for public safety, competency standards, practical challenge exams, and professional licensing, strictly separated from labor unions and individual employers.",
      citation: "Trade Framework Glossary"
    },
    "NCTB (National Cybersecurity Trade Board)": {
      title: "National Cybersecurity Trade Board (NCTB)",
      category: "Labor & Governance",
      def: "The independent, vendor-neutral standard-setting and regulatory licensure authority for the cybersecurity trade.",
      citation: "Trade Framework Glossary"
    },
    "NCTB": {
      title: "National Cybersecurity Trade Board (NCTB)",
      category: "Labor & Governance",
      def: "The independent, vendor-neutral standard-setting and regulatory licensure authority for the cybersecurity trade.",
      citation: "Trade Framework Glossary"
    },
    "Board Practical Challenge Examiner": {
      title: "Board Practical Challenge Examiner",
      category: "Labor & Governance",
      def: "A certified Master Practitioner appointed and accredited by the National Board to administer and score objective, air-gapped challenge exams under strict psychometric rubrics and conflict-of-interest rules.",
      citation: "Trade Framework Glossary"
    },
    "Career Runtime": {
      title: "Career Runtime",
      category: "Labor & Governance",
      def: "Total verified hands-on operational hours logged in active defensive, administrative, engineering, or incident triage roles, distinct from passive classroom or theoretical study.",
      citation: "Pillar III & Logbook Standards"
    },
    "Candidate Trade Integrity Agreement": {
      title: "Candidate Trade Integrity Agreement",
      category: "Labor & Governance",
      def: "A legally binding ethical code executed by pre-apprentices and practical challenge candidates prohibiting cheating, exam braindump usage, discriminatory harassment, and range sabotage under penalty of clearinghouse debarment.",
      citation: "Trade Framework Glossary"
    },
    "Condition-Bounded Safe Harbor": {
      title: "Condition-Bounded Safe Harbor",
      category: "Labor & Governance",
      def: "The legal indemnification granted under Form FORM-002 that remains valid strictly while enumerated operational assumptions and compensating controls remain active, expiring immediately upon material architectural changes.",
      citation: "Trade Framework Glossary"
    },
    "CCG (Cybersecurity Craft Guild)": {
      title: "Cybersecurity Craft Guild (CCG)",
      category: "Labor & Governance",
      def: "The national workforce representation body and labor trust administering JATC training funds, collective legal defense, and portable multi-employer benefits for trade practitioners.",
      citation: "Trade Framework Glossary"
    },
    "CCG": {
      title: "Cybersecurity Craft Guild (CCG)",
      category: "Labor & Governance",
      def: "The national workforce representation body and labor trust administering JATC training funds, collective legal defense, and portable multi-employer benefits for trade practitioners.",
      citation: "Trade Framework Glossary"
    },
    "Craft Guild (Cybersecurity Craft Guild)": {
      title: "Cybersecurity Craft Guild",
      category: "Labor & Governance",
      def: "A professional association and labor trust focused on workforce training, JATC administration, legal defense, portable benefits, and collective representation, distinct from industrial factory-floor unions.",
      citation: "Trade Framework Glossary"
    },
    "Craft Guild": {
      title: "Cybersecurity Craft Guild",
      category: "Labor & Governance",
      def: "A professional association and labor trust focused on workforce training, JATC administration, legal defense, portable benefits, and collective representation, distinct from industrial factory-floor unions.",
      citation: "Trade Framework Glossary"
    },
    "Cybersecurity Craft Guild": {
      title: "Cybersecurity Craft Guild",
      category: "Labor & Governance",
      def: "A professional association and labor trust focused on workforce training, JATC administration, legal defense, portable benefits, and collective representation, distinct from industrial factory-floor unions.",
      citation: "Trade Framework Glossary"
    },
    "Credential Evaluation Clearinghouse": {
      title: "Credential Evaluation Clearinghouse",
      category: "Labor & Governance",
      def: "A statutory Board entity that audits commercial and academic certifications against open standards (NIST NICE) to award legitimate trade credits while filtering out low-rigor multiple-choice brain dumps.",
      citation: "Trade Framework Glossary"
    },
    "CUAAC (Cyber Underwriting & Actuarial Advisory Consortium)": {
      title: "Cyber Underwriting & Actuarial Advisory Consortium (CUAAC)",
      category: "Labor & Governance",
      def: "The standing risk capital consortium of primary cyber insurance carriers and global reinsurers responsible for harmonizing policy warranty schedules, validating actuarial telemetry, and designating Board insurance trustees.",
      citation: "Pillar VII"
    },
    "CUAAC": {
      title: "Cyber Underwriting & Actuarial Advisory Consortium (CUAAC)",
      category: "Labor & Governance",
      def: "The standing risk capital consortium of primary cyber insurance carriers and global reinsurers responsible for harmonizing policy warranty schedules, validating actuarial telemetry, and designating Board insurance trustees.",
      citation: "Pillar VII"
    },
    "Cyber Underwriting & Actuarial Advisory Consortium": {
      title: "Cyber Underwriting & Actuarial Advisory Consortium (CUAAC)",
      category: "Labor & Governance",
      def: "The standing risk capital consortium of primary cyber insurance carriers and global reinsurers responsible for harmonizing policy warranty schedules, validating actuarial telemetry, and designating Board insurance trustees.",
      citation: "Pillar VII"
    },
    "Cyber Civil Defense Reserve (CCDR)": {
      title: "Cyber Civil Defense Reserve (CCDR)",
      category: "Labor & Governance",
      def: "A counter-cyclical public workforce transition mechanism deploying unabsorbed apprentices and pre-apprentices during macroeconomic downturns to protect under-resourced public critical infrastructure (municipalities, school districts, rural hospitals) funded via state/federal workforce resilience grants (WIOA / CISA).",
      citation: "Governance / Guild Charter"
    },
    "CCDR": {
      title: "Cyber Civil Defense Reserve (CCDR)",
      category: "Labor & Governance",
      def: "A counter-cyclical public workforce transition mechanism deploying unabsorbed apprentices and pre-apprentices during macroeconomic downturns to protect under-resourced public critical infrastructure (municipalities, school districts, rural hospitals) funded via state/federal workforce resilience grants (WIOA / CISA).",
      citation: "Governance / Guild Charter"
    },
    "Cyber Civil Defense Reserve": {
      title: "Cyber Civil Defense Reserve (CCDR)",
      category: "Labor & Governance",
      def: "A counter-cyclical public workforce transition mechanism deploying unabsorbed apprentices and pre-apprentices during macroeconomic downturns to protect under-resourced public critical infrastructure (municipalities, school districts, rural hospitals) funded via state/federal workforce resilience grants (WIOA / CISA).",
      citation: "Governance / Guild Charter"
    },
    "Dual-Layer Liability Architecture": {
      title: "Dual-Layer Liability Architecture",
      category: "Labor & Governance",
      def: "The legal framework where enterprise policies absorb corporate breach losses and business interruption, while individual Errors & Omissions (E&O) / malpractice defense protects practitioners during disciplinary inquiries and guarantees safe harbor for good-faith engineering.",
      citation: "Trade Framework Glossary"
    },
    "Emergency Apprentice Transfer Protocol": {
      title: "Emergency Apprentice Transfer Protocol",
      category: "Labor & Governance",
      def: "A mandatory JATC mechanism requiring the immediate reassignment of an apprentice's indenture to a new compliant employer sponsor within 14 calendar days if the apprentice experiences harassment, discrimination, or supervisory retaliation.",
      citation: "Trade Framework Glossary"
    },
    "EORA (Executive Override & Risk Acceptance)": {
      title: "Executive Override & Risk Acceptance (EORA)",
      category: "Labor & Governance",
      def: "Form FORM-002 executed by a corporate officer to overrule a Master of Record's technical refusal, assuming full statutory, civil, and regulatory liability for the deployment.",
      citation: "Trade Framework Glossary"
    },
    "EORA": {
      title: "Executive Override & Risk Acceptance (EORA)",
      category: "Labor & Governance",
      def: "Form FORM-002 executed by a corporate officer to overrule a Master of Record's technical refusal, assuming full statutory, civil, and regulatory liability for the deployment.",
      citation: "Trade Framework Glossary"
    },
    "Fallback Statutory Mandate Bridge": {
      title: "Fallback Statutory Mandate Bridge",
      category: "Labor & Governance",
      def: "An automated regulatory transition mechanism shifting trade enforcement from private cyber insurance underwriting into mandatory federal procurement (FAR/DFARS), state utility commission (PUC) covenants, and CISA grant conditions if private insurance syndicate capacity contracts.",
      citation: "Pillar VII & Transition Plan"
    },
    "Federal Fiduciary Surety Bonding": {
      title: "Federal Fiduciary Surety Bonding",
      category: "Labor & Governance",
      def: "Mandatory commercial bonding (under ERISA Section 412 and LMRDA Section 502) legally required for all officers handling funds to protect multi-employer benefit trusts and member dues from fraud or mismanagement.",
      citation: "Trade Framework Glossary"
    },
    "Final-Offer Interest Arbitration (FOIA)": {
      title: "Final-Offer Interest Arbitration (FOIA)",
      category: "Labor & Governance",
      def: "A compulsory, binding tripartite arbitration protocol for resolving collective bargaining deadlocks at Tier-I Critical Infrastructure facilities within 14 calendar days, selecting the most reasonable total contract offer with zero operational stoppage.",
      citation: "Governance / Guild Charter"
    },
    "FOIA": {
      title: "Final-Offer Interest Arbitration (FOIA)",
      category: "Labor & Governance",
      def: "A compulsory, binding tripartite arbitration protocol for resolving collective bargaining deadlocks at Tier-I Critical Infrastructure facilities within 14 calendar days, selecting the most reasonable total contract offer with zero operational stoppage.",
      citation: "Governance / Guild Charter"
    },
    "Final-Offer Interest Arbitration": {
      title: "Final-Offer Interest Arbitration (FOIA)",
      category: "Labor & Governance",
      def: "A compulsory, binding tripartite arbitration protocol for resolving collective bargaining deadlocks at Tier-I Critical Infrastructure facilities within 14 calendar days, selecting the most reasonable total contract offer with zero operational stoppage.",
      citation: "Governance / Guild Charter"
    },
    "Forensic Trauma & Graphic Material Rotational Respite": {
      title: "Forensic Trauma & Graphic Material Rotational Respite",
      category: "Labor & Governance",
      def: "The unconditional right of a practitioner handling forensic investigations of Child Sexual Abuse Material (CSAM), violent extremism, or acute extortion triage to receive temporary rotational transfer to non-trauma domains with zero reduction in base wages or apprentice wage-step progress.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-004 (Ethics & Conduct Incident Report)": {
      title: "Ethics & Conduct Incident Report (Form FORM-004)",
      category: "Labor & Governance",
      def: "The standardized, verifiable instrument used by trade practitioners and candidates to report discrimination, harassment, logbook fraud, academic dishonesty, or supervisory retaliation.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-004": {
      title: "Ethics & Conduct Incident Report (Form FORM-004)",
      category: "Labor & Governance",
      def: "The standardized, verifiable instrument used by trade practitioners and candidates to report discrimination, harassment, logbook fraud, academic dishonesty, or supervisory retaliation.",
      citation: "Trade Framework Glossary"
    },
    "Ethics & Conduct Incident Report": {
      title: "Ethics & Conduct Incident Report (Form FORM-004)",
      category: "Labor & Governance",
      def: "The standardized, verifiable instrument used by trade practitioners and candidates to report discrimination, harassment, logbook fraud, academic dishonesty, or supervisory retaliation.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-005 (Targeted OSS Security Fork Exemption)": {
      title: "Targeted OSS Security Fork Exemption (Form FORM-005)",
      category: "Labor & Governance",
      def: "The standardized procedural instrument executed by a Master of Record certifying an internal security fork and active runtime compensating controls for an unpatched upstream open-source dependency, granting an extended 90-day compliant deployment grace period.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-005": {
      title: "Targeted OSS Security Fork Exemption (Form FORM-005)",
      category: "Labor & Governance",
      def: "The standardized procedural instrument executed by a Master of Record certifying an internal security fork and active runtime compensating controls for an unpatched upstream open-source dependency, granting an extended 90-day compliant deployment grace period.",
      citation: "Trade Framework Glossary"
    },
    "Targeted OSS Security Fork Exemption": {
      title: "Targeted OSS Security Fork Exemption (Form FORM-005)",
      category: "Labor & Governance",
      def: "The standardized procedural instrument executed by a Master of Record certifying an internal security fork and active runtime compensating controls for an unpatched upstream open-source dependency, granting an extended 90-day compliant deployment grace period.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-006 (Multi-Employer Joint Apprenticeship & Training Trust Agreement)": {
      title: "JATC Trust Agreement (Form FORM-006)",
      category: "Labor & Governance",
      def: "The model legal instrument under Taft-Hartley Section 302(c) and ERISA creating bipartite parity governance between the Craft Guild and Participating Employer Council to fund tuition-free apprenticeship instruction.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-006": {
      title: "JATC Trust Agreement (Form FORM-006)",
      category: "Labor & Governance",
      def: "The model legal instrument under Taft-Hartley Section 302(c) and ERISA creating bipartite parity governance between the Craft Guild and Participating Employer Council to fund tuition-free apprenticeship instruction.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-007 (Sponsoring Employer Participation Agreement)": {
      title: "Employer Participation Agreement (Form FORM-007)",
      category: "Labor & Governance",
      def: "The standard binding contract executed by Participating Employer Council members committing to mandatory 2:1 on-shift supervisory ratios, hourly training trust remittances, and the 4-tier wage step schedule.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-007": {
      title: "Employer Participation Agreement (Form FORM-007)",
      category: "Labor & Governance",
      def: "The standard binding contract executed by Participating Employer Council members committing to mandatory 2:1 on-shift supervisory ratios, hourly training trust remittances, and the 4-tier wage step schedule.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-008 (Autonomous AI System Deployment & Tool Execution Clearance)": {
      title: "AI Agent Clearance (Form FORM-008)",
      category: "Labor & Governance",
      def: "The standardized procedural instrument executed by an active Master of Record certifying that an enterprise autonomous AI system, agentic tool permissions, semantic guardrails, and fail-safe kill switches satisfy NIST AI RMF baselines.",
      citation: "Trade Framework Glossary"
    },
    "Form FORM-008": {
      title: "AI Agent Clearance (Form FORM-008)",
      category: "Labor & Governance",
      def: "The standardized procedural instrument executed by an active Master of Record certifying that an enterprise autonomous AI system, agentic tool permissions, semantic guardrails, and fail-safe kill switches satisfy NIST AI RMF baselines.",
      citation: "Trade Framework Glossary"
    },
    "Fractional Master of Record (vMoR)": {
      title: "Fractional Master of Record (vMoR)",
      category: "Labor & Governance",
      def: "An accredited Master Practitioner retained by small-to-medium businesses (SMBs) through a Licensed Trade Contractor to inspect architectures, audit telemetry, and execute statutory compliance filings without requiring full-time in-house executive payroll.",
      citation: "Trade Framework Glossary"
    },
    "vMoR": {
      title: "Fractional Master of Record (vMoR)",
      category: "Labor & Governance",
      def: "An accredited Master Practitioner retained by small-to-medium businesses (SMBs) through a Licensed Trade Contractor to inspect architectures, audit telemetry, and execute statutory compliance filings without requiring full-time in-house executive payroll.",
      citation: "Trade Framework Glossary"
    },
    "Fractional Master of Record": {
      title: "Fractional Master of Record (vMoR)",
      category: "Labor & Governance",
      def: "An accredited Master Practitioner retained by small-to-medium businesses (SMBs) through a Licensed Trade Contractor to inspect architectures, audit telemetry, and execute statutory compliance filings without requiring full-time in-house executive payroll.",
      citation: "Trade Framework Glossary"
    },
    "Ghost-Staffing (Contractor Malpractice)": {
      title: "Contractor Malpractice (Ghost-Staffing)",
      category: "Labor & Governance",
      def: "The fraudulent practice where a contractor or MSSP bids certified trade staffing ratios but fulfills operational shifts with uncredited, unindentured, or unvetted labor, classified as Tier 3 Professional Fraud.",
      citation: "Trade Framework Glossary"
    },
    "Ghost-Staffing": {
      title: "Contractor Malpractice (Ghost-Staffing)",
      category: "Labor & Governance",
      def: "The fraudulent practice where a contractor or MSSP bids certified trade staffing ratios but fulfills operational shifts with uncredited, unindentured, or unvetted labor, classified as Tier 3 Professional Fraud.",
      citation: "Trade Framework Glossary"
    },
    "Contractor Malpractice": {
      title: "Contractor Malpractice (Ghost-Staffing)",
      category: "Labor & Governance",
      def: "The fraudulent practice where a contractor or MSSP bids certified trade staffing ratios but fulfills operational shifts with uncredited, unindentured, or unvetted labor, classified as Tier 3 Professional Fraud.",
      citation: "Trade Framework Glossary"
    },
    "Guild Member Welfare & Civil Rights Committee": {
      title: "Guild Member Welfare & Civil Rights Committee",
      category: "Labor & Governance",
      def: "The standing Guild body composed of the Ombudsperson, Journeymen, and Apprentice Delegates charged with investigating workplace civil rights complaints, mediating grievances, and authorizing emergency transfers.",
      citation: "Trade Framework Glossary"
    },
    "Guild Ombudsperson (Office of the Guild Ombudsperson)": {
      title: "Office of the Guild Ombudsperson",
      category: "Labor & Governance",
      def: "An independently elected constitutional officer of the Craft Guild responsible for protecting member civil rights, adjudicating confidential grievances, exercising Blind Proxy standing, and overseeing the 12-month post-resolution anti-retaliation monitoring docket.",
      citation: "Trade Framework Glossary"
    },
    "Guild Ombudsperson": {
      title: "Office of the Guild Ombudsperson",
      category: "Labor & Governance",
      def: "An independently elected constitutional officer of the Craft Guild responsible for protecting member civil rights, adjudicating confidential grievances, exercising Blind Proxy standing, and overseeing the 12-month post-resolution anti-retaliation monitoring docket.",
      citation: "Trade Framework Glossary"
    },
    "Office of the Guild Ombudsperson": {
      title: "Office of the Guild Ombudsperson",
      category: "Labor & Governance",
      def: "An independently elected constitutional officer of the Craft Guild responsible for protecting member civil rights, adjudicating confidential grievances, exercising Blind Proxy standing, and overseeing the 12-month post-resolution anti-retaliation monitoring docket.",
      citation: "Trade Framework Glossary"
    },
    "Hardware-Enforced Cryptographic Pulse": {
      title: "Hardware-Enforced Cryptographic Pulse",
      category: "Labor & Governance",
      def: "A physical FIDO2/WebAuthn user presence requirement (capacitive touch) contextually bound to privileged execution events, preventing LLM bots or synthetic scripts from faking passive operational presence in logbook telemetry.",
      citation: "Universal Logbook Schema"
    },
    "Health Hour-Bank Trust": {
      title: "Health Hour-Bank Trust",
      category: "Labor & Governance",
      def: "A multi-employer healthcare trust where employer hourly contributions accumulate in a personal hour-bank reserve (up to 6 months), maintaining full family medical, dental, and vision coverage during layoffs, contract transitions, or leave without COBRA.",
      citation: "Trade Framework Glossary"
    },
    "Interim Founding Steering Committee": {
      title: "Interim Founding Steering Committee",
      category: "Labor & Governance",
      def: "The provisional 5-to-7 member organizing body responsible for incorporating non-profit trade entities, establishing initial exam rubrics, and registering DOL apprenticeship standards, governed by a mandatory 24-month sunset clause.",
      citation: "Trade Framework Glossary"
    },
    "Interim Protective Order": {
      title: "Interim Protective Order",
      category: "Labor & Governance",
      def: "A mandatory administrative safe-harbor directive issued during active ethics investigations establishing an immediate supervisory firewall, reassignment of evaluation authority, and mutual no-contact enforcement.",
      citation: "Trade Framework Glossary"
    },
    "JATC (Joint Apprenticeship and Training Committee)": {
      title: "Joint Apprenticeship and Training Committee (JATC)",
      category: "Labor & Governance",
      def: "A joint labor-management committee operating under Taft-Hartley trust rules that funds training facilities, pays instructors, and administers Related Technical Instruction (RTI).",
      citation: "Pillar VI / 29 CFR Part 29"
    },
    "JATC": {
      title: "Joint Apprenticeship and Training Committee (JATC)",
      category: "Labor & Governance",
      def: "A joint labor-management committee operating under Taft-Hartley trust rules that funds training facilities, pays instructors, and administers Related Technical Instruction (RTI).",
      citation: "Pillar VI / 29 CFR Part 29"
    },
    "Joint Apprenticeship and Training Committee": {
      title: "Joint Apprenticeship and Training Committee (JATC)",
      category: "Labor & Governance",
      def: "A joint labor-management committee operating under Taft-Hartley trust rules that funds training facilities, pays instructors, and administers Related Technical Instruction (RTI).",
      citation: "Pillar VI / 29 CFR Part 29"
    },
    "Journeyman": {
      title: "Journeyman",
      category: "Labor & Governance",
      def: "A fully licensed, independent practitioner who has completed 8,000 verified operational hours and passed a recognized Board practical benchmark exam, granting authority to deploy production changes, sign off on reviews, and supervise apprentices (2:1 ratio).",
      citation: "Pillar IV / 100% RJPB"
    },
    "Licensed Cybersecurity Trade Contractor": {
      title: "Licensed Cybersecurity Trade Contractor",
      category: "Labor & Governance",
      def: "An accredited business entity (LLC, partnership, corporation, MSSP, or consulting firm) that designates a qualifying Master of Record, carries commercial surety bonding and Trade E&O, and is legally authorized to sponsor JATC apprentices and execute statutory safety sign-offs.",
      citation: "Trade Framework Glossary"
    },
    "Local Chapter (\"The Local\")": {
      title: "Local Chapter (\"The Local\")",
      category: "Labor & Governance",
      def: "The frontline democratic unit of the Craft Guild chartered within a defined metropolitan or regional jurisdiction (minimum 50 licensed members) responsible for local JATC apprentice halls, regional COLI wage negotiations, and monthly member meetings.",
      citation: "Trade Framework Glossary"
    },
    "The Local": {
      title: "Local Chapter (\"The Local\")",
      category: "Labor & Governance",
      def: "The frontline democratic unit of the Craft Guild chartered within a defined metropolitan or regional jurisdiction (minimum 50 licensed members) responsible for local JATC apprentice halls, regional COLI wage negotiations, and monthly member meetings.",
      citation: "Trade Framework Glossary"
    },
    "Local Chapter": {
      title: "Local Chapter (\"The Local\")",
      category: "Labor & Governance",
      def: "The frontline democratic unit of the Craft Guild chartered within a defined metropolitan or regional jurisdiction (minimum 50 licensed members) responsible for local JATC apprentice halls, regional COLI wage negotiations, and monthly member meetings.",
      citation: "Trade Framework Glossary"
    },
    "Malpractice & Ethics Review Committee": {
      title: "Malpractice & Ethics Review Committee",
      category: "Labor & Governance",
      def: "The tripartite standing committee of the National Board (Master Practitioner, Employer CISO, Public Legal Advocate) responsible for investigating professional fraud, logbook tampering, and civil rights violations, with authority to suspend or revoke licenses.",
      citation: "Trade Framework Glossary"
    },
    "Mandatory Reporting Affirmative Duty": {
      title: "Mandatory Reporting Affirmative Duty",
      category: "Labor & Governance",
      def: "The binding professional obligation requiring all licensed practitioners and apprentices to report verified Class A, B, or C ethical infractions within 10 business days (or 48 hours for supervisors).",
      citation: "Trade Framework Glossary"
    },
    "Master of Record (MoR)": {
      title: "Master of Record (MoR)",
      category: "Labor & Governance",
      def: "An active operational designation held by a Master Practitioner serving as the legally accountable technical authority for an enterprise, critical system, or Trade Contractor. The MoR possesses statutory sign-off authority and exclusive standing to issue formal Notices of Safety Non-Concurrence.",
      citation: "Pillar IV & Pillar V"
    },
    "MoR": {
      title: "Master of Record (MoR)",
      category: "Labor & Governance",
      def: "An active operational designation held by a Master Practitioner serving as the legally accountable technical authority for an enterprise, critical system, or Trade Contractor. The MoR possesses statutory sign-off authority and exclusive standing to issue formal Notices of Safety Non-Concurrence.",
      citation: "Pillar IV & Pillar V"
    },
    "Master of Record": {
      title: "Master of Record (MoR)",
      category: "Labor & Governance",
      def: "An active operational designation held by a Master Practitioner serving as the legally accountable technical authority for an enterprise, critical system, or Trade Contractor. The MoR possesses statutory sign-off authority and exclusive standing to issue formal Notices of Safety Non-Concurrence.",
      citation: "Pillar IV & Pillar V"
    },
    "Master Practitioner": {
      title: "Master Practitioner",
      category: "Labor & Governance",
      def: "The highest personal engineering license tier in the trade, awarded after 12,000+ verified runtime hours, a clean ethical record, and peer-reviewed defense portfolio evaluation.",
      citation: "Trade Framework Glossary"
    },
    "Multi-Employer FMLA Equivalency Standard": {
      title: "Multi-Employer FMLA Equivalency Standard",
      category: "Labor & Governance",
      def: "A mandatory labor protection binding all Participating Employer Council (PEC) employers to guarantee job restoration rights (up to 12 weeks for parental leave; up to 26 weeks for medical leave) regardless of firm headcount, backed by priority dispatch hall re-entry through the Guild Talent Clearinghouse.",
      citation: "Trade Framework Glossary"
    },
    "National Cybersecurity Trade Licensure Compact (NCTLC)": {
      title: "National Cybersecurity Trade Licensure Compact (NCTLC)",
      category: "Labor & Governance",
      def: "An interstate legislative compact modeled after professional engineering and medical licensure boards, ensuring multi-state digital license portability and legal reciprocity across participating state jurisdictions.",
      citation: "Trade Framework Glossary"
    },
    "NCTLC": {
      title: "National Cybersecurity Trade Licensure Compact (NCTLC)",
      category: "Labor & Governance",
      def: "An interstate legislative compact modeled after professional engineering and medical licensure boards, ensuring multi-state digital license portability and legal reciprocity across participating state jurisdictions.",
      citation: "Trade Framework Glossary"
    },
    "National Cybersecurity Trade Licensure Compact": {
      title: "National Cybersecurity Trade Licensure Compact (NCTLC)",
      category: "Labor & Governance",
      def: "An interstate legislative compact modeled after professional engineering and medical licensure boards, ensuring multi-state digital license portability and legal reciprocity across participating state jurisdictions.",
      citation: "Trade Framework Glossary"
    },
    "Notice of Safety Non-Concurrence": {
      title: "Notice of Safety Non-Concurrence",
      category: "Labor & Governance",
      def: "A formal, timestamped legal instrument executed exclusively by a Master of Record when an executive directive or release violates statutory safety baselines. Executing an executive override against this notice transfers civil, regulatory, and financial liability directly to the overriding corporate officers.",
      citation: "Trade Framework Glossary"
    },
    "Notice of Safety Non-Concurrence (NSNC)": {
      title: "Notice of Safety Non-Concurrence (NSNC)",
      category: "Labor & Governance",
      def: "The formal statutory refusal instrument (Form FORM-001) executed exclusively by a Master of Record to document and halt critical baseline safety violations.",
      citation: "Trade Framework Glossary"
    },
    "NSNC (Notice of Safety Non-Concurrence)": {
      title: "Notice of Safety Non-Concurrence (NSNC)",
      category: "Labor & Governance",
      def: "The formal statutory refusal instrument (Form FORM-001) executed exclusively by a Master of Record to document and halt critical baseline safety violations.",
      citation: "Trade Framework Glossary"
    },
    "NSNC": {
      title: "Notice of Safety Non-Concurrence (NSNC)",
      category: "Labor & Governance",
      def: "The formal statutory refusal instrument (Form FORM-001) executed exclusively by a Master of Record to document and halt critical baseline safety violations.",
      citation: "Trade Framework Glossary"
    },
    "Operational Exception Flag": {
      title: "Operational Exception Flag",
      category: "Labor & Governance",
      def: "A standardized internal escalation record logged by an Apprentice or Journeyman to document technical debt or baseline violations, triggering mandatory review by the Master of Record without halting production pipelines.",
      citation: "Trade Framework Glossary"
    },
    "Operational Exception Flag (OEF)": {
      title: "Operational Exception Flag (OEF)",
      category: "Labor & Governance",
      def: "The frontline internal engineering dissent instrument (Form FORM-003) used to log technical debt and deviations within sprint ticketing.",
      citation: "Trade Framework Glossary"
    },
    "OEF (Operational Exception Flag)": {
      title: "Operational Exception Flag (OEF)",
      category: "Labor & Governance",
      def: "The frontline internal engineering dissent instrument (Form FORM-003) used to log technical debt and deviations within sprint ticketing.",
      citation: "Trade Framework Glossary"
    },
    "OEF": {
      title: "Operational Exception Flag (OEF)",
      category: "Labor & Governance",
      def: "The frontline internal engineering dissent instrument (Form FORM-003) used to log technical debt and deviations within sprint ticketing.",
      citation: "Trade Framework Glossary"
    },
    "Operational Shift Ceiling (14-Hour Rule)": {
      title: "Operational Shift Ceiling (14-Hour Rule)",
      category: "Labor & Governance",
      def: "A mandatory human-safety limit prohibiting practitioners from performing more than 14 consecutive hours of active incident triage or queue monitoring, paired with a mandatory 10-hour uninterrupted recovery rest cycle.",
      citation: "Trade Framework Glossary"
    },
    "14-Hour Rule": {
      title: "Operational Shift Ceiling (14-Hour Rule)",
      category: "Labor & Governance",
      def: "A mandatory human-safety limit prohibiting practitioners from performing more than 14 consecutive hours of active incident triage or queue monitoring, paired with a mandatory 10-hour uninterrupted recovery rest cycle.",
      citation: "Trade Framework Glossary"
    },
    "Operational Shift Ceiling": {
      title: "Operational Shift Ceiling (14-Hour Rule)",
      category: "Labor & Governance",
      def: "A mandatory human-safety limit prohibiting practitioners from performing more than 14 consecutive hours of active incident triage or queue monitoring, paired with a mandatory 10-hour uninterrupted recovery rest cycle.",
      citation: "Trade Framework Glossary"
    },
    "PEC (Participating Employer Council)": {
      title: "Participating Employer Council (PEC)",
      category: "Labor & Governance",
      def: "The multi-employer association representing participating enterprises, MSSPs, and Trade Contractors, structured into Large Enterprise and SMB/Contractor divisions to democratically elect Board management trustees.",
      citation: "Trade Framework Glossary"
    },
    "PEC": {
      title: "Participating Employer Council (PEC)",
      category: "Labor & Governance",
      def: "The multi-employer association representing participating enterprises, MSSPs, and Trade Contractors, structured into Large Enterprise and SMB/Contractor divisions to democratically elect Board management trustees.",
      citation: "Trade Framework Glossary"
    },
    "Participating Employer Council": {
      title: "Participating Employer Council (PEC)",
      category: "Labor & Governance",
      def: "The multi-employer association representing participating enterprises, MSSPs, and Trade Contractors, structured into Large Enterprise and SMB/Contractor divisions to democratically elect Board management trustees.",
      citation: "Trade Framework Glossary"
    },
    "Paid Family & Medical Leave (PFML) Sub-Trust": {
      title: "Paid Family & Medical Leave (PFML) Sub-Trust",
      category: "Labor & Governance",
      def: "An ERISA-shielded multi-employer trust fund (funded via $0.75/hour worked) providing 12 weeks of paid parental leave and up to 26 weeks of short-term disability / DFIR trauma recovery wage replacement, accessible across all participating employers after 1,000 verified operational hours.",
      citation: "Trade Framework Glossary"
    },
    "Pause-and-Resume Standard": {
      title: "Pause-and-Resume Standard",
      category: "Labor & Governance",
      def: "A statutory apprentice protection guaranteeing that all logged hours, ticket hashes, and rotational competencies remain frozen without penalty during medical or parental leave, protecting immediate re-entry into active rotations.",
      citation: "Trade Framework Glossary"
    },
    "Persistent Labor Shortage Index (PLSI)": {
      title: "Persistent Labor Shortage Index (PLSI)",
      category: "Labor & Governance",
      def: "An empirical trailing 4-quarter ratio tracking unmet specialty labor demand against active available supply in the Guild Hiring Hall, used to distinguish structural talent deficits from transient demand spikes.",
      citation: "Trade Framework Glossary"
    },
    "PLSI": {
      title: "Persistent Labor Shortage Index (PLSI)",
      category: "Labor & Governance",
      def: "An empirical trailing 4-quarter ratio tracking unmet specialty labor demand against active available supply in the Guild Hiring Hall, used to distinguish structural talent deficits from transient demand spikes.",
      citation: "Trade Framework Glossary"
    },
    "Persistent Labor Shortage Index": {
      title: "Persistent Labor Shortage Index (PLSI)",
      category: "Labor & Governance",
      def: "An empirical trailing 4-quarter ratio tracking unmet specialty labor demand against active available supply in the Guild Hiring Hall, used to distinguish structural talent deficits from transient demand spikes.",
      citation: "Trade Framework Glossary"
    },

    "Pre-Apprenticeship": {
      title: "Pre-Apprenticeship",
      category: "Labor & Governance",
      def: "An accredited, public vocational on-ramp (embedded in community colleges and high schools) providing zero-tuition foundational training and practical screening before paid employer dispatch.",
      citation: "Trade Framework Glossary"
    },
    "Proxy Retaliation": {
      title: "Proxy Retaliation",
      category: "Labor & Governance",
      def: "Indirect retaliatory acts committed by colleagues, peers, or sympathizers on behalf of a disciplined individual, including social ostracization, deliberate Pull Request review delays, cold-shouldering, or withholding on-call escalation support.",
      citation: "Trade Framework Glossary"
    },
    "Ranked-Choice Voting (RCV)": {
      title: "Ranked-Choice Voting (RCV)",
      category: "Labor & Governance",
      def: "The instant-runoff voting protocol used for all National Board and Guild democratic elections to ensure winning candidates achieve broad, verified majority consensus (>50%).",
      citation: "Trade Framework Glossary"
    },
    "RCV": {
      title: "Ranked-Choice Voting (RCV)",
      category: "Labor & Governance",
      def: "The instant-runoff voting protocol used for all National Board and Guild democratic elections to ensure winning candidates achieve broad, verified majority consensus (>50%).",
      citation: "Trade Framework Glossary"
    },
    "Ranked-Choice Voting": {
      title: "Ranked-Choice Voting (RCV)",
      category: "Labor & Governance",
      def: "The instant-runoff voting protocol used for all National Board and Guild democratic elections to ensure winning candidates achieve broad, verified majority consensus (>50%).",
      citation: "Trade Framework Glossary"
    },
    "Rebuttable Retaliation Presumption": {
      title: "Rebuttable Retaliation Presumption",
      category: "Labor & Governance",
      def: "An evidentiary legal rule establishing that any adverse employment action taken against a whistleblower or participating witness within 365 days of an ethics case is presumed to be retaliatory unless the employer disproves it with objective technical telemetry.",
      citation: "Trade Framework Glossary"
    },
    "Regional Journeyman Prevailing Benchmark (RJPB)": {
      title: "Regional Journeyman Prevailing Benchmark (RJPB)",
      category: "Labor & Governance",
      def: "The localized hourly compensation standard used as the baseline index for graduated apprentice wage steps, geographic cost-of-living tiers, and specialty hazard differentials.",
      citation: "Governance / Wage Scales"
    },
    "RJPB": {
      title: "Regional Journeyman Prevailing Benchmark (RJPB)",
      category: "Labor & Governance",
      def: "The localized hourly compensation standard used as the baseline index for graduated apprentice wage steps, geographic cost-of-living tiers, and specialty hazard differentials.",
      citation: "Governance / Wage Scales"
    },
    "Regional Journeyman Prevailing Benchmark": {
      title: "Regional Journeyman Prevailing Benchmark (RJPB)",
      category: "Labor & Governance",
      def: "The localized hourly compensation standard used as the baseline index for graduated apprentice wage steps, geographic cost-of-living tiers, and specialty hazard differentials.",
      citation: "Governance / Wage Scales"
    },
    "Risk-Weighted Capacity Cap": {
      title: "Risk-Weighted Capacity Cap",
      category: "Labor & Governance",
      def: "The statutory ceiling limiting Fractional Masters of Record (vMoR) to a maximum of 8 Tier-III commercial SMBs or 3 Tier-II regulated enterprises, and strictly barring fractional coverage of Tier-I Critical Infrastructure.",
      citation: "Trade Framework Glossary"
    },
    "RPL (Recognition of Prior Learning)": {
      title: "Recognition of Prior Learning (RPL)",
      category: "Labor & Governance",
      def: "The formal evaluation mechanism granting trade hour credits (up to 4,000 hours / 50%) for documented prior professional experience in adjacent technical fields (SysAdmin, Network Engineering, DevOps).",
      citation: "Trade Framework Glossary"
    },
    "RPL": {
      title: "Recognition of Prior Learning (RPL)",
      category: "Labor & Governance",
      def: "The formal evaluation mechanism granting trade hour credits (up to 4,000 hours / 50%) for documented prior professional experience in adjacent technical fields (SysAdmin, Network Engineering, DevOps).",
      citation: "Trade Framework Glossary"
    },
    "Recognition of Prior Learning": {
      title: "Recognition of Prior Learning (RPL)",
      category: "Labor & Governance",
      def: "The formal evaluation mechanism granting trade hour credits (up to 4,000 hours / 50%) for documented prior professional experience in adjacent technical fields (SysAdmin, Network Engineering, DevOps).",
      citation: "Trade Framework Glossary"
    },
    "RTI (Related Technical Instruction)": {
      title: "Related Technical Instruction (RTI)",
      category: "Labor & Governance",
      def: "The mandatory, paid 20% classroom, lab, and simulation instruction (minimum 144 hours/year) completed alongside on-the-job training.",
      citation: "Pillar II & 29 CFR Part 29"
    },
    "RTI": {
      title: "Related Technical Instruction (RTI)",
      category: "Labor & Governance",
      def: "The mandatory, paid 20% classroom, lab, and simulation instruction (minimum 144 hours/year) completed alongside on-the-job training.",
      citation: "Pillar II & 29 CFR Part 29"
    },
    "Related Technical Instruction": {
      title: "Related Technical Instruction (RTI)",
      category: "Labor & Governance",
      def: "The mandatory, paid 20% classroom, lab, and simulation instruction (minimum 144 hours/year) completed alongside on-the-job training.",
      citation: "Pillar II & 29 CFR Part 29"
    },
    "Shop Steward (Trade Job Steward)": {
      title: "Trade Job Steward (Shop Steward)",
      category: "Labor & Governance",
      def: "The designated frontline Journeyman representative on an engineering shift or enterprise SOC responsible for monitoring 2:1 supervisory ratios, assisting with logbook entries, and intervening in workplace friction before formal escalation.",
      citation: "Trade Framework Glossary"
    },
    "Shop Steward": {
      title: "Trade Job Steward (Shop Steward)",
      category: "Labor & Governance",
      def: "The designated frontline Journeyman representative on an engineering shift or enterprise SOC responsible for monitoring 2:1 supervisory ratios, assisting with logbook entries, and intervening in workplace friction before formal escalation.",
      citation: "Trade Framework Glossary"
    },
    "Trade Job Steward": {
      title: "Trade Job Steward (Shop Steward)",
      category: "Labor & Governance",
      def: "The designated frontline Journeyman representative on an engineering shift or enterprise SOC responsible for monitoring 2:1 supervisory ratios, assisting with logbook entries, and intervening in workplace friction before formal escalation.",
      citation: "Trade Framework Glossary"
    },
    "Statutory Malpractice Liability Cap": {
      title: "Statutory Malpractice Liability Cap",
      category: "Labor & Governance",
      def: "A statutory protection establishing a $0 personal civil damages liability cap for non-negligent Masters of Record and Journeymen who maintain verified baseline compliance and clean attestation feeds, with defense costs 100% indemnified through the Guild Malpractice Defense Pool.",
      citation: "Pillar V & Technical Refusal"
    },
    "Strict Blast-Radius Localization Rule": {
      title: "Strict Blast-Radius Localization Rule",
      category: "Labor & Governance",
      def: "A cloud force majeure boundary limiting toll-free compliance suspensions during upstream Cloud Service Provider (CSP) outages strictly to the documented affected services and sub-regions with a 72-hour maximum ceiling, preventing fraudulent tenant-parking abuse.",
      citation: "Velocity, Cloud & Safe Harbor"
    },
    "Supervisory / Associate Member": {
      title: "Supervisory / Associate Member",
      category: "Labor & Governance",
      def: "A Guild membership status for licensed Journeymen and Masters who transition into corporate management with hiring/firing authority. Preserves portable health/pension trusts and technical training access while enforcing non-voting status on collective bargaining contract ratifications.",
      citation: "Trade Framework Glossary"
    },
    "Supervisory Non-Interference Mandate": {
      title: "Supervisory Non-Interference Mandate",
      category: "Labor & Governance",
      def: "A statutory labor protection classifying any attempt by a supervising Master or corporate manager to coerce, inspect, or condition subordinate votes or logbook hours as a Class-A malpractice offense.",
      citation: "Trade Framework Glossary"
    },
    "Supervisory Ratio": {
      title: "Supervisory Ratio",
      category: "Labor & Governance",
      def: "The legally enforced ratio (maximum 2 Apprentices per 1 Journeyman on human-in-the-loop operational seats) ensuring line-of-sight mentorship and preventing entry-level labor exploitation.",
      citation: "Trade Framework Glossary"
    },
    "Supplemental Unemployment Benefit (SUB) Fund": {
      title: "Supplemental Unemployment Benefit (SUB) Fund",
      category: "Labor & Governance",
      def: "A multi-employer trust fund paying weekly supplemental income on top of state unemployment checks during economic downturns to maintain worker living standards.",
      citation: "Trade Framework Glossary"
    },
    "Sustained Deficit Rule": {
      title: "Sustained Deficit Rule",
      category: "Labor & Governance",
      def: "A statutory JATC governance requirement specifying that a specialty domain must sustain a Persistent Labor Shortage Index (PLSI) of >= 20% across at least three (3) consecutive trailing quarters before initiating formal reallocation of the 8,000-hour core apprenticeship curriculum.",
      citation: "Trade Framework Glossary"
    },

    "Taft-Hartley Trust": {
      title: "Taft-Hartley Trust",
      category: "Labor & Governance",
      def: "A multi-employer trust established under Section 302(c) of the Labor Management Relations Act, pooling employer contributions to provide portable health insurance, pensions, and zero-tuition training funds.",
      citation: "Trade Framework Glossary"
    },
    "Talent Clearinghouse Dispatch Officer": {
      title: "Talent Clearinghouse Dispatch Officer",
      category: "Labor & Governance",
      def: "A neutral Guild administrative officer responsible for allocating and dispatching qualified Journeymen and Apprentices from the talent clearinghouse based strictly on verified logbook credentials and endorsements.",
      citation: "Trade Framework Glossary"
    },
    "Third-Party Administrator (TPA)": {
      title: "Third-Party Administrator (TPA)",
      category: "Labor & Governance",
      def: "A bonded, independent professional administrative firm responsible for processing health claims, hour-bank accounting, and pension disbursements for Taft-Hartley trusts, ensuring Guild officers do not handle benefit checkbooks.",
      citation: "Trade Framework Glossary"
    },
    "TPA": {
      title: "Third-Party Administrator (TPA)",
      category: "Labor & Governance",
      def: "A bonded, independent professional administrative firm responsible for processing health claims, hour-bank accounting, and pension disbursements for Taft-Hartley trusts, ensuring Guild officers do not handle benefit checkbooks.",
      citation: "Trade Framework Glossary"
    },
    "Third-Party Administrator": {
      title: "Third-Party Administrator (TPA)",
      category: "Labor & Governance",
      def: "A bonded, independent professional administrative firm responsible for processing health claims, hour-bank accounting, and pension disbursements for Taft-Hartley trusts, ensuring Guild officers do not handle benefit checkbooks.",
      citation: "Trade Framework Glossary"
    },
    "Tier-I Critical Infrastructure No-Disruption Covenant": {
      title: "Tier-I Critical Infrastructure No-Disruption Covenant",
      category: "Labor & Governance",
      def: "An affirmative statutory covenant legally binding cybersecurity personnel defending Tier-I Critical Infrastructure (bulk power grid, nuclear, water, clinical hospital networks) against labor stoppages or walkouts, routing bargaining deadlocks to compulsory Final-Offer Interest Arbitration (FOIA).",
      citation: "Governance / Guild Charter"
    },
    "Trade Contractor Incubator": {
      title: "Trade Contractor Incubator",
      category: "Labor & Governance",
      def: "The economic framework allowing small boutique security firms and independent Masters to access standard multi-employer health/pension trusts, zero-recruiter hiring hall dispatch, and bulk surety bonding.",
      citation: "Trade Framework Glossary"
    },
    "TRAP Prohibition (Training Repayment Agreement Provisions)": {
      title: "Training Repayment Agreement Provisions (TRAP Prohibition)",
      category: "Labor & Governance",
      def: "The statutory rule invalidating all employer-imposed training repayment agreements, liquidated exit damages, and post-apprenticeship non-competes.",
      citation: "Trade Framework Glossary"
    },
    "TRAP Prohibition": {
      title: "Training Repayment Agreement Provisions (TRAP Prohibition)",
      category: "Labor & Governance",
      def: "The statutory rule invalidating all employer-imposed training repayment agreements, liquidated exit damages, and post-apprenticeship non-competes.",
      citation: "Trade Framework Glossary"
    },
    "Training Repayment Agreement Provisions": {
      title: "Training Repayment Agreement Provisions (TRAP Prohibition)",
      category: "Labor & Governance",
      def: "The statutory rule invalidating all employer-imposed training repayment agreements, liquidated exit damages, and post-apprenticeship non-competes.",
      citation: "Trade Framework Glossary"
    },
    "Transient Demand Spike": {
      title: "Transient Demand Spike",
      category: "Labor & Governance",
      def: "A short-term surge in employer labor demand driven by emergent vendor tooling or adoption cycles that normalizes within 1 to 2 quarters, resolved via modular continuing education rather than altering foundational apprenticeship standards.",
      citation: "Trade Framework Glossary"
    },

    "Two-Check Retirement System": {
      title: "Two-Check Retirement System",
      category: "Labor & Governance",
      def: "A retirement architecture combining a guaranteed multi-employer Defined Benefit Pension (funded 100% by employer hourly contributions) with an optional employer-matching 401(k) / Annuity plan.",
      citation: "Trade Framework Glossary"
    },
    "Vacation and Sick Trust Sub-Account": {
      title: "Vacation and Sick Trust Sub-Account",
      category: "Labor & Governance",
      def: "An individual multi-employer trust account for 1099 independent contractors funded via client hourly remittances ($3.50/hour) providing quarterly distributions or self-directed paid time off during personal leave.",
      citation: "Trade Framework Glossary"
    },
    "Worker Algorithmic Due Process": {
      title: "Worker Algorithmic Due Process",
      category: "Labor & Governance",
      def: "The binding labor standard prohibiting automated AI termination, bossware surveillance quotas, or algorithmic demotions without independent human supervisory review and transparent technical telemetry audits.",
      citation: "Trade Framework Glossary"
    },
    "Working Dues": {
      title: "Working Dues",
      category: "Labor & Governance",
      def: "A percentage-based contribution (1.5% of gross hourly wages) deducted via payroll check-off strictly while actively employed on shift to fund local chapter operations, contract enforcement, and hiring hall dispatch.",
      citation: "Trade Framework Glossary"
    },
    "W-2 Direct Employment": {
      title: "W-2 Direct Employment",
      category: "Labor & Governance",
      def: "Direct salaried or hourly employment classification with statutory worker protections, mandatory overtime rules, and employer tax withholding, as distinct from 1099 independent contractor arrangements.",
      citation: "Trade Framework Glossary"
    },
    "AppSec (Application Security)": {
      title: "Application Security (AppSec)",
      category: "Operational Discipline",
      def: "Engineering practices, secure design patterns, and automated testing tools that protect software from vulnerabilities across the SDLC.",
      citation: "Trade Framework Glossary"
    },
    "AppSec": {
      title: "Application Security (AppSec)",
      category: "Operational Discipline",
      def: "Engineering practices, secure design patterns, and automated testing tools that protect software from vulnerabilities across the SDLC.",
      citation: "Trade Framework Glossary"
    },
    "Application Security": {
      title: "Application Security (AppSec)",
      category: "Operational Discipline",
      def: "Engineering practices, secure design patterns, and automated testing tools that protect software from vulnerabilities across the SDLC.",
      citation: "Trade Framework Glossary"
    },
    "CI/CD (Continuous Integration / Continuous Deployment)": {
      title: "Continuous Integration / Continuous Deployment (CI/CD)",
      category: "Operational Discipline",
      def: "Automated software delivery pipelines. Under the trade model, automated pipelines and policy-as-code rules are certified by a Master of Record to allow unhindered developer deployment velocity.",
      citation: "Trade Framework Glossary"
    },
    "CI/CD": {
      title: "Continuous Integration / Continuous Deployment (CI/CD)",
      category: "Operational Discipline",
      def: "Automated software delivery pipelines. Under the trade model, automated pipelines and policy-as-code rules are certified by a Master of Record to allow unhindered developer deployment velocity.",
      citation: "Trade Framework Glossary"
    },
    "Continuous Integration / Continuous Deployment": {
      title: "Continuous Integration / Continuous Deployment (CI/CD)",
      category: "Operational Discipline",
      def: "Automated software delivery pipelines. Under the trade model, automated pipelines and policy-as-code rules are certified by a Master of Record to allow unhindered developer deployment velocity.",
      citation: "Trade Framework Glossary"
    },
    "CTI (Cyber Threat Intelligence)": {
      title: "Cyber Threat Intelligence (CTI)",
      category: "Operational Discipline",
      def: "The collection, analysis, and dissemination of structured indicators, adversary motivations, and attack vectors (TTPs).",
      citation: "Trade Framework Glossary"
    },
    "CTI": {
      title: "Cyber Threat Intelligence (CTI)",
      category: "Operational Discipline",
      def: "The collection, analysis, and dissemination of structured indicators, adversary motivations, and attack vectors (TTPs).",
      citation: "Trade Framework Glossary"
    },
    "Cyber Threat Intelligence": {
      title: "Cyber Threat Intelligence (CTI)",
      category: "Operational Discipline",
      def: "The collection, analysis, and dissemination of structured indicators, adversary motivations, and attack vectors (TTPs).",
      citation: "Trade Framework Glossary"
    },
    "DAST (Dynamic Application Security Testing)": {
      title: "Dynamic Application Security Testing (DAST)",
      category: "Operational Discipline",
      def: "Black-box security testing of running applications to discover real-time execution vulnerabilities.",
      citation: "Trade Framework Glossary"
    },
    "DAST": {
      title: "Dynamic Application Security Testing (DAST)",
      category: "Operational Discipline",
      def: "Black-box security testing of running applications to discover real-time execution vulnerabilities.",
      citation: "Trade Framework Glossary"
    },
    "Dynamic Application Security Testing": {
      title: "Dynamic Application Security Testing (DAST)",
      category: "Operational Discipline",
      def: "Black-box security testing of running applications to discover real-time execution vulnerabilities.",
      citation: "Trade Framework Glossary"
    },
    "DFIR (Digital Forensics & Incident Response)": {
      title: "Digital Forensics & Incident Response (DFIR)",
      category: "Operational Discipline",
      def: "Technical containment, root-cause analysis, and forensic evidence preservation during and following an active breach.",
      citation: "Trade Framework Glossary"
    },
    "DFIR": {
      title: "Digital Forensics & Incident Response (DFIR)",
      category: "Operational Discipline",
      def: "Technical containment, root-cause analysis, and forensic evidence preservation during and following an active breach.",
      citation: "Trade Framework Glossary"
    },
    "Digital Forensics & Incident Response": {
      title: "Digital Forensics & Incident Response (DFIR)",
      category: "Operational Discipline",
      def: "Technical containment, root-cause analysis, and forensic evidence preservation during and following an active breach.",
      citation: "Trade Framework Glossary"
    },
    "GRC (Governance, Risk, & Compliance)": {
      title: "Governance, Risk, & Compliance (GRC)",
      category: "Operational Discipline",
      def: "Operational oversight aligning technical controls with legal statutes, regulatory baselines, and risk management frameworks.",
      citation: "Trade Framework Glossary"
    },
    "GRC": {
      title: "Governance, Risk, & Compliance (GRC)",
      category: "Operational Discipline",
      def: "Operational oversight aligning technical controls with legal statutes, regulatory baselines, and risk management frameworks.",
      citation: "Trade Framework Glossary"
    },
    "Governance, Risk, & Compliance": {
      title: "Governance, Risk, & Compliance (GRC)",
      category: "Operational Discipline",
      def: "Operational oversight aligning technical controls with legal statutes, regulatory baselines, and risk management frameworks.",
      citation: "Trade Framework Glossary"
    },
    "IAM / ICAM (Identity, Credential, & Access Management)": {
      title: "Identity, Credential, & Access Management (IAM / ICAM)",
      category: "Operational Discipline",
      def: "Protocols and systems managing identity lifecycle, authentication (SAML, OIDC, FIDO2), and role-based or attribute-based authorization.",
      citation: "Trade Framework Glossary"
    },
    "IAM / ICAM": {
      title: "Identity, Credential, & Access Management (IAM / ICAM)",
      category: "Operational Discipline",
      def: "Protocols and systems managing identity lifecycle, authentication (SAML, OIDC, FIDO2), and role-based or attribute-based authorization.",
      citation: "Trade Framework Glossary"
    },
    "Identity, Credential, & Access Management": {
      title: "Identity, Credential, & Access Management (IAM / ICAM)",
      category: "Operational Discipline",
      def: "Protocols and systems managing identity lifecycle, authentication (SAML, OIDC, FIDO2), and role-based or attribute-based authorization.",
      citation: "Trade Framework Glossary"
    },
    "IoMT (Internet of Medical Things)": {
      title: "Internet of Medical Things (IoMT)",
      category: "Operational Discipline",
      def: "Connected clinical hardware and embedded medical devices operating under life-safety regulatory requirements (e.g., FDA 524B).",
      citation: "Trade Framework Glossary"
    },
    "IoMT": {
      title: "Internet of Medical Things (IoMT)",
      category: "Operational Discipline",
      def: "Connected clinical hardware and embedded medical devices operating under life-safety regulatory requirements (e.g., FDA 524B).",
      citation: "Trade Framework Glossary"
    },
    "Internet of Medical Things": {
      title: "Internet of Medical Things (IoMT)",
      category: "Operational Discipline",
      def: "Connected clinical hardware and embedded medical devices operating under life-safety regulatory requirements (e.g., FDA 524B).",
      citation: "Trade Framework Glossary"
    },
    "MFA / PAM (Multi-Factor Authentication / Privileged Access Management)": {
      title: "Multi-Factor Authentication / Privileged Access Management (MFA / PAM)",
      category: "Operational Discipline",
      def: "Controls enforcing multi-factor identity proofing and credential isolation for administrative access.",
      citation: "Trade Framework Glossary"
    },
    "MFA / PAM": {
      title: "Multi-Factor Authentication / Privileged Access Management (MFA / PAM)",
      category: "Operational Discipline",
      def: "Controls enforcing multi-factor identity proofing and credential isolation for administrative access.",
      citation: "Trade Framework Glossary"
    },
    "Multi-Factor Authentication / Privileged Access Management": {
      title: "Multi-Factor Authentication / Privileged Access Management (MFA / PAM)",
      category: "Operational Discipline",
      def: "Controls enforcing multi-factor identity proofing and credential isolation for administrative access.",
      citation: "Trade Framework Glossary"
    },
    "MSSP (Managed Security Service Provider)": {
      title: "Managed Security Service Provider (MSSP)",
      category: "Operational Discipline",
      def: "An outsourced operational provider delivering SOC monitoring and managed security services under trade contractor standards.",
      citation: "Trade Framework Glossary"
    },
    "MSSP": {
      title: "Managed Security Service Provider (MSSP)",
      category: "Operational Discipline",
      def: "An outsourced operational provider delivering SOC monitoring and managed security services under trade contractor standards.",
      citation: "Trade Framework Glossary"
    },
    "Managed Security Service Provider": {
      title: "Managed Security Service Provider (MSSP)",
      category: "Operational Discipline",
      def: "An outsourced operational provider delivering SOC monitoring and managed security services under trade contractor standards.",
      citation: "Trade Framework Glossary"
    },
    "OT / ICS / SCADA (Operational Technology / Industrial Control Systems)": {
      title: "Operational Technology / Industrial Control Systems (OT / ICS / SCADA)",
      category: "Operational Discipline",
      def: "Specialized computing hardware and telemetry networks that monitor and control physical industrial processes (power grids, water treatment, manufacturing).",
      citation: "Trade Framework Glossary"
    },
    "OT / ICS / SCADA": {
      title: "Operational Technology / Industrial Control Systems (OT / ICS / SCADA)",
      category: "Operational Discipline",
      def: "Specialized computing hardware and telemetry networks that monitor and control physical industrial processes (power grids, water treatment, manufacturing).",
      citation: "Trade Framework Glossary"
    },
    "Operational Technology / Industrial Control Systems": {
      title: "Operational Technology / Industrial Control Systems (OT / ICS / SCADA)",
      category: "Operational Discipline",
      def: "Specialized computing hardware and telemetry networks that monitor and control physical industrial processes (power grids, water treatment, manufacturing).",
      citation: "Trade Framework Glossary"
    },
    "OSS Orphan Vulnerability Protocol": {
      title: "OSS Orphan Vulnerability Protocol",
      category: "Operational Discipline",
      def: "The trade governance standard allowing engineering teams to create isolated security forks and apply runtime compensating controls under MoR certification (Form FORM-005) when upstream open-source dependencies have unpatched zero-days, preserving deployment velocity and safe harbors for up to 90 days.",
      citation: "Trade Framework Glossary"
    },
    "Out-of-Band Hardware Enclave Multi-Signature (OOB-HMS)": {
      title: "Out-of-Band Hardware Enclave Multi-Signature (OOB-HMS)",
      category: "Operational Discipline",
      def: "A threshold multi-signature deployment gate for Tier-I Critical Infrastructure pipelines held across physically isolated, localized hardware security keys operated by designated Master and Journeyman engineers, decoupled from public PKI trust roots.",
      citation: "Velocity, Cloud & Safe Harbor"
    },
    "OOB-HMS": {
      title: "Out-of-Band Hardware Enclave Multi-Signature (OOB-HMS)",
      category: "Operational Discipline",
      def: "A threshold multi-signature deployment gate for Tier-I Critical Infrastructure pipelines held across physically isolated, localized hardware security keys operated by designated Master and Journeyman engineers, decoupled from public PKI trust roots.",
      citation: "Velocity, Cloud & Safe Harbor"
    },
    "Out-of-Band Hardware Enclave Multi-Signature": {
      title: "Out-of-Band Hardware Enclave Multi-Signature (OOB-HMS)",
      category: "Operational Discipline",
      def: "A threshold multi-signature deployment gate for Tier-I Critical Infrastructure pipelines held across physically isolated, localized hardware security keys operated by designated Master and Journeyman engineers, decoupled from public PKI trust roots.",
      citation: "Velocity, Cloud & Safe Harbor"
    },
    "PKI / HSM (Public Key Infrastructure / Hardware Security Module)": {
      title: "Public Key Infrastructure / Hardware Security Module (PKI / HSM)",
      category: "Operational Discipline",
      def: "Cryptographic root authority hierarchies and tamper-resistant physical appliances protecting enterprise encryption keys.",
      citation: "Trade Framework Glossary"
    },
    "PKI / HSM": {
      title: "Public Key Infrastructure / Hardware Security Module (PKI / HSM)",
      category: "Operational Discipline",
      def: "Cryptographic root authority hierarchies and tamper-resistant physical appliances protecting enterprise encryption keys.",
      citation: "Trade Framework Glossary"
    },
    "Public Key Infrastructure / Hardware Security Module": {
      title: "Public Key Infrastructure / Hardware Security Module (PKI / HSM)",
      category: "Operational Discipline",
      def: "Cryptographic root authority hierarchies and tamper-resistant physical appliances protecting enterprise encryption keys.",
      citation: "Trade Framework Glossary"
    },
    "SAST (Static Application Security Testing)": {
      title: "Static Application Security Testing (SAST)",
      category: "Operational Discipline",
      def: "Automated static code analysis inspecting source repositories for security flaws prior to build execution.",
      citation: "Trade Framework Glossary"
    },
    "SAST": {
      title: "Static Application Security Testing (SAST)",
      category: "Operational Discipline",
      def: "Automated static code analysis inspecting source repositories for security flaws prior to build execution.",
      citation: "Trade Framework Glossary"
    },
    "Static Application Security Testing": {
      title: "Static Application Security Testing (SAST)",
      category: "Operational Discipline",
      def: "Automated static code analysis inspecting source repositories for security flaws prior to build execution.",
      citation: "Trade Framework Glossary"
    },
    "SE-APP (Application & Software Product Security)": {
      title: "Application & Software Product Security (SE-APP)",
      category: "Operational Discipline",
      def: "A Tier 1 discipline specialty endorsement covering secure architecture, automated CI/CD security tooling, software supply-chain defenses, and SBOM lifecycles.",
      citation: "Specialty Track Specification"
    },
    "SE-APP": {
      title: "Application & Software Product Security (SE-APP)",
      category: "Operational Discipline",
      def: "A Tier 1 discipline specialty endorsement covering secure architecture, automated CI/CD security tooling, software supply-chain defenses, and SBOM lifecycles.",
      citation: "Specialty Track Specification"
    },
    "Application & Software Product Security": {
      title: "Application & Software Product Security (SE-APP)",
      category: "Operational Discipline",
      def: "A Tier 1 discipline specialty endorsement covering secure architecture, automated CI/CD security tooling, software supply-chain defenses, and SBOM lifecycles.",
      citation: "Specialty Track Specification"
    },
    "SE-MED (Medical Device & Clinical Technology Security)": {
      title: "Medical Device & Clinical Technology Security (SE-MED)",
      category: "Operational Discipline",
      def: "A Tier 2 statutory life-safety specialty endorsement (+20% to +25% wage adder) governing embedded firmware (SiMD), SaMD, mobile health apps, and FDA Section 524B compliance.",
      citation: "Specialty Track Specification"
    },
    "SE-MED": {
      title: "Medical Device & Clinical Technology Security (SE-MED)",
      category: "Operational Discipline",
      def: "A Tier 2 statutory life-safety specialty endorsement (+20% to +25% wage adder) governing embedded firmware (SiMD), SaMD, mobile health apps, and FDA Section 524B compliance.",
      citation: "Specialty Track Specification"
    },
    "Medical Device & Clinical Technology Security": {
      title: "Medical Device & Clinical Technology Security (SE-MED)",
      category: "Operational Discipline",
      def: "A Tier 2 statutory life-safety specialty endorsement (+20% to +25% wage adder) governing embedded firmware (SiMD), SaMD, mobile health apps, and FDA Section 524B compliance.",
      citation: "Specialty Track Specification"
    },
    "SOC (Security Operations Center)": {
      title: "Security Operations Center (SOC)",
      category: "Operational Discipline",
      def: "The centralized operational unit handling 24/7 telemetry monitoring, triage, detection engineering, and incident response.",
      citation: "Trade Framework Glossary"
    },
    "SOC": {
      title: "Security Operations Center (SOC)",
      category: "Operational Discipline",
      def: "The centralized operational unit handling 24/7 telemetry monitoring, triage, detection engineering, and incident response.",
      citation: "Trade Framework Glossary"
    },
    "Security Operations Center": {
      title: "Security Operations Center (SOC)",
      category: "Operational Discipline",
      def: "The centralized operational unit handling 24/7 telemetry monitoring, triage, detection engineering, and incident response.",
      citation: "Trade Framework Glossary"
    },
    "29 CFR Part 30": {
      title: "29 CFR Part 30",
      category: "Regulatory Standard",
      def: "Department of Labor regulations establishing mandatory Equal Employment Opportunity (EEO), affirmative action, and anti-harassment standards for Registered Apprenticeship programs.",
      citation: "Trade Framework Glossary"
    },
    "CISA KEV (Known Exploited Vulnerabilities)": {
      title: "Known Exploited Vulnerabilities (CISA KEV)",
      category: "Regulatory Standard",
      def: "The federal catalog of actively exploited vulnerabilities requiring prioritized remediation under binding operational directives.",
      citation: "Trade Framework Glossary"
    },
    "CISA KEV": {
      title: "Known Exploited Vulnerabilities (CISA KEV)",
      category: "Regulatory Standard",
      def: "The federal catalog of actively exploited vulnerabilities requiring prioritized remediation under binding operational directives.",
      citation: "Trade Framework Glossary"
    },
    "Known Exploited Vulnerabilities": {
      title: "Known Exploited Vulnerabilities (CISA KEV)",
      category: "Regulatory Standard",
      def: "The federal catalog of actively exploited vulnerabilities requiring prioritized remediation under binding operational directives.",
      citation: "Trade Framework Glossary"
    },
    "CISM (Certified Information Security Manager)": {
      title: "Certified Information Security Manager (CISM)",
      category: "Regulatory Standard",
      def: "An ISACA credential evaluating enterprise information security governance and risk management.",
      citation: "Trade Framework Glossary"
    },
    "CISM": {
      title: "Certified Information Security Manager (CISM)",
      category: "Regulatory Standard",
      def: "An ISACA credential evaluating enterprise information security governance and risk management.",
      citation: "Trade Framework Glossary"
    },
    "Certified Information Security Manager": {
      title: "Certified Information Security Manager (CISM)",
      category: "Regulatory Standard",
      def: "An ISACA credential evaluating enterprise information security governance and risk management.",
      citation: "Trade Framework Glossary"
    },
    "CISSP (Certified Information Systems Security Professional)": {
      title: "Certified Information Systems Security Professional (CISSP)",
      category: "Regulatory Standard",
      def: "An ISC2 credential requiring 5 years of verified multi-domain experience, serving as the benchmark standard for Generalist Journeyman portfolio evaluation.",
      citation: "Trade Framework Glossary"
    },
    "CISSP": {
      title: "Certified Information Systems Security Professional (CISSP)",
      category: "Regulatory Standard",
      def: "An ISC2 credential requiring 5 years of verified multi-domain experience, serving as the benchmark standard for Generalist Journeyman portfolio evaluation.",
      citation: "Trade Framework Glossary"
    },
    "Certified Information Systems Security Professional": {
      title: "Certified Information Systems Security Professional (CISSP)",
      category: "Regulatory Standard",
      def: "An ISC2 credential requiring 5 years of verified multi-domain experience, serving as the benchmark standard for Generalist Journeyman portfolio evaluation.",
      citation: "Trade Framework Glossary"
    },
    "CRISC (Certified in Risk and Information Systems Control)": {
      title: "Certified in Risk and Information Systems Control (CRISC)",
      category: "Regulatory Standard",
      def: "An ISACA credential focused on enterprise risk identification, assessment, and control design.",
      citation: "Trade Framework Glossary"
    },
    "CRISC": {
      title: "Certified in Risk and Information Systems Control (CRISC)",
      category: "Regulatory Standard",
      def: "An ISACA credential focused on enterprise risk identification, assessment, and control design.",
      citation: "Trade Framework Glossary"
    },
    "Certified in Risk and Information Systems Control": {
      title: "Certified in Risk and Information Systems Control (CRISC)",
      category: "Regulatory Standard",
      def: "An ISACA credential focused on enterprise risk identification, assessment, and control design.",
      citation: "Trade Framework Glossary"
    },
    "FDA Section 524B": {
      title: "FDA Section 524B",
      category: "Regulatory Standard",
      def: "Statutory requirement mandating cybersecurity design baselines, software bills of materials (SBOMs), and post-market lifecycle management for cyber device submissions.",
      citation: "Trade Framework Glossary"
    },
    "IEC 62443": {
      title: "IEC 62443",
      category: "Regulatory Standard",
      def: "The foundational international consensus standard for cybersecurity across industrial automation and control systems (IACS).",
      citation: "Trade Framework Glossary"
    },
    "NERC-CIP": {
      title: "NERC-CIP",
      category: "Regulatory Standard",
      def: "Mandatory reliability and cybersecurity standards protecting North American bulk electric grid assets.",
      citation: "Trade Framework Glossary"
    },
    "NIST CSF 2.0": {
      title: "NIST CSF 2.0",
      category: "Regulatory Standard",
      def: "The NIST Cybersecurity Framework organizing defensive practices across Govern, Identify, Protect, Detect, Respond, and Recover functions.",
      citation: "Trade Framework Glossary"
    },
    "NIST NICE Framework (NIST SP 800-181)": {
      title: "NIST NICE Framework (NIST SP 800-181)",
      category: "Regulatory Standard",
      def: "The national standard taxonomy defining cybersecurity work roles, knowledge, skills, and tasks.",
      citation: "Trade Framework Glossary"
    },
    "NIST SP 800-181": {
      title: "NIST NICE Framework (NIST SP 800-181)",
      category: "Regulatory Standard",
      def: "The national standard taxonomy defining cybersecurity work roles, knowledge, skills, and tasks.",
      citation: "Trade Framework Glossary"
    },
    "NIST NICE Framework": {
      title: "NIST NICE Framework (NIST SP 800-181)",
      category: "Regulatory Standard",
      def: "The national standard taxonomy defining cybersecurity work roles, knowledge, skills, and tasks.",
      citation: "Trade Framework Glossary"
    },
    "NIST RMF (NIST SP 800-37)": {
      title: "NIST SP 800-37 (NIST RMF)",
      category: "Regulatory Standard",
      def: "The Risk Management Framework guiding the categorization, selection, implementation, assessment, authorization, and monitoring of security controls.",
      citation: "Trade Framework Glossary"
    },
    "NIST RMF": {
      title: "NIST SP 800-37 (NIST RMF)",
      category: "Regulatory Standard",
      def: "The Risk Management Framework guiding the categorization, selection, implementation, assessment, authorization, and monitoring of security controls.",
      citation: "Trade Framework Glossary"
    },
    "NIST SP 800-37": {
      title: "NIST SP 800-37 (NIST RMF)",
      category: "Regulatory Standard",
      def: "The Risk Management Framework guiding the categorization, selection, implementation, assessment, authorization, and monitoring of security controls.",
      citation: "Trade Framework Glossary"
    },
    "OSCP (Offensive Security Certified Professional)": {
      title: "Offensive Security Certified Professional (OSCP)",
      category: "Regulatory Standard",
      def: "A hands-on practical exam evaluating real-time network exploitation and penetration testing execution.",
      citation: "Trade Framework Glossary"
    },
    "OSCP": {
      title: "Offensive Security Certified Professional (OSCP)",
      category: "Regulatory Standard",
      def: "A hands-on practical exam evaluating real-time network exploitation and penetration testing execution.",
      citation: "Trade Framework Glossary"
    },
    "Offensive Security Certified Professional": {
      title: "Offensive Security Certified Professional (OSCP)",
      category: "Regulatory Standard",
      def: "A hands-on practical exam evaluating real-time network exploitation and penetration testing execution.",
      citation: "Trade Framework Glossary"
    },
    "STRIDE / PASTA": {
      title: "STRIDE / PASTA",
      category: "Regulatory Standard",
      def: "Threat modeling frameworks used to categorize vulnerabilities (STRIDE) or align application risks with business objectives (PASTA).",
      citation: "Trade Framework Glossary"
    },
    "WIOA (Workforce Innovation and Opportunity Act)": {
      title: "Workforce Innovation and Opportunity Act (WIOA)",
      category: "Regulatory Standard",
      def: "Federal workforce development statute providing public grant funding for registered apprenticeships and vocational training.",
      citation: "WIOA Title I"
    },
    "WIOA": {
      title: "Workforce Innovation and Opportunity Act (WIOA)",
      category: "Regulatory Standard",
      def: "Federal workforce development statute providing public grant funding for registered apprenticeships and vocational training.",
      citation: "WIOA Title I"
    },
    "Workforce Innovation and Opportunity Act": {
      title: "Workforce Innovation and Opportunity Act (WIOA)",
      category: "Regulatory Standard",
      def: "Federal workforce development statute providing public grant funding for registered apprenticeships and vocational training.",
      citation: "WIOA Title I"
    }
  };

  let tooltipEl = null;
  let activeTermEl = null;
  let hideTimeout = null;

  function createTooltipElement() {
    tooltipEl = document.createElement("div");
    tooltipEl.className = "glossary-tooltip-card";
    tooltipEl.id = "glossary-tooltip-card";
    tooltipEl.setAttribute("role", "tooltip");
    tooltipEl.setAttribute("aria-live", "polite");
    tooltipEl.innerHTML = `
      <div class="tooltip-header">
        <span class="tooltip-title" id="tt-title"></span>
        <span class="tooltip-category" id="tt-cat"></span>
      </div>
      <div class="tooltip-body" id="tt-body"></div>
      <div class="tooltip-citation" id="tt-cite"></div>
    `;
    document.body.appendChild(tooltipEl);

    tooltipEl.addEventListener("mouseenter", () => clearTimeout(hideTimeout));
    tooltipEl.addEventListener("mouseleave", hideTooltip);
  }

  function showTooltip(targetEl, termKey) {
    const data = GLOSSARY_TERMS[termKey];
    if (!data || !tooltipEl) return;
    clearTimeout(hideTimeout);
    activeTermEl = targetEl;

    document.getElementById("tt-title").textContent = data.title;
    document.getElementById("tt-cat").textContent = data.category;
    document.getElementById("tt-body").textContent = data.def;
    document.getElementById("tt-cite").textContent = data.citation;

    const rect = targetEl.getBoundingClientRect();
    const tooltipWidth = 320;
    let left = rect.left + window.scrollX + (rect.width / 2) - (tooltipWidth / 2);
    let top = rect.bottom + window.scrollY + 8;

    if (left < 16) left = 16;
    if (left + tooltipWidth > window.innerWidth - 16) {
      left = window.innerWidth - tooltipWidth - 16;
    }

    tooltipEl.style.left = `${left}px`;
    tooltipEl.style.top = `${top}px`;
    tooltipEl.classList.add("active");
  }

  function hideTooltip() {
    hideTimeout = setTimeout(() => {
      if (tooltipEl) tooltipEl.classList.remove("active");
      activeTermEl = null;
    }, 120);
  }


  function initGlossaryParser() {
    const article = document.querySelector(".portal-article");
    if (!article) return;
    createTooltipElement();

    const sortedTerms = Object.keys(GLOSSARY_TERMS).sort((a, b) => b.length - a.length);
    const regexPattern = new RegExp(`\\b(${sortedTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "g");

    const walker = document.createTreeWalker(
      article,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: function (node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          const tag = parent.tagName.toLowerCase();
          if (["pre", "code", "a", "h1", "h2", "h3", "h4", "script", "style"].includes(tag)) {
            return NodeFilter.FILTER_REJECT;
          }
          if (parent.classList.contains("glossary-term")) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodesToReplace = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (regexPattern.test(node.nodeValue)) {
        nodesToReplace.push(node);
      }
    }

    nodesToReplace.forEach(node => {
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      const text = node.nodeValue;

      text.replace(regexPattern, (match, p1, offset) => {
        if (offset > lastIndex) {
          fragment.appendChild(document.createTextNode(text.substring(lastIndex, offset)));
        }
        const span = document.createElement("span");
        span.className = "glossary-term";
        span.textContent = match;
        span.setAttribute("data-term", match);
        span.tabIndex = 0;
        span.setAttribute("role", "button");
        span.setAttribute("aria-describedby", "glossary-tooltip-card");

        span.addEventListener("mouseenter", (e) => showTooltip(e.target, match));
        span.addEventListener("mouseleave", hideTooltip);
        span.addEventListener("focus", (e) => showTooltip(e.target, match));
        span.addEventListener("blur", hideTooltip);
        span.addEventListener("click", (e) => {
          e.stopPropagation();
          showTooltip(e.target, match);
        });
        span.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            showTooltip(e.target, match);
          } else if (e.key === "Escape") {
            hideTooltip();
          }
        });

        fragment.appendChild(span);
        lastIndex = offset + match.length;
      });

      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
      }
      node.parentNode.replaceChild(fragment, node);
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".glossary-term") && !e.target.closest(".glossary-tooltip-card")) {
        hideTooltip();
      }
    });
  }

  // Diagram Lightbox / Modal Zoom Engine
  function initDiagramLightbox() {
    const preBlocks = document.querySelectorAll(".portal-article pre");
    if (!preBlocks.length) return;

    // Create Modal Elements
    const modal = document.createElement("div");
    modal.className = "diagram-modal-overlay";
    modal.innerHTML = `
      <div class="diagram-modal-container">
        <div class="diagram-modal-header">
          <span class="diagram-modal-title">Blueprint & Architectural Diagram</span>
          <button class="diagram-modal-close" type="button">Close &times;</button>
        </div>
        <div class="diagram-modal-body">
          <pre><code id="diagram-modal-code"></code></pre>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const modalCode = document.getElementById("diagram-modal-code");
    const closeBtn = modal.querySelector(".diagram-modal-close");

    function openModal(codeContent) {
      modalCode.textContent = codeContent;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
    });

    // Attach Expand Buttons to Diagrams
    preBlocks.forEach(pre => {
      const code = pre.querySelector("code");
      const text = code ? code.textContent : pre.textContent;

      // Only attach if it contains ASCII box-drawing characters
      if (text.includes("┌") || text.includes("+─") || text.includes("│") || text.includes("├")) {
        pre.classList.add("diagram-interactive");

        const expandBtn = document.createElement("button");
        expandBtn.className = "diagram-expand-btn";
        expandBtn.type = "button";
        expandBtn.innerHTML = "<span>Expand ↗</span>";
        expandBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          openModal(text);
        });

        pre.style.position = "relative";
        pre.appendChild(expandBtn);

        pre.addEventListener("click", () => {
          openModal(text);
        });
      }
    });
  }

  // Glossary Live Search & Filter
  function initGlossarySearch() {
    const isGlossaryPage = window.location.pathname.includes("GLOSSARY") || document.title.includes("Glossary");
    if (!isGlossaryPage) return;

    const article = document.querySelector(".portal-article");
    if (!article) return;

    const searchWrap = document.createElement("div");
    searchWrap.className = "glossary-search-container";
    searchWrap.innerHTML = `
      <input type="text" id="glossary-search-input" class="glossary-search-box" placeholder="Filter terms & acronyms (e.g., DOL, Taft-Hartley, ERISA, MoR, RJPB)..." />
      <span class="glossary-count" id="glossary-term-count"></span>
    `;

    const firstH2 = article.querySelector("h2");
    if (firstH2) {
      firstH2.parentNode.insertBefore(searchWrap, firstH2);
    } else {
      article.insertBefore(searchWrap, article.firstChild);
    }

    const searchInput = document.getElementById("glossary-search-input");
    const countEl = document.getElementById("glossary-term-count");
    const listItems = article.querySelectorAll("ul li");

    countEl.textContent = `${listItems.length} terms cataloged`;

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      let matchCount = 0;

      listItems.forEach(li => {
        const text = li.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          li.style.display = "";
          matchCount++;
        } else {
          li.style.display = "none";
        }
      });

      countEl.textContent = query ? `${matchCount} matching` : `${listItems.length} terms cataloged`;
    });
  }

  function initMobileSidebar() {
    const sidebar = document.getElementById("portal-sidebar");
    const backdrop = document.getElementById("portal-sidebar-backdrop");

    const openSidebar = (e) => {
      if (e) e.preventDefault();
      const currentSidebar = sidebar || document.getElementById("portal-sidebar");
      const currentBackdrop = backdrop || document.getElementById("portal-sidebar-backdrop");
      if (currentSidebar) currentSidebar.classList.add("open");
      if (currentBackdrop) currentBackdrop.classList.add("active");
      document.body.style.overflow = "hidden";
    };

    const closeSidebar = (e, shouldPreventDefault = true) => {
      if (e && shouldPreventDefault) e.preventDefault();
      const currentSidebar = sidebar || document.getElementById("portal-sidebar");
      const currentBackdrop = backdrop || document.getElementById("portal-sidebar-backdrop");
      if (currentSidebar) currentSidebar.classList.remove("open");
      if (currentBackdrop) currentBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    };

    // Global document event delegation ensures clicks are captured reliably on touch and desktop
    document.addEventListener("click", (e) => {
      const toggle = e.target.closest("#btn-toggle-sidebar, .mobile-nav-trigger");
      if (toggle) {
        openSidebar(e);
        return;
      }
      const close = e.target.closest("#btn-close-sidebar, .sidebar-close-btn");
      if (close) {
        closeSidebar(e);
        return;
      }
      if (e.target === backdrop || (e.target.id === "portal-sidebar-backdrop")) {
        closeSidebar(e);
        return;
      }
      if (window.innerWidth <= 900 && e.target.closest("#portal-sidebar a")) {
        closeSidebar(e, false);
      }
    });
  }

  function initResponsiveTables() {
    const tables = document.querySelectorAll(".portal-article table");
    tables.forEach(table => {
      if (!table.parentElement.classList.contains("table-scroll-wrapper")) {
        const wrapper = document.createElement("div");
        wrapper.className = "table-scroll-wrapper";
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }

  // Secure Client-Side Static In-Memory Search Engine
  function initGlobalSearch() {
    const searchBtn = document.getElementById("btn-portal-search");
    const backdrop = document.getElementById("portal-search-backdrop");
    const input = document.getElementById("portal-search-input");
    const closeBtn = document.getElementById("portal-search-close-btn");
    const resultsContainer = document.getElementById("portal-search-results");
    if (!backdrop || !input || !resultsContainer) return;

    let searchIndex = null;
    let selectedIndex = -1;
    let currentResults = [];

    function getSiteBaseUrl() {
      const scriptEl = document.querySelector('script[src*="portal.js"]');
      if (scriptEl) {
        const src = scriptEl.getAttribute("src") || "";
        const idx = src.indexOf("/assets/js/portal.js");
        if (idx !== -1) {
          const base = src.substring(0, idx);
          return base.endsWith("/") ? base : (base ? base + "/" : "/");
        }
      }
      if (typeof window !== "undefined" && window.location.pathname.startsWith("/framework")) {
        return "/framework/";
      }
      return "/";
    }

    const baseUrl = getSiteBaseUrl();

    // Device & OS Shortcut Detection
    function detectShortcutLabel() {
      const isTouch = window.matchMedia("(pointer: coarse)").matches || ("ontouchstart" in window);
      const kbd = document.querySelector(".search-btn-kbd");
      if (!kbd) return;

      if (isTouch || window.innerWidth <= 768) {
        kbd.style.display = "none";
        return;
      }

      const navData = navigator.userAgentData;
      const platform = (navData && navData.platform) || navigator.platform || navigator.userAgent || "";
      const isMac = /mac|iphone|ipad|ipod/i.test(String(platform));
      const shortcutText = isMac ? "⌘K" : "Ctrl+K";
      kbd.textContent = shortcutText;

      if (searchBtn) {
        searchBtn.setAttribute("aria-label", `Search Framework (${shortcutText})`);
      }
    }

    detectShortcutLabel();
    window.addEventListener("resize", detectShortcutLabel);

    async function loadSearchIndex() {
      if (searchIndex && searchIndex.length) return searchIndex;
      try {
        const fetchUrl = `${baseUrl}assets/js/search-index.json`;
        const res = await fetch(fetchUrl);
        searchIndex = res.ok ? await res.json() : [];
      } catch (err) {
        searchIndex = [];
      }
      return searchIndex;
    }

    // Pre-fetch search index in background immediately for instant readiness
    loadSearchIndex();

    function openSearchModal(e) {
      if (e) e.preventDefault();
      backdrop.style.display = "flex";
      backdrop.classList.add("active");
      backdrop.setAttribute("aria-hidden", "false");
      if (searchBtn) searchBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      loadSearchIndex().then(() => renderSearchResults(input.value));
      setTimeout(() => input.focus(), 50);
    }

    function closeSearchModal(e) {
      if (e) e.preventDefault();
      backdrop.style.display = "none";
      backdrop.classList.remove("active");
      backdrop.setAttribute("aria-hidden", "true");
      if (searchBtn) searchBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      input.value = "";
      selectedIndex = -1;
      currentResults = [];
    }

    function sanitizeNavigationUrl(url, base) {
      if (!url) return "#";
      const raw = String(url).trim();
      if (/^(javascript|data|vbscript):/i.test(raw)) {
        return "#";
      }
      if (raw.startsWith("https://") || raw.startsWith("http://")) {
        return raw;
      }
      return (base || "/") + raw.replace(/^\//, "");
    }

    function appendHighlightedText(parent, text, tokens) {
      if (!tokens || !tokens.length || !text) {
        parent.textContent = text || "";
        return;
      }
      // For short tokens (<= 3 chars, e.g. "ai", "ml", "mor"), only highlight on word boundaries
      // For longer tokens, allow word-start boundaries
      const regexParts = [];
      tokens.forEach(t => {
        if (!t || t.length < 2) return;
        const esc = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        if (t.length <= 3) {
          regexParts.push(`\\b${esc}\\b`);
        } else {
          regexParts.push(`\\b${esc}`);
        }
      });

      if (!regexParts.length) {
        parent.textContent = text;
        return;
      }

      const regex = new RegExp(`(${regexParts.join("|")})`, "gi");
      let lastIdx = 0;
      text.replace(regex, (match, p1, offset) => {
        if (offset > lastIdx) {
          parent.appendChild(document.createTextNode(text.substring(lastIdx, offset)));
        }
        const mark = document.createElement("mark");
        mark.className = "search-highlight";
        mark.textContent = match;
        parent.appendChild(mark);
        lastIdx = offset + match.length;
      });
      if (lastIdx < text.length) {
        parent.appendChild(document.createTextNode(text.substring(lastIdx)));
      }
    }

    function getContextSnippet(content, tokens, maxLen = 180) {
      if (!content) return "";
      if (!tokens.length) return content.slice(0, maxLen) + (content.length > maxLen ? "..." : "");
      let firstMatch = -1;

      // Look for boundary-aware match first
      for (const t of tokens) {
        if (!t) continue;
        const esc = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const pattern = t.length <= 3 ? new RegExp(`\\b${esc}\\b`, "i") : new RegExp(`\\b${esc}`, "i");
        const m = pattern.exec(content);
        if (m && (firstMatch === -1 || m.index < firstMatch)) {
          firstMatch = m.index;
        }
      }

      // Fallback to substring if no boundary match found
      if (firstMatch === -1) {
        const lower = content.toLowerCase();
        for (const t of tokens) {
          const idx = lower.indexOf(t);
          if (idx !== -1 && (firstMatch === -1 || idx < firstMatch)) firstMatch = idx;
        }
      }

      if (firstMatch === -1) return content.slice(0, maxLen) + (content.length > maxLen ? "..." : "");
      const start = Math.max(0, firstMatch - 45);
      const end = Math.min(content.length, start + maxLen);
      let snip = content.substring(start, end).trim();
      if (start > 0) snip = "..." + snip;
      if (end < content.length) snip = snip + "...";
      return snip;
    }

    function scoreTextWithToken(text, token) {
      if (!text || !token) return 0;
      const esc = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // Exact whole-word matches carry highest authority
      const exactRe = new RegExp(`\\b${esc}\\b`, "gi");
      const exactMatches = (text.match(exactRe) || []).length;
      if (exactMatches > 0) {
        return exactMatches * 120;
      }
      // Prefix match (word starts with token)
      const prefixRe = new RegExp(`\\b${esc}`, "gi");
      const prefixMatches = (text.match(prefixRe) || []).length;
      if (prefixMatches > 0) {
        return prefixMatches * 60;
      }
      // Substring match: Only permitted for tokens >= 4 chars, heavily downweighted
      if (token.length >= 4 && text.indexOf(token) !== -1) {
        return 10;
      }
      return 0;
    }

    function groupAndScoreResults(rawTokens, sanitized) {
      const docGroups = {};

      (searchIndex || []).forEach(item => {
        const docTitle = (item.docTitle || item.title || "").toLowerCase();
        const heading = (item.heading || "").toLowerCase();
        const cat = (item.category || "").toLowerCase();
        const content = (item.content || item.snippet || "").toLowerCase();

        let sectionScore = 0;
        let matchedTokensCount = 0;

        rawTokens.forEach(t => {
          let tScore = 0;
          tScore += scoreTextWithToken(heading, t) * 1.5;
          tScore += scoreTextWithToken(docTitle, t) * 1.2;
          tScore += scoreTextWithToken(cat, t) * 0.4;

          const cScore = scoreTextWithToken(content, t);
          tScore += Math.min(cScore, 180) * 0.4;

          if (tScore > 0) {
            matchedTokensCount++;
            sectionScore += tScore;
          }
        });

        // Boost sections that match all query tokens
        if (rawTokens.length > 1 && matchedTokensCount === rawTokens.length) {
          sectionScore += 80;
        }

        if (sectionScore > 0) {
          const rawUrl = item.url || "";
          const pageUrl = rawUrl.split("#")[0];
          const groupKey = pageUrl || (item.docTitle || item.title);

          if (!docGroups[groupKey]) {
            docGroups[groupKey] = {
              docTitle: item.docTitle || item.title,
              category: item.category || "General Specification",
              pageUrl: pageUrl,
              maxScore: 0,
              sections: []
            };
          }

          docGroups[groupKey].sections.push({
            item: item,
            score: sectionScore
          });

          if (sectionScore > docGroups[groupKey].maxScore) {
            docGroups[groupKey].maxScore = sectionScore;
          }
        }
      });

      return Object.values(docGroups).sort((a, b) => b.maxScore - a.maxScore).slice(0, 10);
    }

    function renderSearchResults(rawQuery) {
      while (resultsContainer.firstChild) resultsContainer.removeChild(resultsContainer.firstChild);

      const sanitized = (rawQuery || "").toLowerCase().replace(/[^\w\s\-\.\:\/]/g, "").slice(0, 64).trim();
      const rawTokens = sanitized.split(/\s+/).filter(Boolean);

      if (!rawTokens.length) {
        currentResults = [];
        const emptyState = document.createElement("div");
        emptyState.className = "portal-search-empty-state";
        emptyState.textContent = "Type a keyword to search specifications, statutory defenses, and operational standards...";
        resultsContainer.appendChild(emptyState);
        return;
      }

      const topDocs = groupAndScoreResults(rawTokens, sanitized);

      currentResults = [];

      if (!topDocs.length) {
        const noResults = document.createElement("div");
        noResults.className = "portal-search-no-results";
        noResults.textContent = `No framework specifications found matching "${sanitized}".`;
        resultsContainer.appendChild(noResults);
        return;
      }

      selectedIndex = 0;

      topDocs.forEach((docGroup, idx) => {
        docGroup.sections.sort((a, b) => b.score - a.score);
        const primarySection = docGroup.sections[0].item;
        currentResults.push(primarySection);

        const card = document.createElement("div");
        card.className = `portal-search-result-item ${idx === selectedIndex ? "selected" : ""}`;
        card.setAttribute("role", "option");
        card.setAttribute("tabindex", "-1");

        const headerDiv = document.createElement("div");
        headerDiv.className = "portal-search-result-header";

        const titleLink = document.createElement("a");
        titleLink.className = "portal-search-result-title";
        titleLink.href = sanitizeNavigationUrl(primarySection.url, baseUrl);
        appendHighlightedText(titleLink, docGroup.docTitle, rawTokens);

        const catSpan = document.createElement("span");
        catSpan.className = "portal-search-result-category";
        catSpan.textContent = docGroup.category;

        headerDiv.appendChild(titleLink);
        headerDiv.appendChild(catSpan);
        card.appendChild(headerDiv);

        if (primarySection.heading && primarySection.heading !== docGroup.docTitle) {
          const sectionDiv = document.createElement("div");
          sectionDiv.className = "portal-search-result-section";
          const secLink = document.createElement("a");
          secLink.href = sanitizeNavigationUrl(primarySection.url, baseUrl);
          secLink.style.color = "inherit";
          secLink.style.textDecoration = "none";
          secLink.appendChild(document.createTextNode("§ "));
          appendHighlightedText(secLink, primarySection.heading, rawTokens);
          sectionDiv.appendChild(secLink);
          card.appendChild(sectionDiv);
        }

        const snippetP = document.createElement("p");
        snippetP.className = "portal-search-result-snippet";
        const snippetText = getContextSnippet(primarySection.content || primarySection.snippet || "", rawTokens);
        appendHighlightedText(snippetP, snippetText, rawTokens);
        card.appendChild(snippetP);

        const otherSections = docGroup.sections.slice(1).filter(s => s.item.heading !== primarySection.heading);
        if (otherSections.length > 0) {
          const chipsContainer = document.createElement("div");
          chipsContainer.className = "portal-search-result-sections-group";

          const chipsLabel = document.createElement("span");
          chipsLabel.className = "portal-search-sections-label";
          chipsLabel.textContent = "Also in:";
          chipsContainer.appendChild(chipsLabel);

          const displayedSections = otherSections.slice(0, 3);
          displayedSections.forEach(s => {
            const chip = document.createElement("a");
            chip.className = "portal-search-section-chip";
            chip.href = sanitizeNavigationUrl(s.item.url, baseUrl);
            chip.textContent = `§ ${s.item.heading}`;
            chip.title = s.item.heading;
            chip.addEventListener("click", () => closeSearchModal());
            chipsContainer.appendChild(chip);
          });

          if (otherSections.length > 3) {
            const moreSpan = document.createElement("span");
            moreSpan.className = "portal-search-section-chip-more";
            moreSpan.textContent = `+${otherSections.length - 3} more`;
            chipsContainer.appendChild(moreSpan);
          }

          card.appendChild(chipsContainer);
        }

        card.addEventListener("click", (e) => {
          if (e.target.closest(".portal-search-section-chip")) return;
          closeSearchModal();
          window.location.href = sanitizeNavigationUrl(primarySection.url, baseUrl);
        });

        card.addEventListener("mouseenter", () => updateSelectedResult(idx));
        resultsContainer.appendChild(card);
      });
    }

    function updateSelectedResult(newIdx) {
      const items = resultsContainer.querySelectorAll(".portal-search-result-item");
      if (!items.length) return;
      selectedIndex = Math.max(0, Math.min(newIdx, items.length - 1));
      items.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add("selected");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("selected");
        }
      });
    }

    if (searchBtn) searchBtn.addEventListener("click", openSearchModal);
    if (closeBtn) closeBtn.addEventListener("click", closeSearchModal);
    backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeSearchModal(); });
    input.addEventListener("input", (e) => renderSearchResults(e.target.value));

    // Global document event delegation for search trigger buttons
    document.addEventListener("click", (e) => {
      const searchTrigger = e.target.closest("#btn-portal-search, .portal-search-btn");
      if (searchTrigger) {
        openSearchModal(e);
        return;
      }
      const closeTrigger = e.target.closest("#portal-search-close-btn");
      if (closeTrigger) {
        closeSearchModal(e);
        return;
      }
      if (e.target === backdrop) {
        closeSearchModal(e);
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        updateSelectedResult(selectedIndex + 1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        updateSelectedResult(selectedIndex - 1);
      } else if (e.key === "Enter") {
        e.preventDefault();
        const items = resultsContainer.querySelectorAll(".portal-search-result-item");
        if (items[selectedIndex]) items[selectedIndex].click();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeSearchModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        backdrop.style.display === "flex" ? closeSearchModal() : openSearchModal();
      } else if (e.key === "Escape" && backdrop.style.display === "flex") {
        closeSearchModal();
      }
    });
  }

  function initNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-item a");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href && (currentPath.endsWith(href) || (href === "./" && (currentPath.endsWith("/") || currentPath.endsWith("index.html"))))) {
        link.parentElement.classList.add("active");
        const parentDetails = link.closest("details");
        if (parentDetails) {
          parentDetails.open = true;
        }
      }
    });
  }

  function bootstrap() {
    // 1. Core UI Navigation & Search (High Priority - Must Never Fail)
    try { initMobileSidebar(); } catch (e) { console.warn("Mobile sidebar init:", e); }
    try { initGlobalSearch(); } catch (e) { console.warn("Global search init:", e); }
    try { initNavigation(); } catch (e) { console.warn("Navigation init:", e); }

    // 2. Content Enhancers & Deferred Parsers
    try { initResponsiveTables(); } catch (e) { console.warn("Responsive tables init:", e); }
    try { initDiagramLightbox(); } catch (e) { console.warn("Diagram lightbox init:", e); }
    try { initGlossarySearch(); } catch (e) { console.warn("Glossary search init:", e); }
    try { initGlossaryParser(); } catch (e) { console.warn("Glossary parser init:", e); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();

