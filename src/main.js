require('./main.css') //这里可以直接在JS文件中引入css文件
var components = require('./components');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello Webpack</h1>';
app.appendChild(components());
document.body.appendChild(app);