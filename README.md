# Custom Shopify Theme

A professional custom Shopify theme built with modern best practices.

## Features

- Responsive design
- Optimized for performance
- Customizable sections
- Modern JavaScript with ES6+ features
- SCSS for styling
- Accessibility compliant

## Getting Started

### Prerequisites

- [Shopify CLI](https://shopify.dev/themes/tools/cli)
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server:
   ```
   shopify theme serve
   ```

## Development

### Folder Structure

- `assets/`: Contains all theme assets (JS, CSS, images)
- `config/`: Theme configuration files
- `layout/`: Theme layout templates
- `locales/`: Translation files
- `sections/`: Reusable content sections
- `snippets/`: Reusable template snippets
- `templates/`: Theme templates

### Build Process

Run the build process to compile assets:

```
npm run build
```

## Deployment

Deploy to your Shopify store:

```
shopify theme push
```

## Customization

Customize theme settings in the Shopify admin under "Themes" > "Customize".

## License

[MIT License](LICENSE)
