<script>
  import { base } from '$app/paths';
  import { fade, fly } from 'svelte/transition';

  // We define the formulas as strings to prevent Svelte from 
  // misinterpreting the "$" as a reactive store.
  const formula1 = '$APY = (1 + \\frac{APR}{n})^n - 1$';
  const formula2 = '$APR = n \\times ((APY + 1)^{1/n} - 1)$';
  const formula3 = '$APY = e^{APR} - 1$';
  const formula4 = '$APR = \\ln(APY + 1)$';
</script>

<div class="container py-5 mt-5">
  <div class="row justify-content-center">
    <div class="col-lg-8" in:fade={{ duration: 800 }}>
      <header class="text-center mb-5">
        <h1 class="display-4 fw-bold">Calculation <span style="color: var(--color-accent);">Formulas</span></h1>
        <p class="lead text-muted">The mathematical engine behind AxelBase precision tools.</p>
      </header>

      <section class="glass-card p-4 p-md-5 mb-4" in:fly={{ y: 20, duration: 800, delay: 200 }}>
        <h2 class="fw-bold mb-4">Discrete Compounding</h2>
        <p class="text-muted">This is the most common method used in banking and most DeFi protocols (Daily, Weekly, Monthly).</p>
        
        <div class="formula-box my-4 p-4 text-center rounded-4">
          <div class="mb-3">
            <span class="small fw-bold text-muted text-uppercase d-block mb-1">APR to APY</span>
            <code class="fs-4 text-dark">{formula1}</code>
          </div>
          <hr class="opacity-10" />
          <div class="mt-3">
            <span class="small fw-bold text-muted text-uppercase d-block mb-1">APY to APR</span>
            <code class="fs-4 text-dark">{formula2}</code>
          </div>
        </div>
      </section>

      <section class="glass-card p-4 p-md-5 mb-4" in:fly={{ y: 20, duration: 800, delay: 400 }}>
        <h2 class="fw-bold mb-4">Continuous Compounding</h2>
        <div class="formula-box my-4 p-4 text-center rounded-4">
          <div class="mb-3">
            <span class="small fw-bold text-muted text-uppercase d-block mb-1">APR to APY</span>
            <code class="fs-4 text-dark">{formula3}</code>
          </div>
          <hr class="opacity-10" />
          <div class="mt-3">
            <span class="small fw-bold text-muted text-uppercase d-block mb-1">APY to APR</span>
            <code class="fs-4 text-dark">{formula4}</code>
          </div>
        </div>
      </section>

      <div class="d-flex flex-wrap gap-3 justify-content-center">
        <a href="{base}/" class="btn btn-ochre px-4 py-2 fw-bold rounded-pill">
          <i class="bi bi-calculator me-2"></i>Back to Converter
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .formula-box {
    background: rgba(174, 160, 75, 0.05);
    border: 1px solid rgba(174, 160, 75, 0.2);
  }
  .btn-ochre { background: var(--color-accent); color: white; border: none; transition: 0.3s; }
  .btn-ochre:hover { transform: scale(1.05); filter: brightness(1.1); color: white; }
  code { color: var(--color-text-main) !important; font-family: 'serif'; }
</style>