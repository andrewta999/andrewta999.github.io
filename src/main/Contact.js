import contacts from "../data/contact";
import Table from "../component/Table";

export default function Contact() {
  return (
    <div className="Contact">
      <Table data={contacts} />
    </div>
  );
}
