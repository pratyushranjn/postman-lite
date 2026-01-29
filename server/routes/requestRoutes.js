const express = require("express");
const axios = require("axios");
const { RequestHistory } = require("../entities/RequestHistory");

const router = express.Router();

router.post("/send-request", async (req, res) => {
  const em = req.em;
  const { method, url, body } = req.body;

  try {
    const response = await axios({ method, url, data: body });

    // Create object in memory
    const history = em.create(RequestHistory, {
      method,
      url,
      body: JSON.stringify(body),
      response: JSON.stringify(response.data)
    });

    // Queue it for saving
    em.persist(history);

    // save in db
    await em.flush();

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/history", async (req, res) => {
  const em = req.em;
  const page = Number(req.query.page) || 1;
  const limit = 5;

  const [history, total] = await Promise.all([
    em.find(RequestHistory, {}, { limit, offset: (page - 1) * limit }),
    em.count(RequestHistory, {})
  ]);

  res.json({ history, total, page, totalPages: Math.ceil(total / limit) });
});

module.exports = router;
