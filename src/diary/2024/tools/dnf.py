from adbutils import adb

def main():
    # 连接到设备
    device = adb.device("192.168.2.86:5555")  # 替换为你的设备ID

    # 模拟触摸事件
    x_coord = 641
    y_coord = 1272
    simulate_touch(device, x_coord, y_coord)

def simulate_touch(device, x, y):
    # 模拟触摸按下
    device.shell(f"input touchscreen down {x} {y}")

    # 等待一段时间
    import time
    time.sleep(1)

    # 模拟触摸抬起
    device.shell(f"input touchscreen up {x} {y}")

if __name__ == "__main__":
    main()