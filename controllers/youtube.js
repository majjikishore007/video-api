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
      return {
        message: err.message || 'Some error occurred ',
      };
    }
  });
};

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: videos } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, videos, totalPages, currentPage };
};

exports.getAllVideoes = async (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  Video.findAndCountAll({
    limit,
    offset,
    order: [['publishing_datetime', 'DESC']],
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred ',
      });
    });
};

exports.getByTitleAndDesc = async (req, res) => {
  const { title, description } = req.query;
  if (!title && !description) {
    res.send.json({
      message: 'query parameters missing',
    });
  }
  Video.findOne({
    where: {
      title: title,
      description: description,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(404).send({
        message: err.message || 'coud not found the data',
      });
    });
};