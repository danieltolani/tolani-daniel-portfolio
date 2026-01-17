import barba from '@barba/core';

// Helper to delay navigation
const delay = (n: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
};

function initBarba() {
  barba.init({
    transitions: [
      {
        name: 'default-transition',
        async leave(data) {
          const done = this.async();
          
          // Check if we need to wait for a nav click animation
          const trigger = data.trigger;
          let waitTime = 0;
          
          if (trigger instanceof HTMLElement && 
             (trigger.classList.contains('nav-link') || trigger.closest('.nav-link') || 
              trigger.tagName === 'A' && trigger.closest('.nav'))) {
             // If it was a nav click, we've already started the animation via the click handler
             // Wait for the full cycle (scale down + transition back)
             waitTime = 900; 
          }
          
          // Wait for animation or basic fade out
          await delay(waitTime);
          
          // Simple fade out of container
          if (data.current.container) {
            data.current.container.style.opacity = '0';
            data.current.container.style.transition = 'opacity 0.3s ease';
            await delay(300);
          }
          
          done();
        },
        async enter(data) {
          // Reset scroll
          window.scrollTo(0, 0);
          
          // Fade in
          if (data.next.container) {
            data.next.container.style.opacity = '0';
            data.next.container.style.transition = 'none'; // Prepare for fade in
            
            // Wait a frame
            await delay(10);
            
            data.next.container.style.transition = 'opacity 0.5s ease';
            data.next.container.style.opacity = '1';
          }
        },
        async after(data) {
          // Re-initialize scripts
          // Instead of astro:page-load, we'll manually dispatch it
          document.dispatchEvent(new Event('astro:page-load'));
          
          // Dispatch DOMContentLoaded as backup for older scripts
          document.dispatchEvent(new Event('DOMContentLoaded'));
          
          // Update Header state manually since it persists
          updateHeaderState(data.next.url.path);
        }
      }
    ],
    // Handle nested routes / dynamic namespaces
    views: [
      {
        namespace: 'home',
        beforeEnter() {
          // Home specific init if needed
        }
      },
      {
        namespace: 'project',
        beforeEnter() {
          // Project specific init
        }
      }
    ]
  });
}

function updateHeaderState(path: string) {
  const navLinks = document.querySelectorAll(".nav a");
  const headerLogo = document.querySelector(".header-logo") as HTMLElement;
  
  // Reset active classes
  navLinks.forEach(link => link.classList.remove('active'));
  if (headerLogo) headerLogo.classList.remove('active');
  
  // Set active based on path
  if (path === '/') {
    if (headerLogo) headerLogo.classList.add('active');
  } else if (path.startsWith('/projects') || path.startsWith('/work')) {
    // Both point to /projects internally now, but check href
    const projectsLink = document.querySelector('.nav a[href="/projects"]');
    if (projectsLink) projectsLink.classList.add('active');
  } else {
    // Direct match
    const activeLink = document.querySelector(`.nav a[href="${path}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}

// Run init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBarba);
} else {
  initBarba();
}
