# Use the official nginx image
FROM nginx

# Copy the rest of the application code to the working/assistant directory/s
COPY ./website /usr/share/nginx/html/
COPY  ./default.conf /etc/nginx/conf.d/default.conf
COPY ./key.pem /etc/ssl/
COPY ./cert.pem /etc/ssl/

# Expose the ports
#http
EXPOSE 80:80
#https/ssl
EXPOSE 443:443
