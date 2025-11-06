// ============================= //
// 🌌 SPACE EFFECTS GENERATOR
// Professional dynamic space effects
// ============================= //

class SpaceEffectsManager {
  constructor() {
    this.container = document.querySelector('.space-effects-container');
    this.isDark = document.documentElement.classList.contains('dark');
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (this.reducedMotion) return;
    
    this.init();
    this.observeThemeChanges();
  }

  init() {
    this.clearEffects();
    this.createTwinklingStars(40);
    this.createSpaceDust(20);
    this.createEnergyOrbs(6);
    this.createPulsars(5);
    
    if (this.isDark) {
      this.createGalaxies(3);
      this.createShootingStars(7);
    } else {
      this.createSunRays(6);
      this.createLightClouds(4);
    }
    
    this.createNebulaLayers(3);
  }

  clearEffects() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }

  createTwinklingStars(count) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'twinkling-star';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${3 + Math.random() * 7}s`;
      this.container.appendChild(star);
    }
  }

  createSpaceDust(count) {
    for (let i = 0; i < count; i++) {
      const dust = document.createElement('div');
      dust.className = 'space-dust';
      dust.style.top = `${100 + Math.random() * 20}%`;
      dust.style.left = `${Math.random() * 100}%`;
      dust.style.animationDelay = `${Math.random() * 20}s`;
      dust.style.animationDuration = `${20 + Math.random() * 40}s`;
      this.container.appendChild(dust);
    }
  }

  createEnergyOrbs(count) {
    for (let i = 0; i < count; i++) {
      const orb = document.createElement('div');
      orb.className = 'energy-orb';
      orb.style.top = `${Math.random() * 100}%`;
      orb.style.left = `${Math.random() * 100}%`;
      orb.style.animationDelay = `${Math.random() * 10}s`;
      orb.style.animationDuration = `${8 + Math.random() * 20}s`;
      this.container.appendChild(orb);
    }
  }

  createPulsars(count) {
    for (let i = 0; i < count; i++) {
      const pulsar = document.createElement('div');
      pulsar.className = 'pulsar';
      pulsar.style.top = `${Math.random() * 100}%`;
      pulsar.style.left = `${Math.random() * 100}%`;
      pulsar.style.animationDelay = `${Math.random() * 5}s`;
      pulsar.style.animationDuration = `${3 + Math.random() * 7}s`;
      this.container.appendChild(pulsar);
    }
  }

  createGalaxies(count) {
    for (let i = 0; i < count; i++) {
      const galaxy = document.createElement('div');
      galaxy.className = 'galaxy dark-only';
      const size = 200 + Math.random() * 400;
      galaxy.style.width = `${size}px`;
      galaxy.style.height = `${size}px`;
      galaxy.style.top = `${-50 + Math.random() * 150}%`;
      galaxy.style.left = `${-50 + Math.random() * 150}%`;
      galaxy.style.animationDelay = `${Math.random() * 20}s`;
      galaxy.style.animationDuration = `${60 + Math.random() * 120}s`;
      this.container.appendChild(galaxy);
    }
  }

  createShootingStars(count) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'shooting-star dark-only';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.transform = `rotate(${Math.random() * 360}deg)`;
      star.style.animationDelay = `${Math.random() * 45}s`;
      star.style.animationDuration = `${1.5 + Math.random() * 2.5}s`;
      this.container.appendChild(star);
    }
  }

  createSunRays(count) {
    for (let i = 0; i < count; i++) {
      const ray = document.createElement('div');
      ray.className = 'sun-ray light-only';
      ray.style.transform = `translate(-50%, -50%) rotate(${i * (360 / count)}deg)`;
      ray.style.animationDelay = `${i * 2}s`;
      ray.style.animationDuration = `${20 + Math.random() * 10}s`;
      this.container.appendChild(ray);
    }
  }

  createLightClouds(count) {
    for (let i = 0; i < count; i++) {
      const cloud = document.createElement('div');
      cloud.className = 'light-cloud light-only';
      const size = 100 + Math.random() * 200;
      cloud.style.width = `${size}px`;
      cloud.style.height = `${size * 0.5}px`;
      cloud.style.top = `${Math.random() * 100}%`;
      cloud.style.left = `${-20 + Math.random() * 20}%`;
      cloud.style.animationDuration = `${60 + Math.random() * 120}s`;
      cloud.style.opacity = `${0.1 + Math.random() * 0.2}`;
      this.container.appendChild(cloud);
    }
  }

  createNebulaLayers(count) {
    for (let i = 0; i < count; i++) {
      const nebula = document.createElement('div');
      nebula.className = 'nebula-layer';
      
      const positions = [
        { top: '-20%', right: '-15%', width: '800px', height: '600px', duration: '25s' },
        { bottom: '-15%', left: '-20%', width: '700px', height: '500px', duration: '30s', delay: '-10s' },
        { top: '40%', left: '45%', width: '600px', height: '400px', duration: '35s', delay: '-20s' }
      ];
      
      const pos = positions[i] || positions[0];
      Object.entries(pos).forEach(([key, value]) => {
        if (key === 'duration') {
          nebula.style.animationDuration = value;
        } else if (key === 'delay') {
          nebula.style.animationDelay = value;
        } else {
          nebula.style[key] = value;
        }
      });
      
      this.container.appendChild(nebula);
    }
  }

  observeThemeChanges() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const newIsDark = document.documentElement.classList.contains('dark');
          if (newIsDark !== this.isDark) {
            this.isDark = newIsDark;
            this.init();
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
}

// Initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new SpaceEffectsManager();
  });
} else {
  new SpaceEffectsManager();
}

// Re-initialize on Astro page load
document.addEventListener('astro:page-load', () => {
  new SpaceEffectsManager();
});