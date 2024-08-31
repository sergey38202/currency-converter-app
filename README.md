# 🌍 Currency Converter App

Welcome to the **Currency Converter App**, a modern and intuitive web application that allows users to quickly convert currencies using up-to-date exchange rates.

## 🚀 Features

- **Real-time Conversion**: Convert between multiple currencies with live exchange rates.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern UI**: A clean and intuitive interface with gradient effects and smooth transitions.

## 🛠️ Project Structure

```bash
src/
│
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Vue.js components
│   ├── AppHeader.vue        # The main navigation header
│   ├── ConversionForm.vue   # The currency conversion form
│
├── router/          # Vue Router configuration
│   ├── index.ts            # Router setup
│   ├── routes.ts           # Defined routes for the app
│
├── store/           # Vuex store configuration
│   ├── index.ts            # Store setup and modules
│
├── views/           # Application views (pages)
│   ├── HomeView.vue        # Home page view
│   ├── ConversionView.vue  # Conversion page view
│
├── constants.ts     # Global constants used across the app
├── interfaces.ts    # TypeScript interfaces for type safety
├── main.ts          # Application entry point
├── App.vue          # Root component
└── README.md        # Project documentation
```

## 🔧 Installation

1. Clone the repository:
   git clone https://github.com/your-username/currency-converter-app.git

2. Navigate to the project directory:
   cd currency-converter-app

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev

   The app should now be running on http://localhost:5173.

## 🧩 Usage

- Home Page: Provides an overview and a welcome message.
- Currency Conversion: Navigate to the conversion page, select the currencies, and input the amount to see real-time conversion results.

## 🛠️ Technologies

- Vue.js 3: Progressive JavaScript framework for building user interfaces.
- Vuex: State management pattern + library for Vue.js applications.
- Vue Router: Official router for Vue.js.
- TypeScript: Typed superset of JavaScript that compiles to plain JavaScript.
- Axios: Promise-based HTTP client for making API requests.
- Vite: Next Generation Frontend Tooling.

## 📂 Directory Structure

- components: Contains reusable Vue.js components like AppHeader and ConversionForm.
- router: Manages application routes using Vue Router.
- store: Implements state management using Vuex.
- views: Contains different page views like HomeView and ConversionView.
- constants.ts: Defines global constants like supported currencies and default currency.
- interfaces.ts: Defines TypeScript interfaces for type safety.

## 📚 API Reference

The app uses a public API for fetching exchange rates:
- API Endpoint: https://status.neuralgeneration.com/api/currency
- Response Format: The API returns exchange rates in the following format:

```jsx
{
    "usd-rub": 94.8833,
    "eur-rub": 105.9967,
    ...
}
```

## 🚀 Deployment

To deploy the project, run:

npm run build

This command will generate the optimized production build in the dist folder, which you can then deploy to your preferred hosting service.

## 👨‍💻 Contributing

Feel free to fork this project, make improvements, and submit pull requests! Please ensure all changes are tested before submitting.

Happy coding! 🚀


### Key Symbols and Special Markup:
- **🌍, 🚀, 🛠️, 🧩, 📂, 📚, 👨‍💻, 📄, 🎉**: Emoji icons are used to make the sections more visually engaging and to provide quick, scannable markers for different parts of the documentation.
- **`bash` and `typescript` code blocks**: Proper syntax highlighting is used to make the instructions clearer and easier to follow.
- **Bold and Italics**: Used for emphasis on important terms and commands.

### Structure and Readability:
- The `README.md` is divided into logical sections, each with clear headings and descriptions.
- A file structure diagram is included to help users quickly understand the layout of the project.
- Usage instructions and technical details are provided in a user-friendly manner, making it easy for developers of all skill levels to get started with the project.

This `README.md` file provides a comprehensive overview of the project while being easy to read and visually appealing.
