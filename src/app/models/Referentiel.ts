import { GrpCompetence } from '@/app/models/GrpCompetence';

export class Referentiel{
  id?: number;
  libelle: string;
  presentation: string;
  programme: any;
  critereAdmission: string;
  critereEvaluation: string;
  grpCompetences?: GrpCompetence[];

}
