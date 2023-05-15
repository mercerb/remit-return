# remit-return
Final Project for 6.C85, Interactive Data Visualization and Society, spring 2023. This project focuses on the remittances associated with migration from the Northern Triangle and if that money sent back offsets the cost of migration.

# Data
World Bank data is available in the `remit-return/remitreturn/wb-data/` directory. Class data must remain offline (private). Download the folder `dataset-1_central-american-survey` locally to your computer and place it in the `remit-return/remitreturn/src/class-data/` folder. Then you can run the data prep files.

# Local
## Running the code
`cd remitreturn`
`npm install`
`npm run dev --open`

## Then go to:
`http://localhost:5173/`

# Publishing
## Publish with Vercel (preferred)
Make sure you have the Vercel CLI and adapter: `npm i -g vercel` and `npm i @sveltejs/adapter-vercel` (global installs)
Then: 
`cd remitreturn` and `vercel`
If the result looks good, run `vercel --prod`.
The app will be available at https://remitreturn.vercel.app/.

## Publish to GitHub (not ideal)
`cd remitreturn`
`npm run gh-pages`
Then, don't forget to add the .nojekyll file back to the branch!
Go to https://github.com/mercerb/remit-return/tree/gh-pages and Add file -> Create new file. Title the file ".nojekyll" and leave it empty. It'll sit at the root of the repo.
This is not ideal because nested routes are not supported by github pages.

## Then go to:
https://mercerb.github.io/remit-return/