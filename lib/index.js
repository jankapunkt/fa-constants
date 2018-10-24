import { fa } from './fa-constants';
import { toClass, toKey, has } from "./utils";

// decorate with classes
fa.toClass = toClass.bind(fa);
fa.toKey = toKey.bind(fa);
fa.has = has.bind(fa);

export { fa };