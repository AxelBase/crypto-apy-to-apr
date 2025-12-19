<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition';

  const paypalUsername = "AxelLab427"; 
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;
  let isDark = false;

  function toggleTheme() {
    isDark = !isDark;
    document.body.dataset.bsTheme = isDark ? 'dark' : 'light';
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) node.dispatchEvent(new CustomEvent('click_outside'));
    };
    document.addEventListener('click', handleClick, true);
    return { destroy() { document.removeEventListener('click', handleClick, true); } };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1040; pointer-events: none;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center" style="pointer-events: auto;">
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 text-decoration-none logo-group">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 32px; transition: 0.3s;" />
        <span class="fw-bold fs-5 d-none d-sm-inline" style="color: var(--color-text-main);">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={() => isDropdownOpen = false}>
        <button class="btn btn-coffee rounded-pill btn-sm fw-bold px-3" on:click={() => isDropdownOpen = !isDropdownOpen}>
          <i class="bi bi-cup-hot-fill me-1"></i> Support
        </button>
        {#if isDropdownOpen}
          <div class="dropdown-custom glass" transition:slide>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" class="donate-link">${amount}</a>
            {/each}
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
        <li><a class="nav-link-custom" href="{base}/formulas">Formulas</a></li>
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

<main class="flex-grow-1"><slot /></main>

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
  .logo-group:hover img { transform: rotate(15deg) scale(1.1); }
  .nav-link-custom { text-decoration: none; color: var(--color-text-muted); font-weight: 600; padding: 5px 12px; transition: 0.3s; }
  .nav-link-custom:hover { color: var(--color-accent); }
  .btn-coffee { background: #ffdd00; color: #3d3d3d; border: none; transition: 0.3s; }
  .btn-coffee:hover { transform: translateY(-2px); background: #ffe54c; }
  .btn-ochre-sm { background: var(--color-accent); color: white; border-radius: 50px; padding: 5px 18px; text-decoration: none; font-weight: 600; font-size: 0.9rem; transition: 0.3s; }
  .btn-ochre-sm:hover { filter: brightness(1.1); transform: scale(1.05); }
  .dropdown-custom { position: absolute; top: 120%; left: 0; min-width: 100px; padding: 10px; border-radius: 16px; display: flex; flex-direction: column; gap: 5px; z-index: 1050; }
  .donate-link { text-decoration: none; color: var(--color-accent); font-weight: bold; text-align: center; padding: 8px; border-radius: 10px; transition: 0.2s; }
  .donate-link:hover { background: rgba(255,255,255,0.3); transform: scale(1.1); }
  .theme-btn { background: transparent; border: none; color: var(--color-text-main); font-size: 1.3rem; transition: 0.3s; }
  .theme-btn:hover { transform: rotate(20deg) scale(1.1); color: var(--color-accent); }
</style>