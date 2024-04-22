# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18.16.0-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Copy the package.json and package-lock.json file to app
COPY package*.json /usr/local/app/

# Install all the dependencies
RUN npm install

# It is just safer way for angular (https://youtu.be/-o5l6zFJ9_o?t=657)
RUN npx ngcc --properties es2023 browser module main --frist-only --create-ivy-entry-points

# Add the source code to app
COPY ./ /usr/local/app/

# Generate the build of the application
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:stable

# Set the nginx default.conf file to handle 404 not found error
COPY default.conf /etc/nginx/conf.d

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist/dr-frontend /usr/share/nginx/html

# Expose port 80
EXPOSE 80