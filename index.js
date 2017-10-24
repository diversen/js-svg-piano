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
