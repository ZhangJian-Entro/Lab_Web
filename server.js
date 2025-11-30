// server.js
const express = require('express');
const path = require('path');
const app = express();

// 设置端口号，通常本地开发用 8080；
const PORT = 8080;

// 【核心步骤】设置静态文件目录
// 这行代码会让浏览器可以直接访问 public 文件夹里的 html, css, js
app.use(express.static(path.join(__dirname, 'public')));

// 启动服务器
app.listen(PORT, () => {
  console.log(`-------------------------------------------`);
  console.log(`CodeNucleus Lab 服务器已启动! 🚀`);
  console.log(`请在浏览器访问: http://localhost:${PORT}`);
  console.log(`-------------------------------------------`);
});