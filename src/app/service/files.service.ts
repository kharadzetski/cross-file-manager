import { Injectable } from '@angular/core';
import { readdir } from 'fs';
import { homedir } from 'os';

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
