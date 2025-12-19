<script>
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';
</script>

<div class="container py-5 mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-9" in:fade={{ duration: 800 }}>
      <header class="text-center mb-5">
        <h1 class="display-4 fw-bold">APY vs APR in <span style="color: var(--color-accent);">Crypto</span></h1>
        <p class="lead text-muted">Understanding how compounding affects your digital asset returns.</p>
      </header>

      <div class="row g-4 mb-5">
        <div class="col-md-6" in:fly={{ x: -20, duration: 800, delay: 200 }}>
          <div class="glass-card p-4 h-100">
            <h3 class="fw-bold mb-3">What is APR?</h3>
            <p class="text-muted">
              <strong>Annual Percentage Rate (APR)</strong> represents the simple annual interest rate without any compounding. 
              In DeFi lending platforms like <em>Compound</em> or <em>Aave</em>, the base borrow and lend rates are usually quoted in APR.
            </p>
            <div class="badge rounded-pill bg-secondary px-3 py-2">Simple Interest</div>
          </div>
        </div>

        <div class="col-md-6" in:fly={{ x: 20, duration: 800, delay: 400 }}>
          <div class="glass-card p-4 h-100">
            <h3 class="fw-bold mb-3">What is APY?</h3>
            <p class="text-muted">
              <strong>Annual Percentage Yield (APY)</strong> is the effective annual rate that accounts for compounding interest. 
              In staking (e.g., <em>Polkadot</em> or <em>Cardano</em>), rewards often compound daily, making the APY significantly higher than the APR.
            </p>
            <div class="badge rounded-pill bg-ochre px-3 py-2">Compounded Interest</div>
          </div>
        </div>
      </div>

      <div class="glass-card p-4 p-md-5 mb-5" in:fly={{ y: 20, duration: 800, delay: 600 }}>
        <h2 class="fw-bold mb-4">Why it Matters in DeFi</h2>
        <ul class="list-unstyled custom-list">
          <li class="mb-3">
            <i class="bi bi-check-circle-fill me-2 text-ochre"></i>
            <strong>Yield Farming:</strong> Compounding exponentially boosts returns in liquidity pools like <em>Uniswap</em>.
          </li>
          <li class="mb-3">
            <i class="bi bi-check-circle-fill me-2 text-ochre"></i>
            <strong>Maximizing Gains:</strong> Daily compounding (common in crypto) maximizes growth compared to simple APR.
          </li>
          <li class="mb-3">
            <i class="bi bi-check-circle-fill me-2 text-ochre"></i>
            <strong>The Gap:</strong> A 10% APR compounded daily results in ~10.47% APY—that extra 0.47% adds up in large portfolios.
          </li>
        </ul>
        
        <blockquote class="border-start border-4 border-ochre ps-4 my-4 text-muted italic">
          "The difference between APR and APY is the difference between earning interest on your principal versus earning interest on your interest."
        </blockquote>

        <p class="text-muted mb-0">
          Use our precision converter to compare real rates across platforms like Binance Earn, Aave, or your favorite staking protocol.
        </p>
      </div>

      <div class="d-flex flex-wrap gap-3 justify-content-center">
        <a href="{base}/" class="btn btn-ochre px-4 py-2 fw-bold rounded-pill">
          <i class="bi bi-calculator me-2"></i>Back to Converter
        </a>
        <a href="{base}/formulas" class="btn btn-outline-secondary px-4 py-2 fw-bold rounded-pill">
          <i class="bi bi-function me-2"></i>View Formulas
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .bg-ochre { background-color: var(--color-accent) !important; color: white; }
  .text-ochre { color: var(--color-accent); }
  .btn-ochre { background: var(--color-accent); color: white; border: none; transition: 0.3s; }
  .btn-ochre:hover { transform: scale(1.05); filter: brightness(1.1); color: white; }
  .custom-list li { display: flex; align-items: flex-start; }
</style>