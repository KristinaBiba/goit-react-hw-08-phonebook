import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ marginTop: 'calc( 100vh/2 - 112px)', textAlign: 'center' }}>
      <RotatingLines
        strokeColor="#1976d2"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
