class Person {
  constructor(name) {
    this.name = name;
    this._connections = [];
  }
  addConnection(person) {
    if (this._connections.includes(person)) return;

    this._connections.push(person);
    person.addConnection(this);
  }
  showConnections(){
    return this._connections;
  }
}




var a = new Person('Vitaliy');
var b = new Person('Roman');
console.log(
  b.showConnections(),// []
  a.addConnection(b),
  a.showConnections(), // [Person a]
  b.showConnections()); // [Person b]
