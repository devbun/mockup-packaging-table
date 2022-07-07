import './App.css';
import Draggable from "react-draggable";

var orderlist = [];

class Order {
  constructor(ship_date, order_number, medication, patient_name, submitted_by, confirmed_on, idee) {
    this.ship_date = ship_date;
    this.order_number = order_number;
    this.medication = medication;
    this.patient_name = patient_name;
    this.submitted_by = submitted_by;
    this.confirmed_on = confirmed_on;
    this.idee = idee;
    this.position = orderlist.length + 1

    orderlist.push(this);
  }
}

//notes:
//Make it so that dragging left and right will make it change tables
// Below "TODAY" table we have "WEEK" table?

const placeholder1 = new Order({day: 14, month: 7, year: 2022}, 'A061412', '2 Monovisc', 'Forrest Gump', 'Genghis Khan', {day: 10, month: 7, year: 2022}, 1)
const placeholder2 = new Order({day: 13, month: 7, year: 2022}, 'A044345', '90 Wellbutrin', 'Donnie Darko', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 2)
const placeholder3 = new Order({day: 17, month: 7, year: 2022}, 'S025346', '3 Ventolin', 'Erin Brokovich', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 3)
const placeholder4 = new Order({day: 17, month: 7, year: 2022}, 'E024452', '90 Myrbetriq', 'Edward Scissorhands', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 4)
const placeholder5 = new Order({day: 14, month: 7, year: 2022}, 'A013343', '180 Eliquis', 'Mad Max', 'Genghis Khan', {day: 10, month: 7, year: 2022}, 5)
const placeholder6 = new Order({day: 14, month: 7, year: 2022}, 'A061412', '2 Monovisc', 'Forrest Gump', 'Genghis Khan', {day: 10, month: 7, year: 2022}, 1)
const placeholder7 = new Order({day: 13, month: 7, year: 2022}, 'A044345', '90 Wellbutrin', 'Donnie Darko', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 2)
const placeholder8 = new Order({day: 17, month: 7, year: 2022}, 'S025346', '3 Ventolin', 'Erin Brokovich', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 3)
const placeholder9 = new Order({day: 17, month: 7, year: 2022}, 'E024452', '90 Myrbetriq', 'Edward Scissorhands', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 4)
const placeholder10 = new Order({day: 14, month: 7, year: 2022}, 'A013343', '180 Eliquis', 'Mad Max', 'Genghis Khan', {day: 10, month: 7, year: 2022}, 5)
const placeholder11 = new Order({day: 14, month: 7, year: 2022}, 'A061412', '2 Monovisc', 'Forrest Gump', 'Genghis Khan', {day: 10, month: 7, year: 2022}, 1)
const placeholder12 = new Order({day: 13, month: 7, year: 2022}, 'A044345', '90 Wellbutrin', 'Donnie Darko', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 2)
const placeholder13 = new Order({day: 17, month: 7, year: 2022}, 'S025346', '3 Ventolin', 'Erin Brokovich', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 3)
const placeholder14 = new Order({day: 17, month: 7, year: 2022}, 'E024452', '90 Myrbetriq', 'Edward Scissorhands', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 4)
const placeholder15 = new Order({day: 14, month: 7, year: 2022}, 'A013343', '180 Eliquis', 'Mad Max', 'Genghis Khan', {day: 10, month: 7, year: 2022}, 5)
const placeholder16 = new Order({day: 14, month: 7, year: 2022}, 'A061412', '2 Monovisc', 'Forrest Gump', 'Genghis Khan', {day: 10, month: 7, year: 2022}, 1)
const placeholder17 = new Order({day: 13, month: 7, year: 2022}, 'A044345', '90 Wellbutrin', 'Donnie Darko', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 2)
const placeholder18 = new Order({day: 17, month: 7, year: 2022}, 'S025346', '3 Ventolin', 'Erin Brokovich', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 3)
const placeholder19 = new Order({day: 17, month: 7, year: 2022}, 'E024452', '90 Myrbetriq', 'Edward Scissorhands', 'Abe Lincoln', {day: 11, month: 7, year: 2022}, 4)

console.log(orderlist)

function Entry({  order  }) {
return(
  <Draggable grid={[10, 10]} axis='y'> 
    <div className="grid-container">
      <div className="grid-item">{order.position}</div> {/* todo change this to index of */}
      <div className="grid-item">{order.ship_date.day} / {order.ship_date.month}</div>
      <div className="grid-item">{order.order_number}</div>
      <div className="grid-item">{order.medication}</div>
      <div className="grid-item">{order.patient_name}</div>
      <div className="grid-item">{order.confirmed_on.day} / {order.confirmed_on.month}</div>
      <div className="grid-item">{order.submitted_by}</div>
      <div className="grid-item">Edit button, etc.</div>
    </div>
  </Draggable>
)
}

function App() {

  //state

  //drag handling
    //null = remove from sate
    //or reorder

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="working-head">
        <span className="working-title">
          Working Area
        </span>

        <div className="working-buttons">
        <span className="btn btn-export" onClick={() => alert('This will copy a list of the names to the clipboard which an AHK script can then use to print off labels in Kroll')}>
            Export
          </span>
          <span className="btn btn-print" onClick={() => alert('This will print off prescriptions signed and stamped')}>
            Print
          </span>
          <span className="btn btn-confirm" onClick={() => alert('This will confirm all the orders in the Working Area')}>
            Confirm
          </span>
        </div>
      </div>

      <div className="grid-container">
          <div className="grid-item grid-head">Priority</div>
          <div className="grid-item grid-head">Ship By Date</div>
          <div className="grid-item grid-head">Order Number</div>
          <div className="grid-item grid-head">Medication</div>
          <div className="grid-item grid-head">Patient Name</div>
          <div className="grid-item grid-head">Confirmed On</div>
          <div className="grid-item grid-head">Submitted By</div>
          <div className="grid-item grid-head">Actions</div>
        </div>

      <div className="working-area" id="working-area">

      </div>

      <div className="grid-holder">
        <div className="grid-container">
          <div className="grid-item grid-head">Priority</div>
          <div className="grid-item grid-head">Ship By Date</div>
          <div className="grid-item grid-head">Order Number</div>
          <div className="grid-item grid-head">Medication</div>
          <div className="grid-item grid-head">Patient Name</div>
          <div className="grid-item grid-head">Confirmed On</div>
          <div className="grid-item grid-head">Submitted By</div>
          <div className="grid-item grid-head">Actions</div>
        </div>

    <div className="grid-content">
      {orderlist.map((e) => {
              return (
                <Entry order={e} />
              )
            })}
    </div>

      </div>
    </div>
  );
}

export default App;
