import{j as s}from"./index-Bci8n7Y0.js";import{m as r}from"./proxy-BV0P_cEU.js";const t=e=>s.jsx(s.Fragment,{children:s.jsx("div",{className:"skills-box",children:s.jsxs(r.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:e.duration,duration:.8,ease:"easeOut"},viewport:{once:!0,amount:.7},children:[s.jsxs("h5",{children:[e.title," ",s.jsx("span",{children:":"})]}),s.jsx("div",{className:"icon-skills",children:e.icons.map(i=>s.jsx("img",{className:"icon-skill",src:`./assets/skills/${i}`,alt:i,loading:"lazy",title:i.replace(/.(svg|png)$/,"")},i))})]})})}),g=()=>{const e=["Html-5.svg","Css-3.svg","Javascript.png","Typescript.png"],i=["Bootstrap.svg","React.js.png","Tailwindcss.png","Redux-toolkit.svg","Ant-design.svg","Motion.png"],n=["Git.svg","Github.svg"],l=["Firebase.svg"],o=["vite.svg"],a=["Adobe Photoshop.svg","Adobe illustrator.svg","Figma.svg"];return s.jsxs("section",{className:"skills",id:"skills",children:[s.jsxs("h1",{className:"title-section",children:[s.jsx("span",{children:"Skills"})," :"]}),s.jsxs("div",{className:"skills-grid",children:[s.jsx(t,{icons:e,title:"Development",duration:.5}),s.jsx(t,{icons:i,title:"Frameworks & Libraries",duration:.5}),s.jsx(t,{icons:n,title:"Version Control & Git",duration:.8}),s.jsx(t,{icons:l,title:"Database",duration:.8}),s.jsx(t,{icons:o,title:"Build Tools",duration:1.1}),s.jsx(t,{icons:a,title:"Design",duration:1.1})]})]})};export{g as default};
