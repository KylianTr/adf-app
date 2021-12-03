import { TypeCollaborateur } from './typeCollaborateur';

export class CollaborateurModel {
    id : Number = 0;
    matricule: string = '';
    nom: string = '';
    prenom: string = '';
    dateDebut: string = '';
    dateFin: string = '';
    typeCollaborateur!: TypeCollaborateur;
    section: string = '';
    societe: string = ''
}