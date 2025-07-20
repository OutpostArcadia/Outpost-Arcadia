// Outpost Arcadia Mars Theme JavaScript Enhancements
// Custom interactions and dynamic elements for the Mars-themed Obsidian Publish site

(function() {
    'use strict';

    // Initialize Mars theme when DOM is ready
    function initMarsTheme() {
        console.log('🚀 Initializing Outpost Arcadia Mars Theme...');
        
        // Add Mars theme class to body
        document.body.classList.add('mars-theme');
        
        // Force dark theme
        document.documentElement.classList.add('theme-dark');
        document.documentElement.classList.remove('theme-light');
        
        // Initialize all enhancements
        enhanceNavigation();
        addMarsMetadata();
        enhanceScrolling();
        addKeyboardShortcuts();
        enhanceSearch();
        addPerformanceOptimizations();
        
        console.log('✅ Mars theme initialized successfully');
    }

    // Enhance navigation with Mars-themed elements
    function enhanceNavigation() {
        const siteHeader = document.querySelector('.site-header');
        if (siteHeader) {
            // Add gradient background to header
            siteHeader.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)';
            siteHeader.style.backdropFilter = 'blur(10px)';
            
            // Add subtle border glow effect
            siteHeader.style.borderBottom = '2px solid #3255a4';
            siteHeader.style.boxShadow = '0 2px 20px rgba(50, 85, 164, 0.1)';
        }

        // Enhance site title with Mars branding
        const siteTitle = document.querySelector('.site-header-text');
        if (siteTitle) {
            siteTitle.style.color = '#00a1e4';
            siteTitle.style.fontWeight = '700';
            siteTitle.style.textShadow = '0 0 10px rgba(0, 161, 228, 0.3)';
            
            // Add hover effect
            siteTitle.addEventListener('mouseenter', function() {
                this.style.textShadow = '0 0 20px rgba(0, 161, 228, 0.6)';
            });
            
            siteTitle.addEventListener('mouseleave', function() {
                this.style.textShadow = '0 0 10px rgba(0, 161, 228, 0.3)';
            });
        }
    }

    // Add Mars-themed metadata and branding
    function addMarsMetadata() {
        // Update page title if it's the home page
        if (document.title.includes('Obsidian Publish')) {
            document.title = 'Outpost Arcadia - AI-Powered Mars Colonization Knowledge Engine';
        }

        // Add Mars-themed favicon if not already set
        if (!document.querySelector('link[rel="icon"]')) {
            const favicon = document.createElement('link');
            favicon.rel = 'icon';
            favicon.type = 'image/svg+xml';
            favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23cd5c5c"/><circle cx="40" cy="40" r="8" fill="%230a0a0a" opacity="0.3"/><circle cx="65" cy="35" r="5" fill="%230a0a0a" opacity="0.2"/></svg>';
            document.head.appendChild(favicon);
        }

        // Add meta tags for Mars theme
        const metaTheme = document.createElement('meta');
        metaTheme.name = 'theme-color';
        metaTheme.content = '#0a0a0a';
        document.head.appendChild(metaTheme);

        const metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = 'Outpost Arcadia: The AI-powered knowledge engine for Mars colonization. Comprehensive research, analysis, and planning for humanity\'s future on Mars.';
        document.head.appendChild(metaDescription);
    }

    // Enhance scrolling with smooth Mars-themed effects
    function enhanceScrolling() {
        // Add smooth scrolling to all internal links
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });

        // Add scroll-based header enhancement
        let lastScrollY = window.scrollY;
        const header = document.querySelector('.site-header');
        
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            if (header) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down - add more transparency
                    header.style.opacity = '0.95';
                    header.style.backdropFilter = 'blur(15px)';
                } else {
                    // Scrolling up - full opacity
                    header.style.opacity = '1';
                    header.style.backdropFilter = 'blur(10px)';
                }
            }
            
            lastScrollY = currentScrollY;
        });
    }

    // Add keyboard shortcuts for Mars theme
    function addKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Alt + M: Toggle Mars theme enhancements
            if (e.altKey && e.key.toLowerCase() === 'm') {
                e.preventDefault();
                toggleMarsEnhancements();
            }
            
            // Alt + S: Focus search (if available)
            if (e.altKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                const searchInput = document.querySelector('input[type="search"], .search-input');
                if (searchInput) {
                    searchInput.focus();
                }
            }
            
            // Alt + H: Go to home/root page
            if (e.altKey && e.key.toLowerCase() === 'h') {
                e.preventDefault();
                window.location.href = '/';
            }
        });
    }

    // Toggle Mars theme enhancements
    function toggleMarsEnhancements() {
        const body = document.body;
        const isEnhanced = body.classList.contains('mars-enhanced');
        
        if (isEnhanced) {
            body.classList.remove('mars-enhanced');
            console.log('🔴 Mars enhancements disabled');
        } else {
            body.classList.add('mars-enhanced');
            console.log('🔵 Mars enhancements enabled');
            
            // Add enhanced visual effects
            const style = document.createElement('style');
            style.textContent = `
                .mars-enhanced .mars-theme::after {
                    content: '';
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at 30% 70%, rgba(205, 92, 92, 0.05) 0%, transparent 50%);
                    pointer-events: none;
                    z-index: -1;
                    animation: mars-atmosphere 20s ease-in-out infinite;
                }
                
                @keyframes mars-atmosphere {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Enhance search functionality
    function enhanceSearch() {
        // Add search result highlighting
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Enhance search results
                            const searchResults = node.querySelectorAll('.search-result');
                            searchResults.forEach(enhanceSearchResult);
                        }
                    });
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Enhance individual search result
    function enhanceSearchResult(result) {
        result.style.background = 'var(--background-secondary)';
        result.style.border = '1px solid var(--background-modifier-border)';
        result.style.borderRadius = '6px';
        result.style.padding = '12px';
        result.style.margin = '8px 0';
        result.style.transition = 'all 0.3s ease';
        
        result.addEventListener('mouseenter', function() {
            this.style.background = 'var(--background-accent)';
            this.style.borderColor = 'var(--interactive-accent)';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 161, 228, 0.2)';
        });
        
        result.addEventListener('mouseleave', function() {
            this.style.background = 'var(--background-secondary)';
            this.style.borderColor = 'var(--background-modifier-border)';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    }

    // Add performance optimizations
    function addPerformanceOptimizations() {
        // Lazy load images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }

        // Optimize animations for better performance
        if (window.requestIdleCallback) {
            window.requestIdleCallback(function() {
                // Add hardware acceleration to animated elements
                const animatedElements = document.querySelectorAll('.mars-theme, .site-header');
                animatedElements.forEach(function(el) {
                    el.style.willChange = 'transform, opacity';
                    el.style.transform = 'translateZ(0)'; // Force hardware acceleration
                });
            });
        }
    }

    // Add Mars-themed console messages
    function addConsoleMessages() {
        const styles = [
            'color: #00a1e4',
            'font-family: JetBrains Mono, monospace',
            'font-size: 14px',
            'font-weight: bold'
        ].join(';');

        console.log('%c🚀 Welcome to Outpost Arcadia', styles);
        console.log('%cThe AI-Powered Mars Colonization Knowledge Engine', 'color: #cd5c5c; font-family: JetBrains Mono, monospace;');
        console.log('%cKeyboard shortcuts: Alt+M (toggle enhancements), Alt+S (search), Alt+H (home)', 'color: #8b949e; font-family: JetBrains Mono, monospace; font-size: 12px;');
    }

    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initMarsTheme();
            addConsoleMessages();
        });
    } else {
        initMarsTheme();
        addConsoleMessages();
    }

    // Handle page visibility changes for performance
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Page is hidden - pause animations
            document.body.style.animationPlayState = 'paused';
        } else {
            // Page is visible - resume animations
            document.body.style.animationPlayState = 'running';
        }
    });

    // Add error handling for Mars theme
    window.addEventListener('error', function(e) {
        console.warn('🔴 Mars theme error:', e.error);
    });

    // Export Mars theme utilities for debugging
    window.MarsTheme = {
        toggle: toggleMarsEnhancements,
        reinitialize: initMarsTheme,
        version: '1.0.1',
        cacheBust: '2025-01-27-14:30'
    };

})(); 