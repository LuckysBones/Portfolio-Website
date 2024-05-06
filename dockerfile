# Use the official nginx image
FROM nginx

# Copy the rest of the application code to the working directory
COPY ./website /usr/share/nginx/html/

# Expose the port 
EXPOSE 80:80
