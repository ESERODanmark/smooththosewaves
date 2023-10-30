## Svingningsmåleren @unplugged
**OBS!** Du skal bruge en @boardname@ i mindst version 2 (V2)
![](https://github.com/ESERODanmark/TemperaturDatalogger/blob/master/ikon_tempAlert.png?raw=true)

## Svingningsmåleren @unplugged
![](https://github.com/ESERODanmark/smooththosewaves/blob/master/ikon_DampVibrations.png?raw=true)

## Svingningsmåleren 
Nu skal du bygge en måler til at datalogge svingninger! 

## Variabel 
Opret en variabel og kald den `||variables:datalogningStatus||`

## Knap A: Tænd datalogning 
Træk blokken `||variables:sæt datalogningStatus til||` ind under `||input.når der trykkes på knap A||`

```blocks
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 0
})
```

## Knap A: Tænd datalogning 
* Sæt værdien af variablen `||variables:datalogningStatus||` til 1

```blocks
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 1
})
```

## Knap A: Skærmbillede
Træk blokken `||basic.vis LED'er||` ind under `||variables:sæt datalogningStatus til||` 

```blocks
input.onButtonPressed(Button.A, function () {
    datalogningStatus = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
```

## Knap A: Skærmbillede
Tegn et symbol for at datalogningen er startet 

```blocks
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
```

## Knap B: Sluk datalogning
Træk `||input: når der trykkes på knap B||` ind på skrivebordet

```blocks
input.onButtonPressed(Button.B, function () {
})
```

## Knap B: Sluk datalogning
Træk blokken `||logic:hvis ... så||` ind i blokken `||input.når der trykkes på knap B||`

```blocks
input.onButtonPressed(Button.B, function () {
    if (true) {
        
    }
})
```



## Knap B: Sluk datalogning
Træk blokken `||logic: 0 = 0 ||` ind i blokken `||logic:hvis ... så||` hvor der står "sand"

```blocks
input.onButtonPressed(Button.B, function () {
    if (0 == 0) {
        
    }
})
```

## Knap B: Sluk datalogning
Træk blokken `||variables:datalogningStatus||` ind i `||logic: 0 = 0 ||`

```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus==0) {
        
    }
})
```


## Knap B: Sluk datalogning
Skift værdien 0 til 1

```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus==1) {
        
    }
})
```

## Knap B: Sluk datalogning
Træk blokken `||variables:sæt datalogningStatus til||` ind i blokken `||logic:hvis ... så||`

```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus==1) {
        datalogningStatus = 0
    }
})
```

## Knap B: Skærmbillede for sluk datalogning
Træk en `||basic.vis LED'er||` blok ind under `||variables:sæt datalogningStatus til||` 

```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningsStatus == 1) {
        datalogningsStatus = 0
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)

})
```


## Knap B: Skærmbillede for sluk datalogning
Tegn et symbol for at datalogningen er slukket 


```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningsStatus == 1) {
        datalogningsStatus = 0
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)

})
```

## Knap B: Skærmbillede for sluk datalogning
Træk blokken `||basic.pause||` ind under symbolet du har tegnet


```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningsStatus == 1) {
        datalogningsStatus = 0
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
   
})
```


## Knap B: Skærmbillede for sluk datalogning
Træk blokken `||basic.ryd skærmen||`. Skærmen viser nu dit symbol, pauser og slukker skærmen


```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningsStatus == 1) {
        datalogningsStatus = 0
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
```
## Knap A+B Slet en måling
Du skal kunne slette målingerne. Træk blokken `||input:når der trykkes på knap A+B||` ind på skrivebordet
```blocks
input.onButtonPressed(Button.AB, function () {
 })
```
## Knap A+B Slet en måling
Træk blokken `||datalogger:delete log||` ind i `||input:når der trykkes på knap A+B||` (sletter målingen) 

```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()

})
```


## Knap A+B Slet en måling
Træk en `||basic.vis LED'er||` blok ind under `||datalogger:delete log||` 

```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
```

## Knap A+B Slet en måling
Tegn et symbol for at data er blevet slettet 
```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
})
```

## Knap A+B Slet en måling
Træk blokken `||basic.pause||` ind under symbolet du har tegnet
```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
})
```

## Knap A+B Slet en måling
Træk blokken `||basic.ryd skærmen||` ind under `||basic.pause||`
```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
```


## Datalogning hver 100 ms
Træk blokken `||loops:every||` ind på skrivebordet

```blocks
loops.everyInterval(500, function () {
})
```



## Datalogning hver 100 ms
Sæt `||loops:every||` til 100 ms 
```blocks
loops.everyInterval(100, function () {
})
```


## Datalogning hver 100 ms
Træk en `||logic:hvis ... så||` ind i blokken `||loops:every||`
```blocks
loops.everyInterval(100, function () {
    if (true) {
    }
})
```



## Datalogning hver 100 ms
Træk `||logic: 0 = 0 ||` ind i blokken `||logic:hvis ... så||` 
```blocks
loops.everyInterval(100, function () {
    if (0 == 0) {
    }
})
```



## Datalogning hver 100 ms
Træk derefter variablen `||variables:datalogningStatus||` ind i `||logic: 0 = 0 ||` blokken
```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 0) {
    }
})
```




## Datalogning hver 100 ms
Skift værdien 0 til 1. Nu spørger programmet om `||variables:datalogningStatus||` = 1

```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 1) {
    }
})
```


## Datalogning hver 100 ms
Træk `||datalogger:log data||` ind i `||logic:hvis ... så||`
```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 1) {
        datalogger.log(datalogger.createCV("","")))
    }
})
```

## Datalogning hver 100 ms
Udfyld kolonnetitel med navnet "Acceleration" 

```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 1) {
        datalogger.log(datalogger.createCV("Acceleration","")))
    }
})
```


## Datalogning hver 100 ms
Udfyld "value" med blokken `||input.acceleration (styrke)||`

```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 1) {
        datalogger.log(datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)))
    }
})
```


## Datalogning hver 100 ms
Tjek at du under `||input.acceleration||` har valgt "styrke" i stedet for "x" 
 
```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 1) {
        datalogger.log(datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)))
    }
})
```

## Koden er nu klar til brug!
* Tryk på knappen "Færdig" og fortsæt med opgaverne i elevhæftet

```template
input.onButtonPressed(Button.A, function () {
}
```