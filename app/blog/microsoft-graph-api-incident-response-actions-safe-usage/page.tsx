import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Shield, Code, AlertTriangle, CheckCircle2, XCircle, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Microsoft Graph API for Incident Response: Top Actions and Safe Usage Patterns | BitLyft AIR®",
  description:
    "A practical guide to Microsoft Graph API actions for security incident response. Learn safe usage patterns for revoking sessions, disabling accounts, and automating containment.",
}

export default function GraphAPIIncidentResponseBlogPost() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/resources"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="text-primary border-primary">
                Industry Insights
              </Badge>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                28th April, 2026
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Clock className="w-3 h-3" />
                14 min read
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Microsoft Graph API for Incident Response: Top Actions and Safe Usage Patterns
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A practical guide to the most impactful Graph API actions for security incident response, with safe usage
              patterns, permission requirements, and automation guardrails.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-300 leading-relaxed mb-4">
              Microsoft Graph API provides powerful capabilities for automated incident response across Microsoft 365
              environments. When a security incident occurs, the ability to programmatically revoke sessions, disable
              accounts, and contain threats can mean the difference between a contained incident and a full-scale
              breach.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              However, these same capabilities carry significant risk if misused. Automating destructive actions
              without proper guardrails can disrupt business operations, lock out legitimate users, or create
              compliance issues.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This guide covers the top Graph API actions for incident response, organized by impact level, with
              practical patterns for safe automation.
            </p>
          </section>

          {/* Top Actions by Category */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Top Graph API Actions for Incident Response</h2>

            {/* Session Management */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Session Management
              </h3>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Revoke All Sign-In Sessions</h4>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Invalidates all refresh tokens and session cookies, forcing re-authentication across all
                    applications. As of October 2025, this also invalidates MFA-protected sessions regardless of
                    enforcement method.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
                    <div className="text-gray-500 mb-2">// POST /users/{'{userId}'}/revokeSignInSessions</div>
                    <pre className="text-gray-300">
{`POST https://graph.microsoft.com/v1.0/users/{userId}/revokeSignInSessions

// Response
{
  "value": true
}`}
                    </pre>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Required Permissions</p>
                      <p className="text-gray-300 text-sm">User.ReadWrite.All, Directory.ReadWrite.All</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Required Role</p>
                      <p className="text-gray-300 text-sm">User Administrator, Privileged Authentication Admin</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Invalidate Specific Refresh Tokens</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Low Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Target specific application tokens without disrupting all sessions. Useful for containing
                    compromised OAuth apps without full session revocation.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`// Get user's OAuth2 permission grants
GET https://graph.microsoft.com/v1.0/users/{userId}/oauth2PermissionGrants

// Delete specific grant
DELETE https://graph.microsoft.com/v1.0/oauth2PermissionGrants/{id}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Account Actions
              </h3>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Disable User Account</h4>
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">High Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Prevents all sign-ins without deleting data. Reversible action ideal for containment during
                    investigation.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`PATCH https://graph.microsoft.com/v1.0/users/{userId}
Content-Type: application/json

{
  "accountEnabled": false
}`}
                    </pre>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-yellow-400 text-sm flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>
                        Disabling an account does not immediately terminate active sessions. Combine with
                        revokeSignInSessions for immediate effect.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Force Password Reset</h4>
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">High Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Forces password change on next sign-in. Essential for credential compromise scenarios.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`PATCH https://graph.microsoft.com/v1.0/users/{userId}
Content-Type: application/json

{
  "passwordProfile": {
    "forceChangePasswordNextSignIn": true,
    "forceChangePasswordNextSignInWithMfa": true
  }
}`}
                    </pre>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Reset MFA Methods</h4>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Critical Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Removes all registered authentication methods. Use only when MFA is confirmed compromised (e.g.,
                    SIM swap, authenticator app takeover).
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`// List authentication methods
GET https://graph.microsoft.com/v1.0/users/{userId}/authentication/methods

// Delete specific method
DELETE https://graph.microsoft.com/v1.0/users/{userId}/authentication/
  phoneMethods/{id}

// Require MFA re-registration
POST https://graph.microsoft.com/v1.0/users/{userId}/authentication/
  operations`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Actions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Email and Mailbox Actions
              </h3>
              <div className="space-y-4">
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Remove Mailbox Forwarding Rules</h4>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Deletes inbox rules that forward or redirect email to external addresses — a common BEC persistence
                    mechanism.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`// List inbox rules
GET https://graph.microsoft.com/v1.0/users/{userId}/mailFolders/inbox/
  messageRules

// Delete suspicious rule
DELETE https://graph.microsoft.com/v1.0/users/{userId}/mailFolders/inbox/
  messageRules/{ruleId}`}
                    </pre>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Purge Malicious Emails</h4>
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">High Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Soft-delete phishing or malware emails from user mailboxes organization-wide.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`// Search for malicious messages
GET https://graph.microsoft.com/v1.0/users/{userId}/messages?$filter=
  internetMessageId eq '<malicious-message-id>'

// Move to deleted items (soft delete)
POST https://graph.microsoft.com/v1.0/users/{userId}/messages/{messageId}/move
{
  "destinationId": "deleteditems"
}

// Hard delete (permanent)
DELETE https://graph.microsoft.com/v1.0/users/{userId}/messages/{messageId}`}
                    </pre>
                  </div>
                </div>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Revoke Delegate Access</h4>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Medium Impact</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Remove delegate permissions from a mailbox. Attackers often add delegate access for persistence.
                  </p>
                  <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
{`// List mailbox permissions
GET https://graph.microsoft.com/v1.0/users/{userId}/mailboxSettings

// Remove delegate (via Exchange Online PowerShell / EWS)
// Graph API has limited delegate management - use EWS or PowerShell
Remove-MailboxPermission -Identity user@domain.com 
  -User delegate@domain.com -AccessRights FullAccess`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Safe Usage Patterns */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Safe Usage Patterns</h2>

            <div className="space-y-6">
              {/* Pattern 1: Tiered Approval */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">1. Tiered Approval Based on Impact</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Map each action to an approval level based on reversibility and business impact.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-zinc-700">
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Action</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Impact</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Approval</th>
                        <th className="text-left py-3 px-4 text-gray-400 font-medium">Reversible</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Revoke OAuth grant</td>
                        <td className="py-3 px-4"><span className="text-green-400">Low</span></td>
                        <td className="py-3 px-4">Auto-approve</td>
                        <td className="py-3 px-4">Yes (user re-consents)</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Revoke sessions</td>
                        <td className="py-3 px-4"><span className="text-yellow-400">Medium</span></td>
                        <td className="py-3 px-4">Auto-approve</td>
                        <td className="py-3 px-4">Yes (re-authenticate)</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Delete inbox rules</td>
                        <td className="py-3 px-4"><span className="text-yellow-400">Medium</span></td>
                        <td className="py-3 px-4">Auto with logging</td>
                        <td className="py-3 px-4">No (manual recreate)</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Force password reset</td>
                        <td className="py-3 px-4"><span className="text-orange-400">High</span></td>
                        <td className="py-3 px-4">Require review</td>
                        <td className="py-3 px-4">Yes</td>
                      </tr>
                      <tr className="border-b border-zinc-800">
                        <td className="py-3 px-4">Disable account</td>
                        <td className="py-3 px-4"><span className="text-orange-400">High</span></td>
                        <td className="py-3 px-4">Require approval</td>
                        <td className="py-3 px-4">Yes</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Reset MFA methods</td>
                        <td className="py-3 px-4"><span className="text-red-400">Critical</span></td>
                        <td className="py-3 px-4">Manual only</td>
                        <td className="py-3 px-4">Yes (re-register)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pattern 2: VIP Protection */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">2. VIP and Service Account Protection</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Implement guardrails that prevent automated actions on sensitive accounts.
                </p>
                <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
{`// Check if user is protected before action
async function canAutomate(userId: string): Promise<boolean> {
  const user = await graphClient.api(\`/users/\${userId}\`)
    .select('displayName,jobTitle,memberOf')
    .expand('memberOf')
    .get();
  
  // Check against protected groups
  const protectedGroups = [
    'VIP-Executives',
    'Service-Accounts',
    'Break-Glass-Admins'
  ];
  
  const userGroups = user.memberOf
    .filter(m => m['@odata.type'] === '#microsoft.graph.group')
    .map(g => g.displayName);
  
  const isProtected = protectedGroups.some(pg => 
    userGroups.includes(pg)
  );
  
  if (isProtected) {
    // Route to manual approval queue
    await createApprovalRequest(userId, 'protected-user');
    return false;
  }
  
  return true;
}`}
                  </pre>
                </div>
              </div>

              {/* Pattern 3: Rate Limiting */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">3. Rate Limiting and Circuit Breakers</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Prevent runaway automation from affecting too many users in a short period.
                </p>
                <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                  <pre className="text-gray-300">
{`const RATE_LIMITS = {
  sessionRevoke: { max: 50, windowMinutes: 5 },
  accountDisable: { max: 10, windowMinutes: 15 },
  passwordReset: { max: 20, windowMinutes: 10 },
};

async function checkRateLimit(action: string): Promise<boolean> {
  const key = \`ratelimit:\${action}:\${getCurrentWindow()}\`;
  const count = await redis.incr(key);
  
  if (count === 1) {
    await redis.expire(key, RATE_LIMITS[action].windowMinutes * 60);
  }
  
  if (count > RATE_LIMITS[action].max) {
    await alertSecurityTeam({
      type: 'rate-limit-exceeded',
      action,
      count,
      message: 'Automated action rate limit exceeded - manual review required'
    });
    return false;
  }
  
  return true;
}`}
                  </pre>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { action: "Session Revoke", limit: "50 per 5 min", reason: "Low impact, high velocity OK" },
                    { action: "Account Disable", limit: "10 per 15 min", reason: "High impact, needs review" },
                    { action: "Password Reset", limit: "20 per 10 min", reason: "User disruption concern" },
                  ].map((item) => (
                    <div key={item.action} className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                      <p className="text-white text-sm font-semibold mb-1">{item.action}</p>
                      <p className="text-primary text-xs font-mono mb-1">{item.limit}</p>
                      <p className="text-gray-500 text-xs">{item.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pattern 4: Audit Trail */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">4. Comprehensive Audit Trail</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Log every automated action with context for compliance and rollback capability.
                </p>
                <div className="bg-zinc-950 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre className="text-gray-300">
{`interface ActionAuditLog {
  timestamp: string;
  action: string;
  targetUserId: string;
  targetUserPrincipalName: string;
  triggeredBy: 'automation' | 'analyst';
  triggerSource: string;        // Alert ID, playbook name
  previousState: object;        // For rollback
  newState: object;
  graphRequestId: string;       // Graph API request ID
  correlationId: string;        // Incident correlation
  approvalId?: string;          // If approval was required
}

// Always capture previous state before modification
async function disableUserWithAudit(userId: string, trigger: string) {
  const previousState = await graphClient.api(\`/users/\${userId}\`)
    .select('accountEnabled,signInSessionsValidFromDateTime')
    .get();
  
  const response = await graphClient.api(\`/users/\${userId}\`)
    .patch({ accountEnabled: false });
  
  await auditLog.write({
    timestamp: new Date().toISOString(),
    action: 'user.disable',
    targetUserId: userId,
    previousState: { accountEnabled: previousState.accountEnabled },
    newState: { accountEnabled: false },
    graphRequestId: response.headers['request-id'],
    triggerSource: trigger,
    // ... other fields
  });
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Permission Requirements */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Permission Requirements Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-zinc-900/50 rounded-xl border border-zinc-800">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Action Category</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Graph Permissions</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Minimum Role</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Session Management</td>
                    <td className="py-3 px-4 font-mono text-xs">User.ReadWrite.All</td>
                    <td className="py-3 px-4">User Administrator</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Account Enable/Disable</td>
                    <td className="py-3 px-4 font-mono text-xs">User.ReadWrite.All, Directory.ReadWrite.All</td>
                    <td className="py-3 px-4">User Administrator</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Password Management</td>
                    <td className="py-3 px-4 font-mono text-xs">UserAuthenticationMethod.ReadWrite.All</td>
                    <td className="py-3 px-4">Authentication Administrator</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">MFA Methods</td>
                    <td className="py-3 px-4 font-mono text-xs">UserAuthenticationMethod.ReadWrite.All</td>
                    <td className="py-3 px-4">Privileged Authentication Admin</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Mail Operations</td>
                    <td className="py-3 px-4 font-mono text-xs">Mail.ReadWrite, MailboxSettings.ReadWrite</td>
                    <td className="py-3 px-4">Exchange Administrator</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Risk Detection/Remediation</td>
                    <td className="py-3 px-4 font-mono text-xs">IdentityRiskyUser.ReadWrite.All</td>
                    <td className="py-3 px-4">Security Administrator</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
              <p className="text-blue-400 text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Best Practice:</strong> Use application permissions with certificate authentication for
                  automation. Avoid delegated permissions that require user context.
                </span>
              </p>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Common Mistakes to Avoid</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  mistake: "Disabling account without revoking sessions",
                  problem: "User remains active until tokens expire (up to 90 days)",
                  fix: "Always call revokeSignInSessions immediately after disabling",
                },
                {
                  mistake: "Not checking group membership before action",
                  problem: "Automating on VIPs causes executive escalations",
                  fix: "Implement VIP/service account guardrails",
                },
                {
                  mistake: "Using delegated permissions for automation",
                  problem: "Requires user sign-in, breaks unattended scenarios",
                  fix: "Use application permissions with certificate auth",
                },
                {
                  mistake: "No rate limiting on bulk operations",
                  problem: "False positive cascades can lock out entire departments",
                  fix: "Implement circuit breakers and rate limits",
                },
                {
                  mistake: "Deleting emails without soft-delete first",
                  problem: "Legitimate emails permanently lost, compliance issues",
                  fix: "Soft-delete to Deleted Items, hard-delete after review period",
                },
                {
                  mistake: "Not capturing previous state",
                  problem: "Cannot rollback accidental actions",
                  fix: "Always log previous state before any modification",
                },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white font-semibold text-sm">{item.mistake}</p>
                  </div>
                  <p className="text-gray-400 text-sm mb-2 ml-7">{item.problem}</p>
                  <div className="flex items-start gap-2 ml-7">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-green-400 text-sm">{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Summary</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Microsoft Graph API provides powerful capabilities for automated incident response, but power requires
                responsibility. The most effective implementations combine immediate automated actions for low-impact
                containment with approval workflows for high-impact remediation.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                  <p className="text-primary font-bold text-lg mb-1">Auto-Approve</p>
                  <p className="text-gray-400 text-sm">Session revoke, OAuth revoke, inbox rule delete</p>
                </div>
                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                  <p className="text-yellow-400 font-bold text-lg mb-1">Require Review</p>
                  <p className="text-gray-400 text-sm">Password reset, account disable, email purge</p>
                </div>
                <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                  <p className="text-red-400 font-bold text-lg mb-1">Manual Only</p>
                  <p className="text-gray-400 text-sm">MFA reset, account delete, tenant-wide blocks</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Automate Graph API Response with BitLyft AIR</h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                BitLyft AIR orchestrates Microsoft Graph API actions with built-in guardrails, VIP protection, and
                audit trails — so you get fast containment without the risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/solutions/automated-incident-response">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  )
}
