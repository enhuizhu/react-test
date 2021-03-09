export class ApiService {
  static getAllFlightData() {
    return fetch('/flights.json')
      .then(response => response.json());
  }
}