import { Table, CloseButton } from "react-bootstrap";

export default function Warenkorb() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Warenkorb</h1>
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
                <th><CloseButton disabled /></th>
              </tr>
            </thead>
          </Table>
        </div>
        <div className="col-3 p-2"></div>
      </div>
    </div>
  );
}
