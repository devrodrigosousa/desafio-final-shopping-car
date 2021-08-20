import React, { Component } from "react";
import styled, {createGlobalStyle} from "styled-components";
import ImgAdd from "./assets/add.svg";
import ImgRmv from "./assets/remove.svg"

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
`
const Container = styled.section`
display: flex;
padding: 1.5rem;
`
const BoxItems = styled.div`
display: flex;
flex-wrap: wrap;
width: 55vw;
height: 30vw;
`
const Card = styled.section`
border: solid 2px #ececec;
margin: 0.6rem;
border-radius: 0.5rem;
width: 12vw;
opacity: ${ (props) => props.desativado ? 0.5 : 1};
`
//props.desativado é o nome da props apenas, que é aporra do mesmo nome que a
// propriedade do state

const CardHeader = styled.div`
display: flex;
justify-content: space-between;
background-color: #ededed;
`
const Card__title = styled.div`
padding: 0.3rem;
font-size: 1.2rem;
font-weight: 700;
color: #363738; 
`
const BtnAdd = styled.button`
outline: none;
border: none ;

`
const CardList = styled.ul`
height: 7rem;
padding: 0.5rem;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const BoxShop = styled.div`
overflow: auto;
width: 40vw;
border: 2px solid #f0f0f0;
height: 35vw;
display: flex;
flex-direction: column;
align-items: center;
`
const CardShop = styled.div`
width: 30vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0.5rem;
border: 2px solid #5bc0de;
border-radius: 0.3rem;
`
const ShopHeader = styled.div`
background-color: #5bc0de;
width: 100%;
display: flex;
justify-content: space-between;
color: #ffffff;
padding: 0 1rem 0 1rem;
`
const ShopTitle = styled.h2`
font-size: 1rem;
padding: 0.3rem;
`
const BtnRmv = styled.button`
outline: none;
border: none;
background-color: #5bc0de;
`
const ShopList = styled.ul`
display: flex;
justify-content: space-around;
width: 100%;
padding: 0.5rem;
`
const Count = styled.div`
display: flex;
justify-content: space-between;
`

//react eu não altero nada, eu modifico.
//métodos do array reactjs (filter, concat, map) não altera, mas substituem.

class Main extends Component{
    state = {
        carros: [
            {
            nome: "Jetta",
            montadora: "Volkswagen",
            preço: 144000,
            tipo: "Sedan",
            id: 1,
            desativado: false
        },
        {
            nome: "Polo",
            montadora: "Volkswagen",
            preço: 70000,
            tipo: "Hatch",
            id: 2,
            desativado: false
        },
        {
            nome: "T-Cross",
            montadora: "Volkswagen",
            preço: 123000,
            tipo: "SUV",
            id: 3,
            desativado: false
        },
        {
            nome: "Tiguan R-line",
            montadora: "Volkswagen",
            preço: 146000,
            tipo: "SUV",
            id: 4,
            desativado: false
        },
        {
            nome: "Civic",
            montadora: "Honda",
            preço: 115000,
            tipo: "Sedan",
            id: 5,
            desativado: false
        },
        {
            nome: "Corolla",
            montadora: "Toyota",
            preço: 110000,
            tipo: "Sedan",
            id: 6,
            desativado: false
        },
        {
            nome: "Corolla Cross",
            montadora: "Toyota",
            preço: 184000,
            tipo: "SUV",
            id: 7,
            desativado: false
        },
        {
            nome: "Compass",
            montadora: "Jeep",
            preço: 132000,
            tipo: "SUV",
            id: 8,
            desativado: false
        },
        {
            nome: "Golf GTI",
            montadora: "Volkswagen",
            preço: 138000,
            tipo: "Hatch",
            id: 9,
            desativado: false
        },
        ],
        carrosComprados: []
    }

    //para a função de somar ps: não precisava da função.
    //iremos criar um state com uma  lista, uma função de jogar todos os valores adicionados para dentro desse state, e por último fazer a soma dos valores dentro desse novo state e depois renderizar ----- ps: não precisa criar um nova array, pq no reduce a gente consegue fazer a soma de uma propriedade específica.

    //state, array, function

