noalbalint.com - personal website

the only route currently active it `/vellofood?hire="true"`. The query param has no effect but I thought it was a nice touch for the application :)

-----

for local development:

`$ npx tailwindcss build -i src/index.css -o src/tailwind.css --watch`
`$ npm run dev`

to deploy:

`$ npm run build`

`$ firebase serve` to test the production built

`$ firebase deploy` to deploy to noalbalint.com

