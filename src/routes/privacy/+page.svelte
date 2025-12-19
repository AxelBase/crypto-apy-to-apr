<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto APY ↔ APR Converter</title>
  <meta name="description" content="Learn how the Crypto APY to APR Converter protects your privacy with a fully client-side, no-data-collection design." />
  <meta property="og:title" content="Privacy Policy | Crypto APY ↔ APR Converter" />
  <meta property="og:description" content="Learn how the Crypto APY to APR Converter protects your privacy with a fully client-side, no-data-collection design." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout" style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 19, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto APY ↔ APR Converter</strong>, a free, open-source web utility designed to help users convert between Annual Percentage Rate (APR) and Annual Percentage Yield (APY) with support for various compounding frequencies common in cryptocurrency staking and DeFi. This Privacy Policy explains our data practices. We prioritize your privacy and operate on a <strong>zero-data-collection principle</strong>. The entire tool runs <strong>client-side in your browser</strong>, meaning <strong>no information is ever sent to servers, stored, or processed by us</strong>. This ensures complete transparency and control over your data.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The converter is built to function without any data gathering. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Information</strong>: No names, emails, IP addresses, or device details.</li>
      <li><strong>Usage Data</strong>: No tracking of visits, browser type, location, or interaction patterns.</li>
      <li><strong>Input Data</strong>: Rates, frequencies, or any values you enter are processed locally and never transmitted.</li>
      <li><strong>Analytics or Cookies</strong>: No Google Analytics, tracking pixels, session cookies, or similar technologies.</li>
    </ul>
    <p>All calculations happen instantly on your device using JavaScript, leaving no trace beyond your current session.</p>

    <h2>3. How the Tool Works</h2>
    <p>When using the converter:</p>
    <ul>
      <li><strong>Local Processing</strong>: Inputs are handled purely in-browser with native Math functions for accurate APR/APY conversions.</li>
      <li><strong>No Transmission</strong>: Results, contexts, and warnings are generated and displayed without any network requests.</li>
      <li><strong>Temporary Memory Only</strong>: Form data may reside briefly in browser memory but clears on refresh or closure.</li>
    </ul>
    <p>This architecture guarantees <strong>absolute data isolation</strong>, ideal for researching sensitive yield comparisons.</p>

    <h2>4. Third-Party Services</h2>
    <p>We use minimal CDNs for Bootstrap styling and icons, but these load static assets without user tracking. No advertising, analytics, or external scripts collect data. Navigation to explanation or formulas pages stays within the static site.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>The site is <strong>completely cookie-free</strong> and stateless. No persistent identifiers or tracking mechanisms are implemented.</p>

    <h2>6. Data Security</h2>
    <p>Since no data is collected, security risks are eliminated on our end. We recommend:</p>
    <ul>
      <li>Using updated browsers for client-side execution.</li>
      <li>Avoiding public networks for sensitive calculations.</li>
      <li>Clearing browser cache if needed.</li>
    </ul>
    <p>We bear no responsibility for local device security.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly process any minor's data (though none is collected).</p>

    <h2>8. International Compliance</h2>
    <p>As a static, no-collection site, we inherently comply with GDPR, CCPA, and similar regulations by default.</p>

    <h2>9. Policy Changes</h2>
    <p>Updates will appear here with revised effective dates. Continued use constitutes acceptance.</p>

    <h2>10. Contact</h2>
    <p>For questions, refer to the project's GitHub repository or open an issue.</p>

    <p class="italic-note">Your privacy is protected by design—<strong>nothing leaves your browser</strong>.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 1rem;
    min-height: 80vh;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
    font-size: 1rem;
    color: var(--color-text-muted);
  }

  .breadcrumbs a {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .breadcrumbs a:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
  }

  .breadcrumbs span {
    color: var(--color-text-muted);
    opacity: 0.7;
  }

  .breadcrumbs p {
    margin: 0;
    font-weight: 600;
    color: var(--color-text-main);
  }

  .prose {
    line-height: 1.9;
    font-size: 1.15rem;
  }

  .prose .post-meta {
    color: var(--color-text-muted);
    font-size: 1rem;
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    border-bottom: 2px dashed var(--glass-border);
    opacity: 0.9;
  }

  .prose h1 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--color-text-main);
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .prose h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-accent);
    margin: 3.5rem 0 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 3px solid var(--color-accent);
    position: relative;
  }

  .prose h2::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 80px;
    height: 3px;
    background: var(--color-accent);
    border-radius: 2px;
  }

  .prose p {
    color: var(--color-text-main);
    margin-bottom: 1.8rem;
    opacity: 0.95;
  }

  .prose ul {
    list-style-type: none;
    padding-left: 2rem;
    margin: 2rem 0;
  }

  .prose ul li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1.2rem;
    color: var(--color-text-main);
    line-height: 1.7;
  }

  .prose ul li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-weight: bold;
    font-size: 1.3rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--color-accent);
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 5rem;
    padding: 2rem;
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    border: 2px dashed var(--color-accent);
    border-radius: var(--radius-lg);
    opacity: 0.9;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .prose h1 {
      font-size: 2.5rem;
    }
    .prose h2 {
      font-size: 1.8rem;
    }
    .post-layout {
      padding: 3rem 1rem;
    }
  }
</style>