#!/usr/bin/env node

const fs = require("fs");

const patchObject = JSON.parse(fs.readFileSync("../patchers/MIDI CC knob 1.maxpat", "utf8"));
const boxes = patchObject.patcher.boxes;
const numbox = boxes.find(boxObject => boxObject.box.varname === "controller-1");
const dial = boxes.find(boxObject => boxObject.box.varname === "value-1");

for (var i = 2; i <= 8; i++) {
  var attributes = numbox.box.saved_attribute_attributes.valueof;
  attributes.parameter_longname = `Controller ${i}`;
  attributes.parameter_shortname = attributes.parameter_longname;
  numbox.box.varname = `controller-${i}`;

  attributes = dial.box.saved_attribute_attributes.valueof;
  attributes.parameter_longname = `Value ${i}`;
  attributes.parameter_shortname = attributes.parameter_longname;
  dial.box.varname = `value-${i}`;

  fs.writeFileSync(`../patchers/MIDI CC knob ${i}.maxpat`, JSON.stringify(patchObject));
}
