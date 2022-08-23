// data format of returnded by the api
/**
 * 
 * {
  kind: 'youtube#searchResult',
  etag: '68aRfmagbaTOKOP9XonscE6Nv1A',
  id: { kind: 'youtube#video', videoId: '22Yoc87ceVs' },
  snippet: {
    publishedAt: '2022-08-23T09:36:02Z',
    channelId: 'UCqHf8976ygO6jhCrRyh_2wQ',
    title: 'Spin Bowling Grip Tip | Serious Cricket Tips #shorts',
    description: '',
    thumbnails: { default: [Object], medium: [Object], high: [Object] },
    channelTitle: 'Serious Cricket',
    liveBroadcastContent: 'none',
    publishTime: '2022-08-23T09:36:02Z'
  }
} 
 */

const { Video } = require('../models/video.js');

exports.dumpData = async (data) => {
  data.forEach(async (item) => {
    const video = await new Video({
      title: item.snippet.title,
      description: item.snippet.description,
      publishing_datetime: item.snippet.publishedAt,
      thumbnail_url: item.snippet.thumbnails.default.url,
    });
    try {
      const saved = await video.save();
    } catch (error) {
      console.log('message', error);
    }
  });
};

exports.getAllVideoes = async (req, res) => {
  console.log(req.query);
};
