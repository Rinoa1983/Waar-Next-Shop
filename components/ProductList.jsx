import jsondb from "../jsondb/products";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="">
      <div className="row row-cols-3">
        {jsondb.products.map((product) => (
          <div key={product.name} className="mt-3 col">
            <Card className="mb-3 min-h-200">
              <Link
                href={`/products/${product.url}`}
                passHref
                className="text-decoration-none text-black"
              >
                <Card.Img variant="top" src={product.picture} className="h-full w-full object-cover"/>
              </Link>
              <div className="grow">
              <Card.Body>
                <Link
                  href={`/products/${product.url}`}
                  passHref
                  className="text-decoration-none text-black"
                >
                  <Card.Title className="fw-bold">{product.name}</Card.Title>
                  <Card.Title className="fw-semibold">
                    {product.price} €
                  </Card.Title>
                  <Card.Text>{product.definition}</Card.Text>
                </Link>
                <Button variant="danger text-white mt-3">zum Warenkorb</Button>
              </Card.Body>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}
