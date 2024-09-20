# Portfolio Website - Linux

## Description

This project provides a template for users to input their own information into an HTML file. After modifying the file, you have two deployment options:

1. **Direct Docker Deployment**: Deploy a Docker image that utilizes NGINX to serve your custom HTML content.
2. **GitHub and Docker Hub Integration**: Upload the modified project to your GitHub repository and link it to your Docker Hub account.
   - This triggers an automatic build and upload of the Docker image to your Docker Hub repository.

### Key Benefits

- **NGINX Reverse Proxy**: Acts as a reverse proxy to effectively manage network traffic and enhance performance.
- **SSL Certificate Support**: NGINX can serve and deliver SSL certificates, ensuring secure transmissions over HTTPS.

## Features

- **Customizable HTML Template**: Easily edit the `index.html` file to display your content.
- **Dockerized Environment**: Consistent deployment across different environments using Docker.
- **Automatic Docker Builds**: Integrate with Docker Hub for automatic image builds upon pushing to GitHub.
- **Secure Communication**: Support for SSL certificates for secure data transmission.

## Getting Started

### Prerequisites

- **Domain Name**: You should own your own domain name.
- **Software Requirements**:
  - Docker installed on your local machine.
  - Git for version control.
- **Accounts** (Optional but recommended):
  - GitHub account for repository management.
  - Docker Hub account for automated builds.
- **Knowledge Requirements**:
  - Basic understanding of Docker and Git.

## Installation

### Option 1: Direct Docker Deployment

1. **Clone the Repository**

    ```bash
    git clone https://github.com/LuckysBones/Portfolio-Website.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd Portfolio-Website
    ```

3. **Customize Your Website**

    - **Modify `index.html`**: Edit the `index.html` file to add your content.
    - **Add Images**: Place any necessary image files in the appropriate directory and reference them in your HTML.
    - **Modify `style.css`**: Customize styles by editing the `style.css` file.

4. **SSL Setup**

    1. **Obtain SSL Certificates**:
       - Use a certificate authority like Let's Encrypt to obtain `cert.pem` and `key.pem`.
       - Place these files in the project directory.

    2. **Ensure File Placement**:
       - The certificates should be placed as:

        ```bash
        cert.pem
        key.pem
        ```

5. **Build the Docker Image**

    ```bash
    docker build -t personal-website .
    ```

6. **Start the Container**

    ```bash
    docker run -d -p 443:443 -p 80:80 personal-website
    ```

7. **Test the Container**

    - Open your web browser and navigate to:

    ```
    https://localhost
    ```

### Option 2: Using the GitHub Template

1. **Use the GitHub Template**

    - On the GitHub page, click **"Use this template"** to create a new repository based on this template.

2. **Clone Your Repository**

    ```bash
    git clone https://github.com/Luckys-Bones/Portfilio-Website.git
    cd your-repo-name
    ```

3. **Add Docker Hub Credentials to GitHub Secrets**

    - Navigate to your repository's **Settings -> Secrets and variables -> Actions**.
    - Add the following secrets:

      - **`DOCKERHUB_USERNAME`**: Your Docker Hub username.
      - **`DOCKERHUB_TOKEN`**: Your Docker Hub access token.

    - **Instructions**: How to get needed information can be found [here](https://docs.docker.com/docker-hub/access-tokens/).

4. **Customize Your Website**

    - **Modify `index.html`**: Edit the `index.html` file to include your text and information.
    - **Modify `style.css`**: Adjust styles as needed.
    - **Add Images**: Include any images and reference them in your HTML.

5. **SSL Setup**

    1. **Obtain SSL Certificates**:
       - Acquire `cert.pem` and `key.pem` from your domain provider or certificate authority.

    2. **Place Certificates**:

        ```bash
        cert.pem
        key.pem
        ```

6. **Push Changes to GitHub - Don't Forget to Push to Your Repo**

    ```bash
    git add .
    git commit -m "Customize portfolio website"
    git push origin main
    ```

    - Pushing changes will trigger GitHub Actions to build and upload the Docker image to your Docker Hub repository.

7. **Pull the Image from Docker Hub**

    ```bash
    docker pull your-dockerhub-username/your-repo-name
    ```

8. **Start the Container**

    ```bash
    docker run -d -p 443:443 -p 80:80 --name personal-website --restart always your-dockerhub-username/your-repo-name
    ```

9. **Test the Container**

    - Open your web browser and navigate to:

    ```
    https://localhost
    ```

## After Installation

- **Connect Your Domain**:
  - Connect your domain to the website through a proxy or directly to your server's IP address.
  - **Helpful Resource**: [How to set up using Cloudflare](https://www.youtube.com/watch?v=Zq6PdhwHfZ0)

- **Check Your Firewall**:

    ```bash
    sudo ufw status
    sudo ufw enable
    sudo ufw allow 80
    sudo ufw allow 443
    sudo ufw reload
    sudo ufw status
    ```

## License

This project is licensed under the **MIT License**.

## Author

**Luc Gremillion**

- **Email**: [lucgremillion@gmail.com](mailto:lucgremillion@gmail.com)

## Credits and Acknowledgments

- **NGINX**: For providing a high-performance web server and reverse proxy.
- **Docker**: For containerization technology enabling consistent deployment.
- **Particles.js by Vincent Garreau**: For interactive background effects.

---

Feel free to expand or customize this outline based on the specific needs and nature of your project!
