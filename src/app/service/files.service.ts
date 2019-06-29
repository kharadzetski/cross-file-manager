import { Injectable } from '@angular/core';
const { homedir } = require('os');
const { readdir } = require('fs');

@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor() {
  }

  public async readUserFiles() {
    return await new Promise<string[]>((res) => readdir(homedir(), (err, files) => res(files)));
  }

}
