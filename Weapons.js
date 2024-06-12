import EldenRingAPIClient from "./EldenRingAPIClient.js";
export default class Weapons extends EldenRingAPIClient { 
  constructor() {
    super("weapons")
  }
  viewWeapons() {
    console.table(this.data)
  }
}