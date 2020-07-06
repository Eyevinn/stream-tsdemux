const fs = require('fs');
const { TSDemuxer } = require('../index.js');

describe("TSDemuxer", () => {
  it("can demux sample file", done => {
    const source = fs.createReadStream('./samples/av.ts');
    const video = fs.createWriteStream('./output-video.h264');
    const audio = fs.createWriteStream('./output-audio.aac');
    const demuxer = new TSDemuxer({
      video: video,
      audio: audio,
    });
    source.on('end', () => {
      expect(fs.existsSync('./output-video.h264')).toBeTrue();
      expect(fs.existsSync('./output-audio.aac')).toBeTrue();
      done();
    })
    source.pipe(demuxer);
  });
});