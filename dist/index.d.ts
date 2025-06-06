import * as react from 'react';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

type BotStyle = 'Circle' | 'Transparent';
type CircleColor$1 = 'Blue01' | 'Blue02' | 'Blue03' | 'BlueGrey01' | 'BlueGrey02' | 'BlueGrey03' | 'BlueGrey300' | 'BlueGrey500' | 'Orange01' | 'Orange02' | 'Orange03' | 'Red01' | 'Red02' | 'Red03' | 'Yellow01' | 'Yellow02' | 'Yellow03';
type TopType = 'Antenna' | 'AntennaCrooked' | 'Bulb01' | 'Bulb02' | 'GlowingBulb01' | 'GlowingBulb02' | 'Horns' | 'Lights' | 'Plankton' | 'Pyramid' | 'Radar';
type TopColor = CircleColor$1;
type FaceType = 'Arturito' | 'RoboCop' | 'Round01' | 'Round02' | 'Square01' | 'Square02' | 'Square03' | 'Square04';
type FaceColor = CircleColor$1;
type TextureType = 'Camo01' | 'Camo02' | 'Circuits' | 'Dirty01' | 'Dirty02' | 'Dots' | 'Grunge01' | 'Grunge02' | 'None';
type EyeType = 'Arturito' | 'Bulging' | 'Dizzy' | 'Eva' | 'Frame01' | 'Frame02' | 'Glow' | 'Hal' | 'Happy' | 'Hearts' | 'RoboCop' | 'Round' | 'RoundFrame01' | 'RoundFrame02' | 'Sensor' | 'Shades';
type MouthType = 'Arturito' | 'Bite' | 'Diagram' | 'Grill01' | 'Grill02' | 'Grill03' | 'RoboCop' | 'Smile01' | 'Smile02' | 'Square01' | 'Square02';
type SideType = 'Antenna01' | 'Antenna02' | 'Cables01' | 'Cables02' | 'Round' | 'Square' | 'SquareAsymmetric';
type SidesColor = CircleColor$1;
interface BotOptions {
    botStyle: BotStyle;
    circleColor?: CircleColor$1;
    topType?: TopType;
    topColor?: TopColor;
    faceType?: FaceType;
    faceColor?: FaceColor;
    textureType?: TextureType;
    eyeType?: EyeType;
    mouthType?: MouthType;
    sideType?: SideType;
    sidesColor?: SidesColor;
}
interface BotProps extends BotOptions {
    style?: react.CSSProperties;
    size?: number;
    className?: string;
}
type PieceType = 'top' | 'face' | 'eye' | 'mouth' | 'sides';
interface PieceOptions extends BotOptions {
    pieceType: PieceType;
    pieceSize?: string | number;
}
interface PieceProps extends PieceOptions {
    style?: react.CSSProperties;
    className?: string;
}

declare const Bot: react.ForwardRefExoticComponent<BotProps & react.RefAttributes<SVGSVGElement>>;

declare const Piece: react.ForwardRefExoticComponent<PieceProps & react.RefAttributes<SVGSVGElement>>;

interface BotContextValue extends BotOptions {
    updateOptions: (updates: Partial<BotOptions>) => void;
    resetOptions: () => void;
}
interface BotProviderProps {
    children: ReactNode;
    initialOptions?: Partial<BotOptions>;
}
declare function BotProvider({ children, initialOptions }: BotProviderProps): react_jsx_runtime.JSX.Element;
declare function useBotContext(): BotContextValue;

interface CircleColorProps {
    maskID: string;
    color?: CircleColor$1;
    children: ReactNode;
}
declare function CircleColor({ maskID, color, children }: CircleColorProps): react_jsx_runtime.JSX.Element;

declare function Eyes(): react_jsx_runtime.JSX.Element | null;

declare function Face(): react_jsx_runtime.JSX.Element | null;

declare function Mouth(): react_jsx_runtime.JSX.Element | null;

declare function Sides(): react_jsx_runtime.JSX.Element | null;

declare function Top(): react_jsx_runtime.JSX.Element | null;

export { Bot, BotProvider, CircleColor as CircleColorComponent, Eyes, Face, Mouth, Piece, Sides, Top, Bot as default, useBotContext };
export type { BotOptions, BotProps, BotStyle, CircleColor$1 as CircleColor, EyeType, FaceColor, FaceType, MouthType, PieceOptions, PieceProps, PieceType, SideType, SidesColor, TextureType, TopColor, TopType };
