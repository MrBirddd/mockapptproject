@namespace
class SpriteKind:
    ghost = SpriteKind.create()

def on_left_pressed():
    roseleft.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    roseleft.set_image(assets.image("""
        roseright
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite, otherSprite):
    if True:
        pass
    else:
        pass
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap)

projectile: Sprite = None
roseleft: Sprite = None
roseleft = sprites.create(img("""
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
    """),
    SpriteKind.player)
roseleft.set_position(135, 70)
LINE = sprites.create(img("""
        ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
    """),
    SpriteKind.ghost)
list2 = [sprites.castle.skelly_walk_left2,
    sprites.castle.skelly_walk_right1]
LINE.set_position(50, 20)
tiles.set_current_tilemap(tilemap("""
    level1
"""))

def on_update_interval():
    global projectile
    if Math.percent_chance(66):
        projectile = sprites.create_projectile_from_side(list2[randint(0, 1)], 0, -50)
        projectile.set_position(50, 120)
game.on_update_interval(1000, on_update_interval)
