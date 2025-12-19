<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Why APY Matters More Than APR in Crypto', description: 'Discover why most crypto platforms quote APY instead of APR and how compounding affects your real staking or DeFi yields.' },
    { href: '/blog/posts/post2', title: 'Understanding Daily Compounding in Staking', description: 'Learn how daily reward compounding works in major protocols and why it creates the difference between APR and APY.' },
    { href: '/blog/posts/post3', title: 'How to Use This APY ↔ APR Converter', description: 'A step-by-step guide to quickly convert between APR and APY for any compounding frequency.' },
    { href: '/blog/posts/post4', title: 'Continuous vs Discrete Compounding Explained', description: 'Compare daily, monthly, and continuous compounding — and see which one is closest to real-world crypto behavior.' },
    { href: '/blog/posts/post5', title: 'Common Mistakes When Comparing Crypto Yields', description: 'Avoid confusion when platforms advertise different rates (APR vs APY) and how to make accurate comparisons.' },
    { href: '/blog/posts/post6', title: 'APY vs APR in DeFi Lending and Borrowing', description: 'Explore how lending platforms like Aave or Compound use these rates and what they mean for borrowers and lenders.' },
    { href: '/blog/posts/post7', title: 'Real-World Examples from Top Staking Platforms', description: 'See actual APY/APR conversions from Ethereum, Solana, Binance Earn, and more — and what the numbers really mean.' },
  ];
</script>

<svelte:head>
  <title>Blog | Crypto APY ↔ APR Converter</title>
  <meta name="description" content="Insights, guides, and explanations about APY, APR, compounding, and yield comparisons in cryptocurrency staking and DeFi." />
</svelte:head>

<div class="container fade-in blog-index" style="padding-top: 100px;">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Crypto Yield Insights</h1>
    <p class="subtitle">
      Practical guides, explanations, and real-world examples to help you understand APY, APR, and compounding in cryptocurrency staking, lending, and DeFi.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding: 4rem 1rem;
    min-height: 80vh;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .blog-header h1 {
    font-size: 3rem;
    font-weight: 800;
    color: var(--color-text-main);
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  .blog-header h1 i {
    color: var(--color-accent);
    margin-right: 0.75rem;
  }

  .subtitle {
    font-size: 1.2rem;
    color: var(--color-text-muted);
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    opacity: 0.9;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .post-card {
    text-decoration: none;
    height: 100%;
    display: block;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }


  .post-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: 1rem;
    line-height: 1.3;
    transition: color 0.3s ease;
  }

  .post-card:hover .post-title {
    color: var(--color-accent-hover);
  }

  .post-description {
    font-size: 1.05rem;
    color: var(--color-text-muted);
    flex-grow: 1;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .read-more {
    color: var(--color-accent);
    font-weight: 700;
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .read-more::after {
    content: "→";
    font-size: 1.4rem;
    transition: transform 0.3s ease;
  }

  .post-card:hover .read-more {
    color: var(--color-accent-hover);
  }

  .post-card:hover .read-more::after {
    transform: translateX(8px);
  }

</style>