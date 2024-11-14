const parent=document.getElementById("root");
console.log(parent);
const root=ReactDOM.createRoot(parent);
//const h2=React.createElement("h2",{style:{color:'cyan'}},"Hello react js");
//root.render(h2);
//const li1=React.createElement("li",{},"orange");
//const li2=React.createElement("li",{},"apple");
//const ul=React.createElement("ul",{},li1,li2);
//const div=React.createElement("div",{style:{backgroudColor:'cyan'}},h2,ul);

//JSX
const h2=React.createElement("h2",{},"Heading tag");
const h21=<h2>Hello JSX in JS</h2>;
const li1=<li>orange</li>;
const li2=<li>apple</li>;
const li3=<li>banana</li>;
const li4=<li>guava</li>;
const ul=<ul style={{color:'red'}}>{li1}{li2}{li3}{li4}</ul>;
const container=(
    <div>
        <div>{ul}</div>
        <div>{h21}</div>

    </div>
);
root.render(container);