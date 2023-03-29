export class Candidat {
  constructor(
    public _id: string,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {}
}
// Version avec JS
// export class Candidat {
//   public _id;
//   public prenom;
//   public nom;

//   constructor(_id, prenom, nom) {
//     this._id = _id;
//     this.prenom = prenom;
//     this.nom = nom;
//   }
// }
