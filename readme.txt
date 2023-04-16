童翔超市小程序代码
需要先启动后台服务器和mysql服务，再启动小程序使用
#测试环境，无法登录账号、无法定位、无法支付
演示前准备工作：
1、确认sql服务已启动
2、启动redis
   -进入redis安装目录：
   -启动服务：redis-server.exe  redis.windows.conf
3、启动项目
   -打开idea，运行kxmall-admin文件夹下的MarketAdminApplication
   -启动失败具体检查1 2 步