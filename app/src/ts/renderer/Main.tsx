import React from 'react';
import fs from 'fs';
import os from 'os';

import { increment } from '@renderer/utils/increment';

export interface HelloProps { 
  compiler: string;
  framework: string;
}

interface MainState {
  files: string[];
  counter: number;
  prevDir?: string;
  currentDir: string;
}

export class Main extends React.Component<HelloProps, MainState> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {counter: 0, files: [], currentDir: os.homedir()};
    this.loadDir(this.state.currentDir);
  }

  private btnClick = (): boolean => {
    this.setState({counter: increment(this.state.counter)});
    return false;
  };

  private loadPrevDir = () => {
    this.loadDir(this.state.prevDir);
  }

  private loadDir = (dir: string) => {
    fs.readdir(dir, (err, files) => {
      if (!err) {
        this.setState({ files, prevDir: this.state.currentDir, currentDir: dir })
      }
    });
  }

  render() {
    return <h1>
      Hello from {this.props.compiler} and {this.props.framework}! Click counter is {this.state.counter}
      <ul>
        {this.state.prevDir && <li onClick={this.loadPrevDir}>..</li>}
        {this.state.files.map(file => <li key={file} onClick={() => this.loadDir(`${this.state.currentDir}/${file}`)}>{file}</li>)}
      </ul>
    </h1>;
  };
}
