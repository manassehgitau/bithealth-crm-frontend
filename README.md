 

<h1 align="center" style="font-weight: bold;">BitHealth CRM Frontend 💻</h1>

<p align="center">
<a href="#tech">Technologies</a>
<a href="#started">Getting Started</a>
<a href="#colab">Collaborators</a>
<a href="#contribute">Contribute</a> 
</p>


<p align="center">A modern Customer Relationship Management (CRM) dashboard for BitHealth smartwatch business operations</p>


<p align="center">
<a href="https://github.com/manassehgitau/bithealth-crm-frontend">📱 Visit this Project</a>
</p>
 
<h2 id="layout">🎨 Layout</h2>

<p align="center">

<img src="https://picsum.photos/400" alt="Random Image" width="400px">

</p>
 
 ## About The Project 

 <!-- > An Image of the screenshot is added -->

<!-- ![Product Screenshot](./assets/imgs/hero.png) -->

BitHealth is a tech business specialising in smartwatches. These wearables are designed to track individual health metrics in real-time while automatically logging data to BitHealth's secure infrastructure. Once collected, this essential information is processed and transferred directly to the healthcare facility where the individual is registered, allowing medical specialists to give timely interventions as needed.

This **CRM Frontend** application provides a comprehensive management dashboard for BitHealth's internal operations, enabling efficient management of products, employees, and business analytics.

### Key Features:
---

1. **Authentication System**: Secure login functionality with JWT token-based authentication for authorized access.
2. **Product Management**: Complete CRUD operations for managing BitHealth smartwatch products with detailed views, create, update, and delete capabilities.
3. **Employee Management**: Comprehensive employee directory with functionality to add, view, update, and manage employee information.
4. **Admin Dashboard**: Interactive dashboard with data visualizations including:
   - Area charts for trend analysis
   - Bar graphs for comparative metrics
   - Pie charts for distribution insights
   - Transaction monitoring
   - Vector maps for geographical data
5. **Responsive Design**: Mobile-first responsive interface built with TailwindCSS for optimal viewing across all devices.
6. **Dark Mode Support**: Theme context provider enabling light/dark mode switching for user preference.
7. **Real-time Updates**: Dynamic data fetching and display with modern React patterns.


### Application Sections:
---

- **Login Page**: Secure authentication gateway for accessing the CRM system.
- **Admin Dashboard**: Central hub displaying key metrics, charts, and business insights.
- **Products Management**: Interface for viewing, creating, updating, and managing product inventory.
- **Employee Management**: System for managing employee records and information.
- **Navigation & Sidebar**: Intuitive navigation system with collapsible sidebar for easy access to all features.
- **Profile Section**: User profile management and settings.
- **Footer**: Quick links and essential information.



<h2 id="technologies">💻 Technologies</h2>

