var shell = require('shelljs');
/**
 * 这里的命令执行多次的时候会创建2级目录  比如 
 * 复制www/views/  到 build/views/ 中 执行第二次后 build/views/目录里面就多次了一个views
 * 命令用的不熟悉，不明缘由....尴尬
 */
shell.cp('-Rf', 'www/react/react.html', 'build/react');
shell.cp('-Rf', 'www/react/error.html', 'build/react');
shell.cp('-Rf', 'www/public/', 'build/public/');
shell.cp('-Rf', 'www/views/', 'build/views/');
