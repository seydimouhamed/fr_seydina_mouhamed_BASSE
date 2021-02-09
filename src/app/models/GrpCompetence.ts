import { Competence } from './Competence';
import { Tag } from './Tag';

export class GrpCompetence {
  id?: number;
  libelle?: string;
  descriptif?: string;
  referentiels?: [];
  competences?: Competence[];
  tags?: Tag[];
}
