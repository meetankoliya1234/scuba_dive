AFRAME.registerComponent("coin", {
    init: function(){
        for(var i = 1; i <= 20; i++){
            var id = `coin${i}`

            var posX = (Math.random() * 100 + (-5));      
            var posY = 0;
            var posZ = (Math.random() * 60 + (-40));

            var position = { x: posX, y: posY, z: posZ };

            this.createCoin(id, position);  
        }
    },

    createCoin: function(id, position){
        var terrainEl = document.querySelector("#terrain");
        var coinEl = document.createElement("a-entity");

        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);

        coinEl.setAttribute("gltf-model", "./assets/models/coin/scene.gltf");
        coinEl.setAttribute("scale", {x: 0.1, y: 0.1, z: 0.1});
        coinEl.setAttribute("animation-mixer", {});

        terrainEl.appendChild(coinEl);
    }
})