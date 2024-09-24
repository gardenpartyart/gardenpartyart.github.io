---
layout: default
title: Home
---

<section id="hero">
    <div class="container">
        <h1>Nude Portrait Art</h1>
        <p>Explore the beauty of the human form through intimate and expressive artwork.</p>
    </div>
</section>

<section id="gallery-preview">
    <div class="container">
        <h2>Featured Artworks</h2>
        <div class="gallery-grid">
            <div class="art-piece">
                <img src="{{ '/assets/images/artwork1.jpg' | relative_url }}" alt="Artwork 1">
                <p>Artwork 1</p>
                <a href="https://paypal.com" class="button">Purchase</a>
            </div>
            <div class="art-piece">
                <img src="{{ '/assets/images/artwork2.jpg' | relative_url }}" alt="Artwork 2">
                <p>Artwork 2</p>
                <a href="https://paypal.com" class="button">Purchase</a>
            </div>
        </div>
        <a href="{{ '/gallery/' | relative_url }}" class="button">View Full Gallery</a>
    </div>
</section>
