export interface Etudiant {
    id: number,
    nom: string,
    prenom: string,
    age: string,
    email?: string,
    qualites?:Array<string>
}