# tsdemux

A writable Stream that demux MPEG-TS bitstream into seperate Readable streams.

## API

```
const fs = require('fs');
const { TSDemuxer } = require('@eyevinn/tsdemux');

const source = fs.createReadStream('./samples/av.ts');
const video = fs.createWriteStream('./output-video.h264');
const audio = fs.createWriteStream('./output-audio.aac');

const demuxer = new TSDemuxer({
  video: video,
  audio: audio,
});
source.pipe(demuxer);
```

## License

MIT