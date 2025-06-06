import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createContext, useState, useCallback, useContext, forwardRef } from 'react';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const defaultOptions = {
    botStyle: 'Circle',
    circleColor: 'BlueGrey300',
    topType: 'Bulb02',
    topColor: 'BlueGrey500',
    faceType: 'Square01',
    faceColor: 'BlueGrey500',
    textureType: 'None',
    eyeType: 'Round',
    mouthType: 'Square01',
    sideType: 'Square',
    sidesColor: 'BlueGrey500',
};
const BotContext = createContext(null);
function BotProvider({ children, initialOptions = {} }) {
    const [options, setOptions] = useState({
        ...defaultOptions,
        ...initialOptions,
    });
    const updateOptions = useCallback((updates) => {
        setOptions(prev => ({ ...prev, ...updates }));
    }, []);
    const resetOptions = useCallback(() => {
        setOptions(defaultOptions);
    }, []);
    const value = {
        ...options,
        updateOptions,
        resetOptions,
    };
    return jsx(BotContext.Provider, { value: value, children: children });
}
function useBotContext() {
    const context = useContext(BotContext);
    if (!context) {
        throw new Error('useBotContext must be used within a BotProvider');
    }
    return context;
}

const FaceSquare01 = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsx("g", { id: "Face", fill: "#607D8B", children: jsx("rect", { x: "0", y: "0", width: "130", height: "120", rx: "8" }) }) }));
const FaceRound01 = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsx("g", { id: "Face", fill: "#607D8B", children: jsx("rect", { x: "0", y: "0", width: "130", height: "120", rx: "65" }) }) }));
// Placeholder components for other face types
const FaceArturito = ({ id }) => jsx(FaceSquare01, { id: id });
const FaceRoboCop = ({ id }) => jsx(FaceSquare01, { id: id });
const FaceRound02 = ({ id }) => jsx(FaceRound01, { id: id });
const FaceSquare02 = ({ id }) => jsx(FaceSquare01, { id: id });
const FaceSquare03 = ({ id }) => jsx(FaceSquare01, { id: id });
const FaceSquare04 = ({ id }) => jsx(FaceSquare01, { id: id });
const faceComponents = {
    Arturito: FaceArturito,
    RoboCop: FaceRoboCop,
    Round01: FaceRound01,
    Round02: FaceRound02,
    Square01: FaceSquare01,
    Square02: FaceSquare02,
    Square03: FaceSquare03,
    Square04: FaceSquare04,
};
function Face() {
    const { faceType = 'Square01' } = useBotContext();
    const FaceComponent = faceComponents[faceType];
    if (!FaceComponent) {
        console.warn(`Unknown face type: ${faceType}`);
        return null;
    }
    return jsx(FaceComponent, { id: `Face/${faceType}` });
}

const EyeRound = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Eye", transform: "translate(18.000000, 24.000000)", fill: "#FFFFFF", children: [jsx("circle", { cx: "6", cy: "6", r: "6" }), jsx("circle", { cx: "62", cy: "6", r: "6" })] }) }));
const EyeShades = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsx("g", { id: "Shades", transform: "translate(14.000000, 20.000000)", fill: "#000000", children: jsx("rect", { x: "0", y: "0", width: "76", height: "16", rx: "8" }) }) }));
const EyeHappy = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Happy", transform: "translate(18.000000, 24.000000)", stroke: "#000000", strokeWidth: "2", children: [jsx("path", { d: "M0,6 C0,2.6862915 2.6862915,0 6,0 C9.3137085,0 12,2.6862915 12,6" }), jsx("path", { d: "M56,6 C56,2.6862915 58.6862915,0 62,0 C65.3137085,0 68,2.6862915 68,6" })] }) }));
// Placeholder components for other eye types
const EyeArturito = ({ id }) => jsx(EyeRound, { id: id });
const EyeBulging = ({ id }) => jsx(EyeRound, { id: id });
const EyeDizzy = ({ id }) => jsx(EyeRound, { id: id });
const EyeEva = ({ id }) => jsx(EyeRound, { id: id });
const EyeFrame01 = ({ id }) => jsx(EyeRound, { id: id });
const EyeFrame02 = ({ id }) => jsx(EyeRound, { id: id });
const EyeGlow = ({ id }) => jsx(EyeRound, { id: id });
const EyeHal = ({ id }) => jsx(EyeRound, { id: id });
const EyeHearts = ({ id }) => jsx(EyeRound, { id: id });
const EyeRoboCop = ({ id }) => jsx(EyeRound, { id: id });
const EyeRoundFrame01 = ({ id }) => jsx(EyeRound, { id: id });
const EyeRoundFrame02 = ({ id }) => jsx(EyeRound, { id: id });
const EyeSensor = ({ id }) => jsx(EyeRound, { id: id });
const eyeComponents = {
    Arturito: EyeArturito,
    Bulging: EyeBulging,
    Dizzy: EyeDizzy,
    Eva: EyeEva,
    Frame01: EyeFrame01,
    Frame02: EyeFrame02,
    Glow: EyeGlow,
    Hal: EyeHal,
    Happy: EyeHappy,
    Hearts: EyeHearts,
    RoboCop: EyeRoboCop,
    Round: EyeRound,
    RoundFrame01: EyeRoundFrame01,
    RoundFrame02: EyeRoundFrame02,
    Sensor: EyeSensor,
    Shades: EyeShades,
};
function Eyes() {
    const { eyeType = 'Round' } = useBotContext();
    const EyeComponent = eyeComponents[eyeType];
    if (!EyeComponent) {
        console.warn(`Unknown eye type: ${eyeType}`);
        return null;
    }
    return jsx(EyeComponent, { id: `Eyes/${eyeType}` });
}

