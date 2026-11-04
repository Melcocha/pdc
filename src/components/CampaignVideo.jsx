import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';

/**
 * Reproductor de video de campaña con el look de la página.
 * - autoStart: arranca solo (silenciado, como exigen los navegadores) y ofrece "Activar sonido".
 * - sin autoStart: muestra la portada y el visitante debe hacer clic para reproducir.
 * - sin src: muestra solo la imagen (sin botón de reproducir).
 */
export default function CampaignVideo({
  src,
  poster,
  autoStart = false,
  ratio = '16 / 9',
  label,
  className = '',
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(autoStart);
  const [started, setStarted] = useState(autoStart);
  const [ended, setEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Intento de autoplay: si el navegador lo bloquea, queda el botón de play.
  useEffect(() => {
    if (!autoStart || !videoRef.current) return;
    const v = videoRef.current;
    v.muted = true;
    const p = v.play();
    if (p && typeof p.catch === 'function') p.catch(() => setPlaying(false));
  }, [autoStart, src]);

  if (!src) {
    return (
      <div className={`cv-frame cv-soon ${className}`} style={{ aspectRatio: ratio }}>
        {poster && <img src={poster} alt={label || ''} className="cv-poster" />}
      </div>
    );
  }

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (ended) {
      v.currentTime = 0;
      setEnded(false);
    }
    if (v.paused) {
      if (!started) {
        v.muted = false;
        setMuted(false);
        setStarted(true);
      }
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const seek = (e) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  const showBigPlay = !playing;

  return (
    <div className={`cv-frame ${className}`} style={{ aspectRatio: ratio }}>
      <video
        ref={videoRef}
        className="cv-video"
        src={src}
        poster={poster}
        playsInline
        muted={muted}
        preload={autoStart ? 'auto' : 'metadata'}
        aria-label={label}
        onClick={togglePlay}
        onPlay={() => { setPlaying(true); setEnded(false); }}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setEnded(true); }}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          setProgress(v.duration ? (v.currentTime / v.duration) * 100 : 0);
        }}
      />

      {showBigPlay && (
        <button className="cv-bigplay" onClick={togglePlay} aria-label={ended ? 'Ver de nuevo' : 'Reproducir video'}>
          <span className="cv-bigplay-ring">
            {ended ? <RotateCcw size={26} /> : <Play size={28} fill="currentColor" />}
          </span>
          <span className="cv-bigplay-text">{ended ? 'Ver de nuevo' : 'Reproducir mensaje'}</span>
        </button>
      )}

      {started && (
        <div className="cv-controls">
          <button className="cv-ctrl" onClick={togglePlay} aria-label={playing ? 'Pausar' : 'Reproducir'}>
            {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </button>
          <div className="cv-progress" onClick={seek} role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
            <span style={{ width: `${progress}%` }} />
          </div>
          <button
            className={`cv-ctrl cv-sound ${muted ? 'is-muted' : ''}`}
            onClick={toggleMute}
            aria-label={muted ? 'Activar sonido' : 'Silenciar'}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {muted && <span>Activar sonido</span>}
          </button>
        </div>
      )}
    </div>
  );
}
