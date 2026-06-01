"use client";
import { useEffect, useState } from "react";
import setting from "../setting.json";

const GoldPrice = () => {
  const [gold, setGold] = useState(null);
  const [city, setCity] = useState("Lucknow");
  const [carat, setCarat] = useState("24K");
  const [dark, setDark] = useState(false);

  // ✅ Detect theme
  useEffect(() => {
    const isDark =
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setDark(isDark);
  }, []);

  const fetchGold = async () => {
    try {
      // 🔥 PARALLEL API CALL (FAST)
      const [goldRes, forexRes] = await Promise.all([
        fetch(
          `https://api.metalpriceapi.com/v1/latest?api_key=274fdb8527f806d0adffc4721f4f46e5&base=USD&currencies=XAU`,
        ),
        fetch("https://api.exchangerate-api.com/v4/latest/USD"),
      ]);

      const goldData = await goldRes.json();
      const forexData = await forexRes.json();

      // ✅ FIX: handle both formats
      let usdPerOunce =
        goldData?.rates?.USDXAU ||
        (goldData?.rates?.XAU ? 1 / goldData.rates.XAU : null);

      const usdToInr = forexData?.rates?.INR;

      if (!usdPerOunce || !usdToInr) return;

      // ✅ Convert to INR per gram (24K)
      const perGram24 = (usdPerOunce * usdToInr) / 31.1;

      // ✅ City factor (optional realistic adjustment)
      const cityFactor =
        {
          Lucknow: 1.005,
          Delhi: 1.0,
          Mumbai: 0.995,
          Kolkata: 1.01,
        }[city] || 1;

      // ✅ Dynamic carat calculation
      const result = {
        "24K": (perGram24 * 10 * cityFactor).toFixed(0),
        "22K": (perGram24 * 10 * 0.916 * cityFactor).toFixed(0),
        "18K": (perGram24 * 10 * 0.75 * cityFactor).toFixed(0),
      };

      setGold(result);
    } catch (err) {
      console.error("Gold API Error:", err);
    }
  };

  useEffect(() => {
    fetchGold();

    // 🔄 auto refresh every 60 sec
    const interval = setInterval(fetchGold, 60000);
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className={`gold-bar ${dark ? "dark" : "light"}`}>
      {/* LEFT */}
      <div className="left">
        <span className="dot"></span>
        <span className="title">
          Gold ({city}) - {carat}
        </span>
      </div>

      {/* CENTER */}
      {gold ? (
        <div className="value">₹{gold[carat]} / 10g</div>
      ) : (
        <span>Loading...</span>
      )}

      {/* RIGHT */}
      <div className="controls">
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option>Lucknow</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Kolkata</option>
        </select>

        <select value={carat} onChange={(e) => setCarat(e.target.value)}>
          <option value="24K">24K</option>
          <option value="22K">22K</option>
          <option value="18K">18K</option>
        </select>
      </div>

      <style jsx>{`
        .gold-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 14px;
          border-radius: 12px;
        }

        /* LIGHT */
        .light {
          background: #fff;
          border: 1px solid #eee;
          color: #111;
        }

        /* DARK */
        .dark {
          background: transparent;
          color: #fff;
        }

        .left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
        }

        .dot {
          width: 10px;
          height: 10px;
          background: #ffd700;
          border-radius: 50%;
        }

        .value {
          font-size: 20px;
          font-weight: 700;
        }

        .controls {
          display: flex;
          gap: 6px;
        }

        select {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: inherit;
          padding: 2px 6px;
          border-radius: 6px;
          font-size: 12px;
        }

        select option {
          color: #000;
        }

        @media (max-width: 768px) {
          .gold-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default GoldPrice;
