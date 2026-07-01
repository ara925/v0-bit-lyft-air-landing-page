// ─── Shared Glossary Terms Data ──────────────────────────────────────────────
// Each term has:
//   slug        – URL-safe identifier used in /cybersecurity-glossary/[term]
//   term        – display name
//   definition  – short definition shown on the index page
//   category    – filter category
//   blogSlug?   – internal blog post to cross-link
//   content     – rich expanded content for the individual term page
//     .intro         – opening paragraph(s)
//     .sections[]    – { heading, body (HTML-safe JSX string or paragraphs), bullets? }
//     .relatedSlugs  – slugs of related glossary terms
// ─────────────────────────────────────────────────────────────────────────────

export const CATEGORIES = [
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
] as const

export type Category = (typeof CATEGORIES)[number]

export interface GlossarySection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export interface GlossaryTerm {
  slug: string
  term: string
  definition: string
  category: Category
  blogSlug?: string
  content: {
    intro: string[]
    sections: GlossarySection[]
    relatedSlugs: string[]
  }
}

export const TERMS: GlossaryTerm[] = [
  // ── A ──────────────────────────────────────────────────────────────────────
  {
    slug: "account-takeover",
    term: "Account Takeover (ATO)",
    definition:
      "A cyberattack in which a threat actor gains unauthorized access to a victim's credentials and takes control of their account to commit fraud, exfiltrate data, or pivot deeper into an organization's environment.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Account takeover (ATO) is one of the most impactful and financially damaging attacks facing organizations today. Unlike malware-based intrusions, ATO requires no exploit — the attacker simply logs in as the victim using valid credentials obtained through phishing, credential stuffing, or data breach replay.",
        "Once inside, an attacker operating under a legitimate identity is extremely difficult to detect using traditional perimeter controls. They can read email, exfiltrate files, approve financial transfers, and pivot to connected applications — all while appearing as a normal user.",
      ],
      sections: [
        {
          heading: "How account takeovers happen",
          paragraphs: [
            "ATO attacks follow a predictable pattern. The attacker first obtains credentials through one of several channels — phishing emails that harvest passwords, credential stuffing attacks using breach databases, or purchasing access on dark web marketplaces. With credentials in hand, they bypass MFA through push bombing, SIM swapping, or adversary-in-the-middle (AiTM) phishing that intercepts session tokens.",
          ],
          bullets: [
            "Phishing and spear phishing campaigns harvesting credentials directly",
            "Credential stuffing attacks replaying leaked username/password pairs",
            "AiTM phishing proxies that steal live session tokens, bypassing MFA entirely",
            "MFA fatigue attacks that flood a user with push requests until they approve",
            "Purchase of valid credentials from dark web markets or initial access brokers",
          ],
        },
        {
          heading: "What attackers do after gaining access",
          paragraphs: [
            "Post-compromise behavior is where the real damage occurs. Within minutes of gaining access, a sophisticated attacker will establish persistence by creating inbox forwarding rules, registering new MFA devices, or adding their own OAuth applications. They then conduct reconnaissance across connected systems before monetizing or exfiltrating access.",
          ],
          bullets: [
            "Creating mailbox forwarding rules to maintain email access after password reset",
            "Registering attacker-controlled MFA devices to re-enter after lockout",
            "Granting OAuth app permissions to maintain access without needing credentials",
            "Exfiltrating sensitive files and emails to external storage",
            "Using the compromised account as a launchpad for BEC fraud against colleagues",
          ],
        },
        {
          heading: "Detecting account takeover",
          paragraphs: [
            "Effective ATO detection requires correlating signals across identity, email, and endpoint telemetry. No single indicator is conclusive — it is the combination of behavioral anomalies that reveals a compromise.",
          ],
          bullets: [
            "Impossible travel: logins from two geographically distant locations in a short window",
            "Unfamiliar device or browser fingerprint on first login",
            "Login from anonymizing infrastructure such as Tor or residential proxies",
            "New inbox rules created shortly after authentication",
            "Sudden bulk email access or large file downloads",
            "Risky sign-in flags in Microsoft Entra ID Identity Protection",
          ],
        },
        {
          heading: "Automated response with BitLyft AIR",
          paragraphs: [
            "BitLyft AIR detects account takeover indicators in real time and executes a tiered response playbook automatically — no analyst intervention required. Within seconds of detecting a high-confidence ATO signal, AIR can revoke all active sessions, disable the account, remove malicious inbox rules, and notify the affected user and their manager.",
            "This automated containment eliminates the window of opportunity that attackers rely on. The average dwell time after an ATO is measured in hours — automated response collapses it to seconds.",
          ],
        },
      ],
      relatedSlugs: [
        "mfa-fatigue-attack",
        "impossible-travel",
        "session-revocation",
        "inbox-rule-abuse",
        "credential-stuffing",
      ],
    },
  },
  {
    slug: "active-directory",
    term: "Active Directory (AD)",
    definition:
      "Microsoft's directory service used to manage users, computers, and other resources in a Windows domain environment. AD is a frequent target in enterprise attacks because compromising it grants broad control over an organization.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Active Directory (AD) is the backbone of identity management in most enterprise Windows environments, handling authentication and authorization for every user, computer, and service within a domain. Because it controls who can access what, it is also the highest-value target in an enterprise network.",
        "A successful Active Directory attack — whether through Kerberoasting, Golden Ticket forgery, or DCSync — effectively gives an adversary the keys to the entire organization.",
      ],
      sections: [
        {
          heading: "Why Active Directory is a prime attack target",
          paragraphs: [
            "Active Directory's centralized trust model is both its strength and its weakness. Every domain-joined machine trusts AD for authentication, meaning a single compromise of a high-privilege account — or the domain controller itself — cascades across the entire environment.",
          ],
          bullets: [
            "Domain Admin accounts grant unrestricted access to every domain-joined system",
            "The KRBTGT account, if compromised, allows forging of unlimited Kerberos tickets (Golden Ticket)",
            "Misconfigurations in ACLs and delegation settings create exploitable privilege paths",
            "Service accounts often have excessive privileges and weak, rarely-rotated passwords",
            "AD replication data, accessible via DCSync, exposes all password hashes",
          ],
        },
        {
          heading: "Common Active Directory attack techniques",
          paragraphs: [
            "Attackers use a well-documented toolkit of AD attack techniques, most of which are mapped in the MITRE ATT&CK framework. Understanding these techniques is essential for building effective detections.",
          ],
          bullets: [
            "Kerberoasting: requesting service tickets and cracking them offline",
            "AS-REP Roasting: attacking accounts with Kerberos pre-authentication disabled",
            "Golden Ticket: forging TGTs using the KRBTGT hash for persistent access",
            "Pass-the-Hash: authenticating with captured NTLM hashes without the plaintext password",
            "DCSync: mimicking a domain controller to pull all password hashes from AD",
            "BloodHound attack path enumeration to identify shortest privilege escalation routes",
          ],
        },
        {
          heading: "Securing Active Directory",
          paragraphs: [
            "AD hardening is an ongoing process rather than a one-time project. The most impactful controls include eliminating unnecessary privileged accounts, enforcing tiered administration models, enabling Protected Users security group membership for sensitive accounts, and monitoring for known attack patterns in event logs.",
          ],
          bullets: [
            "Enable audit logging for directory service access, account logon, and privilege use",
            "Use Microsoft Defender for Identity (MDI) to detect AD-specific attack patterns",
            "Enforce the Privileged Access Workstation (PAW) model for admin tasks",
            "Rotate the KRBTGT password periodically and after any suspected compromise",
            "Reduce the number of Domain Admin members to the absolute minimum",
          ],
        },
        {
          heading: "BitLyft AIR and Active Directory threats",
          paragraphs: [
            "BitLyft AIR integrates with Microsoft Defender for Identity and Entra ID to surface AD-based attack indicators and automatically execute containment actions — disabling compromised accounts, revoking sessions, and alerting on privilege escalation chains — without requiring manual SOC triage.",
          ],
        },
      ],
      relatedSlugs: [
        "kerberoasting",
        "golden-ticket-attack",
        "pass-the-hash",
        "lateral-movement",
        "privilege-escalation",
      ],
    },
  },
  {
    slug: "alert-fatigue",
    term: "Alert Fatigue",
    definition:
      "The desensitization of security analysts to alerts caused by high volumes of low-fidelity notifications, increasing the risk that real threats are missed or ignored.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "Alert fatigue is one of the most dangerous operational conditions in a modern Security Operations Center. When analysts are bombarded with hundreds or thousands of alerts per day — the majority of which are false positives or low-severity noise — they inevitably begin to tune out, increasing the likelihood that a genuine attack slips through undetected.",
        "The problem is systemic and self-reinforcing: the more tools an organization deploys, the more alerts are generated, and the harder it becomes for analysts to distinguish signal from noise.",
      ],
      sections: [
        {
          heading: "The scale of the problem",
          paragraphs: [
            "Industry surveys consistently find that SOC analysts receive more alerts than they can meaningfully investigate. Estimates suggest that between 30-50% of alerts are never investigated due to volume, and that false positive rates in many environments exceed 50%. In this environment, even a skilled analyst will begin to dismiss alerts without full investigation.",
          ],
          bullets: [
            "The average SOC receives thousands of alerts per day across all tools",
            "Over 50% of security alerts are estimated to be false positives in typical environments",
            "Analyst burnout and high turnover are directly correlated with alert overload",
            "Critical alerts are frequently buried beneath low-priority notifications",
          ],
        },
        {
          heading: "How alert fatigue enables attackers",
          paragraphs: [
            "Sophisticated threat actors understand alert fatigue and deliberately exploit it. By generating noise — triggering low-severity alerts intentionally — they can desensitize analysts before executing their actual attack. By the time the real malicious activity triggers a high-severity alert, analysts may dismiss it as another false positive.",
          ],
        },
        {
          heading: "Solving alert fatigue with automation",
          paragraphs: [
            "The most effective solution to alert fatigue is not better training or more analysts — it is reducing the total volume of alerts that require human review. Automated incident response platforms like BitLyft AIR handle the investigation, triage, and response to the majority of alert types autonomously, routing only genuine, high-confidence incidents requiring human judgment to analysts.",
          ],
          bullets: [
            "Automated triage correlates signals across multiple tools to build high-fidelity cases",
            "Low-severity, repetitive alerts are resolved automatically without analyst involvement",
            "Analyst dashboards show only incidents that require human decision-making",
            "Response playbooks execute containment actions in seconds, not after a human review queue",
          ],
        },
      ],
      relatedSlugs: [
        "automated-incident-response",
        "soar",
        "siem",
        "mean-time-to-respond",
        "playbook",
      ],
    },
  },
  {
    slug: "automated-incident-response",
    term: "Automated Incident Response",
    definition:
      "The use of software to automatically detect, triage, contain, and remediate security incidents without requiring manual analyst intervention at every step, dramatically reducing mean time to respond (MTTR).",
    category: "Incident Response & SOC",
    blogSlug: "/blog/automated-response-vs-automated-remediation",
    content: {
      intro: [
        "Automated incident response is the capability that separates modern security operations from legacy reactive approaches. Rather than waiting for an analyst to notice an alert, investigate it, and manually execute containment steps — a process that can take hours — automated response systems detect, triage, and act within seconds.",
        "BitLyft AIR was built from the ground up around this principle: security incidents should be contained automatically, at machine speed, before attackers have time to establish persistence or cause damage.",
      ],
      sections: [
        {
          heading: "The stages of automated incident response",
          paragraphs: [
            "Automated incident response mirrors the traditional IR lifecycle but executes each stage programmatically. Detection triggers immediate triage, triage triggers containment, and containment triggers remediation — all without manual handoffs.",
          ],
          bullets: [
            "Detection: correlating signals from SIEM, EDR, identity, and email sources",
            "Triage: scoring incident severity and confidence using behavioral analytics",
            "Containment: executing immediate actions such as session revocation and account disable",
            "Investigation: enriching the incident with context from threat intelligence and telemetry",
            "Remediation: removing malicious artifacts, resetting credentials, and restoring configurations",
            "Notification: alerting affected users, managers, and security stakeholders",
          ],
        },
        {
          heading: "Automated response vs. automated remediation",
          paragraphs: [
            "These terms are often used interchangeably but describe different scopes. Automated remediation refers specifically to fixing a problem after it is identified — deleting a malicious file, resetting a password. Automated incident response is broader: it encompasses the full lifecycle from detection through final remediation, including investigation and notification steps.",
          ],
        },
        {
          heading: "Why speed matters in incident response",
          paragraphs: [
            "Attacker dwell time — the window between initial access and detection — has shortened dramatically as organizations have improved monitoring. But the response gap remains: even when detection is fast, the time to act is often measured in hours due to alert queues, escalation chains, and manual runbooks. Closing this gap is the core value proposition of automated response.",
          ],
          bullets: [
            "BEC fraud can be executed within minutes of account takeover",
            "Ransomware can encrypt thousands of files within seconds of detonation",
            "Mailbox forwarding rules can persist for weeks if not detected and removed quickly",
            "The window for session revocation closes as attackers establish additional persistence",
          ],
        },
        {
          heading: "BitLyft AIR: purpose-built automated response",
          paragraphs: [
            "BitLyft AIR integrates with Microsoft 365, Entra ID, EDR platforms, and SIEM solutions to execute response playbooks automatically. For common incident types — account takeover, phishing, inbox rule abuse, MFA fatigue — AIR resolves the entire incident from detection to remediation without analyst involvement, freeing your team to focus on strategic security work.",
          ],
        },
      ],
      relatedSlugs: [
        "soar",
        "playbook",
        "mean-time-to-respond",
        "alert-fatigue",
        "siem",
      ],
    },
  },
  // ── B ──────────────────────────────────────────────────────────────────────
  {
    slug: "bec",
    term: "BEC (Business Email Compromise)",
    definition:
      "A type of email fraud where attackers impersonate executives, vendors, or trusted parties to trick employees into transferring money or sensitive data. BEC attacks cost organizations billions of dollars annually.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/bec-response-microsoft-365-triage-containment",
    content: {
      intro: [
        "Business Email Compromise (BEC) is consistently ranked as the most financially damaging cybercrime category by the FBI's Internet Crime Complaint Center (IC3), generating losses that dwarf those from ransomware. Unlike ransomware, BEC attacks often require no malware — they succeed through social engineering and the exploitation of legitimate email infrastructure.",
        "Modern BEC attacks are increasingly sophisticated, frequently following a full account takeover rather than simple email spoofing, making them harder to detect and more convincing to victims.",
      ],
      sections: [
        {
          heading: "Types of BEC attacks",
          paragraphs: [
            "BEC attacks take several forms, each targeting different organizational processes or relationships. Understanding the attack types helps security teams tune detections and train the right employees.",
          ],
          bullets: [
            "CEO fraud: impersonating an executive to pressure employees into urgent wire transfers",
            "Vendor invoice fraud: hijacking supplier email threads to redirect payment to attacker accounts",
            "Payroll diversion: impersonating HR or an employee to redirect salary deposits",
            "Attorney impersonation: posing as legal counsel to request sensitive data or transfers",
            "Account takeover BEC: using a genuinely compromised email account for maximum authenticity",
          ],
        },
        {
          heading: "The anatomy of an ATO-based BEC attack",
          paragraphs: [
            "Account takeover BEC is the most dangerous variant. The attacker compromises a legitimate employee or vendor account — typically through phishing — and then monitors email threads for payment or sensitive data opportunities. Using the real account removes all spoofing indicators that would otherwise trigger email security tools.",
          ],
          bullets: [
            "Attacker phishes credentials or uses credential stuffing to compromise an account",
            "Access is maintained via new inbox rules that hide security alerts from the victim",
            "Attacker monitors payment threads over days or weeks, waiting for the right opportunity",
            "A fraudulent payment request is inserted into a legitimate thread at the ideal moment",
            "Funds are transferred before the fraud is detected, often across multiple accounts",
          ],
        },
        {
          heading: "Automated BEC response",
          paragraphs: [
            "Stopping BEC requires detecting the account takeover before the fraud occurs. BitLyft AIR monitors for the telltale behavioral signals of ATO — impossible travel, inbox rule creation, new device registration — and automatically contains the compromised account before the attacker can execute their fraud.",
          ],
        },
      ],
      relatedSlugs: [
        "account-takeover",
        "email-impersonation",
        "inbox-rule-abuse",
        "phishing",
        "mailbox-forwarding-rule",
      ],
    },
  },
  {
    slug: "brute-force-attack",
    term: "Brute Force Attack",
    definition:
      "An attack method that systematically tries every possible combination of credentials or encryption keys until the correct one is found. Modern brute force attacks often use credential stuffing to speed up the process.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Brute force attacks are among the oldest attack techniques in cybersecurity, yet they remain effective because of weak password policies, absent account lockout controls, and the sheer scale at which modern tools can attempt authentication.",
        "Contemporary brute force attacks are rarely truly exhaustive — attackers optimize with password spraying (trying common passwords across many accounts) and credential stuffing (trying known breach credentials) to minimize authentication attempts and evade lockout detection.",
      ],
      sections: [
        {
          heading: "Types of brute force attacks",
          paragraphs: [
            "Modern credential attacks have evolved far beyond sequential enumeration. Understanding the variants helps security teams build appropriate defenses.",
          ],
          bullets: [
            "Classic brute force: exhaustive enumeration of all character combinations",
            "Dictionary attack: trying words, phrases, and common password patterns",
            "Password spraying: trying a small set of common passwords against many accounts to avoid lockout",
            "Credential stuffing: replaying leaked username/password pairs from previous breaches",
            "Reverse brute force: starting with a known password and enumerating usernames",
          ],
        },
        {
          heading: "Defenses against brute force attacks",
          paragraphs: [
            "The most effective defenses combine technical controls that limit the effectiveness of guessing attacks with monitoring that detects abnormal authentication patterns.",
          ],
          bullets: [
            "Account lockout policies with progressive delays after failed attempts",
            "MFA as a second factor that invalidates credential-only attacks",
            "Conditional Access policies blocking authentication from high-risk IP ranges",
            "CAPTCHA and bot detection on authentication endpoints",
            "Monitoring and alerting on abnormal failed authentication volumes per account",
          ],
        },
      ],
      relatedSlugs: [
        "credential-stuffing",
        "mfa",
        "password-spray",
        "conditional-access",
        "account-takeover",
      ],
    },
  },
  // ── C ──────────────────────────────────────────────────────────────────────
  {
    slug: "conditional-access",
    term: "Conditional Access",
    definition:
      "An Azure AD / Entra ID policy framework that enforces access controls based on signals such as user identity, device compliance, location, and real-time risk score before granting access to applications.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Conditional Access is Microsoft's implementation of the zero trust principle within Entra ID. Rather than granting or denying access based solely on a valid password, Conditional Access evaluates a rich set of contextual signals at every login and enforces policies that match the risk posture of the request.",
        "A well-configured Conditional Access deployment is one of the most effective controls available for Microsoft 365 environments, blocking the majority of account takeover and lateral movement scenarios.",
      ],
      sections: [
        {
          heading: "Core Conditional Access signals",
          paragraphs: [
            "Conditional Access policies evaluate combinations of the following signals to determine the appropriate access decision for every authentication request.",
          ],
          bullets: [
            "User identity and group membership",
            "Device compliance status (managed vs. unmanaged, encrypted, patched)",
            "Location: named locations, country/region, IP address range",
            "Application being accessed and its sensitivity level",
            "Real-time sign-in risk score from Entra ID Identity Protection",
            "Client application type (browser, modern auth client, legacy auth)",
          ],
        },
        {
          heading: "Common Conditional Access policy patterns",
          paragraphs: [
            "Effective Conditional Access deployment follows a layered policy model. Start with baseline policies that block the highest-risk scenarios, then layer on more granular controls for sensitive applications and privileged accounts.",
          ],
          bullets: [
            "Require MFA for all users on all applications as a baseline",
            "Block authentication from legacy protocols that cannot support MFA",
            "Require compliant device for access to sensitive data workloads",
            "Block or require MFA step-up for logins from high-risk countries",
            "Enforce session controls and token lifetime limits for privileged roles",
            "Require phishing-resistant MFA (FIDO2 / certificate) for Global Admins",
          ],
        },
        {
          heading: "Conditional Access gaps and how AIR fills them",
          paragraphs: [
            "Conditional Access is a preventive control — it stops bad logins before they succeed. But it has gaps: legitimate sessions can be hijacked through token theft, and AiTM phishing bypasses MFA by stealing the post-MFA session cookie. BitLyft AIR complements Conditional Access by detecting and responding to threats that have bypassed preventive controls.",
          ],
        },
      ],
      relatedSlugs: [
        "zero-trust",
        "mfa",
        "entra-id",
        "risky-sign-in",
        "conditional-access",
      ],
    },
  },
  {
    slug: "credential-stuffing",
    term: "Credential Stuffing",
    definition:
      "An automated attack that uses large sets of stolen username/password pairs from data breaches to gain unauthorized access to user accounts, exploiting the common practice of password reuse.",
    category: "Identity & Access Management",
    blogSlug: "/blog/credential-stuffing-response-automated-blocks-hardening",
    content: {
      intro: [
        "Credential stuffing is the industrialization of password reuse exploitation. With billions of credentials available from public data breaches, attackers use automated tools to test these pairs against target services at scale, relying on the statistical certainty that some percentage of users reuse passwords across multiple sites.",
        "Unlike brute force attacks, credential stuffing uses valid credentials — making it significantly harder to detect through simple failed-login thresholds, since many attempts may succeed on first try.",
      ],
      sections: [
        {
          heading: "The credential stuffing ecosystem",
          paragraphs: [
            "Credential stuffing is supported by a mature criminal ecosystem of breach data aggregators, automated attack tools, and residential proxy networks that help attackers evade IP-based rate limiting.",
          ],
          bullets: [
            "Breach credential databases containing billions of username/password pairs",
            "Tools like Sentry MBA, OpenBullet, and SilverBullet for automated attack execution",
            "Residential proxy networks that rotate source IPs to evade blacklisting",
            "CAPTCHA-solving services using human workers or ML models",
            "Dark web markets where validated credential lists are sold after successful stuffing",
          ],
        },
        {
          heading: "Detection signals for credential stuffing",
          paragraphs: [
            "Credential stuffing attacks leave distinctive patterns in authentication logs. Monitoring for these signals enables early detection before widespread account compromise.",
          ],
          bullets: [
            "Spike in successful logins from new or unfamiliar IP addresses",
            "High volume of login attempts with a lower-than-normal failure rate (stuffing hits valid credentials)",
            "Logins from ASNs associated with hosting providers or proxy services",
            "Multiple accounts showing first-time login from the same IP block",
            "User agent strings associated with headless browsers or attack tools",
          ],
        },
        {
          heading: "Automated response and hardening",
          paragraphs: [
            "BitLyft AIR detects credential stuffing patterns in real time and can automatically block attacking IP ranges, force password resets on affected accounts, and require MFA step-up for sessions that match stuffing signatures — all without manual SOC intervention.",
          ],
        },
      ],
      relatedSlugs: [
        "brute-force-attack",
        "account-takeover",
        "mfa",
        "password-spray",
        "anomaly-detection",
      ],
    },
  },
  // ── D ──────────────────────────────────────────────────────────────────────
  {
    slug: "data-exfiltration",
    term: "Data Exfiltration",
    definition:
      "The unauthorized transfer of data from an organization to an external location, typically as part of a ransomware attack or espionage campaign. Detecting exfiltration early is critical to limiting breach impact.",
    category: "Threat Detection",
    content: {
      intro: [
        "Data exfiltration is the final stage of most breach campaigns — the point at which stolen data leaves the organization's control. In ransomware attacks, exfiltration precedes encryption and forms the basis for double-extortion threats. In espionage campaigns, exfiltration is the primary objective.",
        "Modern exfiltration techniques are designed to blend with legitimate business traffic, using cloud storage services, encrypted channels, and low-and-slow transfer rates to evade detection.",
      ],
      sections: [
        {
          heading: "Common exfiltration techniques",
          paragraphs: [
            "Attackers select exfiltration techniques based on the controls present in the target environment. Cloud-aware organizations need to monitor cloud storage and collaboration tools, not just traditional network egress points.",
          ],
          bullets: [
            "Upload to cloud storage: OneDrive, Google Drive, Dropbox, Mega",
            "Email forwarding to external accounts via inbox rules or direct sending",
            "DNS tunneling: encoding data in DNS queries to a controlled resolver",
            "HTTP/S data transfer to attacker-controlled servers using legitimate-looking domains",
            "Steganography: hiding data within image or document files uploaded to public services",
          ],
        },
        {
          heading: "Detection strategies",
          paragraphs: [
            "Early exfiltration detection requires behavioral baselines and DLP controls that flag anomalous data movement. Volume, velocity, and destination are the three primary dimensions to monitor.",
          ],
          bullets: [
            "Unusual volume of SharePoint/OneDrive downloads outside business hours",
            "New external email forwarding rules created by non-admin users",
            "Large file uploads to consumer cloud storage from corporate devices",
            "Access to sensitive document repositories not previously accessed by the user",
          ],
        },
      ],
      relatedSlugs: [
        "ransomware",
        "inbox-rule-abuse",
        "mailbox-forwarding-rule",
        "lateral-movement",
        "incident-response",
      ],
    },
  },
  {
    slug: "dmarc",
    term: "DMARC (Domain-based Message Authentication Reporting and Conformance)",
    definition:
      "An email authentication policy that builds on SPF and DKIM, instructing receiving mail servers how to handle messages that fail authentication checks — typically quarantine or reject — and providing reporting on abuse.",
    category: "Cloud & Email Security",
    content: {
      intro: [
        "DMARC is the capstone of email authentication. Where SPF verifies the sending server and DKIM verifies message integrity, DMARC tells receiving servers what to do when those checks fail — and provides organizations with reports on who is sending email on their behalf.",
        "Without an enforced DMARC policy, an organization's domain can be spoofed by anyone, allowing attackers to send phishing emails that appear to come from a trusted corporate address.",
      ],
      sections: [
        {
          heading: "The three DMARC policy levels",
          paragraphs: [
            "DMARC operates at three progressively strict policy levels. Organizations should aim for p=reject, but staged deployment starting at p=none allows monitoring before enforcement.",
          ],
          bullets: [
            "p=none: Monitor mode — collect reports but take no action on failing messages",
            "p=quarantine: Route failing messages to the spam/junk folder",
            "p=reject: Block failing messages entirely at the receiving mail server",
          ],
        },
        {
          heading: "DMARC reporting and visibility",
          paragraphs: [
            "DMARC's reporting capability is independent of its enforcement policy. Even at p=none, organizations receive aggregate reports (RUA) detailing every server sending email on their domain's behalf — legitimate and malicious. This visibility is invaluable for discovering shadow IT email infrastructure and identifying spoofing campaigns before enforcement is enabled.",
          ],
        },
        {
          heading: "DMARC and email impersonation response",
          paragraphs: [
            "When BitLyft AIR detects an email impersonation attack, DMARC enforcement is a key remediation recommendation. AIR's automated response playbooks include checking and reporting on the target domain's DMARC posture as part of the investigation workflow.",
          ],
        },
      ],
      relatedSlugs: [
        "spf",
        "dkim",
        "email-impersonation",
        "phishing",
        "dmarc-enforcement",
      ],
    },
  },
  {
    slug: "dmarc-enforcement",
    term: "DMARC Enforcement",
    definition:
      "The state of a DMARC policy set to p=quarantine or p=reject, meaning unauthenticated emails claiming to be from your domain are quarantined or blocked. Without enforcement, DMARC provides visibility but no protection.",
    category: "Cloud & Email Security",
    content: {
      intro: [
        "DMARC enforcement is the transition from passive monitoring to active protection. Many organizations deploy DMARC at p=none for months or years without moving to enforcement, leaving their domain open to impersonation despite having monitoring in place.",
        "Moving to p=reject is the single most impactful step an organization can take to prevent direct domain spoofing in phishing and BEC campaigns.",
      ],
      sections: [
        {
          heading: "The path to p=reject",
          paragraphs: [
            "The reason most organizations stall at p=none is legitimate email failing DMARC alignment. A disciplined deployment process resolves this before enforcement is enabled.",
          ],
          bullets: [
            "Step 1: Deploy p=none and collect RUA reports for 30 days",
            "Step 2: Identify all legitimate sending sources and ensure SPF/DKIM alignment",
            "Step 3: Move to p=quarantine and monitor for business impact",
            "Step 4: Promote to p=reject after confirming no legitimate mail is blocked",
            "Step 5: Maintain ongoing monitoring for new sending sources",
          ],
        },
        {
          heading: "Subdomain policy",
          paragraphs: [
            "DMARC's sp= tag controls the policy for subdomains not covered by their own DMARC record. Setting sp=reject ensures that attackers cannot spoof subdomains (e.g., invoices.yourdomain.com) even if the parent domain is enforced.",
          ],
        },
      ],
      relatedSlugs: ["dmarc", "spf", "dkim", "email-impersonation", "bec"],
    },
  },
  // ── E ──────────────────────────────────────────────────────────────────────
  {
    slug: "email-impersonation",
    term: "Email Impersonation",
    definition:
      "An attack technique where adversaries craft emails that appear to originate from a trusted sender — an executive, vendor, or known brand — by abusing lookalike domains, display name spoofing, or compromised accounts.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/email-impersonation-response-automate-domain-blocks-user-protection",
    content: {
      intro: [
        "Email impersonation is the foundation of the most financially damaging attacks in cybersecurity — BEC fraud, executive phishing, and vendor invoice fraud. By making an email appear to come from a trusted source, attackers bypass both technical controls and user skepticism.",
        "Modern impersonation techniques range from simple display name spoofing to full account takeover of a trusted party's actual email account, making detection progressively more challenging.",
      ],
      sections: [
        {
          heading: "Impersonation techniques",
          paragraphs: [
            "Attackers choose their impersonation technique based on available resources and target sophistication. Understanding each technique helps security teams build the right detection coverage.",
          ],
          bullets: [
            "Display name spoofing: setting the friendly name to 'CEO Name' while using an unrelated email address",
            "Lookalike domain: registering a domain similar to the target (corp0ration.com vs corporation.com)",
            "Cousin domain: registering a visually similar TLD (company.co instead of company.com)",
            "Email header manipulation: forging the Reply-To address to redirect responses",
            "Account takeover: using a genuinely compromised account for full authenticity",
          ],
        },
        {
          heading: "Detection and automated response",
          paragraphs: [
            "Detecting impersonation requires multi-layered controls — DMARC enforcement stops domain spoofing, but cannot stop display name spoofing or ATO-based impersonation. BitLyft AIR's email impersonation playbook correlates DMARC failures, lookalike domain registrations, and behavioral signals to identify and contain impersonation campaigns automatically.",
          ],
          bullets: [
            "Block sending domains that fail DMARC alignment checks",
            "Flag emails where the Reply-To domain differs from the From domain",
            "Monitor threat intelligence feeds for newly registered lookalike domains",
            "Automatically purge delivered impersonation emails from all recipient mailboxes",
            "Notify targeted users and provide actionable guidance on avoiding BEC fraud",
          ],
        },
      ],
      relatedSlugs: ["bec", "phishing", "dmarc", "spear-phishing", "account-takeover"],
    },
  },
  {
    slug: "entra-id",
    term: "Entra ID (Azure Active Directory)",
    definition:
      "Microsoft's cloud-based identity and access management service, formerly known as Azure Active Directory. It manages authentication, conditional access, MFA, and identity risk for Microsoft 365 and third-party apps.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Microsoft Entra ID (formerly Azure Active Directory) is the identity foundation for Microsoft 365 and the primary target for cloud identity attacks. It manages user accounts, group memberships, application access, and authentication policies across the Microsoft cloud ecosystem.",
        "Because Entra ID is the gateway to Exchange Online, SharePoint, Teams, and hundreds of SaaS applications, a compromise of Entra ID is effectively a compromise of the entire Microsoft 365 tenant.",
      ],
      sections: [
        {
          heading: "Key Entra ID security features",
          paragraphs: [
            "Entra ID provides a robust set of native security controls. Organizations that fail to configure these controls leave significant gaps in their identity protection posture.",
          ],
          bullets: [
            "Identity Protection: real-time risk scoring for sign-ins and users based on behavioral signals",
            "Conditional Access: policy-based access controls that respond to risk signals",
            "Privileged Identity Management (PIM): just-in-time privileged role activation",
            "Access Reviews: periodic certification of group memberships and role assignments",
            "Authentication methods management: enforcing phishing-resistant MFA options",
          ],
        },
        {
          heading: "Entra ID attack surface",
          paragraphs: [
            "Entra ID's attack surface is large because it is accessible from the public internet and trusted by so many services. Common attack vectors include phishing for credentials, AiTM session token theft, OAuth app consent abuse, and exploitation of legacy authentication protocols.",
          ],
          bullets: [
            "Legacy authentication protocols that bypass MFA (IMAP, POP3, basic auth)",
            "OAuth app consent abuse granting attacker apps persistent access",
            "Privileged role assignments exposed to phishing-compromised accounts",
            "Guest user accounts with excessive permissions",
            "Service principals with over-privileged application permissions",
          ],
        },
        {
          heading: "BitLyft AIR and Entra ID",
          paragraphs: [
            "BitLyft AIR integrates natively with Microsoft Entra ID through the Microsoft Graph API, enabling automated response actions including session revocation, account disable, MFA method removal, and Conditional Access policy updates — all triggered automatically when identity threats are detected.",
          ],
        },
      ],
      relatedSlugs: [
        "active-directory",
        "conditional-access",
        "mfa",
        "risky-sign-in",
        "oauth-app-consent-attack",
      ],
    },
  },
  // ── I ──────────────────────────────────────────────────────────────────────
  {
    slug: "identity-threat-detection-response",
    term: "Identity Threat Detection and Response (ITDR)",
    definition:
      "A security discipline focused on detecting and responding to attacks that target identity infrastructure — including compromised credentials, privilege escalation, lateral movement, and identity provider abuse.",
    category: "Identity & Access Management",
    blogSlug: "/blog/itdr-practical-guide-small-soc-teams",
    content: {
      intro: [
        "Identity Threat Detection and Response (ITDR) emerged as a distinct security discipline in response to the growing centrality of identity as both the primary attack vector and the most valuable target in modern enterprise environments.",
        "Where traditional security focused on network perimeters and endpoints, ITDR focuses on the identity layer — detecting when credentials are compromised, when privilege is abused, and when identity infrastructure itself is under attack.",
      ],
      sections: [
        {
          heading: "Why identity is the new perimeter",
          paragraphs: [
            "The shift to cloud and SaaS has dissolved the traditional network perimeter. Users access resources from any device, any location, over the public internet. In this model, identity is the only consistent control point — and attackers have adapted accordingly. The vast majority of cloud breaches now involve compromised credentials rather than network exploitation.",
          ],
        },
        {
          heading: "Core ITDR capabilities",
          paragraphs: [
            "A mature ITDR program combines detection coverage across the full identity attack lifecycle with automated response capabilities that match the speed of identity-based attacks.",
          ],
          bullets: [
            "Credential compromise detection: impossible travel, password spray, credential stuffing",
            "Privilege escalation monitoring: new role assignments, PIM activations, admin account creation",
            "Lateral movement detection: pass-the-hash, Kerberoasting, service account abuse",
            "Identity provider attack detection: DCSync, Golden Ticket, federation trust manipulation",
            "Post-compromise persistence detection: inbox rules, OAuth app consent, new MFA device registration",
          ],
        },
        {
          heading: "ITDR and BitLyft AIR",
          paragraphs: [
            "BitLyft AIR functions as a purpose-built ITDR platform for Microsoft 365 and Entra ID environments. It continuously monitors identity telemetry, correlates signals across the full attack lifecycle, and executes automated response playbooks that contain identity threats before they escalate to full compromise.",
          ],
        },
      ],
      relatedSlugs: [
        "account-takeover",
        "privilege-escalation",
        "lateral-movement",
        "entra-id",
        "automated-incident-response",
      ],
    },
  },
  {
    slug: "impossible-travel",
    term: "Impossible Travel",
    definition:
      "A risk signal generated when a user account shows login events from two geographically distant locations in a time window that makes physical travel between them impossible, suggesting account compromise.",
    category: "Threat Detection",
    blogSlug: "/blog/impossible-travel-risky-sign-ins-automated-triage",
    content: {
      intro: [
        "Impossible travel is one of the most reliable behavioral indicators of account compromise. When an account logs in from New York and then from London twenty minutes later, the only explanations are compromise, VPN usage, or misconfigured location data — and a well-tuned detection system can distinguish between them.",
        "Microsoft Entra ID Identity Protection includes built-in impossible travel detection, but organizations need automated response capabilities to act on these signals fast enough to prevent damage.",
      ],
      sections: [
        {
          heading: "How impossible travel detection works",
          paragraphs: [
            "Impossible travel detection calculates the minimum time required to physically travel between two login locations based on the distance and realistic travel speeds, then compares this to the actual time elapsed between the two login events. If the time is physically impossible, the alert fires.",
          ],
          bullets: [
            "Geolocation is derived from IP address using threat intelligence enrichment databases",
            "VPN, Tor, and proxy usage can trigger false positives and must be accounted for in tuning",
            "Named locations in Entra ID Conditional Access can suppress alerts for known office IPs",
            "Risk score accounts for other signals to reduce false positive rates",
          ],
        },
        {
          heading: "Response automation",
          paragraphs: [
            "An impossible travel alert represents a time-critical event. Attackers who have just logged in are establishing persistence — creating inbox rules, registering new MFA devices, or exfiltrating data. BitLyft AIR responds automatically to high-confidence impossible travel signals, revoking all sessions and requiring re-authentication before any further activity can occur.",
          ],
        },
      ],
      relatedSlugs: [
        "risky-sign-in",
        "account-takeover",
        "anomaly-detection",
        "conditional-access",
        "session-revocation",
      ],
    },
  },
  {
    slug: "inbox-rule-abuse",
    term: "Inbox Rule Abuse",
    definition:
      "A post-compromise technique where attackers create hidden mailbox rules in Microsoft 365 or Exchange to auto-forward emails to external addresses, delete security alerts, or move messages to obscure folders to maintain persistent access.",
    category: "Cloud & Email Security",
    blogSlug: "/blog/microsoft-365-mailbox-rule-abuse-detection-automated-cleanup",
    content: {
      intro: [
        "Inbox rule abuse is one of the most common and damaging post-compromise techniques in Microsoft 365 environments. After gaining access to an account — through phishing, credential stuffing, or MFA bypass — attackers create mailbox rules that ensure they maintain access, receive forwarded emails, and suppress security notifications.",
        "Because inbox rules are a normal user feature, they often go undetected for weeks or months. By the time the compromise is discovered, extensive email data may have been exfiltrated.",
      ],
      sections: [
        {
          heading: "Common malicious inbox rule patterns",
          paragraphs: [
            "Attackers create inbox rules that serve specific operational purposes. Recognizing these patterns is essential for detection.",
          ],
          bullets: [
            "Auto-forward all incoming email to an external address (attacker's mailbox)",
            "Delete emails with subjects containing 'password reset', 'security alert', or 'suspicious'",
            "Move IT or HR emails to the RSS Feeds or Deleted Items folder",
            "Mark emails from security vendors or IT as read to prevent user noticing",
            "Forward only emails mentioning specific keywords: 'wire transfer', 'invoice', 'payment'",
          ],
        },
        {
          heading: "Detection and automated cleanup",
          paragraphs: [
            "Detecting malicious inbox rules requires monitoring rule creation events via Microsoft 365 Unified Audit Log or Microsoft Defender for Office 365. BitLyft AIR monitors for rule creation that matches known malicious patterns and automatically deletes offending rules, revokes the attacker's session, and notifies the account owner.",
          ],
          bullets: [
            "Alert on any new inbox rule that forwards to an external domain",
            "Flag rules that delete or hide messages matching security-related keywords",
            "Detect rules created outside business hours or from unusual IP addresses",
            "Automatically enumerate and delete all rules created in the same session as a suspected compromise",
          ],
        },
      ],
      relatedSlugs: [
        "mailbox-forwarding-rule",
        "account-takeover",
        "bec",
        "data-exfiltration",
        "automated-incident-response",
      ],
    },
  },
  {
    slug: "incident-response",
    term: "Incident Response (IR)",
    definition:
      "The organized approach to addressing and managing the aftermath of a security breach or cyberattack. Effective IR minimizes damage, reduces recovery time and costs, and prevents recurrence.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "Incident response is the structured process by which security teams detect, contain, investigate, remediate, and recover from security events. A well-designed IR program minimizes the business impact of breaches and reduces the likelihood of recurrence through systematic root cause analysis.",
        "Modern IR increasingly relies on automation to compress the time between detection and containment — the window in which attackers cause the most damage.",
      ],
      sections: [
        {
          heading: "The IR lifecycle",
          paragraphs: [
            "The NIST incident response lifecycle provides a widely-adopted framework for organizing IR activities into four phases.",
          ],
          bullets: [
            "Preparation: building playbooks, training teams, configuring detection tools",
            "Detection & Analysis: identifying events, triaging alerts, confirming incidents",
            "Containment, Eradication & Recovery: stopping the attack, removing attacker access, restoring systems",
            "Post-Incident Activity: root cause analysis, lessons learned, control improvements",
          ],
        },
        {
          heading: "Automation's role in modern IR",
          paragraphs: [
            "Manual IR processes are inherently slow. Automation accelerates the containment and eradication phases — the most time-critical stages — while freeing analyst time for investigation and post-incident analysis. BitLyft AIR handles the containment and eradication phases automatically for well-understood incident types, reducing MTTR from hours to seconds.",
          ],
        },
      ],
      relatedSlugs: [
        "automated-incident-response",
        "soar",
        "playbook",
        "mean-time-to-respond",
        "forensic-investigation",
      ],
    },
  },
  // ── K ──────────────────────────────────────────────────────────────────────
  {
    slug: "kerberoasting",
    term: "Kerberoasting",
    definition:
      "An Active Directory attack that requests Kerberos service tickets for service accounts and cracks them offline to recover plaintext passwords. It requires no elevated privileges to execute and is widely used in lateral movement.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Kerberoasting is a highly effective and difficult-to-detect Active Directory attack that allows any authenticated domain user to request service tickets for service accounts and then attempt to crack them offline. Because the attack uses normal Kerberos protocol functionality, it generates minimal suspicious traffic.",
        "Service accounts are particularly vulnerable because they often have weak, never-changing passwords set by administrators who assumed the account would only be used by automated processes.",
      ],
      sections: [
        {
          heading: "How Kerberoasting works",
          paragraphs: [
            "The attack exploits the way Kerberos encrypts service tickets — using the service account's password hash. Any domain user can request a service ticket for any SPN-registered service account, then take that ticket offline and crack it using GPU-accelerated tools.",
          ],
          bullets: [
            "Attacker enumerates service accounts with Service Principal Names (SPNs) registered",
            "Requests Kerberos service tickets for those accounts — a normal, logged operation",
            "Extracts the tickets from memory using tools like Mimikatz or Rubeus",
            "Cracks the ticket offline using Hashcat or John the Ripper",
            "Uses recovered credentials to access systems or escalate privileges",
          ],
        },
        {
          heading: "Detection and defense",
          paragraphs: [
            "Kerberoasting detection relies on monitoring for unusual TGS request patterns — particularly high volumes of service ticket requests from a single account, or requests for service accounts that are rarely used.",
          ],
          bullets: [
            "Enable advanced Kerberos auditing (Event ID 4769) and monitor for RC4-HMAC ticket requests",
            "Use Microsoft Defender for Identity honeypot service accounts to detect enumeration",
            "Enforce strong, randomly generated passwords (25+ characters) on all service accounts",
            "Use Managed Service Accounts (MSA) or Group Managed Service Accounts (gMSA) to auto-rotate passwords",
            "Restrict which accounts have SPNs registered and review regularly",
          ],
        },
      ],
      relatedSlugs: [
        "active-directory",
        "lateral-movement",
        "pass-the-hash",
        "privilege-escalation",
        "golden-ticket-attack",
      ],
    },
  },
  // ── L ──────────────────────────────────────────────────────────────────────
  {
    slug: "lateral-movement",
    term: "Lateral Movement",
    definition:
      "Techniques adversaries use to progressively move through a network after initial access, seeking higher privileges and access to sensitive systems. Common methods include pass-the-hash, Kerberoasting, and remote service exploitation.",
    category: "Threat Detection",
    content: {
      intro: [
        "Lateral movement is the phase of an attack that transforms an initial foothold into broad network access. Starting from a single compromised endpoint or credential, an attacker traverses the environment seeking higher privileges, access to sensitive data stores, and control over critical systems.",
        "Detecting lateral movement early — before an attacker reaches their objective — is one of the most impactful capabilities a security team can develop.",
      ],
      sections: [
        {
          heading: "Common lateral movement techniques",
          paragraphs: [
            "MITRE ATT&CK catalogues dozens of lateral movement techniques. The most common in enterprise environments leverage Windows authentication protocols and administrative tooling.",
          ],
          bullets: [
            "Pass-the-Hash: authenticating with captured NTLM hashes",
            "Pass-the-Ticket: reusing stolen Kerberos tickets",
            "Remote Service exploitation: WMI, PsExec, remote PowerShell",
            "Kerberoasting: cracking service account tickets for credential access",
            "RDP (Remote Desktop Protocol) from compromised endpoints",
            "Abuse of legitimate admin tools: SCCM, Group Policy, task scheduler",
          ],
        },
        {
          heading: "Detection strategies",
          paragraphs: [
            "Lateral movement detection requires correlating authentication events across multiple systems. A single unusual login is noise — the same account logging into five systems it has never accessed before is a signal.",
          ],
          bullets: [
            "Baseline normal authentication patterns per user and flag deviations",
            "Monitor for admin tool use from endpoints that are not admin workstations",
            "Alert on authentication to systems outside a user's typical access profile",
            "Detect hash-based authentication patterns in NTLM event logs",
          ],
        },
      ],
      relatedSlugs: [
        "pass-the-hash",
        "kerberoasting",
        "privilege-escalation",
        "active-directory",
        "network-segmentation",
      ],
    },
  },
  // ── M ──────────────────────────────────────────────────────────────────────
  {
    slug: "mailbox-forwarding-rule",
    term: "Mailbox Forwarding Rule",
    definition:
      "A Microsoft 365 configuration that automatically forwards a copy of all incoming emails to an external address. Attackers commonly configure these after compromising an account to maintain long-term email access.",
    category: "Cloud & Email Security",
    blogSlug: "/blog/mailbox-forwarding-rule-detection-automated-discovery-removal",
    content: {
      intro: [
        "Mailbox forwarding rules are a critical post-compromise persistence mechanism in Microsoft 365 attacks. By creating a forwarding rule, an attacker ensures they receive a copy of every incoming email even after the compromised account's password is reset — maintaining intelligence access for BEC fraud, insider threat, and espionage campaigns.",
        "Microsoft has taken steps to limit automatic external forwarding at the tenant level, but determined attackers use alternative techniques — client-side rules, transport rules, and OAuth app access — to achieve the same result.",
      ],
      sections: [
        {
          heading: "Types of email forwarding configurations",
          paragraphs: [
            "Distinguishing between the different methods of email forwarding is important for comprehensive detection coverage.",
          ],
          bullets: [
            "Inbox rules (client-side): created via Outlook, OWA, or API calls — visible in mailbox rules",
            "SMTP forwarding (ForwardingSMTPAddress): set directly on the mailbox object in Exchange Online",
            "Transport rules: organization-level rules set by admins in the Exchange admin center",
            "OAuth app access: third-party apps granted Mail.Read permissions without rules",
          ],
        },
        {
          heading: "Detection and automated removal",
          paragraphs: [
            "BitLyft AIR monitors all four forwarding vectors and automatically removes unauthorized forwarding configurations when a compromise is detected — regardless of which mechanism was used to establish them.",
          ],
          bullets: [
            "Audit ForwardingSMTPAddress changes on all mailboxes via Exchange Online PowerShell",
            "Monitor inbox rule creation events in Unified Audit Log for external forwarding",
            "Review OAuth app permissions for Mail.Read and Mail.ReadWrite grants",
            "Automatically clear all forwarding configurations as part of ATO response playbook",
          ],
        },
      ],
      relatedSlugs: [
        "inbox-rule-abuse",
        "account-takeover",
        "bec",
        "data-exfiltration",
        "oauth-app-consent-attack",
      ],
    },
  },
  {
    slug: "mfa",
    term: "MFA (Multi-Factor Authentication)",
    definition:
      "An authentication method requiring users to verify their identity using two or more factors: something they know (password), something they have (device), or something they are (biometric). MFA is one of the highest-impact security controls available.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Multi-factor authentication is one of the most consistently recommended and highest-impact security controls in cybersecurity. Microsoft's own data indicates that MFA blocks over 99.9% of automated account compromise attacks — making it the single most cost-effective identity control available.",
        "However, MFA is not a silver bullet. Increasingly sophisticated attacks — AiTM phishing, MFA fatigue, SIM swapping — specifically target MFA to bypass it, requiring organizations to think carefully about their MFA implementation.",
      ],
      sections: [
        {
          heading: "MFA factor types",
          paragraphs: [
            "Not all MFA methods are equally secure. The choice of second factor significantly affects the attack surface.",
          ],
          bullets: [
            "SMS/Voice OTP: the weakest form — vulnerable to SIM swapping and SS7 attacks",
            "TOTP authenticator apps (Microsoft/Google Authenticator): resistant to SIM swap but still phishable via AiTM",
            "Push notification (Microsoft Authenticator): convenient but vulnerable to MFA fatigue attacks",
            "FIDO2 hardware keys (YubiKey, Passkey): phishing-resistant — the strongest available option",
            "Certificate-based authentication: phishing-resistant when bound to managed devices",
          ],
        },
        {
          heading: "MFA bypass techniques",
          paragraphs: [
            "Understanding how MFA is bypassed is essential for choosing the right implementation and building compensating detections.",
          ],
          bullets: [
            "AiTM phishing: a proxy intercepts the real authentication and steals the post-MFA session token",
            "MFA fatigue: flood a user with push notifications until they approve out of frustration",
            "SIM swapping: social engineer the mobile carrier to port the victim's number to attacker's SIM",
            "Account recovery bypass: exploiting weak account recovery flows that bypass MFA",
          ],
        },
        {
          heading: "Phishing-resistant MFA",
          paragraphs: [
            "FIDO2 and certificate-based authentication are the only MFA methods that are truly phishing-resistant, because the cryptographic credential is bound to the legitimate domain and cannot be intercepted by a proxy. Microsoft recommends phishing-resistant MFA for all privileged accounts.",
          ],
        },
      ],
      relatedSlugs: [
        "mfa-fatigue-attack",
        "conditional-access",
        "entra-id",
        "account-takeover",
        "session-revocation",
      ],
    },
  },
  {
    slug: "mfa-fatigue-attack",
    term: "MFA Fatigue Attack",
    definition:
      "A social engineering attack in which adversaries repeatedly trigger push-based MFA notifications until the user approves one out of frustration or confusion. Also known as MFA push bombing.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/mfa-fatigue-attack-response-instant-containment",
    content: {
      intro: [
        "MFA fatigue (push bombing) has emerged as one of the most effective techniques for bypassing multi-factor authentication in Microsoft 365 and enterprise SSO environments. The attack is conceptually simple: if an attacker has a victim's credentials, they can trigger an endless stream of MFA push notifications and wait for the user to approve one.",
        "High-profile breaches including Uber, Okta, and Microsoft itself have been attributed to MFA fatigue attacks, demonstrating that even security-sophisticated organizations are vulnerable.",
      ],
      sections: [
        {
          heading: "How MFA fatigue attacks unfold",
          paragraphs: [
            "The attack follows a precise sequence that exploits both technical and human factors.",
          ],
          bullets: [
            "Attacker obtains valid credentials through phishing or breach database",
            "Attacker initiates repeated authentication attempts, each triggering a push notification",
            "User receives a stream of MFA push notifications — potentially dozens in minutes",
            "User approves notification out of confusion, frustration, or to stop the notifications",
            "Attacker gains authenticated access and immediately begins establishing persistence",
          ],
        },
        {
          heading: "Defenses against MFA fatigue",
          paragraphs: [
            "The most effective defense is switching from simple push notifications to number matching or phishing-resistant FIDO2 — methods that require the user to actively confirm a displayed code rather than simply clicking 'Approve'.",
          ],
          bullets: [
            "Enable Number Matching in Microsoft Authenticator: user must type the number shown on the login screen",
            "Enable Additional Context: show user the application name and geographic location in the push",
            "Limit authentication attempts per time window via Conditional Access",
            "Monitor for abnormal MFA request volumes and alert on potential push bombing",
            "Transition high-risk users to FIDO2 hardware keys",
          ],
        },
        {
          heading: "Automated detection and response",
          paragraphs: [
            "BitLyft AIR monitors Microsoft Authenticator and Entra ID sign-in logs for MFA request volume anomalies. When a push bombing pattern is detected — multiple failed MFA attempts in a short window followed by a successful one from the same IP — AIR automatically revokes the session, disables the account temporarily, and notifies the user of the suspected attack.",
          ],
        },
      ],
      relatedSlugs: [
        "mfa",
        "account-takeover",
        "session-revocation",
        "conditional-access",
        "impossible-travel",
      ],
    },
  },
  {
    slug: "mean-time-to-respond",
    term: "Mean Time to Respond (MTTR)",
    definition:
      "The average time from when a security incident is detected to when it is fully contained and remediated. Automated incident response platforms like BitLyft AIR are designed to drive MTTR toward zero.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "Mean Time to Respond (MTTR) is the most important operational metric for a security operations center. It directly measures the window of opportunity available to attackers — the longer the MTTR, the more damage an attacker can cause between initial detection and containment.",
        "Industry benchmarks place average MTTR for enterprise SOCs at hours or even days. BitLyft AIR drives MTTR to seconds for automated playbook-driven incident types.",
      ],
      sections: [
        {
          heading: "Why MTTR matters",
          paragraphs: [
            "The relationship between MTTR and breach cost is direct and well-documented. Every minute of uncontained access after detection represents additional data that can be exfiltrated, additional systems that can be compromised, and additional persistence mechanisms that can be established.",
          ],
          bullets: [
            "Ransomware can encrypt thousands of files within seconds of detonation",
            "BEC fraud can be executed within minutes of initial account access",
            "Mailbox forwarding rules established during a five-minute window can persist for months",
            "Attackers who establish additional persistence mechanisms are significantly harder to fully eradicate",
          ],
        },
        {
          heading: "Reducing MTTR with automation",
          paragraphs: [
            "The primary driver of high MTTR is the human handoff chain: alert fires, analyst investigates, analyst escalates, senior analyst approves response, response is executed manually. Each handoff adds minutes to hours. Automation eliminates handoffs for well-understood incident types — executing containment in seconds after detection.",
          ],
        },
      ],
      relatedSlugs: [
        "automated-incident-response",
        "alert-fatigue",
        "soar",
        "playbook",
        "incident-response",
      ],
    },
  },
  {
    slug: "mitre-attack",
    term: "MITRE ATT&CK",
    definition:
      "A globally accessible knowledge base of adversary tactics, techniques, and procedures (TTPs) based on real-world observations. Security teams use ATT&CK to understand attacker behavior, prioritize defenses, and map detections.",
    category: "Threat Detection",
    content: {
      intro: [
        "MITRE ATT&CK is the de facto standard framework for understanding and describing adversary behavior. Maintained by MITRE Corporation, it catalogs hundreds of techniques organized across 14 tactic categories — from initial access and execution through persistence, privilege escalation, and exfiltration.",
        "ATT&CK's value lies in its grounding in real-world attack observations rather than theoretical threat models, making it directly actionable for detection engineering and red team exercises.",
      ],
      sections: [
        {
          heading: "ATT&CK tactics relevant to BitLyft AIR",
          paragraphs: [
            "BitLyft AIR's detection and response capabilities map directly to ATT&CK tactics commonly seen in Microsoft 365 and identity-based attacks.",
          ],
          bullets: [
            "Initial Access (T1566): phishing, valid accounts",
            "Persistence (T1078, T1098): account manipulation, inbox rule abuse, OAuth app consent",
            "Privilege Escalation (T1548): abuse elevation control mechanisms",
            "Defense Evasion (T1564): hide artifacts — inbox rules that delete security alerts",
            "Credential Access (T1110, T1558): brute force, Kerberoasting",
            "Lateral Movement (T1550): use alternate authentication material",
            "Exfiltration (T1048, T1567): exfiltration over web service, forwarding to external accounts",
          ],
        },
        {
          heading: "Using ATT&CK for detection engineering",
          paragraphs: [
            "Security teams use ATT&CK to identify gaps in their detection coverage by mapping existing rules to technique IDs and identifying which techniques have no corresponding detection. BitLyft AIR's detection library is built and maintained against the ATT&CK matrix, ensuring systematic coverage of the most common attack techniques.",
          ],
        },
      ],
      relatedSlugs: [
        "ttp",
        "threat-hunting",
        "lateral-movement",
        "incident-response",
        "siem",
      ],
    },
  },
  // ── O ──────────────────────────────────────────────────────────────────────
  {
    slug: "oauth-app-consent-attack",
    term: "OAuth App Consent Attack",
    definition:
      "An attack technique where adversaries trick users into granting a malicious OAuth application access to their Microsoft 365 or Google Workspace account, bypassing password-based authentication entirely.",
    category: "Cloud & Email Security",
    blogSlug: "/blog/malicious-oauth-app-consent-investigation-revocation",
    content: {
      intro: [
        "OAuth app consent attacks (also called illicit consent grant attacks) represent one of the most insidious persistence mechanisms in cloud environments. By convincing a user to grant permissions to a malicious application, an attacker gains persistent API-level access to that user's account — an access method that survives password resets and MFA changes.",
        "The attack exploits the legitimate OAuth 2.0 authorization flow, meaning it appears in logs as normal application consent activity unless specifically monitored for.",
      ],
      sections: [
        {
          heading: "How the attack works",
          paragraphs: [
            "The attacker registers a malicious application in Azure AD / Entra ID and crafts a phishing link that initiates an OAuth consent flow requesting the desired permissions. When the victim clicks the link and approves the consent, the application receives persistent tokens — no password required.",
          ],
          bullets: [
            "Malicious app is registered in a attacker-controlled Azure AD tenant",
            "Phishing email contains a link that initiates an OAuth authorization request",
            "User approves the consent, granting the app permissions (often Mail.Read, Files.Read.All)",
            "App receives refresh tokens that remain valid until explicitly revoked",
            "Attacker uses tokens for ongoing mail access, file exfiltration, or BEC execution",
          ],
        },
        {
          heading: "Detection and revocation",
          paragraphs: [
            "Detecting consent grant attacks requires monitoring Azure AD audit logs for consent events, particularly for applications requesting high-privilege permissions from non-admin users.",
          ],
          bullets: [
            "Monitor for Consent to application events in Entra ID audit logs",
            "Flag consent grants from unverified publishers requesting mail or file access permissions",
            "Review existing OAuth app grants quarterly for over-privileged or unknown applications",
            "Restrict user consent to verified publishers using Entra ID consent policies",
            "BitLyft AIR automatically revokes suspicious OAuth grants and notifies affected users",
          ],
        },
      ],
      relatedSlugs: [
        "entra-id",
        "account-takeover",
        "mailbox-forwarding-rule",
        "inbox-rule-abuse",
        "session-revocation",
      ],
    },
  },
  // ── P ──────────────────────────────────────────────────────────────────────
  {
    slug: "pass-the-hash",
    term: "Pass-the-Hash",
    definition:
      "An attack technique that captures an NTLM or LM password hash and uses it directly for authentication, bypassing the need to know the actual plaintext password. Common in post-exploitation lateral movement.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Pass-the-hash (PtH) is a foundational lateral movement technique in Windows environments. Because NTLM authentication accepts the hash directly without requiring the plaintext password to be derived from it, an attacker who can extract password hashes from memory can immediately authenticate as that user to any system accepting NTLM authentication.",
        "PtH attacks became widespread after tools like Mimikatz made hash extraction trivially simple, and they remain highly effective in environments that have not implemented modern Windows authentication hardening.",
      ],
      sections: [
        {
          heading: "How pass-the-hash works",
          paragraphs: [
            "NTLM challenge-response authentication transmits the hash rather than the password during the authentication exchange. This design, intended to avoid transmitting cleartext passwords, inadvertently allows hash reuse.",
          ],
          bullets: [
            "Attacker gains admin access to a compromised machine",
            "Uses Mimikatz or similar to dump LSASS memory and extract NTLM hashes",
            "Passes the extracted hash to authenticate as the hash owner on other systems",
            "Targets systems where the compromised account has local admin rights",
            "Pivots progressively until reaching high-value systems or Domain Admin credentials",
          ],
        },
        {
          heading: "Mitigations",
          paragraphs: [
            "Eliminating pass-the-hash entirely requires moving away from NTLM, but several controls significantly reduce its effectiveness.",
          ],
          bullets: [
            "Enable Windows Credential Guard to protect LSASS from memory extraction",
            "Eliminate local administrator password reuse using LAPS (Local Administrator Password Solution)",
            "Restrict NTLM authentication where Kerberos can be used instead",
            "Use tiered administration to prevent admin credentials from being cached on standard workstations",
            "Enable Protected Users security group for privileged accounts",
          ],
        },
      ],
      relatedSlugs: [
        "lateral-movement",
        "kerberoasting",
        "active-directory",
        "privilege-escalation",
        "golden-ticket-attack",
      ],
    },
  },
  {
    slug: "phishing",
    term: "Phishing",
    definition:
      "A social engineering attack that uses fraudulent emails, messages, or websites impersonating trusted entities to trick recipients into revealing credentials, clicking malicious links, or transferring money.",
    category: "Phishing & Social Engineering",
    blogSlug: "/blog/phishing-response-automation-microsoft-365",
    content: {
      intro: [
        "Phishing is the initial access method of choice for the majority of enterprise cyberattacks. It bypasses technical controls by targeting the human element — tricking users into voluntarily providing access rather than exploiting a vulnerability. Despite decades of awareness training, phishing success rates remain high because attacks continue to evolve in sophistication.",
        "Modern phishing attacks are increasingly targeted (spear phishing), use legitimate infrastructure to bypass email filters, and employ adversary-in-the-middle techniques to steal session tokens rather than just credentials.",
      ],
      sections: [
        {
          heading: "Types of phishing attacks",
          paragraphs: [
            "Phishing has evolved significantly from mass-blast credential harvesting pages. Understanding the current landscape is essential for effective defense.",
          ],
          bullets: [
            "Bulk phishing: high-volume campaigns targeting many recipients with generic lures",
            "Spear phishing: personalized attacks targeting specific individuals using OSINT",
            "Whaling: targeted attacks against senior executives or high-value individuals",
            "Smishing: phishing via SMS messages",
            "Vishing: phone-based social engineering, often following email phishing",
            "AiTM phishing: reverse proxy attacks that steal session tokens, bypassing MFA",
            "Quishing: phishing via QR codes embedded in emails to bypass link scanners",
          ],
        },
        {
          heading: "AiTM phishing: the MFA bypass",
          paragraphs: [
            "Adversary-in-the-Middle (AiTM) phishing is the most advanced phishing technique in widespread use. The attack uses a proxy between the victim and the legitimate site — stealing the session token after successful MFA, effectively bypassing MFA entirely.",
          ],
          bullets: [
            "Attacker deploys a proxy that relays authentication to the legitimate Microsoft login page",
            "Victim authenticates normally — including completing MFA",
            "Proxy intercepts the post-authentication session cookie",
            "Attacker replays the session cookie to access the account without needing credentials or MFA",
            "Detection requires monitoring for session anomalies like impossible travel after successful MFA",
          ],
        },
        {
          heading: "Automated phishing response",
          paragraphs: [
            "BitLyft AIR's phishing response playbook detects phishing incidents through Microsoft Defender for Office 365 signals and user reports, then automatically purges delivered phishing emails from all mailboxes, blocks sender domains and IPs, and — if credentials were compromised — executes account containment actions simultaneously.",
          ],
        },
      ],
      relatedSlugs: [
        "spear-phishing",
        "aitm-phishing",
        "email-impersonation",
        "mfa-fatigue-attack",
        "account-takeover",
      ],
    },
  },
  {
    slug: "playbook",
    term: "Playbook (Security)",
    definition:
      "A documented, step-by-step procedure that guides security teams through the detection, investigation, containment, and remediation of a specific type of security incident. Automated playbooks are the foundation of SOAR and AIR platforms.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "Security playbooks are the operationalization of incident response plans — translating high-level IR policies into specific, executable actions for specific incident types. In manual SOC environments, playbooks guide analyst decisions. In automated environments, playbooks are encoded into software that executes them without human intervention.",
        "The quality and completeness of playbooks directly determines the effectiveness of an automated response platform. BitLyft AIR ships with pre-built playbooks for the most common enterprise incident types, all continuously updated based on real-world attack observations.",
      ],
      sections: [
        {
          heading: "What makes a good automated playbook",
          paragraphs: [
            "An effective automated playbook balances response speed with precision — executing containment actions with confidence while minimizing false positive disruptions to legitimate users.",
          ],
          bullets: [
            "Clear trigger conditions with specific confidence thresholds",
            "Tiered actions that escalate based on signal strength (alert only → soft disable → full disable)",
            "Explicit exception handling for high-risk accounts (C-suite, critical infrastructure)",
            "Notification workflows that keep affected users and managers informed",
            "Logging of all automated actions for audit and investigation purposes",
            "Rollback capabilities for actions that are later determined to be false positives",
          ],
        },
        {
          heading: "BitLyft AIR playbook library",
          paragraphs: [
            "BitLyft AIR includes pre-built, production-tested playbooks for account takeover, phishing, BEC response, inbox rule abuse, MFA fatigue, impossible travel, OAuth consent abuse, and more — all executable within seconds of detection without any analyst involvement.",
          ],
        },
      ],
      relatedSlugs: [
        "automated-incident-response",
        "soar",
        "incident-response",
        "alert-fatigue",
        "mean-time-to-respond",
      ],
    },
  },
  {
    slug: "privilege-escalation",
    term: "Privilege Escalation",
    definition:
      "A technique used by attackers to gain higher-level permissions than they were initially granted, often by exploiting vulnerabilities, misconfigurations, or weak credential practices.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Privilege escalation is the bridge between initial access and full compromise. An attacker who can only read email from one compromised account is limited. An attacker who escalates to Global Administrator in Entra ID controls the entire tenant.",
        "Privilege escalation attacks in modern environments span both endpoint and cloud planes — from traditional Windows kernel exploitation to Entra ID role abuse and Azure resource permission exploitation.",
      ],
      sections: [
        {
          heading: "Privilege escalation techniques",
          paragraphs: [
            "Attackers choose escalation techniques based on their initial foothold and the defenses in place. Cloud identity escalation is increasingly common as organizations move workloads to Microsoft 365 and Azure.",
          ],
          bullets: [
            "Abusing over-privileged service accounts with SPN registration (Kerberoasting)",
            "Exploiting misconfigured ACLs in Active Directory (GenericWrite, GenericAll)",
            "Adding compromised accounts to high-privilege Entra ID roles via PIM",
            "Exploiting vulnerable Group Policy objects that apply to admin systems",
            "Using token impersonation on Windows systems (SeImpersonatePrivilege abuse)",
          ],
        },
        {
          heading: "Detection and prevention",
          paragraphs: [
            "Monitoring role and group membership changes in both Active Directory and Entra ID is the most reliable way to detect privilege escalation. BitLyft AIR monitors for unexpected role assignment events and automatically alerts or reverses unauthorized privilege grants.",
          ],
        },
      ],
      relatedSlugs: [
        "lateral-movement",
        "kerberoasting",
        "active-directory",
        "entra-id",
        "least-privilege",
      ],
    },
  },
  // ── R ──────────────────────────────────────────────────────────────────────
  {
    slug: "ransomware",
    term: "Ransomware",
    definition:
      "Malware that encrypts a victim's files and demands payment for the decryption key. Modern ransomware attacks are often double-extortion campaigns that also threaten to publish stolen data.",
    category: "Malware & Ransomware",
    content: {
      intro: [
        "Ransomware has evolved from opportunistic malware distributed through spam campaigns into a sophisticated, human-operated criminal enterprise. Modern ransomware groups — RansomHub, LockBit, BlackCat — operate like businesses, with affiliates, negotiation teams, and leak sites for publishing stolen data.",
        "The impact of a ransomware attack extends far beyond the ransom itself: recovery costs, regulatory penalties, reputational damage, and business interruption often dwarf the ransom demand.",
      ],
      sections: [
        {
          heading: "The modern ransomware attack lifecycle",
          paragraphs: [
            "Human-operated ransomware attacks follow a consistent lifecycle that typically spans days to weeks from initial access to encryption. Each phase presents detection opportunities.",
          ],
          bullets: [
            "Initial access: phishing, credential stuffing, or exploitation of public-facing systems",
            "Persistence: installing backdoors, creating admin accounts, deploying remote access tools",
            "Reconnaissance: enumerating network shares, domain controllers, and backup systems",
            "Data exfiltration: stealing sensitive data for double-extortion leverage",
            "Lateral movement: spreading to maximize encryption impact",
            "Encryption: deploying encryptor across all accessible systems simultaneously",
          ],
        },
        {
          heading: "Prevention and response",
          paragraphs: [
            "No single control prevents ransomware, but layered defenses dramatically reduce the probability of a successful attack and the impact of one that does succeed.",
          ],
          bullets: [
            "MFA on all accounts eliminates the most common initial access vector (credential theft)",
            "Automated incident response detects and contains the attack before lateral movement completes",
            "Offline, immutable backups ensure recovery without ransom payment",
            "Network segmentation limits the blast radius of encryption",
            "EDR with behavioral detection identifies encryption activity and kills the process",
          ],
        },
      ],
      relatedSlugs: [
        "data-exfiltration",
        "lateral-movement",
        "incident-response",
        "network-segmentation",
        "automated-incident-response",
      ],
    },
  },
  {
    slug: "risky-sign-in",
    term: "Risky Sign-In",
    definition:
      "A login event flagged by Microsoft Entra ID Identity Protection as potentially compromised, based on signals such as unfamiliar location, anonymous IP, atypical travel, or leaked credentials.",
    category: "Threat Detection",
    blogSlug: "/blog/impossible-travel-risky-sign-ins-automated-triage",
    content: {
      intro: [
        "Risky sign-in detection is Microsoft Entra ID Identity Protection's core capability — using machine learning and threat intelligence to score every authentication event in real time and flag those exhibiting compromise indicators.",
        "Integrating risky sign-in signals into automated response workflows is one of the highest-ROI identity security investments an organization can make.",
      ],
      sections: [
        {
          heading: "Risk signal categories",
          paragraphs: [
            "Entra ID Identity Protection evaluates multiple signal categories to compute sign-in risk scores.",
          ],
          bullets: [
            "Atypical travel / impossible travel: geographically inconsistent login events",
            "Anonymous IP address: login from Tor, VPN, or known proxy services",
            "Malware-linked IP address: login from infrastructure associated with active malware campaigns",
            "Unfamiliar sign-in properties: new device, browser, or network profile",
            "Password spray: pattern consistent with password spraying attack against the account",
            "Leaked credentials: username/password pair found in breach intelligence databases",
          ],
        },
        {
          heading: "Automated triage and response",
          paragraphs: [
            "BitLyft AIR ingests risky sign-in events from Entra ID Identity Protection and correlates them with additional signals to build high-confidence incident cases. High-risk sign-ins trigger automatic session revocation and account containment. Medium-risk sign-ins trigger step-up MFA and user notification without full lockout.",
          ],
        },
      ],
      relatedSlugs: [
        "impossible-travel",
        "conditional-access",
        "entra-id",
        "account-takeover",
        "mfa",
      ],
    },
  },
  // ── S ──────────────────────────────────────────────────────────────────────
  {
    slug: "session-revocation",
    term: "Session Revocation",
    definition:
      "The act of invalidating all active login sessions for a user account, forcing re-authentication on every device. Session revocation is a critical containment step when an account compromise is detected.",
    category: "Identity & Access Management",
    blogSlug: "/blog/account-suspension-vs-session-revocation-when-to-use",
    content: {
      intro: [
        "Session revocation is frequently the most time-critical action in an account takeover response. When an attacker has stolen a session token through AiTM phishing, changing the account password is not sufficient — the stolen token remains valid until it expires or is explicitly revoked. Session revocation invalidates all tokens immediately, ejecting the attacker regardless of how they obtained access.",
        "BitLyft AIR can execute session revocation via the Microsoft Graph API (revokeSignInSessions) in seconds after detecting a compromise indicator, without requiring analyst intervention.",
      ],
      sections: [
        {
          heading: "Session revocation vs. account disable",
          paragraphs: [
            "These two containment actions serve different purposes and have different operational impacts. Choosing the right action — or the right sequence — requires understanding the confidence level of the detection and the operational criticality of the account.",
          ],
          bullets: [
            "Session revocation: invalidates tokens immediately, user can re-authenticate with correct credentials — low disruption, fast",
            "Account disable: blocks all authentication attempts — higher disruption, needed when attacker has credentials",
            "Recommended sequence: revoke first, then disable if re-authentication shows re-compromise",
          ],
        },
        {
          heading: "Token persistence after revocation",
          paragraphs: [
            "Token revocation in Entra ID is not instantaneous across all services — some client applications cache tokens locally and may remain functional for a short period (typically up to one hour) after revocation until the cached token expires. For critical containment scenarios, account disable provides the strongest guarantee.",
          ],
        },
      ],
      relatedSlugs: [
        "account-takeover",
        "mfa-fatigue-attack",
        "entra-id",
        "automated-incident-response",
        "incident-response",
      ],
    },
  },
  {
    slug: "siem",
    term: "SIEM (Security Information and Event Management)",
    definition:
      "A platform that aggregates and analyzes log and event data from across an IT environment to detect threats, correlate incidents, and support compliance reporting. SIEMs are often paired with SOAR for automated response.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "SIEM platforms are the central nervous system of a Security Operations Center — aggregating logs from endpoints, network devices, identity providers, and cloud services, then applying correlation rules and analytics to surface potential threats from the noise.",
        "Modern cloud-native SIEMs like Microsoft Sentinel have expanded beyond log aggregation to include UEBA, threat intelligence integration, and native SOAR capabilities.",
      ],
      sections: [
        {
          heading: "Core SIEM capabilities",
          paragraphs: [
            "A mature SIEM provides more than log storage — it provides the detection, investigation, and reporting infrastructure for the entire SOC.",
          ],
          bullets: [
            "Log aggregation and normalization from heterogeneous sources",
            "Real-time correlation rules that detect multi-step attack patterns",
            "UEBA for behavioral baseline and anomaly detection",
            "Threat intelligence enrichment of events with IOC context",
            "Incident management and case tracking",
            "Compliance reporting for frameworks like SOC 2, HIPAA, and PCI DSS",
          ],
        },
        {
          heading: "SIEM and BitLyft AIR",
          paragraphs: [
            "BitLyft AIR integrates with leading SIEM platforms to ingest detection signals and execute response actions. Where SIEM provides detection and visibility, AIR provides automated response — closing the gap between alert and containment that SIEM alone cannot address.",
          ],
        },
      ],
      relatedSlugs: [
        "soar",
        "automated-incident-response",
        "alert-fatigue",
        "ueba",
        "threat-intelligence",
      ],
    },
  },
  {
    slug: "soar",
    term: "SOAR (Security Orchestration, Automation and Response)",
    definition:
      "A category of security platforms that orchestrate tools, automate repetitive tasks, and guide response workflows. BitLyft AIR goes beyond traditional SOAR by providing fully autonomous response without analyst involvement.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "SOAR platforms emerged to address the efficiency gap in SOC operations — automating the repetitive, low-complexity tasks that consumed analyst time and allowing teams to focus on complex investigation and decision-making. However, traditional SOAR requires significant engineering investment to build and maintain workflows, and still relies on analyst approval for most response actions.",
        "BitLyft AIR represents the next generation: a purpose-built autonomous response platform that executes response playbooks without analyst involvement for well-understood incident types.",
      ],
      sections: [
        {
          heading: "Traditional SOAR vs. autonomous response",
          paragraphs: [
            "Understanding the distinction between SOAR and autonomous response helps organizations evaluate where each approach is appropriate.",
          ],
          bullets: [
            "SOAR: analyst-guided automation that presents options and executes approved actions",
            "SOAR: requires significant custom workflow development and maintenance",
            "SOAR: response speed limited by analyst availability and queue depth",
            "Autonomous response: executes complete response playbooks without human approval",
            "Autonomous response: ships with pre-built playbooks for common incident types",
            "Autonomous response: reduces MTTR from hours to seconds for automation-eligible incidents",
          ],
        },
        {
          heading: "Integration ecosystem",
          paragraphs: [
            "BitLyft AIR integrates with Microsoft 365, Entra ID, Microsoft Defender products, leading EDR platforms, and SIEM solutions to execute response actions across the full attack surface — not just within a single tool.",
          ],
        },
      ],
      relatedSlugs: [
        "automated-incident-response",
        "siem",
        "playbook",
        "alert-fatigue",
        "mean-time-to-respond",
      ],
    },
  },
  {
    slug: "spear-phishing",
    term: "Spear Phishing",
    definition:
      "A targeted phishing attack directed at a specific individual or organization, using personalized information gathered through OSINT to increase credibility and success rates.",
    category: "Phishing & Social Engineering",
    content: {
      intro: [
        "Spear phishing is phishing with surgical precision. Where bulk phishing relies on volume, spear phishing relies on personalization — using open-source intelligence about the target to craft messages that appear highly legitimate and relevant.",
        "Because spear phishing emails are crafted specifically for their target, they are significantly less likely to be caught by email security filters that rely on known-bad indicators, and significantly more likely to succeed against trained users.",
      ],
      sections: [
        {
          heading: "How attackers build spear phishing campaigns",
          paragraphs: [
            "Effective spear phishing requires reconnaissance. Attackers invest time gathering information that makes their lures credible.",
          ],
          bullets: [
            "LinkedIn: job titles, reporting relationships, recent announcements, vendor relationships",
            "Company website: key personnel, technology stack, recent news",
            "Social media: personal interests, travel, conferences attended",
            "Breach databases: existing credentials for pre-texting or password spraying",
            "Recent business filings, contracts, or news for topical lures",
          ],
        },
        {
          heading: "Defense against spear phishing",
          paragraphs: [
            "No technical control completely eliminates spear phishing risk — the attack succeeds by appearing legitimate. Layered defenses including user training, phishing-resistant MFA, and automated response to post-click compromise are required.",
          ],
          bullets: [
            "Phishing-resistant MFA (FIDO2) limits damage even if credentials are captured",
            "Anti-spoofing controls (DMARC, DKIM, SPF) reduce impersonation effectiveness",
            "Simulated phishing exercises calibrate and improve user recognition skills",
            "Automated response to credential use from new locations limits post-click damage",
          ],
        },
      ],
      relatedSlugs: [
        "phishing",
        "whaling",
        "email-impersonation",
        "mfa",
        "osint",
      ],
    },
  },
  {
    slug: "spf",
    term: "SPF (Sender Policy Framework)",
    definition:
      "An email authentication protocol that specifies which mail servers are authorized to send email on behalf of a domain, helping recipients identify and reject spoofed messages.",
    category: "Cloud & Email Security",
    content: {
      intro: [
        "SPF is the first layer of email authentication. By publishing a DNS TXT record specifying which IP addresses and mail servers are authorized to send email on behalf of a domain, organizations give recipient mail servers the information needed to verify the legitimacy of an email's sending infrastructure.",
        "SPF is necessary but not sufficient — it only checks the MAIL FROM (envelope) address, which can differ from the visible From header displayed to users. This is why SPF must be combined with DKIM and DMARC for complete protection.",
      ],
      sections: [
        {
          heading: "SPF limitations",
          paragraphs: [
            "Understanding SPF's limitations helps organizations avoid false confidence in their email security posture.",
          ],
          bullets: [
            "SPF only validates the envelope sender, not the From header visible to users",
            "SPF breaks with email forwarding — forwarded messages fail SPF at the final hop",
            "The SPF 10-lookup limit can cause legitimate mail to fail if too many include mechanisms are used",
            "SPF alone cannot prevent display name spoofing — DMARC enforcement is required",
          ],
        },
        {
          heading: "SPF best practices",
          paragraphs: [
            "A well-maintained SPF record is specific, up-to-date, and ends with -all (hard fail) to ensure unauthorized senders are clearly identified rather than softfailed or passed.",
          ],
          bullets: [
            "End the record with -all (hard fail) rather than ~all (soft fail)",
            "Audit authorized sending sources quarterly — remove unused IP ranges and services",
            "Stay within the 10 DNS lookup limit to prevent permerror failures",
            "Pair with DKIM and DMARC p=reject for full protection",
          ],
        },
      ],
      relatedSlugs: ["dmarc", "dkim", "dmarc-enforcement", "email-impersonation", "phishing"],
    },
  },
  // ── T ──────────────────────────────────────────────────────────────────────
  {
    slug: "threat-hunting",
    term: "Threat Hunting",
    definition:
      "A proactive security practice where analysts search for hidden threats that have evaded automated detection tools by formulating hypotheses based on TTPs and hunting for matching evidence in telemetry data.",
    category: "Threat Detection",
    content: {
      intro: [
        "Threat hunting acknowledges a fundamental limitation of signature and rule-based detection: sophisticated attackers adapt to evade known detection methods. Threat hunting flips the model — rather than waiting for alerts to fire, analysts proactively search for evidence of TTPs that may not have triggered any alert.",
        "BitLyft AIR's automation handles the high-volume, rule-based detection workload, freeing security analysts to focus on the higher-value threat hunting and investigation activities that require human intelligence.",
      ],
      sections: [
        {
          heading: "The threat hunting methodology",
          paragraphs: [
            "Effective threat hunting follows a structured process: form a hypothesis based on threat intelligence or ATT&CK TTPs, gather relevant data, hunt for evidence of the hypothesis, and either confirm or refute it.",
          ],
          bullets: [
            "Hypothesis formation: based on recent threat intel, ATT&CK, or IR findings",
            "Data collection: identifying relevant telemetry sources for the hypothesis",
            "Investigation: querying and analyzing data for evidence of the TTP",
            "Discovery: finding either evidence of threat or confirming absence",
            "Feedback loop: converting successful hunts into automated detection rules",
          ],
        },
      ],
      relatedSlugs: [
        "mitre-attack",
        "ttp",
        "siem",
        "threat-intelligence",
        "anomaly-detection",
      ],
    },
  },
  {
    slug: "threat-intelligence",
    term: "Threat Intelligence",
    definition:
      "Contextual information about current or emerging cyber threats — including adversary TTPs, IoCs, and vulnerability data — used to inform detection rules, response playbooks, and risk prioritization.",
    category: "Threat Detection",
    content: {
      intro: [
        "Threat intelligence transforms raw security data into actionable knowledge about adversaries. By understanding who is attacking, what techniques they use, and what infrastructure they operate from, security teams can proactively improve defenses and prioritize responses.",
        "BitLyft AIR ingests threat intelligence feeds to enrich detection signals — automatically correlating authentication events, email indicators, and network connections against known malicious infrastructure.",
      ],
      sections: [
        {
          heading: "Threat intelligence types",
          paragraphs: ["Intelligence is typically categorized by its abstraction level."],
          bullets: [
            "Strategic: high-level threat landscape trends for leadership decision-making",
            "Operational: information about specific campaigns, threat actors, and their objectives",
            "Tactical: TTPs used by threat actors — feeds ATT&CK mapping and detection engineering",
            "Technical: specific IOCs (IPs, domains, hashes) for immediate blocking and detection",
          ],
        },
        {
          heading: "Intelligence integration in automated response",
          paragraphs: [
            "Technical threat intelligence has the shortest shelf life but the most immediate operational value. BitLyft AIR automatically enriches incidents with threat intelligence context, increasing detection confidence and enabling more precise automated response actions.",
          ],
        },
      ],
      relatedSlugs: [
        "mitre-attack",
        "ttp",
        "threat-hunting",
        "indicator-of-compromise",
        "siem",
      ],
    },
  },
  {
    slug: "token-theft",
    term: "Token Theft",
    definition:
      "The unauthorized capture of OAuth or session tokens, typically via AiTM phishing proxies, allowing attackers to impersonate users and bypass MFA without needing a password.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Token theft has emerged as the primary technique for bypassing MFA in Microsoft 365 environments. Because modern authentication relies on session tokens rather than requiring re-authentication for every request, a stolen token grants the same access as the legitimate user — including all permissions and without any MFA challenge.",
        "Detecting token theft requires behavioral analysis rather than credential-based detection, since the attacker is using a legitimate, valid token.",
      ],
      sections: [
        {
          heading: "How token theft happens",
          paragraphs: [
            "Tokens are most commonly stolen via AiTM phishing proxies, but can also be extracted from browser storage or memory on compromised endpoints.",
          ],
          bullets: [
            "AiTM phishing: proxy intercepts the session token during the authentication flow",
            "Browser token extraction: malware reads tokens from browser local storage or cookies",
            "Memory scraping: extracting tokens from process memory on compromised machines",
            "Man-in-the-browser: browser extension or malware intercepts token post-issuance",
          ],
        },
        {
          heading: "Detection signals",
          paragraphs: [
            "Since the attacker has a valid token, traditional credential-based detection does not apply. Token theft detection relies on contextual anomalies around the token's usage.",
          ],
          bullets: [
            "Session used from a different IP, country, or ASN than the token was issued to",
            "Impossible travel: session appears in a location inconsistent with the issuance location",
            "Token used from a device that does not match the original device fingerprint",
            "Rapid session activity following a successful phishing simulation click",
          ],
        },
      ],
      relatedSlugs: [
        "phishing",
        "session-revocation",
        "mfa",
        "account-takeover",
        "impossible-travel",
      ],
    },
  },
  {
    slug: "ttp",
    term: "TTP (Tactics, Techniques, and Procedures)",
    definition:
      "The behavioral fingerprint of a threat actor — what they want (tactics), how they achieve it (techniques), and the specific tools and methods they use (procedures). Mapped to MITRE ATT&CK.",
    category: "Threat Detection",
    content: {
      intro: [
        "TTPs represent the highest-fidelity form of threat intelligence. While IOCs like IP addresses and file hashes change constantly, TTPs describe behavioral patterns that remain consistent across a threat actor's campaigns and are much harder to change.",
        "Detecting TTPs rather than just IOCs is the foundation of a mature, intelligence-driven detection program.",
      ],
      sections: [
        {
          heading: "The TTP hierarchy",
          paragraphs: [
            "Each level of the TTP hierarchy provides different detection and intelligence value.",
          ],
          bullets: [
            "Tactics: the adversary's high-level goals (Initial Access, Persistence, Exfiltration)",
            "Techniques: the method used to achieve the tactic (Phishing, Inbox Rule Abuse, OAuth Consent)",
            "Procedures: the specific implementation (which phishing kit, which rule keywords, which app name)",
          ],
        },
        {
          heading: "TTP-based detection",
          paragraphs: [
            "Detecting TTPs requires behavioral detections rather than signature rules. BitLyft AIR's detection library is built around behavioral patterns mapped to ATT&CK techniques, ensuring detection coverage that survives attacker infrastructure changes.",
          ],
        },
      ],
      relatedSlugs: [
        "mitre-attack",
        "threat-hunting",
        "threat-intelligence",
        "indicator-of-compromise",
        "automated-incident-response",
      ],
    },
  },
  // ── U ──────────────────────────────────────────────────────────────────────
  {
    slug: "ueba",
    term: "UEBA (User and Entity Behavior Analytics)",
    definition:
      "A security analytics approach that profiles the normal behavior of users and entities (devices, applications) and uses machine learning to detect anomalies that may indicate insider threats or compromised accounts.",
    category: "Threat Detection",
    content: {
      intro: [
        "UEBA addresses a fundamental limitation of rule-based detection: rules require knowing what you are looking for in advance. UEBA builds statistical models of normal behavior for every user and entity, then surfaces deviations that may indicate compromise without requiring a pre-defined rule for every attack scenario.",
        "This approach is particularly effective for detecting account takeover — where the attacker behaves differently from the legitimate user — and insider threats — where behavior deviates from established norms.",
      ],
      sections: [
        {
          heading: "UEBA data sources",
          paragraphs: [
            "UEBA effectiveness scales with the breadth of telemetry available. More data sources enable more precise behavioral baselines and more accurate anomaly detection.",
          ],
          bullets: [
            "Identity: Entra ID sign-in logs, conditional access events, MFA activity",
            "Email: message volume, attachment behavior, external forwarding, rule creation",
            "Endpoint: process execution, file access patterns, network connections",
            "Cloud: SharePoint access patterns, Teams activity, OneDrive file operations",
            "Network: east-west traffic patterns, DNS queries, VPN usage",
          ],
        },
        {
          heading: "UEBA in BitLyft AIR",
          paragraphs: [
            "BitLyft AIR incorporates UEBA-derived signals from Microsoft Entra ID Identity Protection, Microsoft Defender for Cloud Apps, and proprietary behavioral models to provide high-fidelity anomaly detection that reduces false positives while maintaining high detection sensitivity.",
          ],
        },
      ],
      relatedSlugs: [
        "anomaly-detection",
        "behavioral-analytics",
        "siem",
        "threat-hunting",
        "account-takeover",
      ],
    },
  },
  // ── Z ──────────────────────────────────────────────────────────────────────
  {
    slug: "zero-trust",
    term: "Zero Trust",
    definition:
      "A security model that eliminates implicit trust by requiring every user, device, and connection to be continuously verified — regardless of network location. The guiding principle is 'never trust, always verify.'",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Zero Trust is a strategic security model, not a single product or technology. It rejects the traditional perimeter security assumption — that everything inside the network is trustworthy — and instead requires continuous verification of every access request regardless of origin.",
        "Zero Trust is increasingly the de facto standard for cloud and hybrid environments where the concept of a network perimeter has largely dissolved.",
      ],
      sections: [
        {
          heading: "The three Zero Trust principles",
          paragraphs: [
            "Microsoft's Zero Trust framework articulates three foundational principles that apply to every access decision.",
          ],
          bullets: [
            "Verify explicitly: always authenticate and authorize based on all available data points — identity, location, device health, service, workload, data classification",
            "Use least privilege access: limit user access with just-in-time and just-enough-access, risk-based adaptive policies, and data protection",
            "Assume breach: minimize blast radius, segment access, encrypt all sessions, use analytics to get visibility and drive threat detection",
          ],
        },
        {
          heading: "Zero Trust and BitLyft AIR",
          paragraphs: [
            "BitLyft AIR supports Zero Trust implementation through automated enforcement of identity verification, continuous session monitoring, and rapid response when verification signals indicate compromise. AIR's automated response capabilities operationalize the 'assume breach' principle — acting immediately when behavioral indicators suggest a verified identity has been compromised.",
          ],
        },
      ],
      relatedSlugs: [
        "conditional-access",
        "mfa",
        "least-privilege",
        "entra-id",
        "identity-threat-detection-response",
      ],
    },
  },
  {
    slug: "zero-day-vulnerability",
    term: "Zero-Day Vulnerability",
    definition:
      "A software vulnerability that is unknown to the vendor and has no available patch, making it immediately exploitable. Zero-day exploits command high value on the dark web and are used in nation-state attacks.",
    category: "Threat Detection",
    content: {
      intro: [
        "A zero-day vulnerability is, by definition, one for which no defense exists at the time of exploitation. The vendor has zero days to fix it because they do not know it exists. This makes zero-days the most dangerous class of vulnerability — particularly when weaponized by well-resourced threat actors.",
        "While zero-days are real and impactful, it is important to note that the vast majority of successful attacks exploit known vulnerabilities and weak identity controls rather than zero-days. A mature security program closes the known gaps first.",
      ],
      sections: [
        {
          heading: "The zero-day lifecycle",
          paragraphs: [
            "Understanding how zero-days are discovered, weaponized, and eventually patched helps organizations calibrate their risk posture.",
          ],
          bullets: [
            "Discovery: found by security researchers, bug bounty hunters, intelligence agencies, or criminal actors",
            "Weaponization: exploit code is developed and tested against target systems",
            "Exploitation: used in targeted attacks — often initially by nation-state actors",
            "Disclosure: reported to vendor (responsible disclosure) or sold/published",
            "Patch development: vendor develops and tests a fix",
            "Patch deployment: organizations apply the patch — often the longest phase",
          ],
        },
        {
          heading: "Defense-in-depth for zero-day scenarios",
          paragraphs: [
            "Since signature-based defenses cannot detect unknown vulnerabilities, zero-day defense relies on behavioral detection, network segmentation, and least-privilege principles that limit attacker impact even if exploitation succeeds.",
          ],
          bullets: [
            "Behavioral EDR detects post-exploitation activity regardless of vulnerability used",
            "Network segmentation limits lateral movement after initial compromise",
            "Least privilege limits what an attacker can access from the exploited system",
            "Automated incident response contains the breach quickly, limiting blast radius",
          ],
        },
      ],
      relatedSlugs: [
        "vulnerability-management",
        "lateral-movement",
        "network-segmentation",
        "least-privilege",
        "automated-incident-response",
      ],
    },
  },
  // ── Additional terms (no expanded content for less core terms) ─────────────
  {
    slug: "anomaly-detection",
    term: "Anomaly Detection",
    definition:
      "A security technique that identifies deviations from established behavioral baselines — such as unusual login times, data transfer volumes, or application usage — to surface potential threats.",
    category: "Threat Detection",
    content: {
      intro: [
        "Anomaly detection identifies threats not by matching known-bad signatures but by recognizing that something is behaving unexpectedly. This approach is essential for detecting novel attacks and insider threats that would not trigger rule-based detections.",
      ],
      sections: [
        {
          heading: "Anomaly detection in practice",
          paragraphs: [
            "Effective anomaly detection requires a reliable baseline of normal behavior. The quality of the baseline — how much data it is built from, how granular it is, how dynamically it adapts — determines the accuracy of subsequent anomaly identification.",
          ],
          bullets: [
            "Authentication anomalies: login at unusual hours, from unusual locations, on unusual devices",
            "Data access anomalies: sudden access to large volumes of files, especially sensitive ones",
            "Email anomalies: unusual sending volume, new external contacts, bulk attachment downloads",
            "Application anomalies: use of applications not normally accessed by the user",
          ],
        },
      ],
      relatedSlugs: ["ueba", "behavioral-analytics", "impossible-travel", "risky-sign-in", "siem"],
    },
  },
  {
    slug: "behavioral-analytics",
    term: "Behavioral Analytics",
    definition:
      "Security monitoring that establishes a baseline of normal user and entity behavior and then flags deviations — such as bulk downloads at 3 AM or logins from unfamiliar countries — as potential threats.",
    category: "Threat Detection",
    content: {
      intro: [
        "Behavioral analytics operationalizes the insight that attackers, even when using legitimate credentials and tools, behave differently from the legitimate users they impersonate. By modeling normal behavior and detecting deviations, behavioral analytics surfaces threats that bypass signature-based controls.",
      ],
      sections: [
        {
          heading: "Behavioral signals in Microsoft 365",
          paragraphs: [
            "Microsoft 365 generates rich behavioral telemetry across identity, email, collaboration, and file activity — making it an ideal environment for behavioral analytics.",
          ],
          bullets: [
            "Sign-in patterns: time of day, day of week, location, device, application",
            "Email behavior: send volume, recipient patterns, attachment types, external communication",
            "File activity: SharePoint access patterns, download volume, sharing behavior",
            "Teams activity: channel participation, meeting patterns, external guest interactions",
          ],
        },
      ],
      relatedSlugs: ["ueba", "anomaly-detection", "siem", "impossible-travel", "account-takeover"],
    },
  },
  {
    slug: "golden-ticket-attack",
    term: "Golden Ticket Attack",
    definition:
      "An Active Directory attack where an adversary forges Kerberos Ticket Granting Tickets (TGTs) using the KRBTGT account hash, granting persistent, almost unlimited access to any resource in the domain.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "A Golden Ticket attack represents the highest level of Active Directory compromise. By capturing the KRBTGT account's password hash — typically via DCSync after achieving Domain Admin privileges — an attacker can forge Kerberos TGTs for any user, with any group memberships, with any expiry date. The domain effectively cannot tell the difference between a legitimate and forged ticket.",
      ],
      sections: [
        {
          heading: "Impact and persistence",
          paragraphs: [
            "Golden Ticket persistence is particularly dangerous because forged tickets remain valid until the KRBTGT password is reset twice — the second reset to prevent use of tickets generated after the first reset.",
          ],
          bullets: [
            "Forged tickets can impersonate any user, including Domain Admins",
            "Tickets can be set with extremely long or custom expiry periods",
            "Persistence survives regular password resets on all accounts except KRBTGT",
            "Requires two sequential KRBTGT password resets, spaced at least 10 hours apart, to remediate",
          ],
        },
        {
          heading: "Detection",
          paragraphs: [
            "Microsoft Defender for Identity (MDI) includes specific Golden Ticket detection based on anomalous ticket properties such as non-standard encryption types, abnormal ticket lifetimes, or tickets issued for accounts that are disabled.",
          ],
        },
      ],
      relatedSlugs: ["active-directory", "kerberoasting", "pass-the-hash", "lateral-movement", "privilege-escalation"],
    },
  },
  {
    slug: "forensic-investigation",
    term: "Forensic Investigation",
    definition:
      "The systematic collection, preservation, and analysis of digital evidence following a security incident to determine what happened, how an attacker gained access, and what data was affected.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "Digital forensic investigation is the foundation of post-incident understanding. Without a thorough forensic process, organizations cannot determine the full scope of a breach, meet regulatory notification requirements, or implement the right preventive controls to avoid recurrence.",
      ],
      sections: [
        {
          heading: "Forensic evidence sources in Microsoft 365",
          paragraphs: [
            "Microsoft 365 provides extensive forensic telemetry across identity, email, and collaboration platforms.",
          ],
          bullets: [
            "Unified Audit Log: comprehensive record of user and admin activities across M365",
            "Entra ID sign-in logs: authentication events with IP, device, and risk signal context",
            "Exchange Online message trace: detailed email routing and delivery records",
            "Microsoft Defender for Office 365: email threat investigation and campaign analysis",
            "Mailbox audit logs: email access, forwarding rule creation, folder operations",
          ],
        },
      ],
      relatedSlugs: ["incident-response", "siem", "data-exfiltration", "inbox-rule-abuse", "automated-incident-response"],
    },
  },
  {
    slug: "least-privilege",
    term: "Least Privilege",
    definition:
      "The security principle that every user, process, or system should have the minimum permissions required to perform its function. Enforcing least privilege limits the blast radius of compromised accounts.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Least privilege is one of the foundational principles of information security. Every over-privileged account is a force multiplier for attackers — a compromised standard user account has limited impact; a compromised Global Administrator account is a catastrophe.",
        "Enforcing least privilege is an ongoing operational discipline, not a one-time configuration — permissions accumulate over time as roles change, projects are completed, and access requests pile up.",
      ],
      sections: [
        {
          heading: "Least privilege in Microsoft 365 and Entra ID",
          paragraphs: ["Entra ID provides several capabilities that directly support least privilege enforcement."],
          bullets: [
            "Privileged Identity Management (PIM): require just-in-time activation for privileged roles",
            "Access Reviews: periodic certification of group memberships and role assignments",
            "Conditional Access: enforce device compliance and MFA for privileged role activation",
            "Entra ID built-in roles: use specific roles (e.g., Exchange Admin) instead of Global Admin",
          ],
        },
      ],
      relatedSlugs: ["privilege-escalation", "zero-trust", "conditional-access", "entra-id", "jit-access"],
    },
  },
  {
    slug: "log-management",
    term: "Log Management",
    definition:
      "The practice of collecting, storing, and analyzing log data from systems, applications, and network devices to support security monitoring, compliance, and incident investigation.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "Log management is the foundational data layer for security operations. Without comprehensive, retained logs, forensic investigation is impossible, compliance cannot be demonstrated, and behavioral analytics has no data to work with.",
      ],
      sections: [
        {
          heading: "Critical log sources for Microsoft 365 environments",
          paragraphs: [],
          bullets: [
            "Entra ID sign-in logs (retained 30 days by default — P1/P2 required for longer retention)",
            "Microsoft 365 Unified Audit Log (90 days default, one year with appropriate licensing)",
            "Exchange Online message trace logs",
            "Microsoft Defender for Endpoint device events",
            "Azure Activity logs for resource management events",
          ],
        },
      ],
      relatedSlugs: ["siem", "forensic-investigation", "incident-response", "compliance-governance", "ueba"],
    },
  },
  {
    slug: "network-segmentation",
    term: "Network Segmentation",
    definition:
      "The practice of dividing a network into isolated subnetworks so that a breach in one segment cannot easily spread to others. Segmentation limits lateral movement and reduces blast radius.",
    category: "Network Security",
    content: {
      intro: [
        "Network segmentation is one of the most effective controls for limiting the impact of a successful breach. By ensuring that compromised systems cannot freely communicate with all other systems, segmentation forces attackers to work harder to reach their objectives and creates more opportunities for detection.",
      ],
      sections: [
        {
          heading: "Segmentation strategies",
          paragraphs: [],
          bullets: [
            "VLANs: logical separation at the switch level",
            "Firewalls and ACLs: controlled traffic flows between segments",
            "Micro-segmentation: workload-level controls in virtual and cloud environments",
            "Zero Trust network access (ZTNA): identity-based access to application segments",
          ],
        },
      ],
      relatedSlugs: ["zero-trust", "lateral-movement", "ransomware", "network-security", "least-privilege"],
    },
  },
  {
    slug: "vulnerability-management",
    term: "Vulnerability Management",
    definition:
      "The continuous process of identifying, classifying, prioritizing, remediating, and mitigating security vulnerabilities in software, systems, and infrastructure before they are exploited.",
    category: "Compliance & Governance",
    content: {
      intro: [
        "Vulnerability management transforms the reactive process of patching into a proactive risk management discipline. By continuously inventorying assets, scanning for vulnerabilities, and prioritizing remediation based on exploitability and business impact, organizations systematically reduce their attack surface.",
      ],
      sections: [
        {
          heading: "The vulnerability management lifecycle",
          paragraphs: [],
          bullets: [
            "Asset discovery: maintaining an accurate inventory of all systems and software",
            "Vulnerability scanning: automated identification of known vulnerabilities",
            "Prioritization: scoring based on CVSS, exploitability, asset criticality, and exposure",
            "Remediation: patching, configuration changes, or compensating controls",
            "Validation: confirming remediation effectiveness through re-scanning",
            "Reporting: demonstrating program effectiveness to leadership and auditors",
          ],
        },
      ],
      relatedSlugs: ["zero-day-vulnerability", "network-segmentation", "least-privilege", "compliance-governance", "threat-intelligence"],
    },
  },
  {
    slug: "indicator-of-compromise",
    term: "Indicator of Compromise (IoC)",
    definition:
      "Forensic evidence — such as a malicious IP address, hash, domain, or behavioral pattern — that suggests a system has been breached or an attack is in progress. IoCs are shared via threat intelligence feeds.",
    category: "Threat Detection",
    content: {
      intro: [
        "Indicators of Compromise are the digital fingerprints left by attackers during an intrusion. Sharing and consuming IOCs is a foundational practice of the security community — allowing one organization's detection to become another's protection.",
        "IOC-based detection has inherent limitations: IOCs are retrospective (they describe past attacks) and attackers change infrastructure regularly to avoid detection. This is why behavioral detection (TTPs) is increasingly prioritized alongside IOC matching.",
      ],
      sections: [
        {
          heading: "Types of IOCs",
          paragraphs: [],
          bullets: [
            "Network-based: IP addresses, domains, URLs associated with malicious infrastructure",
            "Host-based: file hashes, registry keys, file paths associated with malware",
            "Email-based: sender addresses, subject lines, attachment hashes from phishing campaigns",
            "Behavioral: patterns of activity that suggest compromise even without known-bad artefacts",
          ],
        },
      ],
      relatedSlugs: ["threat-intelligence", "ttp", "mitre-attack", "siem", "threat-hunting"],
    },
  },
  {
    slug: "whaling",
    term: "Whaling",
    definition:
      "A highly targeted phishing attack aimed specifically at senior executives or other high-value individuals within an organization, exploiting their authority to authorize financial transactions or access sensitive systems.",
    category: "Phishing & Social Engineering",
    content: {
      intro: [
        "Whaling is the highest-stakes variant of spear phishing. By targeting C-suite executives, board members, or other high-authority individuals, attackers maximize their opportunity for large financial transfers, access to sensitive corporate strategy, or organizational leverage.",
      ],
      sections: [
        {
          heading: "Why executives are high-value targets",
          paragraphs: [],
          bullets: [
            "Authority to approve financial transactions without multiple checkpoints",
            "Access to sensitive corporate strategy, M&A data, and confidential communications",
            "Often exempt from security controls due to convenience concerns",
            "Lower security awareness training compliance in some organizations",
          ],
        },
        {
          heading: "Defense",
          paragraphs: [
            "Executives require the same security controls as all users — and often more — including phishing-resistant MFA, device management, and behavioral monitoring. BitLyft AIR provides elevated monitoring profiles for accounts flagged as executive or high-value.",
          ],
        },
      ],
      relatedSlugs: ["spear-phishing", "phishing", "bec", "mfa", "account-takeover"],
    },
  },
  {
    slug: "osint",
    term: "OSINT (Open-Source Intelligence)",
    definition:
      "Intelligence gathered from publicly available sources — social media, job postings, WHOIS records, leaked credential databases — which threat actors use in reconnaissance to target organizations and individuals.",
    category: "Threat Detection",
    content: {
      intro: [
        "OSINT is a double-edged capability: security teams use it to understand their organization's exposure and attacker reconnaissance surface, while threat actors use it to build targeted spear phishing campaigns, discover credentials, and map organizational relationships.",
      ],
      sections: [
        {
          heading: "Common OSINT sources used by attackers",
          paragraphs: [],
          bullets: [
            "LinkedIn: org charts, technology stack hints from job postings, vendor relationships",
            "Have I Been Pwned / breach databases: credential pairs for stuffing and pre-texting",
            "WHOIS and DNS records: domain registrant data, infrastructure mapping",
            "GitHub: accidentally committed credentials, internal tool names, internal domain structures",
            "Social media: executive travel schedules, personal relationships, current projects",
          ],
        },
      ],
      relatedSlugs: ["spear-phishing", "threat-intelligence", "credential-stuffing", "phishing", "ttp"],
    },
  },
  {
    slug: "social-engineering",
    term: "Social Engineering",
    definition:
      "Psychological manipulation of people into performing actions or divulging confidential information. Social engineering bypasses technical controls by targeting the human element — the most exploitable vulnerability in any organization.",
    category: "Phishing & Social Engineering",
    content: {
      intro: [
        "Social engineering is the common thread running through most successful enterprise attacks. Phishing, vishing, pretexting, and BEC fraud all exploit human psychology rather than technical vulnerabilities — making them effective regardless of how strong the technical security controls are.",
      ],
      sections: [
        {
          heading: "Psychological principles exploited",
          paragraphs: [],
          bullets: [
            "Authority: impersonating executives, IT, law enforcement, or regulators",
            "Urgency: creating time pressure that short-circuits careful thinking",
            "Scarcity: 'this is your only chance to avoid a penalty'",
            "Social proof: 'others in your organization have already done this'",
            "Reciprocity: offering something of value to create an obligation to comply",
            "Familiarity: referencing real colleagues, projects, or events to build credibility",
          ],
        },
      ],
      relatedSlugs: ["phishing", "spear-phishing", "whaling", "bec", "mfa-fatigue-attack"],
    },
  },
  {
    slug: "rbac",
    term: "RBAC (Role-Based Access Control)",
    definition:
      "An access control model that assigns permissions to roles rather than individuals. Users are then assigned to roles, simplifying permission management and ensuring consistent enforcement of least privilege.",
    category: "Identity & Access Management",
    content: {
      intro: [
        "Role-Based Access Control is the most widely deployed access control model in enterprise environments. By assigning permissions to roles and then assigning users to roles, RBAC simplifies the management of permissions at scale and makes it far easier to audit who has access to what.",
      ],
      sections: [
        {
          heading: "RBAC in Entra ID and Microsoft 365",
          paragraphs: [],
          bullets: [
            "Built-in Entra ID roles cover most administrative functions without requiring Global Admin",
            "Custom roles can be created for granular, least-privilege access",
            "PIM integrates with RBAC to require just-in-time activation of privileged roles",
            "Access Reviews can certify role assignments periodically to prevent privilege accumulation",
          ],
        },
      ],
      relatedSlugs: ["least-privilege", "privilege-escalation", "entra-id", "conditional-access", "zero-trust"],
    },
  },
  {
    slug: "remediation",
    term: "Remediation",
    definition:
      "The process of fixing or neutralizing a security vulnerability or the damage caused by a breach. In automated incident response, remediation actions — like password resets, account disables, or rule deletions — are executed automatically.",
    category: "Incident Response & SOC",
    content: {
      intro: [
        "Remediation is the stage of incident response that actually removes the threat and restores the environment to a known-good state. Without thorough remediation, incidents recur — attackers who have established persistence will simply regain access after a password reset.",
      ],
      sections: [
        {
          heading: "Remediation actions in Microsoft 365 incident response",
          paragraphs: [],
          bullets: [
            "Revoke all active sessions via Microsoft Graph revokeSignInSessions",
            "Disable the compromised account in Entra ID",
            "Remove all malicious inbox rules and SMTP forwarding configurations",
            "Revoke OAuth app consent grants for unauthorized applications",
            "Remove attacker-registered MFA devices",
            "Purge delivered phishing or BEC emails from all recipient mailboxes",
            "Reset the account password and require MFA re-registration",
          ],
        },
      ],
      relatedSlugs: ["automated-incident-response", "incident-response", "session-revocation", "inbox-rule-abuse", "playbook"],
    },
  },
]

// ─── Lookup helpers ───────────────────────────────────────────────────────────

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return TERMS.find((t) => t.slug === slug)
}

export function getRelatedTerms(slugs: string[]): GlossaryTerm[] {
  return slugs
    .map((s) => getTermBySlug(s))
    .filter((t): t is GlossaryTerm => t !== undefined)
}
