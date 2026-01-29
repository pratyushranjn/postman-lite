const { EntitySchema } = require("@mikro-orm/core");

class RequestHistory {
  constructor() {
    this.createdAt = new Date();
  }
}

const RequestHistorySchema = new EntitySchema({
  class: RequestHistory,
  properties: {
    id: { type: 'number', primary: true },
    method: { type: 'string' },
    url: { type: 'string' },
    body: { type: 'string' },
    response: { type: 'string' },
    createdAt: { type: 'Date' }
  }
});

module.exports = { RequestHistory, RequestHistorySchema };