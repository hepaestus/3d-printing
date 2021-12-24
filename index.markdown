---
layout: default
title: 3D-Printing Home
---
# {{ site.owner }}'s
## {{ site.title }}

### {{ site.sub-title }}
## {{ page.title }}
My updated [3D Printing Manifesto](3d-printing-manifesto) where in I discuss my techniques, insights, and failures. Also see the [blog](blog) wherein I document more in depth about each of my projects.

## Blog Posts
<ul id="blog-post-list">
  {% for post in site.posts %}
    <li>
      <div class="blog-post-excerpt">
      <h2 class="blog-post-title">
        <a href="{{ post.url }}">
          <small>{{ post.date | date: "%-d %B %Y" }}</small>
          {{ post.title }}
        </a>
      </h2>
      {% if post.excerpt %}
        <blockquote class="blog-excerpt">
          {{ post.excerpt }}
          <div class="read-more"><a href="{{ post.url }}"><span>Read More</span></a></div>
        </blockquote>
      {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
