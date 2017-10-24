(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function piano(elemID, opts) {

    this.elemID = elemID
    this.elem = document.getElementById(elemID)
    
    this.defaults = {
        octaves: 2,
        octaveBegin: 3
    }

    this.options = {}
    Object.assign(this.options, this.defaults, opts)
    
    this.createPiano = function () {
        let svg = this.getPianoSVG()
        this.elem.innerHTML = svg
    }

    this.getPianoSVG = function () {
        let boxX = this.options.octaves * 140
        
        let octaveBegin = this.options.octaveBegin
        let html = `
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none" 
            viewBox="0 0 ${boxX} 80" 
            id="piano">
			<g>`;
        for (i = 1; i <= this.options.octaves; i++) {  
            html += this.getTones(octaveBegin)
            octaveBegin++ 
        }
        html += `
            </g>
		</svg>`
        return html
    }

    this.getNoteAndOctave = function (note, octave) {
        return note + octave
    }

    this.currentX = 0
    this.getCurrentX = function (x) {
        return x + this.currentX
    }

    this.getTones = function (octave) {
        let octaveHTML = 
        `
        <rect class="white c" data-note="${this.getNoteAndOctave('c', octave)}" width="20" height="80" x="${this.getCurrentX(0)}" y="0" />
        <rect class="white d" data-note="${this.getNoteAndOctave('d', octave)}" width="20" height="80" x="${this.getCurrentX(20)}" y="0" />
        <rect class="white e" data-note="${this.getNoteAndOctave('e', octave)}" width="20" height="80" x="${this.getCurrentX(40)}" y="0" />
        <rect class="white f" data-note="${this.getNoteAndOctave('f', octave)}" width="20" height="80" x="${this.getCurrentX(60)}" y="0" />
        <rect class="white g" data-note="${this.getNoteAndOctave('g', octave)}" width="20" height="80" x="${this.getCurrentX(80)}" y="0" />
        <rect class="white a" data-note="${this.getNoteAndOctave('a', octave)}" width="20" height="80" x="${this.getCurrentX(100)}" y="0" />
        <rect class="white b" data-note="${this.getNoteAndOctave('b', octave)}" width="20" height="80" x="${this.getCurrentX(120)}" y="0" />
        <rect class="black cs" data-note="${this.getNoteAndOctave('cs', octave)}" width="16" height="50" x="${this.getCurrentX(12)}" y="0" />
        <rect class="black ds" data-note="${this.getNoteAndOctave('ds', octave)}" width="16" height="50" x="${this.getCurrentX(32)}" y="0" />
        <rect class="black fs" data-note="${this.getNoteAndOctave('fs', octave)}" width="16" height="50" x="${this.getCurrentX(72)}" y="0" />
        <rect class="black gs" data-note="${this.getNoteAndOctave('gs', octave)}" width="16" height="50" x="${this.getCurrentX(92)}" y="0" />
        <rect class="black as" data-note="${this.getNoteAndOctave('as', octave)}" width="16" height="50" x="${this.getCurrentX(112)}" y="0" />`
    
        this.currentX+= 140
        return octaveHTML
    }
}

module.exports = piano;

},{}],2:[function(require,module,exports){
var piano = require('./index');

$(document).ready(function () {

    var elemID = 'piano-container';
    var p = new piano(elemID, {
        octaves: 3,
        octaveBegin: 3
    });
    
    p.createPiano();

    $('#piano-container rect').click(function (e) {
        console.log(e.target.dataset)
    })
})
},{"./index":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsInRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJmdW5jdGlvbiBwaWFubyhlbGVtSUQsIG9wdHMpIHtcblxuICAgIHRoaXMuZWxlbUlEID0gZWxlbUlEXG4gICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbUlEKVxuICAgIFxuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICAgIG9jdGF2ZXM6IDIsXG4gICAgICAgIG9jdGF2ZUJlZ2luOiAzXG4gICAgfVxuXG4gICAgdGhpcy5vcHRpb25zID0ge31cbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0cylcbiAgICBcbiAgICB0aGlzLmNyZWF0ZVBpYW5vID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc3ZnID0gdGhpcy5nZXRQaWFub1NWRygpXG4gICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSBzdmdcbiAgICB9XG5cbiAgICB0aGlzLmdldFBpYW5vU1ZHID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYm94WCA9IHRoaXMub3B0aW9ucy5vY3RhdmVzICogMTQwXG4gICAgICAgIFxuICAgICAgICBsZXQgb2N0YXZlQmVnaW4gPSB0aGlzLm9wdGlvbnMub2N0YXZlQmVnaW5cbiAgICAgICAgbGV0IGh0bWwgPSBgXG4gICAgICAgIDxzdmcgXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIFxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAke2JveFh9IDgwXCIgXG4gICAgICAgICAgICBpZD1cInBpYW5vXCI+XG5cdFx0XHQ8Zz5gO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHRoaXMub3B0aW9ucy5vY3RhdmVzOyBpKyspIHsgIFxuICAgICAgICAgICAgaHRtbCArPSB0aGlzLmdldFRvbmVzKG9jdGF2ZUJlZ2luKVxuICAgICAgICAgICAgb2N0YXZlQmVnaW4rKyBcbiAgICAgICAgfVxuICAgICAgICBodG1sICs9IGBcbiAgICAgICAgICAgIDwvZz5cblx0XHQ8L3N2Zz5gXG4gICAgICAgIHJldHVybiBodG1sXG4gICAgfVxuXG4gICAgdGhpcy5nZXROb3RlQW5kT2N0YXZlID0gZnVuY3Rpb24gKG5vdGUsIG9jdGF2ZSkge1xuICAgICAgICByZXR1cm4gbm90ZSArIG9jdGF2ZVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFggPSAwXG4gICAgdGhpcy5nZXRDdXJyZW50WCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4ICsgdGhpcy5jdXJyZW50WFxuICAgIH1cblxuICAgIHRoaXMuZ2V0VG9uZXMgPSBmdW5jdGlvbiAob2N0YXZlKSB7XG4gICAgICAgIGxldCBvY3RhdmVIVE1MID0gXG4gICAgICAgIGBcbiAgICAgICAgPHJlY3QgY2xhc3M9XCJ3aGl0ZSBjXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2MnLCBvY3RhdmUpfVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCI4MFwiIHg9XCIke3RoaXMuZ2V0Q3VycmVudFgoMCl9XCIgeT1cIjBcIiAvPlxuICAgICAgICA8cmVjdCBjbGFzcz1cIndoaXRlIGRcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZCcsIG9jdGF2ZSl9XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjgwXCIgeD1cIiR7dGhpcy5nZXRDdXJyZW50WCgyMCl9XCIgeT1cIjBcIiAvPlxuICAgICAgICA8cmVjdCBjbGFzcz1cIndoaXRlIGVcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZScsIG9jdGF2ZSl9XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjgwXCIgeD1cIiR7dGhpcy5nZXRDdXJyZW50WCg0MCl9XCIgeT1cIjBcIiAvPlxuICAgICAgICA8cmVjdCBjbGFzcz1cIndoaXRlIGZcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZicsIG9jdGF2ZSl9XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjgwXCIgeD1cIiR7dGhpcy5nZXRDdXJyZW50WCg2MCl9XCIgeT1cIjBcIiAvPlxuICAgICAgICA8cmVjdCBjbGFzcz1cIndoaXRlIGdcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZycsIG9jdGF2ZSl9XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjgwXCIgeD1cIiR7dGhpcy5nZXRDdXJyZW50WCg4MCl9XCIgeT1cIjBcIiAvPlxuICAgICAgICA8cmVjdCBjbGFzcz1cIndoaXRlIGFcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnYScsIG9jdGF2ZSl9XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjgwXCIgeD1cIiR7dGhpcy5nZXRDdXJyZW50WCgxMDApfVwiIHk9XCIwXCIgLz5cbiAgICAgICAgPHJlY3QgY2xhc3M9XCJ3aGl0ZSBiXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2InLCBvY3RhdmUpfVwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCI4MFwiIHg9XCIke3RoaXMuZ2V0Q3VycmVudFgoMTIwKX1cIiB5PVwiMFwiIC8+XG4gICAgICAgIDxyZWN0IGNsYXNzPVwiYmxhY2sgY3NcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnY3MnLCBvY3RhdmUpfVwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCI1MFwiIHg9XCIke3RoaXMuZ2V0Q3VycmVudFgoMTIpfVwiIHk9XCIwXCIgLz5cbiAgICAgICAgPHJlY3QgY2xhc3M9XCJibGFjayBkc1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdkcycsIG9jdGF2ZSl9XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjUwXCIgeD1cIiR7dGhpcy5nZXRDdXJyZW50WCgzMil9XCIgeT1cIjBcIiAvPlxuICAgICAgICA8cmVjdCBjbGFzcz1cImJsYWNrIGZzXCIgZGF0YS1ub3RlPVwiJHt0aGlzLmdldE5vdGVBbmRPY3RhdmUoJ2ZzJywgb2N0YXZlKX1cIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiNTBcIiB4PVwiJHt0aGlzLmdldEN1cnJlbnRYKDcyKX1cIiB5PVwiMFwiIC8+XG4gICAgICAgIDxyZWN0IGNsYXNzPVwiYmxhY2sgZ3NcIiBkYXRhLW5vdGU9XCIke3RoaXMuZ2V0Tm90ZUFuZE9jdGF2ZSgnZ3MnLCBvY3RhdmUpfVwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCI1MFwiIHg9XCIke3RoaXMuZ2V0Q3VycmVudFgoOTIpfVwiIHk9XCIwXCIgLz5cbiAgICAgICAgPHJlY3QgY2xhc3M9XCJibGFjayBhc1wiIGRhdGEtbm90ZT1cIiR7dGhpcy5nZXROb3RlQW5kT2N0YXZlKCdhcycsIG9jdGF2ZSl9XCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjUwXCIgeD1cIiR7dGhpcy5nZXRDdXJyZW50WCgxMTIpfVwiIHk9XCIwXCIgLz5gXG4gICAgXG4gICAgICAgIHRoaXMuY3VycmVudFgrPSAxNDBcbiAgICAgICAgcmV0dXJuIG9jdGF2ZUhUTUxcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGlhbm87XG4iLCJ2YXIgcGlhbm8gPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBlbGVtSUQgPSAncGlhbm8tY29udGFpbmVyJztcbiAgICB2YXIgcCA9IG5ldyBwaWFubyhlbGVtSUQsIHtcbiAgICAgICAgb2N0YXZlczogMyxcbiAgICAgICAgb2N0YXZlQmVnaW46IDNcbiAgICB9KTtcbiAgICBcbiAgICBwLmNyZWF0ZVBpYW5vKCk7XG5cbiAgICAkKCcjcGlhbm8tY29udGFpbmVyIHJlY3QnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0KVxuICAgIH0pXG59KSJdfQ==
