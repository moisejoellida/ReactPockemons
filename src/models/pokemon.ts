export default class Pokemon {
    // 1. Typage des propriétés d'un pokemon

    id: number;
    hp: number;
    cp: number;
    name: String;
    picture: String;
    types: Array<string>;
    created: Date;

    // 2. Définition des valeurs par défaut d'un pokemon

    constructor(
        id: number,
        hp: number = 100,
        cp: number = 10,
        name: string = 'name',
        picture: string = 'http//...',
        types: Array<string> = ['Normal'],
        created: Date = new Date()
        ){
        // 3. initialisation des propriétés d'un pokemon

        this.id = id;
        this.cp = cp;
        this.hp = hp;
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;

        }
}