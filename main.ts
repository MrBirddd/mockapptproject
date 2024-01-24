namespace SpriteKind {
    export const ghost = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    roseleft.setImage(img`
        ...........ccbbbbcc....................
        ........bdddddddddddddb................
        ......cddddddddddddddddddc.............
        .....bddddddddddddddddddbfe............
        ....ddddddddddddddddddddfeee.e.ee.c....
        ...bddddddddddddddddddddfeeeefeee.db...
        ..cddddddddddddddddddddddceeeefeebddb..
        ..ddddddddddddddddddddddddbeeccfdddddc.
        .cdddddddddddddddddddddddddddddc.cdddd.
        .ddddddddddddddddddddddddddddddd...bddc
        cddddddddddddddddddddddddddddddd....bdc
        cdddddddddcdddddddddcccdddddddddc....bb
        bddddddddc1cddddddddccccddddddddd....cc
        ddddddddc11bdddddddbd1b1bbddddddd......
        ddddddcdddddcddddddc11ddddcdddddd......
        bddddb1db11cdcddddbb1cd1dc1bddddd......
        fdddddbc1111cdcdddcddb111d11fdddb......
        cdddddfc1111b11cbdc1db111b11cdddc......
        bbdddcbdcdbc1111dcd11bbdbc11fdddb......
        ccdddfcb1d111111111111ddd11dddddd......
        .cdddcdf11111ceeeeecb111111fdddb.c.....
        ..cdddc111111beeeeeed11111cdddd........
        c.cdddbb111111ceeeeb11111bddddc........
        ...bdddc1111111ddd111111dcdddd.........
        ....ddddc111111111111111bdddd..........
        ....cddbcbfbdd111111ddcfcddd...........
        .....bdfcc1dcfffcccccbcfcfcd...........
        .....cdd11ddccfeeefcdd1dcbfd...........
        ....bcdf11cd111dd11ddd1dfccc...........
        ...c11ccd1feeeffcbbddb1dd111c..........
        ..bb11111beeeeeeeeeeec111111d..........
        .b1dc111c.eeeeeeeeeee.c1111bbd.........
        b111bd1...eeeeeeeeeee...11cd11d........
        cddc.....eeeeeeeeeeee.......bdd........
        .........eeeeeeeeeeee..................
        .........eeeeeeeeeeee..................
        .........eeeeeeeeeeeec.................
        ........eeeeeeeeeeeeee.................
        ........eeeeeeeeeeeeee.................
        ........eeeeeeeeeeeeee.................
        .........eeeeeeeeeeeee.................
        ........c7cfceeeeeeeee.................
        ........7777......ccc..................
        ........7777.....c777c.................
        ........777c......777c.................
        ........777.......c77c.................
        .......cccc.......c777.................
        .......eee........cbcc.................
        ...................eee.................
        .......................................
        `)
    LINE.setImage(assets.image`myImage0`)
    pause(500)
    LINE.setImage(assets.image`myImage0`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    roseleft.setImage(assets.image`roseright`)
    // once you match it'll revert back to the original sprite
    LINE.setImage(assets.image`myImage0`)
    pause(500)
    LINE.setImage(assets.image`myImage0`)
})
function updSCORE (note: Sprite) {
    if (Math.abs(note.y - LINE.y) <= 6.333333333333333) {
        info.changeScoreBy(5)
        epl.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 3 3 3 . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . 3 . . . . . . . . 
            . . . . . 3 3 3 . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (Math.abs(note.y - LINE.y) >= 9.777777777777779) {
        info.changeScoreBy(3)
        epl.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . 3 3 3 3 . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else {
        info.changeScoreBy(10)
        epl.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 3 . . . . . . . 
            . . . . . 3 3 . . 3 3 . . . . . 
            . . . . . 3 3 . . . 3 3 . . . . 
            . . . . . 3 3 . . . . 3 . . . . 
            . . . . . 3 3 . . . . 3 . . . . 
            . . . . . 3 3 . . . 3 . . . . . 
            . . . . . 3 3 3 3 3 . . . . . . 
            . . . . . 3 3 . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . 3 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.ghost, function (sprite, otherSprite) {
    if (controller.left.isPressed() || controller.right.isPressed()) {
        updSCORE(sprite)
        sprites.destroy(sprite, effects.spray, 500)
    }
})
let projectile: Sprite = null
let epl: Sprite = null
let LINE: Sprite = null
let roseleft: Sprite = null
scene.setBackgroundImage(img`
    bbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccceeeeeeecccecccccccceecccccccccc
    bbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbccccccccccccccccccccccceeeeeeeeecceeeeeeeeeeeeccccccccc
    bbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbccbbbbbbcccccccccccccccccccccccccccceeeeeccceeeeeeeeeeeeeecccccccc
    bbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddbbbdbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccceeeeeccceeeeeeeeeeeeeeccceeecc
    bbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddbbddddddbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccceeeeeeccceeeeeeeceeeeeecccccccc
    bbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccecccccceeeeeeeeeeeeccccccccc
    bbbbbbbbbbbbbbbbbbbbddddddddddddddbdddddbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeccccccccc
    bbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeccc
    bbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeccc
    bbbbbbbbbbbbbbbbbbbbbbddddddbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccceeccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbccccccccccccccccccccccccccccccccccccccccccfffffffccccfccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcccccccccccccccccccccccccccccccfffffffffffffcccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccffffffffffffffffccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccceeeeeeeccccccccccffffffffffffffffffccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbddddddddddddbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccceeeeeeeeeeeeeeccccccfffffffffffffffffffc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbddddddddddddbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeccccccceeeeeeeeeeeeeeeeeeccffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbdddddddddddddbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeecccccceeeeeeeeeeeeeeeeeeeecccccffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbbbdddddddddddddbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeccccccceeeeeeeeeeeeeeeeeeeeeeeccccfffffffffffff
    bbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeecffffffffff
    bbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccffffff
    bbbbbccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbebbbbbbbbcccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccffff
    cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbddbbbbbbbbbbbbbbbbbbbccbbcccccccccccbbbccccceeeeeeeeeccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccf
    ccccccccccccccbbbcccbccccbbbbbbbbbbbbbbbbbbddbbbbbbbbbddbbbbbbbbbbbbbbbbbbcbbbbbccccccbccbbbeceeeeeceeeeeecccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
    ccccccccccccbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeecccccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc
    ccccccccccbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccceeecceeecccccccceeeeeeeeeeeeeeeeeeeecccc
    cccccccccbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccbccccccccccccccceeeeeeeeeeccccccccceeeeeeeeeeeeeeeeecccc
    cccccccbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeeeeeeeeeeecccceecccccccceeeeeccccc
    cccccccbbbbbbbbbbbbcccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccccceeeeeeeeeeeeeeccffccfccccccccccc
    cccccccbbbbbbbbbbbbbccccccccccbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffcccccccceeeeeeeeecccfcccccccccc
    cccccccbbbbbbbbbbbbbccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffccccecceeeeeeccccffffcc
    cccccccccbbbbccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffccccccccccccffff
    cccccccccbbbcccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffccccccccccc
    ccccccccccbcccbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffccccccc
    ccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcffffcccffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcffffcccffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffcccffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffccfffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccbd1bccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccc1111ccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccb1d11dccccccccccccccdccbccccccccccccccccccccccccccccccccffffffcccfffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccd1dd11bcccccccccccbb1bddbbbccccccccccccccccccccccccccccfffcfffccccffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccc1dddd11bcccccccbbdd1111ddddddbbbbbccccccccccccccccccccccbccfffcccfffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccb1dbbdbd1dcccbbddd1111111111dddddddbcccccccccccccccccccdddbcffffccfcccfffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccddbbbbddddddddd1111111111111dddddd1dbcccccccccccccccccdddbbeffffccccccfffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccddbbbdddd1111111111111111111d1dddddddddbccccccccccccbdddbbcccfffccccccfffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccddbbbbdd111111111111111111111111ddddddddbccccccccccdddddbbcccfffcccccffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccbddbbbdd1111111111111111111111111dddddddddbbbcccccbdddddbdccccffccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccddbbdd11111111111111111111111111111dddddddddbbbbddddddddbccccffccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccddbdd111111111111111111111111111111ddddddddddddddddddddbbeeecffccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccbddd1111111111111111111111111111111ddd1ddddddbddddddddbbbeeecccccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccbdd11111111111111111d111111111111111dd1ddddddddbdddddbbbeeeecccccccccffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccbdd1111111111111111111111111111111111111ddddddddbbddddbbeeeeecccccccffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccccdddd11111111111111111d11111111111d11d1111dddddddbbbbddbbbeeeccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccbbdd11d111111d11111111111111111111ddd1ddd11dddddddbbbbddbbbeeccccccccccfffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccbd111dd111ddddd1111111111111d11111d1ddddddddddddddbbbbbbddbeeeccccccccccffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccccdd111dd1ddddddd11111111111111111111ddddddddddd11ddbbbbbbbdbbecccccccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccbddd11db1ddddddd11111111111111111111dddbbbdbbdd11ddbbbbbbbbbbbcccccccccccffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccccb11d11dbdddddddd111111111111111111111dbbbbbbbddd1dbbbbbbbbbcebeecccceecccffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccbddddd1dbdddddddd111111111111111111d1ddbbbbbbbdddddbbbbbbbbbbeeeccccceecccffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccccbdddddddbddddddddd1111111111111111111ddbbbbbbbbdbdbbbbbbbbbbbeeeccccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccccbbdddbbbdbddddddddd1111111111d1111111dddbbbbcbbbbbbbebbbbbbbbbeeeecccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccccbbdbbbbbbdbdbdddddd11111111111d1111111dddbbbbceeebbbccebbbbbbbbbeeecccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbbddbbbbbbdbbbbddddd11111111111d1111111dddbbcccceebbeccccbbbbbbbeeeccccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbdddbbcccbbbbbbbdddd11111111111d1111111dddbbccccccccccccccbbbbbbcecccccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbddbbcccccbbbbbbdddd1111111111111111111dddbbbcccccccccccccbbbbbbcccccccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbddbbcccbcbbbbbbddd111111111111111111111d1bbccccccccccccccbbbbbbcccccccceecffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbddbbcccbccbbbbbddd111111111111111111111ddbbcccccccccccccccbbbbbbccccccceecffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbddbbbccbccbbbbdd11111111111111111111111ddbbccccccccccccccccccbbbccccccceecffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbdddbbccccccdddd1111111111111111111111ddddbbcccccccccccccccccccccccccccceecffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbddddbccccccddd11111111111111111111111dd1dbbcccccccccccccccccccccccccccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccbdddbbccccccdd11111111111111111111111dddddbbbccccccccccccccccccccccccccceeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccddddbbcccccb1111111111111111111111111dddddbbbeccccccccccccccccccccccccceeeccfffffffffffffffffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccccccccccccddddbdbcccbd1111111111111111111111111dddddbbbeccccccccccccccccccccccccceeeccfffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccbddddbdbcccbd1111111111111111111111111dddddbbbeecccccccccccccccccccccccceeecccffffffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccccccccccccbddddbbbccbdd1111111111111111111111111dddddbbbeeeccccccccccccccccccccccceeecccccccffffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccc11dccccccbddddbbdccbdd1111111111111111111111111ddddbbbbeeebeccccccccccccccccccccceeecccccccccffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccc11d11ccccdddddbbbbbbd11111111111111111111111111ddddbbbbeebbbccccccccccccccccccccceeecccccccccffffffffffffffffffffffffffffffffffffffff
    cccccccccccccccccccccccccc11d11bccbdddddbbbbbdd11111111111111111111111111ddddbbbbebbbbeeccccccccccccccccccceeecccccccccfffccccfffffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccd1d11bcbbddddddbbbbdd11111111111111111111111111ddddbbbbbbbbbecccccccccccccccccccceeeccccccccffccccccccfffffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccb1d11dbbbddddddbbbbdd1111111111111111111111111dddddbdbbbbbdbbcccccccccccccccccccceeeeecccccccccccccccccccffffffffffffffffffffffffffff
    ccccccccccccccccccccccccccb1111dbbddddbbdbbbbd11111111111111111111111111dddddbdbbbbddbbecccccccccccccccccceeeeeeeeecccccccccccccccccccccccfffffffffffffffffffff
    cccccccccccccccccccccbeeebb11111bbddddbbbbbbbd11111111111111111111111111ddddddddbbbdddbeeccccccccccccccccceeeeeeeeccccccccccccccccccccccccccccfccfffcffffffffff
    cccccccceccccccceebcbbeeeeb11111bdddddbbbbbbbd111111111111111111111111d1ddddddddbbddddbbeccccccccccccccccceeeeeeeeccceeeeeeccccccccccccccccccccccccccffffffffff
    cccccceeeeccceeeceeeebbbbbb11d11bdddddbbbbbbd111111111111111111111111111ddddddddbddddddbeccccccccccccccccceeeebeeccceeeeeeeeeeecccccccccccccccccccccffffcccffff
    cccccccccccecbeeceebbbbbbbbb1d11bdddddbbbbbbd111111111111111111111111111dddddddddddddddbbeccccccccccccccccbbbbbbbeeeeeeeeeeeeeeeeeecccccccccccccccccccccccccccc
    cccccccbbbcbeeeebbbbbbbbbbbbdd11dddddddbbbbbd111111111111111111111111111dddddbbdddddddddbeccccccccccccccccebbbbbbeeeeeeeeeeeeeeeeeeeeeceecccccccccccccccccccccf
    ccccccccbccbbbbbebbbbebbbbbbbddddddddddbbbbbd111111111111111111111111111dddbbbbdddddddddbeccccccccccccccccebbbddbbbeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccccc
    ccccbcbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbdbbbbd1111111111111111111111111111dddbbbbddddddddddeecccccccccccccccebbbdbbbbeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccccccc
    cccbbbcbebbbbbbbbbbbbbbbbbbbdbbbdddddbbbbbbd11111111111111111111111111111dddbdbddddddddddbecccccccccccccccebbbdbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccc
    bccbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdddddbbbbbb111111111111111111111111111111dddbdbddddddddddbecccccccccccccccebbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccccccccc
    bbcbbbbbbbbbbbbbbbbbbbbddbbbbbbbdddddbbbbbd111111111111111111111111111111dddbdbddddddddddbcccccccccccccccccebbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbd111111111111111111111111111111dddddbddddddddddbeecccccccccccccccbbbbbbbbbceeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdddbbbbbd11111111111111111111111111111111ddddbdddddddddddbecccccccccccccccebbbbbbbbcbbbeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddbbbbbd111111111111111111111111111111d1ddddbdddddddddddbecccccccccccccccebbbbbbbbeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeceeecccccccc
    dbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddbbbd1111111111111111111111111111111ddddddddddddddddddbeccccccccccccccceebbbeebeeebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccccc
    dddbbbbbbbbbbbbbbbbbbdbbbbbbdddddddddbbbd1111111111111111111111111111111ddddddddddddddddddbeccccccccccccccceebebbeebbeeeeebbbbeebeeeeeeeeeeeeeeecceeeeeeeeccccc
    dddddbbbbbbbbbbbdbbbdbbbdbdbdddddddddbbbd1111111111111111111111111111111dddddddddddddddddbbeeccccccccccccccebbbbebbbeeebbbbbebeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    dddddddbbbbbbbbbbdbbbbbdddddbddddddddbbdd1111111111111111111111111111111dddddddddddddddddbbbeccccccccccccccebbbbbbbbebbbeebbbbbebeeeeebeeeeeeeeeeeeeeeeeeeeceec
    ddddddddddddbbbbbbbbbbbddddbddddddddbbbdd1111111111111111111111111111111ddddddddbddddddddbbbecccccccccccccceeebebebbbbbbebbeebbebbeeeeeeeeebeeeeeeeeeeeeeccceee
    dddddddddddddbdddddddddddddbd1ddddddbbbd1111111111111111111111111111111ddddddddbbddddddddbbbeccccccccccccccebebebeebbbbbebebbebebbebbeeeeeeeeeeeeeeeeeeeeeeeeee
    dddddddddddddddddddddddddddddddddddddbbd1111111111111111111111111111111ddddddddbbbdddddddbbbecccccccccccccceebbbbbbdbbbebbbebbbbeebbebbeeeeeeeebeeeeeeeeeeeeeee
    ddddddddddddddddddddddd1ddddddddddddbbdd1111111111111111111111111111111ddddddddbbbdddddddbbbeeccccccccccccceeebbbebbbbbbbebbbbbebbbeebbbbebeeeeebeeeeeeeeeeeeee
    ddddddddddddd11d1111ddddddddddd1ddddbbdd1111111111111111111111111111111ddddddddbbbdddddddbbbeeccccccccccccceeebbbbebbbbbebbebbbebdbeebbeeeebbeebeeeeeeeeeeeeeee
    dddddddddddd1111111111dddddddddddddddbd111111111111111111111111111111111dddddddbbbdddddbbbbbeeccccccccccccceeeebebbbbbbbbebbbbbbbbbbbbbbbeebeeeeeeeeeeeeeeeeeee
    dddddddddddd111111111ddddddd1dddddddddd111111111111111111111111111111111dddddbbbbbdbbbbbbbbbeeccccccccccccceeeebbbbbbbbbbbbbbbbbbbbbebebbeebeeeeeeeeeeeeeeeeeee
    ddddddddddddd1111111ddddddd111ddddddddd111111111111111111111111111111111ddddbbbbbbdbbbbbbbbbeecccccccccccccebbbbbdbbbbbbbbbebbbddbbbbbbbebebebeeeeeeeeeeeeeeeee
    ddddddddd1ddd1111ddddddddd1111ddddddddd111111111111111111111111111111111ddddbbbbbbdbbbbbbbbbeecccccccccccccebbdbbbbdbbbdbbbbbbbbbbbbbebbeeeebeeebeeeeeeeeeeeeeb
    `)
roseleft = sprites.create(img`
    ...........ccbbbbcc....................
    ........bdddddddddddddb................
    ......cddddddddddddddddddc.............
    .....bddddddddddddddddddbfe............
    ....ddddddddddddddddddddfeee.e.ee.c....
    ...bddddddddddddddddddddfeeeefeee.db...
    ..cddddddddddddddddddddddceeeefeebddb..
    ..ddddddddddddddddddddddddbeeccfdddddc.
    .cdddddddddddddddddddddddddddddc.cdddd.
    .ddddddddddddddddddddddddddddddd...bddc
    cddddddddddddddddddddddddddddddd....bdc
    cdddddddddcdddddddddcccdddddddddc....bb
    bddddddddc1cddddddddccccddddddddd....cc
    ddddddddc11bdddddddbd1b1bbddddddd......
    ddddddcdddddcddddddc11ddddcdddddd......
    bddddb1db11cdcddddbb1cd1dc1bddddd......
    fdddddbc1111cdcdddcddb111d11fdddb......
    cdddddfc1111b11cbdc1db111b11cdddc......
    bbdddcbdcdbc1111dcd11bbdbc11fdddb......
    ccdddfcb1d111111111111ddd11dddddd......
    .cdddcdf11111ceeeeecb111111fdddb.c.....
    ..cdddc111111beeeeeed11111cdddd........
    c.cdddbb111111ceeeeb11111bddddc........
    ...bdddc1111111ddd111111dcdddd.........
    ....ddddc111111111111111bdddd..........
    ....cddbcbfbdd111111ddcfcddd...........
    .....bdfcc1dcfffcccccbcfcfcd...........
    .....cdd11ddccfeeefcdd1dcbfd...........
    ....bcdf11cd111dd11ddd1dfccc...........
    ...c11ccd1feeeffcbbddb1dd111c..........
    ..bb11111beeeeeeeeeeec111111d..........
    .b1dc111c.eeeeeeeeeee.c1111bbd.........
    b111bd1...eeeeeeeeeee...11cd11d........
    cddc.....eeeeeeeeeeee.......bdd........
    .........eeeeeeeeeeee..................
    .........eeeeeeeeeeee..................
    .........eeeeeeeeeeeec.................
    ........eeeeeeeeeeeeee.................
    ........eeeeeeeeeeeeee.................
    ........eeeeeeeeeeeeee.................
    .........eeeeeeeeeeeee.................
    ........c7cfceeeeeeeee.................
    ........7777......ccc..................
    ........7777.....c777c.................
    ........777c......777c.................
    ........777.......c77c.................
    .......cccc.......c777.................
    .......eee........cbcc.................
    ...................eee.................
    .......................................
    `, SpriteKind.Player)
LINE = sprites.create(assets.image`myImage0`, SpriteKind.ghost)
epl = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let list2 = [assets.image`myImage1`, assets.image`myImage2`]
LINE.setPosition(50, 100)
roseleft.setPosition(135, 70)
epl.setPosition(136, 20)
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.LoopingInBackground)
info.setScore(0)
game.onUpdateInterval(music.beat(BeatFraction.Double), function () {
    projectile = sprites.createProjectileFromSide(list2[randint(0, 1)], 0, 50)
    projectile.setPosition(50, 0)
})
