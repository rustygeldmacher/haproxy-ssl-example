FROM haproxy:1.5

RUN mkdir -p /etc/ssl
ADD cert/ /etc/ssl

COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg
