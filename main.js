
/**
 * Home Builder blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Breams.HomeBuilder {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */

    let walls = 0
    let floor = 0
    let roof = 0
    let startPosition: Position = null
    let roofStart: Position = null
    let tempStart: Position = null


    //% block
    export function BuildHome(width: number, length: number, height: number, wallsBlock: Block, floorBlock: Block, roofBlock: Block): void {
        walls = wallsBlock
        floor = floorBlock
        roof = roofBlock
        startPosition = positions.add(
            player.position(),
            posLocal(1, 0, 1)
        )
        roofStart = positions.add(
            startPosition,
            posLocal(0, height, 0)
        )
        blocks.fill(
            walls,
            startPosition,
            positions.add(
                startPosition,
                posLocal(length, height - 1, 0)
            ),
            FillOperation.Replace
        )
        blocks.fill(
            walls,
            startPosition,
            positions.add(
                startPosition,
                posLocal(0, height - 1, width)
            ),
            FillOperation.Replace
        )
        blocks.fill(
            walls,
            positions.add(
                startPosition,
                posLocal(length, 0, 0)
            ),
            positions.add(
                startPosition,
                posLocal(length, height - 1, width)
            ),
            FillOperation.Replace
        )
        blocks.fill(
            walls,
            positions.add(
                startPosition,
                posLocal(0, 0, width)
            ),
            positions.add(
                startPosition,
                posLocal(length, height - 1, width)
            ),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            positions.add(
                startPosition,
                posLocal(length / 2, 0, 0)
            ),
            positions.add(
                startPosition,
                posLocal(length / 2, 1, 0)
            ),
            FillOperation.Replace
        )
        blocks.fill(
            floor,
            positions.add(
                startPosition,
                posLocal(0, -1, 0)
            ),
            positions.add(
                startPosition,
                posLocal(length, -1, width)
            ),
            FillOperation.Replace
        )
        blocks.fill(
            AIR,
            positions.add(
                startPosition,
                posLocal(1, 0, 1)
            ),
            positions.add(
                startPosition,
                posLocal(length - 1, height - 1, width - 1)
            ),
            FillOperation.Replace
        )
        for (let index = 0; index <= width / 2; index++) {
            tempStart = positions.add(
                roofStart,
                posLocal(0, index, index)
            )
            blocks.fill(
                roof,
                tempStart,
                positions.add(
                    tempStart,
                    posLocal(length, 0, 0)
                ),
                FillOperation.Replace
            )
        }
        for (let index = 0; index <= width / 2; index++) {
            tempStart = positions.add(
                roofStart,
                posLocal(0, 0, index)
            )
            blocks.fill(
                roof,
                tempStart,
                positions.add(
                    tempStart,
                    posLocal(0, index, 0)
                ),
                FillOperation.Replace
            )
        }
        for (let index = 0; index <= width / 2; index++) {
            tempStart = positions.add(
                roofStart,
                posLocal(length, 0, index)
            )
            blocks.fill(
                roof,
                tempStart,
                positions.add(
                    tempStart,
                    posLocal(0, index, 0)
                ),
                FillOperation.Replace
            )
        }
        for (let index = 0; index <= width / 2; index++) {
            tempStart = positions.add(
                positions.add(
                    roofStart,
                    posLocal(0, 0, width)
                ),
                posLocal(0, index, index * -1)
            )
            blocks.fill(
                roof,
                tempStart,
                positions.add(
                    tempStart,
                    posLocal(length, 0, 0)
                ),
                FillOperation.Replace
            )
        }
        for (let index = 0; index <= width / 2; index++) {
            tempStart = positions.add(
                positions.add(
                    roofStart,
                    posLocal(0, 0, width)
                ),
                posLocal(0, 0, index * -1)
            )
            blocks.fill(
                roof,
                tempStart,
                positions.add(
                    tempStart,
                    posLocal(0, index, 0)
                ),
                FillOperation.Replace
            )
        }
        for (let index = 0; index <= width / 2; index++) {
            tempStart = positions.add(
                positions.add(
                    roofStart,
                    posLocal(0, 0, width)
                ),
                posLocal(length, 0, index * -1)
            )
            blocks.fill(
                roof,
                tempStart,
                positions.add(
                    tempStart,
                    posLocal(0, index, 0)
                ),
                FillOperation.Replace
            )
        }
        blocks.fill(
            SPRUCE_DOOR,
            positions.add(
                startPosition,
                posLocal(length / 2, 0, 0)
            ),
            positions.add(
                startPosition,
                posLocal(length / 2, 0, 0)
            ),
            FillOperation.Replace
        )
    }

   
}
