"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, ChevronRight } from "lucide-react"

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All",
  "Identity & Access Management",
  "Incident Response & SOC",
  "Malware & Ransomware",
  "Phishing & Social Engineering",
  "Cloud & Email Security",
  "Threat Detection",
  "Network Security",
  "Compliance & Governance",
  "Cryptography & Encryption",
]

interface Term {
  term: string
  definition: string
  category: string
  blogSlug?: string
}

const TERMS: Term[] = [
  // A
  {
    term: "Access Control List (ACL)",
    definition:
      "A set of rules attached to a network object that specifies which users or system processes are granted or denied access to that object and what operations they are allowed to perform.",
    category: "Identity & Access Management",
  },
  {
    term: "Account Takeover (ATO)",
    definition:
      "A cyberattack in which a threat actor gains unauthorized access to a victim's credentials and takes control of their account to commit fraud, exfiltrate data, or pivot deeper into an organization's environment.",
    category: "Identity & Access Management",
  },
  {
    term: "Active Directory (AD)",
    definition:
      "Microsoft's directory service used to manage users, computers, and other resources in a Windows domain environment. AD is a frequent target in enterprise attacks because compromising it grants broad control over an organization.",
    category: "Identity & Access Management",
  },
  {
    term: "Advanced Persistent Threat (APT)",
    definition:
      "A sophisticated, long-term intrusion campaign in which a threat actor establishes an undetected presence inside a target network to steal data or conduct sabotage over an extended period.",
    category: "Threat Detection",
  },
  {
    term: "Alert Fatigue",
    definition:
      "The desensitization of security analysts to alerts caused by high volumes of low-fidelity notifications, increasing the risk that real threats are missed or ignored.",
    category: "Incident Response & SOC",
  },
  {
    term: "Anomaly Detection",
    definition:
      "A security technique that identifies deviations from established behavioral baselines — such as unusual login times, data transfer volumes, or application usage — to surface potential threats.",
    category: "Threat Detection",
  },
  {
    term: "Attack Surface",
    definition:
      "The total sum of all points in a system or network where an unauthorized user could attempt to enter or extract data. Reducing the attack surface is a foundational principle of security hardening.",
    category: "Threat Detection",
  },
  {
    term: "Automated Incident Response",
    definition:
      "The use of software to automatically detect, triage, contain, and remediate security incidents without requiring manual analyst intervention at every step, dramatically reducing mean time to respond (MTTR).",
    category: "Incident Response & SOC",
    blogSlug: "/blog/automated-response-vs-automated-remediation",
  },
  // B
  {
    term: "Behavioral Analytics",
    definition:
      "Security monitoring that establishes a baseline of normal user and entity behavior and then flags deviations — such as bulk downloads at 3 AM or logins from unfamiliar countries — as potential threats.",
    category: "Threat Detection",
  },
  {
    term: "BitLocker",
    definition:
      "A full-disk encryption feature built into Windows that protects data by encrypting entire volumes. Ransomware actors increasingly abuse BitLocker to encrypt victim systems without deploying custom malware.",
    category: "Cryptography & Encryption",
  },
  {
    term: "BEC (Business Email Compromise)",
    definition:
      "A type of email fraud where attackers impersonate executives, vendors, or trusted parties to trick employees into transferring money or sensitive data. BEC attacks cost organizations billions of dollars annually.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/bec-response-microsoft-365-triage-containment",
  },
  {
    term: "Brute Force Attack",
    definition:
      "An attack method that systematically tries every possible combination of credentials or encryption keys until the correct one is found. Modern brute force attacks often use credential stuffing to speed up the process.",
    category: "Identity & Access Management",
  },
  // C
  {
    term: "Conditional Access",
    definition:
      "An Azure AD / Entra ID policy framework that enforces access controls based on signals such as user identity, device compliance, location, and real-time risk score before granting access to applications.",
    category: "Identity & Access Management",
  },
  {
    term: "Credential Stuffing",
    definition:
      "An automated attack that uses large sets of stolen username/password pairs from data breaches to gain unauthorized access to user accounts, exploiting the common practice of password reuse.",
    category: "Identity & Access Management",
    blogSlug: "/blog/credential-stuffing-response-automated-blocks-hardening",
  },
  {
    term: "CSPM (Cloud Security Posture Management)",
    definition:
      "A category of security tools that continuously monitor cloud infrastructure configurations to detect misconfigurations, compliance violations, and security risks before they are exploited.",
    category: "Cloud & Email Security",
  },
  {
    term: "Cyber Kill Chain",
    definition:
      "A framework developed by Lockheed Martin that describes the stages of a cyberattack: reconnaissance, weaponization, delivery, exploitation, installation, command & control, and actions on objectives.",
    category: "Threat Detection",
  },
  // D
  {
    term: "Data Exfiltration",
    definition:
      "The unauthorized transfer of data from an organization to an external location, typically as part of a ransomware attack or espionage campaign. Detecting exfiltration early is critical to limiting breach impact.",
    category: "Threat Detection",
  },
  {
    term: "DKIM (DomainKeys Identified Mail)",
    definition:
      "An email authentication method that uses a cryptographic signature to verify that an email was sent from a server authorized by the domain owner, helping recipients detect spoofed messages.",
    category: "Cloud & Email Security",
  },
  {
    term: "DMARC (Domain-based Message Authentication Reporting and Conformance)",
    definition:
      "An email authentication policy that builds on SPF and DKIM, instructing receiving mail servers how to handle messages that fail authentication checks — typically quarantine or reject — and providing reporting on abuse.",
    category: "Cloud & Email Security",
  },
  {
    term: "DMARC Enforcement",
    definition:
      "The state of a DMARC policy set to p=quarantine or p=reject, meaning unauthenticated emails claiming to be from your domain are quarantined or blocked. Without enforcement, DMARC provides visibility but no protection.",
    category: "Cloud & Email Security",
  },
  // E
  {
    term: "EDR (Endpoint Detection and Response)",
    definition:
      "Security software installed on endpoints that continuously monitors activity, detects suspicious behavior, and provides tools for investigation and response. EDR is a staple of modern SOC tooling.",
    category: "Incident Response & SOC",
  },
  {
    term: "Email Impersonation",
    definition:
      "An attack technique where adversaries craft emails that appear to originate from a trusted sender — an executive, vendor, or known brand — by abusing lookalike domains, display name spoofing, or compromised accounts.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/email-impersonation-response-automate-domain-blocks-user-protection",
  },
  {
    term: "Entra ID (Azure Active Directory)",
    definition:
      "Microsoft's cloud-based identity and access management service, formerly known as Azure Active Directory. It manages authentication, conditional access, MFA, and identity risk for Microsoft 365 and third-party apps.",
    category: "Identity & Access Management",
  },
  {
    term: "Exfiltration Over Web Service",
    definition:
      "A MITRE ATT&CK technique in which adversaries steal data by uploading it to legitimate cloud services (OneDrive, Google Drive, Dropbox) to blend exfiltration traffic with normal business activity.",
    category: "Threat Detection",
  },
  // F
  {
    term: "False Positive",
    definition:
      "A security alert that incorrectly identifies benign activity as malicious. High false positive rates are a leading driver of alert fatigue in SOC environments and erode analyst confidence in detection tools.",
    category: "Incident Response & SOC",
  },
  {
    term: "Federated Identity",
    definition:
      "An arrangement that allows users to use a single set of credentials to access multiple systems or organizations by establishing trust relationships between identity providers and service providers.",
    category: "Identity & Access Management",
  },
  {
    term: "Forensic Investigation",
    definition:
      "The systematic collection, preservation, and analysis of digital evidence following a security incident to determine what happened, how an attacker gained access, and what data was affected.",
    category: "Incident Response & SOC",
  },
  // G
  {
    term: "Golden Ticket Attack",
    definition:
      "An Active Directory attack where an adversary forges Kerberos Ticket Granting Tickets (TGTs) using the KRBTGT account hash, granting persistent, almost unlimited access to any resource in the domain.",
    category: "Identity & Access Management",
  },
  // H
  {
    term: "Hash (Cryptographic)",
    definition:
      "A fixed-length output generated by a cryptographic hash function that uniquely represents input data. Hashes are used to verify file integrity, store passwords, and detect malware via known-bad hash signatures.",
    category: "Cryptography & Encryption",
  },
  {
    term: "Honeypot",
    definition:
      "A decoy system or resource deliberately left exposed to attract attackers. When an adversary interacts with a honeypot, security teams gain early warning of intrusion attempts and intelligence about attacker tactics.",
    category: "Threat Detection",
  },
  // I
  {
    term: "Identity Threat Detection and Response (ITDR)",
    definition:
      "A security discipline focused on detecting and responding to attacks that target identity infrastructure — including compromised credentials, privilege escalation, lateral movement, and identity provider abuse.",
    category: "Identity & Access Management",
    blogSlug: "/blog/itdr-practical-guide-small-soc-teams",
  },
  {
    term: "Impossible Travel",
    definition:
      "A risk signal generated when a user account shows login events from two geographically distant locations in a time window that makes physical travel between them impossible, suggesting account compromise.",
    category: "Threat Detection",
    blogSlug: "/blog/impossible-travel-risky-sign-ins-automated-triage",
  },
  {
    term: "Incident Response (IR)",
    definition:
      "The organized approach to addressing and managing the aftermath of a security breach or cyberattack. Effective IR minimizes damage, reduces recovery time and costs, and prevents recurrence.",
    category: "Incident Response & SOC",
  },
  {
    term: "Indicator of Compromise (IoC)",
    definition:
      "Forensic evidence — such as a malicious IP address, hash, domain, or behavioral pattern — that suggests a system has been breached or an attack is in progress. IoCs are shared via threat intelligence feeds.",
    category: "Threat Detection",
  },
  {
    term: "Inbox Rule Abuse",
    definition:
      "A post-compromise technique where attackers create hidden mailbox rules in Microsoft 365 or Exchange to auto-forward emails to external addresses, delete security alerts, or move messages to obscure folders to maintain persistent access.",
    category: "Cloud & Email Security",
    blogSlug: "/blog/microsoft-365-mailbox-rule-abuse-detection-automated-cleanup",
  },
  // J
  {
    term: "Just-in-Time (JIT) Access",
    definition:
      "A privileged access model that grants elevated permissions only when needed and for the minimum required duration, drastically reducing the standing attack surface for privilege escalation attacks.",
    category: "Identity & Access Management",
  },
  // K
  {
    term: "Kerberoasting",
    definition:
      "An Active Directory attack that requests Kerberos service tickets for service accounts and cracks them offline to recover plaintext passwords. It requires no elevated privileges to execute and is widely used in lateral movement.",
    category: "Identity & Access Management",
  },
  // L
  {
    term: "Lateral Movement",
    definition:
      "Techniques adversaries use to progressively move through a network after initial access, seeking higher privileges and access to sensitive systems. Common methods include pass-the-hash, Kerberoasting, and remote service exploitation.",
    category: "Threat Detection",
  },
  {
    term: "Least Privilege",
    definition:
      "The security principle that every user, process, or system should have the minimum permissions required to perform its function. Enforcing least privilege limits the blast radius of compromised accounts.",
    category: "Identity & Access Management",
  },
  {
    term: "Log Management",
    definition:
      "The practice of collecting, storing, and analyzing log data from systems, applications, and network devices to support security monitoring, compliance, and incident investigation.",
    category: "Incident Response & SOC",
  },
  // M
  {
    term: "Mailbox Forwarding Rule",
    definition:
      "A Microsoft 365 configuration that automatically forwards a copy of all incoming emails to an external address. Attackers commonly configure these after compromising an account to maintain long-term email access.",
    category: "Cloud & Email Security",
    blogSlug: "/blog/mailbox-forwarding-rule-detection-automated-discovery-removal",
  },
  {
    term: "Malware",
    definition:
      "Any software intentionally designed to disrupt, damage, or gain unauthorized access to computer systems. Categories include viruses, worms, trojans, ransomware, spyware, and rootkits.",
    category: "Malware & Ransomware",
  },
  {
    term: "Mean Time to Detect (MTTD)",
    definition:
      "The average time between when a threat enters an environment and when the security team identifies it. Reducing MTTD is a primary goal of SOC automation and behavioral analytics.",
    category: "Incident Response & SOC",
  },
  {
    term: "Mean Time to Respond (MTTR)",
    definition:
      "The average time from when a security incident is detected to when it is fully contained and remediated. Automated incident response platforms like BitLyft AIR are designed to drive MTTR toward zero.",
    category: "Incident Response & SOC",
  },
  {
    term: "MFA (Multi-Factor Authentication)",
    definition:
      "An authentication method requiring users to verify their identity using two or more factors: something they know (password), something they have (device), or something they are (biometric). MFA is one of the highest-impact security controls available.",
    category: "Identity & Access Management",
  },
  {
    term: "MFA Fatigue Attack",
    definition:
      "A social engineering attack in which adversaries repeatedly trigger push-based MFA notifications until the user approves one out of frustration or confusion. Also known as MFA push bombing.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/mfa-fatigue-attack-response-instant-containment",
  },
  {
    term: "MITRE ATT&CK",
    definition:
      "A globally accessible knowledge base of adversary tactics, techniques, and procedures (TTPs) based on real-world observations. Security teams use ATT&CK to understand attacker behavior, prioritize defenses, and map detections.",
    category: "Threat Detection",
  },
  // N
  {
    term: "Network Segmentation",
    definition:
      "The practice of dividing a network into isolated subnetworks so that a breach in one segment cannot easily spread to others. Segmentation limits lateral movement and reduces blast radius.",
    category: "Network Security",
  },
  {
    term: "NGAV (Next-Generation Antivirus)",
    definition:
      "Antivirus software that uses behavioral analysis, machine learning, and cloud-based threat intelligence rather than signature-only detection, making it more effective against novel and fileless malware.",
    category: "Malware & Ransomware",
  },
  // O
  {
    term: "OAuth App Consent Attack",
    definition:
      "An attack technique where adversaries trick users into granting a malicious OAuth application access to their Microsoft 365 or Google Workspace account, bypassing password-based authentication entirely.",
    category: "Cloud & Email Security",
    blogSlug: "/blog/malicious-oauth-app-consent-investigation-revocation",
  },
  {
    term: "OSINT (Open-Source Intelligence)",
    definition:
      "Intelligence gathered from publicly available sources — social media, job postings, WHOIS records, leaked credential databases — which threat actors use in reconnaissance to target organizations and individuals.",
    category: "Threat Detection",
  },
  // P
  {
    term: "Pass-the-Hash",
    definition:
      "An attack technique that captures an NTLM or LM password hash and uses it directly for authentication, bypassing the need to know the actual plaintext password. Common in post-exploitation lateral movement.",
    category: "Identity & Access Management",
  },
  {
    term: "Phishing",
    definition:
      "A social engineering attack that uses fraudulent emails, messages, or websites impersonating trusted entities to trick recipients into revealing credentials, clicking malicious links, or transferring money.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/phishing-response-automation-microsoft-365",
  },
  {
    term: "Playbook (Security)",
    definition:
      "A documented, step-by-step procedure that guides security teams through the detection, investigation, containment, and remediation of a specific type of security incident. Automated playbooks are the foundation of SOAR and AIR platforms.",
    category: "Incident Response & SOC",
  },
  {
    term: "Privilege Escalation",
    definition:
      "A technique used by attackers to gain higher-level permissions than they were initially granted, often by exploiting vulnerabilities, misconfigurations, or weak credential practices.",
    category: "Identity & Access Management",
  },
  // Q
  {
    term: "Quarantine (Email)",
    definition:
      "The automatic isolation of suspicious or policy-violating emails in a secure holding area where they cannot be delivered or acted upon until reviewed. In automated security workflows, quarantine is a key first-response action.",
    category: "Cloud & Email Security",
    blogSlug: "/blog/email-quarantine-automation-policy-design-false-positives",
  },
  // R
  {
    term: "Ransomware",
    definition:
      "Malware that encrypts a victim's files and demands payment for the decryption key. Modern ransomware attacks are often double-extortion campaigns that also threaten to publish stolen data.",
    category: "Malware & Ransomware",
  },
  {
    term: "RBAC (Role-Based Access Control)",
    definition:
      "An access control model that assigns permissions to roles rather than individuals. Users are then assigned to roles, simplifying permission management and ensuring consistent enforcement of least privilege.",
    category: "Identity & Access Management",
  },
  {
    term: "Remediation",
    definition:
      "The process of fixing or neutralizing a security vulnerability or the damage caused by a breach. In automated incident response, remediation actions — like password resets, account disables, or rule deletions — are executed automatically.",
    category: "Incident Response & SOC",
  },
  {
    term: "Risky Sign-In",
    definition:
      "A login event flagged by Microsoft Entra ID Identity Protection as potentially compromised, based on signals such as unfamiliar location, anonymous IP, atypical travel, or leaked credentials.",
    category: "Threat Detection",
    blogSlug: "/blog/impossible-travel-risky-sign-ins-automated-triage",
  },
  // S
  {
    term: "SAML (Security Assertion Markup Language)",
    definition:
      "An XML-based standard for exchanging authentication and authorization data between identity providers and service providers, enabling single sign-on (SSO) across disparate applications.",
    category: "Identity & Access Management",
  },
  {
    term: "Security Operations Center (SOC)",
    definition:
      "A centralized team responsible for monitoring, detecting, analyzing, and responding to security incidents. Modern SOCs increasingly rely on automation to handle alert volumes that exceed human capacity.",
    category: "Incident Response & SOC",
  },
  {
    term: "Session Hijacking",
    definition:
      "An attack in which an adversary steals an authenticated session token to impersonate a legitimate user without needing their credentials. AiTM phishing attacks are a leading technique for stealing live session cookies.",
    category: "Identity & Access Management",
  },
  {
    term: "Session Revocation",
    definition:
      "The act of invalidating all active login sessions for a user account, forcing re-authentication on every device. Session revocation is a critical containment step when an account compromise is detected.",
    category: "Identity & Access Management",
    blogSlug: "/blog/account-suspension-vs-session-revocation-when-to-use",
  },
  {
    term: "SIEM (Security Information and Event Management)",
    definition:
      "A platform that aggregates and analyzes log and event data from across an IT environment to detect threats, correlate incidents, and support compliance reporting. SIEMs are often paired with SOAR for automated response.",
    category: "Incident Response & SOC",
  },
  {
    term: "SOAR (Security Orchestration, Automation and Response)",
    definition:
      "A category of security platforms that orchestrate tools, automate repetitive tasks, and guide response workflows. BitLyft AIR goes beyond traditional SOAR by providing fully autonomous response without analyst involvement.",
    category: "Incident Response & SOC",
  },
  {
    term: "Social Engineering",
    definition:
      "Psychological manipulation of people into performing actions or divulging confidential information. Social engineering bypasses technical controls by targeting the human element — the most exploitable vulnerability in any organization.",
    category: "Phishing & Social Engineering",
  },
  {
    term: "SPF (Sender Policy Framework)",
    definition:
      "An email authentication protocol that specifies which mail servers are authorized to send email on behalf of a domain, helping recipients identify and reject spoofed messages.",
    category: "Cloud & Email Security",
  },
  {
    term: "Spear Phishing",
    definition:
      "A targeted phishing attack directed at a specific individual or organization, using personalized information gathered through OSINT to increase credibility and success rates.",
    category: "Phishing & Social Engineering",
  },
  // T
  {
    term: "Threat Hunting",
    definition:
      "A proactive security practice where analysts search for hidden threats that have evaded automated detection tools by formulating hypotheses based on TTPs and hunting for matching evidence in telemetry data.",
    category: "Threat Detection",
  },
  {
    term: "Threat Intelligence",
    definition:
      "Contextual information about current or emerging cyber threats — including adversary TTPs, IoCs, and vulnerability data — used to inform detection rules, response playbooks, and risk prioritization.",
    category: "Threat Detection",
  },
  {
    term: "Token Theft",
    definition:
      "The unauthorized capture of OAuth or session tokens, typically via AiTM phishing proxies, allowing attackers to impersonate users and bypass MFA without needing a password.",
    category: "Identity & Access Management",
  },
  {
    term: "TTP (Tactics, Techniques, and Procedures)",
    definition:
      "The behavioral fingerprint of a threat actor — what they want (tactics), how they achieve it (techniques), and the specific tools and methods they use (procedures). Mapped to MITRE ATT&CK.",
    category: "Threat Detection",
  },
  // U
  {
    term: "UEBA (User and Entity Behavior Analytics)",
    definition:
      "A security analytics approach that profiles the normal behavior of users and entities (devices, applications) and uses machine learning to detect anomalies that may indicate insider threats or compromised accounts.",
    category: "Threat Detection",
  },
  // V
  {
    term: "Vulnerability Management",
    definition:
      "The continuous process of identifying, classifying, prioritizing, remediating, and mitigating security vulnerabilities in software, systems, and infrastructure before they are exploited.",
    category: "Compliance & Governance",
  },
  // W
  {
    term: "Whaling",
    definition:
      "A highly targeted phishing attack aimed specifically at senior executives or other high-value individuals within an organization, exploiting their authority to authorize financial transactions or access sensitive systems.",
    category: "Phishing & Social Engineering",
  },
  // Z
  {
    term: "Zero Trust",
    definition:
      "A security model that eliminates implicit trust by requiring every user, device, and connection to be continuously verified — regardless of network location. The guiding principle is 'never trust, always verify.'",
    category: "Identity & Access Management",
  },
  {
    term: "Zero-Day Vulnerability",
    definition:
      "A software vulnerability that is unknown to the vendor and has no available patch, making it immediately exploitable. Zero-day exploits command high value on the dark web and are used in nation-state attacks.",
    category: "Threat Detection",
  },
]

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

