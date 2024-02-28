let datalogningStatus = 0
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 1
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus) {
        datalogningStatus = 0
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
})
loops.everyInterval(20, function () {
    if (datalogningStatus == 1) {
        datalogger.log(datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)))
    }
})
