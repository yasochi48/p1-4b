function 敵再描画 () {
    led.unplot(ex, ey)
    敵移動()
    led.plotBrightness(ex, ey, 42)
}
function 傾き調査 () {
    if (input.rotation(Rotation.Roll) > 30) {
        右に進む()
    } else if (input.rotation(Rotation.Roll) < -30) {
        左に進む()
    }
}
function 弾移動 () {
    led.unplot(x, y)
    y += -1
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    左に進む()
})
function 右に進む () {
    led.unplot(x, y)
    if (x <= 3) {
        x += 1
    }
}
input.onButtonPressed(Button.B, function () {
    発射中 = 1
    while (y > 0) {
        弾移動()
        basic.pause(100)
    }
    led.unplot(x, y)
    basic.pause(1000)
    初期位置へ()
    発射中 = 0
})
function 敵移動 () {
    ex += 1
    if (ex >= 5) {
        ex = 0
    }
}
function 初期位置へ () {
    x = 2
    y = 4
}
function 左に進む () {
    led.unplot(x, y)
    x += 0 - 1
}
function 砲台再描画 () {
    傾き調査()
    led.plot(x, y)
}
let y = 0
let x = 0
let ey = 0
let ex = 0
let 発射中 = 0
初期位置へ()
発射中 = 0
ex = 0
ey = 0
basic.forever(function () {
    basic.pause(500)
    if (発射中 == 0) {
        敵再描画()
        砲台再描画()
    }
})
