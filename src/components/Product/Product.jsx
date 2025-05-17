const Product = ({ object, key }) => {
    console.log("Products from Product Component:", object)
    return (
        <article className="rounded border w-[80%] py-3" key={key}>
            <h2><span>Nombre:</span> {object.name} </h2>
            <h2><span>Costo:</span> <span className="text-green-600">${object.cost}</span> </h2>
        </article>
    );
}

export default Product;
