--- 
customlog: 
  - 
    format: combined
    target: /etc/apache2/logs/domlogs/vorteksenerji.com
  - 
    format: "\"%{%s}t %I .\\n%{%s}t %O .\""
    target: /etc/apache2/logs/domlogs/vorteksenerji.com-bytes_log
documentroot: /home/vorteksenerji/public_html
group: vorteksenerji
hascgi: 0
homedir: /home/vorteksenerji
ip: 151.80.64.2
owner: ozusadeo
phpopenbasedirprotect: 1
port: 80
scriptalias: 
  - 
    path: /home/vorteksenerji/public_html/cgi-bin
    url: /cgi-bin/
serveradmin: webmaster@vorteksenerji.com
serveralias: mail.vorteksenerji.com www.vorteksenerji.com
servername: vorteksenerji.com
usecanonicalname: 'Off'
user: vorteksenerji
