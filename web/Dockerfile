FROM node:0.12

# For HAProxy health checks
EXPOSE 80

# Main HTTPS listening ports
EXPOSE 4443
EXPOSE 4444

WORKDIR /root
ADD cert/ /root/cert
COPY server.js /root/server.js

CMD ["node", "server.js"]
