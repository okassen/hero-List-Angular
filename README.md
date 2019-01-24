# Anime-List
A web app with Angularjs 1.5.0

create or add this lines in your .htaccess

RewriteEngine On

# ---
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]

# ---
RewriteRule ^ /index.html