const MouthSquare01 = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsx("g", { id: "Mouth", fill: "#000000", children: jsx("rect", { x: "0", y: "0", width: "76", height: "16", rx: "8" }) }) }));
const MouthSmile01 = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsx("g", { id: "Mouth", stroke: "#000000", strokeWidth: "3", children: jsx("path", { d: "M8,8 C8,13.5228475 17.9471525,18 38,18 C58.0528475,18 68,13.5228475 68,8" }) }) }));
const MouthGrill01 = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Mouth", fill: "#000000", children: [jsx("rect", { x: "8", y: "4", width: "60", height: "2" }), jsx("rect", { x: "8", y: "8", width: "60", height: "2" }), jsx("rect", { x: "8", y: "12", width: "60", height: "2" }), jsx("rect", { x: "8", y: "16", width: "60", height: "2" })] }) }));
// Placeholder components for other mouth types
const MouthArturito = ({ id }) => jsx(MouthSquare01, { id: id });
const MouthBite = ({ id }) => jsx(MouthSquare01, { id: id });
const MouthDiagram = ({ id }) => jsx(MouthSquare01, { id: id });
const MouthGrill02 = ({ id }) => jsx(MouthGrill01, { id: id });
const MouthGrill03 = ({ id }) => jsx(MouthGrill01, { id: id });
const MouthRoboCop = ({ id }) => jsx(MouthSquare01, { id: id });
const MouthSmile02 = ({ id }) => jsx(MouthSmile01, { id: id });
const MouthSquare02 = ({ id }) => jsx(MouthSquare01, { id: id });
const mouthComponents = {
    Arturito: MouthArturito,
    Bite: MouthBite,
    Diagram: MouthDiagram,
    Grill01: MouthGrill01,
    Grill02: MouthGrill02,
    Grill03: MouthGrill03,
    RoboCop: MouthRoboCop,
    Smile01: MouthSmile01,
    Smile02: MouthSmile02,
    Square01: MouthSquare01,
    Square02: MouthSquare02,
};
function Mouth() {
    const { mouthType = 'Square01' } = useBotContext();
    const MouthComponent = mouthComponents[mouthType];
    if (!MouthComponent) {
        console.warn(`Unknown mouth type: ${mouthType}`);
        return null;
    }
    return jsx(MouthComponent, { id: `Mouth/${mouthType}` });
}

const SidesSquare = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Sides", fill: "#607D8B", children: [jsx("rect", { x: "0", y: "0", width: "20", height: "76", rx: "4" }), jsx("rect", { x: "160", y: "0", width: "20", height: "76", rx: "4" })] }) }));
const SidesRound = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Sides", fill: "#607D8B", children: [jsx("ellipse", { cx: "10", cy: "38", rx: "10", ry: "38" }), jsx("ellipse", { cx: "170", cy: "38", rx: "10", ry: "38" })] }) }));
const SidesAntenna01 = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Sides", stroke: "#000000", strokeWidth: "2", children: [jsx("line", { x1: "10", y1: "10", x2: "30", y2: "0" }), jsx("line", { x1: "170", y1: "10", x2: "150", y2: "0" }), jsx("circle", { cx: "30", cy: "0", r: "2", fill: "#FF0000" }), jsx("circle", { cx: "150", cy: "0", r: "2", fill: "#FF0000" })] }) }));
// Placeholder components for other side types
const SidesAntenna02 = ({ id }) => jsx(SidesAntenna01, { id: id });
const SidesCables01 = ({ id }) => jsx(SidesSquare, { id: id });
const SidesCables02 = ({ id }) => jsx(SidesSquare, { id: id });
const SidesSquareAsymmetric = ({ id }) => jsx(SidesSquare, { id: id });
const sidesComponents = {
    Antenna01: SidesAntenna01,
    Antenna02: SidesAntenna02,
    Cables01: SidesCables01,
    Cables02: SidesCables02,
    Round: SidesRound,
    Square: SidesSquare,
    SquareAsymmetric: SidesSquareAsymmetric,
};
function Sides() {
    const { sideType = 'Square' } = useBotContext();
    const SidesComponent = sidesComponents[sideType];
    if (!SidesComponent) {
        console.warn(`Unknown sides type: ${sideType}`);
        return null;
    }
    return jsx(SidesComponent, { id: `Sides/${sideType}` });
}

