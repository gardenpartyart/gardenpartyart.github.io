---
layout: default
title: Home
---

<section id="hero">
    <div class="container">
        <h2>Welcome to Nude Portrait Art</h2>
        <p>An exploration of the human form through intimate and expressive artworks.</p>
        <a href="{{ '/gallery/' | relative_url }}" class="button">Explore My Work</a>
    </div>
</section>

<section id="about">
    <div class="container">
        <h2>About the Artist</h2>
        <p>I am [Your Name], a nude portrait artist dedicated to capturing the grace and vulnerability of the human body...</p>
        <a href="{{ '/about/' | relative_url }}" class="button">Learn More</a>
    </div>
</section>

<section id="gallery-preview">
    <div class="container">
        <h2>Featured Artworks</h2>
        <div class="gallery-grid">
            <div class="art-piece">
                <img src="{{ '/assets/images/artwork1.jpg' | relative_url }}" alt="Artwork 1">
                <p>Artwork 1</p>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=your-paypal-email&item_name=Artwork+1&amount=100.00" class="button">Purchase</a>
            </div>
            <div class="art-piece">
                <img src="{{ '/assets/images/artwork2.jpg' | relative_url }}" alt="Artwork 2">
                <p>Artwork 2</p>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=your-paypal-email&item_name=Artwork+2&amount=150.00" class="button">Purchase</a>
            </div>
        </div>
        <a href="{{ '/gallery/' | relative_url }}" class="button">View Full Gallery</a>
    </div>
</section>
