import { Code, Button, SimpleGrid } from "@mantine/core";
import { useHotkeys, useInterval } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Field } from "../../classes/Field";
import { Unit } from "../../classes/Unit";
import { liner, border, spacer } from "../../utils/table_design_logic";

// need to figure out how to have a reactive map...

// reusing code from game one
    // Objects need to be placed outside the function to retain state...
function makeField (xLengthField: number, yLengthField: number) {
    return new Field(xLengthField,yLengthField);
};

    const xLength = (length: number) => Math.ceil(Math.random() * length) // can't make it too long for mobile
    const yLength = (length: number) => Math.ceil(Math.random() * length)

    const field = makeField(xLength(4),yLength(7));

function makePlayer (map: Field, startPositionX: number, startPositionY: number, hp: number, attack: number, char: string) {
    return new Unit(map, startPositionX, startPositionY, hp, attack, char)
}; 

    const cpu = () => {

        let x = Math.floor(Math.random() * 4);

        (x === 0) 
        ? playerTwo.incrementPositionXMinus()
        : (x === 1)
        ? playerTwo.incrementPositionYMinus()
        : (x === 2)
        ? playerTwo.incrementPositionXPlus()
        : playerTwo.incrementPositionYPlus()

        playerTwo.attackOpponent(playerOne)
    }

function difficulty (attacks: number) {
    for (let index = 0; index < attacks; index++) {
        cpu()
    }
};

    const level = difficulty(Math.ceil(Math.random() * 4))

    const playerOne = makePlayer(field, 0, 0, 100, 10, "X");
    const playerTwo = makePlayer(field, field.getX, field.getY, 100, 10, "O");

export default function GAME_THREE() {

    useHotkeys([
        ["ArrowDown", () => down()],
        ["ArrowUp", () => up()],
        ["ArrowLeft", () => left()],
        ["ArrowRight", () => right()],
    ]);

    const ifPlayerPositionXY = 
        (player: Unit) => {
            return (xPosition: number, yPosition: number) => {
                
                return (xPosition === player.getCurrentPositionX && yPosition === player.getCurrentPositionY)
                ? border([
                    spacer(player.getAvatar,9,"left")
                ])
                : border([
                    spacer("",9,"left")
                ]);
            }
        }
    
    const playerOnePosition = ifPlayerPositionXY(playerOne);
    const playerTwoPosition = ifPlayerPositionXY(playerTwo);

// need to solve this...
// need parameters to create the map...
const visualField = (xLengthLocal: number, yLengthLocal: number): string => {

    let mapArray: string[] = Array.from({length:yLengthLocal+1},(v,i) => {

        let p1: string = Array.from({length:xLengthLocal+1},(w,j) => {
            return playerOnePosition(j,i);
        }).reduce((acc, next) => acc + next)

        let p2: string = Array.from({length:xLengthLocal+1},(w,j) => {
            return playerTwoPosition(j,i);
        }).reduce((acc, next) => acc + next)

        let mapLines = "−".repeat(12 * (xLengthLocal +1)); 

        return (i === yLengthLocal) 
            ? mapLines + "\n" + p1 + "\n" + p2 + "\n" + mapLines 
            : mapLines + "\n" + p1 + "\n" + p2 + "\n"
    });
    
    return mapArray.reduce((acc,next) => acc + next)

};
// `−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
// ${playerOnePosition(0,0)}${playerOnePosition(1,0)}${playerOnePosition(2,0)}
// ${playerTwoPosition(0,0)}${playerTwoPosition(1,0)}${playerTwoPosition(2,0)}
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
// ${playerOnePosition(0,1)}${playerOnePosition(1,1)}${playerOnePosition(2,1)}
// ${playerTwoPosition(0,1)}${playerTwoPosition(1,1)}${playerTwoPosition(2,1)}
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−
// ${playerOnePosition(0,2)}${playerOnePosition(1,2)}${playerOnePosition(2,2)}
// ${playerTwoPosition(0,2)}${playerTwoPosition(1,2)}${playerTwoPosition(2,2)}
// −−−−−−−−−−−−−−−−−−−−−−−−−−−−−−−`;

const displayHP = () => 
`------------------------------
| Player X: ${playerOne.getHitPoints}HP${" ".repeat(31 - (16 + playerOne.getHitPoints.toString().length))}|
| CPU O: ${playerTwo.getHitPoints}HP${" ".repeat(34 - (16 + playerTwo.getHitPoints.toString().length))}|
------------------------------
`;

    const [playerField, setPlayerField] = useState(visualField(field.getX,field.getY));

    const [hitPoints, setHitPoints] = useState(displayHP);

    const thisPosition = () => console.log(`x: ${playerOne.getCurrentPositionX}, y: ${playerOne.getCurrentPositionY}`);
    
    const right = () => {
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            // playerOne.moveAttackPlusX(playerTwo)
            playerOne.incrementPositionXPlus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            level
            setPlayerField(visualField(field.getX,field.getY))
            setHitPoints(displayHP);
    }

    const left = () => {
            // playerOne.moveAttackMinusX(playerTwo)
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            playerOne.incrementPositionXMinus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            level
            setPlayerField(visualField(field.getX,field.getY))
            setHitPoints(displayHP);
    }

    const up = () => {
            // playerOne.moveAttackMinusY(playerTwo)
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            playerOne.incrementPositionYMinus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            level
            setPlayerField(visualField(field.getX,field.getY))
            setHitPoints(displayHP);
    }

    const down = () => {
            // playerOne.moveAttackPlusY(playerTwo)
        if (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) {
            return
        }
            playerOne.incrementPositionYPlus()
            // thisPosition()
            playerOne.attackOpponent(playerTwo)
            level
            setPlayerField(visualField(field.getX,field.getY))
            setHitPoints(displayHP);
    }

    // const cpu = () => {

    //     let x = Math.floor(Math.random() * 4);

    //     (x === 0) 
    //     ? playerTwo.incrementPositionXMinus()
    //     : (x === 1)
    //     ? playerTwo.incrementPositionYMinus()
    //     : (x === 2)
    //     ? playerTwo.incrementPositionXPlus()
    //     : playerTwo.incrementPositionYPlus()

    //     playerTwo.attackOpponent(playerOne)
    // }

const gameOverOne = 
`--------------------------------
| You struggled and lost.      |
|                              |
| Game Over                    |
--------------------------------`; 

const gameOverTwo = 
`--------------------------------
| You struggled to win.        |
|                              |
| Game Over!                   |
--------------------------------`; 

    return (
        <div>
            <Code block>
                {(playerTwo.getHitPoints <= 0) ? gameOverTwo : (playerOne.getHitPoints <= 0) ? gameOverOne : playerField}
                <br />
                {hitPoints}
            </Code>
            { (playerOne.getHitPoints <= 0 || playerTwo.getHitPoints <= 0) ?
            <></>
            : <SimpleGrid cols={2}>
            <Button variant="outline" radius={"lg"} color="red"  onClick={up} fullWidth>
                Up
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={down} fullWidth>
                Down
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={left} fullWidth>
               Left 
            </Button>
            <Button variant="outline" radius={"lg"} color="red" onClick={right} fullWidth>
                Right
            </Button>
            </SimpleGrid>
            }
        </div>
    )
}