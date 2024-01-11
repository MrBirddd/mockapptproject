controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    roseleft.setImage(assets.image`roseleft`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    roseleft.setImage(assets.image`roseright`)
})
let roseleft: Sprite = null
roseleft = sprites.create(assets.image`roseleft`, SpriteKind.Player)
roseleft.setPosition(80, 90)
tiles.setCurrentTilemap(tilemap`level1`)
