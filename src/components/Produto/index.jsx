import { useContext } from "react";
import { context } from "../../context";

export default function Produto(){
    const {produto, setProduto} = useContext(context)
    return(
        <div>
            Produto: 
            <p>{produto.nome}</p>
            <br />
            <p>{produto.preco}</p>
            <br />
            <p>{produto.descricao}</p>
        </div>
    );
}
