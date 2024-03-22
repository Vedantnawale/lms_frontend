# LMS Frontend

### Setup instruction

1. Clone the 

```
  git clone   
```
2. Move into the directory 

```
cd lms-frontend

```
3. install dependencies

```
    npm i

```
4.run the server

```
    npm run dev

```

### Setup instructions for tailwind

[Tailwind official instruction doc]([https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app))

1. Install tailwindcss

```
    npm install -D tailwindcss

```

2. Create tailwind config file

```
     npx tailwindcss init

```

3. Add file extensions to tailwind config file in the contents property

```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

```

4. Add the Tailwind directives to your `index.css` file

```

@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Install Dependencies

```
  npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```