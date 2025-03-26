# PlantPals

This is a React Native/TypeScript project created with [Expo](https://expo.dev) and `create-expo-app`.

PlantPals is a community-driven mobile app designed to promote the maintenance and sustainability of community gardens in your city. By connecting volunteers with nearby gardens in need of care, PlantPals fosters collaboration and a sense of environmental responsibility. 


## Tech

The backend of PlantPals utilizes Firebase for user authentication, real-time database management and analytics. Google Maps API is integrated for mapping, geolocation and reverse geocoding functionality. The app retrieves data from Open Calgary's "Park Sites" database to provide accurate community garden locations and status updates.

On the frontend, PlantPals features a modern and intuitive UI built with React Native and Expo. The design, prototyped in Figma, prioritizes simplicity and accessibility to engage users.

### Application views

<img width="250" height="550" src="https://github.com/rohitNair21/PlantPals/blob/main/assets/Login.png"/> <img width="250" height="550" src="https://github.com/rohitNair21/PlantPals/blob/main/assets/Sign%20Up.png"/> <img width="250" height="550" src="https://github.com/rohitNair21/PlantPals/blob/main/assets/Dashboard.png"/> <img width="250" height="550" src="https://github.com/rohitNair21/PlantPals/blob/main/assets/Leaderboard.png"/> <img width="250" height="550" src="https://github.com/rohitNair21/PlantPals/blob/main/assets/Maps.png"/> 

## Get started

To contribute to or run PlantPals locally, follow these steps to set up the development environment.

### Prerequisites
Before running the application, ensure you have the following:
- Node.js & npm installed
- React Native (Expo) environment setup
- Firebase project configuration
- OpenCalgary API access
- Google Maps API key

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/plantpals.git
   cd plantpals
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file and adding the required keys.
   
4. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Learn more

To learn more about developing your project with Expo, have a look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
