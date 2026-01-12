// pages/index.js
import { useState } from 'react';

export default function GolemDashboard() {
  const = useState({
    marktforschung: 10,
    schnelligkeit: 10,
    risikomanagement: 10,
    hypeDetection: 10,
    diversifikation: 10,
    vorhersage: 10,
    ausdauer: 10,
    anpassung: 10,
    copyTrading: 10,
    kiUnterstuetzung: 10,
  });

  const = useState('aggressiv');
  const = useState({ mood: 'neutral', message: 'Bereit für Action!' });

  const = useState();

  const totalPunkte = Object.values(skills).reduce((a, b) => a + b, 0);

  const updateSkill = (skill, wert) => {
    const newWert = parseInt(wert);
    const diff = newWert - skills;
    if (totalPunkte + diff <= 100 && newWert >= 0 && newWert <= 20) {
      setSkills({ ...skills, : newWert });
    }
  };

  const berechneEmotion = (lastTrades) => {
    const wins = lastTrades.filter(t => t.profit > 0).length;
    const ratio = wins / lastTrades.length || 0;
    if (ratio > 0.7) return { mood: 'euphorisch', message: 'Pump! Ich liebe das!' };
    if (ratio < 0.4) return { mood: 'gestresst', message: 'Das wird eng... Zeit zum Atmen.' };
    return { mood: 'neutral', message: 'Stabil. Weiter so.' };
  };

  const addTrade = () => {
    const neuerProfit = Math.random() > 0.5 ? Math.floor(Math.random() * 200) : -Math.floor(Math.random() * 100);
    const newTrades = .slice(-5);
    setTrades(newTrades);
    setEmotion(berechneEmotion(newTrades));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#111', color: '#eee', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2em' }}>GOLEM – Dein Trading-Charakter</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
        <div style={{ background: '#222', padding: '15px', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5em' }}>Charakter</h2>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', background: 'linear-gradient(to bottom right, blue, purple)', borderRadius: '50%', margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2em' }}>🪨</div>
            <input type="text" defaultValue="Mein Golem" style={{ width: '100%', padding: '5px', background: '#333', color: '#eee', borderRadius: '5px', textAlign: 'center' }} />
            <select value={charakter} onChange={(e) => setCharakter(e.target.value)} style={{ width: '100%', padding: '5px', background: '#333', color: '#eee', borderRadius: '5px', margin: '10px 0' }}>
              <option value="aggressiv">Aggressiv</option>
              <option value="vorsichtig">Vorsichtig</option>
              <option value="chaotisch">Chaotisch</option>
              <option value="geduldig">Geduldig</option>
            </select>
            <span style={{ fontSize: '1.2em', color: emotion.mood === 'euphorisch' ? 'green' : emotion.mood === 'gestresst' ? 'red' : 'yellow' }}>{emotion.message}</span>
          </div>
        </div>
        <div style={{ background: '#222', padding: '15px', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5em' }}>Skills (100 max)</h2>
          <p style={{ fontSize: '0.8em', color: '#aaa' }}>Aktuell: {totalPunkte}/100</p>
          {Object.entries(skills).map(() => (
            <div key={skill} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em' }}>
                <span>{skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                <span>{wert}</span>
              </div>
              <input type="range" min="0" max="20" value={wert} onChange={(e) => updateSkill(skill, e.target.value)} style={{ width: '100%' }} />
            </div>
          ))}
        </div>
        <div style={{ background: '#222', padding: '15px', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '1.5em' }}>Performance</h2>
          <button onClick={addTrade} style={{ width: '100%', background: 'blue', padding: '10px', borderRadius: '5px', color: '#eee', cursor: 'pointer' }}>Trade simulieren</button>
          <div style={{ marginTop: '10px' }}>
            {trades.map((trade, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9em', color: trade.profit > 0 ? 'green' : 'red' }}>
                <span>Trade #{i + 1}</span>
                <span>{trade.profit > 0 ? '+' : ''}{trade.profit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}