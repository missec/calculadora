import React from "react";

const styles = {
    divDisplay: {
        border: "1px solid",
        margin: 2,
        padding: 20,
        backgroundColor: "#eeeeee",
        textAlign: "right"
    },
    divBox: {
        border: "1px solid",
        margin: 2,
        display: "inline-flex",
        paddingBottom: 10,
        paddingTop: 10,
        width: "23.3%",
        backgroundColor: "lightGray",
        justifyContent: "center"
    }
};

const Display = ({label, ...props}) => {
    // otra forma de asignacion por destructuring en la declaracion
    // de la funcion: const Display = ({label, ...props}) => {
    // let {label, ...rest} = props; //Asignación por destructuring
    //console.log({label});
    if (typeof label === "undefined") {
        label = 0;
    }

    return (
        <div style={{...styles.divDisplay, ...props.style}}>
            <h1>{label}</h1>
        </div>
    );
};

const Box = ({callBack}) => {
    const teclas = ["C", "( )", "%", " / ", 7, 8, 9, " x ", 4, 5, 6, " - ", 1, 2, 3, " + ", "+/-", 0, ".", "="];

    return teclas.map((tecla) => (
        <div key={tecla} style={styles.divBox} onClick={() => callBack(tecla)}>
            <h2>{tecla}</h2>
        </div>
    ));
};

// const Operators = () => {};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: 0,
            previous: null
        };
    }

    processar(botao) {
        let {display, previous} = this.state;
        let operador = [" / ", " x ", " - ", " + "];

        if (botao !== "undefined" && operador.indexOf(botao) !== -1) {
            console.log(operador.indexOf(botao));
        }
        switch (botao) {
            case " + ":
                if (previous === "" || previous === "undefined") {
                    display = "+";
                }
                display = "";
                break;
            case " - ":
                previous = display;
                display = "";
                break;
            case " x ":
                previous = display;
                display = "";
                break;
            case " / ":
                previous = display;
                display = "";
                break;
            case " = ":
                display = parseInt(display);
                break;
            default:
                break;

            case "C":
                display = "0";
                previous = "0";
                botao = "";
                break;
        }

        // if (this.isNumber(botao)) {
        //     total = total;
        // }
        previous = display;

        this.setState({
            display: display
        });
    }

    render() {
        const {display} = this.state;

        return (
            <div style={{width: 390, fontFamily: "sans-serif", margin: "7% auto", textAlign: "center"}}>
                <h1>Calculadora</h1>
                <div style={{padding: 2, border: "1px solid", width: 384}}>
                    <Display label={display} />
                    <Box callBack={(tecla) => this.processar(tecla)} />
                </div>
            </div>
        );
    }
}

export default App;

/*creada como una funcion
const App = () => {
    return (
        <div style={{width: 390, fontFamily: "sans-serif", margin: "7% auto", textAlign: "center"}}>
            <h1>Calculadora</h1>
            <div style={{padding: 2, border: "1px solid", width: 384}}>
                <Display valor={10} />
                <Box />
            </div>
        </div>
    );
};*/
