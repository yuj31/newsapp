PS C:\Users\91897\Downloads\ReactTut> cd newsapp
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm run start

> newsapp@0.1.0 start
> react-scripts start

Browserslist: caniuse-lite is outdated. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
(node:12176) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is depr
Compiled successfully!

You can now view newsapp in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.118:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
Terminate batch job (Y/N)? 
^C
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm i

up to date, audited 1479 packages in 12s

231 packages are looking for funding
  run `npm fund` for details

11 vulnerabilities (4 moderate, 7 high)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm i

removed 1334 packages, and audited 145 packages in 8s

41 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

  npm audit fix

Run `npm audit` for details.       
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm i @vitejs/plugin-react vite-plugin-svgr vite

added 86 packages, changed 3 packages, and audited 231 packages in 30s

65 packages are looking for funding
  run `npm fund` for details       

1 moderate severity vulnerability  

To address all issues, run:        
  npm audit fix

Run `npm audit` for details.       
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm i

up to date, audited 231 packages in 2s

65 packages are looking for funding
  run `npm fund` for details       

1 moderate severity vulnerability  

To address all issues, run:        
  npm audit fix

Run `npm audit` for details.       
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm run start

> newsapp@0.1.0 start
> vite


  VITE v4.4.9  ready in 1052 ms    

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose 
  ➜  press h to show help
Error:   Failed to scan for dependencies from entries:
  C:/Users/91897/Downloads/ReactTut/newsapp/index.html

  X [ERROR] The JSX syntax extension is not currently enabled

    src/App.js:27:6:
      27 │       <div>
         ╵       ^

  The esbuild loader for this file is currently set to "js" but it must be set to "jsx" to be able to parse JSX syntax. You can use "loader: { '.js': 'jsx' }" to do that.     


X [ERROR] The JSX syntax extension is not currently enabled

    src/components/Navbar.js:8:6:  
      8 │       <div>
        ╵       ^

  The esbuild loader for this file is currently set to "js" but it must be set to "jsx" to be able to parse JSX syntax. You can use "loader: { '.js': 'jsx' }" to do that.     


X [ERROR] The JSX syntax extension is not currently enabled

    src/components/News.js:49:12:  
      49 │             <>
         ╵             ^

  The esbuild loader for this file is currently set to "js" but it must be set to "jsx" to be able to parse JSX syntax. You can use "loader: { '.js': 'jsx' }" to do that.     


X [ERROR] The JSX syntax extension is not currently enabled

    src/components/NewsItem.js:5:6:
      5 │       <div className="my-3">
        ╵       ^

  The esbuild loader for this file is currently set to "js" but it must be set to "jsx" to be able to parse JSX syntax. You can use "loader: { '.js': 'jsx' }" to do that.     


X [ERROR] The JSX syntax extension is not currently enabled

    src/components/Spinner.js:6:8: 
      6 │         <div className='text-center'>
        ╵         ^

  The esbuild loader for this file is currently set to "js" but it must be set to "jsx" to be able to parse JSX syntax. You can use "loader: { '.js': 'jsx' }" to do that.     


X [ERROR] The JSX syntax extension is not currently enabled

    src/index.js:9:2:
      9 │   <React.StrictMode>     
        ╵   ^

  The esbuild loader for this file is currently set to "js" but it must be set to "jsx" to be able to parse JSX syntax. You can use "loader: { '.js': 'jsx' }" to do that.     


    at failureErrorWithLog (C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:1649:15)
    at C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:1058:25
    at runOnEndCallbacks (C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:1484:45)
    at buildResponseToResult (C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:1056:7)
    at C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:1068:9
    at new Promise (<anonymous>)   
    at requestCallbacks.on-end (C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:1067:54)
    at handleRequest (C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:729:19) 
    at handleIncomingPacket (C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:755:7)
    at Socket.readFromStdout (C:\Users\91897\Downloads\ReactTut\newsapp\node_modules\esbuild\lib\main.js:679:7)
10:04:47 pm [vite] page reload index.html
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm run start

> newsapp@0.1.0 start
> vite


  VITE v4.4.9  ready in 1124 ms    

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose 
  ➜  press h to show help
Error: The following dependencies are imported but could not be resolved:

  prop-types (imported by C:/Users/91897/Downloads/ReactTut/newsapp/src/components/News.jsx)

    at async file:///C:/Users/91897/Downloads/ReactTut/newsapp/node_modules/vite/dist/node/chunks/dep-df561101.js:45114:38 
PS C:\Users\91897\Downloads\ReactTut\newsapp> ^C
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm run start

> newsapp@0.1.0 start
> vite


  VITE v4.4.9  ready in 840 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
Error: The following dependencies are imported but could not be resolved:

  prop-types (imported by C:/Users/91897/Downloads/ReactTut/newsapp/src/components/News.jsx)

Are they installed?
    at file:///C:/Users/91897/Downloads/ReactTut/newsapp/node_modules/vite/dist/node/chunks/dep-df561101.js:45705:23       
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async file:///C:/Users/91897/Downloads/ReactTut/newsapp/node_modules/vite/dist/node/chunks/dep-df561101.js:45114:38 
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm i prop-types

added 3 packages, and audited 234 packages in 2s

65 packages are looking for funding
  run `npm fund` for details

1 moderate severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
PS C:\Users\91897\Downloads\ReactTut\newsapp> npm run start

> newsapp@0.1.0 start
> vite


  VITE v4.4.9  ready in 872 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
