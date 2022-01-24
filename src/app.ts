// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [new HumanHero(1,'Jack','m',7,7),new HumanHero(2,'Jhon','m',8,8),new HumanHero(3,'Jill','f',9,9)];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [new TransformerHero(1,'Omicron',2,3,'corona'),new TransformerHero(2,'delta',2,4,'corona'),new TransformerHero(3,'gamma',2,6,'corona')];