function getLetterFromTerm(term: string): string {
  return term.charAt(0).toUpperCase()
}

function groupByLetter(terms: Term[]): Record<string, Term[]> {
  return terms.reduce<Record<string, Term[]>>((acc, term) => {
    const letter = getLetterFromTerm(term.term)
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(term)
    return acc
  }, {})
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CybersecurityGlossaryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const letterRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const filtered = TERMS.filter((t) => {
    const matchesCategory = activeCategory === "All" || t.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const grouped = groupByLetter(filtered)
  const activeLetters = new Set(Object.keys(grouped))

  function scrollToLetter(letter: string) {
    letterRefs.current[letter]?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-28 pb-16 px-6 overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto relative z-10 max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Cybersecurity Glossary</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Cybersecurity Glossary
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
              A practical reference for security practitioners, IT leaders, and anyone building a modern defense program. From identity threats to SOC automation, every term your team needs to know — explained clearly and mapped to real-world attack scenarios.
            </p>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                placeholder="Search terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-sm"
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar */}
            <aside className="lg:w-60 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Categories */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Categories</p>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-left text-sm px-3 py-2 rounded-md transition-all ${
                          activeCategory === cat
                            ? "bg-primary/15 text-primary font-medium border border-primary/30"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Letter Index */}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Jump to</p>
                  <div className="flex flex-wrap gap-1">
                    {LETTERS.map((letter) => (
                      <button
                        key={letter}
                        onClick={() => scrollToLetter(letter)}
                        disabled={!activeLetters.has(letter)}
                        className={`w-7 h-7 text-xs font-semibold rounded transition-all ${
                          activeLetters.has(letter)
                            ? "text-primary hover:bg-primary/10 hover:text-primary"
                            : "text-muted-foreground/30 cursor-default"
                        }`}
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">
                  <p className="text-lg">No terms found for &ldquo;{searchQuery}&rdquo;</p>
                  <button
                    onClick={() => { setSearchQuery(""); setActiveCategory("All") }}
                    className="mt-4 text-sm text-primary hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="space-y-12">
                  {LETTERS.filter((l) => grouped[l]?.length).map((letter) => (
                    <div
                      key={letter}
                      ref={(el) => { letterRefs.current[letter] = el }}
                      className="scroll-mt-28"
                    >
                      {/* Letter heading */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-primary w-10">{letter}</span>
                        <div className="flex-1 h-px bg-border" />
                      </div>
                      {/* Terms */}
                      <ul className="space-y-6">
                        {grouped[letter].map((t) => (
                          <li key={t.term} className="group">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 flex-wrap mb-1">
                                  <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {t.term}
                                  </h2>
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50">
                                    {t.category}
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">{t.definition}</p>
                                {t.blogSlug && (
                                  <Link
                                    href={t.blogSlug}
                                    className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:text-primary/80 font-medium transition-colors"
                                  >
                                    Read more <ChevronRight className="w-3 h-3" />
                                  </Link>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <section className="mt-16 border-t border-border/50 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-6 py-16 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Stop threats before they become incidents
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              BitLyft AIR automatically detects the attacks described in this glossary — account takeovers, inbox rule abuse, MFA fatigue, credential stuffing — and responds in seconds, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Request a Demo <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted/50 transition-colors"
              >
                Explore the Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
