const fs = require('fs');
const { TSDemuxer } = require('./index.js');

const source = fs.createReadStream('./samples/av.ts');
const video = fs.createWriteStream('./output-video.h264');
const audio = fs.createWriteStream('./output-audio.aac');

const demuxer = new TSDemuxer({
  video: video,
  audio: audio,
});
source.pipe(demuxer);