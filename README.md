Here's a sample README file for your React Native test assessment, including an overview, setup instructions, and a description of the implemented features:

---

# React Native Test Assessment

## Overview

This assessment evaluates your competence in building mobile applications with React Native. You will be tasked with implementing user authentication functionalities and functionalities to display user profile information.

### Features Implemented

1. **Login Page:**
   - After login, the session ID, access token, and refresh token are stored.
   - Error handling for various scenarios such as incorrect credentials and network issues.
   
2. **Profile Page:**
   - Requests user information from `/api/users/me` using the access token.
   - Displays user profile information.
   - Handles error messages such as unauthorized access, forbidden access, and not found errors.

## UX/UI

The application includes a user-friendly interface with the following flows:
- **Login Flow:** Users can log in using their email or phone number. After a successful login, users are redirected to the profile page.
- **Profile Flow:** Users can view their profile information. If any error occurs, appropriate error messages are displayed.

## Setup Instructions


### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the Expo Development Server:**

   ```bash
   expo start --offline
   ```

4. **Connect Your Device:**

   For offline mode using USB:
   - Enable USB debugging on your Android device.
   - Connect your device via USB.
   - Reverse the port using ADB:

     ```bash
     adb reverse tcp:8081 tcp:8081
     ```

   - Open Expo Go on your device and enter the URL: `exp://localhost:19000`.

## Usage

### Running the App

1. **Start the Metro Bundler:**

   ```bash
   expo start or yarn start 
   ```

2. **Open the App on Your Device:**

   - Open Expo Go on your device.
   - Scan the QR code displayed in the terminal or manually enter the URL: `exp://localhost:19000`.

### App Flow

1. **First-time Users (Never Logged In):**
   - When the app is opened for the first time or if the user has not logged in before, the app will navigate to the Login screen.
   - The user must enter their email or phone number and password to log in.

2. **Returning Users (Already Logged In):**
   - If the user has previously logged in and the session ID, access token, and refresh token are stored, the app will automatically navigate to the Profile screen.
   - The user's profile information will be displayed, fetched from `/api/users/me` using the stored access token.

### Authentication Flow

1. **Login Page:**
   - Enter your email or phone number and password.
   - On successful login, session ID, access token, and refresh token are stored.

2. **Profile Page:**
   - The app requests user information from `/api/users/me` using the access token.
   - User profile information is displayed.
   - Appropriate error messages are shown for various error scenarios.

---

![6](https://github.com/user-attachments/assets/40ef39fc-b466-4c1c-8b50-eb900c817de3)
![5](https://github.com/user-attachments/assets/f0677651-94fb-4cad-9875-0c16cf9fc5c3)
![4](https://github.com/user-attachments/assets/2e2f3495-6df6-4ec1-9c22-f540d8615cf3)
![3](https://github.com/user-attachments/assets/fb74144c-dcd4-4cab-875e-263a5e88a092)
![2](https://github.com/user-attachments/assets/335ad290-d1a2-45f0-940f-56b6a2446f3b)
![1](https://github.com/user-attachments/assets/3d82065c-cab7-429d-ab51-b9ccb2d3221a)


This README provides a comprehensive overview of your test assessment, setup instructions, and usage guide. You can customize the URLs, repository names, and other specific details as per your project requirements.
