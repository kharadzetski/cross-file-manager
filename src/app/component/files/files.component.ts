import { Component, OnInit } from '@angular/core';
import { FilesService } from '@app/service/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  public files: string[] = [];
  constructor(private filesService: FilesService) { }

  async ngOnInit() {
    this.files = await this.filesService.readUserFiles();
  }

  async onDirValueChange(dir: string) {
    try {
      this.files = await this.filesService.readFiles(dir);
    } catch (e) {
      console.warn(e);
    }
  }

}
