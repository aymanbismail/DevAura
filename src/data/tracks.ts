// import { Track } from "@/types/track";

// export const tracks: Track[] = [
//   {
//     id: 1,
//     slug: "frontend-nextjs",
//     name: "Frontend Development (Next.js)",
//     description: "Build fast, SEO-friendly web apps using React and Next.js.",
//     topics: [
//       { title: "HTML5", description: "Learn how to structure web pages using semantic tags and modern HTML5 features like forms, media elements, and improved accessibility standards." },
//       { title: "CSS3", description: "Master styling techniques using modern CSS features including Flexbox, Grid, transitions, and responsive design to build layouts that adapt to any screen size." },
//       { title: "JavaScript", description: "Understand the core language fundamentals (variables, functions, loops, events), and dive into modern ES6+ features like arrow functions, let/const, promises, async/await, and DOM manipulation." },
//      {
//     title: "Git & GitHub",
//     description: "Track changes, manage branches, and collaborate on codebases using Git. Use GitHub to host repositories, create pull requests, manage issues."
//   },
//       { title: "Tailwind CSS", description: "Build fast, responsive UIs using a utility-first CSS framework that speeds up development and promotes consistency without writing custom CSS for every component." },
//       { title: "TypeScript", description: "Enhance your JavaScript with static typing, interfaces, and type inference to catch errors early and write more robust, maintainable code in React and Next.js projects." },
//       { title: "React", description: "Build interactive user interfaces using components and hooks like useState, useEffect, and useContext, with a focus on state management, event handling, and modular architecture." },
//       { title: "Next.js", description: "Develop full-stack React applications with built-in support for server-side rendering (SSR), static site generation (SSG), dynamic routing, and API routes to enhance performance and SEO." },
//       { title: "Shadcn/ui", description: "Use a modern component library built on Tailwind CSS to create accessible, themeable, and beautifully designed UI elements with ease and consistency." },
//       { title: "Framer Motion", description: "Add smooth animations and transitions to your UI components with an intuitive motion library that supports gestures, layout animations, and spring physics." },
//       { title: "Jest", description: "Write unit and integration tests for your components and APIs to ensure stability and reliability, using mocking, assertions, and coverage tools to validate your app’s behavior." }
//     ],
//     logo: "/icons/nextjs.svg",
//   },
//   {
//     id: 2,
//     slug: "frontend-angular",
//     name: "Frontend Development (Angular)",
//     description: "Build dynamic and scalable single-page applications using Angular.",
//     topics: [
//       {
//     title: "HTML5",
//     description:
//       "Learn how to structure web pages using semantic elements, HTML5 forms, media integration, and accessibility best practices.",
//   },
//   {
//     title: "CSS3",
//     description:
//       "Master responsive layouts using Flexbox and Grid, apply animations and transitions, and build visually consistent UI designs.",
//   },
//   {
//     title: "JavaScript",
//     description:
//       "Understand the language fundamentals, explore modern ES6+ features like arrow functions, modules, and async programming to manipulate the DOM and handle user interactions.",
//   },
//    {
//     title: "Git & GitHub",
//     description: "Track changes, manage branches, and collaborate on codebases using Git. Use GitHub to host repositories, create pull requests, manage issues."
//   },
//   {
//     title: "TypeScript",
//     description:
//       "Learn how to write strongly typed code with interfaces, enums, and classes to improve code safety, clarity, and maintainability in Angular projects.",
//   },
//   {
//     title: "Angular",
//     description:
//       "Build scalable web applications using components, templates, modules, and Angular CLI. Learn how Angular handles rendering, binding, routing, and dependency injection.",
//   },
//   {
//     title: "RxJS",
//     description:
//       "Work with Observables to manage asynchronous data streams, and use powerful operators like map, filter, and switchMap to handle complex logic reactively.",
//   },
//   {
//     title: "Angular Forms",
//     description:
//       "Create robust forms using both template-driven and reactive approaches. Handle validation, dynamic fields, and form control with FormBuilder and FormGroup.",
//   },
//   {
//     title: "Angular Routing",
//     description:
//       "Implement single-page navigation using Angular Router. Learn how to create routes, use parameters, add guards, and enable lazy loading to improve performance.",
//   },
//   {
//     title: "Angular Material",
//     description:
//       "Enhance your UI using pre-built components like dialogs, tables, and inputs, following Google's Material Design system with built-in accessibility and responsiveness.",
//   },
//   {
//     title: "Jasmine & Karma",
//     description:
//       "Test Angular applications by writing unit and integration tests for components and services, and run them using the Karma test runner for continuous validation.",
//   },
//     ],
//     logo: "/icons/angular.svg",
//   },
//   {
//     id: 3,
//     slug: "frontend-vue",
//     name: "Frontend Development (Vue.js)",
//     description: "Develop elegant and reactive interfaces using Vue.js framework.",
//     topics: [
//         {
//     title: "HTML5",
//     description:
//       "Learn how to structure web pages using semantic HTML5 elements, build accessible content, and work with forms, inputs, and multimedia elements.",
//   },
//   {
//     title: "CSS3",
//     description:
//       "Master layout techniques using Flexbox and Grid, apply transitions and animations, and build responsive designs that adapt to various screen sizes.",
//   },
//   {
//     title: "JavaScript",
//     description:
//       "Understand the fundamentals of JavaScript, including variables, functions, control flow, and DOM manipulation, and move on to modern ES6+ features like arrow functions, destructuring, modules, and async/await.",
//   },
//    {
//     title: "Git & GitHub",
//     description: "Track changes, manage branches, and collaborate on codebases using Git. Use GitHub to host repositories, create pull requests, manage issues."
//   },
//   {
//     title: "TypeScript",
//     description:
//       "Use TypeScript to add static typing and interfaces to your codebase for better structure, safety, and maintainability in large Vue applications.",
//   },
//   {
//     title: "Vue.js",
//     description:
//       "Build dynamic user interfaces using the Vue framework. Learn about the reactivity system, component-based architecture, directives, lifecycle hooks, and the Vue CLI.",
//   },
//   {
//     title: "Vue Router",
//     description:
//       "Implement client-side routing to create multi-page experiences. Work with dynamic routes, nested views, route guards, and lazy loading.",
//   },
//   {
//     title: "Pinia",
//     description:
//       "Manage global application state using Pinia, Vue’s modern alternative to Vuex. Learn how to create stores, manage actions, and handle reactive shared data.",
//   },
//   {
//     title: "Composition API",
//     description:
//       "Use the modern Composition API to organize logic more flexibly. Learn about reactive refs, computed properties, watchers, and reusable composables.",
//   },
//   {
//     title: "Vuetify or Tailwind CSS",
//     description:
//       "Style your application using either Vuetify (Material Design component library) or Tailwind CSS (utility-first framework) for fast and consistent UI development.",
//   },
//   {
//     title: "Testing with Vitest",
//     description:
//       "Write unit and integration tests for Vue components using Vitest, a fast test runner compatible with Vite. Use assertions and mocks to ensure application stability.",
//   },
//     ],
//     logo: "/icons/vuejs.svg",
//   },
//   {
//     id: 4,
//     slug: "backend-nodejs",
//     name: "Backend Development (Node.js)",
//     description: "Learn backend development using Node.js, Express, and modern APIs.",
//     topics: [
//      {
//     title: "JavaScript for Backend",
//     description: "Master the JavaScript fundamentals needed for backend development, including asynchronous programming (callbacks, promises, async/await), error handling, object manipulation, and working with the file system and modules."
//   },
//   {
//     title: "Git & GitHub",
//     description: "Track changes, manage branches, and collaborate on codebases using Git. Use GitHub to host repositories, create pull requests, manage issues, and showcase your backend projects."
//   },
//   {
//     title: "Node.js Core",
//     description: "Understand the runtime that powers backend JavaScript. Work with core modules like http, fs, events, and path, and grasp the event-driven, non-blocking I/O model at the heart of Node.js."
//   },
//   {
//     title: "Express.js",
//     description: "Build scalable APIs with Express, the most popular Node.js framework. Learn about middleware, routing, request/response objects, error handling, and RESTful architecture."
//   },
//   {
//     title: "TypeScript in Node.js",
//     description: "Enhance your Node.js development with TypeScript by introducing static typing, interfaces, and improved tooling. Learn how to set up TypeScript in Node projects, define types for APIs and data models, and catch bugs early in the development process."
//   },
//   {
//     title: "Database Integration (MongoDB + Mongoose)",
//     description: "Store and retrieve data using MongoDB. Use Mongoose to define schemas, validate data, and interact with collections in a structured and efficient way."
//   },
//   {
//     title: "Authentication & Security",
//     description: "Implement secure login systems with JWT or sessions. Use hashing (bcrypt), input validation, role-based access, and security headers to protect your APIs."
//   },
//   {
//     title: "REST API Design",
//     description: "Learn best practices for building RESTful APIs, including proper route structuring, status codes, pagination, filtering, and versioning for scalability and maintainability."
//   },
//   {
//     title: "Data Validation & Error Handling",
//     description: "Ensure robust APIs by validating input using libraries like Joi or Zod, and managing errors through centralized error-handling middleware."
//   },
//   {
//     title: "File Uploads",
//     description: "Add support for uploading and storing files using libraries like Multer, with configuration for both local storage and cloud solutions such as Cloudinary or AWS S3."
//   },
//   {
//     title: "Testing (Jest + Supertest)",
//     description: "Write automated unit and integration tests for your APIs using Jest and Supertest to ensure code reliability and prevent regressions."
//   },
//   {
//     title: "WebSockets & Real-Time Features",
//     description: "Implement real-time communication using Socket.io to power features like chat apps, notifications, and live updates."
//   },
//   {
//     title: "Environment Management & Deployment",
//     description: "Use environment variables, manage config files securely, and deploy your app to services like Render, Railway, or VPS with process managers like PM2 and CI/CD integration."
//   },
//   {
//     title: "Documentation & API Clients",
//     description: "Document your API using tools like Swagger or Postman, making it easier for others to understand, test, and consume your endpoints."
//   }
//     ],
//     logo: "/icons/nodejs.svg",
//   },
//   {
//     id: 5,
//     slug: "backend-laravel",
//     name: "Backend Development (Laravel)",
//     description: "Master backend development using PHP and the Laravel framework.",
//     topics: [
//        {
//     title: "PHP Fundamentals",
//     description: "Build a strong foundation in PHP by understanding variables, control structures, functions, arrays, loops, superglobals, form handling, and error management. This is essential before diving into Laravel."
//   },
//   {
//     title: "Git & GitHub",
//     description: "Use Git to track changes in your Laravel projects, manage branches, and collaborate efficiently. Use GitHub to host repositories, manage issues, and showcase your work professionally."
//   },
//   {
//     title: "Laravel Basics",
//     description: "Learn Laravel’s core features including routing, controllers, Blade templating, artisan commands, configuration, and the request/response lifecycle."
//   },
//   {
//     title: "MVC Architecture",
//     description: "Understand how Laravel follows the Model-View-Controller (MVC) pattern to separate logic, presentation, and data layers for maintainable code."
//   },
//   {
//     title: "Database & Eloquent ORM",
//     description: "Work with Laravel’s Eloquent ORM for database interaction. Learn about migrations, relationships (one-to-many, many-to-many), querying, and data seeding."
//   },
//   {
//     title: "Authentication & Authorization",
//     description: "Implement secure user login, registration, and role-based access control using Laravel’s built-in authentication scaffolding and policies/gates."
//   },
//   {
//     title: "RESTful API Development",
//     description: "Build RESTful APIs using Laravel routes, controllers, and resources. Return JSON responses, manage HTTP status codes, and follow API standards."
//   },
//   {
//     title: "Validation & Form Requests",
//     description: "Validate user input using Laravel’s validation rules and Form Request classes to ensure clean, safe, and reliable data flow."
//   },
//   {
//     title: "File Upload & Storage",
//     description: "Allow users to upload and manage files securely using Laravel’s storage system with support for local, S3, and other drivers."
//   },
//   {
//     title: "Testing (PHPUnit & Laravel Testing Tools)",
//     description: "Write unit and feature tests for your Laravel application using PHPUnit and Laravel’s built-in testing utilities to ensure functionality and catch regressions."
//   },
//   {
//     title: "Notifications & Emails",
//     description: "Send notifications via email, database, or other channels using Laravel’s Notification system. Customize mail templates and integrate email providers."
//   },
//   {
//     title: "Queues & Background Jobs",
//     description: "Run tasks asynchronously using Laravel Queues, Jobs, and Workers. Offload time-consuming operations like emails and file processing for better performance."
//   },
//   {
//     title: "Laravel Sanctum or Passport",
//     description: "Secure your APIs with token-based authentication using Laravel Sanctum (for SPAs) or Passport (for OAuth2), depending on the use case."
//   },
//   {
//     title: "Environment Management & Deployment",
//     description: "Manage environment variables, config caching, and Laravel optimization. Deploy to shared hosting, Laravel Forge, or VPS, using tools like Envoyer or GitHub Actions."
//   },
//   {
//     title: "API Documentation (Swagger/Postman)",
//     description: "Document your API endpoints using Postman collections or integrate Swagger/OpenAPI for self-explanatory, testable API docs."
//   }
//     ],
//     logo: "/icons/laravel.svg",
//   },
//   {
//     id: 6,
//     slug: "backend-dotnet",
//     name: "Backend Development (ASP.NET)",
//     description: "Develop enterprise-level backend services with ASP.NET Core.",
//     topics: [
//       {
//     title: "C# Fundamentals",
//     description: "Master the core syntax of C#, including data types, control structures, classes, interfaces, and object-oriented principles to build scalable backend logic."
//   },
//   {
//     title: "Entity Framework Core",
//     description: "Work with a modern ORM to interact with databases using LINQ queries, code-first and database-first approaches, migrations, and relationship management."
//   },
//   {
//     title: "ASP.NET Core MVC",
//     description: "Build structured web applications using the Model-View-Controller pattern, with support for routing, views, model binding, and validation."
//   },
//   {
//     title: "ASP.NET Core Web API",
//     description: "Develop RESTful APIs with controllers, routing, dependency injection, data annotations, and model serialization using JSON and XML."
//   },
//   {
//     title: "Middleware & Dependency Injection",
//     description: "Understand how to build and register custom middleware components, and inject services into your controllers using the built-in DI container."
//   },
//   {
//     title: "Authentication & Authorization",
//     description: "Implement secure authentication using Identity, JWT tokens, OAuth2, and role-based access control to protect API endpoints and user data."
//   },
//   {
//     title: "Database Integration",
//     description: "Connect to SQL Server and other databases using connection strings, migrations, raw SQL queries, stored procedures, and performance optimization techniques."
//   },
//   {
//     title: "Asynchronous Programming",
//     description: "Leverage async/await to build scalable APIs that handle I/O-bound operations efficiently, improving throughput and responsiveness."
//   },
//   {
//     title: "SignalR (Real-Time Communication)",
//     description: "Add real-time features like chat or live notifications using SignalR and WebSockets to enable two-way communication between clients and servers."
//   },
//   {
//     title: "Testing & Debugging",
//     description: "Write unit and integration tests using xUnit or NUnit, mock dependencies with Moq, and debug your application with breakpoints and logs."
//   },
//   {
//     title: "API Versioning & Documentation",
//     description: "Support multiple API versions and generate interactive documentation using tools like Swagger and Swashbuckle for better developer experience."
//   },
//   {
//     title: "Deployment & Hosting",
//     description: "Deploy your ASP.NET Core application to IIS, Azure, or Linux-based environments, and manage production settings, environment variables, and CI/CD pipelines."
//   }
//     ],
//     logo: "/icons/dotnetcore.svg",
//   },
//   {
//     id: 7,
//     slug: "mobile-react-native",
//     name: "Mobile Development (React Native)",
//     description: "Create cross-platform mobile apps using React Native.",
//     topics: [
//         {
//     title: "HTML & CSS Foundations (Optional)",
//     description:
//       "While not used directly in React Native, understanding HTML structure and CSS layout principles provides essential UI and layout intuition that helps when working with Flexbox and styling."
//   },
//   {
//     title: "Modern JavaScript (ES6+)",
//     description:
//       "Master core JavaScript concepts such as arrow functions, destructuring, async/await, promises, and array methods to write efficient and modern code in React Native."
//   },
//   {
//     title: "React & React Native Fundamentals",
//     description:
//       "Learn the principles of building reusable UI components using JSX, props, state, and lifecycle. Then dive into React Native-specific elements like View, Text, ScrollView, and StyleSheet."
//   },
//   {
//     title: "Navigation & Routing",
//     description:
//       "Implement stack, tab, and drawer navigation using React Navigation. Understand route parameters, nested navigators, and deep linking to manage user flows."
//   },
//   {
//     title: "Forms & State Management",
//     description:
//       "Handle form inputs and validation using controlled components, Formik, and Yup. Learn to manage global/local state with Context API, Redux, or Zustand for scalable data flow."
//   },
//   {
//     title: "APIs, Authentication & Security",
//     description:
//       "Fetch and display external data using Axios or fetch, handle loading states, and implement secure authentication using JWT or OAuth with AsyncStorage for persistence."
//   },
//   {
//     title: "Native Features & Permissions",
//     description:
//       "Work with device capabilities like camera, GPS, notifications, and file system using Expo APIs or native modules, while properly managing permissions."
//   },
//   {
//     title: "Testing, Debugging & Optimization",
//     description:
//       "Write tests using Jest and React Native Testing Library, debug with Flipper and breakpoints, and improve performance with FlatList optimization, memoization, and lazy loading."
//   },
//   {
//     title: "Deployment & App Publishing",
//     description:
//       "Prepare for production, generate builds, and publish apps to the App Store and Google Play using Expo or React Native CLI."
//   }
//     ],
//     logo: "/icons/react.svg",
//   },
//   {
//     id: 8,
//     slug: "mobile-flutter",
//     name: "Mobile Development (Flutter)",
//     description: "Build beautiful native apps for Android and iOS using Flutter and Dart.",
//     topics: [
//         {
//     title: "Dart Language Fundamentals",
//     description: "Master the Dart programming language including variables, functions, OOP, async/await, null safety, collections, and error handling—essential for working with Flutter."
//   },
//   {
//     title: "Flutter Framework Basics",
//     description: "Get familiar with the Flutter SDK, widgets, the widget tree, hot reload, and how Flutter renders UI using a declarative approach."
//   },
//   {
//     title: "Layouts & Styling",
//     description: "Learn to build responsive UIs using layout widgets like Row, Column, Stack, Expanded, and Flex. Understand padding, margin, alignment, and custom styling with Themes."
//   },
//   {
//     title: "State Management in Flutter",
//     description: "Explore different state management techniques such as setState, Provider, Riverpod, and Bloc to manage local and global application states effectively."
//   },
//   {
//     title: "Navigation & Routing",
//     description: "Implement navigation using Flutter's Navigator and named routes. Handle route parameters, nested navigation, and deep linking for larger apps."
//   },
//   {
//     title: "User Input & Forms",
//     description: "Handle form fields, validation, and focus control using Form, TextFormField, and validation libraries like flutter_form_builder or built-in validators."
//   },
//   {
//     title: "API Integration & Networking",
//     description: "Connect your app to RESTful APIs using the http or dio package. Handle JSON parsing, loading states, and error responses efficiently."
//   },
//   {
//     title: "Authentication & Secure Storage",
//     description: "Implement login/signup with Firebase Auth, JWT, or OAuth. Securely store tokens or sensitive data using flutter_secure_storage or shared_preferences."
//   },
//   {
//     title: "Accessing Native Features",
//     description: "Utilize camera, GPS, local notifications, sensors, and other device features using platform channels or plugins available on pub.dev."
//   },
//   {
//     title: "App Performance Optimization",
//     description: "Improve performance by minimizing widget rebuilds, lazy loading, using const constructors, and tools like Flutter DevTools or the Performance tab."
//   },
//   {
//     title: "Testing & Debugging",
//     description: "Write unit tests, widget tests, and integration tests using Flutter’s test framework. Use breakpoints, DevTools, and logging for debugging."
//   },
//   {
//     title: "Animations & Interactions",
//     description: "Enhance UX using implicit and explicit animations with AnimatedContainer, Hero, AnimationController, and custom transitions."
//   },
//   {
//     title: "Publishing to App Stores",
//     description: "Prepare and release your app to Google Play and App Store. Generate signed APKs/IPAs, configure app icons, splash screens, and handle store requirements."
//   }
//     ],
//     logo: "/icons/flutter.svg",
//   },
//   {
//     id: 9,
//     slug: "data-analysis-python",
//     name: "Data Analysis (Python)",
//     description: "Analyze and visualize data using Python's powerful libraries.",
//     topics: [
//       {
//     title: "Introduction to Data Analysis",
//     description: "Understand the role of a data analyst, types of data (structured vs unstructured), the data analysis process (ask, prepare, process, analyze, share), and key tools used in the industry."
//   },
//   {
//     title: "Excel for Data Analysis",
//     description: "Master core Excel functions like VLOOKUP, IF, SUMIFS, and pivot tables. Learn data cleaning, filtering, conditional formatting, charts, and basic dashboards for quick insights."
//   },
//   {
//     title: "Data Visualization with Power BI",
//     description: "Learn to connect, transform, and model data using Power BI. Build interactive dashboards using DAX formulas, custom visuals, filters, slicers, and publish reports to the Power BI service."
//   },
//   {
//     title: "Python Programming Fundamentals",
//     description: "Get comfortable with Python syntax, variables, loops, functions, lists, dictionaries, and file handling to prepare for data analysis tasks."
//   },
//   {
//     title: "Working with Data using Pandas",
//     description: "Manipulate data using Pandas DataFrames—read CSV/Excel files, filter data, group by, pivot tables, and handle missing values efficiently."
//   },
//   {
//     title: "Numerical Computing with NumPy",
//     description: "Use NumPy arrays for efficient numerical operations, broadcasting, reshaping data, and performing vectorized computations."
//   },
//   {
//     title: "Data Cleaning & Preparation",
//     description: "Handle messy data by detecting duplicates, fixing types, removing outliers, and applying transformations for analysis readiness."
//   },
//   {
//     title: "Data Visualization with Matplotlib & Seaborn",
//     description: "Create insightful plots such as bar charts, histograms, scatter plots, heatmaps, and line charts to visualize trends and distributions."
//   },
//   {
//     title: "Exploratory Data Analysis (EDA)",
//     description: "Understand your dataset through summary statistics, correlation analysis, feature distributions, and interactive exploration using Python."
//   },
//   {
//     title: "SQL for Data Analysis",
//     description: "Write SQL queries to retrieve, filter, join, group, and aggregate data from relational databases for integration into analysis workflows."
//   },
//   {
//     title: "Statistical Analysis & Hypothesis Testing",
//     description: "Learn descriptive and inferential statistics, t-tests, ANOVA, and confidence intervals to validate assumptions and support data-driven decisions."
//   },
//   {
//     title: "Real-World Projects & Dashboards",
//     description: "Apply all skills by building complete analysis projects with Python and Excel/Power BI, including reports, insights, and business recommendations."
//   },
//   {
//     title: "Data Storytelling & Presentation",
//     description: "Translate data insights into compelling narratives using visualizations, clear metrics, and stakeholder-focused communication techniques."
//   }
//     ],
//     logo: "/icons/python.svg",
//   },
//   {
//     id: 10,
//     slug: "ai-machine-learning",
//     name: "AI & Machine Learning",
//     description: "Create intelligent systems using machine learning models and AI algorithms.",
//     topics: [
//      { title: "Mathematics for ML", description: "Master linear algebra, calculus, probability, and statistics for building ML models" },
//   { title: "Python for Data Science", description: "Use Python and libraries like NumPy, pandas, and matplotlib for data manipulation and visualization" },
//   { title: "Data Preprocessing", description: "Clean, normalize, and prepare datasets for training and testing machine learning models" },
//   { title: "Supervised Learning", description: "Understand and implement algorithms like linear regression, decision trees, and support vector machines" },
//   { title: "Unsupervised Learning", description: "Explore clustering, dimensionality reduction, and anomaly detection techniques" },
//   { title: "Model Evaluation & Tuning", description: "Evaluate model performance and optimize hyperparameters using cross-validation" },
//   { title: "Neural Networks & Deep Learning", description: "Build deep learning models with TensorFlow or PyTorch, including CNNs and RNNs" },
//   { title: "Natural Language Processing", description: "Process and analyze text data using NLP libraries and transformer-based models" },
//   { title: "Computer Vision", description: "Apply deep learning techniques for image classification, object detection, and segmentation" },
//   { title: "ML Deployment", description: "Serve and deploy ML models using APIs, Flask, or FastAPI and Docker" },
//   { title: "AI Ethics & Fairness", description: "Understand ethical implications, bias, and fairness in AI systems" },
//   { title: "Real-World Projects", description: "Build hands-on AI solutions like recommendation systems, chatbots, or fraud detection tools" }
//     ],
//     logo: "/icons/python.svg",
//   },
//   {
//     id: 11,
//     slug: "game-development-unity",
//     name: "Unity Game Development",
//     description: "Design and build games using Unity and C# scripting.",
//     topics: [
//         {
//     title: "C# Programming Essentials",
//     description: "Learn the fundamentals of C# including variables, conditionals, loops, functions, and object-oriented programming—essential for scripting in Unity."
//   },
//   {
//     title: "Introduction to Unity Engine",
//     description: "Understand the Unity interface, project structure, and how to create scenes, manage assets, and navigate the editor efficiently."
//   },
//   {
//     title: "2D Game Development Basics",
//     description: "Create simple 2D games using sprites, tilemaps, physics, and colliders, and explore player movement and animation."
//   },
//   {
//     title: "3D Game Development Essentials",
//     description: "Dive into 3D development with cameras, lighting, materials, and physics systems to create immersive environments."
//   },
//   {
//     title: "Input Handling & Player Controls",
//     description: "Implement responsive keyboard, mouse, and mobile/touch inputs using Unity’s Input System to control characters and objects."
//   },
//   {
//     title: "Game UI Development",
//     description: "Design user interfaces using Unity’s UI system: buttons, sliders, health bars, menus, and HUDs with animations and transitions."
//   },
//   {
//     title: "Scenes, Transitions & Game Flow",
//     description: "Manage multiple scenes, implement loading screens, transitions, and game logic such as win/loss conditions and level progression."
//   },
//   {
//     title: "Animation & Visual Effects",
//     description: "Use the Animator and Timeline to bring characters and environments to life with skeletal animations, particle effects, and visual polish."
//   },
//   {
//     title: "Sound & Music Integration",
//     description: "Add background music, sound effects, and dynamic audio using Unity’s Audio Source and Mixer components."
//   },
//   {
//     title: "Data Persistence & Saving Progress",
//     description: "Implement saving systems using PlayerPrefs, JSON, or binary serialization to store user progress and settings."
//   },
//   {
//     title: "Performance Optimization",
//     description: "Improve game performance with efficient assets, occlusion culling, batching, LODs, and memory management best practices."
//   },
//   {
//     title: "Testing & Debugging",
//     description: "Test gameplay mechanics, debug common issues using logs and the Unity Profiler, and fix common performance bottlenecks."
//   },
//   {
//     title: "Publishing & Distribution",
//     description: "Build and export games for Windows, WebGL, Android, and iOS, and prepare for publishing on platforms like itch.io, Steam, or app stores."
//   }
//     ],
//     logo: "/icons/unity.svg",
//   },
//   {
//     id: 12,
//     slug: "devops",
//     name: "DevOps",
//     description: "Automate development workflows, CI/CD, and infrastructure with modern DevOps tools.",
//     topics: [
//        { title: "Linux & Shell Scripting", description: "Master essential Linux commands and automate tasks using shell scripts" },
//     { title: "Version Control (Git)", description: "Track code changes and collaborate using Git and GitHub" },
//     { title: "Docker", description: "Containerize applications using Docker images and containers" },
//     { title: "Docker Compose", description: "Define and run multi-container applications with Docker Compose" },
//     { title: "Kubernetes", description: "Orchestrate and manage containerized applications at scale" },
//     { title: "CI/CD Pipelines", description: "Automate testing, integration, and deployment using CI/CD pipelines" },
//     { title: "GitHub Actions", description: "Build automated workflows and deployment pipelines with GitHub Actions" },
//     { title: "Jenkins", description: "Set up and configure Jenkins for continuous integration and delivery" },
//     { title: "Infrastructure as Code (IaC)", description: "Manage infrastructure with code using Terraform and Ansible" },
//     { title: "Monitoring & Logging", description: "Monitor applications and analyze logs with tools like Prometheus, Grafana, and ELK Stack" },
//     { title: "Cloud Platforms", description: "Deploy and scale apps on AWS, Azure, or Google Cloud using best practices" },
//     { title: "Security & Secrets Management", description: "Secure pipelines and manage secrets using tools like Vault and environment variables" }
//     ],
//     logo: "/icons/docker.svg",
//   },
// ];