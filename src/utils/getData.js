import { range as d3range } from "d3-array";
import { randomNormal as d3randomNormal } from "d3-random";

const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const colors = ["#2176ae", "#57b8ff", "#b66d0d", "#fbb13c", "#fe6847"];
export default (totalPoints = 100) => {
  console.log(d3range(30))
  console.log(d3randomNormal()())
  return d3range(totalPoints).map((d, i) => {
    return { x: d, y: d3randomNormal(0,1)(), color: colors[i%5], name: `${alphabet[d]}-${i}` };
  });
  // return d3range(totalPoints).map((d, i) => {
  //   return {
  //     x: d,
  //     y:
  //   }
  // })
}

