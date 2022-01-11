---
layout: default
title: "3D Printing Blog"
---
# {{ site.owner }}'s
## {{ site.title }}
### {{ site.sub-title }}
## {{ page.title }}
<ul id="blog-post-list">
  {% for post in site.posts %}
    <li>
      <div class="blog-post-excerpt">
      <h2><a href="{{ post.url | absolute_url }}"><small>{{ post.date | date: "%-d %B %Y" }}</small> {{ post.title }}</a></h2>
      {% if post.excerpt %}
        {{ post.excerpt }}
        <a class="read-more" href="{{post.url | absolute_url }}"><span style="margin: 0 20px; padding: 0;">Read More</span></a>
      {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>
