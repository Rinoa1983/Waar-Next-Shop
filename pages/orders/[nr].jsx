import {
  Table,
  Spinner,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "react-bootstrap";
import { useRouter } from "next/router";

export default function Bestellung() {
  const router = useRouter();
  const { nr } = router.query;
  return (
    <div>
      <h1>Bestellstatus</h1>
      <div className="row mt-4">
        <div className="col-9">
          <Table hover responsive>
            <thead>
              <tr>
                <th>Bestell Nr.</th>
                <th>Kunde</th>
                <th>Adresse</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{nr}</td>
                <td>Guybrush</td>
                <td>Monkey Island</td>
                <td>
                  <span>Zubereitung</span>
                  <Spinner animation="border" variant="success" size="sm" />
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
                <CardTitle>6,95 EUR</CardTitle>
                <Button variant="success disabled">bezahlt</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
