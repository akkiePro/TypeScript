# step 1: create typescript config file
=> tsc --init

# step 2: initiate node project
=> npm init -y

# step 3: create index.html file for home page.

# step 4: create 2 folders: 1. src-where we code, 2. dist-for production where .js files will be stored
=> mkdir src dist

# step 5: set output directory to dist
=> go to tsconfig.json
=> set "outDir": "./dist"

# step 6: after writing TS code run using following command
=> tsc -w
<!-- any change in .ts file will reflect .js file intantaly as you save file. -->

# step 7: run your .html file using any live-server OR lite-server.