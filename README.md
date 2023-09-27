noalbalint.com - personal website

The only route currently active is `noalbalint.com/vellofood?hire=true`. The query param has no effect but I thought it was a nice touch for the application :)


-----

The app was created using Vite and leverages React, Styled Components, Tailwind, and Firebase Hosting.

-----

For local development:

Start the tailwind css generator:

`$ npx tailwindcss build -i src/index.css -o src/tailwind.css --watch`

In another terminal, start the vite compiler:

`$ npm run dev`

To deploy:

`$ npm run build`

`$ firebase serve` to test the production built

`$ firebase deploy` to deploy to noalbalint.com

