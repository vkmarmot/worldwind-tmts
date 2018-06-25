import { Tile, Logger, ArgumentError } from "@nasaworldwind/worldwind";

export class TmtsTileUrlBuilder {
    constructor(
        private readonly url: string,
        private readonly ext: string='png'
    ){};

    /**
     * Creates the URL string for a WMS Get Map request.
     * @param {WorldWind.Tile} tile The tile for which to create the URL.
     * @throws {WorldWind.ArgumentError} If the specified tile or image format are null or undefined.
     */
    public urlForTile (tile: Tile): string {
        if (!tile) {
            throw new ArgumentError("aaa");
            // throw new ArgumentError(
            //     Logger.logMessage(Logger.LEVEL_SEVERE, "TmtsTileUrlBuilder", "urlForTile", "missingTile"));
        }
        const {
            sector,
            level,
            row,
            column,
            tileWidth,
            tileHeight
        } = tile;

        let number = 256 * level.texelSize;
        var d = Math.PI / 180,
            max = 85.05,
            lat = Math.max(Math.min(max, tile.level.sector.maxLatitude), -max),
            x = Math.round(tile.level.sector.minLongitude * d / number),
            y = lat * d;

        y = Math.round(Math.log(Math.tan((Math.PI / 4) + (y / 2))) / number);

        return `${this.url}/${level.levelNumber}/${(column - x)}/${((1 << level.levelNumber) - ((row - y) + 1))}.${this.ext}`;

    }
}
