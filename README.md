# School ERP Vue 3

A Vue 3-based School ERP (Enterprise Resource Planning) application designed for managing school operations efficiently. This application leverages modern tools and libraries, including Vue Router, Vue I18n, Bootstrap 5, and BootstrapVue 3.

---

## **Project Setup**

### **Prerequisites**
Ensure you have the following installed on your system:

- **Node.js**: >= 16.x.x
- **npm**: >= 8.x.x
- **Vue CLI**: >= 5.0.0

### **Installation**

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd school-erp-vue3
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## **Scripts**

### **Development Server**
To run the development server:
```bash
npm run serve
```
- Default URL: `http://localhost:8080`

### **Build for Production**
To build the application for production:
```bash
npm run build
```
The production build files will be available in the `/dist` directory.

### **Lint Code**
To lint and fix code issues:
```bash
npm run lint
```

---

## **Folder Structure**

```
src/
|-- assets/        # Static files like images, CSS, and fonts
|-- components/    # Vue components
|-- i18n/          # Internationalization files
|-- router/        # Vue Router configuration
|-- views/         # Page views
|-- App.vue        # Root Vue component
|-- main.js        # Application entry point
```

---

## **Dependencies**

### **Main Dependencies:**
- **Vue 3**: ^3.3.6
- **Vue Router**: ^4.2.4
- **Vue I18n**: ^9.2.2
- **Bootstrap**: ^5.3.3
- **BootstrapVue 3**: ^0.5.1
- **Axios**: ^1.4.0

### **Development Dependencies:**
- **Webpack**: ^5.71.0
- **SASS Loader**: ^12.6.0
- **ESLint**: ^7.32.0
- **Vue CLI Plugins**: Babel, ESLint

---

## **Customization**

### **Bootstrap Customization**
To customize Bootstrap styles:
1. Modify SCSS variables in a custom file (e.g., `src/assets/scss/_variables.scss`).
2. Import the customized styles in `main.js`:
   ```javascript
   import 'bootstrap/dist/css/bootstrap.css';
   import 'bootstrap-vue/dist/bootstrap-vue.css';
   import '@/assets/scss/_variables.scss';
   ```

### **Debugging BootstrapVue**
For debugging issues in BootstrapVue, refer to the [BootstrapVue 3 documentation](https://bootstrap-vue.org/), or override specific component styles via custom CSS classes.

---

## **Environment Variables**
Use `.env` files to configure environment-specific settings.

Example `.env` file:
```env
VUE_APP_API_URL=http://localhost:3000/api
VUE_APP_TITLE=School ERP Vue 3
```

---

## **License**
This project is licensed under the MIT License.

---

## **Author**
Developed by **Your Name**.

