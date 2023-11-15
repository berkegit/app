
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { parseString } from "xml2js";

const app = express();
const PORT = 5003;

app.use(cors({ origin: "*" }));

const TCMB_URL = "http://www.tcmb.gov.tr/kurlar/today.xml";


app.get("/kurlar", async (req, res, next) => {
  try {
    const response = await fetch(TCMB_URL);
    const xmlData = await response.text();

    parseString(xmlData, (err, jsonData) => {
      if (err) {
        console.error("XML dönüştürme hatası:", err);
        res.status(500).send("XML dönüştürme hatası");
      } else {
        res.send(jsonData.Tarih_Date.Currency);
      }
    });
  } catch (error) {
    console.error("Hata oluştu:", error);
    res.status(500).send("Hata oluştu");
  }
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});