**Frontend Framework & Build Tools:**
- [React](https://react.dev/) ^18.2.0 - Modern UI library for building interactive user interfaces
- [Vite](https://vitejs.dev/) ^6.2.0 - Next generation frontend tooling for fast development
- [React Router DOM](https://reactrouter.com/) ^7.4.0 - Declarative routing for React applications

**Styling & UI:**
- [TailwindCSS](https://tailwindcss.com/) ^4.0.14 - Utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) ^5.5.0 - Popular icon library
- [FontAwesome](https://fontawesome.com/) ^6.7.2 - Icon toolkit (SVG core and free icons)

**Data Visualization:**
- [Chart.js](https://www.chartjs.org/) ^4.4.8 - Simple yet flexible JavaScript charting
- [React ChartJS 2](https://react-chartjs-2.js.org/) ^5.3.0 - React wrapper for Chart.js
- [Recharts](https://recharts.org/) ^2.15.1 - Composable charting library built on React components

**Calendar & Scheduling:**
- [FullCalendar](https://fullcalendar.io/) ^6.1.15 - Full-featured calendar with React integration
  - Core, DayGrid, TimeGrid, List, and Interaction plugins

**Maps & Location:**
- [Leaflet](https://leafletjs.com/) ^1.9.4 - Leading open-source JavaScript library for mobile-friendly maps
- [React Leaflet](https://react-leaflet.js.org/) ^5.0.0 - React components for Leaflet maps
- [React Simple Maps](https://www.react-simple-maps.io/) ^1.0.0 - SVG maps in React

**Utilities:**
- [date-fns](https://date-fns.org/) ^4.1.0 - Modern JavaScript date utility library
- [React Toastify](https://fkhadra.github.io/react-toastify/) ^11.0.5 - React notification library

**Development Tools:**
- [ESLint](https://eslint.org/) ^9.21.0 - JavaScript linting utility
- [TypeScript Types](https://www.typescriptlang.org/) - Type definitions for React and React DOM
 
<h2 id="started">🚀 Getting started</h2>

Follow these instructions to set up and run the BitHealth CRM Frontend on your local machine.
 
<h3>Prerequisites</h3>

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) for version control
 
<h3>Cloning</h3>

Clone the repository to your local machine:

```bash
git clone https://github.com/manassehgitau/bithealth-crm-frontend.git
```
 
<h3>Installation</h3>

Navigate to the project directory and install dependencies:

```bash
cd bithealth-crm-frontend
npm install
```

<h3>Environment Setup</h3>

Create a `.env` file in the root directory and add your environment variables:

```env
VITE_BASE_URL=your_api_base_url_here
```
 
<h3>Starting Development Server</h3>

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

<h3>Building for Production</h3>

To create a production-ready build:

```bash
npm run build
```

The optimized build will be output to the `dist` directory.

<h3>Preview Production Build</h3>

To preview the production build locally:

```bash
npm run preview
```

<h3>Linting</h3>

To run ESLint and check for code quality issues:

```bash
npm run lint
```
 
<h2 id="colab">🤝 Collaborators</h2>

<p>Special thank you to the project owner and all contributors.</p>
<table>
<tr>

<td align="center">
<a href="https://github.com/manassehgitau">
<img src="https://avatars.githubusercontent.com/u/110011157?v=4" width="100px;" alt="Manasseh Gitau Profile Picture"/><br>
<sub>
<b>Manasseh Gitau</b>
</sub>
</a>
</td>

</tr>
</table>

  ## Project Structure

```
bithealth-crm-frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   ├── components/     # Reusable UI components
│   │   ├── AreaChart.jsx
│   │   ├── BarGraph.jsx
│   │   ├── DetailsDashboardCards.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavbarProfile.jsx
│   │   ├── PieChartCard.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Transactions.jsx
│   │   └── VectorMap.jsx
│   ├── context/        # React Context providers
│   │   └── ThemeContextProvider.jsx
│   ├── pages/          # Application pages/views
│   │   # Includes pages for:
│   │   # - Admin Dashboard (dashboard with analytics)
│   │   # - Authentication (login page)
│   │   # - Product Management (CRUD operations)
│   │   # - Employee Management (CRUD operations)
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Project dependencies and scripts
```

  ## Usage

To use the BitHealth CRM Frontend:
1. Ensure the backend API is running and accessible
2. Configure the `VITE_BASE_URL` in your `.env` file to point to your API
3. Start the development server using `npm run dev`
4. Access the application at `http://localhost:5173`
5. Log in with valid credentials to access the admin dashboard
6. Navigate through the sidebar to access different sections (Products, Employees, Dashboard)

 ##  Development Roadmap

- [x] Authentication System
  - [x] Login page with JWT authentication
  - [x] Token-based session management
- [x] Admin Dashboard
  - [x] Dashboard hero section
  - [x] Data visualization components (Charts, Graphs)
  - [x] Transaction monitoring
  - [x] Vector maps integration
- [x] Product Management
  - [x] Product listing view
  - [x] Create new products
  - [x] View product details
  - [x] Update/Edit products
- [x] Employee Management
  - [x] Employee directory
  - [x] Add new employees
  - [x] View employee details
  - [x] Update employee information
- [x] UI/UX Features
  - [x] Responsive navigation bar
  - [x] Collapsible sidebar
  - [x] Dark mode support
  - [x] Footer component
- [ ] Additional Features
  - [ ] Advanced search and filtering
  - [ ] Bulk operations for products/employees
  - [ ] Export data functionality
  - [ ] User role management
  - [ ] Notification system
  - [ ] Advanced analytics dashboard
  - [ ] Customer/Client management module
  - [ ] Inventory tracking system

See the [open issues](https://github.com/manassehgitau/bithealth-crm-frontend/issues) for a full list of proposed features (and known issues).

 ## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

 ## License

Distributed under the MIT License. See [MIT License](https://opensource.org/licenses/MIT) for more information.
 ## Contact

Manasseh Gitau - [@GitauManasseh](https://twitter.com/GitauManasseh) - gitaumanaasseh1@gmail.com

Project Link: [BitHealth CRM Frontend](https://github.com/manassehgitau/bithealth-crm-frontend)
 ## Acknowledgments

A big shout-out to my technical mentor 
[Ezekiel Kibiego](https://github.com/ezekielkibiego)



<h3>Documentations that might help</h3>

[📝 How to create a Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Commit pattern](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
