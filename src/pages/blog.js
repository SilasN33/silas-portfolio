// ============================================
// BLOG / INSIGHTS PAGE
// ============================================

const BLOG_POSTS = [
    {
        title: 'Building AI-Assisted Data Pipelines',
        excerpt: 'How to leverage LLMs and automation agents to create intelligent data processing workflows that adapt and learn from patterns.',
        category: 'AI',
        date: 'Mar 2026',
        readTime: '8 min read',
        featured: true,
    },
    {
        title: 'Why Every Developer Should Learn Data Engineering',
        excerpt: 'Data engineering skills are becoming essential for modern developers. Here\'s why and how to get started with ETL pipelines.',
        category: 'Data Engineering',
        date: 'Feb 2026',
        readTime: '6 min read',
    },
    {
        title: 'Automating Business Workflows with Python',
        excerpt: 'A practical guide to building Python automation scripts that integrate APIs, process data, and eliminate repetitive tasks.',
        category: 'Automation',
        date: 'Feb 2026',
        readTime: '7 min read',
    },
    {
        title: 'LLM Integration Patterns for Production',
        excerpt: 'Design patterns for reliably integrating large language models into production systems with proper error handling and fallbacks.',
        category: 'AI',
        date: 'Jan 2026',
        readTime: '10 min read',
    },
    {
        title: 'Designing Scalable API Architectures',
        excerpt: 'Best practices for designing APIs that scale. From authentication and rate limiting to caching and database optimization.',
        category: 'Architecture',
        date: 'Jan 2026',
        readTime: '9 min read',
    },
    {
        title: 'From Side Project to Micro-SaaS',
        excerpt: 'Lessons learned from turning weekend experiments into revenue-generating micro-SaaS products as a solo developer.',
        category: 'SaaS',
        date: 'Dec 2025',
        readTime: '5 min read',
    },
    {
        title: 'PostgreSQL Performance Optimization Tips',
        excerpt: 'Advanced techniques for optimizing PostgreSQL queries, indexing strategies, and connection pooling for high-throughput applications.',
        category: 'Backend',
        date: 'Dec 2025',
        readTime: '8 min read',
    },
];

const CATEGORY_COLORS = {
    'AI': '',
    'Data Engineering': 'tag--blue',
    'Automation': '',
    'Architecture': 'tag--blue',
    'SaaS': '',
    'Backend': 'tag--blue',
};

export function renderBlog() {
    const featured = BLOG_POSTS.find(p => p.featured);
    const posts = BLOG_POSTS.filter(p => !p.featured);

    return `
    <div class="page-enter" style="padding-top: 100px;">
      <section class="section" style="padding-top: 40px;">
        <div class="container">
          <div class="section-header">
            <p class="section-label reveal">Insights</p>
            <h1 class="section-title reveal">Blog & <span class="gradient-text">Insights</span></h1>
            <p class="section-subtitle reveal">Thoughts on AI, data engineering, and building software</p>
          </div>

          <!-- Featured Post -->
          ${featured ? `
          <div class="blog-featured reveal">
            <div class="glass-card">
              <div class="blog-thumbnail" style="height: 240px; margin-bottom: 0;">
                <div class="blog-thumbnail-gradient" style="background: var(--accent-gradient); opacity: 0.15;"></div>
                <span class="blog-category tag">${featured.category}</span>
              </div>
              <div>
                <span class="tag" style="margin-bottom: 12px; display: inline-block;">FEATURED</span>
                <h2 class="blog-title" style="font-size: 1.4rem; margin-bottom: 12px;">${featured.title}</h2>
                <p class="blog-excerpt">${featured.excerpt}</p>
                <div class="blog-meta" style="margin-top: 16px;">
                  <span>${featured.date}</span>
                  <span>${featured.readTime}</span>
                </div>
                <a href="#" class="project-link" style="display: inline-block; margin-top: 16px;">Read More →</a>
              </div>
            </div>
          </div>
          ` : ''}

          <!-- Blog Grid -->
          <div class="blog-grid">
            ${posts.map((post, i) => `
              <div class="glass-card blog-card reveal reveal-delay-${(i % 4) + 1}">
                <div class="blog-thumbnail">
                  <div class="blog-thumbnail-gradient"></div>
                  <span class="blog-category tag ${CATEGORY_COLORS[post.category] || ''}">${post.category}</span>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                  <span>${post.date}</span>
                  <span>${post.readTime}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