const TopBulb02 = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Top", fill: "#FFC107", children: [jsx("ellipse", { cx: "50", cy: "30", rx: "25", ry: "20" }), jsx("rect", { x: "45", y: "45", width: "10", height: "8" })] }) }));
const TopAntenna = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Top", stroke: "#000000", strokeWidth: "2", children: [jsx("line", { x1: "50", y1: "0", x2: "50", y2: "30" }), jsx("circle", { cx: "50", cy: "0", r: "3", fill: "#FF0000" })] }) }));
const TopRadar = ({ id }) => (jsx("g", { id: id, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsxs("g", { id: "Top", fill: "#424242", children: [jsx("rect", { x: "40", y: "20", width: "20", height: "10", rx: "2" }), jsx("rect", { x: "48", y: "10", width: "4", height: "12" })] }) }));
// Placeholder components for other top types
const TopAntennaCrooked = ({ id }) => jsx(TopAntenna, { id: id });
const TopBulb01 = ({ id }) => jsx(TopBulb02, { id: id });
const TopGlowingBulb01 = ({ id }) => jsx(TopBulb02, { id: id });
const TopGlowingBulb02 = ({ id }) => jsx(TopBulb02, { id: id });
const TopHorns = ({ id }) => jsx(TopAntenna, { id: id });
const TopLights = ({ id }) => jsx(TopBulb02, { id: id });
const TopPlankton = ({ id }) => jsx(TopAntenna, { id: id });
const TopPyramid = ({ id }) => jsx(TopRadar, { id: id });
const topComponents = {
    Antenna: TopAntenna,
    AntennaCrooked: TopAntennaCrooked,
    Bulb01: TopBulb01,
    Bulb02: TopBulb02,
    GlowingBulb01: TopGlowingBulb01,
    GlowingBulb02: TopGlowingBulb02,
    Horns: TopHorns,
    Lights: TopLights,
    Plankton: TopPlankton,
    Pyramid: TopPyramid,
    Radar: TopRadar,
};
function Top() {
    const { topType = 'Bulb02' } = useBotContext();
    const TopComponent = topComponents[topType];
    if (!TopComponent) {
        console.warn(`Unknown top type: ${topType}`);
        return null;
    }
    return jsx(TopComponent, { id: `Top/${topType}` });
}

