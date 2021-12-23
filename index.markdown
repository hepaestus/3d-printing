---
layout: default
title: Home Page
---
# {{ site.title }}
* [About Me](/3d-printing/about.md)

## {{ page.title }}
* [3D Printing Manifesto](/3d-printing/3d-printing.md)

### Latest Blog Posts
<ul id="blog-post-list">
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.date | date: "%y %a, %b %d" }} {{ post.title }}</a></h2>
      {{ post.excerpt }}

      {% if post.excerpt %}
        <small style="margin: 0 0 20px 0"; padding: 0;><a href="{{post.url}}">Read More</a></small>
      {% endif %}

    </li>
  {% endfor %}
</ul>
