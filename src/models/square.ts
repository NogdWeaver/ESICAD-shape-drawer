import { Point } from "./point";
import { Rectangle } from "./rectangle";

export class square extends Rectangle{

    private side: number;

    constructor(
        origin: Point = new Point(),
        side: number = 3,
    ){
        super(origin);
        this.side = side;
    }

    public getPerimetre(): number {
        return this.side * this.side;
    }

    public setside(verifside : number){
        if (verifside > 0 ) {
            this.side = verifside;
        }
    }

    public getside(){
        return this.side;
    }

    public toString(): string {
        return `Carré d'origine ${this.getOrigin().toString()}, de côté ${this.getside()}`
    }
}