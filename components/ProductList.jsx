import jsondb from "../jsondb/produkte";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="">
      <div className="row row-cols-3">
        {jsondb.produkte.map((produkt) => (
          <div key={produkt.name} className="mt-3 col">
            <Card className="min-h-200">
              <Link
                href={`/produkte/${produkt.url}`}
                passHref
                className="text-decoration-none text-black"
              >
                <Card.Img variant="top" src={produkt.picture} />
              </Link>
              <Card.Body>
                <Link
                  href={`/produkte/${produkt.url}`}
                  passHref
                  className="text-decoration-none text-black"
                >
                  <Card.Title className="fw-bold">{produkt.name}</Card.Title>
                  <Card.Title className="fw-semibold">
                    {produkt.price} €
                  </Card.Title>
                  <Card.Text>{produkt.definition}</Card.Text>
                </Link>
                <Button variant="danger text-white mt-3">zum Warenkorb</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
}
