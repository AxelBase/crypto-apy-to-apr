<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';

  let isDropdownOpen = false;
  let isDark = false;

  // Configuration for Support Options
  const coffeeTiers = [
    { label: 'One Coffee', amount: '$3', url: 'https://buymeacoffee.com/axelbase' },
    { label: 'Two Coffees', amount: '$5', url: 'https://buymeacoffee.com/axelbase' },
    { label: 'Three Coffees', amount: '$10', url: 'https://buymeacoffee.com/axelbase' }
  ];

  const bitcoinUri = "bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee";

  function toggleTheme() {
    isDark = !isDark;
    document.body.dataset.bsTheme = isDark ? 'dark' : 'light';
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        isDropdownOpen = false;
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1040; pointer-events: none;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center" style="pointer-events: auto;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none logo-group">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 32px; transition: 0.3s;" />
        <span class="fw-bold fs-5 d-none d-sm-inline" style="color: var(--color-text-main);">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside>
        <button 
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-3 py-1 rounded-pill shadow-sm"
          on:click={() => isDropdownOpen = !isDropdownOpen}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-bold small">Support</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown mt-3 shadow-lg" transition:fly={{ y: -10, duration: 250 }}>
            {#each coffeeTiers as tier}
              <a href={tier.url} target="_blank" rel="noopener" on:click={() => isDropdownOpen = false}>
                <span class="amount">{tier.amount}</span> <span>{tier.label}</span>
              </a>
            {/each}

            <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={() => isDropdownOpen = false} class="custom-amount">
              Custom Amount
            </a>

            <a href={bitcoinUri} on:click={() => isDropdownOpen = false} class="custom-amount crypto-option">
              <i class="bi bi-currency-bitcoin me-1"></i> Buy via Bitcoin
            </a>
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-2 gap-md-4">
      <ul class="nav d-none d-lg-flex align-items-center gap-2 m-0">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to">How to Use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link-custom" href="{base}/explanation">Explanation</a></li>
        <li><a class="btn btn-ochre-sm ms-2" href="{base}/blog">Blog</a></li>
      </ul>

      <button class="theme-btn" on:click={toggleTheme} aria-label="Toggle Dark Mode">
        <i class="bi {isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}"></i>
      </button>

      <button class="navbar-toggler d-lg-none border-0" data-bs-toggle="collapse" data-bs-target="#mobileNav" aria-label="Open Menu">
        <i class="bi bi-grid-fill fs-3" style="color: var(--color-accent);"></i>
      </button>
    </div>
  </nav>
</header>

<main class="flex-grow-1">
  <slot />
</main>

<footer class="glass border-top py-4 mt-5">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>&copy; {new Date().getFullYear()} AxelBase Precision Tools</span>
    <div class="d-flex gap-3">
      <a href="{base}/privacy" class="text-decoration-none text-muted">Privacy Policy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted">Terms of Service</a>
    </div>
  </div>
</footer>

<style>
  /* Base Layout & Theme Styles from File 2 */
  .logo-group:hover img { transform: rotate(15deg) scale(1.1); }
  
  .nav-link-custom { 
    text-decoration: none; 
    color: var(--color-text-muted); 
    font-weight: 600; 
    padding: 5px 12px; 
    transition: 0.3s; 
    font-size: 0.85rem;
  }
  .nav-link-custom:hover { color: var(--color-accent); }

  .btn-ochre-sm { 
    background: var(--color-accent); 
    color: white; 
    border-radius: 50px; 
    padding: 5px 18px; 
    text-decoration: none; 
    font-weight: 600; 
    font-size: 0.85rem; 
    transition: 0.3s; 
  }
  .btn-ochre-sm:hover { filter: brightness(1.1); transform: scale(1.05); }

  .theme-btn { 
    background: transparent; 
    border: none; 
    color: var(--color-text-main); 
    font-size: 1.3rem; 
    transition: 0.3s; 
  }
  .theme-btn:hover { transform: rotate(20deg) scale(1.1); color: var(--color-accent); }

  /* Integrated & Optimized Dropdown Styles */
  .bmac-button {
    background: var(--color-accent);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .bmac-button:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 240px;
    /* FIX: Using primary-bg instead of glass to ensure it's not too see-through */
    background: var(--primary-bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    overflow: hidden;
    z-index: 1050;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(174, 160, 75, 0.1); /* Subtle highlight using accent color */
    color: var(--color-accent);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: var(--color-accent);
    font-size: 1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    border-top: 1px solid var(--glass-border);
    justify-content: center !important;
    font-size: 0.85rem;
  }

  .crypto-option {
    background: rgba(0,0,0,0.02);
    color: var(--color-text-muted) !important;
  }
</style>