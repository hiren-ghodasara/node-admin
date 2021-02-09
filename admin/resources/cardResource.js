const uploadFeature = require('@admin-bro/upload')

module.exports = {
    properties: {
      images: {
        // hide the image image properties
        isVisible: {
          list: false,
          filter: false,
          show: true,
          edit: false,
          new: false,
        },
      },
    }
  };