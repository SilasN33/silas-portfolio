// ============================================
// PARTICLE CANVAS BACKGROUND
// ============================================

export function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationId;
    const PARTICLE_COUNT = 60;
    const CONNECTION_DISTANCE = 150;
    const MOUSE_RADIUS = 180;
    let mouse = { x: -9999, y: -9999 };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
        };
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle());
        }
    }

    function drawParticle(p) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(124, 58, 237, ${p.opacity})`;
        ctx.fill();
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DISTANCE) {
                    const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function update() {
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Mouse interaction
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_RADIUS) {
                const force = (1 - dist / MOUSE_RADIUS) * 0.02;
                p.vx -= dx * force;
                p.vy -= dy * force;
            }

            // Damping
            p.vx *= 0.99;
            p.vy *= 0.99;

            // Boundary wrapping
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        update();
        drawConnections();
        particles.forEach(drawParticle);
        animationId = requestAnimationFrame(animate);
    }

    // Events
    window.addEventListener('resize', () => {
        resize();
    });

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    init();
    animate();

    return () => {
        cancelAnimationFrame(animationId);
    };
}
