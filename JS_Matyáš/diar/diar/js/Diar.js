class Diar {
	
    constructor(jazyk = "cs-CZ") {
    	this.zaznamy = [];
    	this.jazyk = jazyk;
	
    	this.nazevInput = document.getElementById("nazev");
    	this.datumInput = document.getElementById("datum");
    	this.potvrditButton = document.getElementById("potvrdit");
    	this.vypisElement = document.getElementById("seznam-ukolu");
    	
    	this.nastavUdalosti();
    }

    nastavUdalosti() {
    	this.potvrditButton.onclick = () => { // this zůstane nyní stále this
		    const zaznam = new Zaznam(this.nazevInput.value, this.datumInput.value);
		    this.zaznamy.push(zaznam);
		    this.vypisZaznamy();
	    };
    }

    vypisZaznamy() {
    	this.vypisElement.innerHTML = "";
    	for (let i = 0; i < this.zaznamy.length; i++) {
		    const zaznam = this.zaznamy[i];
		    this.vypisElement.innerHTML += `<h3>${zaznam.nazev}</h3>kdy: ${zaznam.datum}<br>splněno: ${zaznam.splneno}`;
	    }
    }
    
}

