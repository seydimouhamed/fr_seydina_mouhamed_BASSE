import { Referentiel } from './Referentiel';
export class Promo{
  id?: number;
  langue: string;
  description: string;
  fabrique: string;
  status: string;
  avatar: any;
  titre: string;
  lieu: string;
  critereevaluation: string;
  dateDebut: Date;
  dateFinPro: Date;
  dateFinReelle?: Date;
  referentiel: Referentiel;
}
