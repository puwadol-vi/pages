To set up two environments (staging and production) for a React TypeScript project, you can use environment variables to differentiate the settings for each environment. This allows you to configure things like API endpoints, build configurations, or other environment-specific settings.

Here are the steps to set up **staging** and **production** environments in your React project:

### Step 1: Create Environment Variable Files

In a React project (created with `create-react-app` or with custom Webpack/Vite setup), you can use `.env` files to define environment variables.

1. **Create `.env` files** for each environment.

   - **`.env`** (common defaults)
   - **`.env.staging`** (for staging environment)
   - **`.env.production`** (for production environment)

   Each `.env` file will contain the environment-specific variables.

#### Example `.env` files:

- **`.env` (common configuration)**:
  ```env
  REACT_APP_API_URL=https://api.example.com
  REACT_APP_ENV=development
  ```

- **`.env.staging` (staging configuration)**:
  ```env
  REACT_APP_API_URL=https://staging-api.example.com
  REACT_APP_ENV=staging
  ```

- **`.env.production` (production configuration)**:
  ```env
  REACT_APP_API_URL=https://api.example.com
  REACT_APP_ENV=production
  ```

### Step 2: Access Environment Variables in Your Code

In your React code (for example, in `src/App.tsx`), you can access the environment variables using `process.env`.

```tsx
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <h1>Environment: {process.env.REACT_APP_ENV}</h1>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
    </div>
  );
};

export default App;
```

### Step 3: Configure Your Build Tool (Webpack or Vite)

- **For Vite** (if you're using Vite):
  
  Vite automatically loads the `.env` files. By default, it uses `.env`, but you can specify `VITE_` prefixed variables in `.env.staging` or `.env.production` to use different configurations.

  Here's how you can configure it:

  - **`.env.staging`**:
    ```env
    VITE_API_URL=https://staging-api.example.com
    ```

  - **`.env.production`**:
    ```env
    VITE_API_URL=https://api.example.com
    ```

  In your code:
  ```tsx
  console.log(import.meta.env.VITE_API_URL);  // Output the environment-specific URL
  ```

  Then, when you build the app using `vite build`, it will use the appropriate environment file based on the build script.

- **For Webpack** (if you're using Webpack):

  You will need to use `DefinePlugin` in your Webpack configuration to inject environment variables.

  Example:
  ```js
  const webpack = require('webpack');

  module.exports = {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
        'process.env.REACT_APP_ENV': JSON.stringify(process.env.REACT_APP_ENV),
      }),
    ],
  };
  ```

  Then, you can access `process.env.REACT_APP_API_URL` in your React code as described earlier.

### Step 4: Use the Environment Variables in Your App

Now, in your code, you can use the environment variables based on the build environment.

#### Example:

```tsx
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [apiUrl, setApiUrl] = useState('');

  useEffect(() => {
    setApiUrl(process.env.REACT_APP_API_URL || '');
  }, []);

  return (
    <div>
      <h1>Environment: {process.env.REACT_APP_ENV}</h1>
      <p>API URL: {apiUrl}</p>
    </div>
  );
};

export default App;
```

### Step 5: Set Up NPM Scripts for Each Environment

Modify your `package.json` to add custom scripts for building and running the app in different environments.

#### Example `package.json`:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "build:staging": "react-scripts build --config webpack.staging.config.js",
    "build:production": "react-scripts build --config webpack.production.config.js",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

- **For Vite**, you can modify the `scripts` section of `package.json` as follows:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:staging": "vite build --mode staging",
    "build:production": "vite build --mode production"
  }
}
```

### Step 6: Build for Specific Environments

- To build for **staging**, run:

  ```bash
  npm run build:staging
  ```

- To build for **production**, run:

  ```bash
  npm run build:production
  ```

This will use the respective environment file (`.env.staging` or `.env.production`) for the build.

### Conclusion

This setup allows you to easily manage different configurations for **staging** and **production** environments in your React TypeScript project. The key steps are:

- Creating `.env` files for each environment.
- Accessing environment variables in your code.
- Configuring the build tool (Vite or Webpack) to load the appropriate `.env` file for each environment.
- Using `npm` scripts to build for specific environments.

Let me know if you need further clarification or assistance!