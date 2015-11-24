var Octane = require("./lib/octane/base.js");

// Octane requires these classes to be globals.
global.BenchmarkSuite = Octane.BenchmarkSuite;
global.Benchmark = Octane.Benchmark;
global.BenchmarkResult = Octane.BenchmarkResult;

module.exports = {
  Octane: Octane,
  Box2D: require("./lib/octane/box2d.js"),
  RayTrace: require("./lib/octane/raytrace.js"),
};
