
# Simple testing stub 

To setup after cloning (or copying), run:
```bash
npm install
```

## Configuring Idea IDE Unit Testing: 

- Run > 
- Edit Configuration > 
- Extra mocha options:
```
--require ts-node/register --require jsdom-global/register
```

## Features

### Test on Idea IDE 
- Useful for Webstorm, etc.
- A green arrow should be displayed on the `.spec` files, to run tests locally.

### Run tests on command line
Execute the following to run tests:

```bash
npm run test
```

### Run coverage using Istanbul
Execute the following to run coverage:
```bash
npm run coverage
```
This will generate a `./.nyc_output` and a `./coverage` folders, where the coverage
data is saved.

### Build single file for browser
Execute the following to build the file:
```bash
npm run build
```