import React from "react";

const Display = ({valor, ...props}) => {
    // otra forma de asignacion por destructuring en la declaracion
    // de la funcion: const Display = ({valor, ...props}) => {
    // let {valor, ...rest} = props; //Asignación por destructuring
    if (typeof valor === "undefined") {
        valor = 0;
    }

    return (
        <div style={{border: "1px solid", margin: 2, padding: 20, backgroundColor: "#eeeeee", textAlign: "right", ...props.style}}>
            <h1>{valor}</h1>
        </div>
    );
};

const Box = () => {
    let n = ["C", "( )", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, ".", "="];
    return n.map((num) => (
        <div key={num} style={{border: "1px solid", margin: 2, display: "inline-flex", paddingBottom: 10, paddingTop: 10, width: "23.3%", backgroundColor: "lightGray", textAlign: "center"}}>
            <h2>{num}</h2>
        </div>
    ));
};

// const Operators = () => {};

const App = () => {
    return (
        <div style={{width: 390, fontFamily: "sans-serif"}}>
            <div style={{padding: 2, border: "1px solid", width: 384}}>
                <Display valor={10} />
                <Box />
            </div>
        </div>
    );
};
export default App;