    //carro poderia ser chamado de qualquer coisa pq ele é apenas o parâmetro da função. 
    //Esse parâmetro vai ser concatenado 1á lista de carros comprados

    //usar componentDidMount (pesquisar melhor)

    componentDidMount = () => {
        this.setState({
            carros: this.state.carros
        })
    }

addCart = (car) => {
/*      console.log("parâmetro da função: ", car);
        console.log("carros comprados: ", this.state.carrosComprados);
        console.log("carros somados", this.state.somaCarros) */
        /* const verify = this.state.carrosComprados.map((item) => item.id)
        if(verify.includes(car.id)){

        } else{ */
            
        this.setState({
            carrosComprados: this.state.carrosComprados.concat(car)
            })
            this.setState({
                carros: this.state.carros.map((item) => {
                    if(item.id == car.id){
                        //  alert("Coé")
                        return {
                            ...item,
                            desativado: true
                        }
    
                        //  alert (JSON.stringify(item))
                    } else{
                        return item
                    }
                })
            }, () => console.log(this.state))
        /* } */

    }

// perceba a função rmvCar. Quando colocarmos id dentro da função rmv 
//filter retorna booleano, o que é true fica, o que é false vai embora

rmvCar = (id) =>{
    this.setState({
        carrosComprados: this.state.carrosComprados.filter((item) => {
        return item.id !== id
        })
    })
    this.setState({
        carros: this.state.carros.map((item) => {
            if(item.id == id){
                return {
                    ...item,
                    desativado: false
                }
            } else {
                return item
            }
        })
    })
}

// Quando formos passar parâmetros nesses On da vida kkkk (onChange, Onclick e etc.) precisamos dar uma burlada no reactjs, não podemos passar diretamente a função com o parâmetro, precisamos criar uma função anônima para podermos passar outra função

rmvAll = () => {
    this.setState({
        carrosComprados: [],
        carros: this.state.carros.map((item) => {
            return {
                    ...item,
                    desativado: false
                }
            }
    )})
}

    render(){
        return(
            <Container>
            <BoxItems>
                {this.state.carros.map((item, index) =>(
                <Card key={index}
                desativado={item.desativado}
                >
                    <CardHeader>
                    <Card__title>{item.nome}</Card__title>
                    <BtnAdd onClick={ () => this.addCart(item)}
                    disabled={item.desativado}
                    ><img src={ImgAdd}alt="botão de adicionar" /></BtnAdd>
                    </CardHeader>
                    <CardList>
                        <li> <b>Montador: </b>{item.montadora}</li>
                        <li> <b>Preço: </b>{item.preço.toLocaleString("pt-BR", {style: "currency", currency: "BRL", currencyDisplay:"symbol"})}</li>
                        <li> <b>Tipo: </b>{item.tipo}</li>
                       {/*  <li>valor: {JSON.stringify(carro.disable)}</li> */}
                    </CardList>
                </Card>
                ))}
            </BoxItems>
            <div>
                <BoxShop>
                {this.state.carrosComprados.map((carro, index) => (
                <CardShop key={index}>
                    <ShopHeader>
                        <ShopTitle>{carro.nome}</ShopTitle>
                        <BtnRmv onClick={() => this.rmvCar(carro.id)}><img src={ImgRmv} alt="botão de remover" /></BtnRmv>
                    </ShopHeader>
                    <ShopList>
                        <li> <b>Preço: </b>{carro.preço.toLocaleString("pt-BR", {style: "currency", currency: "BRL", currencyDisplay:"symbol"})}</li>
                        <li> <b>Tipo: </b>{carro.tipo}</li>
                    </ShopList>
                </CardShop>))}
                </BoxShop>
                    <Count>
                        <h2>Total: </h2>
                        <h2>{this.state.carrosComprados.reduce((a, b) =>
        a + b.preço, 0).toLocaleString("pt-BR", {style: "currency", currency: "BRL", currencyDisplay: "symbol"}) }</h2>
                        <button onClick={this.rmvAll} >Limpar Tudo</button>
                    </Count>
            </div>
            <GlobalStyle />
            </Container>
        )
    }
}

export default Main;
