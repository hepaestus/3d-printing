---
layout: default
title: Home Page
---
## {{ site.title }}
### {{ page.title }}
* [About Me](/about)
* [3D Printing Manifesto](/3d-printing)

### Latest Blog Posts
<ul>
  {% for post in site.posts %}
    <li>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
