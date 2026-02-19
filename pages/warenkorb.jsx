import { Table, CloseButton, Button, Card, CardHeader, CardBody, CardTitle } from "react-bootstrap";
import Image from "next/image";

export default function Warenkorb() {
  return (
    <div>
      <h1>Warenkorb</h1>
      <div className="row mt-4">
        <div className="col-9">
          <Table hover responsive>
            <thead>
              <tr>
                <th>Bild</th>
                <th>Name</th>
                <th></th>
                <th>Menge</th>
                <th>Betrag</th>
                <th>
                  <CloseButton disabled />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image
                    src={"/pictures/products/xbox-series-x.jpg"}
                    alt="Switch"
                    width={50}
                    height={50}
                  />
                </td>
                <td>Cola</td>
                <td>doppelt</td>
                <td>1</td>
                <td>1,99</td>
                <td>
                  <Button className="btn-sm">X</Button>
                </td>
              </tr>
              <tr>
                <td>
                  <Image
                    src={"/pictures/products/playstation5.jpg"}
                    alt="PlayStation 5"
                    width={50}
                    height={50}
                  />
                </td>
                <td>PlayStation 5</td>
                <td>doppelt</td>
                <td>1</td>
                <td>5,99</td>
                <td>
                  <Button className="btn-sm">X</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="col-3 p-2">
          <div className="shadow">
            <Card>
              <CardHeader as="h5">Gesamt</CardHeader>
              <CardBody className="text-center">
                <CardTitle>
                  6,95 EUR
                </CardTitle>
                <Button variant="primary">Zur Kasse</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
