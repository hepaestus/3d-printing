---

---
{% assign counter = 0 %}
var documents = [{% for page in site.pages %}{% if page.exclude_search or page.url contains '.xml' or page.url contains 'assets' or page.url contains '404' or page.url contains 'blog' %} {% else %} {
  "id": {{ counter }},
  "url": "{{ site.url }}{{ page.url }}",
  "title": "{{ page.title }}",
  "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '\"', ' ' | encode_once }}"{% assign counter = counter | plus: 1 %}
},{% endif %}{% endfor %}{% for page in site.without - plugin %}{
  "id": {{ counter }},
  "url": "{{ site.url }}{{ page.url }}",
  "title": "{{ page.title }}",
  "body": "{{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '\"', ' ' | encode_once }}"{% assign counter = counter | plus: 1 %}
},{% endfor %}{% for page in site.posts %}{
  "id": {{ counter }},
  "url": "{{ site.url }}{{ page.url }}",
  "title": "{{ page.title }}",
  "body": "{{ page.date | date: ' %Y/%m/%d' }} - {{ page.content | markdownify | replace: '.', '. ' | replace: '</h2>', ': ' | replace: '</h3>', ': ' | replace: '</h4>', ': ' | replace: '</p>', ' ' | strip_html | strip_newlines | replace: '  ', ' ' | replace: '\"', ' ' | encode_once }}"{% assign counter = counter | plus: 1 %}
} {% if forloop.last %} {% else %}, {% endif %} {% endfor %}];

var idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  documents.forEach(function (doc) {
    this.add(doc)
  }, this)
});
