module.exports = {
  options: {
    logConcurrentOutput: true,
    limit: 10
  },
  development: [
    "connect:tumblr",
    "watch"
  ]
};
