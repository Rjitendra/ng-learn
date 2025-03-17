# Deploying Angular Application to GitHub Pages

This guide explains how to deploy your Angular application to GitHub Pages using `angular-cli-ghpages`.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- A GitHub repository

## Steps to Deploy

### 1. Install `angular-cli-ghpages`
Run the following command to install the deployment tool globally:
```sh
npm install -g angular-cli-ghpages
```

### 2. Build the Angular App
Use the following command to generate the production build:
```sh
ng b --output-path=dist --base-href="/ng-learn/"
```
> Replace `/ng-learn/` with the repository name if different.

### 3. Deploy to GitHub Pages
After building the project, deploy it using:
```sh
ngh --dir=dist/browser
```

## Accessing Your Deployed App
Once deployed, your Angular application will be available at:
```
https://<your-username>.github.io/ng-learn/
```
Replace `<your-username>` with your actual GitHub username.

## Notes
- Ensure that GitHub Pages is enabled in the **Settings > Pages** section of your repository.
- The `gh-pages` branch will be automatically created for deployment.

## Troubleshooting
- If you encounter errors, try running:
  ```sh
  ngh --dir=dist/browser --no-silent
  ```
- Ensure that the `base-href` value is correctly set to `/ng-learn/`.

Happy Coding! 🚀
