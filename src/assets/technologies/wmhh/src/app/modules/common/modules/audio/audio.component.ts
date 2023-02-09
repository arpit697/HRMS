import { Component, Input, OnInit } from "@angular/core";
import { StreamState } from "./audio.interface";
import { AudioService } from "./audio.service";

@Component({
  selector: "app-audio",
  templateUrl: "./audio.component.html",
  styleUrls: ["./audio.component.scss"],
  providers: [AudioService],
})
export class AudioComponent implements OnInit {
  @Input() audioSrc: string = null;
  @Input() audioTitle: string = null;
  state: StreamState;

  constructor(private audioService: AudioService) {
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe((events) => {
      // listening for fun here
    });
  }

  openFile() {
    // this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(this.audioSrc);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    console.log("ca,e");
    console.log(this.audioSrc);

    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }
  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
  ngOnInit(): void {
    // console.log(this.audioSrc);
    this.openFile();
  }
}
