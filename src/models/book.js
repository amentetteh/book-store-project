import { v4 as uuidv4 } from 'uuid';

export default class BookEntity {
  constructor(id = null, title = '', author = '') {
    this.id = (!id ? uuidv4() : id);
    this.title = title;
    this.author = author;
  }
}
