/**
 * @name  de4js
 * @description  JavaScript Deobfuscator and Unpacker
 * @author  Aurealisa Putri <aurealisaputri@gmail.com>
 * @version  1.5.2
 * @copyright  Aurealisa 2019
 * @license  MIT
 */

self.addEventListener('message', function (e) {
    var source = e.data.source;

    self._window = self.window;
    self.window = {};

    self.importScripts('/js/beautify.min.js');

    source = self.window.js_beautify(source, {
        unescape_strings: true,
        jslint_happy: true
    });

    self.window = self._window;


    self.importScripts('/js/highlight.min.js');

    source = self.hljs.highlight('javascript', source).value;

    self.postMessage(source);
});
