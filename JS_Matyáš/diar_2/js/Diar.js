class Diar {
	
    constructor(jazyk = "cs-CZ") {
    	const zaznamyZeStorage = localStorage.getItem("zaznamy");
        this.zaznamy = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
    	this.jazyk = jazyk;
	
    	this.nazevInput = document.getElementById("nazev");
    	this.datumInput = document.getElementById("datum");
    	this.potvrditButton = document.getElementById("potvrdit");
    	this.vypisElement = document.getElementById("seznam-ukolu");
    	
    	this._nastavUdalosti();
    }

    _nastavUdalosti() {
    	this.potvrditButton.onclick = () => { 
			if (this.datumInput.value !== "") {
				const zaznam = new Zaznam(this.nazevInput.value, this.datumInput.value);
				this.zaznamy.push(zaznam);
				this.ulozZaznamy();
				this.vypisZaznamy();
			} else
				alert("Musíte vyplnit datum!");
	    };
    }
    
	seradZaznamy() {
		this.zaznamy.sort(function (zaznam1, zaznam2) {
			return (new Date(zaznam1.datum) - new Date(zaznam2.datum));
		});
	}

	vypisZaznamy() {
		this.seradZaznamy();
		this.vypisElement.innerHTML = "";
		let posledniDatum = null;
		for (const zaznam of this.zaznamy) {		    		     
			if (zaznam.datum !== posledniDatum) {
				const datum = new Date(zaznam.datum).toLocaleDateString(this.jazyk, {
					weekday: "long",
					day: "numeric",
					month: "short",
					year: "numeric"
				});
				this.vypisElement.innerHTML += `<h3>${datum}</h3>`
			}
			posledniDatum = zaznam.datum;

			this.vypisElement.innerHTML += `<h4>${zaznam.nazev}</h4>
			<br>úkol ${!zaznam.splneno ? "ne" : ""}splněn<br>`;
			
			this._pridejTlacitko("Smazat", () => {
				if (confirm("Opravdu si přejete odstranit úkol?")) {
					this.zaznamy = this.zaznamy.filter(z => z !== zaznam); // Ponechá vše co není rovné proměnné zaznam
					this.ulozZaznamy();
					this.vypisZaznamy();
				}
			});
			this._pridejTlacitko("Označit jako " + (zaznam.splneno ? "nesplněný" : "splněný"), () => { 
				zaznam.splneno = !zaznam.splneno;
				this.ulozZaznamy();
				this.vypisZaznamy();
			});
						
			this.vypisElement.innerHtml = `<div class="ukol">` + this.vypisElement.innerHtml  + `</div>`;
		}
	}
	
	_pridejTlacitko(titulek, callback) {
		const button = document.createElement("button");
		button.onclick = callback;
		button.innerText = titulek;
		this.vypisElement.appendChild(button);
	}
		
	ulozZaznamy() {
		localStorage.setItem("zaznamy", JSON.stringify(this.zaznamy));
	}    
    
}

