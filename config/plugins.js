module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIAXOGXXODN5AKWP26R",
        secretAccessKey: "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",
        region: "eu-west-1",
        params: {
          Bucket: "ecommerce-strapi-games",
        },
      },
    },
  },
});
