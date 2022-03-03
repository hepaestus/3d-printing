---
layout: default
title: "Data Test Page"
---
## {{ page.title }}

### Printers
  <ul>
    {% for prn in site.data.printers %}
      <li>
      {% if prn.amazon-link %}
        <a href="{{ prn.amazon-link }}">{{ prn.name }}</a>
      {% endif %}
      {% if prn.official-link %}
        - <a href="{{ prn.official-link }}">official site</a>
      {% endif %}
      {% if prn.upgrades %}
        <ul>
          <li>Upgrades
            <ol>
              {% for upg in prn.upgrades %}
                <li>
                  {% if upg.amazon-link %}
                    <a href="{{ upg.amazon-link }}">{{ upg.name }}</a>
                  {% else %}
                    {{ upg.name }}
                  {% endif %}

                  {% if upg.official-link %}
                    - <a href="{{ upg.official-link }}">official site</a>
                  {% endif %}
                </li>
              {% endfor %}
            </ol>
          </li>
        </ul>
      {% endif %}
      </li>
    {% endfor %}
  </ul>
