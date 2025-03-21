import { Point } from "./point";
import { Rectangle } from "./rectangle";

export class Square extends Rectangle{

    constructor(
        point: Point, longueur : number){
        super(point, longueur, longueur);
    }

    public setLargeur(larg: number): void {
        super.setLargeur(larg);
        super.setLongueur(larg)
    }

    public setLongueur(long: number): void {
        super.setLongueur(long);
        super.setLargeur(long)
    }


    public toString(): string {
        return `Carré d'origine ${this.getOrigin().toString()}, de côté ${this.getLongueur()}`
    }
}