function BotHead() {
    return (jsxs("g", { id: "Bottt/Head", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", transform: "translate(30.000000, 33.000000)", children: [jsx("g", { id: "Sides", width: "180px", height: "76px", transform: "translate(0.000000, 66.000000)", children: jsx(Sides, {}) }), jsx("g", { id: "Top", transform: "translate(41.000000, 0.000000)", width: "100px", height: "52px", children: jsx(Top, {}) }), jsx("g", { id: "Face", transform: "translate(25.000000, 44.000000)", width: "130px", height: "120px", children: jsx(Face, {}) }), jsx("g", { id: "Mouth", transform: "translate(52.000000, 124.000000)", width: "76px", height: "32px", children: jsx(Mouth, {}) }), jsx("g", { id: "Eyes", transform: "translate(38.000000, 76.000000)", width: "104px", height: "48px", children: jsx(Eyes, {}) })] }));
}

const colorMap = {
    Blue01: '#2196F3',
    Blue02: '#03A9F4',
    Blue03: '#3F51B5',
    BlueGrey01: '#607D8B',
    BlueGrey02: '#9E9E9E',
    BlueGrey03: '#424242',
    BlueGrey300: '#90A4AE',
    BlueGrey500: '#607D8B',
    Orange01: '#FF9800',
    Orange02: '#FF5722',
    Orange03: '#FFC107',
    Red01: '#F44336',
    Red02: '#E91E63',
    Red03: '#9C27B0',
    Yellow01: '#FFEB3B',
    Yellow02: '#CDDC39',
    Yellow03: '#8BC34A',
};
function CircleColor({ maskID, color = 'BlueGrey300', children }) {
    const fillColor = colorMap[color] || colorMap.BlueGrey300;
    return (jsx("g", { id: `CircleColor-${color}`, mask: `url(#${maskID})`, fill: fillColor, children: children }));
}

function CircleBackground() {
    const { circleColor } = useBotContext();
    const mainId = 'Circle';
    const pathId = `${mainId}-path`;
    const maskId = `${mainId}-mask`;
    return (jsxs("g", { id: mainId, children: [jsx("defs", { children: jsx("circle", { id: pathId, cx: "120", cy: "120", r: "120" }) }), jsxs("g", { id: "Circle", strokeWidth: "1", fillRule: "evenodd", children: [jsx("mask", { id: maskId, fill: "white", children: jsx("use", { xlinkHref: `#${pathId}` }) }), jsx("use", { id: "Circle-Background", fill: "#E6E6E6", xlinkHref: `#${pathId}` }), jsx(CircleColor, { maskID: maskId, color: circleColor, children: jsx("rect", { id: "Color", x: "0", y: "0", width: "240", height: "240" }) })] })] }));
}

const Bot = forwardRef(({ botStyle, circleColor, topType, topColor, faceType, faceColor, textureType, eyeType, mouthType, sideType, sidesColor, style, size = 240, className, }, ref) => {
    const botOptions = {
        botStyle,
        circleColor,
        topType,
        topColor,
        faceType,
        faceColor,
        textureType,
        eyeType,
        mouthType,
        sideType,
        sidesColor,
    };
    const isCircle = botStyle === 'Circle';
    const mainId = 'Bottt';
    const maskId = `${mainId}-mask`;
    return (jsx(BotProvider, { initialOptions: botOptions, children: jsxs("svg", { ref: ref, style: style, width: `${size}px`, height: `${size}px`, viewBox: "0 0 240 240", className: clsx('bottt-svg', className), xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", role: "img", "aria-label": "Bot avatar", children: [jsx("title", { children: "Bot Avatar" }), jsx("desc", { children: "Generated bot avatar using Bottts library" }), jsx("defs", { children: isCircle && (jsxs(Fragment, { children: [jsx("circle", { id: `${mainId}-circle`, cx: "120", cy: "120", r: "120" }), jsx("mask", { id: maskId, fill: "white", children: jsx("use", { xlinkHref: `#${mainId}-circle` }) })] })) }), jsxs("g", { id: mainId, stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: [isCircle && jsx(CircleBackground, {}), jsx("g", { id: "Bottt-Content", mask: isCircle ? `url(#${maskId})` : undefined, children: jsx(BotHead, {}) })] })] }) }));
});
Bot.displayName = 'Bot';

const pieceComponents = {
    top: Top,
    face: Face,
    eye: Eyes,
    mouth: Mouth,
    sides: Sides,
};
const Piece = forwardRef(({ pieceType, pieceSize = 100, botStyle, circleColor, topType, topColor, faceType, faceColor, textureType, eyeType, mouthType, sideType, sidesColor, style, className, }, ref) => {
    const botOptions = {
        botStyle,
        circleColor,
        topType,
        topColor,
        faceType,
        faceColor,
        textureType,
        eyeType,
        mouthType,
        sideType,
        sidesColor,
    };
    const PieceComponent = pieceComponents[pieceType];
    const size = typeof pieceSize === 'string' ? parseInt(pieceSize, 10) : pieceSize;
    if (!PieceComponent) {
        console.warn(`Unknown piece type: ${pieceType}`);
        return null;
    }
    return (jsx(BotProvider, { initialOptions: botOptions, children: jsxs("svg", { ref: ref, style: style, width: `${size}px`, height: `${size}px`, viewBox: "0 0 100 100", className: clsx('bottt-piece', `bottt-piece--${pieceType}`, className), xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", role: "img", "aria-label": `Bot ${pieceType} piece`, children: [jsxs("title", { children: ["Bot ", pieceType, " piece"] }), jsxs("desc", { children: ["Individual bot piece: ", pieceType] }), jsx("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: jsx(PieceComponent, {}) })] }) }));
});
Piece.displayName = 'Piece';

export { Bot, BotProvider, CircleColor as CircleColorComponent, Eyes, Face, Mouth, Piece, Sides, Top, Bot as default, useBotContext };
//# sourceMappingURL=index.js.map
