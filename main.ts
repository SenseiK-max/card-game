namespace SpriteKind {
    export const CardDisplayOpening = SpriteKind.create()
    export const Card = SpriteKind.create()
}
function OnScreenAnimation (TimeToLast: number) {
    scene.setBackgroundColor(7)
    AceD = sprites.create(assets.image`myImage0`, SpriteKind.CardDisplayOpening)
    AceD.setPosition(20, 20)
    AceD.setVelocity(50, 50)
    AceD.setBounceOnWall(true)
    AceH = sprites.create(assets.image`myImage1`, SpriteKind.CardDisplayOpening)
    AceH.setPosition(140, 20)
    AceH.setVelocity(-50, 50)
    AceH.setBounceOnWall(true)
    AceS = sprites.create(assets.image`myImage2`, SpriteKind.CardDisplayOpening)
    AceS.setPosition(20, 100)
    AceS.setVelocity(50, -50)
    AceS.setBounceOnWall(true)
    AceC = sprites.create(assets.image`myImage3`, SpriteKind.CardDisplayOpening)
    AceC.setPosition(140, 100)
    AceC.setVelocity(-50, 50)
    AceC.setBounceOnWall(true)
    pause(TimeToLast)
    sprites.destroyAllSpritesOfKind(SpriteKind.CardDisplayOpening)
}
function GenerateDeckOfCards () {
    Ace_Array = [
    assets.image`myImage0`,
    assets.image`myImage1`,
    assets.image`myImage3`,
    assets.image`myImage52`
    ]
    Two_Array = [
    assets.image`myImage4`,
    assets.image`myImage53`,
    assets.image`myImage54`,
    assets.image`myImage6`
    ]
    Three_Array = [
    assets.image`myImage8`,
    assets.image`myImage9`,
    assets.image`myImage11`,
    assets.image`myImage10`
    ]
    Four_Array = [
    assets.image`myImage12`,
    assets.image`myImage13`,
    assets.image`myImage15`,
    assets.image`myImage14`
    ]
    Five_Array = [
    assets.image`myImage16`,
    assets.image`myImage17`,
    assets.image`myImage19`,
    assets.image`myImage18`
    ]
    Six_Array = [
    assets.image`myImage20`,
    assets.image`myImage21`,
    assets.image`myImage23`,
    assets.image`myImage22`
    ]
    Seven_Array = [
    assets.image`myImage24`,
    assets.image`myImage25`,
    assets.image`myImage27`,
    assets.image`myImage26`
    ]
    Eight_Array = [
    assets.image`myImage36`,
    assets.image`myImage37`,
    assets.image`myImage39`,
    assets.image`myImage38`
    ]
    Nine_Array = [
    assets.image`myImage40`,
    assets.image`myImage41`,
    assets.image`myImage43`,
    assets.image`myImage42`
    ]
    Ten_Array = [
    assets.image`myImage44`,
    assets.image`myImage45`,
    assets.image`myImage47`,
    assets.image`myImage46`
    ]
    Jack_Array = [
    assets.image`myImage48`,
    assets.image`myImage49`,
    assets.image`myImage51`,
    assets.image`myImage50`
    ]
    Queen_Array = [
    assets.image`myImage28`,
    assets.image`myImage29`,
    assets.image`myImage31`,
    assets.image`myImage30`
    ]
    King_Array = [
    assets.image`myImage35`,
    assets.image`myImage33`,
    assets.image`myImage34`,
    assets.image`myImage32`
    ]
    Deck_of_Cards = [
    Ace_Array,
    Two_Array,
    Three_Array,
    Four_Array,
    Five_Array,
    Six_Array,
    Seven_Array,
    Eight_Array,
    Nine_Array,
    Ten_Array,
    Jack_Array,
    Queen_Array,
    King_Array
    ]
    return Deck_of_Cards
}
function DealCards (numberOfPlayers: number, cardsToDeal: number) {
    game.splash("Time to play")
    cardsDealt = []
    for (let index = 0; index <= numberOfPlayers; index++) {
        playersHand = []
        for (let index2 = 0; index2 < cardsToDeal; index2++) {
            playersHand.push(spriteDeck.removeAt(randint(0, spriteDeck.length - 1)))
        }
        for (let index = 0; index <= cardsToDeal; index++) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Player)
            mySprite.setPosition(15 + index * mySprite.width, 95)
            mySprite.setFlag(SpriteFlag.Invisible, false)
            pause(200)
        }
    }
}
let mySprite2: Sprite = null
let playersHand: Sprite[] = []
let cardsDealt: number[] = []
let Deck_of_Cards: Image[][] = []
let King_Array: Image[] = []
let Queen_Array: Image[] = []
let Jack_Array: Image[] = []
let Ten_Array: Image[] = []
let Nine_Array: Image[] = []
let Eight_Array: Image[] = []
let Seven_Array: Image[] = []
let Six_Array: Image[] = []
let Five_Array: Image[] = []
let Four_Array: Image[] = []
let Three_Array: Image[] = []
let Two_Array: Image[] = []
let Ace_Array: Image[] = []
let AceC: Sprite = null
let AceS: Sprite = null
let AceH: Sprite = null
let AceD: Sprite = null
let mySprite: Sprite = null
let cardValue = 0
let spriteDeck: Sprite[] = []
OnScreenAnimation(10000)
let deck = GenerateDeckOfCards()
scene.setBackgroundColor(9)
spriteDeck = []
for (let SubDeck of deck) {
    cardValue = 1
    for (let index = 0; index <= 3; index++) {
        mySprite = sprites.create(SubDeck[index], SpriteKind.Card)
        sprites.setDataNumber(mySprite, "cardValue", cardValue)
        sprites.setDataNumber(mySprite, "suitValue", index)
        mySprite.setFlag(SpriteFlag.Invisible, true)
        spriteDeck.unshift(mySprite)
    }
}
DealCards(1, 5)
