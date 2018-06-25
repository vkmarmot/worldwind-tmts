import { MercatorTiledImageLayer, Tile, Location, Sector } from "@nasaworldwind/worldwind";
import { TmtsTileUrlBuilder } from "./TmtsTileUrlBuilder";

let DEFAULT_IMAGE_SIZE = 256;

export class TmtsLayer extends MercatorTiledImageLayer {
    private readonly imageSize: number;
    private readonly urlBuilder: TmtsTileUrlBuilder;
    private readonly topLevelTiles: Tile[] = [];

    constructor(url: string, sector: Sector, levelZeroDelta: Location, numLevels: number, ext:string='jpg', imageSize: number = DEFAULT_IMAGE_SIZE) {
        super(sector, levelZeroDelta, numLevels, "image/"+ext, "TMTS layer",
            imageSize, imageSize);

        this.imageSize = imageSize;
        this.urlBuilder = new TmtsTileUrlBuilder(url, ext);
    }

    public createTopLevelTiles(): void {
        this.topLevelTiles.push(this.createTile(null, this.levels.firstLevel(), 0, 0));
        this.topLevelTiles.push(this.createTile(null, this.levels.firstLevel(), 0, 1));
        this.topLevelTiles.push(this.createTile(null, this.levels.firstLevel(), 1, 0));
        this.topLevelTiles.push(this.createTile(null, this.levels.firstLevel(), 1, 1));
    }

    public mapSizeForLevel(levelNumber: number): number {
        return 256 << levelNumber;
    }
}

