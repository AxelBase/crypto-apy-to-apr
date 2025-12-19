<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto APY ↔ APR Converter</title>
  <meta name="description" content="Review the terms of use for the Crypto APY to APR Converter, including disclaimers on financial information." />
  <meta property="og:title" content="Terms and Conditions | Crypto APY ↔ APR Converter" />
  <meta property="og:description" content="Review the terms of use for the Crypto APY to APR Converter, including disclaimers on financial information." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout" style="padding-top: 150px;">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 19, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto APY ↔ APR Converter</strong> (the "Tool"), a free static web utility, you agree to these Terms and Conditions. If you do not agree, please refrain from using the Tool. We reserve the right to update these terms at any time, with changes posted here.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool provides client-side calculations to convert between APR and APY, supporting multiple compounding frequencies relevant to cryptocurrency staking and DeFi. All processing occurs in your browser. Results include contextual explanations and access to educational pages on formulas and crypto concepts.</p>

    <h2>3. Use of the Tool</h2>
    <p>You may use the Tool for personal, non-commercial purposes. Permitted uses include:</p>
    <ul>
      <li>Entering rates for instant conversions.</li>
      <li>Exploring different frequencies (daily, continuous, etc.).</li>
      <li>Reading educational content.</li>
    </ul>
    <p>Prohibited actions include automated scraping, modification, or distribution without permission.</p>

    <h2>4. No Financial Advice</h2>
    <p><strong>The Tool is for informational and educational purposes only</strong>. It does <em>not</em> constitute financial, investment, or professional advice. Cryptocurrency yields vary by platform, market conditions, and risks. Calculations are mathematical estimates and may not reflect actual returns due to fees, slippage, volatility, or protocol changes. Always conduct independent research and consult qualified advisors before making decisions.</p>

    <h2>5. Accuracy and Limitations</h2>
    <p>While we strive for precision using standard formulas (e.g., APY = (1 + APR/n)^n - 1), results are approximations. Edge cases (high rates, negatives) trigger warnings. We make no warranties about accuracy, completeness, or suitability.</p>

    <h2>6. Intellectual Property</h2>
    <p>The Tool's code, design, and content are open-source where applicable. Educational materials are provided under fair use for learning. You may not claim ownership or remove attributions.</p>

    <h2>7. Disclaimer of Warranties</h2>
    <p>The Tool is provided "as is" without warranties of any kind, express or implied, including merchantability or fitness for purpose. We do not guarantee uninterrupted access or error-free operation.</p>

    <h2>8. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the Tool, including financial losses from yield miscalculations.</p>

    <h2>9. Governing Law</h2>
    <p>These terms are governed by general internet usage principles. Disputes shall prioritize amicable resolution.</p>

    <h2>10. Contact and Updates</h2>
    <p>For feedback, visit the project's repository. Changes to terms will update the effective date.</p>

    <p class="italic-note"><strong>Use at your own risk</strong>—the Tool empowers informed exploration but bears no responsibility for outcomes.</p>
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