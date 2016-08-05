MMU = {
	// main memory
	RAM: null,

	// video memory
	VRAM: null,

	init: function() {
		this.RAM = new Uint8Array(8192);
		this.VRAM = new Uint8Array(8192);
	},
};
