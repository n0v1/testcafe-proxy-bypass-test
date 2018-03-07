# A little project to test the new proxy-bypass option of [TestCafé](http://devexpress.github.io/testcafe/)

See [proxy-bypass option pull request](https://github.com/DevExpress/testcafe/pull/2187).

As of now this feature is not released yet so we have to use testcafe package directly from GitHub.

After cloning this repo you should install the dependencies by running:
```
yarn install
```
or
```
npm install
```

Then you'll have to build testcafe by running:
```
npm run build-testcafe
```

After that you can run the different testcafe scripts as defined in [package.json](package.json).

You should change the `--proxy 172.30.109.30:8080` option according to your needs.

`npm run test` -  Test local web page that includes a script from a remote server without proxy. That the remote script will not load is expected behaviour when sitting behind a corporate proxy.

`npm run test:proxy` - Test remote page with specified proxy. Should work as expected when sitting behind a corporate proxy and the proxy host is correct.

`npm run test:proxy-bypass` - Test local web page that includes a script from a remote server with specified  proxy. Bypass proxy for local ressources. Should work as expected when sitting behind a corporate proxy and the proxy host is correct.

This last test does not work in my environment (Windows 7). All local ressources are loaded correctly but the remote script is not. It keeps loading forever.
