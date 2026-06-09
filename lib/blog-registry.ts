/**
 * Central Blog Registry - Single Source of Truth
 *
 * When you add a new blog post:
 * 1. Create the page in app/blog/[slug]/page.tsx
 * 2. Add an entry here
 * 3. It will automatically appear on the resources page
 */

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: "Product Updates" | "Industry Insights" | "Technical Documentation"
  type: string
  displayDate: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bitlyft-air-v1-15",
    title: "BitLyft AIR\u00AE v1.15 - The Next Step in Smarter, Simpler Security Automation",
    description: "Learn about the latest features and improvements in BitLyft AIR\u00AE v1.15",
    category: "Product Updates",
    type: "Blog Post",
    displayDate: "15th January, 2025",
  },
  {
    slug: "bitlyft-air-v1-23-sentinelone-integration",
    title: "BitLyft AIR\u00AE v1.23: SentinelOne Integration",
    description:
      "BitLyft AIR\u00AE v1.23 introduces native SentinelOne integration with automated endpoint isolation, malware containment, and two new detection policies for persistence and spread.",
    category: "Product Updates",
    type: "Blog Post",
    displayDate: "20th March, 2026",
  },
  {
    slug: "bitlyft-air-v1-24-sso-google-workspace",
    title: "BitLyft AIR\u00AE v1.24: Enterprise SSO and Google Workspace Enhancements",
    description:
      "BitLyft AIR\u00AE v1.24 introduces enterprise SSO connection management, automatic user provisioning, and expanded Google Workspace detection and automated phishing response.",
    category: "Product Updates",
    type: "Blog Post",
    displayDate: "24th March, 2026",
  },
  {
    slug: "bitlyft-air-industries",
    title: "How Does BitLyft AIR\u00AE Work for Different Industries?",
    description:
      "Discover how BitLyft AIR\u00AE provides tailored solutions for finance, healthcare, manufacturing, and public utilities",
    category: "Industry Insights",
    type: "Article",
    displayDate: "1st August, 2025",
  },
  {
    slug: "bitlyft-air-changes-the-game",
    title: "BitLyft AIR\u00AE Changes the Game for Cybersecurity",
    description: "An in-depth look at how autonomous security operations are transforming threat response",
    category: "Industry Insights",
    type: "Press Release",
    displayDate: "15th July, 2025",
  },
  {
    slug: "soar-vs-security-automation-vs-autonomous-soc",
    title: "SOAR vs Security Automation vs Autonomous SOC: What's the Difference?",
    description:
      "Understand the key differences between SOAR, security automation, and autonomous SOC platforms and learn which approach fits your security operations.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "24th February, 2026",
  },
  {
    slug: "response-vs-remediation-vs-recovery",
    title: "Response vs Remediation vs Recovery: What's the Difference and How to Automate Each Safely",
    description:
      "Learn the differences between incident response, remediation, and recovery in cybersecurity. Discover how to automate each phase safely to reduce MTTR.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "22nd February, 2026",
  },
  {
    slug: "automated-response-vs-automated-remediation",
    title: "Automated Response vs Automated Remediation: Where to Draw the Line (With Examples)",
    description:
      "Automated response and automated remediation are not the same thing. Learn the key differences, real-world examples, and how to decide what should run without human approval.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "24th February, 2026",
  },
  {
    slug: "autonomous-soc-small-mid-market-teams",
    title: "Autonomous SOC for Small/Mid-Market Teams: Operating Model, Roles, and \"Day 1\" Playbooks",
    description:
      "Learn how small and mid-market security teams can operationalize an autonomous SOC from day one. Covers the operating model, team roles, and starter playbooks for immediate protection.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "25th February, 2026",
  },
  {
    slug: "guardrails-to-avoid-client-impact",
    title: "Guardrails to Avoid Client Impact: Approvals, Rate Limits, Safe-Mode, Rollback, Blast-Radius Controls",
    description:
      "Learn the five essential guardrails every security automation platform needs to prevent client impact: human approvals, rate limits, safe-mode, rollback, and blast-radius controls.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "27th February, 2026",
  },
  {
    slug: "automated-identity-based-response",
    title: "Automated Identity-Based Response: Containment Actions That Stop Account Takeover Fast",
    description:
      "Learn how automated identity-based response actions like session revocation, forced MFA re-enrollment, and account lockdown stop account takeover in seconds instead of hours.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "2nd March, 2026",
  },
  {
    slug: "top-security-incidents-automated-response-microsoft",
    title: "Top Common Security Incidents Automated Response Solves: The Highest-ROI Microsoft-First Use Cases",
    description:
      "Discover the highest-ROI security incidents that automated response solves in Microsoft 365, Entra ID, and Defender environments. Real playbooks for phishing, BEC, impossible travel, and more.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "4th March, 2026",
  },
  {
    slug: "phishing-response-automation-microsoft-365",
    title: "Phishing Response Automation for Microsoft 365: Remove Malicious Email Org-Wide",
    description:
      "Learn how to automate phishing response in Microsoft 365 to remove malicious emails org-wide in seconds. Covers ZAP, Threat Explorer, Graph API purge, and automated playbooks.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "6th March, 2026",
  },
  {
    slug: "bec-response-microsoft-365-triage-containment",
    title: "Business Email Compromise Response: M365 Triage + Containment Checklist",
    description:
      "Complete BEC response checklist for Microsoft 365. Learn the triage, analysis, and containment steps to stop business email compromise attacks before financial damage occurs.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "9th March, 2026",
  },
  {
    slug: "microsoft-entra-id-account-takeover-response-playbook",
    title: "Microsoft Entra ID Account Takeover Response Playbook",
    description:
      "Complete response playbook for Microsoft Entra ID account takeover incidents. Step-by-step containment, investigation, and remediation actions with automation guidance.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "11th March, 2026",
  },
  {
    slug: "autonomous-soc-msps-multi-tenant-guardrails-slas",
    title: "Autonomous SOC for Security-Forward MSPs: Multi-Tenant Guardrails, SLAs, and Reporting",
    description:
      "Learn how security-forward MSPs can operationalize an autonomous SOC with multi-tenant guardrails, SLA enforcement, and client-facing reporting that scales without headcount.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "13th March, 2026",
  },
  {
    slug: "itdr-practical-guide-small-soc-teams",
    title: "Identity Threat Detection & Response (ITDR): Practical Guide for Small SOC Teams",
    description:
      "A practical ITDR implementation guide for small SOC teams. Learn how to detect and respond to identity-based threats without enterprise-level resources or dedicated identity security staff.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "16th March, 2026",
  },
  {
    slug: "impossible-travel-risky-sign-ins-automated-triage",
    title: "Impossible Travel and Risky Sign-Ins: Automated Triage and Containment",
    description:
      "Learn how to automate triage and containment for impossible travel alerts and risky sign-ins. Reduce false positives by 90%+ and respond to real threats in seconds.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "18th March, 2026",
  },
  {
    slug: "password-spray-response-detection-automation",
    title: "Password Spray Response: Detection Signals + Automation Steps",
    description:
      "Learn how to detect and respond to password spray attacks with automated containment. Covers detection signals, response workflows, and automation guidance for SOC teams.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "23rd March, 2026",
  },
  {
    slug: "credential-stuffing-response-automated-blocks-hardening",
    title: "Credential Stuffing Response: Automated Blocks + Identity Hardening Steps",
    description:
      "Learn how to detect and respond to credential stuffing attacks with automated blocking and identity hardening. Covers detection signals, response workflows, and post-incident hardening.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "25th March, 2026",
  },
  {
    slug: "mfa-fatigue-attack-response-instant-containment",
    title: "MFA Fatigue Attack Response: Instant Containment Steps for Identity-First SOCs",
    description:
      "Learn how to detect and respond to MFA fatigue (push bombing) attacks with instant containment. Covers detection signals, automated response workflows, and identity hardening for SOC teams.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "27th March, 2026",
  },
  {
    slug: "session-hijacking-response-revoke-tokens-invalidate-sessions",
    title: "Session Hijacking Response: Revoke Tokens and Invalidate Sessions Automatically",
    description:
      "Learn how to detect and respond to session hijacking attacks with automated token revocation and session invalidation. Covers detection signals, response workflows, and automation guidance.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "30th March, 2026",
  },
  {
    slug: "malicious-oauth-app-consent-investigation-revocation",
    title: "Malicious OAuth App Consent: Automated Investigation and Revocation",
    description:
      "Learn how to detect and respond to malicious OAuth app consent attacks with automated investigation and revocation. Covers detection signals, response workflows, and automation guidance.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "1st April, 2026",
  },
  {
    slug: "oauth-phishing-stop-consent-attacks-automatically",
    title: "OAuth Phishing: How to Stop Consent-Based Attacks Automatically",
    description:
      "Learn how OAuth phishing attacks trick users into granting malicious app permissions and how to detect and stop consent-based attacks automatically.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "3rd April, 2026",
  },
  {
    slug: "admin-role-assignment-detection-automated-review-rollback",
    title: "New Admin Role Assignment Detection: Automate Review and Rollback Actions",
    description:
      "Learn how to detect new admin role assignments in real-time and automate review and rollback actions. Covers detection signals, risk scoring, and automated response workflows.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "6th April, 2026",
  },
  {
    slug: "privileged-account-break-glass-automation-controls-monitoring",
    title: "Privileged Account Break-Glass Automation: Safe Controls and Monitoring",
    description:
      "Learn how to automate break-glass emergency access procedures with proper controls, monitoring, and audit trails while maintaining security during critical incidents.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "8th April, 2026",
  },
  {
    slug: "mfa-reset-social-engineering-detect-auto-block",
    title: "MFA Reset Social Engineering: Detect and Auto-Block Risky Requests",
    description:
      "Learn how to detect and automatically block social engineering attacks targeting MFA reset requests. Covers help desk attack patterns, detection signals, and automated response workflows.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "10th April, 2026",
  },
  {
    slug: "account-suspension-vs-session-revocation-when-to-use",
    title: "Account Suspension vs Session Revocation: Which Action to Use When",
    description:
      "Learn when to use account suspension vs session revocation in identity incident response. Covers decision framework, automation guidance, and platform-specific commands.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "13th April, 2026",
  },
  {
    slug: "device-isolation-vs-identity-containment-decision-framework",
    title: "When to Isolate Devices vs Only Contain Identity: Decision Framework",
    description:
      "Learn when to isolate endpoints vs contain identity only. A practical decision framework for SOC teams to choose the right containment action based on threat type and impact.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "15th April, 2026",
  },
  {
    slug: "automated-containment-actions-ranked-by-risk",
    title: "Automated Containment Actions Ranked by Risk (Low to High Impact)",
    description:
      "A practical guide to ranking automated containment actions by risk and impact. Learn which actions to auto-approve vs require human approval based on reversibility and business disruption.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "17th April, 2026",
  },
  {
    slug: "microsoft-365-risky-settings-detect-fix-automatically",
    title: "Microsoft 365 Risky Settings: Detect and Fix Automatically",
    description:
      "Learn how to detect and automatically remediate risky Microsoft 365 configurations including mailbox forwarding, OAuth consent, delegate access, and external sharing settings.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "20th April, 2026",
  },
  {
    slug: "email-quarantine-automation-policy-design-false-positives",
    title: "Email Quarantine Automation: Policy Design That Avoids False Positives",
    description:
      "Learn how to design email quarantine automation policies that catch real threats while minimizing false positives. Practical guidance on thresholds, allowlists, and escalation workflows.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "22nd April, 2026",
  },
  {
    slug: "microsoft-defender-xdr-workflows-automate-email-identity",
    title: "Microsoft Defender XDR Workflows: Automate Response Across Email and Identity",
    description:
      "Learn how to build automated response workflows in Microsoft Defender XDR that coordinate actions across email and identity. Practical playbooks for cross-domain incident response.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "24th April, 2026",
  },
  {
    slug: "automating-user-reported-phishing-mailbox-helpdesk-workflow",
    title: "Automating User-Reported Phishing: Mailbox + Helpdesk Workflow",
    description:
      "Build an end-to-end automation for user-reported phishing that integrates mailbox analysis with helpdesk ticketing. Achieve 75%+ auto-resolution while maintaining analyst oversight.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "26th April, 2026",
  },
  {
    slug: "microsoft-graph-api-incident-response-actions-safe-usage",
    title: "Microsoft Graph API for Incident Response: Top Actions and Safe Usage Patterns",
    description:
      "A practical guide to Microsoft Graph API actions for security incident response. Learn safe usage patterns for revoking sessions, disabling accounts, and automating containment.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "28th April, 2026",
  },
  {
    slug: "email-impersonation-response-automate-domain-blocks-user-protection",
    title: "Email Impersonation Response: Automate Domain Blocks and User Protection Steps",
    description:
      "Learn how to automate email impersonation response by blocking lookalike domains, purging delivered emails org-wide, and executing tiered user protection steps in seconds—not hours.",
    category: "Industry Insights",
    type: "Article",
    displayDate: "1st May, 2026",
  },
]
