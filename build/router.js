'use strict'
var request = require('request');
var path = require('path');
var multer  = require('multer');
var apiServerUrl = 'http://localhost:8181';
var upload = multer({ dest: 'uploads/' });

exports.setup = function setup(app) {
  /**
   * view
   */

  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/view/*', function (req, res, next) {
    res.render('index');
  });

  /**
   * API
   */

  // 上传文件处理
  app.post('/admin/upload/uploadImage', upload.single('file'), function (req, res, next) {
    next();
  }, function (req, res) {
    var method = req.method;
    var options = {
      url: apiServerUrl + req.path,
      method: method,
      formData:{
        file: {
          value: fs.createReadStream(path.resolve(__dirname, '../' + req.file.path)),
          options: {
            filename: req.file.originalname,
            contentType: req.file.mimetype
          },
          accept:'image/jpg,image/jpeg,image/png,image/gif,image/bmp'
        }
      }
    };

    request(options, function (err, response, body) {
      if (err) {
        logger.error('api proxy error.', err);
        res.send(rb.internalServerError());
        return;
      }
      if (response.statusCode !== 200) {
        logger.error("api proxy error. code: " + response.statusCode + ", body: " + body);
        res.send(rb.internalServerError());
        return;
      }
      res.send(body);
    });
  });

  // 页面初始化就需要得到用户信息的接口，在这里把需要的参数返回
  app.get('/admin/customerList', function (req, res, next) {
    req.query.role = req.user.role;
    req.query.username = req.user.username;
    next();
  });

  // 所有以 '/admin/' 开头的接口，需要转到代理服务器
  // app.all('/admin/*', apiProxy.proxy);

  app.get('/getUser', function (req, res) {
    res.send({
      code: 200,
      response: req.user
    });
  });
};
