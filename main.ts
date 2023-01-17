led.plot(0, 0)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
