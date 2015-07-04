Diablo 3 Armory
=====================

Simple mobile Armory for Diablo 3, using Ionic :)

## Getting Started


The easiest way to get started is to clone the repository:

```bash
# Fetch only the latest commits.
git clone https://github.com/bcldvd/diablo3-armory.git my-project

cd my-project

# Install Ionic & Cordova if you don't have them yet
npm install -g cordova ionic

# Install NPM & Bower dependencies
npm install && bower install
# Choose Angular 1.3.x if asked

# Create a config.json file at the root of your folder with the following :
{
  "name": "starter.config",
  "constants": {
    "d3Api": {
      "apiKey": "YOUR_BATTLENET_API_KEY"
    }
  }
}

# Build constant.js file
gulp config

# Launch your app :)
ionic serve
```


## Authors

**David Boclé** - http://github.com/bcldvd


## Credits

- [Ionic](https://github.com/driftyco/ionic) by [The Ionic team](https://github.com/driftyco)
- [D3 Api](https://dev.battle.net/) by [Blizzard](https://github.com/Blizzard)


## Copyright and license

    The MIT License

    Copyright (c) 2014 David Boclé

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.