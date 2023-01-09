import { ProgressBar } from 'react-loader-spinner';

export function Loader() {
  return (
    <ProgressBar
      role="alert"
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{ margin: '0 auto', display: 'block' }}
      wrapperClass="progress-bar-wrapper"
      borderColor="#87ceeb"
      barColor="#3f51b5"
    />
  );
}
