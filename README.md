# vb-test-js
VbTest JS is a light weight testing lib to test in browser javascript functions.

You can use it when you write vanilla frontend javascript without node.

## How to use it
1. First add dependencies on top of tests.html. You can add Jquery and other libs.
2. Add your scripts, to permit to all tests to access to your functions.
3. Write some tests in dedicaded javascript files. And add them to tests.html. We recommand to add all tests functions in a list for each test file.
4. Concatenate all tests lists in one. You can do it in a dedicaded js file or just before TestsRunner() call in tests.html
5. Open tests.html in a browser and watch results.

You can find a really simple use case in the example folder. You can extend it to add many functions per file and many files.

The limit is the browser capacity to render a large number of static html elements. (maybe 100 000 tests or more)

Add an issue or a pull request to contribute. Enjoy !
