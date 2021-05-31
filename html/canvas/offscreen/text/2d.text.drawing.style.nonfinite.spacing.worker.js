// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.nonfinite.spacing
// Description:Testing letter spacing and word spacing with nonfinite inputs
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Testing letter spacing and word spacing with nonfinite inputs");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

_assertSame(ctx.textLetterSpacing, 0, "ctx.textLetterSpacing", "0");
_assertSame(ctx.textWordSpacing, 0, "ctx.textWordSpacing", "0");

function test_word_spacing(value) {
  ctx.textWordSpacing = value;
  ctx.textLetterSpacing = value;
  _assertSame(ctx.textWordSpacing, 0, "ctx.textWordSpacing", "0");
  _assertSame(ctx.textLetterSpacing, 0, "ctx.textLetterSpacing", "0");
}
test_word_spacing(NaN);
test_word_spacing(Infinity);
test_word_spacing(-Infinity);

t.done();

});
done();