declare module '@nasaworldwind/worldwind' {
    export class Sector {
        public readonly maxLatitude: number;
        public readonly minLongitude: number;
    }
    export class Location {

    }
    export class Level {
        public readonly texelSize: number;
        public readonly levelNumber: number;
        public readonly sector: Sector;
    }
    export class Tile {
        public readonly level: Level;
        public readonly sector: Sector;
        public readonly row: number;
        public readonly column: number;
        public readonly tileWidth: number;
        public readonly tileHeight: number;
    }
    export class TextureTile extends Tile {

    }
    export class ImageTile extends TextureTile {

    }
    export class LevelSet {
        public firstLevel(): Level;
    }
    export class Logger {
        public static LEVEL_SEVERE: number;

        public logMessage(level: number, className: string, functionName: string, message: string): string;
    }
    export class ArgumentError {
        constructor(message: string);

    }
    export class TiledImageLayer {
        protected readonly levels: LevelSet;
        constructor(sector: Sector, levelZeroDelta: Location, numLevels: number, imageFormat: string, cachePath: string,
                    tileWidth: number, tileHeight: number);
        public createTile(sector: Sector | null, level: any, row: number, column: number): ImageTile;
    }
    export class MercatorTiledImageLayer extends TiledImageLayer {
        constructor(sector: Sector, levelZeroDelta: Location, numLevels: number, imageFormat: string, cachePath: string,
                    tileWidth: number, tileHeight: number);

    }
}
