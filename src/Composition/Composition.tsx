import { AbsoluteFill, useVideoConfig } from 'remotion';
import { z } from 'zod';

import Scene1, { scene1Schema } from './Scene1';

import { LoadFonts } from '../lib/LoadFonts';
import { getCSSVariables } from '../lib/helpers';
import { Colors, Fonts } from '../types';
import { BackgroundProps } from '../backgrounds';

export const MainSchema = z.object({
  audioVolume: z.number(),
  music: z.string(),
  colors: Colors,
  fonts: Fonts,
  background: BackgroundProps,
  transitionDuration: z.number(),
  scene1Duration: z.number(),
  scene1Props: scene1Schema,
});

type MainProps = z.infer<typeof MainSchema>;

const Main: React.FC<MainProps> = ({
  audioVolume,
  transitionDuration,
  colors,
  background,
  fonts,
  scene1Duration,
  scene1Props,
}) => {
  const { id } = useVideoConfig();

  // You work will be mainly with the Scenes files

  // Work in this File:
  // adapt the transitions to an existing one or to your new one

  // If you want to use a different component than a <TransitionSeries>
  // then you'll have to talk to me why it's necessary.

  return (
    <LoadFonts fonts={fonts}>
      <AbsoluteFill
        id={id}
        style={{
          background: 'black',
          ...getCSSVariables({ colors: colors, fonts: fonts, roundness: 1 }),
        }}
      >
        {/* change the name of your music file in the public folder to match music.mp3  */}
        {/* <Audio src={staticFile('music.mp3')} volume={audioVolume} />        */}
        <Scene1 {...scene1Props} background={background} />
      </AbsoluteFill>
    </LoadFonts>
  );
};

export default Main;
