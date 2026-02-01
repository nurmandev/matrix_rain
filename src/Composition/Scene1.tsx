import { AbsoluteFill } from 'remotion';
import { z } from 'zod';
import { BackgroundProps } from '../backgrounds';
import MatrixRain from '../components/MatrixRain';
import { Trail } from '@remotion/motion-blur';

export const scene1Schema = z.object({});
type Scene1Props = z.infer<typeof scene1Schema> & { background: BackgroundProps };

const Scene1: React.FC<Scene1Props> = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Trail layers={10} lagInFrames={2} trailOpacity={1}>
        <MatrixRain />
      </Trail>
      <AbsoluteFill
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
        }}
      />
    </AbsoluteFill>
  );
};

export default Scene1;
