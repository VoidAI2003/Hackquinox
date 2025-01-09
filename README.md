# Hackquinox Frontend

Welcome to the Hackquinox Frontend repository! This project is a purely frontend-based website built using **Next.js 15+**. It features various components designed to support and showcase the Hackquinox hackathon.

## Project Structure

The project is organized into the following main directories:

### `app`
- **dashboard**: Contains the main dashboard layout and page for the Hackquinox hackathon.
- **favicon.ico**: The favicon for the website.
- **globals.css**: Global CSS styles applied throughout the app.
- **layout.tsx**: The main layout component wrapping all pages.
- **page.tsx**: The primary page component for the dashboard.

### `components`
#### `ui`
- **3d-card.tsx**: A 3D card component for showcasing key features or information.
- **hover-border-gradient.tsx**: A component with a gradient border effect on hover.
- **shineBorder.tsx**: A component to add a shining border effect.
- **text-generate-effect.tsx**: A text effect component for dynamic text generation.
- **vortex.tsx**: A vortex animation component for visual appeal.

### Other Components
- **About.tsx**: About section component providing information about the Hackquinox event.
- **demo.tsx**: Demo component for showcasing certain features or interactions.
- **faqs.module.css**: CSS module for styling the FAQs section.
- **FAQs.tsx**: Frequently Asked Questions component.
- **Footer.tsx**: Footer component for the website.
- **Landing.tsx**: A Child component for Main.tsx.
- **Main.tsx**: The main landing page.
- **mainBottom.tsx**: A component for the bottom section of the main page.
- **schedule.tsx**: Schedule component outlining the hackathon timeline.
- **Shineborder.tsx**: A demo of the `shineBorder.tsx` component.
- **Theme.tsx**: Themes section file (to be replaced).

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hackquinox-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hackquinox-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

Here are the available scripts for development and production:

- **Development**:
  ```bash
  npm run dev
  ```
  Starts the development server with Turbopack.

- **Build**:
  ```bash
  npm run build
  ```
  Builds the application for production.

- **Start**:
  ```bash
  npm run start
  ```
  Starts the production server.

## Dependencies

The project uses the following dependencies:

- `autoprefixer`: ^10.4.20
- `clsx`: ^2.1.1
- `framer-motion`: ^11.15.0
- `lucide-react`: ^0.469.0
- `next`: 15.1.3
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `react-icons`: ^5.4.0
- `simplex-noise`: ^4.0.3
- `tailwind-merge`: ^2.6.0

## DevDependencies

- `@types/node`: ^20.0
- `@types/react`: ^19.0
- `@types/react-dom`: ^19.0
- `@types/three`: ^0.171.0
- `postcss`: ^8.4.49
- `tailwindcss`: ^3.4.17
- `typescript`: ^5.0

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy building and contributing to the Hackquinox frontend! If you have any questions, feel free to open an issue or reach out.
