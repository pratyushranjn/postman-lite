const { BetterSqliteDriver } = require('@mikro-orm/better-sqlite');
const { RequestHistorySchema } = require('./entities/RequestHistory');

module.exports = {
  entities: [RequestHistorySchema],
  dbName: 'requests.db',
  driver: BetterSqliteDriver
};
