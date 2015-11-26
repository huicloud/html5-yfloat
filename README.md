# dzh云平台yfloat数值解析模块
---

## 使用
1.browser

    <script src="dist/yfloat.min.js"></script>
    <script>
        yfloat.unmakeValue(1111);
    </script>

2.nodejs
安装

    npm install https://github.com/huicloud/html5-yfloat.git

使用
    
    var yfloat = require('html5-yfloat');
    yfloat.unmakeValue(1111);

## API
### `yfloat.unmakeValue(value)` ###
解析yfloat类型数字，返回数值和精度的数组

### `yfloat.unmakeValueToNumber(value)` ###
解析yfloat类型数字，返回数字类型

### `yfloat.unmakeValueToString(value)` ###
解析yfloat类型数字，返回根据精度格式化后的字符串