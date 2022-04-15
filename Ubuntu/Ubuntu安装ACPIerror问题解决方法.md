
How did you encounter this problem ? I faced with ACPI error when installing ubuntu 18.04 on MSI laptop.
To fix acpi error please try the following step:
1) update your BIOS:
Update your BOIS to the latest version
2) BIOS setting:
fast boot = Disable
secure boot = Disable
Boot mode select =UEFI
3)Reboot system
Go to the Install Ubuntu option (BUT DONT PRESS ENTER)
Press e
Find the line that starts with linux then add modprobe.blacklist=nouveau after quiet splash.

1. 在安装ubuntu的时候，输入 'e',然后编辑Linux启动命令行，把命令行的"---"替换成"nomodeset"。然后继续安装，忽略终端输出的ACPI错误。

2.安装完成以后，重启，再出现BIOS界面的时候，按住shift，进入GRUB选择界面;
2.1 同样是输入'e',编辑启动命令行：
2.2 添加nomodeset(搜索splash关键字, 放在splash后面)，这里只是临时添加，为了进入系统，永久添加需要执行后面的第3小节。
2.3 按下F10功能键启动系统；

3.进入系统后修改 /etc/default/grub 文件(需要root权限)
sudo vi /etc/default/grub
3.1 添加nomodeset(搜索splash关键字, 放在splash后面);
3.2 执行sudo update-grub指令；
到这里ubuntu系统就可以正常启动了。

参考连接：
[戴尔电脑装ubuntu报ACPI错误解决过程](https://blog.csdn.net/huohongpeng/article/details/120508304)
