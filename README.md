Portfolio Website

Description

This project provides a template for users to input their own information into an HTML file. After modifying the file, you have two deployment options:

    Direct Docker Deployment: Deploy a Docker image that utilizes NGINX to serve your custom HTML content.
    GitHub and Docker Hub Integration: Re-upload the modified project to your GitHub repository and
    link it to your Docker Hub account.
    This triggers an automatic build and upload of the Docker image to your Docker Hub repository.

Key Benefits:

    NGINX Reverse Proxy: Acts as a reverse proxy to effectively manage network traffic and enhance performance.
    SSL Certificate Support: NGINX can serve and deliver SSL certificates, ensuring secure transmissions over HTTPS.
Features

    Customizable HTML Template: Easily edit the index.html file to display your content.
    Dockerized Environment: Consistent deployment across different environments using Docker.
    Automatic Docker Builds: Integrate with Docker Hub for automatic image builds upon pushing to GitHub.
    Secure Communication: Support for SSL certificates for secure data transmission.
    
Getting Started

Prerequisites

    Docker installed on your local machine.
    Git for version control.
    (Optional) GitHub and Docker Hub accounts for repository management and automated builds.
    
Installation

  1. Clone the Repo
  2. Go to the directory, either cd or use UI to transvers to
  3. Modify the index.html file and add necessary picture files and add them to the html file
  
  
  Direct Docker Deployment
  
  1. Build the docker image
       > docker build -t Personal-Website .
  2. Start the image as a container
       > docker run -d -p 443:443 -p 80:80 Personal-Website
  3. Test the container
       > https://localhost
  
  Usage
  
  How to use the project, including examples if applicable.
  Contributing

  Guidelines for contributing to the project, including how to report issues or submit pull requests.
  License

Information about the project's license.
Acknowledgments

Luc Gremillion
Email: lucgremillion@gmail.com

Credits and acknowledgments for any resources or inspiration used in the project.
Nginx

Feel free to expand or customize this outline based on the specific needs and nature of your project!
