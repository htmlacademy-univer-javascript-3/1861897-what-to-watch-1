import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { loadFilmById } from '../../store/action';

import { getCurrentFilm, getIsFilmLoading } from '../../store/film-process/selectors';
import NotFound from '../not-found/not-found';
import { Spinner } from '../../components';
import browserHistory from '../../services/browser-history';

const Player = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const id = Number(useParams().id);

  const isFilmLoading = useAppSelector(getIsFilmLoading);
  const film = useAppSelector(getCurrentFilm);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);


  useEffect(() => {
    dispatch(loadFilmById(id));
  }, [id, dispatch]);

  if (isFilmLoading) {
    return <Spinner />;
  }

  if (!film) {
    return (<NotFound />);
  }

  const handleFullScreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleUpdate = () => {
    if (!videoRef.current) {
      return;
    }
    setTimeLeft(Math.trunc(videoRef.current.duration - videoRef.current.currentTime));
    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
  };

  const getFormatTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const formattedTime = date.toISOString().slice(11, 19).toString();
    return `-${formattedTime.startsWith('00') ? formattedTime.substring(3) : formattedTime}`;
  };

  return (
    <div className="player">
      {isLoadingVideo && <Spinner />}
      <video autoPlay preload={'auto'} ref={videoRef} src={film.videoLink} className="player__video" poster={film.backgroundImage} onLoadStart={() => setIsLoadingVideo(true)} onLoadedData={() => setIsLoadingVideo(false)} onTimeUpdate={handleUpdate} />
      <button onClick={() => browserHistory.back()} className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" />
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getFormatTime(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={handlePlayClick} data-testid="play-button">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
