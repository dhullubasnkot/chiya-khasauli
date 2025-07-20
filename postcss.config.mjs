const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 25s linear infinite',
      },
    },
  },
};

export default config;
