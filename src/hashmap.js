/*
vamos a usar una implementacion en particular: 
  la tabla va a tener 20000 elementos por lo que vamos a tomar el modulo del hash de cada key
  luego si caemos en la misma posicion vamos a usar un linkedlist para agrupar 
*/
import { LinkedList } from "../src/linkedlist.js";

export class HashMap {
  constructor(largo) {
    this.table = [];
    this.largo = largo ?? 20000;
  }
  set(key, value) {
    //primero obtengo el valor del hash del key
    let hash = hashAny(key);
    hash = Math.abs(hash);

    let valorEnTable = hash % this.largo;

    if (this.table[valorEnTable] == null) {
      this.table[valorEnTable] = new LinkedList();
      this.table[valorEnTable].append(new ClaveValor(key, value));
    } else {
      this.table[valorEnTable].append(new ClaveValor(key, value));
    }
  }

  get(key) {
    let hash = hashAny(key);
    hash = Math.abs(hash);

    let valorEnTable = hash % this.largo;

    if (this.table[valorEnTable] == null) {
      return;
    } else {
      try {
        return this.table[valorEnTable].find(new ClaveValor(key, null)).value
          .value;
      } catch (e) {}
    }
  }

  has(key) {
    if (this.get(key) == null) {
      return false;
    } else {
      return true;
    }
  }
  q;

  remove(key) {
    let hash = hashAny(key);
    hash = Math.abs(hash);

    let valorEnTable = hash % this.largo;

    if (this.table[valorEnTable] == null) {
      return;
    } else {
      return this.table[valorEnTable].remove(new ClaveValor(key, null));
    }
  }
}

class ClaveValor {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  equals(other) {
    return other instanceof ClaveValor && this.key === other.key;
  }
}

function toStableString(value) {
  if (typeof value === "object" && value !== null) {
    return JSON.stringify(value, Object.keys(value).sort());
  }
  return String(value);
}

function generateHash(string) {
  let hash = 0;
  for (const char of string) {
    hash = (hash << 5) - hash + char.charCodeAt(0);
    hash |= 0;
  }
  return hash;
}

function hashAny(value) {
  return generateHash(toStableString(value));
}
