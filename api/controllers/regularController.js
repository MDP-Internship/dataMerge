import People from "../model/people";

export default function regularService(_req, _res) {
  People.find({}).then(function (people) {
    /* find arama yapacağı alan {} hepsini */
    _res.send(people);
  });
}
