import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as I}from"./index-CP2yOfOm.js";import{B as W,c as L,S as U,M as X,E as J,F as K,T as Q}from"./Top-Qp8Ab0LM.js";const Z={top:Q,face:K,eye:J,mouth:X,sides:U},l=I.forwardRef(({pieceType:a,pieceSize:s=100,botStyle:z,circleColor:j,topType:A,topColor:O,faceType:V,faceColor:Y,textureType:N,eyeType:E,mouthType:F,sideType:_,sidesColor:k,style:H,className:M},D)=>{const $={botStyle:z,circleColor:j,topType:A,topColor:O,faceType:V,faceColor:Y,textureType:N,eyeType:E,mouthType:F,sideType:_,sidesColor:k},p=Z[a],c=typeof s=="string"?parseInt(s,10):s;return p?e.jsx(W,{initialOptions:$,children:e.jsxs("svg",{ref:D,style:H,width:`${c}px`,height:`${c}px`,viewBox:"0 0 100 100",className:L("bottt-piece",`bottt-piece--${a}`,M),xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",role:"img","aria-label":`Bot ${a} piece`,children:[e.jsxs("title",{children:["Bot ",a," piece"]}),e.jsxs("desc",{children:["Individual bot piece: ",a]}),e.jsx("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e.jsx(p,{})})]})}):(console.warn(`Unknown piece type: ${a}`),null)});l.displayName="Piece";try{l.displayName="Piece",l.__docgenInfo={description:"",displayName:"Piece",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},pieceType:{defaultValue:null,description:"",name:"pieceType",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"face"'},{value:'"eye"'},{value:'"mouth"'},{value:'"sides"'}]}},pieceSize:{defaultValue:{value:"100"},description:"",name:"pieceSize",required:!1,type:{name:"string | number | undefined"}},botStyle:{defaultValue:null,description:"",name:"botStyle",required:!0,type:{name:"enum",value:[{value:'"Circle"'},{value:'"Transparent"'}]}},circleColor:{defaultValue:null,description:"",name:"circleColor",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Blue01"'},{value:'"Blue02"'},{value:'"Blue03"'},{value:'"BlueGrey01"'},{value:'"BlueGrey02"'},{value:'"BlueGrey03"'},{value:'"BlueGrey300"'},{value:'"BlueGrey500"'},{value:'"Orange01"'},{value:'"Orange02"'},{value:'"Orange03"'},{value:'"Red01"'},{value:'"Red02"'},{value:'"Red03"'},{value:'"Yellow01"'},{value:'"Yellow02"'},{value:'"Yellow03"'}]}},topType:{defaultValue:null,description:"",name:"topType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Antenna"'},{value:'"AntennaCrooked"'},{value:'"Bulb01"'},{value:'"Bulb02"'},{value:'"GlowingBulb01"'},{value:'"GlowingBulb02"'},{value:'"Horns"'},{value:'"Lights"'},{value:'"Plankton"'},{value:'"Pyramid"'},{value:'"Radar"'}]}},topColor:{defaultValue:null,description:"",name:"topColor",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Blue01"'},{value:'"Blue02"'},{value:'"Blue03"'},{value:'"BlueGrey01"'},{value:'"BlueGrey02"'},{value:'"BlueGrey03"'},{value:'"BlueGrey300"'},{value:'"BlueGrey500"'},{value:'"Orange01"'},{value:'"Orange02"'},{value:'"Orange03"'},{value:'"Red01"'},{value:'"Red02"'},{value:'"Red03"'},{value:'"Yellow01"'},{value:'"Yellow02"'},{value:'"Yellow03"'}]}},faceType:{defaultValue:null,description:"",name:"faceType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Arturito"'},{value:'"RoboCop"'},{value:'"Round01"'},{value:'"Round02"'},{value:'"Square01"'},{value:'"Square02"'},{value:'"Square03"'},{value:'"Square04"'}]}},faceColor:{defaultValue:null,description:"",name:"faceColor",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Blue01"'},{value:'"Blue02"'},{value:'"Blue03"'},{value:'"BlueGrey01"'},{value:'"BlueGrey02"'},{value:'"BlueGrey03"'},{value:'"BlueGrey300"'},{value:'"BlueGrey500"'},{value:'"Orange01"'},{value:'"Orange02"'},{value:'"Orange03"'},{value:'"Red01"'},{value:'"Red02"'},{value:'"Red03"'},{value:'"Yellow01"'},{value:'"Yellow02"'},{value:'"Yellow03"'}]}},textureType:{defaultValue:null,description:"",name:"textureType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Camo01"'},{value:'"Camo02"'},{value:'"Circuits"'},{value:'"Dirty01"'},{value:'"Dirty02"'},{value:'"Dots"'},{value:'"Grunge01"'},{value:'"Grunge02"'},{value:'"None"'}]}},eyeType:{defaultValue:null,description:"",name:"eyeType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Arturito"'},{value:'"RoboCop"'},{value:'"Bulging"'},{value:'"Dizzy"'},{value:'"Eva"'},{value:'"Frame01"'},{value:'"Frame02"'},{value:'"Glow"'},{value:'"Hal"'},{value:'"Happy"'},{value:'"Hearts"'},{value:'"Round"'},{value:'"RoundFrame01"'},{value:'"RoundFrame02"'},{value:'"Sensor"'},{value:'"Shades"'}]}},mouthType:{defaultValue:null,description:"",name:"mouthType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Arturito"'},{value:'"RoboCop"'},{value:'"Square01"'},{value:'"Square02"'},{value:'"Bite"'},{value:'"Diagram"'},{value:'"Grill01"'},{value:'"Grill02"'},{value:'"Grill03"'},{value:'"Smile01"'},{value:'"Smile02"'}]}},sideType:{defaultValue:null,description:"",name:"sideType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Round"'},{value:'"Antenna01"'},{value:'"Antenna02"'},{value:'"Cables01"'},{value:'"Cables02"'},{value:'"Square"'},{value:'"SquareAsymmetric"'}]}},sidesColor:{defaultValue:null,description:"",name:"sidesColor",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"Blue01"'},{value:'"Blue02"'},{value:'"Blue03"'},{value:'"BlueGrey01"'},{value:'"BlueGrey02"'},{value:'"BlueGrey03"'},{value:'"BlueGrey300"'},{value:'"BlueGrey500"'},{value:'"Orange01"'},{value:'"Orange02"'},{value:'"Orange03"'},{value:'"Red01"'},{value:'"Red02"'},{value:'"Red03"'},{value:'"Yellow01"'},{value:'"Yellow02"'},{value:'"Yellow03"'}]}}}}}catch{}const ue={title:"Components/Piece",component:l,parameters:{layout:"centered",docs:{description:{component:"Individual bot pieces that can be displayed separately."}}},tags:["autodocs"],argTypes:{pieceType:{control:{type:"select"},options:["top","face","eye","mouth","sides"],description:"The type of piece to display"},pieceSize:{control:{type:"range",min:50,max:200,step:10},description:"Size of the piece in pixels"},botStyle:{control:{type:"select"},options:["Circle","Transparent"],description:"The overall style/shape of the bot"}}},u={args:{pieceType:"top",botStyle:"Circle",topType:"Bulb02",topColor:"BlueGrey500",pieceSize:100}},r={args:{pieceType:"face",botStyle:"Circle",faceType:"Square01",faceColor:"BlueGrey500",textureType:"None",pieceSize:100}},i={args:{pieceType:"eye",botStyle:"Circle",eyeType:"Round",pieceSize:100}},t={args:{pieceType:"mouth",botStyle:"Circle",mouthType:"Square01",pieceSize:100}},n={args:{pieceType:"sides",botStyle:"Circle",sideType:"Square",sidesColor:"BlueGrey500",pieceSize:100}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(l,{pieceType:"top",botStyle:"Circle",topType:"GlowingBulb01",topColor:"Yellow01",pieceSize:80}),e.jsx("p",{children:"Top"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(l,{pieceType:"face",botStyle:"Circle",faceType:"Round01",faceColor:"Blue02",textureType:"None",pieceSize:80}),e.jsx("p",{children:"Face"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(l,{pieceType:"eye",botStyle:"Circle",eyeType:"Happy",pieceSize:80}),e.jsx("p",{children:"Eyes"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(l,{pieceType:"mouth",botStyle:"Circle",mouthType:"Smile01",pieceSize:80}),e.jsx("p",{children:"Mouth"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(l,{pieceType:"sides",botStyle:"Circle",sideType:"Antenna01",sidesColor:"Red01",pieceSize:80}),e.jsx("p",{children:"Sides"})]})]})};var d,v,y;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    pieceType: 'top',
    botStyle: 'Circle',
    topType: 'Bulb02',
    topColor: 'BlueGrey500',
    pieceSize: 100
  }
}`,...(y=(v=u.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var m,S,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    pieceType: 'face',
    botStyle: 'Circle',
    faceType: 'Square01',
    faceColor: 'BlueGrey500',
    textureType: 'None',
    pieceSize: 100
  }
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var g,T,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    pieceType: 'eye',
    botStyle: 'Circle',
    eyeType: 'Round',
    pieceSize: 100
  }
}`,...(x=(T=i.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var B,C,h;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    pieceType: 'mouth',
    botStyle: 'Circle',
    mouthType: 'Square01',
    pieceSize: 100
  }
}`,...(h=(C=t.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var b,G,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    pieceType: 'sides',
    botStyle: 'Circle',
    sideType: 'Square',
    sidesColor: 'BlueGrey500',
    pieceSize: 100
  }
}`,...(w=(G=n.parameters)==null?void 0:G.docs)==null?void 0:w.source}}};var R,q,P;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Piece pieceType="top" botStyle="Circle" topType="GlowingBulb01" topColor="Yellow01" pieceSize={80} />
        <p>Top</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Piece pieceType="face" botStyle="Circle" faceType="Round01" faceColor="Blue02" textureType="None" pieceSize={80} />
        <p>Face</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Piece pieceType="eye" botStyle="Circle" eyeType="Happy" pieceSize={80} />
        <p>Eyes</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Piece pieceType="mouth" botStyle="Circle" mouthType="Smile01" pieceSize={80} />
        <p>Mouth</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Piece pieceType="sides" botStyle="Circle" sideType="Antenna01" sidesColor="Red01" pieceSize={80} />
        <p>Sides</p>
      </div>
    </div>
}`,...(P=(q=o.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};const re=["TopPiece","FacePiece","EyePiece","MouthPiece","SidesPiece","AllPieces"];export{o as AllPieces,i as EyePiece,r as FacePiece,t as MouthPiece,n as SidesPiece,u as TopPiece,re as __namedExportsOrder,ue as default};
