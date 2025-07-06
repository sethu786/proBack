const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const sampleHeadlines = [
  "Cake & Co: Mumbai’s Favorite Sugar Stop in 2025!",
  "Discover Why Cake & Co is Mumbai's Sweetheart Bakery",
  "Mumbai Craves Cake & Co – Here's Why!",
  "Sweet Surprises Await at Cake & Co in Mumbai!",
  "Cake & Co: Baking Happiness in Mumbai Since 2025"
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: "Missing 'name' or 'location'" });
  }

  return res.json({
    rating: 4.3,
    reviews: 127,
    headline: `Why ${name} is ${location}'s Sweetest Spot in 2025`
  });
});

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({ error: "Missing 'name' or 'location'" });
  }

  const headline = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)]
    .replace("Cake & Co", name)
    .replace("Mumbai", location);

  return res.json({ headline });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
